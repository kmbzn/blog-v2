# Project 3: Virtual Memory & File system - wiki

## 1. Design

### 1.1. Project overview  

이 wiki는 xv6-riscv 기반 운영체제에 가상 메모리와 파일 시스템 기능을 확장한 과정을 정리한다.  
본 Project의 목표는 메모리 효율·저장 용량·파일 참조 유연성을 개선하는 것이다.

* copy-on-write(COW) fork  
  * 기존 xv6는 `fork` 시 사용자 메모리를 전부 복사 → 과도한 메모리 소비  
  * 해결: parent-child가 page를 공유하고 **첫 write 시에만 복사**  
* large file support  
  * 최대 `268 KB` 한계(12 direct + 1 indirect)  
  * 해결: **double-indirect** 레이아웃 도입 → 약 66 MB까지 파일 생성·접근 가능  
* symbolic link  
  * hard link만 제공, 경로-기반 링크가 부재  
  * 해결: **UNIX-style symlink** 구현 + link-chain 해석(깊이 제한 10단계)

| 기능 | 기존 한계 | 확장 목표 |
|------|-----------|-----------|
| Copy-on-Write | `fork` 시 전체 메모리 복사 | 공유 후 첫 write 때만 복사 |
| Large file | `268 KB` 최대 크기 | `66 MB` 지원(double-indirect) |
| Symbolic link | hard link만 지원 | 경로 기반 symlink + loop 방지 |

본 구현은 xv6의 원형 구조를 유지하면서 자연스럽게 기능을 확장하였으며, 각 기능별 테스트 프로그램을 통해 안정성과 정확성을 확인하였다.  
이 wiki는 **테스트 설명 → 구현 세부 사항 → 결과 및 문제 해결** 순서로 서술해 최종 완성도를 입증하게 된다.

---

### 1.2. Design principles and requirement strategy  

### 1.2.1. On-demand page duplication 
- `uvmcopy`에서 writable page의 `PTE_W`를 제거하고 `PTE_COW`를 세팅해 parent, child가 같은 physical page를 read-only로 공유한다.  
- write fault는 `usertrap`에서 감지하며, `ref-count > 1`이면 새 page를 `kalloc` 후 복사, `ref-count == 1`이면 `flag`만 갱신해 write-enable 한다.  

### 1.2.2. Page reference accounting
- `ref_counts[PHYSTOP/PGSIZE]` 전역 배열로 모든 physical page 사용 개수를 추적한다.  
- `inc_ref` / `kfree`로 증가·감소하며 0일 때만 free list에 반환해 leak을 방지한다.  

### 1.2.3. TLB consistency on permission change  
- RISC-V에는 x86 CR0.WP가 없으므로, write-protect 후 반드시 `sfence_vma`를 호출해 사용자 TLB를 flush한다.  

### 1.2.4. Double-indirect block layout  
- `NDIRECT`를 11로 줄이고 `addrs[11]` (single), `addrs[12]` (double) 두 포인터를 예약한다.  
- `bmap`는 three-tier lookup (direct → single → double) 로직을 가진다.  
- `MAXFILE = 11 + 256 + 256²` 계산으로 bigfile 테스트(65 803 blocks)를 커버한다.  

### 1.2.5. Metadata integrity via write-ahead logging  
- indirect 테이블을 수정할 때마다 `log_write(bp)` 호출 후 `brelse(bp)`로 해제해 log 일관성을 보장한다.  

### 1.2.6. Safe truncation path  
- `itrunc`는 direct → single → double 세 단계에 대해 역순으로 `bfree`를 호출해 orphan block을 남기지 않는다.  

### 1.2.7. Path-level symbolic link  
- 새로운 inode type `T_SYMLINK`을 추가하고, link 파일에 target 경로 문자열을 저장한다.  
- `sys_open`은 최대 `MAX_SYMLINK_LOOPS (10)` 깊이까지 재귀 해석하며, `O_NOFOLLOW`가 있으면 링크 자체를 연다.  

### 1.2.8. Loop and broken-link defense  
- depth 카운터로 순환 링크를 차단하고, target 미존재 시 open 실패를 반환한다.  

### 1.2.9. Concurrency safety  
- symlink 생성·삭제는 `begin_op()/end_op()` 트랜잭션 내부에서 inode lock을 끝까지 유지해 race condition을 방지한다.  

---

### 1.3. Design key summary  

| Element | Implementation strategy summary |
|---------|---------------------------------|
| Page sharing | `uvmcopy` → `PTE_COW` flag + read-only |
| Fault handling | `usertrap` branch for `scause==store fault` |
| Ref count | `inc_ref`, `get_ref`, `kfree` guard == 0 |
| Double-indirect layout | `addrs[NDIRECT+2]` + 3-level `bmap` |
| MAXFILE 계산 | `11 + 256 + 256² = 65 803` blocks |
| Log consistency | 각 level 변경 직후 `log_write(bp)` |
| Symlink syscall | `sys_symlink(target, path)` + `T_SYMLINK` inode |
| Link resolution | `sys_open` loop, depth ≤ 10, `O_NOFOLLOW` support |
| Concurrency | inode lock + write-ahead log around link ops |

이 설계에 따라 COW, large file, symbolic link 세 기능을 **기존 xv6 코드와 호환**되도록 통합했으며, 각각 `cowtest`, `bigfile`, `symlinktest`를 완전 통과하고 목표 요구사항을 충족하게 된다.

## 2. TEST 파일에 대한 설명

### 2.1. `/user/cowtest.c`

이 프로그램은 copy-on-write fork 기능을 테스트하는 user space 프로그램이다.

주요 테스트 함수는 다음과 같다.

- `simpletest`  
  전체 physical memory의 2/3 가량을 `sbrk`로 할당하고 `fork`를 수행하여, parent와 child가 page를 공유하는지 확인한다. copy-on-write이 구현되어 있지 않으면 `fork` 실패가 발생한다.

- `threetest`  
  3개의 process가 각자 COW page에 write를 수행하며 실제로 page가 copy되고 free되는지를 확인한다. 내용 불일치나 memory leak이 없어야 통과된다.

- `filetest`  
  `pipe`와 `fork`를 통해 `copyout` 동작 중 page fault가 정상적으로 처리되는지를 검증한다. parent의 `buf`가 child에 의해 오염되지 않아야 성공이다.

```c
uint64 phys_size = PHYSTOP - KERNBASE;
int sz = (phys_size / 3) * 2;
char *p = sbrk(sz);
int pid = fork();
```

이 테스트들은 `fork`의 성능 최적화와 memory isolation의 정확성을 점검하는 데 핵심적인 역할을 한다.

---

### 2.2. `/user/bigfile.c`

이 테스트 프로그램은 xv6 파일 system에서 large file을 생성하고, 데이터를 block 단위로 연속적으로 쓰고 `read`하여 data integrity를 검증하는 기능을 수행한다.

주요 동작 과정은 다음과 같다.
- `"big.file"`이라는 이름으로 file을 `O_CREATE | O_WRONLY` flag를 사용해 `open`하고 `write`를 수행한다.
- block 크기(`BSIZE`)만큼 `buf`를 준비하고, 각 block에 번호를 기록한 후 반복적으로 file에 쓴다.
- 총 `65803`개의 block이 write되어야 하며, 중간마다 진행 상황을 출력한다.
- write 완료 후 file을 `close`하고 `O_RDONLY` flag로 다시 `open`하여 `read`를 수행하고, 저장된 값이 block 번호와 일치하는지 검증한다.
- 모든 검사가 통과되면 성공 메시지를 출력하고 `exit`한다.

이 테스트는 doubly-indirect block 기능이 적용된 file system이 실제로 large file을 안정적으로 처리할 수 있는지를 확인하는 데 목적이 있다.

```c
fd = open("big.file", O_CREATE | O_WRONLY);
...
while(1){
  *(int*)buf = blocks;
  int cc = write(fd, buf, sizeof(buf));
  if(cc <= 0)
    break;
  blocks++;
}
```

---

### 2.3. `/user/symlinktest.c`

이 프로그램은 symbolic link 기능을 검증하는 user space 테스트 프로그램이다.

주요 테스트 구성은 다음과 같다.

- `testsymlink`  
  `testsymlink` 디렉터리를 만들고, file을 하나 생성한다. 그리고 `symlink` system call을 이용해 해당 file을 target으로 하는 link file을 생성한다. 이후 `read` 동작이 정상적으로 작동하는지 확인하고, link가 `T_SYMLINK` 타입으로 인식되는지도 `stat`으로 검증한다.  
  이후 원본 file을 `unlink`한 뒤 broken link에 접근이 차단되는지, 다시 원형 loop 구조를 갖는 link를 만들었을 때 `open` 시 오류가 발생하는지 확인한다.  
  마지막으로 여러 단계의 link chain을 생성한 뒤, chain의 시작점을 통해 끝 file에 접근 가능한지도 검사한다.

- `concur`  
  여러 process가 동시에 `symlink`를 생성하고 `unlink`를 반복하는 상황을 만들어 race condition이나 consistency 문제가 발생하지 않는지 검증한다. 각 process는 동일한 `target`에 대해 반복적으로 `symlink`/`unlink`를 수행한다.

```c
r = symlink("/testsymlink/a", "/testsymlink/b");
...
if(st.type != T_SYMLINK)
  fail("not a symlink");
```

이 test는 symbolic link의 생성, 삭제, 경로 해석, cycle 처리, broken link 및 동시 접근 문제를 종합적으로 검증하게 된다.

## 3. Implementation

### 3.1. Copy-on-Write fork 구현

copy-on-write(COW)는 parent와 child가 같은 physical page를 공유하다가 처음으로 write를 시도하는 순간에만 page를 복사하여 분리하는 방식이다. 구현은 세 가지 부분으로 구성된다.

1. fork 시 공유 page 설정  
2. user mode write fault 처리  
3. physical page reference count 관리  

---

#### 3.1.1. uvmcopy에서 페이지 공유 설정

`uvmcopy`는 parent의 pagetable을 순회하면서 writable page를 read-only로 바꾸고 `PTE_COW` flag를 추가한다. 이후 동일한 physical page를 child pagetable에 매핑하고, ref count를 증가시킨다.

```c
// kernel/vm.c
if(*pte & PTE_W){
  *pte &= ~PTE_W;     // read-only
  *pte |= PTE_COW;    // cow 표시
  if(mappages(new, i, PGSIZE, pa, PTE_FLAGS(*pte)) != 0){
    *pte |= PTE_W;    // 실패 시 복구
    *pte &= ~PTE_COW;
    goto err;
  }
} else {
  mappages(new, i, PGSIZE, pa, PTE_FLAGS(*pte));
}
inc_ref((void*)pa);   // 공유 page ref count++ 하게 됨..
```

이 과정으로 parent와 child는 같은 physical page를 read-only로 바라보며, write 시 fault가 발생하도록 준비된다.

---

#### 3.1.2. usertrap에서 write fault 처리

user mode에서 write fault가 발생하면 `usertrap`이 COW 여부를 판정한다. 해당 page가 `PTE_COW`이고 공유 ref count가 2 이상이면 새 page를 할당해 내용을 복사한 뒤 child 쪽으로만 writable 매핑을 만든다. ref count가 1이면 같은 page를 그대로 writable로 전환한다.

```c
// kernel/trap.c
if(r_scause() == 15){                 // store fault
  uint64 va = r_stval();
  pte_t *pte = walk(p->pagetable, va, 0);
  if((*pte & PTE_COW) && (*pte & PTE_V) && (*pte & PTE_U)){
    uint64 pa = PTE2PA(*pte);
    if(get_ref((void*)pa) > 1){       // 공유 page
      char *mem = kalloc();
      memmove(mem, (char*)pa, PGSIZE);
      uvmunmap(p->pagetable, PGROUNDDOWN(va), 1, 1);
      mappages(p->pagetable, PGROUNDDOWN(va), PGSIZE,
               (uint64)mem, PTE_R|PTE_W|PTE_X|PTE_U);
    } else {                          // 단독 page
      *pte |= PTE_W;
      *pte &= ~PTE_COW;
    }
    goto trapret;
  }
}
```

이 logic 덕분에 write를 시도한 process만 새 page를 갖게 되고, 나머지 프로세스는 원본 page를 그대로 유지한다.

---

#### 3.1.3. kalloc / kfree에서 reference count 관리

physical page별 사용 개수를 `ref_counts[]` 배열로 관리한다. 새 page를 할당하면 ref count를 1로 설정하고, page를 공유할 때 `inc_ref`로 증가시킨다. `kfree`는 ref count가 0이 될 때만 실제 free list에 반환한다.

```c
// kalloc.c
void inc_ref(void *pa){
  ref_counts[(uint64)pa / PGSIZE]++;
}

void kfree(void *pa){
  uint *ref = &ref_counts[(uint64)pa / PGSIZE];
  *ref -= 1;
  if(*ref == 0){
    memset(pa, 1, PGSIZE);
    ((struct run*)pa)->next = kmem.freelist;
    kmem.freelist = (struct run*)pa;
  }
}
```

초기화 시 모든 usable page의 ref count를 1로 설정한 뒤 `freerange`에서 `kfree`를 호출해 free list에 넣는다.

---

#### 3.1.4. 연동 결과

- `cowtest`의 `simpletest`, `threetest`, `filetest`가 모두 `pass`된다.  
- parent와 child의 write 동작이 서로 영향을 주지 않으며, 여전히 read-only page를 공유함으로써 메모리 사용량이 크게 감소한다.  
- ref count 관리로 page 누수 없이 `exit` 후 메모리가 정상적으로 회수된다.

copy-on-write fork 구현은 위 세 부분이 맞물려 동작하며, xv6의 기본 fork 대비 성능과 메모리 효율을 크게 향상시킨다.

### 3.2. Large file 지원 구현

large file을 저장하기 위해 inode의 block address 구조를 direct + single indirect + double indirect 3단계로 확장했다. bigfile 테스트가 요구하는 `65803`개 block을 정확히 지원하도록 상수를 재조정하고, `bmap`와 `itrunc`를 수정해 block 할당·해제를 처리한다.

---

#### 3.2.1. 핵심 매크로 변경

```c
// kernel/param.h
#define FSSIZE 262656      // file system 전체 block 수

// kernel/fs.h
#define NDIRECT 11         // direct pointer 11개
#define NINDIRECT (BSIZE / sizeof(uint))     // 256
#define MAXFILE (NDIRECT + NINDIRECT + NINDIRECT*NINDIRECT)   // 11 + 256 + 65536
```

- direct pointer를 11개로 줄여 `addrs[NDIRECT+2]` 배열의 마지막 두 칸을 single indirect, double indirect pointer로 사용한다.  
- `MAXFILE`을 double indirect 범위까지 계산해 bigfile 테스트의 block 수와 일치시킨다.

---

#### 3.2.2. dinode 구조

```c
struct dinode {
  short type;
  short major;
  short minor;
  short nlink;
  uint  size;
  uint  addrs[NDIRECT+2];   // [0..10] direct, [11] single, [12] double
};
```

---

#### 3.2.3. `bmap` 수정

double indirect 분기를 추가해 두 단계로 block을 할당·탐색한다.

```c
// kernel/fs.c (발췌)
bn -= NINDIRECT;
// double indirect
if(bn < NINDIRECT * NINDIRECT){
  // 1단계: double indirect pointer가 없으면 할당
  if((addr = ip->addrs[NDIRECT+1]) == 0){
    addr = balloc(ip->dev);
    ip->addrs[NDIRECT+1] = addr;
  }
  // 2단계: first level index 계산
  bp = bread(ip->dev, addr);
  a  = (uint*)bp->data;
  if((addr = a[bn / NINDIRECT]) == 0){
    addr = balloc(ip->dev);
    a[bn / NINDIRECT] = addr;
    log_write(bp);
  }
  brelse(bp);
  // 3단계: second level index
  bp = bread(ip->dev, addr);
  a  = (uint*)bp->data;
  if((addr = a[bn % NINDIRECT]) == 0){
    addr = balloc(ip->dev);
    a[bn % NINDIRECT] = addr;
    log_write(bp);
  }
  brelse(bp);
  return addr;
}
```

동작 순서  
- double indirect pointer가 없으면 새 block을 할당한다.  
- 첫 번째 레벨 배열을 가져와 index를 계산하고, 두 번째 레벨 배열 block을 할당‧기록한다.  
- 두 번째 레벨 배열에서 실제 data block을 할당해 반환한다.  

---

#### 3.2.4. `itrunc` 개념 요약

`itrunc`는 direct, single indirect, double indirect 블록을 모두 순회하며 `bfree`를 호출해 해제한다.  
double indirect는 두 단계에 걸쳐 `bread → loop → bfree` 순으로 재귀적으로 처리한다.

---

#### 3.2.5. `bigfile` 테스트와의 정합성

- `bigfile.c`는 `MAXFILE`에 해당하는 `65803` block을 순차 write한 뒤 read로 검증한다.  
- double indirect 분기와 상수 조정으로 write loop가 block 할당 오류 없이 완료된다.  
- read 단계에서 block 번호와 data가 일치해 데이터 무결성이 보장된다.

이로써 xv6 file system은 약 66 MB(65803 * 1024) 규모의 파일까지 안정적으로 저장·읽기할 수 있다.

### 3.3. Symbolic link 구현

symbolic link은 파일 이름 대신 경로 문자열을 저장해 다른 파일을 간접 참조하는 inode이다.  
구현은 inode type 추가, `sys_symlink` 시스템콜 정의, `sys_open`의 경로 해석 확장, 그리고 루프 방지를 위한 깊이 제한으로 구성된다.

---

#### 3.3.1. 주요 상수 및 타입

- `T_SYMLINK` 파일 타입을 inode와 stat 구조에 추가  
- `MAX_SYMLINK_LOOPS` 상수를 `10`으로 정의해 무한 순환을 방지  
- `stat`, `user.h`, 시스템콜 번호 테이블에 타입‧함수‧번호를 모두 반영

```c
#define T_SYMLINK 4        // kernel/fs.h, kernel/stat.h
#define MAX_SYMLINK_LOOPS 10
#define SYS_symlink 22     // syscall 번호
```

---

#### 3.3.2. sys_symlink

`sys_symlink(const char *target, const char *linkpath)`는 다음 순서로 동작한다.

1. `create(linkpath, T_SYMLINK, 0, 0)` 호출로 빈 symlink inode 생성  
2. `writei`로 target 경로 문자열을 inode 데이터 영역에 기록  
3. 작업 실패 시 `iunlockput` 후 `-1` 반환

```c
if((ip = create(path, T_SYMLINK, 0, 0)) == 0)
  return -1;
if(writei(ip, 0, (uint64)target, 0, strlen(target)) < strlen(target))
  return -1;
```

---

#### 3.3.3. `ys_open`의 경로 해석

open 시 `symlink`를 자동으로 따라가도록 `while` 루프를 추가했다.

- 최대 `MAX_SYMLINK_DEPTH`만큼 반복하며 `namei`로 현재 경로를 lookup  
- inode가 `T_SYMLINK`, `O_NOFOLLOW`가 없는 경우  
  - symlink 파일에서 target 경로 문자열을 읽어 `path` 변수에 복사  
  - 깊이 카운트를 증가시키고 루프 재시작  
- depth 초과 시 *실패*  

```c
for(int depth = 0; depth < MAX_SYMLINK_DEPTH; depth++){
  if((ip = namei(path)) == 0){
    if(omode & O_CREATE)
      ip = create(path, T_FILE, 0, 0);
    else
      return -1;
  } else
    ilock(ip);

  if(ip->type == T_SYMLINK && !(omode & O_NOFOLLOW)){
    char link_target[MAXPATH];
    int len = readi(ip, 0, (uint64)link_target, 0, MAXPATH - 1);
    iunlockput(ip);
    link_target[len] = '\0';
    safestrcpy(path, link_target, MAXPATH);
    continue;          // 다시 해석
  }
  goto found;          // 실제 파일 도착
}
```

---

#### 3.3.4. create 함수 호환성

`create`는 기존 T_FILE · T_DIR·T_DEVICE 로직을 유지하며, `T_SYMLINK`를 추가 파라미터로 받았다. symlink 생성 시 별도 초기화는 필요 없고, `nlink`는 1로 설정한 뒤 `dirlink`로 디렉토리에 등록한다.

---

#### 3.3.5. 전체적인 동작 과정

- `symlink target link` 명령이 들어오면 `sys_symlink`가 link 파일을 만들고 target 경로를 내용으로 기록한다.  
- 이후 `open(link)` 호출은 루프를 돌며 symlink 파일을 열고 target 문자열을 읽어 다시 `namei`를 수행하게 된다.  
- 최대 10단계까지 link chain을 따라가며, cycle이거나 깊이 초과 시 오류를 반환한다.  
- `O_NOFOLLOW` flag를 사용하면 `symlink` 자체를 열 수 있다.

이 방식으로 `symlinktest`의 link 생성, loop 감지, broken link 처리, 동시성(create · unlink race) 시나리오가 모두 통과된다.

## 4. Results

### 4.1. `cowtest.c`
#### 4.1.1. Sub-test comparison

| Sub-test | Expected reference | Actual output | Analysis & reasoning | Verdict |
|----------|-------------------|---------------|----------------------|---------|
| `simpletest` | `simple: ok` | identical | COW page는 복사 없이 공유, ref count +1/-1 정상 | `pass` |
| `threetest` (×3) | 세 줄 모두 `three: ok` | identical | 세 프로세스가 동시에 write → 공유 page 복사 후 free, ref count leak 없음 | `pass` |
| `filetest` | `file: ok` 및 마지막 `ALL COW TESTS PASSED` | identical | `copyout`가 COW page를 직접 처리하도록 수정하여 pipe alloc 성공 | `pass` |

→ 메모리 공유·복사·해제 전 과정이 모두 **올바르게 작동**한다.

---

### 4.2. `bigfile.c`
| 항목 | Expected | Actual | 분석 |
|------|----------|--------|------|
| Blocks written | 65 803 | 65 803 | double-indirect `bmap`가 전체 할당 범위 처리 |
| Verification read | all match | all match | block 번호와 데이터 일치, 무결성 검증 통과 |
| Runtime (QEMU) | 수 분 | 약 20 분 | 동기식 log I/O 지연 허용 범위 |

→ `66 MB`급 file을 오류 없이 write-read 했으므로 large-file 확장이 성공적으로 동작한다고 할 수 있다.

---

### 4.3. `symlinktest.c`
| Sub-test | Observation | Explanation | Verdict |
|----------|-------------|-------------|---------|
| Basic link (`b`→`a`) | `b` 타입 `T_SYMLINK`, 읽으면 `'a'` | `create`가 `T_SYMLINK` 전달, target 경로 저장 | pass |
| Broken link | 원본 `a` 삭제 후 `open(b)` 실패 | `sys_open`이 depth loop 내에서 inode 미존재 시 에러 반환 | pass |
| Cyclic link (a↔b) | `open(b)` 오류 반환 | depth 카운터 10 도달 후 루프 감지 | pass |
| Chain (1→2→3→4) | `write` via `1`, `read` via `4` 동일 문자 | 4-step 해석이 `MAX_SYMLINK_LOOPS`-안에 완료 | pass |
| Concurrency | 두 child 모두 정상 종료 | inode lock + log write 로 race condition 방지 | pass |

→ 링크 생성·삭제·해석·동시성이 모두 요구 조건을 충족한다.

---

### 4.4. Completion process
1. `make qemu`
2. QEMU shell:  

```sh
xv6 kernel is booting

init: starting sh
$ cowtest
simple: ok
simple: ok
three: ok
three: ok
three: ok
file: ok
ALL COW TESTS PASSED
$ bigfile
..................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
wrote 65803 blocks
bigfile done; ok
$ symlinktest
Start: test symlinks
test symlinks: ok
Start: test concurrent symlinks
test concurrent symlinks: ok
$ 
```
3. 세 test 모두 `… ok` / `PASSED` 출력되었음.

![screenshot](https://kmbzn.com/images/screenshot.png)  

---

### 4.5. Program-flow snapshot 기능별 동작 흐름 요약
* **COW** : `fork → uvmcopy(PTE_COW) → write fault → usertrap → kalloc+copy → resume`
* **Large file** : `write loop → bmap(direct→single→double) → log_write → disk`
* **Symlink** : `sys_open → namei → ilock → type check → readi(target) → namei retry (≤10)`


## 5. Troubleshooting

### 5.1. Copy-on-Write troubleshooting  

#### 5.1.1. Initial symptom  
`simpletest`, `threetest`는 통과했으나 `filetest`에서 **`file: pipe() failed`** 메시지 발생.

#### 5.1.2. Hypotheses  
- **Memory leak** : `pipealloc` 내부 `kalloc` 실패 가능성 → 디버그 로그 추가, 미출력.  
- **File structure exhaustion** : `filealloc` 실패 가능성 → 디버그 로그 추가, 미출력.

#### 5.1.3. Root cause  
- `pipe`는 fd 번호를 user 배열에 복사하기 위해 `copyout` 호출.  
- parent page는 `PTE_COW` + read-only.  
- 기존 `copyout`은 `PTE_W`가 꺼진 페이지를 만나면 즉시 `-1` 반환 → `pipealloc` 실패.  

```c
// old copyout (excerpt)
if((*pte & PTE_W) == 0)
  return -1;          // write-protect → 즉시 실패
```

#### 5.1.4. Fix  
`copyout`이 `PTE_COW` 플래그를 감지하면 직접 COW page 복사 후 재시도.

```c
// kernel/vm.c (core patch)
if((*pte & PTE_COW) && !(*pte & PTE_W)){
  if(copy_cow_page(pagetable, va) < 0)
    return -1;
}
```

#### 5.1.5. Result  
`pipe` 성공 → `filetest` **ok** → 최종 **ALL COW TESTS PASSED**.

---

### 5.2. Large-file troubleshooting  

#### 5.2.1. Symptom 1  
`wrote 268 blocks` 후 **file is too small** 오류.

#### 5.2.2. Cause 1  
`NDIRECT`가 12로 남아 double-indirect 포인터 미사용.

#### 5.2.3. Fix 1  
`NDIRECT` → 11, `addrs[NDIRECT+2]`로 구조체 갱신 → double-indirect 활성화.

---

#### 5.2.4. Symptom 2  
`mkfs` assertion **(BSIZE % sizeof(struct dinode)) == 0** 실패.

#### 5.2.5. Cause 2  
`struct dinode` 크기가 64 B 배수 아님.

#### 5.2.6. Fix 2  
배열 크기 조정으로 64 B 정렬 확보 → 이미지 생성 성공.

---

#### 5.2.7. Symptom 3  
`bigfile` 실행 시간이 과도(QEMU + sync log).

#### 5.2.8. Work-around  
대기 후 **wrote 65803 blocks / bigfile done; ok** 출력.

---

### 5.3. Symlink troubleshooting  

#### 5.3.1. Initial compile errors  
미정의 상수·중복 `stat`·미등록 syscall 등.

#### 5.3.2. Fix steps  
상수 정의, 함수 원형 추가, `syscall.h / syscall.c / usys.pl` 갱신,  
`ulib.c` 중복 `stat` 제거 등으로 컴파일 완료.

---

#### 5.3.3. Runtime error A — `FAILURE: b isn't a symlink`  
- **Cause** : `create()`가 `T_SYMLINK`를 무시하고 `T_FILE`로 할당.  
- **Fix** : `ialloc(dev, type)`로 타입 그대로 전달.

---

#### 5.3.4. Runtime error B — broken link panic  
- **Cause** : `sys_open`이 depth / `O_NOFOLLOW` 체크 없이 재해석.  
- **Fix** : 깊이 카운터(≤10) 및 `O_NOFOLLOW` 분기 추가.

---

#### 5.3.5. Runtime error C — concurrent unlink panic  
- **Cause** : `sys_symlink`가 write 중 lock 해제 → race.  
- **Fix** : `writei` 완료 후 `iunlockput`; 각 단계 `log_write` 호출.

#### 5.3.6. Result  
`symlinktest`의 basic·broken·loop·concurrent 시나리오 모두 **ok** 출력.

## 6. Additional Content

### 6.1. Reference notes for COW / Large file / Symbolic link implementation in xv6-riscv

- RISC-V에는 CR0(Write Protect) 비트가 없으므로, 페이지를 read-only로 만드는 작업은 PTE_W 클리어 + TLB flush로만 완결된다.  
- double-indirect block 구현 시 `balloc`으로 할당받은 두 번째 레벨 블록을 반드시 `log_write` 후 `brelse`해야 log 일관성이 유지된다.  
- symlink 해석은 `namei`와 동일한 잠금 순서를 따라야 deadlock을 피할 수 있다. 특히 `sys_open` 루프 내부에서 `ilock(ip)` 후 `readi`를 호출할 때 log transaction이 열린 상태여야 한다.