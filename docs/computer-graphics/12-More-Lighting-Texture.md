# Computer Graphics  
12 - More Lighting, Texture

Yoonsang Lee  
Hanyang University  
Spring 2025

## Revised Class Schedule

- 이전에 공유된 강의 일정 및 기말 시험 범위에 오류가 있었습니다.
- 자세한 내용은 LMS 게시글 참조:  
  https://learning.hanyang.ac.kr/courses/178704/discussion_topics/418144
- 수정된 일정:  
  - Lecture 12: 6월 5일  
  - Lecture 13 (마지막 수업): 6월 12일 (Lab 없음)

## Final Exam Announcement

- 일시: 6월 18일 (수), 오후 6:30–7:30
- 장소: 추후 공지
- 범위: Lecture 8–12, Lab 8–12

- 시험 시작 후 30분 전에는 퇴실할 수 없습니다. (시험을 일찍 끝내더라도)
- 즉, 시험 시작 후 30분 이후에는 입장할 수 없습니다. (지각 절대 금지!)

- 학생증을 반드시 지참할 것

## Outline

- More Lighting
  - BRDF
  - Local & Global Illumination

- Texture Mapping
  - 개념
  - UV Mapping
  - Texture Mapping 과정
  - Texture 좌표 함수 정의
  - Texture가 적용된 객체 렌더링
  - Diffuse, Specular, Normal Map
  - Texture Map의 다양한 활용

## More Lighting

## Recall: Reflection of General Materials

- 많은 재질의 표면은 diffuse reflection과 specular reflection을 모두 가짐
- 표면의 반사 특성은 분포 함수(distribution function)로 표현 가능
- → BRDF

## Bidirectional Reflectance Distribution Function (BRDF)

- 불투명 표면에서 빛이 어떻게 반사되는지 정의
  - θᵢ, φᵢ: 입사 광 방향
  - θₒ, φₒ: 반사 광 방향
  - fᵣ: 출사 방향에 따른 반사 복사도 비율을 반환

- 수식 표현:  
  fᵣ(θᵢ, φᵢ; θₒ, φₒ) ≥ 0

## Examples of BRDF  
(theoretical approximation, not from measurement)

- 자동차 백미러의 강한 반사
- 분필 표면처럼 매우 diffuse한 재질
- 대리석 바닥과 같이 광택이 있는 표면
- 사과처럼 복합 반사를 가진 재질

## Phong Illumination Model & BRDF

- Phong 모델은 다음 두 가지를 가진 BRDF를 모델링함:
  - 반구(hemisphere): diffuse 성분 표현
  - lobe(로브): specular 성분을 cosⁿ(α) 형태로 표현

## Measuring BRDF

- 특정 재질의 BRDF는 다음과 같은 장비로 측정 가능:
  - 기본 개념: 회전하는 광원과 회전하는 센서 사용

(이미지 출처: Chuck Molled)

## Using Measured BRDF for Rendering

- 측정된 BRDF는 렌더링에 사용될 수 있음

| Measured BRDF | Nickel | Pink fabric | Gray plastic | Nylon |
|---------------|--------|-------------|--------------|-------|
| Rendered object | 렌더링된 오브젝트 |
| Real object example | 실제 물체 예시 |

(*BRDF 데이터 및 일부 이미지는 https://www.cs.cornell.edu/projects/relight/BRDF 의 자료 기반)

## Local vs. Global Illumination

- **Local (또는 direct, non-global) illumination**
  - 광원에서 **직접 오는 빛**만을 모델링
  - 빠르게 렌더링 가능하지만, 사실성이 떨어짐
  - 예: Phong illumination 모델

(그림: Direct illumination 예시)

## Local vs. Global Illumination

- **Global illumination**
  - 직접 조명 +
  - 다른 물체에서 반사된 간접 조명 (inter-object reflections) 포함
  - 훨씬 더 사실적
  - 예: Ray tracing, Path tracing, Radiosity

(그림: 직접 조명 + 간접 조명 = 전역 조명)

## Phong Illumination Model & Local, Global Illumination

- Phong 조명 모델은 기본적으로 **local illumination model**
- 간접 조명은 주변광(ambient component)으로만 **대략적으로 근사됨**

(그림: Phong direct vs. ambient 근사 비교)

## Quiz 1

## Texture Mapping

- **표면상의 위치에 따라** 표면 속성을 정의하는 기법
- 보통 2D texture 이미지(= texture map)를 3D 객체 표면에 적용

- 주요 목적: **표면 디테일 추가**
  - 고폴리곤 모델보다
  - 더 적은 폴리곤으로 높은 디테일 표현 가능
  - 렌더링 속도 대폭 향상
  - texture map의 복잡도는 처리 복잡도에 영향 없음

(그림: 고정밀 vs. 텍스처 적용 모델)

## UV Mapping

- Texture mapping은 보통 **UV mapping**을 통해 정의됨

- UV mapping: 2D 텍스처 좌표 (u, v)를 3D 모델의 각 정점에 매핑
  - 각 정점이 2D 이미지에서 어떤 위치에 대응되는지 설명

- UV mapping 함수는 **texture coordinate function**으로도 불림

(그림: UV 좌표 및 매핑 예시)

## Texture Mapping Process

1. 표면의 점을 UV 공간(UV map)에서의 점에 매핑 (UV mapping)
2. 해당 UV 좌표를 텍스처 상의 점으로 매핑
  - Step 2는 단순 스케일링이며 시스템이 자동 수행
- Step 1이 바로 우리가 정의해야 할 **texture coordinate function**

(그림: 지구 표면 UV로 펴기)

## Defining Texture Coordinate Function:  
1) Creating "UV map"

- 물체 표면을 "펼치기(Unwrap)"
  - Blender 등 3D 모델링 툴에서 자동 수행됨
- 필요 시, 아티스트가 수작업으로 UV 좌표를 추가 보정하기도 함

## "Unwrapping"

- 자동 "unwrapping" 알고리즘
  - 일부 최적화 알고리즘은 3D 객체를 펼칠 때 각 정점의 (u, v)를 부드럽고 왜곡이 적은 방식으로 선택
  - Blender, Maya 등 다양한 3D 모델링 툴은 각기 다른 unwrapping 알고리즘을 사용

(그림: 다양한 unwrap 예시)

## UV Map Examples

(그림: 나무 상자 및 버섯 모델의 UV 매핑 예시)

출처:  
https://learn.foundry.com/modo/content/help/pages/modeling/uv/uv_unwrapping.html  
https://blenderartists.org/t/uv-unwrapping-scaling-issue/1342000

## UV Map Examples

(그림: 캐릭터, 자동차 등 다양한 UV 매핑 예시)

출처:  
https://help.autodesk.com/view/MAYAUL/2023/ENU/?guid=GUID-1DC9DC36-299E-44B5-A785-3A3F91A8E82A  
https://sketchfab.com

## Defining Texture Coordinate Function:  
2) Projections to Parametric Surfaces

- 사각형, 구, 원기둥 등 **파라메트릭 표면(parametric surfaces)**과 유사한 객체는
- 해당 파라메트릭 표면에 정점을 투사하여 텍스처 좌표 함수를 정의할 수 있음

## Examples of coordinate functions  
Planar projection

(그림: 평면 투영에 의한 UV 분포)

## Examples of coordinate functions  
Spherical projection

(그림: 구면 투영에 의한 지구 텍스처 적용)

## Examples of coordinate functions  
Cylindrical projection

(그림: 실린더 형태로 투영된 텍스처)

## Quiz 2

## Rendering Texture-Mapped Objects

```
for each pixel:
(u, v) = texture coordinates at pixel
color = texture.get_color(u, v)
pixel.color = color
```

- 그러나 텍스처 좌표 함수는 각 정점(vertex)에 대해 정의됨
- 그렇다면 각 픽셀마다의 텍스처 좌표는 어떻게 계산할 수 있을까?

## Rendering Texture-Mapped Objects

- 텍스처 좌표는 다각형 내부에서 barycentric interpolation으로 계산됨

- 다각형 내부의 각 픽셀에 대해, 픽셀이 포함된 삼각형의 정점 좌표에 따라 (u, v)가 결정됨

$$
(u, v) = \alpha_1 (u_1, v_1) + \alpha_2 (u_2, v_2) + \alpha_3 (u_3, v_3)
$$

$$
\alpha_1 + \alpha_2 + \alpha_3 = 1
$$

## Diffuse, Specular, Normal Maps

- 텍스처 맵을 통해 정의할 수 있는 표면 속성은?
  - diffuse color, specular color
  - specular 지수, 투명도, 반사율 계수
  - surface normal
  - 그림자 또는 반사 정보
  - 기타

## Examples of Diffuse, Specular, Normal Map

(왼쪽부터)
- diffuse map
- specular map
- normal map

출처: https://www.models-resource.com

## Examples of Diffuse, Specular, Normal Map

(예시: Game of Thrones 캐릭터 텍스처)
- final 렌더링
- diffuse
- specular
- wireframe
- normal
- texture map

출처: revulo.romeromain.com

## Normal Mapping - Motivation

- circle, sphere 비교
- circle은 삼각형 개수가 적어 렌더링이 더 빠름
- normal vector가 적절하면 circle도 sphere처럼 보일 수 있음

- 인간 시각은 실제 형상이 아닌 밝기 패턴으로 형태를 인식
  - 즉, 밝고 어두운 영역의 패턴은 normal에 의해 결정됨

출처: https://commons.wikimedia.org

## Normal Mapping - Basic Idea

목표: 고폴리 모델처럼 보이는 저폴리 모델 만들기

1. 고폴리 모델의 normal을 텍스처 이미지에 somehow 인코딩
2. 그 텍스처 이미지를 저폴리 모델에 적용

(그림: normal 전파 예시)

## Normal Mapping - Example

- 좌: high-poly (814 triangles)
- 중: simplified (900 triangles)
- 우: 더 간단한 모델 (200 triangles)

출처: https://cs.brown.edu/courses

## Normal Mapping - Details

- 고폴리 모델의 normal vector를 각 픽셀의 RGB 값으로 인코딩
- tangent space normal map에서는 픽셀 RGB가 u, v, w 축에 해당하는 normal 성분을 나타냄

표기:
- R = Nᵤ, G = Nᵥ, B = Nʷ
- u: 텍스처 u축
- v: 텍스처 v축
- w: 표면의 실제 normal 방향

참고:
https://foundationsofgameenginedev.com

## Normal Mapping - Details

- R = Nᵤ, G = Nᵥ, B = Nʷ  
  - U: -1 to +1 → Red: 0 to 255  
  - V: -1 to +1 → Green: 0 to 255  
  - W: 0 to +1 → Blue: 128 to 255

- tangent space normal map이 푸르스름한 이유:
  - 대부분의 normal은 tangent space 기준 (128, 128, 255) 근처이기 때문

## Quiz 3

## Bump Mapping

- 목적은 normal mapping과 동일

- 핵심 아이디어:
  - normal vector를 인코딩하는 대신 상대적인 높이(relative heights)를 저장
    - 검정: 최소 높이 변화
    - 흰색: 최대 높이 변화

- normal은 높이맵으로부터 계산하여 적용

## Bump Mapping Example

(그림: 원본 오브젝트 + bump map = bump가 적용된 결과)

## Displacement Mapping

- height map의 높이 변화량을 참조하여 실제로 정점의 위치를 이동시킴
  - bump/normal mapping과 달리 실루엣 및 자기 그림자(self-shadowing)가 자연스럽게 표현됨

- 기본적으로 normal/bump처럼 정점 간의 세부 표현을 제공하지는 않음
  - 세부 표현을 높이려면 정점을 더 추가해야 하므로 연산량 증가

(그림: subdivision 정도에 따른 displacement 차이)

## [Demo] Normal / Bump / Displacement Mapping

- Normal mapping / Displacement mapping  
  - https://threejs.org/examples/#webgl_materials_displacementmap

- Bump mapping  
  - https://threejs.org/examples/#webgl_materials_bumpmap

## Light Map

- light map은 사전 계산된 조명 정보를 저장하는 데 사용됨

| 항목 | Texture Maps | Light Maps |
|------|--------------|------------|
| 데이터 | RGB | 밝기(Intensity) |
| 해상도 | 높음 | 낮음 |

(이미지: 텍스처만 적용된 장면 vs. 라이트맵이 적용된 장면 비교)

출처: Prof. Seungki Yoon (KAIST)

## Shadow Map

- light view에서의 depth map을 이용해 샘플 지점이 보이는지를 판단
  - 눈에는 보이지만 광원에 가려진 지점은 그림자로 표시됨

(그림: teapot을 기준으로 광원 방향에서 깊이 확인)

출처: Prof. Seungki Yoon (KAIST)

## Environment Map

- 복잡한 거울같은 효과를 갖는 객체 시뮬레이션
  - 객체 주변 환경을 텍스처로 캡처
  - 표면 normal을 이용해 텍스처 좌표 계산

(그림: 구면에 적용된 environment map)

출처: Prof. Seungki Yoon (KAIST)

## [Practice] Online Demos

- Light mapping  
  - https://threejs.org/examples/?q=light#webgl_lights_physical

- Shadow mapping  
  - https://threejs.org/examples/#webgl_shadowmap

- Environment mapping  
  - https://threejs.org/examples/#webgl_materials_cubemap_dynamic  
  - https://threejs.org/examples/?q=refrac#webgl_materials_cubemap_refraction