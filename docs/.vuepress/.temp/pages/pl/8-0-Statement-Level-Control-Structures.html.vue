<template><div><h1 id="_8-0-statement-level-control-structures" tabindex="-1"><a class="header-anchor" href="#_8-0-statement-level-control-structures"><span>8.0. Statement Level Control Structures</span></a></h1>
<DateMeta />
<h2 id="today-s-contents" tabindex="-1"><a class="header-anchor" href="#today-s-contents"><span>Today’s Contents</span></a></h2>
<ul>
<li>Statement-Level Control Structures</li>
<li>Selection Statements</li>
<li>Iterative Statements</li>
<li>Unconditional Branching</li>
<li>Guarded Commands</li>
</ul>
<h2 id="statement-level-control-structures" tabindex="-1"><a class="header-anchor" href="#statement-level-control-structures"><span>Statement-Level Control Structures</span></a></h2>
<ul>
<li>Imperative: expressions + assignments</li>
<li>Functional: expression + functions</li>
<li>Without control statements</li>
<li>Difficult to make programs flexible and powerful</li>
<li>Early, single control (<code v-pre>goto</code>) was used</li>
<li>Nowadays, selection and iteration statements</li>
<li>More control statements → writability enhanced but readability restricted</li>
<li>What is the best collection of control statements?</li>
<li>[Issue] Should the control structure have multiple entries?</li>
<li>Multiple entries increase flexibility but decrease readability</li>
<li>Inclusion of <code v-pre>goto</code> → cause multiple exits</li>
</ul>
<h2 id="selection-statements" tabindex="-1"><a class="header-anchor" href="#selection-statements"><span>Selection Statements</span></a></h2>
<ul>
<li>Means of choosing between two or more paths</li>
<li>Two-way selection statements</li>
<li>Multiple-selection statements</li>
</ul>
<h3 id="two-way-selection-statements" tabindex="-1"><a class="header-anchor" href="#two-way-selection-statements"><span>Two-way selection statements</span></a></h3>
<ul>
<li>General form</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">if control_expression</span>
<span class="line">then clause</span>
<span class="line">else clause</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Design issues</li>
<li>What is the form and type of the expression that controls the selection?</li>
<li>How are the <code v-pre>then</code> and <code v-pre>else</code> clauses specified?</li>
<li>How should the meaning of nested selectors be specified?</li>
<li>Design issue: What is the form and type of the expression that controls the selection?</li>
<li>Without <code v-pre>then</code> reserved word → parentheses is needed</li>
<li>Without Boolean data type → arithmetic expressions are used</li>
<li><code v-pre>if</code> (어떤 expression??) 괄호가 필요한가? <code v-pre>then</code> keyword?</li>
<li>C / Java: → 반드시 <code v-pre>boolean</code> (또는 <code v-pre>boolean</code>처럼 해석 가능한 값)</li>
<li>Design issue: How are the <code v-pre>then</code> and <code v-pre>else</code> clauses specified?</li>
<li>[Perl] use block <code v-pre>{}</code></li>
</ul>
<div class="language-perl line-numbers-mode" data-highlighter="prismjs" data-ext="perl"><pre v-pre><code class="language-perl"><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$x</span> <span class="token operator">></span> <span class="token variable">$y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token variable">$x</span> <span class="token operator">=</span> $<span class="token regex">y;</span>
<span class="line">    print "case 1";</span>
<span class="line">} else {</span>
<span class="line">    print "case 2";</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Single or compound statements</li>
<li>[Perl] Highly recommended to use compound statement -&gt; 모호성 제거</li>
<li>Clause form have implications on meaning of nested selectors</li>
<li>[C] use braces</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">></span> y<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    x <span class="token operator">=</span> y<span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"case 1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>[Python] use indentation</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">if</span> x <span class="token operator">></span> y <span class="token punctuation">:</span></span>
<span class="line">    x <span class="token operator">=</span> y</span>
<span class="line">    <span class="token keyword">print</span> <span class="token string">"case 1"</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>[Ada] use <code v-pre>end if</code></li>
</ul>
<div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token keyword">if</span> <span class="token variable">x</span> <span class="token operator">></span> <span class="token variable">y</span> <span class="token keyword">then</span></span>
<span class="line">    <span class="token variable">x</span> <span class="token operator">:=</span> <span class="token variable">y</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token variable">Put</span><span class="token punctuation">(</span><span class="token string">"case 1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Python → indentation으로 구조 강제 → 모호성 없음</li>
<li>Ada → <code v-pre>end if</code>로 명확히 구분</li>
<li>Perl → block <code v-pre>{}</code> 사용 권장 → 사실상 문제 회피</li>
<li>Design issue: How should the meaning of nested selectors be specified?</li>
<li>ambiguous “<code v-pre>if-then-else</code>”</li>
<li>When <code v-pre>&lt;stmt&gt;</code> → <code v-pre>&lt;if_stmt&gt;</code>, two parse trees are possible with the same sentential form.</li>
<li>[Java] ambiguous “<code v-pre>if-then-else</code>”</li>
</ul>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">        result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line">    result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Indentation is matter of Python and F#</li>
<li>Use indicator (<code v-pre>{}</code>) to resolve ambiguity</li>
<li>[Java] unambiguous “<code v-pre>if-then-else</code>”</li>
</ul>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">        result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line">    result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Force to match with the first</li>
<li>All <code v-pre>then</code> and <code v-pre>else</code> clauses are compound (ex. Perl)</li>
<li>matched with the first:</li>
</ul>
<div class="language-perl line-numbers-mode" data-highlighter="prismjs" data-ext="perl"><pre v-pre><code class="language-perl"><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>matched with the second:</li>
</ul>
<div class="language-perl line-numbers-mode" data-highlighter="prismjs" data-ext="perl"><pre v-pre><code class="language-perl"><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Use special word (ex. <code v-pre>end</code>) (Fortran 95+, Ada, Ruby, Lua)</li>
<li>[Ruby] use <code v-pre>end</code></li>
</ul>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">if</span> a <span class="token operator">></span> b <span class="token keyword">then</span></span>
<span class="line">    sum <span class="token operator">=</span> sum <span class="token operator">+</span> a</span>
<span class="line">    acount <span class="token operator">=</span> acount <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line">    sum <span class="token operator">=</span> sum <span class="token operator">+</span> b</span>
<span class="line">    bcount <span class="token operator">=</span> bcount <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>matched with the first:</li>
</ul>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">if</span> sum <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">then</span></span>
<span class="line">    <span class="token keyword">if</span> count <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">then</span></span>
<span class="line">        result <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line">    result <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>matched with the second:</li>
</ul>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">if</span> sum <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">then</span></span>
<span class="line">    <span class="token keyword">if</span> count <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">then</span></span>
<span class="line">        result <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">else</span></span>
<span class="line">        result <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>언어특징 요약</li>
<li>C/Java: <code v-pre>{}</code>로 묶어서 해결</li>
<li>Python: indentation으로 해결</li>
<li>Ada/Ruby: <code v-pre>end</code>로 구조 명시</li>
<li>Selector expressions</li>
<li>An expression refers to a statement that can be evaluated as a value.</li>
<li>Return a value</li>
<li>Statement is the smallest independent element that makes up a program, that is, it is the basic unit and minimum execution unit</li>
<li>Expression is included in statement</li>
<li>In case of functional languages (ML, F#, LISP)</li>
<li>There should be <code v-pre>else</code> because it is expression (return a value)</li>
<li>[F#]</li>
</ul>
<div class="language-fsharp line-numbers-mode" data-highlighter="prismjs" data-ext="fs"><pre v-pre><code class="language-fsharp"><span class="line"><span class="token keyword">let</span> y <span class="token operator">=</span></span>
<span class="line">    <span class="token keyword">if</span> x <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">then</span> x</span>
<span class="line">    <span class="token keyword">else</span> <span class="token number">2</span> <span class="token operator">*</span> x<span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>if</code>가 expression 즉: 값을 반드시 반환해야 함</li>
</ul>
<h3 id="multiple-selection-statements" tabindex="-1"><a class="header-anchor" href="#multiple-selection-statements"><span>Multiple-selection statements</span></a></h3>
<ul>
<li>Allows the selection of one of any number of statements (generalized)</li>
<li>Two-way selection (<code v-pre>if-else</code>) 여러 개보다 구조적, 가독성 좋음</li>
<li>Possible to implement it using two-way selectors and <code v-pre>goto</code>, but cumbersome and unreliable (길어짐, 가독성 낮아지고, 실수 가능성 올라감)</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Design issues</li>
<li>What is the form and type of the expression that controls the selection?</li>
<li>How are the case values specified?</li>
<li>How are the selectable segments specified?</li>
<li>How should unrepresented selector expression values be handled, if at all?</li>
<li>Is execution flow through the structure restricted to include just a single selectable segment?</li>
<li>General form</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">switch</span> <span class="token punctuation">(</span>expression<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> constant_expression1<span class="token operator">:</span> statement1<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token keyword">case</span> constantn<span class="token operator">:</span> statement_n<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token keyword">default</span><span class="token operator">:</span> statementn <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>expression</code> and <code v-pre>constant_expression</code> can be discrete type (integer, character and enum types)</li>
<li>Expression의 형태/ 타입 --&gt; 타입 제한 vs 유연성이 이슈</li>
<li>C/Java: <code v-pre>int</code>, <code v-pre>enum</code> 등 제한적</li>
<li>Python: 거의 모든 타입 가능</li>
<li>Constant_expression의값 --&gt; 단순 값 vs 복잡한 패턴</li>
<li>C: 상수</li>
<li>Pascal: 범위</li>
<li>Python: 패턴</li>
<li>Selectable statements can be sequences, compound or block (단일 statement or 여러 statement (block))</li>
<li><code v-pre>[default]</code> is for unrepresented values</li>
<li>Execution flow through the structure</li>
<li>No implicit branch out (Statement in <code v-pre>default</code> always is executed)</li>
<li>Explicit branch out should be used: <code v-pre>break</code> (restricted <code v-pre>goto</code>)</li>
<li>[C-based]</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">switch</span> <span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span> odd <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">            sumodd <span class="token operator">+=</span> index<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span> even <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">            sumeven <span class="token operator">+=</span> index<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Error in switch, index = %d\n"</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>실행 흐름: <code v-pre>case 1</code> → 실행 → 그 다음 자동으로 <code v-pre>case 2</code>, <code v-pre>default</code>까지 다 실행 (implicit branch out 없음, fall-through 발생)</li>
<li>Convenient to allow control to flow from one selectable code segment to another</li>
<li><code v-pre>case 1</code>, <code v-pre>2</code> are empty, so control flows are changed to <code v-pre>case 3</code>, <code v-pre>4</code></li>
<li>Reliability problem when location of <code v-pre>break</code> is inadequate</li>
<li>코드 공유 가능 --&gt; case grouping 쉽게 가능</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">switch</span> <span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span> odd <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">            sumodd <span class="token operator">+=</span> index<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span> even <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">            sumeven <span class="token operator">+=</span> index<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Error in switch, index = %d\n"</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>No restrictions on the placement of the case expressions</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">switch</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">prime</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span> <span class="token keyword">case</span> <span class="token number">5</span><span class="token operator">:</span> <span class="token keyword">case</span> <span class="token number">7</span><span class="token operator">:</span></span>
<span class="line">                <span class="token function">process_prime</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">else</span></span>
<span class="line">            <span class="token keyword">case</span> <span class="token number">4</span><span class="token operator">:</span> <span class="token keyword">case</span> <span class="token number">6</span><span class="token operator">:</span> <span class="token keyword">case</span> <span class="token number">8</span><span class="token operator">:</span> <span class="token keyword">case</span> <span class="token number">9</span><span class="token operator">:</span> <span class="token keyword">case</span> <span class="token number">10</span><span class="token operator">:</span></span>
<span class="line">                <span class="token function">process_composite</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>→ 코드 읽기 어려움 → 구조 깨짐 → powerful but dangerous</p>
</li>
<li>
<p>Language Specific Designs</p>
</li>
<li>
<p>[C#] Disallows the implicit execution of more than one segment (implicit fall-through 금지)</p>
</li>
<li>
<p>Explicit unconditional branch statement: either a <code v-pre>break</code> or <code v-pre>goto case</code></p>
</li>
<li>
<p>Expression and case can be string</p>
</li>
</ul>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code class="language-csharp"><span class="line"><span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token keyword">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span></span>
<span class="line">        Negatives<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">        Zeros<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">goto</span> <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span></span>
<span class="line">        Positives<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token punctuation">:</span></span>
<span class="line">        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Error in switch \n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>변경 이유 = 안전성</li>
<li>C 문제: <code v-pre>break</code> 빠뜨리면 버그, 의도치 않은 fall-through</li>
<li>C# 해결: 무조건 한 <code v-pre>case</code>만 실행, 여러 개 실행하려면 프로그래머가 명시적으로 작성</li>
<li>[PHP] Allow more type flexibility (including scalar, string, double precision)</li>
<li>타입이 달라도 값이 같으면 true로 보는 비교 (위험)</li>
</ul>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php"><pre v-pre><code class="language-php"><span class="line"><span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token string double-quoted-string">"10"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token number">10</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">echo</span> <span class="token string double-quoted-string">"match"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>--&gt; 실행됨</li>
<li>[Ruby] Multiple-selection constructs</li>
</ul>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">case</span></span>
<span class="line"><span class="token keyword">when</span> Boolean_expression <span class="token keyword">then</span> expression</span>
<span class="line"><span class="token operator">...</span></span>
<span class="line"><span class="token keyword">when</span> Boolean_expression <span class="token keyword">then</span> expression</span>
<span class="line"><span class="token punctuation">[</span><span class="token keyword">else</span> expression<span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line">leap <span class="token operator">=</span> <span class="token keyword">case</span></span>
<span class="line"><span class="token keyword">when</span> year <span class="token operator">%</span> <span class="token number">400</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">then</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token keyword">when</span> year <span class="token operator">%</span> <span class="token number">100</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">then</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token keyword">else</span> year <span class="token operator">%</span> <span class="token number">4</span> <span class="token operator">==</span> <span class="token number">0</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>Ruby의 <code v-pre>case</code>는 fall-through 없이 하나의 조건만 실행하며, expression으로 값을 반환</p>
</li>
<li>
<p>Implementation</p>
</li>
<li>
<p>Translate: Selectable segments (n label) precedes branches</p>
</li>
<li>
<p>Put pairs of case value and label into table</p>
</li>
<li>
<p>Use linear search for execution</p>
</li>
<li>
<p>When n is large, hash table can be used</p>
</li>
<li>
<p>If case values are ranges of values, binary search table can be used</p>
</li>
<li>
<p>If range is narrow → array (bin): very fast</p>
</li>
<li>
<p>Determining methods require costs too</p>
</li>
<li>
<p><code v-pre>switch</code>는 “문법”일 뿐 실제로는: 비교하고 점프하는 구조</p>
</li>
<li>
<p><code v-pre>switch</code> 문은 내부적으로 조건 비교와 분기 (<code v-pre>goto</code>)로 구현될 수 있음</p>
</li>
<li>
<p><code v-pre>case</code> 값과 label을 매핑하여 분기</p>
</li>
<li>
<p>Multiple-selection statements using <code v-pre>if</code></p>
</li>
<li>
<p><code v-pre>switch</code>/<code v-pre>case</code> statement is inadequate when decision is based on Boolean expression</p>
</li>
<li>
<p>Nested two-way selectors or use special word (<code v-pre>else-if</code> clause)</p>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">if</span> count <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">:</span>w</span>
<span class="line">    bag1 <span class="token operator">=</span> <span class="token boolean">True</span></span>
<span class="line"><span class="token keyword">elif</span> count <span class="token operator">&lt;</span> <span class="token number">100</span> <span class="token punctuation">:</span></span>
<span class="line">    bag2 <span class="token operator">=</span> <span class="token boolean">True</span></span>
<span class="line"><span class="token keyword">elif</span> count <span class="token operator">&lt;</span> <span class="token number">1000</span> <span class="token punctuation">:</span></span>
<span class="line">    bag3 <span class="token operator">=</span> <span class="token boolean">True</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">if</span> count <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">:</span></span>
<span class="line">    bag1 <span class="token operator">=</span> <span class="token boolean">True</span></span>
<span class="line"><span class="token keyword">else</span> <span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">if</span> count <span class="token operator">&lt;</span> <span class="token number">100</span> <span class="token punctuation">:</span></span>
<span class="line">        bag2 <span class="token operator">=</span> <span class="token boolean">True</span></span>
<span class="line">    <span class="token keyword">else</span> <span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> count <span class="token operator">&lt;</span> <span class="token number">1000</span> <span class="token punctuation">:</span></span>
<span class="line">            bag3 <span class="token operator">=</span> <span class="token boolean">True</span></span>
<span class="line">        <span class="token keyword">else</span> <span class="token punctuation">:</span></span>
<span class="line">            bag4 <span class="token operator">=</span> <span class="token boolean">True</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>It is not easy to represent above using switch statement -&gt; So, <code v-pre>else-if</code> statement is not redundant</li>
<li>[Scheme] multiple selector is based on mathematical conditional expressions</li>
<li><code v-pre>COND</code> function</li>
<li>More than one predicate to be true (첫 번째 true만 실행)</li>
<li>Value is returned as the value of <code v-pre>COND</code>, so should have <code v-pre>ELSE</code></li>
</ul>
<h2 id="iterative-statements" tabindex="-1"><a class="header-anchor" href="#iterative-statements"><span>Iterative Statements</span></a></h2>
<ul>
<li>Loop, essence of programming</li>
<li>Design issues</li>
<li>How is the iteration controlled? (Logical, counting, or a combination of the two)</li>
<li>Where should the control mechanism appear in the loop statement? (Top or bottom of the loop: Pretest (<code v-pre>while</code>) - iteration statement (<code v-pre>for</code>) - posttest (<code v-pre>do-while</code>))</li>
<li>Categories</li>
<li>Counter-controlled loops</li>
<li>Logically controlled loops</li>
<li>User-located loop control mechanisms</li>
<li>Iteration based on data structures</li>
</ul>
<h3 id="counter-controlled-loops" tabindex="-1"><a class="header-anchor" href="#counter-controlled-loops"><span>Counter-controlled loops</span></a></h3>
<ul>
<li>Controlled by counter values (Loop parameters: initial and terminal values and stepsize)</li>
<li>More complex than logically controlled but more demanding</li>
<li>Design issues</li>
<li>What are the type and scope of the loop variable? (Integer, enum, character, floating-point)</li>
<li>Should it be legal for the loop variable or loop parameters to be changed in the loop, and if so, does the change affect loop control? (If changed, difficult to understand, complex)</li>
<li>Should the loop parameters be evaluated only once, or once for every iteration? (If evaluated not once, complex but flexible)</li>
<li>[Ada] Counter-controlled loops</li>
<li><code v-pre>discrete_range</code> can be: <code v-pre>1..10</code> or <code v-pre>Monday..Friday</code></li>
<li><code v-pre>[reverse]</code>: option for reverse order</li>
<li>Variable (<code v-pre>Count</code>) is implicitly declared</li>
</ul>
<div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token keyword">for</span> <span class="token variable">variable</span> <span class="token keyword">in</span> [<span class="token keyword">reverse</span>] <span class="token variable">discrete_range</span> <span class="token keyword">loop</span></span>
<span class="line">    <span class="token punctuation">..</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token keyword">loop</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>operational semantics</li>
</ul>
<div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token variable">Count</span> <span class="token punctuation">:</span> <span class="token variable">Float</span> <span class="token operator">:=</span> <span class="token number">1.35</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token variable">Count</span> <span class="token keyword">in</span> <span class="token number">1</span><span class="token punctuation">..</span><span class="token number">10</span> <span class="token keyword">loop</span></span>
<span class="line">    <span class="token variable">Sum</span> <span class="token operator">:=</span> <span class="token variable">Sum</span> <span class="token operator">+</span> <span class="token variable">Count</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token keyword">loop</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>특징: Loop 변수 자동 선언, 외부 변수와 독립, 값 변경 불가, 범위 고정, <code v-pre>reverse</code> 가능 → 매우 안전, 이해 쉬움 → loop control이 절대 깨지지 않음</p>
</li>
<li>
<p>Outside <code v-pre>Count</code> is unaffected by loop variable <code v-pre>Count</code></p>
</li>
<li>
<p>Evaluated only once (in each iteration) → not affect loop control</p>
</li>
<li>
<p>[C-based] Counter-controlled loops</p>
</li>
<li>
<p>loop body can be single, compound or null statement</p>
</li>
<li>
<p><code v-pre>expression_1</code>: initialization and evaluated only once</p>
</li>
<li>
<p><code v-pre>expression_2</code>: loop control and evaluated before each execution (If absent, true → infinite loop)</p>
</li>
<li>
<p><code v-pre>expression_3</code>: executed after each execution (loop counter)</p>
</li>
<li>
<p>특징: 매우 유연, 변수 여러 개 가능, 조건 복잡하게 가능 → 하지만: 복잡 + 오류 가능</p>
</li>
<li>
<p>Multiple expressions and multiple loop variables increase flexibility</p>
</li>
<li>
<p>[C99 and C++]</p>
</li>
<li>
<p>Boolean expression is possible</p>
</li>
<li>
<p>Variable definitions is possible</p>
</li>
<li>
<p>Variables in loop parameters can be changed</p>
</li>
<li>
<p>Less reliable, more complex than Ada (loop control 깨짐)</p>
</li>
<li>
<p>[Python] Counter-controlled loops</p>
</li>
<li>
<p>value of <code v-pre>loop_variable</code> is from <code v-pre>object</code></p>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">for</span> loop_variable <span class="token keyword">in</span> <span class="token builtin">object</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>특징: 카운터 없음, iterable 기반, 값을 생성해서 순회</li>
<li><code v-pre>range(a,b,c)</code> is a function to make sequences starting from <code v-pre>a</code> to <code v-pre>b-1</code> with stepsize <code v-pre>c</code></li>
<li>Functional Languages</li>
<li>There is no counter variable in functional language -&gt; Use recursion</li>
<li>Counter can be a parameter for function</li>
<li>[F#] <code v-pre>rec</code>: denote recursive function</li>
</ul>
<div class="language-fsharp line-numbers-mode" data-highlighter="prismjs" data-ext="fs"><pre v-pre><code class="language-fsharp"><span class="line"><span class="token keyword">let</span> <span class="token keyword">rec</span> forLoop loopBody reps <span class="token operator">=</span></span>
<span class="line">    <span class="token keyword">if</span> reps <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token keyword">then</span></span>
<span class="line">        <span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">else</span></span>
<span class="line">        <span class="token function">loopBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        forLoop loopBody<span class="token punctuation">,</span> <span class="token punctuation">(</span>reps <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Counter-controlled loops 요약</li>
<li>Counter-controlled loop는 초기값, 종료조건, 증가량으로 반복을 제어한다.</li>
<li>주요 설계 이슈: loop 변수 타입과 scope, loop 변수 변경 가능 여부, loop 조건 평가 시점</li>
<li>Ada는 안전성을 위해 loop 변수를 고정한다.</li>
<li>C는 유연성을 제공하지만 복잡성과 오류 가능성이 높다.</li>
<li>Python은 iterable 기반 반복을 사용한다.</li>
<li>함수형 언어는 recursion으로 반복을 구현한다.</li>
</ul>
<h3 id="logically-controlled-loops" tabindex="-1"><a class="header-anchor" href="#logically-controlled-loops"><span>Logically controlled loops</span></a></h3>
<ul>
<li>Repetition control is based on Boolean expression</li>
<li>Design issues</li>
<li>Should the control be pretest (0번 실행 가능) or posttest (최소 1번 보장)? (<code v-pre>while</code> or <code v-pre>do while</code>)</li>
<li>Should the logically controlled loop be a special form of a counting loop or a separate statement?</li>
<li>operational semantics &amp; code example</li>
<li>[Java] Similar to C and C++, except that control expression must be boolean type</li>
</ul>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">while</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token comment">// X</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// O</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>[F#] <code v-pre>rec</code>: denote recursive function</li>
<li>Logically controlled loops 요약</li>
<li>Logically controlled loop는 Boolean 조건에 의해 반복을 제어한다.</li>
<li>pretest loop (<code v-pre>while</code>)는 조건을 먼저 검사하며, 0번 실행될 수 있다.</li>
<li>posttest loop (<code v-pre>do-while</code>)는 조건을 나중에 검사하며, 최소 1번 실행된다.</li>
<li>일부 언어에서는 logically controlled loop를 counting loop의 특수 형태로 보기도 한다.</li>
<li>함수형 언어에서는 recursion을 통해 이를 구현한다.</li>
</ul>
<h3 id="user-located-loop-control-mechanism" tabindex="-1"><a class="header-anchor" href="#user-located-loop-control-mechanism"><span>User-located loop control mechanism</span></a></h3>
<ul>
<li>Programmer to choose a location for loop control other than the top or bottom of the loop body</li>
<li>Comparison of control structure:</li>
<li>Integral part of the exit (조건 자체가 exit을 결정, 구조적으로 깔끔, exit 위치 = 항상 루프 조건)</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">while</span> <span class="token punctuation">(</span>x <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Separate condition and exit (조건과 exit이 분리됨, exit 위치가 중간으로 이동 가능)</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">while</span> <span class="token punctuation">(</span>true<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Design issues: Should only one loop body be exited, or can enclosing loops also be exited?</li>
<li>하나만 탈출 (기본) → 안전, 이해 쉬움</li>
<li>여러 loop 탈출 허용 → 강력, 부 <code v-pre>goto</code> 느낌 남 → 가독성 ↓</li>
<li><code v-pre>break</code> and <code v-pre>continue</code></li>
<li><code v-pre>break</code>: termination</li>
<li><code v-pre>continue</code>: skip</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">while</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getnext</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span></span>
<span class="line">    sum <span class="token operator">+=</span> value<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Multiple exits are possible → decrease readability</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">while</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getnext</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    sum <span class="token operator">+=</span> value<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>It is okay, location of break is the first statement after loop</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Fulfill a common need for <code v-pre>goto</code> statements through a highly restricted branch statement (<code v-pre>goto</code>는 위험, 대신 제한된 형태 제공)</li>
</ul>
<h3 id="iteration-based-on-data-structures" tabindex="-1"><a class="header-anchor" href="#iteration-based-on-data-structures"><span>Iteration based on data structures</span></a></h3>
<ul>
<li>진화 과정: 카운터(<code v-pre>for</code>) 중심 → 데이터 중심(<code v-pre>iteration</code>)으로 진화 (값을 직접 세는 게 아니라, 데이터 자체를 순회)</li>
<li>[Fortran] <code v-pre>Do Count = 1, 9, 2</code> (Initial value is 1, last value is 9, step size is 2, Iterator internal function should be called)</li>
<li>[Python] <code v-pre>for count in range [0, 9, 2]:</code> (<code v-pre>range</code> is iterator)</li>
<li>[Ada] subrange can be used (MyRange is used both to declare the array and iterate through the array)</li>
</ul>
<div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token keyword">subtype</span> <span class="token variable">MyRange</span> <span class="token keyword">is</span> <span class="token variable">Integer</span> <span class="token keyword">range</span> <span class="token number">0</span><span class="token punctuation">..</span><span class="token number">99</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">MyArray</span><span class="token punctuation">:</span> <span class="token keyword">array</span> <span class="token punctuation">(</span><span class="token variable">MyRange</span><span class="token punctuation">)</span> <span class="token keyword">of</span> <span class="token variable">Integer</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token variable">Index</span> <span class="token keyword">in</span> <span class="token variable">MyRange</span> <span class="token keyword">loop</span></span>
<span class="line">    <span class="token punctuation">..</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token keyword">loop</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>[C-based] Flexibility (EX: binary tree traversal, <code v-pre>traverse()</code> is iterator)</li>
<li>특징: iterator 직접 구현, traversal 자유</li>
<li>장점: 어떤 구조든 가능</li>
<li>단점: 복잡, 실수 가능</li>
<li>User-defined iteration in OOP (데이터가 “어떻게 순회되는지”를 내부에 숨김)</li>
<li>There are many abstract types → require iterator for each type</li>
<li>[Python] Iterable object</li>
<li><code v-pre>__iter__()</code> returns the iterable object itself.</li>
<li><code v-pre>__next__()</code> returns the value for the next iteration. If there are no more values, a <code v-pre>StopIteration</code> exception can be raised.</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">class</span> <span class="token class-name">MyCounter</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        self<span class="token punctuation">.</span>current <span class="token operator">=</span> low</span>
<span class="line">        self<span class="token punctuation">.</span>high <span class="token operator">=</span> high</span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__iter__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> self</span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__next__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">if</span> self<span class="token punctuation">.</span>current <span class="token operator">></span> self<span class="token punctuation">.</span>high<span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">raise</span> StopIteration</span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            self<span class="token punctuation">.</span>current <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">            <span class="token keyword">return</span> self<span class="token punctuation">.</span>current <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">c <span class="token operator">=</span> MyCounter<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">for</span> i <span class="token keyword">in</span> c<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">' '</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># 실행 결과: 1 2 3 4 5 6 7 8 9 10</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>[Java] enhanced version of for (generic collection)</li>
<li><code v-pre>for (String myElement : myList) { ... }</code> (Referred to as “<code v-pre>foreach</code>”)</li>
<li>[C#] also have generic collection with built-in iterators</li>
</ul>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code class="language-csharp"><span class="line"><span class="token class-name">List<span class="token punctuation">&lt;</span>String<span class="token punctuation">></span></span> names <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>String<span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">names<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"Bob"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">names<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"Carol"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">names<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">"Alice"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token range operator">..</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name">String</span> name <span class="token keyword">in</span> names<span class="token punctuation">)</span></span>
<span class="line">    Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>특징: 내부 iterator 사용, 개발자는 몰라도 됨 → iterator 패턴 내장</li>
<li>[Ruby] There are several iterators</li>
<li>[counter-controlled loop] <code v-pre>times</code>, <code v-pre>upto</code></li>
<li>[iteration for array and hash] <code v-pre>each</code></li>
<li>Block is related to <code v-pre>yield</code>, return the last evaluated value</li>
</ul>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token operator">>></span> <span class="token number">4.</span>times <span class="token punctuation">{</span>puts <span class="token string-literal"><span class="token string">"Hey!"</span></span><span class="token punctuation">}</span></span>
<span class="line">Hey<span class="token operator">!</span></span>
<span class="line">Hey<span class="token operator">!</span></span>
<span class="line">Hey<span class="token operator">!</span></span>
<span class="line">Hey<span class="token operator">!</span> <span class="token operator">=></span> <span class="token number">4</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Object 4, <code v-pre>{}</code>: block, <code v-pre>&gt;&gt;</code>: interactive interpreter</li>
</ul>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token operator">>></span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">=></span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token operator">>></span> list<span class="token punctuation">.</span><span class="token keyword">each</span> <span class="token punctuation">{</span><span class="token operator">|</span>value<span class="token operator">|</span> puts value<span class="token punctuation">}</span></span>
<span class="line"><span class="token number">2</span></span>
<span class="line"><span class="token number">4</span></span>
<span class="line"><span class="token number">6</span></span>
<span class="line"><span class="token number">8</span></span>
<span class="line"><span class="token operator">=></span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Block can have parameter by <code v-pre>|</code></li>
</ul>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token number">1.</span>upto<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">|</span>x<span class="token operator">|</span> print x<span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">" "</span></span><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment"># 실행 결과: 1 2 3 4 5</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>block</code>은 메서드에 전달되는 익명 코드 블록이며, 마지막 expression의 값을 반환</li>
<li><code v-pre>each</code>: go through array, <code v-pre>=&gt;</code>: return value of expressions, <code v-pre>puts</code>: display parameter</li>
<li>Iteration based on data structures 요약</li>
<li>Iteration based on data structures는 카운터가 아닌 데이터 자체를 순회</li>
<li>iterator는 반복을 위한 값을 생성하는 객체</li>
<li>Python은 <code v-pre>__iter__</code>, <code v-pre>__next__</code>를 통해 iteration을 구현</li>
<li>Java/C#은 <code v-pre>foreach</code>를 통해 iterator를 추상화</li>
<li>Ruby는 <code v-pre>block</code> 기반 iteration을 제공</li>
</ul>
<h2 id="unconditional-branching" tabindex="-1"><a class="header-anchor" href="#unconditional-branching"><span>Unconditional Branching</span></a></h2>
<ul>
<li>Transfers execution control to a specified location in the program</li>
<li>Unconditional branch (<code v-pre>goto</code>): very powerful, but makes dangerous, decrease readability and reliability</li>
<li>[Java, Python, Ruby] No <code v-pre>goto</code> statement</li>
<li>[C, C#] (ex) in switch statement (<code v-pre>goto case 1;</code>)</li>
<li>Camouflaged <code v-pre>goto</code> statements are used (<code v-pre>break</code>, <code v-pre>continue</code>)</li>
</ul>
<h2 id="guarded-commands" tabindex="-1"><a class="header-anchor" href="#guarded-commands"><span>Guarded Commands</span></a></h2>
<ul>
<li>To provide control statements supporting a program design during development</li>
<li>Nondeterminism is sometimes needed in concurrent programs (Chap. 13)</li>
<li>For increased clarity in reasoning</li>
<li>[EX] <code v-pre>fi</code>: reserved word for closing</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">if &lt;Boolean expression> -> &lt;statement></span>
<span class="line">[] &lt;Boolean expression> -> &lt;statement></span>
<span class="line">[] ...</span>
<span class="line">[] &lt;Boolean expression> -> &lt;statement></span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Basic Idea: if the order of evaluation is not important, the program should not specify one</li>
<li>Looks like multiple selection but different</li>
<li>All Boolean expressions are evaluated each time (매번 모두 검사)</li>
<li>Nondeterministically choose among true statements</li>
<li>If none of the Boolean expressions is true --&gt; a run-time error + termination</li>
<li>Guarded command는 참인 조건들 중 하나를 비결정적으로 선택하는 선택문</li>
<li>This forces the programmer to consider and list all possibilities.</li>
<li>[EX] Choice of Statement</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">if i = 0 -> sum := sum + i</span>
<span class="line">[] i > j -> sum := sum + j</span>
<span class="line">[] j > i -> sum := sum + i</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>If <code v-pre>i = 0</code> and <code v-pre>j &gt; i</code>, nondeterministically chooses between the first and third</li>
<li>If <code v-pre>i</code> is equal to <code v-pre>j</code> and is not zero, a run-time error occurs</li>
<li>Allow programmer to know that order of execution is irrelevant</li>
<li>핵심 의미: 이건 “실행 방식”이 아니라 프로그램 명세(specification)에 가까움</li>
<li>왜? “어떤 결과가 나오면 된다”, “어떤 경로로 가는지는 중요하지 않다”</li>
<li>장점: reasoning 쉬움, concurrency 모델에 적합, 모든 경우를 명시하게 만듦</li>
<li>단점: 실제 구현 어려움, 디버깅 어려움, 예측 불가</li>
<li>Get desired result without overspecifying (필요 이상으로 실행 순서를 정하지 않음)</li>
<li>if <code v-pre>x==y</code>, no matter which we assign to <code v-pre>max</code> (둘 중 아무거나 선택 가능)</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">if x >= y -> max := x</span>
<span class="line">[] y >= x -> max := y</span>
<span class="line">fi</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>[C]</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code class="language-c"><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">>=</span> y<span class="token punctuation">)</span></span>
<span class="line">    max <span class="token operator">=</span> x<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line">    max <span class="token operator">=</span> y<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>순서 있음, 조건도 한 방향으로 강제됨</p>
<ul>
<li>[EX] Loop can be also guarded</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">do &lt;Boolean expression> -> &lt;statement></span>
<span class="line">[] &lt;Boolean expression> -> &lt;statement></span>
<span class="line">[] ...</span>
<span class="line">[] &lt;Boolean expression> -> &lt;statement></span>
<span class="line">od</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>All Boolean expressions are evaluated on each iteration</li>
<li>If more than one is true --&gt; nondeterministically choose</li>
<li>After, expressions are again evaluated</li>
<li>When all expressions are simultaneously false, the loop terminates</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">do q1 > q2 -> temp := q1; q1 := q2; q2 := temp;</span>
<span class="line">[] q2 > q3 -> temp := q2; q2 := q3; q3 := temp;</span>
<span class="line">[] q3 > q4 -> temp := q3; q3 := q4; q4 := temp;</span>
<span class="line">od</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>계속: <code v-pre>q1 &gt; q2</code>면 swap, <code v-pre>q2 &gt; q3</code>면 swap, <code v-pre>q3 &gt; q4</code>면 swap --&gt; 조건 맞는 것 아무거나 실행</li>
<li>결국: <code v-pre>q1 &lt;= q2 &lt;= q3 &lt;= q4</code> 즉: 정렬됨 --&gt; 어떤 순서로 swap하든, 결과 동일</li>
<li>장점: concurrency 모델에 적합, reasoning 쉬움, 모든 경우 고려하게 만듦</li>
<li>Connection between control statements and program verification is intimate</li>
<li>프로그램 구조가 → 증명 가능성을 결정함</li>
<li>Verification is impossible with <code v-pre>goto</code> statements (흐름이 여기저기 점프, entry/exit 불명확, loop 구조 깨짐, 논리적으로 추적 불가능)</li>
<li>Verification is possible with only selection and logical pretest loops (구조적 흐름, entry/exit 명확, loop invariant 정의 가능)</li>
<li>Verification is relatively simple with only guarded commands</li>
<li>모든 경우 명시: 가능한 모든 경우를 다 써야 함</li>
<li>순서 없음: 조건 집합만 고려 → reasoning 단순</li>
<li>거의 논리식 → 결과</li>
</ul>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<ul>
<li>Statement-Level Control Structures</li>
<li>Selection Statements</li>
<li>Iterative Statements</li>
<li>Unconditional Branching</li>
<li>Guarded Commands</li>
</ul>
</div></template>


