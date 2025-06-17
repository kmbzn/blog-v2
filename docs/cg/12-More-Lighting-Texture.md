# 12 - More Lighting, Texture

## Revised Class Schedule

- 이전에 공유된 강의 일정 및 기말 시험 범위에 오류가 있었습니다.
- 자세한 내용은 LMS 게시글 참조:  
  https://learning.hanyang.ac.kr/courses/178704/discussion_topics/418144
- 수정된 일정:  
  - Lecture 12: 6월 5일  
  - Lecture 13 (마지막 수업): 6월 12일 (Lab 없음)

## Final Exam Announcement

- 일시: 6월 18일 (수), 오후 6:30–7:30
- 장소: IT/BT Room 911
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

# More Lighting

## Recall: Reflection of General Materials

- 많은 재질의 표면은 diffuse reflection과 specular reflection을 모두 가짐
- 표면의 반사 특성은 분포 함수(distribution function)로 표현 가능
- → BRDF

## Bidirectional Reflectance Distribution Function (BRDF)

- 불투명 표면에서 빛이 어떻게 반사되는지 정의
  - $\theta_i, \phi_i$: 입사광 방향
  - $\theta_o, \phi_o$: 반사광 방향
  - $f_r$: 출사 방향에 따른 반사 복사도 비율을 반환

- 수식 표현:
$$f_r(\theta_i, \phi_i; \theta_o, \phi_o) \ge 0$$

## Examples of BRDF  
*(theoretical approximation, not from measurement)*

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

## Using Measured BRDF for Rendering

- 측정된 BRDF는 렌더링에 사용될 수 있음

| Measured BRDF | Nickel | Pink fabric | Gray plastic | Nylon |
|---------------|--------|-------------|--------------|-------|
| Rendered object | 렌더링된 오브젝트 |
| Real object example | 실제 물체 예시 |

## Local vs. Global Illumination

- **Local (또는 direct, non-global) illumination**
  - 광원에서 **직접 오는 빛**만을 모델링
  - 빠르게 렌더링 가능하지만, 사실성이 떨어짐
  - 예: Phong illumination 모델

(그림: Direct illumination 예시)

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

(그림: 캐릭터, 자동차 등 다양한 UV 매핑 예시)

## Defining Texture Coordinate Function:  
2) Projections to Parametric Surfaces

- 사각형, 구, 원기둥 등 파라메트릭 표면(parametric surfaces)과 유사한 객체는
- 해당 파라메트릭 표면에 정점을 투사하여 텍스처 좌표 함수를 정의할 수 있음

## Examples of coordinate functions  
Planar projection

(그림: 평면 투영에 의한 UV 분포)
Spherical projection

(그림: 구면 투영에 의한 지구 텍스처 적용)

Cylindrical projection

(그림: 실린더 형태로 투영된 텍스처)

## Rendering Texture-Mapped Objects

```
for each pixel:
(u, v) = texture coordinates at pixel
color = texture.get_color(u, v)
pixel.color = color
```

- 그러나 텍스처 좌표 함수는 각 정점(vertex)에 대해 정의됨
- 그렇다면 각 픽셀마다의 텍스처 좌표는 어떻게 계산할 수 있을까?
- 텍스처 좌표는 다각형 내부에서 barycentric interpolation으로 계산됨
- 다각형 내부의 각 픽셀에 대해, 픽셀이 포함된 삼각형의 정점 좌표에 따라 `(u, v)`가 결정됨

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

(예시: Game of Thrones 캐릭터 텍스처)
- final 렌더링
- diffuse
- specular
- wireframe
- normal
- texture map

## Normal Mapping - Motivation

- circle, sphere 비교
- circle은 삼각형 개수가 적어 렌더링이 더 빠름
- normal vector가 적절하면 circle도 sphere처럼 보일 수 있음

- 인간 시각은 실제 형상이 아닌 밝기 패턴으로 형태를 인식
  - 즉, 밝고 어두운 영역의 패턴은 normal에 의해 결정됨

## Normal Mapping - Basic Idea

목표: 고폴리 모델처럼 보이는 저폴리 모델 만들기

1. 고폴리 모델의 normal을 텍스처 이미지에 somehow 인코딩
2. 그 텍스처 이미지를 저폴리 모델에 적용

(그림: normal 전파 예시)

## Normal Mapping - Example

- 좌: high-poly (814 triangles)
- 중: simplified (900 triangles)
- 우: 더 간단한 모델 (200 triangles)

## Normal Mapping - Details

- 고폴리(high-poly) 모델의 normal vector를 각 픽셀의 RGB 값으로 인코딩
- tangent space normal map에서는 픽셀 RGB가 u, v, w 축에 해당하는 normal 성분을 나타냄

표기:
- R = Nᵤ, G = Nᵥ, B = Nʷ
- u: 텍스처 u축
- v: 텍스처 v축
- w: 표면의 실제 normal 방향
- R = Nᵤ, G = Nᵥ, B = Nʷ  
  - U: -1 to +1 → Red: 0 to 255  
  - V: -1 to +1 → Green: 0 to 255  
  - W: 0 to +1 → Blue: 128 to 255

- tangent space normal map이 푸르스름한 이유:
  - 대부분의 normal은 tangent space 기준 `(128, 128, 255)` 근처이기 때문

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

## Shadow Map

- light view에서의 depth map을 이용해 샘플 지점이 보이는지를 판단
  - 눈에는 보이지만 광원에 가려진 지점은 그림자로 표시됨

(그림: teapot을 기준으로 광원 방향에서 깊이 확인)

## Environment Map

- 복잡한 거울같은 효과를 갖는 객체 시뮬레이션
  - 객체 주변 환경을 텍스처로 캡처
  - 표면 normal을 이용해 텍스처 좌표 계산

(그림: 구면에 적용된 environment map)

## [Practice] Online Demos

- Light mapping  
  - https://threejs.org/examples/?q=light#webgl_lights_physical

- Shadow mapping  
  - https://threejs.org/examples/#webgl_shadowmap

- Environment mapping  
  - https://threejs.org/examples/#webgl_materials_cubemap_dynamic  
  - https://threejs.org/examples/?q=refrac#webgl_materials_cubemap_refraction

# 12 - Lab - Texture Mapping

## Outline
- Pillow 설치
- 텍스처가 적용된 단일 삼각형
- 텍스처 필터링
- 밉맵
- 텍스처 래핑
- 다중 텍스처

## Install Pillow
- Pillow: 대중적인 파이썬 이미지 처리 라이브러리

- 설치:
```sh
$ workon cg-course
$ pip install pillow
```

- 문서:  
https://pillow.readthedocs.io/en/stable/index.html

## [Code] 1-triangle-texture
- "5-Lab-3DTransformations-VertProcess/1/3-lookat.py"에서 시작
- 프레임을 그리는 코드 제거
- PIL(Pillow) 모듈 import:
```python
from PIL import Image
```

- VAO  
  - 이제 vertex 데이터에는 꼭짓점 위치와 색상뿐 아니라 텍스처 좌표도 포함됨

vertex 배열 구성 예시:
```
# positions      # colors         # texture coordinates
0.0,  0.5, 0.0,   1.0, 0.0, 0.0,   0.5, 1.0,
-0.5, -0.5, 0.0,  0.0, 1.0, 0.0,   0.0, 0.0,
0.5, -0.5, 0.0,   0.0, 0.0, 1.0,   1.0, 0.0
```

- VAO 생성 및 활성화  
- VBO 생성 및 데이터 복사

```python
def prepare_vao_triangle():
    # 꼭짓점 위치 속성 설정
    glVertexAttribPointer(index, size, type, normalized, stride, pointer)
    glEnableVertexAttribArray(index)

    # 꼭짓점 색상 속성 설정
    glVertexAttribPointer(...)
    glEnableVertexAttribArray(...)

    # 텍스처 좌표 속성 설정 - 2D 데이터
    glVertexAttribPointer(...)
    glEnableVertexAttribArray(...)

    return VAO
```
- 이미지를 로드하고 텍스처 객체를 생성하는 과정

- 텍스처 객체를 생성하고 바인딩: `glGenTextures`, `glBindTexture`  
- 이미지 로드: Pillow 라이브러리 사용 (`Image.open`)  
- 로드한 이미지를 텍스처로 설정: `glTexImage2D`

```python
def main():
    # 텍스처 객체 생성
    texture = glGenTextures(1)
    glBindTexture(GL_TEXTURE_2D, texture)

    # 텍스처 필터링 파라미터 설정
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR)
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR)

    try:
        img = Image.open("./A02pysc-Solarsystemscope_texture_8k_earth_daymap.jpg")

        # 이미지 수직 뒤집기 (OpenGL의 y축 방향 때문)
        img = img.transpose(Image.FLIP_TOP_BOTTOM)

        # 텍스처 이미지로 설정
        glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, img.width, img.height, 0,
                     GL_RGB, GL_UNSIGNED_BYTE, img.tobytes())

        img.close()
    except:
        print("Failed to load texture")
```

- `glTexImage2D` 함수 사용 예시 및 설명

```c
glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, img.width, img.height, 0,
             GL_RGB, GL_UNSIGNED_BYTE, img.tobytes())
```

- `glTexImage2D(target, level, internalformat, width, height, border, format, type, data)`
  - `target`: 텍스처 대상. GL_TEXTURE_2D로 설정
  - `level`: 디테일 레벨. 보통 0 (glGenerateMipmap 사용 시 변경 가능)
  - `internalformat`: 텍스처를 저장할 내부 포맷
  - `width`, `height`: 이미지 크기
  - `border`: `0` (레거시 값)
  - `format`, `type`: 원본 이미지의 포맷과 데이터 타입
  - `data`: 메모리 상의 이미지 데이터
- Vertex Shader 코드

```glsl
#version 330 core
layout (location = 0) in vec3 vin_pos;
layout (location = 1) in vec3 vin_color;
layout (location = 2) in vec2 vin_uv;

out vec3 vout_color;
out vec2 vout_uv;

uniform mat4 MVP;

void main() {
    // 동차 좌표계에서의 3D 위치 계산
    vec4 pos4 = vec4(vin_pos.xyz, 1.0);
    gl_Position = MVP * pos4;

    vout_color = vec4(vin_color, 1.0);
    vout_uv = vin_uv;
}
```

- Fragment Shader 코드

```glsl
#version 330 core
in vec2 vout_uv;          // 보간된 텍스처 좌표
in vec3 vout_color;

out vec4 FragColor;

uniform sampler2D texture1;  // GLSL 내장 sampler 타입

void main()
{
    // FragColor = vec4(vout_color, 1.0);  // 색상만 사용하는 경우

    // 텍스처 좌표에 따라 색상 샘플링
    FragColor = texture(texture1, vout_uv);
}
```

- 최종 그리기 루프

```python
def main():
    ...
    while not glfwWindowShouldClose(window):
        # 현재 프레임 기준으로 삼각형을 그림
        glBindVertexArray(vao_triangle)
        glDrawArrays(GL_TRIANGLES, 0, 3)
    ...
```

- 아직 uniform 변수 `texture1`의 값을 설정하지 않음  
- GLSL에서는 sampler uniform이 기본값 0으로 설정된다는 보장이 없음  
- 대부분 드라이버에서 기본값이 0(GL_TEXTURE0)이기 때문에 잘 작동하지만,  
  플랫폼이나 GPU에 따라 명시적으로 지정해주는 것이 안전함  
- 아래 코드를 추가하여 uniform 바인딩을 명확히 설정:

```c
loc_texture1 = glGetUniformLocation(shader_program, "texture1");
glActiveTexture(GL_TEXTURE0);
glBindTexture(GL_TEXTURE_2D, texture1);
glUniform1i(loc_texture1, 0);
```

(이미지 설명: 좌측 하단 그림은 지구 텍스처를 삼각형에 매핑한 예시임)

## [Code] 2-triangle-texture-color  
- vertex 색상과 텍스처를 함께 사용할 수 있음  
- 예: 텍스처 값에 색상 값을 곱해 시각적 효과 추가

```glsl
void main() {
    ...
    FragColor = texture(texture1, vout_uv) * vout_color;
}
```

(이미지 설명: 색상이 적용된 지구 이미지의 텍스처 예시)

## [Code] 3-triangle-texture-filter  
- 더 큰 삼각형을 그려보자

```python
def main():
    while not glfwWindowShouldClose(window):
        ...
        # 모델링 행렬
        M = glm.mat4()
        M = glm.scale(glm.vec3(3.5, 5.5, 1.0))
        ...
```

(이미지 설명: 확대된 삼각형에 저해상도 텍스처가 뚜렷하게 보임)

- 더 부드러운 결과를 얻으려면?

(이미지 설명: 왼쪽은 GL_NEAREST로 픽셀이 뚜렷함, 오른쪽은 `GL_LINEAR로` 보간되어 부드럽게 표현됨)

- 텍스처 필터링(Texture filtering)은 주어진 `(u, v)`에 대한 색상 값을 계산하는 방식 지정  
- 텍스처 좌표는 실수이므로 정확히 픽셀 중심과 일치하지 않을 수 있음  
- `GL_NEAREST`: 가장 가까운 텍셀(texel)의 색상을 사용 (픽셀화된 결과)  
- `GL_LINEAR`: 주변 텍셀을 보간하여 색상을 계산 (부드러운 결과)
(이미지 설명: 좌측은 Nearest 필터, 우측은 Linear 필터에 따른 픽셀 시각화 예시)
- `MIN` 필터와 `MAG` 필터를 구분해서 설정 가능  
- `MIN` 필터: 축소 시  
- `MAG` 필터: 확대 시

```python
def main():
    ...
    # 텍스처 생성
    texture = glGenTextures(1)
    glBindTexture(GL_TEXTURE_2D, texture)

    # GL_NEAREST 설정 예시
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST)
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_NEAREST)

    # GL_LINEAR 설정 예시
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR)
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR)

    try:
        img = Image.open("./230px-Solarsystemscope_texture_8k_earth_daymap.jpg")
```

(이미지 설명: Python 코드에서 MIN/MAG 필터를 GL_LINEAR 또는 GL_NEAREST로 설정하는 예시)

## [Code] 4-triangle-texture-mipmaps  
- 고해상도 텍스처를 멀리 있는 물체에 사용할 경우, 한 픽셀에 모든 정보가 들어가 비효율적임  
- 이를 해결하기 위해 **mipmap** 사용  
  - mipmap은 동일 텍스처의 해상도를 점점 낮춘 이미지 집합  
  - 객체와의 거리 등에 따라 적절한 해상도의 레벨을 선택해 사용  
  - OpenGL은 자동으로 적절한 mipmap 레벨을 선택

(이미지 설명: 각 레벨마다 텍스처 해상도가 절반씩 줄어들며, 픽셀 수준의 샘플링이 이루어짐)

```python
def main():
    ...
    # GL_TEXTURE_MIN_FILTER: 축소 시 필터링 방식
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR_MIPMAP_LINEAR)

    # GL_LINEAR_MIPMAP_LINEAR: 인접한 두 mipmap 레벨에서 각각 선형 보간 후, 다시 선형 보간
    # GL_LINEAR_MIPMAP_NEAREST: 가까운 두 레벨 중 하나 선택 + 내부는 선형 보간

    # GL_TEXTURE_MAG_FILTER: 확대 시 필터링 방식
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR)

    glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, img.width, img.height, 0,
                 GL_RGB, GL_UNSIGNED_BYTE, img.tobytes())

    glGenerateMipmap(GL_TEXTURE_2D)
```

## [Code] 5-triangle-texture-wrap  
- 텍스처 좌표가 `(0.0, 1.0)` 범위를 벗어날 경우 OpenGL은 어떻게 처리할까?

- 텍스처 래핑 방식 4가지:
  - `GL_REPEAT`: 기본값, 텍스처 반복
  - `GL_MIRRORED_REPEAT`: 반전하며 반복
  - `GL_CLAMP_TO_EDGE`: 가장자리를 늘림
  - `GL_CLAMP_TO_BORDER`: 테두리 색상으로 채움

(이미지 설명: 각각의 wrapping 모드에 따른 시각적 차이 비교)

```python
def prepare_vao_triangle():
    vertices = glm.array(glm.float32,
        # position        # color       # texture coordinates
         0.0, 0.0, 0.0,    1.0, 0.0, 0.0,   -0.5, -0.5,  # v0
         0.5, 0.0, 0.0,    0.0, 1.0, 0.0,    2.0, -0.5,  # v1
         0.0, 0.5, 0.0,    0.0, 0.0, 1.0,   -0.5, 2.0    # v2
    )
```

(텍스처 좌표가 0~1을 벗어나도록 지정해 wrap 모드에 따른 차이를 실험)

```python
def main():
    ...
    # 기본값은 GL_REPEAT

    # GL_TEXTURE_WRAP_S: 수평(u) 방향 설정
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP_TO_EDGE)
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_MIRRORED_REPEAT)

    # GL_TEXTURE_WRAP_T: 수직(v) 방향 설정
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT)
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP_TO_BORDER)

    # 경계색 설정 (GL_CLAMP_TO_BORDER 시 사용됨)
    border_color = [1.0, 1.0, 1.0, 1.0]
    glTexParameterfv(GL_TEXTURE_2D, GL_TEXTURE_BORDER_COLOR, border_color)

    try:
        ...
```

## [Code] 6-cube-multiple-textures  
- 두 개의 이미지를 로드하여 diffuse map과 specular map으로 각각 사용  
- 다양한 조명 효과 표현 가능

(이미지 설명: 왼쪽은 diffuse map, 가운데는 specular map, 오른쪽은 결과 큐브)

- `glUniform1i`를 사용하여 sampler uniform에 texture unit의 위치를 할당 가능  
- 이를 통해 fragment shader에서 **여러 텍스처를 동시에 사용할 수 있음**  
- 기본 방식:
  - 각 sampler 변수에 대해 `glUniform1i`로 texture unit 인덱스 지정
  - `glActiveTexture(GL_TEXTUREi)`로 활성화
  - `glBindTexture(GL_TEXTURE_2D, texture)`로 바인딩

(요약: diffuse map과 specular map을 동시에 사용하는 구조)

- `8-Lab-Lighting/4-all-components-phong-faceonvm.py`에서 시작  
- Pillow import  
- VAO의 vertex data에 texture coordinate 추가  
- sampler uniform 변수 `texture_diffuse`, `texture_specular`를 텍스처 객체에 연결  
- shader 내부에서 diffuse/ambient는 `texture_diffuse`로부터,  
  specular은 `texture_specular`로부터 샘플링

```python
def main():
    # diffuse texture
    texture_diffuse = glGenTextures(1)
    glBindTexture(GL_TEXTURE_2D, texture_diffuse)
    try:
        img = Image.open("./230px-Solarsystemscope_texture_8k_earth_daymap.jpg")

    # specular texture
    texture_specular = glGenTextures(1)
    glBindTexture(GL_TEXTURE_2D, texture_specular)
    try:
        img = Image.open("./plain-checkerboard.jpg")

    # 유니폼에 texture unit 인덱스 지정
    glUniform1i(glGetUniformLocation(shader_program, "texture_diffuse"), 0)
    glActiveTexture(GL_TEXTURE0)
    glBindTexture(GL_TEXTURE_2D, texture_diffuse)

    glUniform1i(glGetUniformLocation(shader_program, "texture_specular"), 1)
    glActiveTexture(GL_TEXTURE1)
    glBindTexture(GL_TEXTURE_2D, texture_specular)
```

- Vertex Shader

```glsl
#version 330 core
layout (location = 0) in vec3 vin_pos;
layout (location = 1) in vec3 vin_normal;
layout (location = 2) in vec2 vin_uv;

out vec3 vout_surface_pos;
out vec3 vout_normal;
out vec2 vout_uv;

uniform mat4 MVP;
uniform mat4 M;

void main() {
    vec4 pos4 = vec4(vin_pos.xyz, 1.0);
    gl_Position = MVP * pos4;

    vout_surface_pos = vec3(M * pos4);
    vout_normal = normalize(mat3(transpose(inverse(M))) * vin_normal);
    vout_uv = vin_uv;
}
```

- Fragment Shader

```glsl
in vec2 vout_uv;

uniform sampler2D texture_diffuse;
uniform sampler2D texture_specular;

void main() {
    // 재질 색상 계산 예시
    vec3 material_color = vec3(1.0, 0.0, 0.0); // 기본값

    // 텍스처에서 diffuse 색상 샘플링
    vec3 material_diffuse = vec3(texture(texture_diffuse, vout_uv));

    // 비금속 재질에서 specular 사용 예시
    vec3 material_specular = vec3(texture(texture_specular, vout_uv));

    // 최종 색상 조합 예시
    FragColor = vec4(diffuse + specular, 1.0);
}
```

- 큐브를 구성하는 12개의 삼각형에 대해 vertex 데이터 구성

```python
def prepare_vao_cube():
    vertices = glm.array(glm.float32,
        # pos        normal       texcoord
        -1, -1,  1,   0,  0,  1,   0, 0,  # v0
         1, -1,  1,   0,  0,  1,   1, 0,  # v1
         1,  1,  1,   0,  0,  1,   1, 1,  # v2
        -1, -1,  1,   0,  0,  1,   0, 0,  # v0
         1,  1,  1,   0,  0,  1,   1, 1,  # v2
        -1,  1,  1,   0,  0,  1,   0, 1,  # v3
        ...
    )
```