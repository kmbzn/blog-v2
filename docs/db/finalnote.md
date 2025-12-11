# Final Note

## 1. 인덱싱 (Indexing) - B+ Tree
가장 확실하게 나오는 유형으로, B+ Tree의 구조 변화를 직접 그릴 수 있어야 함.
- B+ Tree 연산: 초기화 상태에서 시작하여 값의 삽입(Insert) 및 삭제(Delete) 과정 수행
- 구조 변화: 삽입 시 노드 분할(Split)과 삭제 시 병합(Merge) 과정을 포함하여 최종 결과 트리 그리기

## 2. 쿼리 처리 및 최적화 (Query Processing & Optimization)
계산 문제가 다수 출제되는 파트. 공식을 정확히 암기해야
- 비용(Cost) 계산: 두 릴레이션 조인 시 각 방법별 Block Transfer 횟수와 Seek 횟수 구하기
    - 대상 알고리즘: Nested-loop join, Block nested-loop join, Merge join 등
- 조인 최적화 (Join Optimization)
    - 3개의 릴레이션(R1, R2, R3)을 조인할 때, 주어진 튜플 수와 V값(Distinct values)을 기반으로 조인 순서 결정
    - 조인 후 결과 릴레이션의 크기(Tuple 수) 예측
    - 더 효율적인 조인 방법 찾기

## 3. 트랜잭션 관리 (Transaction Management)
스케줄의 정합성과 성질을 판단하는 이론 및 판별 문제
- 스케줄 성질 판별 (OX 또는 단답형)
    - 주어진 스케줄이 Conflict Serializable 한지 판단
    - Recoverable Schedule인지 판단
    - Cascadeless Schedule인지 판단
- 동시성 제어 (Concurrency Control)
    - Lock / Unlock 시점 및 프로토콜 관련 문제
    - 각 트랜잭션의 공유 데이터 R/W 여부에 따른 스케줄 분석

## 4. 회복 시스템 (Recovery System)
로그 기반 회복 기법에 대한 이해를 물음. PPT 예제 상황을 잘 봐두는 것이 중요
- 로그 기록 및 복구: 체크포인트(Checkpoint)와 장애 발생 시점(Failure)이 주어졌을 때 로그 상태 분석
- Undo / Redo
    - 어떤 트랜잭션을 Undo 또는 Redo 해야 하는지 판단
    - 복구 과정에서의 변수 값 변화 및 순서 서술

## 5. 관계형 데이터베이스 설계 (Relational Database Design)
기말 범위는 아니지만 중간고사 범위에서 1문제 기초적인 내용 출제
- 정규화 (Normalization): 주어진 릴레이션을 3NF(제3정규형)로 변환하기
- 기타 가능성: BCNF 분해, Canonical Cover, 후보키(Candidate Key) 찾기 중 하나

정리해주신 Final Note와 족보(기출 경향)를 바탕으로, 실제 시험에 나올 법한 변형 문제 5세트를 출제했습니다.

교재 연습문제 스타일을 유지하되, 족보에서 언급된 포인트(계산, 그리기, OX 판단, 로그 분석)를 집중적으로 반영했습니다.

### 1\. Indexing (B+ Tree)

유형: 삽입/삭제에 따른 구조 변화 그리기 (족보 1순위)

[English Problem]
Construct a B+-tree for the following set of key values: $(2, 3, 5, 7, 11, 17, 19, 23, 29, 31)$. Assume that the tree is initially empty and values are added in ascending order. Construct the tree for the case where the number of pointers in each node is 4 ($n=4$).
After construction, show the steps to delete the value 23 and describe how the tree structure changes (merge or redistribution).

[한국어 번역]
키 값 집합 $(2, 3, 5, 7, 11, 17, 19, 23, 29, 31)$에 대해 B+ 트리를 구축하시오. 트리는 초기에 비어 있으며 값들은 오름차순으로 입력된다고 가정한다. 각 노드의 포인터 개수가 4개($n=4$)인 경우에 대해 트리를 그리시오. (즉, 한 노드에 키는 최대 3개까지 저장 가능).
구축 후, 값 23을 삭제하는 과정을 보이고, 트리 구조가 어떻게 변하는지(병합 또는 재분배) 설명하시오.

[Solution Guide]

1.  구성 ($n=4$, Max Key=3): 3개가 차면 쪼개집니다(Split).
      - 최종 트리는 Root가 있고, 중간 레벨이 생기며, 리프 노드들이 연결된 형태가 됩니다.
2.  삭제 (23 삭제):
      - 23이 있는 리프 노드에서 값을 지웁니다.
      - 삭제 후 해당 노드의 키 개수가 최소 조건($\lceil (n-1)/2 \rceil = \lceil 3/2 \rceil = 2$가 아니라 보통 절반, 여기서는 1개 혹은 2개 미만일 때)을 만족하지 못하면(Underflow), 형제 노드(Sibling)에서 빌려오거나(Redistribution), 형제와 합칩니다(Merge).
      - 이 문제에서는 형제 노드와 \*\*병합(Merge)\*\*이 일어날 가능성이 높습니다. 병합 후 부모 노드의 포인터도 조정해야 합니다.

### 2\. Query Processing (Cost Calculation)

유형: 조인 비용(Block Transfer, Seek) 계산 (공식 암기 필수)

[English Problem]
Let relations $r(A, B)$ and $s(B, C)$ have the following properties:

  - Number of tuples of $r$: $N_r = 20,000$
  - Number of blocks of $r$: $B_r = 800$
  - Number of tuples of $s$: $N_s = 40,000$
  - Number of blocks of $s$: $B_s = 1,500$
  - Memory buffer size: $M = 402$ blocks

Calculate the cost (number of block transfers and seeks) for a Block Nested-Loop Join, assuming $r$ is the outer relation and $s$ is the inner relation. Assume worst-case seek cost.

[한국어 번역]
릴레이션 $r(A, B)$와 $s(B, C)$가 다음과 같은 속성을 가진다고 하자:

  - $r$의 튜플 수: $N_r = 20,000$, $r$의 블록 수: $B_r = 800$
  - $s$의 튜플 수: $N_s = 40,000$, $s$의 블록 수: $B_s = 1,500$
  - 메모리 버퍼 크기: $M = 402$ 블록

$r$이 외부(Outer), $s$가 내부(Inner) 릴레이션이라고 가정할 때, \*\*블록 중첩 루프 조인(Block Nested-Loop Join)\*\*의 비용(블록 전송 횟수와 탐색(Seek) 횟수)을 계산하시오. (최악의 탐색 비용을 가정할 것).

[Solution Guide]

  - 공식 (Block Nested-Loop):
      - 블록 전송(Transfers): $B_r + ( B_r / (M-2) ) \times B_s$
          - (참고: $M-2$는 입력 버퍼용. 메모리에 $r$을 최대한 적재하고 $s$를 한 바퀴 돎)
      - 탐색(Seeks): $2 \times \lceil B_r / (M-2) \rceil$
  - 계산:
      - Chunk 개수 = $\lceil 800 / 400 \rceil = 2$ (메모리에 2번 나누어 적재 가능)
      - Block Transfers: $800 + (2 \times 1500) = 3,800$
      - Seeks: $2 \times 2 = 4$ (혹은 초기 탐색 포함 여부에 따라 $s$를 2번 읽어야 하므로 $2 + 2 = 4$회 근사치)

### 3\. Transaction Management (Schedule Properties)

유형: Conflict Serializable, Recoverable, Cascadeless 판단 (OX 문제)

[English Problem]
Consider the following schedule $S$ involving transactions $T_1$ and $T_2$:
$$S: r_1(A), r_2(A), w_1(A), w_2(A), Commit_1, Commit_2$$

1.  Is this schedule Conflict Serializable? Explain why or why not using a precedence graph.
2.  Is this schedule Recoverable?
3.  Is this schedule Cascadeless?

[한국어 번역]
트랜잭션 $T_1, T_2$가 포함된 다음 스케줄 $S$를 고려하시오:
$$S: r_1(A), r_2(A), w_1(A), w_2(A), Commit_1, Commit_2$$

1.  이 스케줄은 \*\*충돌 직렬 가능(Conflict Serializable)\*\*한가? 우선순위 그래프(Precedence Graph)를 사용하여 이유를 설명하시오.
2.  이 스케줄은 \*\*회복 가능(Recoverable)\*\*한가?
3.  이 스케줄은 연쇄 복귀가 없는(Cascadeless) 스케줄인가?

[Solution Guide]

1.  Conflict Serializable? No.
      - $r_2(A) \to w_1(A)$ (Edge $T_2 \to T_1$)
      - $r_1(A) \to w_2(A)$ (Edge $T_1 \to T_2$)
      - $w_1(A) \to w_2(A)$ (Edge $T_1 \to T_2$)
      - 그래프에 $T_1 \leftrightarrow T_2$ 사이클이 존재하므로 직렬 불가능. (Blind Write/Lost Update 문제)
2.  Recoverable? Yes.
      - $T_2$는 $T_1$이 쓴 데이터를 읽지 않음(Blind Write). 의존성 없음. $T_1$ 커밋 후 $T_2$ 커밋됨.
3.  Cascadeless? Yes.
      - Dirty Read($w_1 \to r_2$)가 발생하지 않았으므로 연쇄 복귀 문제 없음.

### 4\. Recovery System (Log Analysis)

유형: 체크포인트 이후 Crash 발생 시 Redo/Undo 리스트 및 변수 값 (족보 완벽 대응)

[English Problem]
Consider the following log records. Suppose the system crashes right after the last log record $<T_2, abort>$ is written to stable storage.

```
1. <T0, start>
2. <T0, A, 1000, 900>
3. <T1, start>
4. <checkpoint {T0, T1}>
5. <T1, B, 2000, 2100>
6. <T0, commit>
7. <T2, start>
8. <T2, C, 500, 400>
9. <T2, abort>   <-- CRASH!
```

1.  List the transactions that must be in the Redo-List and Undo-List.
2.  What is the final value of A, B, and C after the recovery process is completed?

[한국어 번역]
다음 로그 레코드를 고려하시오. 마지막 로그 레코드 $<T_2, abort>$가 안정 저장 장치에 기록된 직후 시스템 충돌(Crash)이 발생했다고 가정하자.

1.  Redo 리스트와 Undo 리스트에 포함되어야 할 트랜잭션을 나열하시오.
2.  회복 과정이 완료된 후 A, B, C의 최종 값은 얼마인가?

[Solution Guide]

1.  Lists:
      - Analysis: 체크포인트 시점 Active $=\{T_0, T_1\}$. 이후 $T_0$는 Commit, $T_2$는 Start 후 Abort, $T_1$은 아무 기록 없음(Active 상태로 끝남).
      - Redo-List: $T_0$ (Commit 됨), $T_2$ (Log에 있으니 일단 Redo 대상이긴 함, 혹은 ARIES에서는 History Repeat를 위해 모든 내용 Redo), $T_1$ (Log 있음).
          - *시험 답안용:* "Commit 된 트랜잭션만 Redo"라고 배운 경우 $T_0$만 Redo. 하지만 최신 ARIES는 All Redo. (교재 기준: $T_0$ Redo, $T_1, T_2$ Undo).
      - Undo-List: $T_1$ (끝나지 않음), $T_2$ (Abort 됨).
2.  Final Values:
      - A: 900 ($T_0$ Commit $\to$ Redo $\to$ New Value 유지)
      - B: 2000 ($T_1$ 미완료 $\to$ Undo $\to$ Old Value 복구)
      - C: 500 ($T_2$ Abort $\to$ Undo $\to$ Old Value 복구. *주의: $T_2$가 Abort 로그까지 썼으므로 회복 과정에서 롤백 완료됨*)

네, 요청하신 대로 속성을 A부터 H까지(8개) 늘려서, 조금 더 복잡한 종속성 관계를 가진 제3정규형(3NF) 변환 문제를 출제해 드립니다.

이 문제는 후보키 찾기, 이행적 종속성(Transitive Dependency), 부분 함수 종속성(Partial Dependency) 개념을 모두 테스트할 수 있는 아주 좋은 유형입니다.

### 📚 Relational Database Design (Advanced)

[English Problem]
Consider the relation schema $R(A, B, C, D, E, F, G, H)$ and the following set of functional dependencies $F$:

$$
F = \{ \\
\quad A \to C, \\
\quad A, B \to D, \\
\quad D \to E, \\
\quad D \to G, \\
\quad E \to F, \\
\quad G \to H \\
\}
$$

1.  Find the candidate key(s) for $R$. Show the closure computation to justify your answer.
2.  Explain why this relation is not in 3NF. Identify all functional dependencies that violate the 3NF condition.
3.  Decompose $R$ into a set of relations that are in 3NF. Ensure the decomposition is lossless and dependency-preserving.

[한국어 번역]
다음 함수적 종속성 집합 $F$를 가진 릴레이션 스키마 $R(A, B, C, D, E, F, G, H)$를 고려하시오:

$$
F = \{ \\
\quad A \to C, \\
\quad A, B \to D, \\
\quad D \to E, \\
\quad D \to G, \\
\quad E \to F, \\
\quad G \to H \\
\}
$$

1.  $R$의 후보키(Candidate Key)를 모두 찾으시오. 답을 정당화하기 위해 폐포(Closure) 계산 과정을 보이시오.
2.  이 릴레이션이 왜 제3정규형(3NF)이 아닌지 설명하시오. 3NF 조건을 위반하는 모든 함수적 종속성을 식별하시오.
3.  $R$을 3NF를 만족하는 릴레이션 집합으로 분해하시오. 분해는 무손실 조인(Lossless join)과 종속성 보존(Dependency preservation)을 만족해야 합니다.

### 💡 Solution Guide (풀이 및 해설)

#### 1. 후보키 찾기 (Finding Candidate Key)
후보키를 찾기 위해, 어떤 속성들이 다른 모든 속성을 결정할 수 있는지 폐포(Closure)를 구해봅니다.

* 관찰:
    * $A$와 $B$는 그 어떤 종속성의 오른쪽(RHS)에도 나타나지 않습니다. 즉, $A$와 $B$는 반드시 키에 포함되어야 합니다.
    * $(A, B)$의 결합이 전체를 결정하는지 확인해 봅시다.

* Closure of $\{A, B\}^+$:
    1.  Start with $\{A, B\}$.
    2.  Use $A \to C$: add $C$. Now $\{A, B, C\}$.
    3.  Use $A, B \to D$: add $D$. Now $\{A, B, C, D\}$.
    4.  Use $D \to E$ and $D \to G$: add $E, G$. Now $\{A, B, C, D, E, G\}$.
    5.  Use $E \to F$: add $F$.
    6.  Use $G \to H$: add $H$.
    * Result: $\{A, B\}^+ = \{A, B, C, D, E, F, G, H\}$ (모든 속성 포함)

👉 Candidate Key: $(A, B)$

#### 2. 3NF 위반 분석 (Violation Check)
3NF의 조건: 함수적 종속성 $\alpha \to \beta$에 대해, 다음 중 하나라도 만족해야 합니다.
1.  $\alpha \to \beta$가 자명하다 (Trivial, $\beta \subseteq \alpha$).
2.  $\alpha$가 슈퍼키(Superkey)이다.
3.  $\beta$의 모든 속성이 후보키의 일부(Prime attribute)이다.

위 조건을 만족하지 못하는 위반 사례를 찾습니다:

* $A \to C$:
    * $A$는 슈퍼키가 아님 (후보키 $(A, B)$의 일부일 뿐).
    * $C$는 Prime attribute가 아님.
    * 위반 (Partial Dependency).
* $D \to E$, $D \to G$:
    * $D$는 슈퍼키가 아님.
    * 위반 (Transitive Dependency).
* $E \to F$:
    * $E$는 슈퍼키가 아님.
    * 위반 (Transitive Dependency).
* $G \to H$:
    * $G$는 슈퍼키가 아님.
    * 위반 (Transitive Dependency).

#### 3. 3NF 분해 (Decomposition)
3NF 분해 알고리즘(Canonical Cover 기반 합성)을 사용하여 각 종속성을 별도의 테이블로 만듭니다.

분해된 릴레이션 집합:

1.  From $A \to C$:
    👉 $R_1(A, C)$
2.  From $A, B \to D$:
    👉 $R_2(A, B, D)$
3.  From $D \to E$ and $D \to G$: (D가 같으므로 합칠 수 있음)
    👉 $R_3(D, E, G)$
4.  From $E \to F$:
    👉 $R_4(E, F)$
5.  From $G \to H$:
    👉 $R_5(G, H)$

검증:
* 원래 후보키 $(A, B)$를 포함하는 릴레이션이 있는가?
    * 네, $R_2(A, B, D)$가 키를 포함하므로 별도로 키를 저장하는 릴레이션을 만들 필요가 없습니다.

최종 정답 (Final Schema):
$$R_1(\underline{A}, C)$$
$$R_2(\underline{A, B}, D)$$
$$R_3(\underline{D}, E, G)$$
$$R_4(\underline{E}, F)$$
$$R_5(\underline{G}, H)$$
*(밑줄은 각 릴레이션의 기본키)*