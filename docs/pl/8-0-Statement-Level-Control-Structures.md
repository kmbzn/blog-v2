# 8.0. Statement Level Control Structures

## Today’s Contents
- Statement-Level Control Structures
- Selection Statements
- Iterative Statements
- Unconditional Branching
- Guarded Commands

## Statement-Level Control Structures
- Imperative: expressions + assignments
- Functional: expression + functions
- Without control statements
- Difficult to make programs flexible and powerful
- Early, single control (`goto`) was used
- Nowadays, selection and iteration statements
- More control statements → writability enhanced but readability restricted
- What is the best collection of control statements?
- [Issue] Should the control structure have multiple entries?
- Multiple entries increase flexibility but decrease readability
- Inclusion of `goto` → cause multiple exits


## Selection Statements
- Means of choosing between two or more paths
- Two-way selection statements
- Multiple-selection statements

### Two-way selection statements
- General form
```
if control_expression
then clause
else clause
```

- Design issues
- What is the form and type of the expression that controls the selection?
- How are the `then` and `else` clauses specified?
- How should the meaning of nested selectors be specified?
- Design issue: What is the form and type of the expression that controls the selection?
- Without `then` reserved word → parentheses is needed
- Without Boolean data type → arithmetic expressions are used
- `if` (어떤 expression??) 괄호가 필요한가? `then` keyword?
- C / Java: → 반드시 `boolean` (또는 `boolean`처럼 해석 가능한 값)
- Design issue: How are the `then` and `else` clauses specified?
- [Perl] use block `{}`
```perl
if ($x > $y) {
    $x = $y;
    print "case 1";
} else {
    print "case 2";
}

```
- Single or compound statements
- [Perl] Highly recommended to use compound statement -> 모호성 제거
- Clause form have implications on meaning of nested selectors
- [C] use braces
```c
if (x > y){
    x = y;
    printf("case 1");
}

```
- [Python] use indentation
```python
if x > y :
    x = y
    print "case 1"

```
- [Ada] use `end if`
```ada
if x > y then
    x := y;
    Put("case 1");
end if;

```

- Python → indentation으로 구조 강제 → 모호성 없음
- Ada → `end if`로 명확히 구분
- Perl → block `{}` 사용 권장 → 사실상 문제 회피
- Design issue: How should the meaning of nested selectors be specified?
- ambiguous “`if-then-else`”
- When `<stmt>` → `<if_stmt>`, two parse trees are possible with the same sentential form.
- [Java] ambiguous “`if-then-else`”
```java
if (sum == 0)
    if (count == 0)
        result = 0;
else
    result = 1;

```
- Indentation is matter of Python and F#
- Use indicator (`{}`) to resolve ambiguity
- [Java] unambiguous “`if-then-else`”
```java
if (sum == 0) {
    if (count == 0)
        result = 0;
}
else
    result = 1;

```
- Force to match with the first
- All `then` and `else` clauses are compound (ex. Perl)
- matched with the first:
```perl
if (sum == 0) {
    if (count == 0) {
        result = 0;
    }
} else {
    result = 1;
}

```
- matched with the second:
```perl
if (sum == 0) {
    if (count == 0) {
        result = 0;
    }
    else {
        result = 1;
    }
}

```

- Use special word (ex. `end`) (Fortran 95+, Ada, Ruby, Lua)
- [Ruby] use `end`
```ruby
if a > b then
    sum = sum + a
    acount = acount + 1
else
    sum = sum + b
    bcount = bcount + 1
end

```
- matched with the first:
```ruby
if sum == 0 then
    if count == 0 then
        result = 0
    end
else
    result = 1
end

```
- matched with the second:
```ruby
if sum == 0 then
    if count == 0 then
        result = 0
    else
        result = 1
    end
end

```

- 언어특징 요약
- C/Java: `{}`로 묶어서 해결
- Python: indentation으로 해결
- Ada/Ruby: `end`로 구조 명시
- Selector expressions
- An expression refers to a statement that can be evaluated as a value.
- Return a value
- Statement is the smallest independent element that makes up a program, that is, it is the basic unit and minimum execution unit
- Expression is included in statement
- In case of functional languages (ML, F#, LISP)
- There should be `else` because it is expression (return a value)
- [F#]
```fsharp
let y =
    if x > 0 then x
    else 2 * x;;

```
- `if`가 expression 즉: 값을 반드시 반환해야 함



### Multiple-selection statements
- Allows the selection of one of any number of statements (generalized)
- Two-way selection (`if-else`) 여러 개보다 구조적, 가독성 좋음
- Possible to implement it using two-way selectors and `goto`, but cumbersome and unreliable (길어짐, 가독성 낮아지고, 실수 가능성 올라감)
```c
if (x == 1) ...
else if (x == 2) ...
else if (x == 3) ...

```
- Design issues
- What is the form and type of the expression that controls the selection?
- How are the case values specified?
- How are the selectable segments specified?
- How should unrepresented selector expression values be handled, if at all?
- Is execution flow through the structure restricted to include just a single selectable segment?
- General form
```c
switch (expression) {
    case constant_expression1: statement1;
    ...
    case constantn: statement_n;
    [default: statementn + 1]
}

```
- `expression` and `constant_expression` can be discrete type (integer, character and enum types)
- Expression의 형태/ 타입 --> 타입 제한 vs 유연성이 이슈
- C/Java: `int`, `enum` 등 제한적
- Python: 거의 모든 타입 가능
- Constant_expression의값 --> 단순 값 vs 복잡한 패턴
- C: 상수
- Pascal: 범위
- Python: 패턴
- Selectable statements can be sequences, compound or block (단일 statement or 여러 statement (block))
- `[default]` is for unrepresented values
- Execution flow through the structure
- No implicit branch out (Statement in `default` always is executed)
- Explicit branch out should be used: `break` (restricted `goto`)
- [C-based]
```c
switch (index) {
    case 1:
    case 3: odd += 1;
            sumodd += index;
    case 2:
    case 4: even += 1;
            sumeven += index;
    default: printf("Error in switch, index = %d\n", index);
}

```
- 실행 흐름: `case 1` → 실행 → 그 다음 자동으로 `case 2`, `default`까지 다 실행 (implicit branch out 없음, fall-through 발생)
- Convenient to allow control to flow from one selectable code segment to another
- `case 1`, `2` are empty, so control flows are changed to `case 3`, `4`
- Reliability problem when location of `break` is inadequate
- 코드 공유 가능 --> case grouping 쉽게 가능

```c
switch (index) {
    case 1:
    case 3: odd += 1;
            sumodd += index;
            break;
    case 2:
    case 4: even += 1;
            sumeven += index;
            break;
    default: printf("Error in switch, index = %d\n", index);
}

```
- No restrictions on the placement of the case expressions
```c
switch (x)
    default:
        if (prime(x))
            case 2: case 3: case 5: case 7:
                process_prime(x);
        else
            case 4: case 6: case 8: case 9: case 10:
                process_composite(x);

```
- → 코드 읽기 어려움 → 구조 깨짐 → powerful but dangerous

- Language Specific Designs
- [C#] Disallows the implicit execution of more than one segment (implicit fall-through 금지)
- Explicit unconditional branch statement: either a `break` or `goto case`
- Expression and case can be string

```csharp
switch (value) {
    case -1:
        Negatives++;
        break;
    case 0:
        Zeros++;
        goto case 1;
    case 1:
        Positives++;
        break;
    default:
        Console.WriteLine("Error in switch \n");
        break;
}

```
- 변경 이유 = 안전성
- C 문제: `break` 빠뜨리면 버그, 의도치 않은 fall-through
- C# 해결: 무조건 한 `case`만 실행, 여러 개 실행하려면 프로그래머가 명시적으로 작성
- [PHP] Allow more type flexibility (including scalar, string, double precision)
- 타입이 달라도 값이 같으면 true로 보는 비교 (위험)

```php
switch ("10") {
    case 10:
        echo "match";
}

```
- --> 실행됨
- [Ruby] Multiple-selection constructs
```ruby
case
when Boolean_expression then expression
...
when Boolean_expression then expression
[else expression]
end

```

```ruby
leap = case
when year % 400 == 0 then true
when year % 100 == 0 then false
else year % 4 == 0
end

```
- Ruby의 `case`는 fall-through 없이 하나의 조건만 실행하며, expression으로 값을 반환

- Implementation
- Translate: Selectable segments (n label) precedes branches
- Put pairs of case value and label into table
- Use linear search for execution
- When n is large, hash table can be used
- If case values are ranges of values, binary search table can be used
- If range is narrow → array (bin): very fast
- Determining methods require costs too
- `switch`는 “문법”일 뿐 실제로는: 비교하고 점프하는 구조
- `switch` 문은 내부적으로 조건 비교와 분기 (`goto`)로 구현될 수 있음
- `case` 값과 label을 매핑하여 분기
- Multiple-selection statements using `if`
- `switch`/`case` statement is inadequate when decision is based on Boolean expression
- Nested two-way selectors or use special word (`else-if` clause)
```python
if count < 10 :w
    bag1 = True
elif count < 100 :
    bag2 = True
elif count < 1000 :
    bag3 = True

```

```python
if count < 10 :
    bag1 = True
else :
    if count < 100 :
        bag2 = True
    else :
        if count < 1000 :
            bag3 = True
        else :
            bag4 = True

```
- It is not easy to represent above using switch statement -> So, `else-if` statement is not redundant
- [Scheme] multiple selector is based on mathematical conditional expressions
- `COND` function
- More than one predicate to be true (첫 번째 true만 실행)
- Value is returned as the value of `COND`, so should have `ELSE`


## Iterative Statements
- Loop, essence of programming
- Design issues
- How is the iteration controlled? (Logical, counting, or a combination of the two)
- Where should the control mechanism appear in the loop statement? (Top or bottom of the loop: Pretest (`while`) - iteration statement (`for`) - posttest (`do-while`))
- Categories
- Counter-controlled loops
- Logically controlled loops
- User-located loop control mechanisms
- Iteration based on data structures


### Counter-controlled loops
- Controlled by counter values (Loop parameters: initial and terminal values and stepsize)
- More complex than logically controlled but more demanding
- Design issues
- What are the type and scope of the loop variable? (Integer, enum, character, floating-point)
- Should it be legal for the loop variable or loop parameters to be changed in the loop, and if so, does the change affect loop control? (If changed, difficult to understand, complex)
- Should the loop parameters be evaluated only once, or once for every iteration? (If evaluated not once, complex but flexible)
- [Ada] Counter-controlled loops
- `discrete_range` can be: `1..10` or `Monday..Friday`
- `[reverse]`: option for reverse order
- Variable (`Count`) is implicitly declared

```ada
for variable in [reverse] discrete_range loop
    ...
end loop;

```
- operational semantics

```ada
Count : Float := 1.35;
for Count in 1..10 loop
    Sum := Sum + Count;
end loop;

```
- 특징: Loop 변수 자동 선언, 외부 변수와 독립, 값 변경 불가, 범위 고정, `reverse` 가능 → 매우 안전, 이해 쉬움 → loop control이 절대 깨지지 않음
- Outside `Count` is unaffected by loop variable `Count`
- Evaluated only once (in each iteration) → not affect loop control
- [C-based] Counter-controlled loops
- loop body can be single, compound or null statement
- `expression_1`: initialization and evaluated only once
- `expression_2`: loop control and evaluated before each execution (If absent, true → infinite loop)
- `expression_3`: executed after each execution (loop counter)
- 특징: 매우 유연, 변수 여러 개 가능, 조건 복잡하게 가능 → 하지만: 복잡 + 오류 가능
- Multiple expressions and multiple loop variables increase flexibility
- [C99 and C++]
- Boolean expression is possible
- Variable definitions is possible
- Variables in loop parameters can be changed
- Less reliable, more complex than Ada (loop control 깨짐)

- [Python] Counter-controlled loops
- value of `loop_variable` is from `object`

```python
for loop_variable in object:
    ...

```
- 특징: 카운터 없음, iterable 기반, 값을 생성해서 순회
- `range(a,b,c)` is a function to make sequences starting from `a` to `b-1` with stepsize `c`
- Functional Languages
- There is no counter variable in functional language -> Use recursion
- Counter can be a parameter for function
- [F#] `rec`: denote recursive function

```fsharp
let rec forLoop loopBody reps =
    if reps <= 0 then
        ()
    else
        loopBody()
        forLoop loopBody, (reps - 1);;

```
- Counter-controlled loops 요약
- Counter-controlled loop는 초기값, 종료조건, 증가량으로 반복을 제어한다.
- 주요 설계 이슈: loop 변수 타입과 scope, loop 변수 변경 가능 여부, loop 조건 평가 시점
- Ada는 안전성을 위해 loop 변수를 고정한다.
- C는 유연성을 제공하지만 복잡성과 오류 가능성이 높다.
- Python은 iterable 기반 반복을 사용한다.
- 함수형 언어는 recursion으로 반복을 구현한다.


### Logically controlled loops
- Repetition control is based on Boolean expression
- Design issues
- Should the control be pretest (0번 실행 가능) or posttest (최소 1번 보장)? (`while` or `do while`)
- Should the logically controlled loop be a special form of a counting loop or a separate statement?
- operational semantics & code example
- [Java] Similar to C and C++, except that control expression must be boolean type

```java
while (x) // X
while (x > 0) // O

```
- [F#] `rec`: denote recursive function
- Logically controlled loops 요약
- Logically controlled loop는 Boolean 조건에 의해 반복을 제어한다.
- pretest loop (`while`)는 조건을 먼저 검사하며, 0번 실행될 수 있다.
- posttest loop (`do-while`)는 조건을 나중에 검사하며, 최소 1번 실행된다.
- 일부 언어에서는 logically controlled loop를 counting loop의 특수 형태로 보기도 한다.
- 함수형 언어에서는 recursion을 통해 이를 구현한다.


### User-located loop control mechanism
- Programmer to choose a location for loop control other than the top or bottom of the loop body
- Comparison of control structure:
- Integral part of the exit (조건 자체가 exit을 결정, 구조적으로 깔끔, exit 위치 = 항상 루프 조건)
```c
while (x > 0) {
    ...
}

```
- Separate condition and exit (조건과 exit이 분리됨, exit 위치가 중간으로 이동 가능)
```c
while (true) {
    if (x <= 0) break;
}

```

- Design issues: Should only one loop body be exited, or can enclosing loops also be exited?
- 하나만 탈출 (기본) → 안전, 이해 쉬움
- 여러 loop 탈출 허용 → 강력, 부 `goto` 느낌 남 → 가독성 ↓
- `break` and `continue`
- `break`: termination
- `continue`: skip

```c
while (sum < 1000) {
    getnext(value);
    if (value < 0) continue;
    sum += value;
}

```
- Multiple exits are possible → decrease readability

```c
while (sum < 1000) {
    getnext(value);
    if (value < 0) break;
    sum += value;
}

```
- It is okay, location of break is the first statement after loop

```c
while (...) {
    if (a) break;
    ...
    if (b) break;
}

```
- Fulfill a common need for `goto` statements through a highly restricted branch statement (`goto`는 위험, 대신 제한된 형태 제공)


### Iteration based on data structures
- 진화 과정: 카운터(`for`) 중심 → 데이터 중심(`iteration`)으로 진화 (값을 직접 세는 게 아니라, 데이터 자체를 순회)
- [Fortran] `Do Count = 1, 9, 2` (Initial value is 1, last value is 9, step size is 2, Iterator internal function should be called)
- [Python] `for count in range [0, 9, 2]:` (`range` is iterator)
- [Ada] subrange can be used (MyRange is used both to declare the array and iterate through the array)
```ada
subtype MyRange is Integer range 0..99;
MyArray: array (MyRange) of Integer;
for Index in MyRange loop
    ...
end loop;

```
- [C-based] Flexibility (EX: binary tree traversal, `traverse()` is iterator)
- 특징: iterator 직접 구현, traversal 자유
- 장점: 어떤 구조든 가능
- 단점: 복잡, 실수 가능
- User-defined iteration in OOP (데이터가 “어떻게 순회되는지”를 내부에 숨김)
- There are many abstract types → require iterator for each type
- [Python] Iterable object
- `__iter__()` returns the iterable object itself.
- `__next__()` returns the value for the next iteration. If there are no more values, a `StopIteration` exception can be raised.



```python
class MyCounter(object):
    def __init__(self, low, high):
        self.current = low
        self.high = high
    def __iter__(self):
        return self
    def __next__(self):
        if self.current > self.high:
            raise StopIteration
        else:
            self.current += 1
            return self.current - 1

c = MyCounter(1, 10)
for i in c:
    print(i, end=' ')
# 실행 결과: 1 2 3 4 5 6 7 8 9 10

```
- [Java] enhanced version of for (generic collection)
- `for (String myElement : myList) { ... }` (Referred to as “`foreach`”)
- [C#] also have generic collection with built-in iterators
```csharp
List<String> names = new List<String>();
names.Add("Bob");
names.Add("Carol");
names.Add("Alice");
...
foreach (String name in names)
    Console.WriteLine(name);

```
- 특징: 내부 iterator 사용, 개발자는 몰라도 됨 → iterator 패턴 내장
- [Ruby] There are several iterators
- [counter-controlled loop] `times`, `upto`
- [iteration for array and hash] `each`
- Block is related to `yield`, return the last evaluated value

```ruby
>> 4.times {puts "Hey!"}
Hey!
Hey!
Hey!
Hey! => 4

```
- Object 4, `{}`: block, `>>`: interactive interpreter

```ruby
>> list = [2, 4, 6, 8]
=> [2, 4, 6, 8]
>> list.each {|value| puts value}
2
4
6
8
=> [2, 4, 6, 8]

```
- Block can have parameter by `|`

```ruby
1.upto(5) {|x| print x, " "}
# 실행 결과: 1 2 3 4 5

```
- `block`은 메서드에 전달되는 익명 코드 블록이며, 마지막 expression의 값을 반환
- `each`: go through array, `=>`: return value of expressions, `puts`: display parameter
- Iteration based on data structures 요약
- Iteration based on data structures는 카운터가 아닌 데이터 자체를 순회
- iterator는 반복을 위한 값을 생성하는 객체
- Python은 `__iter__`, `__next__`를 통해 iteration을 구현
- Java/C#은 `foreach`를 통해 iterator를 추상화
- Ruby는 `block` 기반 iteration을 제공


## Unconditional Branching
- Transfers execution control to a specified location in the program
- Unconditional branch (`goto`): very powerful, but makes dangerous, decrease readability and reliability
- [Java, Python, Ruby] No `goto` statement
- [C, C#] (ex) in switch statement (`goto case 1;`)
- Camouflaged `goto` statements are used (`break`, `continue`)

## Guarded Commands
- To provide control statements supporting a program design during development
- Nondeterminism is sometimes needed in concurrent programs (Chap. 13)
- For increased clarity in reasoning
- [EX] `fi`: reserved word for closing
```
if <Boolean expression> -> <statement>
[] <Boolean expression> -> <statement>
[] ...
[] <Boolean expression> -> <statement>
fi

```
- Basic Idea: if the order of evaluation is not important, the program should not specify one
- Looks like multiple selection but different
- All Boolean expressions are evaluated each time (매번 모두 검사)
- Nondeterministically choose among true statements
- If none of the Boolean expressions is true --> a run-time error + termination
- Guarded command는 참인 조건들 중 하나를 비결정적으로 선택하는 선택문
- This forces the programmer to consider and list all possibilities.
- [EX] Choice of Statement
```
if i = 0 -> sum := sum + i
[] i > j -> sum := sum + j
[] j > i -> sum := sum + i
fi

```
- If `i = 0` and `j > i`, nondeterministically chooses between the first and third
- If `i` is equal to `j` and is not zero, a run-time error occurs
- Allow programmer to know that order of execution is irrelevant
- 핵심 의미: 이건 “실행 방식”이 아니라 프로그램 명세(specification)에 가까움
- 왜? “어떤 결과가 나오면 된다”, “어떤 경로로 가는지는 중요하지 않다”
- 장점: reasoning 쉬움, concurrency 모델에 적합, 모든 경우를 명시하게 만듦
- 단점: 실제 구현 어려움, 디버깅 어려움, 예측 불가
- Get desired result without overspecifying (필요 이상으로 실행 순서를 정하지 않음)
- if `x==y`, no matter which we assign to `max` (둘 중 아무거나 선택 가능)

```
if x >= y -> max := x
[] y >= x -> max := y
fi

```
- [C]

```c
if (x >= y)
    max = x;
else
    max = y;

```

순서 있음, 조건도 한 방향으로 강제됨
- [EX] Loop can be also guarded
```
do <Boolean expression> -> <statement>
[] <Boolean expression> -> <statement>
[] ...
[] <Boolean expression> -> <statement>
od

```
- All Boolean expressions are evaluated on each iteration
- If more than one is true --> nondeterministically choose
- After, expressions are again evaluated
- When all expressions are simultaneously false, the loop terminates

```
do q1 > q2 -> temp := q1; q1 := q2; q2 := temp;
[] q2 > q3 -> temp := q2; q2 := q3; q3 := temp;
[] q3 > q4 -> temp := q3; q3 := q4; q4 := temp;
od

```
- 계속: `q1 > q2`면 swap, `q2 > q3`면 swap, `q3 > q4`면 swap --> 조건 맞는 것 아무거나 실행
- 결국: `q1 <= q2 <= q3 <= q4` 즉: 정렬됨 --> 어떤 순서로 swap하든, 결과 동일
- 장점: concurrency 모델에 적합, reasoning 쉬움, 모든 경우 고려하게 만듦
- Connection between control statements and program verification is intimate
- 프로그램 구조가 → 증명 가능성을 결정함
- Verification is impossible with `goto` statements (흐름이 여기저기 점프, entry/exit 불명확, loop 구조 깨짐, 논리적으로 추적 불가능)
- Verification is possible with only selection and logical pretest loops (구조적 흐름, entry/exit 명확, loop invariant 정의 가능)
- Verification is relatively simple with only guarded commands
- 모든 경우 명시: 가능한 모든 경우를 다 써야 함
- 순서 없음: 조건 집합만 고려 → reasoning 단순
- 거의 논리식 → 결과



## Summary
- Statement-Level Control Structures
- Selection Statements
- Iterative Statements
- Unconditional Branching
- Guarded Commands