# Computer Graphics Project 3: Bvh Viewer

제출 기한: 2025년 6월 8일 (23:59)  
**(기한 초과 제출은 점수 없음)**

- LMS 코스 홈 > Weekly Learning (주차별 학습) > Week 11 > Project 3  
- 파일을 zip으로 압축하여 다음과 같은 형식의 파일명을 사용하세요.  
  - 파일명은 자유롭게 지정해도 됩니다.

```
submission.zip
 ├─ main.py
 ├─ ...
 └─ report.pdf
```

- 프로그램은 여러 개의 Python 소스 파일로 구성될 수 있습니다.  
  하지만 `main.py`가 메인 모듈이어야 하며, 실행 명령은 다음과 같아야 합니다.

```
python3 main.py
```

## 1. 구현 내용

자신만의 bvh 뷰어를 구현하세요.

- 단일 프로그램에서 모든 요구사항을 구현해야 합니다.  
  이 프로젝트는 별도의 프로그램으로 요구하지 않습니다.

- 창의 해상도는 (800, 800)일 필요는 없습니다.  
  세부사항이 잘 보이도록 충분히 큰 해상도를 사용하세요.

### C. OpenGL 3.3 Core Profile을 사용해야 합니다

- Python 코드에 다음을 반드시 포함하세요:

```python
glfw.window_hint(GLFW_CONTEXT_VERSION_MAJOR, 3)
glfw.window_hint(GLFW_CONTEXT_VERSION_MINOR, 3)
glfw.window_hint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE)
```

- 쉐이더 코드의 첫 줄은 반드시 다음과 같아야 합니다:

```
#version 330 core
```

- **OpenGL 3.3 Core Profile을 사용하지 않으면 (예외: 리포트만 제출 시) 이 프로젝트에 대한 점수를 받을 수 없습니다.**

## 2. Requirements

### A. 카메라 조작 (10점)

- Project1에서 구현한 방식대로 카메라를 조작하세요.  
- **레퍼런스 그리드 평면도 함께 그리세요.**

### B. bvh 파일 불러오기 및 렌더링 (80점)

- **뷰어 창에 bvh 파일을 드래그 앤 드롭하면 하나의 파일만 로딩되어야 합니다.**  
  - 여러 개를 동시에 드롭해도 첫 번째 파일만 로드되어야 합니다.

- **bvh 파일을 읽고 skeleton (정지 포즈)만 렌더링하세요 (10점)**

  1. 파일을 열 때 캐릭터를 자동으로 애니메이션하지 마세요.  
     - skeleton (정지 포즈)만 렌더링하세요.

  2. HIERARCHY 섹션의 데이터만 사용해서 캐릭터를 그리세요.  
     - translation은 (0,0,0), rotation은 없도록 (단위 행렬)

  3. **박스 렌더링(box rendering)** 사용  
     - 점이나 선이 아니라 박스로 렌더링  
     - 조명은 Phong shading 사용  
     - "End Site" 링크는 실제 관절이 아니므로 무시하세요

- 예시 이미지로는 `sample-walk.bvh`의 정지 포즈가 제공됩니다.

### iii. 스페이스바로 애니메이션 (30점)

- 스페이스바를 누르면 모션을 재생하세요.

  - 각 프레임이 지나갈 때마다 다음 포즈를 박스로 표시  
  - 루프마다 프레임을 하나씩만 진행  
  - 마지막 프레임이 지나면 다시 첫 프레임부터 반복  
  - 박스 렌더링 유지

### iv. bvh 파일 로드 시 stdout(콘솔)에 다음 정보 출력 (10점)

1. 파일 이름  
2. 프레임 수  
3. FPS (1/frameTime)  
4. 관절 수 (root 포함)  
5. 모든 관절 이름 리스트

### C. OBJ 렌더링 모드 제공 (30점)

- `T` 키를 누르면 OBJ 렌더링 모드 진입

  1. 각 링크는 별도의 OBJ 파일로부터 메쉬로 렌더링  
     - 동일한 OBJ 파일을 반복 사용하면 안됨

  2. `T` 키가 눌렸을 때:
     - 미리 정의된 BVH 파일 (예: `run.bvh`)을 불러오고
     - 각 링크에 해당하는 OBJ 파일로 렌더링  
     - 링크 이름과 계층 구조는 BVH마다 다를 수 있음

  3. `.bvh`와 `.obj` 파일은 Python 소스와 같은 폴더에 두세요  
     - `os.path.join()` 사용 권장

```python
# 올바른 방식
file = open(os.path.join('data', 'run.bvh'))
```

- OBJ 메쉬도 조명은 Phong shading 사용

## 3. Report (15점)

- 최대 2페이지 분량의 docx 형식 문서 제출

### B. 리포트에 포함할 것

1. 구현한 요구사항 명시 (5점)  
2. 비디오 링크 첨부 (10점)  
   - 유튜브, Vimeo 등  
   - 애니메이션되는 skeleton 모델을 캡처한 영상  
   - **다음 사이트들에서 bvh 파일 다운로드 가능**:

     - http://motion.hahasoha.net/  
     - http://mocap.cs.sfu.ca/  
     - http://dancebci.eu/main/performances

   - **예시 파일(sample bvh)**은 이 항목에서 사용 불가  
   - 영상은 **공개 접근 가능**해야 점수 부여

- 리포트는 간결하게 작성 (영어 또는 한국어)

## 4. 실행 환경

- Python 3.8에서 실행 가능해야 하며,  
  사용 가능한 모듈은 다음으로 제한됨:
  - NumPy
  - PyOpenGL
  - glfw
  - PyGLM

- 기타 Python 모듈 사용 불가  
- **glfw만 이벤트 처리 및 OpenGL context 용도로 사용**

- 위 조건을 만족하지 않으면 TA PC에서 실행되지 않으므로  
  **리포트를 제외한 모든 점수를 받을 수 없습니다.**

## 5. 테스트용 파일

- `sample-walk.bvh`: 걷는 모션  
- `sample-spin.bvh`: 수직축 중심 회전

## 6. 제출물 목록 (압축된 zip 파일)

- `.py` 파일 (main.py 포함)  
- `.pdf` 리포트  
- `.bvh`, `.obj` 파일 (OBJ 렌더링용)  
- `.pdf` 리포트

## 7. 추가 정보

### A. drop_callback 함수 주의사항

- glfw Python 바인딩에서는 C버전과 다르게  
  `drop_callback(window, paths)`로만 호출됨  
  (paths는 파일 경로 리스트)

### B. 문자열 처리 팁

- Python의 `split()` 등 문자열 처리 함수는  
  bvh 파싱 시 매우 유용함