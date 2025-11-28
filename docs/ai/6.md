# 6. Probability

## 확률 이론 (Probability Theory)
- Probability theory는 불확실성 (uncertainty)에 대한 연구
    - 불확실한 진술을 나타내기 위한 수학적 Framework.
    - 불확실성을 정량화하고 새로운 불확실한 진술을 도출하기 위한 Axiom을 제공
- AI 응용에서 확률 이론의 주요 사용 방식
    1. AI 시스템이 추론해야 하는 방법 (Laws of probability)을 알려주므로, 확률 이론을 사용하여 도출된 다양한 표현을 계산하거나 근사화하도록 알고리즘을 설계.
    2. 제안된 AI 시스템의 동작을 이론적으로 분석하기 위해 확률 (probability) 및 통계 (statistics) 사용 가능

## 빈도주의 대 베이즈주의 (Frequentist vs. Bayesian)
- Frequentist probability
    - 확률은 여러 번 발생할 수 있는 Events의 장기적인 빈도 (long run frequencies)를 나타냄.
    - Example: Coin을 여러 번 Toss하면 약 절반의 확률로 Heads가 나올 것으로 예상.
- Bayesian probability
    - 확률은 어떤 것에 대한 우리의 불확실성 (uncertainty)이나 무지 (ignorance)를 정량화하는 데 사용.
    - 반복적인 시도 (repeated trials)보다는 근본적으로 정보 (information)와 관련.
    - Example: 북극 Ice cap이 2030년까지 녹을 확률을 계산하고자 할 때, 이 Event는 0회 또는 1회 발생하지만 반복적으로 발생할 수 없음. 그럼에도 불구하고 이 Event에 대한 우리의 불확실성을 정량화할 수 있어야 함.

## 확률이 필요한 이유 (Why Probability?)
- 많은 Computer Science 분야는 주로 전적으로 결정론적 (deterministic)이고 확실한 Entity를 다룸.
    - Programmer는 일반적으로 CPU가 각 기계어 Instruction을 flawlessly 실행할 것이라고 안전하게 가정 가능
- 반면, Machine Learning은 항상 불확실한 Quantities를 다루어야 하며, 때로는 확률적 (stochastic, non-deterministic) Quantities도 다룰 필요가 있음.
    - 믿음의 정도 (degree of belief)를 나타내기 위해 확률 사용.
- 확률은 불확실성을 다루기 위한 Logic의 확장으로 볼 수 있음.
    - Logic은 일련의 Proposition이 True 또는 False라고 가정될 때, 어떤 Proposition이 True 또는 False로 함축되는지 결정하기 위한 Formal rule Set을 제공
    - Probability theory는 다른 Proposition의 Likelihood가 주어졌을 때, 한 Proposition이 True일 Likelihood를 결정하기 위한 Formal rule Set을 제공

## 확률의 요소 (Elements of Probability)
- 집합에 대한 확률을 정의하기 위해 필요한 몇 가지 기본 요소
    - Sample space $\Omega$: Random experiment의 모든 Outcomes의 집합 (The set of all possible worlds).
        - Greek letter $\Omega$는 Sample space를 나타내는 데 사용되며, $\omega$는 Space의 Element (특정 possible worlds)를 나타냄.
    - Events의 집합 (Event space) $\mathcal{F}$: Element $A \in \mathcal{F}$ (Events라고 함)가 $\Omega$의 Subset인 집합 (즉, $A \subset \Omega$는 Experiment의 가능한 Outcomes의 Collection).
    - Probability measure (Probability model): 다음 속성을 만족하는 함수 $P: \mathcal{F} \to \mathbb{R}$.
        - $P(A) \ge 0$, $\forall A \in \mathcal{F}$ ($0 \le P(\omega) \le 1$ for every $\omega$)
        - $P(\Omega) = 1$ ($\sum_{\omega \in \Omega} P(\omega) = 1$)
        - If $A_1, A_2, \dots$ are disjoint events, then $P(\cup_i A_i) = \sum_i P(A_i)$.
        - 이 세 가지 속성을 Axioms of Probability라고 함.
    - Notation c.f.: $P(A)$ vs. $Pr(A)$.

## 확률의 요소: Example
- 6면체 Dice를 Toss하는 Event를 고려
    - Sample space는 $\Omega = \{1,~2,~3,~4,~5,~6\}$.
- 이 Sample space에 대해 서로 다른 Event space를 정의 가능
    - Example: 가장 간단한 Event space는 trivial Event space $\mathcal{F} = \{\emptyset,~\Omega\}$.
    - 또 다른 Event space는 $\Omega$의 모든 Subset의 집합
- 첫 번째 Event space의 경우, 위의 요구 사항을 충족하는 Unique Probability measure는 $P(\emptyset) = 0,~P(\Omega) = 1$로 주어짐
- 두 번째 Event space의 경우, 유효한 Probability measure 중 하나는 Event space의 각 집합의 확률을 $\frac{i}{6}$로 할당하는 것. 여기서 $i$는 해당 집합의 Elements 수. Example: $P(\{1,~2,~3,~4\}) = \frac{4}{6}$ 및 $P(\{1,~2,~3\}) = \frac{3}{6}$.

## Random Variables
- 10개의 Coin을 Toss하고 Heads가 나온 Coin의 수를 알고 싶은 Experiment를 고려
    - Sample space $\Omega$의 Elements는 Heads와 Tails의 10-길이 Sequences.
    - Example: $\omega^* = <H,~H,~T,~H,~T,~H,~H,~T,~T,~T> \in \Omega$.
- 그러나 실제로는 Heads와 Tails의 특정 Sequence를 얻을 확률에 대해 신경 쓰지 않음.
    - 대신, 우리는 일반적으로 Outcomes의 Real-valued function, 예를 들어 10번의 Toss 중에서 나타나는 Heads의 수에 대해 신경 씀.
    - 이러한 Function을 Random variable이라고 함.
- Random variable은 Random하게 다른 값을 취할 수 있는 Variable.
    - Formal하게, Random variable $X$는 함수 $X: \Omega \to \mathbb{R}$.
    - 일반적으로 Random variable 자체는 대문자 ($X$)로 표기
    - 취할 수 있는 값은 소문자 (e.g., $x_1,~x_2$)로 나타냄.

## Discrete vs. Continuous Random Variables
- Discrete random variable
    - 유한하거나 셀 수 있게 무한한 (countably infinite) 수의 State를 갖는 Random variable.
    - Random variable $X$가 10번의 Toss $\omega$ Sequence에서 발생하는 Heads의 수를 나타낸다고 가정
    - 이 경우 $X$는 유한한 수의 값만 취할 수 있으므로 Discrete random variable.
- Continuous random variable
    - Real value와 관련된 Random variable.
    - $X$가 Radioactive particle이 Decay하는 데 걸리는 시간의 양을 나타내는 Random variable이라고 가정
    - 이 경우 $X$는 무한한 수의 가능한 값을 취하므로 Continuous random variable.

## 확률 분포 (Probability Distributions)
- Random variable은 가능한 State에 대한 설명일 뿐.
    - 각 State가 얼마나 가능성이 높은지 지정하는 Probability distribution과 결합되어야 함.
- Probability distribution은 Random variable 또는 Random variable Set이 가능한 각 State를 취할 Likelihood에 대한 설명.

## Discrete Variables 및 확률 질량 함수 (Probability Mass Functions, PMF)
- Discrete variable에 대한 Probability distribution은 Probability mass function (PMF)을 사용하여 설명 가능
    - 일반적으로 Probability mass function은 대문자 $P$로 표기
- Probability mass function은 Random variable의 State에서 해당 Random variable이 해당 State를 취할 확률로 Mapping.
    - $X=x$일 확률은 $P(X=x)$ 또는 $P(x)$로 표기
    - 때로는 Variable을 먼저 정의한 다음, 따르는 Distribution을 지정하기 위해 $\sim$ Notation 사용: $X \sim P(X)$.
- 많은 Variable에 대한 Probability distribution은 Joint probability distribution으로 알려져 있음.
    - $P(X=x,~Y=y)$는 $X=x$이고 $Y=y$일 확률을 동시에 나타냄.
    - 간결하게 $P(x,~y)$로 표기
- Random variable $\mathbf{X}$에 대한 Probability mass function이 되기 위해, 함수 $\mathbf{P}$는 다음 속성을 만족해야 함.
    - $P$의 Domain은 $X$의 모든 가능한 State의 집합이어야 함.
    - $\forall x \in X,~0 \le P(x) \le 1$. 불가능한 Event의 확률은 0이며, 어떤 State도 이보다 확률이 낮을 수 없음. 마찬가지로, 발생이 보장된 Event의 확률은 1이며, 어떤 State도 이보다 발생 가능성이 클 수 없음.
    - $\sum_{x \in X} P(x) = 1$. 이 속성을 Normalized라고 함. 이 속성이 없으면, 여러 Event 중 하나가 발생하는 확률을 계산하여 1보다 큰 확률을 얻을 수 있음.
- Example
    - $k$개의 서로 다른 State를 갖는 Single discrete random variable $X$. PMF를 $P(X=x_i) = \frac{1}{k}$로 설정하여 $X$에 Uniform distribution을 배치 가능
    - $\sum_x P(X=x_i) = \sum_i \frac{1}{k} = \frac{k}{k} = 1$.

## Continuous Variables 및 확률 밀도 함수 (Probability Density Functions, PDF)
- Continuous random variable을 다룰 때, Probability distribution은 Probability density function (PDF)을 사용하여 설명.
- Probability density function이 되기 위해, 함수 $\mathbf{p}$는 다음 속성을 만족해야 함.
    - $p$의 Domain은 $X$의 모든 가능한 State의 집합이어야 함.
    - $\forall x \in X,~p(x) \ge 0$.
    - $\int p(x) dx = 1$.
- Probability density function $p(x)$는 특정 State의 확률을 직접 제공하지 않음. 대신, Volume $\delta x$를 갖는 무한소 영역 (infinitesimal region) 내에 놓일 확률은 $p(x) \delta x$로 주어짐
    - Density function을 Integrate하여 일련의 점의 실제 Probability mass를 찾을 수 있음.
    - e.g., $\int_a^b p(x) dx$.

## 주변 확률 (Marginal Probability)
- 때때로 우리는 Variable Set에 대한 Probability distribution을 알고 있으며, 그 중 Subset에 대한 Probability distribution을 알고 싶어 함.
    - Subset에 대한 Probability distribution을 Marginal probability distribution이라고 함.
    - "Marginal probability"라는 이름은 종이 위에서 Marginal probability를 계산하는 과정에서 유래.
- Discrete random variable $\mathbf{X}$와 $\mathbf{Y}$가 있고 $P(\mathbf{X}, \mathbf{Y})$를 알고 있다고 가정 Sum rule을 사용하여 $P(\mathbf{X})$를 찾을 수 있음.
$$\forall x \in X,~P(X=x) = \sum_y P(X=x,~Y=y)$$
- Continuous variable의 경우,
$$p(x) = \int p(x,~y) dy$$

## 조건부 확률 (Conditional Probability)
- Unconditional (prior) probability $P(X)$
    - 다른 정보가 없을 때 믿음의 정도 (degree of belief)를 나타냄.
- 우리는 종종 다른 Event가 발생했다는 가정 하에 어떤 Event가 발생할 확률에 관심이 있음. $\Rightarrow$ Conditional probability!
    - $Y=y$일 때 $X=x$일 Conditional probability는 다음과 같이 표기:
    $$P(Y=y~|~X=x) = \frac{P(Y=y,~X=x)}{P(X=x)}$$
    - Conditional probability는 $P(X=x) > 0$일 때만 정의됨.
    - $X$는 Evidence라고 불림.

## 조건부 확률의 연쇄 법칙 (The Chain Rule of Conditional Probabilities)
- 많은 Random variable에 대한 모든 Joint probability distribution은 오직 하나의 Variable에 대한 Conditional distribution으로 분해될 수 있음.
    $$P(x_1,~x_2,~\dots,~x_n) = P(x_1) \prod_{i=2}^n P(x_i~|~x_1,~\dots,~x_{i-1})$$
    - 이를 Chain rule 또는 Product rule of probability라고 함.
- Conditional probability의 정의에서 즉시 도출됨.
    - $P(a,~b,~c) = P(a~|~b,~c) P(b,~c)$
    - $P(b,~c) = P(b~|~c) P(c)$
    - $P(a,~b,~c) = P(a~|~b,~c) P(b~|~c) P(c)$

## 독립 및 조건부 독립 (Independence and Conditional Independence)
- 두 Random variable $\mathbf{X}$와 $\mathbf{Y}$가 Independent하다면, Probability distribution은 두 Factor의 곱으로 표현될 수 있음.
    $$\forall x \in X,~y \in Y,~P(X=x,~Y=y) = P(X=x) P(Y=y)$$
    - Independence는 하나의 Event를 관찰하는 것이 다른 Event의 확률에 아무런 영향을 미치지 않는다는 것을 의미하는 것과 동등.
- 두 Random variable $\mathbf{X}$와 $\mathbf{Y}$는 Random variable $\mathbf{Z}$가 주어졌을 때 Conditional independent하다면, Conditional probability distribution over $X$ and $Y$가 $z$의 모든 값에 대해 이러한 방식으로 Factorize됨.
$$\forall x \in X,~y \in Y,~z \in Z,~P(X=x,~Y=y~|~Z=z) = P(X=x~|~Z=z) P(Y=y~|~Z=z)$$
- Notation
    - $X \perp Y$는 $X$와 $Y$가 Independent임을 의미.
    - $X \perp Y~|~Z$는 $Z$가 주어졌을 때 $X$와 $Y$가 Conditional independent임을 나타냄.

## 기대값 (Expectation)
- Probability distribution $P(X)$에 대한 함수 $f(x)$의 Expectation 또는 Expected value는 $x$가 $P$에서 추출될 때 $f$가 취하는 평균 또는 Mean value.
    - Discrete variable의 경우,
    $$\mathbb{E}_{x \sim P(X)} [f(x)] = \sum_x P(x) f(x)$$
    - Continuous variable의 경우,
    $$\mathbb{E}_{x \sim p(X)} [f(x)] = \int p(x) f(x) dx$$
    - Simplification: $\mathbb{E}_x [f(x)]$, $\mathbb{E}[f(x)]$.
- Expectations는 Linear함.
    $$\mathbb{E}_x [\alpha f(x) + \beta g(x)] = \alpha \mathbb{E}_x [f(x)] + \beta \mathbb{E}_x [g(x)]$$

## 분산 및 공분산 (Variance and Covariance)
- Variance는 Random variable $\mathbf{X}$의 함수 값이 Probability distribution에서 $x$의 다른 값을 Sampling할 때 얼마나 많이 변하는지에 대한 측정을 제공
    $$\text{Var}(f(x)) = \mathbb{E}[(f(x) - \mathbb{E}[f(x)])^2]$$
    - Variance의 Square root는 Standard deviation으로 알려져 있음.
    - Variance가 낮을 때, $f(x)$의 값은 Expected value 근처에 Cluster됨.
- Covariance는 두 값이 서로 얼마나 Linear하게 관련되어 있는지, 그리고 이러한 Variable의 Scale에 대한 감각을 제공
    $$\text{Cov}(f(x),~g(y)) = \mathbb{E}[(f(x) - \mathbb{E}[f(x)]) (g(y) - \mathbb{E}[g(y)])]$$
    - Covariance의 High absolute value는 값이 매우 많이 변하고 동시에 각 Mean에서 멀리 떨어져 있음을 의미.
    - Covariance의 Sign이 Positive이면, 두 Variable 모두 동시에 상대적으로 높은 값을 취하는 경향이 있음.

## 일반적인 확률 분포 (Common Probability Distributions)
- Bernoulli Distribution
    - Single binary random variable에 대한 Distribution.
    - Random variable이 1과 같을 확률을 제공하는 Single parameter $\phi \in [0,~1]$에 의해 제어됨.
    - $P(X=1) = \phi$.
    - $P(X=0) = 1 - \phi$.
    - $P(X) = \phi^x (1 - \phi)^{1-x}$.
    - $\mathbb{E}_x [X] = \phi$.
    - $\text{Var}_x [X] = \phi(1 - \phi)$.
- Multinoulli Distribution
    - $k$개의 서로 다른 State를 갖는 Single discrete variable에 대한 Distribution. 여기서 $k$는 유한.
    - Multinoulli distribution은 Vector $\mathbf{p} \in [0,~1]^{k-1}$로 Parameterize되며, $p_i$는 $i$ 번째 State의 확률을 제공

## 일반적인 확률 분포 (Common Probability Distributions)
- Gaussian Distribution (Normal distribution)
    - Real number에 대한 가장 일반적으로 사용되는 Distribution.
    $$\mathcal{N}(x;~\mu,~\sigma^2) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp \left( -\frac{1}{2\sigma^2} (x - \mu)^2 \right)$$
    - Real number에 대한 Distribution이 어떤 형태를 취해야 하는지에 대한 사전 지식이 없을 때, Normal distribution은 두 가지 주요 이유로 좋은 Default choice임.
        1. 우리가 모델링하고자 하는 많은 Distribution은 실제로 Normal distribution에 가까움. Central limit theorem은 많은 Independent random variable의 합이 대략적으로 Normally distributed임을 보여줌.
        2. 동일한 Variance를 갖는 모든 가능한 Probability distribution 중에서 Normal distribution은 Real number에 대한 최대량의 불확실성 (maximum amount of uncertainty)을 Encoding. 따라서 Normal distribution은 모델에 가장 적은 양의 Prior knowledge를 삽입하는 것으로 생각할 수 있음.
- Dirac delta function, $\delta(x)$를 사용한 PDF
    - 확률 분포의 모든 Mass가 Single point 주위에 Cluster되도록 지정하고자 하는 경우.
    $$p(x) = \delta(x - \mu)$$
    - Dirac delta function은 0을 제외한 모든 곳에서 Zero-valued이지만, Integrate하면 1이 되도록 정의됨.
    - $x=\mu$인 곳에서 무한히 좁고 무한히 높은 확률 Mass의 Peak를 얻음.

## 분포의 혼합 (Mixtures of Distributions)
- 다른 더 간단한 Probability distribution을 결합하여 Probability distribution을 정의하는 것도 일반적 $\Rightarrow$ Mixture distribution.
    - Mixture distribution은 여러 Component distribution으로 구성.
    - 각 Trial에서 Sample을 생성하는 Component distribution의 선택은 Multinoulli distribution에서 Component identity를 Sampling하여 결정됨.
    $$P(x) = \sum_i P(c=i) P(x~|~c=i)$$
    - Mixture model은 Probability distribution을 결합하여 더 풍부한 Distribution을 생성하는 간단한 전략 중 하나.
    - 매우 강력하고 일반적인 유형의 Mixture model은 Gaussian mixture model이며, 여기서 Component $P(x~|~c=i)$는 Gaussians임.

## 베이즈 정리 (Bayes' Rule)
- 우리는 종종 $P(y~|~x)$를 알고 $P(x~|~y)$를 알아야 하는 상황에 처함. 다행히도 Bayes' rule을 사용하여 원하는 Quantity를 계산 가능
    $$P(x~|~y) = \frac{P(y~|~x) P(x)}{P(y)}$$
    $$P(y) = \sum_x P(y~|~x) P(x)$$
    - $P(x~|~y)$: Posterior
    - $P(y~|~x)$: Likelihood
    - $P(x)$: Prior
    - $P(y)$: Evidence

## 베이즈 정리 및 일기 예보 (Bayes' Rule and Weather Prediction)
- Example: Morning에 Clouds가 주어졌을 때, Afternoon에 Rain이 올 확률은 얼마인가?
    - 80%의 Rainy afternoons는 Cloudy mornings로 시작. ($P(\text{clouds}|\text{rain}) = 0.8$)
    - 40%의 날은 Cloudy mornings. ($P(\text{clouds}) = 0.4$)
    - 10%의 날은 Rainy afternoons. ($P(\text{rain}) = 0.1$)
- Bayes' Rule 적용:
$$P(\text{rain}~|~\text{clouds}) = \frac{P(\text{clouds}~|~\text{rain}) P(\text{rain})}{P(\text{clouds})} = \frac{(0.8)(0.1)}{0.4} = 0.2$$