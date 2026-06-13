---
sitemap: false
---
# 9. Implementing Subprogram

## Recap: Subprograms

- Parameters
```python
def compute_pay(income, exemptions = 1, tax_rate):
    ...
    return

```

- Positional binding

```python
pay = compute_pay(20000.0, tax_rate = 0.15)

```

- Formal parameters: income, exemptions, tax-rate
- Actual parameters: 20000.0, 0.15
- Default value
- Binding by keyword parameters

- Parameter passing methods
- Semantics models
- in mode, out mode, inout mode

- Implementation models
- Pass-by-value
- Pass-by-reference
- Pass-by-value-result
- Pass-by-name
- Pass-by-assignment



- Two types of subprograms
- Procedures: does not return
- Can change variable

- Functions: return value
- No side effect ideally



- Parameter that are subprograms
- Shallow/deep/ad hoc binding

- Overloaded subprograms
- [Issue 1] Coercion is allowed?
- [Issue 2] The same parameter but different return types

- Generic subprograms
- Ad hoc/subtype/parametric polymorphism

- [Issue 1] Type checking function’s protocol
- [Issue 2] If nested $\rightarrow$ referencing environment
- Closures: function returned by a function
- Function is also object
- Function can be nested
- Subprogram can be called in other place
- Remembers the referencing environment

```python
def addNumber(fixedNum):
    def add(number):
        return fixedNum + number
    return add
# ===============================
func = addNumber(10)
func(20) # 30
func(30) # 40

```

- Coroutines
- Coroutines are more equitable
- Coroutines can have multiple entry points
- Only one coroutine is actually in execution at a given time
- $\rightarrow$ quasi-concurrency
- Related to the way multiprogramming operating systems


## Implementing Subprogram

- General semantics of calls and returns
- “Simple” subprograms
- Subprograms with stack-dynamic local variables
- Nested subprograms
- Blocks
- Dynamic scoping
- Implementation of subprograms
- How subprogram linkage works?
- Subprogram을 호출하고 실행하는 과정에서 필요한 메모리 할당, 인자 전달, 복귀 주소 관리 등을 처리하는 과정
- 호출할 때 필요한 정보(매개변수, 지역변수, 복귀주소 등)를 Activation Record로 스택에 저장
- 함수 실행 후 복귀 시 Activation Record를 제거하고 복구

- Simplest: no nested with only local static variable
- Static variable은 스택(stack)이 아니라 고정된 메모리 공간(static data area) 에 저장
- 호출할 때마다 새로 생성하거나 제거할 필요 없음
- $\rightarrow$ Activation Record는 매우 단순해짐
- 복귀 주소 (Return address)만 저장하면 되고
- 지역변수 공간은 이미 따로 있으므로 스택에 저장할 필요 없음

```cpp
int counter() {
    static int cnt = 0; // static local variable
    cnt++;
    return cnt;
}
int main() {
    int a = counter(); // a == 1
    int b = counter(); // b == 2
    return 0;
}

```

- Challenges with
- Stack-dynamic local variable
- 지역변수가 함수 호출 시점에 만들어짐
- 함수 끝나면 스택에서 자동 소멸
- 크기가 가변적인 경우 (ex: 가변 배열) 더 주의해야 함

- Nested subprograms
- 함수 안에 또 다른 함수를 정의할 수 있음 (ex: Pascal, Ada, 일부 Python lambda)
- 내부 함수가 외부 함수의 변수에 접근해야 할 수도 있음

- Nonlocal access with static scope
- 중첩 함수가 상위 함수의 변수를 사용하려고 할 때
- 상위 함수의 Activation Record로 접근 방법 필요 (Static Link)

- Block and dynamic scope
- scope 규칙에 따라, 런타임에 찾는 방법(static vs dynamic)이 달라 짐



## General Semantics of Calls and Returns

- Subprogram linkage: subprogram call and return operations
- Implementation should be based on semantic of subprogram linkage
- Subprogram call
- Must include parameter-passing method
- Allocation and binding for stack-dynamic local variable
- Execution status should be saved
- Everything needed to resume execution of the calling program unit
- Register value, CPU status bits, environment pointer (EP)

- Arrange to transfer control to the code of the subprogram
- After execution is completed, transfer control should be returned proper place
- For nested subprograms, mechanism for accessing nonlocal variables are needed

- Subprogram return
- In out mode and inout mode, formal parameters are returned to the actual parameters
- Deallocate of stack-dynamic local variables in subprograms
- Restore the execution status of the calling program
- Returning control to the caller

- Code Example:
```cpp
// [C++]
int g = 0;
int func(int first, int second) {
    int sum = 0;
    sum = first + second;
    return sum;
}
void main() {
    int x = 1;
    int y = 2;
    func(x,y);
    return;
}

```

- Component Layout & Concepts:
- Parameters $\rightarrow$ Where parameters are stored
- Local variable $\rightarrow$ Where local variables in subprograms are stored
- Where we return $\rightarrow$ Where we return after the subprogram call
- Stack
- Heap
- Registers
- …
- Environment pointer (EP)
- Data
- Program counter (PC)
- Code


## “Simple” Subprograms

- No nested and all local variables are static (or no recursion)
- Semantic of call
1. Create an activation record instance
2. Save the execution status of the current program unit. (done by caller or callee)
3. Compute and pass the parameters. (done by caller)
4. Pass the return address to the called. (done by caller)
5. Transfer control to the called. (done by caller)

- Allocation and binding for stack-dynamic local variables
- Mechanism for nonlocal variable for nested subprograms

- Semantic of return
1. For out-mode parameters, the values of those parameters are moved to the corresponding actual parameters. (done by callee)
2. If the subprogram is a function, the functional value is moved to a place accessible to the caller. (done by callee)
3. The execution status of the caller is restored. (done by caller or callee)
4. Control is transferred back to the caller. (done by callee)

- Deallocate of stack-dynamic local variables in subprograms

- Simple subprogram code example:
```cpp
// [C++]
int func(int first, int second) {
    static int sum = 0;
    sum = first + second;
    return sum; // ②
}
void main() {
    static int x = 1;
    static int y = 2;
    // ①
    func(x,y);
    return;
}

```

- An activation record for simple subprograms
- ① Caller action
1. Create an activation record instance.
2. Save the execution status of the current program unit.
3. Compute and pass the parameters.
4. Pass the return address to the called.
5. Transfer control to the called.

- ② Callee action
- Epilogue (end of execution)

1. For out-mode parameters, the values of values of those parameters are moved to the corresponding actual parameters.
2. If the subprogram is a function, the functional value is moved to a place accessible to the caller.
3. Restore the execution status of the caller.
4. Transfer control back to the caller.

- 재귀 없음 하나의 서브프로그램만 스택에 올라가서 실행 중
- The call and return actions require storage for the following:
- Status information about the caller
- Parameters
- Return address
- Return value for functions
- Temporaries used by the code of the subprograms

- Linkage action of callee can occur at two different times
- Prologue: beginning of its execution (Caller action)
- Epilogue: end of its execution (Callee action)
- -Prologue (beginning of execution)
- -Epilogue (end of execution)

- Consists of two separate parts:
- Actual codes (constant)
- 서브프로그램의 실제 기계어 명령어들
- 프로그램 작성 시 이미 고정된 Constant
- 실행 중에 변경되지 않음

- Non-code: local variable and data (can change)
- 지역 변수(Local variables), 임시 값(Temporary values), 매개변수(Parameters) 등
- 실행 중에 값이 변경될 수 있음
- Fixed size in simple subprogram
- 중첩이 없고, 지역 변수와 매개변수의 크기가 고정되어 있으면 $\rightarrow$ 서브프로그램마다 필요한 Non-Code 영역의 크기가 고정(fixed)
- 호출할 때마다 이 크기만큼 스택에 공간을 잡으면 됨

- Activation record (non-code):
- Format, or layout, of the noncode part of a subprogram
- Activation Record란 Non-Code 부분의 레이아웃을 정의
- 서브프로그램을 호출할 때 스택에 쌓이는 프레임의 구조
- Activation Record가 포함하는 것들 예시:
- 매개변수(Parameter values)
- 지역 변수(Local variables)
- 복귀 주소(Return address)
- 동적 링크(Dynamic link, caller의 frame pointer)
- 정적 링크(Static link, 상위 lexical scope로 접근하는 포인터)
- 임시 저장공간(Temporary storage)



- ARI (Activation record instance): Instance created according to this format
- Activation Record의 실제 인스턴스
- AR 포맷에 따라 실제로 메모리에 할당되는 스택 프레임이 ARI
- ARI of simple subprogram has fixed size $\rightarrow$ can be statically allocated and attached to code part
- No recursion $\rightarrow$ only one ARI is active
- Single activation record per subprogram



- Code Example for Code and Non-Code mapping:
```cpp
int add(int a, int b) {
    int sum = a + b;
    return sum;
}
int main() {
    int result = add(3, 5);
}

```

- Actual Code:
- add 함수의 컴파일된 명령어들 (ex. 덧셈 명령, 반환 명령 등)
- 프로그램 시작 때 메모리에 고정

- Non-Code (Activation Record Format):
- 매개변수 a, b
- 지역변수 sum
- 복귀 주소



- [EX] Main program with three subprograms A, B and C
- Simple Subprogram 환경에서 메모리 배치(메모리 구조) 를 보여주고 있음
- Data 영역과 Code 영역 두 부분으로 나먄
- Data 영역 (위쪽):
- 각 서브프로그램 (MAIN, A, B, C)에 대해 Activation Record (AR) 가 미리(static) 준비되어 있음
- 이 Activation Record들은 프로그램이 시작할 때 고정된 메모리(Data Segment)에 할당되고, 함수 호출 시마다 새로 만들지 않고 재사용

- Code 영역 (아래쪽)
- MAIN, A, B, C 서브프로그램의 기계어 코드(명령어) 가 저장된 영역
- Code는 변경되지 않고 프로그램 내내 고정
- 컴파일된 명령어들은 프로그램 실행 시 그대로 사용



- Format of AR is static
- $\rightarrow$ Activation Record의 레이아웃이 컴파일 시점에 고정되어 있음
- $\rightarrow$ 런타임에 크기가 변하지 않음

- Each program can be compiled at different time
- MAIN, A, B, C 각각 따로 AR이 존재 $\rightarrow$ 각각의 서브프로그램(MAIN, A, B, C)은 독립적으로 컴파일할 수 있음

- Linker can put together
- $\rightarrow$ 이후 Linker가 이 컴파일 결과들을 하나로 합침



## Subprograms with Stack-Dynamic Local Variables

- Stack-Dynamic Local Variable
- Advantage of stack-dynamic local variable
- Support for recursion
- 각 함수 호출마다 새로운 Activation Record(스택 프레임)를 만들어 저장할 수 있음
- 재귀 호출 시, 함수의 다른 호출들이 서로 독립적인 지역변수 집합을 가질 수 있음
- 결과적으로 한 서브프로그램이 동시에 여러 activation을 가질 수 있음



- But, more complex activation records
- Compiler generates code for implicit allocation/deallocation for local variables
- Activation Record가 단순히 "고정된 메모리"가 아니라, 매 호출마다 새로 만들어야 함
- 컴파일러는 지역변수들을 함수 진입 시 자동으로 생성(allocate), 함수 종료 시 자동으로 소멸(deallocate) 하는 코드를 자동 삽입해야 함

- Multiple simultaneous activations of subprograms (limited by memory size)

- Usually, format of an activation record is known at compile time
- Activation record instances (ARI) must be created dynamically
- Return address, dynamic link and parameters are placed in ARI by caller
- Return address: usually consists of point to instruction following the call
- Dynamic link: pointer to the base of the activation record instance of the caller
- Statically-scoped languages — used for debugging
- Dynamically-scoped languages — also used to find variables in scope

- Actual parameters: values or addresses provided by the caller

- Local variable
- Scalar variables are bound to storage within ARI
- Structure variables are allocated elsewhere (pointer is in ARI)

- ARI 생성과정
- 1. Caller

- Return address, Dynamic link, Actual parameters를 먼저 ARI에 채움

- 2. Callee

- Local variables (지역 변수)을 ARI에 채우거나 초기화



| 구성 요소 | 설명 | 누가 설정하는가 |
| --- | --- | --- |
| Return address | 호출이 끝나면 복귀할 코드의 주소 (호출한 다음 명령어 위치) | Caller |
| Dynamic link | Caller의 ARI를 가리키는 포인터 | Caller |
| Actual parameters | 인자 값 또는 인자 주소 (값 호출 pass-by-value or 주소 호출 pass-by-reference) | Caller |
| Local variables | 지역 변수 공간 (초기화는 필요에 따라) | Callee |

- Example of C code and corresponding ARI
- ARI is created on run-time stack
- Run-time stack provides separate copies of the parameters, local variables, and return address

```cpp
void sub(float total, int part) {
    int list[5];
    float sum;
    ...
}

```

- Environment pointer (EP) is required to control execution of subprogram
- Point current activation record base (initially main program’s AR’s base)
- 현재 실행 중인 서브프로그램의 Activation Record (ARI) 의 기준(base) 위치를 가리키는 포인터

- When subprogram is called, current EP is saved in the new ARI as dynamic link
- Then, EP is set to point at base of new ARI

- Upon return from subprogram, stack top $\rightarrow$ EP - 1
- EP is set to dynamic link in executed ARI
- $\rightarrow$ 호출 전 함수의 ARI를 다시 가리키도록

- New actions in linkage process
```cpp
// [C++]
int func(int first, int second) {
    // ②
    int sum = 0;
    sum = first + second;
    return sum; // ③
}
void main() {
    int x = 1;
    int y = 2;
    // ①
    func(x,y);
    return;
}

```

- ① Caller action
1. Create an activation record instance.
2. Save the execution status of the current program unit.
3. Compute and pass the parameters.
4. Pass the return address to the called.
5. Transfer control to the called.

- (② ③) Callee action
- ② Prologue (beginning of execution)
1. Save the old EP in the stack as the dynamic link and create the new value.
2. Allocate local variables.

- ③ Epilogue (end of execution)
1. For out-mode parameters, the values of values of those parameters are moved to the corresponding actual parameters.
2. If the subprogram is a function, the functional value is moved to a place accessible to the caller.
3. Restore the stack pointer by setting it to the value of the current EP minus one and set the EP to the old dynamic link.
4. Restore the execution status of the caller.
5. Transfer control back to the caller.




- Example without recursion
- P1, ARI for main and fun1
- P2, ARI for fun2 is added
- P3. ARI for fun3 is added

- Dynamic chain (call chain): collection of dynamic links
- Local offset: distance from beginning of ARI
- Determined in compile time
- [EX] local offset of s is 3, t is 4

- Example with recursion
- Functional value는 서브프로그램(특히 함수)이 반환할 값(return value) 을 임시로 저장해두는 공간
- Activation record for factorial
- Figure show position 1 in each call
- Functional value undefined
- First call’s return address is main
- Other call’s return address is factorial

- Figure shows position2 for each execution

- Code Example & Memory Analysis:
```cpp
// [C++]
#include <iostream>
using namespace std;
int g = 0;
int func1(int first, int second) {
    int sum = 0;
    cout << "Address of first: " << &first << endl;
    cout << "Address of second: " << &second << endl;
    cout << "Address of sum: " << &sum << endl;
    g = g + 1;
    sum = first + second;
    return sum;
}
void func2(int first, int second) {
    func1(first,second);
    return;
}
int main() {
    int x = 1;
    int y = 2;
    cout << "Address of g: " << &g << endl;
    func1(x,y);
    cout << "Address of g: " << &g << endl;
    func1(x,y);
    cout << "Address of g: " << &g << endl;
    func2(x,y);
    cout << "Address of g: " << &g << endl;
    return 0;
}

```

- Outputs/Addresses:
- Address of first: 0x7ffcb9dc19bc
- Address of second: 0x7ffcb9dc19b8
- Address of sum: 0x7ffcb9dc19cc
- Address of first: 0x7ffcb9dc199c
- Address of second: 0x7ffcb9dc1998
- Address of sum: 0x7ffcb9dc19ac
- // Address of g: 0x404194
- // Address of g: 0x404194
- // Address of g: 0x404194
- // Address of g: 0x404194

- Stack Visualization:
- Sum (0x…cc)
- …
- First (0x…bc)
- Second (0x…b8)
- …
- (func2)
- Sum (0x…ac)
- …
- First (0x…9c)
- Second (0x…98)



## Nested subprograms

- For nested subprograms, two steps are required for access
- First, find ARI in stack in which the variable is allocated
- 현재 스택 위에 쌓인 ARI들 중에서 변수가 실제로 선언된 Activation Record를 찾아야 함

- Second, use local offset of the variable

- Finding correct ARI is more interesting
- Only static ancestor scopes are visible (accessible)
- A subprogram is callable only when all of its static ancestor subprograms are active
- Need to find all ARI from the closely nested one

- Static chains
- Chain of static links
- Static link is added in ARI
- Called as a static scope pointer
- Located below parameters in ARI
- Point to bottom of ARI of static parent

- Used to implement the accesses to nonlocal variables in static-scoped languages

- Static depth
- How deeply it is nested in the outermost scope

- Nesting depth (chain offset)
- Length of static chain needed to reach correct ARI

```python
# Global scope ...
# Static depth of the global, f1, f2 and f3 are 0,1, 2 and 3, respectively
def f1():
    def f2():
        # f3 refer f1 → chain offset is 2
        def f3():
            # f3 refer f2 → chain offset is 1
            ...
        # end of f3 …
    # end of f2
    ...
# end of f1

```

- Nonlocal access using static chains
- In position 1
- Reference to A (local variable A in Sub1): chain_offset/local_offset (0,3)
- why local_offset is 3?, because A is the first local variable

- Reference to B (nonlocal variable B in Bigsub): chain_offset/local_offset (1,4)
- Reference to C (nonlocal variable C in Bigsub): chain_offset/local_offset (1,5)
- Variable B in Sub2 is not accessible

- After Sub1 complete, control returns to Sub3
- In position 2
- Reference to E (local variable E in Sub3): chain_offset/local_offset (0,4)
- Reference to B (nonlocal variable B in Sub2): chain_offset/local_offset (1,4)
- why local_offset is 4?, because B is the first local variable, but Sub2 has one parameter

- Reference to A (nonlocal variable A in Bigsub): chain_offset/local_offset (2,3)

- After Sub3 complete, control returns to Sub2
- In position 3
- Reference to A (nonlocal variable A in Bigsub): chain_offset/local_offset (1,3)
- Reference to D $\rightarrow$ static semantic error because there is no visible D
- Reference to E (local variable E in Sub2): chain_offset/local_offset (0,5)

- For variable A
- Position 1: (0,3) local
- Position 2: (2,3) two levels away
- Position 3: (1,3) one level away

- When return, ARI at top of stack is removed.
- When call, how to decide static link?
- Can use dynamic link to find until static parent of called program
- Perform search
- Or when Sub3 call Sub1, static parent of Sub1 is Bigsub and if compiler decide that Sub3 is two-level inside Bigsub $\rightarrow$ find second static link from Sub3

- Execution traces:
- Bigsub calls A
- A calls C
- C calls B

- Criticism
- Referencing nonlocal variable beyond static parent: more cost required
- For time-critical program, it is difficult to estimate costs



- Static Chain의 문제점: 부모 함수에 가까운 변수는 빠르게 찾지만, 조상 함수(Static Grandparent)까지 여러 단계 거슬러 올라가야 하면 $\rightarrow$ 비용 증가 (Static Link jump 많아짐)
- Display: 각 Static Level마다 현재 활성화된 Activation Record의 포인터를 테이블(배열) 형태로 저장하는 방법 $\rightarrow$ 한 번에 바로 접근
- $O(1)$ 시간에 조상 블록 변수 접근 가능 (한 번의 table lookup)
- 특히 중첩이 깊은 프로그램에서 변수 접근 비용이 확 줄어듦
- Real-time 시스템(시간 예측이 필요한 프로그램)에도 유리


## Blocks

- User-specified local scopes
- Advantage: cannot interfere with any other variable with the same name
- 다른 이름이 같은 변수들과 충돌을 피할 수 있음

- Treated as parameterless subprograms and called from the same place
- subprogram처럼 "호출"되는 게 아니라, "그 자리에" 실행됨 (순차실행)

- Every block has an activation record
```cpp
{ 
    int temp;
    temp = list[upper];
    list[upper] = list[lower];
    list[lower] = temp;
}

```

- 동작 흐름
1. `{` 를 만나면
- 새로운 Activation Record가 만들어짐.
- 이 Activation Record에는 temp 를 위한 공간이 포함.

2. 블록 내부 코드 실행.
3. `}` 를 만나면
- 이 Activation Record가 스택에서 제거된다.




- Function(subprogram) vs block

| 구분 | 함수 호출 (Function Call) | 블록 스코프 (Block Scope) |
| --- | --- | --- |
| Local variables | 있음 | 있음 |
| Parameters | 있음 | 없음 (매개변수 없음) |
| Dynamic link | 있음 (다음 호출을 위해) | 있을 수도 있음 (중첩된 블록에서 상위 블록 참조) |
| Return address | 항상 있음 (호출 이후 복귀를 위해) | 거의 없음 (블록은 "호출"이 아니라 "순차 실행"이라 필요 없음) |

- Blocks can be implemented somewhat simpler and more efficient way
- Allocated after the local variables
- Block variables can be addressed exactly as if they were local variables
- The maximum amount of storage required for block variables can be statically determined $\rightarrow$ f and g occupy the same memory locations as a and b, because a and b are popped off the stack when their block is exited (before f and g are allocated)c
- Static Chain of block
- 블록이나 함수 안에서 바깥쪽에 있는 변수를 사용할 때 Static Link를 타고 찾아감

```cpp
void main() {
    int x, y, z; // main locals
    while (...) {
        int a, b, c; // block1 locals
        while (...) {
            int d, e; // block2 locals
            ...
            a = d + 1; // block2에서 block1의 a에 접근
        }
    }
}

```

- 현재 위치: block2 (d, e)
- 접근하려는 변수: block1에 있는 a
- 과정:
1. block2의 Activation Record에서 시작
2. Static Link를 따라 block1의 Activation Record로 이동
3. block1 ARI 안에서 a 를 local offset으로 찾아서 접근



## Dynamic Scoping

- Deep access and shallow access
- Not concepts related to deep and shallow binding
- Deep Access / Shallow Access는 $\rightarrow$ "변수에 접근(access)"할 때 메모리에서 어떻게 찾는가에 관련.
- Deep Binding / Shallow Binding은 $\rightarrow$ "subprogram을 호출(call)"할 때 환경(environment) 을 어떻게 묶는가에 관련

- Deep and shallow accesses do not result in different semantics
- 최종적으로 찾아서 읽는 변수는 동일
- 달라지는 것은 성능(performance)



- Deep access
- Searching through the ARI of active subprogram from most recently activated
- Dynamic chain is used
- Access may require searches deep into stack
- No static link
- Reference to x in Sub3 $\rightarrow$ searching for all ARI in stack (follow 4 dynamic links, examine 10 variable)
- Reference to v in Sub3 $\rightarrow$ found in recent Sub1
- Deep access (two differences from static scope)
- There is no way to determine at compile time the length of the chain
- Slower execution speeds than static-scoped languages
- Activation records must store the names of variables for the search



| 항목 | 설명 |
| --- | --- |
| 검색 대상 | 현재 활성화된 ARI들 |
| 검색 방향 | 최근 활성화된 ARI $\rightarrow$ 오래된 ARI 순서 |
| 링크 구조 | Dynamic Chain 사용 |
| 검색 비용 | 변수 위치에 따라 $O(\text{depth})$ 만큼 걸림 |
| 메모리 오버헤드 | 없음 (추가 테이블 필요 없음) |
| Semantics 변화 | 없음 (찾는 경로만 다를 뿐 결과는 같음) |

- Shallow access
- Semantics of deep access and shallow access are identical
- Variables declared in subprograms are not stored in the ARI of those subprograms
- Have a separate stack for each variable name
- $\rightarrow$ 최근에 할당된 값을 빠르게 찾아 쓰는 방식
- Fast references to variables
- But maintaining the stacks at the entrances and exits of subprograms is costly
- 변수 저장 위치 $\rightarrow$ 변수 이름마다 별도의 스택
- 활성화된 값 $\rightarrow$ 스택의 최상단(top)에 존재
- 새로운 subprogram 호출 시 $\rightarrow$ 필요한 변수 이름 스택에 새로운 값을 push
- subprogram 종료 시 $\rightarrow$ 변수 이름 스택에서 값을 pop
- 메모리 관리 $\rightarrow$ 변수 이름별로 별도로 관리

- Deep access: fast subprogram linkage but costly for nonlocal referencing
- Shallow access: faster references to nonlocals but costly in terms of subprogram linkage

| 항목 | Deep Access | Shallow Access |
| --- | --- | --- |
| 접근 경로 | Dynamic Link 타고 올라감 | 변수 이름별 별도 스택 최상단 |
| 접근 시간 | $O(\text{depth})$ | $O(1)$ |
| 프로그램 구조 복잡도 | 단순 | 복잡 (각 변수마다 스택 필요) |
| 서브프로그램 관리 비용 | 작음 | 큼 (stack push/pop 필요) |
| Semantics 변화 | 없음 (동작은 동일) | 없음 (동작은 동일) |