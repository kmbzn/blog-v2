<template><div><h1 id="_8-subprogram" tabindex="-1"><a class="header-anchor" href="#_8-subprogram"><span>8. Subprogram</span></a></h1>
<DateMeta />
<h2 id="subprogram" tabindex="-1"><a class="header-anchor" href="#subprogram"><span>Subprogram</span></a></h2>
<ul>
<li>
<p>Abstraction in programming languages</p>
<ul>
<li>Data abstraction (i.e, Record type)</li>
<li>Process abstraction</li>
</ul>
</li>
<li>
<p>In form of subprogram</p>
<ul>
<li>Reuse → savings, primarily memory space and coding time</li>
<li>Abstraction: details are replaced by subprogram calling</li>
<li>→ hiding the low-level details</li>
<li>→ increases the readability</li>
</ul>
</li>
<li>
<p>Closely related to method of OOP</p>
</li>
<li>
<p>Difference: way they are called and associations with class</p>
</li>
<li>
<p>There are various forms of the subprogram in programming languages</p>
</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token comment">//C</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">//Java</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token comment">#Python</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">+</span> b</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">//Javascript</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-swift line-numbers-mode" data-highlighter="prismjs" data-ext="swift"><pre v-pre><code class="language-swift"><span class="line"><span class="token comment">//Swift</span></span>
<span class="line"><span class="token keyword">func</span> <span class="token function-definition function">add</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> a<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> <span class="token omit keyword">_</span> b<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">Int</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">+</span> b</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs"><pre v-pre><code class="language-rust"><span class="line"><span class="token comment">//Rust</span></span>
<span class="line"><span class="token keyword">fn</span> <span class="token function-definition function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">)</span> <span class="token punctuation">-></span> <span class="token keyword">i32</span> <span class="token punctuation">{</span></span>
<span class="line">    a <span class="token operator">+</span> b</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token operator">/</span><span class="token operator">/</span>Ruby</span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">add</span></span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span></span>
<span class="line">    a <span class="token operator">+</span> b</span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token operator">//</span><span class="token constant">Haskell</span></span>
<span class="line"><span class="token hvariable">add</span> <span class="token operator">::</span> <span class="token constant">Int</span> <span class="token operator">-></span> <span class="token constant">Int</span> <span class="token operator">-></span> <span class="token constant">Int</span></span>
<span class="line"><span class="token hvariable">add</span> <span class="token hvariable">a</span> <span class="token hvariable">b</span> <span class="token operator">=</span> <span class="token hvariable">a</span> <span class="token operator">+</span> <span class="token hvariable">b</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="today-s-contents" tabindex="-1"><a class="header-anchor" href="#today-s-contents"><span>Today's Contents</span></a></h2>
<ul>
<li>Fundamentals of subprograms</li>
<li>Design issues</li>
<li>Local referencing environment</li>
<li>Parameter-passing methods</li>
<li>Parameter that are subprograms</li>
<li>Indirectly called subprograms</li>
<li>Overloaded subprograms</li>
<li>Generic subprograms</li>
<li>Design issues for functions</li>
<li>User-defined overloaded operators</li>
<li>Closures</li>
<li>Coroutines</li>
</ul>
<h2 id="fundamentals-of-subprograms" tabindex="-1"><a class="header-anchor" href="#fundamentals-of-subprograms"><span>Fundamentals of subprograms</span></a></h2>
<ul>
<li>General characteristics
<ul>
<li>Single entry point</li>
<li>서브프로그램은 항상 하나의 진입점에서 실행을 시작함</li>
<li>One subprogram in execution</li>
<li>호출 시 하나의 인스턴스만 활성 상태</li>
<li>Control return to the caller after termination</li>
<li>Most subprograms have names (함수 이름을 통해 호출)</li>
<li>Except: anonymous subprograms in C# and Python</li>
</ul>
</li>
</ul>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code class="language-csharp"><span class="line"><span class="token comment">//C#</span></span>
<span class="line"><span class="token class-name">Func<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">></span></span> <span class="token keyword">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token comment">#Python</span></span>
<span class="line">add <span class="token operator">=</span> <span class="token keyword">lambda</span> a<span class="token punctuation">,</span> b<span class="token punctuation">:</span> a <span class="token operator">+</span> b</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Alternatives 1(coroutines): 협동 루틴, 즉 작업 간 전환이 명시적, 한 루틴이 다른 루틴에게 제어를 넘겨주며 돌아가며 실행</p>
</li>
<li>
<p>Alternatives 2(concurrent): 여러 작업이 동시에 실행됨 (논리적으로 또는 실제로), 동시 실행을 지향</p>
</li>
<li>
<p>Basic definitions</p>
<ul>
<li>Subprogram definition describe Interface and actions</li>
<li>Subprogram is active after subprogram call</li>
<li>Two kinds of subprograms: procedure and function</li>
<li>Subprogram header
<ul>
<li>Specifies that the following syntactic unit is a subprogram definition</li>
<li>Provides a name</li>
<li>Specify a list of parameters (optional)</li>
</ul>
</li>
<li>Body contains actions</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token punctuation">[</span>Python<span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">adder</span> <span class="token punctuation">(</span>parameters<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    body…</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token punctuation">[</span>C<span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">adder</span> <span class="token punctuation">(</span>parameters<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    body…<span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>항목</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td>Subprogram</td>
<td>하나의 재사용 가능한 코드 블록으로, 호출되면 특정 동작을 수행</td>
</tr>
<tr>
<td>Subprogram Definition</td>
<td>인터페이스(이름, 매개변수)와 동작(내용)을 기술</td>
</tr>
<tr>
<td>활성 시점</td>
<td>호출(Call)이 발생한 후에 활성(active) 상태가 됨</td>
</tr>
<tr>
<td>종류</td>
<td>두 가지 주요 유형: Procedure와 Function</td>
</tr>
<tr>
<td>Header (헤더)</td>
<td>이 코드 블록이 subprogram임을 명시하며, 이름과 (옵션) 매개변수를 선언</td>
</tr>
<tr>
<td>Body (본문)</td>
<td>실제 수행할 동작을 정의</td>
</tr>
</tbody>
</table>
<ul>
<li>Basic definitions
<ul>
<li>[Python] <code v-pre>def</code> statement can be executed</li>
<li>Assign name to function body (이름을 함수 본체에 할당하는 것과 같음)</li>
<li>No need to declare in advance, declare and use when needed</li>
<li>함수는 일급 객체(first-class citizen): 함수가 다른 객체들과 동일한 방식으로 다뤄질 수 있다는 것을 의미</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">if</span> condition<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> a <span class="token operator">+</span> b</span>
<span class="line">    operation <span class="token operator">=</span> add        <span class="token comment"># 변수에 저장</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>operation<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 인자로 전달, 반환값으로 사용, 결과: 5</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">fun</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> x <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line"><span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">fun</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> x <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>fun<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 실행 중 어떤 fun이 정의되는지가 결정됨</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Basic definitions
<ul>
<li>[Ruby] Ruby에서는 모든 것이 객체이고, 메서드도 예외가 아님</li>
<li>Can also be defined outside class definitions (클래스 외부에서도 메서드 정의 가능)</li>
<li>Considered as method of root object (Object) (이 경우 Object 클래스의 인스턴스 메서드가 됨)</li>
<li>Called as if function in C-based (C 언어 스타일처럼 함수 호출하듯 사용할 수 있음)</li>
</ul>
</li>
</ul>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">greet</span></span><span class="token punctuation">(</span>name<span class="token punctuation">)</span></span>
<span class="line">    puts <span class="token string-literal"><span class="token string">"Hello, </span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content">name</span><span class="token delimiter punctuation">}</span></span><span class="token string">"</span></span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">greet<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Ruby"</span></span><span class="token punctuation">)</span> <span class="token comment"># Object의 메서드로 호출됨</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>함수라는 개념이 없음</p>
</li>
<li>
<p>전부 객체의 메서드</p>
</li>
<li>
<p>Basic definitions</p>
<ul>
<li>[Lua] Lua는 함수를 값(value)으로 취급</li>
<li>Nameless function</li>
<li>함수는 이름 없는 리터럴(function literal)</li>
</ul>
</li>
</ul>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code class="language-lua"><span class="line"><span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token keyword">return</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x <span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>Function can be assigned to variable</li>
<li>함수는 변수에 할당되고, 인자로 전달되며, 결과로 반환될 수 있음</li>
<li>함수 정의와 할당은 동일한 의미 (정의 자체가 expression)</li>
</ul>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code class="language-lua"><span class="line"><span class="token keyword">function</span> <span class="token function">cube</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token keyword">return</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x <span class="token keyword">end</span></span>
<span class="line">cube <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token keyword">return</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x <span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Python: 함수는 객체지만 <code v-pre>def</code>는 statement</li>
<li>Ruby: 함수 없음 → 전부 &quot;메서드 (객체 소속)&quot;</li>
<li>Lua: 함수는 완전한 값 (expression 기반)</li>
</ul>
<table>
<thead>
<tr>
<th>항목</th>
<th>Python</th>
<th>Lua</th>
<th>Ruby</th>
</tr>
</thead>
<tbody>
<tr>
<td>함수 존재</td>
<td>있음</td>
<td>있음</td>
<td>없음 (메서드만)</td>
</tr>
<tr>
<td>함수 = 값</td>
<td>O</td>
<td>◎ (더 강함)</td>
<td>△ (Method object로는 가능)</td>
</tr>
<tr>
<td>정의 방식</td>
<td>statement</td>
<td>expression</td>
<td>-</td>
</tr>
<tr>
<td>소속</td>
<td>독립</td>
<td>독립</td>
<td>항상 객체에 속함</td>
</tr>
<tr>
<td>호출 방식</td>
<td><code v-pre>f()</code></td>
<td><code v-pre>f()</code></td>
<td>객체.method</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>Basic definitions</p>
<ul>
<li>Protocol of a subprogram: parameter profile + return type</li>
<li>Parameter profile: number, order, and types</li>
<li>이 정보를 통해 컴파일러나 호출자가 subprogram을 어떻게 사용할 수 있는지 판단</li>
<li>Declarations provide the subprogram's protocol but do not include their bodies</li>
<li>Declarations are needed for static type checking</li>
<li>Definition includes actual implementations</li>
</ul>
</li>
<li>
<p>Two ways to access to values:</p>
<ul>
<li>Direct access to nonlocal variables</li>
<li>Parameter passing (more flexible)</li>
</ul>
</li>
<li>
<p>Two ways to access to values:</p>
<ul>
<li>Direct access to nonlocal variables
<ul>
<li>Extensive access to nonlocals can reduce reliability</li>
<li>외부 상태에 의존하게 되어 재사용성, 예측 가능성, 디버깅 난이도 증가</li>
<li>변경 가능성이 크면 side effect 발생 위험 있음</li>
<li>Changing nonlocals and class variables</li>
<li>Can make side effect (should be avoided)</li>
<li>Reliable problem</li>
<li>Functional language does not have mutable data</li>
<li>Unable to change memory</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Two ways to access to values:</p>
<ul>
<li>Parameter passing (more flexible)
<ul>
<li>더 유연하고 안전한 접근 방식</li>
<li>데이터를 함수로 명시적으로 전달하여, 외부 상태와의 의존을 줄임</li>
<li>파라미터를 통해 함수의 동작을 입력에만 의존하게 만들 수 있음</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Parameters</p>
<ul>
<li>Transmit computations</li>
<li>Name of subprogram is used as parameter</li>
<li>다른 서브프로그램(함수)의 이름을 인자로 전달해서, 내부에서 호출되도록 함</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token comment"># Python</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">square</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> x <span class="token operator">*</span> x</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">compute_and_print</span><span class="token punctuation">(</span>func<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>func<span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">compute_and_print<span class="token punctuation">(</span>square<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment"># → 25</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token comment"># Ruby</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">square</span></span><span class="token punctuation">(</span>x<span class="token punctuation">)</span></span>
<span class="line">    x <span class="token operator">*</span> x</span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">compute</span></span><span class="token punctuation">(</span>func<span class="token punctuation">,</span> value<span class="token punctuation">)</span></span>
<span class="line">    func<span class="token punctuation">.</span>call<span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">compute<span class="token punctuation">(</span>method<span class="token punctuation">(</span><span class="token symbol">:square</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment"># → 25, square 메서드를 Method 객체로 변환</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code class="language-lua"><span class="line"><span class="token comment">-- Lua</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> x <span class="token operator">*</span> x</span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">compute</span><span class="token punctuation">(</span>func<span class="token punctuation">,</span> value<span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token function">compute</span><span class="token punctuation">(</span>square<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">-- → 25</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Parameters (Python)
<ul>
<li>Formal parameter
<ul>
<li>Parameters in header</li>
<li>Thought of as dummy (호출 시 전달될 값의 &quot;자리만 차지하는 변수&quot;)</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment"># ← 'name'은 formal parameter</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Hello,"</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Actual parameter
<ul>
<li>List of parameters in subprogram call statements</li>
<li>함수 호출 시 실제로 전달되는 값</li>
<li>함수가 호출될 때, 이 값들이 formal parameter에 바인딩됨</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line">greet<span class="token punctuation">(</span><span class="token string">"Alice"</span><span class="token punctuation">)</span> <span class="token comment"># ← "Alice"가 actual parameter</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>Parameters (Python)
<ul>
<li>Positional parameter
<ul>
<li>Binding of actual parameters to formal parameters—is done by position</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">subtract</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">-</span> b</span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>subtract<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># a=10, b=3 → 결과: 7</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Keyword parameter
<ul>
<li>Binding of actual parameters to formal parameters—is done by name</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>subtract<span class="token punctuation">(</span>b<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> a<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># 결과: 7</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>[Mix of position and keyword]</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line">sumer<span class="token punctuation">(</span>my_length<span class="token punctuation">,</span> <span class="token builtin">sum</span> <span class="token operator">=</span> my_sum<span class="token punctuation">,</span> <span class="token builtin">list</span> <span class="token operator">=</span> my_array<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>Parameters (Python)
<ul>
<li>Default value
<ul>
<li>Used if no actual parameter is passed to the formal parameter</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">compute_pay</span><span class="token punctuation">(</span>income<span class="token punctuation">,</span> exemptions <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> tax_rate<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>Absent actual parameter
<ul>
<li>Skip (exemptions)</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line">pay <span class="token operator">=</span> compute_pay<span class="token punctuation">(</span><span class="token number">20000.0</span><span class="token punctuation">,</span> tax_rate <span class="token operator">=</span> <span class="token number">0.15</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>Parameters (C++)
<ul>
<li>No keyword parameter</li>
<li>Default parameter must appear last</li>
</ul>
</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token keyword">float</span> <span class="token function">compute_pay</span><span class="token punctuation">(</span><span class="token keyword">float</span> income<span class="token punctuation">,</span> <span class="token keyword">float</span> tax_rate<span class="token punctuation">,</span> <span class="token keyword">int</span> exemptions <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">pay <span class="token operator">=</span> <span class="token function">compute_pay</span><span class="token punctuation">(</span><span class="token number">20000.0</span><span class="token punctuation">,</span> <span class="token number">0.15</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>If there is no default</p>
<ul>
<li>the number of formal and actual parameters should be the same</li>
</ul>
</li>
<li>
<p>Parameters (C#)</p>
<ul>
<li>Variable number of parameters (same type)</li>
<li><code v-pre>params</code> (여러 개 인자를 받아서 배열로 만들어주는 기능)
<ul>
<li>반드시 마지막 파라미터여야 함</li>
<li>하나만 사용 가능</li>
<li>같은 타입만 가능 (<code v-pre>int[]</code> 같은)</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code class="language-csharp"><span class="line"><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DisplayList</span><span class="token punctuation">(</span><span class="token keyword">params</span> <span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> next <span class="token keyword">in</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Next value {0}"</span><span class="token punctuation">,</span> next<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Myclass</span> myObject <span class="token operator">=</span> <span class="token keyword">new</span> Myclass<span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> myList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span></span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">myObject<span class="token punctuation">.</span><span class="token function">DisplayList</span><span class="token punctuation">(</span>myList<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">myObject<span class="token punctuation">.</span><span class="token function">DisplayList</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Parameters (Ruby)
<ul>
<li>Use array formal parameter <code v-pre>*</code> (only one in the parameter)</li>
<li>중간에도 올 수 있음 (C#은 불가능)</li>
</ul>
</li>
</ul>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line">list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">tester</span></span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3<span class="token punctuation">,</span> <span class="token operator">*</span>p4<span class="token punctuation">)</span></span>
<span class="line">    <span class="token operator">...</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">tester<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'first'</span></span><span class="token punctuation">,</span> mon <span class="token operator">=></span> <span class="token number">72</span><span class="token punctuation">,</span> tue <span class="token operator">=></span> <span class="token number">68</span><span class="token punctuation">,</span> wed <span class="token operator">=></span> <span class="token number">59</span><span class="token punctuation">,</span> <span class="token operator">*</span>list<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># p1 is 'first'</span></span>
<span class="line"><span class="token comment"># p2 is {mon => 72, tue => 68, wed => 59}</span></span>
<span class="line"><span class="token comment"># p3 is 2</span></span>
<span class="line"><span class="token comment"># p4 is [4, 6, 8]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Parameters (Lua)
<ul>
<li>Use ellipsis (<code v-pre>...</code>): treated as an array or as a list of values</li>
<li><code v-pre>ipairs</code> is an iterator for arrays</li>
<li><code v-pre>{...}</code> is an array of the actual parameter values</li>
<li>인자 개수 제한 없음</li>
</ul>
</li>
</ul>
<div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code class="language-lua"><span class="line"><span class="token keyword">function</span> <span class="token function">multiply</span> <span class="token punctuation">(</span><span class="token punctuation">...</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">local</span> product <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">for</span> i<span class="token punctuation">,</span> next <span class="token keyword">in</span> <span class="token function">ipairs</span><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token punctuation">}</span> <span class="token keyword">do</span></span>
<span class="line">        product <span class="token operator">=</span> product <span class="token operator">*</span> next</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    <span class="token keyword">return</span> sum</span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua"><pre v-pre><code class="language-lua"><span class="line"><span class="token keyword">function</span> <span class="token function">doIt</span> <span class="token punctuation">(</span><span class="token punctuation">...</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">local</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token punctuation">...</span></span>
<span class="line">    <span class="token punctuation">...</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token function">doIt</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>언어</th>
<th>문법</th>
<th>본질</th>
</tr>
</thead>
<tbody>
<tr>
<td>C#</td>
<td><code v-pre>params int[]</code></td>
<td>배열 생성 (정적)</td>
</tr>
<tr>
<td>Ruby</td>
<td><code v-pre>*args</code></td>
<td>배열로 수집 (pack) (동적)</td>
</tr>
<tr>
<td>Lua</td>
<td><code v-pre>...</code></td>
<td>값 리스트 (not array)</td>
</tr>
</tbody>
</table>
<ul>
<li>Subprograms are collection of statements
<ul>
<li>Procedures: does not return
<ul>
<li>Can change variable (side effect 발생 가능)</li>
<li>Visible in procedure and calling program (호출한 쪽 프로그램에서 공유되는 변수에 접근 가능)</li>
<li>Formal parameters that allow the transfer of data to the caller</li>
<li>Formal parameter는 함수와 호출자 사이에서 데이터를 주고받는 인터페이스 역할</li>
<li>상태를 바꾸는 용도 결과는 &quot;값&quot;이 아니라 변수 변화</li>
</ul>
</li>
<li>Functions: return value
<ul>
<li>Modeled on mathematics</li>
<li>No side effect ideally</li>
<li>Can be defined as operator</li>
</ul>
</li>
<li>Usually, function can be used as procedures by not defining return</li>
</ul>
</li>
</ul>
<h2 id="design-issues-for-subprograms" tabindex="-1"><a class="header-anchor" href="#design-issues-for-subprograms"><span>Design issues for subprograms</span></a></h2>
<ul>
<li>Choice of one or more parameter-passing methods
<ul>
<li>Pass-by-value</li>
<li>Pass-by-reference</li>
<li>…</li>
</ul>
</li>
<li>Type checking
<ul>
<li>Static type checking</li>
<li>Dynamic type checking</li>
</ul>
</li>
<li>Static or dynamic local variables in subprograms</li>
<li>Can be nested</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"nested"</span><span class="token punctuation">)</span></span>
<span class="line">    inner<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Can be passed as parameters
<ul>
<li>서브프로그램을 다른 함수의 파라미터로 전달 가능 (first-class function 지원 언어)</li>
<li>When subprograms are nested and passed, what is the correct referencing environment</li>
<li>함수 안에서 정의된 함수를 다른 곳에 넘길 때, 그 외부 환경 정보도 함께 전달</li>
</ul>
</li>
<li>Can be overloaded or generic
<ul>
<li>Overloading: 같은 이름 다른 시그니처 → 정적 다형성</li>
<li>Generic: 타입 파라미터화</li>
</ul>
</li>
<li>Closure supported?
<ul>
<li>함수와 그 함수가 선언된 환경의 조합</li>
</ul>
</li>
</ul>
<h2 id="local-referencing-environments" tabindex="-1"><a class="header-anchor" href="#local-referencing-environments"><span>Local referencing environments</span></a></h2>
<ul>
<li>
<p>Local variable</p>
<ul>
<li>Inside subprogram (서브프로그램 안에서 선언된 변수)</li>
<li>Static
<ul>
<li>선언 시 메모리에 고정된 위치에 할당, 프로그램 종료까지 유지됨</li>
<li>[C] keyword <code v-pre>static</code> is used for static local variable</li>
<li>함수가 여러 번 호출되더라도 이전 값 유지</li>
</ul>
</li>
<li>Stack dynamic (default setting for most languages)
<ul>
<li>함수 호출 시 스택 프레임에 생성되고, 리턴되면 소멸</li>
<li>[Pro] Flexible, each recursive calls have their own local variable</li>
<li>[Pro] If it is in active subprograms, it can be shared</li>
<li>[Con] Cost of time for allocation, initialization, deallocation</li>
<li>[Con] Must be indirectly accessed (determined only during execution)</li>
<li>[Con] Cannot be history sensitive</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Global variable</p>
<ul>
<li>Defined outside subprogram</li>
<li>Can be referenced in the method without declaring</li>
<li>If the name of a global variable is assigned in a method
<ul>
<li>Implicitly declared to be a local</li>
<li>Does not disturb the global (섀도잉 shadowing 현상)</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Nested subprograms (한 함수 안에 또 다른 함수를 정의하는 구조)</p>
<ul>
<li>Create hierarchy of logic and scopes</li>
<li>Can be used when it is only needed in another subprogram</li>
<li>Want to hide it from others → 캡슐화</li>
<li>Allowed in Algol, Pascal, Ada, JavaScript, Python, Ruby and Lua + most Functional languages</li>
<li>Not allowed in many descendants of C</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"I'm nested!"</span><span class="token punctuation">)</span></span>
<span class="line">    inner<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="parameter-passing-methods" tabindex="-1"><a class="header-anchor" href="#parameter-passing-methods"><span>Parameter passing methods</span></a></h2>
<ul>
<li>
<p>Semantics models</p>
</li>
<li>
<p>Implementation models</p>
</li>
<li>
<p>Implementing parameter passing methods</p>
</li>
<li>
<p>Parameter passing methods in common languages</p>
</li>
<li>
<p>Type checking parameters</p>
</li>
<li>
<p>Multidimensional arrays as parameters</p>
</li>
<li>
<p>Design considerations</p>
</li>
<li>
<p>Examples</p>
</li>
<li>
<p>Semantics models (formal parameter)</p>
<ul>
<li>in mode: receive data</li>
<li>out mode: transmit data</li>
<li>inout mode: can do both</li>
<li>[EX] list1: in mode, list2: inout mode, list3: out mode</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">function</span><span class="token punctuation">(</span>list1<span class="token punctuation">,</span> list2<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    list2 <span class="token operator">=</span> list1 <span class="token operator">+</span> list2</span>
<span class="line">    list3 <span class="token operator">=</span> list1 <span class="token operator">+</span> list2</span>
<span class="line">    <span class="token keyword">return</span> list2<span class="token punctuation">,</span> list3</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Implementation models</p>
<ul>
<li>Pass-by-value</li>
<li>Pass-by-result</li>
<li>Pass-by-value-result</li>
<li>Pass-by-reference</li>
<li>Pass-by-name</li>
</ul>
</li>
<li>
<p>Implementation models</p>
<ul>
<li>Pass-by-value</li>
</ul>
</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> in<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    in <span class="token operator">=</span> in <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"a: %d"</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Actual parameter is used to initialize formal parameter</p>
</li>
<li>
<p>Can implement in-mode (caller → callee)</p>
</li>
<li>
<p>Implemented by copy (usually)</p>
</li>
<li>
<p>Because the copied value is passed into the function without affecting the original value, it can be used in cases where the original value should not be changed</p>
</li>
<li>
<p>Pro: fast in both linkage cost and access time for scalars</p>
</li>
<li>
<p>Cons</p>
<ul>
<li>Additional storage is required for copy</li>
<li>Copy operations and storage can be costly when parameter is large</li>
</ul>
</li>
<li>
<p>Implementation models</p>
<ul>
<li>Pass-by-result</li>
</ul>
</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token comment">// Assume pass-by-result</span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> in<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    in <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"a: %d"</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Implementation for out-mode parameters (callee → caller)</p>
</li>
<li>
<p>No value is transmitted to the subprogram</p>
</li>
<li>
<p>실제 매개변수의 초기값은 서브프로그램 내에서 사용되지 않고, 오직 서브프로그램 종료 후 결과값이 복사돼 돌아가는 구조</p>
</li>
<li>
<p>Its value is transmitted back to the caller's actual parameter</p>
</li>
<li>
<p>Implemented by copy (usually)</p>
</li>
<li>
<p>호출 전: 아무 값도 복사되지 않음</p>
</li>
<li>
<p>호출 후: 서브프로그램 종료 시, 내부 변수의 값을 실제 매개변수 위치로 복사</p>
</li>
<li>
<p>Ensuring that the initial value of the actual parameter is not used in the called subprogram</p>
</li>
<li>
<p>(+) 내부 로컬 변수로 처리되기 때문에 초기값 오류 가능성이 낮음</p>
</li>
<li>
<p>(-) 초기값을 참조해야 하는 경우에는 부적합</p>
</li>
<li>
<p>(-) 여러 개의 이름(alias)이 같은 실제 매개변수를 가리키는 경우, 예측 불가능한 결과가 발생할 수 있음 (특히 pass-by-reference와 비교했을 때)</p>
</li>
<li>
<p>Implementation models</p>
<ul>
<li>Pass-by-result
<ul>
<li>Cons
<ul>
<li>Actual parameter collision</li>
<li>17 or 35 can be assigned to a</li>
<li>So, order dependent</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code class="language-csharp"><span class="line"><span class="token punctuation">[</span>C# 코드<span class="token punctuation">]</span></span>
<span class="line"><span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Fixer</span><span class="token punctuation">(</span><span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">int</span></span> x<span class="token punctuation">,</span> <span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">int</span></span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    x <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">;</span></span>
<span class="line">    y <span class="token operator">=</span> <span class="token number">35</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token range operator">..</span><span class="token punctuation">.</span></span>
<span class="line">f<span class="token punctuation">.</span><span class="token function">Fixer</span><span class="token punctuation">(</span><span class="token keyword">out</span> a<span class="token punctuation">,</span> <span class="token keyword">out</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Implementation models
<ul>
<li>Pass-by-result
<ul>
<li>Cons
<ul>
<li>Can choose between two different times to evaluate (time of call or return)</li>
<li>평가 시점(call vs return)에 따라 결과가 달라짐 → 신뢰성이 떨어짐</li>
<li>In function DoIt, <code v-pre>list[sub]</code> = <code v-pre>list[3]</code> or <code v-pre>list[5]</code>?</li>
<li>Unportable between an implementations: evaluation at beginning and evaluation at the end</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code class="language-csharp"><span class="line"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DoIt</span><span class="token punctuation">(</span><span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">int</span></span> x<span class="token punctuation">,</span> <span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">int</span></span> y<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    y <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line">    x <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name"><span class="token keyword">int</span></span> sub <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">int</span></span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">DoIt</span><span class="token punctuation">(</span><span class="token keyword">out</span> list<span class="token punctuation">[</span>sub<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">out</span> sub<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    System<span class="token punctuation">.</span>Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"{0} {1} {2}"</span><span class="token punctuation">,</span> list<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> list<span class="token punctuation">[</span>sub<span class="token punctuation">]</span><span class="token punctuation">,</span> sub<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>  - Call-time evaluation (호출 시점에 주소 평가): `17 12 5`
    - `// sub[3]` changed to 17, thus the value of x(17) return to `sub[3]`, not `sub[5]`
    - `//→` return address is decided during time of call, not return
  - Return-time evaluation (복귀 시점에 주소 평가):
    - `list[sub]` = `list[3]` ← sub 는 이때 3
    - sub = 5 ← DoIt() 에서 변경됨
    - → x = 17 → `list[3]` = 17
    - sub = 5 가 먼저 적용된 뒤 `list[sub]` = `list[5]`
    - → x = 17 → `list[5]` = 17
    - ⇒ 즉, `list[sub]`는 `list[3]`으로 평가되었다는 것.
    - → 주소가 호출 시점(call time)에 평가되었음을 의미함.
</code></pre>
<ul>
<li>
<p>Implementation models</p>
<ul>
<li>Pass-by-value-result
<ul>
<li>Implementation for inout-mode parameters</li>
<li>Pass-by-value + pass-by-result</li>
<li>Called by pass-by-copy</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Implementation models</p>
<ul>
<li>Pass-by-reference</li>
</ul>
</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>in<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    in <span class="token operator">=</span> in <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"a: %d"</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 30</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Implementation for inout-mode parameters</li>
<li>Transmits an access path (address)</li>
<li>Value of the original variable can be changed</li>
<li>Efficient (time and space), no copy</li>
<li>Cons
<ul>
<li>Slow to access to formal parameter due to indirect addressing</li>
<li>Inadvertent and erroneous changes may be made</li>
<li>Aliases can be created → providing access to nonlocal variables → reliability problem</li>
</ul>
</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">void</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">&amp;</span>first<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span>second<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">fun</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span> total<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// first and second can be aliases</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Implementation models</p>
<ul>
<li>Pass-by-name
<ul>
<li>Implementation for inout-mode parameters</li>
<li>코드 조각(이름)을 통째로 전달해서, 그때그때 실행해보는 방식</li>
<li>실제 매개변수의 이름 자체를 서브프로그램에 전달하는 것처럼 동작함</li>
<li>매개변수 표현식이 매 호출마다 재평가됨 (lazy substitution)</li>
<li>일종의 텍스트 치환(textual substitution) 또는 매크로처럼 동작</li>
<li>동작 방식
<ul>
<li>Works like pass-by-reference when variable is passed</li>
<li>Works like pass-by-value when constant value is passed</li>
<li>Complex to implement and inefficient</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Implementation models</p>
<ul>
<li>Pass-by-name</li>
</ul>
</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">DoIt(x, y)</span>
<span class="line">    x := x + 1</span>
<span class="line">    y := y + x</span>
<span class="line"></span>
<span class="line">DoIt(a[i], i)</span>
<span class="line">여기서 a[i]랑 i는 그대로 전달됨 (값이 아니라 이름처럼)</span>
<span class="line"></span>
<span class="line">실행 흐름 (pass-by-name):</span>
<span class="line">x := a[i] + 1 → a[i]가 변경됨</span>
<span class="line">y := i + a[i] → i 변경됨</span>
<span class="line">다시 a[i]를 보면 이미 값이 바뀌었을 수 있음</span>
<span class="line">→ 한 줄이 끝나면 변수 값이 달라져서 다음 줄 해석이 바뀜</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>너무 복잡하고, 실수하기 쉽고, 속도도 느려서 → 요즘은 거의 안 씀. Algol 60 에서 사용</p>
</li>
<li>
<p>Implementing parameter passing methods</p>
<ul>
<li>Run-time stack using run-time system takes care for parameter transmission</li>
</ul>
</li>
</ul>
<table>
<thead>
<tr>
<th>파라미터</th>
<th>전달 방식</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td>w</td>
<td>pass-by-value</td>
<td>값 자체를 복사하여 전달됨</td>
</tr>
<tr>
<td>x</td>
<td>pass-by-result</td>
<td>함수 종료 시 결과를 복사해서 전달</td>
</tr>
<tr>
<td>y</td>
<td>pass-by-value-result</td>
<td>호출 시 값 전달, 종료 시 결과 복사</td>
</tr>
<tr>
<td>z</td>
<td>pass-by-reference</td>
<td>주소(참조) 전달, 원본 직접 수정 가능</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>파라미터</th>
<th>Stack 동작</th>
<th>함수 내부에서</th>
</tr>
</thead>
<tbody>
<tr>
<td>a (w)</td>
<td>호출 시 w의 값 복사 → a 에 저장</td>
<td>읽기 가능, 변경해도 w에 영향 없음</td>
</tr>
<tr>
<td>b (x)</td>
<td>별도 저장소(스택)에 공간 만들고, 함수 종료 후 b 값을 x에 복사</td>
<td>함수 내부에서 b는 로컬 변수처럼 쓰고, 리턴 시 값 복사</td>
</tr>
<tr>
<td>c (y)</td>
<td>호출 시 y 값 복사 → 함수 종료 시 c 값 → 다시 y에 복사</td>
<td>양방향 값 복사 (진입, 종료 시 모두)</td>
</tr>
<tr>
<td>d (z)</td>
<td>z 의 주소를 전달 → 함수 내부에서 직접 원본 접근 가능</td>
<td>변경 시 z 도 바로 바뀜</td>
</tr>
</tbody>
</table>
<ul>
<li>Parameter passing methods in common languages
<ul>
<li>[C++] Pass-by-value but pass-by-reference can be achieved by pointer and reference types</li>
</ul>
</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token keyword">void</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span>p1<span class="token punctuation">,</span> <span class="token keyword">int</span> p2<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">&amp;</span>p3<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>p1: pass-by-reference but cannot be changed, p2: pass-by-value, p3: pass-by-reference</li>
<li>Constant parameter vs in-mode parameter
<ul>
<li>Constant parameter can never be assigned but in-mode parameter can</li>
</ul>
</li>
<li>[Java] Pass-by-value but objects are passed by reference
<ul>
<li>No pointer type, scalar cannot be passed by reference</li>
</ul>
</li>
<li>[C#] Pass-by-value but pass-by-reference can be achieved by <code v-pre>ref</code></li>
</ul>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code class="language-csharp"><span class="line"><span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">sumer</span><span class="token punctuation">(</span><span class="token keyword">ref</span> <span class="token class-name"><span class="token keyword">int</span></span> oldSum<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span></span> newOne<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token range operator">..</span><span class="token punctuation">.</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token range operator">..</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token function">sumer</span><span class="token punctuation">(</span><span class="token keyword">ref</span> sum<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Parameter passing methods in common languages
<ul>
<li>[Python, Ruby] Pass-by-assignment</li>
<li>All data are object</li>
<li>[EX] <code v-pre>x = x + 1</code>
<ul>
<li>Takes object referenced by x, increments by 1, then create new object, finally assign new object to x</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line">string <span class="token operator">=</span> <span class="token string">"Hello"</span></span>
<span class="line">string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'W'</span> <span class="token comment"># X</span></span>
<span class="line">string <span class="token operator">=</span> <span class="token string">"Wello"</span> <span class="token comment"># O</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>[EX] Scalar cannot be changed in subprogram</li>
<li>Reference method of the object is determined depending on the object being passed
<ul>
<li>Mutable Object(list, dict, set) → Call by reference</li>
<li>Immutable Object(str, int, tuple) → Call by value</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token comment"># [immutable] call-by-value</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">func<span class="token punctuation">(</span>a<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token comment"># [mutable] call-by-reference</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    x<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span></span>
<span class="line">func<span class="token punctuation">(</span>a<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token comment"># [mutable] ??</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span></span>
<span class="line">a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span></span>
<span class="line">func<span class="token punctuation">(</span>a<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Type checking parameters
<ul>
<li>Most languages require type checking</li>
<li>Early programming languages (Fortran 77 and original version of C) did not require</li>
</ul>
</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">double</span> <span class="token function">sin</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>    <span class="token comment">// avoid type check</span></span>
<span class="line"><span class="token keyword">double</span> x<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">double</span> <span class="token function">sin</span><span class="token punctuation">(</span><span class="token keyword">double</span> x<span class="token punctuation">)</span>    <span class="token comment">// do type check (with coercion), prototype method</span></span>
<span class="line"><span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>함수 선언과 타입 정보가 분리되어 있었음</li>
<li>In C89, formal parameters can be defined in two ways</li>
<li>In C99 and C++, prototype form but avoided by ellipsis</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">int</span> <span class="token function">printf</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> format_string<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>Type checking parameters
<ul>
<li>In C#, <code v-pre>ref</code> actual parameter needs to be the same with formal parameter</li>
<li>In Python, Ruby, objects have types, but variables do not</li>
<li>Formal parameters are typeless</li>
<li>No type checking of parameter</li>
</ul>
</li>
</ul>
<table>
<thead>
<tr>
<th>언어</th>
<th>타입 검사</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td>C#</td>
<td>엄격한 타입 검사</td>
<td>형식 매개변수(formal parameter)와 실제 인자(actual argument)의 타입이 반드시 일치해야 함. <code v-pre>ref</code>, <code v-pre>out</code> 키워드를 쓸 경우, 호출부에도 명시적으로 붙여야 함 → 형식과 키워드까지 일치해야 컴파일 통과</td>
</tr>
<tr>
<td>C/C++</td>
<td>(C89 이후)</td>
<td>C89부터 함수 프로토타입이 도입되며 타입 검사 가능. <code v-pre>void f(int); f(&quot;abc&quot;);</code> → 오류 발생. C++에서는 더 엄격하고 함수 오버로딩도 지원</td>
</tr>
<tr>
<td>Python</td>
<td>변수는 타입 없음</td>
<td>객체는 타입을 가지지만, 변수 자체는 타입이 없음. 함수의 형식 매개변수는 타입 선언이 없음 (기본적으로) → 파라미터에 대한 타입 검사도 하지 않음</td>
</tr>
<tr>
<td>Ruby</td>
<td>Python과 동일</td>
<td>변수는 어떤 타입의 객체든 가리킬 수 있음. 함수 정의 시 파라미터에 타입을 명시할 수 없음 → 런타임에서 잘못된 타입 사용 시 오류 발생 (동적 타입)</td>
</tr>
</tbody>
</table>
<ul>
<li>Multidimensional arrays as parameters
<ul>
<li>In C and C++, pointer can be used for passing</li>
<li>Inclusion of pointer arithmetic</li>
<li>Dimension of matrix (row, column) can be passed as parameters</li>
</ul>
</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">void</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token keyword">float</span> <span class="token operator">*</span>mat_ptr<span class="token punctuation">,</span></span>
<span class="line">         <span class="token keyword">int</span> num_rows<span class="token punctuation">,</span></span>
<span class="line">         <span class="token keyword">int</span> num_cols<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Can access element by
<ul>
<li><code v-pre>*(mat_ptr + (row * num_cols) + col) = x;</code></li>
<li>Or macro</li>
</ul>
</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">mat_ptr</span><span class="token expression"><span class="token punctuation">(</span>r<span class="token punctuation">,</span>c<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>mat_ptr <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>num_cols<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span></span>
<span class="line"><span class="token function">mat_ptr</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span>col<span class="token punctuation">)</span> <span class="token operator">=</span> x<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Multidimensional arrays as parameters
<ul>
<li>In C# and Java, arrays are object</li>
<li>Formal parameter for a matrix appear with <code v-pre>[][]</code></li>
<li>Use <code v-pre>length</code> (<code v-pre>Length</code> in C#) to get row and column sizes</li>
</ul>
</li>
</ul>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">float</span> <span class="token function">sumer</span><span class="token punctuation">(</span><span class="token keyword">float</span> mat<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">float</span> sum <span class="token operator">=</span> <span class="token number">0.0f</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> row <span class="token operator">&lt;</span> mat<span class="token punctuation">.</span>length<span class="token punctuation">;</span> row<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> mat<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            sum <span class="token operator">+=</span> mat<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token comment">//** for (int row ...</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token comment">//** for (int col ...</span></span>
<span class="line">    <span class="token keyword">return</span> sum<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Design considerations
<ul>
<li>Efficiency
<ul>
<li>실행 속도와 자원 사용을 고려해 불필요한 데이터 접근을 줄이는 것이 중요함</li>
<li>서브프로그램 내부에서 외부 데이터에 자주 접근하지 않도록 설계</li>
<li>필요한 데이터는 파라미터로 전달받고, 내부에서만 처리</li>
<li>복사 비용이 큰 객체는 포인터나 참조로 전달 (C/C++)</li>
</ul>
</li>
<li>Minimize functional side effect
<ul>
<li>서브프로그램이 외부 상태를 예기치 않게 바꾸는 것을 피해야 함</li>
<li>입력값만 사용하고 결과를 반환하는 순수 함수(pure function) 지향</li>
<li>외부 변수(global variables), 참조 파라미터 등은 가급적 쓰지 않기</li>
<li>명확하고 예측 가능한 함수로 유지</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token comment"># 부작용 발생: 함수가 외부 리스트를 바꿈</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">add_item_bad</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 부작용 없음: 새로운 리스트를 반환</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">add_item_good</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> lst <span class="token operator">+</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Examples
<ul>
<li>Compare pass-by-value-result and pass-by-reference</li>
</ul>
</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">void</span> <span class="token function">fun</span> <span class="token punctuation">(</span><span class="token keyword">int</span> first<span class="token punctuation">,</span> <span class="token keyword">int</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    first <span class="token operator">+=</span> first<span class="token punctuation">;</span></span>
<span class="line">    second <span class="token operator">+=</span> second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> list<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">fun</span><span class="token punctuation">(</span>list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Assume that there is no accumulation</p>
</li>
<li>
<p>Pass by value: No changes</p>
</li>
<li>
<p>Pass by reference: list → {2,6}</p>
</li>
<li>
<p>Pass by value-result: list → {2,6}</p>
</li>
<li>
<p>Examples</p>
<ul>
<li>Compare pass-by-value-result and pass-by-reference</li>
</ul>
</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">/* i is a global variable */</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    i <span class="token operator">=</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> list<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    list<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">fun</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>When pass-by-value-result is used, i and a are not alias</p>
<ul>
<li>global variable i is changed within fun</li>
<li>But, formal parameter back to caller</li>
</ul>
</li>
<li>
<p>When pass-by-reference is used, i and a are alias</p>
<ul>
<li>global variable i is changed within fun</li>
<li>Formal parameter not back to caller → i remains 5</li>
</ul>
</li>
<li>
<p>Examples</p>
</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> temp<span class="token punctuation">;</span></span>
<span class="line">    temp <span class="token operator">=</span> a<span class="token punctuation">;</span></span>
<span class="line">    a <span class="token operator">=</span> b<span class="token punctuation">;</span></span>
<span class="line">    b <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> value <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> list<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">swap</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// (1)</span></span>
<span class="line">    <span class="token function">swap</span><span class="token punctuation">(</span>list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// (2)</span></span>
<span class="line">    <span class="token function">swap</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> list<span class="token punctuation">[</span>value<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// (3)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Assume that there is no accumulation</li>
<li>Pass by value: No changes after (1),(2),(3)</li>
<li>Pass by reference:
<ul>
<li>(1) value → 1, list → {2,3,5,7,9}</li>
<li>(2) value → 2, list → {3,1,5,7,9}</li>
<li>(3) value → 5, list → {1,3,2,7,9}</li>
</ul>
</li>
<li>Pass by value-result:
<ul>
<li>(1) value → 1, list → {2,3,5,7,9}</li>
<li>(2) value → 2, list → {3,1,5,7,9}</li>
<li>(3) value → 5, list → {1,3,2,7,9} (when addr is computed at time of call)
<ul>
<li>If addr is computed at time of return</li>
<li>value → 5, list[value==5] → 2 (out of range error)</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="parameter-that-are-subprograms" tabindex="-1"><a class="header-anchor" href="#parameter-that-are-subprograms"><span>Parameter that are subprograms</span></a></h2>
<ul>
<li>
<p>In a certain situation, subprograms needs to be sent as parameters</p>
</li>
<li>
<p>[Issue 1] Type checking function's protocol</p>
<ul>
<li>전달하려는 함수가 올바른 형식(매개변수 개수, 타입, 반환 타입)을 갖고 있는지 확인해야 함</li>
<li>그렇지 않으면 컴파일러가 호출 시 타입 오류를 탐지하지 못함</li>
<li>→ 런타임 오류 발생 위험</li>
<li>함수 포인터(Function Pointer) 타입 명시 (C/C++)
<ul>
<li><code v-pre>int compute(int x, int (*func)(int))</code></li>
<li><code v-pre>func</code>는 <code v-pre>int(int)</code> 타입 함수여야 함 → 타입 체크 가능</li>
</ul>
</li>
</ul>
</li>
<li>
<p>[Issue 2] Function would be nested → how to decide referencing environment</p>
<ul>
<li>함수가 자신을 감싼 외부 스코프의 변수를 참조하고 있는데,</li>
<li>그 함수가 다른 함수에 전달되면 외부 변수에 접근할 때 어떤 환경을 따라야 할지 모호함</li>
<li>Shallow binding: environment of the call statement that enacts the passed subprogram (Used for dynamic-scoped languages)</li>
<li>Deep binding: environment of the definition of the passed subprogram (Suitable for static-scoped languages)</li>
<li>Ad hoc binding: environment of the call statement that passed the subprogram as an actual parameter</li>
<li>x is bound to local x in sub1</li>
<li>x is bound to local x in sub3</li>
<li>x is bound to local x in sub4</li>
</ul>
</li>
</ul>
<h2 id="calling-subprograms-indirectly" tabindex="-1"><a class="header-anchor" href="#calling-subprograms-indirectly"><span>Calling subprograms indirectly</span></a></h2>
<ul>
<li>In a certain situation (event handling in GUI), subprograms must be called indirectly</li>
<li>Unknown which subprogram will be called until runtime</li>
<li>Done by pointer or reference to subprogram</li>
<li><code v-pre>float (*pfun)(float, int);</code></li>
<li><code v-pre>pfun</code>은 매개변수 <code v-pre>(float, int)</code>를 받고 <code v-pre>float</code>을 반환하는 함수를 가리키는 포인터</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span></span>
<span class="line"><span class="token keyword">float</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">float</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">float</span> <span class="token function">divide</span><span class="token punctuation">(</span><span class="token keyword">float</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">/</span> b<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">float</span> <span class="token punctuation">(</span><span class="token operator">*</span>pfun<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> condition <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 런타임 조건</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span></span>
<span class="line">        pfun <span class="token operator">=</span> multiply<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">else</span></span>
<span class="line">        pfun <span class="token operator">=</span> divide<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">float</span> result <span class="token operator">=</span> <span class="token function">pfun</span><span class="token punctuation">(</span><span class="token number">10.0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 간접 호출</span></span>
<span class="line">    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Result: %.2f\n"</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20.00</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Called by</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token punctuation">(</span><span class="token operator">*</span>pfun2<span class="token punctuation">)</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span> second<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 전통적인 포인터 방식</span></span>
<span class="line"><span class="token function">pfun2</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span> second<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// C에서 허용되는 간단한 문법</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>[C#] delegate
<ul>
<li>Reference to method for pass it as parameter</li>
<li>delegate는 함수 포인터와 비슷한 개념</li>
<li>하나 이상의 메서드를 참조할 수 있는 타입</li>
<li>메서드를 변수처럼 넘기고 호출할 수 있음</li>
</ul>
</li>
</ul>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code class="language-csharp"><span class="line"><span class="token keyword">public</span> <span class="token keyword">delegate</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">Change</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 델리게이트 타입 선언,</span></span>
<span class="line"><span class="token comment">// int을 받아 int를 반환하는 메서드 시그니처와 동일한 타입의 delegate를 만듦</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">// fun1, fun2는 모두 Change delegate와 시그니처가 같음</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Change</span> chgfun1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Change</span><span class="token punctuation">(</span>fun1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// fun1을 참조하는 delegate 생성</span></span>
<span class="line">chgfun1 <span class="token operator">+=</span> fun2<span class="token punctuation">;</span> <span class="token comment">// fun2도 추가 → 멀티캐스트 delegate</span></span>
<span class="line"><span class="token class-name"><span class="token keyword">int</span></span> result <span class="token operator">=</span> <span class="token function">chgfun1</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// fun1(5), fun2(5) 순으로 실행됨</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="overloaded-subprograms" tabindex="-1"><a class="header-anchor" href="#overloaded-subprograms"><span>Overloaded subprograms</span></a></h2>
<ul>
<li>The same name and referencing environments as another</li>
<li>But, unique protocol (number, order types of parameters and return types)</li>
<li>Meaning of call is determined by actual parameters</li>
<li>[Issue 1] Coercion is allowed?
<ul>
<li>When there is no exact match, should we allow the best match? and how?</li>
</ul>
</li>
<li>[Issue 2] The same parameter but different return types
<ul>
<li>How to choose return type?</li>
</ul>
</li>
<li>The most common multiple versions of subprogram: constructors</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token comment">// [C++]</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> first<span class="token punctuation">,</span> <span class="token keyword">int</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">+</span> second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">float</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">float</span> first<span class="token punctuation">,</span> <span class="token keyword">float</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">-</span> second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">func</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 3</span></span>
<span class="line"><span class="token function">func</span><span class="token punctuation">(</span><span class="token number">1.0f</span><span class="token punctuation">,</span> <span class="token number">2.0f</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -1.0</span></span>
<span class="line"><span class="token function">func</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// error: call of overloaded 'func(double, double)' is ambiguous</span></span>
<span class="line"><span class="token function">func</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0f</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -1.0, coercion to func(float,float)</span></span>
<span class="line"><span class="token function">func</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 3, coercion to func(int,int)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>정확히 일치하는 타입이 최우선</li>
<li>암시적 변환 가능하면 고려됨</li>
<li>두 개 이상이 모두 암시적 변환 가능이면 → 모호성 오류(ambiguous)</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token comment">// [C++] ambiguous return type</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> first<span class="token punctuation">,</span> <span class="token keyword">int</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">+</span> second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">float</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> first<span class="token punctuation">,</span> <span class="token keyword">int</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">></span> second <span class="token operator">?</span> first <span class="token operator">:</span> second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// error: ambiguating new declaration of 'float ...</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// [Java]</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> first<span class="token punctuation">,</span> <span class="token keyword">int</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">+</span> second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">float</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">float</span> first<span class="token punctuation">,</span> <span class="token keyword">float</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">-</span> second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">func</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 3</span></span>
<span class="line"><span class="token function">func</span><span class="token punctuation">(</span><span class="token number">1.0f</span><span class="token punctuation">,</span> <span class="token number">2.0f</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -1.0</span></span>
<span class="line"><span class="token function">func</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// no suitable method found for func(double,double), argument mismatch; possible lossy conversion from double to int(float)</span></span>
<span class="line"><span class="token function">func</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0f</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// no suitable method …. lossy …</span></span>
<span class="line"><span class="token function">func</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// no suitable method …. lossy …</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// [Java] If not lossy conversion</span></span>
<span class="line"><span class="token function">func</span><span class="token punctuation">(</span><span class="token char">'A'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 67, coercion to func(int, int)</span></span>
<span class="line"><span class="token function">func</span><span class="token punctuation">(</span><span class="token char">'A'</span><span class="token punctuation">,</span> <span class="token number">2.0f</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 63.0, coercion to func(float,float)</span></span>
<span class="line"><span class="token function">func</span><span class="token punctuation">(</span><span class="token char">'A'</span><span class="token punctuation">,</span> <span class="token char">'B'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 131, coercion to func(int,int)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// [Java] ambiguous return type</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> first<span class="token punctuation">,</span> <span class="token keyword">int</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">+</span> second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">float</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> first<span class="token punctuation">,</span> <span class="token keyword">int</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>first <span class="token operator">-</span> second<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// error: method func(int,int) is already defined</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="generic-subprograms" tabindex="-1"><a class="header-anchor" href="#generic-subprograms"><span>Generic subprograms</span></a></h2>
<ul>
<li>
<p>Reusability is important for productivity</p>
</li>
<li>
<p>Polymorphism!</p>
<ul>
<li>Ad hoc polymorphism
<ul>
<li>Overloaded subprograms (need not behave similarly each other)</li>
</ul>
</li>
<li>Subtype polymorphism
<ul>
<li>OOP, variable of type T can access any object of type T and derived from T</li>
</ul>
</li>
<li>Parametric polymorphism
<ul>
<li>Takes generic parameters</li>
<li>Parametrically polymorphic subprograms are called generic subprograms</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Generic functions in C++</p>
</li>
<li>
<p>template function</p>
</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token comment">// Overloaded subprograms</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> first<span class="token punctuation">,</span> <span class="token keyword">int</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">></span> second <span class="token operator">?</span> first <span class="token operator">:</span> second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">float</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">float</span> first<span class="token punctuation">,</span> <span class="token keyword">float</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">></span> second <span class="token operator">?</span> first <span class="token operator">:</span> second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">double</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">double</span> first<span class="token punctuation">,</span> <span class="token keyword">double</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">></span> second <span class="token operator">?</span> first <span class="token operator">:</span> second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// With template function</span></span>
<span class="line"><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">Type</span><span class="token operator">></span></span>
<span class="line">Type <span class="token function">max</span><span class="token punctuation">(</span>Type first<span class="token punctuation">,</span> Type second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">></span> second <span class="token operator">?</span> first <span class="token operator">:</span> second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> x1 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> x2 <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">max</span><span class="token punctuation">(</span>x1<span class="token punctuation">,</span> x2<span class="token punctuation">)</span> <span class="token comment">// dynamically bound to the types</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Generic functions in C++</li>
<li>If overloaded?</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">Type</span><span class="token operator">></span></span>
<span class="line">Type <span class="token function">max</span><span class="token punctuation">(</span>Type first<span class="token punctuation">,</span> Type second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">></span> second <span class="token operator">?</span> first <span class="token operator">:</span> second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">float</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">float</span> first<span class="token punctuation">,</span> <span class="token keyword">float</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">></span> second <span class="token operator">?</span> <span class="token operator">-</span>first <span class="token operator">:</span> <span class="token operator">-</span>second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">double</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">double</span> first<span class="token punctuation">,</span> <span class="token keyword">double</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">></span> second <span class="token operator">?</span> <span class="token number">2</span><span class="token operator">*</span>first <span class="token operator">:</span> <span class="token number">2</span><span class="token operator">*</span>second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>      <span class="token comment">// 2</span></span>
<span class="line"><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1.0f</span><span class="token punctuation">,</span> <span class="token number">2.0f</span><span class="token punctuation">)</span> <span class="token comment">// -2</span></span>
<span class="line"><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">)</span>  <span class="token comment">// 4</span></span>
<span class="line"><span class="token comment">// → specific functions have higher precedence than generic function</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Generic functions in C++</li>
<li>With standard library in <code v-pre>std</code>?</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream></span></span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">Type</span><span class="token operator">></span></span>
<span class="line">Type <span class="token function">max</span><span class="token punctuation">(</span>Type first<span class="token punctuation">,</span> Type second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">></span> second <span class="token operator">?</span> first <span class="token operator">:</span> second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// error: call of overloaded 'max(double, double)' is ambiguous</span></span>
<span class="line">          <span class="token comment">// → conflict max() in std</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;iostream></span></span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> first<span class="token punctuation">,</span> <span class="token keyword">int</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">></span> second <span class="token operator">?</span> first <span class="token operator">:</span> second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 2</span></span>
<span class="line"><span class="token comment">// It's okay to define function for specific type</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Generic functions in C++</li>
<li>template with different types?</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">Type</span><span class="token operator">></span></span>
<span class="line">Type <span class="token function">max</span><span class="token punctuation">(</span>Type first<span class="token punctuation">,</span> Type second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">></span> second <span class="token operator">?</span> first <span class="token operator">:</span> second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// max(1, 2.0) // error: no matching function for call to 'max(int, double)</span></span>
<span class="line"><span class="token comment">// → Single type can cover one type only</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">Type1</span><span class="token punctuation">,</span> <span class="token keyword">class</span> <span class="token class-name">Type2</span><span class="token operator">></span></span>
<span class="line">Type1 <span class="token function">max</span><span class="token punctuation">(</span>Type1 first<span class="token punctuation">,</span> Type2 second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">></span> second <span class="token operator">?</span> first <span class="token operator">:</span> second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>   <span class="token comment">// 2</span></span>
<span class="line"><span class="token comment">// Need to define different Type</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Generic functions in C++</li>
<li>How about array?</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">Type1</span><span class="token punctuation">,</span> <span class="token keyword">class</span> <span class="token class-name">Type2</span><span class="token operator">></span></span>
<span class="line"><span class="token keyword">double</span> <span class="token function">max</span><span class="token punctuation">(</span>Type1 first<span class="token punctuation">,</span> Type2 second<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">></span> second <span class="token operator">?</span> first<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">:</span> second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> x<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">max</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span></span>
<span class="line"><span class="token comment">// → array (pointer) can be also covered</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Generic functions in C++</li>
<li>template function vs macro</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">Type</span><span class="token operator">></span></span>
<span class="line">Type <span class="token function">max</span><span class="token punctuation">(</span>Type first<span class="token punctuation">,</span> Type second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> first <span class="token operator">></span> second <span class="token operator">?</span> first <span class="token operator">:</span> second<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">max</span><span class="token expression"><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Macro can be used but problem when there is side effect</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token function">max</span><span class="token punctuation">(</span>x<span class="token operator">++</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span></span>
<span class="line">→ <span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">(</span>x<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// x is increased twice</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="design-issues-for-functions" tabindex="-1"><a class="header-anchor" href="#design-issues-for-functions"><span>Design issues for functions</span></a></h2>
<ul>
<li>Side effect allowed?
<ul>
<li>To prevent it, enforce im-mode parameters</li>
<li>[Imperative] have side effects</li>
<li>[Functional] have no variable, so no side effects</li>
</ul>
</li>
<li>What type can be returned?
<ul>
<li>Mostly (Python, Ruby, and Lua), any type can be returned, passed as parameters</li>
<li>[C] Arrays and functions are handled by pointer</li>
<li>[Java, C#] Method (class function) is used, any type and class can be returned</li>
</ul>
</li>
<li>How many values can be returned
<ul>
<li>Ruby, Lua, Python can return multiple values</li>
<li><code v-pre>a, b, c = fun()</code></li>
<li>Tuple is used</li>
</ul>
</li>
</ul>
<h2 id="user-defined-overloaded-operators" tabindex="-1"><a class="header-anchor" href="#user-defined-overloaded-operators"><span>User-defined overloaded operators</span></a></h2>
<ul>
<li>Operator can be also overloaded</li>
<li>[C++] Several operators can be overloaded
<ul>
<li>Exceptions: <code v-pre>.</code>, <code v-pre>.*</code>, <code v-pre>::</code>, <code v-pre>?:</code></li>
<li>Define operator as a method in class</li>
</ul>
</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Complex</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">    <span class="token function">Complex</span><span class="token punctuation">(</span><span class="token keyword">int</span> real<span class="token punctuation">,</span> <span class="token keyword">int</span> img<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token operator">-></span>real <span class="token operator">=</span> real<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token operator">-></span>img <span class="token operator">=</span> img<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    Complex <span class="token keyword">operator</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">const</span> Complex<span class="token operator">&amp;</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">int</span> real <span class="token operator">=</span> <span class="token keyword">this</span><span class="token operator">-></span>real <span class="token operator">+</span> right<span class="token punctuation">.</span>real<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">int</span> img <span class="token operator">=</span> <span class="token keyword">this</span><span class="token operator">-></span>img <span class="token operator">+</span> right<span class="token punctuation">.</span>img<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">Complex</span><span class="token punctuation">(</span>real<span class="token punctuation">,</span> img<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">private</span><span class="token operator">:</span></span>
<span class="line">    <span class="token keyword">int</span> real<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> img<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Complex x1 <span class="token operator">=</span> <span class="token function">Complex</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">Complex x2 <span class="token operator">=</span> <span class="token function">Complex</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">Complex x3 <span class="token operator">=</span> x1 <span class="token operator">+</span> x2<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Operator can be also overloaded</li>
<li>[Python] For addition for complex numbers
<ul>
<li>Define addition operation in special method(<code v-pre>__add__</code>)</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">__add__</span> <span class="token punctuation">(</span>self<span class="token punctuation">,</span> second<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> Complex<span class="token punctuation">(</span>self<span class="token punctuation">.</span>real <span class="token operator">+</span> second<span class="token punctuation">.</span>real<span class="token punctuation">,</span> self<span class="token punctuation">.</span>imag <span class="token operator">+</span> second<span class="token punctuation">.</span>imag<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="closures" tabindex="-1"><a class="header-anchor" href="#closures"><span>Closures</span></a></h2>
<ul>
<li>Function is also object</li>
<li>Can be pass to other function, returned by function and stored in data structure</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token comment"># Function can be passed</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">funcO</span><span class="token punctuation">(</span>func<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> func<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">funcI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token string">"function inside"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>funcO<span class="token punctuation">(</span>funcI<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token comment"># Function can be stored in list</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">+</span> b</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">subtract</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">-</span> b</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">multiply</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">*</span> b</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">divide</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">/</span> b</span>
<span class="line"></span>
<span class="line">func_lst <span class="token operator">=</span> <span class="token punctuation">[</span>add<span class="token punctuation">,</span> subtract<span class="token punctuation">,</span> multiply<span class="token punctuation">,</span> divide<span class="token punctuation">]</span></span>
<span class="line">n <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">m <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line"><span class="token keyword">for</span> func <span class="token keyword">in</span> func_lst<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>func<span class="token punctuation">.</span>__name__<span class="token punctuation">,</span> <span class="token string">":"</span><span class="token punctuation">,</span> func<span class="token punctuation">(</span>n<span class="token punctuation">,</span> m<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># add : 3</span></span>
<span class="line"><span class="token comment"># subtract : -1</span></span>
<span class="line"><span class="token comment"># multiply : 2</span></span>
<span class="line"><span class="token comment"># divide : 0.5</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Function can be nested</li>
<li><code v-pre>inner()</code> can only be called inside <code v-pre>outer()</code></li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Here is outer region."</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Here is inner region."</span><span class="token punctuation">)</span></span>
<span class="line">    inner<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">outer<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>A closure is a function returned by a function</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">addNumber</span><span class="token punctuation">(</span>fixedNum<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> fixedNum <span class="token operator">+</span> number</span>
<span class="line">    <span class="token keyword">return</span> add</span>
<span class="line"></span>
<span class="line">func <span class="token operator">=</span> addNumber<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span></span>
<span class="line">func<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token comment"># 30</span></span>
<span class="line">func<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token comment"># 40</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Each of these calls returns a different version of the closure because they are bound to different values of <code v-pre>fixedNum</code></li>
<li>lifetime of the version of <code v-pre>fixedNum</code> created when <code v-pre>addNumber</code> is called must extend over the lifetime of the program</li>
<li>This subprogram can be called in other place</li>
<li>→ Subprogram needs to remembers the referencing environment in which it was defined</li>
<li>Benefits
<ul>
<li>Global variables can be reduced.</li>
<li>Similar types of code can increase the reuse rate</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">addNumber</span><span class="token punctuation">(</span>fixedNum<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> fixedNum <span class="token operator">+</span> number</span>
<span class="line">    <span class="token keyword">return</span> add</span>
<span class="line"></span>
<span class="line">func1 <span class="token operator">=</span> addNumber<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span></span>
<span class="line">func2 <span class="token operator">=</span> addNumber<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">dir</span><span class="token punctuation">(</span>func1<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>func1<span class="token punctuation">.</span>__closure__<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>cell_contents<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>func2<span class="token punctuation">.</span>__closure__<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>cell_contents<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">['__annotations__', '__builtins__', '__call__', '__class__', '__closure__', '__code__',</span>
<span class="line">'__defaults__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__',</span>
<span class="line">'__ge__', '__get__', '__getattribute__', '__getstate__', '__globals__', '__gt__',</span>
<span class="line">'__hash__', '__init__', '__init_subclass__', '__kwdefaults__', '__le__', '__lt__',</span>
<span class="line">'__module__', '__name__', '__ne__', '__new__', '__qualname__', '__reduce__',</span>
<span class="line">'__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__',</span>
<span class="line">'__type_params__']</span>
<span class="line">(&lt;cell at 0x7fb35f401240: int object at 0x564e4ecb58c8>,)</span>
<span class="line">10</span>
<span class="line">20</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Since function is also an object, we can check its properties through the <code v-pre>dir()</code> function, and we can see that there is <code v-pre>__closure__</code> in the checked properties.</p>
</li>
<li>
<p><code v-pre>__closure__</code> is tuple</p>
</li>
<li>
<p>We can check information of closure</p>
</li>
<li>
<p>A closure can model high-level module such as neural network</p>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">nonlinear_activation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    e <span class="token operator">=</span> <span class="token number">15</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">thre</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token number">1</span> <span class="token keyword">if</span> x <span class="token operator">></span> e <span class="token keyword">else</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">return</span> thre</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">linear_model</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    a <span class="token operator">=</span> <span class="token number">3</span></span>
<span class="line">    b <span class="token operator">=</span> <span class="token number">5</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">mul_add</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> a <span class="token operator">*</span> x <span class="token operator">+</span> b</span>
<span class="line">    <span class="token keyword">return</span> mul_add</span>
<span class="line"></span>
<span class="line">lm <span class="token operator">=</span> linear_model<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>lm<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lm<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lm<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lm<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lm<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">na <span class="token operator">=</span> nonlinear_activation<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>na<span class="token punctuation">(</span>lm<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> na<span class="token punctuation">(</span>lm<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> na<span class="token punctuation">(</span>lm<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> na<span class="token punctuation">(</span>lm<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> na<span class="token punctuation">(</span>lm<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 8 11 14 17 20</span></span>
<span class="line"><span class="token comment"># 0 0 0 1 1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Neural network consists of huge amount of linear model + nonlinear activation</p>
</li>
<li>
<p>Each model has similar structure (process) with only different learnable parameters</p>
</li>
<li>
<p>A closure with lambda</p>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">linear_model</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    a <span class="token operator">=</span> <span class="token number">3</span></span>
<span class="line">    b <span class="token operator">=</span> <span class="token number">5</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">lambda</span> x<span class="token punctuation">:</span> a <span class="token operator">*</span> x <span class="token operator">+</span> b</span>
<span class="line"></span>
<span class="line">lm <span class="token operator">=</span> linear_model<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>lm<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lm<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lm<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lm<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lm<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 8 11 14 17 20</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Change local variable of closure</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">linear_model</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    a <span class="token operator">=</span> <span class="token number">3</span></span>
<span class="line">    b <span class="token operator">=</span> <span class="token number">5</span></span>
<span class="line">    <span class="token builtin">sum</span> <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">mul_add</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">nonlocal</span> <span class="token builtin">sum</span></span>
<span class="line">        result <span class="token operator">=</span> a <span class="token operator">*</span> x <span class="token operator">+</span> b</span>
<span class="line">        <span class="token builtin">sum</span> <span class="token operator">+=</span> result</span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"sum:%d"</span> <span class="token operator">%</span> <span class="token builtin">sum</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> result</span>
<span class="line">    <span class="token keyword">return</span> mul_add</span>
<span class="line"></span>
<span class="line">lm <span class="token operator">=</span> linear_model<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>lm<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lm<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lm<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lm<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lm<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># sum:8</span></span>
<span class="line"><span class="token comment"># sum:19</span></span>
<span class="line"><span class="token comment"># sum:33</span></span>
<span class="line"><span class="token comment"># sum:50</span></span>
<span class="line"><span class="token comment"># sum:70</span></span>
<span class="line"><span class="token comment"># 8 11 14 17 20</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="coroutines" tabindex="-1"><a class="header-anchor" href="#coroutines"><span>Coroutines</span></a></h2>
<ul>
<li>
<p>Special subprogram</p>
</li>
<li>
<p>In coroutine, caller and called coroutines are more equitable</p>
</li>
<li>
<p>In common subprogram, caller and callee have master-slave relationship</p>
</li>
<li>
<p>Coroutines can have multiple entry points</p>
</li>
<li>
<p>Controlled by symmetric unit control model.</p>
</li>
<li>
<p>Resume: secondary executions of a coroutine often begin at points other than its beginning</p>
</li>
<li>
<p>History sensitive</p>
</li>
<li>
<p><code v-pre>co1() → co2(2) → co1() → co3() → co1()</code></p>
</li>
<li>
<p>Only one coroutine is actually in execution at a given time → quasi-concurrency</p>
</li>
<li>
<p>Related to the way multiprogramming operating systems</p>
</li>
<li>
<p>Usually, master unit handle. EX. card game simulation</p>
</li>
<li>
<p>(a) execution of coroutine A is started by the master unit</p>
</li>
<li>
<p>(b) execution of coroutine B is started by the master unit</p>
</li>
<li>
<p>Coroutine execution sequence with loops</p>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">coroutine1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'callee 1'</span><span class="token punctuation">)</span></span>
<span class="line">    x <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'callee 2: %d'</span> <span class="token operator">%</span> x<span class="token punctuation">)</span></span>
<span class="line">    x <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token number">2</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'callee 3: %d'</span> <span class="token operator">%</span> x<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">task <span class="token operator">=</span> coroutine1<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">i <span class="token operator">=</span> <span class="token builtin">next</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span>    <span class="token comment"># print callee 1, i = 1</span></span>
<span class="line">i <span class="token operator">=</span> task<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment"># print callee 2:10, i = 2</span></span>
<span class="line">task<span class="token punctuation">.</span>send<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>     <span class="token comment"># print callee 3: 20, then StopIteration exception</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># callee 1</span></span>
<span class="line"><span class="token comment"># callee 2: 10</span></span>
<span class="line"><span class="token comment"># callee 3: 20</span></span>
<span class="line"><span class="token comment"># StopIteration</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


