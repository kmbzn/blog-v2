---
sitemap: false
---
# 10.1. Abstract Data Types and Encapsulation Constructs

## What do we study in this chapter?
- The concept of abstraction
- Design issues for abstract data types
- Language examples
- Parameterized abstract data types
- Encapsulation constructs
- Naming encapsulations

## Abstraction
- View/representation of entity that includes only the most significant attributes
- Common features: two wings, two legs, a tail, and feathers → They are skipped when we describe each bird separately
- Specific feature: black for crow, striped types for sparrows ..
- Fundamental in the computer science
- Process abstraction
  - Subprograms
  - Nearly all language support
  - `sortInt(list, listLen)`
  - When sorting list, we don't need details of implementations: Merge, quick, select, insertion sorts, whatever...
  - Only attributes that we should take cares: Name of list, types of elements, list's length
- Data abstraction
  - Began in 1960 with COBOL
  - Record type (struct in C-based)
  - Includes subprograms that manipulate its data
  - Enclosure with access controls (details can be hidden)
  - Instance of abstract data type: object

## Abstract data type (ADT)
- Language-defined types as ADT
  - Floating-point type
  - Provide means of storing, arithmetic operations
  - We don't need actual format of floating-point data
  - We can not directly manipulate actual representation (only possible by built-in operations)
- User-defined ADT
  - Satisfies the following conditions
  - Representation of object is hidden from program unit
  - Only operations possible are those provided in the type's definition
  - Single syntactic unit contains the declarations of the type and of any operations on it
- Advantages of hiding data:
  - Reliability: user code can't access internals, thus compromising other users' use of object
  - Reduces the range of code and variables of which the programmer must be aware
  - Reduced name conflicts
  - [EX] Array-based stack → Linked list-based stack: Client codes need not be changed
  - To access data members: Indirectly access by getter and setters
  - Read-only version is possible by only providing getters
  - Constraints can be included by setters (enforce range of data)
  - The actual implementation of the data member can be changed without affecting the clients if getters and setters are the only access
- Advantages having single syntactic unit for type:
  - Provides way to organize program
  - Enhances modifiability: everything needed for data structure is together in one place
  - Separate compilation
- Language requirement for ADT
  - Syntactic unit for encapsulating type definition (i.e class in C++)
  - Way to make type names, method/subprogram headers available to clients while hiding actual definitions (i.e. private, protected in C++)
  - Primitive operations on types must be part of the compiler/interpreter
- [EX] Stack: Only allows access to the data element at one of its ends, the top. `pop()` is used as getter for element at top

## Design issue
- What is the form of the container for the interface to the type?
- Can abstract types be parameterized?
- What access controls are provided?
- Is the specification of the type physically separate from its implementation?

## Language example (Ada)
- United states department of defence (DOD) issued to prevent explosion of the number of programming languages
- Used in applications (aerospace & defence, civil aviation and rail) requiring high degrees of safety
- Used in embedded real-time systems (with low memory requirement)
- Very strong typing
- No type inference
- No structural typing
- (`.adb`) extension

Control logic (if, case):

```ada
With Ada.Text_IO; Use Ada.Text_IO;
With Ada.Integer_Text_IO; Use Ada.Integer_Text_IO;
procedure Program is
N : Integer; -- declaration
begin
Get(N);
if N > 0 then -- if elsif else end if
Put_Line("Positive");
elsif N = 0 then
Put_Line("Zero");
else
Put_Line("Negative");
end if;
end Program;
```

```ada
With Ada.Text_IO; Use Ada.Text_IO;
With Ada.Integer_Text_IO; Use Ada.Integer_Text_IO;
procedure Program is
N : Integer; -- declaration
begin
Get(N);
case N is -- case statement
when 0 | 1..255 =>
Put_Line("Zero or positive");
when -255..-1 =>
Put_Line("Negative");
when others =>
Put_Line("Out of range");
end case;
end Program;
```

Control logic (for, loop):

```ada
With Ada.Text_IO; Use Ada.Text_IO;
With Ada.Integer_Text_IO; Use Ada.Integer_Text_IO;
procedure Program is
N : Integer; -- declaration
begin
for I in 1 .. 5 loop -- loop
N := I*2; -- assignment
Put_Line(Integer'Image(N) & " times!");
end loop;
end Program;
```

```ada
With Ada.Text_IO; Use Ada.Text_IO;
With Ada.Integer_Text_IO; Use Ada.Integer_Text_IO;
procedure Program is
I : Integer := 1; -- declaration
N : Integer; -- declaration
begin
loop
N := I*2;
Put_Line(Integer'Image(N) & " times!");
exit when I = 5; -- termination condition
I := I + 1; -- increase
end loop;
end Program;
```

Sub program and block:

```ada
With Ada.Text_IO; Use Ada.Text_IO;
With Ada.Integer_Text_IO; Use Ada.Integer_Text_IO;
procedure Program is
N : Integer; -- declaration
procedure Sub(A: Integer) is -- sub program
begin
Put_Line("Sub program");
Put(A);
end Sub;
begin
Get(N);
Sub(N);
end Program;
```

```ada
With Ada.Text_IO; Use Ada.Text_IO;
With Ada.Integer_Text_IO; Use Ada.Integer_Text_IO;
procedure Program is
begin
declare -- block
N : Integer;
begin
Get(N);
end;
Put(N);
end Program;
-- "N" is undefined
```

Sub program (parameter):

```ada
-- assignment to "in" mode parameter not allowed
procedure Program is
N : Integer; -- declaration
procedure Sub(A: Integer) is -- sub program
begin
A := A + 2;
end Sub;
begin
Get(N);
Put(N);
Sub(N);
Put(N);
end Program;
```

```ada
procedure Program is
N : Integer; -- declaration
procedure Sub(A: in out Integer) is -- sub program
begin
A := A + 2;
end Sub;
begin
Get(N);
Put(N);
Sub(N);
Put(N);
end Program;
-- 12
-- 14
```

Function:

```ada
With Ada.Text_IO; Use Ada.Text_IO;
With Ada.Integer_Text_IO; Use Ada.Integer_Text_IO;
With SumInt;
procedure Program is
N : Integer; -- declaration
M : Integer; -- declaration
NM : Integer; -- declaration
begin
Get(N);
Get(M);
NM := SumInt(N, M);
Put(NM);
end Program;

function SumInt(A, B: Integer) return Integer is
begin
return A + B;
end SumInt;
```
- Encapsulation construct: package
  - Interface: specification package
  - Implementation: body package
- Information hiding — public and private parts of specification package
  - Public part: name, maybe representation of any unhidden types
  - Private part:
    - Representation of the abstract type
    - Private types have built-in operations for assignment, comparison
    - Limited private types have no built-in operations
- Reasons for the public/private spec package:
  - The compiler must be able to see the representation after seeing only the spec package
  - Clients must see the type name, but not the representation (they also cannot see the private part)

Specification:

```ada
package Stack_Pack is
-- The visible entities, or public interface
type stack_type is limited private;
max_size: constant := 100;
function empty(stk: in stack_type) return Boolean;
procedure push(stk: in out stack_type; elem: in Integer);
procedure pop(stk: in out stack_type);
function top(stk: in stack_type) return Integer;
-- The part that is hidden from clients
private
type list_type is array (1..max_size) of Integer;
type stack_type is record
list: list_type;
topsub: Integer range 0..max_size := 0;
end record;
end Stack_Pack;
```

```ada
with Ada.Text_IO; use Ada.Text_IO;
package body Stack_Pack is
function Empty(Stk : in Stack_Type) return Boolean is
begin
return Stk.Topsub = 0;
end Empty;
procedure Push(
Stk: in out Stack_Type;
Element : in Integer
) is
begin
if Stk.Topsub >= Max_Size then
Put_Line("ERROR – Stack overflow");
else
Stk.Topsub := Stk.Topsub + 1;
Stk.List(Stk.Topsub) := Element;
end if;
end Push;
...
end Stack_Pack;
```

Use_Stacks:

```ada
with Stack_Pack;
use Stack_Pack;
procedure Use_Stacks is
Topone : Integer;
Stack : Stack_Type;
begin
Push(Stack, 42);
Push(Stack, 17);
Topone := Top(Stack);
Pop(Stack);
...
end Use_Stacks;
```
- The first commercial language to support abstract data types (along with Modula-2)
- Although Ada's design of abstract data types may seem complicated and repetitious, it clearly provides what is necessary

## Language example (C++)
- Encapsulation is via classes
- ADT based on C struct
- Classes are types
- All instances of a class share copy of member functions (methods)
- Each instance has its own copy of class data members (instance variables)
- Instances can be static, stack dynamic, or heap dynamic
- The complete definition can appear in the class, or only in its header
- Information hiding:
  - Private clause for hidden entities
  - Public clause for interface entities
  - Protected clause for inheritance (later)
- Constructors:
  - Functions to initialize the data members — they don't create objects
  - May also allocate storage if part of the object is heap-dynamic
  - Can include parameters to provide parameterization of the objects
  - Implicitly called when an instance is created — but can be called explicitly, too
  - Name is the same as the class name
- Destructors:
  - Clean up after an instance is destroyed — usually just to reclaim heap storage
  - Implicitly called when the object's lifetime ends, or explicitly called
  - Name is the class name, preceded by a tilde (`~`)

Header file:

```cpp
// Stack.h - the header file for the Stack class
#include <iostream.h>
class Stack {
private: //** These members are visible only to other
         //** members and "friends" (see textbook)
int *stackPtr; // reference the heap-dynamic data
int maxLen;
int topPtr;
public: //** These members are visible to clients
Stack(); //** A constructor
~Stack(); //** A destructor
void push(int);
void pop();
int top();
int empty();
}
```

Code file:

```cpp
// Stack.cpp - the implementation file for the Stack class
#include <iostream.h>
#include "Stack.h"
using std::cout;
Stack::Stack() { //** A constructor
stackPtr = new int [100];
maxLen = 99;
topPtr = -1;
}
Stack::~Stack() {delete [] stackPtr;}; //** A destructor
void Stack::push(int number) {
if (topPtr == maxLen)
cerr << "Error in push--stack is full\n";
else stackPtr[++topPtr] = number;
}
...
void main() {
int topOne;
Stack stk; //** Create an instance of the Stack class
stk.push(42);
stk.push(17);
topOne = stk.top();
stk.pop();
...
}
```
- Friends
  - Friend functions or classes
  - Allow access to private members from unrelated units
  - Must be declared inside a class
  - Necessary in C++

```cpp
// Stack.h - the header file for the Stack class
#include <iostream.h>
class Stack {
private: //** These members are visible only to other
         //** members and "friends" (see textbook)
int *stackPtr; // reference the heap-dynamic data
friend class SubStack; //Allow for sub stack class to access stack class
public: //** These members are visible to clients
Stack(); //** A constructor
~Stack(); //** A destructor
void push(int);
}
```
- Similar in expressive power to that of Ada
- Effective mechanisms for encapsulation and information hiding
- Primary difference is that classes are types
- Ada packages are more general encapsulations (like module)
- Designed for more than data abstraction

## Language example (Objective-C)
- Based on C, Smalltalk (for method calls)
- Classes, which are types
- Used as Apple's standard programming language until the advent of Swift
- C++ is a much more extensive language than Objective-C, and supports many functions
- Objective-C was designed to perform almost everything at run time

Interfaces (C-like `.h` file):

```objc
@interface class-name: parent-class {
instance variable declarations
}
method prototypes
@end
```

```objc
@interface Person: NSObject {
int name;
int id;
}
-(void) speak;
@end
```

Implementations (`.m` file):

```objc
@implementation class-name
method definitions
@end
```

```objc
@implementation Person
-(void) speak{
NSLog (@"Hello");
}
@end
```
- Method prototypes
  - `(+ | -) (return-type) method-name [: (formal-parameters)];`
  - `+`/`-` for class/instance methods (resp.)
  - Colon, parentheses — not included when no parameters
  - Odd nomenclature:
    - One parameter (name is `meth1:`): `(void) meth1: (int) x;`
    - Two parameters (name is `meth2:second:`): `(int) meth2: (int) x second: (float) y;`
    - Two parameters (name is `meth2::`): `(int) meth2: (int) x: (float) y;`
  - One parameter: Ex: `(int) foo: (int) x;` — Name of method is `foo:` — Message: (call): `[objectName foo: 3]` → `x = 3`
  - Two parameters: Ex: `(int) foo: (int) x bar: (float) y;` — Name of method is `foo:bar:` — Message: `[objectName foo: 3 bar: 4.5]` → `x = 3, y = 4.5`

Method definitions:

```objc
-(int) meth2: (int) x second: (float) y{
int sum;
sum = x + y;
return sum;
}
```
- Method call syntax
  - `[object-name method-name];`
  - [EX] `[myAdder add1: 7];`
  - [EX] `[myAdder add1: 7: 5: 3];`
  - For the method: `(int) meth2: (int) x second: (float) y;`
  - The call would be like the following: `[myObject meth2: 7 second: 3.2];`
- Initializers: constructors
  - Only initialize variables
  - Can have any name, and are only explicitly called
  - Initializers return the instance itself
- Create object → call alloc + initializer: `Adder *myAdder = [[Adder alloc] init];`
- All class instances are heap dynamic
- To import standard prototypes (e.g., i/o): `#import <Foundation/Foundation.h>`
- The first thing a program must do is allocate and initialize a pool of storage for its data (pool's variable is pool in this case): `NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];`
- At the end of the program, the pool is released with: `[pool drain];`

```objc
#import <Foundation/Foundation.h>
int main (int argc, const char * argv[])
{
NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];
NSLog (@"Hello World");
[pool drain];
return 0;
}
```
- Information hiding
  - `@public`, `@private`, `@protected` — specify instance variable access
    - `@public`: accessible anywhere
    - `@private`: accessible only in class where defined
    - `@protected`: accessible in that class and any subclasses
  - Default access is `@protected`
  - However: no really good way to restrict access to methods (헤더에 선언하지 않고 구현 파일(`.m`)에만 정의하는 방법을 씀)
  - Getter and setter methods for instance variables
    - Name of getter is always name of instance variable
    - Name of setter is always the word set with the capitalized variable name attached (e.g., `setFoo`)

```objc
// The getter for sum
-(int) sum {
return sum;
}

// The setter for sum
-(void) setSum: (int) s{
sum = s;
}

[myObject setSum: 100];   // used as method calls
myObject.sum = 100;       // used as dot notation

newSum = [myObject sum];  // used as method calls
newSum = myObject.sum;    // used as dot notation
```

  - Can be implicitly generated if no additional constraints to be defined — called "properties" in this case
  - `@property`: directive that automatically creates getters and setters (자동으로 getter와 setter를 생성하도록 지시하는 지시어)
  - `@synthesize`: paired with `@property` in implementation (@property로 선언된 변수에 대해 실제 getter/setter 메서드를 생성)

```objc
@interface Person: NSObject {
int name;
int id;
}
@property int name;
@property int id;
-(void) speak;
@end

@implementation Person
@synthesize name;
@synthesize id;
-(void) speak{
NSLog (@"Hello");
}
@end
```

```objc
// stack.m – interface and implementation for a simple stack
#import <Foundation/Foundation.h>

@interface Stack: NSObject {
int stackArray[100], stackPtr, maxLen, topSub;
}
-(void) push: (int) number;
-(void) pop;
-(int) top;
-(int) empty;
@end

@implementation Stack
-(Stack *) initWith {
maxLen = 100;
topSub = -1;
stackPtr = stackArray;
return self;
}
// stack.m – continued
-(void) push: (int) number {
if (topSub == maxLen)
NSLog(@"Error in push – stack is full");
else
stackPtr[++topSub] = number;
…
}
```

```objc
int main (int argc, char *argv[]) {
int temp;
NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];
Stack *myStack = [[Stack alloc] initWith];
[myStack push: 5];
[myStack push: 3];
temp = [myStack top];
NSLog(@"Top element is: %i", temp);
[myStack pop];
temp = [myStack top];
NSLog(@"Top element is: %i", temp);
temp = [myStack top];
[myStack pop];
[myStack release];
[pool drain];
return 0;
}
// Top element is: 3
// Top element is: 5
// Error in top--stack is empty
// Error in pop--stack is empty
```
- Small-talk (for its method calls) + C (for nearly everything else)
- Interfaces and implementation sections
- Constructors must be explicitly called

## Language example (Java)
- Similar to C++, except:
  - All user-defined types are classes
  - All objects are heap-dynamic
  - All objects accessed via reference variables
  - Methods in Java must be defined completely in a class
- Access control modifiers for class entities: `public`, `protected`, `package-private`, `private`
- Package scope: All entities in all classes in package that are not restricted by access control modifiers → visible throughout package
- Eliminates need for C++'s friend functions & classes

| | The same class | The same package | The same package + inheritance | Other packages + inheritance | All classes |
|---|---|---|---|---|---|
| `public` | O | O | O | O | O |
| `protected` | O | O | O | O | |
| `package-private` | O | O | O | | |
| `private` | O | | | | |

```java
class StackClass {
private int [] stackRef;
private int [] maxLen, topIndex;
public StackClass() { // a constructor
stackRef = new int [100];
maxLen = 99;
topPtr = -1;
};
public void push (int num) {…};
public void pop () {…};
public int top () {…}
public boolean empty () {…};
}

public class TstStack {
public static void main(String[] args) {
StackClass myStack = new StackClass();
myStack.push(42);
myStack.push(29);
System.out.println("29 is: " + myStack.top());
myStack.pop();
System.out.println("42 is: " + myStack.top());
myStack.pop();
myStack.pop(); // Produces an error message
}
}
```
- Abstract data types is similar to that of C++

## Language example (C#)
- Based on C++, Java
- Adds two access modifiers, `internal` (within project) and `protected internal` (= protected and internal)
- All class instances: heap dynamic
- Default constructors — available for all classes
- Garbage collection is used for most heap objects, so destructors are rarely used
- `struct`s are lightweight classes that do not support inheritance
  - Can have constructor, methods and data fields
  - Value types (opposed to reference type), allocated on the run-time stack
  - Pass-by-value
- Getter and setter methods to access data members (instance variables)
- Properties:
  - Allows implementation of getters/setters without explicit method calls
  - ex: Assume `foo` is reference to the instance, `bar` is an instance variable
    - `a = foo.bar;` // getter
    - `foo.bar = 3.5;` // setter

```csharp
public class Weather {
public int DegreeDays { //** DegreeDays is a property
get {
...
return degreeDays;
}
set {
if (value < 0 || value > 30)
Console.WriteLine("Value is out of range: {0}", value);
else degreeDays = value;
}
}
private int degreeDays;
...
}

Weather w = new Weather();
int degreeDaysToday, oldDegreeDays;
...
w.DegreeDays = degreeDaysToday;
...
oldDegreeDays = w.DegreeDays;
```

## Language example (Ruby)
- Encapsulation construct: `class … end`
- Variable names:
  - Local: regular identifiers
  - Instance variables: begin with `@`
  - Class variables: begin with `@@`
- Instance
  - Variables and methods that can be used only when an object is created (`new`)
  - Instance variables have independent values between objects
- Class
  - Variables and methods that can be created by the class itself without creating an object
  - Class variables are shared by multiple objects created with the same class
- Methods: defined with function definition syntax (`def … end`)
  - instance method (`def … end`) ([ex] `Sample.new.print`)
  - class method (`def self.name … end`) ([ex] `Sample.print`)

```ruby
class Sample
def print
puts "I'm an instance method"
end
end

obj = Sample.new
obj.print
```

```ruby
class Sample
def self.print
puts "I'm a class method"
end
end

Sample.print
```
- Constructors:
  - Named `initialize` (initialize라는 이름으로 정의)
  - Only one per class (cannot be overloaded)
  - Implicitly called when `new` is called
  - `new`는 클래스 메서드이며, 내부적으로 `allocate` + `initialize` 호출 순서를 따름
  - If additional constructors needed: different names, and they must call `new`
  - Ruby에서는 생성자 오버로딩이 안 되기 때문에, 추가 생성자는 일반 클래스 메서드로 만들어야
- Class members can be marked `private` or `public` (default)
- Classes are heap dynamic
- Class extension
  - class inheritance:
    ```ruby
    class ChildClass < SuperClass
    ...
    end
    ```
  - Additional class definitions (predefined `String` class can be extended):
    ```ruby
    class String
    def count_word
    return self.split(/\s+/).size
    end
    end
    ```
  - define a method in object (only usable in that object):
    ```ruby
    class Dog
    ...
    end

    dog1 = Dog.new
    dog2 = Dog.new

    def dog1.speak
    puts "dog1 speak"
    end

    dog1.speak
    dog2.speak # error
    ```
- Mixin (Ruby가 다중 상속 없이도 코드 재사용과 기능 확장을 가능하게 함)
  - Reference module in class
  - Use it as if they are instance/class methods (`include`, `prepend`, `extend`)

```ruby
module extraModule
def func
puts "extra function"
end
end

class myClass
include/prepend extraModule
def func
puts "inside function"
end
end

myclass = myClass.new
myclass.func
# include → inside function
# prepend → extra function
```

| 키워드 | 대상 | 효과 | 호출 방식 |
|---|---|---|---|
| `include` | 인스턴스 | 모듈의 메서드를 인스턴스 메서드로 주입 | `obj.method` |
| `prepend` | 인스턴스 | 모듈 메서드가 클래스 메서드를 오버라이드 | `obj.method` |
| `extend` | 클래스 | 모듈 메서드를 클래스 메서드로 주입 | `Class.method` |
- Information hiding
  - Access control for methods in Ruby is dynamic
  - 접근 제어 키워드를 어디에 쓰느냐에 따라 메서드들의 접근성이 달라짐

```ruby
class MyClass
def meth1
...
end
...
private
def meth7
...
end
...
end # of class MyClass
# This resets the default access for subsequently defined methods in the class
```

```ruby
class MyClass
def meth1
...
end
...
def meth7
...
end
private :meth7, ...
...
end # of class MyClass
# Call the access control functions with the names of the specific methods as parameters
```
- Attributes
  - Instance data that are accessible through accessor methods are called attributes

```ruby
def sum      # getter
@sum
end

def sum=(new_sum)  # setter
@sum = new_sum
end
```

  - `attr_reader :sum, :total` — `attr_reader` method only allows the value to be read from the outside and cannot be changed
  - `attr_writer :sum` — `attr_writer` only allows assignment of values

```ruby
class Person
attr_accessor :name, :age
end
# equivalent to:
def name; @name; end
def name=(val); @name = val; end
def age; @age; end
def age=(val); @age = val; end
```

```ruby
class StackClass {
def initialize
@stackRef = Array.new
@maxLen = 100
@topIndex = -1
end
def push(number)
if @topIndex == @maxLen
puts " Error in push – stack is full"
else
@topIndex = @topIndex + 1
@stackRef[@topIndex] = number
end
end
def pop … end
def top … end
def empty … end
end

# Test code for StackClass
myStack = StackClass.new
myStack.push(42)
myStack.push(29)
puts "Top element is (should be 29): #{myStack.top}"
myStack.pop
puts "Top element is (should be 42): #{myStack.top}"
myStack.pop
# The following pop should produce an error message - stack is empty
myStack.pop
```
- Everything is an object, flexible
- Ruby has a slight readability advantage
  - Because the names of class and instance variables have different forms (클래스 변수와 인스턴스 변수의 이름이 서로 다른 형식)

## Parameterized ADTs
- Can design an ADT to store any element type (e.g. stack ADT)
- Only issue for statically-typed languages (no problem in Ruby)
- Also known as generic classes
- Supported in C++, Ada, Java (5.0), C# (2005)

Parameterized ADTs in Ada:

```ada
generic
Max_Size: Positive; -- A generic parameter for stack size
type Elem_Type is private; -- A generic parameter for element type
package Generic_Stack is
type Stack_Type is limited private;
function Empty(Stk : in Stack_Type) return Boolean;
function Top(Stk: in out StackType) return Elem_type;
...
private
type List_Type is array (1..Max_Size) of Element_Type;
type Stack_Type is record
List : List_Type;
Topsub : Integer range 0 .. Max_Size := 0;
end record;
end Generic_Stack;
-- Instantiations of the generic stack:
-- package Integer_Stack is new Generic_Stack(100,Integer);
-- package Float_Stack is new Generic_Stack(100,Float);
```

Parameterized ADTs in C++:

```cpp
template <class Type>
class Stack {
private:
Type *stackPtr;
const int maxLen;
int topPtr;
public:
Stack() { // Constructor for 100 elements
stackPtr = new Type[100];
maxLen = 99;
topPtr = -1;
}
Stack(int size) { // Constructor for a given number
stackPtr = new Type[size];
maxLen = size – 1;
topSub = -1;
}
}
...
// Instantiation: Stack<int> myIntStack;
```
- The stack element type can be parameterized by making the class a templated class
- Templated classes are instantiated to become typed classes at compile time

Parameterized ADTs in Java 5.0:
- The most common generic types: collection types (`LinkedList` and `ArrayList`)
- The original collection types stored object class instances, so they could store any objects
- Three issues (Java 5.0 이전 버전 문제점):
  - [1] Every time an object was removed from the collection, it had to be cast to the appropriate type (형 변환 필요)
  - [2] There was no error checking when elements were added to the collection (타입 검사 없음)
  - [3] Collection types could not store primitive types (기본형 저장 불가)

```java
//* Create an ArrayList object
ArrayList myArray = new ArrayList();
//* Create an element
myArray.add(0, new Integer(47));
//* Get first object
Integer myInt = (Integer)myArray.get(0);
```

```java
ArrayList <Integer> myArray = new ArrayList <Integer>();
// [1], [2] are resolved
```

```java
Box<int> intBox = new Box<>(); // 컴파일 에러
Box<Integer> intBox = new Box<>(); // OK (오토박싱)
```
- 기본형(primitive type)은 제네릭에 사용할 수 없음
- 대신 `Integer`, `Double` 같은 래퍼 클래스(wrapper class)를 사용해야 함
- Users also can define generic classes in Java 5.0:

```java
public class MyClass<T> {
...
}
//This class could be instantiated with the following:
MyClass<String> myString;
```
- Drawbacks
  - Cannot store primitives (wrapper class 사용)
  - Elements cannot be indexed

```java
import java.util.*;
public class Stack2<T> {
private ArrayList<T> stackRef;
private int maxLen;
public Stack2() { // A constructor
stackRef = new ArrayList<T> ();
maxLen = 99;
}
public void push(T newValue) {
if (stackRef.size() == maxLen)
System.out.println("Error in push—stack is full");
else
stackRef.add(newValue);
}
…
}

Stack2<String> myStack = new Stack2<String>();
// instantiated for the String
// other type objects cannot be added to the collection
// → wildcard class
Collection<?> c = new ArrayList<String>();
// 읽기는 가능, 쓰기는 제한됨
```

Parameterized ADTs in C# 2005:
- Generic classes were added to C# in its 2005 version (`Array`, `List`, `Stack`, `Queue`, and `Dictionary`)
- Allow its elements to be indexed

## Encapsulation constructs
- Multiple-type encapsulations are needed for larger programs
- Large programs — two special needs:
  - Some means of organization, other than simply division into subprograms
  - Imposing everything into single unit makes difficult to manage
  - Some means of partial compilation — i.e., compilation units smaller than whole program
  - Recompiling whole program is too costly
- → Group logically-related subprograms into units
- Allow units to be separately compiled (i.e., compilation units)
- Such units are encapsulation constructs
- Encapsulation Constructs는 논리적으로 관련 있는 코드(서브프로그램, 데이터 등)를 하나의 모듈 단위로 묶고, 이를 독립적으로 관리 및 컴파일할 수 있도록 하는 구조
- Nested subprograms as encapsulation
  - One way to organize subprograms: nest them
  - Inner subprograms are encapsulated within outer, but can share variables
  - Supported in Ada, Fortran 95+, Python, JavaScript, Ruby, Lisp, …
- Encapsulation in C
  - C does not provide complete support for abstract data types
  - Encapsulation in C — basically a compilation unit
  - Interface is placed (by convention) in header (`.h`) file
  - Implementation in `.c` file
  - `#include` — used to include header files
  - Problem: linker doesn't check types between header and implementation
  - User's responsibility: ensure that both the header and implementation files are up-to-date
- Encapsulation in C++
  - Header & code files, like C
  - Also has classes
  - Class definition used as the interface
  - Member (instance variables, methods) defined in separate file
  - Friend functions/classes — provide a way to grant access to private members of a class
  - [EX] multiplication for vector and matrix classes:

```cpp
class Matrix; //** A class declaration
class Vector {
friend Vector multiply(const Matrix&, const Vector&);
...
};
class Matrix { //** The class definition
friend Vector multiply(const Matrix&, const Vector&);
...
};
//** The function that uses both Matrix and Vector objects
Vector multiply(const Matrix& m1, const Vector& v1) {
...
}
```
- Encapsulation in Ada
  - Packages — encapsulation unit in Ada
  - Specification packages — any number of data, subprogram definitions
  - Specification, body parts of package can be compiled separately
  - Multiple-type encapsulation
  - [EX] Both the matrix and the vector types could be defined in a single Ada package:

```ada
package Tensor is
type Vector is (
…
);
type Matrix is (
…
);
end Tensor;
```
- Encapsulation in C#
  - Assembly: collection of files that appears as a single (C# 프로그램의 최상위 캡슐화 단위) (하나 이상의 파일로 구성된 논리적 단위)
    - executable or…
    - …dynamic link library (DLL)
    - Microsoft's version of shared libraries
    - collection of classes, methods (in C#) that are individually linked to an executing program
  - Each file contains module that can be separately compiled (Assembly를 구성하는 파일 단위 구성 요소) (각 모듈은 독립적으로 컴파일 가능, 여러 모듈을 묶어서 하나의 Assembly로 링크)
  - `internal` access modifier: member is visible to all classes in the assembly

## Naming encapsulations
- Large programs:
  - Softwares are written by many developer independently
  - Cannot know what names are defined in others
  - Define many global names
  - Need way to divide into logical groups
- Naming encapsulation: used to create a new scope for names
  - Avoid name conflict
  - Several different collections of code can be placed in the same namespace
- C++ namespaces
  - Can place each library in its own namespace
  - Qualify names used outside with their namespace, e.g., `foo::bar`, `foo::baz`
  - C# also includes namespaces

```cpp
namespace myStackSpace {
// Stack declarations
}

myStackSpace::topSub
using myStackSpace::topSub;
using namespace myStackSpace;
```
- Java — packages (Java에서 관련 클래스들을 묶는 단위)
  - 하나의 패키지 = 하나의 캡슐화 단위, 패키지는 논리적 그룹일 뿐만 아니라, 접근 범위를 제한하는 역할도 함
  - Package contains one or more class definitions
  - Classes within package are partial friends
  - Less need for explicit friend
  - Package scope: Entities without access modifiers — Visible throughout the package
  - Clients of a package — use fully qualified name or use the import declaration

```java
package stkpkg; // package declaration must appear as the first line of the file
// used as follows
stkpkg.myStack; //simply reference myStack in stkpkg
import stkpkg.myStack; //import myStack in stkpkg
import stkpkg.*; //import all of the types in stkpkg
```
- Ada — packages
  - Packages are defined in hierarchies which correspond to file hierarchies
  - Visibility from a program unit is gained with the `with` clause
- Ruby: Classes, but also modules
  - Typically encapsulate collections of constants and methods
  - Have separate namespace
  - Modules cannot be instantiated or subclassed, and they cannot define variables
  - Methods defined in a module must include the module's name
  - Access to the contents of a module is requested with the `require` method

```ruby
module MyStuff
PI = 3.14159265...
def MyStuff.mymethod1(p1)
...
end
end

require 'myStuffMod'
MyStuff.mymethod1(x)
...
```

## Summary
- The concept of ADTs and their use in program design was a milestone in the development of languages
- Two primary features of ADTs are the packaging of data with their associated operations and information hiding
- Ada provides packages that simulate ADTs
- C++ data abstraction is provided by classes
- Java's data abstraction is similar to C++
- Ada, C++, Java 5.0, and C# 2005 support parameterized ADTs
- C++, C#, Java, Ada, and Ruby provide naming encapsulations