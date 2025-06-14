# 5 - Vertex Processing 1

## Outline

- Rasterization Pipeline & Vertex Processing  
- Modeling Transformation  
- Viewing Transformation

## Recall: Rasterization Pipeline
(3D 장면의 기하 정보를 픽셀 단위의 2D 이미지로 변환하는 일련의 처리 과정)  
- **Vertex Processing**  
  - vertex를 screen space로 변환
- **Primitive Processing**  
  - vertex들을 polygon으로 구성
- **Scan Conversion**  
  - polygon을 fragment 집합으로 변환
- **Fragment Processing**  
  - 각 fragment의 색상 결정 (텍스처, 조명 모델 등 고려)
- **Per-sample Operations**  
  - depth test, alpha blending 등 수행
- Vertex Processing:  
  - 정점들을 화면 좌표계로 변환  
  - 일련의 정점 변환 시퀀스를 적용
- 우리가 지금까지 학습한 범위는:  
  - Primitive Processing ~ Per-sample Operations
- 오늘과 다음 시간에 볼 내용:  
  - **Vertex Processing**

## Vertex Processing

- 각 객체의 body frame에서의 정점 위치:

  $$
  \mathbf{p}_1,\quad \mathbf{p}_2,\quad \mathbf{p}_3
  $$

- World frame으로의 변환:

  $$
  \mathbf{M} \mathbf{p}_1,\quad \mathbf{M} \mathbf{p}_2,\quad \mathbf{M} \mathbf{p}_3
  $$

- → 하지만 아직 화면에 표시하기 위해선 **추가 개념**이 필요함

  **“카메라”가 장면**을 바라본다는 개념 도입 필요

- 이어지는 단계:  

  2. “카메라” 배치  
  3. “렌즈” 선택  
  4. “스크린”에 투사

## In Terms of CG Transformation,

1. 객체 배치  
   → **Modeling Transformation**
2. 카메라 배치  
   → **Viewing Transformation**
3. 렌즈 선택  
   → **Projection Transformation**
4. 화면에 출력  
   → **Viewport Transformation**
- 위 모든 변환들은 **행렬 곱셈**으로 구성됨

## Vertex Processing (Transformation Pipeline)

- Object space (body frame):  
  - 객체 기준 좌표계
- World space (world frame):  
  - 전체 장면 기준 좌표계
- 수행할 작업:
  - 이동(translate), 회전(rotate), 크기 조절(scale) 등  
  - 이전 강의에서 다룬 모든 affine 변환 포함

### Modeling transformation  
- 객체 좌표계 (object space) → world 좌표계로 변환  
- 이전 강의에서 배운 affine transformation을 적용함

### Placing a “camera”  
- world 좌표계 상에서 카메라를 배치함  
- view space (또는 camera space) 정의됨

### Viewing transformation  
- world space → camera space로 변환  
- 즉, world 기준 장면을 카메라 기준으로 재배열

### Selecting its “lens”  
- 투영 방식을 정의함 (예: perspective, orthographic 등)  
- view space → **Clip space / NDC (normalized device coordinate) space**

### Projection transformation  
- 시야각(FOV), 종횡비, near/far plane 등을 고려하여  
  3D 공간을 **정규화된 장치 좌표계(NDC)** 로 변환  
- 좌표 범위: $(-1,~-1,~-1)$ ~ $(1,~1,~1)$  

### Displaying on a “cinema screen”  
- NDC 공간을 이미지 공간으로 변환  
- 즉, 픽셀 좌표계 상에 화면 출력

### Viewport transformation  
- NDC 좌표를 실제 화면 해상도에 맞게 스케일 조정  
- 좌표계를 정규화 공간 → 스크린 공간으로 변환

### Transformation Pipeline 전체 요약  
Object space → View space → Clip space → Screen space

1. **Modeling transformation**  
2. **Viewing transformation**  
3. **Projection transformation**  
4. **Viewport transformation**

→ 모든 과정은 **행렬곱(Matrix Multiplication)** 으로 구성됨

- Modeling, Viewing, Projection, Viewport 변환은  
  **4x4 행렬 곱셈**으로 처리됨 

**MVP Matrix 적용**  
- 하나의 점 $\mathbf{p}_o$가  
  - 모델링 변환: $\mathbf{M}$  
  - 뷰잉 변환: $\mathbf{V}$  
  - 투영 변환: $\mathbf{P}$  
  - 뷰포트 변환: $\mathbf{T}\_{\mathbf{vp}}$  
  을 거쳐서  
  - 최종 위치 $\mathbf{p}_s$로 변환됨

$$
\mathbf{p}_s = \mathbf{T}_{vp} \cdot \mathbf{PVM} \cdot \mathbf{p}_o
$$

## Modeling Transformation

- object space에서 world space로의 변환  
  $$
  \mathbf{p}_w = \mathbf{M} \mathbf{p}_o
  $$
- 이때 $\mathbf{M}$은 affine transformation들의 조합  
- 예: 이동, 회전, 스케일 등

## Recall: Directions of the "arrow"

- $$
  \mathbf{p}_w = \mathbf{M} \mathbf{p}^{\{1\}}
  $$
- 1번째 의미: geometry 변환 방향  
- 3번째 의미: frame이 바뀌는 관점에서 → 방향 반대가 되는 것처럼 보일 수 있음

## Modeling Transformation

- 객체는 **object의 고유 좌표계 (body frame)** 에 정의됨
- object → world 변환을 **modeling transformation**이라 하며  
  행렬 $\mathbf{M}$으로 표현됨
- 이 행렬 $\mathbf{M}$은 지금까지 배운 affine 변환 (이동, 회전, 스케일 등)의 조합

**예시: 다중 부품의 modeling**

- 바퀴, 캐빈, 컨테이너 각각의 object frame에서  
  - modeling matrix $\mathbf{M}\_{\text{wheel}},\ \mathbf{M}\_{\text{cab}},\ \mathbf{M}\_{\text{container}}$를 적용  
  - 최종적으로 world frame 상의 전체 트럭 위치가 구성됨

## Quiz 1

## Viewing Transformation

- Viewing transformation은 **world space**에서 **camera space**(view space)로 변환하는 연산이다.
- 변환된 결과는 결국 화면상의 2D 이미지(screen space)에 나타난다.
- 이 과정은 다음과 같은 수식을 따른다:  
  $$
  \mathbf{p}\_\mathbf{v} = \mathbf{V} \mathbf{p}\_\mathbf{w}
  $$

## Recall that...

- 1. 객체 배치  
   → Modeling transformation
- 2. "카메라" 배치  
   → Viewing transformation
- 3. "렌즈" 선택  
   → Projection transformation
- 4. "스크린"에 표시  
   → Viewport transformation

## Viewing Transformation

- Viewing transformation은 **rigid transformation**으로서, **회전과 이동**을 포함한다.
- world space에서 view space로 변환하는 데 사용되며, 변환 행렬은 **viewing matrix V**이다.
- 목적: **camera frame** 상에서 모든 객체의 vertex들을 표현하는 것
- 이를 위해 **camera frame**을 정의해야 함 (world frame 기준)
- camera frame을 정의한다는 것은 곧 **카메라의 위치와 방향**을 결정하는 것과 같다.

## Defining Camera Frame 1 - "LookAt"

- 카메라의 위치와 방향을 정의하는 여러 방식이 있다.
- 그 중 직관적인 방식으로 **lookat 함수**를 소개:
  - **Eye point**: 카메라 위치
  - **Look-at point**: 카메라가 바라보는 지점
  - **Up vector**: 어느 방향이 위를 나타내는지 설명

## [Demo] LookAt Function

- [learnwebgl.brown37.net/07_cameras/camera_lookat/camera_lookat.html](http://learnwebgl.brown37.net/07_cameras/camera_lookat/camera_lookat.html)
- 슬라이더를 움직이며 eye, center, up 값을 바꿔보면, 3D 장면의 뷰가 어떻게 변하는지 관찰할 수 있다.

## Defining Camera Frame 1 - "LookAt"

- eye point, look-at point, up vector가 주어지면, **camera frame**을 계산할 수 있다.
- 카메라 좌표축으로는 일반적으로 **$\mathbf{u},\ \mathbf{v},\ \mathbf{w}$** 벡터를 사용하며, 이는 각각 다음을 나타냄:
  - **$\mathbf{u}$**: 오른쪽 방향
  - **$\mathbf{v}$**: 위쪽 방향
  - **$\mathbf{w}$**: 뒤쪽 방향
- camera frame을 정의하려면 **$\mathbf{u},\ \mathbf{v},\ \mathbf{w}$ 벡터**와 **원점**을 구해야 함

## Given Eye point, Look-at point, Up vector

- Eye point, Look-at point, Up vector를 이용하여 카메라 좌표계를 정의한다.

## Getting origin point

- Eye point 자체가 **카메라 좌표계의 원점**이 된다.

  $$
  \text{origin of camera frame} = \mathbf{P}\_{\text{eye}}
  $$

## Getting "w" axis vector

- Look-at point를 바라보는 방향을 $\mathbf{w}$축으로 정의한다.

  $$
  \mathbf{w} = \frac{\mathbf{P}\_{\text{eye}} - \mathbf{P}\_{\text{ref}}}{|| \mathbf{P}\_{\text{eye}} - \mathbf{P}\_{\text{ref}} ||}
  $$

## Getting "u" axis vector

- up 방향 벡터와 $\mathbf{w}$ 벡터의 외적을 통해 $\mathbf{u}$ 축을 계산한다.

  $$
  \mathbf{u} = \frac{\mathbf{V}\_{\text{up}} \times \mathbf{w}}{|| \mathbf{V}\_{\text{up}} \times \mathbf{w} ||}
  $$

## Getting "v" axis vector

- 직교좌표계를 만들기 위해 다음과 같이 정의한다.

  $$
  \mathbf{v} = \mathbf{w} \times \mathbf{u}
  $$


## Recall: 2) Affine Transformation Matrix defines an Affine Frame w.r.t. World Frame

- Affine 변환 행렬 M은 좌표계(프레임)를 변환하는데 사용된다.
- 프레임 $\\{1\\}$은 프레임 $\\{0\\}$ 기준으로 정의된다.
- 좌표계 축 $(x,~y,~z)$과 원점 좌표가 행렬의 열(column)로 구성된다:

$$
\text{Frame } \{1\} \text{ in } \{0\} =
\begin{bmatrix}
\mathbf{x}_1 & \mathbf{y}_1 & \mathbf{z}_1 & \mathbf{p}_1
\end{bmatrix}
$$

또는 4×4 homogeneous form으로 표현하면:

$$
\begin{bmatrix}
x_{1x} & y_{1x} & z_{1x} & p_{1x} \\
x_{1y} & y_{1y} & z_{1y} & p_{1y} \\
x_{1z} & y_{1z} & z_{1z} & p_{1z} \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

## Thus, the Camera Frame is defined by

$$
\mathbf{v} = \mathbf{w} \times \mathbf{u}
$$

$$
\begin{bmatrix}
u_x & v_x & w_x & P_{\text{eye},x} \\
u_y & v_y & w_y & P_{\text{eye},y} \\
u_z & v_z & w_z & P_{\text{eye},z} \\
0   & 0   & 0   & 1
\end{bmatrix}
$$


## How can we get viewing matrix $\mathbf{V}$ from the camera frame?

- 모델링 변환의 방식과 유사하게 viewing matrix $\mathbf{V}$를 구할 수 있다.
- 기본적으로, 객체의 body frame에서의 좌표를 world frame으로 변환하는 affine matrix의 **역행렬**이 바로 viewing matrix가 된다.
- 객체 공간(Object space)을 카메라 공간(Camera space)으로 바꾸면, 어떤 변환 행렬이 필요할까?
- 뷰 공간(View space) → 월드 공간(World space) 방향으로 변환한다면?
- 카메라 프레임에서의 축 벡터 $\mathbf{u},\ \mathbf{v},\ \mathbf{w}$와 원점 $\mathbf{P}\_{\text{eye}}$를 사용해 변환 행렬을 구성할 수 있다.
- 이 행렬이 바로 **Rigid transformation matrix**이다.

  $$
  \begin{bmatrix}
  u_x & v_x & w_x & P\_{\text{eye},x} \\
  u_y & v_y & w_y & P\_{\text{eye},y} \\
  u_z & v_z & w_z & P\_{\text{eye},z} \\
  0   & 0   & 0   & 1
  \end{bmatrix}
  $$

## Viewing Transformation is the Opposite Direction

- Viewing matrix $\mathbf{V}$는 위의 행렬의 **역행렬**로 정의된다.
- 즉, **반대 방향**으로의 변환이다.

  $$
  \mathbf{V} =
  \begin{bmatrix}
  \mathbf{R} & \mathbf{t} \\
  \mathbf{0} & 1
  \end{bmatrix}^{-1} =
  \begin{bmatrix}
  \mathbf{R}^\top & -\mathbf{R}^\top \mathbf{t} \\
  \mathbf{0} & 1
  \end{bmatrix}
  $$


## Inverting Rigid Transformation Matrix

- 3×3 회전 행렬 $\mathbf{R}$과 3×1 이동 벡터 $\mathbf{t}$를 포함한 rigid 변환 행렬 $\mathbf{T}$의 역행렬은 다음과 같다:

  $$
  \mathbf{T} =
  \begin{bmatrix}
  \mathbf{R} & \mathbf{t} \\
  \mathbf{0} & 1
  \end{bmatrix}
  \quad \Rightarrow \quad
  \mathbf{T}^{-1} =
  \begin{bmatrix}
  \mathbf{R}^\top & -\mathbf{R}^\top \mathbf{t} \\
  \mathbf{0} & 1
  \end{bmatrix}
  $$

- 카메라 프레임 행렬의 경우, $\mathbf{R}$은 $\mathbf{u},\ \mathbf{v},\ \mathbf{w}$ 방향 벡터로 이루어진다.

## Viewing Transformation is the Opposite Direction

- $\mathbf{V}$는 다음과 같이 명시적으로 구성된다:

  $$
  \mathbf{V} = \begin{bmatrix}
  u_x & v_x & w_x & -\mathbf{u} \cdot \mathbf{P}\_{\text{eye}} \\
  u_y & v_y & w_y & -\mathbf{v} \cdot \mathbf{P}\_{\text{eye}} \\
  u_z & v_z & w_z & -\mathbf{w} \cdot \mathbf{P}\_{\text{eye}} \\
  0   & 0   & 0   & 1
  \end{bmatrix}
  $$


## Defining Camera Frame 2 - Translate & Rotate

- `LookAt` 함수 외에도, 카메라의 위치와 방향을 정의할 수 있는 방법이 있다.
- 단순히 **translate**하고 **rotate**하면 rigid transformation 행렬로 정의 가능하다.

## [Demo] Translate & Rotate Camera

- [learnwebgl.brown37.net/07_cameras/camera_trunk_axes/camera_trunk_axes.html](http://learnwebgl.brown37.net/07_cameras/camera_trunk_axes/camera_trunk_axes.html)
- 슬라이더로 eye 위치를 바꾸거나 축 방향 및 각도를 지정해 회전하는 카메라 움직임을 시각적으로 관찰할 수 있다.

## Moving Camera vs Moving World

- 사실, 이 둘은 **동등한 연산**이다.
- 카메라를 $(1,~0,~2)$만큼 이동시키는 것은  
  == 월드를 $(-1,~0,~-2)$만큼 이동시키는 것과 같다.
- 카메라를 $y$축 기준으로 **$60\degree$ 회전**시키는 것은  
  == 월드를 $y$축 기준으로 **$-60\degree$ 회전**시키는 것과 같다.

## [Demo] Moving Camera vs. Moving World

- [Moving camera](https://webglfundamentals.org/webgl/lessons/resources/camera-move-camera.html?mode=0)
- [Moving world](https://webglfundamentals.org/webgl/lessons/resources/camera-move-camera.html?mode=2)