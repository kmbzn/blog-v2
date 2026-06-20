<template><div><section class="print-section">
<h1 id="ubuntu-윈도우-애니메이션-끄기" tabindex="-1"><a class="header-anchor" href="#ubuntu-윈도우-애니메이션-끄기"><span>Ubuntu 윈도우 애니메이션 끄기</span></a></h1>
<DateMeta />
<p>우분투를 설치한 후 시스템이 묘하게 무겁거나, 더 빠릿한 창 전환을 원하신다면 <strong>애니메이션 효과</strong>를 끄는 것을 시도해볼 수 있습니다.</p>
<div class="hint-container warning">
<p class="hint-container-title">경고</p>
<p><strong>Just Perfection</strong> extension이 활성화되어 있는 경우 설정이 적용되지 않을 수 있습니다.<br>
이 때는 별도로 GUI 내에서 설정해 주셔야 합니다.</p>
</div>
<p>아래 명령어를 터미널에 입력하시면 됩니다.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">gsettings <span class="token builtin class-name">set</span> org.gnome.desktop.interface enable-animations <span class="token boolean">false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></section>
</div></template>


