<template><div><section class="print-section">
<h1 id="우분투-wine-카카오톡-사진-이미지-스크린샷-붙여넣기" tabindex="-1"><a class="header-anchor" href="#우분투-wine-카카오톡-사진-이미지-스크린샷-붙여넣기"><span>우분투 Wine 카카오톡 사진 이미지 스크린샷 붙여넣기</span></a></h1>
<DateMeta />
<div class="hint-container info">
<p class="hint-container-title">버전 정보</p>
<p>Ubuntu 24.04 LTS<br>
Wine 11.0</p>
</div>
<blockquote>
<p><em>핵심 아이디어: Wine 기반 카카오톡은 BMP 포맷만 클립보드 인식이 가능합니다.</em></p>
</blockquote>
<p>리눅스(GNOME Wayland) 환경에서 이미지가 카카오톡에 바로 붙여넣기(Ctrl+V)되지 않아 당황하셨을 겁니다.</p>
<p>Wine 환경 위에서 돌아가는 카카오톡 PC버전은 구조적으로 붙여넣기 시에 PNG를 인식하지 못하고 오직 BMP 형식만 받아들입니다. 이를 해결하기 위해 캡처와 동시에 파일을 저장하고, 클립보드에 BMP 데이터를 주입하는 명령어를 공유합니다.</p>
</section>
<section class="print-section">
<h2 id="_1-개요" tabindex="-1"><a class="header-anchor" href="#_1-개요"><span>1. 개요</span></a></h2>
<ul>
<li>Wine 카카오톡 호환: 클립보드에 <code v-pre>image/bmp</code> 데이터를 포함시켜 카카오톡 복붙 문제를 해결합니다.</li>
<li>자동 백업: 캡처 즉시 <code v-pre>Pictures/Screenshots</code> 폴더에 타임스탬프와 함께 PNG 파일이 저장됩니다.</li>
<li>범용성: 기본 <code v-pre>gnome-screenshot</code> 도구 뿐 아니라 <code v-pre>flameshot</code>과 같은 외부 도구도 완벽 지원합니다.</li>
</ul>
</section>
<section class="print-section">
<h2 id="_2-필수-패키지-설치" tabindex="-1"><a class="header-anchor" href="#_2-필수-패키지-설치"><span>2. 필수 패키지 설치</span></a></h2>
<p>터미널에서 변환 및 클립보드 제어를 위한 필수 패키지를 설치해 주세요.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> gnome-screenshot copyq</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></section>
<section class="print-section">
<h2 id="_3-환경-변수-설정" tabindex="-1"><a class="header-anchor" href="#_3-환경-변수-설정"><span>3. 환경 변수 설정</span></a></h2>
<p>CopyQ가 시스템 클립보드에 정상적으로 접근할 수 있도록 환경 변수를 설정해야 합니다.</p>
<p>먼저 (기존에 실행 중인 CopyQ가 있다면) 종료하고, CopyQ를 X11 호환 레이어(XCB) 모드로 실행해야 합니다. (Wayland 모드의 경우 보안 정책에 따라 작동하지 않게 됩니다.)</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">copyq <span class="token builtin class-name">exit</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">QT_QPA_PLATFORM</span><span class="token operator">=</span>xcb</span>
<span class="line">copyq <span class="token operator">&amp;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></section>
<section class="print-section">
<h2 id="_4-최종-명령어-단축키-등록용" tabindex="-1"><a class="header-anchor" href="#_4-최종-명령어-단축키-등록용"><span>4. 최종 명령어 (단축키 등록용)</span></a></h2>
<p>터미널에서 실행하거나 단축키에 등록할 최종 명령어입니다. 지정한 영역을 캡처하여 파일로 저장하고, 그 파일 데이터를 CopyQ를 통해 클립보드에 이미지(<code v-pre>image/png</code>) 형식으로 밀어 넣습니다.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">'d=~/Pictures/Screenshots; f="$d/screenshot_$(date +%Y%m%d_%H%M%S).png"; mkdir -p "$d"; gnome-screenshot -af "$f" &amp;&amp; (copyq p _ || (QT_QPA_PLATFORM=xcb copyq &amp; sleep 0.5)) &amp;&amp; copyq copy image/png - &lt; "$f"'</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><code v-pre>gnome-screenshot -a</code>: 마우스로 캡처 영역을 선택합니다.</li>
<li><code v-pre>[ -s &quot;$f&quot; ]</code>: 캡처가 정상적으로 완료되어 파일이 생성되었는지 확인합니다.</li>
<li><code v-pre>&lt; &quot;$f&quot;</code>: 실제 이미지 파일의 바이너리 데이터를 CopyQ로 전달합니다.</li>
</ul>
</section>
<section class="print-section">
<h2 id="_5-우분투-키보드-단축키-등록-방법" tabindex="-1"><a class="header-anchor" href="#_5-우분투-키보드-단축키-등록-방법"><span>5. 우분투 키보드 단축키 등록 방법</span></a></h2>
<p>위 명령어를 매번 터미널에 칠 수는 없으니, 키보드 단축키로 등록해 보겠습니다.</p>
<ol>
<li>우분투 설정(Settings) 앱을 엽니다.</li>
<li>왼쪽 사이드바에서 키보드(Keyboard)를 선택합니다.</li>
<li>단축키 보기 및 사용자 설정(View and Customize Shortcuts)을 클릭합니다.</li>
<li>목록 맨 아래의 사용자 설정 단축키(Custom Shortcuts)를 선택합니다.</li>
<li>
<ul>
<li>(추가) 버튼을 누르고 아래 내용을 입력합니다.</li>
</ul>
<ul>
<li>이름: <code v-pre>영역 캡처 후 클립보드 복사</code></li>
<li>명령어: 위 4번 섹션의 <code v-pre>sh -c '...'</code> 전체 명령어를 복사해서 붙여넣습니다.</li>
<li>단축키: 원하는 키 조합을 누릅니다 (예: <code v-pre>PrintScreen</code>).</li>
</ul>
</li>
<li>X를 눌러 창을 닫습니다.</li>
</ol>
</section>
<section class="print-section">
<h2 id="_6-작동-확인" tabindex="-1"><a class="header-anchor" href="#_6-작동-확인"><span>6. 작동 확인</span></a></h2>
<p>이제 설정한 단축키를 눌러 영역을 선택해 보세요. 지정한 경로에 파일이 생성됨과 동시에, 카카오톡 채팅창에서 <code v-pre>Ctrl + V</code>를 누르면 방금 찍은 스크린샷이 이미지 형태로 바로 붙여넣을 수 있게 됩니다.</p>
<p>현재 클립보드 상태를 확인하고 싶다면 터미널에 <code v-pre>wl-paste -l</code>을 입력했을 때 <code v-pre>image/png</code>가 목록에 보이면 <strong>성공</strong>입니다.</p>
<p><img src="@source/os/paste.webp" alt=""></p>
<blockquote>
<p><em>이제 캡처 후 바로 카카오톡 대화창에서 <code v-pre>Ctrl+V</code>를 눌러보세요.</em><br>
<em>깔끔하게 전송되는 것을 확인하실 수 있습니다.</em></p>
</blockquote>
</section>
</div></template>


