# 10. Probabilitc Reasoning (3)

## Approximate Inference
- Monte Carlo algorithms는 생성된 샘플 수에 따라 정확도가 달라지는 근사적인 (approximate) 해답을 제공
  - Monte Carlo algorithms는 정확한 계산이 어려운 양을 추정하기 위해 많은 과학 분야에서 사용
- Bayes net의 확률을 기반으로 랜덤 이벤트를 생성하고, 이 랜덤 이벤트에서 발견된 다양한 해답을 계산하여 작동
  - 충분한 샘플을 통해, 참 확률 분포 (true probability distribution)를 임의로 가깝게 복구할 수 있음
  - $P(X|e)$와 같은 Bayes net의 사후 확률 (posterior probabilities) 계산에 적용되는 샘플링에 관심

## Direct Sampling Methods
- 모든 샘플링 알고리즘의 기본 요소는 알려진 확률 분포에서 샘플을 생성하는 것
- 변수들을 위상 정렬 (topological order) 순서로 차례로 샘플링
  - 값이 샘플링되는 확률 분포는 이미 해당 변수의 부모 (parents)에게 할당된 값에 조건화됨 (conditioned on)
- Pseudocode 

## Notations
- $S_{PS}(x_1, \ldots, x_n)$는 `PRIOR-SAMPLE` 알고리즘에 의해 특정 이벤트가 생성될 확률
  - $S_{PS}(x_1, \ldots, x_n) = \Pi_{i=1}^n P(x_i | \text{parents}(X_i))$
  - 각 샘플링 단계는 부모 값에만 의존
  - 이는 Bayes net에 따른 이벤트의 확률, 즉 $S_{PS}(x_1, \ldots, x_n) = P(x_1, \ldots, x_n)$
- 총 샘플 수 $N$개
  - $N_{PS}(x_1, \ldots, x_n)$은 샘플 집합에서 지정된 이벤트 $x_1, \ldots, x_n$가 발생한 횟수
- 이 횟수는, 전체 샘플 수에 대한 분율로서, 샘플링 확률에 따른 기대값으로 수렴
  - $\lim_{N \to \infty} \frac{N_{PS}(x_1, \ldots, x_n)}{N} = S_{PS}(x_1, \ldots, x_n) = P(x_1, \ldots, x_n)$
- 근사 등식 ("$\approx$")은 추정된 확률이 대규모 샘플 극한 (large-sample limit)에서 정확해짐을 나타냄
  - 이러한 추정치 (estimate)는 일관적 (consistent)이라고 함
  - 예: $m \le n$인 부분적으로 지정된 이벤트 $x_1, \ldots, x_m$의 확률에 대한 일관적 추정치를 다음과 같이 생성할 수 있음
    - $P(x_1, \ldots, x_m) \approx N_{PS}(x_1, \ldots, x_m) / N$
- 추정된 확률을 나타내기 위해 $\hat{P}$ ("P-hat")를 사용
  - 예: 1,000개의 샘플을 생성했고, 그 중 511개가 `Rain` = $true$를 가지면, $\hat{P}(\text{Rain} = true) = 0.511$

## Rejection Sampling
- Rejection sampling (기각 샘플링)은 쉽게 샘플링할 수 있는 분포가 주어졌을 때 샘플링하기 어려운 분포에서 샘플을 생성하는 일반적인 방법.
  - 조건부 확률 $P(X|e)$를 계산하는 데 사용될 수 있음
- 작동 방식
  1. 먼저, 네트워크에 의해 지정된 사전 분포 (prior distribution)에서 샘플을 생성
  2. 그런 다음, 증거 $e$와 일치하지 않는 모든 샘플을 기각 (reject)
  3. 마지막으로, $\hat{P}(X=x|e)$ 추정치는 남아있는 샘플에서 $X=x$가 발생하는 횟수를 세어 얻음
- 추정 분포 $\hat{P}(X|e)$는 증거 $e$와 일치하는 $X$의 각 값에 대한 샘플 횟수 벡터 $N_{PS}(X, e)$를 정규화하여 계산
  - $\hat{P}(X|e) = \alpha N_{PS}(X, e) = \frac{N_{PS}(X, e)}{N_{PS}(e)}$
  - $P(x_1, \ldots, x_m) \approx N_{PS}(x_1, \ldots, x_m) / N$로부터, 다음이 됨
    - $\hat{P}(X|e) \approx \frac{P(X, e)}{P(e)} = P(X|e)$
- Rejection sampling 알고리즘 

```
function REJECTION-SAMPLING(X, e, bn, N) returns an estimate of P(X | e)
inputs: X, the query variable
        e, observed values for variables E
        bn, a Bayesian network
        N, the total number of samples to be generated
local variables: C, a vector of counts for each value of X, initially zero

for j = 1 to N do
    x ← PRIOR-SAMPLE(bn)
    if x is consistent with e then
        C[j] ← C[j]+1 where x_j is the value of X in x
return NORMALIZE(C)
```

## Challenges in Rejection Sampling
- Rejection sampling의 복잡성은 주로 수용되는 (accepted) 샘플의 비율에 따라 달라지며, 이 비율은 정확히 증거의 사전 확률 $P(e)$와 같음
- 복잡한 문제의 경우, 많은 증거 변수 (evidence variables)가 있으면 이 비율은 매우 작아짐 (vanishingly small)
  - 이는 대부분의 샘플이 기각되어 추정을 위한 유효 샘플이 거의 남지 않기 때문에 Rejection sampling의 약점

## Importance Sampling
- Importance sampling (중요도 샘플링)은 또 다른 분포 $Q$로부터의 샘플을 사용하여 분포 $P$로부터 샘플링하는 효과를 모방하는 것을 목표로 함
  - 각 샘플 $x$를 셀 때 $\frac{P(x)}{Q(x)}$ (weight, 가중치라고도 함)인 보정 계수 (correction factor)를 적용하여 해답이 극한에서 정확함을 보장
  - 실제로는 너무 어려워서 증거에 조건화된 참 사후 분포 $P(z|e)$에서 직접 샘플링하는 대신, 쉬운 분포에서 샘플링하고 필요한 보정 (corrections)을 적용
- Importance sampling 작동 원리:
  - 비증거 변수 (nonevidence variables)를 $Z$라고 가정 $P(z|e)$에서 직접 샘플링할 수 있다면 다음과 같이 추정치를 구성할 수 있음
    - $\hat{P}(z|e) = \frac{N_P(z)}{N} \approx P(z|e)$, 여기서 $N_P(z)$는 $P$로부터 샘플링했을 때 $Z=z$인 샘플 수
  - 대신 $Q(z)$에서 샘플링한다고 가정하면, 추정치는 보정 계수를 포함
    - $\hat{P}(z|e) = \frac{N_Q(z)}{N} \cdot \frac{P(z|e)}{Q(z)} \approx Q(z) \frac{P(z|e)}{Q(z)} = P(z|e)$
  - 따라서, 사용되는 샘플링 분포 $Q$와 관계없이 추정치는 올바른 값으로 수렴 (단, $P(z|e)$가 0이 아닌 모든 $z$에 대해 $Q(z)$는 0이 아니어야 함)
- 보정 계수는 과대 샘플링 (oversampling) 또는 과소 샘플링 (undersampling)을 보상
- 사용하기 쉬우면서도 참 사후 분포 $P(z|e)$에 최대한 가까운 $Q$를 원함 가장 일반적인 접근 방식은 Likelihood weighting

## Likelihood Weighting
- Likelihood weighting (우도 가중) 알고리즘은 증거 변수 $E$의 값을 고정하고, 모든 비증거 변수를 위상 정렬 순서로 샘플링하며, 각 변수는 부모에 조건화됨
  - 이 알고리즘에 의해 생성된 샘플링 분포를 $Q_{LW}$라고 함 비증거 변수가 $Z = \{Z_1, \ldots, Z_k\}$인 경우, $Q_{LW}(z) = \Pi_{i=1}^k P(z_i | \text{parents}(Z_i))$
  - $\hat{P}(z|e) = \frac{N_{LW}(z)}{N} \cdot \frac{P(z|e)}{Q_{LW}(z)} = \frac{N_{LW}(z)}{N} \cdot w(z)$
- 각 샘플에 대해 $Q_{LW}$로부터 생성된 가중치 $w(z)$를 계산해야 함
  - 가중치는 $w(z) = \frac{P(z|e)}{Q_{LW}(z)} = \alpha \frac{P(z, e)}{Q_{LW}(z)}$로 정의됨
  - $P(z, e)$는 Bayes net에서 $z$와 $e$의 결합 확률
  - $w(z) = \alpha \frac{\Pi_{i=1}^k P(z_i | \text{parents}(Z_i)) \Pi_{j=1}^m P(e_j | \text{parents}(E_j))}{\Pi_{i=1}^k P(z_i | \text{parents}(Z_i))} = \alpha \Pi_{j=1}^m P(e_j | \text{parents}(E_j))$
- 가중치는 부모가 주어진 증거 변수들의 조건부 확률 (conditional probabilities)의 곱
  - 증거의 확률은 일반적으로 우도 (likelihoods)라고 불리므로, Likelihood weighting이라는 이름이 붙음
- Likelihood weighting 알고리즘 

```
function LIKELIHOOD-WEIGHTING(X, e, bn, N) returns an estimate of P(X | e)
inputs: X, the query variable
        e, observed values for variables E
        bn, a Bayesian network specifying joint distribution P(X_1,...,X_n)
        N, the total number of samples to be generated
local variables: W, a vector of weighted counts for each value of X, initially zero

for j = 1 to N do
    x, w ← WEIGHTED-SAMPLE(bn, e)
    W[j] ← W[j]+w where x_j is the value of X in x
return NORMALIZE(W)

function WEIGHTED-SAMPLE(bn, e) returns an event and a weight
    w ← 1; x ← an event with n elements, with values fixed from e
    for i = 1 to n do
        if X_i is an evidence variable with value x_i_j in e
            then w ← w × P(x_i_j | parents(X_i))
        else x[i] ← a random sample from P(X_i | parents(X_i))
    return x, w
```

## Lawn Condition Example
- Query: $P(\text{Rain} | \text{Cloudy} = true, \text{WetGrass} = true)$
- Process 예시:
  1. 가중치 $w$를 $1.0$으로 설정
  2. `Cloudy`는 증거 변수 ($true$)이므로, $w \leftarrow w \times P(\text{Cloudy} = true) = 0.5$
  3. `Sprinkler`는 비증거 변수이므로 $P(\text{Sprinkler} | \text{Cloudy} = true)$에서 샘플링 (예: $false$)
  4. `Rain`은 비증거 변수이므로 $P(\text{Rain} | \text{Cloudy} = true)$에서 샘플링 (예: $true$)
  5. `WetGrass`는 증거 변수 ($true$)이므로, $w \leftarrow w \times P(\text{WetGrass} = true | \text{Sprinkler} = false, \text{Rain} = true) = 0.5 \times 0.9 = 0.45$
- 결과: 이벤트 $[true, false, true, true]$는 가중치 $0.45$를 가지며, `Rain` = $True$로 집계

## Pros and Cons of Likelihood Weighting
- Likelihood weighting은 생성된 모든 샘플을 사용하기 때문에 Rejection sampling보다 훨씬 효율적일 수 있음
- 그러나, 증거 변수의 수가 증가함에 따라 성능 저하 (degradation in performance)를 겪음
  - 대부분의 샘플이 매우 낮은 가중치를 가지므로, 가중치가 부여된 추정치는 증거에 극히 미미한 우도를 부여하는 아주 작은 비율의 샘플에 의해 지배되기 때문
  - $w(z) = \alpha \Pi_{i=1}^m P(e_i | \text{parents}(E_i))$

## Visualized Illustrations for Likelihood Weighting
- Likelihood Weighting은 증거 변수의 값을 고정하는 것으로 시작
- Bayesian Network의 조건부 확률을 사용하여 비증거 변수를 샘플링
- 각 샘플에 우도 (모든 증거의 확률)를 가중치로 부여

## Python Programming for Bayesian Networks
- `model.py`, `likelihood.py`, `inference.py`, `sample.py` 파일의 내용 제시

## `likelihood.py`
- Query 예시:
$$P(R=none, M=no, T=on~time, A=attend)$$
$$= P(R=none) P(M=no | R=none)$$
$$P(T=on~time | R=none, M=no) P(A=attend | T=on~time)$$
$$= 0.7 \times 0.6 \times 0.9 \times 0.9 = 0.3402$$

## `inference.py`
- Verification by example
  - $P(\text{rain} = none | \text{train} = delayed) = \alpha P(\text{rain} = none, \text{train} = delayed) = 0.46 \ldots$
  - $P(\text{rain} = light | \text{train} = delayed) = \alpha P(\text{rain} = light, \text{train} = delayed) = 0.30 \ldots$
  - $P(\text{rain} = heavy | \text{train} = delayed) = \alpha P(\text{rain} = heavy, \text{train} = delayed) = 0.23 \ldots$
  - 여기서 $\alpha = 4.6948 \ldots$