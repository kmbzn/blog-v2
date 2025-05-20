<template><div><h1 id="_1966번-프린터-큐" tabindex="-1"><a class="header-anchor" href="#_1966번-프린터-큐"><span>1966번: 프린터 큐</span></a></h1>
<p>난이도: 실버 III</p>
<p>해당 문제는 Python 3으로 풀이하였습니다.</p>
<p>우선 문제에서 주어지는 테스트케이스의 수, <code v-pre>N</code>, <code v-pre>M</code>값을 변수로 받아오고, 문제 풀이에 필요한 변수들을 선언하겠습니다.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code><span class="line">test <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> test<span class="token punctuation">)</span> <span class="token punctuation">:</span></span>
<span class="line">    N<span class="token punctuation">,</span> M <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    count <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">:</span></span>
<span class="line">        count<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">    remove <span class="token operator">=</span> <span class="token number">9</span></span>
<span class="line">    res <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    pos <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    find <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>arr</code>: 두 번째 줄에서 차례대로 주어질 <code v-pre>N</code>개 문서의 중요도를 담게 될 list입니다.<br>
<code v-pre>count</code>: 중요도가 1부터 9까지의 정수임으로, 이들을 카운팅하기 위한 크기 10(<code v-pre>0 ~ 9</code>)의 list입니다.<br>
<code v-pre>remove</code>: 중요도가 큰 순서대로 앞에서부터 하나씩 제거해 나갈 것인데, 현재 제거하고 있는 중요도의 값을 나타냅니다.<br>
<code v-pre>res</code>: 해당 테스트케이스에서 최종적으로 출력될 결과값<br>
<code v-pre>pos</code>: list를 순서대로 탐색하게 되는데 이 때 탐색하게 될 리스트 상의 좌표값<br>
<code v-pre>find</code>: 최종적으로 <code v-pre>res</code>값을 찾은 경우 <code v-pre>find</code>값을 <code v-pre>1</code>로 설정하여 반복문에서 빠져나오게 됩니다.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code><span class="line">    arr <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> N<span class="token punctuation">)</span> <span class="token punctuation">:</span></span>
<span class="line">        count<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>반복문을 사용해서 변수를 입력받고, 앞서 언급했듯이 <code v-pre>count</code> list에 각각 문서의 중요도의 개수를 카운팅해줍니다.</p>
<hr>
<h2 id="idea-1" tabindex="-1"><a class="header-anchor" href="#idea-1"><span>Idea 1.</span></a></h2>
<p>문제에서 언급하였듯이 자신의 뒤에 자신보다 중요도가 높은 문서가 있다면 순서가 맨 뒤로 skip될 것입니다.</p>
<p>이에 따라 <code v-pre>list</code>에서 해당 성분을 직접 맨 뒤로 옮겨주는 방법도 있겠지만, 그냥 <code v-pre>pos</code>값을 <code v-pre>1</code>만큼 증가시켜 다음 항목으로 넘어간 후, <code v-pre>list</code>의 끝에 도달하였을 때 다시 <code v-pre>pos</code>값을 <code v-pre>0</code>으로 돌아오게 해서 반복적으로 탐색하는 방식을 택한다면 더 구현이 용이할 것입니다.</p>
<h2 id="idea-2" tabindex="-1"><a class="header-anchor" href="#idea-2"><span>Idea 2.</span></a></h2>
<p>또한 이 탐색은, 우선순위값이 큰 문서가 무조건 먼저 인쇄됩니다.</p>
<p>e.g., 우선순위값이 <code v-pre>4</code>인 문서가 있다면, 우선순위값이 <code v-pre>5</code> 이상인 문서들이 모두 인쇄된 후에 인쇄될 수 있다는 것입니다.</p>
<p>이에 따라 <code v-pre>count[]</code> list에서 <code v-pre>9</code>부터 <code v-pre>1</code>까지 차례대로 문서들을 해결하면서 값을 카운팅해 나간다면 문제가 최종적으로 해결됩니다. 물론 결과값을 구한 이후에는 더이상 연산을 수행할 필요가 없으니 <code v-pre>find</code>값을 <code v-pre>1</code>로 설정하여 무한 loop에서 빠져나옵니다.</p>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code><span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>find <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">while</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span>remove<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">:</span></span>
<span class="line">            remove <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>remove <span class="token operator">==</span> arr<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span>remove<span class="token punctuation">]</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">                count<span class="token punctuation">[</span>remove<span class="token punctuation">]</span> <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line">                res <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>pos <span class="token operator">==</span> M<span class="token punctuation">)</span> <span class="token punctuation">:</span></span>
<span class="line">                find <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">        pos <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">        pos <span class="token operator">%=</span> N</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>앞서 언급했듯이, <code v-pre>find</code>값을 사용해서 무한 loop를 구현합니다.</li>
<li>현재 <code v-pre>check</code>해야 하는 우선순위값을 찾기 위해 <code v-pre>count[remove]</code>가 <code v-pre>1</code> 이상인 <code v-pre>remove</code>값까지 반복문으로 <code v-pre>1</code>씩 내려오며 찾습니다.</li>
<li>현재 <code v-pre>check</code>하고 있는 우선순위값과 현재 참조하고 있는 좌표에 해당하는 문서의 우선순위값이 같다면 해당 문서에 대해 <code v-pre>remove</code>처리 하며 <code v-pre>res</code>값을 counting해줍니다. 이 경우, 몇 번째로 출력될지 궁금한 문서(<code v-pre>M</code>)값과 같다면 <code v-pre>find</code>값을 <code v-pre>1</code>로 설정하여 최종적으로 무한루프를 빠져나오면 됩니다.</li>
<li><code v-pre>pos</code>값을 증가시키며 반복문을 수행하다가 <code v-pre>list</code> 범위 밖으로 나가게 되는 경우에는 나머지 연산자를 사용해 다시 <code v-pre>0</code>으로 돌아오게 구현합니다. 이 방법을 통해 <code v-pre>queue</code>를 직접 구현하지 않고도 <code v-pre>queue</code>와 동일하게 작동하게 됩니다.</li>
<li>loop를 빠져나온 후 <code v-pre>res</code>값을 최종적으로 출력해주면 문제가 해결됩니다.</li>
</ol>
<hr>
<h2 id="완성된-code" tabindex="-1"><a class="header-anchor" href="#완성된-code"><span>완성된 code</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code><span class="line">test <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> test<span class="token punctuation">)</span> <span class="token punctuation">:</span></span>
<span class="line">    N<span class="token punctuation">,</span> M <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    count <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">:</span></span>
<span class="line">        count<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">    remove <span class="token operator">=</span> <span class="token number">9</span></span>
<span class="line">    res <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    pos <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    find <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">    arr <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> N<span class="token punctuation">)</span> <span class="token punctuation">:</span></span>
<span class="line">        count<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>find <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">while</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span>remove<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">:</span></span>
<span class="line">            remove <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>remove <span class="token operator">==</span> arr<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span>remove<span class="token punctuation">]</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">                count<span class="token punctuation">[</span>remove<span class="token punctuation">]</span> <span class="token operator">-=</span> <span class="token number">1</span></span>
<span class="line">                res <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>pos <span class="token operator">==</span> M<span class="token punctuation">)</span> <span class="token punctuation">:</span></span>
<span class="line">                find <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">        pos <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">        pos <span class="token operator">%=</span> N</span>
<span class="line"></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


