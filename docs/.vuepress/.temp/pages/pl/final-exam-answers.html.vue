<template><div><section class="print-section">
<h1 id="programming-languages-—-final-exam-—-answer-key" tabindex="-1"><a class="header-anchor" href="#programming-languages-—-final-exam-—-answer-key"><span>Programming Languages — Final Exam — Answer Key</span></a></h1>
<DateMeta />
<hr>
</section>
<section class="print-section">
<h2 id="section-i-true-or-false" tabindex="-1"><a class="header-anchor" href="#section-i-true-or-false"><span>Section I. True or False</span></a></h2>
<table>
<thead>
<tr>
<th>#</th>
<th>Answer</th>
<th>Explanation</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td><strong>F</strong></td>
<td>Pass-by-reference passes the <strong>address</strong> of the actual parameter. The callee directly accesses and modifies the original variable through the address.</td>
</tr>
<tr>
<td>2</td>
<td><strong>F</strong></td>
<td>The <strong>dynamic link</strong> points to the ARI of the <strong>caller</strong> (dynamic parent). The <strong>static link</strong> points to the ARI of the lexical/static parent.</td>
</tr>
<tr>
<td>3</td>
<td><strong>T</strong></td>
<td>Deadlock is defined as the state where all tasks are permanently blocked, waiting for events that can only be triggered by other blocked tasks.</td>
</tr>
<tr>
<td>4</td>
<td><strong>T</strong></td>
<td>A monitor encapsulates shared data and ensures at most one thread executes inside it at any moment — competition synchronization is guaranteed automatically.</td>
</tr>
<tr>
<td>5</td>
<td><strong>T</strong></td>
<td>Haskell's non-strict (lazy) evaluation defers computation until the value is actually needed, making it possible to define and work with infinite data structures.</td>
</tr>
<tr>
<td>6</td>
<td><strong>F</strong></td>
<td>ML does <strong>not</strong> support user-defined function overloading. Pattern matching selects among different clauses of the <em>same</em> function; if you need different types, you must use different function names.</td>
</tr>
<tr>
<td>7</td>
<td><strong>F</strong></td>
<td><code v-pre>(CAR '(A B C))</code> returns <code v-pre>A</code> (the first element). <code v-pre>(CDR '(A B C))</code> returns <code v-pre>(B C)</code>.</td>
</tr>
<tr>
<td>8</td>
<td><strong>F</strong></td>
<td>Only <strong>checked exceptions</strong> (subclasses of <code v-pre>Exception</code> excluding <code v-pre>RuntimeException</code>) must be caught or declared. <strong>Unchecked exceptions</strong> (<code v-pre>RuntimeException</code>, <code v-pre>Error</code>) require no such declaration.</td>
</tr>
<tr>
<td>9</td>
<td><strong>T</strong></td>
<td>In shallow access, each variable name has its own stack of values; the current in-scope value is always at the top.</td>
</tr>
<tr>
<td>10</td>
<td><strong>F</strong></td>
<td>Common Lisp uses <strong>static (lexical) scoping</strong> by default. Dynamic scoping can be opted into via <code v-pre>defvar</code> (special variables). Before the mid-1970s, Lisp used dynamic scoping; modern dialects default to static.</td>
</tr>
</tbody>
</table>
<hr>
</section>
<section class="print-section">
<h2 id="section-ii-concurrency-terminology" tabindex="-1"><a class="header-anchor" href="#section-ii-concurrency-terminology"><span>Section II. Concurrency Terminology</span></a></h2>
<p><strong>1. Race condition</strong></p>
<p>A situation in which two or more tasks access a shared resource concurrently without proper synchronization, and the final outcome depends on the relative execution order (scheduling) of the tasks. This leads to non-deterministic and potentially incorrect behavior. Example: two threads simultaneously reading and incrementing a shared counter without synchronization.</p>
<p><strong>2. Deadlock</strong></p>
<p>A state in which a set of tasks are all permanently blocked, each waiting for an event (e.g., a resource release or a signal) that can only be caused by another blocked task in the same set. No task in the deadlocked set can ever make progress. The condition represents a total loss of liveness.</p>
<p><strong>3. Liveness</strong></p>
<p>A property that guarantees that a task will eventually be able to complete its execution and make progress — i.e., no task waits forever. A system is said to have liveness if it is free from deadlock and starvation. Deadlock is the total loss of liveness.</p>
<p><strong>4. Mutual exclusion</strong></p>
<p>The guarantee that at most one task can execute inside a critical section (accessing a shared resource) at any given time. Mutual exclusion prevents race conditions by serializing access to shared data.</p>
<p><strong>5. Cooperation synchronization vs. Competition synchronization</strong></p>
<ul>
<li>
<p><strong>Cooperation synchronization</strong>: Task A must wait until task B has completed a specific action before A can proceed. The tasks <em>coordinate</em> their actions. Example: in a producer-consumer system, the consumer must wait for the producer to deposit an item into the buffer before it can fetch.</p>
</li>
<li>
<p><strong>Competition synchronization</strong>: Multiple tasks compete for exclusive access to the same shared resource; only one may access it at a time. Example: two threads must not simultaneously write to the same buffer. A binary semaphore (mutex) or <code v-pre>lock</code> statement is typically used to enforce this.</p>
</li>
</ul>
<hr>
</section>
<section class="print-section">
<h2 id="section-iii-semaphore" tabindex="-1"><a class="header-anchor" href="#section-iii-semaphore"><span>Section III. Semaphore</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">Semaphore s1 = 0;</span>
<span class="line">Semaphore s2 = 0;</span>
<span class="line"></span>
<span class="line">Thread 1:</span>
<span class="line">    print("Hello");</span>
<span class="line">    ①  s1.release();       -- signal Thread 2 that "Hello" is done</span>
<span class="line"></span>
<span class="line">Thread 2:</span>
<span class="line">    ②  s1.acquire();       -- block until Thread 1 has finished</span>
<span class="line">    print("World");</span>
<span class="line">    ③  s2.release();       -- signal Thread 3 that "World" is done</span>
<span class="line"></span>
<span class="line">Thread 3:</span>
<span class="line">    ④  s2.acquire();       -- block until Thread 2 has finished</span>
<span class="line">    print("!");</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Explanation:</strong></p>
<ul>
<li>Both <code v-pre>s1</code> and <code v-pre>s2</code> start at 0, so any <code v-pre>acquire()</code> call on them immediately blocks the calling thread.</li>
<li>Thread 2 blocks on <code v-pre>s1.acquire()</code> until Thread 1 calls <code v-pre>s1.release()</code> after printing &quot;Hello&quot;.</li>
<li>Thread 3 blocks on <code v-pre>s2.acquire()</code> until Thread 2 calls <code v-pre>s2.release()</code> after printing &quot;World&quot;.</li>
<li>This chain of signals guarantees the output order <code v-pre>Hello → World → !</code> regardless of the OS scheduler.</li>
</ul>
<hr>
</section>
<section class="print-section">
<h2 id="section-iv-exception-handling-keywords" tabindex="-1"><a class="header-anchor" href="#section-iv-exception-handling-keywords"><span>Section IV. Exception Handling Keywords</span></a></h2>
</section>
<section class="print-section">
<h3 id="a-syntax-table" tabindex="-1"><a class="header-anchor" href="#a-syntax-table"><span>(a) Syntax table</span></a></h3>
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
<td>① <strong><code v-pre>begin</code></strong></td>
<td><code v-pre>try</code></td>
<td><code v-pre>try</code></td>
<td>② <strong><code v-pre>try:</code></strong></td>
<td>③ <strong><code v-pre>begin</code></strong></td>
</tr>
<tr>
<td>Catch exception E</td>
<td><code v-pre>exception when E =&gt;</code></td>
<td>④ <strong><code v-pre>catch(E e)</code></strong></td>
<td><code v-pre>catch(E e)</code></td>
<td>⑤ <strong><code v-pre>except E:</code></strong></td>
<td>⑥ <strong><code v-pre>rescue E</code></strong></td>
</tr>
<tr>
<td>Raise / throw exception</td>
<td><code v-pre>raise E</code></td>
<td>⑦ <strong><code v-pre>throw expr</code></strong></td>
<td><code v-pre>throw new E()</code></td>
<td><code v-pre>raise E</code></td>
<td>⑧ <strong><code v-pre>raise</code></strong></td>
</tr>
<tr>
<td>Cleanup block (always runs)</td>
<td>(none)</td>
<td>(none)</td>
<td>⑨ <strong><code v-pre>finally</code></strong></td>
<td><code v-pre>finally:</code></td>
<td><code v-pre>ensure</code></td>
</tr>
</tbody>
</table>
<p>Full syntax examples per language:</p>
<div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token comment">-- Ada</span></span>
<span class="line"><span class="token keyword">begin</span></span>
<span class="line">    <span class="token comment">-- code</span></span>
<span class="line"><span class="token keyword">exception</span></span>
<span class="line">    <span class="token keyword">when</span> <span class="token variable">Constraint_Error</span> <span class="token operator">=></span></span>
<span class="line">        <span class="token variable">Put_Line</span><span class="token punctuation">(</span><span class="token string">"range error"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">when</span> <span class="token keyword">others</span> <span class="token operator">=></span></span>
<span class="line">        <span class="token variable">Put_Line</span><span class="token punctuation">(</span><span class="token string">"other error"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token comment">// C++</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">throw</span> <span class="token function">MyException</span><span class="token punctuation">(</span><span class="token string">"message"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">catch</span> <span class="token punctuation">(</span>MyException<span class="token operator">&amp;</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* handle */</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* catch-all */</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// throw;  -- re-raise current exception</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">// Java</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">MyException</span><span class="token punctuation">(</span><span class="token string">"message"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">MyException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* handle */</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span>   <span class="token punctuation">{</span> <span class="token comment">/* catch-all */</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">finally</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// always runs</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token comment"># Python</span></span>
<span class="line"><span class="token keyword">try</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">raise</span> ValueError<span class="token punctuation">(</span><span class="token string">"bad value"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">except</span> ValueError <span class="token keyword">as</span> e<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">except</span> Exception<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">pass</span></span>
<span class="line"><span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">pass</span>   <span class="token comment"># runs only if no exception was raised</span></span>
<span class="line"><span class="token keyword">finally</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">pass</span>   <span class="token comment"># always runs</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token comment"># Ruby</span></span>
<span class="line"><span class="token keyword">begin</span></span>
<span class="line">  <span class="token keyword">raise</span> <span class="token string-literal"><span class="token string">"error"</span></span></span>
<span class="line"><span class="token keyword">rescue</span> RuntimeError <span class="token operator">=></span> e</span>
<span class="line">  puts e<span class="token punctuation">.</span>message</span>
<span class="line"><span class="token keyword">rescue</span> <span class="token operator">=></span> e</span>
<span class="line">  <span class="token comment"># catches all StandardError subclasses</span></span>
<span class="line"><span class="token keyword">ensure</span></span>
<span class="line">  <span class="token comment"># always runs (like Java's finally)</span></span>
<span class="line">  <span class="token comment"># retry  -- re-executes begin block (use inside rescue only)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></section>
<section class="print-section">
<h3 id="b-checked-vs-unchecked-exceptions-in-java" tabindex="-1"><a class="header-anchor" href="#b-checked-vs-unchecked-exceptions-in-java"><span>(b) Checked vs. Unchecked Exceptions in Java</span></a></h3>
<ul>
<li>
<p><strong>Checked exception</strong>: A subclass of <code v-pre>Exception</code> that is <strong>not</strong> a subclass of <code v-pre>RuntimeException</code>. The Java compiler enforces that it must either be caught (<code v-pre>try-catch</code>) or declared in the method's <code v-pre>throws</code> clause. It represents recoverable error conditions that the caller should anticipate. Examples: <code v-pre>IOException</code>, <code v-pre>SQLException</code>.</p>
</li>
<li>
<p><strong>Unchecked exception</strong>: A subclass of <code v-pre>RuntimeException</code> or <code v-pre>Error</code>. The compiler does <strong>not</strong> require explicit handling or a <code v-pre>throws</code> declaration. These typically represent programming bugs or JVM-level errors that are not expected to be recovered from at runtime. Examples: <code v-pre>NullPointerException</code>, <code v-pre>ArrayIndexOutOfBoundsException</code> (both <code v-pre>RuntimeException</code>).</p>
</li>
</ul>
<p>Java exception hierarchy:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">Throwable</span>
<span class="line">├── Error              (unchecked — JVM-level; e.g., OutOfMemoryError)</span>
<span class="line">└── Exception</span>
<span class="line">    ├── RuntimeException   (unchecked — e.g., NullPointerException)</span>
<span class="line">    └── (other subclasses) (checked — e.g., IOException)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</section>
<section class="print-section">
<h2 id="section-v-ari-—-chain-offset-and-local-offset" tabindex="-1"><a class="header-anchor" href="#section-v-ari-—-chain-offset-and-local-offset"><span>Section V. ARI — Chain Offset and Local Offset</span></a></h2>
<p>The tuple <code v-pre>(chain_offset, local_offset)</code> means: follow the static link <code v-pre>chain_offset</code> times, then access the variable at <code v-pre>local_offset</code> within that ARI.</p>
<p><strong>Program structure:</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">Bigsub  (depth 0): A=offset 3, B=offset 4, C=offset 5</span>
<span class="line">  Sub1  (depth 1): A=offset 3</span>
<span class="line">  Sub2  (depth 1): B=offset 4</span>
<span class="line">    Sub3 (depth 2): E=offset 4</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></section>
<section class="print-section">
<h3 id="a-position-1-—-sub1-is-currently-executing" tabindex="-1"><a class="header-anchor" href="#a-position-1-—-sub1-is-currently-executing"><span>(a) Position 1 — Sub1 is currently executing</span></a></h3>
<table>
<thead>
<tr>
<th>Variable referenced</th>
<th>(chain_offset, local_offset)</th>
<th>Reason</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sub1's own <code v-pre>A</code></td>
<td><strong>(0, 3)</strong></td>
<td>Local to Sub1; no static link traversal needed</td>
</tr>
<tr>
<td>Bigsub's <code v-pre>B</code></td>
<td><strong>(1, 4)</strong></td>
<td>One static link up from Sub1 to Bigsub; B is at offset 4</td>
</tr>
<tr>
<td>Bigsub's <code v-pre>C</code></td>
<td><strong>(1, 5)</strong></td>
<td>One static link up from Sub1 to Bigsub; C is at offset 5</td>
</tr>
</tbody>
</table>
</section>
<section class="print-section">
<h3 id="b-position-2-—-sub3-is-currently-executing" tabindex="-1"><a class="header-anchor" href="#b-position-2-—-sub3-is-currently-executing"><span>(b) Position 2 — Sub3 is currently executing</span></a></h3>
<table>
<thead>
<tr>
<th>Variable referenced</th>
<th>(chain_offset, local_offset)</th>
<th>Reason</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sub3's own <code v-pre>E</code></td>
<td><strong>(0, 4)</strong></td>
<td>Local to Sub3; no static link traversal</td>
</tr>
<tr>
<td>Sub2's <code v-pre>B</code></td>
<td><strong>(1, 4)</strong></td>
<td>One static link up from Sub3 to Sub2; B is at offset 4</td>
</tr>
<tr>
<td>Bigsub's <code v-pre>A</code></td>
<td><strong>(2, 3)</strong></td>
<td>Two static links up: Sub3 → Sub2 → Bigsub; A is at offset 3</td>
</tr>
</tbody>
</table>
<hr>
</section>
<section class="print-section">
<h2 id="section-vi-parameter-passing" tabindex="-1"><a class="header-anchor" href="#section-vi-parameter-passing"><span>Section VI. Parameter Passing</span></a></h2>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code class="language-csharp"><span class="line"><span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DoIt</span><span class="token punctuation">(</span><span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">int</span></span> x<span class="token punctuation">,</span> <span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">int</span></span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    x <span class="token operator">=</span> <span class="token number">17</span><span class="token punctuation">;</span></span>
<span class="line">    y <span class="token operator">=</span> <span class="token number">35</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token class-name"><span class="token keyword">int</span></span> sub <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> list <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">DoIt</span><span class="token punctuation">(</span><span class="token keyword">out</span> list<span class="token punctuation">[</span>sub<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">out</span> sub<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></section>
<section class="print-section">
<h3 id="a-call-time-address-evaluation" tabindex="-1"><a class="header-anchor" href="#a-call-time-address-evaluation"><span>(a) Call-time address evaluation</span></a></h3>
<p>At the moment of the call, the l-values (addresses) of the actual parameters are evaluated once and stored:</p>
<ul>
<li>First argument <code v-pre>list[sub]</code> → address of <code v-pre>list[3]</code> (because <code v-pre>sub = 3</code> at call time)</li>
<li>Second argument <code v-pre>sub</code> → address of <code v-pre>sub</code></li>
</ul>
<p>Execution inside <code v-pre>DoIt</code>:</p>
<ul>
<li><code v-pre>x = 17</code> → writes 17 to the address of <code v-pre>list[3]</code> → <code v-pre>list[3] = 17</code></li>
<li><code v-pre>y = 35</code> → writes 35 to the address of <code v-pre>sub</code> → <code v-pre>sub = 35</code></li>
</ul>
<p><strong>Final values:</strong> <code v-pre>list = {1, 3, 5, 17, 9}</code>, <code v-pre>sub = 35</code></p>
</section>
<section class="print-section">
<h3 id="b-return-time-address-evaluation" tabindex="-1"><a class="header-anchor" href="#b-return-time-address-evaluation"><span>(b) Return-time address evaluation</span></a></h3>
<p>With return-time evaluation, the formal parameter values (<code v-pre>x = 17</code>, <code v-pre>y = 35</code>) are computed inside the function, but the destination addresses are only determined <strong>at return time</strong>.</p>
<p>Consider what happens if <code v-pre>y</code> is copied back first:</p>
<ol>
<li>Copy <code v-pre>y = 35</code> → <code v-pre>sub = 35</code>  (sub is now 35)</li>
<li>Re-evaluate address of first argument: <code v-pre>list[sub]</code> → <code v-pre>list[35]</code></li>
<li><code v-pre>list[35]</code> does not exist (list has indices 0–4) → <strong>runtime error / index out of bounds</strong></li>
</ol>
<p>The behavior is <strong>undefined / implementation-defined</strong> because it depends on the order in which the copy-back operations are performed. This is a fundamental danger of return-time address evaluation when actual parameters contain array-index expressions that depend on other actual parameters.</p>
<hr>
</section>
<section class="print-section">
<h2 id="section-vii-polymorphic-variable-declaration" tabindex="-1"><a class="header-anchor" href="#section-vii-polymorphic-variable-declaration"><span>Section VII. Polymorphic Variable Declaration</span></a></h2>
</section>
<section class="print-section">
<h3 id="a-c-—-pointer-based-requires-virtual" tabindex="-1"><a class="header-anchor" href="#a-c-—-pointer-based-requires-virtual"><span>(a) C++ — pointer-based; requires <code v-pre>virtual</code></span></a></h3>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">    <span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* base */</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">virtual</span> <span class="token operator">~</span><span class="token function">Shape</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Shape</span></span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span> <span class="token comment">/* circle-specific */</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Shape<span class="token operator">*</span> ptr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// polymorphic variable: pointer to base class</span></span>
<span class="line">ptr<span class="token operator">-></span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment">// dynamic binding via vtable → Circle::draw() is called</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: if <code v-pre>draw()</code> were not <code v-pre>virtual</code>, <code v-pre>Shape::draw()</code> would be called (static binding).</p>
</section>
<section class="print-section">
<h3 id="b-java-—-reference-based-dynamic-binding-by-default" tabindex="-1"><a class="header-anchor" href="#b-java-—-reference-based-dynamic-binding-by-default"><span>(b) Java — reference-based; dynamic binding by default</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* base */</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* circle-specific */</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Shape</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// polymorphic variable: parent-type reference to child object</span></span>
<span class="line">a<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">// dynamic binding (default) → Circle.draw() is called</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In Java, all non-<code v-pre>final</code>, non-<code v-pre>static</code>, non-<code v-pre>private</code> instance methods are dynamically bound.</p>
</section>
<section class="print-section">
<h3 id="c-c-—-requires-virtual-on-parent-override-on-child" tabindex="-1"><a class="header-anchor" href="#c-c-—-requires-virtual-on-parent-override-on-child"><span>(c) C# — requires <code v-pre>virtual</code> on parent, <code v-pre>override</code> on child</span></a></h3>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code class="language-csharp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">virtual</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* base */</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Shape</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* circle-specific */</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Shape</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// polymorphic variable</span></span>
<span class="line">s<span class="token punctuation">.</span><span class="token function">Draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">// dynamic binding → Circle.Draw() is called</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Without <code v-pre>virtual</code>/<code v-pre>override</code>, a <code v-pre>new</code> keyword would hide the parent method and use static binding.</p>
</section>
<section class="print-section">
<h3 id="d-python-—-duck-typing-no-explicit-type-declaration" tabindex="-1"><a class="header-anchor" href="#d-python-—-duck-typing-no-explicit-type-declaration"><span>(d) Python — duck typing; no explicit type declaration</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Shape</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">draw</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">pass</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span>Shape<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">draw</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"circle"</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">x <span class="token operator">=</span> Circle<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># variable x holds a Circle object; no type annotation needed</span></span>
<span class="line">x<span class="token punctuation">.</span>draw<span class="token punctuation">(</span><span class="token punctuation">)</span>       <span class="token comment"># always dynamically bound → Circle.draw() is called</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></section>
<section class="print-section">
<h3 id="e-ruby-—-all-variables-are-typeless-all-method-calls-are-dynamic" tabindex="-1"><a class="header-anchor" href="#e-ruby-—-all-variables-are-typeless-all-method-calls-are-dynamic"><span>(e) Ruby — all variables are typeless; all method calls are dynamic</span></a></h3>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Shape</span></span>
<span class="line">  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">draw</span></span><span class="token punctuation">;</span> <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token operator">&lt;</span> Shape</span>
<span class="line">  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">draw</span></span><span class="token punctuation">;</span> puts <span class="token string-literal"><span class="token string">"circle"</span></span><span class="token punctuation">;</span> <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">x <span class="token operator">=</span> <span class="token class-name">Circle</span><span class="token punctuation">.</span><span class="token keyword">new</span></span>
<span class="line">x<span class="token punctuation">.</span>draw   <span class="token comment"># dynamic binding → Circle#draw is called</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</section>
<section class="print-section">
<h2 id="section-viii-functional-programming-—-scheme" tabindex="-1"><a class="header-anchor" href="#section-viii-functional-programming-—-scheme"><span>Section VIII. Functional Programming — Scheme</span></a></h2>
<p>Binary tree representation: <code v-pre>(value left right)</code> where <code v-pre>'()</code> = empty tree.</p>
<ul>
<li><code v-pre>(CAR t)</code> → root value</li>
<li><code v-pre>(CADR t)</code> → left subtree</li>
<li><code v-pre>(CADDR t)</code> → right subtree</li>
</ul>
</section>
<section class="print-section">
<h3 id="a-count-nodes-—-total-number-of-nodes" tabindex="-1"><a class="header-anchor" href="#a-count-nodes-—-total-number-of-nodes"><span>(a) count-nodes — total number of nodes</span></a></h3>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">count-nodes</span> t<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">IF</span> <span class="token punctuation">(</span><span class="token function">NULL?</span> t<span class="token punctuation">)</span></span>
<span class="line">      <span class="token number">0</span></span>
<span class="line">      <span class="token punctuation">(</span><span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">         <span class="token punctuation">(</span><span class="token function">count-nodes</span> <span class="token punctuation">(</span><span class="token function">CADR</span> t<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">         <span class="token punctuation">(</span><span class="token function">count-nodes</span> <span class="token punctuation">(</span><span class="token function">CADDR</span> t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Logic:</strong> Base case: empty tree has 0 nodes. Recursive case: 1 (current node) + nodes in left subtree + nodes in right subtree.</p>
</section>
<section class="print-section">
<h3 id="b-tree-height-—-height-of-the-tree" tabindex="-1"><a class="header-anchor" href="#b-tree-height-—-height-of-the-tree"><span>(b) tree-height — height of the tree</span></a></h3>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">tree-height</span> t<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">IF</span> <span class="token punctuation">(</span><span class="token function">NULL?</span> t<span class="token punctuation">)</span></span>
<span class="line">      <span class="token number">0</span></span>
<span class="line">      <span class="token punctuation">(</span><span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">(</span><span class="token function">MAX</span> <span class="token punctuation">(</span><span class="token function">tree-height</span> <span class="token punctuation">(</span><span class="token function">CADR</span> t<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">(</span><span class="token function">tree-height</span> <span class="token punctuation">(</span><span class="token function">CADDR</span> t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Logic:</strong> Base case: empty tree has height 0. Recursive case: 1 + the maximum of the heights of the left and right subtrees.</p>
</section>
<section class="print-section">
<h3 id="c-tree-max-—-maximum-value-in-the-tree" tabindex="-1"><a class="header-anchor" href="#c-tree-max-—-maximum-value-in-the-tree"><span>(c) tree-max — maximum value in the tree</span></a></h3>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> <span class="token punctuation">(</span><span class="token function">tree-max</span> t<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token function">IF</span> <span class="token punctuation">(</span><span class="token function">NULL?</span> t<span class="token punctuation">)</span></span>
<span class="line">      <span class="token number">-999999</span></span>
<span class="line">      <span class="token punctuation">(</span><span class="token function">MAX</span> <span class="token punctuation">(</span><span class="token function">CAR</span> t<span class="token punctuation">)</span></span>
<span class="line">           <span class="token punctuation">(</span><span class="token function">tree-max</span> <span class="token punctuation">(</span><span class="token function">CADR</span> t<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">           <span class="token punctuation">(</span><span class="token function">tree-max</span> <span class="token punctuation">(</span><span class="token function">CADDR</span> t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Logic:</strong> Base case: empty tree returns -999999 (sentinel — smaller than any real value). Recursive case: the maximum of the root value, the max of the left subtree, and the max of the right subtree.</p>
<p><strong>Example tree and expected outputs:</strong></p>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token punctuation">(</span><span class="token function">DEFINE</span> example-tree <span class="token punctuation">'</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token number">4</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token number">8</span> <span class="token punctuation">(</span><span class="token number">7</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">;;</span></span>
<span class="line"><span class="token comment">;;       5</span></span>
<span class="line"><span class="token comment">;;      / \</span></span>
<span class="line"><span class="token comment">;;     3   8</span></span>
<span class="line"><span class="token comment">;;    / \ /</span></span>
<span class="line"><span class="token comment">;;   1  4 7</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">count-nodes</span> example-tree<span class="token punctuation">)</span>  <span class="token comment">; → 6</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">tree-height</span> example-tree<span class="token punctuation">)</span>  <span class="token comment">; → 3</span></span>
<span class="line"><span class="token punctuation">(</span><span class="token function">tree-max</span> example-tree<span class="token punctuation">)</span>     <span class="token comment">; → 8</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</section>
<section class="print-section">
<h2 id="section-ix-haskell-—-foldr" tabindex="-1"><a class="header-anchor" href="#section-ix-haskell-—-foldr"><span>Section IX. Haskell — foldr</span></a></h2>
</section>
<section class="print-section">
<h3 id="a-step-by-step-evaluation" tabindex="-1"><a class="header-anchor" href="#a-step-by-step-evaluation"><span>(a) Step-by-step evaluation</span></a></h3>
<p>Recall: <code v-pre>foldr f v [x1, x2, x3] = f x1 (f x2 (f x3 v))</code></p>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token builtin">foldr</span> <span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">_</span> <span class="token hvariable">n</span> <span class="token operator">-></span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token hvariable">n</span><span class="token punctuation">)</span> <span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- expand using the definition of foldr:</span></span>
<span class="line"><span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">_</span> <span class="token hvariable">n</span> <span class="token operator">-></span> <span class="token number">1</span><span class="token operator">+</span><span class="token hvariable">n</span><span class="token punctuation">)</span> <span class="token number">10</span> <span class="token punctuation">(</span><span class="token builtin">foldr</span> <span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">_</span> <span class="token hvariable">n</span> <span class="token operator">-></span> <span class="token number">1</span><span class="token operator">+</span><span class="token hvariable">n</span><span class="token punctuation">)</span> <span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">_</span> <span class="token hvariable">n</span> <span class="token operator">-></span> <span class="token number">1</span><span class="token operator">+</span><span class="token hvariable">n</span><span class="token punctuation">)</span> <span class="token number">10</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">_</span> <span class="token hvariable">n</span> <span class="token operator">-></span> <span class="token number">1</span><span class="token operator">+</span><span class="token hvariable">n</span><span class="token punctuation">)</span> <span class="token number">20</span> <span class="token punctuation">(</span><span class="token builtin">foldr</span> <span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">_</span> <span class="token hvariable">n</span> <span class="token operator">-></span> <span class="token number">1</span><span class="token operator">+</span><span class="token hvariable">n</span><span class="token punctuation">)</span> <span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">_</span> <span class="token hvariable">n</span> <span class="token operator">-></span> <span class="token number">1</span><span class="token operator">+</span><span class="token hvariable">n</span><span class="token punctuation">)</span> <span class="token number">10</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">_</span> <span class="token hvariable">n</span> <span class="token operator">-></span> <span class="token number">1</span><span class="token operator">+</span><span class="token hvariable">n</span><span class="token punctuation">)</span> <span class="token number">20</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">_</span> <span class="token hvariable">n</span> <span class="token operator">-></span> <span class="token number">1</span><span class="token operator">+</span><span class="token hvariable">n</span><span class="token punctuation">)</span> <span class="token number">30</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- evaluate innermost first:</span></span>
<span class="line"><span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">_</span> <span class="token hvariable">n</span> <span class="token operator">-></span> <span class="token number">1</span><span class="token operator">+</span><span class="token hvariable">n</span><span class="token punctuation">)</span> <span class="token number">10</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">_</span> <span class="token hvariable">n</span> <span class="token operator">-></span> <span class="token number">1</span><span class="token operator">+</span><span class="token hvariable">n</span><span class="token punctuation">)</span> <span class="token number">20</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">_</span> <span class="token hvariable">n</span> <span class="token operator">-></span> <span class="token number">1</span><span class="token operator">+</span><span class="token hvariable">n</span><span class="token punctuation">)</span> <span class="token number">10</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">_</span> <span class="token hvariable">n</span> <span class="token operator">-></span> <span class="token number">1</span><span class="token operator">+</span><span class="token hvariable">n</span><span class="token punctuation">)</span> <span class="token number">20</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">_</span> <span class="token hvariable">n</span> <span class="token operator">-></span> <span class="token number">1</span><span class="token operator">+</span><span class="token hvariable">n</span><span class="token punctuation">)</span> <span class="token number">10</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">_</span> <span class="token hvariable">n</span> <span class="token operator">-></span> <span class="token number">1</span><span class="token operator">+</span><span class="token hvariable">n</span><span class="token punctuation">)</span> <span class="token number">10</span> <span class="token number">2</span></span>
<span class="line"><span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span></span>
<span class="line"><span class="token operator">=</span> <span class="token number">3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Final result: 3</strong></p>
</section>
<section class="print-section">
<h3 id="b-equivalent-standard-function" tabindex="-1"><a class="header-anchor" href="#b-equivalent-standard-function"><span>(b) Equivalent standard function</span></a></h3>
<p>This is equivalent to the <strong><code v-pre>length</code></strong> function. The lambda <code v-pre>(\_ n -&gt; 1 + n)</code> ignores the actual list element (<code v-pre>_</code>) and increments the accumulator <code v-pre>n</code> by 1 for each element. Thus it counts the total number of elements in the list.</p>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token builtin">length</span> <span class="token operator">=</span> <span class="token builtin">foldr</span> <span class="token punctuation">(</span><span class="token operator">\</span><span class="token hvariable">_</span> <span class="token hvariable">n</span> <span class="token operator">-></span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token hvariable">n</span><span class="token punctuation">)</span> <span class="token number">0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
</section>
<section class="print-section">
<h2 id="section-x-ml-—-pattern-matching" tabindex="-1"><a class="header-anchor" href="#section-x-ml-—-pattern-matching"><span>Section X. ML — Pattern Matching</span></a></h2>
<p><strong>Original (if-then-else):</strong></p>
<div class="language-sml line-numbers-mode" data-highlighter="prismjs" data-ext="sml"><pre v-pre><code class="language-sml"><span class="line"><span class="token keyword">fun</span> <span class="token function">length</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span> <span class="token operator">=</span></span>
<span class="line">    <span class="token keyword">if</span> lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">then</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">else</span> <span class="token number">1</span> <span class="token operator">+</span> length<span class="token punctuation">(</span>tl lst<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Rewritten with pattern matching:</strong></p>
<div class="language-sml line-numbers-mode" data-highlighter="prismjs" data-ext="sml"><pre v-pre><code class="language-sml"><span class="line"><span class="token keyword">fun</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">  <span class="token operator">|</span> length<span class="token punctuation">(</span>h <span class="token operator">::</span> t<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> length<span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Explanation:</strong></p>
<ul>
<li>The first clause <code v-pre>length([])</code> matches the empty list and returns 0.</li>
<li>The second clause <code v-pre>length(h :: t)</code> uses the <code v-pre>::</code> (cons) pattern to decompose the list into its head <code v-pre>h</code> and tail <code v-pre>t</code>. The body returns <code v-pre>1 + length(t)</code>, recursively counting the tail.</li>
<li>The head variable <code v-pre>h</code> is not used in the body (it could be replaced with <code v-pre>_</code>).</li>
<li>Pattern matching makes the base case and recursive case structurally explicit and is the idiomatic ML style.</li>
</ul>
<hr>
<p><em>End of Answer Key</em></p>
</section>
</div></template>


