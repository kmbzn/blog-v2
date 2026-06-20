<template><div><section class="print-section">
<h1 id="programming-languages-—-final-exam" tabindex="-1"><a class="header-anchor" href="#programming-languages-—-final-exam"><span>Programming Languages — Final Exam</span></a></h1>
<DateMeta />
<p><strong>Name:</strong> _____________  <strong>Student ID:</strong> _______________________  <strong>Score:</strong> ____________ / 100</p>
<hr>
</section>
<section class="print-section">
<h2 id="section-i-true-or-false-10-pts-·-1-pt-each" tabindex="-1"><a class="header-anchor" href="#section-i-true-or-false-10-pts-·-1-pt-each"><span>Section I. True or False  [10 pts · 1 pt each]</span></a></h2>
<p>Write <strong>T</strong> or <strong>F</strong> in the blank.</p>
<ol>
<li>
<p>____________  In pass-by-reference, the callee receives a copy of the actual parameter's value, not its address.</p>
</li>
<li>
<p>____________  The dynamic link in an Activation Record Instance (ARI) points to the ARI of the lexical (static) parent.</p>
</li>
<li>
<p>____________  Deadlock occurs when all tasks in a concurrent system are waiting for events that can never occur.</p>
</li>
<li>
<p>____________  A monitor automatically guarantees mutual exclusion for all operations defined inside it.</p>
</li>
<li>
<p>____________  Haskell's lazy evaluation allows infinite lists to be defined and used in computations.</p>
</li>
<li>
<p>____________  In ML, user-defined function overloading is supported through the pattern matching feature.</p>
</li>
<li>
<p>____________  In Scheme, <code v-pre>(CAR '(A B C))</code> returns <code v-pre>(B C)</code>.</p>
</li>
<li>
<p>____________  In Java, all exceptions — both checked and unchecked — must be either caught or declared in the <code v-pre>throws</code> clause.</p>
</li>
<li>
<p>____________  In the shallow access method for dynamic scoping, each variable name maintains its own stack of values.</p>
</li>
<li>
<p>____________ Common Lisp uses dynamic scoping as its default scoping rule.</p>
</li>
</ol>
<hr>
</section>
<section class="print-section">
<h2 id="section-ii-concurrency-terminology-10-pts-·-2-pts-each" tabindex="-1"><a class="header-anchor" href="#section-ii-concurrency-terminology-10-pts-·-2-pts-each"><span>Section II. Concurrency Terminology  [10 pts · 2 pts each]</span></a></h2>
<p>Briefly define each of the following terms as used in concurrent programming.</p>
<p><strong>1. Race condition</strong></p>
<p><br><br><br><br><br><br></p>
<p><strong>2. Deadlock</strong></p>
<p><br><br><br><br><br><br></p>
<p><strong>3. Liveness</strong></p>
<p><br><br><br><br><br><br></p>
<p><strong>4. Mutual exclusion</strong></p>
<p><br><br><br><br><br><br></p>
<p><strong>5. Cooperation synchronization vs. Competition synchronization</strong> — describe the difference between the two.</p>
<p><br><br><br><br><br><br><br></p>
<hr>
</section>
<section class="print-section">
<h2 id="section-iii-semaphore-10-pts" tabindex="-1"><a class="header-anchor" href="#section-iii-semaphore-10-pts"><span>Section III. Semaphore  [10 pts]</span></a></h2>
<p>Three threads must print in the following strict order regardless of scheduling:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">Thread 1 prints: "Hello"</span>
<span class="line">Thread 2 prints: "World"</span>
<span class="line">Thread 3 prints: "!"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Complete the pseudocode below using exactly <strong>two semaphores</strong> (<code v-pre>s1</code> and <code v-pre>s2</code>, both initialized to <strong>0</strong>) to guarantee this printing order.</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">Semaphore s1 = 0;</span>
<span class="line">Semaphore s2 = 0;</span>
<span class="line"></span>
<span class="line">Thread 1:</span>
<span class="line">    print("Hello");</span>
<span class="line">    ①  __________________________________________________________________</span>
<span class="line"></span>
<span class="line">Thread 2:</span>
<span class="line">    ②  __________________________________________________________________</span>
<span class="line">    print("World");</span>
<span class="line">    ③  __________________________________________________________________</span>
<span class="line"></span>
<span class="line">Thread 3:</span>
<span class="line">    ④  __________________________________________________________________</span>
<span class="line">    print("!");</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br><br><br><br><br><br><br><br></p>
<hr>
</section>
<section class="print-section">
<h2 id="section-iv-exception-handling-keywords-10-pts" tabindex="-1"><a class="header-anchor" href="#section-iv-exception-handling-keywords-10-pts"><span>Section IV. Exception Handling Keywords  [10 pts]</span></a></h2>
<p><strong>(a)  [6 pts]</strong> Fill in the blanks ① through ⑨ with the correct keyword or syntax.</p>
<table>
<thead>
<tr>
<th></th>
<th>Ada</th>
<th>C++</th>
<th>Java</th>
<th>Python</th>
<th>Ruby</th>
</tr>
</thead>
<tbody>
<tr>
<td>Start protected block</td>
<td>① __________________________</td>
<td><code v-pre>try</code></td>
<td><code v-pre>try</code></td>
<td>② __________________________</td>
<td>③ __________________________</td>
</tr>
<tr>
<td>Catch exception E</td>
<td><code v-pre>exception when E =&gt;</code></td>
<td>④ __________________________</td>
<td><code v-pre>catch(E e)</code></td>
<td>⑤ __________________________</td>
<td>⑥ __________________________</td>
</tr>
<tr>
<td>Raise / throw exception</td>
<td><code v-pre>raise E</code></td>
<td>⑦ __________________________</td>
<td><code v-pre>throw new E()</code></td>
<td><code v-pre>raise E</code></td>
<td>⑧ __________________________</td>
</tr>
<tr>
<td>Cleanup block (always runs)</td>
<td>(none)</td>
<td>(none)</td>
<td>⑨ __________________________</td>
<td><code v-pre>finally:</code></td>
<td><code v-pre>ensure</code></td>
</tr>
</tbody>
</table>
<p><br><br><br><br></p>
<p><strong>(b)  [4 pts]</strong> In Java, what is the difference between a <strong>checked exception</strong> and an <strong>unchecked exception</strong>? Give one example class name for each.</p>
<p><br><br><br><br><br><br><br><br><br></p>
<hr>
</section>
<section class="print-section">
<h2 id="section-v-ari-—-chain-offset-and-local-offset-10-pts" tabindex="-1"><a class="header-anchor" href="#section-v-ari-—-chain-offset-and-local-offset-10-pts"><span>Section V. ARI — Chain Offset and Local Offset  [10 pts]</span></a></h2>
<p>Consider the following nested subprogram structure. Depths and local offsets are given in comments.</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">program Bigsub                      -- depth 0</span>
<span class="line">  var A : integer  (offset = 3)</span>
<span class="line">  var B : integer  (offset = 4)</span>
<span class="line">  var C : integer  (offset = 5)</span>
<span class="line"></span>
<span class="line">  procedure Sub1                    -- depth 1</span>
<span class="line">    var A : integer  (offset = 3)</span>
<span class="line">    -- [Position 1: Sub1 is currently executing]</span>
<span class="line"></span>
<span class="line">  procedure Sub2                    -- depth 1</span>
<span class="line">    var B : integer  (offset = 4)</span>
<span class="line"></span>
<span class="line">    procedure Sub3                  -- depth 2</span>
<span class="line">      var E : integer  (offset = 4)</span>
<span class="line">      -- [Position 2: Sub3 is currently executing]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Variable access is written as <code v-pre>(chain_offset, local_offset)</code>.<br>
<code v-pre>chain_offset</code> = number of times the static link must be followed to reach the correct ARI.</p>
<p><strong>(a)  [5 pts]</strong> At <strong>Position 1</strong> (Sub1 executing), give the access tuple for each reference:</p>
<table>
<thead>
<tr>
<th>Variable referenced</th>
<th>(chain_offset, local_offset)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sub1's own <code v-pre>A</code></td>
<td>( ____________________ , ____________________ )</td>
</tr>
<tr>
<td>Bigsub's <code v-pre>B</code></td>
<td>( ____________________ , ____________________ )</td>
</tr>
<tr>
<td>Bigsub's <code v-pre>C</code></td>
<td>( ____________________ , ____________________ )</td>
</tr>
</tbody>
</table>
<p><br><br><br><br></p>
<p><strong>(b)  [5 pts]</strong> At <strong>Position 2</strong> (Sub3 executing), give the access tuple for each reference:</p>
<table>
<thead>
<tr>
<th>Variable referenced</th>
<th>(chain_offset, local_offset)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sub3's own <code v-pre>E</code></td>
<td>( ____________________ , ____________________ )</td>
</tr>
<tr>
<td>Sub2's <code v-pre>B</code></td>
<td>( ____________________ , ____________________ )</td>
</tr>
<tr>
<td>Bigsub's <code v-pre>A</code></td>
<td>( ____________________ , ____________________ )</td>
</tr>
</tbody>
</table>
<p><br><br><br><br></p>
<hr>
</section>
<section class="print-section">
<h2 id="section-vi-parameter-passing-10-pts" tabindex="-1"><a class="header-anchor" href="#section-vi-parameter-passing-10-pts"><span>Section VI. Parameter Passing  [10 pts]</span></a></h2>
<p>Consider the following C# code using <strong>pass-by-result</strong> (<code v-pre>out</code>):</p>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code class="language-csharp"><span class="line"><span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DoIt</span><span class="token punctuation">(</span><span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">int</span></span> x<span class="token punctuation">,</span> <span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">int</span></span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    x <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">;</span></span>
<span class="line">    y <span class="token operator">=</span> <span class="token number">35</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name"><span class="token keyword">int</span></span> sub <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> list <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">DoIt</span><span class="token punctuation">(</span><span class="token keyword">out</span> list<span class="token punctuation">[</span>sub<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">out</span> sub<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>(a)  [5 pts]</strong> Under <strong>call-time address evaluation</strong> (the address of each actual parameter is fixed at the moment of the call), what are the final values of <code v-pre>list</code> and <code v-pre>sub</code> after <code v-pre>DoIt</code> returns? Show your reasoning step by step.</p>
<p><br><br><br><br><br><br><br><br><br><br></p>
<p><strong>(b)  [5 pts]</strong> Under <strong>return-time address evaluation</strong> (the address of each actual parameter is re-evaluated when the formal parameter value is copied back), what problem can occur? Explain concretely using this code.</p>
<p><br><br><br><br><br><br><br><br><br></p>
<hr>
</section>
<section class="print-section">
<h2 id="section-vii-polymorphic-variable-declaration-10-pts-·-2-pts-each" tabindex="-1"><a class="header-anchor" href="#section-vii-polymorphic-variable-declaration-10-pts-·-2-pts-each"><span>Section VII. Polymorphic Variable Declaration  [10 pts · 2 pts each]</span></a></h2>
<p>Show how to declare a <strong>polymorphic variable</strong> in each language and demonstrate a <strong>dynamically bound</strong> method call. Use <code v-pre>Shape</code> as the parent class and <code v-pre>Circle</code> as the subclass (with a <code v-pre>draw</code> method).</p>
<p><strong>(a) C++</strong> — pointer-based; the <code v-pre>virtual</code> keyword is required for dynamic binding.</p>
<p><br><br><br><br><br><br><br><br><br></p>
<p><strong>(b) Java</strong> — reference-based; dynamic binding is the default for non-final instance methods.</p>
<p><br><br><br><br><br><br><br></p>
<p><strong>(c) C#</strong> — requires <code v-pre>virtual</code> on the parent method and <code v-pre>override</code> on the child method.</p>
<p><br><br><br><br><br><br><br></p>
<p><strong>(d) Python</strong> — duck typing; no explicit type declaration is required.</p>
<p><br><br><br><br><br><br></p>
<p><strong>(e) Ruby</strong> — all variables are typeless; all method calls are dynamically bound.</p>
<p><br><br><br><br><br><br></p>
<hr>
</section>
<section class="print-section">
<h2 id="section-viii-functional-programming-—-scheme-20-pts" tabindex="-1"><a class="header-anchor" href="#section-viii-functional-programming-—-scheme-20-pts"><span>Section VIII. Functional Programming — Scheme  [20 pts]</span></a></h2>
<p>A binary tree is represented as a Scheme list <code v-pre>(value left right)</code> where:</p>
<ul>
<li><code v-pre>(CAR t)</code> → root value</li>
<li><code v-pre>(CADR t)</code> → left subtree</li>
<li><code v-pre>(CADDR t)</code> → right subtree</li>
<li><code v-pre>'()</code> (empty list) → empty tree / leaf sentinel</li>
</ul>
<p><strong>(a)  [6 pts]</strong> Write a Scheme function <code v-pre>count-nodes</code> that returns the <strong>total number of nodes</strong> in a binary tree <code v-pre>t</code>.</p>
<p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
<p><strong>(b)  [7 pts]</strong> Write a Scheme function <code v-pre>tree-height</code> that returns the <strong>height</strong> of a binary tree <code v-pre>t</code>. Define the height of an empty tree as 0.</p>
<p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
<p><strong>(c)  [7 pts]</strong> Write a Scheme function <code v-pre>tree-max</code> that returns the <strong>maximum value</strong> stored in a binary tree <code v-pre>t</code>. Use <code v-pre>-999999</code> as the base case return value for an empty tree.</p>
<p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
<hr>
</section>
<section class="print-section">
<h2 id="section-ix-haskell-—-foldr-5-pts" tabindex="-1"><a class="header-anchor" href="#section-ix-haskell-—-foldr-5-pts"><span>Section IX. Haskell — foldr  [5 pts]</span></a></h2>
<p><strong>(a)  [3 pts]</strong> Trace the evaluation of the following expression <strong>step by step</strong> and give the final result.<br>
Recall: <code v-pre>foldr f v [x1, x2, x3] = f x1 (f x2 (f x3 v))</code></p>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token builtin">foldr</span> <span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">_</span> <span class="token hvariable">n</span> <span class="token operator">-></span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token hvariable">n</span><span class="token punctuation">)</span> <span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
<p><strong>(b)  [2 pts]</strong> Which standard Haskell function is this equivalent to, and what does it compute?</p>
<p><br><br><br><br></p>
<hr>
</section>
<section class="print-section">
<h2 id="section-x-ml-—-pattern-matching-5-pts" tabindex="-1"><a class="header-anchor" href="#section-x-ml-—-pattern-matching-5-pts"><span>Section X. ML — Pattern Matching  [5 pts]</span></a></h2>
<p>The following ML function is written using an <code v-pre>if-then-else</code> expression:</p>
<div class="language-sml line-numbers-mode" data-highlighter="prismjs" data-ext="sml"><pre v-pre><code class="language-sml"><span class="line"><span class="token keyword">fun</span> <span class="token function">length</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span> <span class="token operator">=</span></span>
<span class="line">    <span class="token keyword">if</span> lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">then</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">else</span> <span class="token number">1</span> <span class="token operator">+</span> length<span class="token punctuation">(</span>tl lst<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Rewrite this function using <strong>ML pattern matching</strong> syntax.</p>
</section>
</div></template>


