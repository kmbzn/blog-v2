# Project 02: Test Code
Implementing a simple kernel-level thread

Due date  
2025. 05. 28. 23:59

## Notice

- **프로젝트 마감일이 연장되었습니다.**
  - GitHub에 **5월 28일 11:59PM까지** 제출하세요.
  - 지각 제출은 5월 29일 11:59PM까지 이메일로 보내세요.
  - 프로젝트 3은 29일에 공개됩니다.

- **이번 과제는 제공된 모든 테스트 케이스만 정확히 동작하면 통과입니다. (포기하지 마세요!)**
  - 예제의 출력 메시지는 예시일 뿐이므로 자유롭게 작성해도 됩니다.
  - 출력 숫자나 순서는 정확히 일치할 필요 없습니다.
  - 결과는 논리적으로 올바르면 됩니다.
  - 결과가 다르게 나왔다면, 그 이유를 위키에 작성하세요.

## Tips

- 스레드 간에 공유되는 것과 공유되지 않는 것을 고려하고 구현하세요.
- 함수 주소는 0으로 보일 수 있습니다.

```
(gdb) p/x &main_thread
$1 = 0x0
```

## Test 1

- 이 테스트는 thread API의 기본 기능과 메모리 공유 여부를 검증합니다.
- Thread 0은 전역 변수를 수정하고, 나머지 스레드는 즉시 종료합니다.
- Thread 0은 마지막에 종료해야 하며, 메인 스레드는 Thread 0이 수행한 수정 결과를 확인할 수 있어야 합니다.

```
[TEST#1]
Thread 1 start
Thread 2 start
Thread 3 start
Thread 1 end
Thread 2 end
Thread 3 end
Thread 0 start
Thread 0 end
TEST#1 Passed
```

## Test 2

- 이 테스트는 스레드가 두 개의 인자를 정확히 받고 공유 자원에 올바르게 쓰는지 검증합니다.
- 메인 스레드는 스레드들이 올바르게 동작했는지도 함께 검사합니다.

```
[TEST#2]
Thread 0 start, iter=0
Thread 0 end
Thread 1 start, iter=1000
Thread 1 end
Thread 2 start, iter=2000
Thread 2 end
Thread 3 start, iter=3000
Thread 3 end
Thread 4 start, iter=4000
Thread 4 end
TEST#2 Passed
```

## Test 3

- 이 테스트는 fork가 올바르게 작동하는지 검증합니다.
- fork 이후, 부모 프로세스는 기존 메인 스레드의 주소 공간을 유지하고,
  자식 프로세스는 별도의 주소 공간을 가져야 합니다.
- 자식이 부모의 주소 공간을 공유한다면 에러를 감지합니다.

```
[TEST#3]
Thread 0 start
Thread 1 start
Thread 2 start
Thread 3 start
Child of thread 0 start
Child of thread 0 end
Child of thread 1 start
Child of thread 1 end
Child of thread 2 start
Child of thread 2 end
Child of thread 3 start
Child of thread 3 end
Thread 0 end
Thread 1 end
Thread 2 end
Thread 3 end
TEST#3 Passed
```

## Test 4

- 이 테스트는 sbrk 호출을 스레드가 제대로 처리하는지 검증합니다.
  - malloc은 내부적으로 sbrk를 호출합니다.
- 하나의 스레드가 할당한 메모리에 다른 스레드가 접근할 때 문제가 없는지 확인합니다.
- 여러 스레드가 각각 메모리를 할당할 경우, 주소가 중복되지 않아야 합니다.

```
[TEST#4]
addr 0 at break = 0x88888801000
addr 1 at break = 0x88888801400
addr 2 at break = 0x88888801800
addr 3 at break = 0x88888801c00
addr 4 at break = 0x88888802000
TEST#4 Passed
```

## Test 5

- 이 테스트는 스레드가 kill 시스템 콜을 제대로 처리하는지 검증합니다.
- 메인 스레드가 종료되면 모든 스레드는 함께 종료되어야 합니다.
- 다른 스레드 중 하나가 종료되면, 그 스레드만 종료되어야 합니다.

```
[TEST#5]
Thread 0 start, pid 29
Thread 1 start, pid 29
Thread 2 start, pid 29
Thread 3 start, pid 29
Thread 4 start, pid 29
Thread 2 end
Thread 0 end
TEST#5 Passed
```

## Test 6

- 이 테스트는 exec 시스템 콜을 스레드가 제대로 처리하는지 검증합니다.
- Thread 0은 thread_fcn 프로그램을 실행합니다.
- exec이 호출되면, 모든 스레드는 종료되고 새로운 이미지로 대체되어야 합니다.

```
[TEST#6]
Thread 0 start
Thread 1 start
Thread 2 start
Thread 3 start
Thread 4 start
Executing...
Thread exec test 0
TEST#6 Passed
```

## Result

```
$ thread_test
[TEST#1] Passed
[TEST#2] Passed
[TEST#3] Passed
[TEST#4] Passed
[TEST#5] Passed
[TEST#6] Passed
All tests passed. Great job!
```