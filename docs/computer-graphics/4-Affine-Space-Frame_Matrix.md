# 4 - Affine Space / Frame / Matrix

## Outline

- Affine Space - Point vs. Vector  
- Coordinate System & Reference Frame  
- Affine Transformation Matrix  
- Interpretation of Composite Transformations

## Affine Space - Point vs. Vector
 
- 개념적으로 **point와 vector는 매우 다름**
- 이 차이는 **homogeneous coordinates**로 표현할 수 있음
- 이 강의에서는 affine space, **point와 vector의 차이점**, 그리고 그것이 homogeneous coordinates와 어떻게 연결되는지를 학습함
- 이 개념은 coordinate invariant 또는 coordinate-free geometric programming이라고도 불림

> *(출처: http://mrl.snu.ac.kr/courses/CourseGraphics/index_2017spring.html)*

## Points

- Point $\mathbf{p}$, Point $\mathbf{q}$
- 이 두 점을 더한 "sum"은 무엇인가?

## If you assume coordinates, …

- $\mathbf{p} = (x_1,~y_1)$
- $\mathbf{q} = (x_2,~y_2)$
- 합: $(x_1+x_2,~y_1+y_2)$  
  - 이게 맞는가?  
  - **기하학적으로 의미**가 있는가?
- 동일한 좌표 표현에서,
- $\mathbf{p} = (x_1,~y_1)$
- $\mathbf{q} = (x_2,~y_2)$
- $(x_1+x_2,~y_1+y_2)$는 단순한 합이 아닌,  
  **원점에서 $\mathbf{p}$와 $\mathbf{q}$까지 가는 vector의 합**으로 간주해야 함  
→ **Vector sum**

## If you select a different origin, …

- $\mathbf{p} = (x_1,~y_1)$
- $\mathbf{q} = (x_2,~y_2)$
- $(x_1+x_2,~y_1+y_2)$의 의미는  
  **좌표계(원점)가 어디인지에 따라 달라짐**
- 즉, **다른 coordinate frame을 선택하면 결과도 달라짐**

## Points and Vectors

- **point**는 좌표값으로 정의된 위치
- **vector**는 두 점 사이의 차이로 정의됨
- 원점이 정의되었다면, point는 원점에서 해당 point까지의 **vector로 표현 가능**
- 하지만 coordinate-free 관점에서는 **point는 vector가 아님**

## Points & Vectors are Different!

- 수학적(또는 물리적)으로,
  - Point는 공간상의 **위치**  
  - Vector는 공간상의 **변위**
- 시간에 비유하면 다음과 같음:
  - datetime은 시간의 **위치**  
  - duration은 시간의 **변위**

## Vector and Affine Spaces

- **Vector space**  
  - 벡터와 그 연산 포함  
  - 점(points)은 포함하지 않음
- **Affine space**  
  - vector space의 상위 개념  
  - 벡터, 점, 그에 관련된 연산 모두 포함

## Vector spaces

- A **vector space**는 다음으로 구성됨:
  - 벡터 집합과  
  - 두 가지 연산:
    - 벡터 간 덧셈
    - 스칼라 곱

## Linear Combination

- **벡터들의 선형 결합(linear combination)** 또한 벡터임

$$
\mathbf{u}_0, \mathbf{u}_1, \dots, \mathbf{u}_n \in V \\\\
\Rightarrow
c_0 \mathbf{u}_0 + c_1 \mathbf{u}_1 + \dots + c_n \mathbf{u}_n \in V
$$

## Affine Spaces

- An **affine space**는 다음으로 구성됨:
  - 점들의 집합, 관련된 벡터 공간  
  - 두 가지 연산:
    - 두 점의 차이  
    - 점 + 벡터

## Coordinate-Free Geometric Operations

- 덧셈 (Addition)  
- 뺄셈 (Subtraction)  
- 스칼라 곱 (Scalar multiplication)

## Addition

- $\mathbf{u}, \mathbf{v}, \mathbf{w}$: vectors  
- $\mathbf{p}, \mathbf{q}$: points  
  라고 할 때,
- $\mathbf{u} + \mathbf{v} \rightarrow$ **vector**
- $\mathbf{p} + \mathbf{w} \rightarrow$ **point**

## Subtraction

- $\mathbf{u} - \mathbf{v} \rightarrow$ vector   
- $\mathbf{p} - \mathbf{q} \rightarrow$ vector  
- $\mathbf{p} - \mathbf{w} \rightarrow$ point

## Scalar Multiplication

- **스칼라 ⋅ 벡터 = 벡터**  
  - $c \cdot \mathbf{v} \rightarrow$ vector
- **$1 \cdot$ point = point**  
- **$0 \cdot$ point = vector**  
- **$c \cdot$ point = (undefined) $~\text{if} ~(c \neq 0,~1)$**

## Affine Frame

- A **frame**은 다음으로 정의됨:
  - 벡터들의 집합 $ \\{ \mathbf{v}_i~| ~ i = 1, \dots, N \\}$  
  - 기준점 $\mathbf{o}$
- 벡터들의 집합 $\{\mathbf{v}_i\}$는 해당 vector space의 **bases**  
- $\mathbf{o}$는 해당 frame의 **origin**  
- $N$은 affine space의 **dimension**
- 임의의 점 $\mathbf{p}$는 다음과 같이 표현됨:
$$
\mathbf{p} = \mathbf{o} + c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \dots + c_n \mathbf{v}_n
$$
- 임의의 벡터 $\mathbf{v}$는 다음과 같이 표현됨:
$$
\mathbf{v} = c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \dots + c_n \mathbf{v}_n
$$

## Summary

- Affine space에서:
$$
\begin{aligned}
\mathbf{p} + \mathbf{p} & = \text{(undefined)} \\\\
\mathbf{p} - \mathbf{p} & = \text{vector} \\\\
\mathbf{p} \pm \mathbf{v} & = \text{point} \\\\
\mathbf{v} \pm \mathbf{v} & = \text{vector} \\\\
c \cdot \mathbf{v} & = \text{vector} \\\\
1 \cdot \mathbf{p} & = \text{point} \\\\
0 \cdot \mathbf{p} & = \text{vector} \\\\
c \cdot \mathbf{p} & = \text{(undefined)} \quad (c \neq 0, 1)
\end{aligned}
$$

## Points & Vectors in Homogeneous Coordinates

- Homogeneous coordinates에서는,
  - **3D point**: $ (x, y, z, \mathbf{1}) $  
  - **3D vector**: $ (x, y, z, \mathbf{0}) $

→ 이 표현은 coordinate-free geometric programming의 개념과 **완전하게 일치하는 모델**을 제공함

예시:
$$
(x_1, y_1, z_1, 1) + (x_2, y_2, z_2, 1) \\\\= (x_1 + x_2, y_1 + y_2, z_1 + z_2, 2) \text{→ point (undefined)}
$$

$$
(x_1, y_1, z_1, 1) - (x_2, y_2, z_2, 1) \\\\= (x_1 - x_2, y_1 - y_2, z_1 - z_2, 0) \text{→ vector}
$$

$$
(x_1, y_1, z_1, 1) + (x_2, y_2, z_2, 0) \\\\= (x_1 + x_2, y_1 + y_2, z_1 + z_2, 1) \text{→ point}
$$

$$
(x_1, y_1, z_1, 0) + (x_2, y_2, z_2, 0) \\\\= (x_1 + x_2, y_1 + y_2, z_1 + z_2, 0) \text{→ vector}
$$

$$
c \cdot (x, y, z, 0) \\\\= (cx, cy, cz, 0) \text{→ vector}
$$

$$
c \cdot (x, y, z, 1) \\\\= (cx, cy, cz, c) \text{→}
\begin{cases}
\text{point} & \text{if } c = 1 \\\\
\text{vector} & \text{if } c = 0 \\\\
\text{undefined} & \text{if } c \ne 0, 1
\end{cases}
$$

- Affine transformation matrix와 point, vector의 곱:

$$
\begin{bmatrix}
\mathbf{M} & \mathbf{t} \\\\
\mathbf{0}^\mathrm{T} & 1
\end{bmatrix}
\begin{bmatrix}
\mathbf{p} \\\\
1
\end{bmatrix} =
\begin{bmatrix}
\mathbf{M} \mathbf{p} + \mathbf{t} \\\\
1
\end{bmatrix}
\text{→ point}
$$

$$
\begin{bmatrix}
\mathbf{M} & \mathbf{t} \\\\
\mathbf{0}^\mathrm{T} & 1
\end{bmatrix}
\begin{bmatrix}
\mathbf{v} \\\\
0
\end{bmatrix} =
\begin{bmatrix}
\mathbf{M} \mathbf{v} \\\\
0
\end{bmatrix}
\text{→ vector}
$$

→ **translation은 vector에는 적용되지 않음!**

## Quiz 1

## Coordinate System & Reference Frame

- **Coordinate system**  
  - 점의 위치를 고유하게 결정하기 위해 하나 이상의 숫자 또는 좌표를 사용하는 체계

- **Reference frame**  
  - 추상적인 좌표계 + 실제 기준점  
  - 좌표계를 고정시키기 위해 사용됨

- 이 두 용어는 종종 혼용되지만, **의미에는 약간의 차이**가 있음

## World / Body Frame (or Coordinate System)

- **World frame (or coordinate system)**  
  - 세계에 고정된 좌표계  
  - aka. global frame, fixed frame

- **Body frame (or coordinate system)**  
  - 물체에 고정된 좌표계  
  - aka. local frame

## Meanings of Affine Transformation Matrix

- **하나의 affine transformation matrix**는  
  **여러 관점에서 해석 가능함**

## 1) Affine Transformation Matrix Transforms a Geometry w.r.t. World Frame

- 행렬 $\mathbf{M}$은 **기하 객체의 각 vertex 위치를 world frame 기준에서 새로운 위치로 변환**

- 변환 포함: translate, rotate, scale 등

$$
\mathbf{M} =
\begin{bmatrix}
m_{11} & m_{12} & m_{13} & u_x \\\\
m_{21} & m_{22} & m_{23} & u_y \\\\
m_{31} & m_{32} & m_{33} & u_z \\\\
0 & 0 & 0 & 1
\end{bmatrix}
$$

- $\mathbf{M}$을 곱하면 geometry가 **world frame에서 다른 위치로 이동된 결과**를 얻게 됨

## Review: Affine Frame

- **Affine frame** (3D 공간 기준)은 다음으로 정의됨:
  - $x,~y,~z$축을 나타내는 **3개의 벡터**  
  - **1개의 원점 위치(좌표)**

## World Frame

- **World frame**은 보통 다음으로 표현됨:
  - 표준 축 벡터  
    $$
    \hat{\mathbf{e}}_x = \begin{bmatrix}1 \\\\ 0 \\\\ 0\end{bmatrix}~
    \hat{\mathbf{e}}_y = \begin{bmatrix}0 \\\\ 1 \\\\ 0\end{bmatrix}~
    \hat{\mathbf{e}}_z = \begin{bmatrix}0 \\\\ 0 \\\\ 1\end{bmatrix}
    $$
  - 원점  
    $$
    \mathbf{0}= \begin{bmatrix}0 \\\\ 0 \\\\ 0\end{bmatrix}
    $$

## Let’s Transform a "World Frame"

- $\mathbf{M}$을 **world frame에 곱하면**, 각 축 벡터 및 원점이 변환됨:

$
\text{x-axis:} \quad \mathbf{M} \begin{bmatrix}1 \\\\ 0 \\\\ 0 \\\\ 0\end{bmatrix}
$
: 첫 번째 column

$
\text{y-axis:} \quad \mathbf{M} \begin{bmatrix}0 \\\\ 1 \\\\ 0 \\\\ 0\end{bmatrix}
$
: 두 번째 column

$
\text{z-axis:} \quad \mathbf{M} \begin{bmatrix}0 \\\\ 0 \\\\ 1 \\\\ 0\end{bmatrix}
$
: 세 번째 column

$
\text{origin:} \quad \mathbf{M} \begin{bmatrix}0 \\\\ 0 \\\\ 0 \\\\ 1\end{bmatrix}
$
: 네 번째 column

## 2) Affine Transformation Matrix Defines an Affine Frame w.r.t. World Frame

- 행렬 $\mathbf{M}$은 **기준 프레임 $\\{0\\}$ 기준으로 표현된 body frame $\\{1\\}$을 정의**
- $\mathbf{M}$의 각 column은 다음을 나타냄:
  - 앞의 3개 column: 축 벡터
  - 마지막 column: 원점 위치

→ $\mathbf{M}$은 **body frame $\\{1\\}$을 world frame $\\{0\\}$ 기준으로 표현**한 것

## Examples

- 같은 물체의 body frame을 두 방식으로 정의:
  1. world frame과 동일한 위치일 때  
  2. 이동된 위치에서 정의될 때

→ 두 경우 모두 $\mathbf{M}$은 body frame을 world 기준으로 표현함

## 3) Affine Transformation Matrix Transforms a Point in Body Frame to (the same) Point (but) represented in World Frame

- $ \mathbf{p}^{\\{1\\}} = \begin{bmatrix}1 \\\\ 1 \\\\ 0\end{bmatrix} $  
  (body frame $\\{1\\}$ 기준의 점)
$$
\mathbf{p}^{\\{0\\}} = \mathbf{M} \cdot \mathbf{p}^{\\{1\\}}
$$
- 같은 점을 **world frame $\\{0\\}$ 기준으로 표현한 것**  
Why?  
- 동일한 물체를 body frame에서 보다가 $\mathbf{M}$을 통해 **world frame 기준 표현**으로 변환한 것:
$$
\mathbf{p}^{\\{0\\}} = \mathbf{M} \cdot \mathbf{p}^{\\{1\\}}
$$
- 단순히 geometry를 변환한 이야기임

## Directions of the "arrow"

- 첫 번째 의미
  - geometry 자체를 transform (frame은 그대로)  
  - $\mathbf{M}$은 변환의 방향을 나타냄: ${\\{0\\}}\rightarrow{\\{1\\}}$  
  → $\mathbf{p}^{\\{0\\}}$가 변환되어 $\mathbf{p}^{\\{1\\}}$이 됨.
- 두 번째 의미
  - frame 자체의 변환  
  - ${\\{1\\}}$ 프레임이 ${\\{0\\}}$ 기준으로 어떻게 보이는지를 나타냄
- 세 번째 의미 
  - $\mathbf{p}$라는 점이 표현되는 **프레임 자체**를 바꾸는 과정
→ "표현의 기준"이 바뀜: $\\{0\\}$에서 본 $\mathbf{p}$를 $\\{1\\}$에서 본 $\mathbf{p}$로 변환하는 것

## Quiz 2

## All these concepts work even if the starting frame is not world frame!

- 시작 프레임이 world frame이 아니어도, 지금까지의 모든 개념은 그대로 적용 가능

## {0} to {1}

- $\mathbf{M}_1$은 다음을 수행:
  1. 프레임 $\\{0\\}$ 기준에서 geometry를 변환  
  1. 프레임 $\\{0\\}$ 기준에서 프레임 $\\{1\\}$을 정의  
  1. 프레임 $\\{1\\}$ 기준의 점을 $\\{0\\}$ 기준으로 표현  
     $$ \mathbf{p}^{\\{0\\}} = \mathbf{M}_1 \cdot \mathbf{p}^{\\{1\\}} $$

## {1} to {2}

- $\mathbf{M}_2$는 다음을 수행:
  1. 프레임 $\\{1\\}$ 기준에서 geometry를 변환  
  1. 프레임 $\\{1\\}$ 기준에서 프레임 를 정의  
  1. 프레임 $\\{2\\}$ 기준의 점을 $\\{1\\}$ 기준으로 표현  
     $$ \mathbf{p}^{\\{1\\}} = \mathbf{M}_2 \cdot \mathbf{p}^{\\{2\\}} $$

## {0} to {2}

- $\mathbf{M}_1 \mathbf{M}_2$는 다음을 수행:
  1. 프레임 $\\{0\\}$ 기준에서 geometry를 변환  
  1. 프레임 $\\{0\\}$ 기준에서 프레임 $\\{2\\}$를 정의  
  1. 프레임 $\\{2\\}$ 기준의 점을 $\\{0\\}$ 기준으로 표현  
     $$ \mathbf{p}^{\\{0\\}} = \mathbf{M}_1 \cdot \mathbf{M}_2 \cdot \mathbf{p}^{\\{2\\}} $$

## Revisit: Order Matters!

- $\mathbf{T}, \mathbf{R}$이 affine transformation을 나타내는 행렬일 때:
$$
\mathbf{p}' = \mathbf{T} \cdot \mathbf{R} \cdot \mathbf{p}
\\\\\Rightarrow \text{ 먼저 } \mathbf{R}(\mathbf{p}) \text{ 적용, 그 후 } \mathbf{T}
$$
$$
\mathbf{p}' = \mathbf{R} \cdot \mathbf{T} \cdot \mathbf{p}
\\\\\Rightarrow \text{ 먼저 } \mathbf{T}(\mathbf{p}) \text{ 적용, 그 후 } \mathbf{R}
$$
- → **행렬의 곱셈 순서는 매우 중요함!**  
  - 결합법칙은 성립하지만 교환법칙은 성립하지 않음: $AB \ne BA$

## Composite(복합) Transformations의 Interpretation(해석)

- 예시 transformation:  
  $$ \mathbf{M} = \mathbf{T}(x,~3) \cdot \mathbf{R}(-90^\circ) $$
- 지금까지 해석했던 방식:  
  - **$\mathbf{R} \rightarrow \mathbf{T}$ 순서로** 적용  
  - $\mathbf{R}$은 **world frame 기준 변환**
$$
\mathbf{p}
\xrightarrow{\mathbf{R}(-90^\circ)}
\mathbf{R}(\mathbf{p})
\\\\\xrightarrow{\mathbf{T}(x, 3)}
\mathbf{p}' = \mathbf{T}(\mathbf{R}(\mathbf{p}))
$$
- **다른 해석 방식**:  
  - $\mathbf{R} \rightarrow \mathbf{T}$ 순서가 아닌, **$\mathbf{T} \rightarrow \mathbf{R}$** 순서로 해석  
  - 즉, **body frame 기준**에서 해석하는 방식
$$
\mathbf{p} \rightarrow \mathbf{T}(\mathbf{p}) \rightarrow \mathbf{R}(\mathbf{T}(\mathbf{p})) = \mathbf{M}(\mathbf{p}) = \mathbf{p}'
$$
→ 동일한 행렬이라도 **기준 프레임에 따라 해석이 달라질 수 있음**

## Pre-(left) & Post-(right) Multiplication

### Pre-multiplication:

$$
\mathbf{p}' = \mathbf{M}_1 \cdot \mathbf{M}_2 \cdot \mathbf{p}
\\\\ (\text{pre-multiplication by } \mathbf{M}_1)
$$

→ **Right-to-Left 순서**

1. $\mathbf{M}_2$를 **world frame 기준**으로 적용하여 $\mathbf{p}$를 변환  
2. 그 결과에 $\mathbf{M}_1$을 다시 **world frame 기준**으로 적용

→ 전체 변환은 $\mathbf{M}_1 \mathbf{M}_2$

### Post-multiplication:

$$
\mathbf{p}' = \mathbf{M}_1 \cdot \mathbf{M}_2 \cdot \mathbf{p}
\\\\ (\text{post-multiplication by } \mathbf{M}_1)
$$

→ **Left-to-Right 순서**

1. $\mathbf{p}$는 body frame $\\{1\\}$ 기준에서 표현되어 있음  
2. $\mathbf{M}_1$은 **body frame $\\{1\\}$을 world frame 기준으로 업데이트**함  
3. $\mathbf{M}_2$는 이어서 **body frame $\\{2\\}$로 업데이트**함  
4. 결과적으로 $\mathbf{p}$는 body frame $\\{2\\}$ 기준에서 표현됨

→ 전체 변환은 여전히 $\mathbf{M}_1 \mathbf{M}_2$

## 또 다른 유용한 해석법

1. $\mathbf{M}_1$: world frame 기준으로 적용하여 **body frame을 $\mathbf{M}_1$으로 업데이트**  
2. $\mathbf{M}_2$: 다시 world frame 기준으로 적용하여 **body frame을 $\mathbf{M}_1 \mathbf{M}_2$로 업데이트**  
3. $\mathbf{p}$를 **새로운 body frame $\mathbf{M}_1 \mathbf{M}_2$ 기준으로** 위치시킴


## [Demo] L-to-R & R-to-L Interpretation
[observablehq.com/@esperanc/transformation-demo](https://observablehq.com/@esperanc/transformation-demo)  
- 다양한 순서로 translation 및 선형 변환 추가 ( '+' 버튼 사용)  
- 슬라이더를 드래그하여 행렬 값의 변화 및 도형의 변화를 관찰  
- 합성 변환의 의미를 **L-to-R**, **R-to-L** 순서로 해석해보세요

<home/>