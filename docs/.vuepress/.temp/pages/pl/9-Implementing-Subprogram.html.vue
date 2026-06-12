<template><div><h1 id="_9-implementing-subprogram" tabindex="-1"><a class="header-anchor" href="#_9-implementing-subprogram"><span>9. Implementing Subprogram</span></a></h1>
<DateMeta />
<h2 id="recap-subprograms" tabindex="-1"><a class="header-anchor" href="#recap-subprograms"><span>Recap: Subprograms</span></a></h2>
<ul>
<li>Parameters</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">compute_pay</span><span class="token punctuation">(</span>income<span class="token punctuation">,</span> exemptions <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> tax_rate<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token keyword">return</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Positional binding</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line">pay <span class="token operator">=</span> compute_pay<span class="token punctuation">(</span><span class="token number">20000.0</span><span class="token punctuation">,</span> tax_rate <span class="token operator">=</span> <span class="token number">0.15</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Formal parameters: income, exemptions, tax-rate</p>
</li>
<li>
<p>Actual parameters: 20000.0, 0.15</p>
</li>
<li>
<p>Default value</p>
</li>
<li>
<p>Binding by keyword parameters</p>
</li>
<li>
<p>Parameter passing methods</p>
</li>
<li>
<p>Semantics models</p>
</li>
<li>
<p>in mode, out mode, inout mode</p>
</li>
<li>
<p>Implementation models</p>
</li>
<li>
<p>Pass-by-value</p>
</li>
<li>
<p>Pass-by-reference</p>
</li>
<li>
<p>Pass-by-value-result</p>
</li>
<li>
<p>Pass-by-name</p>
</li>
<li>
<p>Pass-by-assignment</p>
</li>
<li>
<p>Two types of subprograms</p>
</li>
<li>
<p>Procedures: does not return</p>
</li>
<li>
<p>Can change variable</p>
</li>
<li>
<p>Functions: return value</p>
</li>
<li>
<p>No side effect ideally</p>
</li>
<li>
<p>Parameter that are subprograms</p>
</li>
<li>
<p>Shallow/deep/ad hoc binding</p>
</li>
<li>
<p>Overloaded subprograms</p>
</li>
<li>
<p>[Issue 1] Coercion is allowed?</p>
</li>
<li>
<p>[Issue 2] The same parameter but different return types</p>
</li>
<li>
<p>Generic subprograms</p>
</li>
<li>
<p>Ad hoc/subtype/parametric polymorphism</p>
</li>
<li>
<p>[Issue 1] Type checking function’s protocol</p>
</li>
<li>
<p>[Issue 2] If nested <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> referencing environment</p>
</li>
<li>
<p>Closures: function returned by a function</p>
</li>
<li>
<p>Function is also object</p>
</li>
<li>
<p>Function can be nested</p>
</li>
<li>
<p>Subprogram can be called in other place</p>
</li>
<li>
<p>Remembers the referencing environment</p>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">addNumber</span><span class="token punctuation">(</span>fixedNum<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> fixedNum <span class="token operator">+</span> number</span>
<span class="line">    <span class="token keyword">return</span> add</span>
<span class="line"><span class="token comment"># ===============================</span></span>
<span class="line">func <span class="token operator">=</span> addNumber<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span></span>
<span class="line">func<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token comment"># 30</span></span>
<span class="line">func<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token comment"># 40</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Coroutines</li>
<li>Coroutines are more equitable</li>
<li>Coroutines can have multiple entry points</li>
<li>Only one coroutine is actually in execution at a given time</li>
<li><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> quasi-concurrency</li>
<li>Related to the way multiprogramming operating systems</li>
</ul>
<h2 id="implementing-subprogram" tabindex="-1"><a class="header-anchor" href="#implementing-subprogram"><span>Implementing Subprogram</span></a></h2>
<ul>
<li>
<p>General semantics of calls and returns</p>
</li>
<li>
<p>“Simple” subprograms</p>
</li>
<li>
<p>Subprograms with stack-dynamic local variables</p>
</li>
<li>
<p>Nested subprograms</p>
</li>
<li>
<p>Blocks</p>
</li>
<li>
<p>Dynamic scoping</p>
</li>
<li>
<p>Implementation of subprograms</p>
</li>
<li>
<p>How subprogram linkage works?</p>
</li>
<li>
<p>Subprogram을 호출하고 실행하는 과정에서 필요한 메모리 할당, 인자 전달, 복귀 주소 관리 등을 처리하는 과정</p>
</li>
<li>
<p>호출할 때 필요한 정보(매개변수, 지역변수, 복귀주소 등)를 Activation Record로 스택에 저장</p>
</li>
<li>
<p>함수 실행 후 복귀 시 Activation Record를 제거하고 복구</p>
</li>
<li>
<p>Simplest: no nested with only local static variable</p>
</li>
<li>
<p>Static variable은 스택(stack)이 아니라 고정된 메모리 공간(static data area) 에 저장</p>
</li>
<li>
<p>호출할 때마다 새로 생성하거나 제거할 필요 없음</p>
</li>
<li>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> Activation Record는 매우 단순해짐</p>
</li>
<li>
<p>복귀 주소 (Return address)만 저장하면 되고</p>
</li>
<li>
<p>지역변수 공간은 이미 따로 있으므로 스택에 저장할 필요 없음</p>
</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token keyword">int</span> <span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">int</span> cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// static local variable</span></span>
<span class="line">    cnt<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> cnt<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a == 1</span></span>
<span class="line">    <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token function">counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// b == 2</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Challenges with</p>
</li>
<li>
<p>Stack-dynamic local variable</p>
</li>
<li>
<p>지역변수가 함수 호출 시점에 만들어짐</p>
</li>
<li>
<p>함수 끝나면 스택에서 자동 소멸</p>
</li>
<li>
<p>크기가 가변적인 경우 (ex: 가변 배열) 더 주의해야 함</p>
</li>
<li>
<p>Nested subprograms</p>
</li>
<li>
<p>함수 안에 또 다른 함수를 정의할 수 있음 (ex: Pascal, Ada, 일부 Python lambda)</p>
</li>
<li>
<p>내부 함수가 외부 함수의 변수에 접근해야 할 수도 있음</p>
</li>
<li>
<p>Nonlocal access with static scope</p>
</li>
<li>
<p>중첩 함수가 상위 함수의 변수를 사용하려고 할 때</p>
</li>
<li>
<p>상위 함수의 Activation Record로 접근 방법 필요 (Static Link)</p>
</li>
<li>
<p>Block and dynamic scope</p>
</li>
<li>
<p>scope 규칙에 따라, 런타임에 찾는 방법(static vs dynamic)이 달라 짐</p>
</li>
</ul>
<h2 id="general-semantics-of-calls-and-returns" tabindex="-1"><a class="header-anchor" href="#general-semantics-of-calls-and-returns"><span>General Semantics of Calls and Returns</span></a></h2>
<ul>
<li>
<p>Subprogram linkage: subprogram call and return operations</p>
</li>
<li>
<p>Implementation should be based on semantic of subprogram linkage</p>
</li>
<li>
<p>Subprogram call</p>
</li>
<li>
<p>Must include parameter-passing method</p>
</li>
<li>
<p>Allocation and binding for stack-dynamic local variable</p>
</li>
<li>
<p>Execution status should be saved</p>
</li>
<li>
<p>Everything needed to resume execution of the calling program unit</p>
</li>
<li>
<p>Register value, CPU status bits, environment pointer (EP)</p>
</li>
<li>
<p>Arrange to transfer control to the code of the subprogram</p>
</li>
<li>
<p>After execution is completed, transfer control should be returned proper place</p>
</li>
<li>
<p>For nested subprograms, mechanism for accessing nonlocal variables are needed</p>
</li>
<li>
<p>Subprogram return</p>
</li>
<li>
<p>In out mode and inout mode, formal parameters are returned to the actual parameters</p>
</li>
<li>
<p>Deallocate of stack-dynamic local variables in subprograms</p>
</li>
<li>
<p>Restore the execution status of the calling program</p>
</li>
<li>
<p>Returning control to the caller</p>
</li>
<li>
<p>Code Example:</p>
</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token comment">// [C++]</span></span>
<span class="line"><span class="token keyword">int</span> g <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> first<span class="token punctuation">,</span> <span class="token keyword">int</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    sum <span class="token operator">=</span> first <span class="token operator">+</span> second<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> sum<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">func</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Component Layout &amp; Concepts:</li>
<li>Parameters <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> Where parameters are stored</li>
<li>Local variable <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> Where local variables in subprograms are stored</li>
<li>Where we return <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> Where we return after the subprogram call</li>
<li>Stack</li>
<li>Heap</li>
<li>Registers</li>
<li>…</li>
<li>Environment pointer (EP)</li>
<li>Data</li>
<li>Program counter (PC)</li>
<li>Code</li>
</ul>
<h2 id="simple-subprograms" tabindex="-1"><a class="header-anchor" href="#simple-subprograms"><span>“Simple” Subprograms</span></a></h2>
<ul>
<li>No nested and all local variables are static (or no recursion)</li>
<li>Semantic of call</li>
</ul>
<ol>
<li>Create an activation record instance</li>
<li>Save the execution status of the current program unit. (done by caller or callee)</li>
<li>Compute and pass the parameters. (done by caller)</li>
<li>Pass the return address to the called. (done by caller)</li>
<li>Transfer control to the called. (done by caller)</li>
</ol>
<ul>
<li>
<p>Allocation and binding for stack-dynamic local variables</p>
</li>
<li>
<p>Mechanism for nonlocal variable for nested subprograms</p>
</li>
<li>
<p>Semantic of return</p>
</li>
</ul>
<ol>
<li>For out-mode parameters, the values of those parameters are moved to the corresponding actual parameters. (done by callee)</li>
<li>If the subprogram is a function, the functional value is moved to a place accessible to the caller. (done by callee)</li>
<li>The execution status of the caller is restored. (done by caller or callee)</li>
<li>Control is transferred back to the caller. (done by callee)</li>
</ol>
<ul>
<li>
<p>Deallocate of stack-dynamic local variables in subprograms</p>
</li>
<li>
<p>Simple subprogram code example:</p>
</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token comment">// [C++]</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> first<span class="token punctuation">,</span> <span class="token keyword">int</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    sum <span class="token operator">=</span> first <span class="token operator">+</span> second<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> sum<span class="token punctuation">;</span> <span class="token comment">// ②</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// ①</span></span>
<span class="line">    <span class="token function">func</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>An activation record for simple subprograms</li>
<li>① Caller action</li>
</ul>
<ol>
<li>Create an activation record instance.</li>
<li>Save the execution status of the current program unit.</li>
<li>Compute and pass the parameters.</li>
<li>Pass the return address to the called.</li>
<li>Transfer control to the called.</li>
</ol>
<ul>
<li>② Callee action</li>
<li>Epilogue (end of execution)</li>
</ul>
<ol>
<li>For out-mode parameters, the values of values of those parameters are moved to the corresponding actual parameters.</li>
<li>If the subprogram is a function, the functional value is moved to a place accessible to the caller.</li>
<li>Restore the execution status of the caller.</li>
<li>Transfer control back to the caller.</li>
</ol>
<ul>
<li>
<p>재귀 없음 하나의 서브프로그램만 스택에 올라가서 실행 중</p>
</li>
<li>
<p>The call and return actions require storage for the following:</p>
</li>
<li>
<p>Status information about the caller</p>
</li>
<li>
<p>Parameters</p>
</li>
<li>
<p>Return address</p>
</li>
<li>
<p>Return value for functions</p>
</li>
<li>
<p>Temporaries used by the code of the subprograms</p>
</li>
<li>
<p>Linkage action of callee can occur at two different times</p>
</li>
<li>
<p>Prologue: beginning of its execution (Caller action)</p>
</li>
<li>
<p>Epilogue: end of its execution (Callee action)</p>
</li>
<li>
<p>-Prologue (beginning of execution)</p>
</li>
<li>
<p>-Epilogue (end of execution)</p>
</li>
<li>
<p>Consists of two separate parts:</p>
</li>
<li>
<p>Actual codes (constant)</p>
</li>
<li>
<p>서브프로그램의 실제 기계어 명령어들</p>
</li>
<li>
<p>프로그램 작성 시 이미 고정된 Constant</p>
</li>
<li>
<p>실행 중에 변경되지 않음</p>
</li>
<li>
<p>Non-code: local variable and data (can change)</p>
</li>
<li>
<p>지역 변수(Local variables), 임시 값(Temporary values), 매개변수(Parameters) 등</p>
</li>
<li>
<p>실행 중에 값이 변경될 수 있음</p>
</li>
<li>
<p>Fixed size in simple subprogram</p>
</li>
<li>
<p>중첩이 없고, 지역 변수와 매개변수의 크기가 고정되어 있으면 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> 서브프로그램마다 필요한 Non-Code 영역의 크기가 고정(fixed)</p>
</li>
<li>
<p>호출할 때마다 이 크기만큼 스택에 공간을 잡으면 됨</p>
</li>
<li>
<p>Activation record (non-code):</p>
</li>
<li>
<p>Format, or layout, of the noncode part of a subprogram</p>
</li>
<li>
<p>Activation Record란 Non-Code 부분의 레이아웃을 정의</p>
</li>
<li>
<p>서브프로그램을 호출할 때 스택에 쌓이는 프레임의 구조</p>
</li>
<li>
<p>Activation Record가 포함하는 것들 예시:</p>
</li>
<li>
<p>매개변수(Parameter values)</p>
</li>
<li>
<p>지역 변수(Local variables)</p>
</li>
<li>
<p>복귀 주소(Return address)</p>
</li>
<li>
<p>동적 링크(Dynamic link, caller의 frame pointer)</p>
</li>
<li>
<p>정적 링크(Static link, 상위 lexical scope로 접근하는 포인터)</p>
</li>
<li>
<p>임시 저장공간(Temporary storage)</p>
</li>
<li>
<p>ARI (Activation record instance): Instance created according to this format</p>
</li>
<li>
<p>Activation Record의 실제 인스턴스</p>
</li>
<li>
<p>AR 포맷에 따라 실제로 메모리에 할당되는 스택 프레임이 ARI</p>
</li>
<li>
<p>ARI of simple subprogram has fixed size <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> can be statically allocated and attached to code part</p>
</li>
<li>
<p>No recursion <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> only one ARI is active</p>
</li>
<li>
<p>Single activation record per subprogram</p>
</li>
<li>
<p>Code Example for Code and Non-Code mapping:</p>
</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> sum <span class="token operator">=</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> sum<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Actual Code:</p>
</li>
<li>
<p>add 함수의 컴파일된 명령어들 (ex. 덧셈 명령, 반환 명령 등)</p>
</li>
<li>
<p>프로그램 시작 때 메모리에 고정</p>
</li>
<li>
<p>Non-Code (Activation Record Format):</p>
</li>
<li>
<p>매개변수 a, b</p>
</li>
<li>
<p>지역변수 sum</p>
</li>
<li>
<p>복귀 주소</p>
</li>
<li>
<p>[EX] Main program with three subprograms A, B and C</p>
</li>
<li>
<p>Simple Subprogram 환경에서 메모리 배치(메모리 구조) 를 보여주고 있음</p>
</li>
<li>
<p>Data 영역과 Code 영역 두 부분으로 나먄</p>
</li>
<li>
<p>Data 영역 (위쪽):</p>
</li>
<li>
<p>각 서브프로그램 (MAIN, A, B, C)에 대해 Activation Record (AR) 가 미리(static) 준비되어 있음</p>
</li>
<li>
<p>이 Activation Record들은 프로그램이 시작할 때 고정된 메모리(Data Segment)에 할당되고, 함수 호출 시마다 새로 만들지 않고 재사용</p>
</li>
<li>
<p>Code 영역 (아래쪽)</p>
</li>
<li>
<p>MAIN, A, B, C 서브프로그램의 기계어 코드(명령어) 가 저장된 영역</p>
</li>
<li>
<p>Code는 변경되지 않고 프로그램 내내 고정</p>
</li>
<li>
<p>컴파일된 명령어들은 프로그램 실행 시 그대로 사용</p>
</li>
<li>
<p>Format of AR is static</p>
</li>
<li>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> Activation Record의 레이아웃이 컴파일 시점에 고정되어 있음</p>
</li>
<li>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> 런타임에 크기가 변하지 않음</p>
</li>
<li>
<p>Each program can be compiled at different time</p>
</li>
<li>
<p>MAIN, A, B, C 각각 따로 AR이 존재 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> 각각의 서브프로그램(MAIN, A, B, C)은 독립적으로 컴파일할 수 있음</p>
</li>
<li>
<p>Linker can put together</p>
</li>
<li>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> 이후 Linker가 이 컴파일 결과들을 하나로 합침</p>
</li>
</ul>
<h2 id="subprograms-with-stack-dynamic-local-variables" tabindex="-1"><a class="header-anchor" href="#subprograms-with-stack-dynamic-local-variables"><span>Subprograms with Stack-Dynamic Local Variables</span></a></h2>
<ul>
<li>
<p>Stack-Dynamic Local Variable</p>
</li>
<li>
<p>Advantage of stack-dynamic local variable</p>
</li>
<li>
<p>Support for recursion</p>
</li>
<li>
<p>각 함수 호출마다 새로운 Activation Record(스택 프레임)를 만들어 저장할 수 있음</p>
</li>
<li>
<p>재귀 호출 시, 함수의 다른 호출들이 서로 독립적인 지역변수 집합을 가질 수 있음</p>
</li>
<li>
<p>결과적으로 한 서브프로그램이 동시에 여러 activation을 가질 수 있음</p>
</li>
<li>
<p>But, more complex activation records</p>
</li>
<li>
<p>Compiler generates code for implicit allocation/deallocation for local variables</p>
</li>
<li>
<p>Activation Record가 단순히 &quot;고정된 메모리&quot;가 아니라, 매 호출마다 새로 만들어야 함</p>
</li>
<li>
<p>컴파일러는 지역변수들을 함수 진입 시 자동으로 생성(allocate), 함수 종료 시 자동으로 소멸(deallocate) 하는 코드를 자동 삽입해야 함</p>
</li>
<li>
<p>Multiple simultaneous activations of subprograms (limited by memory size)</p>
</li>
<li>
<p>Usually, format of an activation record is known at compile time</p>
</li>
<li>
<p>Activation record instances (ARI) must be created dynamically</p>
</li>
<li>
<p>Return address, dynamic link and parameters are placed in ARI by caller</p>
</li>
<li>
<p>Return address: usually consists of point to instruction following the call</p>
</li>
<li>
<p>Dynamic link: pointer to the base of the activation record instance of the caller</p>
</li>
<li>
<p>Statically-scoped languages — used for debugging</p>
</li>
<li>
<p>Dynamically-scoped languages — also used to find variables in scope</p>
</li>
<li>
<p>Actual parameters: values or addresses provided by the caller</p>
</li>
<li>
<p>Local variable</p>
</li>
<li>
<p>Scalar variables are bound to storage within ARI</p>
</li>
<li>
<p>Structure variables are allocated elsewhere (pointer is in ARI)</p>
</li>
<li>
<p>ARI 생성과정</p>
</li>
<li>
<ol>
<li>Caller</li>
</ol>
</li>
<li>
<p>Return address, Dynamic link, Actual parameters를 먼저 ARI에 채움</p>
</li>
<li>
<ol start="2">
<li>Callee</li>
</ol>
</li>
<li>
<p>Local variables (지역 변수)을 ARI에 채우거나 초기화</p>
</li>
</ul>
<table>
<thead>
<tr>
<th>구성 요소</th>
<th>설명</th>
<th>누가 설정하는가</th>
</tr>
</thead>
<tbody>
<tr>
<td>Return address</td>
<td>호출이 끝나면 복귀할 코드의 주소 (호출한 다음 명령어 위치)</td>
<td>Caller</td>
</tr>
<tr>
<td>Dynamic link</td>
<td>Caller의 ARI를 가리키는 포인터</td>
<td>Caller</td>
</tr>
<tr>
<td>Actual parameters</td>
<td>인자 값 또는 인자 주소 (값 호출 pass-by-value or 주소 호출 pass-by-reference)</td>
<td>Caller</td>
</tr>
<tr>
<td>Local variables</td>
<td>지역 변수 공간 (초기화는 필요에 따라)</td>
<td>Callee</td>
</tr>
</tbody>
</table>
<ul>
<li>Example of C code and corresponding ARI</li>
<li>ARI is created on run-time stack</li>
<li>Run-time stack provides separate copies of the parameters, local variables, and return address</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token keyword">void</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token keyword">float</span> total<span class="token punctuation">,</span> <span class="token keyword">int</span> part<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> list<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">float</span> sum<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Environment pointer (EP) is required to control execution of subprogram</p>
</li>
<li>
<p>Point current activation record base (initially main program’s AR’s base)</p>
</li>
<li>
<p>현재 실행 중인 서브프로그램의 Activation Record (ARI) 의 기준(base) 위치를 가리키는 포인터</p>
</li>
<li>
<p>When subprogram is called, current EP is saved in the new ARI as dynamic link</p>
</li>
<li>
<p>Then, EP is set to point at base of new ARI</p>
</li>
<li>
<p>Upon return from subprogram, stack top <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> EP - 1</p>
</li>
<li>
<p>EP is set to dynamic link in executed ARI</p>
</li>
<li>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> 호출 전 함수의 ARI를 다시 가리키도록</p>
</li>
<li>
<p>New actions in linkage process</p>
</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token comment">// [C++]</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token keyword">int</span> first<span class="token punctuation">,</span> <span class="token keyword">int</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ②</span></span>
<span class="line">    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    sum <span class="token operator">=</span> first <span class="token operator">+</span> second<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> sum<span class="token punctuation">;</span> <span class="token comment">// ③</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// ①</span></span>
<span class="line">    <span class="token function">func</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>① Caller action</li>
</ul>
<ol>
<li>Create an activation record instance.</li>
<li>Save the execution status of the current program unit.</li>
<li>Compute and pass the parameters.</li>
<li>Pass the return address to the called.</li>
<li>Transfer control to the called.</li>
</ol>
<ul>
<li>(② ③) Callee action</li>
<li>② Prologue (beginning of execution)</li>
</ul>
<ol>
<li>Save the old EP in the stack as the dynamic link and create the new value.</li>
<li>Allocate local variables.</li>
</ol>
<ul>
<li>③ Epilogue (end of execution)</li>
</ul>
<ol>
<li>For out-mode parameters, the values of values of those parameters are moved to the corresponding actual parameters.</li>
<li>If the subprogram is a function, the functional value is moved to a place accessible to the caller.</li>
<li>Restore the stack pointer by setting it to the value of the current EP minus one and set the EP to the old dynamic link.</li>
<li>Restore the execution status of the caller.</li>
<li>Transfer control back to the caller.</li>
</ol>
<ul>
<li>
<p>Example without recursion</p>
</li>
<li>
<p>P1, ARI for main and fun1</p>
</li>
<li>
<p>P2, ARI for fun2 is added</p>
</li>
<li>
<p>P3. ARI for fun3 is added</p>
</li>
<li>
<p>Dynamic chain (call chain): collection of dynamic links</p>
</li>
<li>
<p>Local offset: distance from beginning of ARI</p>
</li>
<li>
<p>Determined in compile time</p>
</li>
<li>
<p>[EX] local offset of s is 3, t is 4</p>
</li>
<li>
<p>Example with recursion</p>
</li>
<li>
<p>Functional value는 서브프로그램(특히 함수)이 반환할 값(return value) 을 임시로 저장해두는 공간</p>
</li>
<li>
<p>Activation record for factorial</p>
</li>
<li>
<p>Figure show position 1 in each call</p>
</li>
<li>
<p>Functional value undefined</p>
</li>
<li>
<p>First call’s return address is main</p>
</li>
<li>
<p>Other call’s return address is factorial</p>
</li>
<li>
<p>Figure shows position2 for each execution</p>
</li>
<li>
<p>Code Example &amp; Memory Analysis:</p>
</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token comment">// [C++]</span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream></span></span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span> g <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token keyword">int</span> first<span class="token punctuation">,</span> <span class="token keyword">int</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Address of first: "</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>first <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Address of second: "</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>second <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Address of sum: "</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>sum <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">    g <span class="token operator">=</span> g <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    sum <span class="token operator">=</span> first <span class="token operator">+</span> second<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> sum<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">func2</span><span class="token punctuation">(</span><span class="token keyword">int</span> first<span class="token punctuation">,</span> <span class="token keyword">int</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">func1</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span>second<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Address of g: "</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>g <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">func1</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Address of g: "</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>g <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">func1</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Address of g: "</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>g <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">func2</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    cout <span class="token operator">&lt;&lt;</span> <span class="token string">"Address of g: "</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">&amp;</span>g <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Outputs/Addresses:</p>
</li>
<li>
<p>Address of first: 0x7ffcb9dc19bc</p>
</li>
<li>
<p>Address of second: 0x7ffcb9dc19b8</p>
</li>
<li>
<p>Address of sum: 0x7ffcb9dc19cc</p>
</li>
<li>
<p>Address of first: 0x7ffcb9dc199c</p>
</li>
<li>
<p>Address of second: 0x7ffcb9dc1998</p>
</li>
<li>
<p>Address of sum: 0x7ffcb9dc19ac</p>
</li>
<li>
<p>// Address of g: 0x404194</p>
</li>
<li>
<p>// Address of g: 0x404194</p>
</li>
<li>
<p>// Address of g: 0x404194</p>
</li>
<li>
<p>// Address of g: 0x404194</p>
</li>
<li>
<p>Stack Visualization:</p>
</li>
<li>
<p>Sum (0x…cc)</p>
</li>
<li>
<p>…</p>
</li>
<li>
<p>First (0x…bc)</p>
</li>
<li>
<p>Second (0x…b8)</p>
</li>
<li>
<p>…</p>
</li>
<li>
<p>(func2)</p>
</li>
<li>
<p>Sum (0x…ac)</p>
</li>
<li>
<p>…</p>
</li>
<li>
<p>First (0x…9c)</p>
</li>
<li>
<p>Second (0x…98)</p>
</li>
</ul>
<h2 id="nested-subprograms" tabindex="-1"><a class="header-anchor" href="#nested-subprograms"><span>Nested subprograms</span></a></h2>
<ul>
<li>
<p>For nested subprograms, two steps are required for access</p>
</li>
<li>
<p>First, find ARI in stack in which the variable is allocated</p>
</li>
<li>
<p>현재 스택 위에 쌓인 ARI들 중에서 변수가 실제로 선언된 Activation Record를 찾아야 함</p>
</li>
<li>
<p>Second, use local offset of the variable</p>
</li>
<li>
<p>Finding correct ARI is more interesting</p>
</li>
<li>
<p>Only static ancestor scopes are visible (accessible)</p>
</li>
<li>
<p>A subprogram is callable only when all of its static ancestor subprograms are active</p>
</li>
<li>
<p>Need to find all ARI from the closely nested one</p>
</li>
<li>
<p>Static chains</p>
</li>
<li>
<p>Chain of static links</p>
</li>
<li>
<p>Static link is added in ARI</p>
</li>
<li>
<p>Called as a static scope pointer</p>
</li>
<li>
<p>Located below parameters in ARI</p>
</li>
<li>
<p>Point to bottom of ARI of static parent</p>
</li>
<li>
<p>Used to implement the accesses to nonlocal variables in static-scoped languages</p>
</li>
<li>
<p>Static depth</p>
</li>
<li>
<p>How deeply it is nested in the outermost scope</p>
</li>
<li>
<p>Nesting depth (chain offset)</p>
</li>
<li>
<p>Length of static chain needed to reach correct ARI</p>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token comment"># Global scope ...</span></span>
<span class="line"><span class="token comment"># Static depth of the global, f1, f2 and f3 are 0,1, 2 and 3, respectively</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># f3 refer f1 → chain offset is 2</span></span>
<span class="line">        <span class="token keyword">def</span> <span class="token function">f3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token comment"># f3 refer f2 → chain offset is 1</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">        <span class="token comment"># end of f3 …</span></span>
<span class="line">    <span class="token comment"># end of f2</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token comment"># end of f1</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Nonlocal access using static chains</p>
</li>
<li>
<p>In position 1</p>
</li>
<li>
<p>Reference to A (local variable A in Sub1): chain_offset/local_offset (0,3)</p>
</li>
<li>
<p>why local_offset is 3?, because A is the first local variable</p>
</li>
<li>
<p>Reference to B (nonlocal variable B in Bigsub): chain_offset/local_offset (1,4)</p>
</li>
<li>
<p>Reference to C (nonlocal variable C in Bigsub): chain_offset/local_offset (1,5)</p>
</li>
<li>
<p>Variable B in Sub2 is not accessible</p>
</li>
<li>
<p>After Sub1 complete, control returns to Sub3</p>
</li>
<li>
<p>In position 2</p>
</li>
<li>
<p>Reference to E (local variable E in Sub3): chain_offset/local_offset (0,4)</p>
</li>
<li>
<p>Reference to B (nonlocal variable B in Sub2): chain_offset/local_offset (1,4)</p>
</li>
<li>
<p>why local_offset is 4?, because B is the first local variable, but Sub2 has one parameter</p>
</li>
<li>
<p>Reference to A (nonlocal variable A in Bigsub): chain_offset/local_offset (2,3)</p>
</li>
<li>
<p>After Sub3 complete, control returns to Sub2</p>
</li>
<li>
<p>In position 3</p>
</li>
<li>
<p>Reference to A (nonlocal variable A in Bigsub): chain_offset/local_offset (1,3)</p>
</li>
<li>
<p>Reference to D <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> static semantic error because there is no visible D</p>
</li>
<li>
<p>Reference to E (local variable E in Sub2): chain_offset/local_offset (0,5)</p>
</li>
<li>
<p>For variable A</p>
</li>
<li>
<p>Position 1: (0,3) local</p>
</li>
<li>
<p>Position 2: (2,3) two levels away</p>
</li>
<li>
<p>Position 3: (1,3) one level away</p>
</li>
<li>
<p>When return, ARI at top of stack is removed.</p>
</li>
<li>
<p>When call, how to decide static link?</p>
</li>
<li>
<p>Can use dynamic link to find until static parent of called program</p>
</li>
<li>
<p>Perform search</p>
</li>
<li>
<p>Or when Sub3 call Sub1, static parent of Sub1 is Bigsub and if compiler decide that Sub3 is two-level inside Bigsub <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> find second static link from Sub3</p>
</li>
<li>
<p>Execution traces:</p>
</li>
<li>
<p>Bigsub calls A</p>
</li>
<li>
<p>A calls C</p>
</li>
<li>
<p>C calls B</p>
</li>
<li>
<p>Criticism</p>
</li>
<li>
<p>Referencing nonlocal variable beyond static parent: more cost required</p>
</li>
<li>
<p>For time-critical program, it is difficult to estimate costs</p>
</li>
<li>
<p>Static Chain의 문제점: 부모 함수에 가까운 변수는 빠르게 찾지만, 조상 함수(Static Grandparent)까지 여러 단계 거슬러 올라가야 하면 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> 비용 증가 (Static Link jump 많아짐)</p>
</li>
<li>
<p>Display: 각 Static Level마다 현재 활성화된 Activation Record의 포인터를 테이블(배열) 형태로 저장하는 방법 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> 한 번에 바로 접근</p>
</li>
<li>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span></span></span></span> 시간에 조상 블록 변수 접근 가능 (한 번의 table lookup)</p>
</li>
<li>
<p>특히 중첩이 깊은 프로그램에서 변수 접근 비용이 확 줄어듦</p>
</li>
<li>
<p>Real-time 시스템(시간 예측이 필요한 프로그램)에도 유리</p>
</li>
</ul>
<h2 id="blocks" tabindex="-1"><a class="header-anchor" href="#blocks"><span>Blocks</span></a></h2>
<ul>
<li>
<p>User-specified local scopes</p>
</li>
<li>
<p>Advantage: cannot interfere with any other variable with the same name</p>
</li>
<li>
<p>다른 이름이 같은 변수들과 충돌을 피할 수 있음</p>
</li>
<li>
<p>Treated as parameterless subprograms and called from the same place</p>
</li>
<li>
<p>subprogram처럼 &quot;호출&quot;되는 게 아니라, &quot;그 자리에&quot; 실행됨 (순차실행)</p>
</li>
<li>
<p>Every block has an activation record</p>
</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token punctuation">{</span> </span>
<span class="line">    <span class="token keyword">int</span> temp<span class="token punctuation">;</span></span>
<span class="line">    temp <span class="token operator">=</span> list<span class="token punctuation">[</span>upper<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    list<span class="token punctuation">[</span>upper<span class="token punctuation">]</span> <span class="token operator">=</span> list<span class="token punctuation">[</span>lower<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    list<span class="token punctuation">[</span>lower<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>동작 흐름</li>
</ul>
<ol>
<li><code v-pre>{</code> 를 만나면</li>
</ol>
<ul>
<li>새로운 Activation Record가 만들어짐.</li>
<li>이 Activation Record에는 temp 를 위한 공간이 포함.</li>
</ul>
<ol start="2">
<li>블록 내부 코드 실행.</li>
<li><code v-pre>}</code> 를 만나면</li>
</ol>
<ul>
<li>
<p>이 Activation Record가 스택에서 제거된다.</p>
</li>
<li>
<p>Function(subprogram) vs block</p>
</li>
</ul>
<table>
<thead>
<tr>
<th>구분</th>
<th>함수 호출 (Function Call)</th>
<th>블록 스코프 (Block Scope)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Local variables</td>
<td>있음</td>
<td>있음</td>
</tr>
<tr>
<td>Parameters</td>
<td>있음</td>
<td>없음 (매개변수 없음)</td>
</tr>
<tr>
<td>Dynamic link</td>
<td>있음 (다음 호출을 위해)</td>
<td>있을 수도 있음 (중첩된 블록에서 상위 블록 참조)</td>
</tr>
<tr>
<td>Return address</td>
<td>항상 있음 (호출 이후 복귀를 위해)</td>
<td>거의 없음 (블록은 &quot;호출&quot;이 아니라 &quot;순차 실행&quot;이라 필요 없음)</td>
</tr>
</tbody>
</table>
<ul>
<li>Blocks can be implemented somewhat simpler and more efficient way</li>
<li>Allocated after the local variables</li>
<li>Block variables can be addressed exactly as if they were local variables</li>
<li>The maximum amount of storage required for block variables can be statically determined <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> f and g occupy the same memory locations as a and b, because a and b are popped off the stack when their block is exited (before f and g are allocated)c</li>
<li>Static Chain of block</li>
<li>블록이나 함수 안에서 바깥쪽에 있는 변수를 사용할 때 Static Link를 타고 찾아감</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">;</span> <span class="token comment">// main locals</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">;</span> <span class="token comment">// block1 locals</span></span>
<span class="line">        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">int</span> d<span class="token punctuation">,</span> e<span class="token punctuation">;</span> <span class="token comment">// block2 locals</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">            a <span class="token operator">=</span> d <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// block2에서 block1의 a에 접근</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>현재 위치: block2 (d, e)</li>
<li>접근하려는 변수: block1에 있는 a</li>
<li>과정:</li>
</ul>
<ol>
<li>block2의 Activation Record에서 시작</li>
<li>Static Link를 따라 block1의 Activation Record로 이동</li>
<li>block1 ARI 안에서 a 를 local offset으로 찾아서 접근</li>
</ol>
<h2 id="dynamic-scoping" tabindex="-1"><a class="header-anchor" href="#dynamic-scoping"><span>Dynamic Scoping</span></a></h2>
<ul>
<li>
<p>Deep access and shallow access</p>
</li>
<li>
<p>Not concepts related to deep and shallow binding</p>
</li>
<li>
<p>Deep Access / Shallow Access는 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> &quot;변수에 접근(access)&quot;할 때 메모리에서 어떻게 찾는가에 관련.</p>
</li>
<li>
<p>Deep Binding / Shallow Binding은 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> &quot;subprogram을 호출(call)&quot;할 때 환경(environment) 을 어떻게 묶는가에 관련</p>
</li>
<li>
<p>Deep and shallow accesses do not result in different semantics</p>
</li>
<li>
<p>최종적으로 찾아서 읽는 변수는 동일</p>
</li>
<li>
<p>달라지는 것은 성능(performance)</p>
</li>
<li>
<p>Deep access</p>
</li>
<li>
<p>Searching through the ARI of active subprogram from most recently activated</p>
</li>
<li>
<p>Dynamic chain is used</p>
</li>
<li>
<p>Access may require searches deep into stack</p>
</li>
<li>
<p>No static link</p>
</li>
<li>
<p>Reference to x in Sub3 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> searching for all ARI in stack (follow 4 dynamic links, examine 10 variable)</p>
</li>
<li>
<p>Reference to v in Sub3 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> found in recent Sub1</p>
</li>
<li>
<p>Deep access (two differences from static scope)</p>
</li>
<li>
<p>There is no way to determine at compile time the length of the chain</p>
</li>
<li>
<p>Slower execution speeds than static-scoped languages</p>
</li>
<li>
<p>Activation records must store the names of variables for the search</p>
</li>
</ul>
<table>
<thead>
<tr>
<th>항목</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td>검색 대상</td>
<td>현재 활성화된 ARI들</td>
</tr>
<tr>
<td>검색 방향</td>
<td>최근 활성화된 ARI <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> 오래된 ARI 순서</td>
</tr>
<tr>
<td>링크 구조</td>
<td>Dynamic Chain 사용</td>
</tr>
<tr>
<td>검색 비용</td>
<td>변수 위치에 따라 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mtext>depth</mtext><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(\text{depth})</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord text"><span class="mord">depth</span></span><span class="mclose">)</span></span></span></span> 만큼 걸림</td>
</tr>
<tr>
<td>메모리 오버헤드</td>
<td>없음 (추가 테이블 필요 없음)</td>
</tr>
<tr>
<td>Semantics 변화</td>
<td>없음 (찾는 경로만 다를 뿐 결과는 같음)</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>Shallow access</p>
</li>
<li>
<p>Semantics of deep access and shallow access are identical</p>
</li>
<li>
<p>Variables declared in subprograms are not stored in the ARI of those subprograms</p>
</li>
<li>
<p>Have a separate stack for each variable name</p>
</li>
<li>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> 최근에 할당된 값을 빠르게 찾아 쓰는 방식</p>
</li>
<li>
<p>Fast references to variables</p>
</li>
<li>
<p>But maintaining the stacks at the entrances and exits of subprograms is costly</p>
</li>
<li>
<p>변수 저장 위치 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> 변수 이름마다 별도의 스택</p>
</li>
<li>
<p>활성화된 값 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> 스택의 최상단(top)에 존재</p>
</li>
<li>
<p>새로운 subprogram 호출 시 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> 필요한 변수 이름 스택에 새로운 값을 push</p>
</li>
<li>
<p>subprogram 종료 시 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> 변수 이름 스택에서 값을 pop</p>
</li>
<li>
<p>메모리 관리 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> 변수 이름별로 별도로 관리</p>
</li>
<li>
<p>Deep access: fast subprogram linkage but costly for nonlocal referencing</p>
</li>
<li>
<p>Shallow access: faster references to nonlocals but costly in terms of subprogram linkage</p>
</li>
</ul>
<table>
<thead>
<tr>
<th>항목</th>
<th>Deep Access</th>
<th>Shallow Access</th>
</tr>
</thead>
<tbody>
<tr>
<td>접근 경로</td>
<td>Dynamic Link 타고 올라감</td>
<td>변수 이름별 별도 스택 최상단</td>
</tr>
<tr>
<td>접근 시간</td>
<td><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mtext>depth</mtext><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(\text{depth})</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord text"><span class="mord">depth</span></span><span class="mclose">)</span></span></span></span></td>
<td><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span></span></span></span></td>
</tr>
<tr>
<td>프로그램 구조 복잡도</td>
<td>단순</td>
<td>복잡 (각 변수마다 스택 필요)</td>
</tr>
<tr>
<td>서브프로그램 관리 비용</td>
<td>작음</td>
<td>큼 (stack push/pop 필요)</td>
</tr>
<tr>
<td>Semantics 변화</td>
<td>없음 (동작은 동일)</td>
<td>없음 (동작은 동일)</td>
</tr>
</tbody>
</table>
</div></template>


