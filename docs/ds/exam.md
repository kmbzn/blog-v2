# HW3 Analysis Report
Interpreter Implementation Using Functional Languages  
2021024057 김병준

# Problem 1. Python-like Arithmetic Expression Interpreter

## Q1. Overall Structure of the Interpreter

본 구현은 Tokenizer, Parser, Evaluator 3단계로 구성되어 있다.

문자열 입력이 Tokenizer를 거쳐 토큰 리스트가 되고, Parser가 이를 AST로 변환한 뒤, Evaluator가 AST를 재귀적으로 evaluate하여 최종 정수 결과를 반환하는 형태이다.

### Tokenizer

문자열을 좌에서 우로 traverse하며 (의미 있는 최소 단위인) 토큰으로 분리한다. 연속된 숫자 문자는 하나의 숫자 토큰으로 묶이고, 연산자와 괄호는 각각 단일 문자 토큰이 된다. 공백은 토큰 구분자로만 사용되며 결과에 포함하지 않게 된다.

Scheme에서는 `string->list`로 문자 리스트를 만들고 `let loop`로 traverse하며 역순으로 누적한 뒤 마지막에 `reverse`한다. Haskell에서는 guard pattern으로 각 문자 유형을 분기하고 `span isDigit`으로 연속 숫자를 한 번에 소비한다.

### Parser

토큰 리스트를 recursive descendent 방식으로 parsing하여 AST를 생성한다. 문법의 우선순위 계층이 함수 호출 계층에 그대로 대응된다.

| 함수 | 문법 규칙 | 생성 node |
|------|----------|----------|
| `parse-expr` | `expr → term { + \| - term }` | add, sub |
| `parse-term` | `term → factor { * \| / factor }` | mul, div |
| `parse-factor` | `factor → number \| ( expr )` | num |

같은 우선순위 연산자의 왼쪽 결합은 루프로 구현하여 결과가 항상 왼쪽으로 기울어진 트리가 되도록 한다. parser함수는 AST와 남은 토큰 리스트의 쌍을 반환하여 다음 parser가 이어서 처리할 수 있게 한다.

### Evaluator

AST를 root에서 leaf 방향으로 재귀 traverse하며 정수 값을 계산한다. 트리의 구조가 곧 evaluate의 순서가 되므로, parser의 우선순위를 올바르게 반영한 AST를 만들었다면 Evaluator는 단순 재귀만으로도 올바른 결과를 내게 된다. 나눗셈은 정수 나눗셈으로 처리하도록 하였다.

## Q2. Step-by-step Evaluation of "3 + 2 * 5"

### Step 1. Tokenization

입력 문자열을 한 문자씩 traverse한다. `3`은 숫자로 누적되다가 공백에서 토큰 `"3"`으로 확정되고, `+`는 단일 문자 토큰이 된다. 같은 방식으로 `2`, `*`, `5`가 처리된다.

```
입력  →  "3 + 2 * 5"
결과  →  ["3", "+", "2", "*", "5"]
```

### Step 2. Parsing

`parse-expr`가 먼저 `parse-term`을 호출한다. `parse-term`은 `parse-factor`로 `3`을 읽고 다음 토큰이 `+`이므로 `*`나 `/`가 아니라 판단하여 `num 3`을 그대로 반환한다. `parse-expr`로 돌아오면 다음 토큰이 `+`이므로 오른쪽 operand를 위해 다시 `parse-term`을 호출한다. 이번에는 `2`를 읽고 다음 토큰이 `*`이므로 `parse-factor`로 `5`를 읽어 `mul (num 2) (num 5)` node를 만든다. 최종적으로 `add (num 3) (mul (num 2) (num 5))` 가 완성된다.

- 결과 AST
  ```
      add
    /   \
  num 3   mul
          / \
      num 2  num 5
  ```

`*`가 `+`보다 먼저 `parse-term` 안에서 묶혔으므로, `mul` node가 `add`의 자식이 되어 곱셈이 먼저 evaluate된다.

### Step 3. Evaluation

```
eval-ast (add (num 3) (mul (num 2) (num 5)))
  eval-ast (num 3)              →  3
  eval-ast (mul (num 2) (num 5))
    eval-ast (num 2)            →  2
    eval-ast (num 5)            →  5
    2 * 5                       →  10
  3 + 10                        →  13
```

## Q3. Comparison of Scheme and Haskell Implementations

### Recursive Call Style

Scheme과 Haskell 두 언어 모두 recursive descendent parser를 사용하지만 재귀를 표현하는 방식이 다르다.

Scheme은 `let loop`를 이용한 명시적인 꼬리 재귀로 왼쪽 결합을 구현한다. 누적된 왼쪽 AST를 argument로 삼아 같은 루프를 반복 호출하는 형태이다.

```scheme
(define (parse-term tokens)
  (let loop ((result (parse-factor tokens)))
    (let ((ast (car result)) (rest (cdr result)))
      (cond
        ((and (not (null? rest)) (string=? (car rest) "*"))
         (let* ((r2 (parse-factor (cdr rest))))
           (loop (cons (list 'mul ast (car r2)) (cdr r2)))))
        (else result)))))
```

반면에 Haskell은 `parseTermRest`라는 별도 보조 함수를 만들고 pattern matching으로 종료 조건을 처리한다. 함수 정의 자체가 여러 케이스로 나뉘므로 조건 분기와 재귀가 분리된다.

```haskell
parseTermRest :: Expr -> [Token] -> (Expr, [Token])
parseTermRest left ("*":rest) =
  let (right, rest') = parseFactor rest
  in parseTermRest (Mul left right) rest'
parseTermRest left rest = (left, rest)
```

### Pattern Matching and Conditional Branching

|  | Scheme | Haskell |
|------|--------|---------|
| 조건 분기 | `cond` 기반 dynamic dispatch | 함수 pattern matching |
| AST node 구분 | 심볼 비교 | Constructor 패턴으로 직접 분해 |
| 타입 시스템 | dynamic 타입, 리스트 기반 AST | 정적 타입, `data Expr` 사용자 정의 타입 |
| 오류 처리 | 런타임에 `error` | 컴파일 경고 후 런타임 `error` |

Scheme은 `cond`와 심볼 비교로 AST node를 구분한다. AST가 리스트이므로 `(car ast)`로 node 타입을 꺼내 `eq?`로 비교한다. Haskell은 `data Expr`로 정의된 사용자 정의 타입을 사용하므로 Constructor 패턴으로 직접 분해한다. 컴파일러가 pattern matching missing을 경고하여 implementation error를 미리 방지할 수 있다는 점이 큰 차이다.

## Test Results

```sh
kmbzn@thinkpad-x13-gen1:~$ racket --script 1.scm
13
13
12
6
1
5
1
13

kmbzn@thinkpad-x13-gen1:~$ runghc 1.hs
13
13
12
6
1
5
1
13
```

# Problem 2. Expression Interpreter with Variables and Assignment

## Q1. Structural Difference from Problem 1

### Expression Evaluation vs Statement Execution

|  | Problem 1 | Problem 2 |
|------|-----------|-----------|
| 입력 단위 | 단일 expression | 다중 대입문 |
| 출력 | 정수 값 | 최종 environment |
| 상태 | 없음 | environment 누적 |
| parser 결과 | 단일 Expr AST | Stmt AST 리스트 |
| factor 확장 | number, 괄호식 | number, 변수, 괄호식 |

Problem 1의 인터프리터는 하나의 arithmetic expression을 받아 정수 하나를 반환한다. 입력과 출력이 모두 value이며 state가 존재하지 않는다.

Problem 2는 여러 줄의 프로그램을 받아 각 문장을 순차 실행하며 environment를 갱신한다. 출력은 값이 아니라 변수 바인딩의 집합인 최종 environment이다. 가장 큰 차이는 상태가 존재하는지의 여부다. Problem 1에서는 입력 문자열 하나가 즉시 정수로 바뀌게 되지만, Problem 2에서는 각 문장이 실행될 때마다 environment가 변화하며 이후 문장들이 이 environment를 참조한다.

### Extended Components

Tokenizer는 `=` 연산자, 알파벳 변수명, 줄바꿈 처리를 추가로 담당한다. Parser는 `parse-factor`에 변수 node를 추가하고, 대입문을 처리하는 `parse-stmt`와 전체 프로그램을 parsing하는 `parse-program`을 새로 추가한다. Evaluator는 environment를 argument로 받아 변수를 조회하는 `eval-expr`, environment를 갱신하는 `execute-stmt`, 문장 리스트를 순차 실행하는 `execute-program`으로 구성된다.

## Q2. Role of Environment and Its Changes

### Environment

environment는 변수 이름과 정수 값의 매핑을 저장하는 자료구조이다. 프로그램 실행 중 변수의 현재 상태를 기록하며, 새로운 대입이 실행될 때마다 갱신된다. 이미 존재하는 변수에 재할당이 발생하면 기존 바인딩을 제거하고 새 값으로 교체한다.

### Changes for `x = 3, y = x * 5`

초기 environment는 빈 리스트이다.

**1. `x = 3` 실행**

토큰 리스트 `["x", "=", "3"]`이 `assign "x" (num 3)` AST로 parsing된다. `eval-expr`로 우변 `(num 3)`을 evaluate하면 `3`이 나오고, `env-update`로 environment에 추가된다.

    실행 전  →  []
    실행 후  →  [("x" . 3)]

**2. `y = x * 5` 실행**

토큰 리스트 `["y", "=", "x", "*", "5"]`이 `assign "y" (mul (var "x") (num 5))` AST로 parsing된다. 우변을 evaluate할 때 `(var "x")` node를 만나면 `env-lookup`이 현재 environment에서 `"x"`의 값 `3`을 찾는다. `3 * 5 = 15`가 계산되고 environment에 추가된다.

    실행 전  →  [("x" . 3)]
    실행 후  →  [("y" . 15), ("x" . 3)]

Environment가 없었다면 `(var "x")`를 evaluate하는 시점에 오류가 발생하였을 것이다. Environment는 이전 문장의 실행 결과를 이후 문장이 참조할 수 있게 하는 일종의 매개체가 된다.

## Q3. Comparison of Scheme and Haskell Implementations

### Environment Representation

두 언어 모두 association list를 사용하지만 표현 문법이 다르다.

Scheme은 `("x" . 3)` 형태를 사용하고 내장 함수 `assoc`으로 조회한다. `assoc`은 `equal?`로 키를 비교하므로 문자열 키도 별도 처리 없이 동작한다.

```scheme
(assoc "x" '(("x" . 3) ("y" . 15)))  ; → ("x" . 3)
```

Haskell은 `("x", 3)` 튜플 리스트를 사용하며, 직접 재귀로 조회하는 `envLookup`을 구현한다. 표준 라이브러리의 `lookup`은 결과를 `Maybe Int`로 반환하므로 별도의 unwrap 처리가 필요하다. 직접 구현하면 재귀 정의 안에서 바로 `error`를 호출할 수 있어 코드가 단순해진다.

```haskell
envLookup ((k, v):rest) var
  | k == var  = v
  | otherwise = envLookup rest var
```

### Recursive Execution

Scheme의 `execute-program`은 꼬리 재귀로 문장 리스트를 순차 처리한다. 갱신된 environment를 argument로 넘겨 재귀 호출하므로 Scheme의 꼬리 재귀 최적화에 의해 스택이 쌓이지 않는다.

```scheme
(define (execute-program stmts env)
  (if (null? stmts)
      env
      (execute-program (cdr stmts) (execute-stmt (car stmts) env))))
```

Haskell도 동일한 구조이지만 pattern matching으로 base condition을 분리한다.

```haskell
executeProgram [] env        = env
executeProgram (s:stmts) env = executeProgram stmts (executeStmt env s)
```

### Variable Lookup

|  | Scheme | Haskell |
|------|--------|---------|
| 조회 함수 | `assoc` 내장 함수 | `envLookup` 직접 구현 |
| 갱신 방식 | `env-remove` 후 `cons` | `filter` 후 리스트 추가 |
| 정의되지<br>않은 변수 | 런타임 `error` | 런타임 `error` |
| 타입 안전성 | 런타임 검사 | 컴파일 타임 검출 |

두 언어 모두 리스트를 앞에서부터 순차 탐색하여 변수를 찾으며, 찾지 못하면 `error`를 발생시킨다. 갱신 시에는 기존 바인딩을 제거한 뒤 새 바인딩을 리스트 앞에 추가하는 방식을 공통으로 사용한다. 가장 최근 바인딩이 리스트 앞에 위치하므로 탐색 시 가장 먼저 발견된다.

전반적으로 Scheme은 리스트와 재귀가 언어의 기본 패러다임이기 때문에 S-expression 기반 AST와 environment 표현이 언어 자체와 자연스럽게 어울린다. Haskell은 사용자 정의 데이터 타입으로 AST 구조를 타입 수준에서 명확히 정의하고, pattern matching으로 각 케이스를 선언적으로 처리하여 compile time에 더 많은 오류를 잡을 수 있다.

## Test Results

```sh
kmbzn@thinkpad-x13-gen1:~$ racket --script 2.scm
((y . 15) (x . 3))
((z . 36) (y . 12) (x . 10))
((c . 15) (b . 3) (a . 6))
((x . 6))
((y . 10) (x . 20))

kmbzn@thinkpad-x13-gen1:~$ runghc 2.hs
[("y",15),("x",3)]
[("z",36),("y",12),("x",10)]
[("c",15),("b",3),("a",6)]
[("x",6)]
[("y",10),("x",20)]
```