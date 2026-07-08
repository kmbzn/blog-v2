# MONET: Modality-Embracing Graph Convolutional Network and Target-Aware Attention for Multimedia Recommendation

## ABSTRACT

본 논문에서는 multimodal 특징과 user-item 상호작용을 함께 활용하는 graph convolutional network (GCN) 기반 multimedia 추천 시스템에 초점을 맞춥니다. 본 연구는 사용자의 아이템 선호도를 정확하게 포착하기 위해 multimodal 특징을 더욱 효과적으로 활용하는 것을 목표로 합니다. 이를 위해 기존 GCN 기반 multimedia 추천 시스템의 다음 두 가지 한계를 지적합니다. (L1) 사용자가 상호작용한 아이템의 multimodal 특징이 그녀의 아이템 선호도를 드러낼 수 있음에도 불구하고, 기존 방법들은 collaborative 신호 포착에만 초점을 맞추도록 설계된 GCN을 활용하여 최종 user/item 임베딩에 multimodal 특징이 충분히 반영되지 않습니다. (L2) 사용자가 target 아이템을 선호할지 여부는 그 아이템의 multimodal 특징을 고려하여 결정됨에도 불구하고, 기존 방법들은 target 아이템의 multimodal 특징과 무관하게 사용자를 단일 임베딩으로만 표현한 후 이 임베딩을 사용하여 target 아이템에 대한 선호도를 예측합니다. 이러한 문제를 해결하기 위해 다음 두 가지 아이디어로 구성된 새로운 multimedia 추천 시스템 MONET를 제안합니다. modality-embracing GCN (MeGCN)과 target-aware attention입니다. 네 가지 실제 데이터셋을 사용한 광범위한 실험을 통해 i) 일곱 가지 최신 경쟁 모델 대비 MONET의 현저한 우수성(최고 경쟁 모델 대비 recall@20 기준 최대 30.32% 높은 정확도)과 ii) MONET의 두 아이디어의 효과성을 입증합니다. MONET의 모든 코드는 [https://github.com/Kimyungi/MONET](https://github.com/Kimyungi/MONET) 에서 확인할 수 있습니다.

**Figure 1: 텍스트 및 시각 modality에 대해 Amazon Women Clothing 데이터셋에서 i) 상호작용한 아이템의 modality 특징과 상호작용하지 않은 아이템의 modality 특징 간 평균 유사도(I–N sim.), 그리고 ii) 상호작용한 아이템들 간의 modality 특징 평균 유사도(I–I sim.)**

## 1. INTRODUCTION

사용자 선호도를 드러내는 user-item 상호작용(예: 사용자의 구매 이력 및 클릭 로그)의 희소한(sparse) 특성을 완화하기 위해, 많은 추천 시스템은 텍스트 및 시각 modality를 포함한 아이템의 multimodal 데이터와 같은 부가 정보(side information)를 활용하는 경향이 있습니다.

이러한 아이템의 multimodal 데이터를 사용하는 이른바 multimedia 추천 시스템은 recurrent neural network나 convolutional neural network와 같은 사전 학습된 딥러닝 모델을 통해 아이템의 각 modality에 대한 임베딩(즉, modality 특징)을 미리 생성한 다음, 이러한 modality 특징을 user-item 상호작용에 추가로 활용합니다. 초기 연구에서 대부분의 multimedia 추천 시스템은 텍스트 및 시각 modality 특징(즉, multimodal 특징)으로 user/item 임베딩을 표현하고, user-item 상호작용을 학습하여 이러한 user/item 임베딩을 정제합니다. 이를 통해 multimedia 추천 시스템은 사용자의 아이템 선호도를 더 정밀하게 포착할 수 있게 되어 추천 정확도가 향상됩니다.

여기서 자연스럽게 떠오르는 질문은 "왜 multimodal 특징을 사용하는 것이 사용자의 아이템 선호도를 포착하는 데 도움이 되는가?"입니다. 안타깝게도, 우리가 아는 한 이 질문에 직접 답하는 연구는 없었습니다. 따라서 이를 명확히 하기 위해 사용자의 행동(특히 구매)에 초점을 맞춥니다. 사용자가 아이템을 구매할지 여부를 결정할 때, 그녀는 아이템의 본질적 속성을 드러내는 multimodal 데이터를 고려하는 경향이 있습니다. 이러한 경향을 바탕으로, 우리는 각 사용자에 대해 상호작용한 아이템의 modality 특징과 상호작용하지 않은 아이템의 modality 특징 사이에 차이가 존재할 것이라고 추측합니다. 이 추측이 실제로 성립하는지 확인하기 위해, multimedia 추천 시스템 연구에서 널리 사용되는 실제 Amazon 데이터셋(특히 Women Clothing)을 사용하여 각 사용자별로 상호작용한 아이템의 modality 특징과 상호작용하지 않은 아이템의 modality 특징 간의 평균 코사인 유사도(간단히 I–N similarity)를 계산합니다. 비교를 위해 각 사용자별로 상호작용한 아이템들 간의 modality 특징의 평균 코사인 유사도(간단히 I–I similarity)도 계산합니다. 이후 모든 사용자에 대한 I–N similarity의 평균과 I–I similarity의 평균을 취하여 각 modality에 대해 Figure 1에 제시합니다. 결과를 보면, modality 특징이 user-item 상호작용과 무관하게 사전 학습된 딥러닝 모델을 통해 생성됨에도 불구하고, 텍스트 및 시각 modality에서 I–I similarity의 평균이 I–N similarity의 평균보다 각각 26.87%, 29.39% 높게 나타납니다. 이 결과는 각 사용자에 대해 상호작용한 아이템과 상호작용하지 않은 아이템의 multimodal 특징 사이에 내재적인 차이가 존재함을 시사합니다. 다시 말해, 사용자의 선호도가 그녀가 상호작용한 아이템의 multimodal 특징을 통해 드러날 수 있다는 것을 나타냅니다. 따라서 우리는 사용자의 아이템 선호도를 더 정밀하게 포착하기 위해 최종 user/item 임베딩에 multimodal 특징을 신중하게 반영하는 새로운 접근 방식을 고안하고자 합니다.

**(Idea 1)** 한편, graph convolutional network (GCN) 기반 추천 시스템은 사용자(또는 아이템) 간의 행동 유사성을 드러내기 위해 user-item 상호작용에 내재된 collaborative 신호를 명시적으로 포착함으로써 정확도를 향상시키는 데 활발히 연구되어 왔습니다. 추천 시스템에서 GCN의 힘을 활용하기 위해 multimedia 추천 시스템 또한 GCN을 채택해 왔습니다. GCN 기반 multimedia 추천 시스템의 성공에도 불구하고, 우리는 이들이 사용자 선호도 포착에 다음과 같은 한계가 있다고 주장합니다. 즉, 최종 user/item 임베딩에 multimodal 특징을 충분히 반영하지 못한다는 것입니다. 이는 GCN을 통한 이웃 집계(neighborhood aggregation) 방식이 오히려 user/item 임베딩에 multimodal 특징을 반영하는 효과를 방해하기 때문입니다. 그럼에도 불구하고 GCN을 통해 collaborative 신호를 명시적으로 포착하는 것은 여전히 multimedia 추천 정확도를 향상시키는 데 효과적입니다. 더욱이 one-hop 이웃뿐만 아니라 multi-hop 이웃의 multimodal 특징도 사용자 선호도 포착에 도움이 될 것입니다. 이러한 주장들은 Section 3에서 실증적으로 검증됩니다. 따라서 우리는 modality 특징과 collaborative 신호를 모두 균형 있게 최종 user/item 임베딩에 통합할 수 있는 새로운 GCN을 설계하고자 합니다.

**(Idea 2)** 사용자의 아이템 선호도를 포착하는 데에는 또 다른 과제가 있습니다. 기존 GCN 기반 multimedia 추천 시스템은 사용자를 모든 상호작용한 아이템에 대한 관심이 동일하게 반영된 단일 임베딩(간단히 사용자의 일반(general) 임베딩)으로 표현합니다. 그런 다음 이 사용자의 일반 임베딩을 사용하여 상호작용하지 않은 아이템(즉, target 아이템)에 대한 선호도를 예측합니다. 그러나 사용자가 target 아이템을 선호할지 결정할 때, 상호작용한 아이템의 multimodal 특징이 target 아이템의 multimodal 특징과 관련이 깊을수록 그녀는 이 상호작용한 아이템에 대한 자신의 관심을 더 많이 고려하게 됩니다. 예를 들어, Figure 2에서 보이듯이, 주로 부츠, 스포츠웨어, 트레이닝화를 구매한 사용자 u가 target 아이템(즉, Pegasus 39)을 구매할지 결정할 때, 그녀는 스포츠웨어(혹은 부츠)에 대한 관심보다 트레이닝화에 대한 관심을 더 많이 고려할 가능성이 높습니다. 이는 트레이닝화의 텍스트 및 시각 modality가 Pegasus 39의 그것과 유사하지만, 스포츠웨어의 시각 modality(혹은 부츠의 텍스트 modality)는 Pegasus 39의 그것과 상당히 다르기 때문입니다. 따라서 우리는 multimodal 특징 측면에서 target 아이템과 더 관련이 깊은 상호작용 아이템에 대한 관심이 더 많이 반영되는 target-oriented 사용자 임베딩을 생성할 필요가 있다고 주장합니다.

본 논문에서는 위에서 언급한 두 가지 한계를 해결하여 사용자의 아이템 선호도를 더 정밀하게 포착하는 것을 목표로 합니다. 이를 위해 다음 두 가지 모듈을 기반으로 한 새로운 multimedia 추천 방법 MONET를 제안합니다. (M1) 최종 user/item 임베딩에 modality 특징과 collaborative 신호를 모두 성공적으로 반영할 수 있는 MOdality-embracing graph convolutional NEtwork (MeGCN), (M2) target 아이템의 multimodal 특징을 고려하는 사용자의 target-oriented 임베딩을 생성하는 Target-aware attention입니다.

본 논문의 기여를 요약하면 다음과 같습니다.

- **중요한 관찰**: 사용자 선호도를 정밀하게 포착하는 데 있어 기존 GCN 기반 multimedia 추천 시스템의 두 가지 한계를 지적합니다.
 - (L1) collaborative 신호 포착에만 초점을 맞추도록 설계된 GCN을 활용하기 때문에 최종 user/item 임베딩에 multimodal 특징이 불충분하게 반영됩니다.
 - (L2) target 아이템의 multimodal 특징과 무관하게 사용자의 일반 임베딩을 생성한 후, 이 (단일) 사용자 임베딩을 사용하여 target 아이템에 대한 선호도를 예측합니다.
- **새로운 방법론**: 이 두 가지 한계를 극복하기 위해 MeGCN과 target-aware attention을 기반으로 한 새로운 multimedia 추천 방법 MONET를 제안합니다.
- **광범위한 평가**: 네 가지 실제 데이터셋에 대한 광범위한 실험을 통해 MONET의 타당성과 효과성을 검증합니다. 가장 중요하게는, MONET가 최신 방법인 MMGCN, GRCN, LATTICE, MARIO 대비 recall@20 기준으로 각각 최대 136.31%, 41.97%, 31.53%, 30.32% 일관되고 현저하게 우수한 성능을 보입니다.

## 2. RELATED WORK

이 섹션에서는 기존 multimedia 추천 시스템을 검토하고 그 한계를 논의합니다.

### GCN 기반이 아닌 Multimedia 추천 시스템

초기 multimedia 추천 시스템은 multimodal 특징으로 user/item 임베딩을 표현하고 user-item 상호작용을 학습하여 이를 정제합니다. 구체적으로, VBPR은 시각 modality 특징으로 user/item 임베딩을 표현하고 이를 matrix factorization (MF) 모델과 결합했습니다. JRL은 각 user/item을 세 가지 관점(즉, 텍스트 modality, 시각 modality, 수치 평점)의 임베딩으로 표현하고 딥러닝 기법을 통해 이러한 임베딩을 각 user/item의 통합 임베딩으로 결합했습니다. VECF는 시각 modality 특징으로 user/item 임베딩을 표현하고, 추가로 텍스트 modality(특히 user-item 리뷰)를 활용하여 이러한 user/item 임베딩을 학습했습니다.

최근에는 multimodal 특징으로 user/item 임베딩을 표현하는 것을 넘어, MARIO의 저자들이 multimedia 추천에서 최종 아이템 임베딩에 modality 특징을 보존하는 것의 중요성을 처음으로 주장했습니다. 이를 위해 그들은 새로운 modality preservation (MP) 손실을 제안했습니다. MP 손실의 효과성을 입증하기 위해, 각 아이템이 최종 임베딩에서 자신의 modality 특징을 얼마나 잃는지 정량화하기 위한 modality m에 대한 average difference 개념(간단히 avg.diff_m)을 정의했습니다. 이 지표의 점수가 작을수록 최종 아이템 임베딩에 modality 특징이 더 잘 보존됩니다.

### GCN 기반 Multimedia 추천 시스템

정확도 향상 측면에서 collaborative 신호를 명시적으로 포착하는 이점을 활용하면서, GCN 기반 multimedia 추천 시스템은 주로 다음 두 가지 목적 중 하나를 위해 multimodal 특징을 활용합니다. (P1) user/item 임베딩 표현, (P2) 노드 간 관계 정제입니다. (P1)을 위해, MMGCN은 먼저 user-item 상호작용 이분 그래프를 구축하고 각 modality에 대해 modality 특징을 기반으로 아이템 임베딩을, 사용자 임베딩을 무작위로 초기화했습니다. 그런 다음 가중치 행렬과 활성화 함수를 사용하는 non-linear propagation뿐만 아니라, 각 레이어에서 노드 자신의 임베딩을 더하는 self-connection을 기반으로 한 GCN을 각 modality에 대해 독립적으로 적용했습니다. (P2)를 위해, GRCN과 LATTICE는 각각 user-item 관계와 item-item 관계를 정제했습니다. 구체적으로, GRCN은 multimodal 특징을 활용하여 user-item 상호작용 이분 그래프의 노이즈 엣지를 정제했습니다. 이후 정제된 그래프의 user/item 임베딩을 무작위로 초기화하고, 가중치 행렬과 활성화 함수를 사용하지 않는 linear propagation뿐만 아니라 각 노드의 모든 레이어 임베딩을 한 번에 집계하는 layer combination을 기반으로 한 GCN을 적용했습니다. LATTICE는 multimodal 특징을 사용하여 잠재적인 item-item 그래프를 구성하고 linear propagation을 기반으로 한 GCN을 적용하여 구성된 그래프에서 무작위로 초기화된 아이템 임베딩을 학습했습니다. 그런 다음 이러한 아이템 임베딩을 collaborative filtering (CF) 방법(특히 linear propagation뿐만 아니라 layer combination을 기반으로 한 GCN을 적용하는 LightGCN)과 결합했습니다. 위의 GCN 기반 방법들을 원본 GCN 및 LightGCN과 함께 언급된 GCN 기법 측면에서 Table 1에 정리합니다.

### 논의

앞서 언급한 방법들은 target 아이템의 multimodal 특징과 무관하게 각 사용자를 단일 임베딩으로 표현했습니다. 따라서 이들은 사용자가 주어진 target 아이템을 선호할지 결정할 때, 그녀가 상호작용한 아이템의 multimodal 특징이 target 아이템의 multimodal 특징과 관련이 깊을수록 그녀가 이 상호작용한 아이템에 대한 관심을 더 많이 고려한다는 사실을 수용할 수 없습니다. 더욱이, MARIO를 제외한 기존 방법들은 최종 아이템 임베딩에 modality 특징을 보존하는 것의 중요성을 인식하지 못했습니다. 한편, MARIO는 최근 최종 아이템 임베딩에 modality 특징을 보존하는 것이 multimedia 추천의 정확도 향상에 도움이 된다는 것을 보여주며 multimedia 추천에서 최신 성능을 달성했습니다. 그러나 GCN이 아닌 단순 MF에 기반하기 때문에 multi-hop 이웃의 multimodal 특징을 통해 드러날 수 있는 사용자 선호도를 포착할 수 없습니다. 따라서 GCN을 활용하여 최종 user/item 임베딩에 multimodal 특징을 성공적으로 반영하는 한, multimedia 추천의 정확도에는 여전히 개선의 여지가 있습니다. 그러나 기존 GCN은 그 이웃 집계 방식 때문에 최종 user/item 임베딩에 multimodal 특징을 충분히 반영하는 것이 어렵습니다.

## 3. PRELIMINARIES

이 섹션에서는 다음 두 가지 주장을 검증합니다. (C1) user/item 임베딩 표현을 위해 multimodal 특징을 활용하는 기존 GCN 기반 multimedia 추천 시스템(특히 MMGCN)은 최종 user/item 임베딩에 multimodal 특징을 불충분하게 반영합니다. (C2) 그럼에도 불구하고 GCN은 여전히 multimedia 추천의 정확도 향상에 효과적입니다. 이를 위해 실제 Amazon Women Clothing 데이터셋에서 서로 다른 GCN 기법 조합(Table 1 참조)을 갖춘 MMGCN의 변형들을 사용하여 실험을 수행했습니다. 공정한 비교를 위해 광범위한 그리드 탐색을 통해 MMGCN의 하이퍼파라미터를 조정하고, 조정된 최적 하이퍼파라미터를 모든 변형에 사용했습니다. 또한 각 지표에 대해 5회의 독립적인 평가에서 얻은 값의 평균을 보고합니다.

### GCN 설계에 대한 실험 분석

주장 (C1)을 검증하기 위해, non-linear propagation과 self-connection을 기반으로 한 GCN을 적용하는 MMGCN을 GCN 기법에 따른 다음 세 가지 변형과 비교했습니다. (V1) MMGCN-n: non-linear propagation과 linear propagation의 효과를 조사하기 위해 non-linear propagation 대신 linear propagation을 적용하는 MMGCN의 변형, (V2) MMGCN-s: self-connection의 효과를 조사하기 위해 self-connection을 제거한 MMGCN의 변형, (V3) MMGCN-s+l: layer combination의 효과를 조사하기 위해 self-connection 대신 layer combination을 적용하는 MMGCN의 변형입니다. 실증적 검증을 위해, MARIO에서와 동일하게 각 방법이 생성한 최종 아이템 임베딩에 modality 특징이 얼마나 잘 반영되는지 정량화하기 위해 정확도(특히 recall@20)와 avg.diff_m(식 (1)에서 정의됨, m ∈ {t, v})를 모두 측정했습니다. avg.diff_m의 점수가 작을수록 최종 아이템 임베딩에 modality m의 특징이 더 잘 반영됨을 상기합니다.

Table 2는 MMGCN과 그 세 가지 변형에 대해 각각 m ∈ {t, v}에 대한 avg.diff_m과 recall@20을 정리합니다. Table 2로부터 실증 결과를 다음과 같이 요약할 수 있습니다.

i) **MMGCN vs. MMGCN-n**: propagation 단계에서 가중치 행렬과 활성화 함수를 사용하는 것(즉, non-linear propagation)은 본질적으로 modality 특징을 왜곡하기 때문에 최종 임베딩에 modality 특징을 반영하는 것을 극도로 방해합니다.

ii) **MMGCN vs. MMGCN-s**: self-connection의 사용은 아이템 자신의 modality 특징을 포함한 임베딩을 표현하기 때문에 최종 임베딩에 modality 특징을 반영하는 데 효과적입니다.

iii) **MMGCN vs. MMGCN-s+l**: self-connection 대신 layer combination을 사용하면 최종 임베딩에 modality 특징을 반영하는 효과가 약화됩니다. 이는 self-connection이 layer combination보다 초기 임베딩(즉, modality 특징)을 더 많이 반영하는 것으로 분석적으로 알려져 있기 때문입니다.

iv) **avg.diff_m과 정확도의 관계**: 모든 경우에서 avg.diff_m의 점수가 낮을수록 정확도가 높습니다. 다시 말해, 최종 임베딩에 modality 특징을 충분한 정도로 반영하는 것이 정확도 향상으로 이어집니다.

첫 번째 실증 결과로부터 우리는 주장 (C1)을 검증했습니다. 또한, propagation 단계에서 modality 특징을 왜곡하지 않으면서 최종 임베딩에 충분히 반영하는 것이 정확도 향상에 중요하다는 것을 입증했습니다.

### GCN의 효과

만약 최종 임베딩에 modality 특징을 더 많이 반영하는 것만이 multimedia 추천의 정확도 향상으로 이어진다면, GCN의 이웃 집계가 실제로 유익하지 않으므로 multimedia 추천 시스템 설계에서 GCN을 사용하지 않는 것을 고려할 수도 있습니다. 그러나 우리는 이웃 집계가 collaborative 신호를 명시적으로 포착하는 데 도움이 되고, multi-hop 이웃뿐만 아니라 one-hop 이웃의 multimodal 특징도 사용자 선호도 포착에 도움이 되어 정확도 향상을 가능하게 한다고 주장합니다(즉, 우리의 주장 (C2)). 이 주장을 검증하기 위해, MMGCN과 GCN이 없는 MMGCN의 변형(즉, GCN 레이어 수가 0인 경우)인 MMGCN-GCN을 비교했습니다.

Figure 3은 recall@20 측면에서 MMGCN과 MMGCN-GCN의 정확도를 보여줍니다. MMGCN-GCN은 MMGCN보다 훨씬 낮은 정확도를 보입니다. 이 결과는 GCN이 높은 multimedia 추천 정확도를 얻는 데 중요한 역할을 한다는 것을 시사합니다.

이러한 통찰에서 영감을 받아, Section 4.2에서 자세히 설명할 linear propagation과 self-connection을 기반으로 한 multimedia 추천에 적합한 새로운 GCN 방법을 제안합니다.

## 4. MONET: PROPOSED METHOD

이 섹션에서는 MeGCN과 target-aware attention을 기반으로 한 제안 방법 MONET를 자세히 설명합니다.

### 4.1 Problem Definition

u ∈ U와 i ∈ I를 각각 사용자와 아이템으로 표기하며, U와 I는 각각 모든 사용자와 모든 아이템의 집합을 나타냅니다. N_u ⊂ I는 사용자 u가 상호작용한 아이템 집합을 나타냅니다. 여기서 아이템 i는 여러 modality(예: 텍스트, 시각, 음향 modality)를 가질 수 있습니다. 본 논문에서는 기존 연구들과 마찬가지로 각 아이템이 텍스트 및 시각 modality를 갖는다고 가정합니다. 따라서 각 아이템은 modality m ∈ {t, v}에 대해 (사전 학습된) modality 특징을 가지며, t와 v는 각각 텍스트와 시각 modality를 나타내고 d_m은 modality m에 대한 특징의 차원을 나타냅니다. multimedia 추천의 목표는 user-item 상호작용뿐만 아니라 아이템의 multimodal 특징도 사용하여 사용자 u가 상호작용하지 않은 아이템 c ∈ I\N_u 중에서 가장 선호할 가능성이 높은 상위 N개의 아이템을 식별하는 것입니다. Table 3은 본 논문에서 사용된 주요 표기를 정리합니다.

### 4.2 Key Components of MONET

이제 MONET의 세 가지 구성 요소(즉, encoder, aggregator, predictor)를 자세히 설명합니다. MONET의 개략적인 개요는 Figure 4에 제시되어 있습니다.

**Encoders.** MONET는 먼저 user-item 상호작용을 user-item 상호작용 이분 그래프 G = (V, E)로 표현합니다. 여기서 V = (U ∪ I)와 E = {(u,i) | u ∈ U, i ∈ N_u}는 각각 노드와 엣지의 집합을 나타냅니다. user-item 상호작용 이분 그래프 G가 주어지면, MONET는 각 modality m에 대해 차원 d를 갖는 사용자 임베딩을 서로 다르게 무작위로 초기화합니다. 아이템 i에 대해, MONET는 modality m의 특징을 그 고수준 특징을 나타내는 초기 아이템 임베딩으로 변환하며, 이는 학습 가능한 가중치 행렬과 편향 벡터를 통해 표현됩니다.

최종 user/item 임베딩에 modality 특징과 collaborative 신호를 모두 충분히 반영하는 것이 높은 정확도를 얻는 데 중요하다는 점을 상기합니다. 이를 달성하기 위해, Section 3의 실증 결과에서 영감을 받아 linear propagation과 self-connection을 기반으로 MeGCN을 설계합니다. MONET는 이 MeGCN을 적용하여 각 modality m에 대해 독립적으로 user/item 임베딩을 학습합니다. 형식적으로, l번째 레이어에서 MeGCN을 통한 modality m에 대한 아이템 임베딩은 사용자 임베딩의 가중 합과 self-connection 항의 합으로 표현됩니다. 여기서 N_i ⊂ U는 아이템 i와 상호작용한 사용자 집합을 나타내고, α는 modality 특징의 반영 정도를 제어하는 self-connection 계수를 나타냅니다. l번째 레이어의 사용자 임베딩도 유사하게 표현될 수 있습니다. 여기서 강조할 점은, MeGCN이 l번째 임베딩에서 이웃의 임베딩과 자신의 임베딩을 기본적으로 유사한 정도로 반영하기 위해 collaborative 신호에 해당하는 첫 번째 항과 달리 self-connection에 해당하는 두 번째 항을 정규화하지 않는다는 것입니다. collaborative 신호와 modality 특징 사이의 관계를 분석하기 위해 Section 5에서 α에 대한 민감도 분석을 제공할 것입니다.

L개의 MeGCN 레이어를 쌓은 후, MONET는 modality m에 대해 L번째 사용자(혹은 아이템) 임베딩을 얻고, 이를 modality m에 대한 결과적인 modality-embraced 사용자(혹은 아이템) 임베딩으로 사용합니다. modality-embraced 임베딩을 활용함으로써, MONET는 아이템 i를 modality m의 특징으로 잘 표현할 수 있을 뿐만 아니라, Figure 1에서 보였듯이 사용자의 선호도가 modality 특징을 통해 드러날 수 있기 때문에 사용자 u의 아이템 선호도를 더 정밀하게 포착할 수 있습니다.

**Aggregator.** 그런 다음 MONET는 ∀m ∈ {t, v}에 대해 modality-embraced 사용자(혹은 아이템) 임베딩을 연결(concatenate)하는 modality fusion 모듈을 통해 융합된 사용자(혹은 아이템) 임베딩을 생성합니다. 이 융합 전략은 단순하지만 ∀m ∈ {t, v}에 대해 modality-embraced 임베딩의 풍부한 정보를 왜곡하지 않고 보존함으로써 융합된 사용자(혹은 아이템) 임베딩을 생성하기 때문에 사용자 u의 아이템 선호도를 더 정밀하게 포착하는 데 효과적입니다. 이 과정에서, 더 높은 정확도를 달성하기 위해 user-item 상호작용만을 학습하여 얻은 추가적인 user/item CF 임베딩을 활용하는 것도 고려했습니다. 그러나 이를 검증하기 위한 실험이 오히려 정확도 향상에 부정적인 영향을 보였기 때문에 최종적으로 이 설계 선택을 채택하지 않았습니다. 우리는 ∀m ∈ {t, v}에 대한 modality-embraced 임베딩이 이미 MeGCN을 통해 user-item 상호작용(즉, CF에서의 사용자 행동)을 잘 포착하고 있기 때문에 이러한 결과가 나타났다고 추측합니다.

이어서, 융합된 사용자 임베딩이 target 아이템 c ∈ I\N_u의 multimodal 특징과 무관하게 생성되었음을 주목합니다. 즉, 융합된 사용자 임베딩은 그녀가 상호작용한 모든 아이템(∀i ∈ N_u)에 대한 관심이 동일하게 반영된 사용자 u의 일반 임베딩에 해당합니다. 그러나 Figure 2에서 보였듯이, 사용자 u의 target 아이템 c에 대한 선호도를 더 정밀하게 포착하기 위해서는 multimodal 특징 측면에서 target 아이템 c와 더 관련이 깊은 상호작용 아이템 i ∈ N_u에 대한 관심이 더 많이 반영되는 사용자 u의 target-oriented 임베딩을 생성할 필요가 있습니다. 이를 위해, 상호작용 아이템 i의 multimodal 특징과 target 아이템 c 사이의 관련성 점수를 기반으로 사용자 u가 상호작용한 아이템 i ∈ N_u에 대한 관심을 집계하여 target-oriented 사용자 임베딩을 생성하는 target-aware attention을 제안합니다. 구체적으로, MONET는 먼저 target 아이템 c의 융합된 임베딩과 사용자 u의 상호작용 아이템 i의 융합된 임베딩 사이의 관련성 점수를 계산합니다. 그런 다음 ∀i ∈ N_u에 대한 관련성 점수를 기반으로 융합된 아이템 임베딩을 집계하여 target-oriented 사용자 임베딩을 얻습니다.

**Predictor.** 마지막으로, MONET는 사용자 u의 target 아이템 c에 대한 선호도를 예측합니다. 융합된 사용자 임베딩(즉, 일반 임베딩)이 사용자 u의 일반적인 관심을 담고 있기 때문에 여전히 사용자 u를 표현하는 데 유용하다는 점을 주목할 가치가 있습니다. 따라서 MONET는 사용자 u의 융합된 임베딩과 target-oriented 임베딩을 모두 활용합니다. 구체적으로, MONET는 먼저 내적(dot-product)을 통해 사용자 u의 융합된 임베딩과 target 아이템 c의 융합된 임베딩 사이의 매칭 점수를 계산합니다. 다음으로, MONET는 내적을 통해 사용자 u의 target-oriented 임베딩과 target 아이템 c의 융합된 임베딩 사이의 매칭 점수를 계산합니다. 마지막으로, MONET는 두 매칭 점수를 모두 활용하여 사용자 u의 target 아이템 c에 대한 선호도를 예측합니다. 여기서 β ∈ (0, 1)는 두 매칭 점수 사이의 균형을 조정하는 파라미터입니다. 두 매칭 점수를 모두 활용함으로써, MONET는 두 매칭 점수가 사용자 u의 선호도의 서로 다르지만 중요한 측면을 포착하기 때문에 target 아이템 c에 대한 사용자 u의 선호도를 더 정밀하게 포착할 수 있으며, 이는 Section 5에서 실증적으로 검증될 것입니다.

### 4.3 Optimization

multimedia 추천 시스템 최적화에 널리 사용되는 Bayesian Personalized Ranking (BPR) 손실을 채택하여 MONET의 학습 가능한 파라미터를 학습합니다. 이를 통해 사용자가 상호작용한 아이템에 대한 선호도가 상호작용하지 않은 아이템에 대한 선호도보다 높아지도록 합니다.

## 5. EVALUATION

이 섹션에서는 다음과 같은 주요 연구 질문(RQ)에 답하기 위해 광범위한 실험을 수행합니다.

- **RQ1**: MONET는 최신 GCN 기반 추천 시스템 및 최신 multimedia 추천 시스템보다 더 정확한 top-N 추천을 제공하는가?
- **RQ2**: MONET는 다른 방법보다 최종 임베딩에 modality 특징을 더 잘 반영하는가?
- **RQ3**: MONET의 두 모듈(MeGCN과 target-aware attention)은 정확도 향상에 효과적인가?
- **RQ4**: MONET의 정확도는 하이퍼파라미터 α와 β에 얼마나 민감한가?

### 5.1 Experimental Settings

**Datasets.** multimedia 추천 연구에서 공개적으로 이용 가능하고 널리 사용되는 실제 Amazon 데이터셋의 다음 네 가지 카테고리를 사용했습니다. Women Clothing, Men Clothing, Beauty, Toys & Games입니다. 이들 모두 텍스트 및 시각 modality와 user-item 상호작용을 포함하며, 각 user/item은 최소 5개의 상호작용을 갖습니다. Table 4는 네 가지 데이터셋의 통계를 제공합니다.

**Competitors.** MONET의 효과성을 평가하기 위해 일곱 가지 최신 경쟁 모델과 비교했습니다. 이들은 두 그룹으로 나뉠 수 있습니다. GCN 기반 추천 시스템(NGCF, LightGCN)과 multimedia 추천 시스템(VBPR, MMGCN, GRCN, LATTICE, MARIO)입니다. GCN 기반 추천 시스템의 경우 user-item 상호작용만 사용했습니다. multimedia 추천 시스템의 경우 user-item 상호작용뿐만 아니라 텍스트 및 시각 modality도 사용했습니다.

**Evaluation Protocols.** 테스트를 위해, 각 데이터셋에서 각 사용자의 상호작용 중 80%를 무작위로 선택하여 학습 세트를, 다른 10%를 검증 세트를, 나머지 10%를 테스트 세트를 구성했으며, 이는 기존 연구들과 동일합니다. 그런 다음 각 방법을 사용하여 top-20 추천을 수행하고 precision, recall, normalized discounted cumulative gain (NDCG) 측면에서 정확도를 평가했습니다. 각 지표에 대해 5회의 독립적인 평가에서 얻은 값의 평균을 보고합니다.

**Implementation Details.** 기존 연구들을 따라, 텍스트 및 시각 modality에 대해 사전 학습된 sentence-transformers와 ImageNet으로 각각 추출한 1,024차원 및 4,096차원 특징을 사용했습니다. 공정한 비교를 위해 MONET를 포함한 모든 방법에 대해 임베딩 차원 d를 기존 연구들과 동일하게 64로 설정했습니다. 그런 다음 다음과 같은 범위에서 검증 세트에 대한 광범위한 그리드 탐색을 통해 얻은 경쟁 모델과 MONET의 최적 하이퍼파라미터를 사용했습니다. 학습률은 {0.0001, 0.0005, 0.001, 0.005, 0.01}에서, 정규화 가중치 λ는 {0, 0.00001, 0.0001, 0.001, 0.01}에서, GCN을 사용하는 방법의 GCN 레이어 수 L은 {1, 2, 3, 4}에서 탐색했습니다. MONET의 경우 하이퍼파라미터를 다음과 같이 설정했습니다. 학습률 = 0.0001, λ = 0.00001, L = 2, α = 1, β = Toys & Games에서는 0.5, 다른 데이터셋에서는 0.3입니다.

### 5.2 Results and Analysis

지면 제약으로 인해 RQ1을 제외한 다른 RQ에 대해서는 Women Clothing의 결과만 여기에 제시합니다. 다른 데이터셋의 결과는 별도 사이트에서 확인할 수 있습니다. 간단하게 다음 표와 그림에서 precision@20과 recall@20을 각각 P@20, R@20으로 표기합니다. 또한 다음 표의 각 열(즉, 지표)에서 최고 및 차상위 결과를 각각 굵게 표시와 밑줄로 강조합니다.

**RQ1: 일곱 가지 경쟁 모델과의 비교.** Table 5는 모든 경쟁 모델과 MONET의 결과를 보여줍니다. 결과는 다음과 같이 요약됩니다.

i) 가장 중요하게, MONET는 모든 데이터셋과 모든 지표에서 일관되고 현저하게 모든 경쟁 모델보다 우수한 성능을 보입니다. 구체적으로, Women Clothing, Men Clothing, Beauty, Toys & Games에서 MONET는 recall@20 기준으로 최고 경쟁 모델(즉, LATTICE와 MARIO)을 각각 최대 30.32%, 30.03%, 13.06%, 17.73% 능가합니다. 기존 최신 multimedia 추천 방법들의 논문에서 보고된 바에 따르면 최고 경쟁 모델 대비 recall@20 기준으로 평균 약 9.15%, 최대 17.62%의 개선을 보이는 경향이 있다는 점에서 이는 극적인 개선입니다.

ii) MF 기반 multimedia 추천 방법인 VBPR은 multimodal 특징을 추가로 사용함에도 불구하고 user-item 상호작용만 사용하는 LightGCN보다 일반적으로 낮은 정확도를 보입니다. 이는 GCN을 통해 collaborative 신호를 명시적으로 포착하는 것이 multimedia 추천의 정확도 향상에 중요한 역할을 한다는 것을 나타냅니다.

iii) MMGCN은 multimodal 특징을 추가로 사용함에도 불구하고 LightGCN보다 일관되게 낮은 정확도를 보입니다. 이는 Section 3에서 보였듯이 non-linear propagation이 최종 임베딩에 modality 특징을 반영하는 것을 극도로 방해하기 때문입니다. 또한 non-linear propagation은 collaborative 신호의 반영에도 부정적인 영향을 미칩니다. 이는 linear propagation을 사용하는 것이 정확도 향상에 역할을 한다는 것을 시사합니다.

iv) MARIO는 MP 손실을 통해 최종 임베딩에 modality 특징을 보존하려고 시도하기 때문에 대부분의 다른 경쟁 모델보다 일반적으로 우수한 성능을 보입니다. 이 결과는 최종 임베딩에 modality 특징을 충분히 반영하는 것이 정확도 향상에 중요하다는 우리의 주장을 다시 한번 뒷받침합니다.

**RQ2: Modality 특징 반영에 있어 MONET의 효과성.** MONET가 다른 방법(특히 MMGCN과 MARIO)보다 최종 임베딩에 modality 특징을 더 잘 반영하는지 검증하기 위해, Section 3에서와 같이 ∀m ∈ {t, v}에 대한 avg.diff_m 측면에서 MONET를 이들과 비교합니다. avg.diff_m의 점수가 작을수록 최종 임베딩에 modality m의 특징이 더 잘 반영됨을 상기합니다.

Figure 5는 MMGCN, MARIO, MONET의 결과를 보여줍니다. ∀m ∈ {t, v}에 대해, MARIO의 avg.diff_m 점수는 MMGCN의 점수보다 상당히 작습니다. 이는 MARIO가 GCN을 통한 이웃 집계를 수행하지 않고 최종 임베딩에 modality 특징을 보존하려고 시도하기 때문에 다소 당연한 결과입니다. 그러나 MeGCN을 통해 이웃 집계를 수행함에도 불구하고, ∀m ∈ {t, v}에 대해 MONET가 MARIO와 비슷한 avg.diff_m 점수를 제공한다는 점에 주목할 필요가 있습니다. 이는 MeGCN의 설계가 최종 임베딩에 modality 특징을 반영하는 데 도움이 된다는 것을 뒷받침합니다. 더욱이, one/multi-hop 이웃의 modality 특징을 통해 드러날 수 있는 사용자 선호도를 포착하는 MeGCN을 사용함으로써, MONET는 MARIO를 현저하게 능가합니다(Table 5 참조).

**RQ3: MeGCN과 Target-Aware Attention의 효과성.** MONET는 두 가지 모듈로 MeGCN과 target-aware attention을 채택합니다. 이러한 모듈의 효과성을 검증하기 위해, MONET를 각각 MeGCN 대신 LightGCN을 사용하는 MONET-MeGCN, target-aware attention 없이 MeGCN만 사용하는 MONET-TA라는 두 가지 변형과 비교합니다.

Table 6에서 보이듯이, MONET는 모든 지표에서 두 변형보다 우수한 성능을 보입니다. 구체적으로, MONET는 precision/recall/NDCG@20 기준으로 MONET-MeGCN(혹은 MONET-TA)을 각각 최대 24.87%, 25.08%, 24.49%(혹은 14.28%, 14.26%, 14.36%) 능가합니다. 이러한 결과는 MeGCN과 target-aware attention이 모두 multimedia 추천의 정확도 향상에 중요한 역할을 한다는 것을 나타냅니다. 더욱이, MONET-MeGCN(혹은 MONET-TA)이 MeGCN(혹은 target-aware attention)을 갖추지 않았음에도 불구하고 모든 지표에서 다른 모든 최신 경쟁 모델보다 우수한 성능을 보인다는 점에 주목할 가치가 있습니다(Table 5와 6 참조). 구체적으로, MONET-MeGCN(혹은 MONET-TA)은 precision/recall/NDCG@20 기준으로 최고 경쟁 모델(즉, MARIO)을 각각 최대 3.09%, 4.13%, 3.49%(혹은 12.64%, 14.00%, 12.65%) 능가합니다. 이러한 결과는 MeGCN이나 target-aware attention 단독으로도 multimedia 추천의 정확도 향상에 유익하다는 것을 검증합니다.

**RQ4: 하이퍼파라미터 민감도 분석.** 식 (3)의 파라미터 α는 MeGCN의 propagation 단계에서 modality 특징의 반영 정도를 제어합니다. collaborative 신호와 modality 특징 사이의 관계에 대한 통찰을 제공하기 위해, α의 다양한 값에 따라 MONET의 정확도와 avg.diff_m이 어떻게 변하는지 분석합니다. Figure 6에서 정확도는 α가 1.0에 도달할 때까지 꾸준히 증가한 다음 점진적으로 감소하는 것을 관찰할 수 있습니다. 구체적으로, α = 0인 경우와 비교하여 α = 1.0일 때 MONET는 precision/recall/NDCG@20 기준으로 각각 최대 111.91%, 112.23%, 118.73%의 개선을 보입니다. 또한 α가 증가함에 따라 avg.diff_m이 점진적으로 감소하는 것을 관찰합니다. 이러한 결과는 i) α 값이 작으면 최종 임베딩에 modality 특징이 충분히 반영되지 않아(즉, ∀m ∈ {t, v}에 대해 높은 avg.diff_m) 낮은 정확도를 초래하고, ii) α 값이 크면 collaborative 신호가 충분히 반영되지 않고 최종 임베딩에 modality 특징만 반영되어(즉, ∀m ∈ {t, v}에 대해 낮은 avg.diff_m) 낮은 정확도를 초래한다는 것을 보여줍니다. 이는 modality 특징과 collaborative 신호를 모두 적절하게 반영하기 위한 α 값을 결정하는 것이 정확도 향상에 중요한 역할을 한다는 것을 시사합니다.

식 (6)의 파라미터 β는 각각 사용자의 일반 임베딩과 target-oriented 임베딩을 활용하여 계산된 두 매칭 점수 사이의 균형을 조정합니다. β의 다양한 값에 따라 MONET의 정확도가 어떻게 달라지는지 분석합니다. Figure 7에서 보이듯이, precision/recall/NDCG@20 측면의 모든 정확도는 β가 0.3에 도달할 때까지 꾸준히 증가한 다음 점진적으로 감소합니다. 구체적으로, 일반(혹은 target-oriented) 사용자 임베딩만 활용하는 β = 0(혹은 β = 1)인 경우와 비교하여 β = 0.3일 때 MONET는 precision/recall/NDCG@20 기준으로 각각 최대 14.28%, 14.26%, 14.36%(혹은 18.31%, 18.59%, 21.90%)의 개선을 보입니다. 이러한 결과는 각 사용자의 일반 임베딩과 target-oriented 임베딩을 모두 활용하는 것이 target 아이템에 대한 사용자의 선호도를 더 정밀하게 포착하는 데 도움이 되어 정확도를 향상시킨다는 것을 나타냅니다.

## 6. CONCLUSIONS AND FUTURE WORK

본 논문에서는 target 아이템에 대한 사용자 선호도를 더 정밀하게 포착한다는 의미에서 다음 두 가지 중요한 점을 입증했습니다. (1) user-item 상호작용의 multimodal 특징과 collaborative 신호가 모두 최종 user/item 임베딩에 잘 반영되어야 한다는 점, (2) multimodal 특징 측면에서 target 아이템과 더 관련이 깊은 상호작용 아이템에 대한 관심이 더 많이 반영되는 target-oriented 사용자 임베딩을 생성할 필요가 있다는 점입니다. 이를 바탕으로, MeGCN과 target-aware attention을 기반으로 구축된 새로운 GCN 기반 multimedia 추천 방법 MONET를 제안했습니다. 네 가지 실제 데이터셋에 대한 광범위한 실험을 통해 i) MONET가 일곱 가지 최신 경쟁 모델보다 일관되고 현저하게 우수한 성능(최고 경쟁 모델 대비 recall@20 기준 최대 30.32% 높은 정확도)을 보이고, ii) 두 모듈 중 하나만 채택해도 최고 경쟁 모델보다 우수한 성능을 보이며, 이로 인해 두 모듈을 모두 갖춘 최종 MONET가 multimedia 추천에서 가장 높은 정확도를 달성한다는 것을 입증했습니다.

modality-embraced 임베딩을 설계하는 본 연구의 방법론은 노드 특징이 중요한 다른 도메인(예: 지식 그래프)에 쉽고 효과적으로 적용될 수 있습니다. 따라서 향후 연구 방향으로서, 이러한 도메인에서 관련 downstream 작업을 해결하기 위해 MeGCN을 활용하는 것에 관심을 두고 있습니다.

## ACKNOWLEDGMENT

Sang-Wook Kim의 연구는 한국 정부(MSIT)의 재원으로 정보통신기획평가원(IITP)의 지원을 받아 수행되었습니다(No. 2022-0-00352, No. RS-2022-00155586, No. 2020-0-01373). Won-Yong Shin의 연구는 한국 정부(MSIT)의 재원으로 한국연구재단(NRF)의 지원을 받아 수행되었습니다(Grant RS-2023-00220762).

## REFERENCES

[1] Yang Bao, Hui Fang, and Jie Zhang. 2014. TopicMF: Simultaneously Exploiting Ratings and Reviews for Recommendation. *AAAI*. 2–8.

[2] Lei Chen, Le Wu, Richang Hong, Kun Zhang, and Meng Wang. 2020. Revisiting Graph Based Collaborative Filtering: A Linear Residual Graph Convolutional Network Approach. *AAAI*. 27–34.

[3] Xu Chen, Hanxiong Chen, Hongteng Xu, Yongfeng Zhang, Yixin Cao, Zheng Qin, and Hongyuan Zha. 2019. Personalized Fashion Recommendation with Visual Explanations based on Multimodal Attention Network: Towards Visually Explainable Recommendation. *ACM SIGIR*. 765–774.

[4] Paul Covington, Jay Adams, and Emre Sargin. 2016. Deep Neural Networks for YouTube Recommendations. *ACM RecSys*. 191–198.

[5] Ruining He and Julian J. McAuley. 2016. VBPR: Visual Bayesian Personalized Ranking from Implicit Feedback. *AAAI*. 144–150.

[6] Xiangnan He, Kuan Deng, Xiang Wang, Yan Li, Yong-Dong Zhang, and Meng Wang. 2020. LightGCN: Simplifying and Powering Graph Convolution Network for Recommendation. *ACM SIGIR*. 639–648.

[7] Sepp Hochreiter and Jürgen Schmidhuber. 1997. Long Short-Term Memory. *Neural computation* (1997), 1735–1780.

[8] Dong Hyun Kim, Chanyoung Park, Jinoh Oh, Sungyoung Lee, and Hwanjo Yu. 2016. Convolutional Matrix Factorization for Document Context-Aware Recommendation. *ACM RecSys*. 233–240.

[9] Taeri Kim, Yeon-Chang Lee, Kijung Shin, and Sang-Wook Kim. 2022. MARIO: Modality-Aware Attention and Modality-Preserving Decoders for Multimedia Recommendation. *ACM CIKM*. 993–1002.

[10] Thomas N Kipf and Max Welling. 2016. Variational Graph Auto-encoders. *arXiv preprint arXiv:1611.07308* (2016).

[11] Thomas N. Kipf and Max Welling. 2017. Semi-Supervised Classification with Graph Convolutional Networks. *ICLR*.

[12] Taeyong Kong, Taeri Kim, Jinsung Jeon, Jeongwhan Choi, Yeon-Chang Lee, Noseong Park, and Sang-Wook Kim. 2022. Linear, or Non-Linear, That is the Question!. *ACM WSDM*. 517–525.

[13] Alex Krizhevsky, Ilya Sutskever, and Geoffrey E. Hinton. 2012. ImageNet Classification with Deep Convolutional Neural Networks. *NeurIPS*. 1106–1114.

[14] Hongjun Lim, Yeon-Chang Lee, Jin-Seo Lee, Sanggyu Han, Seunghyeon Kim, Yeon Jeong Jeong, Changbong Kim, Jaehun Kim, Sunghoon Han, Solbi Choi, Hanjong Ko, Dokyeong Lee, Jaeho Choi, Yungi Kim, Hong-Kyun Bae, Taeho Kim, Jeewon Ahn, Hyun-Soung You, and Sang-Wook Kim. 2022. AiRS: A Large-Scale Recommender System at NAVER News. *IEEE ICDE*. 3386–3398.

[15] Qiang Liu, Shu Wu, and Liang Wang. 2017. DeepStyle: Learning User Preferences for Visual Recommendation. *ACM SIGIR*. 841–844.

[16] Julian J. McAuley, Christopher Targett, Qinfeng Shi, and Anton van den Hengel. 2015. Image-Based Recommendations on Styles and Substitutes. *ACM SIGIR*. 43–52.

[17] Jin-Duk Park, Siqing Li, Xin Cao, and Won-Yong Shin. 2023. Criteria Tell You More than Ratings: Criteria Preference-Aware Light Graph Convolution for Effective Multi-Criteria Recommendation. *ACM SIGKDD*. 1808–1819.

[18] Nils Reimers and Iryna Gurevych. 2019. Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks. *EMNLP-IJCNLP*. 3980–3990.

[19] Steffen Rendle, Christoph Freudenthaler, Zeno Gantner, and Lars Schmidt-Thieme. 2009. BPR: Bayesian Personalized Ranking from Implicit Feedback. *UAI*. 452–461.

[20] Changwon Seo, Kyeong-Joong Jeong, Sungsu Lim, and Won-Yong Shin. 2022. SiReN: Sign-Aware Recommendation Using Graph Neural Networks. *IEEE Transactions on Neural Networks and Learning Systems*. 1–15.

[21] Xiang Wang, Xiangnan He, Meng Wang, Fuli Feng, and Tat-Seng Chua. 2019. Neural Graph Collaborative Filtering. *ACM SIGIR*. 165–174.

[22] Yinwei Wei, Xiang Wang, Liqiang Nie, Xiangnan He, and Tat-Seng Chua. 2020. Graph-Refined Convolutional Network for Multimedia Recommendation with Implicit Feedback. *ACM MM*. 3541–3549.

[23] Yinwei Wei, Xiang Wang, Liqiang Nie, Xiangnan He, Richang Hong, and Tat-Seng Chua. 2019. MMGCN: Multi-modal Graph Convolution Network for Personalized Recommendation of Micro-video. *ACM MM*. 1437–1445.

[24] Ji Yang, Xinyang Yi, Derek Zhiyuan Cheng, Lichan Hong, Yang Li, Simon Xiaoming Wang, Taibai Xu, and Ed H. Chi. 2020. Mixed Negative Sampling for Learning Two-tower Neural Networks in Recommendations. *ACM WWW Companion*. 441–447.

[25] Weilong Yao, Jing He, Hua Wang, Yanchun Zhang, and Jie Cao. 2015. Collaborative Topic Ranking: Leveraging Item Meta-Data for Sparsity Reduction. *AAAI*. 374–380.

[26] Haochao Ying, Liang Chen, Yuwen Xiong, and Jian Wu. 2016. Collaborative Deep Ranking: A Hybrid Pair-Wise Recommendation Algorithm with Implicit Feedback. *PAKDD*. 555–567.

[27] Rex Ying, Ruining He, Kaifeng Chen, Pong Eksombatchai, William L. Hamilton, and Jure Leskovec. 2018. Graph Convolutional Neural Networks for Web-Scale Recommender Systems. *ACM SIGKDD*. 974–983.

[28] Jinghao Zhang, Yanqiao Zhu, Qiang Liu, Shu Wu, Shuhui Wang, and Liang Wang. 2021. Mining Latent Structures for Multimedia Recommendation. *ACM MM*. 3872–3880.

[29] Jinghao Zhang, Yanqiao Zhu, Qiang Liu, Mengqi Zhang, Shu Wu, and Liang Wang. 2022. Latent Structure Mining with Contrastive Modality Fusion for Multimedia Recommendation. *IEEE Transactions on Knowledge and Data Engineering* (2022).

[30] Yongfeng Zhang, Qingyao Ai, Xu Chen, and W. Bruce Croft. 2017. Joint Representation Learning for Top-N Recommendation with Heterogeneous Information Sources. *ACM CIKM*. 1449–1458.