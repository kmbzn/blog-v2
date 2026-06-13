---
sitemap: false
---
# 11. Concurrency

## Concurrency

What do we study in this chapter?
- Introduction
- Introduction to Subprogram-Level Concurrency
- Semaphores
- Monitors
- Message Passing
- Ada support for Concurrency
- Java Threads
- C# Threads
- Concurrency in Functional Languages
- Statement-Level Concurrency

## Introduction

Concurrency can occur at four levels:
- [1] Machine instruction level
- CPU 내부에서 명령어 파이프라이닝, 명령어 간 병렬 실행 등 하드웨어적으로 동시성이 구현
- 현대 CPU는 산술 연산과 메모리 접근 명령어를 동시에 수행 (ADD R1, R2, R3 와 LOAD R4, 0(R5) 가 병렬로 처리)
- [2] High-level language statement level
- [Ex] How data should be distributed over multiple memories and which statements can be executed concurrently
- 소스 코드 차원에서 독립적인 문장들이 병렬로 실행될 수 있음
- [3] Unit level (executing two or more subprogram units simultaneously)
- 함수, 서브루틴, 모듈 등 프로그램 단위들이 독립적으로 동시에 실행
- [4] Program level
- 서로 다른 독립적인 프로그램이 동시에 실행됨. 운영체제에서 프로세스 간 스케줄링

The goal of developing concurrent software is to produce scalable and portable concurrent algorithms
- The number of processors increases
- The lifetime of hardware is relatively short
- Frequent hardware upgrades require software to be portable across platforms

Multiprocessor Architectures
- Late 1950s - one general-purpose processor and one or more special-purpose processors for input and output operations
- Early 1960s - multiple complete processors, used for program-level concurrency
- Job scheduler of the OS distributes job to processors
- Mid-1960s - multiple partial processors, used for instruction-level concurrency

Single-Instruction Multiple-Data (SIMD) machines
- The same instruction simultaneously, each on different data
- No synchronization is required, called as vector processors
- [예] 이미지 필터 적용, 행렬 연산
- Multiple-Instruction Multiple-Data (MIMD) machines
- Multiple processors operate independently but can be synchronized
- Distributed and shared memory system
- [예] 병렬로 웹 요청 처리
- A primary focus of this chapter is shared memory MIMD machines (multiprocessors)

Reason why not evolved faster to make use of concurrent machines
- Power of processors has continually increased
- 초기에는 굳이 다중 프로세서(concurrent machines)를 쓸 필요가 적었음
- Concurrent machines increase the speed of computation with two factors
- Clock rates have become faster with each new generation of processors
- Concurrency have been built into processor architectures
- Many other large computing tasks are now run on machines with large numbers of relatively small processors

Categories of Concurrency
- Physical concurrency - Multiple independent processors (multiple threads of control)
- 멀티코어 CPU에서 각 코어가 독립된 작업 수행 GPU의 병렬 연산
- Logical concurrency - The appearance of physical concurrency is presented by time sharing one processor (software can be designed as if there were multiple threads of control)
- 하나의 프로세서를 시분할(time-sharing) 하여 여러 스레드가 동시에 실행되는 것처럼 보이게 함

Coroutines (quasi-concurrency) have a single thread of control
- 단일 스레드 안에서 명시적으로 제어 전환
- 실제 병렬성 없음, 하지만 논리적 흐름은 분리됨
- Python generator 함수 (yield 사용)
- A thread of control in a program is the sequence of program points reached as control flows through the program
- "Thread of control"은 프로그램 내에서 명령어가 실행되는 제어 흐름의 경로를 의미
- 즉, 프로그램이 실행되면서 어떤 명령어들이 어떤 순서로 실행되는지를 나타내는 흐름
- 하나의 프로세스 내에서 여러 개의 스레드가 존재할 수 있으며, 각 스레드는 독립적인 제어 흐름을 가짐

Motivations for the Use of Concurrency
- Multiprocessor computers capable of physical concurrency are now widely used
- Even if a machine has just one processor, a program written to use concurrent execution can be faster than the same program written for nonconcurrent execution
- I/O 작업을 기다리는 동안 다른 작업을 수행 → 전체 성능 향상
- Involves a different way of designing software that can be very useful—many real-world situations involve concurrency
- 예: 여러 센서, 사용자 입력, 네트워크 요청 등
- Many program applications are now spread over multiple machines, either locally or over a network
- 분산 DB, 채팅 시스템, 온라인 게임 서버

## Introduction to Subprogram-Level Concurrency

A task or process or thread is a program unit that can be in concurrent execution with other program units
- Tasks differ from ordinary subprograms in that:
- A task may be implicitly started
- Ordinary subprograms은 명시적 호출
- When a program unit starts the execution of a task, it is not necessarily suspended
- Ordinary subprograms은 호출자는 중단되고, 서브루틴이 끝나야 계속됨
- When a task’s execution is completed, control may not return to the caller
- Ordinary subprograms은 반드시 호출자에게 제어가 돌아감
- Tasks usually work together
- Task: OS나 시스템 스케줄러가 다루는 논리적 작업 단위 (예: 스케줄링 대상)
- Process: 독립적인 실행 환경. 자체 메모리 공간을 가지고 실행됨. 각각의 프로세스는 다른 프로세스에 간섭 불가
- Thread: 프로세스 내부의 실행 흐름 단위. 같은 메모리 공간을 공유하며, 여러 개가 동시에 실행 가능

Two General Categories of Tasks
- Heavyweight tasks execute in their own address space
- Lightweight tasks all run in the same address space – more efficient
- A task is disjoint if it does not communicate with or affect the execution of any other task in the program in any way
- 서로 통신, 공유, 간섭이 전혀 없는 task, 동시성 제어나 동기화 문제도 없음

Task Synchronization
- A mechanism that controls the order in which tasks execute
- 공유 자원(데이터) 에 접근할 때 충돌이나 오류를 방지하기 위해 꼭 필요함
- Two kinds of synchronization are required when tasks share data
- Cooperation synchronization
- Competition synchronization
- Task communication is necessary for synchronization, provided by:
- Shared nonlocal variables
- 전역 변수, 공유 메모리 가장 일반적이지만, 경쟁 조건(race condition) 발생 가능
- Parameters
- task 간 호출 시 데이터 전달 상대적으로 제한적, 하지만 간단한 데이터 전달에 유용
- Message passing
- 명시적 통신 방식 (send/receive, queue 등)
- 공유 메모리 없이도 동기화 가능

Kinds of synchronization
- Cooperation: Task A must wait for task B to complete some specific activity before task A can continue its execution, e.g., the producer-consumer problem
- 작업 흐름 순서 보장 (Task 간 협력), 작업 간 의존성 존재
- 한 task가 계속 실행되기 위해 다른 task의 특정 작업 완료를 기다려야 함
- Competition: Two or more tasks must use some resource that cannot be simultaneously used, e.g., a shared counter
- 자원 충돌 방지 (Task 간 경쟁), 공유 자원 존재
- 여러 task가 동시에 접근할 수 없는 공유 자원을 사용할 때 충돌을 방지
- Competition is usually provided by mutually exclusive access

Need for Competition Synchronization
- Task A: `TOTAL = TOTAL + 1`
- Task B: `TOTAL = 2 * TOTAL`
- 1. Fetch the value of TOTAL.

- 2. Perform the arithmetic operation.

- 3. Put the new value back in TOTAL.

- Depending on order, there could be four different results
- If task A completes its operation before task B begins, the value will be 8
- If A puts its value back first, the value of TOTAL will be 6
- If B puts its value back first, the value of TOTAL will be 4
- If B completes its operation before task A begins, the value will be 7
- A situation that leads to these problems is sometimes called a race condition

One general method for providing mutually exclusive access
- Allow only a single task to possess shared resource at a time
- Three methods of providing for mutually exclusive access to a shared resource
- Semaphores: 정수값으로 자원 접근 상태를 제어 (wait, signal)
- Monitors: 고급 언어 수준에서 자원 보호를 추상화한 구조 (자체적으로 lock 내장)
- Message passing: 공유 자원을 쓰지 않고, task 간 데이터를 명시적으로 전달
- Message Passing 방식에서는 자원을 직접 공유하지 않기 때문에, 메시지를 주고받는 프로토콜 자체가 상호 배제의 수단

Scheduler
- Providing synchronization requires a mechanism for delaying task execution
- Task execution control is maintained by a program called the scheduler, which maps task execution onto available processors
- 세마포어, 락, 모니터 등의 동기화 구조는 task의 진행 조건을 결정하고 스케줄러는 이를 바탕으로 실제 실행을 제어함

Task Execution States
- New - created but not yet started
- Ready - ready to run but not currently running (no available processor) in task ready queue
- Running
- Blocked - has been running, but cannot now continue (usually waiting for some event to occur)
- Dead - no longer active in any sense
- How is a ready task chosen to move to the running state when the task currently running has become blocked or whose time slice has expired?

Liveness and Deadlock
- Liveness is a characteristic that a program unit may or may not have
- In sequential code, it means the unit will eventually complete its execution
- 함수나 루프가 언젠가는 종료된다면 liveness 보장
- In a concurrent environment, a task can easily lose its liveness
- 여러 task가 동시에 실행되면, 스케줄링/동기화/경쟁 문제로 인해 어떤 task는 영원히 실행되지 않을 수 있음 → liveness 상실
- If all tasks in a concurrent environment lose their liveness, it is called deadlock
- Threat to the reliability of a program

Design Issues for Concurrency
- Competition and cooperation synchronization*
- Controlling task scheduling
- How can an application influence task scheduling
- How and when tasks start and end execution
- How and when are tasks created
- *The most important issue

Methods of providing synchronization
- Semaphores
- Monitors
- Message Passing

## Semaphores

Dijkstra - 1965
- A semaphore is a method controlling access to shared data using integer variables controlled by two atomic functions as a solution to deadlock
- Semaphores have only two operations, wait(또는 P) and release(또는 V)
- Proberen ("시도하다")→ 자원을 시도해서 얻는 연산 → P(S)는 S(세마포어 값)를 감소시키고, 0보다 작으면 대기 (→ 자원이 없다는 뜻)
- Verhogen ("증가시키다")→ 자원을 반환하면서 값 증가시키는 연산 → V(S)는 S 값을 증가시키고, 대기 중인 task가 있다면 하나를 깨움
- Semaphores can be used to implement guards on the code that accesses shared data

A semaphore is a data structure consisting of a counter and a queue for storing task descriptors
- Counter (정수): 자원이 얼마나 사용 가능한지를 나타냄
- Queue (대기열): 자원을 요청했지만 지금은 사용할 수 없는 task들을 보관 → task는 여기서 block 상태로 대기
- A task descriptor is a data structure that stores all of the relevant information about the execution state of the task
- Semaphores can be used to provide both competition and cooperation synchronization
- wait() 연산: Counter가 0 이상이면 감소시키고 자원 접근 허용. 0이면 → Task Descriptor를 Queue에 넣고 block
- release() 연산: Counter 증가. 대기 중인 task가 있으면 → 하나를 Queue에서 꺼내 ready 상태로 복귀

Example: A shared buffer
- Producer와 Consumer가 공유 버퍼(buffer) 를 사용할 때, 오버플로우/언더플로우 없이 안전하게 동작하게 하려는 구조
- The buffer is implemented as an ADT with the operations DEPOSIT and FETCH as the only ways to access the buffer
- Use two semaphores for cooperation: emptyspots and fullspots
- emptyspots: 버퍼에 남은 빈 공간 수 추적
- fullspots: 버퍼에 채워진 항목 수 추적
- The semaphore counters are used to store the numbers of empty spots and full spots in the buffer (to prevent buffer underflow and overflow)

DEPOSIT must first check emptyspots to see if there is room in the buffer
- If there is room, the counter of emptyspots is decremented and the value is inserted
- If there is no room, the caller is stored in the queue of emptyspots
- When DEPOSIT is finished, it must increment the counter of fullspots

FETCH must first check fullspots to see if there is a value
- If there is a full spot, the counter of fullspots is decremented and the value is removed
- If there are no values in the buffer, the caller must be placed in the queue of fullspots
- When FETCH is finished, it increments the counter of emptyspots
- The operations of FETCH and DEPOSIT on the semaphores are accomplished through two semaphore operations named wait and release

Wait and Release Operations

```
wait(aSemaphore)
if aSemaphore’s counter > 0 then
decrement aSemaphore’s counter
else
put the caller in aSemaphore’s queue
attempt to transfer control to a ready task
-- if the task ready queue is empty,
-- deadlock occurs
end
release(aSemaphore)
if aSemaphore’s queue is empty then
increment aSemaphore’s counter
else
put the calling task in the task ready queue
transfer control to a task from aSemaphore’s queue
end

```

Producer and Consumer Tasks (cooperation synchronization)

```
semaphore fullspots, emptyspots;
fullspots.count = 0;
emptyspots.count = BUFLEN;
task producer;
loop
-- produce VALUE —
wait (emptyspots); {wait for space}
DEPOSIT(VALUE);
release(fullspots); {increase filled}
end loop;
end producer;
task consumer;
loop
wait (fullspots);{wait till not empty}}
FETCH(VALUE);
release(emptyspots); {increase empty}
-- consume VALUE –-
end loop;
end consumer;

```

| 항목분류 | 설명 | 역할 |
| --- | --- | --- |
| DEPOSIT()버퍼 연산 | (ADT)버퍼에 데이터를 삽입 | 생산자 역할 (Producer) |
| FETCH()버퍼 연산 | (ADT)버퍼에서 데이터를 꺼냄 | 소비자 역할 (Consumer) |
| wait()세마포어 연산 | 세마포어 값을 1 감소 값이 0보다 작으면 현재 task를 block | 자원 접근 전 확인 및 대기 제어 |
| release()세마포어 연산 | 세마포어 값을 1 증가 대기 중인 task가 있다면 하나를 깨움 | 자원 반환 및 대기 중 task 재실행 허용 |

Semaphores (+competition synchronization)
- task가 동시에 공유 자원에 접근하려고 할 때 충돌을 방지하는 메커니즘
- A third semaphore, named access, is used to control access (competition synchronization) -> 상호 배제(Mutual Exclusion) 를 보장
- The counter of access will only have the values 0 and 1
- Such a semaphore is called a binary semaphore(mutex semaphore)
- Note that wait and release must be atomic!

Producer and Consumer Tasks

```
semaphore access, fullspots, emptyspots;
access.count = 1; // 공유 자원 접근 제어 (Binary Semaphore)
fullstops.count = 0; // 현재 버퍼에 들어있는 데이터 수
emptyspots.count = BUFLEN; // 버퍼의 남은 공간 수
task producer;
loop
-- produce VALUE –-
wait(emptyspots); {wait for space} //공간이 있을 때까지 대기 (cooperation)
wait(access); {wait for access) //자원에 접근할 수 있을 때까지 대기 (competition)
DEPOSIT(VALUE); // buffer에 삽입
release(access); {relinquish access} // 자원 반환
release(fullspots); {increase filled} // 데이터 하나 채워짐 → Producer 깨움
end loop;
end producer;
task consumer;
loop
wait(fullspots);{wait till not empty} // 데이터가 있을 때까지 대기 (cooperation)
wait(access); {wait for access} // 자원에 접근할 수 있을 때까지 대기 (competition)
FETCH(VALUE); // buffer에서 데이터 꺼냄
release(access); {relinquish access} // 자원 반환
release(emptyspots); {increase empty} // 공간 생김 → Consumer 깨움
-- consume VALUE –-
end loop;
end consumer;

```

Evaluation of Semaphores
- 세마포어는 매우 취약한 구조 → 잘못 사용하면 프로그램의 신뢰성, 안정성, 안전성 모두 위협
- Misuse of semaphores can cause failures in cooperation synchronization, e.g., the buffer will overflow if the wait of fullspots is left out
- 버퍼 오버플로우 → Consumer가 읽을 데이터가 없음
- Misuse of semaphores can cause failures in competition synchronization, e.g., the program will deadlock if the release of access is left out
- Deadlock 발생 → 다음 task가 자원을 기다리며 무한 대기
- Unfortunately, ideal programmers are rare
- 세마포어는 매우 정밀한 제어를 요구하며, 작은 실수 하나로도 치명적인 버그(데드락, 경쟁조건, 무한루프 등) 발생 가능

## Monitors

Ada, Java, C#
- The idea: encapsulate the shared data and its operations to restrict access
- A monitor is an abstract data type for shared data
- Transferring responsibility for synchronization to the run-time system
- 즉, 프로그래머가 wait()/release()와 같은 세마포어를 직접 다루지 않아도, 모니터가 동기화 책임을 대신 져줌

Monitors (Competition Synchronization)
- Shared data is resident in the monitor (rather than in the client units)
- All access resident in the monitor
- Monitor implementation guarantee synchronized access by allowing only one access at a time → 경쟁 조건(race condition) 을 방지
- Calls to monitor procedures are implicitly queued if the monitor is busy at the time of the call
- 이미 task가 실행 중이면, 다른 task는 자동으로 대기열에 저장됨
- 모든 공유 자원 접근은 모니터 안에서만 이루어짐
- 동시 접근이 발생하지 않도록 운영체제 또는 런타임이 자동 제어
- 프로그래머는 lock / release 같은 세부 제어를 직접 다루지 않음

```java
class BufferMonitor {
private int[] buffer;
private int count;
public synchronized void deposit(int item) {
// 자원에 대한 단일 접근 보장
}
public synchronized int fetch() {
// 다른 task는 자동 대기
}
}

```
- synchronized 키워드 덕분에 한 번에 하나의 thread만 입장 가능
- 다른 thread는 자동으로 큐에 대기됨

```
procedure producer(){
while (true){
item = produceItem();
ProducerConsumer.add(item);
}
}
monitor ProducerConsumer{
int itemCount = 0;
condition full;
condition empty;
procedure add(item){
if (itemCount == BUFFER_SIZE){
wait(full);
← 버퍼가 가득 찼으면 대기
}
putItemIntoBuffer(item);
itemCount = itemCount + 1;
if (itemCount == 1){
notify(empty
← 소비자에게 버퍼가 비어 있지 않음을 알림
}
procedure consumer(){
while (true){
item = ProducerConsumer.remove();
consumeItem(item);
}
}
// 생산자는 항상 아이템을 생성하고 add() 시도
// 소비자는 항상 remove()를 호출하고 consume
}
procedure remove(){
if (itemCount == 0){
wait(empty);
← 버퍼가 비어 있으면 대기
}
item = removeItemFromBuffer();
itemCount = itemCount - 1;
if (itemCount == BUFFER_SIZE - 1){
notify(full);
← 생산자에게 공간이 생겼음을 알림
}
return item;
}

```

| 구성 | 설명 |
| --- | --- |
| ProducerConsumer | 공유 버퍼와 동기화 로직이 포함된 모니터 |
| itemCount | 현재 버퍼에 저장된 아이템 수 |
| full, empty | 조건 변수(condition) — 버퍼가 가득 찼거나 비었을 때 대기 |
| add(item) | 생산자가 아이템을 버퍼에 추가하는 모니터 절차 |
| remove() | 소비자가 버퍼에서 아이템을 꺼내는 모니터 절차 |
- 모니터 내부에 add()와 remove()를 정의 → 상호 배제 자동 보장
- wait() 호출 시 → 자동으로 조건 변수 큐에 등록됨 (언어/런타임이 처리)

Monitors (Cooperation Synchronization)
- Cooperation between processes is still a programming task
- Programmer must guarantee that a shared buffer does not experience underflow or overflow
- 모니터는 add()와 remove() 호출 시 한 번에 하나의 task만 접근하게 함 → 상호 배제는 자동 보장
- 하지만 "버퍼가 비었을 때 소비자를 기다리게 하고", "가득 찼을 때 생산자를 기다리게 하는" 로직은 직접 짜야 함
- 협력의 순서와 조건 판단은 여전히 프로그래머가 코드로 명시해야 함

Evaluation of Monitors
- A better way to provide competition synchronization than are semaphores
- 버그 발생률 감소 (race condition, deadlock)
- 코드 가독성과 유지보수성 증가
- 세마포어보다 안전한 고수준 추상화
- Semaphores can be used to implement monitors
- Monitors can be used to implement semaphores
- Support for cooperation synchronization is very similar as with semaphores, so it has the same problems

## Message Passing

Message passing is a general model for concurrency
- 메시지를 보내고 받는 것이 동기화(synchronization) 의 수단
- It can model both semaphores and monitors
- 자원 요청/해제를 메시지로 구현 가능
- It is not just for competition synchronization
- Central idea: task communication is like seeing a doctor
- Most of the time she waits for you or you wait for her, but when you are both ready, you get together, or rendezvous

Message Passing Rendezvous
- To support concurrent tasks with message passing, a language needs:
- A mechanism to allow a task to indicate when it is willing to accept messages
- A way to remember who is waiting to have its message accepted and some “fair” way of choosing the next message
- When a sender task’s message is accepted by a receiver task, the actual message transmission is called a rendezvous

## Ada Support for Concurrency

The Ada 83 Message-Passing Model
- Ada tasks can be more active than monitors
- Monitor: management services for the shared data
- 수동적 관리자 – 외부 호출에 응답, 내부 메서드 호출
- Task: managers that can reside with the resource they manage
- 능동적 관리자 – 자체 로직 보유, 메시지 수신 및 처리, entry point를 통한 message passing
- It has specification and body parts, like packages; the spec has the interface, which is the collection of entry points: (어떤 메시지를 받을 수 있는지를 정의)
- Entry points: locations where it can accept messages from other tasks

```ada
task Task_Example is
entry ENTRY_1 (Item : in Integer);
end Task_Example;

```
- 다른 task가 ENTRY_1으로 메시지를 보내고 rendezvous 할 수 있음

Task Body
- The body task describes the action that takes place when a rendezvous occurs
- entry point로 메시지를 수신했을 때 어떤 동작을 수행할지를 명시
- A task that sends a message is suspended while waiting for the message to be accepted and during the rendezvous
- 즉, rendezvous는 완전한 동기적 통신 → 두 task 모두 준비되어야 실행됨
- Entry points in the spec are described with accept clauses in the body

```ada
accept entry_name (formal parameters) do
...
end entry_name;

```

Example of a Task Body
- Skeletal body

```ada
task body Task_Example is
begin
loop -- task가 지속적으로 메시지를 기다리고 처리함
accept Entry_1 (Item: in Float) do
...
end Entry_1;
end loop;
end Task_Example;

```
- 메시지가 도착해야 do ... end 블록이 실행됨

Ada Message Passing Semantics
- The task executes to the top of the accept clause and waits for a message
- Task는 accept 문까지 실행되고, 해당 entry point로 메시지가 올 때까지 block 상태가 됨 즉, receiver는 미리 대기
- During execution of the accept clause, the sender is suspended
- accept가 준비되지 않았다면: 진입 대기 (entry queue에 저장)
- accept가 준비되었을 경우: 둘이 rendezvous를 수행
- accept parameters can transmit information in either or both directions
- 파라미터를 통해 입력(in), 출력(out), 또는 입출력(in out) 전달 가능
- Every accept clause has an associated queue to store waiting messages
- 각 entry는 자체적인 entry queue를 가짐
- 여러 task가 동시에 메시지를 보내는 경우 → 순서대로 큐에 저장
- accept가 실행되면 → 큐에서 하나 꺼내서 처리

Rendezvous Time Lines

Message Passing: Server/Actor Tasks
- A task that has accept clauses, but no other code is called a server task (the example above is a server task)
- A task without accept clauses is called an actor task
- An actor task can send messages to other tasks
- Note: A sender must know the entry name of the receiver, but not vice versa (asymmetric)

Graphical Representation of a Rendezvous
- Ada task that sends a message to another task must know the entry name in that task
- A task entry need not know the name of the task from which it will accept messages
- → Asymmetry

| 송신자 | 수신자 |
| --- | --- |
| 수신자의 정확한 식별자(entry 포함) 필요 | 발신자의 이름이나 수 알 필요 없음 |
| 능동적으로 호출 | 수동적으로 대기 |
| 제어 흐름을 넘긴다 | 제어 흐름을 받는다 |

Multiple Entry Points
- Tasks can have more than one entry point
- The specification task has an entry clause for each
- The task body has an accept clause for each entry clause, placed in a select clause, which is in a loop
- 동시 요청이 있다면 순서/정책에 따라 선택

A Task with Multiple Entries
- Following skeletal teller task

```ada
task body Teller is
loop
select
accept Drive_Up(formal params) do
...
end Drive_Up;
…
or
accept Walk_Up(formal params) do
...
end Walk_Up;
...
end select;
end loop;
end Teller;

```
- The action of the select: examine the queues associated with the two accept clauses

Semantics of Tasks with Multiple accept Clauses
- If exactly one entry queue is nonempty, choose a message from it
- → 해당 entry에서 메시지를 수락하고 rendezvous
- If more than one entry queue is nonempty, choose one, nondeterministically, from which to accept a message
- → 비결정적(nondeterministic) 으로 하나를 선택해 수락
- If all are empty, wait → 모든 entry가 준비될 때까지 block 상태 유지
- The construct is often called a selective wait
- Extended accept clause - code following the clause, but before the next clause
- Executed concurrently with the caller
- Sender와 Receiver가 연결되어 있는 동안 Sender는 suspended 상태로 대기 중

Cooperation Synchronization with Message Passing
- Provided by Guarded accept clauses

```ada
when not Full(Buffer) =>
accept Deposit (New_Value) do
...
end

```
- An accept clause with a with a when clause is either open or closed
- when 절을 통해 accept 문이 열릴지 닫힐지 결정됨(Guard는 Boolean 조건식)
- A clause whose guard is true is called open
- A clause whose guard is false is called closed
- A clause without a guard is always open
- 협력 동기화(cooperation) → task가 특정 상태일 때만 메시지를 받아들이도록 함 → 예: 버퍼가 비었을 때는 Read 수락 불가, 꽉 찼을 때는 Write 수락 불가

Semantics of select with Guarded accept Clauses:
- select first checks the guards on all clauses
- If exactly one is open, its queue is checked for messages
- If more than one are open, non-deterministically choose a queue among them to check for messages
- If all are closed, it is a runtime error
- A select clause can include an else clause to avoid the error
- When the else clause completes, the loop repeats

Competition Synchronization with Message Passing
- Modeling mutually exclusive access to shared data
- 공유 자원(예: 버퍼) 에 대해 하나의 task만 접근하도록 제한하는 것
- Example--a shared buffer
- Encapsulate the buffer and its operations in a task
- Competition synchronization is implicit in the semantics of accept clauses
- Only one accept clause in a task can be active at any given time
- 자동 상호 배제→Ada의 메시지 패싱 모델 상, 한 시점에 하나의 accept 절만 활성화 가능

Shared Buffer Code
- Ada task implementation

```ada
task body Buf_Task is
Bufsize : constant Integer := 100;
Buf : array (1..Bufsize) of Integer;
Filled : Integer range 0..Bufsize := 0;
Next_In, Next_Out : Integer range 1..Bufsize := 1;
begin
loop
select
when Filled < Bufsize =>
accept Deposit(Item : in Integer) do
Buf(Next_In) := Item;
end Deposit;
Next_In := (Next_In mod Bufsize) + 1;
Filled := Filled + 1;
or
when Filled > 0 =>
accept Fetch(Item : out Integer) do
Item := Buf(Next_Out);
end Fetch;
Next_Out := (Next_Out mod Bufsize) + 1; Filled := Filled - 1;
…
end select
end loop;
end Buf_Task;

```

A Consumer Task
- Ada task implementation

```ada
task Producer;
task body Producer is
New_Value : Integer;
begin
loop
-- produce New_Value --
Buf_Task.Deposit(New_Value);
end loop;
end Producer;
task Consumer;
task body Consumer is
Stored_Value : Integer;
begin
loop
Buf_Task.Fetch(Stored_Value);
-- consume Stored_Value –
end loop;
end Consumer;

```

Concurrency in Ada 95
- Ada 95 includes Ada 83 features for concurrency, plus two new features
- Protected objects: A more efficient way of implementing shared data to allow access to a shared data structure to be done without rendezvous
- 공유 자원에 대한 경쟁 동기화(competition sync) 을 더 빠르고 간결하게 구현
- 메시지를 주고받지 않고, 단순히 동기화된 공유 데이터 접근만 제공
- 언제든지 호출 가능하지만, 내부적으로는 자동 상호 배제가 적용됨
- 자원 보호 중심의 상호 배제
- Asynchronous communication
- 제한적이었던 비동기적 메시지 전달이 가능해짐
- task 간 rendezvous 없이 메시지를 보내거나 처리 지연 없이 응답 처리
- 수신자가 당장 준비되지 않아도, 일정 시간 기다리거나, 특정 조건에서 메시지 처리 없이 넘어갈 수 있는 기능이 추가됨 → `delay`, `requeue`, `abort`

Ada 95: Protected Objects
- A protected object is similar to an abstract data type
- Access to a protected object is either through messages passed to entries, as with a task, or through protected subprograms
- A protected procedure provides mutually exclusive read-write access to protected objects
- A protected function provides concurrent read-only access to protected objects

```ada
protected Buffer is
entry Deposit(Item : in Integer);
entry Fetch(Item : out Integer);
private
Bufsize : constant Integer := 100;
Buf : array (1..Bufsize) of Integer;
Filled : Integer range 0..Bufsize := 0;
Next_In,
Next_Out : Integer range 1..Bufsize := 1;
end Buffer;
protected body Buffer is
entry Deposit(Item : in Integer)
when Filled < Bufsize is
begin
Buf(Next_In) := Item;
Next_In := (Next_In mod Bufsize) + 1;
Filled := Filled + 1;
end Deposit;
entry Fetch(Item : out Integer) when Filled > 0 is
begin
Item := Buf(Next_Out);
Next_Out := (Next_Out mod Bufsize) + 1;
Filled := Filled - 1;
end Fetch;
end Buffer;

```

Evaluation of the Ada
- Message passing model of concurrency is powerful and general
- Protected objects are a better way to provide synchronized shared data
- In the absence of distributed processors, the choice between monitors and tasks with message passing is somewhat a matter of taste
- 설계 스타일이나 팀의 선호에 따라 선택 가능
- 모듈화된 서비스 → task + entry
- 단순 자원 보호 → protected
- For distributed systems, message passing is a better model for concurrency
- 프로세서 간 공유 메모리 접근이 불가능한 구조에서 → message passing은 유일하고 자연스러운 선택지

## Java Threads

The concurrent units in Java are methods named run
- A run method code can be in concurrent execution with other such methods
- The process in which the run methods execute is called a thread
- threads are lightweight tasks
- They all run in the same address space
- extends Thread or implements Runnable

```java
class myThread extends Thread{
public void run () {…}
}
…
Thread myTh = new MyThread ();
myTh.start();

```

Controlling Thread Execution
- The Thread class has several methods to control the execution of threads
- The run method describes the actions of the thread
- The start method starts its thread as a concurrent unit by calling its run method
- The yield is a request from the running thread to voluntarily surrender the processor (짧은 양보 또는 컨텍스트 전환 유도에 사용)
- The sleep method can be used by the caller of the method to block the thread
- The join method is used to force a method to delay its execution until the run method of another thread has completed its execution
- 선행 작업 완료 대기에 매우 유용

```java
public void run() {
...
Thread myTh = new Thread();
myTh.start();
// do part of the computation of this thread
myTh.join(); // Wait for myTh to complete
// myTh.join(2000); // calling thread to wait two seconds for myTh to complete
// do the rest of the computation of this thread
}

```

Thread Priorities
- A thread’s default priority is the same as the thread that create it
- If main creates a thread, its default priority is `NORM_PRIORITY(5)`
- Threads defined two other priority constants, `MAX_PRIORITY(10)` and `MIN_PRIORITY(1)`
- The priority of a thread can be changed with the methods setPriority

```java
Thread t = new MyThread();
t.setPriority(Thread.MAX_PRIORITY); // 우선순위 10

```

Semaphores in Java
- `java.util.concurrent.Semaphore` package defines the Semaphore class
- Counting semaphores
- acquire, release methods
- deposit operation of the producer

```java
fullspots = new Semaphore(0);
emptyspots = new Semaphore(BUFLEN);
// deposit operation of the producer
emptyspots.acquire(); // 버퍼에 빈 공간이 있는지 확인 (없으면 block)
deposit(value); // 실제 데이터를 버퍼에 삽입
fullspots.release(); // 소비자에게 알림: 데이터 하나 채워졌음
// fetch operation of the consumer
fullspots.acquire(); // 데이터가 존재하는지 확인 (없으면 block)
fetch(value); // 버퍼에서 데이터를 꺼냄
emptyspots.release(); // 생산자에게 알림: 빈 공간 하나 생김

```

Competition Synchronization with Java Threads
- A method that includes the synchronized modifier disallows any other method from running on the object while it is in execution

```java
public synchronized void deposit(int i) {…}
public synchronized int fetch() {…}

```
- The above two methods are synchronized which prevents them from interfering with each other
- If only a part of a method must be run without interference, it can be synchronized thru `synchronized (expression) statement`

Cooperation Synchronization with Java Threads
- Cooperation synchronization in Java is achieved via wait, notify, and notifyAll methods
- All methods are defined in Object, which is the root class in Java, so all objects inherit them
- The wait method must be called in a loop
- The notify method is called to tell one waiting thread that the event it was waiting has happened
- The notifyAll method awakens all of the threads on the object’s wait list

Java’s Thread Evaluation
- Java’s support for concurrency is relatively simple but effective
- Not as powerful as Ada’s tasks
- No mechanism for communication, except through shared data

## C# Threads

Loosely based on Java but there are significant differences
- Basic thread operations
- Any method can run in its own thread
- A thread is created by creating a Thread object
- Creating a thread does not start its concurrent execution; it must be requested through the Start method

```csharp
public void MyRun1() { ... }
...
Thread myThread = new Thread(new ThreadStart(MyRun1));
myThread.Start();

```
- A thread can be made to wait for another thread to finish with Join
- A thread can be suspended with Sleep
- A thread can be terminated with Abort

Synchronizing Threads
- Three ways to synchronize C# threads
- The Interlocked class
- Used when the only operations that need to be synchronized are incrementing or decrementing of an integer (`Interlocked.Increment(ref counter);`)
- 간단한 정수 연산(증가, 감소, 교환 등)을 경쟁 조건 없이 atomic하게 처리
- The lock statement
- Used to mark a critical section of code in a thread (`lock (expression) {… }`)
- 특정 코드 블록을 한 번에 하나의 thread만 실행하도록 보호
- The Monitor class
- Provides four methods that can be used to provide more sophisticated synchronization

C#’s Concurrency Evaluation
- An advance over Java threads, e.g., any method can run its own thread
- Thread termination is cleaner than in Java
- Synchronization is more sophisticated

## Concurrency in Functional Languages

Multilisp (extension to Scheme)
Concurrent ML (extension to ML)
F#

Multilisp (extension to Scheme)
- Extended with constructs for parallel computing execution and shared memory
- involve side effects
- Scheme (derived from LISP)
- Properties: Simple syntax, dynamic typing, tail recursion optimization
- s-expression (symbolic expression): a method representing any code or data
- Expressed as a tree structure using a list
- `((operator operand1 operand2 ...))`
- [EX] `define f (lambda (x) … )a`
- `fabcda`
- f: function, others: parameters
- [EX] `+ 3 2`
- +: operator, 3,2: operands
- `'(a b c)`
- `'(a (b c))`

Multilisp (extension to Scheme) supports concurrency
- pcall construct can be used
- Allowed to be evaluated in parallel
- [EX] `(pcall f a b c d)`
- f: function, others: parameters
- Parameters of the function can be evaluated concurrently
- After waiting for all of these evaluations to return a value, the procedure value of the expression f is applied to the argument values resulting from evaluating a, b, c

future construct can be also used (more radical construct than pcall)
- Function is evaluated in a separate thread
- Syntax: `(future <exp>)`
- Semantics:
- Evaluate `<exp>` concurrently with calling program
- Return reference to future immediately
- Block if value of `<exp>` is required
- [EX] `(+ (future (fib (- x 1))) (future (fib (- x 2))))`
- Futures somewhat resemble Lazy Evaluation
- Evaluation delayed until its value is needed but guaranteed

pcall
- fork/join parallelism – 여러 인자를 병렬로 평가 후 하나의 함수에 적용
- future
- asynchronous thread
- block on read
- 비동기 thread 생성 – 표현식을 별도 thread에서 평가, 결과가 필요할 때까지 block

Concurrent ML (extension to ML)
- Supports concurrency
- ML (Meta Language)
- General-purpose, high-level, functional programming language
- Impure functional language (allow side-effects)
- Type inference, static typing, static scoping rules ..
- 함수형 언어에서 변수는 값이 바인딩된 이름일 뿐, 불변(immutable), 새로운 값을 만들면 새로운 이름이 생김
- [EX] `val distance = time * speed ;` (* 변수 선언 (타입 추론 가능) *)
- [EX]

```sml
let
val pi = 3.14159
in
pi * radius * radius
end ; (* 지역 변수 바인딩 *)

```
- [EX] `fun square (x : int) = x * x ;` (* 명시적 타입 함수 정의 *)

Concurrent ML (extension to ML) supports concurrency
- thread and synchronous message passing are supported
- thread can be created with spawn
- Takes function as parameter
- thread is created → the function begins in the new thread
- Channels provide the means of communicating between thread
- Primary operations are for sending (send) and receiving (recv) messages
- `let val mychannel = channel()`
- `send(mychannel, 7)`
- When more than one channel has received
- guarded command do-od construct chooses randomly (Chapter 8)

```sml
structure Hello = struct
open CML
fun hello () = let
val c : string chan = channel ()
(* thread 간 메시지를 전달할 수 있는 채널 객체 생성 *)
in
spawn (fn () => TextIO.print (recv c));
(* 새로운 thread 생성 함수를 인자로 받아 병렬로 실행 *)
send (c, "Hello, world!\n");
exit ()
end
fun main (_, argv) =
RunCML.doit (fn () => ignore (spawn hello), NONE)
end

```

F# support for concurrency based on the same .NET classes
- Developed by Microsoft Research (MSR) based on OCaml, an ML family language
- Conciseness
- There is no need for braces, semicolons, etc
- No need to specify object types (by powerful type inference)
- Convenience
- Functions can be passed as parameters
- Reusable code by combining existing functions
- Correctness
- Strongly-typed
- Values are basically immutable
- Completeness
- Object-oriented and procedural programming are also supported
- Almost anything we can do in C# is possible
- Can use all third-party .NET libraries and tools
- Concurrency

F# support for concurrency based on the same .NET classes (i.e. `System.Threading.Thread`)

```fsharp
let createThread() =
let newThread = new Thread(myConMethod)
newThread.Start()

```
- create the thread and start the execution of the function in the new thread
- Shared immutable data does not require synchronization
- For shared mutable data, locking will be required to prevent corruption of the shared data
- lock function can be used
- `let sum = ref 0`
- `lock(sum) (fun () -> sum := !sum + x)`
- First parameter: variable to be changed, second: lambda expression changing variable
- mutable heap-allocated variable is of type ref
- `:=` assignment operator
- exclamation point (`!`) to get its value

## Statement-Level Concurrency

Objective: Provide a mechanism that the programmer can use to inform compiler of ways it can map the program onto multiprocessor architecture
- 병렬 시스템에서 컴파일러가 병렬 코드로 변환할 수 있도록 프로그래머가 직접 힌트를 제공하는 메커니즘

High-Performance Fortran
- High-Performance Fortran (HPF; ACM, 1993b) is a collection of extensions to Fortran 90
- A collection of extensions that allow the programmer to provide information to the compiler to help it optimize code for multiprocessor computers
- Specify the number of processors, the distribution of data over the memories of those processors, and the alignment of data
- HPF specification statements appear as special comments in a Fortran program `!HPF$`
- It is comments in Fortran but can be recognized in HPF

Primary HPF Specifications
- Number of processors
- [EX] `!HPF$ PROCESSORS procs (n)`
- Specify to the compiler the number of processors that can be used by the code generated for this program
- procs는 논리적 프로세서 집합 이름
- Distribution of data
- [EX] `!HPF$ DISTRIBUTE (kind) ONTO procs :: identifier_list`
- Specifies what data are to be distributed and the kind of distribution that is to be used
- kind can be BLOCK (distribute data to processors in blocks) or CYCLIC (distribute data to processors one element at a time)
- Relate the distribution of one array with that of another
- [EX] `ALIGN list1(index) WITH list2(index+1)`
- BLOCK: 배열을 일정한 덩어리로 나누어 각 프로세서에 분배
- CYCLIC: 하나씩 번갈아 분배 (load balancing에 유리)
- list1와 list2가 같은 방식으로 분포되도록 정렬 (ex. 인접 메모리 접근 최적화)

Statement-Level Concurrency Example
- [EX] In each execution of these assignment statements, the two referenced array elements will be stored in the memory of the same processor

```fortran
REAL list_1 (1000), list_2 (1000)
INTEGER list_3 (500), list_4 (501)
!HPF$ PROCESSORS proc (10)
!HPF$ DISTRIBUTE (BLOCK) ONTO procs :: list_1, list_2
!HPF$ ALIGN list_3 (index) WITH list_4 (index+1)
...
list_1 (index) = list_2 (index)
list_3 (index) = list_4 (index+1)

```
- 실수형 배열 2개 (list_1, list_2) 와 정수형 배열 2개 (list_3, list_4) 선언
- 병렬 실행을 위해 논리적 프로세서 10개를 선언 (이름: proc) 이후의 분산(distribute)은 이 10개의 processor를 기준으로 이루어짐
- list_1, list_2 배열을 10개의 프로세서에 BLOCK 방식으로 나눠서 분산
- BLOCK 분산: 각 프로세서가 연속된 블록 단위로 일부 요소를 소유
- list_3(index)가 list_4(index+1)과 같은 프로세서에 위치하도록 정렬 → 메모리 접근이 병렬화 및 locality 최적화에 유리함 이는 list_3의 인덱스가 list_4보다 1만큼 작게 대응됨을 의미
- list_1과 list_2는 BLOCK으로 같은 방식으로 분포되어 있으므로 병렬 처리 가능
- list_3과 list_4(index+1)는 정렬 조건이 명시되었기 때문에 병렬 처리 시에도 안전

FORALL statement specifies a sequence of assignment statements that may be executed concurrently
- 여러 개의 할당(assignment) 을 병렬로 동시에 실행할 수 있음을 명시하는 구문
- Right side of all 1,000 assignments must be evaluated first, before any assignments take place → permits concurrent execution of all of the assignment statements
- 이는 병렬 루프의 안전성(safety)을 확보

## Summary

Concurrent execution can be at the instruction, statement, or subprogram level
- Physical concurrency: when multiple processors are used to execute concurrent units
- Logical concurrency: concurrent united are executed on a single processor
- Two primary facilities to support subprogram concurrency: competition synchronization and cooperation synchronization
- Mechanisms: semaphores, monitors, rendezvous, threads
- High-Performance Fortran provides statements for specifying how data is to be distributed over the memory units connected to multiple processors