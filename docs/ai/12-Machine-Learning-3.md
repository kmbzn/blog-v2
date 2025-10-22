# 12. Machine Learning (3)

## Error Rate and Two Different Datasets (Recap)
- Optimal fit은 Error Rate를 최소화하는 hypothesis
  - Error Rate: 예제 $(x,~y)$에 대해 $h(x) \neq y$인 비율
  - 나중에 다른 Error에 다른 Cost를 부여하도록 확장 예정
- Hypothesis의 Error Rate는 Test Set을 통해 추정
  - Hypothesis 생성에 사용되는 Training Set과 평가를 위한 Test Set으로 예제를 분할

## From Error Rates to Loss Functions
- Error Rate 최소화에 대한 문제 제기
  - Spam 분류 예시: Non-spam을 Spam으로 분류하는 것이 Spam을 Non-spam으로 분류하는 것보다 더 심각한 문제
  - Error Rate가 낮더라도 Error의 종류에 따라 더 나쁜 classifier일 수 있음.
- Loss function $L(x,~y,~ \hat{y})$ 정의
  - $f(x)=y$일 때 $h(x)=\hat{y}$로 예측함으로써 잃게 되는 Utility의 양
  - $L(x,~y,~ \hat{y}) = \text{Utility result of using } y \text{ given an input } x - \text{Utility result of using } \hat{y} \text{ given an input } x$
  - 또는 간단히 $L(y, \hat{y})$로 표현
  - 예시: $L(\text{spam},~ \text{nonspam}) = 1$, $L(\text{nonspam},~ \text{spam}) = 10$
  - $L(y,~y)$는 항상 $0$

## L1 and L2 Loss Functions
- 일반적으로 작은 Error가 큰 Error보다 좋음.
- L1 Loss (Absolute-value Loss)
  - $L_1 (y,~ \hat{y}) = |y - \hat{y}|$
- L2 Loss (Squared-error Loss)
  - $L_2 (y,~ \hat{y}) = (y - \hat{y})^2$

## Generalization Loss
- 학습 Agent는 보게 될 모든 Input-output 쌍에 대한 Expected Loss를 최소화하는 Hypothesis를 선택하여 Expected Utility를 최대화
- Expected Loss 계산을 위해 예제에 대한 Prior Probability Distribution $P(X,~Y)$ 정의 필요
- Hypothesis $h$의 Expected Generalization Loss (Loss function $L$에 대한)
  - $\text{GenLoss}_L (h) = \sum_{(x,~y) \in \mathcal{E}} P(x,~y) L(y,~ h(x))$
  - $\mathcal{E}$는 가능한 모든 Input-output 쌍의 집합
- 최적의 Hypothesis $h^*$
  - $h^* = \text{argmin}_{h \in \mathcal{H}} \text{GenLoss} (h)$

## Empirical Loss
- 대부분의 경우 $P(x,~y)$는 알려져 있지 않으므로, 학습 Agent는 크기 $N$의 예제 집합 $\mathcal{E}$에 대한 Empirical Loss로 Generalization Loss를 추정
- Empirical Loss
  - $\text{EmpLoss}_{L,~\mathcal{E}} (h) = \sum_{(x,~y) \in \mathcal{E}} \frac{1}{N} L(y,~ h(x))$
- 추정된 최적 Hypothesis $\hat{h}^*$
  - $\hat{h}^* = \text{argmin}_{h \in \mathcal{H}} \text{EmpLoss}_{L,~\mathcal{E}} (h)$

## Four Reasons Why $\hat{h}^*$ May Differ from $f$
- Unrealizability
  - Hypothesis Space $\mathcal{H}$가 참 함수 $f$를 포함하지 않는 경우
  - $\mathcal{H}$가 Linear Functions 집합이고 $f$가 Quadratic Function이면, 아무리 많은 Data로도 참 $f$를 복구할 수 없음.
- Variance
  - 학습 Algorithm이 다른 예제 집합에 대해 다른 Hypothesis를 반환하는 현상
  - 문제가 Realizable한 경우, Training 예제 수가 증가함에 따라 Variance는 $0$에 가까워짐.
- Noise
  - $f$가 Nondeterministic 또는 Noisy하여 동일한 $x$에 대해 다른 $f(x)$ 값을 반환할 수 있음.
  - Noise는 정의상 예측할 수 없음 (특성화만 가능)
- Computational Complexity
  - $\mathcal{H}$가 복잡한 함수이고 Hypothesis Space가 큰 경우, 모든 가능성을 체계적으로 탐색하는 것이 계산상 어려울 수 있음.
  - 탐색은 공간의 일부를 탐색하여 합리적으로 좋은 Hypothesis를 반환할 수 있지만, 항상 최적의 것을 보장할 수는 없음.

## Regularization
- Occam's Razor에 기반하여, 적절한 성능으로 문제를 해결하면서 가능한 한 Simple한 Hypothesis를 찾고자 함.
- Total Cost를 최소화하는 Hypothesis를 탐색하는 접근 방식
  - Total Cost는 Empirical Loss와 Hypothesis의 Complexity의 가중 합
  - $\text{Cost}(h) = \text{EmpLoss}(h) + \lambda \text{Complexity}(h)$
  - $\hat{h}^* = \text{argmin}_{h \in \mathcal{H}} \text{Cost}(h)$
  - $\lambda$는 Hyperparameter
- 복잡한 Hypothesis에 명시적으로 페널티를 부과하는 이 과정을 Regularization이라 함.
  - 더 Regular한 (규칙적인) 함수를 찾고자 함.
  - Loss function ($L1$ 또는 $L2$)과 Complexity Measure인 Regularization Function, 두 가지 선택을 하는 것

## Hyperparameter Tuning

### Hand-tuning
  - 과거 경험을 바탕으로 Parameter 값을 추측, Model 학습, Validation Data로 성능 측정, 분석 후 새로운 Parameter 값을 직관적으로 제안
  - 만족스러운 성능을 얻을 때까지 반복

### Grid-search
  - Hyperparameter의 수가 적고 각각 가능한 값의 수가 적을 경우 적합
  - 모든 값의 조합을 시도하고 Validation Data에서 가장 잘 수행되는 것을 확인

### Random search
  - 가능한 값의 조합이 너무 많은 경우, 모든 가능한 Hyperparameter 설정 집합에서 Uniform하게 Sampling하여 시간과 계산 자원을 할애할 수 있는 만큼 반복

### Bayesian optimization
  - Hyperparameter 값을 선택하는 작업을 Machine Learning 문제 자체로 간주
  - Hyperparameter 값의 Vector $\mathbf{x}$를 Input으로, 해당 Hyperparameter로 구축된 Model의 Validation Set에 대한 Total Loss $y$를 Output으로 생각
  - Loss $y$를 최소화하는 함수 $y = f(\mathbf{x})$를 찾는 것을 목표로 함.

### Population-based Training (PBT)
  - Random search를 사용하여 각각 다른 Hyperparameter 값을 가진 Model Population을 훈련하는 것으로 시작
  - 다음 세대의 Model은 이전 세대의 성공적인 값과 Genetic Algorithms에서처럼 Random Mutation을 통해 Hyperparameter를 선택하여 훈련
  - Random Search + Bayesian Optimization의 결합