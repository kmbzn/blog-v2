# Project 02: Implementing a simple kernel-level thread  
Operating System  

제출 마감 기한:  
2025. 05. 25. 23:59  

## Overview 개요  
- 이 프로젝트는 xv6 운영체제에서 커널 수준 스레드(kernel-level thread)의 단순화된 버전을 구현하는 것이다.
- 커널 수준 스레드는 하나의 프로세스가 여러 실행 컨텍스트(레지스터 상태, 스택)를 가지면서 주소 공간, 파일 descriptor 등의 자원은 공유하는 구조를 가능하게 한다.

## Key Implementation Requirements 핵심 구현 요구사항  
- 새로운 시스템 호출 `clone()`을 구현해 새로운 커널 수준 스레드를 생성
- 새로운 시스템 호출 `join()`을 구현해 커널 수준 스레드 종료 대기
- 사용자 수준 라이브러리 함수 `thread_create()`와 `thread_join()`을 작성하여 위 시스템 호출을 감쌈
- `kernel/proc.c` 내의 관련 함수들을 수정하여 커널 수준 스레드가 올바르게 동작하도록 할 것

## Special Characteristics 특성  
이 xv6 커널 수준 스레드는 기존의 일반적인 스레드와 다음과 같은 차이점이 있다:

- 각 스레드는 `clone` 시점에 부모 프로세스의 파일 descriptor 테이블을 복사하여 소유한다
- 메인 스레드가 `exit()`을 호출하면 모든 스레드가 종료된다 (프로세스 전체 종료)
- 어떤 스레드라도 `exit()`을 호출하면 해당 스레드는 종료된다
- `proc` 구조체를 스레드 제어 블록(TCB)로 재사용할 수 있다

## API Details: System calls 시스템 콜  

```c
int clone(void(*fcn)(void*, void*), void *arg1, void *arg2, void *stack);
```

- 프로세스의 주소 공간을 공유하는 새로운 커널 수준 스레드를 생성
- `fcn`: 스레드가 실행할 함수
- `arg1`, `arg2`: 스레드에 전달될 인자
- `stack`: 스레드 사용자 공간의 스택 (페이지 정렬 필요, 최소 1 페이지 이상)
- 성공 시 새 스레드의 PID 반환, 실패 시 -1 반환

```c
int join(void **stack);
```

- 자식 스레드가 종료될 때까지 대기
- `stack`: 종료된 스레드의 스택 주소를 저장할 포인터
- 성공 시 종료된 스레드의 PID 반환, 실패 시 -1 반환

## API Details: User Library Functions 사용자 라이브러리 함수  

- `user/thread.h`와 `user/thread.c`에 구현
- Makefile에 `thread.o`를 추가하여 링크
- `int thread_create(void (*start_routine)(void *, void *), void *arg1, void *arg2);`  
  - 스택과 `clone`을 위한 메모리 할당
  - 새 스레드의 PID 반환 또는 -1 반환
- `int thread_join();`  
  - 종료될 스레드를 기다리고 해당 스택을 해제
  - 종료된 스레드의 PID 반환 또는 -1 반환

## System Call Modifications 시스템 콜 수정  

- 다음 시스템 호출들이 스레드와 함께 정상 작동하도록 보장해야 함:

  - `fork`: 스레드도 주소 공간을 복사해서 정상적으로 호출되어야 함
  - `exec`: 모든 스레드를 정리하고 새 프로세스를 시작
  - `sbrk`: 여러 스레드가 메모리를 안전하게 할당 가능해야 함
  - `kill`: 종료되는 스레드가 모든 스레드를 함께 종료시켜야 함
  - `sleep`: 호출한 스레드에만 영향을 미쳐야 함
  - `pipe`: 모든 스레드가 화면에 출력할 수 있어야 함

## Tips for Development 개발을 위한 팁  

- 기본 xv6 스케줄러(라운드 로빈)를 그대로 사용
- xv6의 `fork`, `exec`, `exit`, `wait` 코드를 면밀히 분석
- 경쟁 조건 방지를 위해 적절한 잠금 사용
- 리소스 누수를 방지하기 위해 적절한 해제 및 메모리 관리 수행
- 스레드와 프로세스의 차이를 **명확히 이해할 것**

  - 어떤 자원이 공유되고 어떤 자원이 독립적인지 주의 깊게 구분
  - 이 프로젝트에서 제공되는 기본 코드는 이미 일부 변경된 코드이며, 그 변경 내용을 위키에 문서화해야 함

## Wiki 위키  

- **Design**: 요구사항 충족을 위한 구현 접근 방식 설명
- **Implementation**: 주요 코드 수정 및 그 목적 설명
- **Results**: 구현 결과 증거 제시 (컴파일 로그, 실행 화면, 프로그램 설명 등)
- **Troubleshooting**: 문제 상황과 해결 과정 서술
- **Additional content**: 필요 시 관련 자료 포함 가능

## Evaluation 평가  

- **Completeness**: xv6 시스템이 사양에 맞게 정상 작동해야 함
- **Wiki & Comment Grading**: 위키 문서화 품질도 평가에 반영됨. 최대한 상세히 작성할 것
- **Deadline**: 마감 기한 엄수. 마감 후에는 GitHub 쓰기 권한이 철회됨

  - **공유하거나 복사하지 마시오!**

## Submission 제출  

- GitHub를 통해 코드와 위키를 제출
  - 공지사항 참조하여 새 레포지토리 생성
  - 레포지토리 이름은 `project02-[student ID]`로 설정
  - 위키 파일 이름: `05_project02_[class number]_[student ID].pdf`
- 제출 마감일: **2025년 5월 25일 23:59**
  - 마감일 이후 2025년 5월 26일 23:59까지 이메일 제출 가능. 단, 점수의 50%만 인정함.