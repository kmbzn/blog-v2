<template><div><h1 id="_2-rendering-basics" tabindex="-1"><a class="header-anchor" href="#_2-rendering-basics"><span>2 - Rendering Basics</span></a></h1>
<h2 id="outline" tabindex="-1"><a class="header-anchor" href="#outline"><span>Outline</span></a></h2>
<ul>
<li>Rendering의 기본 개념</li>
<li>Rendering 방식
<ul>
<li>Rasterization</li>
<li>Ray Tracing</li>
</ul>
</li>
</ul>
<h2 id="basic-concepts-rendering" tabindex="-1"><a class="header-anchor" href="#basic-concepts-rendering"><span>Basic Concepts: Rendering</span></a></h2>
<ul>
<li>Rendering은 <strong>컴퓨터 프로그램을 통해 2D 또는 3D 장면(scene)으로부터 이미지를 생성</strong>하는 과정<br>
<em>(출처: Wikipedia)</em></li>
<li>Rendering 결과물은 다음과 같이 저장 가능:
<ul>
<li>이미지 파일</li>
<li>비디오 파일 (여러 이미지 프레임의 연속)</li>
<li>또는 <em>frame buffer</em>에 저장되어 디스플레이에 출력</li>
</ul>
</li>
</ul>
<h2 id="basic-concepts-frame-buffer" tabindex="-1"><a class="header-anchor" href="#basic-concepts-frame-buffer"><span>Basic Concepts: Frame Buffer</span></a></h2>
<ul>
<li><strong>Frame buffer</strong>는 raster 디스플레이 장치에 보낼 비트맵 이미지를 저장하는 메모리 영역</li>
<li>frame buffer는 다음과 같은 속성으로 정의됨:
<ul>
<li>width, height, depth</li>
<li>예: 4K UHD (3840×2160) 해상도, 32bit 컬러 → 3840 × 2160 × 32 bits</li>
</ul>
</li>
<li>보통 <strong>그래픽 카드의 메모리</strong>에 저장됨</li>
</ul>
<h2 id="basic-concepts-double-buffering" tabindex="-1"><a class="header-anchor" href="#basic-concepts-double-buffering"><span>Basic Concepts: Double Buffering</span></a></h2>
<ul>
<li>Rendering과 displaying을 위해 <strong>두 개의 frame buffer 사용</strong>
<ul>
<li>이전 이미지가 <em>front buffer</em>에 출력되는 동안 새로운 이미지를 <em>back buffer</em>에 그림</li>
<li>다음 frame이 준비되면 두 버퍼를 <strong>swap</strong></li>
</ul>
</li>
<li>→ <strong>프레임 속도 향상</strong>, <strong>flickering 감소</strong></li>
<li>대부분의 그래픽 애플리케이션은 <strong>double buffering 사용</strong></li>
</ul>
<h2 id="basic-concepts-image-plane" tabindex="-1"><a class="header-anchor" href="#basic-concepts-image-plane"><span>Basic Concepts: Image Plane</span></a></h2>
<ul>
<li>Image plane은 사용자가 가상 3D scene의 렌더링된 이미지를 보는 실제 디스플레이 화면을 개념적으로 나타내는 평면</li>
<li>즉, 화면을 통해 보여지는 이미지를 투영하는 기준이 되는 개념적 위치를 의미</li>
</ul>
<h2 id="example-of-rendering-a-3d-scene" tabindex="-1"><a class="header-anchor" href="#example-of-rendering-a-3d-scene"><span>Example of Rendering a 3D Scene</span></a></h2>
<ul>
<li>3D Scene 예시 (Camera 위치에서 image plane을 통해 scene이 렌더링됨)</li>
<li>Rendering output 예시
<ul>
<li>(이 이미지는 Colin Behrens가 제작한 Blender 데모 장면 &quot;Loro Mask&quot;를 렌더링한 결과)</li>
</ul>
</li>
</ul>
<h2 id="render-output" tabindex="-1"><a class="header-anchor" href="#render-output"><span>Render Output</span></a></h2>
<ul>
<li>렌더링 결과는 <strong>picture elements 또는 pixels</strong>로 구성된 <strong>2D 이미지</strong></li>
<li>즉, 렌더링이란 <strong>3D 장면 정보에 기반하여 각 픽셀의 색상을 계산하는 과정</strong></li>
</ul>
<h2 id="rendering-approaches" tabindex="-1"><a class="header-anchor" href="#rendering-approaches"><span>Rendering Approaches</span></a></h2>
<ul>
<li>각 픽셀의 색상을 어떻게 계산할 것인가?</li>
<li>Rasterization</li>
<li>Ray Tracing</li>
<li>학습 기반 장면 표현 방법:
<ul>
<li><strong>NeRF</strong>: 암시적 3D 장면 표현 학습</li>
<li><strong>Gaussian Splatting</strong>: 포인트 기반 3D 장면 표현 학습</li>
</ul>
</li>
</ul>
<h2 id="rasterization" tabindex="-1"><a class="header-anchor" href="#rasterization"><span>Rasterization</span></a></h2>
<ul>
<li><strong>Primitive-by-primitive 방식</strong>
<ul>
<li>primitive 예시: triangle, line, point 등</li>
<li>각 primitive는 이미지 내 어느 픽셀에 영향을 미치는지를 결정하고 해당 픽셀의 색을 설정함</li>
</ul>
</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">for</span> each primitive <span class="token keyword">in</span> scene <span class="token punctuation">:</span></span>
<span class="line">    transform the primitive to viewport</span>
<span class="line">    find pixels <span class="token keyword">for</span> the primitive</span>
<span class="line">    <span class="token builtin">set</span> color of the pixels based on texture <span class="token keyword">and</span> lighting model</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>예시: 삼각형 하나가 화면에 렌더링됨</li>
</ul>
<h2 id="rasterization-pipeline" tabindex="-1"><a class="header-anchor" href="#rasterization-pipeline"><span>Rasterization Pipeline</span></a></h2>
<p>(3D 장면의 기하 정보를 픽셀 단위의 2D 이미지로 변환하는 일련의 처리 과정)</p>
<ul>
<li>
<p>흔히 <strong>rendering pipeline 또는 graphics pipeline</strong>이라 부름</p>
</li>
<li>
<p>주요 단계:</p>
<ul>
<li><strong>Vertex Processing</strong>
<ul>
<li>vertex를 screen space로 변환</li>
</ul>
</li>
<li><strong>Primitive Processing</strong>
<ul>
<li>vertex들을 polygon으로 구성</li>
</ul>
</li>
<li><strong>Scan Conversion</strong>
<ul>
<li>polygon을 fragment 집합으로 변환</li>
</ul>
</li>
<li><strong>Fragment Processing</strong>
<ul>
<li>각 fragment의 색상 결정 (텍스처, 조명 모델 등 고려)</li>
</ul>
</li>
<li><strong>Per-sample Operations</strong>
<ul>
<li>depth test, alpha blending 등 수행</li>
</ul>
</li>
</ul>
</li>
</ul>
<blockquote>
<p><strong>fragment</strong>: 픽셀을 구성하기 위한 잠정적인 데이터 단위. 하나의 픽셀에 여러 fragment가 생성될 수 있음.<br>
예: <strong>MSAA</strong>(Multisample Anti-Aliasing)에서는 하나의 픽셀을 여러 샘플 지점으로 나누어 각각 fragment를 생성하고, 이를 평균 내어 최종 색상을 결정함.</p>
</blockquote>
<ul>
<li>입력: 각 오브젝트 공간의 vertex</li>
<li>처리 순서:
<ul>
<li>screen space의 vertex</li>
<li>screen space의 primitive</li>
<li>pixel당 하나 이상의 fragment</li>
<li>색상 계산된 shaded fragments</li>
<li>최종 출력: image</li>
</ul>
</li>
</ul>
<h2 id="ray-tracing-레이-트레이싱" tabindex="-1"><a class="header-anchor" href="#ray-tracing-레이-트레이싱"><span>Ray Tracing 레이 트레이싱</span></a></h2>
<ul>
<li><em>Pixel-by-pixel</em> 방식</li>
<li>카메라 위치에서 image plane 상의 각 픽셀을 통과하는 ray를 생성</li>
<li>해당 ray가 어떤 오브젝트와 교차하는지에 따라 픽셀의 색상이 결정됨</li>
</ul>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code class="language-python"><span class="line"><span class="token keyword">for</span> each pixel <span class="token keyword">in</span> image<span class="token punctuation">(</span>plane<span class="token punctuation">)</span> <span class="token punctuation">:</span></span>
<span class="line">  determine which <span class="token builtin">object</span> should be shown at the pixel</span>
<span class="line">  <span class="token builtin">set</span> color of the pixel based on texture <span class="token keyword">and</span> lighting model</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>예시: ray 교차 결과가 화면에 렌더링됨</li>
<li>Ray tracing에 대한 자세한 설명은 다음 자료 참고:
<ul>
<li><a href="https://raytracing.github.io/books/RayTracingInOneWeekend.html" target="_blank" rel="noopener noreferrer">&quot;Ray Tracing in One Weekend&quot;</a></li>
</ul>
</li>
</ul>
<h2 id="rasterization-vs-ray-tracing" tabindex="-1"><a class="header-anchor" href="#rasterization-vs-ray-tracing"><span>Rasterization vs. Ray Tracing</span></a></h2>
<ul>
<li>(Nvidia에서 제공한 비교 시각화 자료)</li>
</ul>
<h2 id="rasterization-–-pros-cons" tabindex="-1"><a class="header-anchor" href="#rasterization-–-pros-cons"><span>Rasterization – Pros &amp; Cons</span></a></h2>
<ul>
<li><strong>장점</strong>
<ul>
<li>삼각형 스트림만 렌더링하면 되므로 전체 장면 데이터를 유지할 필요가 없음</li>
<li>병렬 처리에 적합 → <strong>빠름!</strong></li>
</ul>
</li>
<li><strong>단점</strong>
<ul>
<li>그림자, 반사, 투명도에 대한 일관된 처리 방식이 없음</li>
<li>상대적으로 낮은 품질의 결과물</li>
</ul>
</li>
<li>전통적으로 <strong>실시간 렌더링</strong>에 사용
<ul>
<li>예: OpenGL 또는 DirectX 기반의 게임</li>
</ul>
</li>
</ul>
<h2 id="ray-tracing-–-pros-cons" tabindex="-1"><a class="header-anchor" href="#ray-tracing-–-pros-cons"><span>Ray Tracing – Pros &amp; Cons</span></a></h2>
<ul>
<li><strong>장점</strong>
<ul>
<li>그림자, 반사, 투명도 처리 등에서 일반화된 방식 제공<br>
→ Ray와의 교차로 처리됨</li>
<li><strong>고품질 결과물 생성 가능</strong></li>
</ul>
</li>
<li><strong>단점 (전통적 관점)</strong>
<ul>
<li>실시간 애플리케이션에 너무 느림</li>
<li>하드웨어 구현이 어려움</li>
</ul>
</li>
<li><strong>전통적으로 영화용 오프라인 렌더링에 사용됨</strong>
<ul>
<li>예: Maya, Blender 등의 3D 저작 툴을 사용한 애니메이션 영화</li>
</ul>
</li>
</ul>
<h2 id="recent-ray-tracing-technology" tabindex="-1"><a class="header-anchor" href="#recent-ray-tracing-technology"><span>Recent Ray Tracing Technology</span></a></h2>
<ul>
<li>그러나 이 단점들은 더 이상 완전히 사실이 아님
<ul>
<li>Rasterization보다는 느리지만, <strong>real-time도 가능할 만큼 충분히 빠름</strong></li>
<li>(Rasterization에 비해) 구현은 여전히 어렵지만, <strong>하드웨어가 뒷받침됨</strong></li>
</ul>
</li>
<li><strong>지금은 다음과 같은 것들이 가능</strong>:
<ul>
<li>Nvidia RTX 시리즈와 같은 하드웨어</li>
<li>DirectX Raytracing, Vulkan RT 등의 API</li>
</ul>
</li>
<li><strong>최근 변화된 흐름</strong>
<ul>
<li>최초의 실시간 ray tracing 데모 “Reflections”가 <strong>2018년 3월에 발표</strong></li>
</ul>
</li>
</ul>
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://www.youtube.com/embed/lMSuGoYcT3s"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0" allowfullscreen>
  </iframe>
</div>
<h2 id="in-this-course" tabindex="-1"><a class="header-anchor" href="#in-this-course"><span>In This Course,</span></a></h2>
<ul>
<li>
<p>강의는 <strong>모든 렌더링 방식에 공통되는</strong> computer graphics의 기본 개념에 초점을 맞춤</p>
<ul>
<li><strong>Movement &amp; placement</strong>:<br>
Transformations, Hierarchical Modeling, Orientation &amp; Rotation,<br>
Kinematics &amp; Animation, Curves</li>
<li><strong>Shape &amp; appearance</strong>:<br>
Mesh, Lighting, Texture Mapping, Curves</li>
</ul>
</li>
<li>
<p>일부 강의는 <strong>rasterization에 특화된 개념</strong>도 다룸</p>
<ul>
<li><strong>2D 화면으로의 mapping 과정</strong>
<ul>
<li>Viewing / Projection / Viewport 변환</li>
</ul>
</li>
<li><strong>형상 표현</strong>
<ul>
<li>Polygon shading</li>
</ul>
</li>
<li><strong>Rasterization 처리 절차</strong>
<ul>
<li>Rasterization pipeline, Scan Conversion, Visibility</li>
</ul>
</li>
</ul>
</li>
<li>
<p>Lab에서는 여전히 널리 쓰이는 <strong>modern OpenGL</strong> 사용</p>
<ul>
<li>강의에서 배운 개념 복습용 도구로 사용됨</li>
</ul>
</li>
<li>
<p>이 수업에서는 <strong>ray tracing 또는 learnable scene representation을 다루지 않음</strong></p>
<ul>
<li><strong>실시간 렌더링에서 rasterization은 여전히 중요</strong></li>
<li>다룰 시간이 부족함</li>
</ul>
</li>
</ul>
<home/></div></template>


