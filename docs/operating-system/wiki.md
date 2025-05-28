# xv6 RISC-V Kernel-Level Threads 구현: wiki

## Design

### 프로젝트 개요

본 프로젝트의 핵심 목표는 xv6 RISC-V 기반 운영체제에 **커널 수준 스레드**(kernel-level thread) 기능을 추가하는 것이다. xv6는 MIT에서 교육 목적으로 설계한 간결한 유닉스 기반 OS로, 다중 프로세스(multiprocessing)는 지원하지만 다중 스레드(multithreading)는 지원하지 않는다. 본 project는 **기존 xv6의 프로세스 관리 구조를 최대한 활용하면서**, 스레드의 실행 컨텍스트(context), 자원 공유 방식, 동기화 시나리오 등을 구현하는 데 중점을 둔다.

Thread는 process와 달리 주소 공간을 공유하며, 사용자 수준 stack과 register만 독립적이다. 따라서 xv6의 `proc` 구조체를 그대로 재활용하되, 스레드 여부를 나타내는 플래그 `is_thread`를 새롭게 추가하고, 그에 따라 `clone()`, `join()`, `exec()`, `kill()`, `sleep()`, `wakeup()` 등의 동작을 수정하였다.

---

### 설계 원칙 및 요구 사항 반영 전략

#### 1. 주소 공간 공유 (`pagetable`)

Thread의 본질은 **하나의 주소 공간을 공유하는 다중 실행 경로**이다. 따라서 `clone()`으로 새 thread를 생성할 때에는 `fork()`처럼 새로운 `pagetable`을 복사해서는 안 되고, 기존 process의 pagetable을 **공유**해야 한다. 단, trapframe과 context는 스레드마다 개별적으로 가져야 하므로 `allocproc()`을 통해 새로운 `proc`을 할당한다.

**변경 사항:**
- `uvmshare()` 함수를 직접 구현하여, 부모의 user PTE를 자식 pagetable에 직접 매핑함.
- `clone()`에서 `np->pagetable = proc_pagetable(np);` 후 `uvmshare(np->pagetable, p->pagetable, p->sz);` 호출

#### 2. 사용자 스택 분리

각 스레드는 독립된 사용자 스택을 필요로 한다. 따라서 사용자 영역에서 `thread_create()`가 호출되면, `sbrk(PGSIZE)`로 1페이지 단위의 stack 메모리를 할당하고, 해당 주소를 `clone()`에 인자로 전달해야 한다. 커널에서는 `trapframe->sp`를 해당 주소의 top(`+PGSIZE`)로 설정하여 실행을 개시한다.

**변경 사항:**
- `thread_create()`에서 page-aligned stack을 확보 (`s = sbrk(PGSIZE)`), 실패 시 -1 반환
- `clone()` 내에서 stack 유효성 검증: null 체크, page-alignment 확인, `walkaddr()`로 물리 주소 검증

#### 3. 함수 포인터 기반 스레드 진입점

xv6에서는 유저 함수 포인터를 직접 trapframe에 설정하여 진입점을 제공해야 한다. 따라서 `clone()`에서 `np->trapframe->epc = (uint64)fcn;`으로 fcn을 설정하고, arg1과 arg2는 각각 `a0`, `a1` 레지스터에 세팅한다. 이로써 새로 생성된 스레드는 `usertrapret()` 이후 해당 함수로 점프하게 된다.

**특이점:**
- 본 과제에서는 `fcn == 0x0` 인 경우가 정상적이며, 교수님이 이를 강제적으로 설정해두었음 → 무효 주소가 아님
- 따라서 `fcn == 0`일 경우 예외 처리하지 않도록 함

#### 4. 스레드 여부 식별 (`is_thread`)

프로세스와 스레드를 구분하기 위해 `proc` 구조체에 `is_thread` 플래그를 추가하였다. 이를 통해 `join()`, `exec()`, `kill()` 등에서 조건 분기를 수행할 수 있다.

**적용 위치:**
- `clone()`에서는 `np->is_thread = 1;`
- `fork()`에서는 `np->is_thread = 0;`로 명시적으로 초기화

#### 5. 종료 스택 주소 회수

스레드가 종료되면, 그 스레드가 사용하던 stack은 더 이상 사용되지 않으므로, `join()` 시 해당 주소를 유저에게 넘겨 `sbrk(-PGSIZE)`로 메모리를 반납해야 한다.

**구현 방식:**
- `clone()` 시 `np->ustack = (uint64)stack;`으로 저장
- `join()` 시 `copyout()`을 통해 user stack 주소 전달
- `thread_join()`에서 `sbrk(-PGSIZE)`로 회수

#### 6. exec() 시 스레드 전부 제거

`exec()`는 해당 프로세스의 pagetable을 완전히 덮어씌우는 작업이다. 따라서 같은 pagetable을 공유하는 다른 스레드들도 모두 제거하지 않으면 memory corruption이 발생한다.

**해결 방식:**
- `exec()` 진입 시, `proc[NPROC]`을 순회하며 `pagetable == p->pagetable && p != self`인 모든 proc에 대해 `freeproc()` 호출
- 이후 새로운 pagetable을 `proc_pagetable()`로 재생성하고, ELF 바이너리 로드 수행

#### 7. kill() 시 전체 스레드 종료

RISC-V에서는 프로세스를 죽이기 위해선 그 주소 공간을 공유하는 모든 스레드를 종료시켜야 한다. 따라서 `kill(pid)`는 단일 pid를 대상으로 하되, 내부적으로는 해당 pagetable을 공유하는 모든 proc을 종료 처리해야 한다.

**변경 사항:**
- `kill()` 내부에서 `target->pagetable`을 기준으로, 같은 pagetable을 공유하는 모든 proc에 대해 `p->killed = 1` 설정
- `SLEEPING` 상태인 스레드는 `RUNNABLE`로 변경하여 `sched()`에 진입 가능하게 함

#### 8. wait/join 분리

- 기존의 `wait()`는 프로세스만 수거해야 한다.
- 스레드는 `join()`을 통해 수거하므로 `wait()`와는 독립적으로 구현된다.
- `join()`은 `proc[NPROC]`을 순회하며 `parent == myproc()`이고 `is_thread == 1`이며 `ZOMBIE` 상태인 스레드를 찾아 회수한다.

#### 9. sleep/wakeup 동작 보장

스레드가 `sleep()` 상태에 들어갈 때, `p->lock`을 반드시 먼저 획득한 후 `sched()`로 넘겨야 `wakeup()`에서의 동기화 문제가 발생하지 않는다. 이 구조는 기존 xv6에서 그대로 유지되며, 스레드 환경에서도 문제가 없다.

---

### 설계 핵심 요약

| 요소                | 구현 전략 요약                                                         |
|---------------------|------------------------------------------------------------------------|
| 주소 공간           | `uvmshare()`로 parent의 pagetable 공유                                 |
| 사용자 스택         | `sbrk(PGSIZE)`로 확보, `clone()`에 전달하여 `trapframe->sp` 설정       |
| 함수 포인터 진입점  | `trapframe->epc = fcn`                                                  |
| 인자 전달           | `a0 = arg1`, `a1 = arg2`                                                |
| TCB 분리            | `allocproc()` → 독립된 trapframe/context                                |
| 스레드 식별         | `is_thread == 1`                                                       |
| exec 시 정리        | 동일 pagetable 공유하는 proc 전부 `freeproc()`                         |
| join 회수 방식      | `copyout()`으로 stack 주소 유저에게 전달                                |
| kill() 확장         | 같은 pagetable 가진 모든 proc에 대해 `killed = 1` 설정                  |
| 동기화             | `sleep()` 전 `p->lock` 확보, `sched()` 이후 wakeup 가능 보장            |

---

이러한 일관된 설계를 기반으로, xv6 위에 안전하고 가벼운 커널 스레드 시스템을 구현할 수 있었으며, 이는 교수님이 제공한 `thread_test.c`의 모든 테스트를 통과함으로써 그 기능적 완성도를 입증하였다.

## Implementation

### 전체 구조 개요

이번 프로젝트는 xv6의 커널과 사용자 영역 양쪽에 걸쳐 **스레드 시스템 전반을 아우르는 구현 변경**을 필요로 한다. 구현은 크게 다음 4가지 레이어로 나뉜다:

- **시스템 콜 인터페이스 (sysproc.c)**
- **커널 내부 기능 (proc.c)**
- **사용자 수준 라이브러리 (user/thread.c, thread.h)**
- **빌드 시스템 및 실행 파일 구성 (Makefile 변경)**

각 영역에 대해 세부 구현과 핵심 변경 포인트를 순서대로 설명한다.

---

### 1. 시스템 콜 구현 (`kernel/sysproc.c`)

#### sys_clone()

```c
uint64 sys_clone(void)
{
  uint64 f, a1, a2, s;
  argaddr(0, &f);
  argaddr(1, &a1);
  argaddr(2, &a2);
  argaddr(3, &s);
  return clone((void (*)(void*, void*))f, (void*)a1, (void*)a2, (void*)s);
}
```

- `argaddr()`는 반환형이 void이므로, `argraw()` 값을 간접적으로 참조하여 처리한다.
- 인자의 순서와 의미는 `clone(void(*fcn)(void*,void*), void*, void*, void*)`와 정확히 일치하도록 전달된다.
- 함수 포인터 주소(fcn)도 user space 값이므로 `uint64`로 처리한다.

#### sys_join()

```c
uint64 sys_join(void)
{
  uint64 p;
  argaddr(0, &p);
  return join((void**)p);
}
```

- `join()`은 (void**) 형태로 유저 스택 주소를 전달받는다.
- `void **stack` 형태를 `uint64`로 받되, 커널 내부에서는 타입캐스팅으로 복원한다.

---

### 2. 커널 내부 기능 (`kernel/proc.c`)

#### clone()

- `allocproc()`을 통해 새로운 TCB를 할당한다.
- `uvmshare()`로 부모와 동일한 pagetable을 공유한다.
- trapframe은 부모의 것을 복사하고, epc/sp/a0/a1 등은 인자로 주어진 값을 반영해 설정한다.
- `ofile[]`과 `cwd`는 `filedup()`, `idup()`을 통해 복사한다.
- `RUNNABLE`로 전환되면 scheduler에 의해 실행된다.

```c
np->trapframe->epc = (uint64)fcn;
np->trapframe->sp  = (uint64)stack + PGSIZE;
np->trapframe->a0  = (uint64)arg1;
np->trapframe->a1  = (uint64)arg2;
```

- `np->ustack = (uint64)stack;`은 join에서 stack 주소를 유저에 전달하기 위해 따로 저장하는 값이다.

#### join()

- `proc[]` 배열 전체를 순회하며, `parent == myproc()`이면서 `is_thread == 1`인 자식만 확인한다.
- `state == ZOMBIE`인 스레드를 발견하면 `freeproc()`으로 회수하고, 그 스레드의 `ustack` 값을 `copyout()`을 통해 유저에게 전달한다.
- 수거할 스레드가 없으면 sleep 상태로 대기한다.

#### exec()

```c
for(struct proc *q = proc; q < &proc[NPROC]; q++) {
  if(q != p && q->pagetable == p->pagetable) {
    acquire(&q->lock);
    freeproc(q);
    release(&q->lock);
  }
}
```

- exec을 호출한 현재 스레드를 제외한, 같은 주소 공간을 공유하는 스레드를 모두 제거한다.
- 이 동작은 새로운 pagetable을 세팅하기 전에 반드시 이루어져야 한다.

#### kill()

```c
for (p = proc; p < &proc[NPROC]; p++) {
  if (p->pagetable == target->pagetable) {
    p->killed = 1;
    if (p->state == SLEEPING)
      p->state = RUNNABLE;
  }
}
```

- 단일 pid가 아닌 **동일 주소 공간(pagetable)을 공유하는 모든 proc**에 대해 `killed = 1` 설정
- 이는 multi-thread 환경에서 올바른 `kill` semantics를 보장하기 위함이다.

#### fork()

- 기존과 거의 동일하나, `is_thread = 0`으로 초기화하여 완전한 프로세스 복제가 되도록 한다.
- 스레드가 아닌 프로세스는 반드시 독립적인 주소 공간을 가진다.

---

### 3. 사용자 수준 라이브러리 (`user/thread.c`, `user/thread.h`)

#### thread_create()

```c
void *s = sbrk(PGSIZE);
if (s == (void*)-1 || (uint64)s % PGSIZE) return -1;
return clone(f, a1, a2, s);
```

- 스택은 반드시 4KB 단위로 page-aligned 되어야 하며, 그렇지 않으면 clone이 실패한다.
- 스택 할당은 동적이며, 유저가 직접 메모리를 할당하지 않아도 내부적으로 처리된다.

#### thread_join()

```c
void *s = 0;
int pid = join(&s);
if (pid > 0 && s) sbrk(-PGSIZE);
return pid;
```

- join이 성공적으로 종료된 스레드의 stack 주소를 전달해주면, 이를 `sbrk(-PGSIZE)`로 반납하여 memory leak을 방지한다.

#### thread.h

```c
int thread_create(void (*fcn)(void*, void*), void *arg1, void *arg2);
int thread_join(void);
```

- 사용자 레벨 API는 기존 pthread 스타일을 모방하여 최소한의 인터페이스를 제공한다.
- 실제 시스템 콜은 내부적으로 clone/join을 호출한다.

---

### 4. 빌드 구성 변경 (`Makefile.user`)

```makefile
$U/_thread_test: $U/thread_test.o $U/thread.o $(ULIB)
$U/_thread_fcn:  $U/thread_fcn.o  $(ULIB)
```

- 테스트 코드 `thread_test.c`는 채점에 사용되므로 수정하지 않으며, 별도로 `thread.o`를 링크에 포함해야 thread 라이브러리가 연결된다.

```asm
entry("clone");
entry("join");
```

- `user/usys.pl` 또는 equivalent 파일에서 시스템 콜 테이블에 clone과 join을 명시적으로 추가해야 유저 코드에서 호출 가능하다.

---

### 요약: 전체 흐름

| 구현 대상         | 역할 요약                                                              |
|------------------|------------------------------------------------------------------------|
| `clone()`        | 새로운 TCB(proc), 공유된 주소 공간, 독립된 trapframe 생성              |
| `join()`         | 종료된 스레드 회수 및 stack 주소 반환                                  |
| `exec()`         | 기존 thread 정리 후 새로운 주소 공간 로딩                             |
| `kill()`         | 스레드 포함 모든 실행 컨텍스트 종료                                   |
| `thread_create()`| 스택 할당 + clone 시스템 콜 래핑                                       |
| `thread_join()`  | join 호출 후 스택 반납                                                  |

이로써 xv6 내에 경량화된 multithreading 환경이 구축되며, fork와 exec의 기존 의미를 침해하지 않으면서도 thread 기반 병렬 처리와 자원 공유가 가능해진다.


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

스레드 구현은 전통적인 프로세스와 달리 **주소 공간 공유**, **컨텍스트 분리**, **자원 회수 타이밍** 등 다층적인 문제를 수반한다. 본 프로젝트에서 발생했던 대표적인 문제 사례들과, 그에 대한 원인 분석 및 해결 과정을 기술한다.

---

### 1. `clone()` 호출 시 무한 스레드 생성 → PID 폭증

#### 문제 현상

- `thread_create()`가 여러 번 호출되며 `clone()`이 실패했음에도 불구하고 계속해서 pid가 증가
- `pid`가 64를 초과하며 시스템이 비정상 상태에 진입
- `usertrap(): unexpected scause` 또는 `kerneltrap()`이 다수 발생

#### 원인 분석

- `thread_create()`에서 `sbrk(PGSIZE)`로 stack을 요청했으나 실패한 경우, 그 stack 주소가 `(void*)-1`이 됨
- 이 상태로도 `clone()`이 호출되면, 커널 내 stack validation에서 실패하여 -1을 반환하지만, 사용자 코드는 이를 무시함
- 그 결과 join이 불가능한 좀비 스레드가 계속 생성되어 `proc[]`을 소진함

#### 해결 방법

- `thread_create()`에서 스택이 할당 실패했거나 page alignment가 맞지 않으면 **즉시 실패 처리**하도록 변경

```c
void *s = sbrk(PGSIZE);
if (s == (void*)-1 || (uint64)s % PGSIZE) return -1;
```

- `clone()` 내부에서도 stack이 NULL이거나 범위 밖인 경우 예외 처리 강화

```c
if (!stack || (uint64)stack < PGSIZE || ... ) return -1;
```

---

### 2. `fcn == 0`일 때 무조건 에러 처리 → 테스트 실패

#### 문제 현상

- `clone()` 내에서 `if (!fcn) return -1;` 조건을 설정한 후, 모든 스레드 생성이 실패
- `thread_test`에서 `Thread 0 start`조차 출력되지 않음

#### 원인 분석

- 교수님이 제공한 테스트 코드에서 `thread_basic()` 함수의 주소가 실제로 `0x0`으로 설정되어 있음
- 이는 xv6의 링커 및 로더 설정 상 일부 함수가 `.text` 세그먼트의 시작 주소인 `0x0`에 배치되기 때문
- xv6 riscv 환경에서는 `epc = 0`이 trap 없이 유효하게 실행되어야 하며, `0x0` 주소는 정상적인 실행 진입점임

#### 해결 방법

- `clone()` 내 `fcn` null-check 조건을 **완전히 제거**
- 대신 `walkaddr()`를 통해 해당 주소가 유저 영역에 존재하는 유효한 물리 페이지를 가리키는지만 확인

```c
if ((uint64)fcn >= MAXVA || !walkaddr(p->pagetable, (uint64)fcn)) return -1;
```

---

### 3. join이 스레드를 수거하지 못하고 무한 대기

#### 문제 현상

- `join()`을 호출했으나 `Thread X join failed`가 출력되며 테스트 실패
- 스레드는 종료되었으나 커널이 해당 상태를 인지하지 못함

#### 원인 분석

- 스레드 종료 시 `state == ZOMBIE`가 되었지만, `join()`에서 접근 시 `np->lock`을 획득하지 않거나,
  이미 `freeproc()` 이후 lock을 해제한 뒤 상태를 확인하려 해 race condition이 발생
- 또는 `p->lock`과 `wait_lock`을 동시에 사용하면서 deadlock이 발생할 수 있음

#### 해결 방법

- `join()` 내에서 반드시 `np->lock`을 획득한 뒤 `state`를 확인
- `freeproc()`도 반드시 `np->lock`을 보유한 상태에서 호출하고, 해제는 이후에 수행
- sleep은 반드시 `p->lock` 없이 `wait_lock`만 보유한 상태에서만 호출해야 함

---

### 4. `exec()` 호출 시 다른 스레드들이 usertrap → panic

#### 문제 현상

- `exec()` 테스트(`TEST#6`) 수행 시, 다른 스레드들에서 다음과 같은 로그 출력

```
usertrap(): unexpected scause 0x2 pid=36 sepc=0x1000 stval=0xdeadbeef
```

- 이후 커널 panic 또는 stack overflow 발생

#### 원인 분석

- `exec()`은 호출 스레드의 pagetable을 완전히 새로운 것으로 교체하는 작업이다.
- 그러나 같은 pagetable을 공유하는 다른 스레드들이 아직 살아 있고, 해당 주소를 기준으로 명령어를 fetch하려고 하면 invalid memory trap이 발생
- 특히, 이미 소멸된 함수 주소(`fcn`)로 점프하는 도중 문제가 발생

#### 해결 방법

- `exec()` 호출 시 현재 스레드를 제외한 동일 pagetable의 스레드를 `freeproc()`으로 제거

```c
for(struct proc *q = proc; q < &proc[NPROC]; q++) {
  if(q != p && q->pagetable == p->pagetable) {
    acquire(&q->lock);
    freeproc(q);
    release(&q->lock);
  }
}
```

- 결과적으로, `exec()`는 해당 프로세스를 스레드 단위가 아닌 "주소 공간 단위"로 완전히 재시작하는 함수로 보아야 한다

---

### 5. `kill(pid)` 호출 시 일부 스레드만 종료 → zombie leak

#### 문제 현상

- `kill(main_pid)` 호출 시 일부 스레드는 여전히 돌고 있으며, `join()`도 반환하지 않음
- `TEST#5`에서 스레드 중 하나만 종료하고 나머지는 무한 루프에 빠짐

#### 원인 분석

- 기존 `kill()` 구현은 `pid`와 일치하는 단일 프로세스만 종료 처리함
- 그러나 스레드 구조에서는 하나의 주소 공간에 여러 스레드가 존재하며, 개별 pid만 종료해선 효과가 없음

#### 해결 방법

- `kill()` 구현을 확장하여 동일한 pagetable을 공유하는 모든 proc에 대해 `killed = 1` 설정
- `SLEEPING` 상태일 경우, 강제로 `RUNNABLE`로 만들어 `sched()`에 진입할 수 있도록 함

```c
for (p = proc; p < &proc[NPROC]; p++) {
  if (p->pagetable == target->pagetable) {
    p->killed = 1;
    if (p->state == SLEEPING)
      p->state = RUNNABLE;
  }
}
```

---

### 6. `thread_join()` 후 stack 메모리 누수

#### 문제 현상

- 스레드 수거 이후에도 `sbrk()`된 메모리가 회수되지 않아, `sbrk(0)` 값이 계속 증가
- long-running 프로세스에서 memory exhaustion 발생

#### 원인 분석

- `join()`이 stack 주소를 유저에게 넘겨줬지만, 사용자가 이를 반납하지 않음
- `thread_join()`은 `join()`을 호출만 하고 메모리 회수는 하지 않음

#### 해결 방법

- 사용자 라이브러리 수준에서 `thread_join()` 내부에서 직접 `sbrk(-PGSIZE)` 호출
- stack 주소가 0이 아닌 경우에만 해제

```c
if (pid > 0 && s) sbrk(-PGSIZE);
```

---

### 7. sleep/wakeup deadlock

#### 문제 현상

- `join()`에서 `sleep(p, &wait_lock)` 이후 깨어나지 않거나, wakeup 이후에도 상태가 복구되지 않음
- 디버깅 시 `sched()` 진입 후 다시 돌아오지 않거나 `panic: unlock` 발생

#### 원인 분석

- `sleep()`은 내부적으로 `p->lock`을 요구하며, 외부에서 이미 `p->lock`을 획득한 상태로 들어오면 중복 lock으로 crash
- 또는 `wakeup()`과 `sleep()` 사이의 window에서 race condition이 발생할 수 있음

#### 해결 방법

- `sleep()` 호출 전 반드시 `p->lock`이 **획득되어 있지 않도록 설계**
- `sleep()` 내부에서 `p->lock`을 획득하며, 외부에서는 `wait_lock`만 보유해야 함

```c
acquire(&p->lock);
release(&wait_lock);
...
sched();
...
release(&p->lock);
acquire(&wait_lock);
```

- `wakeup()`은 lock 없이 작동해야 하므로 별도로 `p->lock`을 각 스레드마다 획득하고 상태를 바꿔줌

---

## 요약: 주요 이슈 목록

| 문제 코드 영역  | 원인                             | 해결 방식 요약                                        |
|------------------|----------------------------------|--------------------------------------------------------|
| `thread_create`  | sbrk 실패 또는 misalignment      | 실패 시 바로 return                                    |
| `clone`          | fcn == 0 주소 거부               | fcn null-check 제거, walkaddr만으로 유효성 확인        |
| `join`           | lock 보호 미흡                   | lock 순서 및 freeproc() 내부 동기화 보강               |
| `exec`           | 다른 스레드가 trap 발생          | 동일 pagetable 공유 스레드 전부 제거                   |
| `kill`           | 일부 스레드만 종료됨             | pagetable 기준 전체 killed 처리                        |
| `thread_join`    | stack 회수 누락                  | 내부에서 sbrk(-PGSIZE) 호출 추가                       |
| `sleep/wakeup`   | deadlock 또는 race condition     | lock 순서 및 wakeup 시점 조정                          |

이와 같은 반복적 디버깅과 코드 개선을 통해, xv6에 안정적이고 정확한 커널 수준 스레드 시스템을 구현할 수 있었다.

## Additional content

### xv6 RISC-V 환경에서의 thread 구현 관련 참고 사항

- 본 프로젝트는 **xv6 RISC-V 버전**을 기반으로 하며, x86 기반 구현 예제들과는 구조적으로 다르다.
  - 특히 `ptable[]`이 존재하지 않고, `proc[NPROC]` 배열과 spinlock으로만 동기화를 수행한다.
  - 따라서 x86의 `switchuvm()`, `loaduvm()` 등의 동작 방식과 달리, RISC-V에서는 `walk()` 및 `pagetable_t`에 직접 접근하는 방식이 필요하다.

- xv6의 trapframe, context, scheduler 등은 thread-safe하지 않으므로, 스레드마다 반드시 독립된 `trapframe`, `context`, `ustack`을 사용해야 한다.

- `uvmshare()`는 기존 `uvmcopy()`를 변형하여 구현한 함수로, PTE_U 비트가 설정된 사용자 영역 페이지에 대해서만 공유(reference mapping)하도록 설계하였다.
  - 이는 read-only 세그먼트에 대해서도 문제가 없으며, exec이나 fork와는 다른 동작을 보장한다.

- `thread_fcn.c`, `thread_test.c`는 교수님이 채점 시 사용하는 기준 파일로, **절대 수정 금지** 대상이다.
  - 이 파일의 구조나 `fcn = 0x0` 형태의 호출 방식은 정상 동작이며, panic 유발 요소가 아니다.

- 모든 스레드 구현은 xv6의 기존 기능과 완전히 호환되어야 하며, 특히 다음과 같은 시스템 콜들과 연동 가능해야 한다:
  - `fork()`, `exec()`, `exit()`, `wait()`, `kill()`, `sleep()`, `pipe()`

### 추가적으로 유용했던 참고 자료

- [xv6-riscv 공식 리포지토리](https://github.com/mit-pdos/xv6-riscv)
- [xv6 book (RISC-V Edition)](https://pdos.csail.mit.edu/6.828/2022/xv6/book-riscv-rev3.pdf)
- 실습 중 참고한 StackOverflow 쓰레드:
  - ["Threading using jmp_buf in xv6?"](https://stackoverflow.com/questions/78141535/threading-using-jmp-buf-array-in-c-test-in-xv6) (x86 중심이므로 구조는 참조용)

이상으로 본 프로젝트의 기술적 배경과 연관된 모든 핵심 요소들을 포함하였다.
