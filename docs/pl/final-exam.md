# Programming Languages — Final Exam

**Name:** _____________  **Student ID:** _______________________  **Score:** ____________ / 100

---

## Section I. True or False  [10 pts · 1 pt each]

Write **T** or **F** in the blank.

1. ____________  In pass-by-reference, the callee receives a copy of the actual parameter's value, not its address.

2. ____________  The dynamic link in an Activation Record Instance (ARI) points to the ARI of the lexical (static) parent.

3. ____________  Deadlock occurs when all tasks in a concurrent system are waiting for events that can never occur.

4. ____________  A monitor automatically guarantees mutual exclusion for all operations defined inside it.

5. ____________  Haskell's lazy evaluation allows infinite lists to be defined and used in computations.

6. ____________  In ML, user-defined function overloading is supported through the pattern matching feature.

7. ____________  In Scheme, `(CAR '(A B C))` returns `(B C)`.

8. ____________  In Java, all exceptions — both checked and unchecked — must be either caught or declared in the `throws` clause.

9. ____________  In the shallow access method for dynamic scoping, each variable name maintains its own stack of values.

10. ____________ Common Lisp uses dynamic scoping as its default scoping rule.

---

## Section II. Concurrency Terminology  [10 pts · 2 pts each]

Briefly define each of the following terms as used in concurrent programming.

**1. Race condition**

<br><br><br><br><br><br>

**2. Deadlock**

<br><br><br><br><br><br>

**3. Liveness**

<br><br><br><br><br><br>

**4. Mutual exclusion**

<br><br><br><br><br><br>

**5. Cooperation synchronization vs. Competition synchronization** — describe the difference between the two.

<br><br><br><br><br><br><br>

---

## Section III. Semaphore  [10 pts]

Three threads must print in the following strict order regardless of scheduling:

```
Thread 1 prints: "Hello"
Thread 2 prints: "World"
Thread 3 prints: "!"
```

Complete the pseudocode below using exactly **two semaphores** (`s1` and `s2`, both initialized to **0**) to guarantee this printing order.

```
Semaphore s1 = 0;
Semaphore s2 = 0;

Thread 1:
    print("Hello");
    ①  __________________________________________________________________

Thread 2:
    ②  __________________________________________________________________
    print("World");
    ③  __________________________________________________________________

Thread 3:
    ④  __________________________________________________________________
    print("!");
```

<br><br><br><br><br><br><br><br><br>

---

## Section IV. Exception Handling Keywords  [10 pts]

**(a)  [6 pts]** Fill in the blanks ① through ⑨ with the correct keyword or syntax.

| | Ada | C++ | Java | Python | Ruby |
|---|---|---|---|---|---|
| Start protected block | ① __________________________ | `try` | `try` | ② __________________________ | ③ __________________________ |
| Catch exception E | `exception when E =>` | ④ __________________________ | `catch(E e)` | ⑤ __________________________ | ⑥ __________________________ |
| Raise / throw exception | `raise E` | ⑦ __________________________ | `throw new E()` | `raise E` | ⑧ __________________________ |
| Cleanup block (always runs) | (none) | (none) | ⑨ __________________________ | `finally:` | `ensure` |

<br><br><br><br>

**(b)  [4 pts]** In Java, what is the difference between a **checked exception** and an **unchecked exception**? Give one example class name for each.

<br><br><br><br><br><br><br><br><br>

---

## Section V. ARI — Chain Offset and Local Offset  [10 pts]

Consider the following nested subprogram structure. Depths and local offsets are given in comments.

```
program Bigsub                      -- depth 0
  var A : integer  (offset = 3)
  var B : integer  (offset = 4)
  var C : integer  (offset = 5)

  procedure Sub1                    -- depth 1
    var A : integer  (offset = 3)
    -- [Position 1: Sub1 is currently executing]

  procedure Sub2                    -- depth 1
    var B : integer  (offset = 4)

    procedure Sub3                  -- depth 2
      var E : integer  (offset = 4)
      -- [Position 2: Sub3 is currently executing]
```

Variable access is written as `(chain_offset, local_offset)`.  
`chain_offset` = number of times the static link must be followed to reach the correct ARI.

**(a)  [5 pts]** At **Position 1** (Sub1 executing), give the access tuple for each reference:

| Variable referenced | (chain_offset, local_offset) |
|---|---|
| Sub1's own `A` | ( ____________________ , ____________________ ) |
| Bigsub's `B` | ( ____________________ , ____________________ ) |
| Bigsub's `C` | ( ____________________ , ____________________ ) |

<br><br><br><br>

**(b)  [5 pts]** At **Position 2** (Sub3 executing), give the access tuple for each reference:

| Variable referenced | (chain_offset, local_offset) |
|---|---|
| Sub3's own `E` | ( ____________________ , ____________________ ) |
| Sub2's `B` | ( ____________________ , ____________________ ) |
| Bigsub's `A` | ( ____________________ , ____________________ ) |

<br><br><br><br>

---

## Section VI. Parameter Passing  [10 pts]

Consider the following C# code using **pass-by-result** (`out`):

```csharp
static void DoIt(out int x, out int y) {
    x = 17;
    y = 35;
}

int sub = 3;
int[] list = {1, 3, 5, 7, 9};
DoIt(out list[sub], out sub);
```

**(a)  [5 pts]** Under **call-time address evaluation** (the address of each actual parameter is fixed at the moment of the call), what are the final values of `list` and `sub` after `DoIt` returns? Show your reasoning step by step.

<br><br><br><br><br><br><br><br><br><br>

**(b)  [5 pts]** Under **return-time address evaluation** (the address of each actual parameter is re-evaluated when the formal parameter value is copied back), what problem can occur? Explain concretely using this code.

<br><br><br><br><br><br><br><br><br>

---

## Section VII. Polymorphic Variable Declaration  [10 pts · 2 pts each]

Show how to declare a **polymorphic variable** in each language and demonstrate a **dynamically bound** method call. Use `Shape` as the parent class and `Circle` as the subclass (with a `draw` method).

**(a) C++** — pointer-based; the `virtual` keyword is required for dynamic binding.

<br><br><br><br><br><br><br><br><br>

**(b) Java** — reference-based; dynamic binding is the default for non-final instance methods.

<br><br><br><br><br><br><br>

**(c) C#** — requires `virtual` on the parent method and `override` on the child method.

<br><br><br><br><br><br><br>

**(d) Python** — duck typing; no explicit type declaration is required.

<br><br><br><br><br><br>

**(e) Ruby** — all variables are typeless; all method calls are dynamically bound.

<br><br><br><br><br><br>

---

## Section VIII. Functional Programming — Scheme  [20 pts]

A binary tree is represented as a Scheme list `(value left right)` where:
- `(CAR t)` → root value  
- `(CADR t)` → left subtree  
- `(CADDR t)` → right subtree  
- `'()` (empty list) → empty tree / leaf sentinel

**(a)  [6 pts]** Write a Scheme function `count-nodes` that returns the **total number of nodes** in a binary tree `t`.

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

**(b)  [7 pts]** Write a Scheme function `tree-height` that returns the **height** of a binary tree `t`. Define the height of an empty tree as 0.

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

**(c)  [7 pts]** Write a Scheme function `tree-max` that returns the **maximum value** stored in a binary tree `t`. Use `-999999` as the base case return value for an empty tree.

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

---

## Section IX. Haskell — foldr  [5 pts]

**(a)  [3 pts]** Trace the evaluation of the following expression **step by step** and give the final result.  
Recall: `foldr f v [x1, x2, x3] = f x1 (f x2 (f x3 v))`

```haskell
foldr (\_ n -> 1 + n) 0 [10, 20, 30]
```

<br><br><br><br><br><br><br><br><br><br><br><br><br>

**(b)  [2 pts]** Which standard Haskell function is this equivalent to, and what does it compute?

<br><br><br><br>

---

## Section X. ML — Pattern Matching  [5 pts]

The following ML function is written using an `if-then-else` expression:

```sml
fun length(lst) =
    if lst = [] then 0
    else 1 + length(tl lst);
```

Rewrite this function using **ML pattern matching** syntax.