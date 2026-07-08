---
sitemap: false
---
# 8. Subprogram

## Subprogram

- Abstraction in programming languages
 - Data abstraction (i.e, Record type)
 - Process abstraction
- In form of subprogram
 - Reuse → savings, primarily memory space and coding time
 - Abstraction: details are replaced by subprogram calling
 - → hiding the low-level details
 - → increases the readability
- Closely related to method of OOP
- Difference: way they are called and associations with class

- There are various forms of the subprogram in programming languages

```c
//C
int add(int a, int b) {
  return a + b;
}
```

```java
//Java
public class Main {
  public static int add(int a, int b) {
    return a + b;
  }
}
```

```python
#Python
def add(a, b):
  return a + b
```

```javascript
//Javascript
function add(a, b) {
  return a + b;
}
```

```swift
//Swift
func add(_ a: Int, _ b: Int) -> Int {
  return a + b
}
```

```rust
//Rust
fn add(a: i32, b: i32) -> i32 {
  a + b
}
```

```ruby
//Ruby
def add(a, b)
  a + b
end
```

```haskell
//Haskell
add :: Int -> Int -> Int
add a b = a + b
```

## Today's Contents

- Fundamentals of subprograms
- Design issues
- Local referencing environment
- Parameter-passing methods
- Parameter that are subprograms
- Indirectly called subprograms
- Overloaded subprograms
- Generic subprograms
- Design issues for functions
- User-defined overloaded operators
- Closures
- Coroutines

## Fundamentals of subprograms

- General characteristics
 - Single entry point
 - 서브프로그램은 항상 하나의 진입점에서 실행을 시작함
 - One subprogram in execution
 - 호출 시 하나의 인스턴스만 활성 상태
 - Control return to the caller after termination
 - Most subprograms have names (함수 이름을 통해 호출)
 - Except: anonymous subprograms in C# and Python

```csharp
//C#
Func<int, int, int> add = (a, b) => a + b;
```

```python
#Python
add = lambda a, b: a + b
```

 - Alternatives 1(coroutines): 협동 루틴, 즉 작업 간 전환이 명시적, 한 루틴이 다른 루틴에게 제어를 넘겨주며 돌아가며 실행
 - Alternatives 2(concurrent): 여러 작업이 동시에 실행됨 (논리적으로 또는 실제로), 동시 실행을 지향

- Basic definitions
 - Subprogram definition describe Interface and actions
 - Subprogram is active after subprogram call
 - Two kinds of subprograms: procedure and function
 - Subprogram header
  - Specifies that the following syntactic unit is a subprogram definition
  - Provides a name
  - Specify a list of parameters (optional)
 - Body contains actions

```python
[Python]
def adder (parameters):
  body…
```

```c
[C]
void adder (parameters){
  body….
}
```

| 항목 | 설명 |
|---|---|
| Subprogram | 하나의 재사용 가능한 코드 블록으로, 호출되면 특정 동작을 수행 |
| Subprogram Definition | 인터페이스(이름, 매개변수)와 동작(내용)을 기술 |
| 활성 시점 | 호출(Call)이 발생한 후에 활성(active) 상태가 됨 |
| 종류 | 두 가지 주요 유형: Procedure와 Function |
| Header (헤더) | 이 코드 블록이 subprogram임을 명시하며, 이름과 (옵션) 매개변수를 선언 |
| Body (본문) | 실제 수행할 동작을 정의 |

- Basic definitions
 - [Python] `def` statement can be executed
 - Assign name to function body (이름을 함수 본체에 할당하는 것과 같음)
 - No need to declare in advance, declare and use when needed
 - 함수는 일급 객체(first-class citizen): 함수가 다른 객체들과 동일한 방식으로 다뤄질 수 있다는 것을 의미

```python
if condition:
  def add(a, b):
    return a + b
  operation = add    # 변수에 저장
  print(operation(2, 3)) # 인자로 전달, 반환값으로 사용, 결과: 5

def fun(x):
  return x + 1
else:
  def fun(x):
    return x - 1

print(fun(3))
# 실행 중 어떤 fun이 정의되는지가 결정됨
```

- Basic definitions
 - [Ruby] Ruby에서는 모든 것이 객체이고, 메서드도 예외가 아님
 - Can also be defined outside class definitions (클래스 외부에서도 메서드 정의 가능)
 - Considered as method of root object (Object) (이 경우 Object 클래스의 인스턴스 메서드가 됨)
 - Called as if function in C-based (C 언어 스타일처럼 함수 호출하듯 사용할 수 있음)

```ruby
def greet(name)
  puts "Hello, #{name}"
end

greet("Ruby") # Object의 메서드로 호출됨
```

 - 함수라는 개념이 없음
 - 전부 객체의 메서드

- Basic definitions
 - [Lua] Lua는 함수를 값(value)으로 취급
 - Nameless function
 - 함수는 이름 없는 리터럴(function literal)

```lua
function(x) return x * x * x end
```

 - Function can be assigned to variable
 - 함수는 변수에 할당되고, 인자로 전달되며, 결과로 반환될 수 있음
 - 함수 정의와 할당은 동일한 의미 (정의 자체가 expression)

```lua
function cube(x) return x * x * x end
cube = function (x) return x * x * x end
```

 - Python: 함수는 객체지만 `def`는 statement
 - Ruby: 함수 없음 → 전부 "메서드 (객체 소속)"
 - Lua: 함수는 완전한 값 (expression 기반)

| 항목 | Python | Lua | Ruby |
|---|---|---|---|
| 함수 존재 | 있음 | 있음 | 없음 (메서드만) |
| 함수 = 값 | O | ◎ (더 강함) | △ (Method object로는 가능) |
| 정의 방식 | statement | expression | - |
| 소속 | 독립 | 독립 | 항상 객체에 속함 |
| 호출 방식 | `f()` | `f()` | 객체.method |

- Basic definitions
 - Protocol of a subprogram: parameter profile + return type
 - Parameter profile: number, order, and types
 - 이 정보를 통해 컴파일러나 호출자가 subprogram을 어떻게 사용할 수 있는지 판단
 - Declarations provide the subprogram's protocol but do not include their bodies
 - Declarations are needed for static type checking
 - Definition includes actual implementations

- Two ways to access to values:
 - Direct access to nonlocal variables
 - Parameter passing (more flexible)

- Two ways to access to values:
 - Direct access to nonlocal variables
  - Extensive access to nonlocals can reduce reliability
  - 외부 상태에 의존하게 되어 재사용성, 예측 가능성, 디버깅 난이도 증가
  - 변경 가능성이 크면 side effect 발생 위험 있음
  - Changing nonlocals and class variables
  - Can make side effect (should be avoided)
  - Reliable problem
  - Functional language does not have mutable data
  - Unable to change memory

- Two ways to access to values:
 - Parameter passing (more flexible)
  - 더 유연하고 안전한 접근 방식
  - 데이터를 함수로 명시적으로 전달하여, 외부 상태와의 의존을 줄임
  - 파라미터를 통해 함수의 동작을 입력에만 의존하게 만들 수 있음

- Parameters
 - Transmit computations
 - Name of subprogram is used as parameter
 - 다른 서브프로그램(함수)의 이름을 인자로 전달해서, 내부에서 호출되도록 함

```python
# Python
def square(x):
  return x * x

def compute_and_print(func, value):
  print(func(value))

compute_and_print(square, 5) # → 25
```

```ruby
# Ruby
def square(x)
  x * x
end

def compute(func, value)
  func.call(value)
end

compute(method(:square), 5) # → 25, square 메서드를 Method 객체로 변환
```

```lua
-- Lua
function square(x)
  return x * x
end

function compute(func, value)
  print(func(value))
end

compute(square, 5) -- → 25
```

- Parameters (Python)
 - Formal parameter
  - Parameters in header
  - Thought of as dummy (호출 시 전달될 값의 "자리만 차지하는 변수")

```python
def greet(name): # ← 'name'은 formal parameter
  print("Hello,", name)
```

 - Actual parameter
  - List of parameters in subprogram call statements
  - 함수 호출 시 실제로 전달되는 값
  - 함수가 호출될 때, 이 값들이 formal parameter에 바인딩됨

```python
greet("Alice") # ← "Alice"가 actual parameter
```

- Parameters (Python)
 - Positional parameter
  - Binding of actual parameters to formal parameters—is done by position

```python
def subtract(a, b):
  return a - b

print(subtract(10, 3)) # a=10, b=3 → 결과: 7
```

 - Keyword parameter
  - Binding of actual parameters to formal parameters—is done by name

```python
print(subtract(b=3, a=10)) # 결과: 7
```

 - [Mix of position and keyword]

```python
sumer(my_length, sum = my_sum, list = my_array)
```

- Parameters (Python)
 - Default value
  - Used if no actual parameter is passed to the formal parameter

```python
def compute_pay(income, exemptions = 1, tax_rate)
```

 - Absent actual parameter
  - Skip (exemptions)

```python
pay = compute_pay(20000.0, tax_rate = 0.15)
```

- Parameters (C++)
 - No keyword parameter
 - Default parameter must appear last

```cpp
float compute_pay(float income, float tax_rate, int exemptions = 1)
pay = compute_pay(20000.0, 0.15);
```

 - If there is no default
  - the number of formal and actual parameters should be the same

- Parameters (C#)
 - Variable number of parameters (same type)
 - `params` (여러 개 인자를 받아서 배열로 만들어주는 기능)
  - 반드시 마지막 파라미터여야 함
  - 하나만 사용 가능
  - 같은 타입만 가능 (`int[]` 같은)

```csharp
public void DisplayList(params int[] list) {
  foreach (int next in list) {
    Console.WriteLine("Next value {0}", next);
  }
}

Myclass myObject = new Myclass;
int[] myList = new int[6] {2, 4, 6, 8, 10, 12};
myObject.DisplayList(myList);
myObject.DisplayList(2, 4, 1, 17);
```

- Parameters (Ruby)
 - Use array formal parameter `*` (only one in the parameter)
 - 중간에도 올 수 있음 (C#은 불가능)

```ruby
list = [2, 4, 6, 8]

def tester(p1, p2, p3, *p4)
  ...
end

tester('first', mon => 72, tue => 68, wed => 59, *list)
# p1 is 'first'
# p2 is {mon => 72, tue => 68, wed => 59}
# p3 is 2
# p4 is [4, 6, 8]
```

- Parameters (Lua)
 - Use ellipsis (`...`): treated as an array or as a list of values
 - `ipairs` is an iterator for arrays
 - `{...}` is an array of the actual parameter values
 - 인자 개수 제한 없음

```lua
function multiply (...)
  local product = 1
  for i, next in ipairs{...} do
    product = product * next
  end
  return sum
end

print(multiply(2, 3, 4))
```

```lua
function doIt (...)
  local a, b, c = ...
  ...
end

doIt(4, 7, 3)
```

| 언어 | 문법 | 본질 |
|---|---|---|
| C# | `params int[]` | 배열 생성 (정적) |
| Ruby | `*args` | 배열로 수집 (pack) (동적) |
| Lua | `...` | 값 리스트 (not array) |

- Subprograms are collection of statements
 - Procedures: does not return
  - Can change variable (side effect 발생 가능)
  - Visible in procedure and calling program (호출한 쪽 프로그램에서 공유되는 변수에 접근 가능)
  - Formal parameters that allow the transfer of data to the caller
  - Formal parameter는 함수와 호출자 사이에서 데이터를 주고받는 인터페이스 역할
  - 상태를 바꾸는 용도 결과는 "값"이 아니라 변수 변화
 - Functions: return value
  - Modeled on mathematics
  - No side effect ideally
  - Can be defined as operator
 - Usually, function can be used as procedures by not defining return

## Design issues for subprograms

- Choice of one or more parameter-passing methods
 - Pass-by-value
 - Pass-by-reference
 - …
- Type checking
 - Static type checking
 - Dynamic type checking
- Static or dynamic local variables in subprograms
- Can be nested

```python
def outer():
  def inner():
    print("nested")
  inner()
```

- Can be passed as parameters
 - 서브프로그램을 다른 함수의 파라미터로 전달 가능 (first-class function 지원 언어)
 - When subprograms are nested and passed, what is the correct referencing environment
 - 함수 안에서 정의된 함수를 다른 곳에 넘길 때, 그 외부 환경 정보도 함께 전달
- Can be overloaded or generic
 - Overloading: 같은 이름 다른 시그니처 → 정적 다형성
 - Generic: 타입 파라미터화
- Closure supported?
 - 함수와 그 함수가 선언된 환경의 조합

## Local referencing environments

- Local variable
 - Inside subprogram (서브프로그램 안에서 선언된 변수)
 - Static
  - 선언 시 메모리에 고정된 위치에 할당, 프로그램 종료까지 유지됨
  - [C] keyword `static` is used for static local variable
  - 함수가 여러 번 호출되더라도 이전 값 유지
 - Stack dynamic (default setting for most languages)
  - 함수 호출 시 스택 프레임에 생성되고, 리턴되면 소멸
  - [Pro] Flexible, each recursive calls have their own local variable
  - [Pro] If it is in active subprograms, it can be shared
  - [Con] Cost of time for allocation, initialization, deallocation
  - [Con] Must be indirectly accessed (determined only during execution)
  - [Con] Cannot be history sensitive

- Global variable
 - Defined outside subprogram
 - Can be referenced in the method without declaring
 - If the name of a global variable is assigned in a method
  - Implicitly declared to be a local
  - Does not disturb the global (섀도잉 shadowing 현상)

- Nested subprograms (한 함수 안에 또 다른 함수를 정의하는 구조)
 - Create hierarchy of logic and scopes
 - Can be used when it is only needed in another subprogram
 - Want to hide it from others → 캡슐화
 - Allowed in Algol, Pascal, Ada, JavaScript, Python, Ruby and Lua + most Functional languages
 - Not allowed in many descendants of C

```python
def outer():
  def inner():
    print("I'm nested!")
  inner()
```

## Parameter passing methods

- Semantics models
- Implementation models
- Implementing parameter passing methods
- Parameter passing methods in common languages
- Type checking parameters
- Multidimensional arrays as parameters
- Design considerations
- Examples

- Semantics models (formal parameter)
 - in mode: receive data
 - out mode: transmit data
 - inout mode: can do both
 - [EX] list1: in mode, list2: inout mode, list3: out mode

```python
def function(list1, list2):
  list2 = list1 + list2
  list3 = list1 + list2
  return list2, list3
```

- Implementation models
 - Pass-by-value
 - Pass-by-result
 - Pass-by-value-result
 - Pass-by-reference
 - Pass-by-name

- Implementation models
 - Pass-by-value

```c
#include <stdio.h>
void add(int in){
  in = in + 10;
}
void main(){
  int a = 20;
  add(a);
  printf("a: %d", a); // 20
}
```

 - Actual parameter is used to initialize formal parameter
 - Can implement in-mode (caller → callee)
 - Implemented by copy (usually)
 - Because the copied value is passed into the function without affecting the original value, it can be used in cases where the original value should not be changed
 - Pro: fast in both linkage cost and access time for scalars
 - Cons
  - Additional storage is required for copy
  - Copy operations and storage can be costly when parameter is large

- Implementation models
 - Pass-by-result

```c
// Assume pass-by-result
#include <stdio.h>
void add(int in){
  in = 10;
}
void main(){
  int a = 20;
  add(a);
  printf("a: %d", a); // 10
}
```

 - Implementation for out-mode parameters (callee → caller)
 - No value is transmitted to the subprogram
 - 실제 매개변수의 초기값은 서브프로그램 내에서 사용되지 않고, 오직 서브프로그램 종료 후 결과값이 복사돼 돌아가는 구조
 - Its value is transmitted back to the caller's actual parameter
 - Implemented by copy (usually)
 - 호출 전: 아무 값도 복사되지 않음
 - 호출 후: 서브프로그램 종료 시, 내부 변수의 값을 실제 매개변수 위치로 복사
 - Ensuring that the initial value of the actual parameter is not used in the called subprogram
 - (+) 내부 로컬 변수로 처리되기 때문에 초기값 오류 가능성이 낮음
 - (-) 초기값을 참조해야 하는 경우에는 부적합
 - (-) 여러 개의 이름(alias)이 같은 실제 매개변수를 가리키는 경우, 예측 불가능한 결과가 발생할 수 있음 (특히 pass-by-reference와 비교했을 때)

- Implementation models
 - Pass-by-result
  - Cons
   - Actual parameter collision
   - 17 or 35 can be assigned to a
   - So, order dependent

```csharp
[C# 코드]
void Fixer(out int x, out int y) {
  x = 17;
  y = 35;
}
...
f.Fixer(out a, out a);
```

- Implementation models
 - Pass-by-result
  - Cons
   - Can choose between two different times to evaluate (time of call or return)
   - 평가 시점(call vs return)에 따라 결과가 달라짐 → 신뢰성이 떨어짐
   - In function DoIt, `list[sub]` = `list[3]` or `list[5]`?
   - Unportable between an implementations: evaluation at beginning and evaluation at the end

```csharp
public static void DoIt(out int x, out int y)
{
  y = 5;
  x = 17;
}

public static void Main(string[] args)
{
  int sub = 3;
  int[] list = new int[6]{4, 9, 1, 0, 21, 12};
  DoIt(out list[sub], out sub);
  System.Console.WriteLine("{0} {1} {2}", list[3], list[sub], sub);
}
```

   - Call-time evaluation (호출 시점에 주소 평가): `17 12 5`
    - `// sub[3]` changed to 17, thus the value of x(17) return to `sub[3]`, not `sub[5]`
    - `//→` return address is decided during time of call, not return
   - Return-time evaluation (복귀 시점에 주소 평가):
    - `list[sub]` = `list[3]` ← sub 는 이때 3
    - sub = 5 ← DoIt() 에서 변경됨
    - → x = 17 → `list[3]` = 17
    - sub = 5 가 먼저 적용된 뒤 `list[sub]` = `list[5]`
    - → x = 17 → `list[5]` = 17
    - ⇒ 즉, `list[sub]`는 `list[3]`으로 평가되었다는 것.
    - → 주소가 호출 시점(call time)에 평가되었음을 의미함.

- Implementation models
 - Pass-by-value-result
  - Implementation for inout-mode parameters
  - Pass-by-value + pass-by-result
  - Called by pass-by-copy

- Implementation models
 - Pass-by-reference

```c
#include <stdio.h>
void add(int &in){
  in = in + 10;
}
void main(){
  int a = 20;
  add(a);
  printf("a: %d", a); // 30
}
```

 - Implementation for inout-mode parameters
 - Transmits an access path (address)
 - Value of the original variable can be changed
 - Efficient (time and space), no copy
 - Cons
  - Slow to access to formal parameter due to indirect addressing
  - Inadvertent and erroneous changes may be made
  - Aliases can be created → providing access to nonlocal variables → reliability problem

```c
void fun(int &first, int &second)
fun(total, total)
// first and second can be aliases
```

- Implementation models
 - Pass-by-name
  - Implementation for inout-mode parameters
  - 코드 조각(이름)을 통째로 전달해서, 그때그때 실행해보는 방식
  - 실제 매개변수의 이름 자체를 서브프로그램에 전달하는 것처럼 동작함
  - 매개변수 표현식이 매 호출마다 재평가됨 (lazy substitution)
  - 일종의 텍스트 치환(textual substitution) 또는 매크로처럼 동작
  - 동작 방식
   - Works like pass-by-reference when variable is passed
   - Works like pass-by-value when constant value is passed
   - Complex to implement and inefficient

- Implementation models
 - Pass-by-name

```
DoIt(x, y)
  x := x + 1
  y := y + x

DoIt(a[i], i)
여기서 a[i]랑 i는 그대로 전달됨 (값이 아니라 이름처럼)

실행 흐름 (pass-by-name):
x := a[i] + 1 → a[i]가 변경됨
y := i + a[i] → i 변경됨
다시 a[i]를 보면 이미 값이 바뀌었을 수 있음
→ 한 줄이 끝나면 변수 값이 달라져서 다음 줄 해석이 바뀜
```

 - 너무 복잡하고, 실수하기 쉽고, 속도도 느려서 → 요즘은 거의 안 씀. Algol 60 에서 사용

- Implementing parameter passing methods
 - Run-time stack using run-time system takes care for parameter transmission

| 파라미터 | 전달 방식 | 설명 |
|---|---|---|
| w | pass-by-value | 값 자체를 복사하여 전달됨 |
| x | pass-by-result | 함수 종료 시 결과를 복사해서 전달 |
| y | pass-by-value-result | 호출 시 값 전달, 종료 시 결과 복사 |
| z | pass-by-reference | 주소(참조) 전달, 원본 직접 수정 가능 |

| 파라미터 | Stack 동작 | 함수 내부에서 |
|---|---|---|
| a (w) | 호출 시 w의 값 복사 → a 에 저장 | 읽기 가능, 변경해도 w에 영향 없음 |
| b (x) | 별도 저장소(스택)에 공간 만들고, 함수 종료 후 b 값을 x에 복사 | 함수 내부에서 b는 로컬 변수처럼 쓰고, 리턴 시 값 복사 |
| c (y) | 호출 시 y 값 복사 → 함수 종료 시 c 값 → 다시 y에 복사 | 양방향 값 복사 (진입, 종료 시 모두) |
| d (z) | z 의 주소를 전달 → 함수 내부에서 직접 원본 접근 가능 | 변경 시 z 도 바로 바뀜 |

- Parameter passing methods in common languages
 - [C++] Pass-by-value but pass-by-reference can be achieved by pointer and reference types

```cpp
void fun(const int &p1, int p2, int &p3) { ... }
```

 - p1: pass-by-reference but cannot be changed, p2: pass-by-value, p3: pass-by-reference
 - Constant parameter vs in-mode parameter
  - Constant parameter can never be assigned but in-mode parameter can
 - [Java] Pass-by-value but objects are passed by reference
  - No pointer type, scalar cannot be passed by reference
 - [C#] Pass-by-value but pass-by-reference can be achieved by `ref`

```csharp
void sumer(ref int oldSum, int newOne) { ... }
...
sumer(ref sum, newValue);
```

- Parameter passing methods in common languages
 - [Python, Ruby] Pass-by-assignment
 - All data are object
 - [EX] `x = x + 1`
  - Takes object referenced by x, increments by 1, then create new object, finally assign new object to x

```python
string = "Hello"
string[0] = 'W' # X
string = "Wello" # O
```

 - [EX] Scalar cannot be changed in subprogram
 - Reference method of the object is determined depending on the object being passed
  - Mutable Object(list, dict, set) → Call by reference
  - Immutable Object(str, int, tuple) → Call by value

```python
# [immutable] call-by-value
def func(x):
  x = x + 1
a = 1
func(a)
```

```python
# [mutable] call-by-reference
def func(x):
  x.append(5)
a = [1, 2, 3, 4]
func(a)
```

```python
# [mutable] ??
def func(x):
  x = [1, 2]
a = [1, 2, 3, 4]
func(a)
```

- Type checking parameters
 - Most languages require type checking
 - Early programming languages (Fortran 77 and original version of C) did not require

```c
double sin(x)  // avoid type check
double x;
{ ... }

double sin(double x)  // do type check (with coercion), prototype method
{ ... }
```

 - 함수 선언과 타입 정보가 분리되어 있었음
 - In C89, formal parameters can be defined in two ways
 - In C99 and C++, prototype form but avoided by ellipsis

```c
int printf(const char* format_string, ...);
```

- Type checking parameters
 - In C#, `ref` actual parameter needs to be the same with formal parameter
 - In Python, Ruby, objects have types, but variables do not
 - Formal parameters are typeless
 - No type checking of parameter

| 언어 | 타입 검사 | 설명 |
|---|---|---|
| C# | 엄격한 타입 검사 | 형식 매개변수(formal parameter)와 실제 인자(actual argument)의 타입이 반드시 일치해야 함. `ref`, `out` 키워드를 쓸 경우, 호출부에도 명시적으로 붙여야 함 → 형식과 키워드까지 일치해야 컴파일 통과 |
| C/C++ | (C89 이후) | C89부터 함수 프로토타입이 도입되며 타입 검사 가능. `void f(int); f("abc");` → 오류 발생. C++에서는 더 엄격하고 함수 오버로딩도 지원 |
| Python | 변수는 타입 없음 | 객체는 타입을 가지지만, 변수 자체는 타입이 없음. 함수의 형식 매개변수는 타입 선언이 없음 (기본적으로) → 파라미터에 대한 타입 검사도 하지 않음 |
| Ruby | Python과 동일 | 변수는 어떤 타입의 객체든 가리킬 수 있음. 함수 정의 시 파라미터에 타입을 명시할 수 없음 → 런타임에서 잘못된 타입 사용 시 오류 발생 (동적 타입) |

- Multidimensional arrays as parameters
 - In C and C++, pointer can be used for passing
 - Inclusion of pointer arithmetic
 - Dimension of matrix (row, column) can be passed as parameters

```c
void fun(float *mat_ptr,
     int num_rows,
     int num_cols);
```

 - Can access element by
  - `*(mat_ptr + (row * num_cols) + col) = x;`
  - Or macro

```c
#define mat_ptr(r,c) (*mat_ptr + ((r) * (num_cols) + (c)))
mat_ptr(row,col) = x;
```

- Multidimensional arrays as parameters
 - In C# and Java, arrays are object
 - Formal parameter for a matrix appear with `[][]`
 - Use `length` (`Length` in C#) to get row and column sizes

```java
float sumer(float mat[][]) {
  float sum = 0.0f;
  for (int row = 0; row < mat.length; row++) {
    for (int col = 0; col < mat[row].length; col++) {
      sum += mat[row][col];
    } //** for (int row ...
  } //** for (int col ...
  return sum;
}
```

- Design considerations
 - Efficiency
  - 실행 속도와 자원 사용을 고려해 불필요한 데이터 접근을 줄이는 것이 중요함
  - 서브프로그램 내부에서 외부 데이터에 자주 접근하지 않도록 설계
  - 필요한 데이터는 파라미터로 전달받고, 내부에서만 처리
  - 복사 비용이 큰 객체는 포인터나 참조로 전달 (C/C++)
 - Minimize functional side effect
  - 서브프로그램이 외부 상태를 예기치 않게 바꾸는 것을 피해야 함
  - 입력값만 사용하고 결과를 반환하는 순수 함수(pure function) 지향
  - 외부 변수(global variables), 참조 파라미터 등은 가급적 쓰지 않기
  - 명확하고 예측 가능한 함수로 유지

```python
# 부작용 발생: 함수가 외부 리스트를 바꿈
def add_item_bad(lst):
  lst.append(100)

# 부작용 없음: 새로운 리스트를 반환
def add_item_good(lst):
  return lst + [100]
```

- Examples
 - Compare pass-by-value-result and pass-by-reference

```c
void fun (int first, int second) {
  first += first;
  second += second;
}
void main() {
  int list[2] = {1, 3};
  fun(list[0], list[1]);
}
```

 - Assume that there is no accumulation
 - Pass by value: No changes
 - Pass by reference: list → {2,6}
 - Pass by value-result: list → {2,6}

- Examples
 - Compare pass-by-value-result and pass-by-reference

```c
int i = 3; /* i is a global variable */
void fun(int a, int b) {
  i = b;
}
void main() {
  int list[10];
  list[i] = 5;
  fun(i, list[i]);
}
```

 - When pass-by-value-result is used, i and a are not alias
  - global variable i is changed within fun
  - But, formal parameter back to caller
 - When pass-by-reference is used, i and a are alias
  - global variable i is changed within fun
  - Formal parameter not back to caller → i remains 5

- Examples

```c
void swap(int a, int b) {
  int temp;
  temp = a;
  a = b;
  b = temp;
}
void main() {
  int value = 2, list[5] = {1, 3, 5, 7, 9};
  swap(value, list[0]); // (1)
  swap(list[0], list[1]); // (2)
  swap(value, list[value]); // (3)
}
```

 - Assume that there is no accumulation
 - Pass by value: No changes after (1),(2),(3)
 - Pass by reference:
  - (1) value → 1, list → {2,3,5,7,9}
  - (2) value → 2, list → {3,1,5,7,9}
  - (3) value → 5, list → {1,3,2,7,9}
 - Pass by value-result:
  - (1) value → 1, list → {2,3,5,7,9}
  - (2) value → 2, list → {3,1,5,7,9}
  - (3) value → 5, list → {1,3,2,7,9} (when addr is computed at time of call)
   - If addr is computed at time of return
   - value → 5, list[value==5] → 2 (out of range error)

## Parameter that are subprograms

- In a certain situation, subprograms needs to be sent as parameters
- [Issue 1] Type checking function's protocol
 - 전달하려는 함수가 올바른 형식(매개변수 개수, 타입, 반환 타입)을 갖고 있는지 확인해야 함
 - 그렇지 않으면 컴파일러가 호출 시 타입 오류를 탐지하지 못함
 - → 런타임 오류 발생 위험
 - 함수 포인터(Function Pointer) 타입 명시 (C/C++)
  - `int compute(int x, int (*func)(int))`
  - `func`는 `int(int)` 타입 함수여야 함 → 타입 체크 가능

- [Issue 2] Function would be nested → how to decide referencing environment
 - 함수가 자신을 감싼 외부 스코프의 변수를 참조하고 있는데,
 - 그 함수가 다른 함수에 전달되면 외부 변수에 접근할 때 어떤 환경을 따라야 할지 모호함
 - Shallow binding: environment of the call statement that enacts the passed subprogram (Used for dynamic-scoped languages)
 - Deep binding: environment of the definition of the passed subprogram (Suitable for static-scoped languages)
 - Ad hoc binding: environment of the call statement that passed the subprogram as an actual parameter
 - x is bound to local x in sub1
 - x is bound to local x in sub3
 - x is bound to local x in sub4

## Calling subprograms indirectly

- In a certain situation (event handling in GUI), subprograms must be called indirectly
- Unknown which subprogram will be called until runtime
- Done by pointer or reference to subprogram
- `float (*pfun)(float, int);`
- `pfun`은 매개변수 `(float, int)`를 받고 `float`을 반환하는 함수를 가리키는 포인터

```c
#include <stdio.h>
float multiply(float a, int b) {
  return a * b;
}

float divide(float a, int b) {
  return a / b;
}

int main() {
  float (*pfun)(float, int);
  int condition = 1; // 런타임 조건
  if (condition)
    pfun = multiply;
  else
    pfun = divide;

  float result = pfun(10.0, 2); // 간접 호출
  printf("Result: %.2f\n", result); // 20.00
  return 0;
}
```

- Called by

```c
(*pfun2)(first, second); // 전통적인 포인터 방식
pfun2(first, second);  // C에서 허용되는 간단한 문법
```

- [C#] delegate
 - Reference to method for pass it as parameter
 - delegate는 함수 포인터와 비슷한 개념
 - 하나 이상의 메서드를 참조할 수 있는 타입
 - 메서드를 변수처럼 넘기고 호출할 수 있음

```csharp
public delegate int Change(int x); // 델리게이트 타입 선언,
// int을 받아 int를 반환하는 메서드 시그니처와 동일한 타입의 delegate를 만듦

static int fun1(int x) { return x + 1; }
static int fun2(int x) { return x * 2; } // fun1, fun2는 모두 Change delegate와 시그니처가 같음

Change chgfun1 = new Change(fun1); // fun1을 참조하는 delegate 생성
chgfun1 += fun2; // fun2도 추가 → 멀티캐스트 delegate
int result = chgfun1(5); // fun1(5), fun2(5) 순으로 실행됨
```

## Overloaded subprograms

- The same name and referencing environments as another
- But, unique protocol (number, order types of parameters and return types)
- Meaning of call is determined by actual parameters
- [Issue 1] Coercion is allowed?
 - When there is no exact match, should we allow the best match? and how?
- [Issue 2] The same parameter but different return types
 - How to choose return type?
- The most common multiple versions of subprogram: constructors

```cpp
// [C++]
int func(int first, int second) {
  return first + second;
}
float func(float first, float second) {
  return first - second;
}

func(1, 2);   // 3
func(1.0f, 2.0f); // -1.0
func(1.0, 2.0); // error: call of overloaded 'func(double, double)' is ambiguous
func(1.0, 2.0f); // -1.0, coercion to func(float,float)
func(1.0, 2);  // 3, coercion to func(int,int)
```

- 정확히 일치하는 타입이 최우선
- 암시적 변환 가능하면 고려됨
- 두 개 이상이 모두 암시적 변환 가능이면 → 모호성 오류(ambiguous)

```cpp
// [C++] ambiguous return type
int func(int first, int second) {
  return first + second;
}
float func(int first, int second) {
  return first > second ? first : second;
}
// error: ambiguating new declaration of 'float ...
```

```java
// [Java]
public static int func(int first, int second) {
  return first + second;
}
public static float func(float first, float second) {
  return first - second;
}

func(1, 2);   // 3
func(1.0f, 2.0f); // -1.0
func(1.0, 2.0); // no suitable method found for func(double,double), argument mismatch; possible lossy conversion from double to int(float)
func(1.0, 2.0f); // no suitable method …. lossy …
func(1.0, 2);  // no suitable method …. lossy …

// [Java] If not lossy conversion
func('A', 2);  // 67, coercion to func(int, int)
func('A', 2.0f); // 63.0, coercion to func(float,float)
func('A', 'B'); // 131, coercion to func(int,int)

// [Java] ambiguous return type
public static int func(int first, int second) {
  return first + second;
}
public static float func(int first, int second) {
  return (float) (first - second);
}
// error: method func(int,int) is already defined
```

## Generic subprograms

- Reusability is important for productivity
- Polymorphism!
 - Ad hoc polymorphism
  - Overloaded subprograms (need not behave similarly each other)
 - Subtype polymorphism
  - OOP, variable of type T can access any object of type T and derived from T
 - Parametric polymorphism
  - Takes generic parameters
  - Parametrically polymorphic subprograms are called generic subprograms

- Generic functions in C++
- template function

```cpp
// Overloaded subprograms
int max(int first, int second) {
  return first > second ? first : second;
}
float max(float first, float second) {
  return first > second ? first : second;
}
double max(double first, double second) {
  return first > second ? first : second;
}

// With template function
template <class Type>
Type max(Type first, Type second) {
  return first > second ? first : second;
}

int x1 = 2, x2 = 3;
max(x1, x2) // dynamically bound to the types
```

- Generic functions in C++
- If overloaded?

```cpp
template <class Type>
Type max(Type first, Type second) {
  return first > second ? first : second;
}
float max(float first, float second) {
  return first > second ? -first : -second;
}
double max(double first, double second) {
  return first > second ? 2*first : 2*second;
}

max(1, 2)   // 2
max(1.0f, 2.0f) // -2
max(1.0, 2.0) // 4
// → specific functions have higher precedence than generic function
```

- Generic functions in C++
- With standard library in `std`?

```cpp
#include<iostream>
using namespace std;

template <class Type>
Type max(Type first, Type second) {
  return first > second ? first : second;
}

max(1, 2) // error: call of overloaded 'max(double, double)' is ambiguous
     // → conflict max() in std
```

```cpp
#include<iostream>
using namespace std;

int max(int first, int second) {
  return first > second ? first : second;
}

max(1, 2) // 2
// It's okay to define function for specific type
```

- Generic functions in C++
- template with different types?

```cpp
template <class Type>
Type max(Type first, Type second) {
  return first > second ? first : second;
}
// max(1, 2.0) // error: no matching function for call to 'max(int, double)
// → Single type can cover one type only

template <class Type1, class Type2>
Type1 max(Type1 first, Type2 second) {
  return first > second ? first : second;
}
max(1, 2)  // 2
// Need to define different Type
```

- Generic functions in C++
- How about array?

```cpp
template <class Type1, class Type2>
double max(Type1 first, Type2 second, int index) {
  return first[index] > second ? first[index] : second;
}

int x[3] = {1,2,3};
max(x, 2.0, 2); // 3
// → array (pointer) can be also covered
```

- Generic functions in C++
- template function vs macro

```cpp
template <class Type>
Type max(Type first, Type second) {
  return first > second ? first : second;
}

#define max(a, b) ((a) > (b)) ? (a) : (b)
```

- Macro can be used but problem when there is side effect

```cpp
max(x++, y)
→ ((x++) > (y) ? (x++) : (y))
// x is increased twice
```

## Design issues for functions

- Side effect allowed?
 - To prevent it, enforce im-mode parameters
 - [Imperative] have side effects
 - [Functional] have no variable, so no side effects
- What type can be returned?
 - Mostly (Python, Ruby, and Lua), any type can be returned, passed as parameters
 - [C] Arrays and functions are handled by pointer
 - [Java, C#] Method (class function) is used, any type and class can be returned
- How many values can be returned
 - Ruby, Lua, Python can return multiple values
 - `a, b, c = fun()`
 - Tuple is used

## User-defined overloaded operators

- Operator can be also overloaded
- [C++] Several operators can be overloaded
 - Exceptions: `.`, `.*`, `::`, `?:`
 - Define operator as a method in class

```cpp
class Complex
{
public:
  Complex(int real, int img){
    this->real = real;
    this->img = img;
  }
  Complex operator+(const Complex& right){
    int real = this->real + right.real;
    int img = this->img + right.img;
    return Complex(real, img);
  }
private:
  int real;
  int img;
};

Complex x1 = Complex(1,1);
Complex x2 = Complex(2,2);
Complex x3 = x1 + x2;
```

- Operator can be also overloaded
- [Python] For addition for complex numbers
 - Define addition operation in special method(`__add__`)

```python
def __add__ (self, second):
  return Complex(self.real + second.real, self.imag + second.imag)
```

## Closures

- Function is also object
- Can be pass to other function, returned by function and stored in data structure

```python
# Function can be passed
def funcO(func):
  return func()

def funcI():
  return "function inside"

print(funcO(funcI))
```

```python
# Function can be stored in list
def add(a, b):
  return a + b

def subtract(a, b):
  return a - b

def multiply(a, b):
  return a * b

def divide(a, b):
  return a / b

func_lst = [add, subtract, multiply, divide]
n = 1
m = 2
for func in func_lst:
  print(func.__name__, ":", func(n, m))

# add : 3
# subtract : -1
# multiply : 2
# divide : 0.5
```

- Function can be nested
- `inner()` can only be called inside `outer()`

```python
def outer():
  print("Here is outer region.")
  def inner():
    print("Here is inner region.")
  inner()

outer()
```

- A closure is a function returned by a function

```python
def addNumber(fixedNum):
  def add(number):
    return fixedNum + number
  return add

func = addNumber(10)
func(20) # 30
func(30) # 40
```

- Each of these calls returns a different version of the closure because they are bound to different values of `fixedNum`
- lifetime of the version of `fixedNum` created when `addNumber` is called must extend over the lifetime of the program
- This subprogram can be called in other place
- → Subprogram needs to remembers the referencing environment in which it was defined
- Benefits
 - Global variables can be reduced.
 - Similar types of code can increase the reuse rate

```python
def addNumber(fixedNum):
  def add(number):
    return fixedNum + number
  return add

func1 = addNumber(10)
func2 = addNumber(20)

print(dir(func1))
print(func1.__closure__[0].cell_contents)
print(func2.__closure__[0].cell_contents)
```

```
['__annotations__', '__builtins__', '__call__', '__class__', '__closure__', '__code__',
'__defaults__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__',
'__ge__', '__get__', '__getattribute__', '__getstate__', '__globals__', '__gt__',
'__hash__', '__init__', '__init_subclass__', '__kwdefaults__', '__le__', '__lt__',
'__module__', '__name__', '__ne__', '__new__', '__qualname__', '__reduce__',
'__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__',
'__type_params__']
(<cell at 0x7fb35f401240: int object at 0x564e4ecb58c8>,)
10
20
```

- Since function is also an object, we can check its properties through the `dir()` function, and we can see that there is `__closure__` in the checked properties.
- `__closure__` is tuple
- We can check information of closure

- A closure can model high-level module such as neural network

```python
def nonlinear_activation():
  e = 15
  def thre(x):
    return 1 if x > e else 0
  return thre

def linear_model():
  a = 3
  b = 5
  def mul_add(x):
    return a * x + b
  return mul_add

lm = linear_model()
print(lm(1), lm(2), lm(3), lm(4), lm(5))
na = nonlinear_activation()
print(na(lm(1)), na(lm(2)), na(lm(3)), na(lm(4)), na(lm(5)))

# 8 11 14 17 20
# 0 0 0 1 1
```

- Neural network consists of huge amount of linear model + nonlinear activation
- Each model has similar structure (process) with only different learnable parameters

- A closure with lambda

```python
def linear_model():
  a = 3
  b = 5
  return lambda x: a * x + b

lm = linear_model()
print(lm(1), lm(2), lm(3), lm(4), lm(5))
# 8 11 14 17 20
```

- Change local variable of closure

```python
def linear_model():
  a = 3
  b = 5
  sum = 0
  def mul_add(x):
    nonlocal sum
    result = a * x + b
    sum += result
    print("sum:%d" % sum)
    return result
  return mul_add

lm = linear_model()
print(lm(1), lm(2), lm(3), lm(4), lm(5))

# sum:8
# sum:19
# sum:33
# sum:50
# sum:70
# 8 11 14 17 20
```

## Coroutines

- Special subprogram
- In coroutine, caller and called coroutines are more equitable
- In common subprogram, caller and callee have master-slave relationship
- Coroutines can have multiple entry points
- Controlled by symmetric unit control model.
- Resume: secondary executions of a coroutine often begin at points other than its beginning
- History sensitive
- `co1() → co2(2) → co1() → co3() → co1()`
- Only one coroutine is actually in execution at a given time → quasi-concurrency
- Related to the way multiprogramming operating systems
- Usually, master unit handle. EX. card game simulation

- (a) execution of coroutine A is started by the master unit
- (b) execution of coroutine B is started by the master unit

- Coroutine execution sequence with loops

```python
def coroutine1():
  print('callee 1')
  x = yield 1
  print('callee 2: %d' % x)
  x = yield 2
  print('callee 3: %d' % x)

task = coroutine1()
i = next(task)  # print callee 1, i = 1
i = task.send(10) # print callee 2:10, i = 2
task.send(20)   # print callee 3: 20, then StopIteration exception

# callee 1
# callee 2: 10
# callee 3: 20
# StopIteration
```