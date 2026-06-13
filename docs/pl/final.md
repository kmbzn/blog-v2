---
sitemap: false
---
# Final Exam

## 1. Parameter Passing Methods

### Semantics Models

- **in mode**: caller → callee 방향, 함수 내부에서 읽기만 가능
- **out mode**: callee → caller 방향, 함수 종료 시 결과 복사
- **inout mode**: 양방향

### Pass-by-value

caller의 값을 복사해서 callee에 전달. callee에서 변경해도 원본에 영향 없음.

```c
void add(int in) { in = in + 10; }
int a = 20;
add(a); // a = 20 그대로
```

장점: 빠름 (scalar 기준)
단점: 크기가 큰 데이터는 복사 비용 증가

### Pass-by-result

함수 종료 시 callee의 지역 변수 값을 caller로 복사 (out mode).
함수 내에서 초기값을 읽지 않음.

```csharp
void Fixer(out int x) { x = 17; }
```

문제점 1: 같은 변수를 두 번 out으로 전달하면 마지막에 복사되는 값에 의존

```csharp
f.Fixer(out a, out a); // a = 17 또는 35 — 순서에 의존
```

문제점 2: 평가 시점 차이

```csharp
DoIt(out list[sub], out sub);
// call-time 평가: list[3] = 17, sub = 5
// return-time 평가: sub가 먼저 5가 되어 list[5] = 17
```

### Pass-by-value-result

진입 시 값 복사 + 종료 시 다시 복사 (inout mode). copy-in/copy-out이라고도 함.

### Pass-by-reference

주소를 전달. callee에서 변경하면 원본도 바뀜.

```c
void add(int &in) { in = in + 10; }
int a = 20;
add(a); // a = 30
```

단점: 의도치 않은 변경, alias 생성 위험

```c
fun(total, total); // first와 second가 같은 변수 — alias
```

### Pass-by-name

실제 매개변수의 표현식을 그대로 넘겨 매 접근 시 재평가. Algol 60에서 사용, 현재는 거의 쓰이지 않음.

### Pass-by-assignment (Python, Ruby)

모든 데이터가 object.
- immutable object (str, int, tuple) → call-by-value 효과
- mutable object (list, dict, set) → call-by-reference 효과

```python
def func(x):
    x = x + 1  # int: 원본 변화 없음

def func(x):
    x.append(5)  # list: 원본 변경됨
```

### 언어별 요약

| 언어 | 기본 방식 | reference 방법 |
|---|---|---|
| C | pass-by-value | 포인터 전달 |
| C++ | pass-by-value | `&` (reference), `const &` (in-mode) |
| Java | pass-by-value | 객체는 참조값을 value로 전달 |
| C# | pass-by-value | `ref` (inout), `out` (result) |
| Python/Ruby | pass-by-assignment | 타입에 따라 다름 |

### swap 예시 분석

```c
void swap(int a, int b) {
    int temp; temp = a; a = b; b = temp;
}
int value = 2, list[5] = {1, 3, 5, 7, 9};
swap(value, list[value]); // (3)
```

- pass-by-value: 변화 없음
- pass-by-reference: value=5, list={1,3,2,7,9}
- pass-by-value-result (call-time 주소 평가): value=5, list={1,3,2,7,9}
- pass-by-value-result (return-time 주소 평가): value=5 후 list[5]에 쓰려 함 → 범위 오류 가능

## 2. Implementing Subprogram (ARI, Static Chain)

### Activation Record (AR)

subprogram 호출 시 runtime stack에 쌓이는 프레임 구조.

| 구성 요소 | 설정 주체 | 역할 |
|---|---|---|
| Return address | Caller | 복귀 위치 |
| Dynamic link | Caller | caller의 ARI를 가리키는 포인터 |
| Actual parameters | Caller | 전달된 인자 |
| Local variables | Callee | 지역 변수 공간 |

- **EP (Environment Pointer)**: 현재 실행 중인 ARI의 base를 가리킴
- 호출 시 현재 EP를 new ARI에 dynamic link로 저장 후, EP를 새 ARI base로 변경
- 종료 시 EP를 dynamic link로 복원

### Prologue / Epilogue

- **Prologue** (Callee, 실행 시작):
  1. old EP를 dynamic link로 저장
  2. 지역 변수 공간 할당

- **Epilogue** (Callee, 실행 종료):
  1. out-mode 파라미터 값 반환
  2. 함수 반환값을 caller 접근 가능한 위치로 이동
  3. stack top을 EP-1로 복원, EP를 dynamic link로 복원
  4. caller 실행 상태 복원
  5. caller에게 제어 이전

### Local Offset / Chain Offset

변수 접근 표기: `(chain_offset, local_offset)`

- **local_offset**: ARI 시작부터 해당 변수까지의 거리 (컴파일 타임 결정)
- **chain_offset**: 몇 번 static link를 따라가야 하는지

static link는 ARI에 추가된 포인터로, 자신을 감싸는 lexical parent의 ARI를 가리킴.

```
Bigsub:   A(offset=3), B(offset=4), C(offset=5)    [depth=0]
  Sub1:   A(offset=3)                              [depth=1]
  Sub2:   B(offset=4)                              [depth=1]
    Sub3: E(offset=4)                              [depth=2]
```

Sub3에서:
- 지역 변수 E: (0, 4)
- Sub2의 B: (1, 4) — B는 Sub2의 첫 지역 변수지만 Sub2에 parameter가 있으면 offset 밀림
- Bigsub의 A: (2, 3)

Sub2에서:
- Bigsub의 A: (1, 3)
- D는 없음 → static semantic error

### Simple vs Stack-Dynamic

- **Simple subprogram**: 재귀 없음, 지역 변수가 모두 static → ARI 고정 크기, 컴파일 타임에 static 할당
- **Stack-dynamic**: 재귀 지원, 호출마다 새 ARI 동적 생성

### Dynamic Scoping

- **Deep access**: dynamic chain(동적 링크) 따라 가장 최근 ARI부터 변수 탐색
  - 속도: O(depth)
  - 단점: 컴파일 타임에 chain 길이 알 수 없음

- **Shallow access**: 변수 이름마다 별도 stack 유지, top이 현재 값
  - 속도: O(1)
  - 단점: subprogram 진입/종료 시 모든 변수 stack push/pop 비용

## 3. Concurrency

### 핵심 용어

- **Task/Process/Thread**: 다른 프로그램 단위와 동시에 실행될 수 있는 단위
- **Physical concurrency**: 실제 여러 프로세서에서 동시 실행
- **Logical concurrency**: 단일 프로세서에서 time-sharing으로 동시 실행처럼 보임
- **Race condition**: 공유 자원에 순서 없이 접근하여 실행 순서에 따라 결과가 달라지는 상황
- **Deadlock**: 모든 task가 영원히 대기하는 상태 (liveness 상실)
- **Liveness**: task가 언젠가 실행을 완료한다는 보장
- **Mutual exclusion**: 공유 자원에 한 번에 하나의 task만 접근

### Synchronization 종류

- **Cooperation synchronization**: task A가 계속 실행되려면 task B의 특정 작업 완료를 기다려야 함 (예: producer-consumer)
- **Competition synchronization**: 동시에 사용할 수 없는 공유 자원에 대한 배타적 접근 보장

### Task 상태

New → Ready → Running → Blocked → Dead

### Semaphore

Dijkstra(1965). counter(정수) + 대기 queue로 구성.

```
wait(s):
  if s.counter > 0 then
    s.counter--
  else
    task를 s.queue에 넣고 block

release(s):
  if s.queue is empty then
    s.counter++
  else
    queue에서 task 하나를 ready 상태로 이동
```

`wait`와 `release`는 반드시 atomic하게 실행되어야 함.

**Cooperation synchronization 예시 (producer-consumer)**

```
semaphore fullspots, emptyspots;
fullspots.count = 0;
emptyspots.count = BUFLEN;

task producer:
  loop
    wait(emptyspots)
    DEPOSIT(VALUE)
    release(fullspots)
  end loop

task consumer:
  loop
    wait(fullspots)
    FETCH(VALUE)
    release(emptyspots)
  end loop
```

**Competition synchronization 추가 (binary semaphore = mutex)**

```
semaphore access, fullspots, emptyspots;
access.count = 1;

task producer:
  loop
    wait(emptyspots)
    wait(access)
    DEPOSIT(VALUE)
    release(access)
    release(fullspots)
  end loop

task consumer:
  loop
    wait(fullspots)
    wait(access)
    FETCH(VALUE)
    release(access)
    release(emptyspots)
  end loop
```

주의: `wait(emptyspots)` → `wait(access)` 순서여야 함. 반대로 하면 deadlock.

**Semaphore 오용 시 문제**
- `release(access)` 누락 → deadlock
- `wait(fullspots)` 누락 → buffer underflow (빈 버퍼에서 FETCH)
- `release(fullspots)` 누락 → consumer가 영원히 대기

### Monitor

공유 데이터를 encapsulate, 한 번에 하나의 task만 접근하도록 런타임이 보장.

- Competition synchronization: 자동 보장
- Cooperation synchronization: 프로그래머가 condition variable로 직접 구현

Java: `synchronized` 키워드

```java
public synchronized void deposit(int item) { ... }
public synchronized int fetch() { ... }
```

Cooperation은 `wait()`, `notify()`, `notifyAll()` 사용 (Object 클래스 메서드).

**Monitor vs Semaphore**:
- Monitor가 더 안전: 공유 데이터가 monitor 내부에만 있고, competition sync가 자동
- Semaphore는 직접 관리하므로 실수 가능성 높음

### Message Passing (Ada)

Ada의 rendezvous 모델: sender와 receiver 모두 준비되면 동기적으로 통신.

```ada
task body Buf_Task is
begin
  loop
    select
      when Filled < Bufsize =>
        accept Deposit(Item : in Integer) do
          Buf(Next_In) := Item;
        end Deposit;
        Filled := Filled + 1;
      or
      when Filled > 0 =>
        accept Fetch(Item : out Integer) do
          Item := Buf(Next_Out);
        end Fetch;
        Filled := Filled - 1;
    end select;
  end loop;
end Buf_Task;
```

- `accept`: 해당 entry로 메시지가 올 때까지 block
- `select`: 여러 accept 중 하나를 선택 (비결정적)
- `when 조건 =>`: guarded accept — 조건이 참일 때만 open

### Java Threads

```java
class MyThread extends Thread {
    public void run() { ... }
}
Thread t = new MyThread();
t.start();
```

주요 메서드:
- `start()`: run()을 새 thread에서 실행
- `yield()`: 프로세서 자발적 양보
- `sleep(ms)`: 지정 시간 block
- `join()`: 해당 thread 완료까지 대기
- `setPriority(n)`: 우선순위 설정 (1~10, 기본 5)

Java Semaphore:

```java
Semaphore emptyspots = new Semaphore(BUFLEN);
Semaphore fullspots = new Semaphore(0);
emptyspots.acquire(); // wait
fullspots.release();  // release
```

### C# Threads

```csharp
Thread t = new Thread(new ThreadStart(MyMethod));
t.Start();
```

동기화 방법:
- `Interlocked.Increment(ref counter)`: 정수 atomic 연산
- `lock(obj) { ... }`: critical section
- `Monitor` 클래스

### Ada 95 Protected Objects

rendezvous보다 가벼운 공유 데이터 보호 메커니즘.

```ada
protected Buffer is
  entry Deposit(Item : in Integer);
  entry Fetch(Item : out Integer);
private
  ...
end Buffer;
```

## 4. Scheme

### 기본 특징

- prefix 표기법: `(operator operand1 operand2 ...)`
- 코드와 데이터 모두 S-expression (리스트 구조)
- static scope, first-class function
- REPL: Read → Eval → Print → Loop

### 핵심 함수

| 함수 | 설명 | 예시 |
|---|---|---|
| `CAR` | 리스트 첫 원소 | `(CAR '(A B C))` → `A` |
| `CDR` | 나머지 리스트 | `(CDR '(A B C))` → `(B C)` |
| `CONS` | 원소를 앞에 붙임 | `(CONS 'A '(B C))` → `(A B C)` |
| `NULL?` | 빈 리스트 여부 | `(NULL? '())` → `#T` |
| `EQ?` | 포인터 동일성 | atom/symbol 비교 |
| `EQV?` | 값 동일성 | 숫자도 비교 가능 |
| `LIST?` | 리스트 여부 | `(LIST? '(A B))` → `#T` |

CAR/CDR 합성 축약형:

```scheme
(CADR x)   ; (CAR (CDR x))       -- 두 번째 원소
(CADDR x)  ; (CAR (CDR (CDR x))) -- 세 번째 원소
(CAAR x)   ; (CAR (CAR x))
(CDAR x)   ; (CDR (CAR x))
```

### DEFINE

```scheme
(DEFINE pi 3.14159)
(DEFINE (square x) (* x x))
; 아래와 동일
(DEFINE square (LAMBDA (x) (* x x)))
```

DEFINE으로 바인딩된 이름은 Java의 `final`처럼 재바인딩 불가.

### 조건문

```scheme
(IF predicate then_expr else_expr)

(COND
  (predicate1 expr1)
  (predicate2 expr2)
  (ELSE default_expr))
```

예시 -- 입장료:
```scheme
(DEFINE (admissionfee age)
  (COND
    ((<= age 6) 0)
    ((< age 60) 5000)
    (ELSE 2500)))

(admissionfee 65) ; → 2500
```

예시 -- 윤년 판별:
```scheme
(DEFINE (leap? year)
  (COND
    ((ZERO? (MODULO year 400)) #T)
    ((ZERO? (MODULO year 100)) #F)
    (ELSE (ZERO? (MODULO year 4)))))

(leap? 2024) ; → #T
```

### 기본 재귀 패턴

```scheme
; 리스트 길이
(DEFINE (length lst)
  (COND
    ((NULL? lst) 0)
    (ELSE (+ 1 (length (CDR lst))))))

; 리스트 합산
(DEFINE (adder lst)
  (COND
    ((NULL? lst) 0)
    (ELSE (+ (CAR lst) (adder (CDR lst))))))

; 리스트 이어붙이기
(DEFINE (append list1 list2)
  (COND
    ((NULL? list1) list2)
    (ELSE (CONS (CAR list1) (append (CDR list1) list2)))))

; 리스트 뒤집기
(DEFINE (my-reverse lst)
  (COND
    ((NULL? lst) '())
    (ELSE (append (my-reverse (CDR lst)) (LIST (CAR lst))))))
```

### 리스트 탐색

```scheme
; 리스트에 원소가 있는지 확인
(DEFINE (member atm lst)
  (COND
    ((NULL? lst) #F)
    ((EQ? atm (CAR lst)) #T)
    (ELSE (member atm (CDR lst)))))

(member 'B '(A B C)) ; → #T
(member 'B '(A C D)) ; → #F
```

### 리스트 비교

```scheme
; 단순 리스트(atom만 포함) 비교
(DEFINE (equalsimp list1 list2)
  (COND
    ((NULL? list1) (NULL? list2))
    ((NULL? list2) #F)
    ((EQ? (CAR list1) (CAR list2))
     (equalsimp (CDR list1) (CDR list2)))
    (ELSE #F)))

; 중첩 리스트도 비교 (일반)
(DEFINE (equal list1 list2)
  (COND
    ((NOT (LIST? list1)) (EQ? list1 list2))
    ((NOT (LIST? list2)) #F)
    ((NULL? list1) (NULL? list2))
    ((NULL? list2) #F)
    ((equal (CAR list1) (CAR list2))
     (equal (CDR list1) (CDR list2)))
    (ELSE #F)))
```

### 집합 연산

```scheme
; 교집합 (두 리스트의 공통 원소)
(DEFINE (guess list1 list2)
  (COND
    ((NULL? list1) '())
    ((member (CAR list1) list2)
     (CONS (CAR list1) (guess (CDR list1) list2)))
    (ELSE (guess (CDR list1) list2))))

(guess '(A B C D) '(B D F)) ; → (B D)
```

### 정렬

```scheme
; 삽입 정렬 -- insert: 정렬된 리스트에 원소 삽입
(DEFINE (insert atm lst)
  (COND
    ((NULL? lst) (CONS atm '()))
    ((< atm (CAR lst)) (CONS atm lst))
    (ELSE (CONS (CAR lst) (insert atm (CDR lst))))))

; sort: insert를 이용한 정렬
(DEFINE (sort lst)
  (IF (NULL? lst)
      '()
      (insert (CAR lst) (sort (CDR lst)))))

(sort '(3 7 5 1 9)) ; → (1 3 5 7 9)
```

### 이진 트리

트리를 `(값 왼쪽 오른쪽)` 형태의 리스트로 표현.
- `(CAR t)`: 루트 값
- `(CADR t)`: 왼쪽 subtree
- `(CADDR t)`: 오른쪽 subtree

```scheme
; 노드 수 계산
(DEFINE (count-nodes t)
  (IF (NULL? t)
      0
      (+ 1
         (count-nodes (CADR t))
         (count-nodes (CADDR t)))))

; 트리 높이
(DEFINE (tree-height t)
  (IF (NULL? t)
      0
      (+ 1 (MAX (tree-height (CADR t))
                (tree-height (CADDR t))))))

; 최댓값 (일반 트리)
(DEFINE (tree-max t)
  (IF (NULL? t)
      -999999
      (MAX (CAR t)
           (tree-max (CADR t))
           (tree-max (CADDR t)))))
```

트리 예시: `'(5 (3 (1 () ()) (4 () ())) (8 (7 () ()) ()))`

### LET

```scheme
(LET ((alpha 7) (beta 3))
  (* alpha beta))
; → 21
; 실제로는: ((LAMBDA (alpha beta) (* alpha beta)) 7 3)

; 근의 공식 예시
(DEFINE (quadratic_roots a b c)
  (LET ((root_part (/ (SQRT (- (* b b) (* 4 a c))) (* 2 a)))
        (minus_b   (/ (- 0 b) (* 2 a))))
    (LIST (+ minus_b root_part)
          (- minus_b root_part))))
```

### map / fold / filter

```scheme
; map: 리스트 각 원소에 함수 적용
(DEFINE (map fun lst)
  (COND
    ((NULL? lst) '())
    (ELSE (CONS (fun (CAR lst)) (map fun (CDR lst))))))

(map (LAMBDA (x) (* x x)) '(1 2 3))     ; → (1 4 9)
(map (LAMBDA (x) (* x x x)) '(3 4 2 6)) ; → (27 64 8 216)

; fold: 오른쪽에서 왼쪽으로 누적
(DEFINE (FOLD f base lst)
  (COND
    ((NULL? lst) base)
    (ELSE (f (CAR lst) (FOLD f base (CDR lst))))))

(FOLD + 0 '(1 2 3 4)) ; → 10
(FOLD * 1 '(2 3 4))   ; → 24

; filter: 조건 만족 원소만 추출
(DEFINE (FILTER pred lst)
  (COND
    ((NULL? lst) '())
    ((pred (CAR lst)) (CONS (CAR lst) (FILTER pred (CDR lst))))
    (ELSE (FILTER pred (CDR lst)))))

(FILTER EVEN? '(1 2 3 4)) ; → (2 4)
(FILTER ODD?  '(1 2 3 4)) ; → (1 3)
```

### 함수 합성

```scheme
(DEFINE (compose f g)
  (LAMBDA (x) (f (g x))))

((compose CAR CDR) '((a b) c d))   ; → c  (CADR)
((compose CDR CAR) '((a b) c d))   ; → (b) (CDAR)

; third = CADDR
(DEFINE (third lst)
  ((compose CAR (compose CDR CDR)) lst))
(third '(1 2 3 4)) ; → 3
```

### Tail Recursion

마지막 연산이 재귀 호출 → 컴파일러가 반복문으로 변환 가능.
Scheme은 tail call optimization을 언어 명세에서 요구함.

```scheme
; 일반 재귀 (tail recursive 아님: * n이 재귀 이후에 실행됨)
(DEFINE (factorial n)
  (IF (<= n 1) 1 (* n (factorial (- n 1)))))

; tail recursive 버전 (accumulator 패턴)
(DEFINE (factorial n)
  (DEFINE (facthelper n acc)
    (IF (<= n 0)
        acc
        (facthelper (- n 1) (* n acc))))
  (facthelper n 1))

; member는 tail recursive: 재귀 호출이 마지막 연산
(DEFINE (member atm lst)
  (COND
    ((NULL? lst) #F)
    ((EQ? atm (CAR lst)) #T)
    (ELSE (member atm (CDR lst)))))
```

### 중첩 리스트 합산

```scheme
; 중첩 리스트도 처리하는 adder
(DEFINE (adder lst)
  (COND
    ((NULL? lst) 0)
    ((LIST? (CAR lst))
     (+ (adder (CAR lst)) (adder (CDR lst))))
    (ELSE (+ (CAR lst) (adder (CDR lst))))))

(adder '(1 (2 3) (4 (5)))) ; → 15
```

### QUOTE

```scheme
(QUOTE (A B C)) ; → (A B C)
'(A B C)        ; 위와 동일 (축약형)
(+ 1 2)         ; → 3 (평가됨)
'(+ 1 2)        ; → (+ 1 2) (평가 안 됨)
```

## 5. ML

### 기본 특징

- 정적 스코프, 강한 타입, 타입 추론 (type inferencing)
- 타입 간 암묵적 변환(coercion) 없음
- immutable 변수
- 사용자 정의 함수 오버로딩 불가 → 다른 이름 사용

### 함수 정의

```sml
fun cube(x : int) = x * x * x;
fun fact(n : int) : int =
  if n <= 1 then 1
  else n * fact(n - 1);
```

반환값: 마지막 표현식의 값.

### 패턴 매칭

```sml
fun fact(0) = 1
  | fact(1) = 1
  | fact(n : int) : int = n * fact(n - 1);

fun length([]) = 0
  | length(h :: t) = 1 + length(t);

fun append([], lis2) = lis2
  | append(h :: t, lis2) = h :: append(t, lis2);

fun reverse([]) = []
  | reverse(h :: t) = append(reverse(t), [h]);

(* member: 리스트에 원소가 있는지 *)
fun member(atm, []) = false
  | member(atm, h :: t) =
    if atm = h then true
    else member(atm, t);
```

### 리스트 연산

| ML | Scheme | 설명 |
|---|---|---|
| `hd` | `CAR` | 첫 번째 원소 |
| `tl` | `CDR` | 나머지 |
| `::` | `CONS` | 앞에 붙이기 |
| `[3, 5, 7]` | `'(3 5 7)` | 리스트 리터럴 |
| `[]` | `'()` | 빈 리스트 |
| `@` | `append` | 리스트 연결 |

### 타입 추론

```sml
fun circumf(r) = 3.14159 * r * r;
(* 3.14159가 real → r: real, 반환값: real *)

fun square(x) = x * x;
(* 리터럴 없음 → 기본값 int → int → int *)
(* square(2.75); → 에러 (real에 int 함수 적용) *)

fun square(x : real) = x * x;
(* 명시적으로 real 지정 *)
```

### val / let

```sml
val distance = time * speed;

let
  val pi = 3.14159
  val r = 2.0
in
  pi * r * r
end;
```

같은 이름을 두 번 val하면 이전 것이 숨겨짐 (shadowing).

### Lambda

```sml
fn(x) => x * x

filter(fn(x) => x < 100, [25, 1, 711, 50, 100]);
(* [25, 1, 50] *)

map(fn(x) => x * x * x, [1, 3, 5]);
(* [1, 27, 125] *)
```

### map / filter

```sml
(* map: 리스트 각 원소에 함수 적용 *)
fun cube x = x * x * x;
val cubeList = map cube;
val newList = cubeList [1, 3, 5]; (* [1, 27, 125] *)

(* filter: 조건 만족 원소만 추출 *)
filter(fn(x) => x mod 2 = 0, [1, 2, 3, 4, 5]);
(* [2, 4] *)
```

### Currying / Partial Application

```sml
fun add a b = a + b;
(* add: int → int → int *)

val add5 = add 5;
(* add5: int → int *)
val result = add5 10; (* 15 *)

(* 커링 vs 튜플 *)
fun add_tuple(a, b) = a + b;   (* int * int → int *)
fun add_curried a b = a + b;   (* int → int → int *)

val add3 = add_curried 3;  (* 부분 적용 → int → int *)
add3 10;                   (* 13 *)
```

### 함수 합성

```sml
fun double x = 2 * x;
fun square x = x * x;
val doubleThenSquare = square o double;
val result = doubleThenSquare 3; (* square(double(3)) = 36 *)
```

## 6. Haskell

### ML과 공통점

정적 스코프, 강한 타입, 타입 추론, 패턴 매칭

### ML과 차이점

- **Lazy evaluation**: 값이 실제로 필요할 때까지 평가 미룸
- **순수 함수형**: 변수 없음, 대입문 없음, side effect 없음
- **type class**: 오버로딩 지원
- 무한 리스트 가능

### 기본 리스트 함수

```haskell
head [1,2,3]       -- 1
tail [1,2,3]       -- [2,3]
init [1,2,3]       -- [1,2]
last [1,2,3]       -- 3
take 2 [1,2,3]     -- [1,2]
drop 2 [1,2,3]     -- [3]
length [1,2,3]     -- 3
reverse [1,2,3]    -- [3,2,1]
sum [1,2,3]        -- 6
product [1,2,3]    -- 6
[1,2] ++ [3,4]     -- [1,2,3,4]
1 : [2,3]          -- [1,2,3]
[1..5]             -- [1,2,3,4,5]
[2,4..10]          -- [2,4,6,8,10]
[1,2,3,4] !! 2     -- 3 (인덱스 접근, 0부터)
```

### 패턴 매칭

```haskell
fact 0 = 1
fact 1 = 1
fact n = n * fact (n - 1)

length [] = 0
length (a:x) = 1 + length x

reverse [] = []
reverse (a:x) = reverse x ++ [a]

product [] = 1
product (a:x) = a * product x

-- drop: 앞에서 n개 제거
drop 0 x = x
drop _ [] = []
drop n (a:x) = drop (n-1) x

-- ++ 직접 구현
[] ++ y = y
(a:x) ++ y = a : (x ++ y)
```

### Guards

```haskell
fact n
  | n == 0    = 1
  | n == 1    = 1
  | otherwise = n * fact (n - 1)

sub n
  | n < 10    = 0
  | n > 100   = 2
  | otherwise = 1
```

### foldr

오른쪽에서 왼쪽으로 누적.

`foldr f v [x1, x2, x3]` = `x1 \`f\` (x2 \`f\` (x3 \`f\` v))`

```haskell
sum     = foldr (+) 0
product = foldr (*) 1
and     = foldr (&&) True
length  = foldr (\_ n -> 1 + n) 0
reverse = foldr (\x xs -> xs ++ [x]) []

-- 계산 과정 추적
foldr (+) 0 [1,2,3,4]
  = 1 + (2 + (3 + (4 + 0)))
  = 10

foldr (*) 1 [1,2,3,4]
  = 1 * (2 * (3 * (4 * 1)))
  = 24

foldr (\_ n -> 1+n) 0 [10,20,30]
  = 1 + (1 + (1 + 0))
  = 3

foldr (\x xs -> xs ++ [x]) [] [1,2,3]
  = (foldr ... [] [2,3]) ++ [1]
  = ([3,2] ++ [1])
  = [3,2,1]
```

### map

```haskell
map (+1) [1,2,3]    -- [2,3,4]
map (*2) [1,2,3]    -- [2,4,6]
map negate [1,2,3]  -- [-1,-2,-3]

-- 재귀 정의
map f [] = []
map f (x:xs) = f x : map f xs
```

### List Comprehension

```haskell
[n*n | n <- [1..5]]
-- [1,4,9,16,25]

[n*n*n | n <- [1..50]]
-- 1부터 50까지 세제곱

[x | x <- [1..20], even x]
-- [2,4,6,8,10,12,14,16,18,20]

-- 약수 구하기
factors n = [x | x <- [1..n], n `mod` x == 0]
factors 15 -- [1,3,5,15]

-- 소수 판별
prime n = factors n == [1, n]
prime 17 -- True

-- 쌍 생성
[(x,y) | x <- [1..3], y <- [4..5]]
-- [(1,4),(1,5),(2,4),(2,5),(3,4),(3,5)]

-- concat (리스트 평탄화)
concat xss = [x | xs <- xss, x <- xs]
concat [[1,2],[3],[4,5]] -- [1,2,3,4,5]
```

### 함수 합성

```haskell
(f . g) x = f (g x)   -- 오른쪽부터 왼쪽으로 적용
odd = not . even
```

### zip / pairs / sorted / positions

```haskell
-- zip: 두 리스트 원소를 쌍으로 묶음 (짧은 쪽 기준)
zip [1,2,3] ['a','b','c','d']  -- [(1,'a'),(2,'b'),(3,'c')]
zip "abc" [1,2,3]               -- [('a',1),('b',2),('c',3)]

-- pairs: 인접 원소 쌍
pairs xs = zip xs (tail xs)
pairs [1,2,3,4]  -- [(1,2),(2,3),(3,4)]

-- sorted: 정렬 여부 확인
sorted xs = and [x <= y | (x,y) <- pairs xs]
sorted [1,2,3,4]    -- True
sorted [1,2,5,3,4]  -- False

-- positions: 특정 값의 인덱스 목록
positions x xs = [i | (x',i) <- zip xs [0..n], x == x']
  where n = length xs - 1
positions 0 [0,1,0,1,1,0]  -- [0,2,5]
```

### all / any

```haskell
all p xs = and [p x | x <- xs]
all even [2,4,6]  -- True
all even [2,3,6]  -- False

any p xs = or [p x | x <- xs]
any odd [2,4,6]   -- False
any odd [2,3,6]   -- True
```

### Lazy Evaluation

```haskell
positives = [0..]
take 5 [1,3..]   -- [1,3,5,7,9]
squares = [n*n | n <- [0..]]

-- 무한 리스트에서 안전한 탐색 (정렬된 리스트 가정)
member2 n (m:x)
  | m < n     = member2 n x
  | m == n    = True
  | otherwise = False

member2 16 squares -- True
member2 5 squares  -- False (빠르게 종료)
```

### Quicksort

```haskell
sort [] = []
sort (h:t) =
  sort [b | b <- t, b <= h]
  ++ [h] ++
  sort [b | b <- t, b > h]
```

### Insertion Sort

```haskell
insert x [] = [x]
insert x (y:ys)
  | x <= y    = x : y : ys
  | otherwise = y : insert x ys

isort [] = []
isort (x:xs) = insert x (isort xs)
```

### Merge Sort

```haskell
merge [] ys = ys
merge xs [] = xs
merge (x:xs) (y:ys) =
  if x <= y then x : merge xs (y:ys)
  else y : merge (x:xs) ys

halve xs = splitAt (length xs `div` 2) xs

msort [] = []
msort [x] = [x]
msort xs = merge (msort ys) (msort zs)
  where (ys, zs) = halve xs
```

### let / where

```haskell
-- let ... in
quadratic a b c =
  let minus_b = -b / (2.0 * a)
      disc    = sqrt(b^2 - 4.0*a*c) / (2.0*a)
  in [minus_b - disc, minus_b + disc]

-- where
quadratic a b c =
  [minus_b - disc, minus_b + disc]
  where
    minus_b = -b / (2.0 * a)
    disc    = sqrt(b^2 - 4.0*a*c) / (2.0*a)
```

## 7. Common Lisp / F#

### Common Lisp

- Scheme보다 크고 복잡한 언어
- static scoping 기본, `special` 선언으로 dynamic scoping 가능
- `DEFUN`: 함수 정의, `SETF`: 값 할당

```lisp
(DEFUN square (x) (* x x))
(SETF A 10)
(LOOP FOR I FROM 1 TO 5 DO (FORMAT T "~A " I))
```

Backquote: `` ` `` + `,`로 일부만 평가 가능

```lisp
`(a (* 3 4) c)   ; → (a (* 3 4) c)  -- 평가 안 됨
`(a ,(* 3 4) c)  ; → (a 12 c)       -- , 뒤만 평가됨
```

member 함수:
```lisp
(DEFUN recursive_member (atm lst)
  (COND
    ((NULL lst) NIL)
    ((EQUAL atm (CAR lst)) T)
    (T (recursive_member atm (CDR lst)))))
```

### F#

- ML/OCaml 계열, .NET 기반
- 함수형 + 명령형 + OOP 지원
- `let`: 값 바인딩, `let mutable`: 가변 변수, `let rec`: 재귀 함수
- `fun`: lambda 표현식, `>>`: 함수 합성, `|>`: pipeline

**재귀 함수 (패턴 매칭)**

```fsharp
let rec factorial n =
  match n with
  | 0 -> 1
  | 1 -> 1
  | _ -> n * factorial (n - 1)
```

**Pipeline `|>`**

```fsharp
let myNums = [1; 2; 3; 4; 5]
let result =
  myNums
  |> List.filter (fun n -> n % 2 = 0)
  |> List.map (fun n -> n * 5)
// result = [10; 20]
```

**함수 합성 `>>`**

```fsharp
let negate x = -1 * x
let square x = x * x

let negateSquare = square >> negate  // (f >> g) x = g(f(x))
negateSquare 3  // square(3)=9, negate(9)=-9
```

**Quicksort**

```fsharp
let rec quicksort list =
  match list with
  | [] -> []
  | firstElem :: otherElements ->
    let smaller =
      otherElements
      |> List.filter (fun e -> e < firstElem)
      |> quicksort
    let larger =
      otherElements
      |> List.filter (fun e -> e >= firstElem)
      |> quicksort
    smaller @ [firstElem] @ larger
```

**Insertion Sort**

```fsharp
let rec insert n ls =
  match ls with
  | [] -> [n]
  | x :: xs ->
    if n > x then x :: insert n xs
    else n :: ls

let rec insertSort ls =
  match ls with
  | [] -> []
  | x :: xs -> insert x (insertSort xs)

// insertSort [3; 1; 4; 2]  -->  [1; 2; 3; 4]
```

**List 고차 함수**

```fsharp
let l = [1; 2; 3; 4; 5]
List.map (fun x -> x * x) l         // [1;4;9;16;25]
List.filter (fun x -> x % 2 = 0) l  // [2;4]
List.fold (fun acc x -> acc + x) 0 l // 15
```


## 7.5. FPL 4-Language Full Comparison

### 기본 정보

| | Scheme | Common Lisp | ML | Haskell |
|---|---|---|---|---|
| 출시 | 1975 | 1984 | 1973 | 1990 |
| 계보 | Lisp 방언 | 여러 Lisp 방언 통합 | 독립 설계 | ML 계열 |
| 크기 | 작고 간결 | 크고 복잡 | 중간 | 중간 |
| 순수 함수형 | 아님 | 아님 | 아님 | **예** |

### 타입 시스템

| | Scheme | Common Lisp | ML | Haskell |
|---|---|---|---|---|
| 타입 시스템 | untyped | untyped | strongly typed | strongly typed |
| 타입 추론 | 없음 | 없음 | 있음 | 있음 |
| 타입 coercion | 없음 | 없음 | 없음 | 없음 |
| 오버로딩 | 없음 | 없음 | 없음 | type class로 지원 |
| 기본 숫자 타입 | 통합 (dynamic) | 통합 (dynamic) | int / real 구분 | Int / Float 구분 |

### 스코프 / 변수

| | Scheme | Common Lisp | ML | Haskell |
|---|---|---|---|---|
| 스코프 | static only | static 기본, dynamic 선택 | static only | static only |
| 동적 스코프 | 없음 | `special` 선언으로 가능 | 없음 | 없음 |
| 변수 특성 | immutable | mutable (`SETF`) | immutable (`val`) | immutable |
| 재정의 | DEFINE 재호출로 shadowing | SETF로 변경 가능 | val 재선언으로 shadowing | 재정의 불가 |

### 평가 방식

| | Scheme | Common Lisp | ML | Haskell |
|---|---|---|---|---|
| 평가 방식 | strict | strict | strict | nonstrict (lazy) |
| 무한 리스트 | 불가 | 불가 | 불가 | 가능 |
| Tail call 최적화 | 언어 명세에서 요구 | 구현 의존 | 구현 의존 | 있음 |
| Side effect | 가능 (`set!`, I/O) | 가능 (`SETF`, I/O) | 가능 (`ref`, I/O) | IO 모나드로만 허용 |

### 문법 — 함수 정의

| | Scheme | Common Lisp | ML | Haskell |
|---|---|---|---|---|
| 함수 정의 | `(DEFINE (f x) ...)` | `(DEFUN f (x) ...)` | `fun f x = ...` | `f x = ...` |
| 재귀 키워드 | 불필요 | 불필요 | 불필요 | 불필요 |
| Lambda | `(LAMBDA (x) ...)` | `(LAMBDA (x) ...)` | `fn x => ...` | `\x -> ...` |
| 패턴 매칭 | 없음 (COND/IF로만) | 없음 (COND/IF로만) | 있음 (`|`) | 있음 (줄마다 함수명 반복) |
| 함수 합성 | compose 직접 정의 | compose 직접 정의 | `o` 연산자 | `.` 연산자 |
| 주석 | `;` | `;` | `(* ... *)` | `--` 또는 `{- -}` |

### 문법 — 조건문

| | Scheme | Common Lisp | ML | Haskell |
|---|---|---|---|---|
| 2분기 | `(IF pred t f)` | `(IF pred t f)` | `if ... then ... else ...` | `if ... then ... else ...` |
| 다분기 | `(COND ...)` | `(COND ...)` | 패턴 매칭 | guards (`|`) 또는 패턴 매칭 |
| 기본값 (else) | `(ELSE ...)` | `(T ...)` | 패턴의 마지막 절 | `otherwise` |

### 문법 — 리스트 연산

| 연산 | Scheme | Common Lisp | ML | Haskell |
|---|---|---|---|---|
| 리스트 리터럴 | `'(1 2 3)` | `'(1 2 3)` | `[1, 2, 3]` | `[1, 2, 3]` |
| 빈 리스트 | `'()` | `NIL` 또는 `'()` | `[]` | `[]` |
| 빈 리스트 검사 | `(NULL? lst)` | `(NULL lst)` | `lst = []` | `null lst` |
| CONS | `(CONS x lst)` | `(CONS x lst)` | `x :: lst` | `x : lst` |
| CAR (첫 원소) | `(CAR lst)` | `(CAR lst)` | `hd lst` | `head lst` |
| CDR (나머지) | `(CDR lst)` | `(CDR lst)` | `tl lst` | `tail lst` |
| 리스트 연결 | `(append l1 l2)` | `(append l1 l2)` | `l1 @ l2` | `l1 ++ l2` |
| 길이 | `(length lst)` | `(length lst)` | `length lst` | `length lst` |

### 문법 — 고차 함수

| 연산 | Scheme | Common Lisp | ML | Haskell |
|---|---|---|---|---|
| map | `(map f lst)` | `(mapcar f lst)` | `map f lst` | `map f lst` |
| filter | `(FILTER pred lst)` | `(remove-if-not pred lst)` | `filter pred lst` | `filter pred lst` |
| fold | `(FOLD f base lst)` | `(reduce f lst)` | `foldl f base lst` | `foldr f v lst` |

### 문법 — 지역 바인딩

| | Scheme | Common Lisp | ML | Haskell |
|---|---|---|---|---|
| 지역 바인딩 | `(LET ((x 1)) ...)` | `(LET ((x 1)) ...)` | `let val x=1 in ... end` | `let x=1 in ...` |
| 함수 아래 정의 | 없음 | 없음 | 없음 | `where` 구문 |
| 표현식 안 정의 | `LET` | `LET` | `let ... in ... end` | `let ... in ...` |

### 불리언

| | Scheme | Common Lisp | ML | Haskell |
|---|---|---|---|---|
| 참 | `#T` | `T` | `true` | `True` |
| 거짓 | `#F` | `NIL` | `false` | `False` |
| AND | `(AND ...)` | `(AND ...)` | `andalso` | `&&` |
| OR | `(OR ...)` | `(OR ...)` | `orelse` | `||` |
| NOT | `(NOT ...)` | `(NOT ...)` | `not` | `not` |

### 예외 처리

| | Scheme | Common Lisp | ML | Haskell |
|---|---|---|---|---|
| 예외 정의 | 구현 의존 | `(define-condition ...)` | `exception E` | `data MyE = ...` |
| 예외 발생 | `(raise ...)` | `(error ...)` | `raise E` | `throw e` |
| 예외 처리 | `(with-exception-handler ...)` | `(handler-case ...)` | `handle E => ...` | `catch action handler` |
| 정리 코드 | 구현 의존 | `(unwind-protect ...)` | 없음 | bracket 패턴 |

### 확장 기능

| | Scheme | Common Lisp | ML | Haskell |
|---|---|---|---|---|
| 매크로 | `define-syntax` (hygienic) | `DEFMACRO` (강력) | 없음 | Template Haskell (별도) |
| 배열 | 없음 (기본) | `MAKE-ARRAY` | array 타입 | Data.Array (별도) |
| 구조체 | 없음 (기본) | `DEFSTRUCT` | record 타입 | data 타입 |
| 반복문 | 없음 (재귀만) | `LOOP`, `DOTIMES`, `DOLIST` | 없음 (재귀만) | 없음 (재귀만) |
| Currying | 수동 (LAMBDA 중첩) | 수동 | 자동 (쉼표 없이) | 자동 |

### 한 문장 요약

| | 요약 |
|---|---|
| Scheme | 작고 순수한 Lisp. 람다 계산법에 가장 가까운 미니멀한 설계. |
| Common Lisp | 기능이 풍부한 실용 Lisp. 명령형과 함수형이 혼재. |
| ML | 함수형 기반의 정적 타입 언어. 타입 추론과 패턴 매칭이 핵심. |
| Haskell | 유일한 순수 함수형. lazy evaluation, 무한 리스트, type class. |



### 핵심 특성 비교

| 항목 | Scheme | Common Lisp | ML | Haskell | F# |
|---|---|---|---|---|---|
| 스코프 | static | static (기본) / dynamic 선택 | static | static | static |
| 타입 시스템 | untyped | untyped | strongly typed | strongly typed | strongly typed |
| 타입 추론 | 없음 | 없음 | 있음 | 있음 | 있음 |
| 타입 coercion | 없음 | 없음 | 없음 | 없음 | 없음 |
| 변수 | immutable | mutable 가능 (`SETF`) | immutable (`val`) | immutable | immutable (기본) / `mutable` 선택 |
| 오버로딩 | 없음 | 없음 | 없음 | type class로 지원 | `inline`으로 흉내 |
| 패턴 매칭 | COND/IF | COND/IF | 있음 | 있음 | 있음 (`match`) |
| Lazy evaluation | 없음 (strict) | 없음 (strict) | 없음 (strict) | 기본 (nonstrict) | 선택적 (`seq`) |
| 순수 함수형 | 아님 (side effect 가능) | 아님 | 아님 | 예 | 아님 |
| 재귀 키워드 | 없음 (DEFINE으로 자동) | 없음 (DEFUN으로 자동) | 없음 (자동) | 없음 (자동) | `rec` 필요 |
| 무한 리스트 | 불가 | 불가 | 불가 | 가능 | `seq`로 가능 |
| 함수 합성 | `compose` 직접 정의 | 직접 정의 | `o` 연산자 | `.` 연산자 | `>>` 연산자 |
| Lambda | `LAMBDA` | `LAMBDA` | `fn` | `\x ->` | `fun` |
| 리스트 구분자 | 공백 `(1 2 3)` | 공백 `(1 2 3)` | 쉼표 `[1, 2, 3]` | 쉼표 `[1, 2, 3]` | 세미콜론 `[1; 2; 3]` |
| CONS | `CONS` | `CONS` | `::` | `:` | `::` |
| CAR | `CAR` | `CAR` | `hd` | `head` | `.Head` |
| CDR | `CDR` | `CDR` | `tl` | `tail` | `.Tail` |
| 리스트 연결 | `append` | `append` | `@` | `++` | `@` |

### 언어 계보

```
LISP (1958)
├── Common Lisp (1984) — 여러 LISP 방언 통합, 대형 언어
└── Scheme (1975)      — 작고 순수한 static scope LISP

ML (1973)
├── SML (Standard ML)
├── OCaml
│   └── F# (2005)    — .NET 기반, 함수형+명령형+OOP
└── Haskell (1990)   — 순수 함수형, lazy evaluation
```

### 조건문 비교

| 언어 | 2분기 | 다분기 |
|---|---|---|
| Scheme | `(IF pred t f)` | `(COND ...)` |
| Common Lisp | `(IF pred t f)` | `(COND ...)` |
| ML | `if ... then ... else ...` | 패턴 매칭 |
| Haskell | `if ... then ... else ...` | guards (`\|`) 또는 패턴 매칭 |
| F# | `if ... then ... else ...` | `match ... with` |

### 함수 정의 비교

| 언어 | 코드 |
|---|---|
| Scheme | `(DEFINE (square x) (* x x))` |
| Common Lisp | `(DEFUN square (x) (* x x))` |
| ML | `fun square(x : int) = x * x;` |
| Haskell | `square x = x * x` |
| F# | `let square x = x * x` |

### 리스트 연산 비교

| 연산 | Scheme | ML | Haskell | F# |
|---|---|---|---|---|
| 빈 리스트 | `'()` | `[]` | `[]` | `[]` |
| 리스트 리터럴 | `'(1 2 3)` | `[1, 2, 3]` | `[1, 2, 3]` | `[1; 2; 3]` |
| 첫 원소 | `(CAR lst)` | `hd lst` | `head lst` | `lst.Head` |
| 나머지 | `(CDR lst)` | `tl lst` | `tail lst` | `lst.Tail` |
| 앞에 추가 | `(CONS x lst)` | `x :: lst` | `x : lst` | `x :: lst` |
| 이어붙이기 | `(append l1 l2)` | `l1 @ l2` | `l1 ++ l2` | `l1 @ l2` |
| 빈 리스트 검사 | `(NULL? lst)` | `lst = []` | `null lst` | `List.isEmpty lst` |

### map / filter / fold 비교

| 연산 | Scheme | ML | Haskell | F# |
|---|---|---|---|---|
| map | `(map f lst)` | `map f lst` | `map f lst` | `List.map f lst` |
| filter | `(FILTER pred lst)` | `filter pred lst` | `filter pred lst` | `List.filter pred lst` |
| fold | `(FOLD f base lst)` | `foldl f base lst` | `foldr f v lst` | `List.fold f acc lst` |
| lambda | `(LAMBDA (x) ...)` | `fn x => ...` | `\x -> ...` | `fun x -> ...` |

### 공통 특성 (모든 FPL)

- first-class function: 함수를 값처럼 사용 가능 (변수 할당, 인자 전달, 반환)
- 재귀로 반복 표현 (loop 대신)
- referential transparency 지향: 같은 입력 → 항상 같은 출력
- higher-order function 지원: map, filter, fold 등

### ML vs Haskell 핵심 차이

| 항목 | ML | Haskell |
|---|---|---|
| 평가 방식 | strict (즉시 평가) | nonstrict (lazy evaluation) |
| 순수성 | 아님 (side effect 가능) | 순수 함수형 |
| 오버로딩 | 불가 (이름을 달리해야 함) | type class로 지원 |
| 무한 리스트 | 불가 | 가능 |
| 함수 이름 반복 | `\|` 구분 | 줄마다 함수 이름 반복 |

### Scheme vs Common Lisp 핵심 차이

| 항목 | Scheme | Common Lisp |
|---|---|---|
| 크기 | 작고 간결 | 크고 복잡 |
| 스코프 | static only | static 기본, dynamic 선택 |
| 변수 | immutable | mutable (`SETF`) |
| 배열/구조체 | 기본 미지원 | `MAKE-ARRAY`, `DEFSTRUCT` |
| 반복문 | 재귀만 권장 | `LOOP`, `DOTIMES`, `DOLIST` |
| 매크로 | 기본 지원 | `DEFMACRO`로 강력 지원 |

## 8. Exception Handling

### 핵심 개념

- **exception**: 하드웨어나 소프트웨어가 감지하는 비정상적/특별한 사건
- **exception handler**: exception 발생 시 실행되는 처리 코드
- **raising**: exception 발생시키기
- **propagation**: handler가 없으면 호출자에게 exception 전달
- **termination**: handler 완료 후 raising 블록으로 돌아가지 않음
- **resumption**: handler 완료 후 raising 지점에서 계속 실행 (Ruby의 `retry`)

### 언어별 Syntax 비교

| 언어 | try 시작 | catch/except | throw/raise | 정리 코드 |
|---|---|---|---|---|
| Ada | `begin` | `exception when E =>` | `raise E` | 없음 |
| C++ | `try` | `catch(Type e)` | `throw expr` | 없음 |
| Java | `try` | `catch(ExType e)` | `throw new E()` | `finally` |
| Python | `try:` | `except ExType:` | `raise E` | `finally:` |
| Ruby | `begin` | `rescue ExType` | `raise` | `ensure` |

### Ada

```ada
begin
  -- 코드
exception
  when Constraint_Error =>
    Put_Line("범위 초과");
  when Data_Error =>
    Put_Line("데이터 오류");
  when others =>
    Put_Line("기타 오류");
end;
```

사전 정의 예외: `Constraint_Error`, `Program_Error`, `Storage_Error`, `Tasking_Error`

사용자 정의:
```ada
My_Error : exception;
raise My_Error;
raise;  -- handler 내에서: 같은 exception 재발생
```

exception 비활성화: `pragma Suppress(check_name);`

### C++

```cpp
try {
    throw 42;
    throw MyException("message");
}
catch (int e) {
    // int 타입 exception 처리
}
catch (MyException& e) {
    // MyException 처리
}
catch (...) {
    // 모든 나머지 처리
}
```

- 사전 정의 예외 없음 (표준 라이브러리 예외는 있음)
- handler는 순서대로 매칭, 먼저 매칭된 것 사용
- `throw;` → 현재 exception 재발생

### Java

```java
try {
    throw new MyException("message");
}
catch (MyException e) {
    // 처리
}
catch (Exception e) {
    // 모든 Exception 하위 클래스 처리 (마지막에)
}
finally {
    // 항상 실행 (예외 여부 무관)
}
```

계층 구조:
- `Throwable` → `Error` (JVM 발생, 처리 불필요)
- `Throwable` → `Exception` → `RuntimeException` (unchecked)
- `Throwable` → `Exception` → 그 외 (checked)

**checked exception**: `throws` 절에 선언하거나 직접 처리해야 함

```java
void buildDist() throws IOException {
    in.readLine(); // IOException 발생 가능
}
```

**unchecked exception**: `RuntimeException`, `Error` 하위 — 컴파일러가 강제하지 않음

### Python

```python
try:
    raise ValueError("잘못된 값")
except ValueError as e:
    print(e)
except Exception:
    pass  # 모든 Exception 처리
else:
    pass  # 예외 없을 때 실행
finally:
    pass  # 항상 실행
```

계층: `BaseException` → `Exception` → `ArithmeticError`, `LookupError` 등

### Ruby

```ruby
begin
  raise "에러 발생"
rescue RuntimeError => e
  puts e.message
rescue => e
  # 모든 StandardError 처리
ensure
  # 항상 실행 (Java의 finally)
retry  # rescue 블록 내에서만: raising 지점부터 재실행
end
```

## 9. Polymorphism and OOP

### Polymorphism 종류

- **Ad hoc polymorphism**: 오버로딩. 각 타입마다 별도 구현. 같은 이름, 다른 protocol.
- **Subtype polymorphism**: 상속 기반. 부모 타입 변수가 자식 객체를 참조.
- **Parametric polymorphism**: generic. 타입을 매개변수화.

### Polymorphic Variable 선언 방법 (언어별)

**C++ (pointer 기반, virtual 필요)**
```cpp
Shape* ptr = new Circle();
ptr->draw();  // virtual일 때 dynamic binding
```

**Java (reference 기반, 기본 dynamic)**
```java
Animal a = new Dog();
a.speak();  // 항상 dynamic (final/static/private 제외)
```

**C# (virtual + override 필요)**
```csharp
Shape s = new Circle();
s.Draw();   // virtual + override일 때 dynamic
```

**Python (타입 없는 변수)**
```python
x = Dog()
x.speak()
```

**Ruby (모든 변수가 typeless)**
```ruby
x = Dog.new
x.speak
```

**Smalltalk**
```smalltalk
x := Dog new.
x speak.   "모든 메시지가 dynamic binding"
```

### Dynamic Binding

- 런타임에 어떤 메서드가 호출될지 결정
- virtual method table (vtable)을 통해 구현: 동적으로 바인딩되는 메서드 포인터 목록

**C++**
```cpp
class Shape {
public:
    virtual void draw() = 0;  // pure virtual → abstract class
};
class Circle : public Shape {
public:
    void draw() override { ... }
};
Shape* s = new Circle();
s->draw();  // vtable을 통해 Circle::draw() 호출
```

stack 할당 시:
```cpp
Square sq;
Rectangle rect;
rect = sq;     // object slicing: Square의 추가 변수 날아감
rect.draw();   // Rectangle::draw() 정적 바인딩
```

**Java**: `final`, `static`, `private` 메서드는 static binding, 나머지는 모두 dynamic binding

**C#**: `virtual` + `override` 조합. `new` 키워드는 부모 메서드 숨김 (static binding)

### Abstract Class vs Interface (Java)

- **abstract class**: `abstract` 키워드, 일부 메서드 구현 가능, 단일 상속
- **interface**: 메서드 선언만, 다중 구현 가능, 변수 없음 (상수만)

```java
interface Animal { void bark(); }
class Dog implements Animal {
    public void bark() { System.out.println("Woof"); }
}
```

### 상속 접근 제어 (C++)

- `public` 상속: 부모의 public/protected 그대로 유지 → subtype 관계
- `private` 상속: 부모의 모든 멤버가 private → subtype 관계 아님, 구현만 재사용

### Ruby Mixin

```ruby
module Flyable
  def fly
    puts "flying"
  end
end

class Bird
  include Flyable  # 인스턴스 메서드로 추가
end
```

- `include`: 인스턴스 메서드로 주입
- `prepend`: 인스턴스 메서드로 주입, 클래스 자신의 메서드보다 우선
- `extend`: 클래스 메서드로 주입

### ADT 핵심 개념

- 데이터와 operation을 하나의 단위로 묶음
- 내부 표현 숨김 (information hiding)
- getter/setter를 통한 간접 접근

Java 접근 제어:

| modifier | 같은 클래스 | 같은 패키지 | 상속 | 외부 |
|---|---|---|---|---|
| `public` | O | O | O | O |
| `protected` | O | O | O | X |
| package-private | O | O | X | X |
| `private` | O | X | X | X |

C# 추가: `internal` (같은 assembly), `protected internal`

## 10. Generic Subprograms

### C++ Template

```cpp
template <class Type>
Type max(Type first, Type second) {
    return first > second ? first : second;
}
max(1, 2);       // 2 (int)
max(1.0, 2.0);   // 2.0 (double)
```

- 특화된 함수가 template보다 우선
- 여러 타입 파라미터: `template <class T1, class T2>`

### Java Generics

```java
public class Stack<T> {
    private ArrayList<T> stackRef;
    ...
}
Stack<Integer> s = new Stack<Integer>();
```

- primitive type 직접 사용 불가 → Integer, Double 등 wrapper class 사용
- wildcard: `Collection<?>` — 읽기 가능, 쓰기 제한

### Ada Generic

```ada
generic
  Max_Size : Positive;
  type Elem_Type is private;
package Generic_Stack is
  ...
end Generic_Stack;

-- 인스턴스화
package Integer_Stack is new Generic_Stack(100, Integer);
```

## Quick Reference

### ARI 접근 표기

`(chain_offset, local_offset)`

- chain_offset = 0: 현재 서브프로그램의 지역 변수
- chain_offset = 1: 직접 상위(부모) 서브프로그램의 변수
- local_offset: ARI 내 오프셋 (컴파일 타임 결정)

### Scheme 이진 트리 핵심 코드

```scheme
(DEFINE (tree-height t)
  (IF (NULL? t)
      0
      (+ 1 (MAX (tree-height (CADR t))
                (tree-height (CADDR t))))))

(DEFINE (count-nodes t)
  (IF (NULL? t)
      0
      (+ 1 (count-nodes (CADR t))
           (count-nodes (CADDR t)))))
```

### Haskell foldr 계산 과정

```haskell
foldr (+) 0 [1,2,3,4]
= 1 + foldr (+) 0 [2,3,4]
= 1 + (2 + foldr (+) 0 [3,4])
= 1 + (2 + (3 + (4 + 0)))
= 10

foldr (\_ n -> 1+n) 0 [10,20,30]
= 1 + (1 + (1 + 0))
= 3  -- length와 동일
```

### Exception Keywords 한눈에

| 언어 | try 시작 | catch | throw | 정리 |
|---|---|---|---|---|
| Ada | `begin` | `exception when` | `raise` | — |
| C++ | `try` | `catch` | `throw` | — |
| Java | `try` | `catch` | `throw` | `finally` |
| Python | `try:` | `except` | `raise` | `finally:` |
| Ruby | `begin` | `rescue` | `raise` | `ensure` |

Ruby 추가: `retry` (재시도), Java 추가: `throws` (메서드 선언에 checked exception 명시)

### Semaphore vs Monitor

| 항목 | Semaphore | Monitor |
|---|---|---|
| 추상화 수준 | 저수준 | 고수준 |
| 상호 배제 | 수동 (wait/release) | 자동 |
| 실수 가능성 | 높음 | 낮음 |
| 협력 동기화 | 직접 구현 | 직접 구현 (wait/notify) |
| 구현 관계 | Monitor로 구현 가능 | Semaphore로 구현 가능 |

### 언어별 다형성 선언 키워드

| 언어 | 부모 | 자식 |
|---|---|---|
| C++ | `virtual` | (자동) |
| Java | (기본 virtual) | `@Override` (선택) |
| C# | `virtual` | `override` |
| Python | (모두 virtual) | (자동) |
| Ruby | (모두 virtual) | (자동) |
