<template><div><h1 id="computer-graphics-project-2-obj-viewer" tabindex="-1"><a class="header-anchor" href="#computer-graphics-project-2-obj-viewer"><span>Computer Graphics Project 2: Obj viewer</span></a></h1>
<p><strong>Handed out</strong>: April 24, 2025<br>
<strong>Due</strong>: 2025년 5월 14일 23:59 (기한 초과 제출은 <strong>0점</strong> 처리됨)</p>
<hr>
<ul>
<li>LMS 강의실 &gt; 주차학습 &gt; 8주차 &gt; Project 2</li>
<li>제출 파일은 아래 예시와 같이 zip 파일로 압축하세요. zip 파일 이름은 자유롭게 지정 가능합니다.
<ul>
<li>예시: <code v-pre>submission.zip</code>
<ul>
<li><code v-pre>main.py</code></li>
<li>...</li>
<li><code v-pre>report.pdf</code></li>
</ul>
</li>
</ul>
</li>
<li>프로그램은 여러 개의 Python 소스 파일로 구성될 수 있으나, <strong>진입점은 반드시 <code v-pre>main.py</code></strong> 여야 합니다.</li>
<li>즉, 다음 명령어로 실행 가능해야 합니다:</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">python main.py</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_1-과제-목표-여러-개의-obj-메쉬를-표시할-수-있는-obj-파일-뷰어-구현" tabindex="-1"><a class="header-anchor" href="#_1-과제-목표-여러-개의-obj-메쉬를-표시할-수-있는-obj-파일-뷰어-구현"><span>1. 과제 목표: 여러 개의 obj 메쉬를 표시할 수 있는 obj 파일 뷰어 구현</span></a></h2>
<ul>
<li>하나의 프로그램에서 모든 요구사항을 충족해야 합니다. 각 요구사항을 별도의 프로그램으로 구현할 필요는 없습니다.</li>
<li>창 크기는 (800, 800)일 필요는 없으며, <strong>메쉬가 잘 보일 정도로 충분히 크게 설정</strong>하면 됩니다.</li>
<li>OpenGL 3.3 Core Profile을 사용해야 하며, 다음 조건을 충족해야 합니다:
<ul>
<li>Python 코드에 다음 설정 포함</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line">glfwWindowHint<span class="token punctuation">(</span>GLFW_CONTEXT_VERSION_MAJOR<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line">glfwWindowHint<span class="token punctuation">(</span>GLFW_CONTEXT_VERSION_MINOR<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line">glfwWindowHint<span class="token punctuation">(</span>GLFW_OPENGL_PROFILE<span class="token punctuation">,</span> GLFW_OPENGL_CORE_PROFILE<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>셰이더 코드의 첫 줄:</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">#version 330 core</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>위 조건을 지키지 않으면, <strong>리포트를 제외한 모든 항목에 점수가 부여되지 않습니다.</strong></li>
</ul>
<p><strong>총점</strong>: 110점</p>
<h2 id="_2-구현-요구사항" tabindex="-1"><a class="header-anchor" href="#_2-구현-요구사항"><span>2. 구현 요구사항</span></a></h2>
<h3 id="a-카메라-조작-10점" tabindex="-1"><a class="header-anchor" href="#a-카메라-조작-10점"><span>A. 카메라 조작 (10점)</span></a></h3>
<ul>
<li>Project 1에서 사용한 카메라 조작 방식 그대로 사용</li>
</ul>
<h3 id="b-obj-파일-로딩-및-렌더링-총-70점" tabindex="-1"><a class="header-anchor" href="#b-obj-파일-로딩-및-렌더링-총-70점"><span>B. obj 파일 로딩 및 렌더링 (총 70점)</span></a></h3>
<ul>
<li>
<p><strong>Drag &amp; Drop 기능 구현 (필수)</strong></p>
<ul>
<li>glfw의 <code v-pre>glfwSetDropCallback</code> 사용</li>
<li>참고: <a href="https://www.glfw.org/docs/latest/input_guide.html#path_drop" target="_blank" rel="noopener noreferrer">drop_callback 문서</a></li>
<li>이 기능이 구현되지 않으면 <strong>“Load and render multiple obj files”에 대한 점수 없음</strong></li>
</ul>
</li>
<li>
<p><strong>파일 로드 후 다음 정보 출력 (10점)</strong></p>
<ul>
<li>파일 이름</li>
<li>총 face 개수</li>
<li>정점 3개인 face 개수</li>
<li>정점 4개인 face 개수</li>
<li>정점 4개 초과인 face 개수</li>
</ul>
</li>
<li>
<p><strong>파일 파싱 및 메쉬 렌더링 (40점)</strong></p>
<ul>
<li>vertex position, vertex normal, face 정보만 파싱</li>
<li><code v-pre>vt</code>, <code v-pre>mtllib</code>, <code v-pre>usemtl</code>, <code v-pre>o</code>, <code v-pre>s</code> 태그는 무시</li>
<li>다음 obj 파일들을 문제없이 로딩 가능해야 함:
<ul>
<li><code v-pre>cube-tri.obj</code></li>
<li><code v-pre>sphere-tri.obj</code></li>
<li><code v-pre>cylinder-tri.obj</code></li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>다중 obj 파일 지원 (10점)</strong></p>
<ul>
<li>이미 렌더링 중인 A.obj에 대해, B.obj를 드래그 앤 드롭하면 <strong>X축 +2 단위로 떨어진 위치에 배치</strong>
<ul>
<li>예: x 위치 0 → 2 → 4 → ...</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>다양한 형태의 polygon 지원 (10점)</strong></p>
<ul>
<li>삼각형, 사각형, 4개 초과 정점 polygon 혼합된 경우 렌더링 가능해야 함</li>
<li><code v-pre>glDrawArrays()</code> 또는 <code v-pre>glDrawElements()</code> 사용</li>
<li>반드시 <strong>triangulation 알고리즘 구현 필요</strong></li>
<li>다음 파일들이 로딩 및 렌더링 가능해야 함:
<ul>
<li><code v-pre>cube-tri-quad.obj</code></li>
<li><code v-pre>sphere-tri-quad.obj</code></li>
<li><code v-pre>cylinder-tri-quad-n.obj</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="c-조명-및-기타-효과-20점" tabindex="-1"><a class="header-anchor" href="#c-조명-및-기타-효과-20점"><span>C. 조명 및 기타 효과 (20점)</span></a></h3>
<ul>
<li><strong>Phong Illumination + Phong Shading 구현 필수</strong>
<ul>
<li>조명 및 재질 파라미터는 자유롭게 선택</li>
</ul>
</li>
</ul>
<h2 id="_3-리포트-제출-10점" tabindex="-1"><a class="header-anchor" href="#_3-리포트-제출-10점"><span>3. 리포트 제출 (10점)</span></a></h2>
<ul>
<li>최대 2페이지의 pdf 형식</li>
<li>Word로 작성 권장</li>
<li>반드시 아래 내용 포함:
<ul>
<li>구현한 요구사항 목록 (5점)</li>
<li><strong>샘플 obj 파일이 아닌</strong> 사용자 obj 파일로 렌더링한 결과 스크린샷 몇 장 (5점)</li>
</ul>
</li>
</ul>
<blockquote>
<p>길게 작성할 필요 없음. 위 항목만 간단히 작성하면 됨. 한국어/영어 모두 허용.</p>
</blockquote>
<h2 id="_4-실행-환경" tabindex="-1"><a class="header-anchor" href="#_4-실행-환경"><span>4. 실행 환경</span></a></h2>
<ul>
<li>Python 3.8 환경에서 다음 패키지만 설치되어 있어야 함:
<ul>
<li><code v-pre>NumPy</code>, <code v-pre>PyOpenGL</code>, <code v-pre>glfw</code>, <code v-pre>PyGLM</code></li>
</ul>
</li>
<li>이벤트 처리 및 OpenGL context는 반드시 <strong>glfw</strong>만 사용</li>
<li>glut 사용 금지</li>
<li>이 조건을 지키지 않으면 <strong>리포트를 제외한 채점 불가</strong></li>
</ul>
<h2 id="_5-제출할-항목" tabindex="-1"><a class="header-anchor" href="#_5-제출할-항목"><span>5. 제출할 항목</span></a></h2>
<ul>
<li>zip 파일 안에 포함되어야 할 항목:
<ul>
<li><code v-pre>.py</code> 파일들 (진입점은 <code v-pre>main.py</code>)</li>
<li><code v-pre>.pdf</code> 리포트 파일</li>
</ul>
</li>
</ul>
<h2 id="_6-샘플-obj-파일-설명" tabindex="-1"><a class="header-anchor" href="#_6-샘플-obj-파일-설명"><span>6. 샘플 obj 파일 설명</span></a></h2>
<table>
<thead>
<tr>
<th>파일명</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>cube-tri.obj</code></td>
<td>삼각형만 포함된 큐브</td>
</tr>
<tr>
<td><code v-pre>cube-tri-quad.obj</code></td>
<td>삼각형 + 사각형 포함 큐브</td>
</tr>
<tr>
<td><code v-pre>sphere-tri.obj</code></td>
<td>삼각형만 포함된 구</td>
</tr>
<tr>
<td><code v-pre>sphere-tri-quad.obj</code></td>
<td>삼각형 + 사각형 포함 구</td>
</tr>
<tr>
<td><code v-pre>cylinder-tri.obj</code></td>
<td>삼각형만 포함된 원기둥</td>
</tr>
<tr>
<td><code v-pre>cylinder-tri-quad-n.obj</code></td>
<td>삼각형, 사각형, 그 외 polygon 포함 원기둥</td>
</tr>
</tbody>
</table>
<h2 id="_7-추가-참고-사항" tabindex="-1"><a class="header-anchor" href="#_7-추가-참고-사항"><span>7. 추가 참고 사항</span></a></h2>
<ul>
<li>Python용 glfw에서 <code v-pre>drop_callback</code>은 인자가 다릅니다:</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">def</span> <span class="token function">drop_callback</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> paths<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># paths는 파일 경로 문자열 리스트</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>obj 포맷 참고: <a href="https://en.wikipedia.org/wiki/Wavefront_.obj_file" target="_blank" rel="noopener noreferrer">Wavefront .obj 파일 포맷 위키백과</a></li>
<li>Python의 문자열 메서드 중 <code v-pre>split()</code>이 파싱에 유용합니다.</li>
</ul>
<h2 id="glfw-이벤트-콜백-프로젝트-채점-관련-공지" tabindex="-1"><a class="header-anchor" href="#glfw-이벤트-콜백-프로젝트-채점-관련-공지"><span>GLFW 이벤트 콜백 &amp; 프로젝트 채점 관련 공지</span></a></h2>
<p>GLFW에서, 마우스 버튼 클릭 시점에 modifiers (ctrl, alt, shift)의 눌린 상태 확인은 mouse button callback 함수의 mods 파라미터를 통해서 하거나, glfwGetKey 함수를 활용해서 해야합니다.</p>
<p>key callback 함수의 mods 파라미터를 통해 modifier 상태를 확인하는 것은 다른 키 입력을 받는 경우 modifier의 상태를 확인하기 위해 사용하는 방법입니다. modifier key만 입력할 때 key callback의 mods 파라미터를 활용해 처리한다면 mods 파라미터의 업데이트 시점이 운영체제에 따라 다를 수 있기 때문에 채점 운영체제 (ubuntu)에서의 동작이 여러분이 코드를 작성한 운영체제에서의 동작과 달라질 수 있습니다.</p>
<p>프로젝트 1의 성적과 댓글을 확인해 주시기 바랍니다. 프로젝트에서 위 문제로 인해 감점을 받은 경우, 아래 이메일로 개별적으로 연락해 주시기 바랍니다: <code v-pre>jho6394@hanyang.ac.kr</code><br>
이 예외사항은 프로젝트 1에 한해서만 인정되며, 프로젝트 2부터는 동일한 사례를 오류로 간주하여 감점 처리할 예정입니다.
해당 사항과 관련된 문의는 Project 2 제출 마감 전 까지만 받도록 하겠습니다.</p>
</div></template>


