<template><div><h1 id="assignment2-2-도서-관리-시스템-구현-wiki" tabindex="-1"><a class="header-anchor" href="#assignment2-2-도서-관리-시스템-구현-wiki"><span>Assignment2-2. 도서 관리 시스템 구현 - wiki</span></a></h1>
<h3 id="데이터베이스시스템응용-2021024057-김병준" tabindex="-1"><a class="header-anchor" href="#데이터베이스시스템응용-2021024057-김병준"><span>데이터베이스시스템응용: 2021024057 김병준</span></a></h3>
<p>본 wiki는 도서 관리 시스템 애플리케이션(application)의 주요 기능 구현 사항과, 개발 과정에서 발생한 주요 troubleshooting(troubleshooting) 과정을 포함합니다.</p>
<h2 id="_1-인증-authentication" tabindex="-1"><a class="header-anchor" href="#_1-인증-authentication"><span>1. 인증 (Authentication)</span></a></h2>
<ul>
<li>Controller: <code v-pre>controllers/authController.js</code></li>
</ul>
<h3 id="_1-1-핵심-기능" tabindex="-1"><a class="header-anchor" href="#_1-1-핵심-기능"><span>1.1. 핵심 기능</span></a></h3>
<ul>
<li>회원가입 (<code v-pre>postRegister</code>)
<ul>
<li><code v-pre>username</code> (ID), <code v-pre>password</code>, <code v-pre>name</code> (실명), <code v-pre>role</code> (user/admin), <code v-pre>admin_code</code>를 사용자로부터 입력받습니다.</li>
<li><code v-pre>role</code>이 'admin'일 경우 <code v-pre>admin_code</code> (<code v-pre>2021024057</code>) 일치 여부를 검증합니다.</li>
</ul>
</li>
<li>비밀번호 암호화:
<ul>
<li>개발의 편의를 위해 <code v-pre>salt</code> (솔트) 없이 <code v-pre>sha512</code> 알고리즘(algorithm)을 사용하는 단방향 해시(hash) 방식을 채택했습니다. (Node.js 내장 <code v-pre>crypto</code> 모듈(module) 사용)</li>
<li>DB의 <code v-pre>password</code> column(column)은 이에 따라 <code v-pre>VARCHAR(128)</code>로 구성하였습니다.</li>
</ul>
</li>
<li>로그인 (<code v-pre>postLogin</code>)
<ul>
<li><code v-pre>username</code>과 <code v-pre>password</code>를 받습니다.</li>
<li>입력된 <code v-pre>password</code>를 <code v-pre>sha512</code>로 즉시 hashing하여 DB에 저장된 해시값과 비교합니다.</li>
<li>성공 시 <code v-pre>session</code>에 <code v-pre>userId</code> (username 값), <code v-pre>username</code> (name 값), <code v-pre>role</code>을 저장합니다.</li>
</ul>
</li>
<li>로그아웃 (<code v-pre>logoutAndGetHomePage</code>)
<ul>
<li><code v-pre>req.session.destroy()</code>를 호출하여 세션을 종료합니다.</li>
</ul>
</li>
</ul>
<h3 id="_1-2-주요-troubleshooting-login의-실패-및-debugging" tabindex="-1"><a class="header-anchor" href="#_1-2-주요-troubleshooting-login의-실패-및-debugging"><span>1.2. 주요 troubleshooting: login의 실패 및 debugging</span></a></h3>
<ul>
<li>문제 1: <code v-pre>user_id</code>와 <code v-pre>pw01</code> (초기 테스트 암호)을 정확히 입력해도 로그인 세션으로 넘어가지 않았습니다.</li>
<li>과정 1: <code v-pre>postLogin</code> 함수에 <code v-pre>console.log</code>를 추가하여 입력값(<code v-pre>req.body</code>)과 DB 조회 과정을 추적했습니다.</li>
<li>원인 1: 로그(log) 확인 결과, <code v-pre>req.body</code>에 <code v-pre>user_id</code>가 아닌 <code v-pre>username</code>이 들어오고 있었습니다. (<code v-pre>[Debug] 입력된 Body: { username: 'kmbzn', ... }</code>)</li>
<li>해결 1: 로그인 폼(form) (<code v-pre>login.ejs</code>)의 <code v-pre>&lt;input&gt;</code> 태그 <code v-pre>name</code> 속성(attribute)이 <code v-pre>username</code>으로 되어있는 것을 확인하고, 서버 로직(<code v-pre>postLogin</code>)이 <code v-pre>user_id</code> 대신 <code v-pre>username</code>을 받도록 수정했습니다.</li>
<li>문제 2: <code v-pre>Column 'user_type' cannot be null</code> 오류가 회원가입 시 발생했습니다.</li>
<li>원인 2: <code v-pre>postRegister</code> 컨트롤러(controller)는 <code v-pre>req.body.user_type</code>을 기대했지만, 폼 (<code v-pre>register.ejs</code>)의 <code v-pre>&lt;select&gt;</code> 태그에 <code v-pre>name=&quot;user_type&quot;</code> 속성이 누락되어 서버로 값이 전송되지 않았습니다.</li>
<li>해결 2: <code v-pre>register.ejs</code> 파일의 User Role 드롭다운(dropdown) <code v-pre>&lt;select&gt;</code> 태그에 <code v-pre>name=&quot;user_type&quot;</code>을 추가하여 문제를 해결했습니다.</li>
</ul>
<h2 id="_2-db-schema-변경" tabindex="-1"><a class="header-anchor" href="#_2-db-schema-변경"><span>2. DB schema 변경</span></a></h2>
<p>개발 초기, 프로그램의 요구사항과 실제 DB 스키마(schema)의 attribute 이름이 불일치하여 다수의 오류가 발생했습니다. 이를 해결하기 위해 DB 스키마를 변경했습니다.</p>
<ul>
<li>
<ol>
<li><code v-pre>USER</code> 테이블의 <code v-pre>user_id</code> -&gt; <code v-pre>username</code> 변경 (가장 큰 변경점)</li>
</ol>
<ul>
<li>문제: 프로그램은 로그인 ID로 <code v-pre>username</code>을 사용하려 했으나, DB의 PK는 <code v-pre>user_id</code>였습니다.</li>
<li>과정: <code v-pre>ALTER TABLE USER CHANGE COLUMN user_id username ...</code> 시도 시 <code v-pre>ERROR 1068 (Multiple primary key defined)</code> (PK 중복) 및 <code v-pre>ERROR 1553 (Cannot drop index 'PRIMARY')</code> (외래 키 참조) 오류가 발생했습니다.</li>
<li>원인: <code v-pre>USER</code> 테이블의 <code v-pre>user_id</code> (PK)를 <code v-pre>RENTAL</code>과 <code v-pre>RESERVATION</code> 테이블이 <code v-pre>FOREIGN KEY</code> (외래 키)로 참조하고 있었습니다.</li>
<li>해결: 11단계 SQL 쿼리(query)를 통해 <code v-pre>FOREIGN_KEY_CHECKS=0</code>으로 설정하고, <code v-pre>RENTAL</code>과 <code v-pre>RESERVATION</code>의 외래 키를 <code v-pre>DROP</code>한 뒤, <code v-pre>USER</code>의 PK를 <code v-pre>DROP</code>하고, 3개 테이블(<code v-pre>USER</code>, <code v-pre>RENTAL</code>, <code v-pre>RESERVATION</code>)의 column명을 <code v-pre>RENAME COLUMN</code>으로 변경한 후, PK와 외래 키를 다시 설정하여 스키마를 일치시켰습니다. (<code v-pre>postLogin</code>, <code v-pre>postRegister</code> 등 모든 관련 코드도 <code v-pre>username</code>을 사용하도록 수정했습니다.)</li>
</ul>
</li>
<li>
<ol start="2">
<li><code v-pre>USER</code> 테이블의 <code v-pre>user_type</code> -&gt; <code v-pre>role</code> 변경:</li>
</ol>
<ul>
<li><code v-pre>ALTER TABLE USER RENAME COLUMN user_type TO role;</code> 쿼리를 실행하여 <code v-pre>role</code>로 명칭을 통일했습니다. (관련 컨트롤러 코드 수정 완료)</li>
</ul>
</li>
<li>
<ol start="3">
<li><code v-pre>USER</code> 테이블의 <code v-pre>email</code> 삭제 및 <code v-pre>student_id</code> 자동화:</li>
</ol>
<ul>
<li>초기 설계 과정에선 사용자 이메일에 대한 저장도 필요할 것으로 판단하여 해당 column을 포함시켰습니다.</li>
<li><code v-pre>ALTER TABLE USER DROP COLUMN email;</code>로 <code v-pre>email</code> column을 삭제했습니다.</li>
<li><code v-pre>student_id</code>를 <code v-pre>BIGINT NOT NULL AUTO_INCREMENT UNIQUE KEY</code>로 변경하고, <code v-pre>AUTO_INCREMENT</code> 시작값을 <code v-pre>2025000001</code>로 설정했습니다.</li>
<li><code v-pre>postRegister</code> 함수에서 <code v-pre>student_id</code> 관련 로직을 모두 제거하여 DB가 학번을 자동 부여하도록 수정했습니다. (개발 편의를 위해서)</li>
</ul>
</li>
</ul>
<h2 id="_3-도서-관리-book-management" tabindex="-1"><a class="header-anchor" href="#_3-도서-관리-book-management"><span>3. 도서 관리 (Book Management)</span></a></h2>
<ul>
<li>Controller: <code v-pre>controllers/bookController.js</code></li>
</ul>
<h3 id="_3-1-핵심-기능" tabindex="-1"><a class="header-anchor" href="#_3-1-핵심-기능"><span>3.1. 핵심 기능</span></a></h3>
<ul>
<li>도서 목록 (<code v-pre>getBooksPage</code>) 도서 정보와 현재 대출 가능 재고(<code v-pre>available_quantity</code>) 등을 <code v-pre>JOIN</code>하여 조회하며, 검색 및 정렬 기능을 지원합니다.</li>
<li>도서 대출 (<code v-pre>postBorrowBook</code>) 사용자의 연체 여부, 대출 권수(최대 3권), 도서 재고, 중복 대출 여부(동일 <code v-pre>book_id</code> 불가)를 검증한 후 <code v-pre>RENTAL</code> 테이블에 추가하고 <code v-pre>BOOK_COPY</code> 상태를 'on_loan'으로 변경합니다.
<ul>
<li>(이전 수정) 중복 대출 검증 로직을 <code v-pre>count &gt; 1</code> (3권부터 불가)에서 <code v-pre>count &gt;= 2</code> (2권 보유 시 3권째 불가)로 수정한 바 있습니다.</li>
</ul>
</li>
<li>도서 반납 (<code v-pre>postReturnBook</code>) <code v-pre>RENTAL</code>의 <code v-pre>return_date</code>를 기록하고 <code v-pre>BOOK_COPY</code> 상태를 'available'로 변경합니다. 연체 반납 시 사용자의 다른 연체 내역이 없다면 <code v-pre>USER</code>의 <code v-pre>overdue_status</code>를 <code v-pre>FALSE</code>로 업데이트합니다.</li>
<li>도서 예약 (<code v-pre>postReserveBook</code>) <code v-pre>getBookInstances</code>로 조회 시 대출 가능 재고가 0일 경우 예약을 받습니다. 사용자의 연체 상태, 현재 대출 여부, 중복 예약 여부를 검증한 후 <code v-pre>RESERVATION</code> 테이블에 추가합니다.</li>
</ul>
<h3 id="_3-2-주요-troubleshooting-도서-추가-실패" tabindex="-1"><a class="header-anchor" href="#_3-2-주요-troubleshooting-도서-추가-실패"><span>3.2. 주요 troubleshooting: 도서 추가 실패</span></a></h3>
<ul>
<li>문제 1: <code v-pre>Error: Column 'author' cannot be null</code> 오류가 발생했습니다.</li>
<li>원인 1: <code v-pre>add-book.ejs</code> 폼의 <code v-pre>&lt;select&gt;</code> 태그 <code v-pre>name</code> 속성이 <code v-pre>authors</code> (복수형)로 되어있었으나, <code v-pre>postAddBook</code> 컨트롤러는 <code v-pre>req.body.author</code> (단수형)를 참조하고 있었습니다.</li>
<li>해결 1: <code v-pre>add-book.ejs</code>의 <code v-pre>name=&quot;authors&quot;</code>를 <code v-pre>name=&quot;author&quot;</code>로 수정하여 변수명을 일치시켰습니다.</li>
<li>문제 2: <code v-pre>Error: Incorrect integer value: 'id:5' for column 'category_id'</code> 오류가 발생했습니다.</li>
<li>원인 2: <code v-pre>Choices.js</code> 라이브러리(library)가 기존 항목 선택 시 <code v-pre>'id:5'</code> (문자열)를, 새 항목 입력 시 <code v-pre>'New Category'</code> (문자열)를 <code v-pre>value</code>로 전송했습니다. <code v-pre>postAddBook</code> 함수는 이 문자열을 파싱(parsing)하지 않고 <code v-pre>INT</code> 타입의 <code v-pre>category_id</code> column에 <code v-pre>INSERT</code>하려 했습니다.</li>
<li>해결 2: <code v-pre>postAddBook</code> 함수 내부에 <code v-pre>getOrCreateAuthorId</code>와 <code v-pre>getOrCreateCategoryId</code> 헬퍼 함수를 구현했습니다. 이 함수들은 <code v-pre>value</code>가 <code v-pre>'id:'</code>로 시작하면 숫자를 파싱하고, 일반 문자열이면 DB에서 검색하거나 새로 <code v-pre>INSERT</code>하여 유효한 <code v-pre>ID</code> 값을 반환하도록 로직을 수정하여 해결했습니다.</li>
</ul>
<h2 id="_4-사용자-및-카테고리-admin" tabindex="-1"><a class="header-anchor" href="#_4-사용자-및-카테고리-admin"><span>4. 사용자 및 카테고리 (admin)</span></a></h2>
<ul>
<li>Controllers: <code v-pre>controllers/userController.js</code>, <code v-pre>controllers/categoryController.js</code></li>
<li>사용자 관리 (<code v-pre>getUsersPage</code>) <code v-pre>USER</code> 테이블을 조회하며, <code v-pre>username</code>, <code v-pre>name</code>, <code v-pre>role</code> 기준의 동적 검색 기능을 구현했습니다.</li>
<li>카테고리 관리 (<code v-pre>postDeleteCategory</code>) 카테고리 삭제 시, <code v-pre>BOOK_CATEGORY</code> 테이블에서 해당 <code v-pre>category_id</code>를 참조하는 레코드를 먼저 <code v-pre>DELETE</code>하여 외래 키 제약 조건 오류를 방지한 후, <code v-pre>CATEGORY</code>에서 원본을 삭제합니다. (트랜잭션 처리)</li>
</ul>
<h2 id="_5-demo-youtube-영상-link-첨부" tabindex="-1"><a class="header-anchor" href="#_5-demo-youtube-영상-link-첨부"><span>5. [Demo] YouTube 영상 link 첨부</span></a></h2>
<p><a href="https://youtu.be/rEnQjFZ19rk?si=n0fbnothZE7vTcBF" target="_blank" rel="noopener noreferrer">https://youtu.be/rEnQjFZ19rk?si=n0fbnothZE7vTcBF</a></p>
</div></template>


