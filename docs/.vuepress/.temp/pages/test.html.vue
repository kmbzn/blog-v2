<template><div><h1 id="heading-level-1" tabindex="-1"><a class="header-anchor" href="#heading-level-1"><span>Heading Level 1</span></a></h1>
<h2 id="heading-level-2-한국어-제목" tabindex="-1"><a class="header-anchor" href="#heading-level-2-한국어-제목"><span>Heading Level 2 - 한국어 제목</span></a></h2>
<h3 id="heading-level-3-영어와-日本語-조합" tabindex="-1"><a class="header-anchor" href="#heading-level-3-영어와-日本語-조합"><span>Heading Level 3 - 영어와 日本語 조합</span></a></h3>
<h4 id="heading-level-4-中文-포함标题" tabindex="-1"><a class="header-anchor" href="#heading-level-4-中文-포함标题"><span>Heading Level 4 - 中文 포함标题</span></a></h4>
<h5 id="heading-level-5-混合語" tabindex="-1"><a class="header-anchor" href="#heading-level-5-混合語"><span>Heading Level 5 - 混合語</span></a></h5>
<h6 id="heading-level-6-끝머리-테스트" tabindex="-1"><a class="header-anchor" href="#heading-level-6-끝머리-테스트"><span>Heading Level 6 - 끝머리 테스트</span></a></h6>
<p>일반 text</p>
<blockquote>
<p>이것은 인용문입니다。</p>
<blockquote>
<p>중첩된 引用也可以正常显示。</p>
<blockquote>
<p>Markdown parserが適切に 처리해야 합니다。</p>
</blockquote>
</blockquote>
</blockquote>
<p>이 문장에는 <strong>굵은 텍스트</strong>, <em>イタリック</em>, 그리고 <em><strong>bold &amp; italic 結合</strong></em>을 포함하고 있습니다.<br>
또한 <code v-pre>inline code</code> 테스트 및 수식 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">E = mc^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord mathnormal">m</span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>도 함께 포함되어 있습니다。</p>
<h2 id="목록-테스트-list-test" tabindex="-1"><a class="header-anchor" href="#목록-테스트-list-test"><span>목록 테스트 - List Test</span></a></h2>
<ul>
<li>한국어 항목
<ul>
<li>English Subitem
<ul>
<li>中文子项目</li>
</ul>
</li>
</ul>
</li>
<li>日本語の項目</li>
</ul>
<ol>
<li>First item</li>
<li>第二项
<ol>
<li>하위 항목</li>
<li>Sub-sub item</li>
</ol>
</li>
</ol>
<h2 id="표-테스트-table-test" tabindex="-1"><a class="header-anchor" href="#표-테스트-table-test"><span>표 테스트 - Table Test</span></a></h2>
<table>
<thead>
<tr>
<th>이름(Name)</th>
<th>年龄(Age)</th>
<th>직업(Occupation)</th>
</tr>
</thead>
<tbody>
<tr>
<td>김병준</td>
<td>25歳</td>
<td>Developer（开发者）</td>
</tr>
<tr>
<td>山田太郎</td>
<td>31岁</td>
<td>デザイナー（디자이너）</td>
</tr>
<tr>
<td>李小龙</td>
<td>28세</td>
<td>무직（無職）</td>
</tr>
</tbody>
</table>
<h2 id="코드블록-테스트-code-blocks" tabindex="-1"><a class="header-anchor" href="#코드블록-테스트-code-blocks"><span>코드블록 테스트 - Code Blocks</span></a></h2>
<h3 id="일반-코드-no-language" tabindex="-1"><a class="header-anchor" href="#일반-코드-no-language"><span>일반 코드 (No language)</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">print("こんにちは, 世界!")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="vuepress-스타일-코드-그룹" tabindex="-1"><a class="header-anchor" href="#vuepress-스타일-코드-그룹"><span>VuePress 스타일 코드 그룹</span></a></h3>
<CodeTabs :data='[{"id":"Python"},{"id":"JavaScript"},{"id":"C"}]'>
<template #title0="{ value, isActive }">Python</template>
<template #title1="{ value, isActive }">JavaScript</template>
<template #title2="{ value, isActive }">C</template>
<template #tab0="{ value, isActive }">
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> x <span class="token operator">+</span> y</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello, "</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"你好，世界！\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="수식-테스트-math-test" tabindex="-1"><a class="header-anchor" href="#수식-테스트-math-test"><span>수식 테스트 - Math Test</span></a></h2>
<h3 id="인라인-수식" tabindex="-1"><a class="header-anchor" href="#인라인-수식"><span>인라인 수식</span></a></h3>
<p>日本語で：インライン数式は <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mi>b</mi><mo>±</mo><msqrt><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>a</mi><mi>c</mi></mrow></msqrt></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></mrow><annotation encoding="application/x-tex">x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.3845em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.0395em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span><span class="mord mathnormal mtight">a</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mathnormal mtight">b</span><span class="mbin mtight">±</span><span class="mord sqrt mtight"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9221em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord mtight" style="padding-left:0.833em;"><span class="mord mtight"><span class="mord mathnormal mtight">b</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7463em;"><span style="top:-2.786em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mbin mtight">−</span><span class="mord mtight">4</span><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">c</span></span></span><span style="top:-2.8821em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail mtight" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1179em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span> のように記述されます。</p>
<h3 id="블록-수식-block-formula" tabindex="-1"><a class="header-anchor" href="#블록-수식-block-formula"><span>블록 수식（Block Formula）</span></a></h3>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mtable rowspacing="0.25em" columnalign="right left" columnspacing="0em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>=</mo><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>c</mi></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><msup><mi>x</mi><mn>2</mn></msup><mtext> </mtext><mi>d</mi><mi>x</mi></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow></mrow><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow></mstyle></mtd></mtr></mtable><annotation encoding="application/x-tex">\begin{aligned}
f(x) &amp;= ax^2 + bx + c \\\\
\int_0^1 x^2~dx &amp;= \frac{1}{3}
\end{aligned}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:5.8001em;vertical-align:-2.65em;"></span><span class="mord"><span class="mtable"><span class="col-align-r"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:3.15em;"><span style="top:-5.8499em;"><span class="pstrut" style="height:3.564em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span></span></span><span style="top:-4.3499em;"><span class="pstrut" style="height:3.564em;"></span><span class="mord"></span></span><span style="top:-2.1259em;"><span class="pstrut" style="height:3.564em;"></span><span class="mord"><span class="mop"><span class="mop op-symbol large-op" style="margin-right:0.44445em;position:relative;top:-0.0011em;">∫</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.564em;"><span style="top:-1.7881em;margin-left:-0.4445em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span><span style="top:-3.8129em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.9119em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace nobreak"> </span><span class="mord mathnormal">d</span><span class="mord mathnormal">x</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:2.65em;"><span></span></span></span></span></span><span class="col-align-l"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:3.15em;"><span style="top:-5.8499em;"><span class="pstrut" style="height:3.564em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">a</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8641em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">b</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">c</span></span></span><span style="top:-2.1259em;"><span class="pstrut" style="height:3.564em;"></span><span class="mord"><span class="mord"></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3214em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">3</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:2.65em;"><span></span></span></span></span></span></span></span></span></span></span></span></p>
<p>または：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi mathvariant="bold">F</mi><mo>=</mo><mi>G</mi><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac></mrow><annotation encoding="application/x-tex">\mathbf{F} = G \frac{m_1 m_2}{r^2}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6861em;"></span><span class="mord mathbf">F</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.7936em;vertical-align:-0.686em;"></span><span class="mord mathnormal">G</span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.1076em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">m</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal">m</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
<h2 id="링크-및-이미지-links-images" tabindex="-1"><a class="header-anchor" href="#링크-및-이미지-links-images"><span>링크 및 이미지 - Links &amp; Images</span></a></h2>
<p><a href="https://www.openai.com" target="_blank" rel="noopener noreferrer">OpenAI 공식 사이트</a><br>
<a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">百度</a></p>
<p><img src="https://media.istockphoto.com/id/520700958/ko/사진/아름다운-꽃-배경기술.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=gJx5-O9U1qXKZqKwv4KunrBae7RDNRcdse1nOdSk_0w=" alt="샘플 이미지"></p>
<h2 id="vuepress-info-tip-블록-테스트" tabindex="-1"><a class="header-anchor" href="#vuepress-info-tip-블록-테스트"><span>VuePress info, tip 블록 테스트</span></a></h2>
<div class="hint-container info">
<p class="hint-container-title">정보</p>
<p>알려드립니다 (Information): 이 블록은 중요한 정보를 담고 있습니다. 这里是重要信息。補足情報はこちらです。This block contains crucial information.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p>핵심 팁 (Tip): 유용한 팁을 놓치지 마세요! ここに役立つヒントがあります。请不要错过有用的提示。Don't miss out on this helpful tip!</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">경고</p>
<p>경고 (Warning): 주의가 필요합니다! 警告！注意が必要です。请多加小心。Proceed with caution!</p>
</div>
<h2 id="youtube-링크-테스트" tabindex="-1"><a class="header-anchor" href="#youtube-링크-테스트"><span>YouTube 링크 테스트</span></a></h2>
<ul>
<li>
<p>일반 링크: <a href="https://youtu.be/xRU1XXHIpIc?si=tbkDGhA8dCkODn1l" target="_blank" rel="noopener noreferrer">YouTube에서 보기</a></p>
</li>
<li>
<p>직접 주소: https://www.youtube.com/watch?v=xRU1XXHIpIc</p>
</li>
<li>
<p>iframe 형식 (HTML 지원 환경에서만 작동):</p>
</li>
</ul>
<iframe width="560" height="315" src="https://www.youtube.com/embed/xRU1XXHIpIc" frameborder="0" allowfullscreen></iframe>
<hr>
<p>끝です。完了。完了了。 The End.</p>
</div></template>


