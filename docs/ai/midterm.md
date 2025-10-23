## 문제 및 답안 (간결 버전)

### 확률의 3요소

##### 확률의 3요소는 무엇인가?
- 확률의 3요소는 표본 공간 (Sample Space, $\Omega$), 사건 집합 (Event Space, $\mathcal{F}$), 확률 측도 (Probability Measure, $P$)이다.

### 엔트로피(Entropy)

##### 엔트로피(Entropy)에 대해 수식과 특징 개념 등을 포함하여 서술하시오.
- 엔트로피(Entropy)는 확률 분포의 불확실성 또는 무질서도를 정량화하는 개념이다.

1.  수식: 이산 확률 변수 $X$에 대해 $H(X) = - \sum_{i} P(x_i) \log_b P(x_i)$ 이다.
2.  특징: 값이 높을수록 불확실성이 크며, 의사 결정 트리(Decision Tree)에서 정보 이득 (Information Gain) 계산에 사용된다.

### BFS(Breadth-First Search)와 DFS(Depth-First Search)

##### BFS(Breadth-First Search)와 DFS(Depth-First Search) 같은 탐색 방법을 노드로 표기하여 비교 설명하시오.
- -   BFS: 너비 우선 탐색 방식이다. 큐(Queue)를 사용하여 시작 노드에서 가까운 노드부터 탐색하며, 최단 경로 찾기에 유용하다.
-   DFS: 깊이 우선 탐색 방식이다. 스택(Stack) 또는 재귀를 사용하여 한 경로를 끝까지 탐색하며, 모든 노드 방문에 유용하다.

### Bias (편향)

##### Bias가 머신러닝(Machine Learning)에서 어떤 의미인가?
- Bias는 모델이 데이터의 복잡한 특징을 포착하지 못하고 지나치게 단순하여 발생하는 오차이다.

1.  결과: Bias가 높으면 과소적합 (Underfitting)이 발생한다.
2.  관련 개념: 편향-분산 트레이드오프 (Bias-Variance Trade-off)의 한 축이다.

### PPT(PowerPoint) 수도코드(Pseudocode) 중 빈칸 채우기

### 베이지안 네트워크(Bayesian Network)

##### 베이지안 네트워크(Bayesian Network)를 보고 $P(\cdot)$이나 $P(\cdot | \cdot)$ 값을 계산하는 문제는 어떤 방식으로 접근해야 하나?
- 네트워크의 조건부 독립 특성을 이용하며, 전체 결합 확률 분포를 각 노드의 조건부 확률 분포의 곱으로 계산한다.

1.  결합 확률: $P(X_1, \dots, X_n) = \prod_{i=1}^n P(X_i | \text{Parents}(X_i))$ 이다.
2.  계산: 주변 확률 ($P(\cdot)$)은 주변화(Marginalization)로, 조건부 확률 ($P(\cdot | \cdot)$)은 정의 $P(A | B) = P(A, B) / P(B)$를 사용하여 계산한다.

### Loss function으로 $w1$ $w0$ 구하기 증명

##### Loss function을 사용하여 $w_1$과 $w_0$을 구하는 과정을 증명하시오. (선형 회귀의 최소 제곱법 가정)
- Loss function (MSE) $L(w_1, w_0)$을 최소화하기 위해 $w_1$과 $w_0$에 대해 각각 편미분하고 결과를 0으로 둔다.

1.  $w_0$ 증명: $\frac{\partial L}{\partial w_0} = 0$ 으로부터 $w_0 = \bar{y} - w_1 \bar{x}$ 이다.
2.  $w_1$ 증명: $\frac{\partial L}{\partial w_1} = 0$ 에 $w_0$ 식을 대입하여 정리하면 $w_1 = \frac{\sum (x_i - \bar{x}) (y_i - \bar{y})}{\sum (x_i - \bar{x})^2}$ 이다.

### `assignment`와 `update`

##### `assignment`와 `update`의 뜻을 설명하시오.
- 1.  Assignment: 변수와 같은 저장 공간에 새로운 값을 할당 (저장)하는 행위이다. (예: `x = 5`)
2.  Update: 이미 값이 있는 변수나 데이터의 값을 갱신 (수정)하여 최신 상태로 만드는 행위이다. (예: 경사 하강법으로 가중치 갱신)

### 백트랙(Backtracking) 4가지 관점

##### 백트랙(Backtracking)의 4가지 관점을 설명하시오.
- 백트랙(Backtracking)은 DFS 기반으로 유망하지 않은 경로를 가지치기하며 탐색하는 기법이다.

1.  문제의 관점: 해가 존재할 수 있는 상태 공간 트리 탐색이다.
2.  알고리즘의 관점: 유망성 검사를 통해 탐색을 제어하는 방식이다.
3.  구현의 관점: 재귀 호출 및 이전 상태로 돌아가는 메커니즘을 사용한다.
4.  효율성의 관점: 가지치기 (Pruning)로 불필요한 탐색을 제거하여 효율을 높인다.