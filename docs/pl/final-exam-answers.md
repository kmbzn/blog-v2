# Programming Languages — Final Exam — Answer Key

---

## Section I. True or False

| # | Answer | Explanation |
|---|---|---|
| 1 | **F** | Pass-by-reference passes the **address** of the actual parameter. The callee directly accesses and modifies the original variable through the address. |
| 2 | **F** | The **dynamic link** points to the ARI of the **caller** (dynamic parent). The **static link** points to the ARI of the lexical/static parent. |
| 3 | **T** | Deadlock is defined as the state where all tasks are permanently blocked, waiting for events that can only be triggered by other blocked tasks. |
| 4 | **T** | A monitor encapsulates shared data and ensures at most one thread executes inside it at any moment — competition synchronization is guaranteed automatically. |
| 5 | **T** | Haskell's non-strict (lazy) evaluation defers computation until the value is actually needed, making it possible to define and work with infinite data structures. |
| 6 | **F** | ML does **not** support user-defined function overloading. Pattern matching selects among different clauses of the *same* function; if you need different types, you must use different function names. |
| 7 | **F** | `(CAR '(A B C))` returns `A` (the first element). `(CDR '(A B C))` returns `(B C)`. |
| 8 | **F** | Only **checked exceptions** (subclasses of `Exception` excluding `RuntimeException`) must be caught or declared. **Unchecked exceptions** (`RuntimeException`, `Error`) require no such declaration. |
| 9 | **T** | In shallow access, each variable name has its own stack of values; the current in-scope value is always at the top. |
| 10 | **F** | Common Lisp uses **static (lexical) scoping** by default. Dynamic scoping can be opted into via `defvar` (special variables). Before the mid-1970s, Lisp used dynamic scoping; modern dialects default to static. |

---

## Section II. Concurrency Terminology

**1. Race condition**

A situation in which two or more tasks access a shared resource concurrently without proper synchronization, and the final outcome depends on the relative execution order (scheduling) of the tasks. This leads to non-deterministic and potentially incorrect behavior. Example: two threads simultaneously reading and incrementing a shared counter without synchronization.

**2. Deadlock**

A state in which a set of tasks are all permanently blocked, each waiting for an event (e.g., a resource release or a signal) that can only be caused by another blocked task in the same set. No task in the deadlocked set can ever make progress. The condition represents a total loss of liveness.

**3. Liveness**

A property that guarantees that a task will eventually be able to complete its execution and make progress — i.e., no task waits forever. A system is said to have liveness if it is free from deadlock and starvation. Deadlock is the total loss of liveness.

**4. Mutual exclusion**

The guarantee that at most one task can execute inside a critical section (accessing a shared resource) at any given time. Mutual exclusion prevents race conditions by serializing access to shared data.

**5. Cooperation synchronization vs. Competition synchronization**

- **Cooperation synchronization**: Task A must wait until task B has completed a specific action before A can proceed. The tasks *coordinate* their actions. Example: in a producer-consumer system, the consumer must wait for the producer to deposit an item into the buffer before it can fetch.

- **Competition synchronization**: Multiple tasks compete for exclusive access to the same shared resource; only one may access it at a time. Example: two threads must not simultaneously write to the same buffer. A binary semaphore (mutex) or `lock` statement is typically used to enforce this.

---

## Section III. Semaphore

```
Semaphore s1 = 0;
Semaphore s2 = 0;

Thread 1:
  print("Hello");
  ① s1.release();    -- signal Thread 2 that "Hello" is done

Thread 2:
  ② s1.acquire();    -- block until Thread 1 has finished
  print("World");
  ③ s2.release();    -- signal Thread 3 that "World" is done

Thread 3:
  ④ s2.acquire();    -- block until Thread 2 has finished
  print("!");
```

**Explanation:** 
- Both `s1` and `s2` start at 0, so any `acquire()` call on them immediately blocks the calling thread.
- Thread 2 blocks on `s1.acquire()` until Thread 1 calls `s1.release()` after printing "Hello".
- Thread 3 blocks on `s2.acquire()` until Thread 2 calls `s2.release()` after printing "World".
- This chain of signals guarantees the output order `Hello → World → !` regardless of the OS scheduler.

---

## Section IV. Exception Handling Keywords

### (a) Syntax table

| | Ada | C++ | Java | Python | Ruby |
|---|---|---|---|---|---|
| Start protected block | ① **`begin`** | `try` | `try` | ② **`try:`** | ③ **`begin`** |
| Catch exception E | `exception when E =>` | ④ **`catch(E e)`** | `catch(E e)` | ⑤ **`except E:`** | ⑥ **`rescue E`** |
| Raise / throw exception | `raise E` | ⑦ **`throw expr`** | `throw new E()` | `raise E` | ⑧ **`raise`** |
| Cleanup block (always runs) | (none) | (none) | ⑨ **`finally`** | `finally:` | `ensure` |

Full syntax examples per language:

```ada
-- Ada
begin
  -- code
exception
  when Constraint_Error =>
    Put_Line("range error");
  when others =>
    Put_Line("other error");
end;
```

```cpp
// C++
try {
  throw MyException("message");
}
catch (MyException& e) { /* handle */ }
catch (...) { /* catch-all */ }
// throw; -- re-raise current exception
```

```java
// Java
try {
  throw new MyException("message");
}
catch (MyException e) { /* handle */ }
catch (Exception e)  { /* catch-all */ }
finally {
  // always runs
}
```

```python
# Python
try:
  raise ValueError("bad value")
except ValueError as e:
  print(e)
except Exception:
  pass
else:
  pass  # runs only if no exception was raised
finally:
  pass  # always runs
```

```ruby
# Ruby
begin
 raise "error"
rescue RuntimeError => e
 puts e.message
rescue => e
 # catches all StandardError subclasses
ensure
 # always runs (like Java's finally)
 # retry -- re-executes begin block (use inside rescue only)
end
```

### (b) Checked vs. Unchecked Exceptions in Java

- **Checked exception**: A subclass of `Exception` that is **not** a subclass of `RuntimeException`. The Java compiler enforces that it must either be caught (`try-catch`) or declared in the method's `throws` clause. It represents recoverable error conditions that the caller should anticipate. Examples: `IOException`, `SQLException`.

- **Unchecked exception**: A subclass of `RuntimeException` or `Error`. The compiler does **not** require explicit handling or a `throws` declaration. These typically represent programming bugs or JVM-level errors that are not expected to be recovered from at runtime. Examples: `NullPointerException`, `ArrayIndexOutOfBoundsException` (both `RuntimeException`).

Java exception hierarchy:
```
Throwable
├── Error       (unchecked — JVM-level; e.g., OutOfMemoryError)
└── Exception
  ├── RuntimeException  (unchecked — e.g., NullPointerException)
  └── (other subclasses) (checked — e.g., IOException)
```

---

## Section V. ARI — Chain Offset and Local Offset

The tuple `(chain_offset, local_offset)` means: follow the static link `chain_offset` times, then access the variable at `local_offset` within that ARI.

**Program structure:**
```
Bigsub (depth 0): A=offset 3, B=offset 4, C=offset 5
 Sub1 (depth 1): A=offset 3
 Sub2 (depth 1): B=offset 4
  Sub3 (depth 2): E=offset 4
```

### (a) Position 1 — Sub1 is currently executing

| Variable referenced | (chain_offset, local_offset) | Reason |
|---|---|---|
| Sub1's own `A` | **(0, 3)** | Local to Sub1; no static link traversal needed |
| Bigsub's `B` | **(1, 4)** | One static link up from Sub1 to Bigsub; B is at offset 4 |
| Bigsub's `C` | **(1, 5)** | One static link up from Sub1 to Bigsub; C is at offset 5 |

### (b) Position 2 — Sub3 is currently executing

| Variable referenced | (chain_offset, local_offset) | Reason |
|---|---|---|
| Sub3's own `E` | **(0, 4)** | Local to Sub3; no static link traversal |
| Sub2's `B` | **(1, 4)** | One static link up from Sub3 to Sub2; B is at offset 4 |
| Bigsub's `A` | **(2, 3)** | Two static links up: Sub3 → Sub2 → Bigsub; A is at offset 3 |

---

## Section VI. Parameter Passing

```csharp
static void DoIt(out int x, out int y) {
  x = 17;
  y = 35;
}
int sub = 3;
int[] list = {1, 3, 5, 7, 9};
DoIt(out list[sub], out sub);
```

### (a) Call-time address evaluation

At the moment of the call, the l-values (addresses) of the actual parameters are evaluated once and stored:

- First argument `list[sub]` → address of `list[3]` (because `sub = 3` at call time)
- Second argument `sub` → address of `sub`

Execution inside `DoIt`:
- `x = 17` → writes 17 to the address of `list[3]` → `list[3] = 17`
- `y = 35` → writes 35 to the address of `sub` → `sub = 35`

**Final values:** `list = {1, 3, 5, 17, 9}`, `sub = 35`

### (b) Return-time address evaluation

With return-time evaluation, the formal parameter values (`x = 17`, `y = 35`) are computed inside the function, but the destination addresses are only determined **at return time**.

Consider what happens if `y` is copied back first:
1. Copy `y = 35` → `sub = 35` (sub is now 35)
2. Re-evaluate address of first argument: `list[sub]` → `list[35]`
3. `list[35]` does not exist (list has indices 0–4) → **runtime error / index out of bounds**

The behavior is **undefined / implementation-defined** because it depends on the order in which the copy-back operations are performed. This is a fundamental danger of return-time address evaluation when actual parameters contain array-index expressions that depend on other actual parameters.

---

## Section VII. Polymorphic Variable Declaration

### (a) C++ — pointer-based; requires `virtual`

```cpp
class Shape {
public:
  virtual void draw() { /* base */ }
  virtual ~Shape() {}
};
class Circle : public Shape {
public:
  void draw() override { /* circle-specific */ }
};

Shape* ptr = new Circle(); // polymorphic variable: pointer to base class
ptr->draw();        // dynamic binding via vtable → Circle::draw() is called
```

Note: if `draw()` were not `virtual`, `Shape::draw()` would be called (static binding).

### (b) Java — reference-based; dynamic binding by default

```java
class Shape {
  void draw() { /* base */ }
}
class Circle extends Shape {
  @Override
  void draw() { /* circle-specific */ }
}

Shape a = new Circle(); // polymorphic variable: parent-type reference to child object
a.draw();        // dynamic binding (default) → Circle.draw() is called
```

In Java, all non-`final`, non-`static`, non-`private` instance methods are dynamically bound.

### (c) C# — requires `virtual` on parent, `override` on child

```csharp
class Shape {
  public virtual void Draw() { /* base */ }
}
class Circle : Shape {
  public override void Draw() { /* circle-specific */ }
}

Shape s = new Circle(); // polymorphic variable
s.Draw();        // dynamic binding → Circle.Draw() is called
```

Without `virtual`/`override`, a `new` keyword would hide the parent method and use static binding.

### (d) Python — duck typing; no explicit type declaration

```python
class Shape:
  def draw(self): pass

class Circle(Shape):
  def draw(self): print("circle")

x = Circle()  # variable x holds a Circle object; no type annotation needed
x.draw()    # always dynamically bound → Circle.draw() is called
```

### (e) Ruby — all variables are typeless; all method calls are dynamic

```ruby
class Shape
 def draw; end
end
class Circle < Shape
 def draw; puts "circle"; end
end

x = Circle.new
x.draw  # dynamic binding → Circle#draw is called
```

---

## Section VIII. Functional Programming — Scheme

Binary tree representation: `(value left right)` where `'()` = empty tree.

- `(CAR t)` → root value 
- `(CADR t)` → left subtree 
- `(CADDR t)` → right subtree

### (a) count-nodes — total number of nodes

```scheme
(DEFINE (count-nodes t)
 (IF (NULL? t)
   0
   (+ 1
     (count-nodes (CADR t))
     (count-nodes (CADDR t)))))
```

**Logic:** Base case: empty tree has 0 nodes. Recursive case: 1 (current node) + nodes in left subtree + nodes in right subtree.

### (b) tree-height — height of the tree

```scheme
(DEFINE (tree-height t)
 (IF (NULL? t)
   0
   (+ 1 (MAX (tree-height (CADR t))
        (tree-height (CADDR t))))))
```

**Logic:** Base case: empty tree has height 0. Recursive case: 1 + the maximum of the heights of the left and right subtrees.

### (c) tree-max — maximum value in the tree

```scheme
(DEFINE (tree-max t)
 (IF (NULL? t)
   -999999
   (MAX (CAR t)
      (tree-max (CADR t))
      (tree-max (CADDR t)))))
```

**Logic:** Base case: empty tree returns -999999 (sentinel — smaller than any real value). Recursive case: the maximum of the root value, the max of the left subtree, and the max of the right subtree.

**Example tree and expected outputs:**

```scheme
(DEFINE example-tree '(5 (3 (1 () ()) (4 () ())) (8 (7 () ()) ())))
;;
;;    5
;;   / \
;;   3  8
;;  / \ /
;;  1 4 7

(count-nodes example-tree) ; → 6
(tree-height example-tree) ; → 3
(tree-max example-tree)   ; → 8
```

---

## Section IX. Haskell — foldr

### (a) Step-by-step evaluation

Recall: `foldr f v [x1, x2, x3] = f x1 (f x2 (f x3 v))`

```haskell
foldr (\_ n -> 1 + n) 0 [10, 20, 30]

-- expand using the definition of foldr:
= (\_ n -> 1+n) 10 (foldr (\_ n -> 1+n) 0 [20, 30])
= (\_ n -> 1+n) 10 ((\_ n -> 1+n) 20 (foldr (\_ n -> 1+n) 0 [30]))
= (\_ n -> 1+n) 10 ((\_ n -> 1+n) 20 ((\_ n -> 1+n) 30 0))

-- evaluate innermost first:
= (\_ n -> 1+n) 10 ((\_ n -> 1+n) 20 (1 + 0))
= (\_ n -> 1+n) 10 ((\_ n -> 1+n) 20 1)
= (\_ n -> 1+n) 10 (1 + 1)
= (\_ n -> 1+n) 10 2
= 1 + 2
= 3
```

**Final result: 3**

### (b) Equivalent standard function

This is equivalent to the **`length`** function. The lambda `(\_ n -> 1 + n)` ignores the actual list element (`_`) and increments the accumulator `n` by 1 for each element. Thus it counts the total number of elements in the list.

```haskell
length = foldr (\_ n -> 1 + n) 0
```

---

## Section X. ML — Pattern Matching

**Original (if-then-else):**

```sml
fun length(lst) =
  if lst = [] then 0
  else 1 + length(tl lst);
```

**Rewritten with pattern matching:**

```sml
fun length([]) = 0
 | length(h :: t) = 1 + length(t);
```

**Explanation:** 
- The first clause `length([])` matches the empty list and returns 0. 
- The second clause `length(h :: t)` uses the `::` (cons) pattern to decompose the list into its head `h` and tail `t`. The body returns `1 + length(t)`, recursively counting the tail. 
- The head variable `h` is not used in the body (it could be replaced with `_`). 
- Pattern matching makes the base case and recursive case structurally explicit and is the idiomatic ML style.

---

*End of Answer Key*
