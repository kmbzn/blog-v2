---
sitemap: false
---
# 10.2. Support for Object Oriented Programming

## Support for Object-Oriented Programming

- What do we study in this chapter?
- Object-oriented programming (OOP)
- Design issues for OOP
- Language examples
- Implementation of object-oriented constructs

## Object-Oriented Programming (OOP)

- Three major language features
- Abstract data types
- Inheritance (central theme in OOP)
- Polymorphism
- Object-oriented concepts (Inheritance)
- Productivity increases can come from reuse
- ADTs are difficult to reuse—always need changes
- All ADTs are independent and at the same level
- Inheritance allows new classes defined in terms of existing ones
- i.e., by allowing them to inherit common parts
- Inheritance addresses both of the above concerns
- Reuse ADTs after minor changes and define classes in a hierarchy
- ADTs are usually called classes
- Class instances are called objects
- Subclass or derived class — inherits from parent (superclass)
- Subprograms that operate on (belong to) objects = methods
- Variables encapsulated by objects = instance variables
- Method calls — sometimes called messages
- Collection of methods of an object — its message protocol or message interface
- 객체는 단순히 함수를 실행하는 게 아니라, 메시지를 받고 거기에 반응하는 존재로 취급되기 때문
- 객체는 자신이 이해할 수 있는 메시지(= 메서드 이름)만 처리할 수 있음
- Messages have method name, destination object
- Generally default = inherit all from parent
- Inheritance can be complicated by access controls
- Class can hide entities from subclasses
- Class can hide entities from its “clients”
- Some languages can hide entities from clients, but let subclasses see them
- Subclass can modify inherited method
- Can override default (inherited) — overrides the parent’s method
- Object-oriented concepts (Subclass differences from parent)
- Three ways a class can differ from its parent:
- 1. The parent class can define some of its variables or methods to have private access, which means they will not be visible in the subclass


- 2. The subclass can add variables and/or methods to those inherited from the parent


- 3. The subclass can modify the behavior of one or more of its inherited methods


- Object-oriented concepts
- There are two kinds of variables in a class:
- Class variables - one/class
- Instance variables - one/object
- There are two kinds of methods in a class:
- Class methods – accept messages to the class
- Instance methods – accept messages to objects
- Single vs. Multiple Inheritance
- Single inheritance — all OO languages
- Multiple inheritance
- Most OO languages
- Sometimes problematic — what to inherit when there is a conflict?
- Disadvantages for reuse
- Creates interdependencies among classes -> complicates maintenance
- May be functionally useful, but not logical, for a class to inherit from another

## Dynamic Binding

- Since a hierarchy of classes exist, can exploit for polymorphism
- Polymorphic variable: can hold objects of a class or any of its descendants
- Top of object hierarchy can even point to any object
- Dynamic binding:
- Some methods of some subclasses may override a parent’s
- Which method of which class is called is decided at run-time
- Benefits:
- The usual ones for polymorphism
- Also: easy to extend software system during development and maintenance
- Abstract (virtual) method: only defines a protocol, not a definition
- Abstract class:
- Includes at least one abstract method
- Cannot be instantiated

## Design Issues for OOP Languages

- Is everything an object? (Exclusivity of objects)
- Subclasses = subtypes?
- Single or multiple inheritance?
- Allocating and deallocating objects
- Dynamic and static binding
- Nested classes?
- Object initialization
- Exclusivity of objects
- Some languages: everything is an object — e.g., Ruby, Smalltalk
- Advantage: elegance, purity, homogeneity of all data structures
- Disadvantage: can be slow for simple objects
- Other languages: objects are added to a complete typing system — Lisp, Python,…
- (모든 게 객체처럼 보이나 내부적으로 일부는 아님)
- Advantage - fast operations on simple objects
- Disadvantage - results in a confusing type system (two kinds of entities)
- Other languages: use imperative-style typing system for primitives, but everything else is an object — Java, Swift, …
- 객체/기본형 구분 명확
- Advantage - fast operations on simple objects and a relatively small typing system
- Disadvantage - still some confusion because of the two type systems
- Are (sub)classes (sub)types?
- Most OO languages: yes
- Basically: does an “isa” relationship hold between parent class and subclass?
- "is-a" 관계는 인터페이스에 기반한 타입 관계
- If so, then instances of subclass must behave the same (more or less) as instances of the parent (서브타입은 상위 타입처럼 행동할 수 있어야 함)
- Subclass can only:
- Add variables and methods
- Override methods in “compatible” ways
- Also has some implication for ontology the programmer has in mind
- Subclasses are made for ontological reasons, not just for functionality and reuse
- E.g., make airplane subclass of vehicle, not bird — even though “fly”method could be inherited in the latter
- 기능 재사용이 아닌 개념적 관계(온톨로지) 중심 설계
- Single or multiple inheritance?
- Advantages of multiple inheritance:
- Convenient — methods, variables from multiple sources
- Ontologically-useful — aircraft is a vehicle, flying-object, bird is a animal, flying-object
- Disadvantages:
- Complexity of language, implementation (e.g., handling name collisions)
- Potential inefficiency — increased cost of dynamic binding (search problem)
- Allocation and Deallocation of Objects
- From where are objects allocated?
- If treated as other ADTs, can be allocated anywhere: run-time stack, heap (via new, e.g.)
- If heap-dynamic only (e.g., Java, Lisp, Python,…)
- Heap-dynamic only의 장점
- References can be uniform via pointer/reference variable
- 객체 변수는 항상 포인터 또는 참조(reference) 역할 -> 어떤 타입이든 같은 방식으로 메모리 접근 가능
- Simplifies assignment; dereferencing can be implicit
- 할당, 전달, 복사 등에서 일관된 처리 가능 -> 복잡한 복사(= 값 복사 vs 참조 복사) 문제 줄어듦
- Allocation and DeAllocation of Objects
- If stack-dynamic only: can -> object slicing
- Object of subclass B may be larger than one of its parent class A
- Suppose subroutine expects instance of A…
- …pass instance of B…
- …not enough room allocated, some instance variables not copied —or worse
- Kind of unavoidable with call-by-value and polymorphism by classes
- Is deallocation explicit or implicit?
- Dynamic and Static Binding
- 메시지(메서드 호출)가 실제로 어떤 메서드 구현체와 연결되는지 결정하는 시점
- 즉, `obj.method()`를 호출했을 때, 어떤 `method()`가 실행될지를 언제 결정하느냐의 문제
- Should all binding of messages to methods be dynamic?
- If none are, you lose the advantages of dynamic binding
- If all are, it is inefficient
- Maybe the design should allow the user to specify
- Dynamic Binding
- 장점: 다형성(polymorphism) 구현 가능 새로운 클래스를 추가해도 기존 코드 변경 없이 확장 가능
- 단점: 런타임 비용 증가 (vtable, lookup 등) 예측/최적화 어려움
- Nested classes
- Some languages allow it (e.g., Java, Python, Ruby), others don’t (Lisp)
- Why?
- Sometimes only one class (e.g., Tree) needs a particular new class (e.g., Node)
- Defining Node outside the Tree class -> clutters the object system, may cause name clashes, etc.
- Avoid this if we nest Node inside Tree class
- Sometimes nesting is inside a subprogram rather than directly in class (함수 내부에서 클래스 정의도 가능)
- Issue: which parts of the nested class should be visible to parent and vice versa?
- Nested class와 outer class는 서로의 멤버에 접근할 수 있는가?
- Initialization of Objects
- Are objects initialized to values when they are created?
- Implicit or explicit initialization
- How are parent class members initialized when a subclass object is created?

## Support for OOP in Smalltalk

- Pure OO language -> everything is an object
- All objects have local memory (to process, communicate with other object, inherit from ancestors)
- Cannot be nested
- All computation is through objects sending messages to objects
- [EX] `x + 7`: sending `+` message to `x` (object) with `7` (parameter), then return a new object
- No imperative structure (객체에 메시지로 제어 요청)
- Heap-dynamic objects
- Implicit deallocation
- Constructor must be explicitly called
- Inheritance
- A Smalltalk subclass inherits all of the instance variables, instance methods, and class methods of its superclass
- All subclasses are subtypes (nothing can be hidden)
- Overriding is possible (method in ancestor is hidden, accessed by super)
- No multiple inheritance
- All messages: method binding is dynamic
- Type checking: only dynamic type checking
- Only error is when object cannot handle a message (duck typing)
- Variables in Samlltalk are not typed (can be bound to any object, support dynamic polymorphism)
- Evaluation
- Simple, regular syntax
- Good example of powerful, small language
- Slow compared to compiled imperative languages
- Dynamic binding allows type errors to go undetected until run time
- Introduced the idea of a GUI
- Greatest legacy — advanced/established OOP

```smalltalk
"Smalltalk Example Program"
"The following is a class definition, instantiations of which can draw equilateral polygons of any number of sides"
class name                  polygon
superclass                  Object
instance variable names     numSides
                            sideLength
"Class methods"
"Create an instance"
new
    ^ super new getPen
"Get a pen for drawing polygons"
getPen
    ourPen <- Pen new defaultNib: 2
"Instance methods"
"Draw a polygon"
draw
    numSides timesRepeat: [ourPen go: sideLength;
                                  turn: 360 // numSides]
"Set length of sides"
length: len
    sideLength <- len
"Set number of sides"
sides: num
    numSides <- num

```

## Support for OOP in C++

- General Characteristics:
- Evolved from C and SIMULA 67
- Among the most widely used OOP languages
- Mixed typing system
- Objects can be static, stack dynamic and heap dynamic
- Explicit deallocation by new
- Constructors and destructors (implicitly called)
- Elaborate access controls to class entities
- Inheritance
- A class need not be the subclass of any class
- Object should be initialized (including inherited data member)
- Parent constructor is implicitly called
- Access controls for members are
- Private (visible only in the class and friends) (disallows subclasses from being subtypes)
- Public (visible in subclasses and clients)
- Protected (visible in the class and in subclasses, but not clients)
- In addition, the subclassing process can be declared with access controls (private or public), which define potential changes in access by subclasses
- Private derivation - inherited public and protected members are private in the subclasses
- Public derivation - public and protected members are also public and protected in subclasses

```cpp
class derived_class_name : derivation_mode base_class_name
{data member and member function declarations};
//derivation_mode can be either public or private

```

```cpp
class base_class {
private:
    int a;
    float x;
protected:
    int b;
    float y;
public:
    int c;
    float z;
};

```

- Private-derived subclasses cannot be subtypes -> is-a relationship would be broken

```cpp
class subclass_1 : public base_class { … };
// In this one, b and y are protected and
// c and z are public
class subclass_2 : private base_class { … };
// In this one, b, y, c, and z are private,
// and no derived class has access to any
// member of base_class

```

- Reexportation in C++
- A member that is not accessible in a subclass (because of private derivation) can be declared to be visible there using the scope resolution operator (`::`), e.g.,

```cpp
class subclass_3 : private base_class {
    base_class :: c;
    …
}

```

- One motivation for using private derivation
- A class provides members that must be visible, so they are defined to be public members; a derived class adds some new members
- But does not want its clients to see the members of the parent class, even though they had to be public in the parent class definition
- 기능적 구현은 부모 클래스에 두되, 외부에는 제한된 인터페이스만 노출하고 싶을 때 유용
- 캡슐화(Encapsulation) 원칙을 유지하면서도, 내부 구현을 재사용할 수 있음

```cpp
class single_linked_list {
private:
    class node {
    public:
        node *link;
        int contents;
    };
    node *head;
public:
    single_linked_list() {head = 0};
    void insert_at_head(int);
    void insert_at_tail(int);
    int remove_at_head();
    int empty();
};

class stack_2 : private single_linked_list {
public:
    stack_2() {}
    void push(int value) {
        single_linked_list :: insert_at_head(value);
    }
    int pop() {
        return single_linked_list :: remove_at_head();
    }
    single_linked_list:: empty();
};

```

- `insert_at_tail` can be protected from stack by Private derivation
- Multiple inheritance
- Two inherited members with the same name
- Both can be referenced using the scope resolution operator (`::`)

```cpp
class Thread { ... }
class Drawing { ... }
class DrawThread : public Thread, public Drawing { … }

```

- Overriding
- Overriding methods must have exactly the same parameter profile as the overridden method
- Any difference in the parameter -> considered a new method
- Dynamic Binding
- Virtual method: can be called through polymorphic variables and dynamically bound to messages
- Pure virtual function has no definition at all
- Class that has at least one pure virtual function is an abstract class
- If subclass of abstract class does not redefine pure virtual function -> It also abstract class

```cpp
class Shape {
public:
    virtual void draw() = 0;
    ...
};
class Circle : public Shape {
public:
    void draw() { ... }
    ...
};
class Rectangle : public Shape {
public:
    void draw() { ... }
    ...
};
class Square : public Rectangle {
public:
    void draw() { ... }
    ...
};

```

```cpp
Square* sq = new Square;
Rectangle* rect = new Rectangle;
Shape* ptr_shape;
ptr_shape = sq; // points to a Square
ptr_shape ->draw(); // Dynamically bound to draw in Square
rect->draw(); // Statically bound to draw in Rectangle

// If objects are allocated from the stack, it is quite different
Square sq; // Allocates a Square object from the stack
Rectangle rect; // Allocates a Rectangle object from the stack
rect = sq; // Copies the data member values from sq object
rect.draw(); // Calls the draw from Rectangle

```

- Evaluation
- C++ provides extensive access controls (unlike Smalltalk)
- C++ provides multiple inheritance
- In C++, the programmer must decide at design time which methods will be statically bound and which must be dynamically bound
- Smalltalk type checking is dynamic (flexible, but somewhat unsafe)
- Variable in Smalltalk is typeless
- Static binding is faster!
- Because of interpretation and dynamic binding, Smalltalk is ~10 times slower than C++

## Support for OOP in Objective-C

- Like C++, Objective-C adds support for OOP to C
- Design was at about the same time as that of C++
- Largest syntactic difference: method calls are messages (similar to Smalltalk)
- Interface section of a class declares the instance variables and the methods
- Implementation section of a class defines the methods
- No class variable directly (static global variable in implementation can be used)
- Classes cannot be nested
- Single inheritance only
- Every class must have a parent
- `NSObject` is the base class

```objc
@interface myNewClass: NSObject { … }
…
@end

```

- For universally needed operations such as `alloc` and `init`
- Any method that has the same name, same return type, and same number and types of parameters as an inherited method overrides the inherited method
- 이름, 반환형, 매개변수 목록이 완전히 일치할 경우
- An overriden method can be called through `super`
- All inheritance is public derivation (unlike C++)
- Objective-C has two approaches besides subclassing to extend a class
- A category is a secondary interface of a class that contains declarations of methods
- 카테고리는 기존 클래스에 새로운 메서드를 추가할 수 있도록 하는 구조
- 인스턴스 변수는 추가할 수 없음 (오직 메서드만 추가 가능)
- 원래 클래스의 소스 코드를 수정하지 않고도 확장 가능

```objc
#import "Stack.h"
@interface Stack (StackExtend)
-(int) secondFromTop;
-(void) full;
@end

```

- Name of this category is `StackExtend`
- A category is a mixin – its methods are added to the parent class
- Provide some of the benefits of multiple inheritance
- Parent class need not be mentioned
- The implementation of a category is in a separate implementation:

```objc
@implementation Stack (StackExtend)

```

- The other way to extend a class: protocols
- A protocol is a list of method declarations (like Java’s interfaces)
- Protocol은 클래스가 구현해야 할 메서드 목록을 정의하는 일종의 계약
- Related to abstract class in C++

```objc
@protocol MatrixOps
-(Matrix *) add: (Matrix *) mat;
-(Matrix *) subtract: (Matrix *) mat;
@optional
-(Matrix *) multiply: (Matrix *) mat;
@end

```

- `MatrixOps` is the name of the protocol
- The `add` and `subtract` methods must be implemented by class that uses the protocol
- A class that adopts a protocol must specify it
- `@interface MyClass: NSObject <YourProtocol>`
- Dynamic Binding
- Different from other OOP languages – a polymorphic variable is of type `id`
- An `id` type variable can reference any object
- The run-time system keeps track of the type of the object that an `id` type variable references
- If a call to a method is made through an `id` type variable, the binding to the method is dynamic

```objc
// Create the objects
Circle *myCircle = [[Circle alloc] init];
Square *mySquare = [[Square alloc] init];//Set the id to reference the circle and draw it
shapteRef = myCircle;
[shapeRef draw];
// Initialize the objects
[myCircle setCircumference: 5];
[mySquare setSide: 5];// Set the id to reference the square
shapeRef = mySquare;
[shapeRef draw];
// Create the id variable
id shapeRef;

```

- Evaluation
- Support is adequate, with the following deficiencies:
- There is no way to prevent overriding an inherited method
- `final` 같은 키워드가 없음 (Java에는 있음)
- The use of `id` type variables for dynamic binding is overkill – these variables could be misused
- 컴파일 타임 타입 체크가 불가 -> 실수로 잘못된 메시지를 보낼 수 있음
- 코드의 안정성과 가독성이 떨어질 수 있음
- Categories and protocols are useful additions
- Even though there is no exact multiple inheritance
- category: 클래스에 메서드를 추가할 수 있게 해주는 구조 (mixin 유사)
- protocol: 인터페이스 정의를 위한 구조 (Java의 interface와 유사)

## Support for OOP in Java

- Because of its close relationship to C++, focus is on the differences from that language
- General characteristics
- All data are objects except the primitive types
- All primitive types have wrapper classes that store one data value
- Primitive values are implicitly coerced (boxing)
- All classes are descendant of Object class
- All objects are heap-dynamic, are referenced through reference variables, and most are allocated with `new`
- Inheritance
- Methods can be `final` (cannot be overriden)
- Bindings of method calls to the methods of the subclass are statically bound
- Not support the private and protected derivations of C++
- Subclasses should be subtypes
- All of the methods of `Vector` (parent) were also visible in the `Stack` class in Java collection
- -> `Stack` in Java collection have various operations (not common in general `Stack`)

```java
class Animal {
    String name;
    int numberOfLegs;
    public final void birth(){...}
}
class Dog extends Animal {
    String type;
}

```

- Single inheritance supported only, but there is an abstract class category that provides some of the benefits of multiple inheritance (interface)
- An interface can include only method declarations and named constants
- Cannot contain constructors or nonabstract methods
- A class does not inherit an interface; it implements any number of interface
- All of the methods must be implemented
- To simulate multiple inheritance
- Inherit a class + implement a interface
- Interface provides another kind of polymorphism
- Problem with multiple inheritance can be avoided (the same name with the same protocol)
- Class need not reimplement that method having the same name and protocol
- [Variable name conflict] Completely avoided because there is not variable definition in interface
- Interface != multiple inheritance
- Because interfaces can be treated as types
- Interfaces provide no code reuse
- One problem with interfaces
- If a class implements two interfaces having the same name (and protocol), no way to implement both
- [EX]

```java
public interface Animal {
    public abstract void bark();
}
public class Dog implements Animal{
    @Override
    public void bark() {
        System.out.println("Woof woof!");
    }
}
public class Cat implements Animal{
    @Override
    public void bark() {
        System.out.println("Meow Meow!");
    }
}

```

- Dynamic binding
- In Java, all messages are dynamically bound to methods, unless the method is `final` (i.e., it cannot be overriden, therefore dynamic binding serves no purpose)
- Static binding is also used if the methods is static or private both of which disallow overriding
- Nested Classes
- All are hidden from all classes in their package, except for the nesting class
- Nonstatic classes nested directly are called inner classes
- An innerclass can access members of its nesting class
- Each innerclass has implicit pointer to instance of nesting class
- A static nested class cannot access members of its nesting class
- Static nested class does not have implicit pointer
- Members of the inner class, even the private members, are accessible in the outer class
- A local nested class is defined in a method of its nestingclass
- No access specifier is used
- Their scope is always limited to their nesting class
- Evaluation
- Design decisions to support OOP are similar to C++
- No support for procedural programming
- No parentless classes
- Dynamic binding is used as “normal” way to bind method calls to method definitions
- Uses interfaces to provide a simple form of support for multiple inheritance

## Support for OOP in C#

- General characteristics
- Support for OOP similar to Java
- Includes both classes and structs
- Classes are similar to Java’s classes
- structs are less powerful stack-dynamic constructs (e.g., no inheritance)
- Inheritance
- Uses the syntax of C++ for defining classes
- `public class NewClass : ParentClass { ... }`
- A method inherited from parent class can be replaced in the derived class by marking its definition with `new`
- `new`를 사용했기 때문에, 메서드는 오버라이드되지 않고 정적으로 바인딩됨, 개발자에게 의도를 명확히 표현하라고 요구

```csharp
class Parent {
    public void Greet() {
        Console.WriteLine("Hello from Parent");
    }
}
Parent p = new Child();
p.Greet(); // 출력: Hello from Parent
Child c = new Child();
c.Greet(); // 출력: Hello from Child
class Child : Parent {
    public new void Greet() { // new로 부모 메서드 숨김
        Console.WriteLine("Hello from Child");
    }
}

```

- The parent class version can still be called explicitly with the prefix `base`:
- `base.Draw()`
- Dynamic binding
- To allow dynamic binding of method calls to methods:
- The base class method is marked `virtual`
- The corresponding methods in derived classes are marked `override`

```csharp
public class Shape {
    public virtual void Draw() { ... }
    ...
}
public class Rectangle : Shape {
    public override void Draw() { ... }
    ...
}
public class Circle : Shape {
    public override void Draw() { ... }
    ...
}
public class Square : Rectangle {
    public override void Draw() { ... }
    ...
}

```

- Abstract methods are marked `abstract` and must be implemented in all subclasses
- Abstract classes cannot be instantiated
- All C# classes are ultimately derived from a single root class, `Object`
- `Object` class defines a collection of methods, including `ToString`, `Finalize`, and `Equals`
- Nested classes
- A C# class that is directly nested in a nesting class behaves like a Java static nested class
- C# does not support nested classes that behave like the non-static classes of Java
- 명시적 참조 필요
- Evaluation
- C# is a relatively recently designed C-based OO language
- The differences between C#’s and Java’s support for OOP are relatively minor
- `struct` in C# (not in Java)
- Simpler than C++ for OOP

## Support for OOP in Ada 95+

- General Characteristics
- OOP was one of the most important extensions to Ada 83
- Supporting inheritance and dynamic binding
- Encapsulation container is a package that defines a tagged type
- A tagged type is one in which every object includes a tag to indicate during execution its type (the tags are internal)
- Tagged types can be either private types or records
- No constructors or destructors are implicitly called
- Inheritance
- Subclasses can be derived from tagged types
- New entities are added to the inherited entities by placing them in a record definition
- All subclasses are subtypes
- Does not allow one to prevent entities of the parent class from being included in the derived class
- No support for multiple inheritance
- A comparable effect can be achieved using generic classes

```ada
package Person_Pkg is
type Person is tagged private;
procedure Display(P : in out Person);
private
type Person is tagged
record
Name : String(1..30);
Address : String(1..30);
Age : Integer;
end record;
end Person_Pkg;
with Person_Pkg; use Person_Pkg;
package Student_Pkg is
type Student is new Person with
record
Grade_Point_Average : Float;
Grade_Level : Integer;
end record;
procedure Display (St: in Student);
end Student_Pkg;
P1 : Person;
S1 : Student;
Fred : Person := (To_Unbounded_String("Fred"),
To_Unbounded_String("321 Mulberry Lane"), 35);
Freddie : Student :=
(To_Unbounded_String("Freddie"),
To_Unbounded_String("725 Main St."),
20, 3.25, 3);
P1 := Freddie; // Legal because Student is a subtype of Person
// Grade_Point_Average and Grade_Level are ignored -> object slicing
S1 := (Fred, 3.05, 2); // Legal
// Note: Display is being overridden from Person_Pkg

```

- Dynamic Binding
- Dynamic binding is done using polymorphic variables called classwide types
- For the tagged type `Person`, the classwide type is `Person'class`
- Other bindings are static
- Any method may be dynamically bound
- Purely abstract base types can be defined in Ada 95 by including the reserved word `abstract`

```ada
procedure Display_Any_Person(P: in Person) is
begin
Display(p);
end Display_Any_Person;
…
with Person_Pkg; use Person_Pkg;
with Student_Pkg; use Student_Pkg;
P : Person;
S : Student;
Pcw : Person’class; -- A classwide variable
…
Pcw := P;
Display_Any_Person(Pcw); -- Calls the Display in Person
Pcw := S;
Display_Any_Person(Pcw); -- Calls the Display in Student
package Base_Pkg is
type T is abstract tagged null record;
procedure Do_It (A : T) is abstract;
end Base_Pkg;

```

- Child Packages
- A child package is logically (possibly physically) nested inside another package
- Solves the problem of packages becoming physically too large
- if separate, they are called child library packages
- Declarations of the private child package are not visible to the nesting package body
- Even the private parts of the parent package are visible to the child package
- A child package is an alternative to class derivation (like protected)
- A child library package can be added any time to a program
- Evaluation
- Ada offers complete support for OOP
- C++ offers better form of inheritance than Ada
- Ada includes no initialization of objects (e.g., constructors)
- Dynamic binding in C-based OOP languages is restricted to pointers and/or references to objects; Ada has no such restriction and is thus more orthogonal

## Support for OOP in Ruby

- General Characteristics
- Everything is an object
- All computation is through message passing
- Class definitions are executable, allowing secondary definitions to add members to existing definitions
- Method definitions are also executable
- All variables are type-less references to objects
- Access control is different for data and methods
- It is private for all data and cannot be changed (accessor methods must be defined if needed)
- Methods can be either public, private, or protected
- Method access is checked at runtime
- Getters and setters can be defined by shortcuts (i.e. by `attr_reader`, `attr_writer`)
- Inheritance
- Access control to inherited methods can be different than in the parent class
- Subclasses are not necessarily subtypes
- Mixins can be created with modules, providing a kind of multiple inheritance
- Dynamic Binding
- All variables are typeless and polymorphic
- Evaluation
- Does not support abstract classes
- Does not fully support multiple inheritance
- -> achieved by modules, mixin, etc..
- Access controls are weaker than those of other languages that support OOP

## Implementing OO Constructs

- Two interesting and challenging parts
- Storage structures for instance variables
- Dynamic binding of messages to methods
- Instance Data Storage
- Class instance records (CIRs) store the state of an object
- Static (built at compile time)
- Every class has its own CIR
- If a class has a parent, the subclass instance variables are added to the parent CIR
- Because CIR is static, access to all instance variables is done as it is in records
- Using constant offsets from the beginning of the CIR instance -> efficient
- Dynamic Binding of Methods Calls
- Methods in a class that are statically bound need not be involved in the CIR
- Methods that will be dynamically bound must have entries in the CIR
- Such entries have a pointer to code of method (set at object creation time)
- Calls to dynamically bound methods can be connected to the corresponding code thru a pointer in the CIR
- Drawback: every instance (with dynamically bound methods) would need to store pointers
- The storage structure is sometimes called virtual method tables (vtable)
- List of such methods are stored
- Method calls can be represented as offsets from the beginning of the vtable
- [EX] Java (single inheritance)
- Method pointer for the area method in B’s vtable points to the code for A’s area method
- Pointers for draw and sift in B’s vtable point to B’s draw and sift
- [EX] Java (multiple inheritance)
- There must be at least two different views available in the CIR—one for each of the parent classes, one of which includes the view for the subclass, C

## Support for Object-Oriented Programming

- Summary
- OO programming involves three fundamental concepts: ADTs, inheritance, dynamic binding
- Major design issues: exclusivity of objects, subclasses and subtypes, type checking and polymorphism, single and multiple inheritance, dynamic binding, explicit and implicit de-allocation of objects, and nested classes
- Smalltalk is a pure OOL
- C++ has two distinct type systems (hybrid)
- Java is not a hybrid language like C++; it supports only OOP
- C# is based on C++ and Java
- Ruby is a relatively recent pure OOP language; provides some new ideas in support for OOP
- Implementing OOP involves some new data structures