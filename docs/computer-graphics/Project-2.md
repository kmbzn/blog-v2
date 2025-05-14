# Computer Graphics Project 2: Obj viewer

**Handed out**: April 24, 2025  
**Due**: 2025년 5월 14일 23:59 (기한 초과 제출은 **무점수** 처리됨)

- LMS 강의실 > 주차학습 > 8주차 > Project 2
- 제출 파일은 아래 예시와 같이 zip 파일로 압축하세요. zip 파일 이름은 자유롭게 지정 가능합니다.
  - 예시: `submission.zip`
    - `main.py`
    - ...
    - `report.pdf`
- 프로그램은 여러 개의 Python 소스 파일로 구성될 수 있으나, **진입점은 반드시 `main.py`** 여야 합니다.
- 즉, 다음 명령어로 실행 가능해야 합니다:
  ```bash
  python main.py
  ```

---

## 1. 과제 목표: 여러 개의 obj 메쉬를 표시할 수 있는 obj 파일 뷰어 구현

- 하나의 프로그램에서 모든 요구사항을 충족해야 합니다. 각 요구사항을 별도의 프로그램으로 구현할 필요는 없습니다.
- 창 크기는 (800, 800)일 필요는 없으며, **메쉬가 잘 보일 정도로 충분히 크게 설정**하면 됩니다.
- OpenGL 3.3 Core Profile을 사용해야 하며, 다음 조건을 충족해야 합니다:
  - Python 코드에 다음 설정 포함
    ```python
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3)
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3)
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE)
    ```
  - 셰이더 코드의 첫 줄:
    ```
    #version 330 core
    ```
  - 위 조건을 지키지 않으면, **리포트를 제외한 모든 항목에 점수가 부여되지 않습니다.**

**총점**: 110점

---

## 2. 구현 요구사항

### A. 카메라 조작 (10점)
- Project 1에서 사용한 카메라 조작 방식 그대로 사용

### B. obj 파일 로딩 및 렌더링 (총 70점)

- **Drag & Drop 기능 구현 (필수)**
  - glfw의 `glfwSetDropCallback` 사용  
  - 참고: [drop_callback 문서](https://www.glfw.org/docs/latest/input_guide.html#path_drop)
  - 이 기능이 구현되지 않으면 **“Load and render multiple obj files”에 대한 점수 없음**

- **파일 로드 후 다음 정보 출력 (10점)**
  - 파일 이름
  - 총 face 개수
  - 정점 3개인 face 개수
  - 정점 4개인 face 개수
  - 정점 4개 초과인 face 개수

- **파일 파싱 및 메쉬 렌더링 (40점)**
  - vertex position, vertex normal, face 정보만 파싱
  - `vt`, `mtllib`, `usemtl`, `o`, `s` 태그는 무시
  - 다음 obj 파일들을 문제없이 로딩 가능해야 함:
    - `cube-tri.obj`
    - `sphere-tri.obj`
    - `cylinder-tri.obj`

- **다중 obj 파일 지원 (10점)**
  - 이미 렌더링 중인 A.obj에 대해, B.obj를 드래그 앤 드롭하면 **X축 +2 단위로 떨어진 위치에 배치**
    - 예: x 위치 0 → 2 → 4 → ...

- **다양한 형태의 polygon 지원 (10점)**
  - 삼각형, 사각형, 4개 초과 정점 polygon 혼합된 경우 렌더링 가능해야 함
  - `glDrawArrays()` 또는 `glDrawElements()` 사용
  - 반드시 **triangulation 알고리즘 구현 필요**
  - 다음 파일들이 로딩 및 렌더링 가능해야 함:
    - `cube-tri-quad.obj`
    - `sphere-tri-quad.obj`
    - `cylinder-tri-quad-n.obj`

### C. 조명 및 기타 효과 (20점)

- **Phong Illumination + Phong Shading 구현 필수**
  - 조명 및 재질 파라미터는 자유롭게 선택

---

## 3. 리포트 제출 (10점)

- 최대 2페이지의 pdf 형식
- Word로 작성 권장
- 반드시 아래 내용 포함:
  - 구현한 요구사항 목록 (5점)
  - **샘플 obj 파일이 아닌** 사용자 obj 파일로 렌더링한 결과 스크린샷 몇 장 (5점)

> 길게 작성할 필요 없음. 위 항목만 간단히 작성하면 됨. 한국어/영어 모두 허용.

---

## 4. 실행 환경

- Python 3.8 환경에서 다음 패키지만 설치되어 있어야 함:
  - `NumPy`, `PyOpenGL`, `glfw`, `PyGLM`
- 이벤트 처리 및 OpenGL context는 반드시 **glfw**만 사용
- glut 사용 금지
- 이 조건을 지키지 않으면 **리포트를 제외한 채점 불가**

---

## 5. 제출할 항목

- zip 파일 안에 포함되어야 할 항목:
  - `.py` 파일들 (진입점은 `main.py`)
  - `.pdf` 리포트 파일

---

## 6. 샘플 obj 파일 설명

| 파일명                   | 설명                                       |
|-------------------------|--------------------------------------------|
| `cube-tri.obj`          | 삼각형만 포함된 큐브                       |
| `cube-tri-quad.obj`     | 삼각형 + 사각형 포함 큐브                 |
| `sphere-tri.obj`        | 삼각형만 포함된 구                         |
| `sphere-tri-quad.obj`   | 삼각형 + 사각형 포함 구                   |
| `cylinder-tri.obj`      | 삼각형만 포함된 원기둥                    |
| `cylinder-tri-quad-n.obj` | 삼각형, 사각형, 그 외 polygon 포함 원기둥 |

---

## 7. 추가 참고 사항

- Python용 glfw에서 `drop_callback`은 인자가 다릅니다:
  ```python
  def drop_callback(window, paths):  # paths는 파일 경로 문자열 리스트
  ```
- obj 포맷 참고: [Wavefront .obj 파일 포맷 위키백과](https://en.wikipedia.org/wiki/Wavefront_.obj_file)
- Python의 문자열 메서드 중 `split()`이 파싱에 유용합니다.