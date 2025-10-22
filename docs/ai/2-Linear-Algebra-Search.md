# 2. Basics; Linear Algebra (2), Search (1)

# 고유값과 고유벡터 (Eigenvalues and Eigenvectors)

## 정의
- 정방 행렬 $A \in \mathbb{R}^{n \times n}$이 주어졌을 때, $\lambda \in \mathbb{C}$는 $A$의 고유값(eigenvalue), $\mathbf{x} \in \mathbb{C}^n$는 해당하는 고유벡터(eigenvector)
$$A\mathbf{x} = \lambda\mathbf{x}, \quad \mathbf{x} \neq \mathbf{0}$$
- $A$를 벡터 $\mathbf{x}$와 곱한 결과가 $\mathbf{x}$와 같은 방향을 가리키며, $\lambda$만큼 크기가 조정(scaled)된 새로운 벡터임을 의미
- 임의의 고유벡터 $\mathbf{x} \in \mathbb{C}^n$와 스칼라 $c \in \mathbb{C}$에 대해, $c\mathbf{x}$ 역시 고유벡터
    - $\mathbf{A}(c\mathbf{x}) = c(A\mathbf{x}) = c\lambda\mathbf{x} = \lambda(c\mathbf{x})$
- 일반적으로 고유벡터는 길이가 1로 정규화(normalized)된 벡터로 가정

## 고유값 계산
- 위 식을 $(\lambda I - A)\mathbf{x} = \mathbf{0},~\mathbf{x} \neq \mathbf{0}$로 재작성
- 이 식이 0이 아닌 해 $\mathbf{x}$를 갖는 것은 $\lambda I - A$가 비어 있지 않은 영 공간(nonempty nullspace)을 가질 때만 가능, 이는 $\lambda I - A$가 특이 행렬(singular)일 때, 즉 행렬식(determinant)이 0일 때
$$|\lambda I - A| = 0$$
- $|\lambda I - A|$를 $\lambda$에 대한 다항식으로 전개 ($n$차) $\Rightarrow$ 행렬 $A$의 특성 다항식 (characteristic polynomial)
- 이 다항식의 $n$개 근 $\lambda_1, \dots, \lambda_n$이 행렬 $A$의 고유값 ($\lambda_i$는 서로 다를 필요 없음.)
- 고유값 $\lambda_i$에 해당하는 고유벡터는 선형 방정식 $(\lambda_i I - A)\mathbf{x} = \mathbf{0}$을 풀어 구함.

## 고유값 및 고유벡터의 속성
- $\text{tr}(A) = \sum_{i=1}^n \lambda_i$
- $|A| = \prod_{i=1}^n \lambda_i$
- $A$의 계수($\text{rank}(A)$)는 0이 아닌 고유값의 수와 같음.
- 대각 행렬 $D = \text{diag}(d_1, \dots, d_n)$의 고유값은 대각 원소 $d_1, \dots, d_n$과 같음.

## 대칭 행렬 (Symmetric Matrices)의 고유값과 고유벡터
- 머신러닝의 대부분 경우, 대칭 실수 행렬(symmetric real matrices)을 다루며, 이 행렬들의 고유값과 고유벡터는 주목할 만한 속성을 가짐 (예: 행렬에서 양방향 그래프(bi-directional graph) 표현)
- 속성
    1. $A$의 모든 고유값 $\lambda_1, \dots, \lambda_n$은 실수
    2. 다음과 같은 고유벡터 집합 $\mathbf{u}_1, \dots, \mathbf{u}_n$이 존재
        - 모든 $i$에 대해, $\mathbf{u}_i$는 고유값 $\lambda_i$에 해당하는 고유벡터
        - $\mathbf{u}_1, \dots, \mathbf{u}_n$은 단위 벡터(unit vectors)이며 서로 직교(orthogonal)
        - $\mathbf{u}_i$들을 열 벡터로 포함하는 직교 행렬(orthogonal matrix)을 $U$라 할 때, $\Lambda = \text{diag}(\lambda_1, \dots, \lambda_n)$를 사용하여
        $$A = U\Lambda U^T$$
        - 이는 $A$ 행렬의 대각화 (diagonalization) 또는 고유 분해 (eigendecomposition)라 불림.

# 특이값 분해 (Singular Value Decomposition, SVD)

## 정의
- 특이값 분해(SVD)는 행렬을 특이 벡터(singular vectors)와 특이값(singular values)으로 분해하는 **또 다른 방법**
- 고유 분해와 유사하지만, **더 일반적으로 적용 가능**
    - 임의의 행렬 $A \in \mathbb{R}^{m \times n}$에 대해 성립

## 공식
$$A = U\Sigma V^T = \sum_{i=1}^r \mathbf{u}_i \sigma_i \mathbf{v}_i^T$$

- $A \in \mathbb{R}^{m \times n}$: 실수 값 직사각형 행렬
- $U \in \mathbb{R}^{m \times m}$: 열 벡터($\mathbf{u}_i$)가 $A A^T$의 고유벡터인 직교 행렬 (좌측 특이 벡터, left singular vectors)
- $\Sigma \in \mathbb{R}^{m \times n}$: 대각 원소($\sigma_i$)가 $A A^T$와 $A^T A$의 고유값의 제곱근인 대각 행렬
    - (특이값, singular values) ($\sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_n \ge 0$)
- $V \in \mathbb{R}^{n \times n}$: 열 벡터($\mathbf{v}_i$)가 $A^T A$의 고유벡터인 직교 행렬 (우측 특이 벡터, right singular vectors)

## SVD 및 응용: 나이브 워드 벡터 (Naïve Word Vectors)
- 윈도우 기반 동시 발생 행렬(Window based co-occurrence matrix)에 SVD를 적용
    - 윈도우 길이: 1 (일반적으로 5-10)
    - 대칭 (왼쪽 또는 오른쪽 문맥에 관계없이)
- 잠재 의미 분석 (Latent Semantic Analysis) 키워드 참고
- 동시 발생 행렬을 SVD로 분해한 후, 가장 큰 특이값에 해당하는 좌측 특이 벡터 $U$의 열들을 추출하여 단어의 워드 벡터(Word Vector)로 사용 가능
    - 예: `NumPy`를 사용한 파이썬 코드 실행 결과, 2개의 가장 큰 특이값에 해당하는 $U$의 첫 두 열을 출력하여 단어 벡터를 얻음.

# 행렬 미적분 (Matrix Calculus)

## 기울기 (The Gradient)
- 함수 $f:\mathbb{R}^{m \times n} \to \mathbb{R}$이 $m \times n$ 크기의 행렬 $A$를 입력으로 받고 실수 값을 반환한다고 가정
- $A \in \mathbb{R}^{m \times n}$에 대한 $f$의 기울기(Gradient) $\nabla_A f(A)$는 편미분 행렬로 정의
$$\nabla_A f(A) \in \mathbb{R}^{m \times n} = \begin{bmatrix} \frac{\partial f(A)}{\partial A_{11}} & \cdots & \frac{\partial f(A)}{\partial A_{1n}} \\ \vdots & \ddots & \vdots \\ \frac{\partial f(A)}{\partial A_{m1}} & \cdots & \frac{\partial f(A)}{\partial A_{mn}} \end{bmatrix}$$
- 즉, $\nabla_A f(A)_{ij} = \frac{\partial f(A)}{\partial A_{ij}}$인 $m \times n$ 행렬
- $A$가 벡터 $\mathbf{x} \in \mathbb{R}^n$인 경우, 기울기 $\nabla_{\mathbf{x}} f(\mathbf{x})$는
$$\nabla_{\mathbf{x}} f(\mathbf{x}) = \begin{bmatrix} \frac{\partial f(\mathbf{x})}{\partial x_1} \\ \frac{\partial f(\mathbf{x})}{\partial x_2} \\ \vdots \\ \frac{\partial f(\mathbf{x})}{\partial x_n} \end{bmatrix}$$
- 속성
    - $\nabla_{\mathbf{x}} (f(\mathbf{x}) + g(\mathbf{x})) = \nabla_{\mathbf{x}} f(\mathbf{x}) + \nabla_{\mathbf{x}} g(\mathbf{x})$
    - $t \in \mathbb{R}$, $\nabla_{\mathbf{x}} (t f(\mathbf{x})) = t \nabla_{\mathbf{x}} f(\mathbf{x})$

## 헤시안 (The Hessian)
- 함수 $f:\mathbb{R}^n \to \mathbb{R}$이 $\mathbb{R}^n$의 벡터를 입력으로 받고 실수 값을 반환한다고 가정
- $\mathbf{x}$에 대한 헤시안 행렬(Hessian matrix) $H$ 또는 $\nabla_{\mathbf{x}}^2 f(\mathbf{x})$는 $n \times n$ 편미분 행렬
$$H_{ij} = \frac{\partial^2 f(\mathbf{x})}{\partial x_i \partial x_j}$$
- 헤시안은 **항상 대칭**
- 유추 (Analogy)
    - 기울기는 벡터 함수에 대한 1차 도함수의 유추
    - 헤시안은 2차 도함수의 유추

## 2차 및 선형 함수의 기울기 (Gradients of Quadratic and Linear Functions)
- $\mathbf{x} \in \mathbb{R}^n,~f(\mathbf{x}) = \mathbf{b}^T \mathbf{x}~ ( \mathbf{b} \in \mathbb{R}^n )$에 대해,
    $$f(\mathbf{x}) = \sum_{i=1}^n b_i x_i, \quad \frac{\partial f(\mathbf{x})}{\partial x_k} = \frac{\partial}{\partial x_k} \sum_{i=1}^n b_i x_i = b_k$$
    - $\nabla_{\mathbf{x}} \mathbf{b}^T \mathbf{x} = \mathbf{b}$
- 2차 함수 $f(\mathbf{x}) = \mathbf{x}^T A \mathbf{x}$ ($A \in \mathbb{S}^n$)에 대해,
    - $\nabla_{\mathbf{x}} \mathbf{x}^T A \mathbf{x} = 2A\mathbf{x}$

## 최소 제곱법 (Least Squares)
- 행렬 $A \in \mathbb{R}^{m \times n}$와 벡터 $\mathbf{b} \in \mathbb{R}^m$이 주어지고, $\mathbf{b} \notin \mathcal{R}(A)$인 경우,
- $A\mathbf{x} = \mathbf{b}$를 만족하는 벡터 $\mathbf{x} \in \mathbb{R}^n$를 찾을 수 없음.
- 대신, 유클리드 norm의 제곱 $\Vert A\mathbf{x} - \mathbf{b} \Vert_2^2$으로 측정했을 때, $A\mathbf{x}$가 $\mathbf{b}$에 가능한 한 가장 가깝도록 만드는 벡터 $\mathbf{x}$를 찾고자 함
- $\Vert \mathbf{x} \Vert_2^2 = \mathbf{x}^T \mathbf{x}$를 사용하여
$$\Vert A\mathbf{x} - \mathbf{b} \Vert_2^2 = (A\mathbf{x} - \mathbf{b})^T (A\mathbf{x} - \mathbf{b}) = \mathbf{x}^T A^T A\mathbf{x} - 2\mathbf{b}^T A\mathbf{x} + \mathbf{b}^T \mathbf{b}$$
- $\mathbf{x}$에 대해 기울기를 취하고 0으로 설정
$$\nabla_{\mathbf{x}} (\mathbf{x}^T A^T A\mathbf{x} - 2\mathbf{b}^T A\mathbf{x} + \mathbf{b}^T \mathbf{b}) = \nabla_{\mathbf{x}} \mathbf{x}^T A^T A\mathbf{x} - \nabla_{\mathbf{x}} 2\mathbf{b}^T A\mathbf{x} + \nabla_{\mathbf{x}} \mathbf{b}^T \mathbf{b}$$
$$= 2A^T A\mathbf{x} - 2A^T \mathbf{b} = \mathbf{0}$$
$$\therefore \mathbf{x} = (A^T A)^{-1} A^T \mathbf{b}$$

# Search

## 문제 해결 에이전트와 탐색 (Problem-Solving Agents and Search)

- 인공지능 (Artificial Intelligence, AI): 다양한 새로운 상황에서 효과적이고 안전하게 행동하는 방법을 계산할 수 있는 지능적인 에이전트(intelligent agents) 구축에 관심
- 문제 해결 에이전트 (Problem-solving agents)
    - 취해야 할 올바른 행동이 즉시 명확하지 않을 때, 에이전트는 목표 상태(goal state)에 이르는 경로(path)를 형성하는 일련의 행동(sequence of actions)을 고려하여 미리 계획(plan ahead)할 필요가 있음.
    - 이러한 에이전트를 문제 해결 에이전트, 에이전트가 수행하는 계산 과정을 탐색 (search)이라 함
- 가장 단순한 환경 가정: 에피소드적(Episodic), 단일 에이전트(single agent), 완전 관찰 가능(fully observable), 결정론적(deterministic), 정적(static), 이산적(discrete), 알려진(known)
    - 에피소드적 (Episodic): 에이전트의 경험이 원자적 에피소드로 나뉨. 각 에피소드에서 에이전트는 지각(percept)을 받고 단일 행동을 수행

## 탐색 문제의 정의 (Definition of Search Problems)

- 탐색 문제는 다음과 같이 공식적으로 정의 가능:
    - 에이전트 (Agent): 환경을 지각하고 그 환경에 작용하는 개체(entitiy)
    - 상태 (State): 에이전트와 환경의 구성(configuration)
    - 초기 상태 (Initial state): 에이전트가 시작하는 상태
    - 행동 (Actions): 상태에서 선택할 수 있는 선택지
        - $\text{ACTIONS}(s)$: 상태 $s$에서 실행할 수 있는 행동 집합을 반환
    - 전이 모델 (Transition model): 각 행동이 무엇을 하는지 설명
        - $\text{RESULT}(s, a)$: 상태 $s$에서 행동 $a$를 수행하여 발생하는 상태를 반환
    - 상태 공간 (State space): 환경이 있을 수 있는 가능한 상태들의 집합
    - 목표 검사 (Goal test): 주어진 상태가 목표 상태인지 판별하는 방법
    - 경로 비용 (Path cost): 주어진 경로와 관련된 수치적 비용
    - 해 (Solution): 초기 상태에서 목표 상태로 이어지는 행동들의 순서(sequence)
    - 최적 해 (Optimal solution): 모든 해 중에서 가장 낮은 경로 비용을 갖는 해
- 이러한 개념들은 강화 학습(reinforcement learning)에서도 널리 사용

## 그래프 탐색 문제에 대한 naive한 접근 (Naïve Approach for Graph Search Problems)

- 초기 상태를 포함하는 프론티어(frontier)에서 시작
- 반복:
    - 프론티어가 비어 있으면, 해 없음.
    - 프론티어에서 노드를 제거
    - 노드가 목표 상태를 포함하면, 해 반환
    - 노드를 확장(expand)하고, 결과 노드를 프론티어에 추가
- 문제점: 루프(loops)가 있는 그래프에서 무한 루프 발생 가능

## 개선된 접근 (Revised Approach)

- 프론티어에 초기 상태를 추가
- 탐색 완료 집합(explored set)을 빈 상태로 시작
- 반복:
    - 프론티어가 비어 있으면, 해 없음.
    - 프론티어에서 노드를 제거
    - 노드가 목표 상태를 포함하면, 해 반환
    - 노드를 탐색 완료 집합에 추가
    - 노드를 확장하고, 결과 노드가 이미 프론티어 또는 탐색 완료 집합에 없으면 프론티어에 추가
- 프론티어의 자료 구조를 스택 (Stack)으로 사용 $\Rightarrow$ 후입선출 (Last-in, First-out, LIFO)

## 깊이 우선 탐색 알고리즘 (Depth-First Search Algorithm, DFS)

- 깊이 우선 탐색 (Depth-First Search, DFS)
    - 프론티어에서 항상 가장 깊은 노드를 확장하는 탐색 알고리즘
    - 관련 자료 구조: 스택 (Stack)

## 너비 우선 탐색 알고리즘 (Breadth-First Search Algorithm, BFS)

- 너비 우선 탐색 (Breadth-First Search, BFS)
    - 프론티어에서 항상 가장 얕은 (shallowest) 노드를 확장하는 탐색 알고리즘
    - 관련 자료 구조: 큐 (Queue)
    - 선입선출 (First-in, First-out, FIFO)

## 무정보 탐색 전략 (Uninformed Search Stratigies)

- 무정보 탐색 알고리즘 (Uninformed Search Algorithms)
    - 문제에 특정한 지식(problem-specific knowledge)을 사용하지 않는 탐색 전략
    - 상태가 목표에 얼마나 가까운지에 대한 단서(clue)가 없음.
- 예:
    - 깊이 우선 탐색 (DFS)
    - 너비 우선 탐색 (BFS)
- 한계점: BFS는 정보가 없음. (Has No Information). 목표에 가까운 상태라도 우선적으로 탐색하지 못함
- 개선 방향: 탐색 알고리즘을 더 지능적으로 만들기 $\Rightarrow$ 정보 기반 탐색 (Informed (Heuristic) Search)