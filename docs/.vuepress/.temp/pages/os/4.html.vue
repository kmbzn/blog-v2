<template><div><section class="print-section">
<h1 id="_4-threads" tabindex="-1"><a class="header-anchor" href="#_4-threads"><span>4. Threads</span></a></h1>
<DateMeta />
</section>
<section class="print-section">
<h2 id="다루는-주제" tabindex="-1"><a class="header-anchor" href="#다루는-주제"><span>다루는 주제</span></a></h2>
<ul>
<li>A. 스레드 개념</li>
<li>B. 멀티스레딩 모델</li>
<li>C. 스레딩 관련 이슈</li>
<li>D. 사례</li>
</ul>
</section>
<section class="print-section">
<h1 id="a-스레드-개념" tabindex="-1"><a class="header-anchor" href="#a-스레드-개념"><span>A. 스레드 개념</span></a></h1>
</section>
<section class="print-section">
<h2 id="개념" tabindex="-1"><a class="header-anchor" href="#개념"><span>개념</span></a></h2>
<ul>
<li>스레드는 흔히 경량 프로세스(lightweight process)라 불림
<ul>
<li>실행의 단위 (스케줄링의 단위)</li>
<li>최소한의 자원만을 필요로</li>
<li>전통적인 프로세스는 중량 프로세스(heavyweight process)라 불림</li>
</ul>
</li>
</ul>
<p><img src="@source/os/image.png" alt=""></p>
</section>
<section class="print-section">
<h2 id="프로세스-vs-스레드" tabindex="-1"><a class="header-anchor" href="#프로세스-vs-스레드"><span>프로세스 vs. 스레드</span></a></h2>
<ul>
<li>프로세스
<ul>
<li>실행 단위 (스케줄링 단위)</li>
<li>완전한 자원 소유권을 가짐
<ul>
<li>주소 공간과 프로세서 컨텍스트(context) 보유</li>
<li>자원(파일, I/O 장치 등)에 대한 제어권 보유</li>
</ul>
</li>
</ul>
</li>
<li>스레드
<ul>
<li>실행 단위 (스케줄링 단위)</li>
<li>실행에 필요한 최소한의 자원만을 필요로
<ul>
<li>private 스택(private stack) 공간과 프로세서 컨텍스트 보유</li>
<li>프로세스의 다른 자원들을 공유</li>
</ul>
</li>
</ul>
</li>
</ul>
</section>
<section class="print-section">
<h2 id="단일-스레드-vs-멀티-스레드-애플리케이션" tabindex="-1"><a class="header-anchor" href="#단일-스레드-vs-멀티-스레드-애플리케이션"><span>단일 스레드 vs. 멀티 스레드 애플리케이션</span></a></h2>
<p><img src="@source/os/image-1.png" alt=""></p>
</section>
<section class="print-section">
<h2 id="스레드-예제-–-생성과-종료" tabindex="-1"><a class="header-anchor" href="#스레드-예제-–-생성과-종료"><span>스레드 예제 – 생성과 종료</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">#include &lt;pthread.h></span>
<span class="line">#include &lt;stdio.h></span>
<span class="line">#define NUM_THREADS 5</span>
<span class="line"></span>
<span class="line">void *PrintHello(void *threadid) {</span>
<span class="line">    printf("\n%d: Hello World!\n", threadid);</span>
<span class="line">    pthread_exit(NULL);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">int main (int argc, char *argv[]) {</span>
<span class="line">    pthread_t threads[NUM_THREADS];</span>
<span class="line">    int rc, t;</span>
<span class="line">    for(t=0; t &lt; NUM_THREADS; t++){</span>
<span class="line">        printf("Creating thread %d\n", t);</span>
<span class="line">        rc = pthread_create(&amp;threads[t], NULL, PrintHello, (void *)t);</span>
<span class="line">        if (rc){</span>
<span class="line">            printf("ERROR; return code is %d\n", rc);</span>
<span class="line">            exit(-1);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    pthread_exit(NULL);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">int</span>
<span class="line">pthread_create (pthread_t *thread_id,</span>
<span class="line">                const pthread_attr_t *attr,</span>
<span class="line">                void *(*thread_function)(void *),</span>
<span class="line">                void *arg);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>pthread_create</code> 함수 분석</li>
</ul>
<ol>
<li><code v-pre>thread_id</code> 인자를 통해 새로운 스레드 ID를 반환</li>
<li><code v-pre>attr</code> 파라미터는 스레드 속성을 설정하는 데 사용됨 (기본값은 NULL)</li>
<li><code v-pre>thread_func</code>는 스레드가 생성된 후 실행할 C 루틴임</li>
<li><code v-pre>arg</code>를 통해 <code v-pre>start_routine</code>에 단일 인자를 전달할 수 있음</li>
</ol>
</section>
<section class="print-section">
<h2 id="pthreads-apis" tabindex="-1"><a class="header-anchor" href="#pthreads-apis"><span>Pthreads APIs</span></a></h2>
<ul>
<li><code v-pre>pthread_t pthread_self()</code>: 자신의 스레드 ID를 가져옴</li>
<li><code v-pre>int pthread_equal(pthread_t t1, pthread_t t2)</code>: 두 스레드 ID를 비교</li>
<li><code v-pre>int pthread_join(pthread_t thread, void status_ptr)</code>: 다른 스레드가 종료될 때까지 대기</li>
<li><code v-pre>int pthread_detach(pthread_t thread)</code>: 스레드가 종료될 때 할당된 자원을 즉시 회수할 수 있음을 나타냄 (분리된 스레드는 join될 수 없음)</li>
</ul>
</section>
<section class="print-section">
<h2 id="스레드의-실행-특성" tabindex="-1"><a class="header-anchor" href="#스레드의-실행-특성"><span>스레드의 실행 특성</span></a></h2>
<ul>
<li>스레드는 실행 상태(실행 중, 준비, 대기)를 가짐</li>
<li>스레드 문맥 교환(context switching)이 필요</li>
<li>프로세스의 주소 공간(코드 및 데이터)과 자원을 공유</li>
<li>한 스레드가 전역 변수를 수정하면 프로세스 내 다른 모든 스레드가 변경 사항을 확인 가능</li>
<li>한 스레드가 연 파일은 다른 스레드에서도 사용 가능</li>
</ul>
</section>
<section class="print-section">
<h2 id="thread-private-data" tabindex="-1"><a class="header-anchor" href="#thread-private-data"><span>Thread Private Data</span></a></h2>
<ul>
<li>스택에 저장되는 변수는 스레드 private 데이터임
<ul>
<li>함수로 전달되는 파라미터 역시 스레드 private 데이터에 해당<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">double func( double a )</span>
<span class="line">{</span>
<span class="line">  double b;</span>
<span class="line">...</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>변수 a와 b는 각 스레드에 대해 독립적임</li>
</ul>
</section>
<section class="print-section">
<h2 id="스레드-로컬-변수-thread-local-variables" tabindex="-1"><a class="header-anchor" href="#스레드-로컬-변수-thread-local-variables"><span>스레드 로컬 변수 (Thread Local Variables)</span></a></h2>
<ul>
<li>모든 루틴에서 접근 가능한 전역 데이터이나, 각 스레드는 데이터의 독립적인 사본만을 가짐<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">__thread void * mydata;</span>
<span class="line"></span>
<span class="line">void * threadFunction( void * param )</span>
<span class="line">{</span>
<span class="line">  mydata = param;</span>
<span class="line">...</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><code v-pre>mydata</code> 변수는 스레드에 로컬하므로, 각 스레드는 해당 변수에 대해 서로 다른 값을 가질 수 있음</li>
</ul>
</section>
<section class="print-section">
<h2 id="이점-benefits" tabindex="-1"><a class="header-anchor" href="#이점-benefits"><span>이점 Benefits</span></a></h2>
<ul>
<li>응답성 (Responsiveness)
<ul>
<li>프로그램의 일부가 차단(block)되어도 계속 실행 가능</li>
</ul>
</li>
<li>자원 공유 (Resource sharing)
<ul>
<li>메모리와 자원을 공유</li>
</ul>
</li>
<li>경제성 (Economy)
<ul>
<li>생성 및 문맥 교환 비용이 저렴</li>
</ul>
</li>
<li>멀티프로세서 아키텍처 활용
<ul>
<li>멀티스레드 프로세스로 병렬성 증대 가능</li>
</ul>
</li>
<li>동시성 프로그래밍 모델 제공</li>
</ul>
</section>
<section class="print-section">
<h2 id="예시-웹-서버를-위한-멀티스레딩" tabindex="-1"><a class="header-anchor" href="#예시-웹-서버를-위한-멀티스레딩"><span>예시: 웹 서버를 위한 멀티스레딩</span></a></h2>
<p><img src="@source/os/image-2.png" alt=""></p>
<ul>
<li>디스패처 스레드(Dispatcher Thread): 요청을 받아 작업 스레드에 전달</li>
<li>작업 스레드(Worker Thread): 실제 요청을 처리(캐시 확인, 디스크 읽기 등)
<img src="@source/os/image-3.png" alt="">
<img src="@source/os/image-4.png" alt=""></li>
</ul>
</section>
<section class="print-section">
<h3 id="processes-threads-and-tasks" tabindex="-1"><a class="header-anchor" href="#processes-threads-and-tasks"><span>Processes, Threads, and Tasks</span></a></h3>
<ul>
<li>태스크의 용어적 정의
<ul>
<li>운영체제에서 흔히 사용되는 전문 용어는 아님</li>
<li>하지만 많은 사람들이 실행 단위(unit of execution) 또는 스케줄링 단위(unit of scheduling)를 의미하는 용어로 &quot;태스크&quot;를 사용함</li>
</ul>
</li>
<li>사용 맥락
<ul>
<li>하위 운영체제에서 스레드를 지원하는지 여부와 관계없이 사용됨</li>
<li>운영체제가 스레드를 지원할 경우 스레드를 의미할 수 있음</li>
<li>운영체제가 스레드를 지원하지 않을 경우 프로세스를 의미할 수 있음</li>
</ul>
</li>
</ul>
</section>
<section class="print-section">
<h1 id="b-멀티스레딩-모델" tabindex="-1"><a class="header-anchor" href="#b-멀티스레딩-모델"><span>B. 멀티스레딩 모델</span></a></h1>
</section>
<section class="print-section">
<h2 id="사용자-스레드-user-threads" tabindex="-1"><a class="header-anchor" href="#사용자-스레드-user-threads"><span>사용자 스레드 (User Threads)</span></a></h2>
<ul>
<li>사용자 수준의 스레드 라이브러리에 의해 관리됨
<ul>
<li>커널의 지원 없이 운영됨</li>
</ul>
</li>
<li>장점: 생성 및 관리가 빠름 (커널 개입 없음)</li>
<li>단점: 커널이 단일 스레드 방식일 경우, 하나의 사용자 스레드가 시스템 콜로 차단되면 프로세스 전체가 차단됨</li>
<li>사례: POSIX Pthreads, Mach C-threads</li>
</ul>
</section>
<section class="print-section">
<h2 id="커널-스레드-kernel-threads" tabindex="-1"><a class="header-anchor" href="#커널-스레드-kernel-threads"><span>커널 스레드 (Kernel Threads)</span></a></h2>
<ul>
<li>커널에 의해 직접 지원됨</li>
<li>커널이 커널 공간에서 스레드 생성, 스케줄링, 관리를 수행</li>
<li>사용자 스레드보다 생성 및 관리가 느림</li>
<li>사례: Windows, Solaris, Linux 등</li>
</ul>
</section>
<section class="print-section">
<h2 id="멀티스레딩-모델의-종류" tabindex="-1"><a class="header-anchor" href="#멀티스레딩-모델의-종류"><span>멀티스레딩 모델의 종류</span></a></h2>
<p><img src="@source/os/image-5.png" alt=""></p>
<ul>
<li>다대일(Many-to-One): 여러 사용자 스레드가 하나의 커널 스레드에 매핑됨 (커널 스레드 미지원 시스템에서 사용)</li>
<li>일대일(One-to-One): 각 사용자 스레드가 개별 커널 스레드에 매핑됨 (Windows, OS/2 등)</li>
<li>다대다(Many-to-Many): 여러 사용자 스레드가 그보다 적거나 같은 수의 커널 스레드에 매핑됨 (Solaris 2 등)</li>
</ul>
</section>
<section class="print-section">
<h1 id="c-스레딩-관련-이슈" tabindex="-1"><a class="header-anchor" href="#c-스레딩-관련-이슈"><span>C. 스레딩 관련 이슈</span></a></h1>
</section>
<section class="print-section">
<h2 id="fork-시스템-콜의-의미" tabindex="-1"><a class="header-anchor" href="#fork-시스템-콜의-의미"><span>fork() 시스템 콜의 의미</span></a></h2>
<ul>
<li>한 스레드가 <code v-pre>fork()</code>를 호출할 경우 두 가지 가능성이 존재
<ul>
<li>새 프로세스가 모든 스레드를 복제</li>
<li>새 프로세스가 단일 스레드로 생성됨</li>
</ul>
</li>
<li>많은 시스템이 두 가지 변형된 <code v-pre>fork()</code>를 모두 제공하여 절충</li>
</ul>
</section>
<section class="print-section">
<h2 id="기타-시스템-콜-관련-이슈" tabindex="-1"><a class="header-anchor" href="#기타-시스템-콜-관련-이슈"><span>기타 시스템 콜 관련 이슈</span></a></h2>
<ul>
<li>프로세스 내 모든 스레드는 파일 디스크립터 집합을 공유</li>
<li>한 스레드가 파일을 닫는 도중 다른 스레드가 읽거나 쓰는 상황에 대한 파일 잠금 프로토콜이 필요</li>
<li>공통 주소 공간을 공유</li>
<li><code v-pre>mmap</code>, <code v-pre>brk</code>와 같은 시스템 콜을 통한 동시 수정 시 스레드 안전(thread-safe)을 보장해야</li>
</ul>
</section>
<section class="print-section">
<h2 id="스택-오버플로우-stack-overflow" tabindex="-1"><a class="header-anchor" href="#스택-오버플로우-stack-overflow"><span>스택 오버플로우 (Stack Overflow)</span></a></h2>
<ul>
<li>UNIX 프로세스 스택 오버플로우 시 커널이 이를 감지하고 자동 확장</li>
<li>사용자 스레드의 경우 커널이 사용자 스택 정보를 알지 못</li>
<li>사용자 스레드 라이브러리가 스택 끝에 쓰기 방지 페이지를 할당하여 보호</li>
<li>오버플로우 발생 시 보호 오류가 발생하고 커널이 SIGSEGV 신호를 해당 스레드에 보냄</li>
</ul>
</section>
<section class="print-section">
<h2 id="스레드-풀-thread-pool" tabindex="-1"><a class="header-anchor" href="#스레드-풀-thread-pool"><span>스레드 풀 (Thread Pool)</span></a></h2>
<ul>
<li>프로세스 시작 시 미리 일정 수의 스레드를 생성하여 풀에 저장</li>
<li>요청 발생 시 풀에서 스레드를 깨워 할당하고, 작업 완료 후 다시 풀로 반환</li>
<li>장점: 새 스레드 생성보다 처리가 빠르며, 시스템이 지원 가능한 스레드 수를 제한할 수 있음</li>
<li>웹 서버 멀티스레딩에 유용</li>
</ul>
</section>
<section class="print-section">
<h1 id="d-사례" tabindex="-1"><a class="header-anchor" href="#d-사례"><span>D. 사례</span></a></h1>
</section>
<section class="print-section">
<h2 id="solaris-2-스레드" tabindex="-1"><a class="header-anchor" href="#solaris-2-스레드"><span>Solaris 2 스레드</span></a></h2>
<ul>
<li>커널 및 사용자 수준 모두에서 스레드 지원</li>
<li>사용자 스레드와 커널 스레드 사이에 경량 프로세스(LWP)가 존재</li>
<li>LWP는 커널이 지원하는 사용자 스레드이며, 프로세스는 최소 하나 이상의 LWP를 포함
<img src="@source/os/image-6.png" alt=""></li>
<li>커널 수준 스레드
<ul>
<li>LWP와 연결되거나 커널 자체 작업을 위해 존재하며, 시스템 내에서 유일한 스케줄링 대상</li>
</ul>
</li>
<li>사용자 수준 스레드
<ul>
<li>바운드(Bound): 특정 LWP에 영구적으로 연결됨 (빠른 응답이 필요한 실시간 앱용)</li>
<li>언바운드(Unbound): 기본값으로, 가용한 LWP 풀에 멀티플렉싱되어 실행됨</li>
</ul>
</li>
</ul>
</section>
<section class="print-section">
<h2 id="solaris-process" tabindex="-1"><a class="header-anchor" href="#solaris-process"><span>Solaris Process</span></a></h2>
<p><img src="@source/os/image-7.png" alt=""></p>
</section>
</div></template>


