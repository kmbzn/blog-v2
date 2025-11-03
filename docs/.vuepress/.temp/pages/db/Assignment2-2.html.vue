<template><div><h1 id="assignment-2-2-web-application-development" tabindex="-1"><a class="header-anchor" href="#assignment-2-2-web-application-development"><span>Assignment 2-2. Web Application Development</span></a></h1>
<h3 id="목표" tabindex="-1"><a class="header-anchor" href="#목표"><span>목표</span></a></h3>
<ul>
<li><code v-pre>Assignment 2-1</code>에서 설계한 Relation schema를 바탕으로 Web Application 구현</li>
<li>위의 과정 수행 내용을 담은 wiki(위키) 작성</li>
<li>구현한 Web Application을 배포하여 타인이 접속할 수 있도록 할 것. (권장)</li>
<li>배포가 불가능한 경우 모든 요구사항이 정상적으로 동작함을 보여주는 시연 영상 제작</li>
</ul>
<h3 id="제출-방식" tabindex="-1"><a class="header-anchor" href="#제출-방식"><span>제출 방식</span></a></h3>
<ul>
<li>Web Application 구현 코드는 GitHub Repository(GitHub 리포지토리)를 이용하여 제출</li>
<li>Wiki는 LMS(학습 관리 시스템) 과제 탭에 제출</li>
<li>wiki 파일 이름은 <code v-pre>assignment2_2_2021024057_김병준.pdf</code>으로 할 것.</li>
</ul>
<h3 id="제출-기한" tabindex="-1"><a class="header-anchor" href="#제출-기한"><span>제출 기한</span></a></h3>
<ul>
<li>정식 제출: 2025년 10월 23일 23시 59분</li>
<li>이후 제출 시 3시간마다 <strong>전체 득점에서 5% 감점</strong></li>
<li>제출 기한 이후 1분 ~ 3시간 사이에 제출: 채점 후 100점 득점 시 최종 점수 95점</li>
<li>제출 기한 60시간 이후 제출 시 0점</li>
</ul>
<h2 id="implement" tabindex="-1"><a class="header-anchor" href="#implement"><span>Implement</span></a></h2>
<ul>
<li><code v-pre>Assignment 2-1</code>에서 정의한 모든 요구사항을 충족하는 Application(애플리케이션) 구현</li>
<li>백엔드 및 프론트엔드 구현에 사용하는 기술 stack에는 제약이 없으나 데이터베이스는 반드시 MySQL 사용</li>
<li>아래 링크의 repository를 이용하여 과제 수행 후 github에 push(푸시)
<ul>
<li><a href="https://classroom.github.com/a/B_yC7dWd" target="_blank" rel="noopener noreferrer">https://classroom.github.com/a/B_yC7dWd</a></li>
</ul>
</li>
<li>기본적으로 제공되는 스켈레톤 코드를 이용하거나, 이용하지 않는 경우에도 위의 링크의 repository에 과제 수행물 제출</li>
<li>UI(사용자 인터페이스)의 심미성은 평가 대상에서 제외, 기능 구현에 집중할 것.</li>
<li>UX(사용자 경험)에 악영향을 미치는 요소가 존재할 경우 <strong>감점 발생</strong>
<ul>
<li>예: 이전 페이지로 이동해야 할 상황에 뒤로 가기 버튼이 없는 경우</li>
</ul>
</li>
</ul>
<h2 id="deploy-recommend" tabindex="-1"><a class="header-anchor" href="#deploy-recommend"><span>Deploy (recommend)</span></a></h2>
<ul>
<li>AWS, GCP 등 Cloud Service(클라우드 서비스)를 이용하여 개발한 Web application를 배포하고 공개적으로 접근 가능하도록 할 것.</li>
<li>접속 주소를 Wiki에 기입</li>
<li>IP 주소 형태로 기입</li>
<li>도메인을 사용할 필요는 없음.</li>
<li>배포된 Web application에서 요구사항의 모든 내용을 확인할 수 있도록 할 것.</li>
<li>충분한 데이터를 준비</li>
</ul>
<h2 id="demo-video" tabindex="-1"><a class="header-anchor" href="#demo-video"><span>Demo Video</span></a></h2>
<ul>
<li>배포가 불가능한 경우 시연 영상으로 대체 가능</li>
<li>시연 영상에는 모든 기능에 대한 자세한 시연 과정과 그에 대한 설명이 음성 혹은 자막으로 포함되어야 함</li>
<li>유튜브에 일부 공개로 업로드 후 영상 URL을 Wiki에 기입</li>
</ul>
<h2 id="wiki" tabindex="-1"><a class="header-anchor" href="#wiki"><span>Wiki</span></a></h2>
<ul>
<li>Wiki에 포함되어야 하는 것들
<ul>
<li>Web application 접속 주소/시연 영상 URL</li>
<li>구현한 application을 local(로컬)에서 실행하는 방법</li>
<li>구현한 추가 기능에 대한 설명</li>
<li>application 구현 계획에 대한 설명 및 수행 내용</li>
<li>과제를 수행하며 겪었던 주요 문제 및 해결 과정</li>
<li>그 이외에 과제를 수행하며 알게 된 사실</li>
</ul>
</li>
</ul>
<h2 id="기타-주의사항" tabindex="-1"><a class="header-anchor" href="#기타-주의사항"><span>기타 주의사항</span></a></h2>
<ul>
<li>GitHub repository name을 반드시 <code v-pre>Assignment2_2021024057</code>과 같은 양식으로 설정</li>
<li><code v-pre>setting</code> 강의자료 참고</li>
<li><code v-pre>README.md</code>에 본인 이름과 학번을 반드시 입력</li>
<li>웹 호스팅과 관련된 정보들이 노출되지 않도록 유의
<ul>
<li>API Key(API 키), AWS 계정 정보 등</li>
</ul>
</li>
</ul>
</div></template>


