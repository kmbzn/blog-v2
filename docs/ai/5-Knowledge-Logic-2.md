# 5. Knowledge and Logic (2)

## 명제 기호 (Propositional Symbols)
- 명제 기호 (Propositional Symbols): $P, Q, R$ 등, 문장의 참/거짓 (truth values)을 나타내는 변수

## 논리적 연결사 (Logical Connectives) 및 진리표 (Truth Tables)

### 부정 (¬, not):

| $P$ | $\neg P$ |
|:-:|:-:|
| `true` | `false` |
| `false` | `true` |

### 논리곱 ($\land$, and, Conjunction):

| $P$ | $Q$ | $P \land Q$ |
|:-:|:-:|:-:|
| `false` | `false` | `false` |
| `false` | `true` | `false` |
| `true` | `false` | `false` |
| `true` | `true` | `true` |

### 논리합 ($\lor$, or, disjunction):

| $P$ | $Q$ | $P \lor Q$ |
|:-:|:-:|:-:|
| `false` | `false` | `false` |
| `false` | `true` | `true` |
| `true` | `false` | `true` |
| `true` | `true` | `true` |

### 함의 ($\Rightarrow$, implication): $P$가 참이고 $Q$가 거짓인 경우를 제외하고 참.

| $P$ | $Q$ | $P \Rightarrow Q$ |
|:-:|:-:|:-:|
| `false` | `false` | `true` |
| `false` | `true` | `true` |
| `true` | `false` | `false` |
| `true` | `true` | `true` |

### 쌍조건 ($\Leftrightarrow$, biconditional): $P$와 $Q$의 참값이 같을 때만 참.

| $P$ | $Q$ | $P \Leftrightarrow Q$ |
|:-:|:-:|:-:|
| `false` | `false` | `true` |
| `false` | `true` | `false` |
| `true` | `false` | `false` |
| `true` | `true` | `true` |

## 명제 정리 증명 (Propositional Theorem Proving)
- 엔테일먼트 (entailment)를 모델 검사 (model checking, 진리표 작성) 대신 정리 증명 (theorem proving)을 통해 수행 가능
    - 모델을 참조하지 않고, KB (Knowledge Base)의 문장에 추론 규칙 (rules of inference)을 직접 적용하여 원하는 문장의 증명 (proof)을 구성.

## 추가 개념 (Additional concepts)
- 논리적 동치 (Logical equivalence, $\alpha \equiv \beta$): 두 문장 $\alpha$와 $\beta$가 동일한 모델 집합에서 참인 경우
    - $\alpha \equiv \beta$는 $\alpha \vDash \beta$와 $\beta \vDash \alpha$일 때만 성립.
- 타당성 (Validitiy): 모든 모델에서 참인 문장 (tautology라고도 알려짐)
- 연역 정리 (Deduction theorem): 임의의 문장 $\alpha$와 $\beta$에 대해, $\alpha \vDash \beta$는 $(\alpha \Rightarrow \beta)$가 타당한 것과 동치
    - $(\alpha \Rightarrow \beta)$가 모든 모델에서 참인지 확인하여 $\alpha \vDash \beta$를 결정 가능
- 만족 가능성 (Satisfiability): 일부 모델에서 참인 (satisfied by) 문장
    - $\alpha$는 $\neg \alpha$가 만족 불가능 (unsatisfiable)할 때만 타당
    - $\alpha \vDash \beta$는 $(\alpha \land \neg \beta)$가 만족 불가능할 때만 성립 (귀류법 (proof by contradiction))

## 논리적 동치 (Logical Equivalences)
- 논리곱의 교환 법칙 (commutativity of $\land$):
$$\begin{array}{l} (\alpha \land \beta) \equiv (\beta \land \alpha) \end{array}$$
- 논리합의 교환 법칙 (commutativity of $\lor$):
$$\begin{array}{l} (\alpha \lor \beta) \equiv (\beta \lor \alpha) \end{array}$$
- 논리곱의 결합 법칙 (associativity of $\land$):
$$\begin{array}{l} ((\alpha \land \beta) \land \gamma) \equiv (\alpha \land (\beta \land \gamma)) \end{array}$$
- 논리합의 결합 법칙 (associativity of $\lor$):
$$\begin{array}{l} ((\alpha \lor \beta) \lor \gamma) \equiv (\alpha \lor (\beta \lor \gamma)) \end{array}$$
- 이중 부정 제거 (double-negation elimination):
$$\begin{array}{l} \neg(\neg \alpha) \equiv \alpha \end{array}$$
- 대우 (contraposition):
$$\begin{array}{l} (\alpha \Rightarrow \beta) \equiv (\neg \beta \Rightarrow \neg \alpha) \end{array}$$
- 함의 제거 (implication elimination):
$$\begin{array}{l} (\alpha \Rightarrow \beta) \equiv (\neg \alpha \lor \beta) \end{array}$$
- 쌍조건 제거 (biconditional elimination):
$$\begin{array}{l} (\alpha \Leftrightarrow \beta) \equiv ((\alpha \Rightarrow \beta) \land (\beta \Rightarrow \alpha)) \end{array}$$
- De morgan's 법칙 (De Morgan):
$$\begin{array}{l} \neg(\alpha \land \beta) \equiv (\neg \alpha \lor \neg \beta) \\ \neg(\alpha \lor \beta) \equiv (\neg \alpha \land \neg \beta) \end{array}$$
- $\land$에 대한 $\lor$의 분배 법칙 (distributivity of $\land$ over $\lor$):
$$\begin{array}{l} (\alpha \land (\beta \lor \gamma)) \equiv ((\alpha \land \beta) \lor (\alpha \land \gamma)) \end{array}$$
- $\lor$에 대한 $\land$의 분배 법칙 (distributivity of $\lor$ over $\land$):
$$\begin{array}{l} (\alpha \lor (\beta \land \gamma)) \equiv ((\alpha \lor \beta) \land (\alpha \lor \gamma)) \end{array}$$

## 추론과 증명 (Inference and Proofs)
- 추론 규칙 (inference rules): 원하는 목표로 이어지는 결론의 사슬 (chain of conclusions)인 증명 (proof)을 도출하는 데 적용 가능
- 모든 논리적 동치는 추론 규칙으로 사용 가능

## Modus Ponens (긍정 논법)
- 정의: $\alpha \Rightarrow \beta$ 형태의 문장과 $\alpha$가 주어지면, $\beta$를 추론 가능
$$\frac{\alpha \Rightarrow \beta, \quad \alpha}{\beta}$$
- 예: $\text{WumpusAhead} \land \text{WumpusAlive} \Rightarrow \text{Shoot}$와 $\text{WumpusAhead} \land \text{WumpusAlive}$가 주어지면, $\text{Shoot}$를 추론 가능

## And-Elimination (논리곱 제거, Simplification)
- 정의: 논리곱 (conjunction)으로부터, 그 논리곱의 구성 요소 중 어느 하나를 추론 가능
$$\frac{\alpha \land \beta}{\alpha}$$
- 예: $\text{WumpusAhead} \land \text{WumpusAlive}$로부터, $\text{WumpusAlive}$를 추론 가능

## 왐퍼스 세계에 추론 규칙 적용
- KB($R_1$에서 $R_5$)에서 $\neg P_{1,2}$를 증명하는 과정.
    - $R_2: B_{1,1} \Leftrightarrow P_{1,2} \lor P_{2,1}$
    - $R_4: \neg B_{1,1}$
- 증명:
    1. $R_2$에 쌍조건 제거 (biconditional elimination) 적용: $R_6: P_{1,2} \lor P_{2,1} \Rightarrow B_{1,1}$
    2. $R_6$의 대우 (contrapositives) 논리적 동치 적용: $R_7: \neg B_{1,1} \Rightarrow \neg (P_{1,2} \lor P_{2,1})$
    3. $R_4 (\neg B_{1,1})$와 $R_7$에 Modus Ponens 적용: $R_8: \neg (P_{1,2} \lor P_{2,1})$
    4. $R_8$에 De morgan's의 법칙 (De Morgan’s rule) 적용: $R_9: \neg P_{1,2} \land \neg P_{2,1}$.
        - 즉, [1, 2]와 [2, 1] 모두 구덩이가 없음.
- 추론을 통한 증명은 관련 없는 명제 (irrelevant propositions)를 무시할 수 있으므로 (예: $B_{2,1}, P_{1,1}$ 등), 진리표 작성이나 모델 검사보다 더 효율적일 수 있음.

## 해상도를 통한 증명 (Proof by Resolution)
- 단위 해상도 추론 규칙 (Unit resolution inference rule):
    $$\frac{l_1 \lor \dots \lor l_k, \quad m}{l_1 \lor \dots \lor l_{j-1} \lor l_{j+1} \lor \dots \lor l_k}$$
    - $l$은 리터럴 (literal, 명제 변수 또는 그 부정), $l_j$와 $m$은 상보적 리터럴 (complementary literals)
    - 절 (clause, 리터럴들의 논리합)과 리터럴을 받아 새로운 절을 생성.
- 완전 해상도 규칙 (Full resolution rule):
    $$\frac{l_1 \lor \dots \lor l_k, \quad m_1 \lor \dots \lor m_n}{(l_1 \lor \dots \lor l_{j-1} \lor l_{j+1} \lor \dots \lor l_k) \lor (m_1 \lor \dots \lor m_{i-1} \lor m_{i+1} \lor \dots \lor m_n)}$$
    - $l_j$와 $m_i$가 상보적 리터럴.

## 연언 정규형 (Conjunctive Normal Form, CNF)
- 해상도 규칙은 절 (clauses)에만 적용.
    - 절: 리터럴들의 논리합 (disjunction of literals)
- 모든 명제 논리 문장은 절들의 논리곱 (conjunction of clauses)과 논리적으로 동치
    - 절들의 논리곱으로 표현된 문장을 연언 정규형 (CNF)이라고 함.
- CNF로 변환 (Converting to CNF):
    1. 쌍조건 ($\Leftrightarrow$) 제거
    2. 함의 ($\Rightarrow$) 제거
    3. De morgan's 법칙과 이중 부정 (double-negation)을 반복 적용하여 $\neg$를 리터럴 안으로 이동.
    4. 분배 법칙 (distributive law)을 사용하여 논리곱-논리합 (disjunctions of conjunctions)을 절들의 논리곱으로 변환.

## 해상도 알고리즘 (Resolution Algorithm)
- 해상도 기반 추론 절차는 귀류법 (proof by contradiction) 원리를 사용.
    - $KB \vDash \alpha$를 보이기 위해, $KB \land \neg \alpha$가 만족 불가능함을 보임.
- 알고리즘 순서:
    1. $KB \land \neg \alpha$를 CNF로 변환.
    2. 결과로 얻은 절들에 해상도 규칙을 반복 적용.
    3. 해상도로 생성된 절은 KB에 추가 (KB에 없는 경우)
    4. 다음 중 하나가 발생할 때까지 계속:
        - 추가할 수 있는 새로운 절이 없는 경우: KB가 $\alpha$를 수반하지 않음.
        - 두 절이 해상되어 공집합 절 (empty clause, $\square$)을 생성하는 경우: KB가 $\alpha$를 수반함.
            - 공집합 절은 거짓 (`False`)과 동치 모순되는 두 단위 절 (예: $P$와 $\neg P$)이 해상될 때만 발생.

# 1차 논리 (First-Order Logic, FOL)

## 1차 논리의 모델 (Models for the First-Order Logic)
- 명제 논리의 모델: 명제 기호와 미리 정의된 참값을 연결.
- 1차 논리의 모델: 객체 (objects)를 포함.
    - 모델의 영역 (domain): 모델이 포함하는 객체 (domain elements) 집합.
- 관계 (relation): 관련 있는 객체들의 튜플 (tuples) 집합.
- 함수 (functions): 특정 종류의 관계. 단일 요소 튜플에서 객체로의 매핑.

## 1차 논리의 구문 (Syntax of First-Order Logic)
- 기본 구문 요소: 객체, 관계, 함수를 나타내는 기호.
    - 상수 기호 (Constant symbols): 객체를 나타냄. 예: $\text{Richard}$, $\text{John}$.
    - 술어 기호 (Predicate symbols): 관계를 나타냄. 예: $\text{Brother}$, $\text{OnHead}$, $\text{Person}$, $\text{King}$.
    - 함수 기호 (Function symbols): 함수를 나타냄. 예: $\text{LeftLeg}$.
- 해석 (interpretation): 각 모델은 상수, 술어, 함수 기호가 정확히 어떤 객체, 관계, 함수를 참조하는지 지정.

## 원자 및 복합 문장 (Atomic and Complex Sentences)
- 원자 문장 (Atomic sentence): 술어 기호와 괄호로 묶인 항 (terms) 목록으로 구성.
    - 예: $\text{Brother}(\text{Richard}, \text{John})$.
    - 복합 항 (complex terms)을 인수로 가질 수 있음. 예: $\text{Married}(Father(\text{Richard}),~ \text{Mother}(\text{John}))$.
    - 원자 문장: 술어 기호가 나타내는 관계가 인수가 나타내는 객체들 사이에 성립할 때 참.
- 복합 문장 (Complex sentences): 명제 논리와 동일한 구문과 의미론으로 논리적 연결사 ($\neg, \land, \lor, \Rightarrow$)를 사용하여 구성.

## 전칭 한정 기호 (Universal Quantifiers, $\forall$)
- 전칭 한정 (Universal quantification, $\forall$): 모든 객체에 대한 일반 규칙 표현.
    - 예: $\forall x \, \text{King}(x) \Rightarrow \text{Person}(x)$ ("모든 $x$에 대해, $x$가 왕이면 $x$는 사람이다.")
    - 변수 (variable): $x$는 변수 항 (term) 자체이며 함수의 인수로 사용 가능 예: $\text{LeftLeg}(x)$.
    - $\forall x \, P$: $P$는 모든 객체 $x$에 대해 참.

## 존재 한정 기호 및 중첩 한정 기호 (Existential and Nested Quantifiers)
- 존재 한정 (Existential quantification, $\exists$): 객체를 명명하지 않고 일부 객체에 대한 진술.
    - 예: $\exists x \, \text{Crown}(x) \land \text{OnHead}(x,~\text{John})$ ("John의 머리 위에 왕관이 있는 $x$가 존재한다.")
    - $\exists x$: "다음과 같은 $x$가 존재한다..." 또는 "일부 $x$에 대해...".
    - $\exists x \, P$: $P$는 적어도 하나의 객체 $x$에 대해 참.
- 중첩 한정 기호 (Nested quantifiers): 여러 한정 기호를 사용하여 복잡한 문장 표현.
    - 한정의 순서가 중요.
    - 예: $\forall x \exists y \, \text{Loves}(x,~ y)$ (모든 사람은 누군가를 사랑한다.)
    - 예: $\exists y \forall x \, \text{Loves}(x,~ y)$ (모두가 사랑하는 누군가가 있다.)

## 1차 논리를 사용한 왐퍼스 세계 (The Wumpus World with First-Order Logic)
- 지각의 표현: 지각 벡터와 발생 시점을 포함.
    - 예: $\text{Percept}(\langle \text{Stench}, \text{Breeze}, \text{Glitter}, \text{None}, \text{None} \rangle, 5)$.
- 지각으로부터 사실 도출:
    - $\forall t, s, g, w, c \, \text{Percept}(\langle s, \text{Breeze}, g, w, c \rangle, t) \Rightarrow \text{Breeze}(t)$
- 인접성 (Adjacency) 정의:
    - $\forall x, y, a, b \, \text{Adjacent}(x, y, a, b) \Leftrightarrow (x=a \land (y=b-1 \lor y=b+1)) \lor (y=b \land (x=a-1 \lor x=a+1))$
- 일반 규칙 (General rules):
    - $\forall s, t \, At(\text{Agent}, s, t) \land \text{Breeze}(t) \Rightarrow \text{Breezy}(s)$ (에이전트가 어떤 칸 $s$에 있고 바람을 인지하면, 그 칸 $s$는 산들바람이 있음.)
    - $\forall s \, \text{Breezy}(s) \Leftrightarrow \exists r \, \text{Adjacent}(r, s) \land \text{Pit}(r)$ (칸 $s$가 산들바람이 있는 것은 이웃 칸 $r$에 구덩이가 있을 때만 성립.)
- 1차 논리는 명제 논리로 표현하기 어려웠던 일반 규칙을 쉽게 표현 가능