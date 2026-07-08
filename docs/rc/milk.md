# Multimodality Invariant Learning for Multimedia-Based New Item Recommendation

**Haoyue Bai** — Hefei University of Technology, Hefei, China · baihaoyue621@gmail.com 
**Le Wu** *(Corresponding author)* — Hefei University of Technology; Institute of Dataspace, Hefei Comprehensive National Science Center, Hefei, China · lewu.ustc@gmail.com 
**Min Hou** — Hefei University of Technology, Hefei, China · hmhoumin@gmail.com 
**Miaomiao Cai** — Hefei University of Technology, Hefei, China · cmm.hfut@gmail.com 
**Zhuangzhuang He** — Hefei University of Technology, Hefei, China · hyicheng223@gmail.com 
**Yuyang Zhou** — Academy of Cyber, Beijing, China · yzhou193@alumni.jh.edu 
**Richang Hong** — Hefei University of Technology; Institute of Dataspace, Hefei Comprehensive National Science Center, Hefei, China · hongrc.hfut@gmail.com 
**Meng Wang** — Hefei University of Technology; Institute of Artificial Intelligence, Hefei Comprehensive National Science Center, Hefei, China · eric.mengwang@gmail.com

*SIGIR '24, July 14–18, 2024, Washington, DC, USA* 
ACM ISBN 979-8-4007-0431-4/24/07 
https://doi.org/10.1145/3626772.3658596

## ABSTRACT

멀티미디어 기반 추천 시스템은 사용자의 콘텐츠 선호도를 학습하여 개인화된 아이템 추천을 제공합니다. 디지털 기기와 앱의 급속한 확산으로 인해 방대한 수의 신규 아이템이 끊임없이 생성되고 있습니다. 추론 시점에 신규 아이템에 대한 추천을 신속하게 제공하는 것은 어려운 문제입니다. 더욱이, 실제 환경의 아이템들은 다양한 수준의 모달리티 결측을 나타냅니다(예: 많은 수의 짧은 영상이 텍스트 설명 없이 업로드됨). 멀티미디어 기반 추천에 관한 많은 연구가 이루어졌음에도 불구하고, 기존 연구들은 새로운 멀티미디어 아이템을 처리하지 못하거나 모델링 과정에서 모달리티 완전성을 가정합니다.

본 논문에서는 신규 아이템 추천에서 모달리티 결측 문제를 다루는 것의 필요성을 강조합니다. 사용자의 내재적 콘텐츠 선호도는 안정적이며, 임의의 모달리티 결측 환경에 대해 불변하게 유지되는 것이 바람직하다고 주장합니다. 따라서 이 문제를 불변 학습(invariant learning)의 새로운 관점에서 접근합니다. 그러나 임의의 모달리티 결측을 일반화하기 위한 환경을 유한한 사용자 행동 학습 데이터로부터 구성하는 것은 어렵습니다. 이 문제를 해결하기 위해 새로운 **Multimodality Invariant Learning reCommendation** (MILK) 프레임워크를 제안합니다. 구체적으로, MILK는 먼저 사전 학습된 멀티미디어 아이템 특징에서 의미론적 일관성을 유지하기 위한 Cross-Modality Alignment 모듈을 설계합니다. 이후 불변 사용자 선호도 학습을 위해 임의의 모달리티 결측을 모방하고자 Cyclic Mixup을 적용한 멀티모달 이질적 환경을 설계하여 학습 데이터를 증강합니다. 세 가지 실제 데이터셋에 대한 광범위한 실험을 통해 제안 프레임워크의 우수성을 검증합니다. 코드는 https://github.com/HaoyueBai98/MILK 에서 확인할 수 있습니다.

**CCS CONCEPTS:** Information systems → Recommender systems

**KEYWORDS:** Multimedia-Based Recommendation, Invariant Learning, Modality Missing

## 1. INTRODUCTION

디지털 기기와 앱의 급속한 확산으로 인해 사람들은 e-commerce나 짧은 영상 공유 플랫폼과 같이 풍부한 멀티미디어 콘텐츠에 노출되어 있습니다. 멀티미디어 기반 추천 시스템은 이러한 온라인 서비스의 필수 요소로 자리 잡았으며, 멀티미디어 콘텐츠로부터 사용자 선호도를 학습하여 개인화된 아이템 추천을 목표로 합니다. 이러한 모델들의 아이디어는 사전 학습된 특징으로부터 아이템 콘텐츠 표현을 더 잘 모델링하고, 사용자의 이력 기록을 활용해 사용자의 콘텐츠 선호도를 정렬하는 것입니다.

실제 환경에서 멀티미디어 기반 추천 시스템은 몇 가지 뚜렷한 특성에 직면합니다. 첫째, 특히 뉴스나 짧은 영상 공유 플랫폼에서는 방대한 수의 신규 아이템이 시간이 지남에 따라 빠르게 등장합니다. 예를 들어, 매분 약 500시간 분량의 영상이 YouTube에 업로드됩니다. 학습 중에 접했던 기존 아이템과 달리, 신규 아이템은 사용자 행동 데이터가 없으며 신선함을 유지하기 위해 빠르게 추천되어야 합니다. 기존 연구의 대부분은 완전한 멀티미디어 콘텐츠로부터 정교한 콘텐츠 표현을 설계하는 데 집중했습니다. 다른 연구들은 여러 콘텐츠 채널로부터의 융합 그래프를 통해 사용자와 아이템 간의 교환을 활용할 것을 제안했습니다. 이러한 그래프 기반 모델의 대부분은 순수 콘텐츠 표현 기법에 비해 기존 아이템에서 더 나은 성능을 보입니다. 그러나 신규 아이템을 마주했을 때, 대부분의 모델은 신규 아이템으로 재학습해야 하므로 추론 단계에서 신규 아이템에 빠르게 적응할 수 없습니다. 둘째, 실제 환경의 아이템은 다양한 수준의 모달리티 결측을 나타냅니다. 예를 들어, 짧은 영상 공유 플랫폼에서 작성자는 새로 업로드된 영상에 소개 글을 생략할 수 있어 텍스트 모달리티가 부족해집니다. 일부 새 영상은 스타일상의 이유로 의도적으로 오디오 feature가 없을 수 있습니다. 기존 연구의 거의 모든 작업들은 추천을 위한 모달리티 완전성에 의존하거나, 단순히 누락된 모달리티를 채우는 전처리 기법으로 이 문제를 처리합니다. 따라서 전처리 품질이 낮아질 경우 추천 성능도 저하됩니다. 요약하면, 멀티미디어 추천에서 신규 아이템과 모달리티 결측 문제를 다루는 것은 중요하지만 아직 충분히 연구되지 않았습니다.

본 논문에서는 멀티미디어 기반 신규 아이템 추천 문제를 연구합니다. 이 문제의 어려움을 보여주기 위한 직관적인 실험을 제시합니다. Figure 1에서 보이듯이, Amazon Baby 데이터셋을 기반으로 고전적인 멀티미디어 기반 추천 모델 DUIF의 성능을 다양한 설정 하에서 평가합니다. 원본 데이터셋의 모든 샘플은 두 가지 모달리티를 가집니다. 실험 설정은 다음과 같습니다.
 1. 모달리티 결측이 없는 원본 데이터셋
 2. 학습 및 테스트 셋의 샘플이 무작위로 하나의 모달리티를 잃는 경우
 3. 테스트 셋의 샘플만 무작위로 하나의 모달리티를 잃는 경우
결측된 모달리티의 특징은 평균값으로 채웁니다. 설정 2와 3에서 모델 성능이 뚜렷하게 저하되는 것을 관찰할 수 있는데, 이는 모달리티 결측이 신규 아이템 추천에 심각한 악영향을 미침을 나타냅니다. 주목할 점은 설정 3의 성능이 설정 2보다 훨씬 나쁘다는 것으로, 학습 세트와 테스트 세트 간에 모달리티 결측 패턴의 불일치가 발생할 경우 모델 성능이 더욱 크게 저하됨을 보여줍니다. 또한 이는 단순한 데이터 전처리와 모달리티 결측 학습 샘플 제거가 효과적이지 않으며, 오히려 상황을 악화시킬 수 있음을 보여줍니다.

본질적으로, 어려움은 모달리티 결측에 따른 여러 조합이 존재한다는 데 있습니다. 불완전한 modality 패턴을 가진 신규 아이템을 마주했을 때, 추론 단계의 분포는 학습 단계와 달라집니다. 실제로 사용자의 내재적 콘텐츠 선호도는 안정적이며, 임의의 모달리티 결측에 대해 불변하게 유지되는 것이 바람직합니다. 따라서 이상적인 추천 모델은 각 사용자의 선호도를 가능한 한 불변하게 예측하도록 장려되어야 합니다.

이 목표를 달성하기 위해 불변 학습에서 영감을 받았습니다. 불변 학습은 분포 변화 하에서도 보장된 성능을 달성할 수 있으며 최근 많은 주목을 받고 있습니다. 불변 학습은 서로 다른 학습 환경에서 불변인 상관관계를 모델링하는데, 이때 환경이란 예측에 영향을 미쳐서는 안 되는 변수입니다. 마찬가지로, 우리는 임의의 모달리티 결측에 불변인 사용자의 내재적 콘텐츠 선호도를 학습하고자 합니다. 그러나 이 유추를 구현하는 것은 어렵습니다. 사용자의 상호작용 기록이 제한적이기 때문에, 임의의 모달리티 결측을 일반화하기 위한 환경을 구성하는 것이 과제입니다.

본 연구에서는 멀티미디어 기반 신규 아이템 추천을 위한 새로운 **Multimodality Invariant Learning reCommendation** (MILK) 프레임워크를 제안합니다. MILK의 아이디어는 임의의 모달리티 결측 시나리오에 불변하게 유지되는 사용자의 내재적 콘텐츠 선호도를 안정적으로 유지하도록 장려하는 것입니다. MILK는 더 나은 아이템 표현 학습을 위한 Cross-Modality Alignment 모듈(CMAM)과 불변 선호도 예측을 위한 Cross-Environment Invariance 모듈(CEIM)로 구성됩니다. CMAM에서는 하나의 모달리티가 다른 모달리티의 콘텐츠 신호를 포착할 수 있도록 정렬 함수를 설계합니다. 이 모듈은 특정 모달리티의 부재가 다른 모달리티의 특징 추출을 방해하지 않도록 보장합니다. CEIM에서는 멀티모달 이질적 환경을 생성하기 위해 Cyclic Mixup을 설계하고, 불변 학습을 적용하여 모델의 일반화 능력을 향상시킵니다. Cyclic Mixup에서는 Dirichlet 분포를 사용하여 다양한 환경을 생성함으로써, 불균형한 modality 비율과 각 모달리티에 대한 포괄적인 고려를 가능하게 합니다.

본 논문의 기여를 요약하면 다음과 같습니다.

- 멀티미디어 기반 신규 아이템 추천에서 모달리티 결측 문제를 해결하는 것의 중요성을 강조합니다.
 - 사용자의 내재적 선호도는 임의의 모달리티 결측 환경에 불변이라고 주장하며, 불변 학습의 관점에서 이 문제에 접근합니다.
- 이 도전적인 문제에 대해 MILK를 제안합니다.
 - 다양한 모달리티 정보 비율을 가진 이질적 환경들을 구성하는 새로운 Cyclic Mixup 방법을 설계하여, 연속적인 값을 가진 불변 학습에 적응하고 불변 사용자 선호도 모델링을 위한 제한적인 학습 데이터를 증강합니다.
- 세 가지 실제 데이터셋에 대한 광범위한 실험을 통해 멀티미디어 기반 신규 아이템 추천에서 MILK의 우수성과 효과성을 입증합니다.

## 2. RELATED WORK

### 2.1 Multimedia-Based Recommendation

추천 작업은 사용자에게 개인화된 추천을 제공하는 것을 목표로 합니다. 멀티미디어 기반 추천은 아이템의 멀티모달 콘텐츠(예: 텍스트, 이미지, 오디오)를 활용하여 추천 작업을 보조합니다. 정보가 풍부한 멀티모달 콘텐츠는 아이템 특성과 사용자 선호도 모델링을 크게 향상시킵니다. 초기 연구들은 아이템의 시각적 특징을 부가 정보로 모델에 통합했습니다. 예를 들어, VBPR은 행렬 분해(MF)를 기반으로 아이템의 시각적 표현을 추가합니다. 이후 일부 연구자들은 그래프 신경망을 활용하여 서로 다른 modality 데이터로 구성된 상호작용 그래프에서 임베딩 전파를 수행하고 다양한 모달리티에 대한 사용자 선호도를 포착했습니다. 예를 들어, MMGCN은 모달리티별 그래프에서 그래프 합성곱 연산을 수행하여 모달리티별 사용자 선호도를 포착합니다. 이러한 연구들은 멀티모달 정보 활용에 중요한 역할을 했지만, 대부분 귀납적이지 않으며 CF(Collaborative Filtering) 정보에 크게 의존합니다. 따라서 지속적으로 등장하는 신규 아이템을 유연하게 처리할 수 없습니다.

이 과제를 해결하기 위해 일부 연구들은 신규 아이템 추천을 가능하게 하는 모델을 개발했습니다. 이러한 방법들은 CF 정보에 의존하지 않고 멀티미디어 특징만을 사용하여 신규 아이템에 대한 추천을 직접 수행할 수 있습니다. Hybrid 추천 방법은 학습 단계에서 CF 신호와 멀티미디어 정보를 결합하여 하이브리드 선호도 표현을 얻습니다. 예를 들어, GoRec은 멀티미디어 특징의 안내 하에 신규 아이템의 표현을 생성하기 위해 사전 학습된 선호도 표현의 분포를 직접 모델링합니다. 콘텐츠 기반 추천 방법은 멀티미디어 특징 기반의 아이템 모델링에만 집중합니다. 예를 들어, DUIF는 멀티미디어 특징을 사용하여 아이템 표현을 생성하고 이 특징에 대한 사용자 선호도를 직접 모델링하여 멀티미디어 정보만으로 신규 아이템 추천을 가능하게 합니다. MICRO는 여러 아이템-아이템 관계 그래프를 구성하고 융합하여 아이템 간의 의미론적 정보를 명시적으로 마이닝합니다. 그러나 이러한 방법들은 데이터가 일관되게 완전하고 고품질이라는 가정을 두는 경우가 많은데, 이는 실제 환경에서는 거의 충족되지 않는 조건입니다. 본 논문에서는 모달리티가 결측된 시나리오에서 신규 아이템 추천을 다루고, 이 과제를 해결하기 위한 더 실용적인 모델을 소개합니다.

### 2.2 Invariant Learning for Recommendation

불변 학습(Invariant Learning, IL)은 분포 변화에 대한 모델의 견고성을 향상시킵니다. IL은 인과 메커니즘이 다양한 환경에서 불변하게 유지된다는 가정에 기반합니다. 환경에 걸쳐 모델 예측의 분산을 패널티화함으로써, 모델은 가짜 상관관계(spurious correlations) 대신 인과 메커니즘을 포착하도록 장려됩니다. IL의 일반적인 과정은 먼저 학습 데이터를 그룹(즉, 환경)으로 분할하는 것인데, 여기서 그룹은 가짜 상관관계를 반영해야 합니다. 그런 다음 서로 다른 환경에서 일관된 성능을 보장함으로써 불변 표현 학습의 목적을 달성합니다. 환경 할당은 IL에서 중요한 역할을 합니다. 초기 연구들은 환경 레이블이 데이터셋에 주어진다고 가정했습니다. 최근에는 환경 레이블이 알려지지 않은 시나리오에 IL이 도입되었습니다. 이러한 방법들은 가짜 상관관계에 대한 사전 지식을 활용하여 학습 데이터를 분할합니다. 예를 들어, Teney et al.은 미리 정의된 가짜 특징으로 학습 샘플을 클러스터링하고, EIIL은 가짜 특징에 조건부 레이블 분포가 최대로 달라지는 다수/소수 집합으로 학습 데이터를 분할합니다. IL은 최근 더 신뢰할 수 있는 추천 모델 구축을 위해 추천 시스템에도 도입되었습니다. InvPref는 서로 다른 잠재 편향 유형에 해당하는 이질적 환경을 추정하고 IL을 사용하여 통합 프레임워크에서 알려지지 않은 다양한 데이터 편향을 처리합니다. InvRL은 환경을 활용하여 가짜 상관관계를 반영하고 불변 표현을 학습하여 다양한 환경에서 사용자-아이템 상호작용을 일관되게 예측합니다. 본 연구에서는 IL에서 영감을 받아 사용자의 내재적 콘텐츠 선호도가 안정적이고 임의의 모달리티 결측에 불변하게 유지되도록 합니다. 유한한 학습 샘플로 무한한 실제 시나리오를 모방하는 새로운 Cyclic Mixup 이질적 환경 구성 방법을 제시합니다.

## 3. PROBLEM FORMULATION

### 3.1 New Item Recommendation

사용자 집합을 $U$, 아이템 집합을 $V$로 표기합니다. 암시적 피드백이 매우 일반적이므로, 사용자-아이템 상호작용 행렬을 $R \in \mathbb{R}^{|U| \times |V|}$로 나타내고, 사용자 $i$가 아이템 $j$와 상호작용한 경우 $r_{ij} = 1$, 그렇지 않으면 $r_{ij} = 0$으로 정의합니다. 상호작용 신호 외에도, 아이템의 멀티모달 특징은 시각, 텍스트, 음향 모달리티 등 콘텐츠로부터 추출됩니다. 범용 특징 추출기를 통해 다중 모달리티 특징을 표현으로 생성할 수 있습니다. 아이템 $j \in V$에 대해 특징 벡터를 $x_j \in \mathbb{R}^{M \times d_x}$로 표기하는데, $M$은 모달리티의 수이고 $d_x$는 벡터의 차원입니다. 사용자 ID $i$와 아이템 $j$의 멀티모달 표현 $x_j$를 입력으로 받아, 추천 모델 $F_\Phi$는 사용자 $i$가 아이템 $j$와 상호작용할 확률을 추론하고자 합니다. $F_\Phi$를 최적화하는 것은 관측된 상호작용이 주어진 loss 함수 $L$ (예: BPR loss)을 최소화하는 것입니다. 추론 단계에서는 과거 상호작용이 없는 신규 아이템 집합 $V_\text{new}$에 대해 신규 아이템 추천 모델 $F_\Phi^*$가 잘 동작하는 것을 목표로 합니다.

### 3.2 Modality Missing Issue

신규 아이템 추천 모델은 모달리티 완전성 가정 하에서 사용자 $i$가 신규 아이템 $j_\text{new}$와 상호작용할 확률 $\hat{y}_{ij}$를 효과적으로 추론합니다. 그러나 실제 환경은 이러한 이상적인 설정에서 벗어나는 경우가 많습니다. 많은 샘플이 다양한 수준의 모달리티 결측을 나타냅니다. 이러한 시나리오에서도 추천 모델이 효과적으로 동작하기를 기대합니다.

아이템의 modality 표현을 $X \in \mathbb{R}^{|V| \times M \times d_x}$로 나타냅니다. 아이템 modality 표시 행렬을 $A \in \mathbb{R}^{|V| \times M}$로 사용하는데, $a_{jm} = 1$이면 아이템 $j$의 $m$번째 모달리티가 사용 가능하고, $a_{jm} = 0$이면 사용 불가능합니다. 학습 단계에서 입력 데이터 $(i, x_j)$는 결합 분포에서 추출된다고 볼 수 있습니다. 추론 단계에서는 신규 아이템의 특정 모달리티를 사용할 수 없어 데이터가 다른 결합 분포에서 추출됩니다. 학습 셋의 멀티모달 데이터는 일반적으로 완전하지만, 테스트 단계에서의 멀티모달 데이터 결측 여부는 알 수 없습니다. 즉, $A \neq A_\text{new}$입니다. $P_\text{test}$와 $P_\text{train}$ 사이의 분포 변화는 학습 세트에서의 경험적 위험 최소화(ERM)를 기반으로 구축된 신규 아이템 추천 모델의 성능에 도전을 제기합니다.

우리의 목표는 $P_\text{test} \neq P_\text{train}$인 테스트 분포 $P_\text{test}$에서 추출된 멀티미디어 특징에 잘 일반화할 수 있는 최적의 신규 아이템 추천 모델을 개발하는 것입니다. 최적화 목표는 테스트 데이터 분포 $P_\text{test}$에 대한 기댓값을 사용하여 모델 파라미터 $\Phi$에 대한 loss $L(F(i, x_j); R)$을 최소화하는 것입니다. 단, $P_\text{test}$는 학습 단계에서 알 수 없습니다.

## 4. THE PROPOSED MILK FRAMEWORK

### 4.1 Overview of MILK

Figure 2에서 보이듯이, 제안하는 MILK의 전체 프레임워크를 소개합니다. 본질적으로 MILK는 신규 아이템에 대한 안정적인 사용자 선호도 예측을 장려하는 것을 목표로 하며, 이는 모달리티 결측 시나리오에서의 불변 선호도 학습에 의해 보장됩니다. 이 목표를 달성하기 위해 MILK는 두 가지 정교한 모듈로 구성됩니다. Cross-Modality Alignment Module (CMAM)과 Cross-Environment Invariance Module (CEIM)입니다.

구체적으로, CMAM은 잠재적인 모달리티 결측 시나리오에서 정보가 풍부한 멀티모달 표현을 학습하는 것을 목표로 합니다. CMAM은 각 modality 표현을 좁힘으로써 구현되어, 모달리티 결측으로 인한 불충분한 멀티모달 표현 문제를 해결하기 위해 각 modality 표현이 다른 모달리티 특징으로 보완될 수 있도록 합니다. 멀티모달 표현 정렬 후, CEIM을 다음과 같이 실행합니다. 이질적 환경 

**Modal-Specific Extractors.** 대부분의 기존 연구들은 멀티모달 특징을 연결한 후 단일 추출기를 통해 아이템 표현으로 변환합니다. 이는 어떤 모달리티가 없어도 전체 추출기에 영향을 미쳐 다른 모달리티 정보 추출에 부정적인 영향을 줄 수 있습니다. CMAM은 안정적인 모달리티 특징 추출을 보장하기 위해 독립적인 추출기를 사용하는데, 이는 각 추출기가 특정 모달리티에만 관련됨을 의미합니다. 이러한 접근 방식은 기존 모달리티 특징의 기본적인 이해의 정확성을 보장합니다.

**Cross-Modality Alignment.** 모달리티별 추출기가 모달리티 정보의 안정적인 추출을 보장하는 반면, 서로 다른 모달리티 정보가 서로 다른 표현 공간에 매핑될 위험도 증가시킵니다. 우리는 서로 다른 모달리티의 표현 간 의미론적 일관성을 보장하기 위해 모달리티 간 정렬을 사용합니다. 동시에 모달리티 간 정렬은 모달리티 간의 정보가 서로 전달될 수 있도록 합니다. 특정 모달리티를 사용할 수 없을 때, 다른 모달리티가 보완을 제공할 수 있습니다. MILK에서는 정렬 목표를 최적화함으로써 이 목표를 달성합니다.

### 4.3 Cross-Environment Invariant Module

**Embedding and Fusion.** CEIM은 임베딩 레이어 $P$와 융합 함수 $Q$를 통해 사용자 표현과 아이템 표현을 얻습니다. 사용자의 경우, CEIM은 임베딩 레이어를 직접 사용하여 사용자 $i$의 ID를 사용자 표현 $u_i$로 변환합니다. 이러한 임베딩 레이어는 사용자의 상호작용 기록으로부터 사용자 관심사를 직접 포착할 수 있습니다. 아이템의 경우, CMAM은 이미 각 아이템에 대해 $M$개의 표현 $c^m_j$를 생성했습니다. 그런 다음 CEIM은 함수 $Q$를 통해 이러한 표현들을 융합하여 아이템 $j$의 표현을 얻습니다. 모달리티 정보의 비율을 더 직관적으로 표시하고 제어하기 위해 가중 합산을 융합 함수로 사용합니다.

**Heterogeneous Environment Construction.** 복잡한 모달리티 결측 시나리오에서 모델이 지속적으로 잘 동작할 수 있도록 하기 위해, 각각 서로 다른 분포에서 멀티미디어 특징이 추출되는 여러 이질적 환경의 존재를 가정합니다. 우리의 맥락에서 환경은 서로 다른 모달리티 결측 상황을 시뮬레이션해야 합니다. 우리는 이질적 환경에 걸쳐 모델이 좋은 성능을 유지하고 결국 사용자의 내재적 콘텐츠 선호도를 학습하도록 장려합니다. 가중치 $\Theta$를 조정함으로써 환경의 이질성을 자연스럽게 시뮬레이션하고 제어합니다.

동일한 가중치를 사용하여 서로 다른 modality 표현을 융합하는 것이 기본 전략입니다. 테스트 단계에서는 특정 모달리티의 정보 품질에 대해 명확한 판단을 내릴 수 없으므로 이 융합 전략이 사용됩니다. 이 전략이 모델에 항상 노출되도록 학습 단계에서 동일한 가중치를 하나의 환경으로 고려하여 모델의 기본 성능을 보장합니다.

그런 다음 가중치를 조정하여 이질적 환경을 구성합니다. 이러한 환경들이 가져야 할 중요한 속성들이 있습니다. (1) *Unbalance Proportion*: 한편으로는, 모델이 특정 모달리티를 무시하도록 장려되어 전반적인 성능 저하로 이어지지 않도록 각 환경에 모든 모달리티가 포함되어야 합니다. 다른 한편으로는, 복잡한 실제 상황을 시뮬레이션하기 위해 모달리티의 비율이 불균형해야 합니다. (2) *Full Modality Consideration*: 서로 다른 환경은 서로 다른 모달리티가 지배해야 하며, 각 modality는 일부 환경에서 주요 역할을 해야 합니다. 이는 모델이 특정 모달리티와 너무 강한 연관성을 형성하지 않고 각 모달리티의 정보가 충분히 학습되도록 보장합니다. (3) *Diversity for Generalization*: 모델의 능력을 향상시키기 위해 충분히 많은 환경이 시뮬레이션되어야 합니다. 모델은 다양한 이질적 환경에 노출되어야 합니다. 환경의 수가 적으면 모델과 제한된 패턴 간의 가짜 연관성이 생길 수 있습니다.

원본 샘플을 혼합하여 새로운 샘플을 생성하는 데이터 증강 방법인 Mixup에서 영감을 받아, 위의 속성을 만족하는 환경을 구성하기 위한 새로운 Cyclic Mixup 방법을 제안합니다. 구체적으로, 먼저 Dirichlet 분포를 결정하고 이 분포에서 가중치 집합 $\Theta_1$을 샘플링합니다. Dirichlet 분포는 M차원 공간의 확률 심플렉스를 나타내므로 가중치의 추가적인 정규화가 필요 없으며, 임의의 modality 수를 가진 더 많은 시나리오로 이 방법을 확장할 수 있습니다.

그런 다음 순환 이동(Cyclic Shift)으로 다른 가중치를 생성합니다. 각 이동 시 $\Theta_{m-1}$의 모든 가중치를 한 비트 뒤로 이동하고 마지막 가중치를 앞에 배치합니다. 이를 통해 $\Theta_1$로부터 $M-1$번의 Cyclic Shift로 $M$개의 환경을 구성할 수 있습니다. Dirichlet 분포에서 샘플링된 가중치는 서로 다른 모드에 대해 가중치가 비영(nonzero)이고 불균등하다는 *Unbalance Proportion* 속성을 보장합니다. Cyclic Shift는 각 환경에서 지배적인 모드가 다르고 각 모드가 하나의 환경을 지배하게 되는 *Full Modality Consideration* 속성을 보장합니다. 이 과정을 각 반복 시 수행함으로써 무작위성을 통해 환경의 *Diversity for Generalization*을 보장합니다.

**Invariant optimization.** 여러 모듈의 시너지를 통해 모델은 각 환경에서 사용자 ID와 아이템 멀티미디어 특징을 기반으로 사용자의 아이템 선호도를 예측할 수 있습니다. 사용자의 내재적 콘텐츠 선호도는 안정적이며 임의의 모달리티 정보 분포에 불변하게 유지되는 것이 바람직하다고 주장합니다. 따라서 이질적 환경에서 모델이 성능을 유지하도록 장려합니다. 이를 위해 불변 학습 패러다임을 사용하여 불변 선호도 예측 메커니즘을 학습합니다. 불변 학습 패러다임 하에서 일반적인 최적화 목표를 사용하는데, 첫 번째 항은 목표 작업에서 모델 성능을 보장하기 위한 작업 의존적 loss이고, 두 번째 항은 환경에 걸친 loss 분산에 대한 제약으로 모델이 서로 다른 환경에서 안정적이도록 장려합니다. 우리의 맥락에서 환경 $e$는 서로 다른 가중치 $\Theta_m$으로 표현되고, $L_e$는 환경 $e$ 내부의 평균 추천 loss 값이며, 널리 사용되는 BPR loss을 채택합니다.

### 4.4 Model Optimization and Inference

최종 최적화 목표는 불변 loss, 정렬 loss, 정규화 항의 합으로 구성됩니다. 여기서 $\lambda$는 정렬 loss의 가중치를 제어하는 하이퍼파라미터이고, $\Phi$는 모든 모델 파라미터를 포함합니다. 추론 단계에서 MILK는 다양한 수준의 모달리티 결측을 가진 신규 아이템에 직접 적용될 수 있습니다. 신규 아이템 $j_\text{new}$가 나타날 때, 먼저 평균 대체(mean imputation)를 사용하여 멀티미디어 특징을 처리합니다. 그런 다음 동일한 가중치 융합 전략으로 사용자 $i$의 $j_\text{new}$에 대한 선호도 점수를 예측합니다.

## 5. EXPERIMENTS

이 섹션에서는 세 가지 실제 데이터셋에 대한 광범위한 실험을 수행합니다. 실험은 다음 질문들에 답하는 것을 목표로 합니다.

- **Q1**: 우리 모델은 최신의 신규 아이템 추천 방법들과 비교했을 때 어떤 성능을 보이는가?
- **Q2**: 우리 모델은 모달리티 결측이 존재하는 신규 아이템 추천 성능을 어떻게 향상시키는가?
- **Q3**: 모델의 모든 모듈이 성능에 어떻게 긍정적인 영향을 미치는가?

### 5.1 Experimental Settings

#### 5.1.1 Datasets

**데이터셋 설명.** Amazon Baby, Amazon Clothing, Shoes, and Jewelry, TikTok 등 세 가지 널리 사용되는 실제 데이터셋에 대해 실험을 수행합니다. 간략하게 각각 Baby, Clothing, TikTok으로 지칭합니다. Baby와 Clothing은 시각 및 텍스트 모달리티를 모두 포함합니다. TikTok은 TikTok 플랫폼에서 수집한 것으로 사용자의 짧은 영상 시청 기록을 담고 있습니다. 멀티모달 특징은 영상의 시각, 음향, 제목 텍스트 특징입니다. 공정한 비교를 위해 모든 모델은 사전 학습된 멀티모달 특징을 입력으로 사용합니다. 전처리된 데이터셋의 통계는 Table 1에 제시되어 있습니다.

**New Item Setting.** 신규 아이템을 시뮬레이션하기 위해 아이템의 20%를 무작위로 선택하고 학습 과정에서 이들의 과거 상호작용을 삭제합니다. 이 중 절반은 검증용으로, 나머지는 테스트 아이템으로 구분합니다. 이러한 아이템들은 학습 세트에서 완전히 보이지 않습니다.

**Modality Missing Setting.** 세 가지 데이터셋에 대해 두 가지 설정 하에서 모델의 효과를 검증합니다. 첫 번째는 Full Training Missing Test (FTMT) 설정으로, 학습 데이터의 품질이 보장된다고 가정합니다. 학습 단계에서는 완전한 멀티미디어 특징을 사용하고, 테스트 단계에서는 50%의 아이템이 무작위로 하나의 모달리티 특징이 결측된다고 가정합니다. 두 번째는 보다 현실적인 Missing Training Missing Test (MTMT) 설정으로, 학습 셋의 30% 아이템도 무작위로 하나의 모달리티 특징이 결측된다고 가정합니다.

#### 5.1.2 Evaluation Metrics

개인화 추천 시스템에서 널리 사용되는 두 가지 지표를 선택합니다. Recall (Recall@K)과 Normalized Discounted Cumulative Gain (NDCG@K)이며, 두 지표 모두 높을수록 모델 성능이 좋음을 나타냅니다.

#### 5.1.3 Baselines

MILK의 효과성을 검증하기 위해 작업 시나리오에 적합한 여러 SOTA 모델을 비교 대상으로 선택합니다.

- **DUIF**: 콘텐츠 기반 방법으로, 이질적인 사용자-콘텐츠 네트워크를 동질적인 저차원 공간으로 변환하여 통합 표현 학습을 수행합니다.
- **MICRO**: Hybrid 방법으로, 각 모달리티에 대한 아이템-아이템 관계를 학습하고 더 나은 아이템 수준의 멀티모달 융합을 위해 대조 학습을 활용합니다.
- **DropoutNet**: 신규 아이템 추천을 위해 설계된 방법으로, 신규 아이템 시나리오를 시뮬레이션하기 위해 학습 단계에서 부분 선호도 표현을 무작위로 드롭합니다.
- **MTPR**: 학습 단계에서 선호도 표현을 전부 0인 벡터로 전략적으로 교체하여 신규 아이템 멀티미디어 추천 문제를 해결합니다.
- **Heater**: CF 신호와 콘텐츠 표현을 정렬하기 위해 Sum Squared Error loss을 사용하는 신규 아이템 추천 방법입니다.
- **CLCRec**: 대조 학습을 사용하여 CF 신호와 콘텐츠 표현을 제약하고 이들 간의 상호 정보를 최대화합니다.
- **CCFCRec**: Warm 학습 데이터의 공동 발생 협업 신호를 활용하여 흐릿한 협업 임베딩 문제를 완화합니다.
- **GAR**: 생성기와 추천기를 적대적으로 학습시켜 기존 아이템 표현과 유사한 신규 아이템 표현을 생성합니다.
- **GoRec**: 멀티미디어 특징의 안내 하에 신규 아이템 표현을 생성하기 위해 사전 학습된 선호도 표현의 분포를 직접 모델링합니다.

여러 콘텐츠 기반 추천 방법과 멀티미디어 신규 아이템 추천 방법을 기준 모델로 포괄적으로 선택했습니다. 일부 그래프 기반 멀티미디어 추천 방법(예: MMGCN)은 사용자-아이템 상호작용 기록을 기반으로 그래프 구성이 필요하여 도전적인 시나리오에 적용하기 어렵기 때문에 비교에서 제외했습니다.

#### 5.1.4 Hyper-Parameter Settings

MILK와 모든 기준 모델을 Pytorch 프레임워크로 구현합니다. 선호도 표현의 차원은 64로 고정합니다. 배치 크기는 2048로 설정합니다. 학습 중에는 Adam을 옵티마이저로 사용하고 학습률은 0.001로 설정하며, 과적합을 방지하기 위한 조기 종료 전략을 적용합니다. β와 λ의 최적 파라미터를 신중하게 탐색한 결과, Baby에서는 $\beta=1000$, $\lambda=0.05$, Clothing에서는 $\beta=50$, $\lambda=0.05$, TikTok에서는 $\beta=50$, $\lambda=0.5$일 때 MILK가 최고 성능을 달성함을 확인했습니다. 환경 구성 시 Dirichlet 분포 선택을 위해 $\alpha_1 = \cdots = \alpha_M$으로 설정하고 $\alpha_m$을 $\{0.01, 0.1, 1, 10, 100\}$에서 탐색합니다. 모든 기준 모델에 대해서도 공정한 비교를 위해 파라미터를 신중하게 탐색합니다. 모든 실험을 5회 반복하여 평균 결과를 보고합니다.

### 5.2 Overall Comparisons (Q1)

Table 2에서 보이듯이, 세 가지 데이터셋에서 우리 모델을 다른 기준 모델들과 비교합니다. 다음과 같은 관찰 사항을 도출했습니다.

(1) 세 가지 데이터셋 모두에서 MILK는 FTMT 설정의 모든 기준 모델 대비 현저한 개선을 보입니다. 구체적으로, MILK는 Baby, Clothing, TikTok 데이터셋에서 NDCG@20 기준으로 가장 강력한 기준 모델 대비 각각 11.2%, 14.0%, 2.8% 향상됩니다. 광범위한 실증 연구는 제안하는 MILK의 효과성을 검증합니다. 이 개선은 모델의 일반화 능력을 크게 향상시키도록 설계된 두 모듈 덕분입니다.

(2) MTMT 설정에서는 보다 현실적인 시나리오를 고려합니다. 학습 단계에서 일부 아이템 모달리티가 결측되면 모델의 적합 및 일반화 능력에 더 높은 요구 사항이 생깁니다. MILK는 세 가지 데이터셋 모두에서 여전히 최고 성능을 보입니다. MILK는 Baby, Clothing, TikTok 데이터셋에서 NDCG@20 기준으로 가장 강력한 기준 모델 대비 각각 13.5%, 9.6%, 4.3% 향상됩니다. 실험 결과는 MILK의 실용성을 추가로 검증합니다.

(3) DUIF, MICRO, MILK는 추가적인 CF 표현 없이 멀티모달 특징만으로 신규 아이템의 특성을 모델링합니다. 우리 모델은 모든 설정과 데이터셋에서 우수한 성능을 보이며, 이는 우리의 설계가 효과적임을 충분히 입증합니다. 예를 들어, Baby 데이터셋에서 MILK는 FTMT 및 MTMT 설정에서 NDCG@20 기준으로 DUIF 대비 각각 69.9%, 87.2% 향상됩니다.

### 5.3 Improvements on Modality Missingness (Q2)

#### 5.3.1 Performance on Different Missing Scenarios

이 섹션에서는 모달리티가 결측될 때 MILK가 어떻게 성능을 향상시키는지 추가로 탐구합니다. TikTok 데이터셋은 더 풍부한 모달리티를 가지고 있어, 이를 기반으로 서로 다른 모달리티 결측 시나리오를 구성합니다. 전체 학습 및 검증 세트를 사용합니다. 테스트 세트에서는 10% 아이템이 모달리티 결측이 없고, 45%가 무작위로 하나의 모달리티가 결측되며, 45%가 무작위로 두 개의 모달리티가 결측됩니다. 모든 샘플과 특정 그룹의 아이템에 대한 모델 성능을 별도로 보고합니다. TikTok 데이터셋에서 상위 2개의 기준 모델을 비교 대상으로 선택합니다. Figure 3의 막대 차트는 세 모델의 서로 다른 그룹에 대한 결과를 보여줍니다. 모델이 전체 테스트 세트에서 기준 모델보다 우수한 성능을 보이는 것을 관찰할 수 있습니다. 동시에 MILK의 개선이 모달리티 결측 아이템 그룹에서 더 두드러지며, 두 모달리티가 결측된 그룹의 개선이 나머지 그룹보다 훨씬 크다는 것을 발견합니다. 이는 우리 모델이 모달리티 결측 아이템에 대한 추천 성능을 실질적으로 향상시키고 더 강한 일반화 능력을 가짐을 보여줍니다.

#### 5.3.2 Comparison with common data imputation methods

추론 단계에서 서로 다른 데이터 대체 방법의 효과를 검증하기 위한 실험을 추가로 설계했습니다. FTMT 설정의 Baby와 Clothing 데이터셋에서 실험을 수행하고 결과를 Table 3에 제시합니다. Zero는 MILK에서 정렬 부분, 이질적 환경 구성, 불변 학습 부분을 제거하고 테스트 셋의 결측 모달리티를 영으로 채우는 것을 의미합니다. Mean은 평균값으로 채우는 것을 나타냅니다. Map은 두 모달리티 간의 매핑 함수를 사전 학습하는 것을 나타냅니다. CMAM과 CEIM은 MILK의 한 모듈만 사용한 경우를 나타냅니다. 실험 결과는 전처리 방법이 우리의 문제 시나리오에서 모델 성능을 향상시키지 못함을 보여줍니다. 때로는 잘 설계된 대체 방법이 Clothing 데이터셋에서 Mean 및 Map 대체에서처럼 모델 성능을 오히려 저하시킬 수 있습니다. 반면 MILK의 각 구성 요소는 모달리티 결측 상황에서 모델 성능을 효과적으로 향상시킵니다.

#### 5.3.3 Impact of Constructed Environment

MILK는 modality 가중치를 조정하여 차별화된 환경을 구성하고 환경에 걸쳐 불변인 선호도 예측 메커니즘을 학습합니다. 서로 다른 환경 구성 전략의 영향을 추가로 탐구합니다. `w/o e=0`은 동일한 가중치 경우를 추가로 고려하지 않는 것입니다. `w/o cs`는 가중치 생성에 Cyclic Shift를 사용하지 않고 환경의 수를 유지하면서 각 환경에 대해 Dirichlet 분포에서 가중치를 샘플링하는 것입니다. `w/o random`은 모델 학습 시작 시에만 가중치를 샘플링하고 Cyclic Shift하여 환경을 구성하고 이후에는 가중치를 고정하는 것입니다. Table 4는 우리 방법이 세 가지 환경 구성 변형보다 우수한 성능을 보임을 나타냅니다. 환경 구성 전략이 합리적이고 필요하며 효과적임을 알 수 있습니다.

### 5.4 Detailed Model Analysis (Q3)

#### 5.4.1 Ablation Study

제안하는 MILK의 각 구성 요소의 효과성을 검증하기 위해 서로 다른 데이터셋에서 절제 연구를 수행합니다. Figure 4에서 보이듯이, MILK와 해당 변형들을 Top-20 추천 성능으로 비교합니다. `MILK-w/o CMAM`은 Cross-Modality Alignment 모듈을 제거하고 modality 표현 추출 후 직접 융합하는 것입니다. `MILK-w/o CEIM`은 ERM 패러다임 하에서 학습하는 것을 의미합니다. 이 설정에서는 평균 전략을 사용하여 여러 모달리티의 표현을 직접 융합한 다음 사용자 표현과의 성향 점수를 계산하여 BPR로 목표를 최적화합니다. `MILK-w/o BOTH`는 두 모듈을 동시에 삭제하는 것을 의미합니다. 이 설정에서는 분포 불일치를 위한 어떤 설계도 수행하지 않습니다. Figure 4에서 MILK의 각 구성 요소가 최종적인 우수한 성능에 기여한다는 것을 관찰했습니다. MILK-w/o BOTH에 대한 각 모듈의 개선이 큽니다. 예를 들어, FTMT 설정에서 CMAM과 CEIM은 Baby 데이터셋에서 NDCG@20 기준으로 MILK-w/o BOTH 대비 각각 19.4%와 24.27% 향상시킵니다.

또한 결측 modality 시나리오에서 모델의 일반화 능력에 더 집중합니다. Figure 5에서 보이듯이, 전체 시나리오(Full modality Training, Full modality Test, FTFT)와 결측 modality 시나리오(FTMT)에서 서로 다른 모듈이 모델에 미치는 영향을 보고합니다. 결측 modality 시나리오에서 모델 성능이 크게 저하됨을 명확히 볼 수 있습니다. 두 모듈의 추가가 결측 modality 시나리오에서 모델의 loss을 줄입니다. 구체적으로 Baby 데이터에서 모듈이 추가되지 않았을 때 성능 loss은 37.15%입니다. CEIM을 추가하면 성능 loss은 27.68%이고, CMAM을 추가하면 32.06%입니다. 두 모듈이 협력할 때 성능 loss은 24.59%로 줄어듭니다. 이는 우리 모델이 성능을 향상시킬 뿐만 아니라 성능 저하를 완화하고 일반화 능력을 강화함을 보여줍니다.

#### 5.4.2 Hyper-Parameter Sensitivities

**Effect of Dirichlet Distribution Parameters α.** Figure 6(a)와 (b)에서 보이듯이, 4가지 서로 다른 Dirichlet 분포에서 가중치를 샘플링하고 모델 성능을 관찰합니다. 간단히 말하면, α가 작을수록 가중치 격차가 커질 가능성이 높습니다. FTMT 설정에서 모델은 Baby와 Clothing 데이터셋에서 각각 $\alpha=0.01$, $\alpha=0.1$일 때 최고 성능을 달성합니다. 두 데이터셋 모두에서 α가 작을 때 최적값이 달성되는데, 이는 Dirichlet에서 생성된 가중치 중 하나가 1 근처가 될 것이어서 이질적 환경이 특정 모달리티에 의해 지배되도록 보장하기 때문입니다. 작은 α 값은 MILK가 서로 다른 환경에서 modality 구성이 충분히 다르도록 보장하는 데 도움이 됩니다.

**Effect of Cross-Modality Alignment Loss Weights β.** Figure 6(c)와 (d)에서 보이듯이, Baby와 Clothing 데이터셋에서 Cross-Modality Alignment loss 가중치 β를 신중하게 조정합니다. MILK는 두 데이터셋 모두에서 $\beta=0.05$일 때 최고 성능을 달성합니다. 가중치가 너무 작으면 다른 모달리티의 정보를 포착하는 목표를 달성할 수 없습니다. 가중치가 너무 크면 modality 자체의 정보가 심각하게 상쇄되어 성능이 저하될 수 있습니다.

**Effect of Cross-Environment Invariant Loss Weights λ.** Figure 6(e)와 (f)에서 보이듯이, Baby와 Clothing 데이터셋에서 Cross-Environment 일관성 loss 가중치 λ를 신중하게 조정합니다. MILK는 Baby에서 $\lambda=1000$, Clothing에서 $\lambda=50$일 때 최고 성능을 달성합니다. 하이퍼파라미터 λ는 모델에 직접적인 영향을 미칩니다. λ가 너무 작으면 불변 제약이 목표를 달성하기에 충분하지 않습니다. λ가 너무 크면 모델이 일관성에만 지나치게 집중하고 추천 작업 자체를 충분히 학습하지 못하게 됩니다. 구현 과정에서 최적값을 찾기 위해 신중하게 조정해야 합니다.

## 6. CONCLUSION

본 논문에서는 모달리티 결측 시나리오에서의 신규 아이템 추천 문제에 집중했습니다. 기존 연구들이 데이터에 대해 지나치게 이상적인 가정을 하고 있으며 실제 환경의 복잡한 상황을 처리하기 어렵다는 점을 지적했습니다. Modality 품질이 변할 때 가능한 한 성능을 보장하도록 모델을 장려하는 MILK를 제안했습니다. 구체적으로, 단일 modality 표현이 다른 모달리티의 신호를 포착할 수 있도록 Cross-Modal Alignment 모듈을 설계했습니다. 그런 다음 여러 이질적 환경을 구성하기 위한 새로운 Cyclic Mixup 방법을 제안했습니다. 이러한 환경을 기반으로 불변 학습을 사용하여 모델을 최적화하고, 임의의 모달리티 결측에 불변하게 유지되는 사용자의 내재적 콘텐츠 선호도를 학습하도록 장려했습니다. 광범위한 실험을 통해 MILK의 효과성을 검증했습니다.

## ACKNOWLEDGMENTS

이 연구는 중국 국가 연구개발 프로그램(Grant No.2021ZD0111802), 중국 국가자연과학재단(Grant No.U23B2031, 72188101), 중앙대학기초연구기금(Grant No.JZ2023HGQA0471)의 부분적인 지원을 받았습니다.

## REFERENCES

[1] Martín Arjovsky, Léon Bottou, Ishaan Gulrajani, and David Lopez-Paz. 2019. Invariant Risk Minimization. *ArXiv* (2019).

[2] Haoyue Bai, Min Hou, Le Wu, Yonghui Yang, Richang Hong, and Meng Wang. 2023. GoRec: A Generative Cold-Start Recommendation Framework. *MM* (2023).

[3] Hao Chen, Zefan Wang, Feiran Huang, Xiao Huang, Yue Xu, Yishi Lin, Peng He, and Zhoujun Li. 2022. Generative Adversarial Framework for Cold-Start Item Recommendation. *SIGIR* (2022).

[4] Jingyuan Chen, Hanwang Zhang, Xiangnan He, Liqiang Nie, Wei Liu, and Tat-Seng Chua. 2017. Attentive Collaborative Filtering: 멀티미디어 Recommendation with Item- and Component-Level Attention. *SIGIR* (2017).

[5] Yimeng Chen, Ruibin Xiong, Zhi-Ming Ma, and Yanyan Lan. 2022. When Does Group Invariant Learning Survive Spurious Correlations? *NeurIPS* (2022).

[6] Elliot Creager, Jörn-Henrik Jacobsen, and Richard Zemel. 2021. Environment inference for invariant learning. (2021).

[7] Tiago de Melo and Carlos M.S. Figueiredo. 2020. A first public dataset from Brazilian twitter and news on COVID-19 in Portuguese. *Data in Brief* (2020).

[8] Xiaoyu Du, Xiang Wang, Xiangnan He, Zechao Li, Jinhui Tang, and Tat-Seng Chua. 2020. How to Learn Item Representation for Cold-Start 멀티미디어 Recommendation? *MM* (2020).

[9] Xiaoyu Du, Zike Wu, Fuli Feng, Xiangnan He, and Jinhui Tang. 2022. Invariant Representation Learning for 멀티미디어 Recommendation. *MM* (2022).

[10] Xue Geng, Hanwang Zhang, Jingwen Bian, and Tat-Seng Chua. 2015. Learning image and user features for recommendation in social networks. *ICCV* (2015).

[11] Ruining He and Julian McAuley. 2015. VBPR: Visual Bayesian Personalized Ranking from Implicit Feedback. *AAAI* (2015).

[12] Ruining He and Julian McAuley. 2016. Ups and Downs: Modeling the Visual Evolution of Fashion Trends with One-Class Collaborative Filtering. *WWW* (2016).

[13] Wang-Cheng Kang, Chen Fang, Zhaowen Wang, and Julian McAuley. 2017. Visually-Aware Fashion Recommendation and Design with Generative Image Models. *ICDM* (2017).

[14] Diederik P. Kingma and Jimmy Ba. 2014. Adam: A Method for Stochastic Optimization. *ICLR* (2014).

[15] David Krueger, Ethan Caballero, Jörn-Henrik Jacobsen, Amy Zhang, Jonathan Binas, Rémi Le Priol, and Aaron C. Courville. 2020. Out-of-Distribution Generalization via Risk Extrapolation (REx). *ICML* (2020).

[16] Xingchen Li, Xiang Wang, Xiangnan He, Long Chen, Jun Xiao, and Tat-Seng Chua. 2020. Hierarchical Fashion Graph Network for Personalized Outfit Recommendation. *SIGIR* (2020).

[17] Jianxun Lian, Xiaohuan Zhou, Fuzheng Zhang, Zhongxia Chen, Xing Xie, and Guangzhong Sun. 2018. xDeepFM: Combining Explicit and Implicit Feature Interactions for Recommender Systems. *KDD* (2018).

[18] Xinyu Lin, Wenjie Wang, Jujia Zhao, Yongqi Li, Fuli Feng, and Tat-Seng Chua. 2024. Temporally and Distributionally Robust Optimization for Cold-start Recommendation. *AAAI* (2024).

[19] Jiashuo Liu, Zheyuan Hu, Peng Cui, B. Li, and Zheyan Shen. 2021. Heterogeneous Risk Minimization. *ICML* (2021).

[20] Julian McAuley, Christopher Targett, Javen Qinfeng Shi, and Anton van den Hengel. 2015. Image-Based Recommendations on Styles and Substitutes. *SIGIR* (2015).

[21] Jonas Peters, Peter Bühlmann, and Nicolai Meinshausen. 2016. Causal inference by using invariant prediction: identification and confidence intervals. *J R Stat Soc* (2016).

[22] Francesco Pinto, Harry Yang, Ser Nam Lim, Philip H. S. Torr, and Puneet Kumar Dokania. 2022. RegMixup: Mixup as a Regularizer Can Surprisingly Improve Accuracy and Out Distribution Robustness. *NeurIPS* (2022).

[23] Steffen Rendle, Christoph Freudenthaler, Zeno Gantner, and Lars Schmidt-Thieme. 2009. BPR: Bayesian Personalized Ranking from Implicit Feedback. *UAI* (2009).

[24] Suvash Sedhain, Scott Sanner, Darius Braziunas, Lexing Xie, and Jordan Christensen. 2014. Social collaborative filtering for cold-start recommendations. *RecSys* (2014).

[25] Damien Teney, Ehsan Abbasnejad, and Anton van den Hengel. 2021. Unshuffling data for improved generalization in visual question answering. (2021).

[26] Aäron van den Oord, Sander Dieleman, and Benjamin Schrauwen. 2013. Deep content-based music recommendation. *NeurIPS* (2013).

[27] Vikas Verma, Alex Lamb, Christopher Beckham, Amir Najafi, Ioannis Mitliagkas, David Lopez-Paz, and Yoshua Bengio. 2018. Manifold Mixup: Better Representations by Interpolating Hidden States. *ICML* (2018).

[28] Maksims Volkovs, Guangwei Yu, and Tomi Poutanen. 2017. DropoutNet: Addressing Cold Start in Recommender Systems. *NeurIPS* (2017).

[29] Shuai Wang, Kun Zhang, Le Wu, Haiping Ma, Richang Hong, and Meng Wang. 2021. Privileged Graph Distillation for Cold Start Recommendation. *SIGIR* (2021).

[30] Zimu Wang, Yue He, Jiashuo Liu, Wenchao Zou, Philip S. Yu, and Peng Cui. 2022. Invariant Preference Learning for General Debiasing in Recommendation. *KDD* (2022).

[31] Wei Wei, Chao Huang, Lianghao Xia, and Chuxu Zhang. 2023. 멀티모달 Self-Supervised Learning for Recommendation. *WWW* (2023).

[32] Yin wei Wei, Xiang Wang, Qi Li, Liqiang Nie, Yan Li, Xuanping Li, and Tat-Seng Chua. 2021. Contrastive Learning for Cold-Start Recommendation. *MM* (2021).

[33] Yin wei Wei, Xiang Wang, Liqiang Nie, Xiangnan He, and Tat-Seng Chua. 2020. Graph-Refined Convolutional Network for 멀티미디어 Recommendation with Implicit Feedback. *MM* (2020).

[34] Yin wei Wei, Xiang Wang, Liqiang Nie, Xiangnan He, Richang Hong, and Tat-Seng Chua. 2019. MMGCN: 멀티모달 Graph Convolution Network for Personalized Recommendation of Micro-video. *MM* (2019).

[35] Le Wu, Lei Chen, Pengyang Shao, Richang Hong, Xiting Wang, and Meng Wang. 2021. Learning Fair Representations for Recommendation: A Graph-based Perspective. *WWW* (2021).

[36] Le Wu, Xiangnan He, Xiang Wang, Kun Zhang, and Meng Wang. 2021. A Survey on Accuracy-Oriented Neural Recommendation: From Collaborative Filtering to Information-Rich Recommendation. *TKDE* (2021).

[37] Le Wu, Junwei Li, Peijie Sun, Richang Hong, Yong Ge, and Meng Wang. 2020. DiffNet++: A Neural Influence and Interest Diffusion Network for Social Recommendation. *TKDE* (2020).

[38] Hongyi Zhang, Moustapha Cissé, Yann Dauphin, and David Lopez-Paz. 2018. Mixup: Beyond Empirical Risk Minimization. *ICLR* (2018).

[39] Jinghao Zhang, Qiang Liu, Shu Wu, and Liang Wang. 2023. Mining Stable Preferences: Adaptive Modality Decorrelation for 멀티미디어 Recommendation. *SIGIR* (2023).

[40] Jinghao Zhang, Yanqiao Zhu, Qiang Liu, Shu Wu, Shuhui Wang, and Liang Wang. 2021. Mining Latent Structures for 멀티미디어 Recommendation. *MM* (2021).

[41] Jinghao Zhang, Yanqiao Zhu, Qiang Liu, Mengqi Zhang, Shu Wu, and Liang Wang. 2023. Latent Structure Mining With Contrastive Modality Fusion for 멀티미디어 Recommendation. *TKDE* (2023).

[42] Xin Zhou and Zhiqi Shen. 2022. A Tale of Two Graphs: Freezing and Denoising Graph Structures for Multimodal Recommendation. *MM* (2022).

[43] Zhihui Zhou, Lili Zhang, and Ning Yang. 2023. Contrastive Collaborative Filtering for Cold-Start Item Recommendation. *WWW* (2023).

[44] Ziwei Zhu, Shahin Sefati, Parsa Saadatpanah, and James Caverlee. 2020. Recommendation for New Users and New Items via Randomized Training and Mixture-of-Experts Transformation. *SIGIR* (2020).