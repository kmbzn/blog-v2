```
// bptree1/src/bpt.c

#include "bpt.h"

H_P * hp;
page * rt = NULL; 
int fd = -1; 

// --- File I/O & Page Management ---

H_P * load_header(off_t off) {
    H_P * newhp = (H_P*)calloc(1, sizeof(H_P));
    if (sizeof(H_P) > pread(fd, newhp, sizeof(H_P), 0)) {
        free(newhp);
        return NULL;
    }
    return newhp;
}

page * load_page(off_t off) {
    page* load = (page*)calloc(1, sizeof(page));
    if (sizeof(page) > pread(fd, load, sizeof(page), off)) {
        free(load);
        return NULL;
    }
    return load;
}

int open_table(char * pathname) {
    // 1. 파일 생성 시도 (존재하지 않을 경우)
    fd = open(pathname, O_RDWR | O_CREAT | O_EXCL | O_SYNC, 0775);
    hp = (H_P *)calloc(1, sizeof(H_P));
    
    if (fd > 0) {
        hp->fpo = 0;
        hp->num_of_pages = 1;
        hp->rpo = 0;
        pwrite(fd, hp, sizeof(H_P), 0);
        free(hp);
        hp = load_header(0);
        return 0;
    }
    
    // 2. 기존 파일 열기
    fd = open(pathname, O_RDWR | O_SYNC);
    if (fd > 0) {
        if (sizeof(H_P) > pread(fd, hp, sizeof(H_P), 0)) {
            free(hp);
            return -1;
        }
        if (hp->rpo != 0) {
            rt = load_page(hp->rpo);
        }
        return 0;
    }
    
    free(hp);
    return -1;
}

// 새 페이지 할당 (Free List 재사용 또는 파일 확장)
off_t new_page() {
    off_t newp;
    page * np;
    
    // 1. Free Page 재사용
    if (hp->fpo != 0) {
        newp = hp->fpo;
        np = load_page(newp);
        hp->fpo = np->parent_page_offset; // Free List Head 갱신
        pwrite(fd, hp, sizeof(H_P), 0);
        free(hp);
        hp = load_header(0);
        free(np);
        freetouse(newp); // 페이지 내용 초기화
        return newp;
    }
    
    // 2. 파일 끝(EOF) 확장
    newp = lseek(fd, 0, SEEK_END);
    reset(newp); // 페이지 초기화
    hp->num_of_pages++;
    pwrite(fd, hp, sizeof(H_P), 0);
    free(hp);
    hp = load_header(0);
    return newp;
}

// 페이지 초기화 (0으로 채움)
void reset(off_t off) {
    page * reset = (page*)calloc(1, sizeof(page));
    pwrite(fd, reset, sizeof(page), off);
    free(reset);
}

// 페이지 초기화 (Free List에서 꺼낼 때)
void freetouse(off_t fpo) {
    page * reset = load_page(fpo);
    reset->parent_page_offset = 0;
    reset->is_leaf = 0;
    reset->num_of_keys = 0;
    reset->next_offset = 0;
    pwrite(fd, reset, sizeof(page), fpo);
    free(reset);
}

// 페이지 반납 (Free List에 추가)
void usetofree(off_t wbf) {
    page * utf = load_page(wbf);
    utf->parent_page_offset = hp->fpo; // 기존 Head를 가리킴
    utf->is_leaf = 0;
    utf->num_of_keys = 0;
    utf->next_offset = 0;
    pwrite(fd, utf, sizeof(page), wbf);
    free(utf);
    
    hp->fpo = wbf; // Head 갱신
    pwrite(fd, hp, sizeof(H_P), 0);
    free(hp);
    hp = load_header(0);
}

int cut(int length) {
    if (length % 2 == 0) return length / 2;
    else return length / 2 + 1;
}

// 새 DB 파일 시작 (Root 생성)
void start_new_file(record rec) {
    off_t ro = new_page();
    hp->rpo = ro;
    pwrite(fd, hp, sizeof(H_P), 0);
    free(hp);
    hp = load_header(0);

    rt = load_page(ro);
    rt->num_of_keys = 1;
    rt->is_leaf = 1;
    rt->parent_page_offset = 0;
    rt->records[0] = rec;
    pwrite(fd, rt, sizeof(page), hp->rpo);
    free(rt);
    rt = load_page(hp->rpo);
}

// --- Find Operation ---

// Key가 위치한 Leaf Page 탐색
off_t find_leaf(int64_t key) {
    if (hp->rpo == 0) return 0;
    
    off_t current_offset = hp->rpo;
    page* p = NULL;
    
    while (current_offset != 0) {
        p = load_page(current_offset);
        if (p == NULL) return 0;

        if (p->is_leaf) {
            free(p);
            return current_offset;
        } else {
            int i = 0;
            while (i < p->num_of_keys && key >= p->b_f[i].key) {
                i++;
            }
            // 왼쪽 포인터 결정 (one more page vs b_f[i])
            if (i == 0) current_offset = p->next_offset;
            else current_offset = p->b_f[i - 1].p_offset;
            free(p);
        }
    }
    return 0;
}

// Find API
char * db_find(int64_t key) {
    off_t leaf_offset = find_leaf(key);
    if (leaf_offset == 0) return NULL;
    
    page* p = load_page(leaf_offset);
    if (p == NULL) return NULL;

    for (int i = 0; i < p->num_of_keys; i++) {
        if (p->records[i].key == key) {
            char* ret_val = (char*)calloc(1, 120);
            if (ret_val == NULL) { free(p); return NULL; }
            memcpy(ret_val, p->records[i].value, 120);
            free(p);
            return ret_val;
        }
    }
    free(p);
    return NULL;
}

// --- Insert Operation ---

// Leaf Page에 단순 삽입 (공간 있음)
int insert_into_leaf(off_t leaf_offset, record rec) {
    page* p = load_page(leaf_offset);
    if (p == NULL) return -1;

    int i = 0;
    while (i < p->num_of_keys && p->records[i].key < rec.key) {
        i++;
    }
    
    for (int j = p->num_of_keys; j > i; j--) {
        p->records[j] = p->records[j - 1];
    }
    
    p->records[i] = rec;
    p->num_of_keys++;
    pwrite(fd, p, sizeof(page), leaf_offset);
    free(p);
    return 0;
}

// Leaf Page 분할 후 삽입
int insert_into_leaf_after_splitting(off_t leaf_offset, record rec) {
    off_t new_leaf_offset = new_page();
    page* old_leaf = load_page(leaf_offset);
    page* new_leaf = load_page(new_leaf_offset);
    new_leaf->is_leaf = 1;

    // 1. 임시 버퍼에 정렬하여 삽입
    record temp_records[LEAF_MAX + 1];
    int i = 0, j = 0;
    while (i < LEAF_MAX && old_leaf->records[i].key < rec.key) {
        temp_records[i] = old_leaf->records[i];
        i++;
    }
    temp_records[i] = rec;
    for (j = i + 1; j <= LEAF_MAX; j++) {
        temp_records[j] = old_leaf->records[j - 1];
    }

    // 2. 분할 (Split)
    int split = cut(LEAF_MAX + 1);
    
    // 3. Old Page 갱신
    old_leaf->num_of_keys = split;
    for (i = 0; i < split; i++) {
        old_leaf->records[i] = temp_records[i];
    }
    
    // 4. New Page 갱신
    new_leaf->num_of_keys = (LEAF_MAX + 1) - split;
    j = 0;
    for (i = split; i <= LEAF_MAX; i++) {
        new_leaf->records[j++] = temp_records[i];
    }
    
    // 5. Link 연결 (Old -> New)
    new_leaf->next_offset = old_leaf->next_offset;
    old_leaf->next_offset = new_leaf_offset;
    new_leaf->parent_page_offset = old_leaf->parent_page_offset;

    pwrite(fd, old_leaf, sizeof(page), leaf_offset);
    pwrite(fd, new_leaf, sizeof(page), new_leaf_offset);
    free(old_leaf);
    free(new_leaf);

    // 6. 부모에 New Page Key 삽입
    new_leaf = load_page(new_leaf_offset);
    int64_t new_key = new_leaf->records[0].key;
    free(new_leaf);
    
    return insert_into_parent(leaf_offset, new_key, new_leaf_offset);
}

// Internal Page 단순 삽입
int insert_into_internal(off_t parent_po, int left_index, int64_t key, off_t right_po) {
    page* parent = load_page(parent_po);
    
    for (int i = parent->num_of_keys; i > left_index + 1; i--) {
        parent->b_f[i] = parent->b_f[i - 1];
    }
    
    parent->b_f[left_index + 1].key = key;
    parent->b_f[left_index + 1].p_offset = right_po;
    parent->num_of_keys++;
    
    pwrite(fd, parent, sizeof(page), parent_po);
    free(parent);
    return 0;
}

// Internal Page 분할 후 삽입
int insert_into_internal_after_splitting(off_t old_page_po, int left_index, int64_t key, off_t right_po) {
    I_R temp_entries[INTERNAL_MAX + 1];
    page* old_page = load_page(old_page_po);
    off_t temp_first_po = old_page->next_offset;
    
    // 1. 임시 버퍼에 정렬 및 삽입
    int i = 0, j = 0;
    for (i = 0; i < left_index + 1; i++) temp_entries[i] = old_page->b_f[i];
    temp_entries[i].key = key;
    temp_entries[i].p_offset = right_po;
    for (j = i + 1; j <= INTERNAL_MAX; j++) temp_entries[j] = old_page->b_f[j - 1];

    // 2. 분할 및 K_prime(부모로 올릴 키) 선정
    int split_index = cut(INTERNAL_MAX + 1);
    int64_t k_prime = temp_entries[split_index].key;

    // 3. Old Page 갱신
    old_page->num_of_keys = split_index;
    old_page->next_offset = temp_first_po;
    for (i = 0; i < split_index; i++) old_page->b_f[i] = temp_entries[i];

    // 4. New Page 생성 및 갱신
    off_t new_page_po = new_page();
    page* new_page = load_page(new_page_po);
    new_page->is_leaf = 0;
    new_page->next_offset = temp_entries[split_index].p_offset; // K_prime의 오른쪽 자식이 New Page의 첫 포인터
    new_page->num_of_keys = (INTERNAL_MAX + 1) - (split_index + 1);
    
    j = 0;
    for (i = split_index + 1; i <= INTERNAL_MAX; i++) new_page->b_f[j++] = temp_entries[i];

    // 5. 자식들의 부모 포인터 갱신
    page* child = load_page(new_page->next_offset);
    child->parent_page_offset = new_page_po;
    pwrite(fd, child, sizeof(page), new_page->next_offset);
    free(child);
    
    for (i = 0; i < new_page->num_of_keys; i++) {
        child = load_page(new_page->b_f[i].p_offset);
        child->parent_page_offset = new_page_po;
        pwrite(fd, child, sizeof(page), new_page->b_f[i].p_offset);
        free(child);
    }

    new_page->parent_page_offset = old_page->parent_page_offset;
    pwrite(fd, old_page, sizeof(page), old_page_po);
    pwrite(fd, new_page, sizeof(page), new_page_po);
    free(old_page);
    free(new_page);

    return insert_into_parent(old_page_po, k_prime, new_page_po);
}

// 부모에 Key 삽입 (재귀)
int insert_into_parent(off_t left_po, int64_t key, off_t right_po) {
    page* left = load_page(left_po);
    off_t parent_po = left->parent_page_offset;
    free(left);

    // Case 1: 부모 없음 (새 Root 생성)
    if (parent_po == 0) {
        insert_into_new_root(left_po, key, right_po);
        return 0;
    }

    // Case 2: 부모 존재
    int left_index = get_left_index(parent_po, left_po);
    page* parent = load_page(parent_po);

    if (parent->num_of_keys < INTERNAL_MAX) {
        free(parent);
        return insert_into_internal(parent_po, left_index, key, right_po);
    } else {
        free(parent);
        return insert_into_internal_after_splitting(parent_po, left_index, key, right_po);
    }
}

void insert_into_new_root(off_t left_po, int64_t key, off_t right_po) {
    off_t root_po = new_page();
    page* root = load_page(root_po);
    page* left = load_page(left_po);
    page* right = load_page(right_po);

    root->num_of_keys = 1;
    root->is_leaf = 0;
    root->parent_page_offset = 0;
    root->next_offset = left_po;
    root->b_f[0].key = key;
    root->b_f[0].p_offset = right_po;

    left->parent_page_offset = root_po;
    right->parent_page_offset = root_po;

    pwrite(fd, root, sizeof(page), root_po);
    pwrite(fd, left, sizeof(page), left_po);
    pwrite(fd, right, sizeof(page), right_po);

    hp->rpo = root_po;
    pwrite(fd, hp, sizeof(H_P), 0);
    free(hp);
    hp = load_header(0);
    free(root); free(left); free(right);
}

// Insert API
int db_insert(int64_t key, char * value) {
    char* find_result = db_find(key);
    if (find_result != NULL) {
        free(find_result);
        return -1; // 중복 키
    }

    record new_record;
    new_record.key = key;
    strncpy(new_record.value, value, 120);

    if (hp->rpo == 0) {
        start_new_file(new_record);
        return 0;
    }

    off_t leaf_offset = find_leaf(key);
    page* leaf_page = load_page(leaf_offset);

    if (leaf_page->num_of_keys < LEAF_MAX) {
        free(leaf_page);
        return insert_into_leaf(leaf_offset, new_record);
    } else {
        free(leaf_page);
        return insert_into_leaf_after_splitting(leaf_offset, new_record);
    }
}

// --- Delete Operation ---

// 왼쪽 형제 인덱스 찾기
int get_neighbor_index(off_t page_offset, off_t parent_offset) {
    page* parent = load_page(parent_offset);
    int i = 0;
    
    if (parent->next_offset == page_offset) {
        free(parent); return -2; // 왼쪽 형제 없음 (자신이 첫째)
    }
    if (parent->num_of_keys > 0 && parent->b_f[0].p_offset == page_offset) {
        free(parent); return -1; // 왼쪽 형제가 one-more-page
    }
    for (i = 1; i < parent->num_of_keys; i++) {
        if (parent->b_f[i].p_offset == page_offset) {
            free(parent); return i - 1;
        }
    }
    free(parent); return -3;
}

int get_left_index(off_t parent_po, off_t left_po) {
    page* parent = load_page(parent_po);
    if (parent->next_offset == left_po) { free(parent); return -1; }
    for (int i = 0; i < parent->num_of_keys; i++) {
        if (parent->b_f[i].p_offset == left_po) { free(parent); return i; }
    }
    free(parent); return -2;
}

// 물리적 레코드 삭제 (Leaf)
void remove_record_from_leaf(off_t leaf_po, int64_t key) {
    page* leaf = load_page(leaf_po);
    int i = 0;
    while (leaf->records[i].key != key) i++;
    
    for (int j = i; j < leaf->num_of_keys - 1; j++) {
        leaf->records[j] = leaf->records[j + 1];
    }
    leaf->num_of_keys--;
    pwrite(fd, leaf, sizeof(page), leaf_po);
    free(leaf);
}

// 물리적 키 삭제 (Internal)
void remove_entry_from_internal(off_t internal_po, int64_t key) {
    page* p = load_page(internal_po);
    int i = 0;
    while (p->b_f[i].key != key) i++;
    
    for (int j = i; j < p->num_of_keys - 1; j++) {
        p->b_f[j] = p->b_f[j + 1];
    }
    p->num_of_keys--;
    pwrite(fd, p, sizeof(page), internal_po);
    free(p);
}

// Root 조정
void adjust_root(off_t root_po) {
    page* root = load_page(root_po);
    
    // Root가 비었고 Internal인 경우 -> 자식을 새 Root로 승격
    if (root->num_of_keys == 0 && !root->is_leaf) {
        hp->rpo = root->next_offset;
        page* new_root = load_page(hp->rpo);
        new_root->parent_page_offset = 0;
        pwrite(fd, new_root, sizeof(page), hp->rpo);
        free(new_root);
        
        pwrite(fd, hp, sizeof(H_P), 0);
        free(hp);
        hp = load_header(0);
        usetofree(root_po);
    }
    // Root가 비었고 Leaf인 경우 -> 트리 삭제
    else if (root->num_of_keys == 0 && root->is_leaf) {
        hp->rpo = 0;
        pwrite(fd, hp, sizeof(H_P), 0);
        free(hp);
        hp = load_header(0);
        usetofree(root_po);
    }
    free(root);
}

// 재분배 (Redistribute)
void redistribute_nodes(off_t neighbor_po, off_t page_po, int neighbor_index, int k_prime_index, int64_t k_prime) {
    page* neighbor = load_page(neighbor_po);
    page* p = load_page(page_po);
    page* parent = load_page(p->parent_page_offset);

    // Case 1: Neighbor가 왼쪽 (Borrow from Left)
    if (neighbor_index != -2) {
        if (!p->is_leaf) {
            for (int i = p->num_of_keys; i > 0; i--) p->b_f[i] = p->b_f[i - 1];
            p->b_f[0].key = k_prime;
            p->b_f[0].p_offset = p->next_offset;
            p->next_offset = neighbor->b_f[neighbor->num_of_keys - 1].p_offset;
            
            page* child = load_page(p->next_offset);
            child->parent_page_offset = page_po;
            pwrite(fd, child, sizeof(page), p->next_offset);
            free(child);
            
            parent->b_f[k_prime_index].key = neighbor->b_f[neighbor->num_of_keys - 1].key;
        } else {
            for (int i = p->num_of_keys; i > 0; i--) p->records[i] = p->records[i - 1];
            p->records[0] = neighbor->records[neighbor->num_of_keys - 1];
            parent->b_f[k_prime_index].key = p->records[0].key;
        }
    }
    // Case 2: Neighbor가 오른쪽 (Borrow from Right)
    else {
        if (!p->is_leaf) {
            p->b_f[p->num_of_keys].key = k_prime;
            p->b_f[p->num_of_keys].p_offset = neighbor->next_offset;
            
            page* child = load_page(neighbor->next_offset);
            child->parent_page_offset = page_po;
            pwrite(fd, child, sizeof(page), neighbor->next_offset);
            free(child);
            
            parent->b_f[k_prime_index].key = neighbor->b_f[0].key;
            neighbor->next_offset = neighbor->b_f[0].p_offset;
            for (int i = 0; i < neighbor->num_of_keys - 1; i++) neighbor->b_f[i] = neighbor->b_f[i + 1];
        } else {
            p->records[p->num_of_keys] = neighbor->records[0];
            parent->b_f[k_prime_index].key = neighbor->records[1].key;
            for (int i = 0; i < neighbor->num_of_keys - 1; i++) neighbor->records[i] = neighbor->records[i + 1];
        }
    }

    neighbor->num_of_keys--;
    p->num_of_keys++;
    
    pwrite(fd, parent, sizeof(page), p->parent_page_offset);
    pwrite(fd, p, sizeof(page), page_po);
    pwrite(fd, neighbor, sizeof(page), neighbor_po);
    
    free(parent); free(p); free(neighbor);
}

// 병합 (Coalesce)
void coalesce_nodes(off_t neighbor_po, off_t page_po, int neighbor_index, int k_prime_index, int64_t k_prime) {
    page* neighbor = load_page(neighbor_po);
    page* p = load_page(page_po);
    page* parent = load_page(p->parent_page_offset);

    // Swap (항상 p를 neighbor로 합치기 위해)
    if (neighbor_index == -2) {
        page* tmp = p; p = neighbor; neighbor = tmp;
        off_t tmp_off = page_po; page_po = neighbor_po; neighbor_po = tmp_off;
    }

    // 1. 내용 병합
    if (!p->is_leaf) {
        neighbor->b_f[neighbor->num_of_keys].key = k_prime;
        neighbor->b_f[neighbor->num_of_keys].p_offset = p->next_offset;
        neighbor->num_of_keys++;

        for (int i = 0; i < p->num_of_keys; i++) {
            neighbor->b_f[neighbor->num_of_keys] = p->b_f[i];
            neighbor->num_of_keys++;
        }
        
        // 자식들의 부모 변경
        page* child = load_page(p->next_offset);
        child->parent_page_offset = neighbor_po;
        pwrite(fd, child, sizeof(page), p->next_offset);
        free(child);
        for (int i = 0; i < p->num_of_keys; i++) {
            child = load_page(p->b_f[i].p_offset);
            child->parent_page_offset = neighbor_po;
            pwrite(fd, child, sizeof(page), p->b_f[i].p_offset);
            free(child);
        }
    } else {
        for (int i = 0; i < p->num_of_keys; i++) {
            neighbor->records[neighbor->num_of_keys] = p->records[i];
            neighbor->num_of_keys++;
        }
        neighbor->next_offset = p->next_offset;
    }

    pwrite(fd, neighbor, sizeof(page), neighbor_po);
    usetofree(page_po);
    
    // 2. 부모에서 Key 삭제 (재귀)
    delete_entry(p->parent_page_offset, k_prime);
    
    free(parent); free(p); free(neighbor);
}

// 엔트리 삭제 (재귀 호출의 핵심)
int delete_entry(off_t page_offset, int64_t key) {
    // 1. 물리적 삭제
    page* p = load_page(page_offset);
    if (p->is_leaf) remove_record_from_leaf(page_offset, key);
    else remove_entry_from_internal(page_offset, key);

    // 2. Root 체크
    if (page_offset == hp->rpo) {
        adjust_root(page_offset);
        free(p);
        return 0;
    }

    // 3. Underflow 체크
    int min_keys = p->is_leaf ? cut(LEAF_MAX + 1) - 1 : cut(INTERNAL_MAX + 1) - 1;
    free(p); p = load_page(page_offset); // Refresh
    if (p->num_of_keys >= min_keys) {
        free(p); return 0;
    }

    // 4. Underflow 발생: Neighbor & K_prime 찾기
    off_t parent_po = p->parent_page_offset;
    page* parent = load_page(parent_po);
    int neighbor_index = get_neighbor_index(page_offset, parent_po);
    int k_prime_index = (neighbor_index == -2) ? 0 : neighbor_index + 1;
    int64_t k_prime = parent->b_f[k_prime_index].key;
    
    off_t neighbor_po = (neighbor_index == -2) ? parent->b_f[0].p_offset : 
                        (neighbor_index == -1) ? parent->next_offset : 
                        parent->b_f[neighbor_index].p_offset;
    
    page* neighbor = load_page(neighbor_po);

    // 5. 재분배 또는 병합
    if (neighbor->num_of_keys > min_keys) {
        redistribute_nodes(neighbor_po, page_offset, neighbor_index, k_prime_index, k_prime);
    } else {
        coalesce_nodes(neighbor_po, page_offset, neighbor_index, k_prime_index, k_prime);
    }

    free(p); free(parent); free(neighbor);
    return 0;
}

// Delete API
int db_delete(int64_t key) {
    off_t leaf_offset = find_leaf(key);
    if (leaf_offset == 0) return -1;
    
    page* leaf = load_page(leaf_offset);
    bool found = false;
    for (int i = 0; i < leaf->num_of_keys; i++) {
        if (leaf->records[i].key == key) {
            found = true; break;
        }
    }
    free(leaf);
    
    if (!found) return -1;
    return delete_entry(leaf_offset, key);
}
```