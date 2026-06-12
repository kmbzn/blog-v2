<template><div><h1 id="final-exam" tabindex="-1"><a class="header-anchor" href="#final-exam"><span>Final Exam</span></a></h1>
<DateMeta />
<h2 id="_1-parameter-passing-methods" tabindex="-1"><a class="header-anchor" href="#_1-parameter-passing-methods"><span>1. Parameter Passing Methods</span></a></h2>
<h3 id="semantics-models" tabindex="-1"><a class="header-anchor" href="#semantics-models"><span>Semantics Models</span></a></h3>
<ul>
<li><strong>in mode</strong>: caller → callee 방향, 함수 내부에서 읽기만 가능</li>
<li><strong>out mode</strong>: callee → caller 방향, 함수 종료 시 결과 복사</li>
<li><strong>inout mode</strong>: 양방향</li>
</ul>
<h3 id="pass-by-value" tabindex="-1"><a class="header-anchor" href="#pass-by-value"><span>Pass-by-value</span></a></h3>
<p>caller의 값을 복사해서 callee에 전달. callee에서 변경해도 원본에 영향 없음.</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> in<span class="token punctuation">)</span> <span class="token punctuation">{</span> in <span class="token operator">=</span> in <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a = 20 그대로</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>장점: 빠름 (scalar 기준)
단점: 크기가 큰 데이터는 복사 비용 증가</p>
<h3 id="pass-by-result" tabindex="-1"><a class="header-anchor" href="#pass-by-result"><span>Pass-by-result</span></a></h3>
<p>함수 종료 시 callee의 지역 변수 값을 caller로 복사 (out mode).
함수 내에서 초기값을 읽지 않음.</p>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code class="language-csharp"><span class="line"><span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Fixer</span><span class="token punctuation">(</span><span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">int</span></span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span> x <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>문제점 1: 같은 변수를 두 번 out으로 전달하면 마지막에 복사되는 값에 의존</p>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code class="language-csharp"><span class="line">f<span class="token punctuation">.</span><span class="token function">Fixer</span><span class="token punctuation">(</span><span class="token keyword">out</span> a<span class="token punctuation">,</span> <span class="token keyword">out</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a = 17 또는 35 — 순서에 의존</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>문제점 2: 평가 시점 차이</p>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code class="language-csharp"><span class="line"><span class="token function">DoIt</span><span class="token punctuation">(</span><span class="token keyword">out</span> list<span class="token punctuation">[</span>sub<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">out</span> sub<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// call-time 평가: list[3] = 17, sub = 5</span></span>
<span class="line"><span class="token comment">// return-time 평가: sub가 먼저 5가 되어 list[5] = 17</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pass-by-value-result" tabindex="-1"><a class="header-anchor" href="#pass-by-value-result"><span>Pass-by-value-result</span></a></h3>
<p>진입 시 값 복사 + 종료 시 다시 복사 (inout mode). copy-in/copy-out이라고도 함.</p>
<h3 id="pass-by-reference" tabindex="-1"><a class="header-anchor" href="#pass-by-reference"><span>Pass-by-reference</span></a></h3>
<p>주소를 전달. callee에서 변경하면 원본도 바뀜.</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>in<span class="token punctuation">)</span> <span class="token punctuation">{</span> in <span class="token operator">=</span> in <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a = 30</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>단점: 의도치 않은 변경, alias 생성 위험</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token function">fun</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span> total<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// first와 second가 같은 변수 — alias</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="pass-by-name" tabindex="-1"><a class="header-anchor" href="#pass-by-name"><span>Pass-by-name</span></a></h3>
<p>실제 매개변수의 표현식을 그대로 넘겨 매 접근 시 재평가. Algol 60에서 사용, 현재는 거의 쓰이지 않음.</p>
<h3 id="pass-by-assignment-python-ruby" tabindex="-1"><a class="header-anchor" href="#pass-by-assignment-python-ruby"><span>Pass-by-assignment (Python, Ruby)</span></a></h3>
<p>모든 데이터가 object.</p>
<ul>
<li>immutable object (str, int, tuple) → call-by-value 효과</li>
<li>mutable object (list, dict, set) → call-by-reference 효과</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span>  <span class="token comment"># int: 원본 변화 없음</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    x<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>  <span class="token comment"># list: 원본 변경됨</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="언어별-요약" tabindex="-1"><a class="header-anchor" href="#언어별-요약"><span>언어별 요약</span></a></h3>
<table>
<thead>
<tr>
<th>언어</th>
<th>기본 방식</th>
<th>reference 방법</th>
</tr>
</thead>
<tbody>
<tr>
<td>C</td>
<td>pass-by-value</td>
<td>포인터 전달</td>
</tr>
<tr>
<td>C++</td>
<td>pass-by-value</td>
<td><code v-pre>&amp;</code> (reference), <code v-pre>const &amp;</code> (in-mode)</td>
</tr>
<tr>
<td>Java</td>
<td>pass-by-value</td>
<td>객체는 참조값을 value로 전달</td>
</tr>
<tr>
<td>C#</td>
<td>pass-by-value</td>
<td><code v-pre>ref</code> (inout), <code v-pre>out</code> (result)</td>
</tr>
<tr>
<td>Python/Ruby</td>
<td>pass-by-assignment</td>
<td>타입에 따라 다름</td>
</tr>
</tbody>
</table>
<h3 id="swap-예시-분석" tabindex="-1"><a class="header-anchor" href="#swap-예시-분석"><span>swap 예시 분석</span></a></h3>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> temp<span class="token punctuation">;</span> temp <span class="token operator">=</span> a<span class="token punctuation">;</span> a <span class="token operator">=</span> b<span class="token punctuation">;</span> b <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">int</span> value <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> list<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">swap</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> list<span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// (3)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>pass-by-value: 변화 없음</li>
<li>pass-by-reference: value=5, list={1,3,2,7,9}</li>
<li>pass-by-value-result (call-time 주소 평가): value=5, list={1,3,2,7,9}</li>
<li>pass-by-value-result (return-time 주소 평가): value=5 후 list[5]에 쓰려 함 → 범위 오류 가능</li>
</ul>
<h2 id="_2-implementing-subprogram-ari-static-chain" tabindex="-1"><a class="header-anchor" href="#_2-implementing-subprogram-ari-static-chain"><span>2. Implementing Subprogram (ARI, Static Chain)</span></a></h2>
<h3 id="activation-record-ar" tabindex="-1"><a class="header-anchor" href="#activation-record-ar"><span>Activation Record (AR)</span></a></h3>
<p>subprogram 호출 시 runtime stack에 쌓이는 프레임 구조.</p>
<table>
<thead>
<tr>
<th>구성 요소</th>
<th>설정 주체</th>
<th>역할</th>
</tr>
</thead>
<tbody>
<tr>
<td>Return address</td>
<td>Caller</td>
<td>복귀 위치</td>
</tr>
<tr>
<td>Dynamic link</td>
<td>Caller</td>
<td>caller의 ARI를 가리키는 포인터</td>
</tr>
<tr>
<td>Actual parameters</td>
<td>Caller</td>
<td>전달된 인자</td>
</tr>
<tr>
<td>Local variables</td>
<td>Callee</td>
<td>지역 변수 공간</td>
</tr>
</tbody>
</table>
<ul>
<li><strong>EP (Environment Pointer)</strong>: 현재 실행 중인 ARI의 base를 가리킴</li>
<li>호출 시 현재 EP를 new ARI에 dynamic link로 저장 후, EP를 새 ARI base로 변경</li>
<li>종료 시 EP를 dynamic link로 복원</li>
</ul>
<h3 id="prologue-epilogue" tabindex="-1"><a class="header-anchor" href="#prologue-epilogue"><span>Prologue / Epilogue</span></a></h3>
<ul>
<li>
<p><strong>Prologue</strong> (Callee, 실행 시작):</p>
<ol>
<li>old EP를 dynamic link로 저장</li>
<li>지역 변수 공간 할당</li>
</ol>
</li>
<li>
<p><strong>Epilogue</strong> (Callee, 실행 종료):</p>
<ol>
<li>out-mode 파라미터 값 반환</li>
<li>함수 반환값을 caller 접근 가능한 위치로 이동</li>
<li>stack top을 EP-1로 복원, EP를 dynamic link로 복원</li>
<li>caller 실행 상태 복원</li>
<li>caller에게 제어 이전</li>
</ol>
</li>
</ul>
<h3 id="local-offset-chain-offset" tabindex="-1"><a class="header-anchor" href="#local-offset-chain-offset"><span>Local Offset / Chain Offset</span></a></h3>
<p>변수 접근 표기: <code v-pre>(chain_offset, local_offset)</code></p>
<ul>
<li><strong>local_offset</strong>: ARI 시작부터 해당 변수까지의 거리 (컴파일 타임 결정)</li>
<li><strong>chain_offset</strong>: 몇 번 static link를 따라가야 하는지</li>
</ul>
<p>static link는 ARI에 추가된 포인터로, 자신을 감싸는 lexical parent의 ARI를 가리킴.</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">Bigsub:   A(offset=3), B(offset=4), C(offset=5)    [depth=0]</span>
<span class="line">  Sub1:   A(offset=3)                              [depth=1]</span>
<span class="line">  Sub2:   B(offset=4)                              [depth=1]</span>
<span class="line">    Sub3: E(offset=4)                              [depth=2]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sub3에서:</p>
<ul>
<li>지역 변수 E: (0, 4)</li>
<li>Sub2의 B: (1, 4) — B는 Sub2의 첫 지역 변수지만 Sub2에 parameter가 있으면 offset 밀림</li>
<li>Bigsub의 A: (2, 3)</li>
</ul>
<p>Sub2에서:</p>
<ul>
<li>Bigsub의 A: (1, 3)</li>
<li>D는 없음 → static semantic error</li>
</ul>
<h3 id="simple-vs-stack-dynamic" tabindex="-1"><a class="header-anchor" href="#simple-vs-stack-dynamic"><span>Simple vs Stack-Dynamic</span></a></h3>
<ul>
<li><strong>Simple subprogram</strong>: 재귀 없음, 지역 변수가 모두 static → ARI 고정 크기, 컴파일 타임에 static 할당</li>
<li><strong>Stack-dynamic</strong>: 재귀 지원, 호출마다 새 ARI 동적 생성</li>
</ul>
<h3 id="dynamic-scoping" tabindex="-1"><a class="header-anchor" href="#dynamic-scoping"><span>Dynamic Scoping</span></a></h3>
<ul>
<li>
<p><strong>Deep access</strong>: dynamic chain(동적 링크) 따라 가장 최근 ARI부터 변수 탐색</p>
<ul>
<li>속도: O(depth)</li>
<li>단점: 컴파일 타임에 chain 길이 알 수 없음</li>
</ul>
</li>
<li>
<p><strong>Shallow access</strong>: 변수 이름마다 별도 stack 유지, top이 현재 값</p>
<ul>
<li>속도: O(1)</li>
<li>단점: subprogram 진입/종료 시 모든 변수 stack push/pop 비용</li>
</ul>
</li>
</ul>
<h2 id="_3-concurrency" tabindex="-1"><a class="header-anchor" href="#_3-concurrency"><span>3. Concurrency</span></a></h2>
<h3 id="핵심-용어" tabindex="-1"><a class="header-anchor" href="#핵심-용어"><span>핵심 용어</span></a></h3>
<ul>
<li><strong>Task/Process/Thread</strong>: 다른 프로그램 단위와 동시에 실행될 수 있는 단위</li>
<li><strong>Physical concurrency</strong>: 실제 여러 프로세서에서 동시 실행</li>
<li><strong>Logical concurrency</strong>: 단일 프로세서에서 time-sharing으로 동시 실행처럼 보임</li>
<li><strong>Race condition</strong>: 공유 자원에 순서 없이 접근하여 실행 순서에 따라 결과가 달라지는 상황</li>
<li><strong>Deadlock</strong>: 모든 task가 영원히 대기하는 상태 (liveness 상실)</li>
<li><strong>Liveness</strong>: task가 언젠가 실행을 완료한다는 보장</li>
<li><strong>Mutual exclusion</strong>: 공유 자원에 한 번에 하나의 task만 접근</li>
</ul>
<h3 id="synchronization-종류" tabindex="-1"><a class="header-anchor" href="#synchronization-종류"><span>Synchronization 종류</span></a></h3>
<ul>
<li><strong>Cooperation synchronization</strong>: task A가 계속 실행되려면 task B의 특정 작업 완료를 기다려야 함 (예: producer-consumer)</li>
<li><strong>Competition synchronization</strong>: 동시에 사용할 수 없는 공유 자원에 대한 배타적 접근 보장</li>
</ul>
<h3 id="task-상태" tabindex="-1"><a class="header-anchor" href="#task-상태"><span>Task 상태</span></a></h3>
<p>New → Ready → Running → Blocked → Dead</p>
<h3 id="semaphore" tabindex="-1"><a class="header-anchor" href="#semaphore"><span>Semaphore</span></a></h3>
<p>Dijkstra(1965). counter(정수) + 대기 queue로 구성.</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">wait(s):</span>
<span class="line">  if s.counter > 0 then</span>
<span class="line">    s.counter--</span>
<span class="line">  else</span>
<span class="line">    task를 s.queue에 넣고 block</span>
<span class="line"></span>
<span class="line">release(s):</span>
<span class="line">  if s.queue is empty then</span>
<span class="line">    s.counter++</span>
<span class="line">  else</span>
<span class="line">    queue에서 task 하나를 ready 상태로 이동</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>wait</code>와 <code v-pre>release</code>는 반드시 atomic하게 실행되어야 함.</p>
<p><strong>Cooperation synchronization 예시 (producer-consumer)</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">semaphore fullspots, emptyspots;</span>
<span class="line">fullspots.count = 0;</span>
<span class="line">emptyspots.count = BUFLEN;</span>
<span class="line"></span>
<span class="line">task producer:</span>
<span class="line">  loop</span>
<span class="line">    wait(emptyspots)</span>
<span class="line">    DEPOSIT(VALUE)</span>
<span class="line">    release(fullspots)</span>
<span class="line">  end loop</span>
<span class="line"></span>
<span class="line">task consumer:</span>
<span class="line">  loop</span>
<span class="line">    wait(fullspots)</span>
<span class="line">    FETCH(VALUE)</span>
<span class="line">    release(emptyspots)</span>
<span class="line">  end loop</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Competition synchronization 추가 (binary semaphore = mutex)</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">semaphore access, fullspots, emptyspots;</span>
<span class="line">access.count = 1;</span>
<span class="line"></span>
<span class="line">task producer:</span>
<span class="line">  loop</span>
<span class="line">    wait(emptyspots)</span>
<span class="line">    wait(access)</span>
<span class="line">    DEPOSIT(VALUE)</span>
<span class="line">    release(access)</span>
<span class="line">    release(fullspots)</span>
<span class="line">  end loop</span>
<span class="line"></span>
<span class="line">task consumer:</span>
<span class="line">  loop</span>
<span class="line">    wait(fullspots)</span>
<span class="line">    wait(access)</span>
<span class="line">    FETCH(VALUE)</span>
<span class="line">    release(access)</span>
<span class="line">    release(emptyspots)</span>
<span class="line">  end loop</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>주의: <code v-pre>wait(emptyspots)</code> → <code v-pre>wait(access)</code> 순서여야 함. 반대로 하면 deadlock.</p>
<p><strong>Semaphore 오용 시 문제</strong></p>
<ul>
<li><code v-pre>release(access)</code> 누락 → deadlock</li>
<li><code v-pre>wait(fullspots)</code> 누락 → buffer underflow (빈 버퍼에서 FETCH)</li>
<li><code v-pre>release(fullspots)</code> 누락 → consumer가 영원히 대기</li>
</ul>
<h3 id="monitor" tabindex="-1"><a class="header-anchor" href="#monitor"><span>Monitor</span></a></h3>
<p>공유 데이터를 encapsulate, 한 번에 하나의 task만 접근하도록 런타임이 보장.</p>
<ul>
<li>Competition synchronization: 자동 보장</li>
<li>Cooperation synchronization: 프로그래머가 condition variable로 직접 구현</li>
</ul>
<p>Java: <code v-pre>synchronized</code> 키워드</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">deposit</span><span class="token punctuation">(</span><span class="token keyword">int</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">int</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Cooperation은 <code v-pre>wait()</code>, <code v-pre>notify()</code>, <code v-pre>notifyAll()</code> 사용 (Object 클래스 메서드).</p>
<p><strong>Monitor vs Semaphore</strong>:</p>
<ul>
<li>Monitor가 더 안전: 공유 데이터가 monitor 내부에만 있고, competition sync가 자동</li>
<li>Semaphore는 직접 관리하므로 실수 가능성 높음</li>
</ul>
<h3 id="message-passing-ada" tabindex="-1"><a class="header-anchor" href="#message-passing-ada"><span>Message Passing (Ada)</span></a></h3>
<p>Ada의 rendezvous 모델: sender와 receiver 모두 준비되면 동기적으로 통신.</p>
<div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token keyword">task</span> <span class="token keyword">body</span> <span class="token variable">Buf_Task</span> <span class="token keyword">is</span></span>
<span class="line"><span class="token keyword">begin</span></span>
<span class="line">  <span class="token keyword">loop</span></span>
<span class="line">    <span class="token keyword">select</span></span>
<span class="line">      <span class="token keyword">when</span> <span class="token variable">Filled</span> <span class="token operator">&lt;</span> <span class="token variable">Bufsize</span> <span class="token operator">=></span></span>
<span class="line">        <span class="token keyword">accept</span> <span class="token variable">Deposit</span><span class="token punctuation">(</span><span class="token variable">Item</span> <span class="token punctuation">:</span> <span class="token keyword">in</span> <span class="token variable">Integer</span><span class="token punctuation">)</span> <span class="token keyword">do</span></span>
<span class="line">          <span class="token variable">Buf</span><span class="token punctuation">(</span><span class="token variable">Next_In</span><span class="token punctuation">)</span> <span class="token operator">:=</span> <span class="token variable">Item</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">end</span> <span class="token variable">Deposit</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token variable">Filled</span> <span class="token operator">:=</span> <span class="token variable">Filled</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">or</span></span>
<span class="line">      <span class="token keyword">when</span> <span class="token variable">Filled</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">=></span></span>
<span class="line">        <span class="token keyword">accept</span> <span class="token variable">Fetch</span><span class="token punctuation">(</span><span class="token variable">Item</span> <span class="token punctuation">:</span> <span class="token keyword">out</span> <span class="token variable">Integer</span><span class="token punctuation">)</span> <span class="token keyword">do</span></span>
<span class="line">          <span class="token variable">Item</span> <span class="token operator">:=</span> <span class="token variable">Buf</span><span class="token punctuation">(</span><span class="token variable">Next_Out</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">end</span> <span class="token variable">Fetch</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token variable">Filled</span> <span class="token operator">:=</span> <span class="token variable">Filled</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">end</span> <span class="token keyword">select</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">end</span> <span class="token keyword">loop</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Buf_Task</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>accept</code>: 해당 entry로 메시지가 올 때까지 block</li>
<li><code v-pre>select</code>: 여러 accept 중 하나를 선택 (비결정적)</li>
<li><code v-pre>when 조건 =&gt;</code>: guarded accept — 조건이 참일 때만 open</li>
</ul>
<h3 id="java-threads" tabindex="-1"><a class="header-anchor" href="#java-threads"><span>Java Threads</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">class</span> <span class="token class-name">MyThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">t<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>주요 메서드:</p>
<ul>
<li><code v-pre>start()</code>: run()을 새 thread에서 실행</li>
<li><code v-pre>yield()</code>: 프로세서 자발적 양보</li>
<li><code v-pre>sleep(ms)</code>: 지정 시간 block</li>
<li><code v-pre>join()</code>: 해당 thread 완료까지 대기</li>
<li><code v-pre>setPriority(n)</code>: 우선순위 설정 (1~10, 기본 5)</li>
</ul>
<p>Java Semaphore:</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token class-name">Semaphore</span> emptyspots <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Semaphore</span><span class="token punctuation">(</span><span class="token constant">BUFLEN</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Semaphore</span> fullspots <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Semaphore</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">emptyspots<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// wait</span></span>
<span class="line">fullspots<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// release</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-threads" tabindex="-1"><a class="header-anchor" href="#c-threads"><span>C# Threads</span></a></h3>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code class="language-csharp"><span class="line"><span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ThreadStart</span><span class="token punctuation">(</span>MyMethod<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">t<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>동기화 방법:</p>
<ul>
<li><code v-pre>Interlocked.Increment(ref counter)</code>: 정수 atomic 연산</li>
<li><code v-pre>lock(obj) { ... }</code>: critical section</li>
<li><code v-pre>Monitor</code> 클래스</li>
</ul>
<h3 id="ada-95-protected-objects" tabindex="-1"><a class="header-anchor" href="#ada-95-protected-objects"><span>Ada 95 Protected Objects</span></a></h3>
<p>rendezvous보다 가벼운 공유 데이터 보호 메커니즘.</p>
<div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token keyword">protected</span> <span class="token variable">Buffer</span> <span class="token keyword">is</span></span>
<span class="line">  <span class="token keyword">entry</span> <span class="token variable">Deposit</span><span class="token punctuation">(</span><span class="token variable">Item</span> <span class="token punctuation">:</span> <span class="token keyword">in</span> <span class="token variable">Integer</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">entry</span> <span class="token variable">Fetch</span><span class="token punctuation">(</span><span class="token variable">Item</span> <span class="token punctuation">:</span> <span class="token keyword">out</span> <span class="token variable">Integer</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">private</span></span>
<span class="line">  <span class="token punctuation">..</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Buffer</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-scheme" tabindex="-1"><a class="header-anchor" href="#_4-scheme"><span>4. Scheme</span></a></h2>
<h3 id="기본-특징" tabindex="-1"><a class="header-anchor" href="#기본-특징"><span>기본 특징</span></a></h3>
<ul>
<li>prefix 표기법: <code v-pre>(operator operand1 operand2 ...)</code></li>
<li>코드와 데이터 모두 S-expression (리스트 구조)</li>
<li>static scope, first-class function</li>
<li>REPL: Read → Eval → Print → Loop</li>
</ul>
<h3 id="핵심-함수" tabindex="-1"><a class="header-anchor" href="#핵심-함수"><span>핵심 함수</span></a></h3>
<table>
<thead>
<tr>
<th>함수</th>
<th>설명</th>
<th>예시</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>CAR</code></td>
<td>리스트 첫 원소</td>
<td><code v-pre>(CAR '(A B C))</code> → <code v-pre>A</code></td>
</tr>
<tr>
<td><code v-pre>CDR</code></td>
<td>나머지 리스트</td>
<td><code v-pre>(CDR '(A B C))</code> → <code v-pre>(B C)</code></td>
</tr>
<tr>
<td><code v-pre>CONS</code></td>
<td>원소를 앞에 붙임</td>
<td><code v-pre>(CONS 'A '(B C))</code> → <code v-pre>(A B C)</code></td>
</tr>
<tr>
<td><code v-pre>NULL?</code></td>
<td>빈 리스트 여부</td>
<td><code v-pre>(NULL? '())</code> → <code v-pre>#T</code></td>
</tr>
<tr>
<td><code v-pre>EQ?</code></td>
<td>포인터 동일성</td>
<td>atom/symbol 비교</td>
</tr>
<tr>
<td><code v-pre>EQV?</code></td>
<td>값 동일성</td>
<td>숫자도 비교 가능</td>
</tr>
<tr>
<td><code v-pre>LIST?</code></td>
<td>리스트 여부</td>
<td><code v-pre>(LIST? '(A B))</code> → <code v-pre>#T</code></td>
</tr>
</tbody>
</table>
<p>CAR/CDR 합성 축약형:</p>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token punctuation">(</span><span class="token function">CADR</span> x<span class="token punctuation">)</span>   <span class="token comment">; (CAR (CDR x))       -- 두 번째 원소</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">CADDR</span> x<span class="token punctuation">)</span>  <span class="token comment">; (CAR (CDR (CDR x))) -- 세 번째 원소</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">CAAR</span> x<span class="token punctuation">)</span>   <span class="token comment">; (CAR (CAR x))</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">CDAR</span> x<span class="token punctuation">)</span>   <span class="token comment">; (CDR (CAR x))</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="define" tabindex="-1"><a class="header-anchor" href="#define"><span>DEFINE</span></a></h3>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> pi <span class="token number">3.14159</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token builtin">square</span> x<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span> x x<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">; 아래와 동일</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> square <span class="token punctuation">(</span><span class="token function">LAMBDA</span> <span class="token punctuation">(</span><span class="token function">x</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span> x x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DEFINE으로 바인딩된 이름은 Java의 <code v-pre>final</code>처럼 재바인딩 불가.</p>
<h3 id="조건문" tabindex="-1"><a class="header-anchor" href="#조건문"><span>조건문</span></a></h3>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token punctuation">(</span><span class="token function">IF</span> predicate then_expr else_expr<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">COND</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">predicate1</span> expr1<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">predicate2</span> expr2<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">ELSE</span> default_expr<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>예시 -- 입장료:</p>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">admissionfee</span> age<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">COND</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">&lt;=</span> age <span class="token number">6</span><span class="token punctuation">)</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">&lt;</span> age <span class="token number">60</span><span class="token punctuation">)</span> <span class="token number">5000</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token function">ELSE</span> <span class="token number">2500</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">admissionfee</span> <span class="token number">65</span><span class="token punctuation">)</span> <span class="token comment">; → 2500</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>예시 -- 윤년 판별:</p>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">leap?</span> year<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">COND</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">ZERO?</span> <span class="token punctuation">(</span><span class="token function">MODULO</span> year <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">)</span> #T<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">ZERO?</span> <span class="token punctuation">(</span><span class="token function">MODULO</span> year <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span> #F<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token function">ELSE</span> <span class="token punctuation">(</span><span class="token function">ZERO?</span> <span class="token punctuation">(</span><span class="token function">MODULO</span> year <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">leap?</span> <span class="token number">2024</span><span class="token punctuation">)</span> <span class="token comment">; → #T</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="기본-재귀-패턴" tabindex="-1"><a class="header-anchor" href="#기본-재귀-패턴"><span>기본 재귀 패턴</span></a></h3>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token comment">; 리스트 길이</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token builtin">length</span> lst<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">COND</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">NULL?</span> lst<span class="token punctuation">)</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token function">ELSE</span> <span class="token punctuation">(</span><span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">(</span><span class="token builtin">length</span> <span class="token punctuation">(</span><span class="token function">CDR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">; 리스트 합산</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">adder</span> lst<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">COND</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">NULL?</span> lst<span class="token punctuation">)</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token function">ELSE</span> <span class="token punctuation">(</span><span class="token operator">+</span> <span class="token punctuation">(</span><span class="token function">CAR</span> lst<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">adder</span> <span class="token punctuation">(</span><span class="token function">CDR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">; 리스트 이어붙이기</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token builtin">append</span> list1 list2<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">COND</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">NULL?</span> list1<span class="token punctuation">)</span> list2<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token function">ELSE</span> <span class="token punctuation">(</span><span class="token function">CONS</span> <span class="token punctuation">(</span><span class="token function">CAR</span> list1<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">append</span> <span class="token punctuation">(</span><span class="token function">CDR</span> list1<span class="token punctuation">)</span> list2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">; 리스트 뒤집기</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">my-reverse</span> lst<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">COND</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">NULL?</span> lst<span class="token punctuation">)</span> <span class="token punctuation">'</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token function">ELSE</span> <span class="token punctuation">(</span><span class="token builtin">append</span> <span class="token punctuation">(</span><span class="token function">my-reverse</span> <span class="token punctuation">(</span><span class="token function">CDR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">LIST</span> <span class="token punctuation">(</span><span class="token function">CAR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="리스트-탐색" tabindex="-1"><a class="header-anchor" href="#리스트-탐색"><span>리스트 탐색</span></a></h3>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token comment">; 리스트에 원소가 있는지 확인</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token builtin">member</span> atm lst<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">COND</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">NULL?</span> lst<span class="token punctuation">)</span> #F<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">EQ?</span> atm <span class="token punctuation">(</span><span class="token function">CAR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span> #T<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token function">ELSE</span> <span class="token punctuation">(</span><span class="token builtin">member</span> atm <span class="token punctuation">(</span><span class="token function">CDR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">(</span><span class="token builtin">member</span> <span class="token symbol">'B</span> <span class="token punctuation">'</span><span class="token punctuation">(</span>A B C<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">; → #T</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token builtin">member</span> <span class="token symbol">'B</span> <span class="token punctuation">'</span><span class="token punctuation">(</span>A C D<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">; → #F</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="리스트-비교" tabindex="-1"><a class="header-anchor" href="#리스트-비교"><span>리스트 비교</span></a></h3>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token comment">; 단순 리스트(atom만 포함) 비교</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">equalsimp</span> list1 list2<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">COND</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">NULL?</span> list1<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">NULL?</span> list2<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">NULL?</span> list2<span class="token punctuation">)</span> #F<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">EQ?</span> <span class="token punctuation">(</span><span class="token function">CAR</span> list1<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">CAR</span> list2<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">     <span class="token punctuation">(</span><span class="token function">equalsimp</span> <span class="token punctuation">(</span><span class="token function">CDR</span> list1<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">CDR</span> list2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token function">ELSE</span> #F<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">; 중첩 리스트도 비교 (일반)</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">equal</span> list1 list2<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">COND</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">NOT</span> <span class="token punctuation">(</span><span class="token function">LIST?</span> list1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">EQ?</span> list1 list2<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">NOT</span> <span class="token punctuation">(</span><span class="token function">LIST?</span> list2<span class="token punctuation">)</span><span class="token punctuation">)</span> #F<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">NULL?</span> list1<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">NULL?</span> list2<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">NULL?</span> list2<span class="token punctuation">)</span> #F<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">equal</span> <span class="token punctuation">(</span><span class="token function">CAR</span> list1<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">CAR</span> list2<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">     <span class="token punctuation">(</span><span class="token function">equal</span> <span class="token punctuation">(</span><span class="token function">CDR</span> list1<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">CDR</span> list2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token function">ELSE</span> #F<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="집합-연산" tabindex="-1"><a class="header-anchor" href="#집합-연산"><span>집합 연산</span></a></h3>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token comment">; 교집합 (두 리스트의 공통 원소)</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">guess</span> list1 list2<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">COND</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">NULL?</span> list1<span class="token punctuation">)</span> <span class="token punctuation">'</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token builtin">member</span> <span class="token punctuation">(</span><span class="token function">CAR</span> list1<span class="token punctuation">)</span> list2<span class="token punctuation">)</span></span>
<span class="line">     <span class="token punctuation">(</span><span class="token function">CONS</span> <span class="token punctuation">(</span><span class="token function">CAR</span> list1<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">guess</span> <span class="token punctuation">(</span><span class="token function">CDR</span> list1<span class="token punctuation">)</span> list2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token function">ELSE</span> <span class="token punctuation">(</span><span class="token function">guess</span> <span class="token punctuation">(</span><span class="token function">CDR</span> list1<span class="token punctuation">)</span> list2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">guess</span> <span class="token punctuation">'</span><span class="token punctuation">(</span>A B C D<span class="token punctuation">)</span> <span class="token punctuation">'</span><span class="token punctuation">(</span>B D F<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">; → (B D)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="정렬" tabindex="-1"><a class="header-anchor" href="#정렬"><span>정렬</span></a></h3>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token comment">; 삽입 정렬 -- insert: 정렬된 리스트에 원소 삽입</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">insert</span> atm lst<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">COND</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">NULL?</span> lst<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">CONS</span> atm <span class="token punctuation">'</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">&lt;</span> atm <span class="token punctuation">(</span><span class="token function">CAR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">CONS</span> atm lst<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token function">ELSE</span> <span class="token punctuation">(</span><span class="token function">CONS</span> <span class="token punctuation">(</span><span class="token function">CAR</span> lst<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">insert</span> atm <span class="token punctuation">(</span><span class="token function">CDR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">; sort: insert를 이용한 정렬</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">sort</span> lst<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">IF</span> <span class="token punctuation">(</span><span class="token function">NULL?</span> lst<span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">'</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">(</span><span class="token function">insert</span> <span class="token punctuation">(</span><span class="token function">CAR</span> lst<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">sort</span> <span class="token punctuation">(</span><span class="token function">CDR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">sort</span> <span class="token punctuation">'</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token number">7</span> <span class="token number">5</span> <span class="token number">1</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">; → (1 3 5 7 9)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="이진-트리" tabindex="-1"><a class="header-anchor" href="#이진-트리"><span>이진 트리</span></a></h3>
<p>트리를 <code v-pre>(값 왼쪽 오른쪽)</code> 형태의 리스트로 표현.</p>
<ul>
<li><code v-pre>(CAR t)</code>: 루트 값</li>
<li><code v-pre>(CADR t)</code>: 왼쪽 subtree</li>
<li><code v-pre>(CADDR t)</code>: 오른쪽 subtree</li>
</ul>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token comment">; 노드 수 계산</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">count-nodes</span> t<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">IF</span> <span class="token punctuation">(</span><span class="token function">NULL?</span> t<span class="token punctuation">)</span></span>
<span class="line">      <span class="token number">0</span></span>
<span class="line">      <span class="token punctuation">(</span><span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">         <span class="token punctuation">(</span><span class="token function">count-nodes</span> <span class="token punctuation">(</span><span class="token function">CADR</span> t<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">         <span class="token punctuation">(</span><span class="token function">count-nodes</span> <span class="token punctuation">(</span><span class="token function">CADDR</span> t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">; 트리 높이</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">tree-height</span> t<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">IF</span> <span class="token punctuation">(</span><span class="token function">NULL?</span> t<span class="token punctuation">)</span></span>
<span class="line">      <span class="token number">0</span></span>
<span class="line">      <span class="token punctuation">(</span><span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">(</span><span class="token function">MAX</span> <span class="token punctuation">(</span><span class="token function">tree-height</span> <span class="token punctuation">(</span><span class="token function">CADR</span> t<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">(</span><span class="token function">tree-height</span> <span class="token punctuation">(</span><span class="token function">CADDR</span> t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">; 최댓값 (일반 트리)</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">tree-max</span> t<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">IF</span> <span class="token punctuation">(</span><span class="token function">NULL?</span> t<span class="token punctuation">)</span></span>
<span class="line">      <span class="token number">-999999</span></span>
<span class="line">      <span class="token punctuation">(</span><span class="token function">MAX</span> <span class="token punctuation">(</span><span class="token function">CAR</span> t<span class="token punctuation">)</span></span>
<span class="line">           <span class="token punctuation">(</span><span class="token function">tree-max</span> <span class="token punctuation">(</span><span class="token function">CADR</span> t<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">           <span class="token punctuation">(</span><span class="token function">tree-max</span> <span class="token punctuation">(</span><span class="token function">CADDR</span> t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>트리 예시: <code v-pre>'(5 (3 (1 () ()) (4 () ())) (8 (7 () ()) ()))</code></p>
<h3 id="let" tabindex="-1"><a class="header-anchor" href="#let"><span>LET</span></a></h3>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token punctuation">(</span><span class="token function">LET</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">alpha</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">beta</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token operator">*</span> alpha beta<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">; → 21</span></span>
<span class="line"><span class="token comment">; 실제로는: ((LAMBDA (alpha beta) (* alpha beta)) 7 3)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">; 근의 공식 예시</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">quadratic_roots</span> a b c<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">LET</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">root_part</span> <span class="token punctuation">(</span><span class="token operator">/</span> <span class="token punctuation">(</span><span class="token function">SQRT</span> <span class="token punctuation">(</span><span class="token operator">-</span> <span class="token punctuation">(</span><span class="token operator">*</span> b b<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span> <span class="token number">4</span> a c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span> <span class="token number">2</span> a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">(</span><span class="token function">minus_b</span>   <span class="token punctuation">(</span><span class="token operator">/</span> <span class="token punctuation">(</span><span class="token operator">-</span> <span class="token number">0</span> b<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span> <span class="token number">2</span> a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token function">LIST</span> <span class="token punctuation">(</span><span class="token operator">+</span> minus_b root_part<span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">(</span><span class="token operator">-</span> minus_b root_part<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map-fold-filter" tabindex="-1"><a class="header-anchor" href="#map-fold-filter"><span>map / fold / filter</span></a></h3>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token comment">; map: 리스트 각 원소에 함수 적용</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token builtin">map</span> fun lst<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">COND</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">NULL?</span> lst<span class="token punctuation">)</span> <span class="token punctuation">'</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token function">ELSE</span> <span class="token punctuation">(</span><span class="token function">CONS</span> <span class="token punctuation">(</span><span class="token function">fun</span> <span class="token punctuation">(</span><span class="token function">CAR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">map</span> fun <span class="token punctuation">(</span><span class="token function">CDR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">(</span><span class="token builtin">map</span> <span class="token punctuation">(</span><span class="token function">LAMBDA</span> <span class="token punctuation">(</span><span class="token function">x</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span> x x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">'</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment">; → (1 4 9)</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token builtin">map</span> <span class="token punctuation">(</span><span class="token function">LAMBDA</span> <span class="token punctuation">(</span><span class="token function">x</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span> x x x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">'</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token number">4</span> <span class="token number">2</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">; → (27 64 8 216)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">; fold: 오른쪽에서 왼쪽으로 누적</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">FOLD</span> f base lst<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">COND</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">NULL?</span> lst<span class="token punctuation">)</span> base<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token function">ELSE</span> <span class="token punctuation">(</span><span class="token function">f</span> <span class="token punctuation">(</span><span class="token function">CAR</span> lst<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">FOLD</span> f base <span class="token punctuation">(</span><span class="token function">CDR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">FOLD</span> + <span class="token number">0</span> <span class="token punctuation">'</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">; → 10</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">FOLD</span> * <span class="token number">1</span> <span class="token punctuation">'</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">; → 24</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">; filter: 조건 만족 원소만 추출</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">FILTER</span> pred lst<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">COND</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">NULL?</span> lst<span class="token punctuation">)</span> <span class="token punctuation">'</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">pred</span> <span class="token punctuation">(</span><span class="token function">CAR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">CONS</span> <span class="token punctuation">(</span><span class="token function">CAR</span> lst<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">FILTER</span> pred <span class="token punctuation">(</span><span class="token function">CDR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token function">ELSE</span> <span class="token punctuation">(</span><span class="token function">FILTER</span> pred <span class="token punctuation">(</span><span class="token function">CDR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">FILTER</span> EVEN? <span class="token punctuation">'</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">; → (2 4)</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">FILTER</span> ODD?  <span class="token punctuation">'</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">; → (1 3)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="함수-합성" tabindex="-1"><a class="header-anchor" href="#함수-합성"><span>함수 합성</span></a></h3>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">compose</span> f g<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">LAMBDA</span> <span class="token punctuation">(</span><span class="token function">x</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">f</span> <span class="token punctuation">(</span><span class="token function">g</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">compose</span> CAR CDR<span class="token punctuation">)</span> <span class="token punctuation">'</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">a</span> b<span class="token punctuation">)</span> c d<span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">; → c  (CADR)</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">compose</span> CDR CAR<span class="token punctuation">)</span> <span class="token punctuation">'</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">a</span> b<span class="token punctuation">)</span> c d<span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">; → (b) (CDAR)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">; third = CADDR</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">third</span> lst<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">compose</span> CAR <span class="token punctuation">(</span><span class="token function">compose</span> CDR CDR<span class="token punctuation">)</span><span class="token punctuation">)</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">third</span> <span class="token punctuation">'</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">; → 3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tail-recursion" tabindex="-1"><a class="header-anchor" href="#tail-recursion"><span>Tail Recursion</span></a></h3>
<p>마지막 연산이 재귀 호출 → 컴파일러가 반복문으로 변환 가능.
Scheme은 tail call optimization을 언어 명세에서 요구함.</p>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token comment">; 일반 재귀 (tail recursive 아님: * n이 재귀 이후에 실행됨)</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">factorial</span> n<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">IF</span> <span class="token punctuation">(</span><span class="token operator">&lt;=</span> n <span class="token number">1</span><span class="token punctuation">)</span> <span class="token number">1</span> <span class="token punctuation">(</span><span class="token operator">*</span> n <span class="token punctuation">(</span><span class="token function">factorial</span> <span class="token punctuation">(</span><span class="token operator">-</span> n <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">; tail recursive 버전 (accumulator 패턴)</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">factorial</span> n<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">facthelper</span> n acc<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token function">IF</span> <span class="token punctuation">(</span><span class="token operator">&lt;=</span> n <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">        acc</span>
<span class="line">        <span class="token punctuation">(</span><span class="token function">facthelper</span> <span class="token punctuation">(</span><span class="token operator">-</span> n <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span> n acc<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">facthelper</span> n <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">; member는 tail recursive: 재귀 호출이 마지막 연산</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token builtin">member</span> atm lst<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">COND</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">NULL?</span> lst<span class="token punctuation">)</span> #F<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">EQ?</span> atm <span class="token punctuation">(</span><span class="token function">CAR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span> #T<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token function">ELSE</span> <span class="token punctuation">(</span><span class="token builtin">member</span> atm <span class="token punctuation">(</span><span class="token function">CDR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="중첩-리스트-합산" tabindex="-1"><a class="header-anchor" href="#중첩-리스트-합산"><span>중첩 리스트 합산</span></a></h3>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token comment">; 중첩 리스트도 처리하는 adder</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">adder</span> lst<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">COND</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">NULL?</span> lst<span class="token punctuation">)</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">LIST?</span> <span class="token punctuation">(</span><span class="token function">CAR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">     <span class="token punctuation">(</span><span class="token operator">+</span> <span class="token punctuation">(</span><span class="token function">adder</span> <span class="token punctuation">(</span><span class="token function">CAR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">adder</span> <span class="token punctuation">(</span><span class="token function">CDR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token function">ELSE</span> <span class="token punctuation">(</span><span class="token operator">+</span> <span class="token punctuation">(</span><span class="token function">CAR</span> lst<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">adder</span> <span class="token punctuation">(</span><span class="token function">CDR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">adder</span> <span class="token punctuation">'</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token number">4</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">; → 15</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="quote" tabindex="-1"><a class="header-anchor" href="#quote"><span>QUOTE</span></a></h3>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token punctuation">(</span><span class="token function">QUOTE</span> <span class="token punctuation">(</span><span class="token function">A</span> B C<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">; → (A B C)</span></span>
<span class="line"><span class="token punctuation">'</span><span class="token punctuation">(</span>A B C<span class="token punctuation">)</span>        <span class="token comment">; 위와 동일 (축약형)</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token operator">+</span> <span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">)</span>         <span class="token comment">; → 3 (평가됨)</span></span>
<span class="line"><span class="token punctuation">'</span><span class="token punctuation">(</span>+ <span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">)</span>        <span class="token comment">; → (+ 1 2) (평가 안 됨)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-ml" tabindex="-1"><a class="header-anchor" href="#_5-ml"><span>5. ML</span></a></h2>
<h3 id="기본-특징-1" tabindex="-1"><a class="header-anchor" href="#기본-특징-1"><span>기본 특징</span></a></h3>
<ul>
<li>정적 스코프, 강한 타입, 타입 추론 (type inferencing)</li>
<li>타입 간 암묵적 변환(coercion) 없음</li>
<li>immutable 변수</li>
<li>사용자 정의 함수 오버로딩 불가 → 다른 이름 사용</li>
</ul>
<h3 id="함수-정의" tabindex="-1"><a class="header-anchor" href="#함수-정의"><span>함수 정의</span></a></h3>
<div class="language-sml line-numbers-mode" data-highlighter="prismjs" data-ext="sml"><pre v-pre><code class="language-sml"><span class="line"><span class="token keyword">fun</span> <span class="token function">cube</span><span class="token punctuation">(</span>x <span class="token punctuation">:</span> <span class="token class-name">int</span><span class="token punctuation">)</span> <span class="token operator">=</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">fun</span> <span class="token function">fact</span><span class="token punctuation">(</span>n <span class="token punctuation">:</span> <span class="token class-name">int</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token class-name">int</span> <span class="token operator">=</span></span>
<span class="line">  <span class="token keyword">if</span> n <span class="token operator">&lt;=</span> <span class="token number">1</span> <span class="token keyword">then</span> <span class="token number">1</span></span>
<span class="line">  <span class="token keyword">else</span> n <span class="token operator">*</span> fact<span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>반환값: 마지막 표현식의 값.</p>
<h3 id="패턴-매칭" tabindex="-1"><a class="header-anchor" href="#패턴-매칭"><span>패턴 매칭</span></a></h3>
<div class="language-sml line-numbers-mode" data-highlighter="prismjs" data-ext="sml"><pre v-pre><code class="language-sml"><span class="line"><span class="token keyword">fun</span> <span class="token function">fact</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">  <span class="token operator">|</span> fact<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">  <span class="token operator">|</span> fact<span class="token punctuation">(</span>n <span class="token punctuation">:</span> <span class="token class-name">int</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token class-name">int</span> <span class="token operator">=</span> n <span class="token operator">*</span> fact<span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">fun</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">  <span class="token operator">|</span> length<span class="token punctuation">(</span>h <span class="token operator">::</span> t<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> length<span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">fun</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> lis2<span class="token punctuation">)</span> <span class="token operator">=</span> lis2</span>
<span class="line">  <span class="token operator">|</span> append<span class="token punctuation">(</span>h <span class="token operator">::</span> t<span class="token punctuation">,</span> lis2<span class="token punctuation">)</span> <span class="token operator">=</span> h <span class="token operator">::</span> append<span class="token punctuation">(</span>t<span class="token punctuation">,</span> lis2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">fun</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token operator">|</span> reverse<span class="token punctuation">(</span>h <span class="token operator">::</span> t<span class="token punctuation">)</span> <span class="token operator">=</span> append<span class="token punctuation">(</span>reverse<span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>h<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">(* member: 리스트에 원소가 있는지 *)</span></span>
<span class="line"><span class="token keyword">fun</span> <span class="token function">member</span><span class="token punctuation">(</span>atm<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token operator">|</span> member<span class="token punctuation">(</span>atm<span class="token punctuation">,</span> h <span class="token operator">::</span> t<span class="token punctuation">)</span> <span class="token operator">=</span></span>
<span class="line">    <span class="token keyword">if</span> atm <span class="token operator">=</span> h <span class="token keyword">then</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token keyword">else</span> member<span class="token punctuation">(</span>atm<span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="리스트-연산" tabindex="-1"><a class="header-anchor" href="#리스트-연산"><span>리스트 연산</span></a></h3>
<table>
<thead>
<tr>
<th>ML</th>
<th>Scheme</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>hd</code></td>
<td><code v-pre>CAR</code></td>
<td>첫 번째 원소</td>
</tr>
<tr>
<td><code v-pre>tl</code></td>
<td><code v-pre>CDR</code></td>
<td>나머지</td>
</tr>
<tr>
<td><code v-pre>::</code></td>
<td><code v-pre>CONS</code></td>
<td>앞에 붙이기</td>
</tr>
<tr>
<td><code v-pre>[3, 5, 7]</code></td>
<td><code v-pre>'(3 5 7)</code></td>
<td>리스트 리터럴</td>
</tr>
<tr>
<td><code v-pre>[]</code></td>
<td><code v-pre>'()</code></td>
<td>빈 리스트</td>
</tr>
<tr>
<td><code v-pre>@</code></td>
<td><code v-pre>append</code></td>
<td>리스트 연결</td>
</tr>
</tbody>
</table>
<h3 id="타입-추론" tabindex="-1"><a class="header-anchor" href="#타입-추론"><span>타입 추론</span></a></h3>
<div class="language-sml line-numbers-mode" data-highlighter="prismjs" data-ext="sml"><pre v-pre><code class="language-sml"><span class="line"><span class="token keyword">fun</span> <span class="token function">circumf</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">3.14159</span> <span class="token operator">*</span> r <span class="token operator">*</span> r<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">(* 3.14159가 real → r: real, 반환값: real *)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">fun</span> <span class="token function">square</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">(* 리터럴 없음 → 기본값 int → int → int *)</span></span>
<span class="line"><span class="token comment">(* square(2.75); → 에러 (real에 int 함수 적용) *)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">fun</span> <span class="token function">square</span><span class="token punctuation">(</span>x <span class="token punctuation">:</span> <span class="token class-name">real</span><span class="token punctuation">)</span> <span class="token operator">=</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">(* 명시적으로 real 지정 *)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="val-let" tabindex="-1"><a class="header-anchor" href="#val-let"><span>val / let</span></a></h3>
<div class="language-sml line-numbers-mode" data-highlighter="prismjs" data-ext="sml"><pre v-pre><code class="language-sml"><span class="line"><span class="token keyword">val</span> distance <span class="token operator">=</span> time <span class="token operator">*</span> speed<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span></span>
<span class="line">  <span class="token keyword">val</span> pi <span class="token operator">=</span> <span class="token number">3.14159</span></span>
<span class="line">  <span class="token keyword">val</span> r <span class="token operator">=</span> <span class="token number">2.0</span></span>
<span class="line"><span class="token keyword">in</span></span>
<span class="line">  pi <span class="token operator">*</span> r <span class="token operator">*</span> r</span>
<span class="line"><span class="token keyword">end</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>같은 이름을 두 번 val하면 이전 것이 숨겨짐 (shadowing).</p>
<h3 id="lambda" tabindex="-1"><a class="header-anchor" href="#lambda"><span>Lambda</span></a></h3>
<div class="language-sml line-numbers-mode" data-highlighter="prismjs" data-ext="sml"><pre v-pre><code class="language-sml"><span class="line"><span class="token keyword">fn</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">*</span> x</span>
<span class="line"></span>
<span class="line">filter<span class="token punctuation">(</span><span class="token keyword">fn</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">711</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">(* [25, 1, 50] *)</span></span>
<span class="line"></span>
<span class="line">map<span class="token punctuation">(</span><span class="token keyword">fn</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">*</span> x <span class="token operator">*</span> x<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">(* [1, 27, 125] *)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map-filter" tabindex="-1"><a class="header-anchor" href="#map-filter"><span>map / filter</span></a></h3>
<div class="language-sml line-numbers-mode" data-highlighter="prismjs" data-ext="sml"><pre v-pre><code class="language-sml"><span class="line"><span class="token comment">(* map: 리스트 각 원소에 함수 적용 *)</span></span>
<span class="line"><span class="token keyword">fun</span> <span class="token function">cube</span> x <span class="token operator">=</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">val</span> cubeList <span class="token operator">=</span> map cube<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">val</span> newList <span class="token operator">=</span> cubeList <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">(* [1, 27, 125] *)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">(* filter: 조건 만족 원소만 추출 *)</span></span>
<span class="line">filter<span class="token punctuation">(</span><span class="token keyword">fn</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=></span> x mod <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">(* [2, 4] *)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="currying-partial-application" tabindex="-1"><a class="header-anchor" href="#currying-partial-application"><span>Currying / Partial Application</span></a></h3>
<div class="language-sml line-numbers-mode" data-highlighter="prismjs" data-ext="sml"><pre v-pre><code class="language-sml"><span class="line"><span class="token keyword">fun</span> <span class="token function">add</span> a b <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">(* add: int → int → int *)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">val</span> add5 <span class="token operator">=</span> add <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">(* add5: int → int *)</span></span>
<span class="line"><span class="token keyword">val</span> result <span class="token operator">=</span> add5 <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">(* 15 *)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">(* 커링 vs 튜플 *)</span></span>
<span class="line"><span class="token keyword">fun</span> <span class="token function">add_tuple</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>   <span class="token comment">(* int * int → int *)</span></span>
<span class="line"><span class="token keyword">fun</span> <span class="token function">add_curried</span> a b <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>   <span class="token comment">(* int → int → int *)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">val</span> add3 <span class="token operator">=</span> add_curried <span class="token number">3</span><span class="token punctuation">;</span>  <span class="token comment">(* 부분 적용 → int → int *)</span></span>
<span class="line">add3 <span class="token number">10</span><span class="token punctuation">;</span>                   <span class="token comment">(* 13 *)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="함수-합성-1" tabindex="-1"><a class="header-anchor" href="#함수-합성-1"><span>함수 합성</span></a></h3>
<div class="language-sml line-numbers-mode" data-highlighter="prismjs" data-ext="sml"><pre v-pre><code class="language-sml"><span class="line"><span class="token keyword">fun</span> <span class="token function">double</span> x <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> x<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">fun</span> <span class="token function">square</span> x <span class="token operator">=</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">val</span> doubleThenSquare <span class="token operator">=</span> square o double<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">val</span> result <span class="token operator">=</span> doubleThenSquare <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">(* square(double(3)) = 36 *)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-haskell" tabindex="-1"><a class="header-anchor" href="#_6-haskell"><span>6. Haskell</span></a></h2>
<h3 id="ml과-공통점" tabindex="-1"><a class="header-anchor" href="#ml과-공통점"><span>ML과 공통점</span></a></h3>
<p>정적 스코프, 강한 타입, 타입 추론, 패턴 매칭</p>
<h3 id="ml과-차이점" tabindex="-1"><a class="header-anchor" href="#ml과-차이점"><span>ML과 차이점</span></a></h3>
<ul>
<li><strong>Lazy evaluation</strong>: 값이 실제로 필요할 때까지 평가 미룸</li>
<li><strong>순수 함수형</strong>: 변수 없음, 대입문 없음, side effect 없음</li>
<li><strong>type class</strong>: 오버로딩 지원</li>
<li>무한 리스트 가능</li>
</ul>
<h3 id="기본-리스트-함수" tabindex="-1"><a class="header-anchor" href="#기본-리스트-함수"><span>기본 리스트 함수</span></a></h3>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token builtin">head</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>       <span class="token comment">-- 1</span></span>
<span class="line"><span class="token builtin">tail</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>       <span class="token comment">-- [2,3]</span></span>
<span class="line"><span class="token builtin">init</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>       <span class="token comment">-- [1,2]</span></span>
<span class="line"><span class="token builtin">last</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>       <span class="token comment">-- 3</span></span>
<span class="line"><span class="token builtin">take</span> <span class="token number">2</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>     <span class="token comment">-- [1,2]</span></span>
<span class="line"><span class="token builtin">drop</span> <span class="token number">2</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>     <span class="token comment">-- [3]</span></span>
<span class="line"><span class="token builtin">length</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>     <span class="token comment">-- 3</span></span>
<span class="line"><span class="token builtin">reverse</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>    <span class="token comment">-- [3,2,1]</span></span>
<span class="line"><span class="token builtin">sum</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>        <span class="token comment">-- 6</span></span>
<span class="line"><span class="token builtin">product</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>    <span class="token comment">-- 6</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">++</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>     <span class="token comment">-- [1,2,3,4]</span></span>
<span class="line"><span class="token number">1</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>          <span class="token comment">-- [1,2,3]</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token number">1</span><span class="token operator">..</span><span class="token number">5</span><span class="token punctuation">]</span>             <span class="token comment">-- [1,2,3,4,5]</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token operator">..</span><span class="token number">10</span><span class="token punctuation">]</span>          <span class="token comment">-- [2,4,6,8,10]</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">!!</span> <span class="token number">2</span>     <span class="token comment">-- 3 (인덱스 접근, 0부터)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="패턴-매칭-1" tabindex="-1"><a class="header-anchor" href="#패턴-매칭-1"><span>패턴 매칭</span></a></h3>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token hvariable">fact</span> <span class="token number">0</span> <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"><span class="token hvariable">fact</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"><span class="token hvariable">fact</span> <span class="token hvariable">n</span> <span class="token operator">=</span> <span class="token hvariable">n</span> <span class="token operator">*</span> <span class="token hvariable">fact</span> <span class="token punctuation">(</span><span class="token hvariable">n</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin">length</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"><span class="token builtin">length</span> <span class="token punctuation">(</span><span class="token hvariable">a</span><span class="token operator">:</span><span class="token hvariable">x</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token builtin">length</span> <span class="token hvariable">x</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin">reverse</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token builtin">reverse</span> <span class="token punctuation">(</span><span class="token hvariable">a</span><span class="token operator">:</span><span class="token hvariable">x</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token builtin">reverse</span> <span class="token hvariable">x</span> <span class="token operator">++</span> <span class="token punctuation">[</span><span class="token hvariable">a</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin">product</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"><span class="token builtin">product</span> <span class="token punctuation">(</span><span class="token hvariable">a</span><span class="token operator">:</span><span class="token hvariable">x</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token hvariable">a</span> <span class="token operator">*</span> <span class="token builtin">product</span> <span class="token hvariable">x</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- drop: 앞에서 n개 제거</span></span>
<span class="line"><span class="token builtin">drop</span> <span class="token number">0</span> <span class="token hvariable">x</span> <span class="token operator">=</span> <span class="token hvariable">x</span></span>
<span class="line"><span class="token builtin">drop</span> <span class="token hvariable">_</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token builtin">drop</span> <span class="token hvariable">n</span> <span class="token punctuation">(</span><span class="token hvariable">a</span><span class="token operator">:</span><span class="token hvariable">x</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token builtin">drop</span> <span class="token punctuation">(</span><span class="token hvariable">n</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token hvariable">x</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- ++ 직접 구현</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">++</span> <span class="token hvariable">y</span> <span class="token operator">=</span> <span class="token hvariable">y</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token hvariable">a</span><span class="token operator">:</span><span class="token hvariable">x</span><span class="token punctuation">)</span> <span class="token operator">++</span> <span class="token hvariable">y</span> <span class="token operator">=</span> <span class="token hvariable">a</span> <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token hvariable">x</span> <span class="token operator">++</span> <span class="token hvariable">y</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="guards" tabindex="-1"><a class="header-anchor" href="#guards"><span>Guards</span></a></h3>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token hvariable">fact</span> <span class="token hvariable">n</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token hvariable">n</span> <span class="token operator">==</span> <span class="token number">0</span>    <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token hvariable">n</span> <span class="token operator">==</span> <span class="token number">1</span>    <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token builtin">otherwise</span> <span class="token operator">=</span> <span class="token hvariable">n</span> <span class="token operator">*</span> <span class="token hvariable">fact</span> <span class="token punctuation">(</span><span class="token hvariable">n</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token hvariable">sub</span> <span class="token hvariable">n</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token hvariable">n</span> <span class="token operator">&lt;</span> <span class="token number">10</span>    <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token hvariable">n</span> <span class="token operator">></span> <span class="token number">100</span>   <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token builtin">otherwise</span> <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="foldr" tabindex="-1"><a class="header-anchor" href="#foldr"><span>foldr</span></a></h3>
<p>오른쪽에서 왼쪽으로 누적.</p>
<p><code v-pre>foldr f v [x1, x2, x3]</code> = <code v-pre>x1 \</code>f` (x2 `f` (x3 `f` v))`</p>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token builtin">sum</span>     <span class="token operator">=</span> <span class="token builtin">foldr</span> <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span> <span class="token number">0</span></span>
<span class="line"><span class="token builtin">product</span> <span class="token operator">=</span> <span class="token builtin">foldr</span> <span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token number">1</span></span>
<span class="line"><span class="token builtin">and</span>     <span class="token operator">=</span> <span class="token builtin">foldr</span> <span class="token punctuation">(</span><span class="token operator">&amp;&amp;</span><span class="token punctuation">)</span> <span class="token constant">True</span></span>
<span class="line"><span class="token builtin">length</span>  <span class="token operator">=</span> <span class="token builtin">foldr</span> <span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">_</span> <span class="token hvariable">n</span> <span class="token operator">-></span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token hvariable">n</span><span class="token punctuation">)</span> <span class="token number">0</span></span>
<span class="line"><span class="token builtin">reverse</span> <span class="token operator">=</span> <span class="token builtin">foldr</span> <span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">x</span> <span class="token hvariable">xs</span> <span class="token operator">-></span> <span class="token hvariable">xs</span> <span class="token operator">++</span> <span class="token punctuation">[</span><span class="token hvariable">x</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 계산 과정 추적</span></span>
<span class="line"><span class="token builtin">foldr</span> <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span> <span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">+</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin">foldr</span> <span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token number">1</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">=</span> <span class="token number">24</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin">foldr</span> <span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">_</span> <span class="token hvariable">n</span> <span class="token operator">-></span> <span class="token number">1</span><span class="token operator">+</span><span class="token hvariable">n</span><span class="token punctuation">)</span> <span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">=</span> <span class="token number">3</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin">foldr</span> <span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">x</span> <span class="token hvariable">xs</span> <span class="token operator">-></span> <span class="token hvariable">xs</span> <span class="token operator">++</span> <span class="token punctuation">[</span><span class="token hvariable">x</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token builtin">foldr</span> <span class="token operator">...</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">++</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">++</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map"><span>map</span></a></h3>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token builtin">map</span> <span class="token punctuation">(</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>    <span class="token comment">-- [2,3,4]</span></span>
<span class="line"><span class="token builtin">map</span> <span class="token punctuation">(</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>    <span class="token comment">-- [2,4,6]</span></span>
<span class="line"><span class="token builtin">map</span> <span class="token builtin">negate</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>  <span class="token comment">-- [-1,-2,-3]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 재귀 정의</span></span>
<span class="line"><span class="token builtin">map</span> <span class="token hvariable">f</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token builtin">map</span> <span class="token hvariable">f</span> <span class="token punctuation">(</span><span class="token hvariable">x</span><span class="token operator">:</span><span class="token hvariable">xs</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token hvariable">f</span> <span class="token hvariable">x</span> <span class="token operator">:</span> <span class="token builtin">map</span> <span class="token hvariable">f</span> <span class="token hvariable">xs</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="list-comprehension" tabindex="-1"><a class="header-anchor" href="#list-comprehension"><span>List Comprehension</span></a></h3>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token punctuation">[</span><span class="token hvariable">n</span><span class="token operator">*</span><span class="token hvariable">n</span> <span class="token operator">|</span> <span class="token hvariable">n</span> <span class="token operator">&lt;-</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token operator">..</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment">-- [1,4,9,16,25]</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span><span class="token hvariable">n</span><span class="token operator">*</span><span class="token hvariable">n</span><span class="token operator">*</span><span class="token hvariable">n</span> <span class="token operator">|</span> <span class="token hvariable">n</span> <span class="token operator">&lt;-</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token operator">..</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment">-- 1부터 50까지 세제곱</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span><span class="token hvariable">x</span> <span class="token operator">|</span> <span class="token hvariable">x</span> <span class="token operator">&lt;-</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token operator">..</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token builtin">even</span> <span class="token hvariable">x</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment">-- [2,4,6,8,10,12,14,16,18,20]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 약수 구하기</span></span>
<span class="line"><span class="token hvariable">factors</span> <span class="token hvariable">n</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token hvariable">x</span> <span class="token operator">|</span> <span class="token hvariable">x</span> <span class="token operator">&lt;-</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token operator">..</span><span class="token hvariable">n</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token hvariable">n</span> <span class="token operator">`mod`</span> <span class="token hvariable">x</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token hvariable">factors</span> <span class="token number">15</span> <span class="token comment">-- [1,3,5,15]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 소수 판별</span></span>
<span class="line"><span class="token hvariable">prime</span> <span class="token hvariable">n</span> <span class="token operator">=</span> <span class="token hvariable">factors</span> <span class="token hvariable">n</span> <span class="token operator">==</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token hvariable">n</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token hvariable">prime</span> <span class="token number">17</span> <span class="token comment">-- True</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 쌍 생성</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token hvariable">x</span><span class="token punctuation">,</span><span class="token hvariable">y</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token hvariable">x</span> <span class="token operator">&lt;-</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token operator">..</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token hvariable">y</span> <span class="token operator">&lt;-</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token operator">..</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment">-- [(1,4),(1,5),(2,4),(2,5),(3,4),(3,5)]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- concat (리스트 평탄화)</span></span>
<span class="line"><span class="token builtin">concat</span> <span class="token hvariable">xss</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token hvariable">x</span> <span class="token operator">|</span> <span class="token hvariable">xs</span> <span class="token operator">&lt;-</span> <span class="token hvariable">xss</span><span class="token punctuation">,</span> <span class="token hvariable">x</span> <span class="token operator">&lt;-</span> <span class="token hvariable">xs</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token builtin">concat</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token comment">-- [1,2,3,4,5]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="함수-합성-2" tabindex="-1"><a class="header-anchor" href="#함수-합성-2"><span>함수 합성</span></a></h3>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token punctuation">(</span><span class="token hvariable">f</span> <span class="token operator">.</span> <span class="token hvariable">g</span><span class="token punctuation">)</span> <span class="token hvariable">x</span> <span class="token operator">=</span> <span class="token hvariable">f</span> <span class="token punctuation">(</span><span class="token hvariable">g</span> <span class="token hvariable">x</span><span class="token punctuation">)</span>   <span class="token comment">-- 오른쪽부터 왼쪽으로 적용</span></span>
<span class="line"><span class="token builtin">odd</span> <span class="token operator">=</span> <span class="token builtin">not</span> <span class="token operator">.</span> <span class="token builtin">even</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zip-pairs-sorted-positions" tabindex="-1"><a class="header-anchor" href="#zip-pairs-sorted-positions"><span>zip / pairs / sorted / positions</span></a></h3>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token comment">-- zip: 두 리스트 원소를 쌍으로 묶음 (짧은 쪽 기준)</span></span>
<span class="line"><span class="token builtin">zip</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token char string">'a'</span><span class="token punctuation">,</span><span class="token char string">'b'</span><span class="token punctuation">,</span><span class="token char string">'c'</span><span class="token punctuation">,</span><span class="token char string">'d'</span><span class="token punctuation">]</span>  <span class="token comment">-- [(1,'a'),(2,'b'),(3,'c')]</span></span>
<span class="line"><span class="token builtin">zip</span> <span class="token string">"abc"</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>               <span class="token comment">-- [('a',1),('b',2),('c',3)]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- pairs: 인접 원소 쌍</span></span>
<span class="line"><span class="token hvariable">pairs</span> <span class="token hvariable">xs</span> <span class="token operator">=</span> <span class="token builtin">zip</span> <span class="token hvariable">xs</span> <span class="token punctuation">(</span><span class="token builtin">tail</span> <span class="token hvariable">xs</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token hvariable">pairs</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>  <span class="token comment">-- [(1,2),(2,3),(3,4)]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- sorted: 정렬 여부 확인</span></span>
<span class="line"><span class="token hvariable">sorted</span> <span class="token hvariable">xs</span> <span class="token operator">=</span> <span class="token builtin">and</span> <span class="token punctuation">[</span><span class="token hvariable">x</span> <span class="token operator">&lt;=</span> <span class="token hvariable">y</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token hvariable">x</span><span class="token punctuation">,</span><span class="token hvariable">y</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span> <span class="token hvariable">pairs</span> <span class="token hvariable">xs</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token hvariable">sorted</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>    <span class="token comment">-- True</span></span>
<span class="line"><span class="token hvariable">sorted</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>  <span class="token comment">-- False</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- positions: 특정 값의 인덱스 목록</span></span>
<span class="line"><span class="token hvariable">positions</span> <span class="token hvariable">x</span> <span class="token hvariable">xs</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token hvariable">i</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token hvariable">x'</span><span class="token punctuation">,</span><span class="token hvariable">i</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span> <span class="token builtin">zip</span> <span class="token hvariable">xs</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">..</span><span class="token hvariable">n</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token hvariable">x</span> <span class="token operator">==</span> <span class="token hvariable">x'</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">where</span> <span class="token hvariable">n</span> <span class="token operator">=</span> <span class="token builtin">length</span> <span class="token hvariable">xs</span> <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line"><span class="token hvariable">positions</span> <span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span>  <span class="token comment">-- [0,2,5]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="all-any" tabindex="-1"><a class="header-anchor" href="#all-any"><span>all / any</span></a></h3>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token builtin">all</span> <span class="token hvariable">p</span> <span class="token hvariable">xs</span> <span class="token operator">=</span> <span class="token builtin">and</span> <span class="token punctuation">[</span><span class="token hvariable">p</span> <span class="token hvariable">x</span> <span class="token operator">|</span> <span class="token hvariable">x</span> <span class="token operator">&lt;-</span> <span class="token hvariable">xs</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token builtin">all</span> <span class="token builtin">even</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>  <span class="token comment">-- True</span></span>
<span class="line"><span class="token builtin">all</span> <span class="token builtin">even</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>  <span class="token comment">-- False</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin">any</span> <span class="token hvariable">p</span> <span class="token hvariable">xs</span> <span class="token operator">=</span> <span class="token builtin">or</span> <span class="token punctuation">[</span><span class="token hvariable">p</span> <span class="token hvariable">x</span> <span class="token operator">|</span> <span class="token hvariable">x</span> <span class="token operator">&lt;-</span> <span class="token hvariable">xs</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token builtin">any</span> <span class="token builtin">odd</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>   <span class="token comment">-- False</span></span>
<span class="line"><span class="token builtin">any</span> <span class="token builtin">odd</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>   <span class="token comment">-- True</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lazy-evaluation" tabindex="-1"><a class="header-anchor" href="#lazy-evaluation"><span>Lazy Evaluation</span></a></h3>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token hvariable">positives</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">..</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token builtin">take</span> <span class="token number">5</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token operator">..</span><span class="token punctuation">]</span>   <span class="token comment">-- [1,3,5,7,9]</span></span>
<span class="line"><span class="token hvariable">squares</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token hvariable">n</span><span class="token operator">*</span><span class="token hvariable">n</span> <span class="token operator">|</span> <span class="token hvariable">n</span> <span class="token operator">&lt;-</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">..</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 무한 리스트에서 안전한 탐색 (정렬된 리스트 가정)</span></span>
<span class="line"><span class="token hvariable">member2</span> <span class="token hvariable">n</span> <span class="token punctuation">(</span><span class="token hvariable">m</span><span class="token operator">:</span><span class="token hvariable">x</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token hvariable">m</span> <span class="token operator">&lt;</span> <span class="token hvariable">n</span>     <span class="token operator">=</span> <span class="token hvariable">member2</span> <span class="token hvariable">n</span> <span class="token hvariable">x</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token hvariable">m</span> <span class="token operator">==</span> <span class="token hvariable">n</span>    <span class="token operator">=</span> <span class="token constant">True</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token builtin">otherwise</span> <span class="token operator">=</span> <span class="token constant">False</span></span>
<span class="line"></span>
<span class="line"><span class="token hvariable">member2</span> <span class="token number">16</span> <span class="token hvariable">squares</span> <span class="token comment">-- True</span></span>
<span class="line"><span class="token hvariable">member2</span> <span class="token number">5</span> <span class="token hvariable">squares</span>  <span class="token comment">-- False (빠르게 종료)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="quicksort" tabindex="-1"><a class="header-anchor" href="#quicksort"><span>Quicksort</span></a></h3>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token builtin">sort</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token builtin">sort</span> <span class="token punctuation">(</span><span class="token hvariable">h</span><span class="token operator">:</span><span class="token hvariable">t</span><span class="token punctuation">)</span> <span class="token operator">=</span></span>
<span class="line">  <span class="token builtin">sort</span> <span class="token punctuation">[</span><span class="token hvariable">b</span> <span class="token operator">|</span> <span class="token hvariable">b</span> <span class="token operator">&lt;-</span> <span class="token hvariable">t</span><span class="token punctuation">,</span> <span class="token hvariable">b</span> <span class="token operator">&lt;=</span> <span class="token hvariable">h</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token operator">++</span> <span class="token punctuation">[</span><span class="token hvariable">h</span><span class="token punctuation">]</span> <span class="token operator">++</span></span>
<span class="line">  <span class="token builtin">sort</span> <span class="token punctuation">[</span><span class="token hvariable">b</span> <span class="token operator">|</span> <span class="token hvariable">b</span> <span class="token operator">&lt;-</span> <span class="token hvariable">t</span><span class="token punctuation">,</span> <span class="token hvariable">b</span> <span class="token operator">></span> <span class="token hvariable">h</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="insertion-sort" tabindex="-1"><a class="header-anchor" href="#insertion-sort"><span>Insertion Sort</span></a></h3>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token hvariable">insert</span> <span class="token hvariable">x</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token hvariable">x</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token hvariable">insert</span> <span class="token hvariable">x</span> <span class="token punctuation">(</span><span class="token hvariable">y</span><span class="token operator">:</span><span class="token hvariable">ys</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token hvariable">x</span> <span class="token operator">&lt;=</span> <span class="token hvariable">y</span>    <span class="token operator">=</span> <span class="token hvariable">x</span> <span class="token operator">:</span> <span class="token hvariable">y</span> <span class="token operator">:</span> <span class="token hvariable">ys</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token builtin">otherwise</span> <span class="token operator">=</span> <span class="token hvariable">y</span> <span class="token operator">:</span> <span class="token hvariable">insert</span> <span class="token hvariable">x</span> <span class="token hvariable">ys</span></span>
<span class="line"></span>
<span class="line"><span class="token hvariable">isort</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token hvariable">isort</span> <span class="token punctuation">(</span><span class="token hvariable">x</span><span class="token operator">:</span><span class="token hvariable">xs</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token hvariable">insert</span> <span class="token hvariable">x</span> <span class="token punctuation">(</span><span class="token hvariable">isort</span> <span class="token hvariable">xs</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="merge-sort" tabindex="-1"><a class="header-anchor" href="#merge-sort"><span>Merge Sort</span></a></h3>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token hvariable">merge</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token hvariable">ys</span> <span class="token operator">=</span> <span class="token hvariable">ys</span></span>
<span class="line"><span class="token hvariable">merge</span> <span class="token hvariable">xs</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token hvariable">xs</span></span>
<span class="line"><span class="token hvariable">merge</span> <span class="token punctuation">(</span><span class="token hvariable">x</span><span class="token operator">:</span><span class="token hvariable">xs</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token hvariable">y</span><span class="token operator">:</span><span class="token hvariable">ys</span><span class="token punctuation">)</span> <span class="token operator">=</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token hvariable">x</span> <span class="token operator">&lt;=</span> <span class="token hvariable">y</span> <span class="token keyword">then</span> <span class="token hvariable">x</span> <span class="token operator">:</span> <span class="token hvariable">merge</span> <span class="token hvariable">xs</span> <span class="token punctuation">(</span><span class="token hvariable">y</span><span class="token operator">:</span><span class="token hvariable">ys</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">else</span> <span class="token hvariable">y</span> <span class="token operator">:</span> <span class="token hvariable">merge</span> <span class="token punctuation">(</span><span class="token hvariable">x</span><span class="token operator">:</span><span class="token hvariable">xs</span><span class="token punctuation">)</span> <span class="token hvariable">ys</span></span>
<span class="line"></span>
<span class="line"><span class="token hvariable">halve</span> <span class="token hvariable">xs</span> <span class="token operator">=</span> <span class="token builtin">splitAt</span> <span class="token punctuation">(</span><span class="token builtin">length</span> <span class="token hvariable">xs</span> <span class="token operator">`div`</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token hvariable">xs</span></span>
<span class="line"></span>
<span class="line"><span class="token hvariable">msort</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token hvariable">msort</span> <span class="token punctuation">[</span><span class="token hvariable">x</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token hvariable">x</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token hvariable">msort</span> <span class="token hvariable">xs</span> <span class="token operator">=</span> <span class="token hvariable">merge</span> <span class="token punctuation">(</span><span class="token hvariable">msort</span> <span class="token hvariable">ys</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token hvariable">msort</span> <span class="token hvariable">zs</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token hvariable">ys</span><span class="token punctuation">,</span> <span class="token hvariable">zs</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token hvariable">halve</span> <span class="token hvariable">xs</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="let-where" tabindex="-1"><a class="header-anchor" href="#let-where"><span>let / where</span></a></h3>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token comment">-- let ... in</span></span>
<span class="line"><span class="token hvariable">quadratic</span> <span class="token hvariable">a</span> <span class="token hvariable">b</span> <span class="token hvariable">c</span> <span class="token operator">=</span></span>
<span class="line">  <span class="token keyword">let</span> <span class="token hvariable">minus_b</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token hvariable">b</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">2.0</span> <span class="token operator">*</span> <span class="token hvariable">a</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token hvariable">disc</span>    <span class="token operator">=</span> <span class="token builtin">sqrt</span><span class="token punctuation">(</span><span class="token hvariable">b</span><span class="token operator">^</span><span class="token number">2</span> <span class="token operator">-</span> <span class="token number">4.0</span><span class="token operator">*</span><span class="token hvariable">a</span><span class="token operator">*</span><span class="token hvariable">c</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">2.0</span><span class="token operator">*</span><span class="token hvariable">a</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token hvariable">minus_b</span> <span class="token operator">-</span> <span class="token hvariable">disc</span><span class="token punctuation">,</span> <span class="token hvariable">minus_b</span> <span class="token operator">+</span> <span class="token hvariable">disc</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- where</span></span>
<span class="line"><span class="token hvariable">quadratic</span> <span class="token hvariable">a</span> <span class="token hvariable">b</span> <span class="token hvariable">c</span> <span class="token operator">=</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token hvariable">minus_b</span> <span class="token operator">-</span> <span class="token hvariable">disc</span><span class="token punctuation">,</span> <span class="token hvariable">minus_b</span> <span class="token operator">+</span> <span class="token hvariable">disc</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">where</span></span>
<span class="line">    <span class="token hvariable">minus_b</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token hvariable">b</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">2.0</span> <span class="token operator">*</span> <span class="token hvariable">a</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token hvariable">disc</span>    <span class="token operator">=</span> <span class="token builtin">sqrt</span><span class="token punctuation">(</span><span class="token hvariable">b</span><span class="token operator">^</span><span class="token number">2</span> <span class="token operator">-</span> <span class="token number">4.0</span><span class="token operator">*</span><span class="token hvariable">a</span><span class="token operator">*</span><span class="token hvariable">c</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">2.0</span><span class="token operator">*</span><span class="token hvariable">a</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-common-lisp-f" tabindex="-1"><a class="header-anchor" href="#_7-common-lisp-f"><span>7. Common Lisp / F#</span></a></h2>
<h3 id="common-lisp" tabindex="-1"><a class="header-anchor" href="#common-lisp"><span>Common Lisp</span></a></h3>
<ul>
<li>Scheme보다 크고 복잡한 언어</li>
<li>static scoping 기본, <code v-pre>special</code> 선언으로 dynamic scoping 가능</li>
<li><code v-pre>DEFUN</code>: 함수 정의, <code v-pre>SETF</code>: 값 할당</li>
</ul>
<div class="language-lisp line-numbers-mode" data-highlighter="prismjs" data-ext="lisp"><pre v-pre><code class="language-lisp"><span class="line"><span class="token punctuation">(</span><span class="token car">DEFUN</span> square <span class="token punctuation">(</span><span class="token car">x</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token car">*</span> x x<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token car">SETF</span> A <span class="token number">10</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token car">LOOP</span> FOR I FROM <span class="token number">1</span> TO <span class="token number">5</span> DO <span class="token punctuation">(</span><span class="token car">FORMAT</span> T <span class="token string">"~<span class="token argument">A</span> "</span> I<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Backquote: <code v-pre>`</code> + <code v-pre>,</code>로 일부만 평가 가능</p>
<div class="language-lisp line-numbers-mode" data-highlighter="prismjs" data-ext="lisp"><pre v-pre><code class="language-lisp"><span class="line"><span class="token punctuation">`(</span><span class="token car">a</span> <span class="token punctuation">(</span><span class="token car">*</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">)</span> c<span class="token punctuation">)</span>   <span class="token comment">; → (a (* 3 4) c)  -- 평가 안 됨</span></span>
<span class="line"><span class="token punctuation">`(</span><span class="token car">a</span> <span class="token punctuation">,(</span><span class="token car">*</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">)</span> c<span class="token punctuation">)</span>  <span class="token comment">; → (a 12 c)       -- , 뒤만 평가됨</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>member 함수:</p>
<div class="language-lisp line-numbers-mode" data-highlighter="prismjs" data-ext="lisp"><pre v-pre><code class="language-lisp"><span class="line"><span class="token punctuation">(</span><span class="token car">DEFUN</span> recursive_member <span class="token punctuation">(</span><span class="token car">atm</span> lst<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token car">COND</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token car">NULL</span> lst<span class="token punctuation">)</span> NIL<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token car">EQUAL</span> atm <span class="token punctuation">(</span><span class="token car">CAR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span> T<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token car">T</span> <span class="token punctuation">(</span><span class="token car">recursive_member</span> atm <span class="token punctuation">(</span><span class="token car">CDR</span> lst<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="f" tabindex="-1"><a class="header-anchor" href="#f"><span>F#</span></a></h3>
<ul>
<li>ML/OCaml 계열, .NET 기반</li>
<li>함수형 + 명령형 + OOP 지원</li>
<li><code v-pre>let</code>: 값 바인딩, <code v-pre>let mutable</code>: 가변 변수, <code v-pre>let rec</code>: 재귀 함수</li>
<li><code v-pre>fun</code>: lambda 표현식, <code v-pre>&gt;&gt;</code>: 함수 합성, <code v-pre>|&gt;</code>: pipeline</li>
</ul>
<p><strong>재귀 함수 (패턴 매칭)</strong></p>
<div class="language-fsharp line-numbers-mode" data-highlighter="prismjs" data-ext="fs"><pre v-pre><code class="language-fsharp"><span class="line"><span class="token keyword">let</span> <span class="token keyword">rec</span> factorial n <span class="token operator">=</span></span>
<span class="line">  <span class="token keyword">match</span> n <span class="token keyword">with</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token number">0</span> <span class="token operator">-></span> <span class="token number">1</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token number">1</span> <span class="token operator">-></span> <span class="token number">1</span></span>
<span class="line">  <span class="token operator">|</span> _ <span class="token operator">-></span> n <span class="token operator">*</span> factorial <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Pipeline <code v-pre>|&gt;</code></strong></p>
<div class="language-fsharp line-numbers-mode" data-highlighter="prismjs" data-ext="fs"><pre v-pre><code class="language-fsharp"><span class="line"><span class="token keyword">let</span> myNums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token number">5</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span></span>
<span class="line">  myNums</span>
<span class="line">  <span class="token operator">|></span> List<span class="token punctuation">.</span>filter <span class="token punctuation">(</span><span class="token keyword">fun</span> n <span class="token operator">-></span> n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">|></span> List<span class="token punctuation">.</span>map <span class="token punctuation">(</span><span class="token keyword">fun</span> n <span class="token operator">-></span> n <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// result = [10; 20]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>함수 합성 <code v-pre>&gt;&gt;</code></strong></p>
<div class="language-fsharp line-numbers-mode" data-highlighter="prismjs" data-ext="fs"><pre v-pre><code class="language-fsharp"><span class="line"><span class="token keyword">let</span> negate x <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> x</span>
<span class="line"><span class="token keyword">let</span> square x <span class="token operator">=</span> x <span class="token operator">*</span> x</span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> negateSquare <span class="token operator">=</span> square <span class="token operator">>></span> negate  <span class="token comment">// (f >> g) x = g(f(x))</span></span>
<span class="line">negateSquare <span class="token number">3</span>  <span class="token comment">// square(3)=9, negate(9)=-9</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Quicksort</strong></p>
<div class="language-fsharp line-numbers-mode" data-highlighter="prismjs" data-ext="fs"><pre v-pre><code class="language-fsharp"><span class="line"><span class="token keyword">let</span> <span class="token keyword">rec</span> quicksort list <span class="token operator">=</span></span>
<span class="line">  <span class="token keyword">match</span> list <span class="token keyword">with</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">-></span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token operator">|</span> firstElem <span class="token operator">::</span> otherElements <span class="token operator">-></span></span>
<span class="line">    <span class="token keyword">let</span> smaller <span class="token operator">=</span></span>
<span class="line">      otherElements</span>
<span class="line">      <span class="token operator">|></span> List<span class="token punctuation">.</span>filter <span class="token punctuation">(</span><span class="token keyword">fun</span> e <span class="token operator">-></span> e <span class="token operator">&lt;</span> firstElem<span class="token punctuation">)</span></span>
<span class="line">      <span class="token operator">|></span> quicksort</span>
<span class="line">    <span class="token keyword">let</span> larger <span class="token operator">=</span></span>
<span class="line">      otherElements</span>
<span class="line">      <span class="token operator">|></span> List<span class="token punctuation">.</span>filter <span class="token punctuation">(</span><span class="token keyword">fun</span> e <span class="token operator">-></span> e <span class="token operator">>=</span> firstElem<span class="token punctuation">)</span></span>
<span class="line">      <span class="token operator">|></span> quicksort</span>
<span class="line">    smaller @ <span class="token punctuation">[</span>firstElem<span class="token punctuation">]</span> @ larger</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Insertion Sort</strong></p>
<div class="language-fsharp line-numbers-mode" data-highlighter="prismjs" data-ext="fs"><pre v-pre><code class="language-fsharp"><span class="line"><span class="token keyword">let</span> <span class="token keyword">rec</span> insert n ls <span class="token operator">=</span></span>
<span class="line">  <span class="token keyword">match</span> ls <span class="token keyword">with</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">-></span> <span class="token punctuation">[</span>n<span class="token punctuation">]</span></span>
<span class="line">  <span class="token operator">|</span> x <span class="token operator">::</span> xs <span class="token operator">-></span></span>
<span class="line">    <span class="token keyword">if</span> n <span class="token operator">></span> x <span class="token keyword">then</span> x <span class="token operator">::</span> insert n xs</span>
<span class="line">    <span class="token keyword">else</span> n <span class="token operator">::</span> ls</span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> <span class="token keyword">rec</span> insertSort ls <span class="token operator">=</span></span>
<span class="line">  <span class="token keyword">match</span> ls <span class="token keyword">with</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">-></span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token operator">|</span> x <span class="token operator">::</span> xs <span class="token operator">-></span> insert x <span class="token punctuation">(</span>insertSort xs<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// insertSort [3; 1; 4; 2]  -->  [1; 2; 3; 4]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>List 고차 함수</strong></p>
<div class="language-fsharp line-numbers-mode" data-highlighter="prismjs" data-ext="fs"><pre v-pre><code class="language-fsharp"><span class="line"><span class="token keyword">let</span> l <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token number">5</span><span class="token punctuation">]</span></span>
<span class="line">List<span class="token punctuation">.</span>map <span class="token punctuation">(</span><span class="token keyword">fun</span> x <span class="token operator">-></span> x <span class="token operator">*</span> x<span class="token punctuation">)</span> l         <span class="token comment">// [1;4;9;16;25]</span></span>
<span class="line">List<span class="token punctuation">.</span>filter <span class="token punctuation">(</span><span class="token keyword">fun</span> x <span class="token operator">-></span> x <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> l  <span class="token comment">// [2;4]</span></span>
<span class="line">List<span class="token punctuation">.</span>fold <span class="token punctuation">(</span><span class="token keyword">fun</span> acc x <span class="token operator">-></span> acc <span class="token operator">+</span> x<span class="token punctuation">)</span> <span class="token number">0</span> l <span class="token comment">// 15</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-5-fpl-4-language-full-comparison" tabindex="-1"><a class="header-anchor" href="#_7-5-fpl-4-language-full-comparison"><span>7.5. FPL 4-Language Full Comparison</span></a></h2>
<h3 id="기본-정보" tabindex="-1"><a class="header-anchor" href="#기본-정보"><span>기본 정보</span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th>Scheme</th>
<th>Common Lisp</th>
<th>ML</th>
<th>Haskell</th>
</tr>
</thead>
<tbody>
<tr>
<td>출시</td>
<td>1975</td>
<td>1984</td>
<td>1973</td>
<td>1990</td>
</tr>
<tr>
<td>계보</td>
<td>Lisp 방언</td>
<td>여러 Lisp 방언 통합</td>
<td>독립 설계</td>
<td>ML 계열</td>
</tr>
<tr>
<td>크기</td>
<td>작고 간결</td>
<td>크고 복잡</td>
<td>중간</td>
<td>중간</td>
</tr>
<tr>
<td>순수 함수형</td>
<td>아님</td>
<td>아님</td>
<td>아님</td>
<td><strong>예</strong></td>
</tr>
</tbody>
</table>
<h3 id="타입-시스템" tabindex="-1"><a class="header-anchor" href="#타입-시스템"><span>타입 시스템</span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th>Scheme</th>
<th>Common Lisp</th>
<th>ML</th>
<th>Haskell</th>
</tr>
</thead>
<tbody>
<tr>
<td>타입 시스템</td>
<td>untyped</td>
<td>untyped</td>
<td>strongly typed</td>
<td>strongly typed</td>
</tr>
<tr>
<td>타입 추론</td>
<td>없음</td>
<td>없음</td>
<td>있음</td>
<td>있음</td>
</tr>
<tr>
<td>타입 coercion</td>
<td>없음</td>
<td>없음</td>
<td>없음</td>
<td>없음</td>
</tr>
<tr>
<td>오버로딩</td>
<td>없음</td>
<td>없음</td>
<td>없음</td>
<td>type class로 지원</td>
</tr>
<tr>
<td>기본 숫자 타입</td>
<td>통합 (dynamic)</td>
<td>통합 (dynamic)</td>
<td>int / real 구분</td>
<td>Int / Float 구분</td>
</tr>
</tbody>
</table>
<h3 id="스코프-변수" tabindex="-1"><a class="header-anchor" href="#스코프-변수"><span>스코프 / 변수</span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th>Scheme</th>
<th>Common Lisp</th>
<th>ML</th>
<th>Haskell</th>
</tr>
</thead>
<tbody>
<tr>
<td>스코프</td>
<td>static only</td>
<td>static 기본, dynamic 선택</td>
<td>static only</td>
<td>static only</td>
</tr>
<tr>
<td>동적 스코프</td>
<td>없음</td>
<td><code v-pre>special</code> 선언으로 가능</td>
<td>없음</td>
<td>없음</td>
</tr>
<tr>
<td>변수 특성</td>
<td>immutable</td>
<td>mutable (<code v-pre>SETF</code>)</td>
<td>immutable (<code v-pre>val</code>)</td>
<td>immutable</td>
</tr>
<tr>
<td>재정의</td>
<td>DEFINE 재호출로 shadowing</td>
<td>SETF로 변경 가능</td>
<td>val 재선언으로 shadowing</td>
<td>재정의 불가</td>
</tr>
</tbody>
</table>
<h3 id="평가-방식" tabindex="-1"><a class="header-anchor" href="#평가-방식"><span>평가 방식</span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th>Scheme</th>
<th>Common Lisp</th>
<th>ML</th>
<th>Haskell</th>
</tr>
</thead>
<tbody>
<tr>
<td>평가 방식</td>
<td>strict</td>
<td>strict</td>
<td>strict</td>
<td>nonstrict (lazy)</td>
</tr>
<tr>
<td>무한 리스트</td>
<td>불가</td>
<td>불가</td>
<td>불가</td>
<td>가능</td>
</tr>
<tr>
<td>Tail call 최적화</td>
<td>언어 명세에서 요구</td>
<td>구현 의존</td>
<td>구현 의존</td>
<td>있음</td>
</tr>
<tr>
<td>Side effect</td>
<td>가능 (<code v-pre>set!</code>, I/O)</td>
<td>가능 (<code v-pre>SETF</code>, I/O)</td>
<td>가능 (<code v-pre>ref</code>, I/O)</td>
<td>IO 모나드로만 허용</td>
</tr>
</tbody>
</table>
<h3 id="문법-—-함수-정의" tabindex="-1"><a class="header-anchor" href="#문법-—-함수-정의"><span>문법 — 함수 정의</span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th>Scheme</th>
<th>Common Lisp</th>
<th>ML</th>
<th>Haskell</th>
</tr>
</thead>
<tbody>
<tr>
<td>함수 정의</td>
<td><code v-pre>(DEFINE (f x) ...)</code></td>
<td><code v-pre>(DEFUN f (x) ...)</code></td>
<td><code v-pre>fun f x = ...</code></td>
<td><code v-pre>f x = ...</code></td>
</tr>
<tr>
<td>재귀 키워드</td>
<td>불필요</td>
<td>불필요</td>
<td>불필요</td>
<td>불필요</td>
</tr>
<tr>
<td>Lambda</td>
<td><code v-pre>(LAMBDA (x) ...)</code></td>
<td><code v-pre>(LAMBDA (x) ...)</code></td>
<td><code v-pre>fn x =&gt; ...</code></td>
<td><code v-pre>\x -&gt; ...</code></td>
</tr>
<tr>
<td>패턴 매칭</td>
<td>없음 (COND/IF로만)</td>
<td>없음 (COND/IF로만)</td>
<td>있음 (`</td>
<td>`)</td>
</tr>
<tr>
<td>함수 합성</td>
<td>compose 직접 정의</td>
<td>compose 직접 정의</td>
<td><code v-pre>o</code> 연산자</td>
<td><code v-pre>.</code> 연산자</td>
</tr>
<tr>
<td>주석</td>
<td><code v-pre>;</code></td>
<td><code v-pre>;</code></td>
<td><code v-pre>(* ... *)</code></td>
<td><code v-pre>--</code> 또는 <code v-pre>{- -}</code></td>
</tr>
</tbody>
</table>
<h3 id="문법-—-조건문" tabindex="-1"><a class="header-anchor" href="#문법-—-조건문"><span>문법 — 조건문</span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th>Scheme</th>
<th>Common Lisp</th>
<th>ML</th>
<th>Haskell</th>
</tr>
</thead>
<tbody>
<tr>
<td>2분기</td>
<td><code v-pre>(IF pred t f)</code></td>
<td><code v-pre>(IF pred t f)</code></td>
<td><code v-pre>if ... then ... else ...</code></td>
<td><code v-pre>if ... then ... else ...</code></td>
</tr>
<tr>
<td>다분기</td>
<td><code v-pre>(COND ...)</code></td>
<td><code v-pre>(COND ...)</code></td>
<td>패턴 매칭</td>
<td>guards (`</td>
</tr>
<tr>
<td>기본값 (else)</td>
<td><code v-pre>(ELSE ...)</code></td>
<td><code v-pre>(T ...)</code></td>
<td>패턴의 마지막 절</td>
<td><code v-pre>otherwise</code></td>
</tr>
</tbody>
</table>
<h3 id="문법-—-리스트-연산" tabindex="-1"><a class="header-anchor" href="#문법-—-리스트-연산"><span>문법 — 리스트 연산</span></a></h3>
<table>
<thead>
<tr>
<th>연산</th>
<th>Scheme</th>
<th>Common Lisp</th>
<th>ML</th>
<th>Haskell</th>
</tr>
</thead>
<tbody>
<tr>
<td>리스트 리터럴</td>
<td><code v-pre>'(1 2 3)</code></td>
<td><code v-pre>'(1 2 3)</code></td>
<td><code v-pre>[1, 2, 3]</code></td>
<td><code v-pre>[1, 2, 3]</code></td>
</tr>
<tr>
<td>빈 리스트</td>
<td><code v-pre>'()</code></td>
<td><code v-pre>NIL</code> 또는 <code v-pre>'()</code></td>
<td><code v-pre>[]</code></td>
<td><code v-pre>[]</code></td>
</tr>
<tr>
<td>빈 리스트 검사</td>
<td><code v-pre>(NULL? lst)</code></td>
<td><code v-pre>(NULL lst)</code></td>
<td><code v-pre>lst = []</code></td>
<td><code v-pre>null lst</code></td>
</tr>
<tr>
<td>CONS</td>
<td><code v-pre>(CONS x lst)</code></td>
<td><code v-pre>(CONS x lst)</code></td>
<td><code v-pre>x :: lst</code></td>
<td><code v-pre>x : lst</code></td>
</tr>
<tr>
<td>CAR (첫 원소)</td>
<td><code v-pre>(CAR lst)</code></td>
<td><code v-pre>(CAR lst)</code></td>
<td><code v-pre>hd lst</code></td>
<td><code v-pre>head lst</code></td>
</tr>
<tr>
<td>CDR (나머지)</td>
<td><code v-pre>(CDR lst)</code></td>
<td><code v-pre>(CDR lst)</code></td>
<td><code v-pre>tl lst</code></td>
<td><code v-pre>tail lst</code></td>
</tr>
<tr>
<td>리스트 연결</td>
<td><code v-pre>(append l1 l2)</code></td>
<td><code v-pre>(append l1 l2)</code></td>
<td><code v-pre>l1 @ l2</code></td>
<td><code v-pre>l1 ++ l2</code></td>
</tr>
<tr>
<td>길이</td>
<td><code v-pre>(length lst)</code></td>
<td><code v-pre>(length lst)</code></td>
<td><code v-pre>length lst</code></td>
<td><code v-pre>length lst</code></td>
</tr>
</tbody>
</table>
<h3 id="문법-—-고차-함수" tabindex="-1"><a class="header-anchor" href="#문법-—-고차-함수"><span>문법 — 고차 함수</span></a></h3>
<table>
<thead>
<tr>
<th>연산</th>
<th>Scheme</th>
<th>Common Lisp</th>
<th>ML</th>
<th>Haskell</th>
</tr>
</thead>
<tbody>
<tr>
<td>map</td>
<td><code v-pre>(map f lst)</code></td>
<td><code v-pre>(mapcar f lst)</code></td>
<td><code v-pre>map f lst</code></td>
<td><code v-pre>map f lst</code></td>
</tr>
<tr>
<td>filter</td>
<td><code v-pre>(FILTER pred lst)</code></td>
<td><code v-pre>(remove-if-not pred lst)</code></td>
<td><code v-pre>filter pred lst</code></td>
<td><code v-pre>filter pred lst</code></td>
</tr>
<tr>
<td>fold</td>
<td><code v-pre>(FOLD f base lst)</code></td>
<td><code v-pre>(reduce f lst)</code></td>
<td><code v-pre>foldl f base lst</code></td>
<td><code v-pre>foldr f v lst</code></td>
</tr>
</tbody>
</table>
<h3 id="문법-—-지역-바인딩" tabindex="-1"><a class="header-anchor" href="#문법-—-지역-바인딩"><span>문법 — 지역 바인딩</span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th>Scheme</th>
<th>Common Lisp</th>
<th>ML</th>
<th>Haskell</th>
</tr>
</thead>
<tbody>
<tr>
<td>지역 바인딩</td>
<td><code v-pre>(LET ((x 1)) ...)</code></td>
<td><code v-pre>(LET ((x 1)) ...)</code></td>
<td><code v-pre>let val x=1 in ... end</code></td>
<td><code v-pre>let x=1 in ...</code></td>
</tr>
<tr>
<td>함수 아래 정의</td>
<td>없음</td>
<td>없음</td>
<td>없음</td>
<td><code v-pre>where</code> 구문</td>
</tr>
<tr>
<td>표현식 안 정의</td>
<td><code v-pre>LET</code></td>
<td><code v-pre>LET</code></td>
<td><code v-pre>let ... in ... end</code></td>
<td><code v-pre>let ... in ...</code></td>
</tr>
</tbody>
</table>
<h3 id="불리언" tabindex="-1"><a class="header-anchor" href="#불리언"><span>불리언</span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th>Scheme</th>
<th>Common Lisp</th>
<th>ML</th>
<th>Haskell</th>
</tr>
</thead>
<tbody>
<tr>
<td>참</td>
<td><code v-pre>#T</code></td>
<td><code v-pre>T</code></td>
<td><code v-pre>true</code></td>
<td><code v-pre>True</code></td>
</tr>
<tr>
<td>거짓</td>
<td><code v-pre>#F</code></td>
<td><code v-pre>NIL</code></td>
<td><code v-pre>false</code></td>
<td><code v-pre>False</code></td>
</tr>
<tr>
<td>AND</td>
<td><code v-pre>(AND ...)</code></td>
<td><code v-pre>(AND ...)</code></td>
<td><code v-pre>andalso</code></td>
<td><code v-pre>&amp;&amp;</code></td>
</tr>
<tr>
<td>OR</td>
<td><code v-pre>(OR ...)</code></td>
<td><code v-pre>(OR ...)</code></td>
<td><code v-pre>orelse</code></td>
<td>`</td>
</tr>
<tr>
<td>NOT</td>
<td><code v-pre>(NOT ...)</code></td>
<td><code v-pre>(NOT ...)</code></td>
<td><code v-pre>not</code></td>
<td><code v-pre>not</code></td>
</tr>
</tbody>
</table>
<h3 id="예외-처리" tabindex="-1"><a class="header-anchor" href="#예외-처리"><span>예외 처리</span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th>Scheme</th>
<th>Common Lisp</th>
<th>ML</th>
<th>Haskell</th>
</tr>
</thead>
<tbody>
<tr>
<td>예외 정의</td>
<td>구현 의존</td>
<td><code v-pre>(define-condition ...)</code></td>
<td><code v-pre>exception E</code></td>
<td><code v-pre>data MyE = ...</code></td>
</tr>
<tr>
<td>예외 발생</td>
<td><code v-pre>(raise ...)</code></td>
<td><code v-pre>(error ...)</code></td>
<td><code v-pre>raise E</code></td>
<td><code v-pre>throw e</code></td>
</tr>
<tr>
<td>예외 처리</td>
<td><code v-pre>(with-exception-handler ...)</code></td>
<td><code v-pre>(handler-case ...)</code></td>
<td><code v-pre>handle E =&gt; ...</code></td>
<td><code v-pre>catch action handler</code></td>
</tr>
<tr>
<td>정리 코드</td>
<td>구현 의존</td>
<td><code v-pre>(unwind-protect ...)</code></td>
<td>없음</td>
<td>bracket 패턴</td>
</tr>
</tbody>
</table>
<h3 id="확장-기능" tabindex="-1"><a class="header-anchor" href="#확장-기능"><span>확장 기능</span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th>Scheme</th>
<th>Common Lisp</th>
<th>ML</th>
<th>Haskell</th>
</tr>
</thead>
<tbody>
<tr>
<td>매크로</td>
<td><code v-pre>define-syntax</code> (hygienic)</td>
<td><code v-pre>DEFMACRO</code> (강력)</td>
<td>없음</td>
<td>Template Haskell (별도)</td>
</tr>
<tr>
<td>배열</td>
<td>없음 (기본)</td>
<td><code v-pre>MAKE-ARRAY</code></td>
<td>array 타입</td>
<td>Data.Array (별도)</td>
</tr>
<tr>
<td>구조체</td>
<td>없음 (기본)</td>
<td><code v-pre>DEFSTRUCT</code></td>
<td>record 타입</td>
<td>data 타입</td>
</tr>
<tr>
<td>반복문</td>
<td>없음 (재귀만)</td>
<td><code v-pre>LOOP</code>, <code v-pre>DOTIMES</code>, <code v-pre>DOLIST</code></td>
<td>없음 (재귀만)</td>
<td>없음 (재귀만)</td>
</tr>
<tr>
<td>Currying</td>
<td>수동 (LAMBDA 중첩)</td>
<td>수동</td>
<td>자동 (쉼표 없이)</td>
<td>자동</td>
</tr>
</tbody>
</table>
<h3 id="한-문장-요약" tabindex="-1"><a class="header-anchor" href="#한-문장-요약"><span>한 문장 요약</span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th>요약</th>
</tr>
</thead>
<tbody>
<tr>
<td>Scheme</td>
<td>작고 순수한 Lisp. 람다 계산법에 가장 가까운 미니멀한 설계.</td>
</tr>
<tr>
<td>Common Lisp</td>
<td>기능이 풍부한 실용 Lisp. 명령형과 함수형이 혼재.</td>
</tr>
<tr>
<td>ML</td>
<td>함수형 기반의 정적 타입 언어. 타입 추론과 패턴 매칭이 핵심.</td>
</tr>
<tr>
<td>Haskell</td>
<td>유일한 순수 함수형. lazy evaluation, 무한 리스트, type class.</td>
</tr>
</tbody>
</table>
<h3 id="핵심-특성-비교" tabindex="-1"><a class="header-anchor" href="#핵심-특성-비교"><span>핵심 특성 비교</span></a></h3>
<table>
<thead>
<tr>
<th>항목</th>
<th>Scheme</th>
<th>Common Lisp</th>
<th>ML</th>
<th>Haskell</th>
<th>F#</th>
</tr>
</thead>
<tbody>
<tr>
<td>스코프</td>
<td>static</td>
<td>static (기본) / dynamic 선택</td>
<td>static</td>
<td>static</td>
<td>static</td>
</tr>
<tr>
<td>타입 시스템</td>
<td>untyped</td>
<td>untyped</td>
<td>strongly typed</td>
<td>strongly typed</td>
<td>strongly typed</td>
</tr>
<tr>
<td>타입 추론</td>
<td>없음</td>
<td>없음</td>
<td>있음</td>
<td>있음</td>
<td>있음</td>
</tr>
<tr>
<td>타입 coercion</td>
<td>없음</td>
<td>없음</td>
<td>없음</td>
<td>없음</td>
<td>없음</td>
</tr>
<tr>
<td>변수</td>
<td>immutable</td>
<td>mutable 가능 (<code v-pre>SETF</code>)</td>
<td>immutable (<code v-pre>val</code>)</td>
<td>immutable</td>
<td>immutable (기본) / <code v-pre>mutable</code> 선택</td>
</tr>
<tr>
<td>오버로딩</td>
<td>없음</td>
<td>없음</td>
<td>없음</td>
<td>type class로 지원</td>
<td><code v-pre>inline</code>으로 흉내</td>
</tr>
<tr>
<td>패턴 매칭</td>
<td>COND/IF</td>
<td>COND/IF</td>
<td>있음</td>
<td>있음</td>
<td>있음 (<code v-pre>match</code>)</td>
</tr>
<tr>
<td>Lazy evaluation</td>
<td>없음 (strict)</td>
<td>없음 (strict)</td>
<td>없음 (strict)</td>
<td>기본 (nonstrict)</td>
<td>선택적 (<code v-pre>seq</code>)</td>
</tr>
<tr>
<td>순수 함수형</td>
<td>아님 (side effect 가능)</td>
<td>아님</td>
<td>아님</td>
<td>예</td>
<td>아님</td>
</tr>
<tr>
<td>재귀 키워드</td>
<td>없음 (DEFINE으로 자동)</td>
<td>없음 (DEFUN으로 자동)</td>
<td>없음 (자동)</td>
<td>없음 (자동)</td>
<td><code v-pre>rec</code> 필요</td>
</tr>
<tr>
<td>무한 리스트</td>
<td>불가</td>
<td>불가</td>
<td>불가</td>
<td>가능</td>
<td><code v-pre>seq</code>로 가능</td>
</tr>
<tr>
<td>함수 합성</td>
<td><code v-pre>compose</code> 직접 정의</td>
<td>직접 정의</td>
<td><code v-pre>o</code> 연산자</td>
<td><code v-pre>.</code> 연산자</td>
<td><code v-pre>&gt;&gt;</code> 연산자</td>
</tr>
<tr>
<td>Lambda</td>
<td><code v-pre>LAMBDA</code></td>
<td><code v-pre>LAMBDA</code></td>
<td><code v-pre>fn</code></td>
<td><code v-pre>\x -&gt;</code></td>
<td><code v-pre>fun</code></td>
</tr>
<tr>
<td>리스트 구분자</td>
<td>공백 <code v-pre>(1 2 3)</code></td>
<td>공백 <code v-pre>(1 2 3)</code></td>
<td>쉼표 <code v-pre>[1, 2, 3]</code></td>
<td>쉼표 <code v-pre>[1, 2, 3]</code></td>
<td>세미콜론 <code v-pre>[1; 2; 3]</code></td>
</tr>
<tr>
<td>CONS</td>
<td><code v-pre>CONS</code></td>
<td><code v-pre>CONS</code></td>
<td><code v-pre>::</code></td>
<td><code v-pre>:</code></td>
<td><code v-pre>::</code></td>
</tr>
<tr>
<td>CAR</td>
<td><code v-pre>CAR</code></td>
<td><code v-pre>CAR</code></td>
<td><code v-pre>hd</code></td>
<td><code v-pre>head</code></td>
<td><code v-pre>.Head</code></td>
</tr>
<tr>
<td>CDR</td>
<td><code v-pre>CDR</code></td>
<td><code v-pre>CDR</code></td>
<td><code v-pre>tl</code></td>
<td><code v-pre>tail</code></td>
<td><code v-pre>.Tail</code></td>
</tr>
<tr>
<td>리스트 연결</td>
<td><code v-pre>append</code></td>
<td><code v-pre>append</code></td>
<td><code v-pre>@</code></td>
<td><code v-pre>++</code></td>
<td><code v-pre>@</code></td>
</tr>
</tbody>
</table>
<h3 id="언어-계보" tabindex="-1"><a class="header-anchor" href="#언어-계보"><span>언어 계보</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">LISP (1958)</span>
<span class="line">├── Common Lisp (1984) — 여러 LISP 방언 통합, 대형 언어</span>
<span class="line">└── Scheme (1975)      — 작고 순수한 static scope LISP</span>
<span class="line"></span>
<span class="line">ML (1973)</span>
<span class="line">├── SML (Standard ML)</span>
<span class="line">├── OCaml</span>
<span class="line">│   └── F# (2005)    — .NET 기반, 함수형+명령형+OOP</span>
<span class="line">└── Haskell (1990)   — 순수 함수형, lazy evaluation</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="조건문-비교" tabindex="-1"><a class="header-anchor" href="#조건문-비교"><span>조건문 비교</span></a></h3>
<table>
<thead>
<tr>
<th>언어</th>
<th>2분기</th>
<th>다분기</th>
</tr>
</thead>
<tbody>
<tr>
<td>Scheme</td>
<td><code v-pre>(IF pred t f)</code></td>
<td><code v-pre>(COND ...)</code></td>
</tr>
<tr>
<td>Common Lisp</td>
<td><code v-pre>(IF pred t f)</code></td>
<td><code v-pre>(COND ...)</code></td>
</tr>
<tr>
<td>ML</td>
<td><code v-pre>if ... then ... else ...</code></td>
<td>패턴 매칭</td>
</tr>
<tr>
<td>Haskell</td>
<td><code v-pre>if ... then ... else ...</code></td>
<td>guards (<code v-pre>|</code>) 또는 패턴 매칭</td>
</tr>
<tr>
<td>F#</td>
<td><code v-pre>if ... then ... else ...</code></td>
<td><code v-pre>match ... with</code></td>
</tr>
</tbody>
</table>
<h3 id="함수-정의-비교" tabindex="-1"><a class="header-anchor" href="#함수-정의-비교"><span>함수 정의 비교</span></a></h3>
<table>
<thead>
<tr>
<th>언어</th>
<th>코드</th>
</tr>
</thead>
<tbody>
<tr>
<td>Scheme</td>
<td><code v-pre>(DEFINE (square x) (* x x))</code></td>
</tr>
<tr>
<td>Common Lisp</td>
<td><code v-pre>(DEFUN square (x) (* x x))</code></td>
</tr>
<tr>
<td>ML</td>
<td><code v-pre>fun square(x : int) = x * x;</code></td>
</tr>
<tr>
<td>Haskell</td>
<td><code v-pre>square x = x * x</code></td>
</tr>
<tr>
<td>F#</td>
<td><code v-pre>let square x = x * x</code></td>
</tr>
</tbody>
</table>
<h3 id="리스트-연산-비교" tabindex="-1"><a class="header-anchor" href="#리스트-연산-비교"><span>리스트 연산 비교</span></a></h3>
<table>
<thead>
<tr>
<th>연산</th>
<th>Scheme</th>
<th>ML</th>
<th>Haskell</th>
<th>F#</th>
</tr>
</thead>
<tbody>
<tr>
<td>빈 리스트</td>
<td><code v-pre>'()</code></td>
<td><code v-pre>[]</code></td>
<td><code v-pre>[]</code></td>
<td><code v-pre>[]</code></td>
</tr>
<tr>
<td>리스트 리터럴</td>
<td><code v-pre>'(1 2 3)</code></td>
<td><code v-pre>[1, 2, 3]</code></td>
<td><code v-pre>[1, 2, 3]</code></td>
<td><code v-pre>[1; 2; 3]</code></td>
</tr>
<tr>
<td>첫 원소</td>
<td><code v-pre>(CAR lst)</code></td>
<td><code v-pre>hd lst</code></td>
<td><code v-pre>head lst</code></td>
<td><code v-pre>lst.Head</code></td>
</tr>
<tr>
<td>나머지</td>
<td><code v-pre>(CDR lst)</code></td>
<td><code v-pre>tl lst</code></td>
<td><code v-pre>tail lst</code></td>
<td><code v-pre>lst.Tail</code></td>
</tr>
<tr>
<td>앞에 추가</td>
<td><code v-pre>(CONS x lst)</code></td>
<td><code v-pre>x :: lst</code></td>
<td><code v-pre>x : lst</code></td>
<td><code v-pre>x :: lst</code></td>
</tr>
<tr>
<td>이어붙이기</td>
<td><code v-pre>(append l1 l2)</code></td>
<td><code v-pre>l1 @ l2</code></td>
<td><code v-pre>l1 ++ l2</code></td>
<td><code v-pre>l1 @ l2</code></td>
</tr>
<tr>
<td>빈 리스트 검사</td>
<td><code v-pre>(NULL? lst)</code></td>
<td><code v-pre>lst = []</code></td>
<td><code v-pre>null lst</code></td>
<td><code v-pre>List.isEmpty lst</code></td>
</tr>
</tbody>
</table>
<h3 id="map-filter-fold-비교" tabindex="-1"><a class="header-anchor" href="#map-filter-fold-비교"><span>map / filter / fold 비교</span></a></h3>
<table>
<thead>
<tr>
<th>연산</th>
<th>Scheme</th>
<th>ML</th>
<th>Haskell</th>
<th>F#</th>
</tr>
</thead>
<tbody>
<tr>
<td>map</td>
<td><code v-pre>(map f lst)</code></td>
<td><code v-pre>map f lst</code></td>
<td><code v-pre>map f lst</code></td>
<td><code v-pre>List.map f lst</code></td>
</tr>
<tr>
<td>filter</td>
<td><code v-pre>(FILTER pred lst)</code></td>
<td><code v-pre>filter pred lst</code></td>
<td><code v-pre>filter pred lst</code></td>
<td><code v-pre>List.filter pred lst</code></td>
</tr>
<tr>
<td>fold</td>
<td><code v-pre>(FOLD f base lst)</code></td>
<td><code v-pre>foldl f base lst</code></td>
<td><code v-pre>foldr f v lst</code></td>
<td><code v-pre>List.fold f acc lst</code></td>
</tr>
<tr>
<td>lambda</td>
<td><code v-pre>(LAMBDA (x) ...)</code></td>
<td><code v-pre>fn x =&gt; ...</code></td>
<td><code v-pre>\x -&gt; ...</code></td>
<td><code v-pre>fun x -&gt; ...</code></td>
</tr>
</tbody>
</table>
<h3 id="공통-특성-모든-fpl" tabindex="-1"><a class="header-anchor" href="#공통-특성-모든-fpl"><span>공통 특성 (모든 FPL)</span></a></h3>
<ul>
<li>first-class function: 함수를 값처럼 사용 가능 (변수 할당, 인자 전달, 반환)</li>
<li>재귀로 반복 표현 (loop 대신)</li>
<li>referential transparency 지향: 같은 입력 → 항상 같은 출력</li>
<li>higher-order function 지원: map, filter, fold 등</li>
</ul>
<h3 id="ml-vs-haskell-핵심-차이" tabindex="-1"><a class="header-anchor" href="#ml-vs-haskell-핵심-차이"><span>ML vs Haskell 핵심 차이</span></a></h3>
<table>
<thead>
<tr>
<th>항목</th>
<th>ML</th>
<th>Haskell</th>
</tr>
</thead>
<tbody>
<tr>
<td>평가 방식</td>
<td>strict (즉시 평가)</td>
<td>nonstrict (lazy evaluation)</td>
</tr>
<tr>
<td>순수성</td>
<td>아님 (side effect 가능)</td>
<td>순수 함수형</td>
</tr>
<tr>
<td>오버로딩</td>
<td>불가 (이름을 달리해야 함)</td>
<td>type class로 지원</td>
</tr>
<tr>
<td>무한 리스트</td>
<td>불가</td>
<td>가능</td>
</tr>
<tr>
<td>함수 이름 반복</td>
<td><code v-pre>|</code> 구분</td>
<td>줄마다 함수 이름 반복</td>
</tr>
</tbody>
</table>
<h3 id="scheme-vs-common-lisp-핵심-차이" tabindex="-1"><a class="header-anchor" href="#scheme-vs-common-lisp-핵심-차이"><span>Scheme vs Common Lisp 핵심 차이</span></a></h3>
<table>
<thead>
<tr>
<th>항목</th>
<th>Scheme</th>
<th>Common Lisp</th>
</tr>
</thead>
<tbody>
<tr>
<td>크기</td>
<td>작고 간결</td>
<td>크고 복잡</td>
</tr>
<tr>
<td>스코프</td>
<td>static only</td>
<td>static 기본, dynamic 선택</td>
</tr>
<tr>
<td>변수</td>
<td>immutable</td>
<td>mutable (<code v-pre>SETF</code>)</td>
</tr>
<tr>
<td>배열/구조체</td>
<td>기본 미지원</td>
<td><code v-pre>MAKE-ARRAY</code>, <code v-pre>DEFSTRUCT</code></td>
</tr>
<tr>
<td>반복문</td>
<td>재귀만 권장</td>
<td><code v-pre>LOOP</code>, <code v-pre>DOTIMES</code>, <code v-pre>DOLIST</code></td>
</tr>
<tr>
<td>매크로</td>
<td>기본 지원</td>
<td><code v-pre>DEFMACRO</code>로 강력 지원</td>
</tr>
</tbody>
</table>
<h2 id="_8-exception-handling" tabindex="-1"><a class="header-anchor" href="#_8-exception-handling"><span>8. Exception Handling</span></a></h2>
<h3 id="핵심-개념" tabindex="-1"><a class="header-anchor" href="#핵심-개념"><span>핵심 개념</span></a></h3>
<ul>
<li><strong>exception</strong>: 하드웨어나 소프트웨어가 감지하는 비정상적/특별한 사건</li>
<li><strong>exception handler</strong>: exception 발생 시 실행되는 처리 코드</li>
<li><strong>raising</strong>: exception 발생시키기</li>
<li><strong>propagation</strong>: handler가 없으면 호출자에게 exception 전달</li>
<li><strong>termination</strong>: handler 완료 후 raising 블록으로 돌아가지 않음</li>
<li><strong>resumption</strong>: handler 완료 후 raising 지점에서 계속 실행 (Ruby의 <code v-pre>retry</code>)</li>
</ul>
<h3 id="언어별-syntax-비교" tabindex="-1"><a class="header-anchor" href="#언어별-syntax-비교"><span>언어별 Syntax 비교</span></a></h3>
<table>
<thead>
<tr>
<th>언어</th>
<th>try 시작</th>
<th>catch/except</th>
<th>throw/raise</th>
<th>정리 코드</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ada</td>
<td><code v-pre>begin</code></td>
<td><code v-pre>exception when E =&gt;</code></td>
<td><code v-pre>raise E</code></td>
<td>없음</td>
</tr>
<tr>
<td>C++</td>
<td><code v-pre>try</code></td>
<td><code v-pre>catch(Type e)</code></td>
<td><code v-pre>throw expr</code></td>
<td>없음</td>
</tr>
<tr>
<td>Java</td>
<td><code v-pre>try</code></td>
<td><code v-pre>catch(ExType e)</code></td>
<td><code v-pre>throw new E()</code></td>
<td><code v-pre>finally</code></td>
</tr>
<tr>
<td>Python</td>
<td><code v-pre>try:</code></td>
<td><code v-pre>except ExType:</code></td>
<td><code v-pre>raise E</code></td>
<td><code v-pre>finally:</code></td>
</tr>
<tr>
<td>Ruby</td>
<td><code v-pre>begin</code></td>
<td><code v-pre>rescue ExType</code></td>
<td><code v-pre>raise</code></td>
<td><code v-pre>ensure</code></td>
</tr>
</tbody>
</table>
<h3 id="ada" tabindex="-1"><a class="header-anchor" href="#ada"><span>Ada</span></a></h3>
<div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token keyword">begin</span></span>
<span class="line">  <span class="token comment">-- 코드</span></span>
<span class="line"><span class="token keyword">exception</span></span>
<span class="line">  <span class="token keyword">when</span> <span class="token variable">Constraint_Error</span> <span class="token operator">=></span></span>
<span class="line">    <span class="token variable">Put_Line</span><span class="token punctuation">(</span><span class="token string">"범위 초과"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">when</span> <span class="token variable">Data_Error</span> <span class="token operator">=></span></span>
<span class="line">    <span class="token variable">Put_Line</span><span class="token punctuation">(</span><span class="token string">"데이터 오류"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">when</span> <span class="token keyword">others</span> <span class="token operator">=></span></span>
<span class="line">    <span class="token variable">Put_Line</span><span class="token punctuation">(</span><span class="token string">"기타 오류"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>사전 정의 예외: <code v-pre>Constraint_Error</code>, <code v-pre>Program_Error</code>, <code v-pre>Storage_Error</code>, <code v-pre>Tasking_Error</code></p>
<p>사용자 정의:</p>
<div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token variable">My_Error</span> <span class="token punctuation">:</span> <span class="token keyword">exception</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">raise</span> <span class="token variable">My_Error</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">raise</span><span class="token punctuation">;</span>  <span class="token comment">-- handler 내에서: 같은 exception 재발생</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>exception 비활성화: <code v-pre>pragma Suppress(check_name);</code></p>
<h3 id="c" tabindex="-1"><a class="header-anchor" href="#c"><span>C++</span></a></h3>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">throw</span> <span class="token number">42</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">throw</span> <span class="token function">MyException</span><span class="token punctuation">(</span><span class="token string">"message"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token keyword">int</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// int 타입 exception 처리</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">catch</span> <span class="token punctuation">(</span>MyException<span class="token operator">&amp;</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// MyException 처리</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 모든 나머지 처리</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>사전 정의 예외 없음 (표준 라이브러리 예외는 있음)</li>
<li>handler는 순서대로 매칭, 먼저 매칭된 것 사용</li>
<li><code v-pre>throw;</code> → 현재 exception 재발생</li>
</ul>
<h3 id="java" tabindex="-1"><a class="header-anchor" href="#java"><span>Java</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">MyException</span><span class="token punctuation">(</span><span class="token string">"message"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">MyException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 처리</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 모든 Exception 하위 클래스 처리 (마지막에)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">finally</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 항상 실행 (예외 여부 무관)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>계층 구조:</p>
<ul>
<li><code v-pre>Throwable</code> → <code v-pre>Error</code> (JVM 발생, 처리 불필요)</li>
<li><code v-pre>Throwable</code> → <code v-pre>Exception</code> → <code v-pre>RuntimeException</code> (unchecked)</li>
<li><code v-pre>Throwable</code> → <code v-pre>Exception</code> → 그 외 (checked)</li>
</ul>
<p><strong>checked exception</strong>: <code v-pre>throws</code> 절에 선언하거나 직접 처리해야 함</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">void</span> <span class="token function">buildDist</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">    in<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// IOException 발생 가능</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>unchecked exception</strong>: <code v-pre>RuntimeException</code>, <code v-pre>Error</code> 하위 — 컴파일러가 강제하지 않음</p>
<h3 id="python" tabindex="-1"><a class="header-anchor" href="#python"><span>Python</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">try</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">raise</span> ValueError<span class="token punctuation">(</span><span class="token string">"잘못된 값"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">except</span> ValueError <span class="token keyword">as</span> e<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">except</span> Exception<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">pass</span>  <span class="token comment"># 모든 Exception 처리</span></span>
<span class="line"><span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">pass</span>  <span class="token comment"># 예외 없을 때 실행</span></span>
<span class="line"><span class="token keyword">finally</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">pass</span>  <span class="token comment"># 항상 실행</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>계층: <code v-pre>BaseException</code> → <code v-pre>Exception</code> → <code v-pre>ArithmeticError</code>, <code v-pre>LookupError</code> 등</p>
<h3 id="ruby" tabindex="-1"><a class="header-anchor" href="#ruby"><span>Ruby</span></a></h3>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">begin</span></span>
<span class="line">  <span class="token keyword">raise</span> <span class="token string-literal"><span class="token string">"에러 발생"</span></span></span>
<span class="line"><span class="token keyword">rescue</span> RuntimeError <span class="token operator">=></span> e</span>
<span class="line">  puts e<span class="token punctuation">.</span>message</span>
<span class="line"><span class="token keyword">rescue</span> <span class="token operator">=></span> e</span>
<span class="line">  <span class="token comment"># 모든 StandardError 처리</span></span>
<span class="line"><span class="token keyword">ensure</span></span>
<span class="line">  <span class="token comment"># 항상 실행 (Java의 finally)</span></span>
<span class="line"><span class="token keyword">retry</span>  <span class="token comment"># rescue 블록 내에서만: raising 지점부터 재실행</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-polymorphism-and-oop" tabindex="-1"><a class="header-anchor" href="#_9-polymorphism-and-oop"><span>9. Polymorphism and OOP</span></a></h2>
<h3 id="polymorphism-종류" tabindex="-1"><a class="header-anchor" href="#polymorphism-종류"><span>Polymorphism 종류</span></a></h3>
<ul>
<li><strong>Ad hoc polymorphism</strong>: 오버로딩. 각 타입마다 별도 구현. 같은 이름, 다른 protocol.</li>
<li><strong>Subtype polymorphism</strong>: 상속 기반. 부모 타입 변수가 자식 객체를 참조.</li>
<li><strong>Parametric polymorphism</strong>: generic. 타입을 매개변수화.</li>
</ul>
<h3 id="polymorphic-variable-선언-방법-언어별" tabindex="-1"><a class="header-anchor" href="#polymorphic-variable-선언-방법-언어별"><span>Polymorphic Variable 선언 방법 (언어별)</span></a></h3>
<p><strong>C++ (pointer 기반, virtual 필요)</strong></p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line">Shape<span class="token operator">*</span> ptr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">ptr<span class="token operator">-></span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// virtual일 때 dynamic binding</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Java (reference 기반, 기본 dynamic)</strong></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token class-name">Animal</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">a<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 항상 dynamic (final/static/private 제외)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>C# (virtual + override 필요)</strong></p>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code class="language-csharp"><span class="line"><span class="token class-name">Shape</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">s<span class="token punctuation">.</span><span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// virtual + override일 때 dynamic</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Python (타입 없는 변수)</strong></p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line">x <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">x<span class="token punctuation">.</span>speak<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Ruby (모든 변수가 typeless)</strong></p>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line">x <span class="token operator">=</span> <span class="token class-name">Dog</span><span class="token punctuation">.</span><span class="token keyword">new</span></span>
<span class="line">x<span class="token punctuation">.</span>speak</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Smalltalk</strong></p>
<div class="language-smalltalk line-numbers-mode" data-highlighter="prismjs" data-ext="smalltalk"><pre v-pre><code class="language-smalltalk"><span class="line">x <span class="token operator">:=</span> Dog <span class="token keyword">new</span><span class="token punctuation">.</span></span>
<span class="line">x speak<span class="token punctuation">.</span>   <span class="token comment">"모든 메시지가 dynamic binding"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dynamic-binding" tabindex="-1"><a class="header-anchor" href="#dynamic-binding"><span>Dynamic Binding</span></a></h3>
<ul>
<li>런타임에 어떤 메서드가 호출될지 결정</li>
<li>virtual method table (vtable)을 통해 구현: 동적으로 바인딩되는 메서드 포인터 목록</li>
</ul>
<p><strong>C++</strong></p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">    <span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// pure virtual → abstract class</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Shape</span></span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">Shape<span class="token operator">*</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">s<span class="token operator">-></span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// vtable을 통해 Circle::draw() 호출</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>stack 할당 시:</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line">Square sq<span class="token punctuation">;</span></span>
<span class="line">Rectangle rect<span class="token punctuation">;</span></span>
<span class="line">rect <span class="token operator">=</span> sq<span class="token punctuation">;</span>     <span class="token comment">// object slicing: Square의 추가 변수 날아감</span></span>
<span class="line">rect<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// Rectangle::draw() 정적 바인딩</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Java</strong>: <code v-pre>final</code>, <code v-pre>static</code>, <code v-pre>private</code> 메서드는 static binding, 나머지는 모두 dynamic binding</p>
<p><strong>C#</strong>: <code v-pre>virtual</code> + <code v-pre>override</code> 조합. <code v-pre>new</code> 키워드는 부모 메서드 숨김 (static binding)</p>
<h3 id="abstract-class-vs-interface-java" tabindex="-1"><a class="header-anchor" href="#abstract-class-vs-interface-java"><span>Abstract Class vs Interface (Java)</span></a></h3>
<ul>
<li><strong>abstract class</strong>: <code v-pre>abstract</code> 키워드, 일부 메서드 구현 가능, 단일 상속</li>
<li><strong>interface</strong>: 메서드 선언만, 다중 구현 가능, 변수 없음 (상수만)</li>
</ul>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span> <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">implements</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Woof"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="상속-접근-제어-c" tabindex="-1"><a class="header-anchor" href="#상속-접근-제어-c"><span>상속 접근 제어 (C++)</span></a></h3>
<ul>
<li><code v-pre>public</code> 상속: 부모의 public/protected 그대로 유지 → subtype 관계</li>
<li><code v-pre>private</code> 상속: 부모의 모든 멤버가 private → subtype 관계 아님, 구현만 재사용</li>
</ul>
<h3 id="ruby-mixin" tabindex="-1"><a class="header-anchor" href="#ruby-mixin"><span>Ruby Mixin</span></a></h3>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">module</span> <span class="token class-name">Flyable</span></span>
<span class="line">  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">fly</span></span></span>
<span class="line">    puts <span class="token string-literal"><span class="token string">"flying"</span></span></span>
<span class="line">  <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Bird</span></span>
<span class="line">  <span class="token keyword">include</span> Flyable  <span class="token comment"># 인스턴스 메서드로 추가</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>include</code>: 인스턴스 메서드로 주입</li>
<li><code v-pre>prepend</code>: 인스턴스 메서드로 주입, 클래스 자신의 메서드보다 우선</li>
<li><code v-pre>extend</code>: 클래스 메서드로 주입</li>
</ul>
<h3 id="adt-핵심-개념" tabindex="-1"><a class="header-anchor" href="#adt-핵심-개념"><span>ADT 핵심 개념</span></a></h3>
<ul>
<li>데이터와 operation을 하나의 단위로 묶음</li>
<li>내부 표현 숨김 (information hiding)</li>
<li>getter/setter를 통한 간접 접근</li>
</ul>
<p>Java 접근 제어:</p>
<table>
<thead>
<tr>
<th>modifier</th>
<th>같은 클래스</th>
<th>같은 패키지</th>
<th>상속</th>
<th>외부</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>public</code></td>
<td>O</td>
<td>O</td>
<td>O</td>
<td>O</td>
</tr>
<tr>
<td><code v-pre>protected</code></td>
<td>O</td>
<td>O</td>
<td>O</td>
<td>X</td>
</tr>
<tr>
<td>package-private</td>
<td>O</td>
<td>O</td>
<td>X</td>
<td>X</td>
</tr>
<tr>
<td><code v-pre>private</code></td>
<td>O</td>
<td>X</td>
<td>X</td>
<td>X</td>
</tr>
</tbody>
</table>
<p>C# 추가: <code v-pre>internal</code> (같은 assembly), <code v-pre>protected internal</code></p>
<h2 id="_10-generic-subprograms" tabindex="-1"><a class="header-anchor" href="#_10-generic-subprograms"><span>10. Generic Subprograms</span></a></h2>
<h3 id="c-template" tabindex="-1"><a class="header-anchor" href="#c-template"><span>C++ Template</span></a></h3>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">Type</span><span class="token operator">></span></span>
<span class="line">Type <span class="token function">max</span><span class="token punctuation">(</span>Type first<span class="token punctuation">,</span> Type second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">></span> second <span class="token operator">?</span> first <span class="token operator">:</span> second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// 2 (int)</span></span>
<span class="line"><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 2.0 (double)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>특화된 함수가 template보다 우선</li>
<li>여러 타입 파라미터: <code v-pre>template &lt;class T1, class T2&gt;</code></li>
</ul>
<h3 id="java-generics" tabindex="-1"><a class="header-anchor" href="#java-generics"><span>Java Generics</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> stackRef<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>primitive type 직접 사용 불가 → Integer, Double 등 wrapper class 사용</li>
<li>wildcard: <code v-pre>Collection&lt;?&gt;</code> — 읽기 가능, 쓰기 제한</li>
</ul>
<h3 id="ada-generic" tabindex="-1"><a class="header-anchor" href="#ada-generic"><span>Ada Generic</span></a></h3>
<div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token keyword">generic</span></span>
<span class="line">  <span class="token variable">Max_Size</span> <span class="token punctuation">:</span> <span class="token variable">Positive</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">type</span> <span class="token variable">Elem_Type</span> <span class="token keyword">is</span> <span class="token keyword">private</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">package</span> <span class="token variable">Generic_Stack</span> <span class="token keyword">is</span></span>
<span class="line">  <span class="token punctuation">..</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Generic_Stack</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- 인스턴스화</span></span>
<span class="line"><span class="token keyword">package</span> <span class="token variable">Integer_Stack</span> <span class="token keyword">is</span> <span class="token keyword">new</span> <span class="token variable">Generic_Stack</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token variable">Integer</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="quick-reference" tabindex="-1"><a class="header-anchor" href="#quick-reference"><span>Quick Reference</span></a></h2>
<h3 id="ari-접근-표기" tabindex="-1"><a class="header-anchor" href="#ari-접근-표기"><span>ARI 접근 표기</span></a></h3>
<p><code v-pre>(chain_offset, local_offset)</code></p>
<ul>
<li>chain_offset = 0: 현재 서브프로그램의 지역 변수</li>
<li>chain_offset = 1: 직접 상위(부모) 서브프로그램의 변수</li>
<li>local_offset: ARI 내 오프셋 (컴파일 타임 결정)</li>
</ul>
<h3 id="scheme-이진-트리-핵심-코드" tabindex="-1"><a class="header-anchor" href="#scheme-이진-트리-핵심-코드"><span>Scheme 이진 트리 핵심 코드</span></a></h3>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">tree-height</span> t<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">IF</span> <span class="token punctuation">(</span><span class="token function">NULL?</span> t<span class="token punctuation">)</span></span>
<span class="line">      <span class="token number">0</span></span>
<span class="line">      <span class="token punctuation">(</span><span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">(</span><span class="token function">MAX</span> <span class="token punctuation">(</span><span class="token function">tree-height</span> <span class="token punctuation">(</span><span class="token function">CADR</span> t<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">(</span><span class="token function">tree-height</span> <span class="token punctuation">(</span><span class="token function">CADDR</span> t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">count-nodes</span> t<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">IF</span> <span class="token punctuation">(</span><span class="token function">NULL?</span> t<span class="token punctuation">)</span></span>
<span class="line">      <span class="token number">0</span></span>
<span class="line">      <span class="token punctuation">(</span><span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">(</span><span class="token function">count-nodes</span> <span class="token punctuation">(</span><span class="token function">CADR</span> t<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">           <span class="token punctuation">(</span><span class="token function">count-nodes</span> <span class="token punctuation">(</span><span class="token function">CADDR</span> t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="haskell-foldr-계산-과정" tabindex="-1"><a class="header-anchor" href="#haskell-foldr-계산-과정"><span>Haskell foldr 계산 과정</span></a></h3>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token builtin">foldr</span> <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span> <span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token builtin">foldr</span> <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span> <span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token builtin">foldr</span> <span class="token punctuation">(</span><span class="token operator">+</span><span class="token punctuation">)</span> <span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">+</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin">foldr</span> <span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">_</span> <span class="token hvariable">n</span> <span class="token operator">-></span> <span class="token number">1</span><span class="token operator">+</span><span class="token hvariable">n</span><span class="token punctuation">)</span> <span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">=</span> <span class="token number">3</span>  <span class="token comment">-- length와 동일</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="exception-keywords-한눈에" tabindex="-1"><a class="header-anchor" href="#exception-keywords-한눈에"><span>Exception Keywords 한눈에</span></a></h3>
<table>
<thead>
<tr>
<th>언어</th>
<th>try 시작</th>
<th>catch</th>
<th>throw</th>
<th>정리</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ada</td>
<td><code v-pre>begin</code></td>
<td><code v-pre>exception when</code></td>
<td><code v-pre>raise</code></td>
<td>—</td>
</tr>
<tr>
<td>C++</td>
<td><code v-pre>try</code></td>
<td><code v-pre>catch</code></td>
<td><code v-pre>throw</code></td>
<td>—</td>
</tr>
<tr>
<td>Java</td>
<td><code v-pre>try</code></td>
<td><code v-pre>catch</code></td>
<td><code v-pre>throw</code></td>
<td><code v-pre>finally</code></td>
</tr>
<tr>
<td>Python</td>
<td><code v-pre>try:</code></td>
<td><code v-pre>except</code></td>
<td><code v-pre>raise</code></td>
<td><code v-pre>finally:</code></td>
</tr>
<tr>
<td>Ruby</td>
<td><code v-pre>begin</code></td>
<td><code v-pre>rescue</code></td>
<td><code v-pre>raise</code></td>
<td><code v-pre>ensure</code></td>
</tr>
</tbody>
</table>
<p>Ruby 추가: <code v-pre>retry</code> (재시도), Java 추가: <code v-pre>throws</code> (메서드 선언에 checked exception 명시)</p>
<h3 id="semaphore-vs-monitor" tabindex="-1"><a class="header-anchor" href="#semaphore-vs-monitor"><span>Semaphore vs Monitor</span></a></h3>
<table>
<thead>
<tr>
<th>항목</th>
<th>Semaphore</th>
<th>Monitor</th>
</tr>
</thead>
<tbody>
<tr>
<td>추상화 수준</td>
<td>저수준</td>
<td>고수준</td>
</tr>
<tr>
<td>상호 배제</td>
<td>수동 (wait/release)</td>
<td>자동</td>
</tr>
<tr>
<td>실수 가능성</td>
<td>높음</td>
<td>낮음</td>
</tr>
<tr>
<td>협력 동기화</td>
<td>직접 구현</td>
<td>직접 구현 (wait/notify)</td>
</tr>
<tr>
<td>구현 관계</td>
<td>Monitor로 구현 가능</td>
<td>Semaphore로 구현 가능</td>
</tr>
</tbody>
</table>
<h3 id="언어별-다형성-선언-키워드" tabindex="-1"><a class="header-anchor" href="#언어별-다형성-선언-키워드"><span>언어별 다형성 선언 키워드</span></a></h3>
<table>
<thead>
<tr>
<th>언어</th>
<th>부모</th>
<th>자식</th>
</tr>
</thead>
<tbody>
<tr>
<td>C++</td>
<td><code v-pre>virtual</code></td>
<td>(자동)</td>
</tr>
<tr>
<td>Java</td>
<td>(기본 virtual)</td>
<td><code v-pre>@Override</code> (선택)</td>
</tr>
<tr>
<td>C#</td>
<td><code v-pre>virtual</code></td>
<td><code v-pre>override</code></td>
</tr>
<tr>
<td>Python</td>
<td>(모두 virtual)</td>
<td>(자동)</td>
</tr>
<tr>
<td>Ruby</td>
<td>(모두 virtual)</td>
<td>(자동)</td>
</tr>
</tbody>
</table>
</div></template>


