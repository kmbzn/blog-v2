<template><div><section class="print-section">
<h1 id="명문교회-방송실-자막-업무-매뉴얼" tabindex="-1"><a class="header-anchor" href="#명문교회-방송실-자막-업무-매뉴얼"><span>명문교회 방송실 자막 업무 매뉴얼</span></a></h1>
<DateMeta />
<p>2026.07.05.</p>
</section>
<section class="print-section">
<h2 id="_1-개요" tabindex="-1"><a class="header-anchor" href="#_1-개요"><span>1. 개요</span></a></h2>
<p>주요 업무는 예배 시간 동안 순서에 맞춰 알맞은 슬라이드를 클릭해서 넘기는 일이에요. 가사가 반복되는 경우가 많으니, 찬양 인도자분이 멘트하시는 것을 잘 듣고 타이밍에 맞춰 넘겨주시면 됩니다.</p>
<p><img src="@source/rc/image.png" alt=""></p>
<ul>
<li><strong>ProPresenter</strong>라는 프로그램을 사용해요.</li>
<li>기본적으로 방송실 우측 Mac mini에 연결된 모니터를 사용해요.
<ul>
<li>macOS 환경이기 때문에 단축키는 <code v-pre>Ctrl</code> 대신 <code v-pre>Command</code> 계열을 사용해요.
<ul>
<li>예를 들어 붙여넣기를 할 때 <code v-pre>Ctrl+V</code> 대신 <code v-pre>Command+V</code>를 쓰는 식으로</li>
</ul>
</li>
</ul>
</li>
</ul>
</section>
<section class="print-section">
<h2 id="_2-기본-조작-방법" tabindex="-1"><a class="header-anchor" href="#_2-기본-조작-방법"><span>2. 기본 조작 방법</span></a></h2>
<ul>
<li><strong>슬라이드 송출 (클릭):</strong> 슬라이드를 클릭하면 해당 화면이 메인 스크린에 바로 송출됩니다.</li>
<li><strong>순차 이동 (방향키):</strong> 같은 그룹 안에서는 키보드 좌/우 방향키(<code v-pre>←</code>, <code v-pre>→</code>)를 이용해 이웃한 앞/뒤 슬라이드로 이동할 수 있습니다.</li>
<li><strong>순서 변경 (드래그):</strong> 슬라이드 순서를 바꿀 때는 해당 슬라이드를 클릭한 상태로 드래그해서 옮기고자 하는 곳 사이에 배치하면 됩니다.</li>
<li><strong>다중 슬라이드 선택:</strong> 여백을 클릭한 상태에서 커서를 이동하며 선택하고자 하는 슬라이드들 위로 올리면, 커서에 닿은 여러 슬라이드가 파란색 테두리로 한 번에 선택됩니다.
<img src="@source/rc/image-6.png" alt="alt text"></li>
<li>프로그램 좌측 탭에 있는 예배 순서 제목을 클릭하면 빠르게 접근할 수 있어서 긴급할 때 유용합니다.
<img src="@source/rc/image-5.png" alt="alt text"></li>
<li>프롬프터 변경: <code v-pre>오른쪽 탭 스테이지 - 프롬프터</code> 클릭해서 변경
<img src="@source/rc/image-4.png" alt="alt text"></li>
<li>우측 상단에 작은 모니터링 화면옆에 <code v-pre>X</code>박스를 누르면 가사와 배경이 모두 내려갑니다. (주의)</li>
<li>그 옆에 작은 아이콘들 중에, <code v-pre>[=]</code> 모양 아이콘을 클릭하면 가사만 내려가게 할 수 있습니다. (성가대 간주 등에 활용)</li>
<li><strong>우클릭 메뉴 활용 (이미지 참고)</strong>
<ul>
<li><strong>빠른 편집:</strong> 가사 편집 기능. 자막에 오타나 수정사항이 있다면 즉시 수정할 수 있습니다.</li>
<li><strong>라벨:</strong> 슬라이드를 시각적으로 구분하기 좋게 슬라이드 라벨을 지정하는 기능입니다.</li>
<li><strong>작업 추가:</strong> 전면 스크린이나 유튜브 화면의 배경과 화면 송출 구성이 적절하지 못한 경우, <strong>작업 제거</strong> 눌러서 기존 작업을 제거한 뒤 다시 <strong>작업 추가</strong>를 할 수 있습니다.</li>
<li><strong>자르기</strong>: <code v-pre>Command+X</code> 해당 슬라이드 잘라내기</li>
<li><strong>복사</strong>: <code v-pre>Command+C</code> 해당 슬라이드를 클립보드에 복사</li>
<li><strong>붙여넣기</strong>: <code v-pre>Command+V</code> 해당 슬라이드 붙여넣기</li>
<li><strong>삭제</strong>: <code v-pre>delete</code> 해당 슬라이드 삭제</li>
</ul>
</li>
</ul>
<p><img src="@source/rc/image-2.png" alt="alt text"></p>
<ul>
<li>슬라이드 전환 효과
<ul>
<li><strong>찬양 가사(텍스트)를 넘길 때:</strong> 빠르게 글자만 바뀔 수 있도록 <strong>자르기</strong> 효과 사용</li>
<li><strong>이미지형 슬라이드를 넘길 때:</strong> 화면이 부드럽게 겹치며 넘어가는 <strong>디졸브</strong> 효과를 적용하는 것이 보기 좋아요. (대부분 슬라이드에 미리 세팅되어 지정되어 있으니 참고만 해주시면 돼요.)</li>
</ul>
</li>
</ul>
</section>
<section class="print-section">
<h2 id="_3-용어-설명" tabindex="-1"><a class="header-anchor" href="#_3-용어-설명"><span>3. 용어 설명</span></a></h2>
</section>
<section class="print-section">
<h3 id="_3-1-송출-화면-구성" tabindex="-1"><a class="header-anchor" href="#_3-1-송출-화면-구성"><span>3.1. 송출 화면 구성</span></a></h3>
<ol>
<li><strong>와이드스크린:</strong> 예배당 중앙에 송출되는 메인 스크린 화면</li>
<li><strong>프롬프터:</strong> 앞에 인도자나 찬양팀 인원들이 따로 가독성 좋게 볼 수 있도록 단상 앞에 띄워주는 별도의 화면입니다. 다음 가사까지 미리 볼 수 있고 현재 시각도 함께 표시돼요.</li>
</ol>
<ul>
<li><strong>가사 모드:</strong> 가사를 띄울 때</li>
<li><strong>PGM 모드:</strong> 이미지나 카메라 영상을 송출할 때</li>
</ul>
<ol start="3">
<li><strong>YouTube:</strong> 명문교회 유튜브 채널에 실시간으로 송출되는 화면이에요. 예배가 끝난 후 다시보기가 가능해서 복기할 때 활용할 수 있어요.</li>
</ol>
</section>
<section class="print-section">
<h3 id="_3-2-배경-미디어-목록" tabindex="-1"><a class="header-anchor" href="#_3-2-배경-미디어-목록"><span>3.2. 배경 미디어 목록</span></a></h3>
<p><img src="@source/rc/image-3.png" alt="alt text">
가사 뒤에 띄우는 바탕 역할을 하며 목사님이 외부 리소스에서 받아오신 자연 풍경이나 성경적인 영상 모음이에요. 하단에서 선택할 수 있고 각 순서에 맞는 배경들이 있으니 알맞게 클릭해서 틀어주시면 돼요.</p>
<ul>
<li><strong>1~3번 배경:</strong> 매주 바뀌는 배경이고 WithEL 찬양팀 자막에 사용해요.</li>
<li><strong>나머지 배경:</strong> 매주 고정으로 사용되는 배경이에요.
<ul>
<li>4번: 입례</li>
<li>5번: 사도신경</li>
<li>6번: 찬송가/헌금송</li>
<li>7번: 성가대</li>
<li>8번: 설교 후 찬양</li>
</ul>
</li>
</ul>
</section>
<section class="print-section">
<h2 id="_4-예배-순서별-상세-조작-매뉴얼" tabindex="-1"><a class="header-anchor" href="#_4-예배-순서별-상세-조작-매뉴얼"><span>4. 예배 순서별 상세 조작 매뉴얼</span></a></h2>
<p>큐시트를 참고하여 예배 순서에 맞춰 진행해 주시면 됩니다.</p>
</section>
<section class="print-section">
<h3 id="_4-0-대기-영상" tabindex="-1"><a class="header-anchor" href="#_4-0-대기-영상"><span>4.0. 대기 영상</span></a></h3>
<p><em>프롬프터: PGM</em></p>
<p>예배 시작 전까지 &quot;명문교회 주일예배&quot; 대기 슬라이드를 띄워놓고 대기해요 (2부 ~08:47).</p>
<p>그동안 오늘자 큐시트와 슬라이드 구성을 보시면서 빠진 것은 없는지, 가사가 틀린 것은 없는지 검토해주시면 좋습니다.</p>
</section>
<section class="print-section">
<h3 id="_4-1-3분-대기-영상" tabindex="-1"><a class="header-anchor" href="#_4-1-3분-대기-영상"><span>4.1. 3분 대기 영상</span></a></h3>
<p><em>프롬프터: PGM</em></p>
<p>2부 기준 08시 47분부터 8시 50분까지 송출되는 3분 카운트다운 영상이에요. 휴대폰 시계로 47분 00초가 되자마자 <code v-pre>3분 대기영상.mov</code> 슬라이드를 띄워주세요. 영상 자체에 배경음악이 포함되어 있으므로, 클릭하기 5초 전에 음향간사님께 *&quot;3분 (대기)영상 틀겠습니다.&quot;*라고 말씀해 주세요.</p>
</section>
<section class="print-section">
<h3 id="_4-2-withel-찬양팀" tabindex="-1"><a class="header-anchor" href="#_4-2-withel-찬양팀"><span>4.2. WithEL 찬양팀</span></a></h3>
<p><em>프롬프터: 가사</em></p>
<p><em>배경: 1, 2, 3번</em></p>
<p>찬양팀 순서가 시작되면 하단 미디어에서 <strong>1~3번 배경</strong>을 곡 순서대로 띄우고 가사를 넘겨주시면 됩니다. 다음 가사로 넘어갈 때 클릭 후 화면 송출까지 약간의 딜레이가 있고, 또한 조금 빨리 넘겨주셔야 원활하게 찬양을 따라부르실 수 있기 때문에, 이를 감안해서 항상 0.5초 ~ 1초 전에 미리 눌러주세요.</p>
</section>
<section class="print-section">
<h3 id="_4-3-입례-찬양" tabindex="-1"><a class="header-anchor" href="#_4-3-입례-찬양"><span>4.3. 입례 찬양</span></a></h3>
<p><em>프롬프터: 가사</em></p>
<p><em>배경: 4번(입례찬양)</em></p>
<p>입례 찬양이 시작되면 하단 미디어의 <strong>4번 배경</strong>을 선택해서 띄워주고, 가사를 넘겨주시면 됩니다. (입례찬양은 WELOVE 입례로 매주 동일)</p>
</section>
<section class="print-section">
<h3 id="_4-4-입례-찬양-후-기도" tabindex="-1"><a class="header-anchor" href="#_4-4-입례-찬양-후-기도"><span>4.4. 입례 찬양 후 기도</span></a></h3>
<p><em>프롬프터: PGM</em></p>
<p>&quot;경배드리리~&quot; 찬양이 끝나면 &quot;명문교회 주일예배&quot; 대기 영상으로 슬라이드를 전환합니다. 순서대로 가사를 부르기 때문에 키보드 방향키(<code v-pre>→</code>)로만 넘겨주어도 쉽게 진행할 수 있어요.</p>
</section>
<section class="print-section">
<h3 id="_4-5-사도신경" tabindex="-1"><a class="header-anchor" href="#_4-5-사도신경"><span>4.5. 사도신경</span></a></h3>
<p><em>프롬프터: 가사</em></p>
<p><em>배경: 5번(사도신경)</em></p>
<p>사도신경을 타이밍 맞게 넘겨주시면 됩니다. 템포가 빠르므로 1초 정도 빨리 넘긴다고 생각해 주세요.</p>
</section>
<section class="print-section">
<h3 id="_4-6-찬송가" tabindex="-1"><a class="header-anchor" href="#_4-6-찬송가"><span>4.6. 찬송가</span></a></h3>
<p><em>프롬프터: 가사</em></p>
<p><em>배경: 6번 (찬송가 배경)</em></p>
<p>찬송가는 매주 달라지며, 반복 없이 절 순서대로 가사를 부르기 때문에 키보드 방향키(<code v-pre>→</code>)만으로 넘겨서 쉽게 진행할 수 있어요.</p>
</section>
<section class="print-section">
<h3 id="_4-7-대표-기도" tabindex="-1"><a class="header-anchor" href="#_4-7-대표-기도"><span>4.7. 대표 기도</span></a></h3>
<p><em>프롬프터: PGM</em></p>
<p>찬송가가 끝나면 즉시 2부/3부 대표기도 슬라이드를 클릭해 줍니다. 이때 오른쪽에 라이브 모니터 화면을 보면서 대표기도를 하러 올라오신 장로님이 슬라이드에 입력된 성함과 일치하는지 체크해주시면 아주 좋아요.</p>
</section>
<section class="print-section">
<h3 id="_4-8-교회소식-광고" tabindex="-1"><a class="header-anchor" href="#_4-8-교회소식-광고"><span>4.8. 교회소식 (광고)</span></a></h3>
<p><em>프롬프터: PGM</em></p>
<p>교회소식 슬라이드 먼저 띄운 뒤, 목사님께서 광고를 진행하시다가 &quot;사랑하고 축복합니다&quot;, &quot;인사 나누겠습니다&quot;라며 인사를 유도하신 이후에 다음 슬라이드로 넘겨 주세요. 행사, 교역자 휴가, 주일만나, 교우소식, 장례, 결혼 등이 있습니다. 영상이 있는 날은 목사님께서 광고 중에 *&quot;준비된 영상 먼저 보시겠습니다&quot;*라고 신호를 주시면 그때 맞춰서 준비된 영상을 클릭해서 재생해요. 이 영상도 클릭하기 직전에 음향 간사님께 *&quot;영상 틀겠습니다.&quot;*라고 미리 말씀해 주세요.</p>
</section>
<section class="print-section">
<h3 id="_4-9-헌금송" tabindex="-1"><a class="header-anchor" href="#_4-9-헌금송"><span>4.9. 헌금송</span></a></h3>
<p><em>프롬프터: PGM</em></p>
<p><em>배경: 6번(찬송가 배경)</em></p>
<p>헌금 순서에는 찬송가 213장 '나의 생명 드리니' 가사를 띄워주시면 됩니다. 이 찬송가는 자주 바뀌지 않고 거의 동일하지만, <strong>특송이 있는 주간</strong>에는 213장을 하지 않고 따로 준비된 특송 가사를 띄워주세요. 이 때도 배경은 6번으로 해주시면 됩니다.</p>
</section>
<section class="print-section">
<h3 id="_4-10-헌금-기도-및-찬양대-입장" tabindex="-1"><a class="header-anchor" href="#_4-10-헌금-기도-및-찬양대-입장"><span>4.10. 헌금 기도 및 찬양대 입장</span></a></h3>
<p><em>프롬프터: PGM → 가사</em></p>
<p>헌금 기도가 드려지는 동안 찬양대석으로 인원들이 이동해요. 찬양대 찬양을 준비하기 위해 프롬프터를 미리 가사로 변경해 둡니다.</p>
</section>
<section class="print-section">
<h3 id="_4-11-찬양대" tabindex="-1"><a class="header-anchor" href="#_4-11-찬양대"><span>4.11. 찬양대</span></a></h3>
<p><em>프롬프터: 가사</em></p>
<p><em>배경: 7번(성가대 배경)</em></p>
<p>찬양대 순서가 되면 제목 띄우고, (우측 모니터로 지휘자의 지휘를 보고) 전주를 들으면서 적당히 가사로 넘어가기 전 <strong>7번 성가대 배경</strong>을 띄워요. 찬양대 자막은 가사 띄어쓰기가 틀린 경우가 있으니 예배 전이나 대표기도 시간 때 미리 살펴보면서 고쳐놓으면 좋아요.</p>
</section>
<section class="print-section">
<h3 id="_4-12-성경-봉독-준비" tabindex="-1"><a class="header-anchor" href="#_4-12-성경-봉독-준비"><span>4.12. 성경 봉독 준비</span></a></h3>
<p><em>프롬프터: PGM</em></p>
<p>찬양대 찬양이 끝나기 직전에 프롬프터를 미리 PGM으로 전환해요. 찬양이 끝나고 성도들의 박수 소리가 나자마자 바로 성경봉독 슬라이드로 이동합니다. 인도자가 강단에서 <em>&quot;마가복음 1장 14절-15절입니다. 마가복음 1장 14절-15절 말씀을...&quot;</em> 하실 때 타이밍을 맞춰 본문 말씀 슬라이드로 넘겨주면 돼요.</p>
</section>
<section class="print-section">
<h3 id="_4-13-설교-ppt" tabindex="-1"><a class="header-anchor" href="#_4-13-설교-ppt"><span>4.13. 설교 PPT</span></a></h3>
<p><em>프롬프터: PGM</em></p>
<p>설교가 시작되면 처음에 설교 제목을 10초 전후로 잠시 띄워뒀다가 다시 빈 화면(카메라 송출)으로 넘겨주시면 됩니다. 목사님이 별도의 설교 슬라이드를 준비해 오셨다면 설교의 맥락에 맞게 적절한 시점에 띄워주시면 되고, 별도의 슬라이드가 없더라도 설교 중에 본문 말씀 몇 절을 언급하시면 위의 성경봉독 슬라이드를 다시 띄워주거나, 정말 없는 경우에는 상단 메뉴의 <strong>성경</strong> 탭을 눌러 본문을 직접 가져와서 띄워줄 수도 있어요.</p>
</section>
<section class="print-section">
<h3 id="_4-14-설교-후-찬양" tabindex="-1"><a class="header-anchor" href="#_4-14-설교-후-찬양"><span>4.14. 설교 후 찬양</span></a></h3>
<p><em>프롬프터: 가사</em></p>
<p><em>배경: 설교 후 찬양</em></p>
<p>설교가 끝나면 다시 찬양팀이 무대로 나오므로 프롬프터를 가사로 전환해 주세요.</p>
</section>
<section class="print-section">
<h3 id="_4-15-결단기도" tabindex="-1"><a class="header-anchor" href="#_4-15-결단기도"><span>4.15. 결단기도</span></a></h3>
<p><em>프롬프터: PGM</em></p>
<p>말씀을 마치며 *&quot;이 시간 우리 말씀을 생각하며 기도하시겠습니다&quot;*와 같은 멘트 하실 때 슬라이드를 결단기도 화면으로 넘겨 주세요.</p>
</section>
<section class="print-section">
<h3 id="_4-16-축도" tabindex="-1"><a class="header-anchor" href="#_4-16-축도"><span>4.16. 축도</span></a></h3>
<p><em>프롬프터: PGM</em></p>
<p>목사님이 강단에서 양손을 높이 드실 때 바로 축도 슬라이드를 클릭해 주시면 됩니다.</p>
</section>
<section class="print-section">
<h3 id="_4-17-예배-마친-후" tabindex="-1"><a class="header-anchor" href="#_4-17-예배-마친-후"><span>4.17. 예배 마친 후</span></a></h3>
<p><em>프롬프터: PGM</em></p>
<p>축도가 후 반주가 흘러나오자마자 명문교회 주일예배 대기영상 슬라이드로 이동해 주시면 됩니다.</p>
</section>
<section class="print-section">
<h3 id="_4-18-2부-예배-후-추가-찬양" tabindex="-1"><a class="header-anchor" href="#_4-18-2부-예배-후-추가-찬양"><span>4.18. [2부] 예배 후 추가 찬양</span></a></h3>
<p><em>프롬프터: 가사 (종료 후 PGM)</em></p>
<p>2부 예배가 끝난 뒤 성도들이 퇴장하실 때 WithEL 찬양팀이 빠른 템포의 찬양을 하나 골라서(보통 두 번째 찬양인 경우가 많음) 추가로 찬양을 한 곡 더 해요. 이때도 가사를 넘겨주시고, 찬양이 완전히 끝나면 다시 대기 영상으로 돌려놓고 프롬프터를 맞춰놓으면 모든 작업이 끝나요.</p>
</section>
<section class="print-section">
<h2 id="_5-상황-대응" tabindex="-1"><a class="header-anchor" href="#_5-상황-대응"><span>5. 상황 대응</span></a></h2>
</section>
<section class="print-section">
<h3 id="_5-1-시상식-및-축복송" tabindex="-1"><a class="header-anchor" href="#_5-1-시상식-및-축복송"><span>5.1. 시상식 및 축복송</span></a></h3>
<p>축복송('축복 하나님의 축복이') 순서가 있는 날에는 가사 중간에 삽입되는 이름이나 대상(예: &quot;OO의 삶에&quot;)이 바뀌게 됩니다. 당일 축복 대상자를 미리 파악한 뒤, 슬라이드 <strong>우클릭 → 빠른 편집</strong>을 통해 가사 텍스트를 예배 전에 미리 수정해 두면 좋습니다.</p>
</section>
<section class="print-section">
<h3 id="_5-3-긴급-슬라이드-추가-시-airdrop" tabindex="-1"><a class="header-anchor" href="#_5-3-긴급-슬라이드-추가-시-airdrop"><span>5.3. 긴급 슬라이드 추가 시 (AirDrop)</span></a></h3>
<p>예배 직전이나 도중에 급한 수정사항이 생겨서 슬라이드 이미지나 가사 <code v-pre>.txt</code> 파일을 AirDrop으로 Mac mini에 전송해 주시는 경우가 있어요.</p>
<ul>
<li>파일 수신 후 상단 메뉴에서 <code v-pre>파일 → 가져오기 → 파일</code>을 선택하고 다운로드 폴더에서 해당 <code v-pre>.txt</code> 파일을 불러오면 프로그램에 등록됩니다.</li>
<li>파일을 가져온 후에는 송출될 포맷에 맞게 슬라이드에 <strong>우클릭 → 작업 추가</strong> 설정을 빠뜨리지 말고 적용해 주세요.</li>
</ul>
</section>
<section class="print-section">
<h3 id="_5-4-선택-라벨-설정" tabindex="-1"><a class="header-anchor" href="#_5-4-선택-라벨-설정"><span>5.4. [선택] 라벨 설정</span></a></h3>
<p>2부 자막 담당자님은 다음 타임인 3부 담당자님이 슬라이드를 한눈에 편하게 구분할 수 있도록 라벨링 작업을 해주시면 좋습니다. 슬라이드 <strong>우클릭 → 라벨</strong>을 통해 색깔 라벨을 지정할 수 있고, <code v-pre>편집...</code> 창을 눌러서 라벨 텍스트도 변경 가능합니다.</p>
</section>
<section class="print-section">
<h3 id="_5-5-선택-방송실-사운드-모니터링" tabindex="-1"><a class="header-anchor" href="#_5-5-선택-방송실-사운드-모니터링"><span>5.5. [선택] 방송실 사운드 모니터링</span></a></h3>
<p>스피커 소리가 잘 안 들리거나 가사를 빠르게 듣고 넘기기가 어렵다면, <strong>6.3M to 3.5F 변환 케이블</strong>을 사용해서 모니터링 이어폰을 연결하면 선명하게 소리를 들으며 작업할 수 있어요.</p>
</section>
</div></template>


