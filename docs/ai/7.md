# 7. Information Theory
- Information theory는 (Branch) of applied mathematics (응용 수학의 한 분야)로, 신호에 존재하는 정보량을 정량화하는 것을 중심으로 함
- 원래는 (Discrete alphabets, 이산 알파벳)에서 (Noisy channel, 잡음 채널)을 통해 메시지를 보내는 것을 연구하기 위해 발명됨 (예: 라디오 송신을 통한 통신)
- (Optimal codes, 최적 코드)를 설계하는 방법과 메시지의 예상 길이를 계산하는 방법을 제시함
- 기본 (Intuition, 직관)은 발생할 가능성이 낮은 (Event, 사건)이 발생했음을 알게 되는 것이 발생할 가능성이 높은 사건이 발생했음을 알게 되는 것보다 더 많은 (Informative, 정보)를 제공한다는 것
- 예: “오늘 아침 해가 떴다”는 메시지는 불필요할 정도로 정보가 적지만, “오늘 아침 일식이 있었다”는 메시지는 매우 정보가 많음
- 이 직관을 공식화하는 방식으로 정보를 정량화하고 싶음
- Likely events는 낮은 (Information content, 정보 내용)을 가져야 하며, 극단적인 경우 반드시 일어날 사건은 정보 내용이 전혀 없어야 함
- Less likely events는 더 높은 정보 내용을 가져야 함
- (Independent events, 독립 사건)은 (Additive information, 가산 정보)를 가져야 함
    - 예를 들어, 던진 코인이 두 번 앞면이 나왔다는 것을 알게 되는 것은 한 번 앞면이 나왔다는 것을 알게 되는 것보다 두 배의 정보를 전달해야 함
- 이 세 가지 속성을 모두 만족시키기 위해, (Event) $X=x$의 (Self-information) $I(x)$를 다음과 같이 정의함
$$I(x) = -\log P(x)$$
- (Natural logarithm, 자연로그) (밑 $e$)를 채택할 때, $\frac{1}{e}$의 확률을 갖는 사건을 관찰하여 얻는 정보량을 one $\text{nat}$이라 함
- 밑 $2$를 이용할 때, $\text{bits}$ 또는 $\text{shannons}$라고 함

## Entropy
- (Self-information)은 단 하나의 (Outcome, 결과)만을 다룸
- (Shannon) Entropy를 사용하여 전체 (Probability distribution, 확률 분포)의 (Uncertainty, 불확실성) 양을 정량화할 수 있음
$$H(X) = E_{x \sim P(X)} [I(x)] = -E_{x \sim P(X)}[\log P(x)]$$
- 분포의 Shannon Entropy는 그 분포에서 추출된 사건의 (Expected amount of information, 예상 정보량)임
- 분포 $P$에서 추출된 Symbol을 인코딩하는 데 평균적으로 필요한 비트 수의 (Lower bound, 하한)을 제공함
- (Nearly deterministic, 거의 결정론적)인 분포 (결과가 거의 확실한 경우)는 낮은 Entropy를 가짐 (Uniform, 균일)에 가까운 분포는 높은 Entropy를 가짐

## Kullback-Leibler (KL) Divergence
- 동일한 (Random variable, 확률 변수) $X$에 대한 두 개의 개별 (Probability distributions) $P(X)$와 $Q(X)$가 있을 때, (Kullback-Leibler (KL) divergence)를 사용하여 이 두 분포가 얼마나 다른지 측정할 수 있음
$$D_{KL}(P \parallel Q) = E_{x \sim P(X)} \left[ \log \frac{P(x)}{Q(x)} \right] $$ $$= E_{x \sim P(X)} [\log P(x) - \log Q(x)]$$
- KL divergence는 (Non-negative, 음수가 아님)
- $P$와 $Q$가 동일한 분포인 경우에만 KL divergence는 $0$임
- 종종 이 분포들 사이의 일종의 (Distance, 거리)를 측정하는 것으로 개념화되지만, 대칭적이지 않기 때문에 ($D_{KL}(P \parallel Q) \neq D_{KL}(Q \parallel P)$) 진정한 거리 측정은 아님

## Cross-Entropy
- KL divergence와 밀접하게 관련된 양은 (Cross-entropy) $H(P, Q)$이며, 이는 $H(P, Q) = H(P) + D_{KL}(P \parallel Q)$로 정의되지만, 다음의 형태를 가짐
$$H(P, Q) = -E_{x \sim P(X)} [\log Q(x)]$$
- $Q$에 대해 Cross-entropy를 최소화하는 것은 KL divergence를 최소화하는 것과 (Equivalent, 동등)함. 이는 $Q$가 생략된 항에 참여하지 않기 때문임
- $P$와 $Q$ 사이의 Cross-entropy는 코딩 (Scheme, 방식)이 $P$가 아닌 $Q$에 최적화된 경우, 사건을 식별하는 데 필요한 평균 비트 수를 측정함
- $P$와 $Q$: 동일한 (Underlying set of events, 기본 사건 집합)에 대한 두 확률 분포. $P$는 (True distribution, 실제 분포)이고, $Q$는 (Estimated probability distribution, 추정된 확률 분포)임
- (Additional info, 추가 정보) 또한 (Maximum likelihood estimation, 최대 우도 추정) (MLE)와 관련이 있으며, (Training neural models, 신경망 모델 학습)을 위한 주요 (Objectives, 목표) 중 하나로 간주됨

## Probabilistic Agents
- (Real world, 현실 세계)의 (Agents, 에이전트)는 (Partial observability, 부분 관찰 가능성), (Nondeterminism, 비결정론), 또는 (Adversaries, 적대자)로 인해 (Uncertainty, 불확실성)을 처리해야 함
- 에이전트는 자신이 지금 어떤 상태에 있는지, 또는 일련의 행동 후에 어디에 있게 될지 확신할 수 없을 수 있음
- 예: 치과 환자의 치통 진단
- 진단은 거의 항상 불확실성을 포함함
- (Propositional logic, 명제 논리)를 사용하여 치과 진단 규칙을 작성하려고 시도: $\text{Toothache}$ $\Rightarrow$ $\text{Cavity}$
- 이 규칙은 틀림. 치통 환자 모두가 충치를 가진 것은 아니며, 일부는 잇몸 질환, 농양 등을 가짐: $\text{Toothache}$ $\Rightarrow$ $\text{Cavity}$ $\lor$ $\text{GumProblem}$ $\lor$ $\text{Abscess}$ $\dots$
- 이 규칙을 참으로 만들기 위해서는 거의 무제한의 가능한 문제 목록을 추가해야 함
- 규칙을 (Causal rule, 인과 관계 규칙)으로 바꾸려고 시도: $\text{Cavity}$ $\Rightarrow$ $\text{Toothache}$
- 그러나 이 규칙도 옳지 않음. 모든 충치가 통증을 유발하는 것은 아님
- 규칙을 수정하는 유일한 방법은 (Logically exhaustive, 논리적으로 완전)하게 만드는 것: 충치가 치통을 유발하는 데 필요한 모든 (Qualifications, 조건)으로 좌변을 보강하는 것
- 의료 영역 (이전 예시와 같은) 또는 많은 다른 영역에서, 에이전트의 지식은 관련 (Sentences, 문장)에 대한 (Degree of belief, 믿음의 정도)만을 최선으로 제공할 수 있음
- 믿음의 정도를 다루기 위한 주요 (Tool, 도구)는 (Probability theory, 확률 이론)임
- (Logical agent, 논리적 에이전트)는 각 문장이 참 또는 거짓이라고 믿거나 의견이 없는 반면, (Probabilistic agent, 확률적 에이전트)는 $0$ (확실히 거짓인 문장)과 $1$ (확실히 참인 문장) 사이의 수치적인 믿음의 정도를 가질 수 있음
- 특정 환자에게 무엇이 문제인지 확실히 알지는 못하지만, 치통이 있는 환자가 충치를 가질 확률이 $80\%$라고 믿을 수 있음

## Probabilistic Inference Using Full Joint Distributions
- 관심 있는 (Random variables)에 대한 (Full joint distribution, 전체 결합 분포)가 주어지면, 이를 모든 질문에 대한 답을 도출할 수 있는 "(Knowledge base, 지식 베이스)"로 활용할 수 있음
- 간단한 예
- 세 가지 (Boolean variables, 불 변수) $\text{Toothache}$, $\text{Cavity}$, 및 $\text{Catch}$로 구성된 (Domain, 영역)
- (Full joint distribution)은 다음과 같음
- 임의의 사건 $A$에 대해 $P(A) = \sum_{\omega \in A} P(\omega)$임을 상기. $\omega$는 (Possible worlds, 가능한 세계) (Outcome)
- 임의의 사건의 확률을 계산하는 직접적인 방법 제공.
    - 사건이 참인 가능한 세계를 식별하고 해당 확률을 모두 합산
    $$P(\text{\text{cavity}} \lor \text{\text{toothache}}) $$ $$= 0.108 + 0.012 + 0.072 + 0.008 + 0.016 + 0.064 = 0.28$$

## Marginalization and Conditioning
- Marginalization (주변화) 및 Conditioning (조건화)
- 일부 (Subset of variables, 변수 부분집합)에 대한 분포를 추출하는 것은 실제로 (Marginal probability, 주변 확률)을 도출하는 것과 동등함
- 예: $P(\text{\text{cavity}}) = 0.108 + 0.012 + 0.072 + 0.008 = 0.2$
$$P(\text{\text{Cavity}}) = P(\text{\text{Cavity}}, \text{\text{toothache}}, \text{catch}) + P(\text{\text{Cavity}}, \text{\text{toothache}}, \neg \text{catch})$$
$$+ P(\text{\text{Cavity}}, \neg \text{\text{toothache}}, \text{catch}) + P(\text{\text{Cavity}}, \neg \text{\text{toothache}}, \neg \text{catch})$$
- $P(X) = \sum_{y} P(X, Y=y)$
- 이는 Conditioning으로도 표현될 수 있음:
$$P(X) = \sum_{y} P(X, Y=y) = \sum_{y} P(X|Y=y) P(Y=y)$$

## Conditional Probabilities & Normalization
- Conditional probabilities (조건부 확률)
- 다른 변수에 대한 (Evidence, 증거)가 주어졌을 때, 일부 변수의 조건부 확률을 계산하는 데도 관심이 있음
$$P(\text{\text{cavity}}|\text{\text{toothache}}) = \frac{P(\text{\text{cavity}} \land \text{\text{toothache}})}{P(\text{\text{toothache}})} $$ $$= \frac{0.108 + 0.012 + 0.072 + 0.008}{0.108 + 0.012 + 0.016 + 0.064} = 0.6$$
$$P(\neg \text{\text{cavity}}|\text{\text{toothache}}) = \frac{P(\neg \text{\text{cavity}} \land \text{\text{toothache}})}{P(\text{\text{toothache}})} $$ $$= \frac{0.016 + 0.064}{0.108 + 0.012 + 0.016 + 0.064} = 0.4$$
- Normalization (정규화)
- 위의 두 조건부 확률의 합은 $1.0$이어야 함
- $P(\text{\text{toothache}})$ 항은 이 두 계산 모두의 (Denominator, 분모)에 있음 $\Rightarrow$ 이는 분포 $P(\text{\text{Cavity}}|\text{\text{toothache}})$에 대한 (Normalization constant, 정규화 상수)로 간주될 수 있으며, 합이 $1$이 되도록 보장
- 이러한 상수를 나타내는 데 $\alpha$를 사용. 이 표기법으로, 위의 두 방정식을 하나로 작성할 수 있음:
$$P(\text{\text{Cavity}}|\text{\text{toothache}}) = \alpha P(\text{\text{Cavity}}, \text{\text{toothache}})$$
$$= \alpha [P(\text{\text{Cavity}}, \text{\text{toothache}}, \text{catch}) + P(\text{\text{Cavity}}, \text{\text{toothache}}, \neg \text{catch})]$$
$$= \alpha \langle 0.108, 0.016 \rangle + \langle 0.012, 0.064 \rangle = \alpha \langle 0.12, 0.08 \rangle = \langle 0.6, 0.4 \rangle$$

## Normalization & General Inference Rule
- Normalization
- 다시 말해, $P(\text{\text{toothache}})$ 값을 몰라도 $P(\text{\text{Cavity}}|\text{\text{toothache}})$를 계산할 수 있음
- Normalization은 계산을 더 쉽게 만들고, 일부 확률 평가 ($P(\text{\text{toothache}})$와 같은)를 사용할 수 없을 때 진행할 수 있도록 하는 등 많은 확률 계산에서 유용한 (Shortcut, 단축키)가 됨
- (General inference rule, 일반 추론 규칙)
- 단일 변수 $X$, (Evidence variables, 증거 변수 목록) $E$, $E$에 대한 (Observed values, 관찰된 값 목록) $e$, 및 (Remaining unobserved variables, 나머지 관찰되지 않은 변수) $Y$가 주어지면,
- 확률 분포 $P(X|e)$는 다음과 같이 계산될 수 있음
$$P(X|e) = \alpha P(X, e) = \alpha \sum_{y} P(X, e, y)$$
- 변수 $X$, $E$, 및 $Y$는 함께 Domain에 대한 (Complete set of variables, 완전한 변수 집합)을 구성하므로, $P(X, e, y)$는 단순히 (Full joint distribution)에서 온 확률들의 (Subset, 부분집합)임

## Conclusions & Limitations - 요약
- (Full joint distribution)이 주어지면, (Discrete variables, 이산 변수)에 대한 확률적 (Queries, 질의)에 답할 수 있음
- 그러나, (Scale well, 확장성이 좋지 않음). $n$개의 (Boolean variables)로 설명되는 (Domain)의 경우, $O(2^n)$ 크기의 (Input table, 입력 테이블)이 필요함
- 따라서, (Full joint distribution) (표 형식)은 (Reasoning systems, 추론 시스템)을 구축하기 위한 실용적인 (Tool, 도구)가 아님
- 다음 단계는 (Chain rule, 연쇄 법칙) 및 (Concept of independence and conditional independence, 독립 및 조건부 독립 개념)에 의존하여, (Joint distribution, 결합 분포)를 (Subsets of variables, 변수의 부분 집합)에 대한 더 간단한 (Probabilitiy distributions)의 곱으로 (Factorize, 인수분해)하는 것
- Chain rule: $P(A, B, C) = P(A) P(B|A) P(C|A, B)$
- Independence: $P(A, B) = P(A) P(B)$, $P(A|B) = P(A)$
- Conditional independence: $P(A, B|C) = P(A|C) P(B|C)$, $P(A|B, C) = P(A|C)$
- (Bayesian network, 베이즈 네트워크)는 이러한 (Factorization)을 체계적으로 나타낼 수 있게 함

## Bayesian Network - 요약
- (Full joint probability distribution)이 (Domain)에 대한 모든 질문에 답할 수 있음을 보았지만, 변수의 수가 증가함에 따라 (Intractably large, 다루기 힘들 정도로 커짐)
- 또한, (Conditional) independence가 (Full distribution)을 정의하는 데 필요한 확률의 수를 크게 줄일 수 있음을 보았음
- Bayesian network는 변수들 사이의 (Dependencies, 종속성)을 나타내는 (Data structure, 데이터 구조)임
- Bayesian networks는 본질적으로 모든 (Full joint probability distribution)을 나타낼 수 있음
- Bayesian network는 각 노드에 (Quantitative probability information, 정량적 확률 정보)가 주석으로 달려 있는 (Directed graph, 방향성 그래프)임
- Bayesian networks (Bayes net)는 1980년대와 1990년대에 (Belief networks, 신념 네트워크)라고 불렸음
- (Probabilistic) graphical model (PGM) 용어는 Bayesian networks를 포함하는 더 넓은 (Class, 범주)를 지칭함
- Bayesian networks의 (Full specification, 전체 명세)
- 각 노드는 (Random variable) (이산 또는 연속)에 해당함
- (Directed links, 방향성 링크) 또는 화살표가 노드 쌍을 연결함. 노드 $X$에서 노드 $Y$로 화살표가 있으면, $X$는 $Y$의 (Parent, 부모)라고 함. 그래프는 (Directed cycles, 방향성 순환)이 없으므로 (Directed acylic graph, 방향성 비순환 그래프) (DAG)임
- 각 노드 $X_i$는 부모가 노드에 미치는 영향을 정량화하는 관련 확률 정보 $P(X_i|\text{Parents}(X_i))$를 가짐
- Properties (속성)
- (Network)의 (Topology, 토폴로지)는 (Domain)에서 성립하는 (Conditional independence relationships, 조건부 독립 관계)를 명시함
- 화살표의 (Intuitive meaning, 직관적인 의미)는 일반적으로 $X$가 $Y$에 (Direct influence, 직접적인 영향)을 미친다는 것이며, 이는 (Causes, 원인)이 (Effects, 결과)의 (Parents)여야 함을 시사함
- Bayes net의 (Topology)가 결정되면, 각 변수에 대한 (Local probability information, 지역 확률 정보)만 지정하면 됨
- (Full joint distribution)은 (Topology)와 (Local information)에 의해 정의됨

## Conditional Probability Table (CPT)
- (Conditional Probability Tables, 조건부 확률표) (CPT)는 (Discrete variables)에 대한 (Local probability information)을 나타냄
- CPT의 각 행은 (Conditioning case, 조건화 사례)에 대한 각 노드 값의 (Conditional probability, 조건부 확률)을 포함함
- (Conditioning case)는 (Parent nodes)에 대한 값의 가능한 (Combination, 조합)임
- 각 행의 합은 $1$이어야 함. 그러나 (Boolean variables)의 경우, 종종 두 번째 숫자는 생략함

## The Semantics of Bayesian Networks
- (Random variables) $X_1, \dots, X_n$을 가지고 있다고 가정함
- 그러면 (Joint distribution, 결합 분포)는 $P(X_1 = x_1 \land \dots \land X_n = x_n)$, 또는 간단히 $P(x_1, \dots, x_n)$임
- Bayesian networks는 (Joint distribution)의 각 (Entry, 항목)을 다음과 같이 정의함:
$$P(x_1, \dots, x_n) = \prod_{i=1}^n P(x_i|\text{Parents}(X_i))$$
- 따라서, (Joint distribution)의 각 항목은 Bayes net의 (Local conditional distributions, 지역 조건부 분포)의 적절한 요소들의 곱으로 표현됨
- 예: 경보가 울렸지만, 강도나 지진은 발생하지 않았고, John과 Mary 모두 전화한 확률
$$P(j, m, a, \neg b, \neg e) = P(j|a) P(m|a) P(a|\neg b, \neg e) P(\neg b) P(\neg e)$$
$$= 0.90 \times 0.70 \times 0.001 \times 0.999 \times 0.998 = 0.000628$$

## Relationship between Chain Rule and Bayes Net
- Chain rule
$$P(x_1, \dots, x_n) = P(x_n|x_{n-1}, \dots, x_1) P(x_{n-1}|x_{n-2}, \dots, x_1) \cdots P(x_2|x_1) P(x_1)$$
$$= \prod_{i=1}^n P(x_i|x_{i-1}, \dots, x_1)$$
- Bayesian networks
$$P(x_1, \dots, x_n) = \prod_{i=1}^n P(x_i|\text{Parents}(X_i))$$
- $P(x_i|x_{i-1}, \dots, x_1) = P(x_i|\text{Parents}(X_i))$이며, 여기서 $\text{Parents}(X_i) \subseteq \{X_{i-1}, \dots, X_1\}$임
- $\text{Parents}(X_i) \subseteq \{X_{i-1}, \dots, X_1\}$는 노드를 (Topological order, 위상 순서)로 번호 매기면 만족됨
- 즉, (Directed graph structure, 방향성 그래프 구조)와 일치하는 임의의 순서로