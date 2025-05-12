# 8 - Lighting

## Outline

- 물체의 가시 색상 (Visible Color of Objects)
- 빛의 반사 (Reflection of Light)
- Phong 조명 모델 (Phong Illumination Model)
- 다각형 쉐이딩 (Polygon Shading)
  - 면/정점 법선 (Face / Vertex Normal)
  - 평면 / Gouraud / Phong 쉐이딩 (Flat / Gouraud / Phong Shading)

## Visible Color of Objects

- 빛이 물체에 닿으면, 일부는 흡수되고 일부는 반사됨
- 물체의 색상은 **반사되는 빛의 파장**에 따라 결정됨  
  - 예: 빨간 물체는 주로 빨간색 빛을 반사하고 나머지 파장은 흡수하므로 빨간색으로 보임
- **어떤 색이 흡수되고 반사되는지는 표면의 고유한 성질**에 의해 결정됨

## Visible Color of Objects

- 따라서, 물체의 가시 색상은 **광원의 색상에 영향을 받음**

> Room for one colour, Olafur Eliasson

## Computing Visible Color of Objects

- 컴퓨터 그래픽스(CG)에서는 색상을 일반적으로 R, G, B 성분으로 표현함

- 광원 색상 (Light color): 광원에서 방출되는 각 색 성분의 세기  
  - 예: (1, 1, 1) → 흰색 광원

- 재질 색상 (Material color): 입사광에서 반사되는 각 색 성분의 비율  
  - 예: (0.5, 0, 0) → 빨간색의 절반만 반사되고, 녹색과 파랑은 전부 흡수됨

- **빛과 재질의 RGB 성분을 성분별 곱셈 (element-wise multiplication)** 하는 것이 **표면 반사의 근사 모델**로 적절함

## Computing Color of Objects: Examples

- 예시:  
  - 어떤 표면의 재질 색상이 (0.5, 0.8, 0.2)일 경우  
    - 이 표면은 입사광의 빨간색 50%, 녹색 80%, 파란색 20%를 반사함

- 광원 색상이 (1.0, 1.0, 1.0)일 경우 → 흰색 광원  
  - 가시 표면 색상 = (0.5, 0.8, 0.2) (성분별 곱셈 결과)

- 광원 색상이 (1.0, 0.0, 0.0)일 경우 → 빨간색 광원  
  - 가시 표면 색상 = (0.5, 0.0, 0.0) → 더 어두운 빨간색 표면

# Reflection of Light

## Reflection of Light

- 빛은 물체에 의해 흡수(absorbed), 발산(emitted), 산란(scattered), 반사(reflected), 굴절(refracted)될 수 있음

- **산란과 반사**는 불투명 물체 표면의 시각적 특성(예: 표면 색상, 하이라이트 등)을 결정하는 주요 요인

- 반사의 종류:
  - Diffuse reflection (난반사)
  - Specular reflection (정반사)
    - Ideal specular reflection
    - Non-ideal specular reflection (Glossy reflection)

> *컴퓨터 그래픽스에서는 산란과 반사를 모두 "반사(reflection)"로 통칭함*

## Diffuse Reflection

- 특정 파장의 빛을 **모든 방향으로 고르게 산란**
  → 표면 색상을 결정함

- **시점에 무관한(view-independent)** 특성

- 예:
  - 자홍색 파장을 강하게 산란
  - 전 파장을 거의 균일하게 산란
  - 모든 파장을 흡수 (산란 거의 없음)

## Diffuse Reflection - Lambert’s Cosine Law

- 작은 표면에서 반사되는 에너지는 **입사광 방향과 표면 법선 사이의 각도의 cosine**에 비례함

```
I_reflected = I_incident × cos(θ)  
             = I_incident × (N̂ · L̂)
```

- I_reflected: 반사광의 세기  
- I_incident: 입사광의 세기  
- N̂: 입사 지점에서의 표면 법선 벡터  
- L̂: 정규화된 입사광 벡터

## Diffuse Reflection - Lambert’s Cosine Law

- Lambert 법칙의 2D 시각화

> *이 이미지는 Brown 대학 Andy van Dam 교수 강의자료에서 인용됨*  
> http://cs.brown.edu/courses/cs1230/lectures.shtml

## Ideal Specular Reflection

- 매끄럽고 평탄한 표면에서 **거울과 같은 반사** 발생  
  → 거울상의 이미지 생성

- **시점 의존적(view-dependent)** 특성

## Ideal Specular Reflection - Laws of Reflection

- N̂, L̂, R̂은 동일한 평면상에 존재
- 입사각 θᵢ = 반사각 θᵣ
- L̂과 R̂은 N̂의 양쪽에 위치

- 기호 설명:
  - N̂: 입사 지점에서의 표면 법선
  - L̂: 정규화된 입사광 벡터
  - R̂: 정규화된 반사광 벡터

## Non-Ideal Specular Reflection (a.k.a. Glossy Reflection)

- 광택이 있으나 거울처럼 완전히 매끄럽지 않은 표면에서의 반사
  - 표면의 거칠기로 인해 반사광이 퍼짐
  - 밝은 하이라이트 생성

- **시점 의존적(view-dependent)** 특성

## Reflection of General Materials

- 대부분의 재질 표면은 **diffuse reflection**과 **(비이상적인) specular reflection**을 동시에 가짐

> Total Scattering = Diffuse + Specular  
> → 전체 산란 분포는 두 반사의 합으로 구성됨

> *이 이미지는 Brown 대학 Andy van Dam 교수 강의자료에서 인용됨*  
> http://cs.brown.edu/courses/cs1230/lectures.shtml

## Quiz 1

# Phong Illumination Model

## Lighting (or Illumination)

- 컴퓨터 그래픽스에서 lighting (또는 illumination)은  
  빛의 효과를 계산하는 과정을 의미함

  → 물체 표면 색상 및 하이라이트 계산

## Phong Illumination Model

- 컴퓨터 그래픽스에서 가장 널리 사용되는 “고전적” 조명 모델 중 하나
  - 실험적(empirical) 모델이며, 물리 기반 모델은 아님

> Bùi Tường Phong (1942 – 1975)

## Phong Illumination Model

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

> Ambient + Diffuse + Specular = Phong Reflection

## Phong Illumination Model

- 이제부터 각 지점에서 **Phong 조명 모델의 각 구성 요소**(ambient, diffuse, specular)의 색을 계산하는 방법을 살펴봄

- 이 지점은 다음 중 하나일 수 있음:
  - 다각형의 정점
  - 다각형 내부의 임의 지점 (필름 공간의 픽셀에 해당)

## Ambient Component

```
Iₐ = lₐ * mₐ
```

- lₐ: 광원의 ambient 색
- mₐ: 표면 지점의 재질 ambient 색
- Iₐ: 최종 ambient 색 결과
- *: 성분별 곱셈 (element-wise multiplication)

## Result

```
I = lₐ * mₐ
```

> *이 이미지는 텍사스 A&M 대학교의 Huamin Qu 교수 슬라이드에서 인용됨*  
> http://faculty.cs.tamu.edu/schaefer/CSCE441/notes.html

## Diffuse Component

```
I_d = l_d * m_d * cos(θ) = l_d * m_d * (L · N)
```

- L: 광원 방향 벡터  
- N: 표면 법선 벡터  
  - L과 N은 단위 벡터(unit vector)
- · : 내적(dot product)

- l_d: 광원의 diffuse 색상  
- m_d: 재질의 diffuse 색상  
- I_d: 표면 지점에서의 diffuse 결과 색상

## Result

```
I = lₐ * mₐ
```

(그림: ambient 성분만 적용된 렌더링 결과)

```
I = lₐ * mₐ + l_d * m_d * (L · N)
```

(그림: ambient + diffuse 성분 적용)

## Specular Component

```
I_s = l_s * m_s * cosⁿ(α) = l_s * m_s * (V · R)ⁿ
```

- V: 시점(view) 방향 벡터  
- R: 반사 방향 벡터  
  - V와 R은 단위 벡터
- n: 광택 계수 (shininess coefficient)

- l_s: 광원의 specular 색상  
- m_s: 재질의 specular 색상  
- I_s: 표면 지점에서의 specular 결과 색상

## Result

```
I = lₐ * mₐ
```

(그림: ambient 성분만 적용된 렌더링)


```
I = lₐ * mₐ + l_d * m_d * (L · N)
```

(그림: ambient + diffuse 성분 적용)

## Result

```
I = lₐ * mₐ + l_d * m_d * (L · N) + l_s * m_s * (V · R)ⁿ
```

- n = 5

(그림: ambient + diffuse + specular, n=5)

## Result

```
I = lₐ * mₐ + l_d * m_d * (L · N) + l_s * m_s * (V · R)ⁿ
```

- n = 50

(그림: ambient + diffuse + specular, n=50)

```
I = lₐ * mₐ + l_d * m_d * (L · N) + l_s * m_s * (V · R)ⁿ
```

- n = 500

(그림: 광택 계수 n이 커질수록 specular highlight가 좁아짐)

## [Demo] Phong Illumination

- http://www.cs.toronto.edu/~jacobson/phong-demo/

- “Phong Shading”을 선택한 후 다음 요소들을 바꿔보며 실험
  - ambient, diffuse, specular 계수 및 색상
  - 광택 계수 (shininess)
  - 물체 종류, 광원 위치, 배경색 등도 변경 가능

## Quiz 2

# Polygon Shading

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

- 삼각형 <p₁, p₂, p₃>의 법선은 다음과 같이 계산됨:
  - `v₁ × v₂`
    - v₁: p₁에서 p₂로 향하는 벡터
    - v₂: p₁에서 p₃로 향하는 벡터

- **그래서 정점의 시계 반대 방향(counterclockwise) 나열이 중요함**
  - Face normal의 방향이 표면 "바깥쪽"을 향하게 하기 위해

> *이 이미지는 한양대 정재형 교수 강의자료에서 인용됨*

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

> Henri Gouraud (1944–)

(이미지: Flat shading vs Gouraud shading 비교)

- 문제점: **specular highlight가 부정확하게 표현됨**
  - 하이라이트가 왜곡되거나 아예 사라질 수 있음
  - 다각형 수를 늘리면 이러한 문제는 줄어듦

## Phong Shading

- 꼭짓점마다 하나의 vertex normal 사용
- 다각형 내부는 vertex normal을 보간(interpolation)
- 보간된 normal을 사용하여 **각 픽셀에서 색상을 계산**

> Bùi Tường Phong (1942–1975)

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

## Normal Vector Transformation

- 어떤 표면 위 점들의 집합에 affine 변환 M이 적용되면,
  - **접선 벡터(tangent)는 M에 의해 변환됨**
    - 점 간의 차이도 M에 의해 변환되기 때문

- 그러나 **법선 벡터(normal)는 M에 의해 변환되어서는 안 됨**
  - 법선은 접선에 수직이어야 하기 때문

(그림 설명)  
- 위: 도형에 M 적용 → OK  
- 중간: 법선에 M 적용 → (X)  
- 아래: 법선에 다른 변환 적용 → (O)

(그림 및 수식 설명)

```
t · n = tᵀn = 0 (기존 수직 조건)

원하는 조건: Mt · Xn = tᵀ Mᵀ Xn = 0  
→ X = (Mᵀ)⁻¹ 로 설정  
→ Mt · Xn = tᵀ Mᵀ (Mᵀ)⁻¹ n = tᵀn = 0
```

- 결론:  
  **X = (Mᵀ)⁻¹**

- 기호:
  - t: 접선 벡터  
  - n: 법선 벡터

<home/>