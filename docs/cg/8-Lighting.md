# 8 - Lighting

## 개요

- 물체의 가시 색상 (Visible Color of Objects)
- 빛의 반사 (Reflection of Light)
- Phong 조명 모델 (Phong Illumination Model)
- 다각형 쉐이딩 (Polygon Shading)
  - 면/정점 법선 (Face / Vertex Normal)
  - 평면 / Gouraud / Phong 쉐이딩 (Flat / Gouraud / Phong Shading)

## 물체의 가시 색상

- 빛이 물체에 닿으면, 일부는 흡수되고 일부는 반사됨
- 물체의 색상은 **반사되는 빛의 파장**에 따라 결정됨  
  - 예: 빨간 물체는 주로 빨간색 빛을 반사하고 나머지 파장은 흡수하므로 빨간색으로 보임
- **어떤 색이 흡수되고 반사되는지는 표면의 고유한 성질**에 의해 결정됨
- 따라서, 물체의 가시 색상은 **광원의 색상에 영향을 받음**

> Room for one colour, Olafur Eliasson

## 물체의 가시 색상 계산하기

- 컴퓨터 그래픽스(CG)에서는 색상을 일반적으로 `R`, `G`, `B` 성분으로 표현함
- 광원 색상 (Light color): 광원에서 방출되는 각 색 성분의 세기  
  - 예: `(1, 1, 1)` → 흰색 광원
- 재질 색상 (Material color): 입사광에서 반사되는 각 색 성분의 비율  
  - 예: `(0.5, 0, 0)` → 빨간색의 절반만 반사되고, 녹색과 파랑은 전부 흡수됨
- **빛과 재질의 RGB 성분을 성분별 곱셈 (element-wise multiplication)** 하는 것이 **표면 반사의 근사 모델**로 적절함

## 물체의 색상 계산하기: 예시

- 예시:  
  - 어떤 표면의 재질 색상이 `(0.5, 0.8, 0.2)`일 경우  
    - 이 표면은 입사광의 빨간색 50%, 녹색 80%, 파란색 20%를 반사함
- 광원 색상이 `(1.0, 1.0, 1.0)`일 경우 → 흰색 광원  
  - 가시 표면 색상 = `(0.5, 0.8, 0.2)` (성분별 곱셈 결과)
- 광원 색상이 `(1.0, 0.0, 0.0)`일 경우 → 빨간색 광원  
  - 가시 표면 색상 = `(0.5, 0.0, 0.0)` → 더 어두운 빨간색 표면

## 빛의 반사

- 빛은 물체에 의해 흡수(absorbed), 발산(emitted), 산란(scattered), 반사(reflected), 굴절(refracted)될 수 있음
- **산란과 반사**는 불투명 물체 표면의 시각적 특성(예: 표면 색상, 하이라이트 등)을 결정하는 주요 요인
- 반사의 종류:
  - Diffuse reflection (난반사)
  - Specular reflection (정반사)
    - Ideal specular reflection
    - Non-ideal specular reflection (Glossy reflection)

> *Computer Graphics에서는 산란과 반사를 모두 **반사**(reflection)로 통칭함*

## 난반사 Diffuse reflection

- 특정 파장의 빛을 **모든 방향으로 고르게 산란**
  → 표면 색상을 결정함
- **시점에 무관한(view-independent)** 특성
- 예:
  - 자홍색 파장을 강하게 산란
  - 전 파장을 거의 균일하게 산란
  - 모든 파장을 흡수 (산란 거의 없음)

## 난반사 - Lambert의 코사인 법칙

- 작은 표면에서 반사되는 에너지는 **입사광 방향과 표면 법선 사이의 각도의 cosine**에 비례함
$$
I_{\text{reflected}} = I_{\text{incident}} \cos{\theta} \\
= I_{\text{incident}} \cdot (\hat{\mathbf{N}} \cdot \hat{\mathbf{L}})
$$
- $I_\text{reflected}$: 반사광의 세기  
- $I_\text{incident}$: 입사광의 세기  
- $\hat{\mathbf{N}}$: 입사 지점에서의 표면 법선 벡터  
- $\hat{\mathbf{L}}$: 정규화된 입사광 벡터
- Lambert 법칙의 2D 시각화

> *이 이미지는 Brown 대학 Andy van Dam 교수 강의자료에서 인용됨*  
> http://cs.brown.edu/courses/cs1230/lectures.shtml

## 완전 정반사

- 매끄럽고 평탄한 표면에서 **거울과 같은 반사** 발생  
  → 거울상의 이미지 생성
- **시점에 의존적인(view-dependent)** 특성

## 완전 정반사 - 반사 법칙

- $\hat{\mathbf{N}}$, $\hat{\mathbf{L}}$, $\hat{\mathbf{R}}$은 동일한 평면상에 존재  
- 입사각 $\theta_i = \theta_r$  
- $\hat{\mathbf{L}}$과 $\hat{\mathbf{R}}$은 $\hat{\mathbf{N}}$의 양쪽에 위치  

- 기호 설명:  
  - $\hat{\mathbf{N}}$: 입사 지점에서의 표면 법선  
  - $\hat{\mathbf{L}}$: 정규화된 입사광 벡터  
  - $\hat{\mathbf{R}}$: 정규화된 반사광 벡터


## 불완전 정반사 (a.k.a. Glossy Reflection)

- 광택이 있으나 거울처럼 완전히 매끄럽지 않은 표면에서의 반사
  - 표면의 거칠기로 인해 반사광이 퍼짐
  - 밝은 하이라이트 생성
- **시점에 의존적인(view-dependent)** 특성

## 일반 재질의 반사

- 대부분의 재질 표면은 **diffuse reflection**과 **(비이상적인) specular reflection**을 동시에 가짐

> Total Scattering = Diffuse + Specular  
> → 전체 산란 분포는 두 반사의 합으로 구성됨

> *이 이미지는 Brown 대학 Andy van Dam 교수 강의자료에서 인용됨*  
> http://cs.brown.edu/courses/cs1230/lectures.shtml

## Lighting (or Illumination)

- 컴퓨터 그래픽스에서 lighting (또는 illumination)은  
  빛의 효과를 계산하는 과정을 의미함  
  → 물체 표면 색상 및 하이라이트 계산

## Phong 조명 모델

- 컴퓨터 그래픽스에서 가장 널리 사용되는 “고전적” 조명 모델 중 하나
  - 실험적(empirical) 모델이며, 물리 기반 모델은 아님

> Bùi Tường Phong (1942 – 1975)

- 세 가지 구성 요소:
  - **Ambient**
    - 비특정한 일정한 전역 조명
    - 간접 조명에 대한 조잡한 근사
  - **Diffuse**
    - Lambert 법칙을 따르는 난반사 모델
    - 표면 색상 결정
  - **Specular**
    - cosⁿ(α)을 이용한 광택 반사 근사
    - 빛나는 물체의 하이라이트 계산

> Ambient + Diffuse + Specular = **Phong Reflection**

- 이제부터 각 지점에서 **Phong 조명 모델의 각 구성 요소**(ambient, diffuse, specular)의 색을 계산하는 방법을 살펴봄
- 이 지점은 다음 중 하나일 수 있음:
  - 다각형의 정점
  - 다각형 내부의 임의 지점 (필름 공간의 픽셀에 해당)

## Ambient 성분

$$
I_a = l_a \cdot m_a
$$

- $l_a$: 광원의 ambient 색  
- $m_a$: 표면 지점의 재질 ambient 색  
- $I_a$: 최종 ambient 색 결과  
- $\cdot$: 성분별 곱셈 (element-wise multiplication)

## 결과

$$
I = l_a \cdot m_a
$$

> *이 이미지는 텍사스 A\&M 대학교의 Huamin Qu 교수 슬라이드에서 인용됨*  
> http://faculty.cs.tamu.edu/schaefer/CSCE441/notes.html

## Diffuse 성분

$$
I_d = l_d \cdot m_d \cdot \cos{\theta} = l_d \cdot m_d \cdot (\mathbf{L} \cdot \mathbf{N})
$$

- $\mathbf{L}$: 광원 방향 벡터  
- $\mathbf{N}$: 표면 법선 벡터  
  - $\mathbf{L}$과 $\mathbf{N}$은 단위 벡터 (unit vector)  
- $\cdot$: 내적 (dot product)

- $l_d$: 광원의 diffuse 색상  
- $m_d$: 재질의 diffuse 색상  
- $I_d$: 표면 지점에서의 diffuse 결과 색상

## 결과

$$
I = l_a \cdot m_a
$$

(그림: ambient 성분만 적용된 렌더링 결과)

$$
I = l_a \cdot m_a + l_d \cdot m_d \cdot (\mathbf{L} \cdot \mathbf{N})
$$

(그림: ambient + diffuse 성분 적용)

## Specular 성분

$$
I_s = l_s \cdot m_s \cdot \cos^n{\alpha} = l_s \cdot m_s \cdot (\mathbf{V} \cdot \mathbf{R})^n
$$

- $\mathbf{V}$: 시점 (view) 방향 벡터  
- $\mathbf{R}$: 반사 방향 벡터  
  - $\mathbf{V}$와 $\mathbf{R}$은 단위 벡터  
- $n$: 광택 계수 (shininess coefficient)

- $l_s$: 광원의 specular 색상  
- $m_s$: 재질의 specular 색상  
- $I_s$: 표면 지점에서의 specular 결과 색상

## 결과

$$
I = l_a \cdot m_a
$$

(그림: ambient 성분만 적용된 렌더링)

$$
I = l_a \cdot m_a + l_d \cdot m_d \cdot (\mathbf{L} \cdot \mathbf{N})
$$

(그림: ambient + diffuse 성분 적용)

$$
I = l_a \cdot m_a + l_d \cdot m_d \cdot (\mathbf{L} \cdot \mathbf{N}) + l_s \cdot m_s \cdot (\mathbf{V} \cdot \mathbf{R})^n
$$

- $n = 5$

(그림: ambient + diffuse + specular, $n=5$)

$$
I = l_a \cdot m_a + l_d \cdot m_d \cdot (\mathbf{L} \cdot \mathbf{N}) + l_s \cdot m_s \cdot (\mathbf{V} \cdot \mathbf{R})^n
$$

- $n = 50$

(그림: ambient + diffuse + specular, $n=50$)

$$
I = l_a \cdot m_a + l_d \cdot m_d \cdot (\mathbf{L} \cdot \mathbf{N}) + l_s \cdot m_s \cdot (\mathbf{V} \cdot \mathbf{R})^n
$$

- $n = 500$


(그림: 광택 계수 n이 커질수록 specular highlight가 좁아짐)

## [Demo] Phong Illumination

- http://www.cs.toronto.edu/~jacobson/phong-demo/
- “Phong Shading”을 선택한 후 다음 요소들을 바꿔보며 실험
  - ambient, diffuse, specular 계수 및 색상
  - 광택 계수 (shininess)
  - 물체 종류, 광원 위치, 배경색 등도 변경 가능

## Shading

- 물체 표면에 나타나는 색상 분포의 변화
  - 조명의 영향을 강하게 받음

(그림: 조명 조건에 따라 표면의 색상이 다르게 보임)

- 컴퓨터 그래픽스에서 shading이라는 용어는 다음을 설명함:
  - 조명 모델로 인해 발생하는 표면 색상의 변화
  - 또는 다각형 내부의 픽셀 색상 변화
- 현재 다루는 의미는 후자임  
  → 혼동을 피하기 위해 **polygon shading**이라는 용어를 사용함
- **Polygon shading**:  
  조명 모델을 기반으로 다각형 내부 각 픽셀의 색상을 결정하는 과정

## Surface Normal

- 특정 지점에서 표면에 수직인 벡터  
  → 일반적으로 단위 벡터 사용 (길이 = 1)
- shading 및 조명 계산에서 핵심적인 역할
- Diffuse reflection:
  - Lambert의 코사인 법칙 적용
- Specular reflection:
  - 반사의 법칙 적용

(수식 포함된 그림: 코사인 법칙과 반사 각도)

## Face Normal

- **다각형 면의 surface normal을 얻는 방법**
- 정점의 순서는 중요함!
- 삼각형 $\mathbf{<p_1,~p_2,~p_3>}$의 법선은 다음과 같이 계산됨:
  - $\mathbf{v_1 \times v_2}$
    - $\mathbf{v_1}$: $\mathbf{p_1}$에서 $\mathbf{p_2}$로 향하는 벡터
    - $\mathbf{v_2}$: $\mathbf{p_1}$에서 $\mathbf{p_3}$로 향하는 벡터
- **그래서 정점의 시계 반대 방향(counterclockwise) 나열이 중요함**
  - Face normal의 방향이 표면 "바깥쪽"을 향하게 하기 위해

## Flat Shading

- 다각형당 하나의 법선(normal)을 사용
- 다각형당 한 번만 색상 계산
- 빠르지만 곡면 표현에는 부적합
  - 다각형 수를 아무리 늘려도 여전히 "각져 보임(faceted)"

## Smooth Shading

- 꼭짓점마다 평균 낸 법선 벡터 사용
- 인접 다각형 간 부드러운 색상 전환 가능
- 방법:
  - Gouraud shading
  - Phong shading

## Gouraud Shading

- 꼭짓점마다 하나의 vertex normal 사용
- 각 꼭짓점에서 조명 모델로 색상을 계산
- 다각형 내부는 꼭짓점 색상을 보간하여 색상 결정
  - Barycentric interpolation 사용

> *Henri Gouraud (1944–)*

(이미지: Flat shading vs Gouraud shading 비교)

- 문제점: **specular highlight가 부정확하게 표현됨**
  - 하이라이트가 왜곡되거나 아예 사라질 수 있음
  - 다각형 수를 늘리면 이러한 문제는 줄어듦

## Phong Shading

- 꼭짓점마다 하나의 vertex normal 사용
- 다각형 내부는 vertex normal을 보간(interpolation)
- 보간된 normal을 사용하여 **각 픽셀에서 색상을 계산**

> *Bùi Tường Phong (1942–1975)*

(이미지: Gouraud shading vs Phong shading 비교)

- **하이라이트를 훨씬 더 정확히 표현함**
  - 내부 픽셀마다 보간된 normal은 해당 지점의 실제 표면 normal을 더 잘 근사함
  - 품질은 좋지만 계산량이 더 많음
- **Phong의 조명 모델과 혼동하지 말 것**
  - 동일 인물이 개발했지만 다른 개념
 
## [Demo] Polygon Shading

- Flat & Gouraud shading  
  - http://math.hws.edu/graphicsbook/demos/c4/smooth-vs-flat.html
- Gouraud & Phong shading  
  - http://www.cs.toronto.edu/~jacobson/phong-demo/

## 법선 벡터 변환 Normal Vector Transformation

- 어떤 표면 위 점들의 집합에 affine 변환 M이 적용되면,
  - **접선 벡터(tangent)는 M에 의해 변환됨**
    - 점 간의 차이도 M에 의해 변환되기 때문
- 그러나 **법선 벡터(normal)는 M에 의해 변환되어서는 안 됨**
  - 법선은 접선에 수직이어야 하기 때문
- 위: 도형에 M 적용 → OK  
- 중간: 법선에 M 적용 → (X)  
- 아래: 법선에 다른 변환 적용 → (O)

$\mathbf{t} \cdot \mathbf{n} = \mathbf{t}^\mathrm{T} \mathbf{n} = 0$ (기존 수직 조건)  
원하는 조건: $M \mathbf{t} \cdot X \mathbf{n} = \mathbf{t}^\mathrm{T} M^\mathrm{T} X \mathbf{n} = 0$  
$\Rightarrow X = (M^\mathrm{T})^{-1}$ 로 설정  
$\Rightarrow M \mathbf{t} \cdot X \mathbf{n} = \mathbf{t}^\mathrm{T} M^\mathrm{T} (M^\mathrm{T})^{-1} \mathbf{n} = \mathbf{t}^\mathrm{T} \mathbf{n} = 0$
- 결론:  
$$X = (M^\mathrm{T})^{-1}$$
- 기호:  
  - $\mathbf{t}$: 접선 벡터  
  - $\mathbf{n}$: 법선 벡터

# 8 - Lab - Lighting

## Outline

- Flat / Smooth Shading을 위한 Vertex Normal 설정
- Phong 조명과 Gouraud Shading을 이용한 큐브 렌더링  
  - + Ambient 성분  
  - + Diffuse 성분  
  - + Specular 성분  
- Phong 조명과 Phong Shading을 이용한 큐브 렌더링  
- Phong 조명과 Gouraud / Phong Shading을 사용한 “Smooth” 큐브 렌더링  

## Setting Vertex Normal for Flat / Smooth Shading

(본문 없음)

## Example: a cube of length 2 again

> 큐브의 한 변의 길이가 2인 예시  

```
vertex index    position
0               (-1,  1,  1)
1               ( 1,  1,  1)
2               ( 1, -1,  1)
3               (-1, -1,  1)
4               (-1,  1, -1)
5               ( 1,  1, -1)
6               ( 1, -1, -1)
7               (-1, -1, -1)
```

## Flat Shading in OpenGL

- 다각형 쉐이딩 방식은 지정한 vertex normal 벡터에 따라 결정됨

- Flat shading: 각 정점(vertex)에 대해 해당 정점이 속한 면(face)의 법선(normal)을 정점의 normal로 설정

> The normal at a vertex is the same as the face normal. Therefore, each vertex has as many normals as the number of faces it belongs to.  
> (정점의 normal은 face normal과 동일하므로, 하나의 정점은 자신이 속한 면의 수만큼의 normal을 가짐)

## Normals of the Cube for Flat Shading

> 각 정점마다 face에 따라 normal이 다르게 설정되어 있음  

```
vertex index    position         normal
0               (-1,  1,  1)     (0,0,1)
0               (-1,  1,  1)     (-1,0,0)
0               (-1,  1,  1)     (0,1,0)
1               ( 1,  1,  1)     (0,0,1)
1               ( 1,  1,  1)     (1,0,0)
1               ( 1,  1,  1)     (0,1,0)
2               ( 1, -1,  1)     (0,0,1)
2               ( 1, -1,  1)     (1,0,0)
2               ( 1, -1,  1)     (0,-1,0)
3               (-1, -1,  1)     (0,0,1)
3               (-1, -1,  1)     (-1,0,0)
3               (-1, -1,  1)     (0,-1,0)
4               (-1,  1, -1)     (0,0,-1)
4               (-1,  1, -1)     (-1,0,0)
4               (-1,  1, -1)     (0,1,0)
5               ( 1,  1, -1)     (0,0,-1)
5               ( 1,  1, -1)     (1,0,0)
5               ( 1,  1, -1)     (0,1,0)
6               ( 1, -1, -1)     (0,0,-1)
6               ( 1, -1, -1)     (1,0,0)
6               ( 1, -1, -1)     (0,-1,0)
7               (-1, -1, -1)     (0,0,-1)
7               (-1, -1, -1)     (-1,0,0)
7               (-1, -1, -1)     (0,-1,0)
```

## Vertex Data

```python
def prepare_vao_cube():
    # 36개의 정점: 총 12개의 삼각형
    vertices = glm.array(glm.float32,
        # position             normal
        -1, -1,  1,     0,  0,  1,   # v0
         1, -1,  1,     0,  0,  1,   # v1
         1,  1,  1,     0,  0,  1,   # v2
         1,  1,  1,     0,  0,  1,   # v2
        -1,  1,  1,     0,  0,  1,   # v3
        -1, -1,  1,     0,  0,  1,   # v0
        ...
    )
```

## Flat Shading in OpenGL

- 하지만, 현대 OpenGL에서는 "진정한" flat shading (정확히는 '다각형 단위 색상 계산')은 시각적으로 어색한 결과를 낳는 경우가 많음

- 다음과 같이 flat 한정자(qualifier)를 사용하여 이를 구현 가능함:
  ```glsl
  flat in vec4 vout_color;  // fragment shader에서
  ```

- 이는 현대 OpenGL에서 모든 polygon이 삼각형으로 처리되기 때문임

## Flat Shading in OpenGL

- Flat shading을 위한 목적으로, 보통은 "각 polygon마다 단일 normal"이 아닌 아래 방식이 사용됨:

  - 각 정점 normal을 해당 정점이 속한 face의 normal로 설정

  - 색상 계산을 정점(vertex) 또는 프래그먼트(fragment) 단위로 수행

    > Normal이 동일하더라도 조명 벡터가 각 정점에서 약간씩 다르므로, 계산된 색상도 미묘하게 다르게 나옴

## Smooth Shading in OpenGL

- Smooth shading: 정점 normal을 해당 정점이 포함된 모든 face normal의 평균으로 설정함

> Only one vertex normal per vertex; average of face normals of the faces the vertex is part of

## Normals of the Cube for Smooth Shading

```
vertex index    position        normal
0               (-1,  1,  1)    (-0.57735026918963,  0.57735026918963,  0.57735026918963)
1               ( 1,  1,  1)    ( 0.57735026918963,  0.57735026918963,  0.57735026918963)
2               ( 1, -1,  1)    ( 0.57735026918963, -0.57735026918963,  0.57735026918963)
3               (-1, -1,  1)    (-0.57735026918963, -0.57735026918963,  0.57735026918963)
4               (-1,  1, -1)    (-0.57735026918963,  0.57735026918963, -0.57735026918963)
5               ( 1,  1, -1)    ( 0.57735026918963,  0.57735026918963, -0.57735026918963)
6               ( 1, -1, -1)    ( 0.57735026918963, -0.57735026918963, -0.57735026918963)
7               (-1, -1, -1)    (-0.57735026918963, -0.57735026918963, -0.57735026918963)
```

## Vertex and Index Data

```python
# 8개의 정점
vertices = glm.array(glm.float32,
    # position             normal
     1.0,  0.577f,   1.0,    0.577f,  0.577f,  0.577f,   # v0
    -1.0,  0.577f,   1.0,   -0.577f,  0.577f,  0.577f,   # v1
    -1.0, -0.577f,   1.0,   -0.577f, -0.577f,  0.577f,   # v2
     1.0, -0.577f,   1.0,    0.577f, -0.577f,  0.577f,   # v3
     1.0,  0.577f,  -1.0,    0.577f,  0.577f, -0.577f,   # v4
    -1.0,  0.577f,  -1.0,   -0.577f,  0.577f, -0.577f,   # v5
    -1.0, -0.577f,  -1.0,   -0.577f, -0.577f, -0.577f,   # v6
     1.0, -0.577f,  -1.0,    0.577f, -0.577f, -0.577f,   # v7
)

# 12개의 삼각형
indices = glm.array(glm.uint32,
    0, 1, 2,
    0, 2, 3,
    4, 0, 3,
    4, 3, 7,
    5, 4, 7,
    5, 7, 6,
    1, 5, 6,
    1, 6, 2,
    4, 5, 1,
    4, 1, 0,
    2, 6, 7,
    2, 7, 3,
)
```

## How to Get Vertex Normals

- vertex data array에 vertex normal을 하드코딩  
  - 앞서 본 코드 예제처럼. 일반적으로 사용되지는 않음

- vertex position으로부터 normal을 계산

- .obj 파일과 같은 모델 파일로부터 normal을 읽어오기  
  - 가장 일반적으로 사용되는 방식

## Render a Cube using Phong Illumination and Gouraud Shading  
- 조명 성분들을 하나씩 추가하여 구현

## Light & Material Phong Illumination Components

- 물체의 최종 색상은 조명 색과 재질 RGB 색상의 **요소별 곱(element-wise multiplication)** 으로 계산됨

- 마찬가지로, 각 Phong 조명 성분(ambient, diffuse, specular)도  
  조명 색과 재질 색의 요소별 곱으로 계산됨

  - 예:  
    ```text
    diffuse_color = light_diffuse_color * material_diffuse_color
    ```

## Good Settings for Light & Material Phong Illumination Components

- Light  
  - **diffuse, specular**: 광원 자체의 색상  
  - **ambient**: 같은 색상이지만 강도는 약하게 (약 10%)

- Material  
  - **diffuse, ambient**: 물체의 색상  
  - **specular**:  
    - 흰색 (비금속)  
    - 물체 색상 (금속)

## Recall: Gouraud Shading

- 각 정점마다 단일 normal을 사용함

- 각 정점에서 조명 기반으로 색상을 계산함  
  → **조명 연산은 vertex shader에서 수행**

- 다각형 내부의 색상은 정점 간 보간으로 처리됨  
  - Barycentric 보간 사용

## [Code] 1-ambient-only-gouraud-facenorm

**Vertex Shader**
```glsl
#version 330 core
layout (location = 0) in vec3 vin_pos;
layout (location = 1) in vec3 vin_normal;

out vec4 vout_color;

uniform mat4 MVP;

void main()
{
    vec4 p3D_in_hcoord = vec4(vin_pos.xyz, 1.0);
    gl_Position = MVP * p3D_in_hcoord;

    // 광원 및 재질 속성
    vec3 light_ambient_color = vec3(1.1,1,1);
    vec3 material_ambient_color = vec3(1,0,0);

    // 조명 성분 계산
    vec3 light_ambient = 0.1 * light_ambient_color;

    // 재질 성분 결합
    vec3 material_ambient = material_ambient_color;

    vec3 ambient = light_ambient * material_ambient;

    vec3 color = ambient;

    vout_color = vec4(color, 1.0);
}
```

## [Code] 1-ambient-only-gouraud-facenorm

### Fragment shader
```glsl
#version 330 core

in vec4 vout_color;  // 보간된 색상

out vec4 FragColor;

void main()
{
    FragColor = vout_color;
}
```

## [Code] 1-ambient-only-gouraud-facenorm

```python
def prepare_vao_cube():
    # 12개의 삼각형을 위한 36개의 정점
    vertices = glm.array(glm.float32,
        # position         normal
        -1, -1,  1,     0,  0,  1,  # v0
         1, -1,  1,     0,  0,  1,  # v1
         1,  1,  1,     0,  0,  1,  # v2
         1,  1,  1,     0,  0,  1,  # v2
        -1,  1,  1,     0,  0,  1,  # v3
        -1, -1,  1,     0,  0,  1,  # v0
        ...
    )
```
> (page 5와 동일)

## [Code] 1-ambient-only-gouraud-facenorm

```python
def main():
    vao_cube = prepare_vao_cube()
    while not glfwWindowShouldClose(window):

        glUseProgram(shader_program)

        # projection matrix
        P = glm.perspective(glm.radians(45), 1, 1, 10)

        # view matrix
        view_pos = glm.vec3(3*np.sin(cam_ang), cam_height,
                            3*np.cos(cam_ang))
        V = glm.lookAt(view_pos, glm.vec3(0,0,0), glm.vec3(0,1,0))

        # model matrix (M)
        M = glm.mat4()

        # MVP 행렬 설정
        MVP = P * V * M

        glUniformMatrix4fv(loc_MVP, 1, GL_FALSE, glm.value_ptr(MVP))
        glUniformMatrix4fv(loc_M, 1, GL_FALSE, glm.value_ptr(M))

        draw_cube_with_current_MVP()
```

## [Code] 2-ambient-diffuse-gouraud-shading

### Vertex shader
```glsl
#version 330 core

layout (location = 0) in vec3 vin_pos;
layout (location = 1) in vec3 vin_normal;

out vec4 vout_color;

uniform mat4 MVP;
uniform mat4 M;

void main()
{
    vec4 p3D_in_hcoord = vec4(vin_pos.xyz, 1.0);
    gl_Position = MVP * p3D_in_hcoord;

    // 조명 및 재질 속성
    vec3 light_pos = vec3(3,2,4);
    vec3 light_color = vec3(1,1,1);
    vec3 material_color = vec3(1,0,0);

    // ambient 성분
    vec3 light_ambient = 0.1 * light_color;
    vec3 material_ambient = material_color;
    vec3 ambient = light_ambient * material_ambient;

    // normal 계산
    vec3 normal = normalize(mat3(inverse(transpose(M))) * vin_normal);
    vec3 pos = vec3(M * vec4(vin_pos,1));  // world space 위치
    vec3 light_dir = normalize(light_pos - pos);

    float diff = max(dot(normal, light_dir), 0.0);
    vec3 light_diffuse = light_color;
    vec3 material_diffuse = material_color;
    vec3 diffuse = diff * light_diffuse * material_diffuse;

    vec3 color = ambient + diffuse;
    vout_color = vec4(color, 1.0);
}
```

## [Code] 2-ambient-diffuse-gouraud-shading

```glsl
// 조명 성분
vec3 light_ambient = 0.1 * light_color;
vec3 light_diffuse = light_color;

// 재질 성분
vec3 material_ambient = material_color;
vec3 material_diffuse = material_color;

// ambient
vec3 ambient = light_ambient * material_ambient;

// normal 변환
vec3 normal = normalize(mat3(inverse(transpose(M))) * vin_normal);
vec3 pos = vec3(M * vec4(vin_pos, 1.0));
vec3 light_dir = normalize(light_pos - pos);

// diffuse
float diff = max(dot(normal, light_dir), 0.0);
vec3 diffuse = diff * light_diffuse * material_diffuse;

vec3 color = ambient + diffuse;
vout_color = vec4(color, 1.0);
```

## [Code] 2-ambient-diffuse-gouraud-shading

> Normal 벡터 변환 방식:
```glsl
vec3 normal = normalize(mat3(inverse(transpose(M))) * vin_normal);
```

> 식 정리:
$$
I_d = \mathbf{l_d} \circ \mathbf{m_d} \cdot \max(0, \mathbf{L} \cdot \mathbf{N})
$$

- 여기서 $\max()$는 음수 색상 값을 방지하기 위해 사용됨

> 오른쪽 도해:  
- normal에 변환 행렬 X를 적용  
- X는 $begin:math:text$ M^T $end:math:text$ 의 역행렬: $begin:math:text$ X = (M^T)^{-1} $end:math:text$

## [Code] 2-ambient-diffuse-gouraud-shading

```cpp
vec3 surface_pos = vec3(M * vec4(vin_pos, 1));  // world space에서의 표면 위치
```

- 표면의 위치는 조명이 적용되는 지점을 의미 (world space 기준)

- 모든 조명 연산은 world space에서 수행됨  
  → 모든 위치와 벡터도 world space로 변환되어야 함

- 그러나 **view space에서의 조명 계산**이 권장됨  
  - 고전적인 뷰 공간은 항상 (0,0,0)에 위치한 카메라 기준
  - 최근 시스템에서는 world space도 자주 사용됨  
    → 이후 view space에서도 조명 연산을 수행할 예정

## [Code] 3-all-components-gouraud-facenorm

### Vertex shader
```glsl
uniform mat4 MVP;
uniform mat4 M;
uniform vec3 view_pos;

void main()
{
    vec4 p3D_in_hcoord = vec4(vin_pos.xyz, 1.0);
    gl_Position = MVP * p3D_in_hcoord;

    // 광원 및 재질 속성
    vec3 light_pos = vec3(3,2,4);
    vec3 light_color = vec3(1,1,1);
    vec3 material_color = vec3(1,0,0);
    float material_shininess = 32.0;

    // 조명 성분
    vec3 light_ambient = 0.1 * light_color;
    vec3 light_diffuse = light_color;
    vec3 light_specular = light_color;
```

## [Code] 3-all-components-gouraud-facenorm

```glsl
// 재질 성분
vec3 material_ambient = material_color;
vec3 material_diffuse = material_color;       // 비금속 재질
vec3 material_specular = vec3(1.0);           // 흰색 반사광

// ambient
vec3 ambient = light_ambient * material_ambient;

// diffuse 및 specular 계산용 normal
vec3 normal = normalize(mat3(inverse(transpose(M))) * vin_normal);
vec3 surface_pos = vec3(M * vec4(vin_pos, 1.0));
vec3 light_dir = normalize(light_pos - surface_pos);

// diffuse
float diff = max(dot(normal, light_dir), 0.0);
vec3 diffuse = diff * light_diffuse * material_diffuse;

// specular
vec3 view_dir = normalize(view_pos - surface_pos);
vec3 reflect_dir = reflect(-light_dir, normal);
float spec = pow(max(dot(view_dir, reflect_dir), 0.0), material_shininess);
vec3 specular = spec * light_specular * material_specular;

vec3 color = ambient + diffuse + specular;
vout_color = vec4(color, 1.);
```

## [Code] 3-all-components-gouraud-facenorm

```glsl
vec3 reflect_dir = reflect(-light_dir, normal);
float spec = pow(max(dot(view_dir, reflect_dir), 0.0), material_shininess);
```

> $$ I_s = \mathbf{l_s} \circ \mathbf{m_s} \cdot \cos^\alpha \theta = \mathbf{l_s} \circ \mathbf{m_s} \cdot (\mathbf{V} \cdot \mathbf{R})^\alpha $$

- 여기서 `max()`는 음수 색상을 방지하기 위해 사용됨

## Quiz 3

# Render a Cube using Phong Illumination and Phong Shading

## Recall: Phong Shading

- 각 정점마다 단일 vertex normal 사용  
- 정점 normal을 폴리곤 내부에서 보간  
- 폴리곤 내 **각 픽셀마다** 보간된 normal을 이용해 조명 계산  
  → **조명 계산은 fragment shader에서 수행**

## [Code] 4-all-components-phong-facenorm

### Vertex shader
```glsl
#version 330 core

layout (location = 0) in vec3 vin_pos;
layout (location = 1) in vec3 vin_normal;

out vec3 vout_surface_pos;
out vec3 vout_normal;

uniform mat4 MVP;
uniform mat4 M;

void main()
{
    vec4 p3D_in_hcoord = vec4(vin_pos.xyz, 1.0);
    gl_Position = MVP * p3D_in_hcoord;

    vout_surface_pos = vec3(M * vec4(vin_pos, 1));
    vout_normal = normalize(mat3(inverse(transpose(M))) * vin_normal);
}
```

## [Code] 4-all-components-phong-facenorm

### Fragment shader
```glsl
#version 330 core

in vec3 vout_surface_pos;  // 보간된 표면 위치
in vec3 vout_normal;       // 보간된 normal

out vec4 FragColor;

uniform vec3 view_pos;

void main()
{
    // 조명 및 재질 속성
    vec3 light_pos = vec3(3,2,4);
    vec3 light_color = vec3(1,1,1);
    vec3 material_color = vec3(1,0,0);
    float material_shininess = 32.0;

    // 조명 성분
    vec3 light_ambient = 0.1 * light_color;
    vec3 light_diffuse = light_color;
    vec3 light_specular = light_color;

    // 재질 성분
    vec3 material_ambient = material_color;
    vec3 material_diffuse = material_color;
    vec3 material_specular = vec3(1.0);  // 또는 material_color

    // ambient
    vec3 ambient = light_ambient * material_ambient;

    // diffuse 및 specular 계산
    vec3 normal = normalize(vout_normal);
    vec3 surface_pos = vout_surface_pos;
    vec3 light_dir = normalize(light_pos - surface_pos);

    // diffuse
    float diff = max(dot(normal, light_dir), 0.0);
    vec3 diffuse = diff * light_diffuse * material_diffuse;

    // specular
    vec3 view_dir = normalize(view_pos - surface_pos);
    vec3 reflect_dir = reflect(-light_dir, normal);
    float spec = pow(max(dot(view_dir, reflect_dir), 0.0), material_shininess);
    vec3 specular = spec * light_specular * material_specular;

    vec3 color = ambient + diffuse + specular;
    FragColor = vec4(color, 1.);
}
```

# Render a "Smooth" Cube using Phong Illumination and Gouraud / Phong Shading

## [Code]

- `'5-all-components-gouraud-avgnorm'`  
  : `'3-all-components-gouraud-facenorm'`과 동일하나  
  - `prepare_vao_cube()` 호출부와 `glDrawElements()` 호출만 다름

- `'6-all-components-phong-avgnorm'`  
  : `'4-all-components-phong-facenorm'`과 동일하나  
  - `prepare_vao_cube()` 호출부와 `glDrawElements()` 호출만 다름