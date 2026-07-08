<template><div><section class="print-section">
<h1 id="우분투-이미지-비디오-썸네일-미리보기-안-보임-문제-해결" tabindex="-1"><a class="header-anchor" href="#우분투-이미지-비디오-썸네일-미리보기-안-보임-문제-해결"><span>우분투 이미지 비디오 썸네일(미리보기) 안 보임 문제 해결</span></a></h1>
<DateMeta />
<p>우분투 (특히 24.04 LTS)를 사용하다 보면 파일 탐색기 상에서 이미지나 비디오 파일의 썸네일이 어느 순간 사라지거나, 아예 생성되지 않는 현상을 겪게 됩니다. Reddit 등 커뮤니티에 따르면 25.10 이후 버전에서는 해결되었다고 하지만, 안정성을 중시하는 사용자들은 여전히 24.04 LTS를 고수할 필요가 있는 상황입니다. 현재 26.04 LTS가 출시되었음에도 불구하고 초기 불안정성 때문에 24.04 LTS 버전을 사용하는 저같은 분들을 위해, 이 고질적인 문제를 해결하는 방법을 공유합니다.</p>
</section>
<section class="print-section">
<h2 id="_1-비디오-썸네일러-설치-optional" tabindex="-1"><a class="header-anchor" href="#_1-비디오-썸네일러-설치-optional"><span>1. 비디오 썸네일러 설치 (optional)</span></a></h2>
<p>가장 먼저 비디오 파일의 썸네일을 생성해 줄 도구를 설치해야 합니다. 우분투 기본 상태에서는 비디오 썸네일 생성 기능이 없으므로 <code v-pre>ffmpegthumbnailer</code>를 먼저 설치해 줍니다. 이미 설치했거나 비디오의 썸네일이 필요 없는 경우 skip하셔도 됩니다.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ffmpegthumbnailer</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></section>
<section class="print-section">
<h2 id="_2-apparmor-보안-설정-해제" tabindex="-1"><a class="header-anchor" href="#_2-apparmor-보안-설정-해제"><span>2. AppArmor 보안 설정 해제</span></a></h2>
<p>비디오 썸네일러를 설치했더라도 썸네일이 여전히 표시되지 않을 수 있습니다. 우분투 24.04의 보안 정책인 AppArmor가 썸네일을 만드는 샌드박스(<code v-pre>bwrap</code>) 프로세스를 차단하고 있기 때문입니다.</p>
<p>한 번 차단당한 파일은 시스템에서 실패된 것으로 간주하여 다시는 생성을 시도하지 않게 됩니다. 따라서 아래 명령어를 통해 비특권 유저 네임스페이스 제한을 풀어주어야 합니다.</p>
</section>
<section class="print-section">
<h3 id="커널-설정-변경-즉시-적용" tabindex="-1"><a class="header-anchor" href="#커널-설정-변경-즉시-적용"><span>커널 설정 변경 (즉시 적용)</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">kernel.apparmor_restrict_unprivileged_userns</span><span class="token operator">=</span><span class="token number">0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></section>
<section class="print-section">
<h3 id="재부팅-후에도-유지되도록-설정-저장" tabindex="-1"><a class="header-anchor" href="#재부팅-후에도-유지되도록-설정-저장"><span>재부팅 후에도 유지되도록 설정 저장</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token builtin class-name">echo</span> <span class="token string">"kernel.apparmor_restrict_unprivileged_userns = 0"</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/sysctl.d/60-apparmor-thumbnail.conf</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></section>
<section class="print-section">
<h2 id="_3-실패한-썸네일-캐시-강제-삭제" tabindex="-1"><a class="header-anchor" href="#_3-실패한-썸네일-캐시-강제-삭제"><span>3. 실패한 썸네일 캐시 강제 삭제</span></a></h2>
<p>설정을 바꿨다고 해서 바로 썸네일이 표시되지 않을 수 있습니다. 이미 시스템 내부적으로 &quot;이 파일들은 썸네일 생성에 실패한 파일들&quot;이라는 낙인이 찍혀 있기 때문입니다. 이 기록을 지워주어야 파일 관리자가 다시 생성을 시도합니다.</p>
</section>
<section class="print-section">
<h3 id="캐시-삭제-및-파일-관리자-재시작" tabindex="-1"><a class="header-anchor" href="#캐시-삭제-및-파일-관리자-재시작"><span>캐시 삭제 및 파일 관리자 재시작</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token comment"># 실패한 기록이 담긴 캐시 폴더 삭제</span></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> ~/.cache/thumbnails/fail/gnome-thumbnail-factory/*</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 파일 관리자(Nautilus) 완전히 종료 후 재시작</span></span>
<span class="line">nautilus <span class="token parameter variable">-q</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></section>
<section class="print-section">
<h2 id="final-check" tabindex="-1"><a class="header-anchor" href="#final-check"><span>Final Check</span></a></h2>
<p>위 과정을 모두 마치고 다시 파일 탐색기에서 폴더를 열어보면, (그동안 보이지 않던) JPG, PNG 이미지와 MP4 등 비디오 파일들의 썸네일이 정상적으로 표시되는 것을 확인할 수 있습니다.</p>
</section>
</div></template>


