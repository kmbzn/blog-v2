<template><div><h1 id="python-시간-초과-방지를-위한-팁" tabindex="-1"><a class="header-anchor" href="#python-시간-초과-방지를-위한-팁"><span>Python 시간 초과 방지를 위한 팁</span></a></h1>
<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" width="180" alt="Bitcoin logo" />
</p>
<p>필자는 최근 교내 알고리즘 대회에 참가하여 평상시 가장 익숙한 언어인 <strong>Python</strong>으로 문제를 풀었다.<br>
하지만 몇몇 문제에서 끝내 시간 초과(Time Limit Exceeded)를 해결하지 못해 아쉬운 결과를 얻었다.<br>
대회 규정상 외부 사이트 검색이나 LLM 사용이 일절 금지되어 있었기 때문에, 평소 익숙하지 않았던 입출력 최적화나 자료구조 선택에 대한 기본기를 떠올릴 수 없었다.<br>
해당 경험을 계기로, Python으로 알고리즘 문제를 풀 때 실수하기 쉬운 <strong>시간 초과의 원인과 이를 방지하기 위한 기본적인 최적화 기법들</strong>을 정리해두는 것이 필요하다고 느꼈다.<br>
이 글은 필자가 추후에 있을 대회나 코테를 대비하기 위해 정리한 메모이며, Python 사용자에게 도움이 될 수 있도록 간결하고 실용적인 내용 위주로 구성하였다.</p>
<hr>
<p>시간 제한이 1초 또는 2초인 문제를 풀 때는 단순한 구현보다는 <strong>입출력 속도</strong>, <strong>데이터 구조 선택</strong>, <strong>불필요한 연산 제거</strong> 등의 최적화 요소가 중요하다.<br>
아래는 이를 개선할 수 있는 핵심 기법들과 그 이유를 정리한 것이다.</p>
<h2 id="입력-속도-최적화-input-vs-sys-stdin-readline" tabindex="-1"><a class="header-anchor" href="#입력-속도-최적화-input-vs-sys-stdin-readline"><span>입력 속도 최적화: <code v-pre>input()</code> vs <code v-pre>sys.stdin.readline()</code></span></a></h2>
<p>Python으로 알고리즘 문제를 풀 때 시간 초과가 발생하는 가장 흔한 원인 중 하나는 <strong>입력 속도가 느리다는 점</strong>이다.<br>
특히 입력 데이터가 많은 문제에서는 <code v-pre>input()</code>을 사용하는 것만으로도 <strong>시간 초과</strong>가 발생할 수 있다.</p>
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p>Python의 <code v-pre>input()</code> 함수는 내부적으로 여러 처리 과정을 거치기 때문에 상대적으로 느리다.<br>
많은 양의 입력을 빠르게 처리해야 할 때는 <code v-pre>sys.stdin.readline()</code>을 사용하는 것이 효율적이다.</p>
</div>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">import</span> sys</span>
<span class="line">n <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>실행 시간 비교 (단일 입력 기준)</strong></p>
<ul>
<li><code v-pre>input()</code> → 약 100μs</li>
<li><code v-pre>sys.stdin.readline()</code> → 약 15~30μs<br>
3배에서 최대 <strong>6배</strong> 차이</li>
</ul>
</blockquote>
<h2 id="배열-삽입-최적화-append-vs-index-접근" tabindex="-1"><a class="header-anchor" href="#배열-삽입-최적화-append-vs-index-접근"><span>배열 삽입 최적화: <code v-pre>append()</code> vs Index 접근</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token comment"># 느린 방식: append()</span></span>
<span class="line">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    arr<span class="token punctuation">.</span>append<span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 빠른 방식: Index 접근</span></span>
<span class="line">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> n</span>
<span class="line"><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>이유</strong><br>
<code v-pre>append()</code>는 내부적으로 동적 배열 크기 재조정이 발생할 수 있고, Cache miss도 유발됨</p>
</blockquote>
<h2 id="출력-최적화-print-반복-vs-문자열-누적-후-일괄-출력" tabindex="-1"><a class="header-anchor" href="#출력-최적화-print-반복-vs-문자열-누적-후-일괄-출력"><span>출력 최적화: <code v-pre>print()</code> 반복 vs 문자열 누적 후 일괄 출력</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token comment"># 느린 방식</span></span>
<span class="line"><span class="token keyword">for</span> x <span class="token keyword">in</span> arr<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 빠른 방식</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'\n'</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>이유</strong><br>
<code v-pre>print()</code>는 호출될 때마다 I/O 작업이 발생하므로 반복 호출 시 overhead가 큼</p>
</blockquote>
<h2 id="재귀-제한-조정" tabindex="-1"><a class="header-anchor" href="#재귀-제한-조정"><span>재귀 제한 조정</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p>Python의 기본 재귀 깊이는 <code v-pre>1,000</code>으로 제한되어 있어, DFS나 분할정복 등의 알고리즘에서 문제가 발생할 수 있다.<br>
이럴 경우에 재귀 깊이를 늘려줄 수 있다.</p>
</div>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">import</span> sys</span>
<span class="line">sys<span class="token punctuation">.</span>setrecursionlimit<span class="token punctuation">(</span><span class="token number">10</span><span class="token operator">**</span><span class="token number">6</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>주의</strong><br>
재귀 깊이를 과도하게 설정할 경우 메모리 부족으로 인해 프로그램이 <strong>비정상 종료</strong>될 수 있음</p>
</blockquote>
<h2 id="queue-구조-최적화-list-vs-deque" tabindex="-1"><a class="header-anchor" href="#queue-구조-최적화-list-vs-deque"><span>Queue 구조 최적화: <code v-pre>list</code> vs <code v-pre>deque</code></span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token comment"># 비효율적 방식</span></span>
<span class="line">queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">queue<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># O(n)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 효율적 방식</span></span>
<span class="line"><span class="token keyword">from</span> collections <span class="token keyword">import</span> deque</span>
<span class="line">queue <span class="token operator">=</span> deque<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">queue<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">queue<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># O(1)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>이유</strong><br>
list에서 <code v-pre>pop(0)</code>을 하면 모든 요소를 한 칸씩 당겨야 하므로 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span>이 소요<br>
반면 <code v-pre>deque</code>는 양방향 큐이기 때문에 <code v-pre>append</code>, <code v-pre>popleft</code>가 모두 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span></span></span></span>로 동작</p>
</blockquote>
<h2 id="boj-시간-제한-기준과-허용-시간복잡도" tabindex="-1"><a class="header-anchor" href="#boj-시간-제한-기준과-허용-시간복잡도"><span>BOJ 시간 제한 기준과 허용 시간복잡도</span></a></h2>
<table>
<thead>
<tr>
<th>시간 제한</th>
<th>허용되는 대략적 연산 수</th>
</tr>
</thead>
<tbody>
<tr>
<td>1초</td>
<td><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding="application/x-tex">10^8</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">8</span></span></span></span></span></span></span></span></span></span></span> 연산 이하</td>
</tr>
<tr>
<td>2초</td>
<td><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding="application/x-tex">2 \cdot 10^8</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">8</span></span></span></span></span></span></span></span></span></span></span> 연산 이하</td>
</tr>
</tbody>
</table>
<p>따라서 알고리즘의 시간복잡도가 다음 조건을 만족하는지 반드시 확인해야 한다.</p>
<ul>
<li>입력 크기 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>≤</mo><msup><mn>10</mn><mn>5</mn></msup></mrow><annotation encoding="application/x-tex">n \le 10^5</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7719em;vertical-align:-0.136em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">5</span></span></span></span></span></span></span></span></span></span></span>일 경우 → <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mi>log</mi><mo>⁡</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n \log n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span> 이하가 적절</li>
<li>입력 크기 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi><mo>≤</mo><msup><mn>10</mn><mn>3</mn></msup></mrow><annotation encoding="application/x-tex">n \le 10^3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7719em;vertical-align:-0.136em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord">1</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span></span></span></span></span></span></span></span>일 경우 → <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n^2)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>까지 가능</li>
</ul>
<h2 id="요약" tabindex="-1"><a class="header-anchor" href="#요약"><span>요약</span></a></h2>
<table>
<thead>
<tr>
<th>최적화 항목</th>
<th>개선 방법</th>
<th>이유</th>
</tr>
</thead>
<tbody>
<tr>
<td>입력 처리</td>
<td><code v-pre>sys.stdin.readline()</code></td>
<td>빠른 처리 속도</td>
</tr>
<tr>
<td>배열 저장</td>
<td>Index 접근</td>
<td>메모리 접근 패턴 개선</td>
</tr>
<tr>
<td>반복 출력</td>
<td>문자열 누적 후 일괄 출력</td>
<td>I/O 비용 절감</td>
</tr>
<tr>
<td>재귀 사용</td>
<td><code v-pre>sys.setrecursionlimit()</code></td>
<td>기본 제한 초과 방지</td>
</tr>
<tr>
<td>큐 처리</td>
<td><code v-pre>collections.deque</code></td>
<td><code v-pre>pop(0)</code>의 비효율 제거</td>
</tr>
</tbody>
</table>
<hr>
<p>시간 초과는 단순히 &quot;더 빠르게 짜야 한다&quot;는 문제만이 아니다.<br>
<strong>Python이라는 언어의 특성</strong>, <strong>문제 환경의 제약</strong>, <strong>시간복잡도의 현실적인 한계</strong>를 모두 이해하고,<br>
그에 맞는 <strong>기초적인 최적화 습관</strong>을 몸에 익히는 것이 무엇보다 중요할 것이다.</p>
</div></template>


