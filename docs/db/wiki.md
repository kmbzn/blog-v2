# Assignment2-2. 도서 관리 시스템 구현 - wiki

### 데이터베이스시스템응용: 2021024057 김병준

본 wiki는 도서 관리 시스템 애플리케이션(application)의 주요 기능 구현 사항과, 개발 과정에서 발생한 주요 troubleshooting(troubleshooting) 과정을 포함합니다.

## 1. 인증 (Authentication)
- Controller: `controllers/authController.js`

### 1.1. 핵심 기능
- 회원가입 (`postRegister`)
    - `username` (ID), `password`, `name` (실명), `role` (user/admin), `admin_code`를 사용자로부터 입력받습니다.
    - `role`이 'admin'일 경우 `admin_code` (`2021024057`) 일치 여부를 검증합니다.
- 비밀번호 암호화:
    - 개발의 편의를 위해 `salt` (솔트) 없이 `sha512` 알고리즘(algorithm)을 사용하는 단방향 해시(hash) 방식을 채택했습니다. (Node.js 내장 `crypto` 모듈(module) 사용)
    - DB의 `password` column(column)은 이에 따라 `VARCHAR(128)`로 구성하였습니다.
- 로그인 (`postLogin`)
    - `username`과 `password`를 받습니다.
    - 입력된 `password`를 `sha512`로 즉시 hashing하여 DB에 저장된 해시값과 비교합니다.
    - 성공 시 `session`에 `userId` (username 값), `username` (name 값), `role`을 저장합니다.
- 로그아웃 (`logoutAndGetHomePage`)
    - `req.session.destroy()`를 호출하여 세션을 종료합니다.

### 1.2. 주요 troubleshooting: login의 실패 및 debugging
- 문제 1: `user_id`와 `pw01` (초기 테스트 암호)을 정확히 입력해도 로그인 세션으로 넘어가지 않았습니다.
- 과정 1: `postLogin` 함수에 `console.log`를 추가하여 입력값(`req.body`)과 DB 조회 과정을 추적했습니다.
- 원인 1: 로그(log) 확인 결과, `req.body`에 `user_id`가 아닌 `username`이 들어오고 있었습니다. (`[Debug] 입력된 Body: { username: 'kmbzn', ... }`)
- 해결 1: 로그인 폼(form) (`login.ejs`)의 `<input>` 태그 `name` 속성(attribute)이 `username`으로 되어있는 것을 확인하고, 서버 로직(`postLogin`)이 `user_id` 대신 `username`을 받도록 수정했습니다.
- 문제 2: `Column 'user_type' cannot be null` 오류가 회원가입 시 발생했습니다.
- 원인 2: `postRegister` 컨트롤러(controller)는 `req.body.user_type`을 기대했지만, 폼 (`register.ejs`)의 `<select>` 태그에 `name="user_type"` 속성이 누락되어 서버로 값이 전송되지 않았습니다.
- 해결 2: `register.ejs` 파일의 User Role 드롭다운(dropdown) `<select>` 태그에 `name="user_type"`을 추가하여 문제를 해결했습니다.

## 2. DB schema 변경

개발 초기, 프로그램의 요구사항과 실제 DB 스키마(schema)의 attribute 이름이 불일치하여 다수의 오류가 발생했습니다. 이를 해결하기 위해 DB 스키마를 변경했습니다.
- 1. `USER` 테이블의 `user_id` -> `username` 변경 (가장 큰 변경점)
    - 문제: 프로그램은 로그인 ID로 `username`을 사용하려 했으나, DB의 PK는 `user_id`였습니다.
    - 과정: `ALTER TABLE USER CHANGE COLUMN user_id username ...` 시도 시 `ERROR 1068 (Multiple primary key defined)` (PK 중복) 및 `ERROR 1553 (Cannot drop index 'PRIMARY')` (외래 키 참조) 오류가 발생했습니다.
    - 원인: `USER` 테이블의 `user_id` (PK)를 `RENTAL`과 `RESERVATION` 테이블이 `FOREIGN KEY` (외래 키)로 참조하고 있었습니다.
    - 해결: 11단계 SQL 쿼리(query)를 통해 `FOREIGN_KEY_CHECKS=0`으로 설정하고, `RENTAL`과 `RESERVATION`의 외래 키를 `DROP`한 뒤, `USER`의 PK를 `DROP`하고, 3개 테이블(`USER`, `RENTAL`, `RESERVATION`)의 column명을 `RENAME COLUMN`으로 변경한 후, PK와 외래 키를 다시 설정하여 스키마를 일치시켰습니다. (`postLogin`, `postRegister` 등 모든 관련 코드도 `username`을 사용하도록 수정했습니다.)
- 2. `USER` 테이블의 `user_type` -> `role` 변경:
    - `ALTER TABLE USER RENAME COLUMN user_type TO role;` 쿼리를 실행하여 `role`로 명칭을 통일했습니다. (관련 컨트롤러 코드 수정 완료)
- 3. `USER` 테이블의 `email` 삭제 및 `student_id` 자동화:
    - 초기 설계 과정에선 사용자 이메일에 대한 저장도 필요할 것으로 판단하여 해당 column을 포함시켰습니다.
    - `ALTER TABLE USER DROP COLUMN email;`로 `email` column을 삭제했습니다.
    - `student_id`를 `BIGINT NOT NULL AUTO_INCREMENT UNIQUE KEY`로 변경하고, `AUTO_INCREMENT` 시작값을 `2025000001`로 설정했습니다.
    - `postRegister` 함수에서 `student_id` 관련 로직을 모두 제거하여 DB가 학번을 자동 부여하도록 수정했습니다. (개발 편의를 위해서)

## 3. 도서 관리 (Book Management)
- Controller: `controllers/bookController.js`

### 3.1. 핵심 기능
- 도서 목록 (`getBooksPage`) 도서 정보와 현재 대출 가능 재고(`available_quantity`) 등을 `JOIN`하여 조회하며, 검색 및 정렬 기능을 지원합니다.
- 도서 대출 (`postBorrowBook`) 사용자의 연체 여부, 대출 권수(최대 3권), 도서 재고, 중복 대출 여부(동일 `book_id` 불가)를 검증한 후 `RENTAL` 테이블에 추가하고 `BOOK_COPY` 상태를 'on\_loan'으로 변경합니다.
    - (이전 수정) 중복 대출 검증 로직을 `count > 1` (3권부터 불가)에서 `count >= 2` (2권 보유 시 3권째 불가)로 수정한 바 있습니다.
- 도서 반납 (`postReturnBook`) `RENTAL`의 `return_date`를 기록하고 `BOOK_COPY` 상태를 'available'로 변경합니다. 연체 반납 시 사용자의 다른 연체 내역이 없다면 `USER`의 `overdue_status`를 `FALSE`로 업데이트합니다.
- 도서 예약 (`postReserveBook`) `getBookInstances`로 조회 시 대출 가능 재고가 0일 경우 예약을 받습니다. 사용자의 연체 상태, 현재 대출 여부, 중복 예약 여부를 검증한 후 `RESERVATION` 테이블에 추가합니다.

### 3.2. 주요 troubleshooting: 도서 추가 실패
- 문제 1: `Error: Column 'author' cannot be null` 오류가 발생했습니다.
- 원인 1: `add-book.ejs` 폼의 `<select>` 태그 `name` 속성이 `authors` (복수형)로 되어있었으나, `postAddBook` 컨트롤러는 `req.body.author` (단수형)를 참조하고 있었습니다.
- 해결 1: `add-book.ejs`의 `name="authors"`를 `name="author"`로 수정하여 변수명을 일치시켰습니다.
- 문제 2: `Error: Incorrect integer value: 'id:5' for column 'category_id'` 오류가 발생했습니다.
- 원인 2: `Choices.js` 라이브러리(library)가 기존 항목 선택 시 `'id:5'` (문자열)를, 새 항목 입력 시 `'New Category'` (문자열)를 `value`로 전송했습니다. `postAddBook` 함수는 이 문자열을 파싱(parsing)하지 않고 `INT` 타입의 `category_id` column에 `INSERT`하려 했습니다.
- 해결 2: `postAddBook` 함수 내부에 `getOrCreateAuthorId`와 `getOrCreateCategoryId` 헬퍼 함수를 구현했습니다. 이 함수들은 `value`가 `'id:'`로 시작하면 숫자를 파싱하고, 일반 문자열이면 DB에서 검색하거나 새로 `INSERT`하여 유효한 `ID` 값을 반환하도록 로직을 수정하여 해결했습니다.

## 4. 사용자 및 카테고리 (admin)
- Controllers: `controllers/userController.js`, `controllers/categoryController.js`
- 사용자 관리 (`getUsersPage`) `USER` 테이블을 조회하며, `username`, `name`, `role` 기준의 동적 검색 기능을 구현했습니다.
- 카테고리 관리 (`postDeleteCategory`) 카테고리 삭제 시, `BOOK_CATEGORY` 테이블에서 해당 `category_id`를 참조하는 레코드를 먼저 `DELETE`하여 외래 키 제약 조건 오류를 방지한 후, `CATEGORY`에서 원본을 삭제합니다. (트랜잭션 처리)

## 5. [Demo] YouTube 영상 link 첨부

[https://youtu.be/rEnQjFZ19rk?si=n0fbnothZE7vTcBF](https://youtu.be/rEnQjFZ19rk?si=n0fbnothZE7vTcBF)