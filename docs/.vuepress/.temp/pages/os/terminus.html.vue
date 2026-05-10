<template><div><h1 id="리눅스-우분투-grub-폰트-변경" tabindex="-1"><a class="header-anchor" href="#리눅스-우분투-grub-폰트-변경"><span>리눅스 우분투 GRUB 폰트 변경</span></a></h1>
<p>우분투에서 가독성 좋은 비트맵 폰트인 <strong>Terminus</strong> 폰트를 사용하여 GRUB 메뉴 폰트 크기를 <code v-pre>32pt</code>로 키우는 방법입니다.</p>
<h2 id="실행-스크립트" tabindex="-1"><a class="header-anchor" href="#실행-스크립트"><span>실행 스크립트</span></a></h2>
<p>아래 명령어를 터미널에 순서대로 입력하거나, 스크립트 파일로 만들어 실행해볼 수 있습니다.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 1. 폰트 설치</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> fonts-terminus</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2. 폰트 버전에 상관없이 32pt의 폰트 생성</span></span>
<span class="line"><span class="token function">sudo</span> grub-mkfont <span class="token parameter variable">-s</span> <span class="token number">32</span> <span class="token parameter variable">-o</span> /boot/grub/fonts/terminus32.pf2 /usr/share/fonts/truetype/terminus/TerminusTTF-*.ttf</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3. GRUB 설정 파일 자동 업데이트</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">'/^GRUB_FONT=/d; $a GRUB_FONT="/boot/grub/fonts/terminus32.pf2"'</span> /etc/default/grub</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 4. 설정 반영 및 재부팅</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">update-grub</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">reboot</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="요약" tabindex="-1"><a class="header-anchor" href="#요약"><span>요약</span></a></h2>
<ol>
<li><code v-pre>fonts-terminus</code> 패키지 설치</li>
<li><code v-pre>grub-mkfont</code>를 통해 32pt 크기의 <code v-pre>.pf2</code> 파일 생성</li>
<li><code v-pre>/etc/default/grub</code> 파일에 폰트 경로 지정</li>
<li><code v-pre>update-grub</code>으로 설정 적용</li>
</ol>
</div></template>


