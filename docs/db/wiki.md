# Assignment 3: Implementing Augmented B+tree

## 1. Design

### 1.1. Overall Architecture
본 과제에서는 Disk-based B+tree를 구현하였다. 모든 노드는 4KB 크기의 페이지(Page) 단위로 디스크에 저장되며, `Header Page`, `Free Page`, `Internal Page`, `Leaf Page`의 네 가지 타입을 가진다.

* In-Memory Logic vs On-Disk Structure:
    메모리 상의 포인터 대신 파일 내의 `offset`을 사용하여 페이지 간의 연결(Link)을 구현하였다. `open_table` 호출 시 `fd`(File Descriptor)를 전역으로 관리하며, `pread`/`pwrite` 시스템 콜을 사용하여 페이지 단위의 I/O를 수행한다.

### 1.2. Data Structures
* Page Structure: 4096 Bytes 고정 크기. Header(128B)와 Body(Record/Internal Entry)로 구성된다.
* Leaf Page: Key와 120B 크기의 Value를 저장하는 `record` 배열을 가진다. Order(Branching Factor)는 32이다.
* Internal Page: Key와 자식 페이지의 Offset을 저장하는 `inter_record` 배열을 가진다. Order는 249이다.
* Bitmap for Logical Deletion (bptree2):
    `bptree2`에서는 물리적 삭제 대신 논리적 삭제를 지원하기 위해, `page` 구조체의 `reserved[104]` 영역을 Bitmap으로 활용하였다. `reserved[i] == 1`인 경우 해당 인덱스의 레코드는 삭제된 것으로 간주한다.

## 2. Implement

### 2.1. Normal B+ tree (bptree1)
기본적인 B+ tree의 삽입, 삭제, 탐색 연산을 구현하였다.

* Insertion & Splitting:
    Leaf Page가 가득 찬 상태(`LEAF_MAX = 31`)에서 삽입 시 `insert_into_leaf_after_splitting`이 호출된다. 임시 배열을 생성하여 기존 레코드와 새 레코드를 정렬한 후, 중간 지점(`cut`)을 기준으로 두 개의 페이지로 분할한다. 이후 새 페이지의 첫 번째 Key를 부모로 올리는(`insert_into_parent`) 재귀적 로직을 구현하였다.

* Deletion & Merging/Redistribution:
    `db_delete`는 레코드를 물리적으로 제거(`memmove`)한다. 삭제 후 Key의 개수가 최소 조건 미만(Underflow)이 되면 `get_neighbor_index`를 통해 형제 노드를 탐색한다.
    * Redistribution: 형제 노드에 여유가 있다면 Key를 하나 빌려와 균형을 맞춘다.
    * Coalesce (Merge): 형제 노드도 여유가 없다면 두 노드를 병합하고, 부모 노드에서 해당 포인터를 제거(`delete_entry`)하는 과정을 재귀적으로 수행한다.

### 2.2. Logical Deletion Applied B+ tree (bptree2)
`bptree1`을 기반으로 하되, 삭제 정책과 구조를 변경하였다.

* Logical Deletion (`db_delete`):
    물리적인 데이터 이동이나 병합(Merge) 과정을 제거하였다. 대신 해당 레코드의 인덱스 `i`에 대해 `page->reserved[i] = 1`로 마킹하고 페이지를 디스크에 저장한다. 이로 인해 삭제 연산의 비용이 O(log N) + O(1)로 크게 감소하였다.

* Revival on Insertion (`db_insert`):
    이미 존재하는 Key에 대한 삽입 요청이 들어왔을 때, 해당 Key가 논리적으로 삭제된 상태(`reserved == 1`)라면 새로운 레코드를 추가하는 대신 기존 위치의 Value를 갱신하고 `reserved = 0`으로 변경하여 데이터를 '부활'시킨다.

* Visibility Check (`db_find`):
    탐색 시 Key가 존재하더라도 `reserved == 1`이면 `NULL`을 반환하여 사용자에게는 삭제된 것처럼 보이도록 구현하였다.

## 3. Result

### 3.1. Test Environment
* OS: macOS (Apple Silicon M1) / Ubuntu 22.04 (Cross-checked)
* Compiler: GCC
* Tools: Make

### 3.2. bptree1 Execution
1.  Insert & Find: Key 100, 50, 150을 순서대로 삽입 후 조회 시 정렬되어 출력됨을 확인.
2.  Split: 32개 이상의 레코드 삽입 시 Leaf Page가 분할되고, 새로운 Root가 생성되어 트리의 높이가 증가함을 확인.
3.  Delete (Merge): 대량 삭제 수행 시 Page Merge가 발생하고, Root가 다시 Leaf로 내려오거나 변경되는 과정을 확인.

### 3.3. bptree2 Execution (Logical Deletion)
1.  Logical Delete: `d 100` 수행 후 `f 100` 시 "Not Exists" 출력 확인. 하지만 물리적 파일 크기는 줄어들지 않음.
2.  Revival: 삭제된 Key 100에 대해 `i 100 world` 수행 시, 새로운 공간을 할당하지 않고 기존 슬롯을 재활용하여 값이 갱신됨을 확인.
3.  Reorganization: `q`를 눌러 종료 시 `db_reorganize`가 호출되어, 삭제된 데이터가 정리된 상태로 DB 파일이 갱신됨을 확인.

## 4. TroubleShooting

### 4.1. `get_neighbor_index` Segmentation Fault
* 문제: `bptree1`의 삭제 연산 중, Internal Page가 병합되어 빈 페이지(`num_of_keys == 0`)가 된 상태에서 부모를 탐색할 때 `parent->b_f[0]`에 접근하여 Segmentation Fault가 발생함.
* 원인: `num_of_keys`가 0인 경우 `b_f` 배열이 유효하지 않음에도 접근을 시도함.
* 해결: `parent->num_of_keys > 0` 조건을 추가하여, 키가 있을 때만 `b_f[0]`를 확인하도록 로직을 수정하여 해결함.

### 4.2. `db_reorganize` Trace Trap Error
* 문제: `bptree2`에서 재구성(Reorganize) 실행 시 프로그램이 비정상 종료(`Trace Trap`)됨.
* 원인: `open_table` 함수 내부에서 전역 변수 `DB_PATH`를 `memset`으로 초기화하는데, `db_reorganize`에서 `open_table(DB_PATH)` 형태로 자기 자신을 인자로 넘기면서 포인터 참조 오류가 발생함.
* 해결: `db_reorganize` 함수 초입에서 `DB_PATH`를 로컬 변수 `original_path`에 `strncpy`로 복사해둔 뒤, 이 복사본을 사용하여 `open_table`을 호출하도록 수정함.

## 5. Consideration on `db_reorganize`

### 5.1. 구현 목표
`db_reorganize`는 논리적으로 삭제된 레코드(Fragmentation)를 제거하고, B+ tree를 물리적으로 재구성하여 검색 성능과 공간 효율성을 최적화하는 것을 목표로 한다.

### 5.2. 채택한 알고리즘: Offline Reconstruction
기존 파일 내에서 빈 공간을 찾아 데이터를 이동시키는 방식(In-place compaction) 대신, 새로운 DB 파일을 생성하여 유효한 데이터만 이주(Migrate)시키는 방식을 채택하였다.

1.  Rename: 현재 사용 중인 DB 파일을 `backup.db`로 이름을 변경한다.
2.  Create New: 원래 이름으로 새로운 빈 DB 파일을 생성한다 (`open_table`).
3.  Migrate:
    * `backup.db`를 Read-only로 열고, Root부터 시작하여 모든 Leaf Page를 순회한다.
    * Leaf Page 내에서 `reserved == 0`인(삭제되지 않은) 유효한 레코드만 추출한다.
    * 추출된 레코드를 새 DB에 `db_insert` 한다.
4.  Cleanup: 작업 완료 후 `backup.db`를 삭제(`unlink`)한다.

### 5.3. 성능상의 이점
이 방식은 다음과 같은 장점이 있어 효율적이다.
* Sequential I/O: 기존 트리를 순차적으로 읽고(Sequential Read), 새 트리에 순차적으로 씀(Append-only Write)으로써 디스크 헤드 이동을 최소화한다.
* Fragmentation 제거: 새로 생성된 트리는 중간에 빈 공간 없이 꽉 채워지므로(Compacted), 디스크 공간 낭비가 0에 수렴한다.
* 안전성: 작업 도중 실패하더라도 원본(`backup.db`)이 보존되므로 복구가 용이하다.