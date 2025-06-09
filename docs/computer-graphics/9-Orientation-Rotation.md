# 9 - Orientation & Rotation

## Outline

- Basic Concepts  
  - Orientation vs. Rotation  
  - Degrees of Freedom  
  - Euler's Rotation Theorem

- 3D Orientation & Rotation Representations  
  - Euler Angles  
  - Rotation Vector (Axis-Angle)  
  - Rotation Matrix  
  - Unit Quaternion

- Which Representation to Use?  
  - 다양한 관점에서의 고려  
  - 3D Orientation / Rotation의 보간  
  - 각 표현 방식의 장단점

# Basic Concepts

## State vs. Movement

- **position : translation**  
  - position = 객체의 3차원 위치  
  - translation = 선형 이동 (linear movement)

> 기준 좌표계: Some reference frame

## State vs. Movement

- **(position : translation)**  
- **(orientation : rotation)**  
- → **(state : movement)**

- orientation = 객체의 3차원 “방향 상태”  
- rotation = 각운동 (angular movement)

> 기준 좌표계: Some reference frame

## Orientation vs. Rotation  
(and Position vs. Translation)

- **Orientation & Position - state**  
  - **Position**: 위치 상태  
    - 좌표계가 주어졌을 때, 어떤 객체의 위치는 기준 위치로부터의 **translation**으로 표현 가능함
  - **Orientation**: 방향 상태 (각 위치)  
    - 좌표계가 주어졌을 때, 객체의 방향은 기준 방향으로부터의 **rotation**으로 표현 가능함

- **Rotation & Translation - movement**  
  - **Translation**: 선형 이동 (위치 간 차이)  
  - **Rotation**: 각운동 (방향 간 차이)

- 이 관계는 **점(point)** 과 **벡터(vector)** 관계에 유사함  
  - 점(point): 위치  
  - 벡터(vector): 두 점 사이의 차이

## Similarity in Operations

- **Point & vector**
  - (point) + (point) → (정의되지 않음)
  - (vector) ± (vector) → (vector)
  - (point) ± (vector) → (point)
  - (point) - (point) → (vector)

> ※ 벡터의 덧셈/뺄셈이 아님에 주의

- **Orientation & rotation**
  - (orientation) + (orientation) → (정의되지 않음)
  - (rotation) ± (rotation) → (rotation)
  - (orientation) ± (rotation) → (orientation)
  - (orientation) ∘ (rotation) → (orientation)
  - (orientation) ∘ (orientation⁻¹) → (rotation)

## Degrees of Freedom (DOF)

- 어떤 **고유한 상태(configuration)** 를 정의하기 위한 **독립적인 매개변수의 수**

- 예시:
  - 한 방향으로의 이동: **1 DOF**
  - 한 축을 중심으로 하는 회전: **1 DOF**

## Degrees of Freedom (DOF)

- 평면 상 이동 → 2 DOFs  
- 두 축을 중심으로 하는 회전 → 2 DOFs

- 3D 공간 이동 → 3 DOFs  
- 3D 공간에서의 회전 → 3 DOFs

## Degrees of Freedom (DOF)

- 3D 공간에서의 임의의 강체 운동  
  → **6 DOFs**  
  (이동 3개 + 회전 3개)

## Euler's Rotation Theorem

- **정리 (Theorem)**  
  > When a sphere is moved around its centre it is always possible to find a diameter whose direction in the displaced position is the same as in the initial position.  
  > — *Leonhard Euler (1707–1783)*

- 3차원 공간에서,  
  **강체(rigid body)의 임의의 이동 중 물체의 한 점이 고정되어 있다면**,  
  이는 항상 **어떤 축을 중심으로 하는 단일 회전**으로 표현 가능하다.

## Euler's Rotation Theorem

- 3D 회전 (즉, 한 점이 고정된 상태의 모든 움직임)은  
  항상 **회전 축**과 그 축을 중심으로 하는 **회전 각도**를 찾을 수 있음

> $θ$: 회전 각도  
> $n$: 회전 축 (단위 벡터)

# 3D Orientation & Rotation Representations

## Describing 3D Rotation & Orientation

- 3D 회전과 방향 표현은 2D 경우보다 직관적이지 않음

- 3D 방향을 기술하는 여러 방법
  - Euler angles  
  - Rotation vector (Axis-angle)  
  - Rotation matrices  
  - Unit quaternions

## Euler Angles

- 임의의 3차원 회전은 **세 개의 주축(principal axis)에 대한 회전각**으로 표현 가능함

- 가능한 조합 12가지:
  - XYZ, YYX, XZY, XZX  
  - YZX, YZY, ZXY, YXZ  
  - ZXY, ZXZ, ZYX, ZYZ

> 단, 같은 축이 연속해서 나타나지 않는 한 조합은 가능

## Example: ZXZ Euler Angles

1. $Z$축 기준으로 $\alpha$만큼 회전  
2. 새로운 기준축 $X$ 기준으로 $\beta$만큼 회전  
3. 다시 새로운 $Z$축 기준으로 $\gamma$만큼 회전  

$$
R = R_z(\alpha) \cdot R_x(\beta) \cdot R_z(\gamma)
$$

각 회전 행렬은 다음과 같음:

$$
R_z(\alpha) =
\begin{bmatrix}
\cos \alpha & -\sin \alpha & 0 \\
\sin \alpha & \cos \alpha & 0 \\
0 & 0 & 1
\end{bmatrix}
\quad
R_x(\beta) =
\begin{bmatrix}
1 & 0 & 0 \\
0 & \cos \beta & -\sin \beta \\
0 & \sin \beta & \cos \beta
\end{bmatrix}
\quad
R_z(\gamma) =
\begin{bmatrix}
\cos \gamma & -\sin \gamma & 0 \\
\sin \gamma & \cos \gamma & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

## Example: Yaw-Pitch-Roll Convention  
(ZYX Euler Angles)

- 항공기 방향 표현 시 일반적으로 사용됨

1. $Z$축 기준으로 **yaw** 회전  
2. 새 기준의 $Y$축 기준으로 **pitch** 회전  
3. 새 기준의 $X$축 기준으로 **roll** 회전

$$
R = R_z(\text{yaw}) \cdot R_y(\text{pitch}) \cdot R_x(\text{roll})
$$

## Recall: 3D Rotation Matrix about Principle Axes

- $x$축 회전:

$$
R_x(\theta) =
\begin{bmatrix}
1 & 0 & 0 \\
0 & \cos \theta & -\sin \theta \\
0 & \sin \theta & \cos \theta
\end{bmatrix}
$$

- $y$축 회전:

$$
R_y(\theta) =
\begin{bmatrix}
\cos \theta & 0 & \sin \theta \\
0 & 1 & 0 \\
-\sin \theta & 0 & \cos \theta
\end{bmatrix}
$$

- $z$축 회전:

$$
R_z(\theta) =
\begin{bmatrix}
\cos \theta & -\sin \theta & 0 \\
\sin \theta & \cos \theta & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

## Gimbal Lock

- Euler 각을 사용할 경우, 두 회전 축이 정렬되면 일시적으로 **자유도(DOF)를 잃게 됨**

- **정상 구성 (Normal configuration)**:  
  - 물체는 자유롭게 회전 가능

- **Gimbal lock 구성**:  
  - 특정 방향으로의 회전이 불가능해짐

## [Demo] Euler Angles

![Euler Angle Demo 이미지]

[https://compsc290-s2016.github.io/CoursePage/Materials/EulerAnglesViz/index.html](https://compsc290-s2016.github.io/CoursePage/Materials/EulerAnglesViz/index.html)

- yaw, pitch, roll 값을 직접 바꿔보기
- 세 회전 축을 정렬시켜 gimbal lock 상태 만들기  
  - 예: pitch를 90도로 설정

## Quiz 1

## Rotation Vector (Axis-Angle)

- 회전 벡터(rotation vector)  
  - $ \mathbf{v} = \theta \, \hat{\mathbf{v}} = (x, y, z) $

- 축-각 표현(axis-angle)  
  - $ (\theta, \hat{\mathbf{v}}) $

> $\theta$: 회전 각도  
> $\hat{\mathbf{v}}$: 회전 축 (단위 벡터)

## Rotation Vector (Axis-Angle)

- 회전 벡터는 **exponential coordinates** 라고도 불림

- 명칭 유래가 궁금하다면 다음 참고:  
  [Modern Robotics, Section 3.2.3](http://hades.mech.northwestern.edu/images/2/25/MR-v2.pdf)

## Rotation Matrix

- 회전 행렬 $R$은 다음을 정의함:
  - 새로운 회전된 좌표계의 **방향**
  - 또는 기존 world frame에서 **해당 좌표계로의 회전**

$$
R =
\begin{bmatrix}
r_{11} & r_{12} & r_{13} \\
r_{21} & r_{22} & r_{23} \\
r_{31} & r_{32} & r_{33}
\end{bmatrix}
\quad \text{(expressed in the world frame)}
$$

## Rotation Matrix

- 정방 행렬 $R$이 회전 행렬이기 위한 조건은 다음 두 가지를 모두 만족해야 함:

  1. $RR^T = R^TR = I$
  2. $\det(R) = 1$

- 회전 행렬은 **orthogonal matrix** 이며, 행렬식이 1인 경우는 특별히 **special orthogonal matrix** 라고 부름

- 3차원 회전 행렬의 집합은 **$SO(3)$**, 즉 special orthogonal group을 구성함

## Geometric Properties of Rotation Matrix

- $R^T$는 $R$의 **역회전**임  
  - $RR^T = I \iff R^{-1} = R^T$

- $R_1 R_2$ 또한 회전 행렬임 (회전의 합성)  
  - 증명:  
    $$(R_1 R_2)^T (R_1 R_2) = R_2^T R_1^T R_1 R_2 = R_2^T R_2 = I$$  
    $ \det(R_1 R_2) = \det(R_1) \cdot \det(R_2) = 1 $

- 회전 행렬을 적용하더라도 벡터의 길이는 변하지 않음  
  - 증명:  
    $$\|R \mathbf{v}\|^2 = (R \mathbf{v})^T (R \mathbf{v}) = \mathbf{v}^T R^T R \mathbf{v} = \mathbf{v}^T \mathbf{v} = \|\mathbf{v}\|^2$$

## Quaternions

- 복소수(complex number)는 2D 회전을 표현 가능  
  - $z = x + yi$, $i^2 = -1$  
  - $z = r \cos \varphi + i r \sin \varphi$

- Quaternion은 이를 3D로 확장한 개념임

- 기본 표현:  
  $$q = w + xi + yj + zk$$

- 규칙:  
  $$
  \begin{aligned}
  i^2 = j^2 = k^2 &= ijk = -1 \\
  ij = k,\quad jk = i,\quad ki = j \\
  ji = -k,\quad kj = -i,\quad ik = -j
  \end{aligned}
  $$

## Quaternions

- 일반적인 표현:
  $$q = w + xi + yj + zk$$

- 여기서:
  - $w$: **실수 부분** (real part, 또는 scalar part)
  - $xi + yj + zk$: **허수 부분** (imaginary part, 또는 vector part)

- 표기 방법:
  $$q = w + \mathbf{v} = (w, x, y, z) = (w, \mathbf{v})$$

## Unit Quaternions

- **Unit quaternion**은 3D 회전을 표현함  
  - $$q = w + x i + y j + z k$$
  - 조건: $x^2 + y^2 + z^2 = 1$

- $z = \cos \varphi + i \sin \varphi$ 형태의 복소수와 유사하게, 2D 회전을 표현함

- $\hat{\mathbf{u}}$ 축을 기준으로 각 $\theta$ 만큼 회전하는 쿼터니언은 다음과 같음:

$$
q = \left( \cos \frac{\theta}{2}, \; \hat{\mathbf{u}} \sin \frac{\theta}{2} \right)
$$

또는

$$
q = w + x i + y j + z k = (w, \mathbf{v})
$$

## Unit Quaternions

- 3차원 위치 $\mathbf{p} = (x, y, z)$ 는 **pure imaginary quaternion** $(0, x, y, z)$로 표현됨

- 이 벡터가 $\hat{\mathbf{u}}$ 축을 기준으로 각 $\theta$ 만큼 회전하면, 새로운 위치 $\mathbf{p'} = (x', y', z')$ 는 다음과 같음:

$$
\mathbf{p'} = q \, \mathbf{p} \, q^{-1}
$$

단, 회전 쿼터니언은 다음과 같음:

$$
q = \left( \cos \frac{\theta}{2}, \; \hat{\mathbf{u}} \sin \frac{\theta}{2} \right)
$$

## Unit Quaternions

- 항등원 (Identity):  
  $$q = (1, 0, 0, 0)$$

- 곱셈 (Multiplication):  
  $$
  q_1 q_2 = (w_1, \mathbf{v}_1)(w_2, \mathbf{v}_2)  
  = (w_1 w_2 - \mathbf{v}_1 \cdot \mathbf{v}_2,\; w_1 \mathbf{v}_2 + w_2 \mathbf{v}_1 + \mathbf{v}_1 \times \mathbf{v}_2)
  $$

- 역원 (Inverse 또는 Conjugate):  
  $$q^{-1} = (w, -x, -y, -z)$$

- 의미:
  - $q_1 q_2$: 먼저 $q_1$로 회전하고, 그다음 $q_2$로 회전 (body frame 기준)  
    또는 반대로 $q_2$로 회전하고 그다음 $q_1$로 회전 (world frame 기준)

- 회전 적용:  
  $$\mathbf{p'} = q_1 q_2 \, \mathbf{p} \, (q_1 q_2)^{-1} = q_1 (q_2 \, \mathbf{p} \, q_2^{-1}) q_1^{-1}$$

## Quiz 2

# Which Representation to Use?

## 1) "Addition" of Rotations

- ✅ Rotation matrix, Unit quaternion:  
  - $R_2 R_1,\; q_2 q_1$  
  - $R_x(\theta_1)$ 후에 $R_y(\theta_2)$ 적용하면 $(현재 기준)$ body frame 기준 회전  
  - 단, 요소 단위 덧셈은 회전 행렬이나 쿼터니언을 보장하지 않음

- ❌ Euler angles:  
  - $(\alpha_1, \beta_1, \gamma_1) + (\alpha_2, \beta_2, \gamma_2) \ne (\alpha_1 + \alpha_2, \beta_1 + \beta_2, \gamma_1 + \gamma_2)$  
  - 단순 덧셈은 실제 회전의 합을 의미하지 않음

- ❌ Rotation vector:  
  - $\mathbf{v}_1 + \mathbf{v}_2$는 $\mathbf{v}_2$로 이어서 회전한다는 의미가 아님

## 2) "Subtraction" of Rotations

- ✅ Rotation matrix, Unit quaternion:  
  - $R_1^T R_2,\; q_1^{-1} q_2$  
  - 회전 차이 = 프레임 $R_2$를 $R_1$과 일치시키는 회전  
  - 증명: $R_1^T R_2 = R$ → $R_1 R = R_2$  
  - 요소 단위 차는 여전히 유효한 회전 아님

- ❌ Euler angles:  
  - $(\alpha_2, \beta_2, \gamma_2) - (\alpha_1, \beta_1, \gamma_1) \ne (\alpha_2 - \alpha_1, \beta_2 - \beta_1, \gamma_2 - \gamma_1)$  
  - 단순 차이는 실제 회전 차이를 반영하지 않음

- ❌ Rotation vector:  
  - $\mathbf{v}_2 - \mathbf{v}_1$  
  - 두 회전의 차이를 의미하지 않음

## 3) Interpolation of Rotations

- 각 구성 요소를 선형 보간(linear interpolation)해도 괜찮을까?

  - Euler angles  
  - Rotation vector  
  - Rotation matrix  
  - Unit quaternion  
  - ...?

- 👉 **안 된다!**

## Interpolating Each Element of Rotation Matrices / Unit Quaternions?

- 예: 단위 행렬 $R_0$ 과 $x$축으로 90도 회전한 행렬 $R_1$의 보간을 시도

$$
\text{lerp}\left(
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix},
\begin{bmatrix}
1 & 0 & 0 \\
0 & 0 & -1 \\
0 & 1 & 0
\end{bmatrix},\; 0.5 \right)
=
\begin{bmatrix}
1 & 0 & 0 \\
0 & 0.5 & -0.5 \\
0 & 0.5 & 0.5
\end{bmatrix}
$$

> ⛔ 이는 회전 행렬이 아님! 전혀 의미 없는 결과

- 마찬가지로, unit quaternion의 $(w, x, y, z)$ 값을 단순히 보간해도 의미 없음

## Interpolating Rotation Vectors?

- 동일한 길이의 두 회전 벡터 $\mathbf{v}_1$, $\mathbf{v}_2$가 있다고 가정

- $\mathbf{v}_1$, $\mathbf{v}_2$를 선형 보간하면 간격이 균등해 보일 수 있음

> 하지만 실제 방향의 변화 측면에서는 균등하지 않음  
> 👉 **올바른 방식 아님**

## Interpolating Euler Angles?

- 두 Euler 각 튜플을 선형 보간하면 정확한 결과를 얻지 못함

  - ❌ 각속도(angular velocity)가 일정하지 않음  
  - ❌ gimbal lock 발생 영역에서는 부자연스러운 끊김이 발생

## Slerp

- **정답: Slerp** (Shoemake, 1985)  
  - Spherical linear interpolation  
  - 두 방향의 구면상 선형 보간 방식

- 수식:

$$
\text{slerp}(R_1, R_2, t) = R_1 \left( R_1^T R_2 \right)^t  
= R_1 \exp \left( t \cdot \log \left( R_1^T R_2 \right) \right)
$$

> $t$는 지수(power) 연산이며 전치(transpose)가 아님에 주의

## Slerp with Rotation Matrices

- $$\text{slerp}(R_1, R_2, t) = R_1 (R_1^T R_2)^t$$

- 의미:
  - $R_1^T R_2$: $R_1$에서 $R_2$로의 회전 차이  
  - $(R_1^T R_2)^t$: 회전 차이를 $t$만큼 스케일  
  - $R_1 (R_1^T R_2)^t$: $R_1$에서 시작해 $R_2$로 점진적 회전

- 등가식:
  $$\text{slerp}(R_1, R_2, t) = R_1 \exp \left( t \cdot \log(R_1^T R_2) \right)$$

- $\exp()$: 회전 벡터 → 회전 행렬  
- $\log()$: 회전 행렬 → 회전 벡터

## Exp & Log Details

- **Exp (지수 변환)**: 회전 벡터 → 회전 행렬  
  - 단위 회전축 $\mathbf{u} = (u_x, u_y, u_z)$ 와 회전각 $\theta$에 대해:  
    $$R = \cos\theta I + (1 - \cos\theta) \mathbf{u} \mathbf{u}^T + \sin\theta \hat{\mathbf{u}}$$  
    (Rodrigues 공식)

- **Log (로그 변환)**: 회전 행렬 → 회전 벡터  
  - $R$의 회전각 $\theta$ 및 축 $\mathbf{u}$ 계산 공식 생략

- 공식을 외울 필요는 없음  
  - 자세한 내용은 [Modern Robotics, Section 3.2.3](http://hades.mech.northwestern.edu/images/2/25/MR-v2.pdf) 참고

## Exp & Log

- 실습 팁:
  - `pyglm`, `scipy` (Python), `Eigen` (C++) 등 라이브러리에서 $\exp$, $\log$ 함수 사용 가능
  - 본 실습에서는 `pyglm` 사용

- 직접 구현도 가능하며 복잡하지 않음

## Slerp with Quaternions

- 쿼터니언 기반 slerp:

$$
\text{slerp}(q_1, q_2, t) = q_1 (q_1^{-1} q_2)^t
$$

- 등가 기하학적 표현:

$$
\text{slerp}(q_1, q_2, t) = \frac{\sin((1 - t)\varphi)}{\sin \varphi} q_1 + \frac{\sin(t \varphi)}{\sin \varphi} q_2
$$

단, $\varphi$는 두 쿼터니언 사이의 각도:  
$$
\cos \varphi = q_1 \cdot q_2
$$

- Euler 각이나 회전 벡터에 대해서는 직접 slerp 불가  
  → 회전 행렬이나 unit quaternion으로 변환 후 적용 필요

## Comparison of Interpolation Methods

- 시작 방향 (ZYX Euler angles):  
  $R_z(-90^\circ) \, R_y(90^\circ) \, R_x(0^\circ)$

- 종료 방향 (ZYX Euler angles):  
  $R_z(0^\circ) \, R_y(0^\circ) \, R_x(90^\circ)$

[https://youtu.be/YX0AMKMnGkU](https://youtu.be/YX0AMKMnGkU)

## [Demo] Slerp

[https://nccastaff.bournemouth.ac.uk/jmacey/WebGL/QuatSlerp/](https://nccastaff.bournemouth.ac.uk/jmacey/WebGL/QuatSlerp/)

- "Start Rotation" 및 "End Rotation" 변경  
- "Interpolate" 슬라이더 이동해보기

## Quiz 3

## 3) Interpolation of Rotations: Summary

- ✅ **Rotation matrix, Unit quaternion**:
  - $\text{slerp}(R_1, R_2, t)$ 또는 $\text{slerp}(q_1, q_2, t)$
  - 요소별 보간은 회전 행렬 또는 쿼터니언 자체도 아님 (의미 없음)

- ❌ **Euler angles**:
  - $\text{lerp}((\alpha_1, \beta_1, \gamma_1), (\alpha_2, \beta_2, \gamma_2))$  
  - 두 회전 사이의 선형 보간이 아님

- ❌ **Rotation vector**:
  - $\text{lerp}(\mathbf{v}_1, \mathbf{v}_2)$  
  - 두 회전 사이의 선형 보간이 아님

## 4) Continuity / Correspondence

- ❌ Euler angles, Rotation vector:
  - 회전을 3개의 매개변수로 표현함
  - 이로 인해 다음 문제 발생:
    - 불연속성: 연속적인 방향도 불연속적으로 표현됨
    - 다대일 대응: 하나의 방향에 여러 표현이 가능함

> 예시:
> 하나의 방향이 여러 Euler 각도로 표현됨  
> 시간에 따라 방향이 부자연스럽게 튀는 현상

## 4) Continuity / Correspondence

- △ Unit quaternion:
  - 4개의 매개변수 사용
  - 연속 표현 가능
  - 이중 일치(two-to-one mapping)
    - $q$와 $-q$는 같은 회전을 의미
    - → 이 특성을 **antipodal equivalence**라 함

- ✅ Rotation matrix:
  - 9개의 매개변수 사용
  - 일대일 대응 및 연속 표현 가능

## Again: Which Representation to Use?

- **일반적인 조언**:
  - 회전 행렬 또는 unit quaternion 사용

- **고급 조언**:
  - 하나의 표현만 고집하지 말 것 (각각 장단점 존재)
  - 표현 간 변환을 통해 상황에 맞는 최적 방식 선택 가능

## Pros & Cons of Euler Angles

- 🔻 단점:
  - 정확한 **덧셈, 뺄셈, 보간 연산**이 불가능
  - 불연속성과 다대일 표현
  - Gimbal lock 문제

- 🔺 장점:
  - 직관적인 조작 가능 (3D 툴에서 널리 사용되는 이유)
  - 실제 기구(hardware)의 3축 조인트 상태 표현에 적합  
    (예: 로봇 관절이나 짐벌 등)

## Pros & Cons of Rotation Vector

- 🔻 정확한 **"덧셈"**, **"뺄셈"**, **보간** 연산이 불가능  
- 🔻 불연속성 및 다대일 대응

- 🔺 회전 시각화에 용이  
  - 회전 축과 각도를 직관적으로 표현 가능

- 🔺 3개의 매개변수로 가장 간결한 표현 가능  
  - Euler angle도 3개지만 gimbal lock 문제 존재

## Pros & Cons of Rotation Matrix

- 🔺 정확한 **"덧셈"**, **"뺄셈"**, **보간** 연산 가능  
- 🔺 연속적인 일대일 대응 (매우 좋음)  
- 🔺 방향 시각화에 용이  
  - 각 행(또는 열)을 x, y, z 축으로 시각화 가능  
- 🔺 4x4 아핀 변환 행렬로 쉽게 확장 가능 (회전 + 이동 통합 표현)

- 🔻 매개변수 수가 많음 (9개)  
- 🔻 계산 비용이 조금 더 크며, 수치적으로 약간 덜 안정적 (unit quaternion 대비)

## Pros & Cons of Unit Quaternion

- 🔺 정확한 **"덧셈"**, **"뺄셈"**, **보간** 연산 가능  
- 🔺 연속 표현 가능  
- 🔺 4개의 매개변수만 사용  
- 🔺 회전 행렬보다 계산이 빠르고 수치적으로 안정적

- 🔻 두 쿼터니언이 하나의 회전을 표현 (two-to-one, **antipodal equivalence**)  
- 🔻 숫자 체계가 직관적이지 않음

## Conversion between Representations

- 다음 간의 변환에 대한 이론이 잘 정립되어 있음:
  - Euler angles  
  - Rotation vector  
  - Rotation matrix  
  - Unit quaternion

- 변환을 위해 다음과 같은 라이브러리 사용 가능:
  - `pyglm`, `scipy` (Python)  
  - `Eigen` (C++)  
  - ※ `pyglm`은 일부 변환만 제공함

- 이론을 참고해 직접 구현도 가능  
  - (검색 등을 통해) 필요한 수식 참고하여 구현 가능