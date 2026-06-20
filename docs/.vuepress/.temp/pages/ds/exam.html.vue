<template><div><section class="print-section">
<h1 id="hw3-analysis-report" tabindex="-1"><a class="header-anchor" href="#hw3-analysis-report"><span>HW3 Analysis Report</span></a></h1>
<DateMeta />
<p>Interpreter Implementation Using Functional Languages<br>
2021024057 김병준</p>
</section>
<section class="print-section">
<h1 id="problem-1-python-like-arithmetic-expression-interpreter" tabindex="-1"><a class="header-anchor" href="#problem-1-python-like-arithmetic-expression-interpreter"><span>Problem 1. Python-like Arithmetic Expression Interpreter</span></a></h1>
</section>
<section class="print-section">
<h2 id="q1-overall-structure-of-the-interpreter" tabindex="-1"><a class="header-anchor" href="#q1-overall-structure-of-the-interpreter"><span>Q1. Overall Structure of the Interpreter</span></a></h2>
<p>본 구현은 Tokenizer, Parser, Evaluator 3단계로 구성되어 있다.</p>
<p>문자열 입력이 Tokenizer를 거쳐 토큰 리스트가 되고, Parser가 이를 AST로 변환한 뒤, Evaluator가 AST를 재귀적으로 evaluate하여 최종 정수 결과를 반환하는 형태이다.</p>
</section>
<section class="print-section">
<h3 id="tokenizer" tabindex="-1"><a class="header-anchor" href="#tokenizer"><span>Tokenizer</span></a></h3>
<p>문자열을 좌에서 우로 traverse하며 (의미 있는 최소 단위인) 토큰으로 분리한다. 연속된 숫자 문자는 하나의 숫자 토큰으로 묶이고, 연산자와 괄호는 각각 단일 문자 토큰이 된다. 공백은 토큰 구분자로만 사용되며 결과에 포함하지 않게 된다.</p>
<p>Scheme에서는 <code v-pre>string-&gt;list</code>로 문자 리스트를 만들고 <code v-pre>let loop</code>로 traverse하며 역순으로 누적한 뒤 마지막에 <code v-pre>reverse</code>한다. Haskell에서는 guard pattern으로 각 문자 유형을 분기하고 <code v-pre>span isDigit</code>으로 연속 숫자를 한 번에 소비한다.</p>
</section>
<section class="print-section">
<h3 id="parser" tabindex="-1"><a class="header-anchor" href="#parser"><span>Parser</span></a></h3>
<p>토큰 리스트를 recursive descendent 방식으로 parsing하여 AST를 생성한다. 문법의 우선순위 계층이 함수 호출 계층에 그대로 대응된다.</p>
<table>
<thead>
<tr>
<th>함수</th>
<th>문법 규칙</th>
<th>생성 node</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>parse-expr</code></td>
<td><code v-pre>expr → term { + | - term }</code></td>
<td>add, sub</td>
</tr>
<tr>
<td><code v-pre>parse-term</code></td>
<td><code v-pre>term → factor { * | / factor }</code></td>
<td>mul, div</td>
</tr>
<tr>
<td><code v-pre>parse-factor</code></td>
<td><code v-pre>factor → number | ( expr )</code></td>
<td>num</td>
</tr>
</tbody>
</table>
<p>같은 우선순위 연산자의 왼쪽 결합은 루프로 구현하여 결과가 항상 왼쪽으로 기울어진 트리가 되도록 한다. parser함수는 AST와 남은 토큰 리스트의 쌍을 반환하여 다음 parser가 이어서 처리할 수 있게 한다.</p>
</section>
<section class="print-section">
<h3 id="evaluator" tabindex="-1"><a class="header-anchor" href="#evaluator"><span>Evaluator</span></a></h3>
<p>AST를 root에서 leaf 방향으로 재귀 traverse하며 정수 값을 계산한다. 트리의 구조가 곧 evaluate의 순서가 되므로, parser의 우선순위를 올바르게 반영한 AST를 만들었다면 Evaluator는 단순 재귀만으로도 올바른 결과를 내게 된다. 나눗셈은 정수 나눗셈으로 처리하도록 하였다.</p>
</section>
<section class="print-section">
<h2 id="q2-step-by-step-evaluation-of-3-2-5" tabindex="-1"><a class="header-anchor" href="#q2-step-by-step-evaluation-of-3-2-5"><span>Q2. Step-by-step Evaluation of &quot;3 + 2 * 5&quot;</span></a></h2>
</section>
<section class="print-section">
<h3 id="step-1-tokenization" tabindex="-1"><a class="header-anchor" href="#step-1-tokenization"><span>Step 1. Tokenization</span></a></h3>
<p>입력 문자열을 한 문자씩 traverse한다. <code v-pre>3</code>은 숫자로 누적되다가 공백에서 토큰 <code v-pre>&quot;3&quot;</code>으로 확정되고, <code v-pre>+</code>는 단일 문자 토큰이 된다. 같은 방식으로 <code v-pre>2</code>, <code v-pre>*</code>, <code v-pre>5</code>가 처리된다.</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">입력  →  "3 + 2 * 5"</span>
<span class="line">결과  →  ["3", "+", "2", "*", "5"]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></section>
<section class="print-section">
<h3 id="step-2-parsing" tabindex="-1"><a class="header-anchor" href="#step-2-parsing"><span>Step 2. Parsing</span></a></h3>
<p><code v-pre>parse-expr</code>가 먼저 <code v-pre>parse-term</code>을 호출한다. <code v-pre>parse-term</code>은 <code v-pre>parse-factor</code>로 <code v-pre>3</code>을 읽고 다음 토큰이 <code v-pre>+</code>이므로 <code v-pre>*</code>나 <code v-pre>/</code>가 아니라 판단하여 <code v-pre>num 3</code>을 그대로 반환한다. <code v-pre>parse-expr</code>로 돌아오면 다음 토큰이 <code v-pre>+</code>이므로 오른쪽 operand를 위해 다시 <code v-pre>parse-term</code>을 호출한다. 이번에는 <code v-pre>2</code>를 읽고 다음 토큰이 <code v-pre>*</code>이므로 <code v-pre>parse-factor</code>로 <code v-pre>5</code>를 읽어 <code v-pre>mul (num 2) (num 5)</code> node를 만든다. 최종적으로 <code v-pre>add (num 3) (mul (num 2) (num 5))</code> 가 완성된다.</p>
<ul>
<li>결과 AST<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">    add</span>
<span class="line">  /   \</span>
<span class="line">num 3   mul</span>
<span class="line">        / \</span>
<span class="line">    num 2  num 5</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p><code v-pre>*</code>가 <code v-pre>+</code>보다 먼저 <code v-pre>parse-term</code> 안에서 묶혔으므로, <code v-pre>mul</code> node가 <code v-pre>add</code>의 자식이 되어 곱셈이 먼저 evaluate된다.</p>
</section>
<section class="print-section">
<h3 id="step-3-evaluation" tabindex="-1"><a class="header-anchor" href="#step-3-evaluation"><span>Step 3. Evaluation</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">eval-ast (add (num 3) (mul (num 2) (num 5)))</span>
<span class="line">  eval-ast (num 3)              →  3</span>
<span class="line">  eval-ast (mul (num 2) (num 5))</span>
<span class="line">    eval-ast (num 2)            →  2</span>
<span class="line">    eval-ast (num 5)            →  5</span>
<span class="line">    2 * 5                       →  10</span>
<span class="line">  3 + 10                        →  13</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></section>
<section class="print-section">
<h2 id="q3-comparison-of-scheme-and-haskell-implementations" tabindex="-1"><a class="header-anchor" href="#q3-comparison-of-scheme-and-haskell-implementations"><span>Q3. Comparison of Scheme and Haskell Implementations</span></a></h2>
</section>
<section class="print-section">
<h3 id="recursive-call-style" tabindex="-1"><a class="header-anchor" href="#recursive-call-style"><span>Recursive Call Style</span></a></h3>
<p>Scheme과 Haskell 두 언어 모두 recursive descendent parser를 사용하지만 재귀를 표현하는 방식이 다르다.</p>
<p>Scheme은 <code v-pre>let loop</code>를 이용한 명시적인 꼬리 재귀로 왼쪽 결합을 구현한다. 누적된 왼쪽 AST를 argument로 삼아 같은 루프를 반복 호출하는 형태이다.</p>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token punctuation">(</span><span class="token keyword">define</span> <span class="token punctuation">(</span><span class="token function">parse-term</span> tokens<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token keyword">let</span> loop <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">result</span> <span class="token punctuation">(</span><span class="token function">parse-factor</span> tokens<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">ast</span> <span class="token punctuation">(</span><span class="token builtin">car</span> result<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">rest</span> <span class="token punctuation">(</span><span class="token builtin">cdr</span> result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">(</span><span class="token keyword">cond</span></span>
<span class="line">        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token builtin">and</span> <span class="token punctuation">(</span><span class="token builtin">not</span> <span class="token punctuation">(</span><span class="token builtin">null?</span> rest<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string=?</span> <span class="token punctuation">(</span><span class="token builtin">car</span> rest<span class="token punctuation">)</span> <span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">         <span class="token punctuation">(</span><span class="token keyword">let*</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">r2</span> <span class="token punctuation">(</span><span class="token function">parse-factor</span> <span class="token punctuation">(</span><span class="token builtin">cdr</span> rest<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">           <span class="token punctuation">(</span><span class="token function">loop</span> <span class="token punctuation">(</span><span class="token builtin">cons</span> <span class="token punctuation">(</span><span class="token builtin">list</span> <span class="token symbol">'mul</span> ast <span class="token punctuation">(</span><span class="token builtin">car</span> r2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">cdr</span> r2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">(</span><span class="token keyword">else</span> result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>반면에 Haskell은 <code v-pre>parseTermRest</code>라는 별도 보조 함수를 만들고 pattern matching으로 종료 조건을 처리한다. 함수 정의 자체가 여러 케이스로 나뉘므로 조건 분기와 재귀가 분리된다.</p>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token hvariable">parseTermRest</span> <span class="token operator">::</span> <span class="token constant">Expr</span> <span class="token operator">-></span> <span class="token punctuation">[</span><span class="token constant">Token</span><span class="token punctuation">]</span> <span class="token operator">-></span> <span class="token punctuation">(</span><span class="token constant">Expr</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token constant">Token</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token hvariable">parseTermRest</span> <span class="token hvariable">left</span> <span class="token punctuation">(</span><span class="token string">"*"</span><span class="token operator">:</span><span class="token hvariable">rest</span><span class="token punctuation">)</span> <span class="token operator">=</span></span>
<span class="line">  <span class="token keyword">let</span> <span class="token punctuation">(</span><span class="token hvariable">right</span><span class="token punctuation">,</span> <span class="token hvariable">rest'</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token hvariable">parseFactor</span> <span class="token hvariable">rest</span></span>
<span class="line">  <span class="token keyword">in</span> <span class="token hvariable">parseTermRest</span> <span class="token punctuation">(</span><span class="token constant">Mul</span> <span class="token hvariable">left</span> <span class="token hvariable">right</span><span class="token punctuation">)</span> <span class="token hvariable">rest'</span></span>
<span class="line"><span class="token hvariable">parseTermRest</span> <span class="token hvariable">left</span> <span class="token hvariable">rest</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token hvariable">left</span><span class="token punctuation">,</span> <span class="token hvariable">rest</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></section>
<section class="print-section">
<h3 id="pattern-matching-and-conditional-branching" tabindex="-1"><a class="header-anchor" href="#pattern-matching-and-conditional-branching"><span>Pattern Matching and Conditional Branching</span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th>Scheme</th>
<th>Haskell</th>
</tr>
</thead>
<tbody>
<tr>
<td>조건 분기</td>
<td><code v-pre>cond</code> 기반 dynamic dispatch</td>
<td>함수 pattern matching</td>
</tr>
<tr>
<td>AST node 구분</td>
<td>심볼 비교</td>
<td>Constructor 패턴으로 직접 분해</td>
</tr>
<tr>
<td>타입 시스템</td>
<td>dynamic 타입, 리스트 기반 AST</td>
<td>정적 타입, <code v-pre>data Expr</code> 사용자 정의 타입</td>
</tr>
<tr>
<td>오류 처리</td>
<td>런타임에 <code v-pre>error</code></td>
<td>컴파일 경고 후 런타임 <code v-pre>error</code></td>
</tr>
</tbody>
</table>
<p>Scheme은 <code v-pre>cond</code>와 심볼 비교로 AST node를 구분한다. AST가 리스트이므로 <code v-pre>(car ast)</code>로 node 타입을 꺼내 <code v-pre>eq?</code>로 비교한다. Haskell은 <code v-pre>data Expr</code>로 정의된 사용자 정의 타입을 사용하므로 Constructor 패턴으로 직접 분해한다. 컴파일러가 pattern matching missing을 경고하여 implementation error를 미리 방지할 수 있다는 점이 큰 차이다.</p>
</section>
<section class="print-section">
<h2 id="test-results" tabindex="-1"><a class="header-anchor" href="#test-results"><span>Test Results</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">kmbzn@thinkpad-x13-gen1:~$ racket <span class="token parameter variable">--script</span> <span class="token number">1</span>.scm</span>
<span class="line"><span class="token number">13</span></span>
<span class="line"><span class="token number">13</span></span>
<span class="line"><span class="token number">12</span></span>
<span class="line"><span class="token number">6</span></span>
<span class="line"><span class="token number">1</span></span>
<span class="line"><span class="token number">5</span></span>
<span class="line"><span class="token number">1</span></span>
<span class="line"><span class="token number">13</span></span>
<span class="line"></span>
<span class="line">kmbzn@thinkpad-x13-gen1:~$ runghc <span class="token number">1</span>.hs</span>
<span class="line"><span class="token number">13</span></span>
<span class="line"><span class="token number">13</span></span>
<span class="line"><span class="token number">12</span></span>
<span class="line"><span class="token number">6</span></span>
<span class="line"><span class="token number">1</span></span>
<span class="line"><span class="token number">5</span></span>
<span class="line"><span class="token number">1</span></span>
<span class="line"><span class="token number">13</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></section>
<section class="print-section">
<h1 id="problem-2-expression-interpreter-with-variables-and-assignment" tabindex="-1"><a class="header-anchor" href="#problem-2-expression-interpreter-with-variables-and-assignment"><span>Problem 2. Expression Interpreter with Variables and Assignment</span></a></h1>
</section>
<section class="print-section">
<h2 id="q1-structural-difference-from-problem-1" tabindex="-1"><a class="header-anchor" href="#q1-structural-difference-from-problem-1"><span>Q1. Structural Difference from Problem 1</span></a></h2>
</section>
<section class="print-section">
<h3 id="expression-evaluation-vs-statement-execution" tabindex="-1"><a class="header-anchor" href="#expression-evaluation-vs-statement-execution"><span>Expression Evaluation vs Statement Execution</span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th>Problem 1</th>
<th>Problem 2</th>
</tr>
</thead>
<tbody>
<tr>
<td>입력 단위</td>
<td>단일 expression</td>
<td>다중 대입문</td>
</tr>
<tr>
<td>출력</td>
<td>정수 값</td>
<td>최종 environment</td>
</tr>
<tr>
<td>상태</td>
<td>없음</td>
<td>environment 누적</td>
</tr>
<tr>
<td>parser 결과</td>
<td>단일 Expr AST</td>
<td>Stmt AST 리스트</td>
</tr>
<tr>
<td>factor 확장</td>
<td>number, 괄호식</td>
<td>number, 변수, 괄호식</td>
</tr>
</tbody>
</table>
<p>Problem 1의 인터프리터는 하나의 arithmetic expression을 받아 정수 하나를 반환한다. 입력과 출력이 모두 value이며 state가 존재하지 않는다.</p>
<p>Problem 2는 여러 줄의 프로그램을 받아 각 문장을 순차 실행하며 environment를 갱신한다. 출력은 값이 아니라 변수 바인딩의 집합인 최종 environment이다. 가장 큰 차이는 상태가 존재하는지의 여부다. Problem 1에서는 입력 문자열 하나가 즉시 정수로 바뀌게 되지만, Problem 2에서는 각 문장이 실행될 때마다 environment가 변화하며 이후 문장들이 이 environment를 참조한다.</p>
</section>
<section class="print-section">
<h3 id="extended-components" tabindex="-1"><a class="header-anchor" href="#extended-components"><span>Extended Components</span></a></h3>
<p>Tokenizer는 <code v-pre>=</code> 연산자, 알파벳 변수명, 줄바꿈 처리를 추가로 담당한다. Parser는 <code v-pre>parse-factor</code>에 변수 node를 추가하고, 대입문을 처리하는 <code v-pre>parse-stmt</code>와 전체 프로그램을 parsing하는 <code v-pre>parse-program</code>을 새로 추가한다. Evaluator는 environment를 argument로 받아 변수를 조회하는 <code v-pre>eval-expr</code>, environment를 갱신하는 <code v-pre>execute-stmt</code>, 문장 리스트를 순차 실행하는 <code v-pre>execute-program</code>으로 구성된다.</p>
</section>
<section class="print-section">
<h2 id="q2-role-of-environment-and-its-changes" tabindex="-1"><a class="header-anchor" href="#q2-role-of-environment-and-its-changes"><span>Q2. Role of Environment and Its Changes</span></a></h2>
</section>
<section class="print-section">
<h3 id="environment" tabindex="-1"><a class="header-anchor" href="#environment"><span>Environment</span></a></h3>
<p>environment는 변수 이름과 정수 값의 매핑을 저장하는 자료구조이다. 프로그램 실행 중 변수의 현재 상태를 기록하며, 새로운 대입이 실행될 때마다 갱신된다. 이미 존재하는 변수에 재할당이 발생하면 기존 바인딩을 제거하고 새 값으로 교체한다.</p>
</section>
<section class="print-section">
<h3 id="changes-for-x-3-y-x-5" tabindex="-1"><a class="header-anchor" href="#changes-for-x-3-y-x-5"><span>Changes for <code v-pre>x = 3, y = x * 5</code></span></a></h3>
<p>초기 environment는 빈 리스트이다.</p>
<p><strong>1. <code v-pre>x = 3</code> 실행</strong></p>
<p>토큰 리스트 <code v-pre>[&quot;x&quot;, &quot;=&quot;, &quot;3&quot;]</code>이 <code v-pre>assign &quot;x&quot; (num 3)</code> AST로 parsing된다. <code v-pre>eval-expr</code>로 우변 <code v-pre>(num 3)</code>을 evaluate하면 <code v-pre>3</code>이 나오고, <code v-pre>env-update</code>로 environment에 추가된다.</p>
<pre><code>실행 전  →  []
실행 후  →  [(&quot;x&quot; . 3)]
</code></pre>
<p><strong>2. <code v-pre>y = x * 5</code> 실행</strong></p>
<p>토큰 리스트 <code v-pre>[&quot;y&quot;, &quot;=&quot;, &quot;x&quot;, &quot;*&quot;, &quot;5&quot;]</code>이 <code v-pre>assign &quot;y&quot; (mul (var &quot;x&quot;) (num 5))</code> AST로 parsing된다. 우변을 evaluate할 때 <code v-pre>(var &quot;x&quot;)</code> node를 만나면 <code v-pre>env-lookup</code>이 현재 environment에서 <code v-pre>&quot;x&quot;</code>의 값 <code v-pre>3</code>을 찾는다. <code v-pre>3 * 5 = 15</code>가 계산되고 environment에 추가된다.</p>
<pre><code>실행 전  →  [(&quot;x&quot; . 3)]
실행 후  →  [(&quot;y&quot; . 15), (&quot;x&quot; . 3)]
</code></pre>
<p>Environment가 없었다면 <code v-pre>(var &quot;x&quot;)</code>를 evaluate하는 시점에 오류가 발생하였을 것이다. Environment는 이전 문장의 실행 결과를 이후 문장이 참조할 수 있게 하는 일종의 매개체가 된다.</p>
</section>
<section class="print-section">
<h2 id="q3-comparison-of-scheme-and-haskell-implementations-1" tabindex="-1"><a class="header-anchor" href="#q3-comparison-of-scheme-and-haskell-implementations-1"><span>Q3. Comparison of Scheme and Haskell Implementations</span></a></h2>
</section>
<section class="print-section">
<h3 id="environment-representation" tabindex="-1"><a class="header-anchor" href="#environment-representation"><span>Environment Representation</span></a></h3>
<p>두 언어 모두 association list를 사용하지만 표현 문법이 다르다.</p>
<p>Scheme은 <code v-pre>(&quot;x&quot; . 3)</code> 형태를 사용하고 내장 함수 <code v-pre>assoc</code>으로 조회한다. <code v-pre>assoc</code>은 <code v-pre>equal?</code>로 키를 비교하므로 문자열 키도 별도 처리 없이 동작한다.</p>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token punctuation">(</span><span class="token builtin">assoc</span> <span class="token string">"x"</span> <span class="token punctuation">'</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">"x"</span> . <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token string">"y"</span> . <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">; → ("x" . 3)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Haskell은 <code v-pre>(&quot;x&quot;, 3)</code> 튜플 리스트를 사용하며, 직접 재귀로 조회하는 <code v-pre>envLookup</code>을 구현한다. 표준 라이브러리의 <code v-pre>lookup</code>은 결과를 <code v-pre>Maybe Int</code>로 반환하므로 별도의 unwrap 처리가 필요하다. 직접 구현하면 재귀 정의 안에서 바로 <code v-pre>error</code>를 호출할 수 있어 코드가 단순해진다.</p>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token hvariable">envLookup</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token hvariable">k</span><span class="token punctuation">,</span> <span class="token hvariable">v</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token hvariable">rest</span><span class="token punctuation">)</span> <span class="token hvariable">var</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token hvariable">k</span> <span class="token operator">==</span> <span class="token hvariable">var</span>  <span class="token operator">=</span> <span class="token hvariable">v</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token builtin">otherwise</span> <span class="token operator">=</span> <span class="token hvariable">envLookup</span> <span class="token hvariable">rest</span> <span class="token hvariable">var</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></section>
<section class="print-section">
<h3 id="recursive-execution" tabindex="-1"><a class="header-anchor" href="#recursive-execution"><span>Recursive Execution</span></a></h3>
<p>Scheme의 <code v-pre>execute-program</code>은 꼬리 재귀로 문장 리스트를 순차 처리한다. 갱신된 environment를 argument로 넘겨 재귀 호출하므로 Scheme의 꼬리 재귀 최적화에 의해 스택이 쌓이지 않는다.</p>
<div class="language-scheme line-numbers-mode" data-highlighter="prismjs" data-ext="scheme"><pre v-pre><code class="language-scheme"><span class="line"><span class="token punctuation">(</span><span class="token keyword">define</span> <span class="token punctuation">(</span><span class="token function">execute-program</span> stmts env<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">null?</span> stmts<span class="token punctuation">)</span></span>
<span class="line">      env</span>
<span class="line">      <span class="token punctuation">(</span><span class="token function">execute-program</span> <span class="token punctuation">(</span><span class="token builtin">cdr</span> stmts<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token function">execute-stmt</span> <span class="token punctuation">(</span><span class="token builtin">car</span> stmts<span class="token punctuation">)</span> env<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Haskell도 동일한 구조이지만 pattern matching으로 base condition을 분리한다.</p>
<div class="language-haskell line-numbers-mode" data-highlighter="prismjs" data-ext="haskell"><pre v-pre><code class="language-haskell"><span class="line"><span class="token hvariable">executeProgram</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token hvariable">env</span>        <span class="token operator">=</span> <span class="token hvariable">env</span></span>
<span class="line"><span class="token hvariable">executeProgram</span> <span class="token punctuation">(</span><span class="token hvariable">s</span><span class="token operator">:</span><span class="token hvariable">stmts</span><span class="token punctuation">)</span> <span class="token hvariable">env</span> <span class="token operator">=</span> <span class="token hvariable">executeProgram</span> <span class="token hvariable">stmts</span> <span class="token punctuation">(</span><span class="token hvariable">executeStmt</span> <span class="token hvariable">env</span> <span class="token hvariable">s</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></section>
<section class="print-section">
<h3 id="variable-lookup" tabindex="-1"><a class="header-anchor" href="#variable-lookup"><span>Variable Lookup</span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th>Scheme</th>
<th>Haskell</th>
</tr>
</thead>
<tbody>
<tr>
<td>조회 함수</td>
<td><code v-pre>assoc</code> 내장 함수</td>
<td><code v-pre>envLookup</code> 직접 구현</td>
</tr>
<tr>
<td>갱신 방식</td>
<td><code v-pre>env-remove</code> 후 <code v-pre>cons</code></td>
<td><code v-pre>filter</code> 후 리스트 추가</td>
</tr>
<tr>
<td>정의되지<br>않은 변수</td>
<td>런타임 <code v-pre>error</code></td>
<td>런타임 <code v-pre>error</code></td>
</tr>
<tr>
<td>타입 안전성</td>
<td>런타임 검사</td>
<td>컴파일 타임 검출</td>
</tr>
</tbody>
</table>
<p>두 언어 모두 리스트를 앞에서부터 순차 탐색하여 변수를 찾으며, 찾지 못하면 <code v-pre>error</code>를 발생시킨다. 갱신 시에는 기존 바인딩을 제거한 뒤 새 바인딩을 리스트 앞에 추가하는 방식을 공통으로 사용한다. 가장 최근 바인딩이 리스트 앞에 위치하므로 탐색 시 가장 먼저 발견된다.</p>
<p>전반적으로 Scheme은 리스트와 재귀가 언어의 기본 패러다임이기 때문에 S-expression 기반 AST와 environment 표현이 언어 자체와 자연스럽게 어울린다. Haskell은 사용자 정의 데이터 타입으로 AST 구조를 타입 수준에서 명확히 정의하고, pattern matching으로 각 케이스를 선언적으로 처리하여 compile time에 더 많은 오류를 잡을 수 있다.</p>
</section>
<section class="print-section">
<h2 id="test-results-1" tabindex="-1"><a class="header-anchor" href="#test-results-1"><span>Test Results</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">kmbzn@thinkpad-x13-gen1:~$ racket <span class="token parameter variable">--script</span> <span class="token number">2</span>.scm</span>
<span class="line"><span class="token variable"><span class="token punctuation">((</span>y . <span class="token number">15</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>x . <span class="token number">3</span><span class="token punctuation">))</span></span></span>
<span class="line"><span class="token variable"><span class="token punctuation">((</span>z . <span class="token number">36</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>y . <span class="token number">12</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>x . <span class="token number">10</span><span class="token punctuation">))</span></span></span>
<span class="line"><span class="token variable"><span class="token punctuation">((</span>c . <span class="token number">15</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>b . <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>a . <span class="token number">6</span><span class="token punctuation">))</span></span></span>
<span class="line"><span class="token variable"><span class="token punctuation">((</span>x . <span class="token number">6</span><span class="token punctuation">))</span></span></span>
<span class="line"><span class="token variable"><span class="token punctuation">((</span>y . <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>x . <span class="token number">20</span><span class="token punctuation">))</span></span></span>
<span class="line"></span>
<span class="line">kmbzn@thinkpad-x13-gen1:~$ runghc <span class="token number">2</span>.hs</span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">"y"</span>,15<span class="token punctuation">)</span>,<span class="token punctuation">(</span><span class="token string">"x"</span>,3<span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">"z"</span>,36<span class="token punctuation">)</span>,<span class="token punctuation">(</span><span class="token string">"y"</span>,12<span class="token punctuation">)</span>,<span class="token punctuation">(</span><span class="token string">"x"</span>,10<span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">"c"</span>,15<span class="token punctuation">)</span>,<span class="token punctuation">(</span><span class="token string">"b"</span>,3<span class="token punctuation">)</span>,<span class="token punctuation">(</span><span class="token string">"a"</span>,6<span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">"x"</span>,6<span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">"y"</span>,10<span class="token punctuation">)</span>,<span class="token punctuation">(</span><span class="token string">"x"</span>,20<span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></section>
</div></template>


