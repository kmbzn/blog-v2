# Implementing Augmented B+tree

- 이번 과제의 목표: 다음 두 가지 B+ tree 구현
1. Normal B+ tree
  - 강의 및 실습에서 다룬 기능을 가진 B+ tree 구현
2. Logical Deletion Applied B+ tree
  - 레코드 삭제 쿼리 시, 실제 삭제 대신 '삭제됨'으로 표시
  - 해당 레코드는 검색되지 않아야 함
  - B+tree application 종료 시, 실제 레코드 삭제 및 남은 레코드로 B+tree 재구성
  - 실제 레코드 삭제 및 B+tree 재구성을 위한 효율적인 방법 고안 및 구현

## Disk-based B+tree
- B+ tree의 노드 하나를 한 페이지(4KB)에 저장하는 방식으로 B+ tree 전체를 한 파일에 저장
- 파일은 Disk에 저장되므로, B+tree management 프로그램이 종료되어도 B+tree 구조와 내용 유지
- Data file은 Header Page, Internal Page, Leaf Page, Free Page 등으로 구성됨 (슬라이드 4 다이어그램 참조)

## Specification
- `main.c`는 다음 기능을 수행하도록 구현됨
  - `open`: `pathname`을 사용하여 기존 data file을 열거나, 없으면 새로 생성. (이후 command 처리)
  - `insert <key> <value>`: 'key/value' (record)를 data file의 올바른 위치에 삽입 (중복 key 불가)
  - `find <key>`: 입력 'key'를 포함하는 record를 찾아 일치하는 'value' 반환
  - `delete <key>`: 일치하는 record를 찾아 발견 시 삭제
- `libbpt.a` 라이브러리는 다음 API service 제공
  - `int open_table (char *pathname);` (이미 구현됨)
    - Data file 열기/생성, 성공 시 unique `table_id` 반환, 실패 시 음수 반환
  - `int db_insert (int64_t key, char * value);`
    - 'key/value' record 삽입, 성공 시 0, 실패 시 non-zero 반환
  - `char* db_find (int64_t key);`
    - 'key'를 포함하는 record 검색
    - (설명) 일치 'key' 발견 시, `ret_val`에 'value' 문자열 저장 후 0 반환
    - (설명) 실패 시 non-zero 값 반환
  - `int db_delete (int64_t key);`
    - 일치 record 삭제, 성공 시 0, 실패 시 non-zero 반환
- 모든 update operation (`insert` / `delete`)은 operation unit으로 data file에 적용되어야 함
- 다른 학생의 data file과도 호환되어야 하므로 data file layout 준수
- On-disk page size: `4096 Bytes` (고정)
- Record (key + value) size: `128 Bytes` (`8B` key + `120B` value) (고정)
- Page 종류: Header, Free, Leaf, Internal
- Header Page (Offset `0`-`4095`)
  - Metadata 포함
  - Free page number [0-7]: 첫 free page (없으면 `0`)
  - Root page number [8-15]: Root page 위치
  - Number of pages [16-23]: 총 페이지 수
- Free Page
  - Free page list로 연결 (Header page가 head)
  - Next Free Page Number [0-7]
- Page Header (Leaf/Internal 공통, `128` Bytes)
  - (`include/bpt.h`의 `node` structure 참조)
  - Parent page number [0-7]
  - Is Leaf [8-11]: (`0`: Internal, `1`: Leaf)
  - Number of keys [12-15]
- Leaf Page
  - Key/value record 포함 (key 정렬됨)
  - 예: $k_1 v_1~, k_2 v_2~, \dots~, k_{31} v_{31}$
  - Record 128B, Page 당 최대 `31`개 record (Order `32`)
  - Page Header 내 [120-127]: Right Sibling Page Number (가장 오른쪽은 `0`)
- Internal Page
  - 120B value 대신 8B page number (internal 또는 leaf) 저장
  - Page Header 내 [120-127]: One More Page Number (추가 page number)
  - Branching factor (order) = 249 (최대 248 entries, (4096 - 128) / (8+8) = 248)
  - Key 범위 해석 예: $A < k_1$, $k_1 \le B < k_2$, $\dots~, k_n \le X$

## Specification (Logical Deletion Applied B+ tree)
- `db_reorganize()` 함수 구현 필요
- `bptree2/main.c`의 `switch-case` 문 'q' case 내부에서 호출됨
- `bpt.h`에 선언하고 `bpt.c`에 정의
- 필요한 input parameters는 자유롭게 정의 가능
- `db_reorganize` 함수의 점수는 performance에 따라 달라지며, 실행 속도가 빠를수록 높은 점수 획득
- Logical Deletion B+ tree의 Leaf Page:
  - Reserved space를 삭제된 record 표시에 활용 가능
  - Page layout alignment (전체 페이지 크기, record 시작 offset 등)에 유의

## Specification
- 제공된 링크의 repository를 사용하여 과제 수행 후 github에 push
- `bptree1` 폴더: Normal B+ tree 구현
- `bptree2` 폴더: Logical deletion applied B+ tree 구현
- `README.md` 파일에 학번과 이름 반드시 기입
- Github repository 이름: `Assignment3_[학번]`
- Wiki는 LMS 과제 탭에 `assignment3_[학번]_[이름].pdf` 파일로 제출
- 제출 기한: 2025년 11월 20일 23시 59분
- 지연 제출 시 3시간마다 전체 득점에서 5% 감점 (예: 1분~3시간 지연 시 95점부터 시작)
- 제출 기한 60시간 이후 제출 시 0점
- Assignment 3 Quiz는 11월 21일 실시 예정 (변경 시 공지)
- `Makefile`은 절대 수정 금지
- `main.c`의 `open_table` 인자를 "test.db"에서 "DB[학번].db"로 수정하여 제출
- `main.c`의 다른 부분은 절대 수정 금지
- `bpt.c`에 적절한 내용을 추가/수정하여 과제 수행
- 제공된 Disk read/write API 활용 가능
- 과제 수행에 필요한 다른 함수는 직접 정의하여 사용
- Normal B+ tree 구현 코드를 Logical Deletion Applied B+ tree에 활용 가능
- 제공된 in-memory B+tree 코드를 참고

## Judging System
- 채점 환경 (Default Version)
  - `gcc (Ubuntu 11.4.0-1ubuntu1~22.04.1) 11.4.0`
  - `GNU Make 4.3`
- Version 차이로 인한 문제는 **책임지지 않음**
- 빌드 또는 실행이 되지 않을 경우 **0점** 처리
- 과제 수행 시 최대 메모리 사용량을 `1MiB`로 제한
- 메모리 사용량이 `1MiB`를 초과하는 경우 **큰 감점 부여** 가능

## Submit
- Code
  - Completeness: 명세의 요구 조건을 모두 올바르게 구현
  - Defensiveness: 발생 가능한 예외 상황에 대처
  - Comment: 코드에 **반드시** 주석 포함
- Wiki
  - Design: 요구 조건 구현 계획, 자료구조, 알고리즘, 이론 적용 방식 서술
  - Implement: 새롭게 구현/수정한 부분의 목적과 기존과의 차이점 서술 (코드 복사 금지)
  - Result: 정상 동작 실행 결과 첨부 및 동작 과정 설명
  - Trouble shooting: 과제 수행 중 겪은 문제와 해결 과정 서술 (미해결 시, 문제 내용과 해결 시도 서술)
  - `db_reorganize`에 대한 고찰: `db_reorganize` 성능 향상을 위해 고안한 내용 상세 서술