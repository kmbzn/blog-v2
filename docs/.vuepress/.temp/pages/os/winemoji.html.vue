<template><div><h1 id="wine-카카오톡-이모지-깨짐-문제-해결" tabindex="-1"><a class="header-anchor" href="#wine-카카오톡-이모지-깨짐-문제-해결"><span>Wine 카카오톡 이모지 깨짐 문제 해결</span></a></h1>
<p align="center">
  <img src="@source/os/logo.webp" width="192" alt="Main Logo" />
</p>
<p>GitHub 링크: <a href="https://github.com/kmbzn/project-winemoji" target="_blank" rel="noopener noreferrer">https://github.com/kmbzn/project-winemoji</a></p>
<h3 id="winemoji-specialized-font-for-resolving-emoji-rendering-errors-in-wine-environments" tabindex="-1"><a class="header-anchor" href="#winemoji-specialized-font-for-resolving-emoji-rendering-errors-in-wine-environments"><span>Winemoji: Specialized font for resolving emoji rendering errors in wine environments</span></a></h3>
<p>🍷😂 <strong>Winemoji</strong>는 리눅스의 Wine 환경에서 카카오톡과 같은 윈도우 기반 앱을 사용할 때 이모지 폰트가 깨지는(tofu) 문제를 해결하기 위해 제작된 특수 목적 폰트입니다. 기존에 이러한 문제로 불편함을 겪고 있던 분들에게 최적의 사용 환경을 제공하는 것을 목표로 시작되었습니다.</p>
<p><strong>Winemoji</strong> is a specialized font designed to resolve the issue of broken emoji fonts (tofu) when using Windows-based applications like KakaoTalk within the Wine environment on Linux systems. It was created with the goal of providing an optimal user experience for those who have previously encountered inconvenience due to this problem.</p>
<p><img src="@source/os/tofu.webp" alt="tofu"></p>
<h2 id="설치-방법" tabindex="-1"><a class="header-anchor" href="#설치-방법"><span>설치 방법</span></a></h2>
<div class="hint-container info">
<p class="hint-container-title">정보</p>
<p>Ubuntu 22.04 LTS<br>
wine 10.0</p>
</div>
<ol>
<li><a href="https://github.com/kmbzn/project-winemoji" target="_blank" rel="noopener noreferrer">github repository</a>에서 <code v-pre>Winemoji-NBG.ttf</code> 파일을 다운로드합니다.</li>
<li>리눅스 시스템의 폰트 폴더로 파일을 이동합니다.<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/.local/share/fonts</span>
<span class="line"><span class="token function">cp</span> Winemoji-NBG.ttf ~/.local/share/fonts/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>폰트 캐시를 갱신합니다.<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">fc-cache <span class="token parameter variable">-fv</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h3 id="💬-카카오톡-적용-방법" tabindex="-1"><a class="header-anchor" href="#💬-카카오톡-적용-방법"><span>💬 카카오톡 적용 방법</span></a></h3>
<p><img src="@source/os/settings.webp" alt="settings"></p>
<ol>
<li>⚙️ → <strong>설정</strong> → <strong>화면</strong> → <strong>기본</strong> → <strong>글씨체</strong> 메뉴로 이동합니다.</li>
<li>글씨체 선택에서 <strong>Winemoji NBG</strong> (or <strong>와인모지 NBG</strong>)를 선택합니다.</li>
<li>카카오톡을 재시작하면 한글과 이모지가 정상적으로 출력되는 것을 확인할 수 있습니다.</li>
</ol>
<p><img src="@source/os/restart.webp" alt=""></p>
<div class="hint-container warning">
<p class="hint-container-title">경고</p>
<p>해당 구현 방식의 한계로 low surrogate 영역에 해당하는 1,024개 이하의 이모지만 사용 가능합니다. Apple의 자체 조합형 이모지나 일부 최신 이모지들의 경우 <strong>여전히 표시되지 않을 수</strong> 있습니다.</p>
</div>
<p><img src="@source/os/chat.webp" alt="chat"></p>
<h2 id="why-not-color-emojis" tabindex="-1"><a class="header-anchor" href="#why-not-color-emojis"><span>Why not color emojis?</span></a></h2>
<p>본 프로젝트에서 컬러 이모지(Noto Color Emoji 등)를 사용하지 않고 흑백(Noto Emoji)을 선택한 이유는 다음과 같습니다.</p>
<ul>
<li>
<p><strong>Wine GDI의 기술적 한계</strong>: 이 프로젝트의 핵심 목표는 리눅스 Wine의 구형 GDI 렌더러 호환성 확보입니다. GDI는 최신 컬러 폰트 규격(CBDT/CBLC, SBIX 등)을 정상적으로 처리하지 못하며, 컬러 데이터를 강제로 병합할 경우 폰트 자체가 인식되지 않거나 레이아웃 붕괴가 발생할 수 있습니다.</p>
</li>
<li>
<p><strong>렌더링 안정성</strong>: 흑백 outline 폰트는 폰트 크기나 해상도에 관계없이 벡터 방식으로 선명하게 렌더링됩니다. 이는 비트맵 기반이 섞인 컬러 이모지보다 저해상도 Wine 환경에서 훨씬 높은 가독성과 안정성을 제공합니다.</p>
</li>
<li>
<p><strong>파일 최적화 및 복잡성 제거</strong>: 컬러 레이어를 병합하는 공정은 폰트 파일의 용량을 증가시키며, 수동으로 크기를 조절하는 과정에서 데이터가 손실될 위험이 큽니다. 본 프로젝트는 실용성과 확실한 문제 해결을 위해 안정적인 흑백 폰트를 소스로 채택했습니다. 실제 Windows PC 카카오톡도 흑백 이모지만 지원하고 있습니다.</p>
</li>
</ul>
<h2 id="구현-원리" tabindex="-1"><a class="header-anchor" href="#구현-원리"><span>구현 원리</span></a></h2>
<p>리눅스 Wine의 GDI renderer(<code v-pre>gdi32.dll</code>)는 유니코드 Plane 1 이상의 이모지(<code v-pre>U+1Fxxx</code> 등)를 정상적으로 렌더링하지 못하는 고질적인 문제가 있습니다. 카카오톡 PC버전의 텍스트 영역(입력란을 제외한)의 경우 모두 이 <code v-pre>gdi32.dll</code>을 사용하여 텍스트를 출력하도록 개발되었습니다. 이에 따라 wine 환경 상의 PC버전 카카오톡에서는 하나의 이모지가 두 개의 surrogate font로 출력됩니다. 일반적인 폰트 파일의 경우 이 surrogate 영역에 폰트를 mapping하는 경우는 없기에, 사용자 입장에서는 이모지가 두 개의 사각형 등으로 깨져서 보이게 됩니다. 이 문제를 해결하기 위해 본 프로젝트는 다음과 같은 우회로를 설계했습니다.</p>
<ul>
<li><strong>Low Surrogate 매핑:</strong> Plane 1의 이모지 데이터들을 BMP(Basic Multilingual Plane) 영역 내의 <strong>Low Surrogate (<code v-pre>U+DC00</code> ~ <code v-pre>U+DFFF</code>)</strong> 대역에 강제 복제시켰습니다.</li>
<li><strong>서열 정리 logic:</strong> 동일한 Surrogate 슬롯을 점유하려는 이모지들 간의 충돌을 방지하기 위해, 일상에서 좀 더 자주 사용되는 얼굴 표정 이모지(🤣 등)에 높은 가중치를 부여하는 자체적인 <strong>Priority Logic</strong>을 적용했습니다.</li>
<li><strong>High Surrogate 공백</strong>: High Surrogate의 역할이 없어지므로, 폭 값이 <code v-pre>0</code>인 공백 문자로 1,024개의 영역을 채워주었습니다.</li>
<li><strong>메트릭스 동기화:</strong> 나눔바른고딕의 <strong>Ascent 800 / Descent 200</strong> 규격에 맞춰 이모지 크기를 일괄 조정하였습니다.</li>
</ul>
<h3 id="how-to-build-my-own-winemoji-replication" tabindex="-1"><a class="header-anchor" href="#how-to-build-my-own-winemoji-replication"><span>How to build my own Winemoji? (Replication)</span></a></h3>
<p>기본적으로 라이선스상 폰트 편집 문제에서 자유롭고, 적용했을 때 글꼴이 선명하게 렌더링되는 특징을 가진 나눔바른고딕을 선택하여 그 기반으로 제작하였으나, 이외의 다른 폰트를 base로 삼기를 원한다면 아래 절차를 따르십시오.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> fontforge</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li><strong>준비:</strong> <strong>FontForge</strong>를 설치하고 베이스가 될 폰트와 소스 이모지 폰트를 준비합니다.</li>
<li><strong>이름 변경:</strong> 라이선스 준수 및 시스템 충돌 방지를 위해 <strong>Font Info</strong>에서 폰트 이름을 고유한 이름(예: <code v-pre>MyEmoji-NBG</code>)으로 변경합니다.</li>
<li><strong>스크립트 실행:</strong> 아래의 FontForge python script를 실행하여 이모지를 Low Surrogate 영역으로 복사합니다.</li>
<li><strong>크기 조정:</strong> 복사된 이모지들을 전체 선택하여 <strong>Element → Transformations</strong> 메뉴에서 베이스 폰트의 EM Size에 맞게 크기를 조절합니다.</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p>Priority 함수를 통해 🤣(U+1F923)와 같이 주로 사용되는 이모지가 🔣(U+1F523)와 같이 잘 사용되지 않는 이모지들에 비해 higher priority를 갖도록 수동으로 설정하는 것이 도움이 될 수 있습니다.</p>
</div>
<h2 id="fontforge-paste-python-script" tabindex="-1"><a class="header-anchor" href="#fontforge-paste-python-script"><span>Fontforge Paste Python Script</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">import</span> fontforge</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">get_priority</span><span class="token punctuation">(</span>cp<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0x1F600</span> <span class="token operator">&lt;=</span> cp <span class="token operator">&lt;=</span> <span class="token number">0x1F64F</span><span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token punctuation">(</span><span class="token number">0x1F900</span> <span class="token operator">&lt;=</span> cp <span class="token operator">&lt;=</span> <span class="token number">0x1F9FF</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token number">120</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0x1F300</span> <span class="token operator">&lt;=</span> cp <span class="token operator">&lt;=</span> <span class="token number">0x1F5FF</span><span class="token punctuation">)</span> <span class="token keyword">or</span> <span class="token punctuation">(</span><span class="token number">0x1F1E6</span> <span class="token operator">&lt;=</span> cp <span class="token operator">&lt;=</span> <span class="token number">0x1F1FF</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token number">100</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0x1FA00</span> <span class="token operator">&lt;=</span> cp <span class="token operator">&lt;=</span> <span class="token number">0x1FAFF</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token number">80</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0x10000</span> <span class="token operator">&lt;=</span> cp <span class="token operator">&lt;</span> <span class="token number">0x20000</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token number">50</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">migrate_emojis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    font <span class="token operator">=</span> fontforge<span class="token punctuation">.</span>activeFont<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token keyword">not</span> font<span class="token punctuation">:</span> <span class="token keyword">return</span></span>
<span class="line"></span>
<span class="line">    font<span class="token punctuation">.</span>reencode<span class="token punctuation">(</span><span class="token string">'UnicodeFull'</span><span class="token punctuation">)</span></span>
<span class="line">    migration_plan <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Starting emoji mapping to Low Surrogate area..."</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">for</span> glyph <span class="token keyword">in</span> font<span class="token punctuation">.</span>glyphs<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        cp <span class="token operator">=</span> glyph<span class="token punctuation">.</span><span class="token builtin">unicode</span></span>
<span class="line">        <span class="token keyword">if</span> cp <span class="token operator">&lt;</span> <span class="token number">0x10000</span> <span class="token keyword">or</span> cp <span class="token operator">>=</span> <span class="token number">0x20000</span><span class="token punctuation">:</span> <span class="token keyword">continue</span></span>
<span class="line">        </span>
<span class="line">        priority <span class="token operator">=</span> get_priority<span class="token punctuation">(</span>cp<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> priority <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span> <span class="token keyword">continue</span></span>
<span class="line"></span>
<span class="line">        target_low <span class="token operator">=</span> <span class="token number">0xDC00</span> <span class="token operator">+</span> <span class="token punctuation">(</span>cp <span class="token operator">-</span> <span class="token number">0x10000</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">0x400</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">if</span> target_low <span class="token keyword">not</span> <span class="token keyword">in</span> migration_plan <span class="token keyword">or</span> priority <span class="token operator">></span> migration_plan<span class="token punctuation">[</span>target_low<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">:</span></span>
<span class="line">            migration_plan<span class="token punctuation">[</span>target_low<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>priority<span class="token punctuation">,</span> cp<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    count <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">for</span> target_low<span class="token punctuation">,</span> <span class="token punctuation">(</span>priority<span class="token punctuation">,</span> source_cp<span class="token punctuation">)</span> <span class="token keyword">in</span> migration_plan<span class="token punctuation">.</span>items<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">try</span><span class="token punctuation">:</span></span>
<span class="line">            font<span class="token punctuation">.</span>selection<span class="token punctuation">.</span>select<span class="token punctuation">(</span>source_cp<span class="token punctuation">)</span></span>
<span class="line">            font<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            </span>
<span class="line">            <span class="token keyword">if</span> target_low <span class="token keyword">not</span> <span class="token keyword">in</span> font<span class="token punctuation">:</span> font<span class="token punctuation">.</span>createChar<span class="token punctuation">(</span>target_low<span class="token punctuation">)</span></span>
<span class="line">            font<span class="token punctuation">.</span>selection<span class="token punctuation">.</span>select<span class="token punctuation">(</span>target_low<span class="token punctuation">)</span></span>
<span class="line">            font<span class="token punctuation">.</span>paste<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            </span>
<span class="line">            count <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token keyword">except</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">continue</span></span>
<span class="line"></span>
<span class="line">    font<span class="token punctuation">.</span>changed <span class="token operator">=</span> <span class="token boolean">True</span></span>
<span class="line">    font<span class="token punctuation">.</span>redraw<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"Process complete: </span><span class="token interpolation"><span class="token punctuation">{</span>count<span class="token punctuation">}</span></span><span class="token string"> emojis mapped."</span></span><span class="token punctuation">)</span></span>
<span class="line">    fontforge<span class="token punctuation">.</span>postError<span class="token punctuation">(</span><span class="token string">"Complete"</span><span class="token punctuation">,</span> <span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>count<span class="token punctuation">}</span></span><span class="token string"> emojis have been mapped to Low Surrogate area. Please adjust metrics in the GUI."</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">migrate_emojis<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🛠-tested-environment" tabindex="-1"><a class="header-anchor" href="#🛠-tested-environment"><span>🛠 Tested Environment</span></a></h2>
<table>
<thead>
<tr>
<th></th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>OS</td>
<td>Ubuntu 22.04 LTS</td>
</tr>
<tr>
<td>GNOME</td>
<td>GNOME Shell 42.9 (Wayland)</td>
</tr>
<tr>
<td>HW</td>
<td>Lenovo ThinkPad X13 Gen1</td>
</tr>
<tr>
<td>wine</td>
<td>wine-10.0</td>
</tr>
<tr>
<td>Verified Apps</td>
<td>KakaoTalk (x64)</td>
</tr>
</tbody>
</table>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license"><span>License</span></a></h2>
<p>This font project is distributed under the <strong>SIL Open Font License 1.1</strong>.</p>
<ul>
<li><strong>NanumBarunGothic</strong>: Copyright (c) 2013 NHN Corporation. Licensed under SIL OFL 1.1.</li>
<li><strong>Noto Emoji</strong>: Copyright (c) Google Inc. Licensed under SIL OFL 1.1.</li>
<li><strong>Winemoji Modifications</strong>: Copyright (c) 2025 by <a href="https://kmbzn.com" target="_blank" rel="noopener noreferrer">KeyBaseZone</a>. Licensed under SIL OFL 1.1.</li>
</ul>
<p>Permission is hereby granted, free of charge, to any person obtaining a copy of the Font Software, to use, study, copy, merge, embed, modify, redistribute, and sell modified and unmodified copies of the Font Software, subject to the conditions set forth in the SIL OFL 1.1.</p>
</div></template>


