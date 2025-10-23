# 8. Probabilitc Reasoning (2)

## Revisiting Probabilistic Inference
- 확률적 추론 (Probabilistic Inference) 시스템의 기본 작업은 사후 확률 분포 (Posterior Probability Distribution)를 계산하는 것, 즉 $\mathbf{P}(Q|E=e)$를 구하는 것
- $Q$: Query variables (질의 변수). 단순화를 위해 하나의 질의 변수 $X$만 고려
- $E$: Evidence variables (증거 변수). $e$: 증거 변수에 할당된 값
- $Y$: Hidden (Non-evidence, Non-query) variables (은닉 변수).
- 전체 변수 집합은 $X \cup E \cup Y$이며, 목표는 $\mathbf{P}(X|e)$를 도출

## Inference by Enumeration (열거를 통한 추론)
- 임의의 조건부 확률은 완전 결합 분포 (Full Joint Distribution)의 항들을 합산하여 계산 가능
- $\mathbf{P}(X|e) = \alpha\mathbf{P}(X, e) = \alpha \sum_{y} \mathbf{P}(X, e, y)$
- 따라서, 베이즈 넷 (Bayes net)을 사용하여 조건부 확률의 곱의 합을 계산함으로써 질의에 응답 가능
- 예시: 경보 (Alarm) 예제에서 질의 $\mathbf{P}(B|J=true, M=true)$, 은닉 변수 $A, E$
    $$P(b|j,m) = \alpha \sum_{e} \sum_{a} P(b, j, m, e, a)$$
    $$= \alpha \sum_{e} \sum_{a} P(b)P(e)P(a|b, e)P(j|a)P(m|a)$$
    $$= \alpha P(b) \sum_{e} P(e) \sum_{a} P(a|b, e)P(j|a)P(m|a)$$
- 이 방법의 계산 복잡도는 $n$개의 불리언 변수에 대해 $O(2^n)$로, 대규모 베이즈 넷 (Bayesian Networks)에 대해서는 다루기 힘듦 (intractable)

# Approximate Inference for Bayeisan Networks

## Approximate Inference (근사 추론)
- 대규모 베이즈 넷 (Bayesian networks)에 대한 정확한 추론 (Exact Inference)의 복잡도 $O(2^n)$ 문제를 해결하기 위한 Solution: 무작위 샘플링 알고리즘 (Randomized Sampling Algorithms) 또는 Monte Carlo algorithms
- Monte Carlo algorithms는 생성된 샘플의 수에 따라 정확도가 달라지는 근사 해답을 제공
- 베이즈 넷 (Bayes net)의 확률을 기반으로 무작위 이벤트 (Random Events)를 생성하고, 발견된 상이한 해답들을 카운팅 (Counting)하여 작동
- 충분한 샘플이 있으면, 참 확률 분포 (True Probability Distribution)에 임의로 가깝게 근접 가능
- 베이즈 넷 (Bayes nets)에서 사후 확률 $\mathbf{P}(X|e)$의 계산에 적용되는 샘플링 (Sampling)에 관심

## Direct Sampling Methods (직접 샘플링 방법)
- 임의의 샘플링 (Sampling) 알고리즘의 기본 요소는 알려진 확률 분포 (Probability Distribution)에서 샘플을 생성하는 것
- 변수들을 위상 순서 (Topological Order)로 차례로 샘플링
- 값이 샘플링되는 확률 분포는 이미 할당된 부모 변수 (Parents)의 값에 조건화됨

## Rejection Sampling (기각 샘플링)
- 샘플링하기 어려운 분포에서 샘플을 생성하기 위한 일반적인 방법. 쉬운 샘플링 분포가 주어졌을 때 사용
    1. 네트워크에 명시된 사전 분포 (Prior Distribution)에서 샘플을 생성
    2. 증거 (Evidence)와 일치하지 않는 모든 샘플을 기각 (Reject)
    3. 남아 있는 샘플에서 $X=x$가 발생하는 횟수를 세어 $\hat{P}(X=x|e)$를 얻음
- 추정 분포 $\hat{\mathbf{P}}(X|e)$는 증거 $e$와 일치하는 $X$의 각 값에 대한 샘플 카운트 벡터 $\mathbf{N}_{sample}(X, e)$를 정규화 (Normalizing)하여 계산
    $$\hat{\mathbf{P}}(X|e) = \alpha \mathbf{N}_{sample}(X, e) = \frac{\mathbf{N}_{sample}(X, e)}{N_{sample}(e)}$$

## Challenges in Rejection Sampling (기각 샘플링의 어려움)
- 필요한 샘플의 수 (Complexity)는 주로 수락되는 샘플의 비율에 의존
- 이 비율은 정확히 증거의 사전 확률 (Prior Probability of the Evidence) $P(e)$와 같음
- 복잡한 문제의 경우 (많은 증거 변수), 이 비율은 매우 작아짐 (Vanishingly Small)
- 예시: 지구에 1km 직경의 소행성 충돌 후 인간 생존 조건부 확률을 추정하는 경우, $P(e)$가 극도로 작아 충분한 샘플을 얻는 데 매우 오랜 시간이 걸릴 수 있으며, 이것이 Rejection Sampling의 Weakness

## Review of Bayesian Netwokrs Visualized illustrations

## Definition of Bayesian Network
- 방향 그래프 (Directed graph)
- 각 노드 (Node)는 확률 변수 (Random Variable)를 나타냄
- $X$에서 $Y$로의 화살표는 $X$가 $Y$의 부모 (Parent)임을 의미
- 각 노드 $X$는 조건부 확률 분포 $\mathbf{P}(X|\text{Parents}(X))$를 가짐

## An Appointment Example (약속 예시)
- 변수:
- Rain ({none, light, heavy})
- Maintenance ({yes, no})
- Train ({on time, delayed})
- Appointment ({attend, miss})

## Conditional Probability Tables (CPTs)
- Rain: $P(\text{Rain})$
- Maintenance: $P(\text{Maintenance}|\text{Rain})$
- Train: $P(\text{Train}|\text{Rain, Maintenance})$
- Appointment: $P(\text{Appointment}|\text{Train})$

## Computing Joint Probabilities (결합 확률 계산)
- $P(\text{light, no, delayed, miss}) = P(\text{light}) P(\text{no}|\text{light}) P(\text{delayed}|\text{light, no}) P(\text{miss}|\text{delayed})$

## Probabilistic Inference
- Query $X$: 분포를 계산할 변수
- Evidence variables $E$: 이벤트 $e$에 대해 관찰된 변수
- Hidden variables $Y$: 비-증거, 비-질의 변수
- Goal: $P(X|e)$ 계산

## Inference by Enumeration (Exact Inference)
- 예시: $P(\text{Appointment}|\text{light, no})$
    $$P(\text{Appointment}|\text{light, no}) = \alpha P(\text{Appointment, light, no})$$
    $$= \alpha [P(\text{Appointment, light, no, on time}) + P(\text{Appointment, light, no, delayed})]$$
- $\mathbf{P}(X|e) = \alpha \mathbf{P}(X, e) = \alpha \sum_{y} \mathbf{P}(X, e, y)$
- $X$: 질의 변수
- $e$: 증거
- $y$: 은닉 변수의 값에 걸친 범위
- $\alpha$: 결과를 정규화

## Approximate Inference: Sampling
- 베이즈 넷 (Bayesian Network)의 토폴로지 순서에 따라 각 변수를 샘플링하여 완전한 샘플 $\langle R=r, M=m, T=t, A=a \rangle$을 생성
- $P(\text{Train} = \text{on time})$와 같은 확률은 생성된 샘플 중 해당 이벤트가 발생한 비율로 추정
- Rejection Sampling: $P(\text{Rain}=\text{light}|\text{Train}=\text{on time})$
- 샘플 중 $\text{Train}=\text{on time}$인 샘플만 남기고, 그 중에서 $\text{Rain}=\text{light}$인 샘플의 비율을 계산하여 추정