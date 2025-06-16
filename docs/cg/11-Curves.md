# 11 - Curves

## Outline

- Intro: Motivation and Curve Representation
- Polynomial Curve  
  - Polynomial Interpolation  
  - More Discussion on Polynomials  
- Hermite Curve  
- Bezier Curve  
- Brief Intro to Spline

## Motivation: Why Do We Need Curve?

- **Smoothness**
  - 이음 없는 부드러운 연결
- 많은 컴퓨터 그래픽 응용에서 부드러운 형태(smooth shape) 와 부드러운 움직임(smooth movement) 이 필요함

## Curve Representations

- **Explicit**: $y = f(x)$  
  - 예: $y = x^2 + 2x - 2$  
  - 장점: $x$만 대입하면 간단히 계산 및 시각화 가능  
  - 단점: 하나의 $x$에 여러 $y$가 대응되는 경우 표현 불가 (원, 수직선 등)
- **Implicit**: $f(x, y) = 0$  
  - 예: $x^2 + y^2 - 2 = 0$  
  - 장점: 점이 내부/외부/경계에 있는지 판별 쉬움  
  - 단점: 좌표를 생성하거나 시각화하기엔 비효율적
- **Parametric**: $(x, y) = (f(t), g(t))$  
  - 예: $(x, y) = (2 \cos(t), 2 \sin(t))$
- 각 점은 **추가 매개변수 $t$의 함수**로 표현됨  
  - 장점: $t$에 값만 넣으면 계산/시각화 용이  
  - $t$는 곡선상의 점을 결정하는 **"지역 좌표계"** 역할을 함

- Computer Graphics에서는 이 **parametric 표현 방식**이 가장 적합

## Polynomial Curve

- 다항식(Polynomial) 은 컴퓨터 그래픽에서 곡선을 표현할 때 자주 사용됨
  - 단순함
  - 효율적
  - 다루기 쉬움

- 차수가 $n$인 다항식:
  $$
  x(t) = a_n t^n + a_{n-1} t^{n-1} + \cdots + a_1 t + a_0
  $$

## Polynomial Interpolation

- 다항식을 사용해 부드러운 곡선을 만드는 한 가지 방법은 **polynomial interpolation**
- 주어진 **데이터 포인트들을 통과하는**  
  특정한 부드러운 곡선을 결정함
- 1차 다항식(linear polynomial) 을 이용한 선형 보간 예시
- 입력: 두 점 $(t_0, x_0), (t_1, x_1)$  
- 출력: 1차 다항식  
  $$
  x(t) = a_1 t + a_0
  $$
- 두 식을 세워 계수 $a_0$, $a_1$을 구할 수 있음:
  $$
  \begin{cases}
  a_1 t_0 + a_0 = x_0 \\
  a_1 t_1 + a_0 = x_1
  \end{cases}
  $$
- 행렬 형태로 정리 가능:
  $$
  \begin{bmatrix}
  1 & t_0 \\
  1 & t_1
  \end{bmatrix}
  \begin{bmatrix}
  a_0 \\
  a_1
  \end{bmatrix}
  =
  \begin{bmatrix}
  x_0 \\
  x_1
  \end{bmatrix}
  $$
- $t_0 = 0$, $t_1 = 1$로 설정하면,
  $$
  x(t) = (1 - t)x_0 + tx_1
  $$
- 2차 다항식(quadratic) 을 이용한 보간
- 입력: 세 점 $(t_0, x_0), (t_1, x_1), (t_2, x_2)$  
- 2차 다항식:
  $$
  x(t) = a_2 t^2 + a_1 t + a_0
  $$
- 3개의 미지수 $a_0$, $a_1$, $a_2$를 풀기 위해  
  3개의 조건이 필요함 → 3개의 점이 필요
- 행렬 형태:
  $$
  \begin{bmatrix}
  1 & t_0 & t_0^2 \\
  1 & t_1 & t_1^2 \\
  1 & t_2 & t_2^2
  \end{bmatrix}
  \begin{bmatrix}
  a_0 \\
  a_1 \\
  a_2
  \end{bmatrix}
  =
  \begin{bmatrix}
  x_0 \\
  x_1 \\
  x_2
  \end{bmatrix}
  $$
- **차수 $n$의 다항식을 이용한 보간**
- 입력: $n+1$개의 점 $(t_0, x_0), \ldots, (t_n, x_n)$  
- 다항식:
  $$
  x(t) = a_n t^n + \cdots + a_1 t + a_0
  $$
- 계수 $a_0, \ldots, a_n$ 을 구하는 방법:
  - Gauss 소거법 (Elimination)
  - Gauss-Jordan 소거법
  - 행렬 역행렬 등

## Problem of Higher-Degree Polynomial Interpolation

- **끝단에서의 진동** 현상 발생 → Runge's 현상(*Runge’s* Phenomenon)
- 너무 높은 차수의 다항식 보간은 **일반적으로 좋지 않음**

## [Demo] Polynomial Interpolation

[https://www.benjoffe.com/code/demos/interpolate](https://www.benjoffe.com/code/demos/interpolate)

- 곡선 위의 점들을 드래그하며 변화 관찰
- 차수를 높이면 진동이 더 커짐 → *Runge’s* 현상 확인 가능

## Cubic Polynomials

- 3차 다항식(cubic) 은 컴퓨터 그래픽스에서 가장 일반적으로 사용됨

- 이유:
  - 3차는 3D 곡선을 표현할 수 있는 **가장 낮은 차수의 다항식**
  - 고차 다항식에서 발생하는 진동(*Runge’s* Phenomenon)을 피할 수 있음

- 일반 형태:
  $$
  x(t) = a_1 t^3 + b_1 t^2 + c_1 t + d_1 \\
  y(t) = a_2 t^3 + b_2 t^2 + c_2 t + d_2 \\
  z(t) = a_3 t^3 + b_3 t^2 + c_3 t + d_3
  $$  
  또는  
  $$
  p(t) = a t^3 + b t^2 + c t + d
  $$

## Complex Curve from Cubic Polynomials?

- 곡선이 복잡할 경우 어떻게 만들까?
- 하나의 3차 다항식만으로는 표현이 어려움  
  → 해결책: Spline (구간별 다항식, piecewise polynomial)
- 지금은 먼저 하나의 구간(segment)에 집중해서 살펴봄

## Defining a Single Piece of Cubic Polynomial

- 다항식 형태:  
  $$
  p(t) = a t^3 + b t^2 + c t + d
  $$

- 목표: 주어진 조건을 만족하는 **특정한 다항식** 구하기  
  - 즉, $a$, $b$, $c$, $d$를 결정

- 총 4개의 미지수 → **4개의 조건 또는 점이 필요함**

- 예시 조건:
  - 양 끝 점의 위치
  - 양 끝 점에서의 기울기 (도함수)

## Formulation of a Single Piece of Polynomial

- 다항식을 표현하는 두 가지 방식:

1. **계수와 변수 기반**:
   $$
   p(t) = a t^3 + b t^2 + c t + d
   $$
   - 계수: $a, b, c, d$  
   - 변수: $t$

2. **기저 함수와 점 기반**:
   $$
   p(t) = b_0(t) p_0 + b_1(t) p_1 + b_2(t) p_2 + b_3(t) p_3
   $$
   - 기저 함수: $b_0(t), b_1(t), b_2(t), b_3(t)$  
   - 제어점: $p_0, p_1, p_2, p_3$  
   - 각 점이 곡선에 끼치는 영향은 대응하는 basis 함수가 조절함

## Trivial Example: Linear Polynomial

- 두 점 $(t_0, (x_0, y_0))$, $(t_1, (x_1, y_1))$를 지나는 직선
- 다음과 같이 1차 다항식으로 표현 가능:
  $$
  x(t) = a_{1x} t + a_{0x} \\
  y(t) = a_{1y} t + a_{0y}
  $$
- 계수와 변수 기준 표현:
  $$
  x(t) = (x_1 - x_0)t + x_0 \\
  y(t) = (y_1 - y_0)t + y_0
  $$
- 벡터 표현:
  $$
  \begin{align*}
  \mathbf{p}(t) &= (1 - t)\mathbf{p}_0 + t\mathbf{p}_1 \\
  &= (\mathbf{p}_1 - \mathbf{p}_0)t + \mathbf{p}_0
  \end{align*}
  $$
- 행렬 형태 표현:
  $$
  \mathbf{p}(t) = 
  \begin{bmatrix}
  t & 1
  \end{bmatrix}
  \begin{bmatrix}
  -1 & 1 \\
  1 & 0
  \end{bmatrix}
  \begin{bmatrix}
  \mathbf{p}_0 \\
  \mathbf{p}_1
  \end{bmatrix}
  $$

  - 첫 번째 벡터: power basis vector  
  - 두 번째 행렬: basis matrix  
  - 세 번째 벡터: geometry vector

- basis function과 제어점 기반 표현:

  $$
  \begin{align*}
  \mathbf{p}(t) &= (\mathbf{p}_1 - \mathbf{p}_0)t + \mathbf{p}_0 \\
                &= (1 - t)\mathbf{p}_0 + t\mathbf{p}_1
  \end{align*}
  $$

- 행렬 관점으로도 해석 가능:
  $$
  \mathbf{p}(t) = 
  \left( 
    \begin{bmatrix}
    t & 1
    \end{bmatrix}
    \begin{bmatrix}
    -1 & 1 \\
    1 & 0
    \end{bmatrix}
  \right)
  \begin{bmatrix}
  \mathbf{p}_0 \\
  \mathbf{p}_1
  \end{bmatrix}
  $$

- 이때 $(1 - t)$, $t$는 basis function 역할

## Meaning of Basis Functions

- 선형 보간의 basis 함수 해석:

  $$
  \mathbf{p}(t) = (1 - t)\mathbf{p}_0 + t\mathbf{p}_1
  $$

- $t$가 바뀔 때 각 점의 기여도는 다음과 같이 변화:
  - $b_0(t) = 1 - t$
  - $b_1(t) = t$

## Hermite Curve의 개념 및 동기

- Hermite curve는 일반적으로 3차 다항식(cubic polynomia)으로 표현되며,  
  **Hermite 형식**으로 주어진다.
- **Spline 설계**에서는 곡선 조각들 사이의 부드러운 연결(smooth connection) 이 중요  
  → Hermite 곡선은 다음을 명시함으로써 이를 해결:
  - 양 끝점의 위치
  - 양 끝점에서의 1차 도함수 (기울기, tangent)
- 제약 조건:  
  끝점 $p_0$, $p_1$과 해당 접선 벡터(기울기) $v_0$, $v_1$이 주어짐

## Hermite Curve 수식 유도

- 3차 다항식의 일반 형태:  
  $$
  x(t) = a t^3 + b t^2 + c t + d \\
  x'(t) = 3a t^2 + 2b t + c
  $$

- 제약 조건:
  $$
  x(0) = x_0 = d \\
  x(1) = x_1 = a + b + c + d \\
  x'(0) = x_0' = c \\
  x'(1) = x_1' = 3a + 2b + c
  $$

- 계수 도출:
  $$
  \begin{aligned}
  d &= x_0 \\
  c &= x_0' \\
  a &= 2x_0 - 2x_1 + x_0' + x_1' \\
  b &= -3x_0 + 3x_1 - 2x_0' - x_1'
  \end{aligned}
  $$

- 행렬 형태로 표현:
  $$
  \begin{bmatrix}
  a \\
  b \\
  c \\
  d
  \end{bmatrix}
  =
  \begin{bmatrix}
  2 & -2 & 1 & 1 \\
  -3 & 3 & -2 & -1 \\
  0 & 0 & 1 & 0 \\
  1 & 0 & 0 & 0
  \end{bmatrix}
  \begin{bmatrix}
  p_0 \\
  p_1 \\
  v_0 \\
  v_1
  \end{bmatrix}
  $$

## Hermite Curve 행렬 표현

- 행렬 형태가 훨씬 간단함:
  $$
  \mathbf{p}(t) =
  \begin{bmatrix}
  t^3 & t^2 & t & 1
  \end{bmatrix}
  \cdot
  \text{Hermite basis matrix}
  \cdot
  \begin{bmatrix}
  p_0 \\
  p_1 \\
  v_0 \\
  v_1
  \end{bmatrix}
  $$
- 즉,
  $$
  \mathbf{p}(t) = b_0(t)p_0 + b_1(t)p_1 + b_2(t)v_0 + b_3(t)v_1
  $$
- 여기서 basis 함수 $b_i(t)$는 곡선에서 각 점의 영향도를 조절함

## Hermite Curve - Basis Functions 관점

- 다항식 표현:  
  $$
  p(t) = a t^3 + b t^2 + c t + d
  $$
- 이를 basis function과 점으로 표현하면:  
  $$
  p(t) = b_0(t)p_0 + b_1(t)p_1 + b_2(t)p_2 + b_3(t)p_3
  $$
- 행렬 관점:  
  - 행: 계수  
  - 열: basis function (즉, $t^3$, $t^2$, $t$, $1$)

## Hermite Curve - Basis Function 시각화

- Hermite basis function 들은 시간 $t$의 변화에 따라  
  각 제어점 및 접선이 곡선에 미치는 영향도를 조절
- 그래프를 통해 basis 함수 $h_0(t)$, $h_1(t)$, $h_2(t)$, $h_3(t)$의 변화를 확인 가능

## [Demo] Hermite Curve

[https://codepen.io/iIorda/pen/KrvBwr](https://codepen.io/iIorda/pen/KrvBwr)
- 끝점과 접선(도함수)의 위치를 드래그하여  
  곡선이 어떻게 변하는지 실시간으로 확인

## Bezier Curve

- Bezier 곡선은 일반적으로 Bezier 형식으로 표현되는 다항 곡선(polynomial curve)
- **Motivation**:
  - Spline에서는 부드러운 곡선 연결이 중요
  - Bezier에서는 이를 위해 제어점(control points) 을 적절히 배치함으로써 해결

## Recall: Hermite curve

- 제약 조건: **끝점**과 접선(도함수)
- Hermite 곡선은 다음과 같이 표현됨:
  $$
  \mathbf{p}(t) = 
  \begin{bmatrix}
  t^3 & t^2 & t & 1
  \end{bmatrix}
  \cdot
  \begin{bmatrix}
  2 & -2 & 1 & 1 \\
  -3 & 3 & -2 & -1 \\
  0 & 0 & 1 & 0 \\
  1 & 0 & 0 & 0
  \end{bmatrix}
  \cdot
  \begin{bmatrix}
  \mathbf{p}_0 \\
  \mathbf{p}_1 \\
  \mathbf{v}_0 \\
  \mathbf{v}_1
  \end{bmatrix}
  $$

## Hermite to Bézier

- 점과 벡터를 섞어서 사용하는 방식은 직관적이지 않음
- 따라서 **벡터를 점의 차이로 표현**하는 방식이 더 명확
- 예:
  - $t_0 = \mathbf{p}_1 - \mathbf{p}_0$
  - $t_1 = \mathbf{p}_1 - \mathbf{p}_0$ 또는 $-t_1$ 형태로 표현 가능

- **Bezier 제어점 방식으로 변환**하려면 다음과 같이 대응:
  - Hermite 곡선의 입력:
    - $\mathbf{p}_0$, $\mathbf{p}_1$ : 시작/종료 지점
    - $\mathbf{v}_0$, $\mathbf{v}_1$ : 시작/종료 접선 벡터
  - Bezier 곡선의 제어점:
    - $\mathbf{q}_0 = \mathbf{p}_0$  
    - $\mathbf{q}_3 = \mathbf{p}_1$  
    - $\mathbf{q}_1 = \mathbf{p}_0 + \frac{1}{3} \mathbf{v}_0$  
    - $\mathbf{q}_2 = \mathbf{p}_1 - \frac{1}{3} \mathbf{v}_1$

- 또는 역으로 표현하면:

  $$
  \begin{aligned}
  \mathbf{p}_0 &= \mathbf{q}_0 \\
  \mathbf{p}_1 &= \mathbf{q}_3 \\
  \mathbf{v}_0 &= 3 (\mathbf{q}_1 - \mathbf{q}_0) \\
  \mathbf{v}_1 &= 3 (\mathbf{q}_3 - \mathbf{q}_2)
  \end{aligned}
  $$

- 여기서 **미분값은 3배 스케일로 정의됨**  
  (Bézier 곡선의 미분 시 offset이 포함되므로 조정 필요)

## Hermite to Bézier 변환 (요약)

- Hermite 형태:

  $$
  \begin{bmatrix}
  \mathbf{p}_0 \\
  \mathbf{p}_1 \\
  \mathbf{v}_0 \\
  \mathbf{v}_1
  \end{bmatrix}
  =
  \begin{bmatrix}
  1 & 0 & 0 & 0 \\
  0 & 0 & 0 & 1 \\
  0 & 3 & -3 & 0 \\
  0 & 0 & 3 & -3
  \end{bmatrix}
  \begin{bmatrix}
  \mathbf{q}_0 \\
  \mathbf{q}_1 \\
  \mathbf{q}_2 \\
  \mathbf{q}_3
  \end{bmatrix}
  $$

- Hermite basis matrix에 Bezier 변환을 곱하면:

  $$
  \begin{bmatrix}
  a \\
  b \\
  c \\
  d
  \end{bmatrix}
  =
  \begin{bmatrix}
  2 & -2 & 1 & 1 \\
  -3 & 3 & -2 & -1 \\
  0 & 0 & 1 & 0 \\
  1 & 0 & 0 & 0
  \end{bmatrix}
  \cdot
  \begin{bmatrix}
  1 & 0 & 0 & 0 \\
  0 & 0 & 0 & 1 \\
  0 & 3 & -3 & 0 \\
  0 & 0 & 3 & -3
  \end{bmatrix}
  =
  \text{Bezier basis matrix}
  $$

## Bézier Matrix와 Bernstein Basis

- Bézier 행렬 표현:
  $$
  \mathbf{p}(t) =
  \begin{bmatrix}
  t^3 & t^2 & t & 1
  \end{bmatrix}
  \cdot
  \begin{bmatrix}
  -1 & 3 & -3 & 1 \\
  3 & -6 & 3 & 0 \\
  -3 & 3 & 0 & 0 \\
  1 & 0 & 0 & 0
  \end{bmatrix}
  \cdot
  \begin{bmatrix}
  \mathbf{P}_0 \\
  \mathbf{P}_1 \\
  \mathbf{P}_2 \\
  \mathbf{P}_3
  \end{bmatrix}
  $$

- 위 행렬은 **Bernstein 다항식**에 기반함:

  $$
  b_{n,k}(t) = \binom{n}{k} t^k (1 - t)^{n - k}
  $$

- 이 행렬은 Bézier 곡선을 어떤 차수에서도 정의할 수 있게 해줌

## Bezier Curve

- **Bernstein Basis Functions** $(n = 3)$:
  $$
  \begin{aligned}
  B_0^3(t) &= (1 - t)^3 \\
  B_1^3(t) &= 3t(1 - t)^2 \\
  B_2^3(t) &= 3t^2(1 - t) \\
  B_3^3(t) &= t^3
  \end{aligned}
  $$
- **Cubic Bezier Curve** 표현:
  $$
  \mathbf{p}(t) =
  B_0^3(t)\mathbf{p}_0 +
  B_1^3(t)\mathbf{p}_1 +
  B_2^3(t)\mathbf{p}_2 +
  B_3^3(t)\mathbf{p}_3
  $$
- 전개 형태:
  $$
  \mathbf{p}(t) =
  (1 - t)^3 \mathbf{p}_0 +
  3t(1 - t)^2 \mathbf{p}_1 +
  3t^2(1 - t) \mathbf{p}_2 +
  t^3 \mathbf{p}_3
  $$

## Bézier Basis 시각화

- 네 개의 Bernstein basis 함수들이 t 값에 따라  
  곡선에 미치는 영향을 시각적으로 보여줌
- 제어점 $\mathbf{p}_0$, $\mathbf{p}_1$, $\mathbf{p}_2$, $\mathbf{p}_3$ 각각은  
  해당 basis 함수에 의해 영향을 받음

## *de Casteljau’s* Algorithm

- Bezier curve를 계산하는 또 다른 방법
- 프랑스의 *Paul de Casteljau*가 1959년에 개발  
  (당시 Citroën 근무 중이라 회사 정책상 논문 발표는 못함)

## Cubic Bezier Curve의 시작

- 네 개의 제어점 $\mathbf{p}_0$, $\mathbf{p}_1$, $\mathbf{p}_2$, $\mathbf{p}_3$로 시작

## 1단계 보간 (1st level interpolation)

- 직선 상의 보간:
  $$
  \begin{aligned}
  \mathbf{q}_0 &= \text{Lerp}(t, \mathbf{p}_0, \mathbf{p}_1) \\
  \mathbf{q}_1 &= \text{Lerp}(t, \mathbf{p}_1, \mathbf{p}_2) \\
  \mathbf{q}_2 &= \text{Lerp}(t, \mathbf{p}_2, \mathbf{p}_3)
  \end{aligned}
  $$

## 2단계 보간 (2nd level interpolation)

- 다시 직선 보간:
  $$
  \begin{aligned}
  \mathbf{r}_0 &= \text{Lerp}(t, \mathbf{q}_0, \mathbf{q}_1) \\
  \mathbf{r}_1 &= \text{Lerp}(t, \mathbf{q}_1, \mathbf{q}_2)
  \end{aligned}
  $$

## 3단계 보간 (최종 점 계산)

- 마지막 보간으로 곡선 위의 점 $x$ 계산:
  $$
  \mathbf{x} = \text{Lerp}(t, \mathbf{r}_0, \mathbf{r}_1)
  $$

## 시각적 반복 요약

- 반복적 보간을 통해 Bezier 곡선 위의 점 $\mathbf{x}$를 계산
- 모든 보간은 단순한 선형 보간:
  $$
  \text{Lerp}(t, \mathbf{a}, \mathbf{b}) = (1 - t)\mathbf{a} + t\mathbf{b}
  $$

## 복잡한 예시 (고차 Bezier curve)

- Berkeley 자료 기준:  
  다차원 Bezier curve에서도 동일하게 적용 가능
- 반복적인 보간을 여러 단계 거치면 다음과 같은 점을 얻음:
  - $T = (1 - t)P + tQ$
  - $P = (1 - t)^2A + 2(1 - t)tB + t^2C$
  - $A = (1 - t)^3K + 3(1 - t)^2tL + 3(1 - t)t^2M + t^3N$  
    ...

- 실제 예제 링크: [https://people.eecs.berkeley.edu/~sequin/CS284/LECT6/03.htm](https://people.eecs.berkeley.edu/~sequin/CS284/LECT6/03.htm)

## *de Casteljau’s* Algorithm (세그먼트 분할)

- **Bezier 곡선 위의 한 점**을 계산하는 재귀 알고리즘
- 추가적으로, **Bezier 곡선을 두 세그먼트로 분할**할 수 있음
- 제어점들을 계속 나눠가며 곡선을 구성하는 방법  
  → "Subdivision" 방식으로 곡선을 그릴 수 있음

## [Demo] *de Casteljau’s* Algorithm

[http://www.naim.cs.e.ntu.edu.tw/DnCasteljauAndBezier.php](http://www.naim.cs.e.ntu.edu.tw/DnCasteljauAndBezier.php)

- 빨간 점(red points)을 이동시켜 보세요  
- subdivision 결과를 직접 확인 가능

## Displaying Curves

- 곡선을 시각화하려면 $p(t)$ 위의 여러 점을 계산하고  
  그 점들을 선분으로 연결하면 됨
- 방법들:
  - **Brute-force**: 일정 간격으로 $t$ 값을 바꾸며 $p(t)$ 직접 계산
  - **Finite difference**: 같은 원리지만 더 효율적  
    [http://www.drdobbs.com/forward-difference-calculation-of-bezier/184403417](http://www.drdobbs.com/forward-difference-calculation-of-bezier/184403417)
  - **Subdivision**: *de Casteljau* 알고리즘 활용

## Properties of Bezier Curve

- 제어점(control points) 을 통해 직관적으로 제어 가능
- 곡선은 항상 제어점들의 convex hull 안에 존재
  - convex hull: 제어점들을 포함하는 최소 볼록 다각형
- 끝점 보간(end point interpolation):  
  Bezier 곡선은 $\mathbf{p}_0$과 $\mathbf{p}_n$을 정확히 통과

## Spline

- Spline: 조각별 다항식 (piecewise polynomial)
- 세 가지 주요 이슈:
  - 이 조각들을 **어떻게 연속적으로** 연결할 것인가?
  - spline의 형태를 **얼마나 쉽게 제어할 수 있는가**?
  - spline이 **특정한 점들을 통과해야 하는가**?

## Continuity

[https://math.hws.edu/graphicshook/demo/c2/cubic-bezier.html](https://math.hws.edu/graphicshook/demo/c2/cubic-bezier.html)

- Bezier spline 데모에서 확인해보세요  
- spline을 어떻게 "부드럽게(smooth)" 만들 수 있을까?
- 부드러움(Smoothness)은 연속성의 차수(order) 로 설명할 수 있음
  - **0차 연속성 $C^0$**:  
    양쪽에서 위치(position) 만 일치
  - **1차 연속성 $C^1$**:  
    위치와 1차 미분(속도, velocity) 일치
  - **2차 연속성 $C^2$**:  
    위치, 1차, 2차 미분(가속도, acceleration) 까지 일치
- 아래 그림은 차수에 따른 연속성의 차이를 시각적으로 보여줌

## Control

[https://math.hws.edu/graphicshook/demo/c2/cubic-bezier.html](https://math.hws.edu/graphicshook/demo/c2/cubic-bezier.html)  
[https://www.benoffe.com/code/demos/interpolate](https://www.benoffe.com/code/demos/interpolate)

- 특정한 형태의 곡선을 만들고 싶을 때,  
  어떤 곡선이 더 제어하기 쉬운가?
- 좌: Bezier spline  
- 우: Polynomial interpolation
- 로컬 제어(local control):
  - **제어점을 하나 바꿨을 때 영향을 받는 범위가 제한됨**
- 로컬 제어가 없으면 spline 사용이 매우 어려움  
  (모든 구간이 영향을 받음)
- 다음은 로컬 제어가 **없는 예시**:
  - 자연 스플라인 (natural spline)
  - 전체 다항식 피팅(polynomial fits)

## Interpolation / Approximation

- Interpolation (보간):
  - 곡선이 **점들을 정확히 통과**
- Approximation (근사):
  - 곡선이 **점들을 따라가지만 통과하지는 않음**
- 보간이 더 선호되지만, **항상 필요하지는 않음**

## Bezier Spline

- 연속성: $C^0$ 또는 $C^1$ 가능
- 로컬 제어(Local controllability)
- 보간(interpolation): 단지 양 끝 두 점만 통과
- Bezier spline은 매우 광범위하게 사용됨:
  - Adobe Illustrator 같은 그래픽 도구에서 형태(shape) 생성
  - Blender, Maya 등 3D 툴에서 애니메이션 경로 정의
  - TrueType 폰트는 quadratic Bezier spline 사용  
    PostScript 폰트는 cubic Bezier spline 사용

## Catmull-Rom Spline

- **연속된 두 제어점 사이에 하나의 Hermite 곡선**을 정의
- 끝점에서의 도함수(기울기)는 인접 제어점을 기반으로 계산함:

  $$
  \mathbf{p}'(t_j) = \frac{\mathbf{P}_{j+1} - \mathbf{P}_{j-1}}{2}
  $$

- **$C^1$ 연속성**, **로컬 제어 가능**, 보간(interpolation) 가능

## Natural Cubic Splines

- 목표: 더 높은 연속성, **최소 $C^2$ 연속성**
- **$4n$개의 미지수** (n개의 3차 다항 구간 각각의 계수)
- **$4n$개의 방정식** 필요:
  - 끝점 보간: $2n$ 개
  - 구간 간 위치 및 1차 도함수 연속성: $(n-1)$개씩 총 $2(n-1)$ 개
  - 2차 도함수 연속성: $(n-1)$ 개
  - 양 끝점에서 2차 도함수 0 설정: $x''(t_0) = x''(t_n) = 0$
- **$C^2$ 연속성**, **로컬 제어 불가**, 보간(interpolation) 방식

## B-splines (brief intro)

- **4개의 제어점**을 사용하지만, **중간 2개만 근사**
- 겹치는 세그먼트들로 곡선 생성:
  - 예: 0-1-2-3, 1-2-3-4, 2-3-4-5, ...
- **$C^2$ 연속성**, **로컬 제어 가능**, 근사(approximation) 방식