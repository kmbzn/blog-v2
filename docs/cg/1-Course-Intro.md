# 1 - Course Intro

## Course Information

- Course Homepage  
  - LMS 강의 홈페이지: portal.hanyang.ac.kr 또는 learning.hanyang.ac.kr  
  - 슬라이드는 Lecture Contents(강의자료 탭)에 업로드됨  
    - 보통 강의 직전에 업로드되므로, 강의 시작 시 미리 다운로드할 것  
  - 작년 슬라이드를 참고하고 싶다면 [링크](https://cgrhyu.github.io/courses/2023-spring-cg.html) 사용

## What is Computer Graphics?

- 컴퓨터를 이용하여 시각적 콘텐츠를 생성하고, 조작하며, 화면에 표시하는 기술을 연구하는 학문
  - Computer Graphics는 수학적 또는 기하학적 모델을 시각적 이미지 또는 애니메이션(이미지의 연속)으로 변환함  
  - 반대로, Computer Vision은 이미지나 영상으로부터 의미 있는 정보를 추출함
- Movies & Games
  - Encanto  
  - Red Dead Redemption 2
- Engineering
  - Solidworks
- Natural Science
  - Foldit (단백질 접힘 시뮬레이션)
- Medical Science
  - CT 이미지와 Volume Rendering

## Course Overview

- Computer Graphics: 수학을 시각화하는 기술
- 이 강의에서 배우는 내용:  
  - 기본적인 computer graphics 및 수학 개념 탐구  
  - modern OpenGL 사용법 학습
- 이 강의에서 배우지 않는 내용:  
  - 고급 computer graphics 기법  
  - legacy OpenGL 사용법
- "기초 computer graphics 개념"의 구현 예시로 다음을 활용함:
  - WebGL 온라인 데모 (강의)
  - modern OpenGL API (실습)
  - Blender: 오픈소스 3D 그래픽 툴 (가끔 사용)
  - 이러한 예시들은 개념을 더 명확히 이해하는 데 도움을 줌

## Prerequisites

- 선형대수학에 대한 기본 지식  
  - 벡터 및 행렬의 개념과 연산에 대한 이해  
    - 예: 행렬-행렬 곱, 행렬-벡터 곱, 항등 행렬, 내적, 외적 등  
  - 위 내용들을 알고 있다면 이 수업을 수강할 준비가 된 것임
- 프로그래밍 기술의 기본 지식  
  - 본 강의에서는 Python 사용
- 예술적 감각은 필요 없음!

## Textbook

- 교재: 강의 슬라이드

## Schedule (subject to change)

| Week | Topic                                      | Date    |
|------|--------------------------------------------|---------|
| 1    | 1 - Course Intro / 1 - Lab - Env. Setting  | 3/6     |
| 2    | 2 - Rendering Basics / 2 - Lab - Hello Triangle! | 3/13    |
| 3    | 3 - Transformations / 3 - Lab - Sending Data to Shaders | 3/20 |
| 4    | 4 - Affine Space / Frame / Matrix / 4 - Lab | 3/27    |
| 5    | 5 - Vertex Processing 1 / 5 - Lab           | 4/3     |
| 6    | 6 - Vertex Processing 2 / 6 - Lab           | 4/10    |
| 7    | 7 - Hierarchical Modeling, Mesh / 7 - Lab   | 4/17    |
| 8    | 8 - Lighting / 8 - Lab                      | 4/24    |
| 9    | Midterm Exam                                | 5/1     |
| 10   | 9 - Orientation & Rotation / 9 - Lab        | 5/8     |
| 11   | 10 - Character Animation / 10 - Lab         | 5/15    |
| 12   | 11 - Curves / 11 - Lab                      | 5/22    |
| 13   | 12 - More Lighting, Texture / 12 - Lab      | 5/29    |
| 14   | 13 - Scan Conversion, Visibility / 13 - Lab | 6/5     |
| 15   | Final Exam                                  | 6/18    |

## Lectures & Labs

- 강의와 실습은 같은 날에 함께 진행됨
- Lectures (교수 직접 진행)  
  - computer graphics의 기본 개념 강의  
  - 특정 라이브러리나 소프트웨어에 의존하지 않음
- Labs  
  - Part 1: modern OpenGL 강의 (교수 진행)  
  - Part 2: 조교의 도움을 받아 과제 수행
- 한 번의 [강의+실습] 세션은 총 4시간이며 중간 휴식 없음!

## Assignments

- 실습마다 과제가 있음
- 간단한 프로그래밍 과제  
  - 목표: 강의와 실습에서 배운 내용을 이해하고 구현  
  - 이해가 안 되는 부분은 TA에게 질문 가능
- 제출 방법:
  - LMS를 통해 제출
- 조교는 과제를 빠르게 검토한 후, LMS에 통과 여부를 SpeedGrader로 comment
  - 통과 시: 교실을 나가도 됨  
  - 불합격 시: 코드를 수정하고 다시 제출

## Assignments - Grading

- 과제 제출 (또는 재제출)은 실습 시간 내 15:45 이전까지  
  - 최종 통과 시 → 100점  
  - 세션 이후에도 재제출 요청 가능
- 실습 시간 이후 재제출 시  
  - 재제출 요청 불가  
  - 조건을 만족한 항목에 대해 부분 점수 부여  
  - 10점 감점
- 당일 23:59 이후 제출: 불가

## Projects

- 총 3개의 프로젝트가 주어짐  
  - 개인 프로젝트이며, 팀 프로젝트 아님
- 난이도가 높은 프로그래밍 과제가 주어짐
- 마감 기한은 프로젝트가 주어진 후 2\~3주 후
- 제출 방법:  
  - LMS를 통해 제출

## Policy for Projects

- **기한 초과 제출 시 점수 없음**  
  - 기한 전에 반드시 제출할 것
- **표절 시 점수 없음**  
  - A가 B의 코드를 복사하면 **A와 B 모두 0점**
  - A, B, C가 인터넷에서 동일 코드를 복사하면 **전원 0점 처리**

## Grading

| 항목          | 비율   |
|--------------|--------|
| Midterm exam | 37.5%  |
| Final exam   | 37.5%  |
| Projects     | 15%    |
| Assignments  | 5%     |
| Attendance   | 5%     |

- 강의 + 실습 포함 총 4시간 세션 기준
  - **결석 5회 이상일 경우 → F**
- **중간고사 or 기말고사 결시 → F**

## Grading Policy

- 기본 원칙: 점수 간 차이가 클 경우 구간별로 명확히 등급을 구분

- 등급 기준:

  | 등급 | 비율         |
  |------|--------------|
  | A    | 20% ~ 25%    |
  | B    | 25% ~ 35%    |
  | C    | 40%          |

- **성적은 이번 학기 두 개의 computer graphics 수업 전체 학생을 통합하여 계산함**

## \[Important\] Midterm & Final Exams

- 시험은 아래 일정에 진행되며,  
  **정해진 시간에 시험을 볼 수 없는 학생은 수강하지 말 것**
- **중간고사: 5월 7일 (수) 6:00\~8:00 PM**  
- **기말고사: 6월 18일 (수) 6:00\~8:00 PM**

## Language

- 수업은 주로 영어로 진행
- 하지만 가장 중요한 목표는 학생들의 **이해도 향상**이므로  
  **중요한 슬라이드는 한국어로 풀어서(paraphrase) 설명**
- 실습 (Part 2)에서는 조교가 전체 공지 시 영어 사용  
  - 개인적으로는 한국어 또는 영어로 질문 가능

## Questions – Slido.com

- 강의 후, LMS의 "Q&A 게시판"에 질문 작성  
  - 조교가 최소 하루 1번 이상 확인하고 답변
- 강의 중에는 온라인 익명 Q&A 플랫폼: **slido.com** 사용

## Just Try Asking a Question!

- 접속: [slido.com](https://www.slido.com/)  
- 참여: **#cg-ys**  
- 로그인 없이 사용 가능
- **slido page는 북마크하지 말 것**  
  - 매주 새로운 이벤트가 생성되므로
- **질문은 영어로 자유롭게!**

## Questions – Slido.com

- slido.com에서는 다음이 가능함:
  - 자신의 질문을 **익명으로 작성**
  - 다른 질문에 **추천(upvote)**
- **slido Q&A는 교수의 강의 및 실습 시간에만 사용**  
  - 강의 또는 실습 종료 후에는 사용 금지
  - 실습 TA 시간에는 사용 금지
  - 문서 형태의 답변은 제공하지 않음
- 질문은 반드시 **익명으로 작성**
  - 이름 대신 blank name으로 작성

## Quiz & Attendance – Slido.com

- 각 강의당 퀴즈 문제 3개 출제 (slido.com polls 사용)
- 문제는 매우 간단하며, **2분 이내로 제출해야 함**
- **출석은 퀴즈 제출을 기준으로 측정됨**

## Quiz – Slido.com

- 반드시 다음 형식으로 답안을 제출해야 함:
  - `학번: 정답`  
    - 예: `2023123456: 4`
- **정답 여부는 출석과 무관함**

- 출석 판정 기준:

  | 구분      | 조건                                                                  |
  |-----------|------------------------------------------------------------------------|
  | Attendance | 제출 횟수 3회 && 실제 강의실에 있음                                     |
  | Late       | 제출 횟수 1~2회 && 실제 강의실에 있음                                   |
  | Absence    | 제출 횟수 0회 또는 제출했으나 강의실에 없음                             |

- **지각 3회는 결석 1회로 처리**

## Quiz & Attendance – Slido.com

- **출석하지 않은** 상태에서 **퀴즈만 제출하는** 경우 **적발 시**  
  - 이전 강의도 무단 결석한 것으로 간주
- → **두 번의 강의 모두 결석**으로 처리!

## About Laptop

- 강의와 실습에 **노트북 지참 필수**
  - 강의 슬라이드에는 WebGL 데모 포함 → 노트북으로 실행하며 수강해야 함
  - 실습 시간에는 노트북으로 과제를 수행함
  - **노트북 대여가 필요한 경우**, 이메일로 조교에게 다음 주차까지 요청  
    - 단, 대여 노트북은 오래된 기종이므로 **가급적 개인 노트북 사용 권장**
- **노트북은 OpenGL 3.3 이상 지원 필수**  
  - OpenGL 3.3 Core Profile 사용 예정

## Checking OpenGL Version

- **Windows / Mac**  
  - “OpenGL Extensions Viewer” 사용  
    - [support.esri.com/en/technical-article/000011375](https://support.esri.com/en/technical-article/000011375)
- **Ubuntu**  
  - `glxinfo` 사용 (mesa-utils 설치 필요)
    ```bash
    sudo apt-get install mesa-utils
    glxinfo | grep version
    ```
  - 출력 결과에서 **‘core profile’ 버전** 확인

- **Intel 그래픽 지원 여부 확인**  
  - [intel.com/content/www/us/en/support/articles/000005524/graphics.html](https://www.intel.com/content/www/us/en/support/articles/000005524/graphics.html)  
  - **2011년 이전 출시된 일부 구형 Intel CPU는 OpenGL 3.3을 지원하지 않음**

## Classroom Etiquette

- **수업 중 다른 학생에게 피해를 주는 행동은 하지 말 것**  
  예시:
  - 노트북으로 다른 작업 (예: 게임)
  - 스마트폰 장시간 사용
  - 사적인 대화
  - 책상에서 잠자기

## My Recommendation

- **다음과 같은 학생에게는 이 수업을 추천하지 않음**  
  - 쉽게 좋은 성적을 받고 싶은 학생  
  - 유창한 영어 강의를 기대하는 학생

- **다음과 같은 학생에게는 이 수업을 추천함**  
  - 영화나 게임에서 장면이 어떻게 rendering되는지 궁금한 학생  
  - 물체나 캐릭터의 움직임에 관심 있는 학생  
  - 코드로 무언가를 시각화하는 것을 좋아하는 학생  
  - computer graphics에 열정이 있는 학생

## Lab Session

- **오늘은 실습 세션이 없음**
- 그러나 다음 강의를 따라가려면  
  - "1 - Lab - Environment Setting.pdf"를 참고하여 **환경 설정을 완료해야 함**
- *Assignment 1 ("1 - Assignment.pdf")를 다음 강의 전까지 LMS로 제출할 것*

## Lastly...

- 위 모든 정책에 동의한다면, **다음 강의에서 봅시다!**
- 동의하지 않는다면, **다른 수업 수강을 고려해주세요.**