<template><div><h1 id="_10-1-abstract-data-types-and-encapsulation-constructs" tabindex="-1"><a class="header-anchor" href="#_10-1-abstract-data-types-and-encapsulation-constructs"><span>10.1. Abstract Data Types and Encapsulation Constructs</span></a></h1>
<DateMeta />
<h2 id="what-do-we-study-in-this-chapter" tabindex="-1"><a class="header-anchor" href="#what-do-we-study-in-this-chapter"><span>What do we study in this chapter?</span></a></h2>
<ul>
<li>The concept of abstraction</li>
<li>Design issues for abstract data types</li>
<li>Language examples</li>
<li>Parameterized abstract data types</li>
<li>Encapsulation constructs</li>
<li>Naming encapsulations</li>
</ul>
<h2 id="abstraction" tabindex="-1"><a class="header-anchor" href="#abstraction"><span>Abstraction</span></a></h2>
<ul>
<li>View/representation of entity that includes only the most significant attributes</li>
<li>Common features: two wings, two legs, a tail, and feathers → They are skipped when we describe each bird separately</li>
<li>Specific feature: black for crow, striped types for sparrows ..</li>
<li>Fundamental in the computer science</li>
<li>Process abstraction
<ul>
<li>Subprograms</li>
<li>Nearly all language support</li>
<li><code v-pre>sortInt(list, listLen)</code></li>
<li>When sorting list, we don't need details of implementations: Merge, quick, select, insertion sorts, whatever...</li>
<li>Only attributes that we should take cares: Name of list, types of elements, list's length</li>
</ul>
</li>
<li>Data abstraction
<ul>
<li>Began in 1960 with COBOL</li>
<li>Record type (struct in C-based)</li>
<li>Includes subprograms that manipulate its data</li>
<li>Enclosure with access controls (details can be hidden)</li>
<li>Instance of abstract data type: object</li>
</ul>
</li>
</ul>
<h2 id="abstract-data-type-adt" tabindex="-1"><a class="header-anchor" href="#abstract-data-type-adt"><span>Abstract data type (ADT)</span></a></h2>
<ul>
<li>Language-defined types as ADT
<ul>
<li>Floating-point type</li>
<li>Provide means of storing, arithmetic operations</li>
<li>We don't need actual format of floating-point data</li>
<li>We can not directly manipulate actual representation (only possible by built-in operations)</li>
</ul>
</li>
<li>User-defined ADT
<ul>
<li>Satisfies the following conditions</li>
<li>Representation of object is hidden from program unit</li>
<li>Only operations possible are those provided in the type's definition</li>
<li>Single syntactic unit contains the declarations of the type and of any operations on it</li>
</ul>
</li>
<li>Advantages of hiding data:
<ul>
<li>Reliability: user code can't access internals, thus compromising other users' use of object</li>
<li>Reduces the range of code and variables of which the programmer must be aware</li>
<li>Reduced name conflicts</li>
<li>[EX] Array-based stack → Linked list-based stack: Client codes need not be changed</li>
<li>To access data members: Indirectly access by getter and setters</li>
<li>Read-only version is possible by only providing getters</li>
<li>Constraints can be included by setters (enforce range of data)</li>
<li>The actual implementation of the data member can be changed without affecting the clients if getters and setters are the only access</li>
</ul>
</li>
<li>Advantages having single syntactic unit for type:
<ul>
<li>Provides way to organize program</li>
<li>Enhances modifiability: everything needed for data structure is together in one place</li>
<li>Separate compilation</li>
</ul>
</li>
<li>Language requirement for ADT
<ul>
<li>Syntactic unit for encapsulating type definition (i.e class in C++)</li>
<li>Way to make type names, method/subprogram headers available to clients while hiding actual definitions (i.e. private, protected in C++)</li>
<li>Primitive operations on types must be part of the compiler/interpreter</li>
</ul>
</li>
<li>[EX] Stack: Only allows access to the data element at one of its ends, the top. <code v-pre>pop()</code> is used as getter for element at top</li>
</ul>
<h2 id="design-issue" tabindex="-1"><a class="header-anchor" href="#design-issue"><span>Design issue</span></a></h2>
<ul>
<li>What is the form of the container for the interface to the type?</li>
<li>Can abstract types be parameterized?</li>
<li>What access controls are provided?</li>
<li>Is the specification of the type physically separate from its implementation?</li>
</ul>
<h2 id="language-example-ada" tabindex="-1"><a class="header-anchor" href="#language-example-ada"><span>Language example (Ada)</span></a></h2>
<ul>
<li>United states department of defence (DOD) issued to prevent explosion of the number of programming languages</li>
<li>Used in applications (aerospace &amp; defence, civil aviation and rail) requiring high degrees of safety</li>
<li>Used in embedded real-time systems (with low memory requirement)</li>
<li>Very strong typing</li>
<li>No type inference</li>
<li>No structural typing</li>
<li>(<code v-pre>.adb</code>) extension</li>
</ul>
<p>Control logic (if, case):</p>
<div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token keyword">With</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Text_IO</span><span class="token punctuation">;</span> <span class="token keyword">Use</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Text_IO</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">With</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Integer_Text_IO</span><span class="token punctuation">;</span> <span class="token keyword">Use</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Integer_Text_IO</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">procedure</span> <span class="token variable">Program</span> <span class="token keyword">is</span></span>
<span class="line"><span class="token variable">N</span> <span class="token punctuation">:</span> <span class="token variable">Integer</span><span class="token punctuation">;</span> <span class="token comment">-- declaration</span></span>
<span class="line"><span class="token keyword">begin</span></span>
<span class="line"><span class="token variable">Get</span><span class="token punctuation">(</span><span class="token variable">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token variable">N</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">then</span> <span class="token comment">-- if elsif else end if</span></span>
<span class="line"><span class="token variable">Put_Line</span><span class="token punctuation">(</span><span class="token string">"Positive"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">elsif</span> <span class="token variable">N</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">then</span></span>
<span class="line"><span class="token variable">Put_Line</span><span class="token punctuation">(</span><span class="token string">"Zero"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line"><span class="token variable">Put_Line</span><span class="token punctuation">(</span><span class="token string">"Negative"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Program</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token keyword">With</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Text_IO</span><span class="token punctuation">;</span> <span class="token keyword">Use</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Text_IO</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">With</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Integer_Text_IO</span><span class="token punctuation">;</span> <span class="token keyword">Use</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Integer_Text_IO</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">procedure</span> <span class="token variable">Program</span> <span class="token keyword">is</span></span>
<span class="line"><span class="token variable">N</span> <span class="token punctuation">:</span> <span class="token variable">Integer</span><span class="token punctuation">;</span> <span class="token comment">-- declaration</span></span>
<span class="line"><span class="token keyword">begin</span></span>
<span class="line"><span class="token variable">Get</span><span class="token punctuation">(</span><span class="token variable">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">case</span> <span class="token variable">N</span> <span class="token keyword">is</span> <span class="token comment">-- case statement</span></span>
<span class="line"><span class="token keyword">when</span> <span class="token number">0</span> | <span class="token number">1</span><span class="token punctuation">..</span><span class="token number">255</span> <span class="token operator">=></span></span>
<span class="line"><span class="token variable">Put_Line</span><span class="token punctuation">(</span><span class="token string">"Zero or positive"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">when</span> <span class="token operator">-</span><span class="token number">255</span><span class="token punctuation">..</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">=></span></span>
<span class="line"><span class="token variable">Put_Line</span><span class="token punctuation">(</span><span class="token string">"Negative"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">when</span> <span class="token keyword">others</span> <span class="token operator">=></span></span>
<span class="line"><span class="token variable">Put_Line</span><span class="token punctuation">(</span><span class="token string">"Out of range"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token keyword">case</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Program</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Control logic (for, loop):</p>
<div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token keyword">With</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Text_IO</span><span class="token punctuation">;</span> <span class="token keyword">Use</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Text_IO</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">With</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Integer_Text_IO</span><span class="token punctuation">;</span> <span class="token keyword">Use</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Integer_Text_IO</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">procedure</span> <span class="token variable">Program</span> <span class="token keyword">is</span></span>
<span class="line"><span class="token variable">N</span> <span class="token punctuation">:</span> <span class="token variable">Integer</span><span class="token punctuation">;</span> <span class="token comment">-- declaration</span></span>
<span class="line"><span class="token keyword">begin</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token variable">I</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token punctuation">..</span> <span class="token number">5</span> <span class="token keyword">loop</span> <span class="token comment">-- loop</span></span>
<span class="line"><span class="token variable">N</span> <span class="token operator">:=</span> <span class="token variable">I</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">-- assignment</span></span>
<span class="line"><span class="token variable">Put_Line</span><span class="token punctuation">(</span><span class="token variable">Integer</span><span class="token attribute attr-name">'Image</span><span class="token punctuation">(</span><span class="token variable">N</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">" times!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token keyword">loop</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Program</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token keyword">With</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Text_IO</span><span class="token punctuation">;</span> <span class="token keyword">Use</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Text_IO</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">With</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Integer_Text_IO</span><span class="token punctuation">;</span> <span class="token keyword">Use</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Integer_Text_IO</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">procedure</span> <span class="token variable">Program</span> <span class="token keyword">is</span></span>
<span class="line"><span class="token variable">I</span> <span class="token punctuation">:</span> <span class="token variable">Integer</span> <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">-- declaration</span></span>
<span class="line"><span class="token variable">N</span> <span class="token punctuation">:</span> <span class="token variable">Integer</span><span class="token punctuation">;</span> <span class="token comment">-- declaration</span></span>
<span class="line"><span class="token keyword">begin</span></span>
<span class="line"><span class="token keyword">loop</span></span>
<span class="line"><span class="token variable">N</span> <span class="token operator">:=</span> <span class="token variable">I</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">Put_Line</span><span class="token punctuation">(</span><span class="token variable">Integer</span><span class="token attribute attr-name">'Image</span><span class="token punctuation">(</span><span class="token variable">N</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">" times!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">exit</span> <span class="token keyword">when</span> <span class="token variable">I</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">-- termination condition</span></span>
<span class="line"><span class="token variable">I</span> <span class="token operator">:=</span> <span class="token variable">I</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">-- increase</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token keyword">loop</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Program</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sub program and block:</p>
<div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token keyword">With</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Text_IO</span><span class="token punctuation">;</span> <span class="token keyword">Use</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Text_IO</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">With</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Integer_Text_IO</span><span class="token punctuation">;</span> <span class="token keyword">Use</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Integer_Text_IO</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">procedure</span> <span class="token variable">Program</span> <span class="token keyword">is</span></span>
<span class="line"><span class="token variable">N</span> <span class="token punctuation">:</span> <span class="token variable">Integer</span><span class="token punctuation">;</span> <span class="token comment">-- declaration</span></span>
<span class="line"><span class="token keyword">procedure</span> <span class="token variable">Sub</span><span class="token punctuation">(</span><span class="token variable">A</span><span class="token punctuation">:</span> <span class="token variable">Integer</span><span class="token punctuation">)</span> <span class="token keyword">is</span> <span class="token comment">-- sub program</span></span>
<span class="line"><span class="token keyword">begin</span></span>
<span class="line"><span class="token variable">Put_Line</span><span class="token punctuation">(</span><span class="token string">"Sub program"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">Put</span><span class="token punctuation">(</span><span class="token variable">A</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Sub</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">begin</span></span>
<span class="line"><span class="token variable">Get</span><span class="token punctuation">(</span><span class="token variable">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">Sub</span><span class="token punctuation">(</span><span class="token variable">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Program</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token keyword">With</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Text_IO</span><span class="token punctuation">;</span> <span class="token keyword">Use</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Text_IO</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">With</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Integer_Text_IO</span><span class="token punctuation">;</span> <span class="token keyword">Use</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Integer_Text_IO</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">procedure</span> <span class="token variable">Program</span> <span class="token keyword">is</span></span>
<span class="line"><span class="token keyword">begin</span></span>
<span class="line"><span class="token keyword">declare</span> <span class="token comment">-- block</span></span>
<span class="line"><span class="token variable">N</span> <span class="token punctuation">:</span> <span class="token variable">Integer</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">begin</span></span>
<span class="line"><span class="token variable">Get</span><span class="token punctuation">(</span><span class="token variable">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">Put</span><span class="token punctuation">(</span><span class="token variable">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Program</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">-- "N" is undefined</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sub program (parameter):</p>
<div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token comment">-- assignment to "in" mode parameter not allowed</span></span>
<span class="line"><span class="token keyword">procedure</span> <span class="token variable">Program</span> <span class="token keyword">is</span></span>
<span class="line"><span class="token variable">N</span> <span class="token punctuation">:</span> <span class="token variable">Integer</span><span class="token punctuation">;</span> <span class="token comment">-- declaration</span></span>
<span class="line"><span class="token keyword">procedure</span> <span class="token variable">Sub</span><span class="token punctuation">(</span><span class="token variable">A</span><span class="token punctuation">:</span> <span class="token variable">Integer</span><span class="token punctuation">)</span> <span class="token keyword">is</span> <span class="token comment">-- sub program</span></span>
<span class="line"><span class="token keyword">begin</span></span>
<span class="line"><span class="token variable">A</span> <span class="token operator">:=</span> <span class="token variable">A</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Sub</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">begin</span></span>
<span class="line"><span class="token variable">Get</span><span class="token punctuation">(</span><span class="token variable">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">Put</span><span class="token punctuation">(</span><span class="token variable">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">Sub</span><span class="token punctuation">(</span><span class="token variable">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">Put</span><span class="token punctuation">(</span><span class="token variable">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Program</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token keyword">procedure</span> <span class="token variable">Program</span> <span class="token keyword">is</span></span>
<span class="line"><span class="token variable">N</span> <span class="token punctuation">:</span> <span class="token variable">Integer</span><span class="token punctuation">;</span> <span class="token comment">-- declaration</span></span>
<span class="line"><span class="token keyword">procedure</span> <span class="token variable">Sub</span><span class="token punctuation">(</span><span class="token variable">A</span><span class="token punctuation">:</span> <span class="token keyword">in</span> <span class="token keyword">out</span> <span class="token variable">Integer</span><span class="token punctuation">)</span> <span class="token keyword">is</span> <span class="token comment">-- sub program</span></span>
<span class="line"><span class="token keyword">begin</span></span>
<span class="line"><span class="token variable">A</span> <span class="token operator">:=</span> <span class="token variable">A</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Sub</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">begin</span></span>
<span class="line"><span class="token variable">Get</span><span class="token punctuation">(</span><span class="token variable">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">Put</span><span class="token punctuation">(</span><span class="token variable">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">Sub</span><span class="token punctuation">(</span><span class="token variable">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">Put</span><span class="token punctuation">(</span><span class="token variable">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Program</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">-- 12</span></span>
<span class="line"><span class="token comment">-- 14</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Function:</p>
<div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token keyword">With</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Text_IO</span><span class="token punctuation">;</span> <span class="token keyword">Use</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Text_IO</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">With</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Integer_Text_IO</span><span class="token punctuation">;</span> <span class="token keyword">Use</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Integer_Text_IO</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">With</span> <span class="token variable">SumInt</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">procedure</span> <span class="token variable">Program</span> <span class="token keyword">is</span></span>
<span class="line"><span class="token variable">N</span> <span class="token punctuation">:</span> <span class="token variable">Integer</span><span class="token punctuation">;</span> <span class="token comment">-- declaration</span></span>
<span class="line"><span class="token variable">M</span> <span class="token punctuation">:</span> <span class="token variable">Integer</span><span class="token punctuation">;</span> <span class="token comment">-- declaration</span></span>
<span class="line"><span class="token variable">NM</span> <span class="token punctuation">:</span> <span class="token variable">Integer</span><span class="token punctuation">;</span> <span class="token comment">-- declaration</span></span>
<span class="line"><span class="token keyword">begin</span></span>
<span class="line"><span class="token variable">Get</span><span class="token punctuation">(</span><span class="token variable">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">Get</span><span class="token punctuation">(</span><span class="token variable">M</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">NM</span> <span class="token operator">:=</span> <span class="token variable">SumInt</span><span class="token punctuation">(</span><span class="token variable">N</span><span class="token punctuation">,</span> <span class="token variable">M</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">Put</span><span class="token punctuation">(</span><span class="token variable">NM</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Program</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token variable">SumInt</span><span class="token punctuation">(</span><span class="token variable">A</span><span class="token punctuation">,</span> <span class="token variable">B</span><span class="token punctuation">:</span> <span class="token variable">Integer</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token variable">Integer</span> <span class="token keyword">is</span></span>
<span class="line"><span class="token keyword">begin</span></span>
<span class="line"><span class="token keyword">return</span> <span class="token variable">A</span> <span class="token operator">+</span> <span class="token variable">B</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">SumInt</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Encapsulation construct: package
<ul>
<li>Interface: specification package</li>
<li>Implementation: body package</li>
</ul>
</li>
<li>Information hiding — public and private parts of specification package
<ul>
<li>Public part: name, maybe representation of any unhidden types</li>
<li>Private part:
<ul>
<li>Representation of the abstract type</li>
<li>Private types have built-in operations for assignment, comparison</li>
<li>Limited private types have no built-in operations</li>
</ul>
</li>
</ul>
</li>
<li>Reasons for the public/private spec package:
<ul>
<li>The compiler must be able to see the representation after seeing only the spec package</li>
<li>Clients must see the type name, but not the representation (they also cannot see the private part)</li>
</ul>
</li>
</ul>
<p>Specification:</p>
<div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token keyword">package</span> <span class="token variable">Stack_Pack</span> <span class="token keyword">is</span></span>
<span class="line"><span class="token comment">-- The visible entities, or public interface</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token variable">stack_type</span> <span class="token keyword">is</span> <span class="token keyword">limited</span> <span class="token keyword">private</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">max_size</span><span class="token punctuation">:</span> <span class="token keyword">constant</span> <span class="token operator">:=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token variable">empty</span><span class="token punctuation">(</span><span class="token variable">stk</span><span class="token punctuation">:</span> <span class="token keyword">in</span> <span class="token variable">stack_type</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token variable">Boolean</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">procedure</span> <span class="token variable">push</span><span class="token punctuation">(</span><span class="token variable">stk</span><span class="token punctuation">:</span> <span class="token keyword">in</span> <span class="token keyword">out</span> <span class="token variable">stack_type</span><span class="token punctuation">;</span> <span class="token variable">elem</span><span class="token punctuation">:</span> <span class="token keyword">in</span> <span class="token variable">Integer</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">procedure</span> <span class="token variable">pop</span><span class="token punctuation">(</span><span class="token variable">stk</span><span class="token punctuation">:</span> <span class="token keyword">in</span> <span class="token keyword">out</span> <span class="token variable">stack_type</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token variable">top</span><span class="token punctuation">(</span><span class="token variable">stk</span><span class="token punctuation">:</span> <span class="token keyword">in</span> <span class="token variable">stack_type</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token variable">Integer</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">-- The part that is hidden from clients</span></span>
<span class="line"><span class="token keyword">private</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token variable">list_type</span> <span class="token keyword">is</span> <span class="token keyword">array</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token variable">max_size</span><span class="token punctuation">)</span> <span class="token keyword">of</span> <span class="token variable">Integer</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token variable">stack_type</span> <span class="token keyword">is</span> <span class="token keyword">record</span></span>
<span class="line"><span class="token variable">list</span><span class="token punctuation">:</span> <span class="token variable">list_type</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">topsub</span><span class="token punctuation">:</span> <span class="token variable">Integer</span> <span class="token keyword">range</span> <span class="token number">0</span><span class="token punctuation">..</span><span class="token variable">max_size</span> <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token keyword">record</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Stack_Pack</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token keyword">with</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Text_IO</span><span class="token punctuation">;</span> <span class="token keyword">use</span> <span class="token variable">Ada</span><span class="token punctuation">.</span><span class="token variable">Text_IO</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">package</span> <span class="token keyword">body</span> <span class="token variable">Stack_Pack</span> <span class="token keyword">is</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token variable">Empty</span><span class="token punctuation">(</span><span class="token variable">Stk</span> <span class="token punctuation">:</span> <span class="token keyword">in</span> <span class="token variable">Stack_Type</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token variable">Boolean</span> <span class="token keyword">is</span></span>
<span class="line"><span class="token keyword">begin</span></span>
<span class="line"><span class="token keyword">return</span> <span class="token variable">Stk</span><span class="token punctuation">.</span><span class="token variable">Topsub</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Empty</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">procedure</span> <span class="token variable">Push</span><span class="token punctuation">(</span></span>
<span class="line"><span class="token variable">Stk</span><span class="token punctuation">:</span> <span class="token keyword">in</span> <span class="token keyword">out</span> <span class="token variable">Stack_Type</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">Element</span> <span class="token punctuation">:</span> <span class="token keyword">in</span> <span class="token variable">Integer</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token keyword">is</span></span>
<span class="line"><span class="token keyword">begin</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token variable">Stk</span><span class="token punctuation">.</span><span class="token variable">Topsub</span> <span class="token operator">>=</span> <span class="token variable">Max_Size</span> <span class="token keyword">then</span></span>
<span class="line"><span class="token variable">Put_Line</span><span class="token punctuation">(</span><span class="token string">"ERROR – Stack overflow"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line"><span class="token variable">Stk</span><span class="token punctuation">.</span><span class="token variable">Topsub</span> <span class="token operator">:=</span> <span class="token variable">Stk</span><span class="token punctuation">.</span><span class="token variable">Topsub</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">Stk</span><span class="token punctuation">.</span><span class="token variable">List</span><span class="token punctuation">(</span><span class="token variable">Stk</span><span class="token punctuation">.</span><span class="token variable">Topsub</span><span class="token punctuation">)</span> <span class="token operator">:=</span> <span class="token variable">Element</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token keyword">if</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Push</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">..</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Stack_Pack</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Use_Stacks:</p>
<div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token keyword">with</span> <span class="token variable">Stack_Pack</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token variable">Stack_Pack</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">procedure</span> <span class="token variable">Use_Stacks</span> <span class="token keyword">is</span></span>
<span class="line"><span class="token variable">Topone</span> <span class="token punctuation">:</span> <span class="token variable">Integer</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">Stack</span> <span class="token punctuation">:</span> <span class="token variable">Stack_Type</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">begin</span></span>
<span class="line"><span class="token variable">Push</span><span class="token punctuation">(</span><span class="token variable">Stack</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">Push</span><span class="token punctuation">(</span><span class="token variable">Stack</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">Topone</span> <span class="token operator">:=</span> <span class="token variable">Top</span><span class="token punctuation">(</span><span class="token variable">Stack</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">Pop</span><span class="token punctuation">(</span><span class="token variable">Stack</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">..</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Use_Stacks</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>The first commercial language to support abstract data types (along with Modula-2)</li>
<li>Although Ada's design of abstract data types may seem complicated and repetitious, it clearly provides what is necessary</li>
</ul>
<h2 id="language-example-c" tabindex="-1"><a class="header-anchor" href="#language-example-c"><span>Language example (C++)</span></a></h2>
<ul>
<li>Encapsulation is via classes</li>
<li>ADT based on C struct</li>
<li>Classes are types</li>
<li>All instances of a class share copy of member functions (methods)</li>
<li>Each instance has its own copy of class data members (instance variables)</li>
<li>Instances can be static, stack dynamic, or heap dynamic</li>
<li>The complete definition can appear in the class, or only in its header</li>
<li>Information hiding:
<ul>
<li>Private clause for hidden entities</li>
<li>Public clause for interface entities</li>
<li>Protected clause for inheritance (later)</li>
</ul>
</li>
<li>Constructors:
<ul>
<li>Functions to initialize the data members — they don't create objects</li>
<li>May also allocate storage if part of the object is heap-dynamic</li>
<li>Can include parameters to provide parameterization of the objects</li>
<li>Implicitly called when an instance is created — but can be called explicitly, too</li>
<li>Name is the same as the class name</li>
</ul>
</li>
<li>Destructors:
<ul>
<li>Clean up after an instance is destroyed — usually just to reclaim heap storage</li>
<li>Implicitly called when the object's lifetime ends, or explicitly called</li>
<li>Name is the class name, preceded by a tilde (<code v-pre>~</code>)</li>
</ul>
</li>
</ul>
<p>Header file:</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token comment">// Stack.h - the header file for the Stack class</span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream.h></span></span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Stack</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">private</span><span class="token operator">:</span> <span class="token comment">//** These members are visible only to other</span></span>
<span class="line">         <span class="token comment">//** members and "friends" (see textbook)</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token operator">*</span>stackPtr<span class="token punctuation">;</span> <span class="token comment">// reference the heap-dynamic data</span></span>
<span class="line"><span class="token keyword">int</span> maxLen<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span> topPtr<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span> <span class="token comment">//** These members are visible to clients</span></span>
<span class="line"><span class="token function">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//** A constructor</span></span>
<span class="line"><span class="token operator">~</span><span class="token function">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//** A destructor</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Code file:</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token comment">// Stack.cpp - the implementation file for the Stack class</span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream.h></span></span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">"Stack.h"</span></span></span>
<span class="line"><span class="token keyword">using</span> std<span class="token double-colon punctuation">::</span>cout<span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">Stack</span><span class="token double-colon punctuation">::</span><span class="token function">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//** A constructor</span></span>
<span class="line">stackPtr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">maxLen <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span></span>
<span class="line">topPtr <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token class-name">Stack</span><span class="token double-colon punctuation">::</span><span class="token operator">~</span><span class="token function">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">delete</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> stackPtr<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">//** A destructor</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token class-name">Stack</span><span class="token double-colon punctuation">::</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">int</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>topPtr <span class="token operator">==</span> maxLen<span class="token punctuation">)</span></span>
<span class="line">cerr <span class="token operator">&lt;&lt;</span> <span class="token string">"Error in push--stack is full\n"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">else</span> stackPtr<span class="token punctuation">[</span><span class="token operator">++</span>topPtr<span class="token punctuation">]</span> <span class="token operator">=</span> number<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">int</span> topOne<span class="token punctuation">;</span></span>
<span class="line">Stack stk<span class="token punctuation">;</span> <span class="token comment">//** Create an instance of the Stack class</span></span>
<span class="line">stk<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">stk<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">17</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">topOne <span class="token operator">=</span> stk<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">stk<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Friends
<ul>
<li>Friend functions or classes</li>
<li>Allow access to private members from unrelated units</li>
<li>Must be declared inside a class</li>
<li>Necessary in C++</li>
</ul>
</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token comment">// Stack.h - the header file for the Stack class</span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream.h></span></span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Stack</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">private</span><span class="token operator">:</span> <span class="token comment">//** These members are visible only to other</span></span>
<span class="line">         <span class="token comment">//** members and "friends" (see textbook)</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token operator">*</span>stackPtr<span class="token punctuation">;</span> <span class="token comment">// reference the heap-dynamic data</span></span>
<span class="line"><span class="token keyword">friend</span> <span class="token keyword">class</span> <span class="token class-name">SubStack</span><span class="token punctuation">;</span> <span class="token comment">//Allow for sub stack class to access stack class</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span> <span class="token comment">//** These members are visible to clients</span></span>
<span class="line"><span class="token function">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//** A constructor</span></span>
<span class="line"><span class="token operator">~</span><span class="token function">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//** A destructor</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Similar in expressive power to that of Ada</li>
<li>Effective mechanisms for encapsulation and information hiding</li>
<li>Primary difference is that classes are types</li>
<li>Ada packages are more general encapsulations (like module)</li>
<li>Designed for more than data abstraction</li>
</ul>
<h2 id="language-example-objective-c" tabindex="-1"><a class="header-anchor" href="#language-example-objective-c"><span>Language example (Objective-C)</span></a></h2>
<ul>
<li>Based on C, Smalltalk (for method calls)</li>
<li>Classes, which are types</li>
<li>Used as Apple's standard programming language until the advent of Swift</li>
<li>C++ is a much more extensive language than Objective-C, and supports many functions</li>
<li>Objective-C was designed to perform almost everything at run time</li>
</ul>
<p>Interfaces (C-like <code v-pre>.h</code> file):</p>
<div class="language-objc line-numbers-mode" data-highlighter="prismjs" data-ext="objc"><pre v-pre><code class="language-objc"><span class="line"><span class="token keyword">@interface</span> class<span class="token operator">-</span>name<span class="token punctuation">:</span> parent<span class="token operator">-</span>class <span class="token punctuation">{</span></span>
<span class="line">instance variable declarations</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">method prototypes</span>
<span class="line"><span class="token keyword">@end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-objc line-numbers-mode" data-highlighter="prismjs" data-ext="objc"><pre v-pre><code class="language-objc"><span class="line"><span class="token keyword">@interface</span> Person<span class="token punctuation">:</span> NSObject <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">int</span> name<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span> id<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> speak<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">@end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Implementations (<code v-pre>.m</code> file):</p>
<div class="language-objc line-numbers-mode" data-highlighter="prismjs" data-ext="objc"><pre v-pre><code class="language-objc"><span class="line"><span class="token keyword">@implementation</span> class<span class="token operator">-</span>name</span>
<span class="line">method definitions</span>
<span class="line"><span class="token keyword">@end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-objc line-numbers-mode" data-highlighter="prismjs" data-ext="objc"><pre v-pre><code class="language-objc"><span class="line"><span class="token keyword">@implementation</span> Person</span>
<span class="line"><span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> speak<span class="token punctuation">{</span></span>
<span class="line"><span class="token function">NSLog</span> <span class="token punctuation">(</span><span class="token string">@"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">@end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Method prototypes
<ul>
<li><code v-pre>(+ | -) (return-type) method-name [: (formal-parameters)];</code></li>
<li><code v-pre>+</code>/<code v-pre>-</code> for class/instance methods (resp.)</li>
<li>Colon, parentheses — not included when no parameters</li>
<li>Odd nomenclature:
<ul>
<li>One parameter (name is <code v-pre>meth1:</code>): <code v-pre>(void) meth1: (int) x;</code></li>
<li>Two parameters (name is <code v-pre>meth2:second:</code>): <code v-pre>(int) meth2: (int) x second: (float) y;</code></li>
<li>Two parameters (name is <code v-pre>meth2::</code>): <code v-pre>(int) meth2: (int) x: (float) y;</code></li>
</ul>
</li>
<li>One parameter: Ex: <code v-pre>(int) foo: (int) x;</code> — Name of method is <code v-pre>foo:</code> — Message: (call): <code v-pre>[objectName foo: 3]</code> → <code v-pre>x = 3</code></li>
<li>Two parameters: Ex: <code v-pre>(int) foo: (int) x bar: (float) y;</code> — Name of method is <code v-pre>foo:bar:</code> — Message: <code v-pre>[objectName foo: 3 bar: 4.5]</code> → <code v-pre>x = 3, y = 4.5</code></li>
</ul>
</li>
</ul>
<p>Method definitions:</p>
<div class="language-objc line-numbers-mode" data-highlighter="prismjs" data-ext="objc"><pre v-pre><code class="language-objc"><span class="line"><span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> meth2<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> x second<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">)</span> y<span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">int</span> sum<span class="token punctuation">;</span></span>
<span class="line">sum <span class="token operator">=</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">return</span> sum<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Method call syntax
<ul>
<li><code v-pre>[object-name method-name];</code></li>
<li>[EX] <code v-pre>[myAdder add1: 7];</code></li>
<li>[EX] <code v-pre>[myAdder add1: 7: 5: 3];</code></li>
<li>For the method: <code v-pre>(int) meth2: (int) x second: (float) y;</code></li>
<li>The call would be like the following: <code v-pre>[myObject meth2: 7 second: 3.2];</code></li>
</ul>
</li>
<li>Initializers: constructors
<ul>
<li>Only initialize variables</li>
<li>Can have any name, and are only explicitly called</li>
<li>Initializers return the instance itself</li>
</ul>
</li>
<li>Create object → call alloc + initializer: <code v-pre>Adder *myAdder = [[Adder alloc] init];</code></li>
<li>All class instances are heap dynamic</li>
<li>To import standard prototypes (e.g., i/o): <code v-pre>#import &lt;Foundation/Foundation.h&gt;</code></li>
<li>The first thing a program must do is allocate and initialize a pool of storage for its data (pool's variable is pool in this case): <code v-pre>NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];</code></li>
<li>At the end of the program, the pool is released with: <code v-pre>[pool drain];</code></li>
</ul>
<div class="language-objc line-numbers-mode" data-highlighter="prismjs" data-ext="objc"><pre v-pre><code class="language-objc"><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token expression"><span class="token operator">&lt;</span>Foundation<span class="token operator">/</span>Foundation<span class="token punctuation">.</span>h<span class="token operator">></span></span></span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span> argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">NSAutoreleasePool <span class="token operator">*</span> pool <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>NSAutoreleasePool alloc<span class="token punctuation">]</span> init<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">NSLog</span> <span class="token punctuation">(</span><span class="token string">@"Hello World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">[</span>pool drain<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Information hiding
<ul>
<li><code v-pre>@public</code>, <code v-pre>@private</code>, <code v-pre>@protected</code> — specify instance variable access
<ul>
<li><code v-pre>@public</code>: accessible anywhere</li>
<li><code v-pre>@private</code>: accessible only in class where defined</li>
<li><code v-pre>@protected</code>: accessible in that class and any subclasses</li>
</ul>
</li>
<li>Default access is <code v-pre>@protected</code></li>
<li>However: no really good way to restrict access to methods (헤더에 선언하지 않고 구현 파일(<code v-pre>.m</code>)에만 정의하는 방법을 씀)</li>
<li>Getter and setter methods for instance variables
<ul>
<li>Name of getter is always name of instance variable</li>
<li>Name of setter is always the word set with the capitalized variable name attached (e.g., <code v-pre>setFoo</code>)</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-objc line-numbers-mode" data-highlighter="prismjs" data-ext="objc"><pre v-pre><code class="language-objc"><span class="line"><span class="token comment">// The getter for sum</span></span>
<span class="line"><span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> sum <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">return</span> sum<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// The setter for sum</span></span>
<span class="line"><span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> setSum<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> s<span class="token punctuation">{</span></span>
<span class="line">sum <span class="token operator">=</span> s<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>myObject setSum<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span>   <span class="token comment">// used as method calls</span></span>
<span class="line">myObject<span class="token punctuation">.</span>sum <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>       <span class="token comment">// used as dot notation</span></span>
<span class="line"></span>
<span class="line">newSum <span class="token operator">=</span> <span class="token punctuation">[</span>myObject sum<span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// used as method calls</span></span>
<span class="line">newSum <span class="token operator">=</span> myObject<span class="token punctuation">.</span>sum<span class="token punctuation">;</span>    <span class="token comment">// used as dot notation</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Can be implicitly generated if no additional constraints to be defined — called &quot;properties&quot; in this case</li>
<li><code v-pre>@property</code>: directive that automatically creates getters and setters (자동으로 getter와 setter를 생성하도록 지시하는 지시어)</li>
<li><code v-pre>@synthesize</code>: paired with <code v-pre>@property</code> in implementation (@property로 선언된 변수에 대해 실제 getter/setter 메서드를 생성)</li>
</ul>
<div class="language-objc line-numbers-mode" data-highlighter="prismjs" data-ext="objc"><pre v-pre><code class="language-objc"><span class="line"><span class="token keyword">@interface</span> Person<span class="token punctuation">:</span> NSObject <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">int</span> name<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span> id<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">@property</span> <span class="token keyword">int</span> name<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">@property</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> speak<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">@end</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">@implementation</span> Person</span>
<span class="line"><span class="token keyword">@synthesize</span> name<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">@synthesize</span> id<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> speak<span class="token punctuation">{</span></span>
<span class="line"><span class="token function">NSLog</span> <span class="token punctuation">(</span><span class="token string">@"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">@end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-objc line-numbers-mode" data-highlighter="prismjs" data-ext="objc"><pre v-pre><code class="language-objc"><span class="line"><span class="token comment">// stack.m – interface and implementation for a simple stack</span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">import</span> <span class="token expression"><span class="token operator">&lt;</span>Foundation<span class="token operator">/</span>Foundation<span class="token punctuation">.</span>h<span class="token operator">></span></span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">@interface</span> Stack<span class="token punctuation">:</span> NSObject <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">int</span> stackArray<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span> stackPtr<span class="token punctuation">,</span> maxLen<span class="token punctuation">,</span> topSub<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> push<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> number<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> pop<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> top<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> empty<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">@end</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">@implementation</span> Stack</span>
<span class="line"><span class="token operator">-</span><span class="token punctuation">(</span>Stack <span class="token operator">*</span><span class="token punctuation">)</span> initWith <span class="token punctuation">{</span></span>
<span class="line">maxLen <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line">topSub <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">stackPtr <span class="token operator">=</span> stackArray<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">self</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// stack.m – continued</span></span>
<span class="line"><span class="token operator">-</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> push<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> number <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>topSub <span class="token operator">==</span> maxLen<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@"Error in push – stack is full"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line">stackPtr<span class="token punctuation">[</span><span class="token operator">++</span>topSub<span class="token punctuation">]</span> <span class="token operator">=</span> number<span class="token punctuation">;</span></span>
<span class="line">…</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-objc line-numbers-mode" data-highlighter="prismjs" data-ext="objc"><pre v-pre><code class="language-objc"><span class="line"><span class="token keyword">int</span> <span class="token function">main</span> <span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">int</span> temp<span class="token punctuation">;</span></span>
<span class="line">NSAutoreleasePool <span class="token operator">*</span>pool <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>NSAutoreleasePool alloc<span class="token punctuation">]</span> init<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">Stack <span class="token operator">*</span>myStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>Stack alloc<span class="token punctuation">]</span> initWith<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">[</span>myStack push<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">[</span>myStack push<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">temp <span class="token operator">=</span> <span class="token punctuation">[</span>myStack top<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@"Top element is: %i"</span><span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">[</span>myStack pop<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">temp <span class="token operator">=</span> <span class="token punctuation">[</span>myStack top<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@"Top element is: %i"</span><span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">temp <span class="token operator">=</span> <span class="token punctuation">[</span>myStack top<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">[</span>myStack pop<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">[</span>myStack release<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">[</span>pool drain<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// Top element is: 3</span></span>
<span class="line"><span class="token comment">// Top element is: 5</span></span>
<span class="line"><span class="token comment">// Error in top--stack is empty</span></span>
<span class="line"><span class="token comment">// Error in pop--stack is empty</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Small-talk (for its method calls) + C (for nearly everything else)</li>
<li>Interfaces and implementation sections</li>
<li>Constructors must be explicitly called</li>
</ul>
<h2 id="language-example-java" tabindex="-1"><a class="header-anchor" href="#language-example-java"><span>Language example (Java)</span></a></h2>
<ul>
<li>Similar to C++, except:
<ul>
<li>All user-defined types are classes</li>
<li>All objects are heap-dynamic</li>
<li>All objects accessed via reference variables</li>
<li>Methods in Java must be defined completely in a class</li>
</ul>
</li>
<li>Access control modifiers for class entities: <code v-pre>public</code>, <code v-pre>protected</code>, <code v-pre>package-private</code>, <code v-pre>private</code></li>
<li>Package scope: All entities in all classes in package that are not restricted by access control modifiers → visible throughout package</li>
<li>Eliminates need for C++'s friend functions &amp; classes</li>
</ul>
<table>
<thead>
<tr>
<th></th>
<th>The same class</th>
<th>The same package</th>
<th>The same package + inheritance</th>
<th>Other packages + inheritance</th>
<th>All classes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>public</code></td>
<td>O</td>
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
<td>O</td>
<td></td>
</tr>
<tr>
<td><code v-pre>package-private</code></td>
<td>O</td>
<td>O</td>
<td>O</td>
<td></td>
<td></td>
</tr>
<tr>
<td><code v-pre>private</code></td>
<td>O</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">class</span> <span class="token class-name">StackClass</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> stackRef<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> maxLen<span class="token punctuation">,</span> topIndex<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token class-name">StackClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// a constructor</span></span>
<span class="line">stackRef <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">maxLen <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span></span>
<span class="line">topPtr <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> push <span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>…<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> pop <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>…<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">int</span> top <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>…<span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">boolean</span> empty <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>…<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TstStack</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token class-name">StackClass</span> myStack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StackClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">myStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">myStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">29</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"29 is: "</span> <span class="token operator">+</span> myStack<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">myStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"42 is: "</span> <span class="token operator">+</span> myStack<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">myStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">myStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Produces an error message</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Abstract data types is similar to that of C++</li>
</ul>
<h2 id="language-example-c-1" tabindex="-1"><a class="header-anchor" href="#language-example-c-1"><span>Language example (C#)</span></a></h2>
<ul>
<li>Based on C++, Java</li>
<li>Adds two access modifiers, <code v-pre>internal</code> (within project) and <code v-pre>protected internal</code> (= protected and internal)</li>
<li>All class instances: heap dynamic</li>
<li>Default constructors — available for all classes</li>
<li>Garbage collection is used for most heap objects, so destructors are rarely used</li>
<li><code v-pre>struct</code>s are lightweight classes that do not support inheritance
<ul>
<li>Can have constructor, methods and data fields</li>
<li>Value types (opposed to reference type), allocated on the run-time stack</li>
<li>Pass-by-value</li>
</ul>
</li>
<li>Getter and setter methods to access data members (instance variables)</li>
<li>Properties:
<ul>
<li>Allows implementation of getters/setters without explicit method calls</li>
<li>ex: Assume <code v-pre>foo</code> is reference to the instance, <code v-pre>bar</code> is an instance variable
<ul>
<li><code v-pre>a = foo.bar;</code> // getter</li>
<li><code v-pre>foo.bar = 3.5;</code> // setter</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-csharp line-numbers-mode" data-highlighter="prismjs" data-ext="cs"><pre v-pre><code class="language-csharp"><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Weather</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> DegreeDays <span class="token punctuation">{</span> <span class="token comment">//** DegreeDays is a property</span></span>
<span class="line"><span class="token keyword">get</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token range operator">..</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">return</span> degreeDays<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">set</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">value</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token keyword">value</span> <span class="token operator">></span> <span class="token number">30</span><span class="token punctuation">)</span></span>
<span class="line">Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">"Value is out of range: {0}"</span><span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">else</span> degreeDays <span class="token operator">=</span> <span class="token keyword">value</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">int</span></span> degreeDays<span class="token punctuation">;</span></span>
<span class="line"><span class="token range operator">..</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Weather</span> w <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Weather</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name"><span class="token keyword">int</span></span> degreeDaysToday<span class="token punctuation">,</span> oldDegreeDays<span class="token punctuation">;</span></span>
<span class="line"><span class="token range operator">..</span><span class="token punctuation">.</span></span>
<span class="line">w<span class="token punctuation">.</span>DegreeDays <span class="token operator">=</span> degreeDaysToday<span class="token punctuation">;</span></span>
<span class="line"><span class="token range operator">..</span><span class="token punctuation">.</span></span>
<span class="line">oldDegreeDays <span class="token operator">=</span> w<span class="token punctuation">.</span>DegreeDays<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="language-example-ruby" tabindex="-1"><a class="header-anchor" href="#language-example-ruby"><span>Language example (Ruby)</span></a></h2>
<ul>
<li>Encapsulation construct: <code v-pre>class … end</code></li>
<li>Variable names:
<ul>
<li>Local: regular identifiers</li>
<li>Instance variables: begin with <code v-pre>@</code></li>
<li>Class variables: begin with <code v-pre>@@</code></li>
</ul>
</li>
<li>Instance
<ul>
<li>Variables and methods that can be used only when an object is created (<code v-pre>new</code>)</li>
<li>Instance variables have independent values between objects</li>
</ul>
</li>
<li>Class
<ul>
<li>Variables and methods that can be created by the class itself without creating an object</li>
<li>Class variables are shared by multiple objects created with the same class</li>
</ul>
</li>
<li>Methods: defined with function definition syntax (<code v-pre>def … end</code>)
<ul>
<li>instance method (<code v-pre>def … end</code>) ([ex] <code v-pre>Sample.new.print</code>)</li>
<li>class method (<code v-pre>def self.name … end</code>) ([ex] <code v-pre>Sample.print</code>)</li>
</ul>
</li>
</ul>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Sample</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">print</span></span></span>
<span class="line">puts <span class="token string-literal"><span class="token string">"I'm an instance method"</span></span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">obj <span class="token operator">=</span> <span class="token class-name">Sample</span><span class="token punctuation">.</span><span class="token keyword">new</span></span>
<span class="line">obj<span class="token punctuation">.</span>print</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Sample</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">print</span></span></span>
<span class="line">puts <span class="token string-literal"><span class="token string">"I'm a class method"</span></span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">Sample<span class="token punctuation">.</span>print</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Constructors:
<ul>
<li>Named <code v-pre>initialize</code> (initialize라는 이름으로 정의)</li>
<li>Only one per class (cannot be overloaded)</li>
<li>Implicitly called when <code v-pre>new</code> is called</li>
<li><code v-pre>new</code>는 클래스 메서드이며, 내부적으로 <code v-pre>allocate</code> + <code v-pre>initialize</code> 호출 순서를 따름</li>
<li>If additional constructors needed: different names, and they must call <code v-pre>new</code></li>
<li>Ruby에서는 생성자 오버로딩이 안 되기 때문에, 추가 생성자는 일반 클래스 메서드로 만들어야</li>
</ul>
</li>
<li>Class members can be marked <code v-pre>private</code> or <code v-pre>public</code> (default)</li>
<li>Classes are heap dynamic</li>
<li>Class extension
<ul>
<li>class inheritance:<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">class</span> <span class="token class-name">ChildClass</span> <span class="token operator">&lt;</span> SuperClass</span>
<span class="line"><span class="token operator">...</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>Additional class definitions (predefined <code v-pre>String</code> class can be extended):<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">class</span> <span class="token class-name">String</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">count_word</span></span></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">self</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token regex-literal"><span class="token regex">/\s+/</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span>size</span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>define a method in object (only usable in that object):<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Dog</span></span>
<span class="line"><span class="token operator">...</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">dog1 <span class="token operator">=</span> <span class="token class-name">Dog</span><span class="token punctuation">.</span><span class="token keyword">new</span></span>
<span class="line">dog2 <span class="token operator">=</span> <span class="token class-name">Dog</span><span class="token punctuation">.</span><span class="token keyword">new</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token class-name">dog1</span><span class="token punctuation">.</span><span class="token function">speak</span></span></span>
<span class="line">puts <span class="token string-literal"><span class="token string">"dog1 speak"</span></span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">dog1<span class="token punctuation">.</span>speak</span>
<span class="line">dog2<span class="token punctuation">.</span>speak <span class="token comment"># error</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>Mixin (Ruby가 다중 상속 없이도 코드 재사용과 기능 확장을 가능하게 함)
<ul>
<li>Reference module in class</li>
<li>Use it as if they are instance/class methods (<code v-pre>include</code>, <code v-pre>prepend</code>, <code v-pre>extend</code>)</li>
</ul>
</li>
</ul>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">module</span> <span class="token class-name">extraModule</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">func</span></span></span>
<span class="line">puts <span class="token string-literal"><span class="token string">"extra function"</span></span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">myClass</span></span>
<span class="line"><span class="token keyword">include</span><span class="token operator">/</span><span class="token keyword">prepend</span> extraModule</span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">func</span></span></span>
<span class="line">puts <span class="token string-literal"><span class="token string">"inside function"</span></span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">myclass <span class="token operator">=</span> myClass<span class="token punctuation">.</span><span class="token keyword">new</span></span>
<span class="line">myclass<span class="token punctuation">.</span>func</span>
<span class="line"><span class="token comment"># include → inside function</span></span>
<span class="line"><span class="token comment"># prepend → extra function</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>키워드</th>
<th>대상</th>
<th>효과</th>
<th>호출 방식</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>include</code></td>
<td>인스턴스</td>
<td>모듈의 메서드를 인스턴스 메서드로 주입</td>
<td><code v-pre>obj.method</code></td>
</tr>
<tr>
<td><code v-pre>prepend</code></td>
<td>인스턴스</td>
<td>모듈 메서드가 클래스 메서드를 오버라이드</td>
<td><code v-pre>obj.method</code></td>
</tr>
<tr>
<td><code v-pre>extend</code></td>
<td>클래스</td>
<td>모듈 메서드를 클래스 메서드로 주입</td>
<td><code v-pre>Class.method</code></td>
</tr>
</tbody>
</table>
<ul>
<li>Information hiding
<ul>
<li>Access control for methods in Ruby is dynamic</li>
<li>접근 제어 키워드를 어디에 쓰느냐에 따라 메서드들의 접근성이 달라짐</li>
</ul>
</li>
</ul>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">class</span> <span class="token class-name">MyClass</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">meth1</span></span></span>
<span class="line"><span class="token operator">...</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"><span class="token operator">...</span></span>
<span class="line"><span class="token keyword">private</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">meth7</span></span></span>
<span class="line"><span class="token operator">...</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"><span class="token operator">...</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token comment"># of class MyClass</span></span>
<span class="line"><span class="token comment"># This resets the default access for subsequently defined methods in the class</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">class</span> <span class="token class-name">MyClass</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">meth1</span></span></span>
<span class="line"><span class="token operator">...</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"><span class="token operator">...</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">meth7</span></span></span>
<span class="line"><span class="token operator">...</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">private</span> <span class="token symbol">:meth7</span><span class="token punctuation">,</span> <span class="token operator">...</span></span>
<span class="line"><span class="token operator">...</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token comment"># of class MyClass</span></span>
<span class="line"><span class="token comment"># Call the access control functions with the names of the specific methods as parameters</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Attributes
<ul>
<li>Instance data that are accessible through accessor methods are called attributes</li>
</ul>
</li>
</ul>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">sum</span></span>      <span class="token comment"># getter</span></span>
<span class="line"><span class="token variable">@sum</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">sum</span></span><span class="token operator">=</span><span class="token punctuation">(</span>new_sum<span class="token punctuation">)</span>  <span class="token comment"># setter</span></span>
<span class="line"><span class="token variable">@sum</span> <span class="token operator">=</span> new_sum</span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>attr_reader :sum, :total</code> — <code v-pre>attr_reader</code> method only allows the value to be read from the outside and cannot be changed</li>
<li><code v-pre>attr_writer :sum</code> — <code v-pre>attr_writer</code> only allows assignment of values</li>
</ul>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span></span>
<span class="line">attr_accessor <span class="token symbol">:name</span><span class="token punctuation">,</span> <span class="token symbol">:age</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"><span class="token comment"># equivalent to:</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">name</span></span><span class="token punctuation">;</span> <span class="token variable">@name</span><span class="token punctuation">;</span> <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">name</span></span><span class="token operator">=</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token variable">@name</span> <span class="token operator">=</span> val<span class="token punctuation">;</span> <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">age</span></span><span class="token punctuation">;</span> <span class="token variable">@age</span><span class="token punctuation">;</span> <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">age</span></span><span class="token operator">=</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token variable">@age</span> <span class="token operator">=</span> val<span class="token punctuation">;</span> <span class="token keyword">end</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">class</span> <span class="token class-name">StackClass</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">initialize</span></span></span>
<span class="line"><span class="token variable">@stackRef</span> <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span><span class="token keyword">new</span></span>
<span class="line"><span class="token variable">@maxLen</span> <span class="token operator">=</span> <span class="token number">100</span></span>
<span class="line"><span class="token variable">@topIndex</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">push</span></span><span class="token punctuation">(</span>number<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token variable">@topIndex</span> <span class="token operator">==</span> <span class="token variable">@maxLen</span></span>
<span class="line">puts <span class="token string-literal"><span class="token string">" Error in push – stack is full"</span></span></span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line"><span class="token variable">@topIndex</span> <span class="token operator">=</span> <span class="token variable">@topIndex</span> <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line"><span class="token variable">@stackRef</span><span class="token punctuation">[</span><span class="token variable">@topIndex</span><span class="token punctuation">]</span> <span class="token operator">=</span> number</span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">pop</span></span> … <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">top</span></span> … <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token function">empty</span></span> … <span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Test code for StackClass</span></span>
<span class="line">myStack <span class="token operator">=</span> <span class="token class-name">StackClass</span><span class="token punctuation">.</span><span class="token keyword">new</span></span>
<span class="line">myStack<span class="token punctuation">.</span>push<span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span></span>
<span class="line">myStack<span class="token punctuation">.</span>push<span class="token punctuation">(</span><span class="token number">29</span><span class="token punctuation">)</span></span>
<span class="line">puts <span class="token string-literal"><span class="token string">"Top element is (should be 29): </span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content">myStack<span class="token punctuation">.</span>top</span><span class="token delimiter punctuation">}</span></span><span class="token string">"</span></span></span>
<span class="line">myStack<span class="token punctuation">.</span>pop</span>
<span class="line">puts <span class="token string-literal"><span class="token string">"Top element is (should be 42): </span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content">myStack<span class="token punctuation">.</span>top</span><span class="token delimiter punctuation">}</span></span><span class="token string">"</span></span></span>
<span class="line">myStack<span class="token punctuation">.</span>pop</span>
<span class="line"><span class="token comment"># The following pop should produce an error message - stack is empty</span></span>
<span class="line">myStack<span class="token punctuation">.</span>pop</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Everything is an object, flexible</li>
<li>Ruby has a slight readability advantage
<ul>
<li>Because the names of class and instance variables have different forms (클래스 변수와 인스턴스 변수의 이름이 서로 다른 형식)</li>
</ul>
</li>
</ul>
<h2 id="parameterized-adts" tabindex="-1"><a class="header-anchor" href="#parameterized-adts"><span>Parameterized ADTs</span></a></h2>
<ul>
<li>Can design an ADT to store any element type (e.g. stack ADT)</li>
<li>Only issue for statically-typed languages (no problem in Ruby)</li>
<li>Also known as generic classes</li>
<li>Supported in C++, Ada, Java (5.0), C# (2005)</li>
</ul>
<p>Parameterized ADTs in Ada:</p>
<div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token keyword">generic</span></span>
<span class="line"><span class="token variable">Max_Size</span><span class="token punctuation">:</span> <span class="token variable">Positive</span><span class="token punctuation">;</span> <span class="token comment">-- A generic parameter for stack size</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token variable">Elem_Type</span> <span class="token keyword">is</span> <span class="token keyword">private</span><span class="token punctuation">;</span> <span class="token comment">-- A generic parameter for element type</span></span>
<span class="line"><span class="token keyword">package</span> <span class="token variable">Generic_Stack</span> <span class="token keyword">is</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token variable">Stack_Type</span> <span class="token keyword">is</span> <span class="token keyword">limited</span> <span class="token keyword">private</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token variable">Empty</span><span class="token punctuation">(</span><span class="token variable">Stk</span> <span class="token punctuation">:</span> <span class="token keyword">in</span> <span class="token variable">Stack_Type</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token variable">Boolean</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token variable">Top</span><span class="token punctuation">(</span><span class="token variable">Stk</span><span class="token punctuation">:</span> <span class="token keyword">in</span> <span class="token keyword">out</span> <span class="token variable">StackType</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token variable">Elem_type</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">..</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">private</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token variable">List_Type</span> <span class="token keyword">is</span> <span class="token keyword">array</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token variable">Max_Size</span><span class="token punctuation">)</span> <span class="token keyword">of</span> <span class="token variable">Element_Type</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token variable">Stack_Type</span> <span class="token keyword">is</span> <span class="token keyword">record</span></span>
<span class="line"><span class="token variable">List</span> <span class="token punctuation">:</span> <span class="token variable">List_Type</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">Topsub</span> <span class="token punctuation">:</span> <span class="token variable">Integer</span> <span class="token keyword">range</span> <span class="token number">0</span> <span class="token punctuation">..</span> <span class="token variable">Max_Size</span> <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token keyword">record</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Generic_Stack</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">-- Instantiations of the generic stack:</span></span>
<span class="line"><span class="token comment">-- package Integer_Stack is new Generic_Stack(100,Integer);</span></span>
<span class="line"><span class="token comment">-- package Float_Stack is new Generic_Stack(100,Float);</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Parameterized ADTs in C++:</p>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token class-name">Type</span><span class="token operator">></span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Stack</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">private</span><span class="token operator">:</span></span>
<span class="line">Type <span class="token operator">*</span>stackPtr<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token keyword">int</span> maxLen<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span> topPtr<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line"><span class="token function">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Constructor for 100 elements</span></span>
<span class="line">stackPtr <span class="token operator">=</span> <span class="token keyword">new</span> Type<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">maxLen <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span></span>
<span class="line">topPtr <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">Stack</span><span class="token punctuation">(</span><span class="token keyword">int</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Constructor for a given number</span></span>
<span class="line">stackPtr <span class="token operator">=</span> <span class="token keyword">new</span> Type<span class="token punctuation">[</span>size<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">maxLen <span class="token operator">=</span> size – <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">topSub <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token comment">// Instantiation: Stack&lt;int> myIntStack;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>The stack element type can be parameterized by making the class a templated class</li>
<li>Templated classes are instantiated to become typed classes at compile time</li>
</ul>
<p>Parameterized ADTs in Java 5.0:</p>
<ul>
<li>The most common generic types: collection types (<code v-pre>LinkedList</code> and <code v-pre>ArrayList</code>)</li>
<li>The original collection types stored object class instances, so they could store any objects</li>
<li>Three issues (Java 5.0 이전 버전 문제점):
<ul>
<li>[1] Every time an object was removed from the collection, it had to be cast to the appropriate type (형 변환 필요)</li>
<li>[2] There was no error checking when elements were added to the collection (타입 검사 없음)</li>
<li>[3] Collection types could not store primitive types (기본형 저장 불가)</li>
</ul>
</li>
</ul>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token comment">//* Create an ArrayList object</span></span>
<span class="line"><span class="token class-name">ArrayList</span> myArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//* Create an element</span></span>
<span class="line">myArray<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">47</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//* Get first object</span></span>
<span class="line"><span class="token class-name">Integer</span> myInt <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">)</span>myArray<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token class-name">ArrayList</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> myArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// [1], [2] are resolved</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token class-name">Box</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">></span></span> intBox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Box</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 컴파일 에러</span></span>
<span class="line"><span class="token class-name">Box</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> intBox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Box</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK (오토박싱)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>기본형(primitive type)은 제네릭에 사용할 수 없음</li>
<li>대신 <code v-pre>Integer</code>, <code v-pre>Double</code> 같은 래퍼 클래스(wrapper class)를 사용해야 함</li>
<li>Users also can define generic classes in Java 5.0:</li>
</ul>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//This class could be instantiated with the following:</span></span>
<span class="line"><span class="token class-name">MyClass</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> myString<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Drawbacks
<ul>
<li>Cannot store primitives (wrapper class 사용)</li>
<li>Elements cannot be indexed</li>
</ul>
</li>
</ul>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Stack2</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">private</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> stackRef<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">private</span> <span class="token keyword">int</span> maxLen<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token class-name">Stack2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// A constructor</span></span>
<span class="line">stackRef <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">maxLen <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">T</span> newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>stackRef<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> maxLen<span class="token punctuation">)</span></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Error in push—stack is full"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line">stackRef<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">…</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">Stack2</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> myStack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack2</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// instantiated for the String</span></span>
<span class="line"><span class="token comment">// other type objects cannot be added to the collection</span></span>
<span class="line"><span class="token comment">// → wildcard class</span></span>
<span class="line"><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 읽기는 가능, 쓰기는 제한됨</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Parameterized ADTs in C# 2005:</p>
<ul>
<li>Generic classes were added to C# in its 2005 version (<code v-pre>Array</code>, <code v-pre>List</code>, <code v-pre>Stack</code>, <code v-pre>Queue</code>, and <code v-pre>Dictionary</code>)</li>
<li>Allow its elements to be indexed</li>
</ul>
<h2 id="encapsulation-constructs" tabindex="-1"><a class="header-anchor" href="#encapsulation-constructs"><span>Encapsulation constructs</span></a></h2>
<ul>
<li>Multiple-type encapsulations are needed for larger programs</li>
<li>Large programs — two special needs:
<ul>
<li>Some means of organization, other than simply division into subprograms</li>
<li>Imposing everything into single unit makes difficult to manage</li>
<li>Some means of partial compilation — i.e., compilation units smaller than whole program</li>
<li>Recompiling whole program is too costly</li>
</ul>
</li>
<li>→ Group logically-related subprograms into units</li>
<li>Allow units to be separately compiled (i.e., compilation units)</li>
<li>Such units are encapsulation constructs</li>
<li>Encapsulation Constructs는 논리적으로 관련 있는 코드(서브프로그램, 데이터 등)를 하나의 모듈 단위로 묶고, 이를 독립적으로 관리 및 컴파일할 수 있도록 하는 구조</li>
<li>Nested subprograms as encapsulation
<ul>
<li>One way to organize subprograms: nest them</li>
<li>Inner subprograms are encapsulated within outer, but can share variables</li>
<li>Supported in Ada, Fortran 95+, Python, JavaScript, Ruby, Lisp, …</li>
</ul>
</li>
<li>Encapsulation in C
<ul>
<li>C does not provide complete support for abstract data types</li>
<li>Encapsulation in C — basically a compilation unit</li>
<li>Interface is placed (by convention) in header (<code v-pre>.h</code>) file</li>
<li>Implementation in <code v-pre>.c</code> file</li>
<li><code v-pre>#include</code> — used to include header files</li>
<li>Problem: linker doesn't check types between header and implementation</li>
<li>User's responsibility: ensure that both the header and implementation files are up-to-date</li>
</ul>
</li>
<li>Encapsulation in C++
<ul>
<li>Header &amp; code files, like C</li>
<li>Also has classes</li>
<li>Class definition used as the interface</li>
<li>Member (instance variables, methods) defined in separate file</li>
<li>Friend functions/classes — provide a way to grant access to private members of a class</li>
<li>[EX] multiplication for vector and matrix classes:</li>
</ul>
</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token keyword">class</span> <span class="token class-name">Matrix</span><span class="token punctuation">;</span> <span class="token comment">//** A class declaration</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Vector</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">friend</span> Vector <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">const</span> Matrix<span class="token operator">&amp;</span><span class="token punctuation">,</span> <span class="token keyword">const</span> Vector<span class="token operator">&amp;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Matrix</span> <span class="token punctuation">{</span> <span class="token comment">//** The class definition</span></span>
<span class="line"><span class="token keyword">friend</span> Vector <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">const</span> Matrix<span class="token operator">&amp;</span><span class="token punctuation">,</span> <span class="token keyword">const</span> Vector<span class="token operator">&amp;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//** The function that uses both Matrix and Vector objects</span></span>
<span class="line">Vector <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">const</span> Matrix<span class="token operator">&amp;</span> m1<span class="token punctuation">,</span> <span class="token keyword">const</span> Vector<span class="token operator">&amp;</span> v1<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Encapsulation in Ada
<ul>
<li>Packages — encapsulation unit in Ada</li>
<li>Specification packages — any number of data, subprogram definitions</li>
<li>Specification, body parts of package can be compiled separately</li>
<li>Multiple-type encapsulation</li>
<li>[EX] Both the matrix and the vector types could be defined in a single Ada package:</li>
</ul>
</li>
</ul>
<div class="language-ada line-numbers-mode" data-highlighter="prismjs" data-ext="ada"><pre v-pre><code class="language-ada"><span class="line"><span class="token keyword">package</span> <span class="token variable">Tensor</span> <span class="token keyword">is</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token variable">Vector</span> <span class="token keyword">is</span> <span class="token punctuation">(</span></span>
<span class="line">…</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token variable">Matrix</span> <span class="token keyword">is</span> <span class="token punctuation">(</span></span>
<span class="line">…</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">end</span> <span class="token variable">Tensor</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Encapsulation in C#
<ul>
<li>Assembly: collection of files that appears as a single (C# 프로그램의 최상위 캡슐화 단위) (하나 이상의 파일로 구성된 논리적 단위)
<ul>
<li>executable or…</li>
<li>…dynamic link library (DLL)</li>
<li>Microsoft's version of shared libraries</li>
<li>collection of classes, methods (in C#) that are individually linked to an executing program</li>
</ul>
</li>
<li>Each file contains module that can be separately compiled (Assembly를 구성하는 파일 단위 구성 요소) (각 모듈은 독립적으로 컴파일 가능, 여러 모듈을 묶어서 하나의 Assembly로 링크)</li>
<li><code v-pre>internal</code> access modifier: member is visible to all classes in the assembly</li>
</ul>
</li>
</ul>
<h2 id="naming-encapsulations" tabindex="-1"><a class="header-anchor" href="#naming-encapsulations"><span>Naming encapsulations</span></a></h2>
<ul>
<li>Large programs:
<ul>
<li>Softwares are written by many developer independently</li>
<li>Cannot know what names are defined in others</li>
<li>Define many global names</li>
<li>Need way to divide into logical groups</li>
</ul>
</li>
<li>Naming encapsulation: used to create a new scope for names
<ul>
<li>Avoid name conflict</li>
<li>Several different collections of code can be placed in the same namespace</li>
</ul>
</li>
<li>C++ namespaces
<ul>
<li>Can place each library in its own namespace</li>
<li>Qualify names used outside with their namespace, e.g., <code v-pre>foo::bar</code>, <code v-pre>foo::baz</code></li>
<li>C# also includes namespaces</li>
</ul>
</li>
</ul>
<div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre v-pre><code class="language-cpp"><span class="line"><span class="token keyword">namespace</span> myStackSpace <span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">// Stack declarations</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">myStackSpace<span class="token double-colon punctuation">::</span>topSub</span>
<span class="line"><span class="token keyword">using</span> myStackSpace<span class="token double-colon punctuation">::</span>topSub<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> myStackSpace<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Java — packages (Java에서 관련 클래스들을 묶는 단위)
<ul>
<li>하나의 패키지 = 하나의 캡슐화 단위, 패키지는 논리적 그룹일 뿐만 아니라, 접근 범위를 제한하는 역할도 함</li>
<li>Package contains one or more class definitions</li>
<li>Classes within package are partial friends</li>
<li>Less need for explicit friend</li>
<li>Package scope: Entities without access modifiers — Visible throughout the package</li>
<li>Clients of a package — use fully qualified name or use the import declaration</li>
</ul>
</li>
</ul>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre v-pre><code class="language-java"><span class="line"><span class="token keyword">package</span> <span class="token namespace">stkpkg</span><span class="token punctuation">;</span> <span class="token comment">// package declaration must appear as the first line of the file</span></span>
<span class="line"><span class="token comment">// used as follows</span></span>
<span class="line">stkpkg<span class="token punctuation">.</span>myStack<span class="token punctuation">;</span> <span class="token comment">//simply reference myStack in stkpkg</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token namespace">stkpkg<span class="token punctuation">.</span>myStack</span><span class="token punctuation">;</span> <span class="token comment">//import myStack in stkpkg</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token import"><span class="token namespace">stkpkg<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span> <span class="token comment">//import all of the types in stkpkg</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Ada — packages
<ul>
<li>Packages are defined in hierarchies which correspond to file hierarchies</li>
<li>Visibility from a program unit is gained with the <code v-pre>with</code> clause</li>
</ul>
</li>
<li>Ruby: Classes, but also modules
<ul>
<li>Typically encapsulate collections of constants and methods</li>
<li>Have separate namespace</li>
<li>Modules cannot be instantiated or subclassed, and they cannot define variables</li>
<li>Methods defined in a module must include the module's name</li>
<li>Access to the contents of a module is requested with the <code v-pre>require</code> method</li>
</ul>
</li>
</ul>
<div class="language-ruby line-numbers-mode" data-highlighter="prismjs" data-ext="rb"><pre v-pre><code class="language-ruby"><span class="line"><span class="token keyword">module</span> <span class="token class-name">MyStuff</span></span>
<span class="line"><span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.14159265</span><span class="token operator">...</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token method-definition"><span class="token class-name">MyStuff</span><span class="token punctuation">.</span><span class="token function">mymethod1</span></span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">...</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">require</span> <span class="token string-literal"><span class="token string">'myStuffMod'</span></span></span>
<span class="line">MyStuff<span class="token punctuation">.</span>mymethod1<span class="token punctuation">(</span>x<span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">...</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<ul>
<li>The concept of ADTs and their use in program design was a milestone in the development of languages</li>
<li>Two primary features of ADTs are the packaging of data with their associated operations and information hiding</li>
<li>Ada provides packages that simulate ADTs</li>
<li>C++ data abstraction is provided by classes</li>
<li>Java's data abstraction is similar to C++</li>
<li>Ada, C++, Java 5.0, and C# 2005 support parameterized ADTs</li>
<li>C++, C#, Java, Ada, and Ruby provide naming encapsulations</li>
</ul>
</div></template>


