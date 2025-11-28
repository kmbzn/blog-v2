<template><div><h1 id="_1-introduction" tabindex="-1"><a class="header-anchor" href="#_1-introduction"><span>1. Introduction</span></a></h1>
<h2 id="data-database-dbms와-db-app-직관적-개념들" tabindex="-1"><a class="header-anchor" href="#data-database-dbms와-db-app-직관적-개념들"><span>Data, Database, DBMS와 DB App: 직관적 개념들</span></a></h2>
<ul>
<li>Data: '누군가'와 관련 (높은 엔트로피)</li>
<li>Database, DBMS: '조직'과 관련</li>
<li>DB App: '사용자'와 관련 (낮은 엔트로피)</li>
</ul>
<h2 id="database와-dbms" tabindex="-1"><a class="header-anchor" href="#database와-dbms"><span>Database와 DBMS</span></a></h2>
<ul>
<li>데이터베이스: 관련된 데이터의 논리적 집합
<ul>
<li>주요 목표
<ul>
<li>관련된 데이터를 '논리적으로 조직화'하는 것</li>
<li>데이터 간 관계를 유지하면서</li>
<li>데이터 중복을 최소화하면서</li>
</ul>
</li>
</ul>
</li>
<li>Database Management System(DBMS): 관련된 데이터를 제공하는 지능적 서비스
<ul>
<li>주요 목표
<ul>
<li>관련된 데이터를 '물리적으로 조직화'하는 것</li>
<li>인덱스 구조를 사용하여 데이터 접근을 빨리 처리하면서</li>
<li>데이터 일관성과 통합성을 유지하면서</li>
<li>어느 정도의 예측 불가한 오류를 용인하면서</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="데이터-모델" tabindex="-1"><a class="header-anchor" href="#데이터-모델"><span>데이터 모델</span></a></h2>
<ul>
<li>관계형 모델 (by Ted Codd)
<ul>
<li>테이블의 집합이 곧 데이터베이스</li>
<li>각 테이블은 관련된 데이터 (레코드)의 집합을 나타냄</li>
<li><code v-pre>(98345, Kim, Elec. Eng. and 80000)</code> 는 서로 관련되어 있음</li>
</ul>
</li>
<li>Entity-Relationship 데이터 모델 (Database 디자인에 주로 사용됨)
<ul>
<li>(실제 세계의) 개체와 그들의 관계를 표현</li>
<li>디자인 (E-R 모델) -&gt; 구현 (관계형 모델)</li>
</ul>
</li>
<li>Semi-structured 데이터 모델 (JSON, XML)
<ul>
<li>동일한 type의 데이터가 각기 다른 속성을 가질 수 있음</li>
</ul>
</li>
</ul>
<h2 id="schema와-instance" tabindex="-1"><a class="header-anchor" href="#schema와-instance"><span>Schema와 Instance</span></a></h2>
<ul>
<li>프로그래밍 언어에서 variable과 value의 개념과 유사</li>
<li>Logical Schema: 데이터베이스의 전반적인 논리적 구조, 디자인
<ul>
<li>예: 그 데이터베이스는 은행 계좌들과 소비자들, 그리고 그들의 관계에 대한 집합에 관한 정보들로 구성되어 있다.
<ul>
<li>프로그램 내 변수의 타입 정보와 유사</li>
</ul>
</li>
</ul>
</li>
<li>물리 스키마: 데이터베이스의 전반적인 물리적 구조, 디자인
<ul>
<li>물리적 데이터 독립: 논리적 구조의 변경 없이 물리적 스키마를 수정할 수 있는 ability
<ul>
<li>논리적 스키마에 의존하는 Applications</li>
<li>일반적으로, 다양한 레벨과 구성 요소들 간의 인터페이스는 한 부분에서의 변경이 다른 부분에 심각한 영향을 주지 않아야 함.</li>
</ul>
</li>
</ul>
</li>
<li>인스턴스 (Instance): 특정 시점에서의 데이터베이스의 실제 내용(contents)</li>
</ul>
<h2 id="data-definition-language-ddl-데이터-정의어" tabindex="-1"><a class="header-anchor" href="#data-definition-language-ddl-데이터-정의어"><span>Data Definition Language (DDL, 데이터 정의어)</span></a></h2>
<ul>
<li>Database schema를 정의하기 위한 명세적 표기</li>
</ul>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">create</span> <span class="token keyword">table</span> instructor <span class="token punctuation">(</span></span>
<span class="line">    ID          <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    name        <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    dept_name   <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    salary      <span class="token keyword">numeric</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>DDL compiler는 데이터 dictionary에 저장된 테이블 템플릿의 집합을 생성함.</li>
<li>데이터 사전은 메타 데이터를 포함 (즉, 데이터에 관련된 데이터)
<ul>
<li>데이터베이스 스키마</li>
<li>무결성 제약
<ul>
<li>Primary key (ID는 unique하게 instructors를 식별함)</li>
</ul>
</li>
<li>Authorization(승인, 권한)
<ul>
<li>누가 무엇에 접근할 수 있는지</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="data-manipulation-language-dml-데이터-조작어" tabindex="-1"><a class="header-anchor" href="#data-manipulation-language-dml-데이터-조작어"><span>Data Manipulation Language (DML, 데이터 조작어)</span></a></h2>
<ul>
<li>적절한 데이터 모델에 의해 조직된 데이터에 접근하고 업데이트하기 위한 언어</li>
<li>크게 두 종류가 있음
<ul>
<li>Procedural DML 절차적 DML
<ul>
<li>어떤 데이터가 필요한지 어떻게 그것을 얻을 것인지 사용자에게 요구함</li>
</ul>
</li>
<li>Declarative DML 선언적, 비절차적 DML
<ul>
<li>해당 데이터들을 어떻게 얻을 것인지에 대한 구체화 없이 무엇을 필요로 하는지만 사용자에게 요구</li>
<li>절차적 DML에 비해 배우고 사용하기 쉬움</li>
<li>비절차적 DML(non-procedural DML)이라고도 불림</li>
</ul>
</li>
</ul>
</li>
<li>DML에서 정보 탐색과 관련된 부분을 query language라고 함</li>
</ul>
<h2 id="sql-language" tabindex="-1"><a class="header-anchor" href="#sql-language"><span>SQL Language</span></a></h2>
<ul>
<li>SQL language는 DDL과 DML 모두를 수행</li>
<li>SQL query language는 비절차적임.</li>
<li>하나의 쿼리는 하나 이상의 테이블들을 입력으로 받고, 항상 단일 테이블을 반환함</li>
<li>Comp. Sci 학부의 모든 교강사 출력 예시)</li>
</ul>
<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql"><pre v-pre><code class="language-sql"><span class="line"><span class="token keyword">select</span> name</span>
<span class="line"><span class="token keyword">from</span> instructor</span>
<span class="line"><span class="token keyword">where</span> dept_name <span class="token operator">=</span> <span class="token string">'Comp. Sci.'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>SQL은 튜링 머신과 동등한 언어가 아님</li>
<li>복잡한 함수 연산을 가능케 하기 위해서, SQL은 주로 더 높은 level의 언어에 embedded되곤 함.</li>
</ul>
<p>애플리케이션 프로그램은 일반적으로 다음 중 하나의 데이터베이스에 접근</p>
<ul>
<li>embedded SQL을 가능하게 하기 위한 언어 확장</li>
<li>데이터베이스에 SQL query를 보낼 수 있게끔 하는 애플리케이션 프로그램 인터페이스(ODBC나 JDBC와 같은)</li>
</ul>
<h2 id="database-design" tabindex="-1"><a class="header-anchor" href="#database-design"><span>Database design</span></a></h2>
<p>데이터베이스의 일반적 구조를 디자인하는 과정</p>
<ul>
<li>
<p>논리적 디자인</p>
<ul>
<li>데이터베이스 스키마에서 결정</li>
<li>데이터베이스 디자인은 관계 스키마에서 &quot;좋은&quot; 집합을 찾을 것을 요구함</li>
<li>비즈니스적 결정: 데이터베이스에 어떤 속성들을 기록해야 할까?</li>
<li>컴퓨터 과학적 결정: 어떤 관계 스키마를 가져야 하고, 어떻게 다양한 관계 스키마에 그 속성들이 분포되게 할까?</li>
</ul>
</li>
<li>
<p>물리적 디자인</p>
<ul>
<li>데이터베이스의 물리적 레이아웃에서의 결정</li>
</ul>
</li>
</ul>
<h2 id="데이터베이스-엔진" tabindex="-1"><a class="header-anchor" href="#데이터베이스-엔진"><span>데이터베이스 엔진</span></a></h2>
<p>데이터베이스 시스템은 전체 시스템의 각 책임을 처리하는 module로 분할됨</p>
<p>데이터베이스 시스템의 기능적 요소는 다음과 같이 구분할 수 있음</p>
<ol>
<li>The storage manager</li>
<li>The query processor</li>
<li>The transaction management</li>
</ol>
<h2 id="storage-manager" tabindex="-1"><a class="header-anchor" href="#storage-manager"><span>Storage Manager</span></a></h2>
<p>DB의 low-level 데이터와 응용 프로그램과 시스템에 제출된 쿼리를 제공하는 프로그램 모듈</p>
<p>스토리지 매니저는 다음 작업들에 책임을 져야 한다.</p>
<ul>
<li>OS 파일 매니저와의 상호작용</li>
<li>효율적인 저장, 탐색, 데이터 업데이트</li>
</ul>
<p>스토리지 매니저 구성 요소들은 다음을 포함해야 한다.</p>
<ul>
<li>Authorization과 무결성 관리자</li>
<li>트랜잭션 매니저, 파일 매니저, buffer 매니저</li>
</ul>
<p>스토리지 매니저는 물리적 시스템 구현의 일부로서 다양한 데이터 구조를 구현해야 한다.</p>
<ul>
<li>데이터 파일: 데이터베이스 스스로를 저장</li>
<li>데이터 dictionary(사전): 데이터베이스의 구조에 관한 메타 데이터 저장, 특히 데이터베이스의 스키마</li>
<li>Indices: 데이터 요소들에 빠른 접근을 가능케 함, 데이터베이스 인덱스는 그러한 특정한 값을 가진 데이터 아이템에 포인터를 제공함.</li>
</ul>
<h2 id="query-processor" tabindex="-1"><a class="header-anchor" href="#query-processor"><span>Query Processor</span></a></h2>
<p>쿼리 프로세서 구성 요소</p>
<ul>
<li>DDL 인터프리터: DDL 구문을 해석하고, 데이터 사전의 정의들을 기록함</li>
<li>DML 컴파일러: Query language에서 DML 구문을 가져와서 query evaluation 엔진이 이해할 수 있는 low-level 지침에 의해 구성된 evaluation 계획으로 변환
<ul>
<li>DML 컴파일러는 다양한 대안들 중 최소 비용 evaluation 계획을 채택하는 쿼리 최적화를 수행</li>
</ul>
</li>
<li>쿼리 해석 엔진은 DML 컴파일러에 의해 생성된 low-level의 지시사항들을 해석함</li>
</ul>
<h2 id="트랜잭션-관리" tabindex="-1"><a class="header-anchor" href="#트랜잭션-관리"><span>트랜잭션 관리</span></a></h2>
<p>트랜잭션(Transaction)은 데이터베이스 응용 프로그램에서 하나의 논리적 기능을 수행하는 일련의 연산(operations)들의 집합</p>
<p>트랜잭션의 네 가지 주요 특성</p>
<ol>
<li>원자성(Atomicity)</li>
<li>일관성(Consistency)</li>
<li>격리성(Isolation)</li>
<li>지속성(Durability)</li>
</ol>
<p>트랜잭션 관리자는 복구 관리자(Recovery Manager)와 동시성 제어 관리자(Concurrency Control Manager)로 구성됨</p>
<ul>
<li>
<p>복구 관리자(Recovery Manager)</p>
<ul>
<li>전원 장애나 운영체제 오류 등 시스템 장애(system failure) 및 트랜잭션 실패(transaction failure)가 발생하더라도 데이터베이스가 일관되고 올바른 상태로 유지되도록 보장</li>
<li>트랜잭션의 원자성(Atomicity)과 지속성(Durability) 속성을 보장</li>
</ul>
</li>
<li>
<p>동시성 제어 관리자(Concurrency-Control Manager)</p>
<ul>
<li>여러 트랜잭션이 동시에 수행될 때 이들 간의 상호 작용을 제어하여 데이터베이스의 일관성(consistency)을 유지</li>
<li>트랜잭션의 일관성(Consistency)과 격리성(Isolation) 속성을 보장</li>
</ul>
</li>
</ul>
</div></template>


