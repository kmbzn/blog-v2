<template><div><h1 id="vim-사용-매뉴얼" tabindex="-1"><a class="header-anchor" href="#vim-사용-매뉴얼"><span>Vim 사용 매뉴얼</span></a></h1>
<h3 id="_1-vim-실행" tabindex="-1"><a class="header-anchor" href="#_1-vim-실행"><span>1. Vim 실행</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">vim</span> <span class="token punctuation">[</span>filename<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>해당 명령어로 Vim을 실행하면 파일을 열거나, 파일이 없을 경우 새로 생성됩니다.</li>
</ul>
<h3 id="_2-한글-튜토리얼-실행" tabindex="-1"><a class="header-anchor" href="#_2-한글-튜토리얼-실행"><span>2. 한글 튜토리얼 실행</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">vimtutor ko</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>터미널에서 위 명령어를 입력하면 한글로 된 Vim 튜토리얼을 시작할 수 있습니다.</li>
<li>약 30분 정도 투자하여 기본적인 사용법을 익힐 수 있습니다.</li>
</ul>
<h2 id="🧩-vim의-주요-모드" tabindex="-1"><a class="header-anchor" href="#🧩-vim의-주요-모드"><span>🧩 Vim의 주요 모드</span></a></h2>
<table>
<thead>
<tr>
<th>모드 이름</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td>일반 모드</td>
<td>커서 이동, 복사, 붙여넣기 등의 명령 실행</td>
</tr>
<tr>
<td>입력 모드</td>
<td>텍스트 입력 가능. <code v-pre>i</code>, <code v-pre>a</code>, <code v-pre>o</code> 등으로 진입</td>
</tr>
<tr>
<td>비주얼 모드</td>
<td>텍스트 선택 가능. <code v-pre>v</code> 키로 진입</td>
</tr>
<tr>
<td>명령 모드</td>
<td><code v-pre>:</code> 키로 진입. 저장, 종료 등의 명령 입력</td>
</tr>
</tbody>
</table>
<h2 id="🖱️-기본-명령어" tabindex="-1"><a class="header-anchor" href="#🖱️-기본-명령어"><span>🖱️ 기본 명령어</span></a></h2>
<h3 id="_1-커서-이동" tabindex="-1"><a class="header-anchor" href="#_1-커서-이동"><span>1. 커서 이동</span></a></h3>
<table>
<thead>
<tr>
<th>명령어</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>h</code></td>
<td>왼쪽으로 이동</td>
</tr>
<tr>
<td><code v-pre>l</code></td>
<td>오른쪽으로 이동</td>
</tr>
<tr>
<td><code v-pre>j</code></td>
<td>아래로 이동</td>
</tr>
<tr>
<td><code v-pre>k</code></td>
<td>위로 이동</td>
</tr>
<tr>
<td><code v-pre>0</code></td>
<td>현재 줄의 시작으로 이동</td>
</tr>
<tr>
<td><code v-pre>$</code></td>
<td>현재 줄의 끝으로 이동</td>
</tr>
<tr>
<td><code v-pre>gg</code></td>
<td>문서의 시작으로 이동</td>
</tr>
<tr>
<td><code v-pre>G</code></td>
<td>문서의 끝으로 이동</td>
</tr>
</tbody>
</table>
<h3 id="_2-텍스트-입력" tabindex="-1"><a class="header-anchor" href="#_2-텍스트-입력"><span>2. 텍스트 입력</span></a></h3>
<table>
<thead>
<tr>
<th>명령어</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>i</code></td>
<td>커서 위치에서 입력 모드 진입</td>
</tr>
<tr>
<td><code v-pre>a</code></td>
<td>커서 다음 위치에서 입력 모드 진입</td>
</tr>
<tr>
<td><code v-pre>o</code></td>
<td>현재 줄 아래에 새 줄 추가 후 입력 모드 진입</td>
</tr>
<tr>
<td><code v-pre>O</code></td>
<td>현재 줄 위에 새 줄 추가 후 입력 모드 진입</td>
</tr>
</tbody>
</table>
<h3 id="_3-저장-및-종료" tabindex="-1"><a class="header-anchor" href="#_3-저장-및-종료"><span>3. 저장 및 종료</span></a></h3>
<table>
<thead>
<tr>
<th>명령어</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>:w</code></td>
<td>파일 저장</td>
</tr>
<tr>
<td><code v-pre>:q</code></td>
<td>Vim 종료</td>
</tr>
<tr>
<td><code v-pre>:wq</code> 또는 <code v-pre>:x</code></td>
<td>저장 후 종료</td>
</tr>
<tr>
<td><code v-pre>:q!</code></td>
<td>저장하지 않고 강제 종료</td>
</tr>
</tbody>
</table>
<h3 id="_4-복사-붙여넣기-삭제" tabindex="-1"><a class="header-anchor" href="#_4-복사-붙여넣기-삭제"><span>4. 복사, 붙여넣기, 삭제</span></a></h3>
<table>
<thead>
<tr>
<th>명령어</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>yy</code></td>
<td>현재 줄 복사</td>
</tr>
<tr>
<td><code v-pre>p</code></td>
<td>복사한 내용 붙여넣기</td>
</tr>
<tr>
<td><code v-pre>dd</code></td>
<td>현재 줄 삭제</td>
</tr>
<tr>
<td><code v-pre>x</code></td>
<td>현재 커서 위치의 문자 삭제</td>
</tr>
</tbody>
</table>
<h2 id="🛠️-유용한-설정-vimrc" tabindex="-1"><a class="header-anchor" href="#🛠️-유용한-설정-vimrc"><span>🛠️ 유용한 설정 (.vimrc)</span></a></h2>
<div class="language-vim line-numbers-mode" data-highlighter="prismjs" data-ext="vim"><pre v-pre><code class="language-vim"><span class="line"><span class="token keyword">set</span> <span class="token keyword">number</span>        <span class="token comment">" 줄 번호 표시</span></span>
<span class="line"><span class="token keyword">set</span> <span class="token builtin">autoindent</span>    <span class="token comment">" 자동 들여쓰기</span></span>
<span class="line"><span class="token keyword">set</span> <span class="token builtin">tabstop</span><span class="token operator">=</span><span class="token number">4</span>     <span class="token comment">" 탭 간격을 4로 설정</span></span>
<span class="line"><span class="token keyword">set</span> <span class="token builtin">shiftwidth</span><span class="token operator">=</span><span class="token number">4</span>  <span class="token comment">" 자동 들여쓰기 간격을 4로 설정</span></span>
<span class="line"><span class="token keyword">set</span> <span class="token builtin">expandtab</span>     <span class="token comment">" 탭을 공백으로 변환</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


