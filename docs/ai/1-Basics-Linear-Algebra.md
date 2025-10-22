# 1. Basics; Linear Algebra

## 개요
- 선형대수학(Linear Algebra) 간략 검토
- 본 강의와 가장 관련 깊은 핵심 개념에 초점

# 기본 개념 및 표기법 (Basic Concepts and Notation)

## 선형대수학 (Linear Algebra)
> 선형 방정식(linear equations) 집합을 **간결하게 표현하고 연산하는 방법**을 제공

$$
\begin{cases}
4x_1 - 5x_2 = -13 \\
-2x_1 + 3x_2 = 9
\end{cases} \Rightarrow Ax = b
$$
$$
A = \begin{bmatrix} 4 & -5 \\ -2 & 3 \end{bmatrix}, b = \begin{bmatrix} -13 \\ 9 \end{bmatrix}
$$

## 스칼라 (Scalars)
- 단일 숫자(single number)
- 정수(Integers), 실수(real numbers), 유리수(rational numbers) 등...
- 이탤릭체 ($a$, $n$, $x$) 로 표기

## 벡터 (Vectors)
- 1차원 숫자 배열(1-D array of numbers)
- **소문자 볼드 로마자** 표기
- 대부분 열 벡터(column vector)로 표현
    - (행 벡터(row vector) $\mathbf{x}^T = (x_1, x_2, \dots, x_n)$과 대조)

$$\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ \vdots \\ x_n \end{bmatrix}$$
- 실수(real), 이진수(binary), 정수(integer) 등 가능
- 타입 및 크기 표기 예: $\mathbf{x} \in \mathbb{R}^n$

## 행렬 (Matrices)
- 2차원 숫자 배열(2-D array of numbers)
- 타입 및 형태(shape) 표기 예: $m$행 $n$열 행렬 $A \in \mathbb{R}^{m \times n}$
- $A$의 $j$번째 열: $\mathbf{a}_j$ 또는 $\mathbf{A}_{:,j}$
- $A$의 $i$번째 행: $\mathbf{a}_i^T$ 또는 $\mathbf{A}_{i,:}$

## 텐서 (Tensors)
- 숫자 배열
- 0차원: 스칼라(scalar)
- 1차원: 벡터(vector)
- 2차원: 행렬(matrix)
- 또는 그 이상의 차원 가능

## 행렬 곱셈 (Matrix Multiplication)
- $A \in \mathbb{R}^{m \times n}$과 $B \in \mathbb{R}^{n \times p}$의 곱 $C = AB \in \mathbb{R}^{m \times p}$
  $$C_{ij} = \sum_{k=1}^n A_{ik} B_{kj}$$

## 벡터-벡터 곱 (Vector-Vector Products)
- 두 벡터 $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$에 대해, 내적(inner product) 또는 점곱(dot product) $\mathbf{x}^T \mathbf{y}$는 실수
    $$\mathbf{x}^T \mathbf{y} \in \mathbb{R} = \begin{bmatrix} x_1 & x_2 & \dots & x_n \end{bmatrix} \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_n \end{bmatrix} = \sum_{i=1}^n x_i y_i$$
- $\mathbf{x}^T \mathbf{y} = \mathbf{y}^T \mathbf{x}$
- 벡터 $\mathbf{x} \in \mathbb{R}^m$, $\mathbf{y} \in \mathbb{R}^n$에 대해 (크기가 같을 필요 없음), $\mathbf{x} \mathbf{y}^T \in \mathbb{R}^{m \times n}$는 외적(outer product)

## 행렬-벡터 곱 (Matrix-Vector Products)
- 행렬 $A \in \mathbb{R}^{m \times n}$과 벡터 $\mathbf{x} \in \mathbb{R}^n$의 곱 $\mathbf{y} = A \mathbf{x} \in \mathbb{R}^m$
- 행렬-벡터 곱에 대한 다른 관점
- $\mathbf{y}$의 $i$번째 원소 $y_i$는 $A$의 $i$번째 행과 $\mathbf{x}$의 내적($y_i = \mathbf{a}_i^T \mathbf{x}$)
- $\mathbf{y}$는 $A$의 열 벡터(columns)의 선형 결합(linear combination)이며, 선형 결합의 계수는 $\mathbf{x}$의 원소
- 행 벡터를 왼쪽에 곱하기: $\mathbf{y}^T = \mathbf{x}^T A$ (단, $A \in \mathbb{R}^{m \times n}$, $\mathbf{x} \in \mathbb{R}^m$, $\mathbf{y} \in \mathbb{R}^n$)
- $\mathbf{y}^T$의 $i$번째 원소는 $\mathbf{x}$와 $A$의 $i$번째 열의 내적
- $\mathbf{y}^T$는 $A$의 행 벡터(rows)의 선형 결합이며, 선형 결합의 계수는 $\mathbf{x}$의 원소

## 행렬-행렬 곱 (Matrix-Matrix Products)
- 행렬-행렬 곱을 보는 4가지 관점
    1. 벡터-벡터 곱 (vector-vector products)의 집합
        - $C$의 $(i, j)$번째 원소는 $A$의 $i$번째 행과 $B$의 $j$번째 열의 내적
    2. 외적 (outer products)의 합
        - $A$를 열 벡터로, $B$를 행 벡터로 표현
        - $AB$는 모든 $i$에 대해 $A$의 $i$번째 열과 $B$의 $i$번째 행의 외적의 합
    3. 행렬-벡터 곱 (matrix-vector products)의 집합
        - $B$를 열 벡터로 표현하면, $C$의 열들은 $A$와 $B$의 열들의 행렬-벡터 곱($\mathbf{c}_i = A \mathbf{b}_i$)
    4. 다른 행렬-벡터 곱 (matrix-vector products)의 집합 (행 벡터-행렬 형태)
        - $A$를 행 벡터로 표현하면, $C$의 행들은 $A$의 행들과 $B$의 행렬-벡터 곱($\mathbf{c}_i^T = \mathbf{a}_i^T B$)
- 이러한 다양한 관점의 직접적인 이점은 스칼라(scalars) 대신 벡터(vectors) 수준/단위에서 연산 가능
- 행렬 곱셈의 몇 가지 기본 속성
- 결합 법칙(associative): $A(BC) = (AB)C$
- 분배 법칙(distributive): $A(B+C) = AB + AC$
- 일반적으로 교환 법칙(commutative) 불성립: $AB \neq BA$

# 연산 및 속성 (Operations and Properties)

## 항등 행렬 (Identity Matrix) & 대각 행렬 (Diagonal matrix)
- 항등 행렬 $I \in \mathbb{R}^{n \times n}$: 주 대각선 원소는 1, 나머지 원소는 0인 정방 행렬(square matrix)
- 대각 행렬(Diagonal matrix): 주 대각선 이외의 모든 원소가 0인 행렬
    $$D = \text{diag}(d_1, d_2, \dots, d_n)$$

## 전치 (Transpose)
- 행과 열을 뒤집은(flipping) 결과
- 속성
    - $(A^T)^T = A$
    - $(AB)^T = B^T A^T$
    - $(A+B)^T = A^T + B^T$

## 대칭 행렬 (Symmetric Matrices)
- 정방 행렬 $A \in \mathbb{R}^{n \times n}$이 $A = A^T$이면 대칭
- $A = -A^T$이면 반대칭(anti-symmetric)
- 임의의 행렬 $A \in \mathbb{R}^{n \times n}$에 대해, $A + A^T$는 대칭, $A - A^T$는 반대칭
- 따라서, 임의의 정방 행렬 $A \in \mathbb{R}^{n \times n}$은 **대칭 행렬과 반대칭 행렬의 합**으로 표현 가능
- 크기 $n$인 모든 대칭 행렬의 집합은 $\mathbb{S}^n$으로 표기
    - ($A \in \mathbb{S}^n$은 $A$가 $n \times n$ 대칭 행렬임을 의미)

## 대각합 (Trace)
- 정방 행렬 $A \in \mathbb{R}^{n \times n}$의 대각합 $\text{tr}(A)$: 대각선 원소의 합
  $$\text{tr}(A) = \sum_{i=1}^n A_{ii}$$
- 속성
    - $\text{tr}(A) = \text{tr}(A^T)$
    - $\text{tr}(A + B) = \text{tr}(A) + \text{tr}(B)$
    - $t \in \mathbb{R}$, $\text{tr}(tA) = t \text{tr}(A)$
    - $\text{tr}(AB) = \text{tr}(BA)$
    - $\text{tr}(ABC) = \text{tr}(BCA) = \text{tr}(CAB)$

## Norms (놈)
- 벡터 $\mathbf{x}$의 norm은 비공식적으로 벡터의 "길이(length)"를 측정하는 척도
- 흔히 사용되는 유클리드 norm(Euclidean norm) 또는 $l_2$ norm
    $$\Vert \mathbf{x} \Vert_2 = \sqrt{\sum_{i=1}^n x_i^2}$$
- $\Vert \mathbf{x} \Vert_2^2 = \mathbf{x}^T \mathbf{x}$
- 보다 공식적으로, norm은 다음 4가지 속성을 만족하는 함수 $f: \mathbb{R}^n \to \mathbb{R}$
    1. 비음성(non-negativity)
        - 모든 $\mathbf{x} \in \mathbb{R}^n$에 대해, $f(\mathbf{x}) \ge 0$
    2. 명확성(definiteness)
        - $f(\mathbf{x}) = 0$은 $\mathbf{x} = \mathbf{0}$인 경우에만 성립
    3. 동차성(homogeneity)
        - 모든 $\mathbf{x} \in \mathbb{R}^n$, $t \in \mathbb{R}$에 대해, $f(t\mathbf{x}) = |t| f(\mathbf{x})$
    4. 삼각 부등식(triangle inequality)
        - 모든 $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$에 대해, $f(\mathbf{x} + \mathbf{y}) \le f(\mathbf{x}) + f(\mathbf{y})$

## $l_p$ norm
$$\Vert \mathbf{x} \Vert_p = \left( \sum_{i} |x_i|^p \right)^{1/p}$$
- L1 norm ($p=1$): $\Vert \mathbf{x} \Vert_1 = \sum_{i} |x_i|$
- 최대 norm (Max norm) ($p=\infty$): $\Vert \mathbf{x} \Vert_{\infty} = \max_{i} |x_i|$
  
## 프로베니우스 norm (Frobenius norm) (행렬에 대한 norm)

## 선형 독립 (Linear Independence)
- 벡터 집합 $\{\mathbf{x}_1, \mathbf{x}_2, \dots, \mathbf{x}_n\} \subset \mathbb{R}^m$은, 어떤 벡터도 나머지 벡터들의 선형 결합으로 표현될 수 없을 때 선형 독립(linearly independent)
- 선형 종속(linearly dependent) 예: $\mathbf{x}_3 = -2\mathbf{x}_1 + \mathbf{x}_2 \to$ 선형 종속

## 계수 (Rank)
- 행렬 $A \in \mathbb{R}^{m \times n}$의 열 계수(column rank): $A$의 열 벡터 중 선형 독립 집합을 구성하는 가장 큰 부분 집합의 크기
- 간단히 $A$의 선형 독립 열의 수
- 행 계수(row rank): $A$의 행 벡터 중 선형 독립 집합을 구성하는 가장 큰 수
- 임의의 행렬 $A \in \mathbb{R}^{m \times n}$에 대해, 열 계수는 행 계수와 같음 $\Rightarrow$ 이를 총칭하여 $A$의 계수($\text{rank}(A)$)
- 속성
- $A \in \mathbb{R}^{m \times n}$에 대해, $\text{rank}(A) \le \min(m, n)$. $\text{rank}(A) = \min(m, n)$이면 $A$는 완전 계수(full rank)
- $\text{rank}(A) = \text{rank}(A^T)$
- $\text{rank}(AB) \le \min(\text{rank}(A), \text{rank}(B))$
- $\text{rank}(A + B) \le \text{rank}(A) + \text{rank}(B)$

## 정방 행렬의 역행렬 (Inverse of a Square Matrix)
- 정방 행렬 $A \in \mathbb{R}^{n \times n}$의 역행렬 $A^{-1}$: $A^{-1} A = I = A A^{-1}$을 만족하는 유일한 행렬
- 모든 행렬이 역행렬을 갖는 것은 아님
- $A^{-1}$이 존재하면 $A$는 가역(invertible) 또는 비특이(non-singular), 그렇지 않으면 비가역(non-invertible) 또는 특이(singular)
- 역행렬을 가지려면 $A$는 완전 계수(full rank)이어야 함
- 속성
- $(A^{-1})^{-1} = A$
- $(AB)^{-1} = B^{-1} A^{-1}$
- $(A^{-1})^T = (A^T)^{-1}$

## 직교 행렬 (Orthogonal Matrices)
- 두 벡터 $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$이 $\mathbf{x}^T \mathbf{y} = 0$이면 직교(orthogonal)
- 벡터 $\mathbf{x} \in \mathbb{R}^n$이 $\Vert \mathbf{x} \Vert_2 = 1$이면 정규화됨(normalized)
- 정방 행렬 $U \in \mathbb{R}^{n \times n}$은 모든 열 벡터가 서로 직교하고 정규화되어 있으면 직교 행렬
- 이 열 벡터들은 정규 직교(orthonormal)
- 속성
- 직교 행렬의 역행렬은 전치 행렬 $U^T U = I = U U^T$
- 직교 행렬로 벡터에 연산해도 유클리드 norm(Euclidean norm)은 변하지 않음: $\Vert U\mathbf{x} \Vert_2 = \Vert \mathbf{x} \Vert_2$
    - $\Vert U\mathbf{x} \Vert_2^2 = (U\mathbf{x})^T (U\mathbf{x}) = \mathbf{x}^T U^T U \mathbf{x} = \mathbf{x}^T I \mathbf{x} = \mathbf{x}^T \mathbf{x} = \Vert \mathbf{x} \Vert_2^2$

## 스팬 (Span)
- 벡터 집합 $\{\mathbf{x}_1, \mathbf{x}_2, \dots, \mathbf{x}_n\}$의 스팬(span)은 **이 벡터들의 선형 결합으로 표현 가능한** 모든 벡터의 집합
- $\{\mathbf{x}_1, \mathbf{x}_2, \dots, \mathbf{x}_n\}$이 $n$개의 선형 독립 벡터 집합이면, $\text{span}(\{\mathbf{x}_1, \mathbf{x}_2, \dots, \mathbf{x}_n\}) = \mathbb{R}^n$
- $\mathbb{R}^n$의 임의의 벡터 $\mathbf{v}$는 $\mathbf{x}_1$부터 $\mathbf{x}_n$까지의 선형 결합으로 표현 가능

## 투영 (Projection)
- 벡터 $\mathbf{y} \in \mathbb{R}^m$을 $\{\mathbf{x}_1, \mathbf{x}_2, \dots, \mathbf{x}_n\} (\mathbf{x}_i \in \mathbb{R}^m)$의 스팬 위로 투영(projection)
- $\mathbf{v} \in \text{span}(\{\mathbf{x}_1, \mathbf{x}_2, \dots, \mathbf{x}_n\})$ 중에서 유클리드 norm $\Vert \mathbf{v} - \mathbf{y} \Vert_2$으로 측정했을 때 $\mathbf{y}$와 가장 가까운 벡터
- 투영 표기: $\text{Proj}(\mathbf{y}; \mathbf{x}_1, \mathbf{x}_2, \dots, \mathbf{x}_n) = \text{argmin}_{\mathbf{v} \in \text{span}(\{\mathbf{x}_1, \dots, \mathbf{x}_n\})} \Vert \mathbf{y} - \mathbf{v} \Vert_2$
    

## 투영 (Projection) & 치역 (Range)
- 행렬 $A \in \mathbb{R}^{m \times n}$의 치역(range) (또는 열 공간(columnspace)) $\mathcal{R}(A)$: $A$의 열 벡터들의 스팬
- $A$가 완전 계수(full rank)이고 $n < m$일 때, 벡터 $\mathbf{y} \in \mathbb{R}^m$를 $A$의 치역 위로 투영
    $$\text{Proj}(\mathbf{y}; A) = \mathbf{v}^* = \text{argmin}_{\mathbf{v} \in \mathcal{R}(A)} \Vert \mathbf{v} - \mathbf{y} \Vert_2 = A(A^T A)^{-1} A^T \mathbf{y}$$
- 증명 요약: $\mathbf{v} = A\mathbf{x}$, $\mathbf{v}^* = A\mathbf{x}^*$. $\mathbf{A}^T(\mathbf{v}^* - \mathbf{y}) = \mathbf{0}$. $\mathbf{A}^T(A\mathbf{x}^* - \mathbf{y}) = \mathbf{0}$. $\mathbf{x}^* = (A^T A)^{-1} A^T \mathbf{y}$. $\therefore \mathbf{v}^* = A\mathbf{x}^* = A(A^T A)^{-1} A^T \mathbf{y}$
- (!) 최소 제곱 추정(least squares estimation of parameters)과의 관계 (다음 수업)
- $A$가 단일 열 벡터 $\mathbf{a} \in \mathbb{R}^m$만 포함하는 특수 경우 (벡터를 직선 위로 투영)
    $$\text{Proj}(\mathbf{y}; \mathbf{a}) = \frac{\mathbf{a} \mathbf{a}^T}{\mathbf{a}^T \mathbf{a}} \mathbf{y}$$

## 영 공간 (Nullspace)
- 행렬 $A \in \mathbb{R}^{m \times n}$의 영 공간(nullspace) $\mathcal{N}(A)$: $A$를 곱했을 때 $\mathbf{0}$이 되는 모든 벡터의 집합
    $$\mathcal{N}(A) = \{\mathbf{x} \in \mathbb{R}^n: A\mathbf{x} = \mathbf{0}\}$$
- 참고 사항
- $\mathcal{R}(A)$의 벡터는 크기 $m$, $\mathcal{N}(A)$의 벡터는 크기 $n$. $\mathcal{R}(A^T)$와 $\mathcal{N}(A)$의 벡터는 모두 $\mathbb{R}^n$에 속함
- $\mathcal{R}(A^T)$와 $\mathcal{N}(A)$는 서로소 부분 집합이며, 함께 $\mathbb{R}^n$ 전체 공간을 스팬(span)
- 이러한 집합 유형을 직교 여 공간(orthogonal complements)이라고 함
- $\mathcal{R}(A^T) = \mathcal{N}(A)^{\perp}$ (참고: Gilbert Strang, Introduction to Linear Algebra, 5th Edition)

## 행렬식 (Determinant)
- 정방 행렬 $A \in \mathbb{R}^{n \times n}$의 행렬식(determinant)
    - $\det: \mathbb{R}^{n \times n} \to \mathbb{R}$ 함수, $|A|$ 또는 $\det(A)$로 표기
- 행렬식의 기하학적 해석
    - 행렬 $A$가 주어졌을 때
    - $A$의 행 벡터 $\mathbf{a}_1, \dots, \mathbf{a}_n \in \mathbb{R}^n$의 가능한 모든 선형 결합으로 형성된 $\mathbb{R}^n$의 점 집합 $S \subset \mathbb{R}^n$ (선형 결합 계수는 모두 0과 1 사이)
- $A$의 행렬식의 절댓값 $|A|$는 집합 $S$의 "부피(volume)" 측정값
- 예: $A = \begin{bmatrix} 1 & 3 \\ 3 & 2 \end{bmatrix}$. $\mathbf{a}_1 = \begin{bmatrix} 1 \\ 3 \end{bmatrix}$, $\mathbf{a}_2 = \begin{bmatrix} 3 \\ 2 \end{bmatrix}$. 행렬식 값 $|A| = -7$. 평행사변형의 넓이는 7
- $|A| = 0$은 $A$가 특이 행렬(singular) (즉, 비가역(non-invertible))인 경우에만 성립
  - $A$가 특이 행렬이면 완전 계수가 아니므로, 열 벡터는 선형 종속
- 정의
    - $A \in \mathbb{R}^{n \times n}$에 대해, $A_{\setminus i, \setminus j} \in \mathbb{R}^{(n-1) \times (n-1)}$는 $A$에서 $i$번째 행과 $j$번째 열을 **삭제하여** 얻은 행렬
- 행렬식의 일반적인 (재귀적) 공식
    $$|A| = \sum_{i=1}^n (-1)^{i+j} a_{ij} |A_{\setminus i, \setminus j}| \quad (\text{임의의 } j \in \{1, \dots, n\} \text{에 대해})$$
    $$= \sum_{j=1}^n (-1)^{i+j} a_{ij} |A_{\setminus i, \setminus j}| \quad (\text{임의의 } i \in \{1, \dots, n\} \text{에 대해})$$
  - $A \in \mathbb{R}^{n \times n}$에 대하여 이 공식을 완전히 전개하면, 총 $n!$ 개의 항 존재