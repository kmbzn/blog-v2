# 10 - Character Animation

## Outline

- Computer-Generated Character Animation  
- Skeletal Animation  
- Forward Kinematics  
- Creating Character Animation  
- BVH File Format

## Computer-Generated Animation

- "렌더링"을 통해 3D 객체를 이미지로 생성  
  - 3D 객체 또는 캐릭터를 모델링하고 "움직임(motion)"을 부여함

- 현재도 손그림 기반 2D 애니메이션은 여전히 많이 사용되지만,  
  대부분의 최신 애니메이션은 이 3D 방식으로 제작됨

> *Encanto, 2021*

## Computer-Generated Character Animation

- 캐릭터 애니메이션에서

- **Skeletal animation**이 가장 널리 사용됨. 구성 요소:
  - **Skeleton**: 본 또는 조인트 계층 구조 및 관련 데이터
  - **Motion**: 관절 움직임 데이터
  - **Skin (또는 mesh)**: 캐릭터 렌더링을 위한 표면 표현

## Visualizing Character in Skeletal Animation

- **Skin**은 변형 가능한 메시(deformable mesh)일 수 있음

- **Skinning**: 스켈레톤을 skin mesh에 "임베딩(embedding)"하는 과정  
  (자세한 내용은 생략)

> *A human thigh with simple skin weights painted on it*  
> 출처: [gameanim.com/gdc/gdc-2011-practices.pdf](https://gameanimation.s3.amazonaws.com/game-skinning-and-deforming)

- 캐릭터는 **개별 강체(rigid mesh)** 를 이용해 더 단순하게 시각화할 수도 있음

- 오늘 강의의 초점은 **skeletal animation에서의 계층적 구조(hierarchical structure)** 와  
  **움직임(motion)** 이며, 시각화는 다루지 않음

- 참고 영상:  
  - [https://youtu.be/PBydW8L6B9Y](https://youtu.be/PBydW8L6B9Y)  
  - [https://youtu.be/hpqec_twooo](https://youtu.be/hpqec_twooo)

## Skeletal Animation

- Skeletal animation은 두 가지 구성 요소로 이루어짐:

  - **"Skeleton"**: 정적인 데이터  
  - **"Motion"**: 시간에 따라 변하는 데이터

[https://youtu.be/PBydW8L6B9Y](https://youtu.be/PBydW8L6B9Y)

## "Skeleton" Part

- **"Skeleton"**: 정적 데이터
  - **joint 계층 구조**
  - **부모 joint로부터의 오프셋(offset)**
    - 일반적으로 translation
    - 기준: 부모 좌표계(parent frame)

```
Hips
 ├── Spine
 │    ├── Head
 │    ├── RightArm ─ RightForeArm ─ RightHand
 │    └── LeftArm ─ LeftForeArm ─ LeftHand
 ├── RightUpLeg ─ RightLeg ─ RightFoot
 └── LeftUpLeg ─ LeftLeg ─ LeftFoot
```

## Recall: Hierarchical Model - Human Figure

- 각 body part의 움직임은 **자기 부모의 좌표계** 기준으로 정의됨  
  → 즉, 각 부위는 자체적인 transformation을 가짐

- 이 변환은 두 가지로 구성됨:
  - **정적 변환**: joint offset
  - **시간 변환**: motion

[https://youtu.be/Ol7rMbK5C5g](https://youtu.be/Ol7rMbK5C5g)  
[https://youtu.be/0SR86WUngbU](https://youtu.be/0SR86WUngbU)

## "Motion" Part

- **"Motion"**: 시간에 따라 변하는 데이터

  - **내부 joint의 움직임**
    - 보통 회전(rotation)
    - 기준: 각 joint의 기본 프레임 (즉, joint offset이 적용된 이후의 부모 프레임)

  - **skeletal root의 이동 (translation 및 회전 포함)**
    - 일반적으로 pelvis joint
    - 기준: world frame

[https://youtu.be/PBydW8L6B9Y](https://youtu.be/PBydW8L6B9Y)

## Terminologies

- **Posture (pose)**: 특정 프레임에서의 "motion" 상태  
- **Rest pose**: 모든 joint의 움직임이 "0"인 상태  
- **Joint**: 두 객체 사이를 연결하고 회전을 허용하는 연결점  
- **Link**: joint 사이의 강체  
- **End effector**: 운동 사슬 끝의 자유 단말 지점

## Kinematics

- **Kinematics**: 질량이나 힘을 고려하지 않고 **운동만을 다루는 학문**  
  - (참고) **Dynamics**는 운동의 원인(힘, 질량 등)을 포함

- 컴퓨터 그래픽스에서의 Kinematics는 skeletal animation과 밀접  
  - **Forward kinematics**: joint angle을 주면 end-effector의 위치와 방향 계산  
  - **Inverse kinematics**: end-effector의 위치/방향을 주면 joint angle 계산

- Forward kinematics 이해는 skeletal animation 이해에 도움이 됨

## Forward Kinematics (FK)

- **Forward kinematics**는 **지역 좌표계 → 전역 좌표계**로의 변환 $T$을 계산  
  - $T$는 joint angle로부터 계산됨

- **Forward kinematics (계산)**:  
  주어진 joint angle로부터 **end-effector의 위치와 방향**을 계산  
  → 이때 사용하는 것이 바로 이 $T$

- 실제로는 **end-effector뿐 아니라**,  
  어떤 link에 "붙어 있는" 임의의 지점에도 적용 가능함

## [Demo] Forward / Inverse Kinematics

[http://robot.glumbot.de/](http://robot.glumbot.de/)

- Forward kinematics: "angles" 메뉴에서 각도 조절  
- Inverse kinematics: 마우스로 end-effector 위치 드래그로 제어

## Forward Kinematics Map

- **Forward kinematics map $T$** 는 다음의 곱으로 이루어짐:

  - **Joint transformation** (시간에 따라 변함):  
    - Joint의 "motion" (회전 등)

  - **Link transformation** (정적):  
    - Skeleton 상의 joint offset

- 예시:
$$
T = J_0 L_0 J_1 L_1 J_2 L_2 J_3
$$
  
  - $J$: joint rotation  
  - $L$: joint offset (translation)

- 그림 기준:
  - $T$는 0번 joint(root)의 위치 및 방향 (world 기준)을 의미

- $T = I$  
  - 현재 위치는 정적 상태 (모든 joint가 0도)

- $T = J_0$  
  - $J_0$만 회전 (그 외는 0도)

- $T = J_0 L_1$  
  - $J_0$ 이후 첫 link ($L_1$)까지 고려

- $T = J_0 L_1 J_1$  
  - $J_0$ 회전 → $L_1$ offset → $J_1$ 회전까지 누적된 결과

> 모든 예시에서, 지정된 joint를 제외한 나머지 joint는 모두 0도

- $T = J_0 L_1 J_1 L_2$  
  - $J_0$ → $L_1$ → $J_1$ → $L_2$까지 누적된 변환  
  - (이 그림에서는 $J_0$, $J_1$만 비회전 상태 아님)

- $T = J_0 L_1 J_1 L_2 J_2$  
  - $J_2$까지 회전 포함

- $T = J_0 L_1 J_1 L_2 J_2 L_3$  
  - $L_3$까지 포함한 변환

- $T = J_0 L_1 J_1 L_2 J_2 L_3 J_3$  
  - $J_3$까지 포함된 최종 누적 변환

- 포인트 변환 예시 (3번 link 기준 원점에서의 위치 계산):

$$
\mathbf{p}_o^{\{g\}} = J_0 L_1 J_1 L_2 J_2 L_3 J_3 \mathbf{p}_o^{\{3\}}  
= J_0 L_1 J_1 L_2 J_2 L_3 J_3 (0, 0, 0)
$$

- 포인트 변환 예시 (3번 link 상의 점 $\mathbf{p}_a$):

$$
\mathbf{p}_a^{\{g\}} = J_0 L_1 J_1 L_2 J_2 L_3 J_3 \mathbf{p}_a^{\{3\}}
$$

- 이처럼 forward kinematics는  
  계층적 joint와 link 변환을 모두 누적해  
  원하는 link 또는 point의 위치를 world 기준으로 변환함

## Recall: Rendering Hierarchical Models

- 각 노드는 자신의 부모 노드 기준으로 정의된 **고유의 변환(local transformation)** 을 가짐

- 예시:
  - Hip의 위치/방향 (world 기준): $J_0$
  - LeftUpLeg의 위치/방향 (hip 기준): $L_1$
  - 이후의 변환: $M_1$, $M_2$, ...

```
Hips
 ├── Spine
 │    ├── Head
 │    ├── RightArm ─ RightForeArm ─ RightHand
 │    └── LeftArm ─ LeftForeArm ─ LeftHand
 ├── RightUpLeg ─ RightLeg ─ RightFoot
 └── LeftUpLeg ─ LeftLeg ─ LeftFoot
```

## Forward Kinematics Map

- Skeletal animation은 아래로 정의됨:

  - **Joint hierarchy**
  - **Link transformation $L_i$**
    → "Skeleton"

  - **Joint transformation $J_i$**
    → "Motion"

# Creating Character Animation

## Methods for Creating Character Animation

- "skeleton"과 "motion"을 어떻게 만들고 설정할 것인가?

- 대표적인 방식들:
  - Keyframe Animation
  - Motion Capture
  - Data-Driven Animation
  - Physics-Based Animation

## Keyframe Animation

- 애니메이터가 주요 이벤트를 **keyframe**으로 지정  
- 컴퓨터 소프트웨어가 중간 프레임을 **보간(interpolation)** 하여 생성  
  - 과거에는 사람이 일일이 그리던 작업 (2D 애니메이션에서 inbetweening)  
  - → 컴퓨팅이 이를 자동화하여 반복 작업을 줄임

- 일반적으로 **"skeleton"은 수동 제작**  
- **"Motion"은 keyframe 설정** 및 다양한 파라미터 제어로 구성

> 출처 이미지:  
> [https://book.co...](https://book.co... MATLAB 2021 기준)

- 손그림 애니메이션 전통에 뿌리를 둔 **전통적인 방식**

- 현실적이거나 물리적으로 타당한 움직임을 구현하기 어려움  
  - 결과의 품질은 **아티스트의 역량**에 크게 의존

- 현재도 많이 사용되는 기법

## Motion Capture

- 아이디어: **실제 인간의 움직임을 기반으로 현실적인 애니메이션 생성**

- Motion capture 시스템은 다음을 측정하여 사람 또는 물체의 움직임을 "캡처":
  - 피부 위의 마커 위치
  - 각 신체 부위(또는 joint)의 위치 및 방향

- **"Motion"과 "skeleton"은 후처리를 통해 추출됨**

> [https://youtu.be/YcS73UCkO20](https://youtu.be/YcS73UCkO20)
- 실시간 캡처 현장 사진

## Bvh Motion Capture Data Example

```
HIERARCHY
  "Skeleton" {
    ROOT Hips
    {
      OFFSET 0.0 0.0 0.0
      CHANNELS 6 Xposition Yposition Zposition Xrotation Yrotation Zrotation
      JOINT Spine {
        OFFSET 0.0 10.0 0.0
        CHANNELS 3 Xrotation Yrotation Zrotation
        ...
      }
      ...
    }
  }

MOTION {
  Frames: 612
  Frame Time: 0.016667
  0.0000 0.0000 0.0000 -1.4195 -1.4889 0.4398 ...
  0.0177 0.0001 -0.0001 -1.4205 -1.4860 0.4411 ...
  ...
}
```

- 위 구조는 BVH (Biovision Hierarchy) 형식  
  - `HIERARCHY`는 skeleton을  
  - `MOTION`은 시간에 따른 joint 움직임을 기술

## Motion Capture

- 현재는 영화 및 게임 산업 (주로 대형 스튜디오)에서 널리 사용됨

- 단점:
  - 매우 비쌈 (고가 장비, 높은 운용 비용)
  - 현실적인 동작을 생성하긴 하지만,  
    **촬영 환경과 동일한 가상 환경에서만** 효과적임

## Data-Driven Animation

- 아이디어:  
  캡처된 motion 데이터를 편집하거나 재구성하거나 학습하여  
  재사용을 극대화하고 유연성을 높임

- 구성:
  - **"Skeleton"**: motion 데이터셋에서 사용  
  - **"Motion"**: motion 데이터 기반으로 편집/재구성/합성됨

- 주요 기술:
  - **Motion editing**: time warping, motion blending 등  
  - **Data-driven**: motion graph, motion matching 등  
  - **딥러닝 기반 motion synthesis**

> Motion Warping 예시: [https://youtu.be/H9dQ42m6rfg](https://youtu.be/H9dQ42m6rfg)  
> Deep Learning 기반 synthesis (PFNN 2017): [https://youtu.be/k0KfGiwgGkw](https://youtu.be/k0KfGiwgGkw)

## Physics-Based Animation (Simulation-Based)

- 아이디어:  
  **물리 시뮬레이션을 기반으로 motion을 생성**

- 특징:
  - 물리적으로 항상 타당한 동작만 생성됨  
  - 종종 `.urdf` 등의 모델 파일에서 skeleton을 불러옴  
  - **Motion은 물리 시뮬레이션으로 계산됨**

- 조건:
  - **"Controller"** 필요
    - 매 프레임마다 joint torque를 조절해 목표 동작 수행 + 균형 유지

- 최근에는 **강화학습(DRL)** 로 controller를 학습하는 방식이 널리 사용됨

> DeepMimic (Peng et al. 2018): [https://youtu.be/pXp5v2gcz90](https://youtu.be/pXp5v2gcz90)  
> PhysicsFC (Kim et al. 2025): [https://youtu.be/sdWRBWESC4A](https://youtu.be/sdWRBWESC4A)

## BVH File Format

- **BVH (BioVision Hierarchical data)**  
  - Biovision이라는 motion capture 회사가 개발  
  - **text 기반 포맷** (사람이 읽을 수 있음)

- 구성 요소:
  1. **Hierarchy section**: "Skeleton"의 정적 데이터
  2. **Motion section**: "Motion"의 시간 변화 데이터

## Biovision BVH - Hierarchy Section

- `"HIERARCHY"`로 시작  
- `"ROOT"`: 최상위 joint의 이름  
  - `"OFFSET"`: parent joint로부터의 변위  
    → 이는 link transformation $L$에 해당  
  - `"CHANNELS"`: 이 joint에서의 transformation 종류  
    - root의 경우 6개 (Tx Ty Tz Rx Ry Rz)  
    - 나머지는 보통 3개 (Rx Ry Rz)

- `"JOINT"`: 하위 관절 (구조는 ROOT와 유사함)  
- `"End Site"`: 더 이상 자식 joint가 없는 경우  
  - `"OFFSET"`만 가짐 (움직임 없음)

## 예시 (구조만 발췌)

```
HIERARCHY
ROOT Hips
{
  OFFSET 0.0 0.0 0.0
  CHANNELS 6 Xposition Yposition Zposition Xrotation Yrotation Zrotation
  JOINT chest
  {
    OFFSET ...
    CHANNELS 3 Xrotation Yrotation Zrotation
    JOINT neck
    {
      OFFSET ...
      CHANNELS 3 Xrotation Yrotation Zrotation
      JOINT head
      {
        OFFSET ...
        CHANNELS 3 Xrotation Yrotation Zrotation
        JOINT LeftEye
        ...
      }
    }
  }
}
```

- `J0`: Hips  
- `L1`: chest까지의 offset  
- `J1`: chest  
- `L2`: neck까지의 offset  
- `J2`: neck  
- `L3`: head까지의 offset  
- `J3`: head

## Biovision BVH - Motion Section

- `"MOTION"`으로 시작  
- `"Frames:"`: 프레임 수 (예: 179)  
- `"Frame Time:"`: 한 프레임당 시간 (예: 0.016667초)

- 그 다음 줄부터는 프레임별 motion 값이 나열됨  
  - 각 줄은 1 프레임에 해당  
  - 각 값은 hierarchy에 지정된 channel 순서대로 정렬됨  
  - 각 열은 1개의 channel에 해당  
  - 회전 값은 **도(degree)** 단위

## 예시 (Motion Section)

```
MOTION
Frames: 179
Frame Time: 0.016667
1.5796 0.099733323 0.091933 -4.117298987 ...
1.5796 0.098974237 0.092352 -4.100061894 ...
...
```

- 각 줄은 1 프레임  
- 각 열은 Hips → chest → neck → head 순으로  
  channel 개수만큼 나열됨 (6, 3, 3, 3 = 총 15개 열)  
  - 예:  
    - Column 1~6: Hips의 Tx Ty Tz Rx Ry Rz  
    - Column 7~9: chest의 Rx Ry Rz  
    - Column 10~12: neck의 Rx Ry Rz  
    - Column 13~15: head의 Rx Ry Rz

## Biovision BVH

■ **데이터 해석 방법**

- 특정 segment의 위치를 계산하려면:

  - **Translation 정보**
    - 일반 joint segment:
      - translation 정보는 hierarchy section의 **OFFSET** 값
    - root 객체:
      - **OFFSET + motion section의 translation 값의 합**이 실제 translation

  - **Rotation 정보**
    - motion section에서 제공됨

- **"CHANNELS" 순서가 매우 중요**:
  - 예: `"Zrotation Xrotation Yrotation"` 순서일 경우,
    - **Z축 회전 → X축 회전 → Y축 회전** 순서로 변환 적용
    - 이는 ZXY Euler 각도 체계에 해당

- **ZXY Euler 각도만 사용한다고 가정하면 안 됨!**
  - 실제 BVH 파일에 따라 순서가 다를 수 있음

## [Demo] BVH Viewer

![demo image]

[http://motion.hahasoha.net/](http://motion.hahasoha.net/)

- 목록에서 다른 motion 선택 가능
- 해당 BVH 파일을 다운로드하여 텍스트 에디터에서 열어볼 수 있음

## 10 - Lab - Character Animation

## 개요
- 예제: Joint & Link 변환
- CGR 연구실의 최신 연구 간략한 소개

## 예제: Joint & Link 변환

### 상기: 순방향 운동학 맵 (Forward Kinematics Map)
순방향 운동학 맵 T는 다음과 같은 변환들의 교차 곱으로 표현됩니다.
- 관절(Joint) 변환 (시간에 따라 변함)
    - 관절 움직임 (모션, *motion*)
- 링크(Link) 변환 (정적)
    - 관절 오프셋 (스켈레톤, *skeleton*)

$T = \dots T_i L_i R_i \dots T_1 L_1 R_1$

(여기서 $T_i$는 i번째 관절로의 이동(translation), $R_i$는 i번째 관절에서의 회전(rotation)을 의미합니다.)

### [코드] 1-joint-link-transform
`7-Lab-Hierarchical-Mesh/1-hierarchical.py` 코드를 수정하여, 동일한 기능은 유지하되 지역(local) 변환 대신 관절(joint) & 링크(link) 변환을 사용하도록 만들어 봅시다.

```python
# 기존 hierarchical.py의 Node 클래스 (일부)
class Node:
    def __init__(self, name, vao, color, local_transform):
        # ...
        self.local_transform = local_transform
        self.global_transform = glm.mat4()
        # ...
    
    def update_tree_global_transform(self, parent_global_transform):
        self.global_transform = parent_global_transform * self.local_transform
        for child in self.children:
            child.update_tree_global_transform(self.global_transform)
            
# 수정된 1-joint-link-transform.py의 Node 클래스 (일부)
class Node:
    def __init__(self, name, vao, color, link_transform):
        self.name = name
        self.vao = vao
        self.color = color
        self.link_transform = link_transform
        self.joint_transform = glm.mat4()
        # self.local_transform = glm.mat4() # 더 이상 사용하지 않음
        self.global_transform = glm.mat4()
        # self.children = [] # 더 이상 사용하지 않음

    def set_joint_transform(self, joint_transform):
        self.joint_transform = joint_transform

    def update_tree_global_transform(self, parent_global_transform):
        link_transform_from_parent = self.link_transform
        joint_transform = self.joint_transform
        self.global_transform = parent_global_transform * link_transform_from_parent * joint_transform

# 메인 루프에서의 변환 설정
def main():
    # ... 초기화 코드 ...

    while not glfw.window_should_close(window):
        # ...
        
        # 기존 hierarchical.py 방식
        # th = glfw.get_time()
        # box.set_local_transform(glm.rotate(th, (0,0,1)))
        # blue.set_local_transform(glm.translate((0,.5,0)) * glm.rotate(th, (0,0,1)))
        # red.set_local_transform(glm.translate((0,.5,0)) * glm.rotate(th, (0,0,1)))
        
        # 수정된 1-joint-link-transform.py 방식
        # joint 키프레임 변환
        t = glfw.get_time()
        th = np.sin(t*np.pi)*.5 + np.pi/2.
        joint_transform = glm.rotate(th, (0,0,1))

        # 각 노드의 joint 변환 설정
        box.set_joint_transform(glm.mat4())
        blue.set_joint_transform(joint_transform)
        red.set_joint_transform(joint_transform)
        
        # ... 렌더링 코드 ...
```

## CGR 연구실의 최신 연구 간략한 소개

### CGR 연구실 소개
컴퓨터 그래픽스 & 로보틱스 연구실 (Computer Graphics & Robotics Lab.)

저희 연구 그룹은 다음과 같은 목표를 가집니다.
- 인간, 동물, 로봇 등 자연적이거나 인공적인 생명체의 다양한 측면(움직임, 근본적인 메커니즘 등)을 이해하고
- 가상 환경에서 실제 세계로 그것들을 구현합니다.

### 주요 연구 방향
'어떻게 움직일 것인가?'
- 관절이 있는 캐릭터
- 로봇

'움직이는 법을 배우기 (Learning How to Move)'

## PhysicsFC: 물리 기반 축구 선수 컨트롤러를 위한 사용자 제어 스킬 학습
(PhysicsFC: Learning User-Controlled Skills for a Physics-Based Football Player Controller)

학회: SIGGRAPH 2025, 밴쿠버, 8월 10-14일

인용: Minsu Kim, Eunho Jung, Yoonsang Lee. "PhysicsFC: Learning User-Controlled Skills for a Physics-Based Football Player Controller." ACM Transactions on Graphics (SIGGRAPH 2025) 게재 승인.

## 타겟 위치 도달 과업을 위한 딥 강화학습 기반 모션 매칭 활용
(Utilizing Motion Matching with Deep Reinforcement Learning for Target Location Tasks)

움직이는 장애물이 있는 타겟 위치 도달 과업을 위해, 우리는 '히트 보상(hit reward)'과 '장애물 커리큘럼(obstacle curriculum)'이라는 두 가지 새로운 구성 요소를 제안합니다.
(이 과업에서, 정책은 보조 센서 입력을 받습니다.)

인용: Jeongun Lee, Taesoo Kwon, Hyunjin Shin, Yoonsang Lee. “Utilizing Motion Matching with Deep Reinforcement Learning for Target Location Tasks.” Eurographics 2024 Short Papers, 2024년 4월.

## 다양한 환경에서의 단일 강체 캐릭터의 적응형 추적
(Adaptive Tracking of a Single-Rigid-Body Character in Various Environments)

움직이는 장애물이 있는 타겟 위치 도달 과업을 위해, 우리는 '히트 보상(hit reward)'과 '장애물 커리큘럼(obstacle curriculum)'이라는 두 가지 새로운 구성 요소를 제안합니다.
(이 과업에서, 정책은 보조 센서 입력을 받습니다.)

인용: Taesoo Kwon, Taehong Gu, Jaewon Ahn, Yoonsang Lee. "Adaptive Tracking of a Single-Rigid-Body Character in Various Environments." SA '23: SIGGRAPH Asia 2023 Conference Papers, 논문 번호: 118, 2023년 12월.

## 모션 매칭 (Motion Matching)

우리는 모션 매칭에 기반한 상호작용적 캐릭터 제어 방법을 제안합니다.

인용: Jeongun Lee, Taesoo Kwon, Yoonsang Lee. “Interactive Character Path-Following Using Long-Horizon Motion Matching With Revised Future Queries.” IEEE Access, 2023년 1월.
