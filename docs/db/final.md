# 암기 노트

## 무손실 조인(lossless join)의 조건
- 공통 속성(교집합)이 적어도 한 쪽의 superkey여야 한다.

릴레이션 $R$을 두 개의 릴레이션 $R_1$과 $R_2$로 쪼갰을 때, 다음 조건 중 하나라도 만족하면 무손실 분해가 됨.

$$R_1 \cap R_2 \to R_1$$

또는

$$R_1 \cap R_2 \to R_2$$
- $R_1 \cap R_2$: 두 테이블이 공통으로 가지고 있는 속성 (교집합)
- $\to R_1$: 그 공통 속성이 $R_1$의 모든 속성을 결정한다 (즉, $R_1$의 superkey이다.)

## Join

### 기본 변수 정의
- $r$: Outer Relation (외부 릴레이션)
- $s$: Inner Relation (내부 릴레이션)
- $n_r, n_s$: 튜플(Tuple) 수
- $b_r, b_s$: 블록(Block) 수
- $M$: 메모리 버퍼 블록 수 (Memory blocks)
- $H_i$: 인덱스 높이 (Height of index)

### 1. Nested-Loop Join (중첩 루프 조인)
가장 기본적이고 무식한 방법. (메모리 버퍼가 작을 때, 최악의 경우)

| 항목 | 공식 (Worst Case)
| - | -
| Block Transfers | $n_r \times b_s + b_r$
| Seeks | $n_r + b_r$
- 특징: $r$의 튜플마다 $s$ 전체를 스캔함.

### 2. Block Nested-Loop Join (블록 중첩 루프 조인)
튜플 단위가 아니라 블록 단위로 처리하여 성능 개선.

| 항목 | 공식 (Worst Case, 메모리 적을 때)
| - | -
| Block Transfers | $b_r \times b_s + b_r$
| Seeks | $2 \times b_r$

#### ⭐️ 중요: 메모리 버퍼($M$)를 활용할 때 (Best Practice)
$M-2$개의 블록을 Outer($r$)용으로 사용하여 한 번에 많이 읽는 경우.

| 항목 | 공식 ( $M$ 블록 사용 시)
| - | -
| Block Transfers | $\lceil \frac{b_r}{M-2} \rceil \times b_s + b_r$
| Seeks | $2 \times \lceil \frac{b_r}{M-2} \rceil$
- Tip: $\lceil \frac{b_r}{M-2} \rceil$은 $r$을 메모리에 올리기 위해 끊어서 읽는 횟수(Chunk 수)입.

### 3. Indexed Nested-Loop Join (인덱스 중첩 루프 조인)
Inner($s$) 릴레이션의 조인 속성에 인덱스가 있을 때.

| 항목 | 공식
| - | -
| Cost | $b_r + n_r \times c$
- $c$ (탐색 비용)
    - B+ 트리 인덱스 사용 시: $H_i + 1$ (높이 + 데이터 블록 접근 1회)
    - 해시 인덱스 사용 시: $1.2$ (평균적으로 1.2회 내외)

### 4. Merge Join (Sort-Merge Join)
전제: 두 릴레이션이 조인 키 기준으로 이미 정렬되어 있다고 가정.

| 항목 | 공식
| - | -
| Block Transfers | $b_r + b_s$
| Seeks | $\lceil \frac{b_r}{b_b} \rceil + \lceil \frac{b_s}{b_b} \rceil$ (거의 무시하거나, 각 1회로 침)
- 만약 정렬이 안 되어 있다면?
    - Total Cost = Sort($r$) + Sort($s$) + $(b_r + b_s)$

### 5. Hash Join (해시 조인)
메모리가 충분하지 않아 파티셔닝(Partitioning) 후 조인할 때 (Recursive partitioning이 필요 없는 경우).

| 항목 | 공식
| - | -
| Block Transfers | $3(b_r + b_s)$
| Seeks | $2(\lceil \frac{b_r}{b_b} \rceil + \lceil \frac{b_s}{b_b} \rceil) + 2n_h$ (보통 Transfer만 물어봄)
- 공식 유래
    1. 파티셔닝(읽기+쓰기): $2(b_r + b_s)$
    2. 조인 수행(읽기): $1(b_r + b_s)$
    3. 합계: $3(b_r + b_s)$
- 결과 테이블을 디스크에 쓰는 비용은 보통 제외함.

### 1. 정규형의 조건

모든 함수적 종속성 $\alpha \to \beta$ (단, $\beta \not\subseteq \alpha$, 즉 자명하지 않은 경우)에 대하여

#### BCNF (Boyce-Codd Normal Form)
> "결정자는 무조건 슈퍼키여야 한다." (엄격)
- 조건: $\alpha$가 슈퍼키여야 함.
- 하나라도 슈퍼키가 아닌 놈이 결정자 노릇을 하면 위반.

#### 3NF (Third Normal Form)
> "좌변이 슈퍼키면 좋고, 아니면 우변이 후보키에라도 속해야 한다." (약간 관대)
- 조건: 다음 중 하나를 만족하면 됨.
    1. $\alpha$가 슈퍼키이다. (BCNF 조건 만족)
    2. $\beta$의 속성들이 후보키의 일부(Prime Attribute)이다.

### 2. Canonical Cover ($F_c$, 정규 커버)
- 불필요한 군더더기를 다 뺀 "가장 깔끔한 함수적 종속성 집합".
- 3NF 분해의 재료가 된다.

#### 구하는 3단계 절차
1. 우변 단일화 (Make RHS Singleton)
    - $A \to BC$ 같은 것을 $A \to B, A \to C$로 쪼갠다.
2. 불필요한 속성 제거 (Extraneous Attributes)
    - 좌변(LHS) 축소: $AB \to C$가 있는데 $A \to C$도 가능하다면, $B$는 불필요하므로 제거 ($A \to C$만 남김).
    - 우변(RHS) 축소: $A \to B, B \to C, A \to C$가 있다면, $A \to C$는 어차피 추론 가능하므로 제거.
3. 중복 종속성 제거
    - 나머지 종속성들로 유도될 수 있는 종속성은 지운다.
    - 마지막으로 다시 $A \to B, A \to C$를 $A \to BC$로 합친다.

### 3. 분해 알고리즘 (Decomposition)

#### BCNF 분해 (Top-down 방식)
> "위반하는 놈이 없어질 때까지 계속 찢는다."

1. 일단 BCNF를 위반하는 종속성 $\alpha \to \beta$를 다 찾는다.
2. 릴레이션 $R$을 두 개로 쪼갠다.
    - $R_1 = (\alpha \cup \beta)$ : 위반한 종속성 따로 뗌.
    - $R_2 = (R - \beta)$ : 나머지 (단, 결정자 $\alpha$는 양쪽에 다 있어야 연결됨).
3. 쪼개진 $R_1, R_2$가 BCNF인지 확인하고, 아니면 1번부터 다시 반복.

#### 3NF 분해 (Synthesis 방식)
> "Canonical Cover를 구해서 그대로 그걸 테이블로 만들고, 키만 챙겨준다."

1. $F_c$ (Canonical Cover)를 구한다.
2. $F_c$에 있는 각 종속성 $\alpha \to \beta$를 하나의 릴레이션 스키마 $(\alpha,~\beta)$로 만든다.
3. 키 보존 확인: 만들어진 릴레이션들 중에 원래 릴레이션의 후보키(Candidate Key)를 포함하는 놈이 없다면?
    - 후보키만 담은 릴레이션을 하나 추가한다.
4. (optional) 릴레이션 간에 포함 관계가 있으면(예: $R_1 \subseteq R_2$), 작은 놈($R_1$)을 지운다.

## $B^+$-tree 변화 과정 추적하며 그리기 문제

가장 흔한 예시인 차수 $n=4$ (최대 포인터 4개)를 기준으로 설명하겠음. (문제에서 $n$값이 다르면 숫자만 대입하쇼)

### 1. 기본 제약 조건 (Constraints)

| $P_1$ | $K_1$ | $P_2$ | ... | $P_{n-1}$ | $K_{n - 1}$ | $P_n$
| - | - | - | - | - | - | -

$n$ (Order): 노드가 가질 수 있는 최대 포인터(자식)의 수  
*(예: $n=4$이면, 포인터는 최대 4개, 키(Key)는 최대 3개)*

| 노드 타입 | 최대 키 개수 | 최소 키 개수 (Underflow 조건) | 최소 포인터(자식) 수
| - | - | - | -
| Root 노드 | $n-1$ | 1개 (데이터가 적을 때) | 2개 (트리가 자랐을 때)
| Internal (Non-Leaf) | $n-1$ | $\lceil n/2 \rceil - 1$ | $\lceil n/2 \rceil$
| Leaf 노드 | $n-1$ | $\lceil (n-1)/2 \rceil$ | -

$n=4$ 일 때 예시
- Max Key: 3개 (이거 넘으면 split해야됨)
- Min Key (Leaf): 2개 ($\lceil 3/2 \rceil = 2$) (이거보다 적으면 Merge/Borrow)
- Min Key (Internal): 1개 ($\lceil 4/2 \rceil - 1 = 1$)

### 2. 초기 상태 (Initial State)
- Empty Tree: 아무것도 없는 상태.
- First Insert: 루트 노드(Leaf이자 Root) 하나에 값이 들어감.
- 루트 노드는 일단 꽉 차기(Overflow) 전까지는 분할되지 않음.

### 3. 삽입 (Insertion) - "꽉 차면 쪼갠다"
항상 Leaf Node를 찾아가서 삽입

#### Case 1: 공간이 남을 때 (Not Full)
- 그냥 정렬 순서에 맞춰 값을 넣는다.

#### Case 2: 꽉 찼을 때 (Overflow) $\to$ 분할 (Split)
키가 $n$개가 되려는 순간 쪼갬. Leaf냐 Internal이냐에 따라 처리 방식이 다른데
1. Leaf 노드 분할 (Copy Up)
    - 노드를 두 개로 쪼갬.
    - 데이터를 절반씩 나눔.
    - 중간값(Middle Key)을 부모로 복사(Copy)해서 올림.
    - Leaf 노드끼리는 연결 리스트(Next Pointer)로 연결해야 함.
2. Internal(Non-Leaf) 노드 분할 (Push Up)
    - (leaf에서 올라온 키 때문에 부모도 꽉 찼을 때 발생)
    - 노드를 두 개로 쪼개고
    - 중간값(Middle Key)을 부모로 밀어 올림
    - Leaf랑 달리, 여기서 밀어 올린 키는 분할된 노드에 남지 않고 사라짐. (부모로 이동)

> 재귀적 반복: 부모로 올렸는데 부모도 꽉 찼다면? 부모도 Split. 이게 Root까지 가면 Root가 쪼개지면서 트리의 높이(Height)가 1 증가
작성하신 내용 중 4. 삭제 (Deletion) 파트의 Case 2가 작성하다 멈춰 있고, Leaf 병합과 Internal 병합의 차이가 명시되지 않았습니다.

앞서 우리가 나눈 대화 내용을 바탕으로 가장 정확하고 암기하기 좋은 형태로 고쳐 드립니다. (나머지 부분은 아주 훌륭합니다!)

### 4. 삭제 (Deletion) - "부족하면 빌리거나 합친다"
항상 Leaf Node에서 값을 삭제함.

#### Case 1: 최소 개수 이상일 때
- 그냥 지움. (Internal 노드에 그 키가 인덱스로 남아있어도 굳이 건드리지 않는 경우가 많음. 보통 그대로 둠).

#### Case 2: 최소 개수 미만일 때 (Underflow) $\to$ sibling 확인
삭제 후 키 개수가 최소 조건(예: $n=4$일 때 1개)으로 떨어지면 양옆 형제(Sibling)를 봄.

1. 형제가 부자일 때 (Redistribute / Borrow)
- 형제 노드에서 키 하나를 빌려옴.
- 부모 노드 처리: 형제와 나 사이의 경계가 변했으므로, 부모의 Key를 새로운 경계값으로 덮어씌움 (Update/Overwrite).

2. 형제도 가난할 때 (Merge / Coalesce)
- 형제와 나를 합침.
- 부모 노드 처리
    - Leaf 노드끼리 병합 시: 부모의 Key(구분자)를 그냥 삭제(Delete)하고 칸을 당김.
    - Internal 노드끼리 병합 시: 부모의 Key(구분자)를 밑으로 끌어내려서(Pull down) 합쳐진 노드의 가운데에 넣음.

> 재귀적 반복
> 부모의 키를 삭제하거나 끌어내렸으므로, 부모 노드의 키 개수가 줄어듦.
> 만약 부모도 최소 개수 미만이 되면? $\to$ 부모 레벨에서 다시 Borrow 혹은 Merge를 수행 (위로 전파).
>
> Root 처리
> Root가 자식이 하나밖에 안 남게 되면(Merge로 인해), Root를 없애고 그 유일한 자식을 새로운 Root로 만듦. (이때 트리의 높이가 1 감소)

## 쿼리 최적화에서 Join Ordering

### 1. 핵심 전략
"중간 결과 크기(Intermediate Result Size)가 가장 작게 나오는 순서"가 정답!
(중간에 데이터가 확 줄어야 나중에 할 일이 줄어드니까)

### 2. 크기 예측 공식 (Size Estimation)
두 릴레이션 $r$과 $s$가 공통 속성 $A$를 기준으로 조인할 때 결과 튜플 수($N_{out}$)

$$N_{out} = \frac{n_r \times n_s}{\max(V(A, r), V(A, s))}$$
- $n_r, n_s$: 각 릴레이션의 튜플 수
- $V(A, r)$: 릴레이션 $r$에서 속성 $A$의 서로 다른 값의 개수 (Distinct Values)
- 분모: 두 $V$값 중 큰 값을 넣음. (데이터가 골고루 퍼져있다는 가정 하에 선택도 계산)
- 특수 상황 (Key Join): 만약 $A$가 $r$의 Key라면? $V(A, r) = n_r$이므로 약분돼서 결과는 $n_s$가 됨. (1:N 조인에서 N쪽 개수 따라감)

### 3. 순서 결정 절차 ($R_1, R_2, R_3$ 조인 시)

1. 가능한 모든 첫 번째 조인 쌍(Pair)의 크기 계산
    - Case A: $\text{Size}(R_1 \bowtie R_2)$ 계산
    - Case B: $\text{Size}(R_2 \bowtie R_3)$ 계산
    - Case C: $\text{Size}(R_1 \bowtie R_3)$ (공통 속성 없으면 $n_1 \times n_3$라 보통 탈락)
2. 비교 및 선택
    - 계산된 튜플 수가 가장 작은 쌍을 1번 타자로 선택.
3. 최종 비용 확인 (선택 사항)
    - (1번 결과 튜플 수)와 (남은 릴레이션)을 조인했을 때 비용 계산.
    - 참고: 블록 수($b$)는 순서 정할 때보다, 정해진 순서로 실제 Disk I/O Cost 계산할 때 씀. ($b = \frac{Total\ Tuples}{Blocking\ Factor}$)

## Transactions

### 1. Conflict Serializable (충돌 직렬 가능성)
"우선순위 그래프(Precedence Graph)에 사이클이 있는가?"를 따져보면 됨.
- 절차
    1. 트랜잭션($T_1, T_2 \dots$)을 노드로 그린다.
    2. 서로 다른 트랜잭션이 같은 데이터에 접근하고, 적어도 하나가 Write인 경우(Conflict) 화살표를 그린다.
        - $T_i \to T_j$: $T_i$가 먼저 접근하고 나중에 $T_j$가 접근할 때.
    3. Cycle 있는지 확인
- 판별
    - 사이클 있음 $\to$ Not Conflict Serializable ❌
### 2. Recoverable (회복 가능성)
"남이 쓴 걸 읽었으면(Dirty Read), 그 사람이 먼저 커밋했는가?"
- 상황: $T_i$가 쓴(Write) 데이터를 $T_j$가 읽음(Read). ($T_i \to T_j$ 의존성)
- 조건: $T_i$의 Commit이 $T_j$의 Commit보다 먼저 와야 함.
- 판별
    - $C_i < C_j$ (작성자 먼저 커밋) $\to$ Recoverable ✅
    - $C_j < C_i$ (읽은 놈이 먼저 커밋) $\to$ Not Recoverable ❌
### 3. Cascadeless (비연쇄)
"커밋 안 된 데이터는 아예 읽지도 마라." (Recoverable보다 더 엄격함)
- 상황: $T_i$가 쓴(Write) 데이터를 $T_j$가 읽으려 함.
- 조건: $T_j$가 읽기(Read) 전에 $T_i$가 이미 커밋(Commit) 상태여야 함.
- 공식: $w_i(x) < c_i < r_j(x)$
- 판별
    - 읽는 시점에 작성자가 이미 커밋됨 $\to$ Cascadeless ✅
- Cascadeless이면 무조건 Recoverable이다. (역은 성립 안 함)

## Concurrency Control (Lock)

### 1. 락의 종류 5가지 (Multiple Granularity Locking)
계층 구조: DB $\to$ Relation $\to$ Page $\to$ Tuple

| 타입 | 약어 | 풀네임 | 의미 (암기용) |
| :--- | :---: | :--- | :--- |
| 의도 공유 | IS | Intention Shared | "나 밑에 가서 읽을(S) 거임. (문 잠그지 마)" |
| 의도 배타 | IX | Intention Exclusive | "나 밑에 가서 쓸(X) 거임. (문 잠그지 마)" |
| 공유 | S | Shared | "나 여기(전체) 읽을 거임. (너네들도 읽긴 해)" |
| 공유+의도배타 | SIX | Shared + IX | "나 전체 읽으면서, 가끔 밑에 가서 쓸 거임." |
| 배타 | X | Exclusive | "나 혼자 다 쓸 거임. (접근 금지)" |

### 2. 락 호환성 매트릭스 (Compatibility Matrix)
가로(열): 이미 걸려있는 락 / 세로(행): 내가 요청하는 락
(T: 가능 / F: 대기)

|  | IS | IX | S | SIX | X |
| :---: | :---: | :---: | :---: | :---: | :---: |
| IS | T | T | T | T | F |
| IX | T | T | F | F | F |
| S | T | F | T | F | F |
| SIX | T | F | F | F | F |
| X | F | F | F | F | F |

### 3. 기본 락 (S vs X) 동시성
- S-lock (공유): 읽기만 가능. S-S끼리는 공존 가능.
- X-lock (배타): 읽기+쓰기 가능. X가 끼면 무조건 대기(Conflict).
- Upgrade: S $\to$ X (읽다가 쓰기 필요할 때, 대기 없으면 가능)
- Downgrade: X $\to$ S (다 썼고 읽기만 남았을 때, 가능)

### 4. 2단계 로킹 규약 (2PL, Two-Phase Locking)
> "한 번이라도 락을 풀면(Unlock), 다시는 락을 잡을(Lock) 수 없다."

#### 단계 (Phases)
1. 확장 단계 (Growing Phase): Lock만 계속 얻는 시기. (Unlock 절대 불가)
2. 축소 단계 (Shrinking Phase): Unlock만 계속 하는 시기. (Lock 절대 불가)
    - Lock Point: 마지막 락을 획득한 순간 (트랜잭션의 정점).

#### 2PL의 종류
1. Basic 2PL: 그냥 확장/축소 규칙만 지킴. (직렬성 보장, 연쇄 복귀 위험, 교착상태 가능)
2. Strict 2PL (엄격한 2PL)
    - 규칙: 모든 X-lock(쓰기 락)은 트랜잭션이 Commit 될 때까지 갖고 있는다.
    - 장점: Cascadeless를 보장 (연쇄 복귀 안 일어남). recovery가 쉬움.
3. Rigorous 2PL (엄정한 2PL)
    - 규칙: 모든 Lock(S랑 X 다)을 Commit 될 때까지 갖고 있는다.
    - 장점: 구현하기는 제일 쉬움.

### 5. 교착상태 (Deadlock) 처리
두 트랜잭션이 서로의 락 해제를 무한히 기다리는 상태.

#### 교착상태의 예방 - 타임스탬프 기반
(늙은 트랜잭션 $T_\text{old}$, 젊은 트랜잭션 $T_\text{young}$)

1. Wait-Die (비선점) 방식
    - $T_\text{old}$가 $T_\text{young}$을 기다리면? $\to$ Wait (어른은 기다려줌)
    - $T_\text{young}$이 $T_\text{old}$를 기다리면? $\to$ Die (어린놈이 감히? 죽어라)
2. Wound-Wait (선점) 방식
    - $T_\text{old}$가 $T_\text{young}$을 기다리면? $\to$ Wound (어른이 어린놈을 죽이고 뺏음)
    - $T_\text{young}$이 $T_\text{old}$를 기다리면? $\to$ Wait (어린놈은 어른 끝날 때까지 기다림)

### 시험장 1초 요약
- 직렬성(Serializability) 보장하려면? $\to$ 2PL 쓰면 됨.
- 연쇄 복귀(Cascading Rollback) 방지하려면? $\to$ Strict 2PL (X락 끝까지 유지하는거).
- 많이 읽고 조금 쓸 때(Scan & Update)? $\to$ SIX 락.
- 데드락 발생? $\to$ 2PL 써도 발생 가능. (회피하거나 탐지해서 하나 죽여야 함).

## Recovery System

### 1. 분석 단계 (Analysis Phase)
"누가 Undo 대상인지 명단 작성"
- 방향: checkpoint $\rightarrow$ 끝 (정주행)
- 초기값: Undo-List = checkpoint { ... } 안에 적힌 트랜잭션들.
- 스캔 규칙
    - $<T_i start>$ 발견 $\rightarrow$ Undo-List에 추가.
    - $<T_i commit>$ 또는 $<T_i abort>$ 발견 $\rightarrow$ Undo-List에서 제거 (생존자임).
- 결과: 끝까지 갔을 때 Undo-List에 남아있는 놈들이 Loser(실패자)임. 얘네만 Undo 대상.

### 2. Redo 단계
"일단 사고 현장(Crash 직전) 그대로 복원"
- 방향: 가장 오래된 시작점 $\rightarrow$ 끝 (정주행)
- 대상: 로그에 적힌 모든 $<T_i, X, old, new>$ (Winner, Loser 구분 없이 싹 다).
- 행동: 변수값 $X$를 무조건 New Value로 덮어씌움.
- 이유: 디스크에 기록 안 된 내용까지 싹 다 살려놔야 함.

### 3. Undo 단계
"실패한 놈들만 골라서 뒷수습"
- 방향: 끝 $\rightarrow$ 거꾸로 (역주행)
- 대상: 1번 단계에서 확정된 Undo-List(Loser) 에 속한 트랜잭션들만
- 행동
    - $<T_i, X, old, new>$를 만나면 $X$를 Old Value로 되돌림.
    - $<T_i start>$를 만나면 $<T_i abort>$ 로그를 기록하고 Undo-List에서 지움.
- 주의: 이미 롤백된 기록(CLR) 등은 건너뜀.