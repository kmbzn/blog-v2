<template><div><section class="print-section">
<h2 id="_2025학년도-25년-1학기-수강자" tabindex="-1"><a class="header-anchor" href="#_2025학년도-25년-1학기-수강자"><span>2025학년도 (25년 1학기 수강자)</span></a></h2>
</section>
<section class="print-section">
<h3 id="시험-전략" tabindex="-1"><a class="header-anchor" href="#시험-전략"><span>시험 전략</span></a></h3>
<p>이렇게만 해당하는 ppt 슬라이드를 머릿속에 사진찍듯이 외우기만해도 만점 받을 수 있음.</p>
<ul>
<li>Mean : fast / outlier-sensitive</li>
<li>Median : robust / sort-needed</li>
<li>Interpolation Median</li>
<li>Box plot</li>
<li>Simple Matching, Binary Features (symmetric / asymmetric)</li>
<li>Minkowski Distance (L1, L2, L∞)</li>
<li>Normalization : min-max / z-score / decimal scaling</li>
<li>Clustering Terms : centroid / radius / diameter</li>
<li>Linkage : single / complete / average / centroid / medoid</li>
<li>Partitioning : K-Means, PAM</li>
<li>Hierarchical :BIRCH (CF-tree — LS, SS)</li>
<li>Density-based : DBSCAN</li>
<li>ε, MinPts, core / border / noise</li>
<li>KNN based recommendation</li>
<li><strong>문제 예시</strong></li>
<li>Mean, Median의 장단점과 How Interpolation?</li>
<li>Boxplot 요소 채우기</li>
</ul>
</section>
<section class="print-section">
<h3 id="시험-전략-1" tabindex="-1"><a class="header-anchor" href="#시험-전략-1"><span>시험 전략</span></a></h3>
<p>올해는 24년 족보와 매우 비슷하게 나왔습니다. 만약 족보에서 안 내더라도 수업자료 예제 이상으로 내지는 않을 거 같아요.</p>
<ul>
<li><strong>Binary Features Measure</strong>: 표에 빈칸이 있는데, q, r, s, t 채우면 됨 - Symmetric, Asymmetric일 때 distance 공식 쓰기 - 표 내용 보고 Asymmetric으로 distance 구하기</li>
<li><strong>Minkowski Distance</strong>: 공식 쓰기</li>
<li><strong>Boxplot</strong>: boxplot 그림이 주어진됨. 각각 의미하는거 쓰기 - boxplot의 구성 요소 단어로 외워야 함</li>
<li><strong>Normalization</strong>: 데이터가 주어질 때, Normalization(Min-Max, Z-score, Decimal) 적용하기 - Z-score 계산할 때 평균과 표준편차 제공되었음</li>
<li><strong>Median</strong>: Median과 비교했을 때 mean의 장단점 - median의 단점 - Median Interpolation 방법 설명 및 해결 가능한 문제 서술</li>
<li><strong>K-Mean Cluster</strong>: Single link, Complete link로 두 클러스터 간 거리 구하기 - 주어진 상태에서 한 단계 더 나아갈 때 mean이 무엇인지 구하고, 어떻게 변하는지 서술하기 - 장점 1개, 단점 2개 서술</li>
<li><strong>K-Medoids</strong>: Swapping Cost 여러 상황에 대한 식 구하기(C_jih 식에서 빈칸 뚫어서 나옴) - 장점 1개, 단점 1개 서술</li>
<li><strong>BIRCH</strong>: CF = (n, LS, SS) 공식에 대입해서 n, LS, SS구하기 (예시와 동일) - 주어진 데이터 상태에서 추가적으로 cluster 합칠 때 CF Tree 어떻게 그려야하는지 (예시와 동일: sc8)</li>
<li><strong>DBSCAN</strong>: 그림 보고 p와 q가 각각 서로로 부터 directly density reachable 한지 density reachable 한지, core인지 noise인지 - pseudocode에서 빈칸 채우기 - 장단점 하나씩</li>
<li><strong>KNN recommendation system</strong>: Rating prediction 부분에서 나옴. r_{u, i} 예측하는 공식 3개 쓰기</li>
</ul>
</section>
<section class="print-section">
<h2 id="_2024학년도-24년-1학기-수강자" tabindex="-1"><a class="header-anchor" href="#_2024학년도-24년-1학기-수강자"><span>2024학년도 (24년 1학기 수강자)</span></a></h2>
</section>
<section class="print-section">
<h3 id="문제-예시" tabindex="-1"><a class="header-anchor" href="#문제-예시"><span>문제 예시</span></a></h3>
<ul>
<li>Kmeans의 장단점</li>
<li>Median - Mean이랑 비교했을 때 장점 / 문제점 / 공식</li>
<li>Birch sc8 그림그리기</li>
<li>DBScan pseudocode / 장단점</li>
<li>Distance 공식</li>
<li>Boxplot 각 요소 쓰기</li>
<li>Normalization 계산하기 (Minmax. Zscore, Decimal)</li>
<li>Dissimilarity 계산 (피피티 예시 똑같이 나옴/ Jack, Mary)</li>
<li>Proximity Measure for Binary Features - contigency table 채우기, feature 공식 적기</li>
<li>PAM 장단점</li>
<li>Swapping Cost 그림 밑에 공식 빈칸채우기 (i, j, h 채우기)</li>
<li>Kmeans에서 Centroid 바꾸면 어떻게 되는지</li>
<li>Kmeans에서 거리 계산 (L1, L2)</li>
<li>Recommender System Knn Method</li>
</ul>
</section>
<section class="print-section">
<h3 id="문제-예시-1" tabindex="-1"><a class="header-anchor" href="#문제-예시-1"><span>문제 예시</span></a></h3>
<ol>
<li>표에 빈칸 채우기 (Binary Features Measure)
<ul>
<li>표 내용 보고 Asymmetric으로 distance 즉 dissimilarity 구하기</li>
</ul>
</li>
<li>Minkowski Distance 공식쓰기</li>
<li>Boxplot 그림에서 각각 의미하는거 쓰기</li>
<li>Min-Max, Z-score, Normalization 을 데이터를 바탕으로 구하기</li>
<li>Mean, Median 장단점 및 Median Interpolation 방법 설명
<ul>
<li>5번까지가 Data Analysis</li>
</ul>
</li>
<li>K-Mean Cluster
<ul>
<li>Single link, Complete link로 각각 거리 구하기</li>
<li>Mean 구하기</li>
<li>주어진 상태에서 한 단계 더 나아가면 어떤 변화가 생기는지 작성하기</li>
<li>장점/단점</li>
</ul>
</li>
<li>K-Medoids
<ul>
<li>Swapping Cost 여러 상황에 대한 식 구하기</li>
<li>장단점</li>
</ul>
</li>
<li>BIRCH
<ul>
<li>주어진 데이터 상태에서 추가적으로 cluster 합칠 때 CF Tree 어떻게 그려야하는지 (걱정 말거나 예시랑 똑같다)</li>
<li>CF = (n, LS, SS) 공식에 대입해서 n, LS, SS구하기 (나와서 보니 예시랑 똑같은 듯 하다)</li>
</ul>
</li>
<li>DBSCAN
<ul>
<li>그림 보고 p와 q가 각각 서로로부터 directly density reachable 한지 or density reachable 한지?</li>
<li>pseudocode에서 빈칸 채우기</li>
<li>장단점</li>
</ul>
</li>
<li>KNN recommendation system에서 예측하는 공식 쓰기
<ul>
<li>기억에 의존해서 쓰는거니 틀릴 수도 있음</li>
<li>이상 이 과목을 끝으로 곧 졸업할 사람이.</li>
</ul>
</li>
</ol>
</section>
</div></template>


