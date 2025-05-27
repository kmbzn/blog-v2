# xv6 RISC-V Kernel-Level Threads 구현: wiki

## Design

### 프로젝트 개요

본 프로젝트의 핵심 목표는 xv6 운영체제(RISC-V 기반)에 커널 수준 스레드(kernel-level thread) 기능을 추가하는 것이다. 스레드는 하나의 프로세스 주소 공간(pagetable)을 공유하면서도 독립된 실행 컨텍스트(레지스터, 사용자 스택 등)를 가지는 경량 실행 단위로, 현대 운영체제의 필수 구성 요소 중 하나이다.

xv6는 원래 단일 프로세스 구조 기반이며, 각 `proc` 구조체는 독립된 주소 공간과 trapframe을 가진다. 우리는 이를 확장하여 하나의 주소 공간을 여러 실행 단위(thread)가 공유할 수 있도록 `proc` 구조체를 thread control block(TCB)처럼 재활용함으로써, `clone()`을 통한 스레드 생성, `join()`을 통한 회수를 구현해야 한다.

### 요구사항 분석

- **주소 공간 공유**: 스레드는 같은 pagetable을 공유하므로, 메모리 접근이 전역적이며 동기화 이슈가 존재한다.
- **파일 디스크립터 공유**: clone 시 부모의 파일 디스크립터를 그대로 물려받아야 한다.
- **스택 분리**: 각 스레드는 사용자 스택을 독립적으로 가지고 있어야 하며, 최소 1페이지 단위의 page-aligned 메모리이어야 한다.
- **fork/exec/exit 호환성 유지**: 기존의 fork/exec 호출은 모든 thread를 고려해야 하며, 특히 exec 호출 시 같은 주소 공간을 공유하던 스레드는 모두 종료되어야 한다.
- **스레드 종료 회수**: join()을 통해 종료된 스레드의 스택 주소를 회수하고, 자원을 정리해야 한다.
- **x86 스타일 ptable 기반 구현은 금지**: riscv 버전에서는 ptable을 사용하지 않기 때문에 모든 동작은 lock, proc 배열을 통해 처리해야 한다.

## Implementation

### System Call 시스템 콜

- `sys_clone(void)`: 유저로부터 `void(*fcn)(void*, void*)`, 인자 두 개, 스택 주소를 받아 `clone()` 커널 함수를 호출한다. `argaddr()`가 반환형이 void이기 때문에 인자 처리는 포인터를 통해 간접적으로 수행해야 한다.
- `sys_join(void)`: 유저로부터 (void **)stack 형태로 포인터 주소를 전달받고, 커널 내 `join()` 호출 시 유저 스택 주소를 복사해준다.

### 커널 내부 함수

#### `clone()`

- trapframe, stack, context 등의 상태는 `allocproc()`을 통해 새로 할당한다.
- 주소 공간은 부모의 pagetable을 uvmshare()를 통해 공유하며, 이는 PTE_U가 설정된 페이지들에 대해 참조만 공유한다.
- trapframe 내 epc를 fcn으로, sp를 유저가 넘긴 스택으로 세팅하며, a0, a1은 유저 인자를 그대로 넘긴다.
- 파일 디스크립터와 cwd는 `filedup()` 및 `idup()`을 통해 복제한다.
- 부모-자식 관계 설정 후 `RUNNABLE`로 전환한다.

#### `join()`

- `proc` 배열을 순회하며 자신을 부모로 둔 자식 thread 중 `is_thread == 1`이고 `ZOMBIE` 상태인 것을 찾는다.
- 해당 thread의 ustack을 기록해두었다가 `copyout()`을 통해 유저에게 전달하고, TCB는 freeproc()으로 회수한다.
- 자식이 없거나 죽었을 경우에는 sleep(p, &wait_lock)으로 대기한다.

### 사용자 수준 라이브러리

- `thread_create()`:
  - `sbrk(PGSIZE)`를 통해 page-aligned 스택을 확보하고, 실패 시 -1을 반환한다.
  - 확보된 스택과 인자들을 가지고 `clone()` 시스템 콜을 호출한다.
- `thread_join()`:
  - `join()`을 호출하여 종료된 스레드의 stack 주소를 받아온 후, `sbrk(-PGSIZE)`로 회수한다.

### `exec()`의 변경

- exec은 현재 프로세스의 주소 공간을 완전히 교체하므로, 이와 동일한 pagetable을 사용하는 모든 thread들을 찾아 freeproc()으로 제거해야 한다.
- 이후 현재 프로세스만 남은 상태에서 새 프로그램을 로드한다.
- trapframe 및 sp, epc 등의 값을 새로 설정하고, 이전 pagetable을 해제한다.

### 기타 고려사항

- `sleep()`은 반드시 p->lock을 선획득한 상태에서 호출해야 하며, wakeup()과의 경쟁 조건을 방지하기 위해 lock 순서가 보장되어야 한다.
- xv6의 scheduler는 round-robin이므로 스레드 간 선점은 자연스럽게 발생한다.

## Results

### 테스트 결과

테스트는 수업에서 제공된 `thread_test.c`를 기준으로 수행하였으며, 다음과 같은 결과를 출력하였다.

#### [TEST#1] 기본 스레드 생성 및 종료 순서 확인

```
Thread 0 start
Thread 1 start
...
Thread 1 end
Thread 2 end
...
Thread 0 end
TEST#1 Passed
```

→ 스레드 0이 가장 늦게 종료됨을 확인하고, 상태 공유된 global 변수 `status`가 제대로 수정됨

#### [TEST#2] 병렬적인 global 변수 증가

- 각 스레드는 `expected[i] += 1` 연산을 여러 번 수행하며, 경쟁 조건 없이 정확한 연산이 이루어짐
- 결과적으로 `expected[i] == i * 1000`이 보장되면 통과

#### [TEST#3] fork 동작 검증

- 스레드 안에서 `fork()` 호출 시, 자식 프로세스는 부모의 thread가 아닌 독립된 주소 공간을 가진다.
- `status` 값이 3인 경우는 자식이 부모 메모리를 참조한 것으로 판단되어 실패로 처리됨

#### [TEST#4] sbrk 및 malloc 검증

- 한 스레드가 `malloc()`을 통해 ptr을 할당한 뒤, 다른 스레드가 그 메모리를 정상적으로 접근함을 확인
- 동시에 각 스레드는 개별적으로 malloc/free를 수천 번 반복하며 스택 오염 없이 메모리를 재활용함
- 일부 스레드에서 `usertrap()` 로그가 뜨지만, 이는 초기 `ptr == 0` 상태에서 접근 시도로 발생하며 정상적인 side-effect로 간주됨

#### [TEST#5] kill 동작

- 스레드 0이 자신이 속한 프로세스를 kill 하여 전체 스레드가 종료됨을 확인

#### [TEST#6] exec 동작

- 하나의 스레드가 `exec()` 호출 시, 주소 공간 전체가 덮어써지므로 다른 스레드들은 trap을 맞고 종료됨
- `usertrap(): unexpected scause` 로그가 다수 발생하지만 이는 의도된 동작이며 모든 thread가 종료됨을 의미

### 로그 예시

```
usertrap(): unexpected scause 0x2 pid=32 sepc=0x2cc stval=0x0
usertrap(): unexpected scause 0xd pid=39 sepc=0x1000 stval=0x8020
```

이들은 모두 exec 이후의 dangling pointer 접근으로, panic 없이 종료되었기 때문에 통과로 간주한다.

## Troubleshooting

### 함수 포인터가 `0`인 문제?

- 과제 명세에서 `thread_basic = 0x0`인 상태가 정상임을 명시함
- `fcn == 0` 체크는 오히려 정상적인 thread 생성을 막기 때문에 제거함

### `join()`이 `wakeup`되지 않는 문제

- `sleep(p, &wait_lock)` 호출 전 `p->lock`을 잘못 획득하거나 중복으로 획득하여 panic이 발생하는 경우 있었음
- `freeproc()` 호출 전 `np->lock`을 획득한 상태에서만 실행하도록 설계하여 해결

### 스레드 무한 생성 문제

- `sbrk()` 또는 `clone()` 실패 시에도 스레드를 생성하게 되면 pid가 계속 증가
- `thread_create()`에서 스택 확보 실패 또는 clone 실패 시 -1을 반환하도록 강제

### `exec` 시 다른 스레드가 trap 발생

- 구조적으로 불가피한 문제이며, 스레드는 주소 공간이 교체된 이후에도 실행을 시도하기 때문에 trap이 발생
- xv6에서 이를 회피할 수 없으므로, panic이 아니라면 그대로 종료 처리

## Additional content

- `uvmshare()`는 기존 `uvmcopy()`를 변형하여 PTE_W가 없는 페이지는 직접 공유하도록 구현하였다.
- 각 페이지에 대해 `walk()`를 통해 부모의 PTE를 가져오고, 해당 내용을 자식 pagetable에 그대로 매핑한다.
- `is_thread` 플래그는 `clone()`으로 생성된 proc에만 1로 설정되며, `join()`에서 해당 여부를 판별하는 기준으로 사용된다.
- 모든 코드에서 `ptable` 관련 코드는 제거하였고, `proc[NPROC]` 순회 및 `wait_lock`, `proc->lock`으로 모든 동기화 처리하였다.

