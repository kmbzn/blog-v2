<template><div><h1 id="_11-object-oriented-design" tabindex="-1"><a class="header-anchor" href="#_11-object-oriented-design"><span>11. Object-Oriented Design</span></a></h1>
<DateMeta />
<h2 id="learning-goals" tabindex="-1"><a class="header-anchor" href="#learning-goals"><span>Learning Goals</span></a></h2>
<ul>
<li>Solution Space에서의 UML
<ul>
<li>Object diagrams: 개념에서 classes로</li>
<li>Interaction diagrams: 시스템 경계를 넘어서는 상호작용</li>
</ul>
</li>
<li>설계 결정 (Design Decisions)
<ul>
<li>원칙, patterns, heuristics 어휘 확장</li>
<li>GRASP patterns를 적용한 설계 책임 할당</li>
<li>설계 간의 trade-off를 추론</li>
<li>Coupling 및 cohesion 관점에서의 trade-off 논의</li>
</ul>
</li>
</ul>
<h1 id="modeling-implementations-with-uml" tabindex="-1"><a class="header-anchor" href="#modeling-implementations-with-uml"><span>Modeling Implementations with UML</span></a></h1>
<h2 id="a-word-on-uml" tabindex="-1"><a class="header-anchor" href="#a-word-on-uml"><span>A Word on UML</span></a></h2>
<ul>
<li>UML은 표준화된, 확립된 표기법</li>
<li>대부분의 software engineers가 읽을 수 있고, 많은 도구들이 지원</li>
<li>소수의 실무자들만이 엄격하게 사용</li>
<li>일반적으로 스케치, 커뮤니케이션, 문서화, (아마도) 벽 장식용으로 비공식적 사용</li>
<li>커뮤니케이션을 위해 UML 사용
<ul>
<li>표기법을 다소 엄격하게 따르지만, 모든 세부 사항은 아님</li>
</ul>
</li>
</ul>
<h2 id="one-domain-model-for-the-library-system" tabindex="-1"><a class="header-anchor" href="#one-domain-model-for-the-library-system"><span>One Domain Model for the Library System</span></a></h2>
<p><img src="@source/se/image-21.png" alt="alt text"></p>
<h2 id="from-concepts-to-objects" tabindex="-1"><a class="header-anchor" href="#from-concepts-to-objects"><span>From Concepts to Objects</span></a></h2>
<ul>
<li>Domain 개념은 classes와 어떻게 다른가?
<ul>
<li>모든 개념이 class가 되어야 하는가?</li>
<li>모든 class가 개념을 나타내야 하는가?</li>
</ul>
</li>
</ul>
<p><img src="@source/se/image-56.png" alt="alt text"></p>
<h2 id="object-diagrams" tabindex="-1"><a class="header-anchor" href="#object-diagrams"><span>Object Diagrams</span></a></h2>
<ul>
<li>Fields와 methods를 가진 Objects/classes</li>
<li>Methods를 가진 Interfaces</li>
<li>Associations, visibility, types
<img src="@source/se/image-23.png" alt="alt text"></li>
</ul>
<h2 id="object-diagram-notation-classes-objects" tabindex="-1"><a class="header-anchor" href="#object-diagram-notation-classes-objects"><span>Object Diagram Notation: Classes/Objects</span></a></h2>
<p><img src="@source/se/image-22.png" alt="alt text"></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">class</span> <span class="token class-name">LibraryAccount</span> <span class="token punctuation">{</span></span>
<span class="line">  id<span class="token operator">:</span> <span class="token keyword">int</span><span class="token punctuation">;</span></span>
<span class="line">  lateFees<span class="token operator">:</span> <span class="token keyword">int</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">boolean</span> <span class="token function">borrow</span><span class="token punctuation">(</span><span class="token class-name">Book</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">void</span> <span class="token function">returnItem</span><span class="token punctuation">(</span><span class="token class-name">Book</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">void</span> <span class="token function">payFees</span><span class="token punctuation">(</span><span class="token keyword">int</span> payment<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-diagram-notation-interfaces" tabindex="-1"><a class="header-anchor" href="#object-diagram-notation-interfaces"><span>Object Diagram Notation: Interfaces</span></a></h2>
<p><img src="@source/se/image-24.png" alt="alt text"></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">interface</span> <span class="token class-name">LibraryAccount</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">boolean</span> <span class="token function">borrow</span><span class="token punctuation">(</span><span class="token class-name">Book</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">void</span> <span class="token function">returnItem</span><span class="token punctuation">(</span><span class="token class-name">Book</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">void</span> <span class="token function">payFees</span><span class="token punctuation">(</span><span class="token keyword">int</span> payment<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-diagram-notation-associations" tabindex="-1"><a class="header-anchor" href="#object-diagram-notation-associations"><span>Object Diagram Notation: Associations</span></a></h2>
<p><img src="@source/se/image-25.png" alt="alt text"></p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">class</span> <span class="token class-name">LibraryAccount</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">></span></span> borrowedBooks<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line">  <span class="token class-name">LibraryAccount</span> borrowedBy<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Fields를 associations 대신 또는 추가로 사용하지 말 것</li>
<li>Fields는 기본 types에만 사용</li>
</ul>
<p><img src="@source/se/image-26.png" alt="alt text"></p>
<h2 id="class-diagram-vs-object-diagram" tabindex="-1"><a class="header-anchor" href="#class-diagram-vs-object-diagram"><span>Class Diagram vs Object Diagram</span></a></h2>
<ul>
<li>Classes와 objects 둘 다 modeling 가능</li>
<li>용어는 종종 혼용됨</li>
<li>특정 objects를 modeling해야 하는 경우 <code v-pre>objectId: Class</code> 표기법 사용
<img src="@source/se/image-27.png" alt="alt text"></li>
</ul>
<h2 id="class-diagrams-and-javascript-typescript" tabindex="-1"><a class="header-anchor" href="#class-diagrams-and-javascript-typescript"><span>Class Diagrams and JavaScript/TypeScript</span></a></h2>
<ul>
<li>Classes를 사용하지 않을 때에도, 동일한 아이디어를 표현하기 위해 표기법 사용
<ul>
<li>동일한 shape을 공유하는 많은 objects</li>
</ul>
</li>
<li>TypeScript interfaces는 class diagram 표기법과 일치</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">function</span> <span class="token function">newLibraryAccount</span><span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> lateFees</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function-variable function">borrow</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">book</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function-variable function">returnItem</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">book</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function-variable function">payFees</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">payment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="one-object-model-for-the-library-system" tabindex="-1"><a class="header-anchor" href="#one-object-model-for-the-library-system"><span>One Object Model for the Library System</span></a></h2>
<p><img src="@source/se/image-28.png" alt="alt text"></p>
<h2 id="domain-model-vs-object-model" tabindex="-1"><a class="header-anchor" href="#domain-model-vs-object-model"><span>Domain Model vs Object Model</span></a></h2>
<p><img src="@source/se/image-29.png" alt="alt text"></p>
<h2 id="object-diagram-notation-requirements" tabindex="-1"><a class="header-anchor" href="#object-diagram-notation-requirements"><span>Object Diagram Notation Requirements</span></a></h2>
<ul>
<li>표기법에 대해 매우 엄격하지는 않지만,
<ul>
<li>Classes/objects, interfaces, concepts에 적합한 2 ~ 3 부분으로 된 상자 사용</li>
<li>Fields와 methods에 types 포함</li>
<li>적절한 경우 fields가 아닌 associations 사용</li>
<li>Association 이름과 cardinalities 사용
<ul>
<li>&quot;is-a&quot;(상속 관계)를 제외한 화살표 타입은 <strong>크게 신경 쓰지 않음</strong></li>
</ul>
</li>
</ul>
</li>
</ul>
<h1 id="modeling-interactions-past-the-system-boundary" tabindex="-1"><a class="header-anchor" href="#modeling-interactions-past-the-system-boundary"><span>Modeling Interactions Past the System Boundary</span></a></h1>
<ul>
<li><strong>Use case scenario:</strong> 도서관 회원이 도서관 카드를 사용하여 도서관 시스템 키오스크에서 로그인하고 책을 대출</li>
<li>회원이 미납 연체료가 없는지 확인한 후, 도서관 시스템은 현재 날짜에 대여 기간을 더해 책의 반납 기한을 결정</li>
<li>해당 책과 반납 기한을 회원의 도서관 계정에 대출 항목으로 기록
<img src="@source/se/image-30.png" alt="alt text"></li>
</ul>
<h2 id="interaction-diagrams" tabindex="-1"><a class="header-anchor" href="#interaction-diagrams"><span>Interaction Diagrams</span></a></h2>
<ul>
<li>Objects 간의 상호작용</li>
<li>두 가지 일반적인 표기법: Sequence diagrams, Communication diagrams</li>
<li>Sequence diagrams는 system sequence diagrams와 유사하지만, objects/classes 간의 상호작용을 묘사
<img src="@source/se/image-31.png" alt="alt text"></li>
</ul>
<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2>
<p><img src="@source/se/image-32.png" alt="alt text"></p>
<h2 id="interaction-diagram-practice" tabindex="-1"><a class="header-anchor" href="#interaction-diagram-practice"><span>Interaction Diagram Practice</span></a></h2>
<ul>
<li><strong>Use case scenario:</strong> ...책을 대출. 회원의 미납 연체료가 없는지 확인 후, 시스템은 대출 기간(loan period)을 현재 날짜에 더해 반납 기한을 결정하고, 책과 반납 기한을 회원 계정에 대출 항목으로 기록
<img src="@source/se/image-33.png" alt="alt text"></li>
</ul>
<h2 id="interaction-diagrams-help-evaluate-design-alternatives" tabindex="-1"><a class="header-anchor" href="#interaction-diagrams-help-evaluate-design-alternatives"><span>Interaction Diagrams Help Evaluate Design Alternatives</span></a></h2>
<ul>
<li>설계 대안을 <strong>명시적으로</strong> 고려</li>
<li>각 대안에 대해, 설계 선택에 의해 암시되는 상호작용 스케치
<ul>
<li>상호작용은 components의 APIs에 해당</li>
</ul>
</li>
</ul>
<h1 id="object-level-design" tabindex="-1"><a class="header-anchor" href="#object-level-design"><span>Object-Level Design</span></a></h1>
<h2 id="who-is-responsible" tabindex="-1"><a class="header-anchor" href="#who-is-responsible"><span>Who is Responsible?</span></a></h2>
<ul>
<li>도서관 문제(Library problem) 고려
<ul>
<li>어느 class가 사용자가 대출한 항목을 <strong>알아야</strong> 하는가</li>
<li>어느 class가 연체료를 <strong>계산해야</strong> 하는가</li>
</ul>
</li>
</ul>
<h2 id="doing-and-knowing-responsibilities" tabindex="-1"><a class="header-anchor" href="#doing-and-knowing-responsibilities"><span>Doing and Knowing Responsibilities</span></a></h2>
<ul>
<li>책임(Responsibilities)은 객체의 행동 측면에서의 의무와 관련</li>
<li><strong>Doing responsibilities (수행 책임)</strong>
<ul>
<li>객체 생성 또는 계산 수행 등 무언가를 직접 수행</li>
<li>다른 objects의 행동 개시</li>
<li>다른 objects의 활동 제어 및 조정</li>
</ul>
</li>
<li><strong>Knowing responsibilities (정보 책임)</strong>
<ul>
<li>Private 캡슐화된 data에 대해 알기</li>
<li>관련된 objects에 대해 알기</li>
<li>파생하거나 계산할 수 있는 것들에 대해 알기</li>
</ul>
</li>
<li>Object design은 domain modeling만큼 명확하지 않음
<ul>
<li>Domain modeling의 과제는 매우 정밀해지는 것</li>
<li>구현에 가까워질수록 선택 필요 (Data, methods 배치 등)</li>
<li>실제 세계 개념과 결코 1:1이 아님</li>
</ul>
</li>
<li>책임 할당(Assigning Responsibilities)에 대한 고찰이 도움됨
<ul>
<li>디자인 원칙과 heuristics에 의존</li>
<li>GRASP (General Responsibility Assignment Software Patterns/Principles에 대부분 포함</li>
</ul>
</li>
</ul>
<h2 id="grasp의-9개-패턴" tabindex="-1"><a class="header-anchor" href="#grasp의-9개-패턴"><span>GRASP의 9개 패턴</span></a></h2>
<ol>
<li>Information expert</li>
<li>Creator</li>
<li>Controller</li>
<li>Indirection</li>
<li>Low coupling</li>
<li>High cohesion</li>
<li>Polymorphism</li>
<li>Protected variations</li>
<li>Pure fabrication</li>
</ol>
<h2 id="information-expert" tabindex="-1"><a class="header-anchor" href="#information-expert"><span>Information Expert</span></a></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Information Expert</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Problem</strong></td>
<td>객체에 책임을 할당하는 기본 원칙은 무엇인가?</td>
</tr>
<tr>
<td><strong>Solution</strong></td>
<td>책임을 수행하는 데 필요한 정보를 가진 class에 책임을 할당</td>
</tr>
</tbody>
</table>
<h3 id="applying-information-expert" tabindex="-1"><a class="header-anchor" href="#applying-information-expert"><span>Applying Information Expert</span></a></h3>
<ul>
<li>Software <code v-pre>Board</code>는 모든 <code v-pre>Square</code> objects를 집합(aggregate)시킬 것</li>
<li>따라서, <code v-pre>Board</code>는 이 책임을 수행하는 데 필요한 정보를 가짐
<img src="@source/se/image-34.png" alt="alt text"></li>
</ul>
<h2 id="creator" tabindex="-1"><a class="header-anchor" href="#creator"><span>Creator</span></a></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Creator</th>
</tr>
</thead>
<tbody>
<tr>
<td>Problem</td>
<td>누가 A를 생성하는가?</td>
</tr>
<tr>
<td>Solution</td>
<td>다음 중 하나 이상이 참(많을수록 좋음)일 경우, class B에 class A의 instance 생성 책임을 할당<br>B가 A를 &quot;포함&quot;하거나 복합적으로 집계함<br>B가 A를 기록함<br>B가 A를 긴밀하게 사용함<br>B가 A 생성을 위한 초기화 data를 가짐</td>
</tr>
</tbody>
</table>
<h3 id="example-creator" tabindex="-1"><a class="header-anchor" href="#example-creator"><span>Example: Creator</span></a></h3>
<p><img src="@source/se/image-35.png" alt="alt text"></p>
<ul>
<li>Dynamic model에서 Creator pattern 적용</li>
<li>Design Model의 DCD에서, <code v-pre>Board</code>는 <code v-pre>Squares</code>와 composite aggregation association을 가짐
<ul>
<li>Static model에 Creator 적용 중</li>
</ul>
</li>
</ul>
<h2 id="controller" tabindex="-1"><a class="header-anchor" href="#controller"><span>Controller</span></a></h2>
<table>
<thead>
<tr>
<th>Name</th>
<th>Controller</th>
</tr>
</thead>
<tbody>
<tr>
<td>Problem</td>
<td>UI layer를 넘어 system operation을 수신하고 조정(&quot;제어&quot;)하는 첫 번째 객체는 무엇인가?</td>
</tr>
<tr>
<td>Solution</td>
<td>다음 선택지 중 하나를 나타내는 객체에 책임 할당<br>전체 &quot;system&quot;, &quot;root object&quot;, software가 실행 중인 device 또는 주요 subsystem (모두 facade controller의 변형)<br>System operation이 발생하는 use case scenario (use case 또는 session controller)</td>
</tr>
</tbody>
</table>
<p><img src="@source/se/image-36.png" alt="alt text"></p>
<ul>
<li><code v-pre>MonopolyGame</code>을 사용한 Controller pattern 적용</li>
<li>UI layer와 software objects의 domain layer 연결</li>
</ul>
<h2 id="design-goals-principles-and-patterns" tabindex="-1"><a class="header-anchor" href="#design-goals-principles-and-patterns"><span>Design Goals, Principles, and Patterns</span></a></h2>
<ul>
<li>Design Goals
<ul>
<li>변경, 이해, 재사용, 분업 등을 위한 설계</li>
</ul>
</li>
<li>Design Principle
<ul>
<li>Low coupling</li>
<li>high cohesion</li>
<li>Low representational gap</li>
</ul>
</li>
<li>Design Heuristics
<ul>
<li>Law of Demeter</li>
<li>Information expert</li>
<li>Creator</li>
<li>Controller</li>
</ul>
</li>
</ul>
<p><img src="@source/se/image-37.png" alt="alt text"></p>
<h1 id="design-principle-low-representational-gap" tabindex="-1"><a class="header-anchor" href="#design-principle-low-representational-gap"><span>Design Principle: Low Representational Gap</span></a></h1>
<p>2025.11.5.(목)</p>
<h2 id="low-representational-gap" tabindex="-1"><a class="header-anchor" href="#low-representational-gap"><span>Low Representational Gap</span></a></h2>
<ul>
<li>식별된 개념은 구현 시 classes에 대한 영감을 제공</li>
<li>Domain 개념을 반영하는 Classes는 종종 이해하기 직관적이며, 거의 변경되지 않음 (low representational gap)</li>
</ul>
<h2 id="designs-with-low-representational-gap" tabindex="-1"><a class="header-anchor" href="#designs-with-low-representational-gap"><span>Designs with Low Representational Gap</span></a></h2>
<ul>
<li>각 domain class에 대해 software class 생성, 해당 관계 생성</li>
<li><strong>Design goal:</strong> 변경을 위한 설계</li>
<li>이것은 단지 시작점
<ul>
<li>모든 domain classes가 software 대응물을 필요로 하지는 않음</li>
<li>Pure fabrications가 필요할 수 있음</li>
<li>다른 원칙들이 종종 더 중요</li>
</ul>
</li>
</ul>
<h1 id="design-principle-low-coupling" tabindex="-1"><a class="header-anchor" href="#design-principle-low-coupling"><span>Design Principle: Low Coupling</span></a></h1>
<ul>
<li>Module은 가능한 한 적은 수의 다른 modules에 의존해야 함
<ul>
<li>이해도 향상 (이해를 위한 설계)
<ul>
<li>Context에 대한 제한된 이해, 고립된 상태에서 이해 용이</li>
</ul>
</li>
<li>변경 비용 감소 (변경을 위한 설계)
<ul>
<li>변경에 필요한 context가 적음</li>
<li>Module interface 변경 시, 영향을 받는 modules가 적음 (파급 효과 감소)</li>
</ul>
</li>
<li>재사용성 향상 (재사용을 위한 설계)
<ul>
<li>의존성이 적어 새로운 context에 적응 용이</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="topologies-with-different-coupling" tabindex="-1"><a class="header-anchor" href="#topologies-with-different-coupling"><span>Topologies with Different Coupling</span></a></h2>
<p><img src="@source/se/image-38.png" alt="alt text"></p>
<blockquote>
<p><em>Types of module interconnection structures</em></p>
</blockquote>
<h2 id="high-coupling-is-undesirable" tabindex="-1"><a class="header-anchor" href="#high-coupling-is-undesirable"><span>High Coupling is Undesirable</span></a></h2>
<ul>
<li>Low coupling을 가진 element는 적은 수의 다른 elements에 의존
<ul>
<li><code v-pre>Elements == classes, subsystems, ...</code></li>
<li>&quot;적은&quot;은 문맥에 따라 다름</li>
</ul>
</li>
<li>High coupling을 가진 class는 많은 다른 classes에 의존
<ul>
<li>관련된 classes의 변경이 로컬 변경을 강제.
<ul>
<li>로컬 class의 변경이 관련된 classes의 변경을 강제 (취약함, 파급 효과)</li>
</ul>
</li>
<li>고립된 상태에서 이해하기 어려움</li>
<li>다른 의존적 classes의 추가적인 존재를 요구하므로 재사용하기 어려움</li>
<li>확장하기 어려움 – 많은 곳에서 변경 필요</li>
</ul>
</li>
</ul>
<h2 id="design-goals-principles-and-patterns-1" tabindex="-1"><a class="header-anchor" href="#design-goals-principles-and-patterns-1"><span>Design Goals, Principles, and Patterns</span></a></h2>
<ul>
<li><strong>Design Goals:</strong> 변경, 이해, 재사용, 분업 등을 위한 설계</li>
<li><strong>Design Principle:</strong> Low coupling, high cohesion, Low representational gap</li>
<li><strong>Design Heuristics:</strong> (시스템에서 원칙 증진) Law of Demeter, Information expert, Creator, Controller</li>
</ul>
<h2 id="design-heuristic-law-of-demeter" tabindex="-1"><a class="header-anchor" href="#design-heuristic-law-of-demeter"><span>Design Heuristic: Law of Demeter</span></a></h2>
<ul>
<li>각 module은 다른 units에 대해 제한된 지식만 가져야 함
<ul>
<li>현재 unit과 &quot;밀접하게&quot; 관련된 units만</li>
</ul>
</li>
<li>특히, 낯선 이에게 말 걸지 말 것 (Don’t talk to strangers!)
<ul>
<li>예: <code v-pre>a.getB().getC().foo()</code> 금지</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> shipment<span class="token punctuation">.</span><span class="token function">getBox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    shipmentWeight <span class="token operator">+=</span> i<span class="token punctuation">.</span><span class="token function">getWeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">...</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><em>So don't do this ^ !!</em></p>
</blockquote>
<h2 id="coupling-discussion" tabindex="-1"><a class="header-anchor" href="#coupling-discussion"><span>Coupling: Discussion</span></a></h2>
<ul>
<li>매우 안정적인 elements에 대한 high coupling은 보통 문제되지 않음
<ul>
<li>안정적인 interface는 변경될 가능성이 낮고, 잘 이해됨</li>
<li>Implementations에 대한 coupling보다 interfaces에 대한 coupling 선호</li>
</ul>
</li>
<li>Subclass/superclass coupling은 특히 강력함
<ul>
<li>Protected fields와 methods가 노출됨</li>
<li>Subclass는 많은 superclass 변경(예: method signatures 변경, abstract methods 추가)에 취약</li>
<li>Guideline: Coupling을 줄이기 위해, 상속(inheritance)보다 composition 선호</li>
</ul>
</li>
<li>Coupling은 많은 원칙 중 하나
<ul>
<li>Cohesion, low repr. gap 및 기타 원칙도 고려</li>
</ul>
</li>
</ul>
<h2 id="design-goals" tabindex="-1"><a class="header-anchor" href="#design-goals"><span>Design Goals</span></a></h2>
<ul>
<li>Low coupling이 지원하는 방식 설명:
<ul>
<li><strong>Design for change (변경을 위한 설계)</strong>
<ul>
<li>더 적은 수의 다른 objects에 대한 의존성으로 변경이 더 쉬움</li>
<li>변경이 파급 효과(rippling effects)를 가질 가능성 감소</li>
</ul>
</li>
<li><strong>Design for understandability (이해를 위한 설계)</strong>
<ul>
<li>이해해야 할 의존성이 적음 (예: <code v-pre>a.getB().getC().foo()</code>)</li>
</ul>
</li>
<li><strong>Design for division of labor (분업을 위한 설계)</strong>
<ul>
<li>더 작은 interfaces, 분할 용이</li>
</ul>
</li>
<li><strong>Design for reuse (재사용을 위한 설계)</strong>
<ul>
<li>복잡한 의존성 없이 재사용 용이</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="design-heuristic-controller-also-design-pattern-facade" tabindex="-1"><a class="header-anchor" href="#design-heuristic-controller-also-design-pattern-facade"><span>Design Heuristic: Controller (also Design Pattern: FAÇADE)</span></a></h2>
<ul>
<li><strong>Problem:</strong> 어떤 객체가 system operation (event)을 수신하고 조정하는가?</li>
<li><strong>Solution:</strong> 다음을 나타내는 객체에 책임 할당
<ul>
<li>전체 system, device, 또는 subsystem (façade controller)</li>
<li>System event가 발생하는 use case scenario (use case controller)</li>
</ul>
</li>
<li><strong>Process:</strong> System sequence diagram에서 도출 (핵심 원칙: Low representational gap, high cohesion)</li>
</ul>
<p><img src="@source/se/image-57.png" alt="alt text"></p>
<h2 id="controller-discussion" tabindex="-1"><a class="header-anchor" href="#controller-discussion"><span>Controller: Discussion</span></a></h2>
<ul>
<li>Controller는 coordinator
<ul>
<li>많은 작업을 직접 수행하지 않음</li>
<li>다른 objects에 위임</li>
</ul>
</li>
<li>Façade controllers는 system events가 &quot;너무 많지&quot; 않을 때 적합
<ul>
<li>시스템을 위한 하나의 전체 controller</li>
</ul>
</li>
<li>Use case controller는 façade controller가 과도한 책임으로 &quot;비대해질&quot; 때(low cohesion, high coupling) 적합
<ul>
<li>특정 작업을 위한 여러 개의 작은 controllers</li>
</ul>
</li>
<li>Façade design pattern (추후 강의)과 밀접하게 관련</li>
</ul>
<h2 id="controller-design-trade-off" tabindex="-1"><a class="header-anchor" href="#controller-design-trade-off"><span>Controller: Design Trade-off</span></a></h2>
<ul>
<li>Coupling 감소
<ul>
<li>User interface와 domain logic이 서로 분리됨 (decoupled)</li>
</ul>
</li>
<li>이해도: 고립된 상태에서 이해 가능, 다음으로 이어짐:</li>
<li>Evolvability (진화 용이성): UI와 domain logic 모두 변경 용이
<ul>
<li>둘 다 controller에 결합(coupled)되어, controller가 중재자(mediator) 역할. 이 coupling은 덜 해로움</li>
<li>Controller는 더 작고 안정적인 interface</li>
<li>Domain logic 변경이 UI가 아닌 controller에 영향</li>
<li>Domain logic design을 몰라도 UI 변경 가능</li>
</ul>
</li>
<li>재사용성 지원
<ul>
<li>Controller는 domain logic에 대한 interface 역할</li>
<li>더 작고 명시적인 interfaces는 evolvability 지원</li>
</ul>
</li>
<li>단, 비대해진(bloated) controllers는 coupling을 높이고 cohesion을 낮춤; 해당 시 분할</li>
</ul>
<h1 id="design-principle-high-cohesion" tabindex="-1"><a class="header-anchor" href="#design-principle-high-cohesion"><span>Design Principle: High Cohesion</span></a></h1>
<h3 id="or-single-responsibility-principle" tabindex="-1"><a class="header-anchor" href="#or-single-responsibility-principle"><span>(OR SINGLE RESPONSIBILITY PRINCIPLE)</span></a></h3>
<h2 id="design-principle-cohesion" tabindex="-1"><a class="header-anchor" href="#design-principle-cohesion"><span>Design Principle: Cohesion</span></a></h2>
<ul>
<li>Module은 작고 관련된 책임 집합을 가져야 함
<ul>
<li>이해도 향상 (이해를 위한 설계)
<ul>
<li>작은 책임 집합이 이해하기 더 쉬움</li>
</ul>
</li>
<li>재사용성 향상 (재사용을 위한 설계)
<ul>
<li>응집력 있는(cohesive) 책임 집합은 다른 application에서 재발생할 가능성이 높음</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="example-low-cohesion" tabindex="-1"><a class="header-anchor" href="#example-low-cohesion"><span>Example: Low Cohesion</span></a></h2>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">class</span> <span class="token class-name">DatabaseApplication</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">authorizeOrder</span><span class="token punctuation">(</span><span class="token class-name">Data</span> data<span class="token punctuation">,</span> <span class="token class-name">User</span> currentUser<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// check authorization</span></span>
<span class="line">      <span class="token comment">// lock objects for synchronization</span></span>
<span class="line">      <span class="token comment">// validate buffer</span></span>
<span class="line">      <span class="token comment">// log start of operation</span></span>
<span class="line">      <span class="token comment">// perform operation</span></span>
<span class="line">      <span class="token comment">// log end of operation</span></span>
<span class="line">      <span class="token comment">// release lock on objects</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">startShipping</span><span class="token punctuation">(</span><span class="token class-name">OtherData</span> data<span class="token punctuation">,</span> <span class="token class-name">User</span> currentUser<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// check authorization</span></span>
<span class="line">      <span class="token comment">// lock objects for synchronization</span></span>
<span class="line">      <span class="token comment">// validate buffer</span></span>
<span class="line">      <span class="token comment">// log start of operation</span></span>
<span class="line">      <span class="token comment">// perform operation</span></span>
<span class="line">      <span class="token comment">// log end of operation</span></span>
<span class="line">      <span class="token comment">// release lock on objects</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="anti-pattern-god-object" tabindex="-1"><a class="header-anchor" href="#anti-pattern-god-object"><span>Anti-Pattern: God Object</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Chat</span> <span class="token punctuation">{</span></span>
<span class="line">    List<span class="token operator">&lt;</span>String<span class="token operator">></span> channels<span class="token punctuation">;</span></span>
<span class="line">    Map<span class="token operator">&lt;</span>String<span class="token punctuation">,</span> List<span class="token operator">&lt;</span>Msg<span class="token operator">>></span> messages<span class="token punctuation">;</span></span>
<span class="line">    Map<span class="token operator">&lt;</span>String<span class="token punctuation">,</span> String<span class="token operator">></span> accounts<span class="token punctuation">;</span></span>
<span class="line">    Set<span class="token operator">&lt;</span>String<span class="token operator">></span> bannedUsers<span class="token punctuation">;</span></span>
<span class="line">    File logFile<span class="token punctuation">;</span></span>
<span class="line">    File bannedWords<span class="token punctuation">;</span></span>
<span class="line">    <span class="token constant">URL</span> serverAddress<span class="token punctuation">;</span></span>
<span class="line">    Map<span class="token operator">&lt;</span>String<span class="token punctuation">,</span> Int<span class="token operator">></span> globalSettings<span class="token punctuation">;</span></span>
<span class="line">    Map<span class="token operator">&lt;</span>String<span class="token punctuation">,</span> Int<span class="token operator">></span> userSettings<span class="token punctuation">;</span></span>
<span class="line">    Map<span class="token operator">&lt;</span>String<span class="token punctuation">,</span> Graphic<span class="token operator">></span> smileys<span class="token punctuation">;</span></span>
<span class="line">    CryptStrategy encryption<span class="token punctuation">;</span></span>
<span class="line">    Widget sendButton<span class="token punctuation">,</span> messageList<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Chat</span> <span class="token punctuation">{</span></span>
<span class="line">    Content content<span class="token punctuation">;</span></span>
<span class="line">    AccountMgr accounts<span class="token punctuation">;</span></span>
<span class="line">    File logFile<span class="token punctuation">;</span></span>
<span class="line">    ConnectionMgr conns<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">ChatUI</span> <span class="token punctuation">{</span></span>
<span class="line">    Chat chat<span class="token punctuation">;</span></span>
<span class="line">    Widget sendButton<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">AccountMgr</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token operator">...</span> accounts<span class="token punctuation">,</span> bannedUsers <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cohesion-in-graph-implementations" tabindex="-1"><a class="header-anchor" href="#cohesion-in-graph-implementations"><span>Cohesion in Graph Implementations</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Graph</span> <span class="token punctuation">{</span></span>
<span class="line">    Node<span class="token punctuation">[</span><span class="token punctuation">]</span> nodes<span class="token punctuation">;</span></span>
<span class="line">    boolean<span class="token punctuation">[</span><span class="token punctuation">]</span> isVisited<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Algorithm</span> <span class="token punctuation">{</span></span>
<span class="line">    int <span class="token function">shortestPath</span><span class="token punctuation">(</span><span class="token parameter">Graph g<span class="token punctuation">,</span> Node n<span class="token punctuation">,</span> Node m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">for</span> <span class="token punctuation">(</span>int i<span class="token punctuation">;</span> <span class="token operator">...</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>g<span class="token punctuation">.</span>isVisited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token operator">...</span></span>
<span class="line">            g<span class="token punctuation">.</span>isVisited<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">return</span> v<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>이것이 좋은 구현인가?</li>
<li>No, graph가 data뿐만 아니라 알고리즘적 책임까지 맡고 있기 때문</li>
</ul>
<h2 id="bluemarble-example" tabindex="-1"><a class="header-anchor" href="#bluemarble-example"><span>Bluemarble Example</span></a></h2>
<ul>
<li>어느 디자인이 더 높은 cohesion을 가지는가?</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token punctuation">{</span></span>
<span class="line">    Board board<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/* in code somewhere... */</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getSquare</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    Square <span class="token function">getSquare</span><span class="token punctuation">(</span><span class="token parameter">String name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// named squares</span></span>
<span class="line">      <span class="token keyword">for</span> <span class="token punctuation">(</span>Square s<span class="token operator">:</span> board<span class="token punctuation">.</span><span class="token function">getSquares</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">return</span> s<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token punctuation">{</span></span>
<span class="line">    Board board<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/* in code somewhere... */</span> board<span class="token punctuation">.</span><span class="token function">getSquare</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Board</span> <span class="token punctuation">{</span></span>
<span class="line">    List<span class="token operator">&lt;</span>Square<span class="token operator">></span> squares<span class="token punctuation">;</span></span>
<span class="line">    Square <span class="token function">getSquare</span><span class="token punctuation">(</span><span class="token parameter">String name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">for</span> <span class="token punctuation">(</span>Square s<span class="token operator">:</span> squares<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">return</span> s<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hints-for-identifying-cohesion" tabindex="-1"><a class="header-anchor" href="#hints-for-identifying-cohesion"><span>Hints for Identifying Cohesion</span></a></h2>
<ul>
<li>개념(concept)당 하나의 색상 사용</li>
<li>해당 concept의 모든 코드를 그 색상으로 강조<br>
→ Classes/methods는 적은 수의 색상을 가져야 함</li>
<li>&quot;Concept&quot;이 무엇인지 명확한 정의는 없음</li>
<li>Concepts는 더 작은 concepts로 분할될 수 있음
<ul>
<li>Graph with search vs.</li>
<li>Basic Graph + Search Algorithm vs.</li>
<li>Basic Graph + Search Framework + Concrete Search Algorithm, 등</li>
</ul>
</li>
<li>공학적 판단(engineering judgment) 필요</li>
</ul>
<h2 id="cohesion-discussion" tabindex="-1"><a class="header-anchor" href="#cohesion-discussion"><span>Cohesion: Discussion</span></a></h2>
<ul>
<li>Very Low Cohesion: Class가 매우 다른 기능 영역의 많은 것들을 전적으로 책임짐</li>
<li>Low Cohesion: Class가 하나의 기능 영역에서 복잡한 작업을 전적으로 책임짐</li>
<li>High Cohesion: Class가 하나의 기능 영역에서 적당한 책임을 가지며, 작업을 수행하기 위해 (다른) classes와 협력</li>
<li>High cohesion의 장점
<ul>
<li>Classes 유지보수 용이</li>
<li>이해 용이</li>
<li>종종 low coupling 지원</li>
<li>세분화된 책임으로 재사용성 지원</li>
</ul>
</li>
<li>경험 법칙 (Rule of thumb): high cohesion을 가진 class는 상대적으로 적은 수의 고도로 연관된 기능의 methods를 가지며, 너무 많은 작업을 수행하지 않음</li>
</ul>
<h2 id="coupling-vs-cohesion-극단적-케이스" tabindex="-1"><a class="header-anchor" href="#coupling-vs-cohesion-극단적-케이스"><span>Coupling vs Cohesion (극단적 케이스)</span></a></h2>
<ul>
<li>모든 코드가 하나의 class/method에
<ul>
<li>Very low coupling, 그러나 very low cohesion</li>
</ul>
</li>
<li>모든 구문(statement)이 분리됨
<ul>
<li>Very high cohesion, 그러나 very high coupling</li>
</ul>
</li>
<li>좋은 tradeoff를 찾을 것
<ul>
<li>low representational gap 등 다른 원칙들도 고려</li>
</ul>
</li>
</ul>
<h1 id="design-heuristic-information-expert" tabindex="-1"><a class="header-anchor" href="#design-heuristic-information-expert"><span>Design Heuristic: Information Expert</span></a></h1>
<h2 id="information-expert-design-heuristic" tabindex="-1"><a class="header-anchor" href="#information-expert-design-heuristic"><span>Information Expert (Design Heuristic)</span></a></h2>
<ul>
<li>Heuristic: 책임을 수행하는 데 필요한 정보를 가진 class에 책임을 할당
<ul>
<li>일반적으로 공통적인 직관을 따름</li>
</ul>
</li>
<li>Domain Model classes 대신 Software classes
<ul>
<li>Software classes가 아직 존재하지 않는 경우, Domain Model에서 적절한 추상화(abstractions)를 찾음 (→ correspondence)</li>
</ul>
</li>
<li>Design process: Domain model에서 도출
<ul>
<li>핵심 원칙: Low representational gap, low coupling</li>
</ul>
</li>
</ul>
<h2 id="information-expert-example-1" tabindex="-1"><a class="header-anchor" href="#information-expert-example-1"><span>Information Expert: Example 1</span></a></h2>
<ul>
<li>어느 class가 shipment의 무게를 계산하는 데 필요한 모든 정보를 가지고 있는가?</li>
</ul>
<h2 id="information-expert-example-2" tabindex="-1"><a class="header-anchor" href="#information-expert-example-2"><span>Information Expert: Example 2</span></a></h2>
<p><img src="@source/se/image-39.png" alt="alt text"></p>
<ul>
<li>판매(sale)의 총합(grand total)을 아는 책임은 누구에게 있는가?</li>
</ul>
<table>
<thead>
<tr>
<th>Design Class</th>
<th>Responsibility</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sale</td>
<td>판매 총액(sale total)을 앎</td>
</tr>
<tr>
<td>SalesLineItem</td>
<td>라인 아이템 소계(line item subtotal)를 앎</td>
</tr>
<tr>
<td>ProductSpecification</td>
<td>제품 가격(product price)을 앎</td>
</tr>
</tbody>
</table>
<h2 id="information-expert-→-do-it-myself-strategy" tabindex="-1"><a class="header-anchor" href="#information-expert-→-do-it-myself-strategy"><span>Information Expert → &quot;Do It Myself Strategy&quot;</span></a></h2>
<ul>
<li>Expert는 보통 software object가 자신이 나타내는 무생물(inanimate) 실제 세계 사물에 대해 일반적으로 수행되는 작업들을 직접 수행하는 설계로 이어짐
<ul>
<li>판매(sale)는 당신에게 총액을 말해주지 않음; 그것은 무생물</li>
</ul>
</li>
<li>OO design에서, 모든 software objects는 &quot;살아있고&quot; &quot;생명(animated)&quot;이 있으며, 책임을 맡고 일을 할 수 있음</li>
<li>그들은 자신이 아는 정보와 관련된 일을 함</li>
</ul>
<h1 id="design-heuristic-creator" tabindex="-1"><a class="header-anchor" href="#design-heuristic-creator"><span>Design Heuristic: Creator</span></a></h1>
<h2 id="creator-design-heuristic" tabindex="-1"><a class="header-anchor" href="#creator-design-heuristic"><span>Creator (Design Heuristic)</span></a></h2>
<ul>
<li>Problem: 누가 A를 생성하는가?</li>
<li>Solution: 다음과 같은 경우 B에게 class A의 instance 생성 책임 할당
<ul>
<li>B가 A objects를 aggregate, B가 A objects를 포함, B가 A objects의 instances를 기록, B가 A objects를 밀접하게 사용, B가 A objects 생성에 필요한 초기화 data를 가짐 (많을수록 좋음)</li>
<li>선택지가 있는 경우, B가 A objects를 aggregate 하거나 포함하는 것을 선호</li>
</ul>
</li>
<li>Key idea: Creator는 어차피 참조(reference)를 유지해야 하며, 생성된 object를 자주 사용하게 될 것</li>
<li>Process: Domain model, interaction diagrams에서 추출
<ul>
<li>핵심 원칙: Low coupling, low representational gap</li>
</ul>
</li>
</ul>
<h2 id="creator-example" tabindex="-1"><a class="header-anchor" href="#creator-example"><span>Creator: Example</span></a></h2>
<ul>
<li>Beetle objects 생성 책임은 누구에게 있는가?
<ul>
<li>Creator pattern은 Tree를 제안</li>
</ul>
</li>
</ul>
<p><img src="@source/se/image-40.png" alt="alt text"></p>
<ul>
<li>Interaction diagram:</li>
</ul>
<p><img src="@source/se/image-41.png" alt="alt text"></p>
<h2 id="creator-grasp" tabindex="-1"><a class="header-anchor" href="#creator-grasp"><span>Creator (GRASP)</span></a></h2>
<ul>
<li>Problem: 객체 생성 책임 할당
<ul>
<li>Graph에서 Nodes는 누가 생성하는가?</li>
<li><code v-pre>SalesItem</code>의 instances는 누가 생성하는가?</li>
<li><code v-pre>Simulation</code>에서 Children은 누가 생성하는가?</li>
<li>Bluemarble 게임에서 <code v-pre>Tiles</code>는 누가 생성하는가?</li>
</ul>
</li>
<li>AI? Player? Main class? Board? Meeple(Dog)?</li>
</ul>
<h2 id="creator-discussion-of-design-goals-principles" tabindex="-1"><a class="header-anchor" href="#creator-discussion-of-design-goals-principles"><span>Creator: Discussion of Design Goals/Principles</span></a></h2>
<ul>
<li>Low coupling, high cohesion 증진
<ul>
<li>Class가 참조해야 할 objects 생성 책임</li>
<li>Objects를 직접 생성하면, object 생성을 위해 다른 class에 의존하는 것을 피함</li>
</ul>
</li>
<li>Evolvability (design for change) 증진
<ul>
<li>Object 생성이 숨겨져(hidden), 로컬에서 교체 가능</li>
</ul>
</li>
<li>Contra(반대): 때때로 object는 특별한 방식으로 생성되어야 함
<ul>
<li>복잡한 초기화</li>
<li>다른 상황에서 다른 classes를 instantiate</li>
<li>이 경우, cohesion은 생성을 다른 object에 두도록 제안
<ul>
<li>builder, factory method 같은 design patterns 참고</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="other-design-heuristics" tabindex="-1"><a class="header-anchor" href="#other-design-heuristics"><span>Other Design Heuristics</span></a></h2>
<ul>
<li>Mutability 최소화</li>
<li>Conceptual weight 최소화</li>
<li>상속(Inheritance)보다 composition/delegation 선호</li>
<li>Coupling을 줄이기 위해 indirection 사용</li>
</ul>
<h2 id="object-level-artifacts-of-this-design-process" tabindex="-1"><a class="header-anchor" href="#object-level-artifacts-of-this-design-process"><span>Object-level Artifacts of This Design Process</span></a></h2>
<ul>
<li><strong>Object interaction diagrams</strong>는 objects에 methods를 추가
<ul>
<li>추가적인 data 책임 추론 가능</li>
<li>추가적인 data types 및 architectural patterns 추론 가능</li>
</ul>
</li>
<li><strong>Object model</strong>은 중요한 설계 결정(design decisions)을 종합(aggregates)
<ul>
<li>구현 가이드(implementation guide) 역할</li>
</ul>
</li>
</ul>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<ul>
<li>Design은 품질 속성(quality attributes)에 의해 주도됨
<ul>
<li>Evolvability, separate development, reuse, performance, ...</li>
</ul>
</li>
<li>Design principles는 품질 달성을 위한 지침 제공
<ul>
<li>Low coupling, high cohesion, high correspondence, ...</li>
</ul>
</li>
<li>GRASP design heuristics는 이러한 원칙들을 증진
<ul>
<li>Creator, Expert, Controller, ...</li>
</ul>
</li>
</ul>
</div></template>


