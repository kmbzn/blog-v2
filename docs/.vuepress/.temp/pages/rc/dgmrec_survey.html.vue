<template><div><section class="print-section">
<h2 id="_1-introduction" tabindex="-1"><a class="header-anchor" href="#_1-introduction"><span>1. Introduction</span></a></h2>
</section>
<section class="print-section">
<h3 id="_1문단" tabindex="-1"><a class="header-anchor" href="#_1문단"><span>[1문단]</span></a></h3>
<ul>
<li>e-commerce와 소셜 미디어 플랫폼에서 추천 시스템은 사용자 행동과 의사결정을 형성하는 중추적 역할을 합니다.</li>
<li>특히 MF나 GNN 같은 Collaborative Filtering 기반 방법이 개인화 추천에 성공하며 중요성이 커졌습니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_2문단" tabindex="-1"><a class="header-anchor" href="#_2문단"><span>[2문단]</span></a></h3>
<ul>
<li>CF 모델은 사용자 피드백의 희소성이라는 한계를 가지며, 이를 보완하기 위해 이미지, 텍스트 등 다양한 modality를 활용하는 multi-modal 추천 시스템(MRS)이 발전했습니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3문단" tabindex="-1"><a class="header-anchor" href="#_3문단"><span>[3문단]</span></a></h3>
<ul>
<li>MRS가 효과적임에도 실질적인 과제들이 충분히 해결되지 않은 채 남아 있습니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_4문단-c1" tabindex="-1"><a class="header-anchor" href="#_4문단-c1"><span>[4문단] (C1)</span></a></h3>
<ul>
<li>기존 MRS는 모든 modality가 항상 완전하다고 가정하지만 실제 환경에서는 결측이 흔하며, 결측 아이템 제외나 평균값 주입 같은 기존 대응은 여전히 상당한 성능 저하를 보입니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_5문단-c1-분석" tabindex="-1"><a class="header-anchor" href="#_5문단-c1-분석"><span>[5문단] (C1 분석)</span></a></h3>
<ul>
<li>NN 주입 방식이 실패하는 원인을 LGMRec으로 분석한 결과, 주입된 특징이 원래 modality를 제대로 대체하지 못하는 것이 성능 저하의 원인임을 확인했습니다.</li>
<li>modality 특징 의존도가 높은 최신 MRS일수록 저하가 더 심해집니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_6문단-c2" tabindex="-1"><a class="header-anchor" href="#_6문단-c2"><span>[6문단] (C2)</span></a></h3>
<ul>
<li>기존 MRS는 같은 아이템의 서로 다른 modality가 의미를 공유한다고 가정하고 직접 정렬하지만, 이미지는 시각적 속성을, 텍스트는 설명적 정보를 담는 등 각 modality는 고유 정보를 가지므로 이 가정이 항상 성립하지는 않습니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_7문단-c2-분석" tabindex="-1"><a class="header-anchor" href="#_7문단-c2-분석"><span>[7문단] (C2 분석)</span></a></h3>
<ul>
<li>Figure 1(b)에서 같은 아이템의 텍스트와 이미지가 추천 점수에 반대 방향의 기여를 보이는 사례를 통해, 각 modality가 공유되지 않는 고유 정보를 담고 있으며 강제 정렬이 오히려 성능에 악영향을 줄 수 있음을 보였습니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_8문단-mma-rs-한계" tabindex="-1"><a class="header-anchor" href="#_8문단-mma-rs-한계"><span>[8문단] (MMA-RS 한계)</span></a></h3>
<ul>
<li>결측 modality 인식 추천 시스템(MMA-RS)이 존재하지만 결측 상태를 그대로 사용해 modality 고유 특성을 활용하지 못하며, 콘텐츠 기반 접근에 의존해 일반 성능이 CF보다 낮은 경향이 있습니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_9문단-제안" tabindex="-1"><a class="header-anchor" href="#_9문단-제안"><span>[9문단] (제안)</span></a></h3>
<ul>
<li>두 과제를 함께 해결하는 새로운 모델 DGMRec을 제안합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_10문단-c1-해결" tabindex="-1"><a class="header-anchor" href="#_10문단-c1-해결"><span>[10문단] (C1 해결)</span></a></h3>
<ul>
<li>오토인코더로 modality 특징을 재구성하도록 학습하고, 결측 시 다른 modality의 정렬된 특징과 사용자 modality 선호를 활용해 특징을 생성하며, 생성된 특징으로 item-item 그래프를 강화합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_11문단-c2-해결" tabindex="-1"><a class="header-anchor" href="#_11문단-c2-해결"><span>[11문단] (C2 해결)</span></a></h3>
<ul>
<li>별도 인코더로 일반 특징과 특수 특징을 분리하고, 정보 기반 손실 두 가지로 modality 내 분리와 modality 간 일반 특징 정렬을 동시에 달성합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_12문단" tabindex="-1"><a class="header-anchor" href="#_12문단"><span>[12문단]</span></a></h3>
<ul>
<li>두 과제는 밀접하게 연결되어 있으며, modality 속성의 분리 품질이 결측 특징 생성의 품질을 직접 좌우합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_13문단-기여-요약" tabindex="-1"><a class="header-anchor" href="#_13문단-기여-요약"><span>[13문단] (기여 요약)</span></a></h3>
<ul>
<li>기여는 네 가지입니다. 결측 시나리오에서의 성능 저하와 주입 방식의 한계 분석, 생성 기반 결측 처리 접근, cross-modal retrieval 같은 추가 작업 지원, 상호 정보 관점의 일반/특수 특징 분리 학습 방법 제안입니다.</li>
</ul>
</section>
<section class="print-section">
<h2 id="_3-methodology" tabindex="-1"><a class="header-anchor" href="#_3-methodology"><span>3. Methodology</span></a></h2>
</section>
<section class="print-section">
<h3 id="도입-1문단" tabindex="-1"><a class="header-anchor" href="#도입-1문단"><span>[도입 1문단]</span></a></h3>
<ul>
<li>결측 modality를 정확하게 생성하려면 일반 특징과 특수 특징을 모두 고려해야 하므로, 별도 인코더로 두 특징을 추출하는 Disentangling Modality Feature 모듈을 제안하고 분리와 정렬을 위한 정보 기반 손실을 도입합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="도입-2문단" tabindex="-1"><a class="header-anchor" href="#도입-2문단"><span>[도입 2문단]</span></a></h3>
<ul>
<li>결측 상황에서 의미 있는 표현을 얻고 item-item 그래프를 구성하기 위해, 일반 및 특수 특징을 생성하고 이를 사용해 그래프를 적응적으로 정제하는 Missing Modality Generation 모듈을 제안합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="도입-3문단" tabindex="-1"><a class="header-anchor" href="#도입-3문단"><span>[도입 3문단]</span></a></h3>
<ul>
<li>modality 특징은 의미 정보에는 강하지만 추천에 필요한 협업 지식이 부족하므로, 사용자와 아이템 표현을 잇는 두 가지 정렬 방법을 추가로 도입합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-1-preliminaries" tabindex="-1"><a class="header-anchor" href="#_3-1-preliminaries"><span>[3.1 Preliminaries]</span></a></h3>
<ul>
<li>사용자 집합, 아이템 집합, 상호작용 행렬 R을 정의하고, 각 아이템의 modality 특징 X_m은 사전 학습 모델(이미지는 CNN, 텍스트는 SBERT)로 추출하며 결측 특징은 평균값으로 초기화합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-2-도입" tabindex="-1"><a class="header-anchor" href="#_3-2-도입"><span>[3.2 도입]</span></a></h3>
<ul>
<li>기존 MRS는 직접 정렬이나 인접 뷰 결합으로 modality의 고유 특성을 흐리므로, 인코더로 일반 특징과 특수 특징을 나눠 추출하고 GCN과 정보 기반 분리로 이를 정제합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-2-1-1문단" tabindex="-1"><a class="header-anchor" href="#_3-2-1-1문단"><span>[3.2.1 - 1문단]</span></a></h3>
<ul>
<li>modality 전반에 파라미터를 공유하는 일반 인코더와 modality별 독립 파라미터를 갖는 특수 인코더, 두 개의 별도 인코더로 각 특징을 추출합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-2-1-2문단" tabindex="-1"><a class="header-anchor" href="#_3-2-1-2문단"><span>[3.2.1 - 2문단]</span></a></h3>
<ul>
<li>일반 인코더는 공통 속성을, 특수 인코더는 각 modality의 고유 특성을 포착하며, modality마다 차원이 다른 X_m을 통일된 차원으로 투영하는 레이어 h_m을 별도로 둡니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-2-1-3문단" tabindex="-1"><a class="header-anchor" href="#_3-2-1-3문단"><span>[3.2.1 - 3문단]</span></a></h3>
<ul>
<li>사용자 modality 선호 임베딩을 도입해 아이템 선호 행렬을 계산하고, 이를 통해 modality 특징을 사용자 선호와 정렬하여 추천과 무관한 잡음이 제거된 특징을 얻습니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-2-1-4문단" tabindex="-1"><a class="header-anchor" href="#_3-2-1-4문단"><span>[3.2.1 - 4문단]</span></a></h3>
<ul>
<li>잡음이 제거된 특징을 modality 유사도 기반 item-item 그래프 위에서 LightGCN으로 강화하고, 사용자가 상호작용한 아이템의 특징을 집계해 사용자 modality 특징을 계산합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-2-2-1문단" tabindex="-1"><a class="header-anchor" href="#_3-2-2-1문단"><span>[3.2.2 - 1문단]</span></a></h3>
<ul>
<li>인코더 분리만으로는 효과적인 분리가 보장되지 않으므로, 대조 손실 두 가지를 활용하는 정보 기반 접근을 도입합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-2-2-2문단" tabindex="-1"><a class="header-anchor" href="#_3-2-2-2문단"><span>[3.2.2 - 2문단]</span></a></h3>
<ul>
<li>같은 modality 안에서 일반 특징과 특수 특징 간 상호 정보를 최소화하기 위해 CLUB을 적용하며, 이를 반복적으로 최소화해 두 특징이 상호 보완적인 정보를 갖도록 유도합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-2-2-3문단" tabindex="-1"><a class="header-anchor" href="#_3-2-2-3문단"><span>[3.2.2 - 3문단]</span></a></h3>
<ul>
<li>서로 다른 modality의 일반 특징 간 상호 정보를 최대화하기 위해 InfoNCE를 채택하여 일반 특징들을 같은 잠재 공간으로 정렬합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-2-2-4문단" tabindex="-1"><a class="header-anchor" href="#_3-2-2-4문단"><span>[3.2.2 - 4문단]</span></a></h3>
<ul>
<li>두 손실의 합인 분리 손실을 통해 modality 내 분리와 modality 간 일반 특징 정렬을 동시에 달성하며, 이것이 결측 표현 생성을 위한 cross-modality 정보 활용의 기반이 됩니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-3-도입" tabindex="-1"><a class="header-anchor" href="#_3-3-도입"><span>[3.3 도입]</span></a></h3>
<ul>
<li>분리된 특징을 바탕으로 원시 특징을 재구성하는 디코더를 학습하고, 결측 아이템의 일반 및 특수 특징을 생성하며, 생성 결과로 item-item 그래프를 정제합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-3-1-reconstruction" tabindex="-1"><a class="header-anchor" href="#_3-3-1-reconstruction"><span>[3.3.1 Reconstruction]</span></a></h3>
<ul>
<li>일반 특징과 특수 특징으로부터 원시 특징 X_m을 복원하는 디코더를 재구성 손실로 학습하여, 분리된 특징이 무의미한 표현이 아니라 원시 특징을 복원할 수 있는 의미 있는 정보를 유지하도록 보장합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-3-2-1문단" tabindex="-1"><a class="header-anchor" href="#_3-3-2-1문단"><span>[3.3.2 - 1문단]</span></a></h3>
<ul>
<li>일반 특징과 특수 특징은 성질이 근본적으로 다르므로 생성에도 별개의 접근이 필요합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-3-2-2문단" tabindex="-1"><a class="header-anchor" href="#_3-3-2-2문단"><span>[3.3.2 - 2문단]</span></a></h3>
<ul>
<li>일반 특징은 InfoNCE로 정렬된 다른 modality의 일반 특징을 2층 MLP 생성기에 넣어 만들며, 입력 modality도 결측이면 특징 평균을 사용해 입력 차원을 일정하게 유지합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-3-2-3문단" tabindex="-1"><a class="header-anchor" href="#_3-3-2-3문단"><span>[3.3.2 - 3문단]</span></a></h3>
<ul>
<li>특수 특징은 다른 modality에서 가져올 수 없으므로, 상호작용한 사용자들의 modality 선호에 암묵적으로 담긴 아이템 정보를 별도 생성기로 활용해 만듭니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-3-2-4문단" tabindex="-1"><a class="header-anchor" href="#_3-3-2-4문단"><span>[3.3.2 - 4문단]</span></a></h3>
<ul>
<li>생성된 특징이 원래 정보를 보존하도록 원래 특징과 생성 특징을 유사하게 만드는 생성 손실을 도입하며, 재구성 및 생성 손실은 modality가 있는 아이템에 대해서만 계산합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-3-3-1문단" tabindex="-1"><a class="header-anchor" href="#_3-3-3-1문단"><span>[3.3.3 - 1문단]</span></a></h3>
<ul>
<li>일정 epoch 간격으로 결측 아이템의 특징을 생성하고 디코더로 원시 특징을 근사하되, 단순 대체만으로는 부족하므로 생성 특징 기반의 새로운 인접 행렬을 구성해 그래프를 갱신합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-3-3-2문단" tabindex="-1"><a class="header-anchor" href="#_3-3-3-2문단"><span>[3.3.3 - 2문단]</span></a></h3>
<ul>
<li>급격한 그래프 변화로 인한 학습 불안정을 막기 위해 하이퍼파라미터 alpha로 새 연결을 부드럽게 통합하는 적응적 업데이트 전략을 사용합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-3-3-3문단" tabindex="-1"><a class="header-anchor" href="#_3-3-3-3문단"><span>[3.3.3 - 3문단]</span></a></h3>
<ul>
<li>결측 아이템과 연관된 엣지만, 그것도 modality 보유 아이템에서 결측 아이템으로 향하는 방향성 엣지로만 갱신하여, 미숙한 생성 특징에 의한 원래 특징의 오염을 막고 유사도 계산 비용도 줄입니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-3-3-선행-연구-비교" tabindex="-1"><a class="header-anchor" href="#_3-3-3-선행-연구-비교"><span>[3.3.3 - 선행 연구 비교]</span></a></h3>
<ul>
<li>인접 행렬을 추천 손실과 공동 최적화하는 LATTICE, MICRO와 달리, 디코더로 원시 특징을 정확히 재구성한 뒤 이를 사용해 인접 행렬을 만들기 때문에 결측 아이템의 엣지 연결이 가능합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-4-도입" tabindex="-1"><a class="header-anchor" href="#_3-4-도입"><span>[3.4 도입]</span></a></h3>
<ul>
<li>modality 특징의 협업 지식 부족을 해결하기 위해, 사전 학습 특징을 ID 임베딩과 정렬해 modality 지식과 협업 지식을 통합하는 두 가지 정렬 방법을 제안합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-4-1-fusing" tabindex="-1"><a class="header-anchor" href="#_3-4-1-fusing"><span>[3.4.1 Fusing]</span></a></h3>
<ul>
<li>모든 modality의 일반 특징을 평균 풀링하고 이를 특수 특징과 다시 풀링해 최종 modality 표현을 만든 뒤, ID 임베딩과 결합해 최종 표현을 얻고 내적으로 추천 점수를 계산합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-4-2-behavior-modality-alignment" tabindex="-1"><a class="header-anchor" href="#_3-4-2-behavior-modality-alignment"><span>[3.4.2 Behavior-Modality Alignment]</span></a></h3>
<ul>
<li>사용자 행동과 modality 특징을 대조 손실로 정렬해 modality 특징에 협업 지식을 주입합니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_3-4-3-user-item-alignment" tabindex="-1"><a class="header-anchor" href="#_3-4-3-user-item-alignment"><span>[3.4.3 User-Item Alignment]</span></a></h3>
<ul>
<li>아이템의 modality 특징을 상호작용한 사용자의 modality 특징과 정렬해 각 modality 내에서의 일관성을 높입니다.</li>
</ul>
</section>
<section class="print-section">
<h3 id="최종-목적-함수" tabindex="-1"><a class="header-anchor" href="#최종-목적-함수"><span>[최종 목적 함수]</span></a></h3>
<ul>
<li>BPR 손실에 재구성, 생성, 분리, 정렬 손실을 더한 것이 최종 목적 함수이며, 분리와 정렬 손실의 비중은 하이퍼파라미터 lambda_1, lambda_2로 조절합니다.</li>
</ul>
</section>
</div></template>


