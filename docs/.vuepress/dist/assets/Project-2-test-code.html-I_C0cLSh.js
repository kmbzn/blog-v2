import{_ as e,c as a,a as n,o as i}from"./app-C-apr5ms.js";const l={};function d(r,s){return i(),a("div",null,s[0]||(s[0]=[n(`<h1 id="project-02-test-code" tabindex="-1"><a class="header-anchor" href="#project-02-test-code"><span>Project 02: Test Code</span></a></h1><p>Implementing a simple kernel-level thread</p><p>Due date<br> 2025. 05. 28. 23:59</p><h2 id="notice" tabindex="-1"><a class="header-anchor" href="#notice"><span>Notice</span></a></h2><ul><li><p><strong>프로젝트 마감일이 연장되었습니다.</strong></p><ul><li>GitHub에 <strong>5월 28일 11:59PM까지</strong> 제출하세요.</li><li>지각 제출은 5월 29일 11:59PM까지 이메일로 보내세요.</li><li>프로젝트 3은 29일에 공개됩니다.</li></ul></li><li><p><strong>이번 과제는 제공된 모든 테스트 케이스만 정확히 동작하면 통과입니다. (포기하지 마세요!)</strong></p><ul><li>예제의 출력 메시지는 예시일 뿐이므로 자유롭게 작성해도 됩니다.</li><li>출력 숫자나 순서는 정확히 일치할 필요 없습니다.</li><li>결과는 논리적으로 올바르면 됩니다.</li><li>결과가 다르게 나왔다면, 그 이유를 위키에 작성하세요.</li></ul></li></ul><h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span>Tips</span></a></h2><ul><li>스레드 간에 공유되는 것과 공유되지 않는 것을 고려하고 구현하세요.</li><li>함수 주소는 0으로 보일 수 있습니다.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">(gdb) p/x &amp;main_thread</span>
<span class="line">$1 = 0x0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="test-1" tabindex="-1"><a class="header-anchor" href="#test-1"><span>Test 1</span></a></h2><ul><li>이 테스트는 thread API의 기본 기능과 메모리 공유 여부를 검증합니다.</li><li>Thread 0은 전역 변수를 수정하고, 나머지 스레드는 즉시 종료합니다.</li><li>Thread 0은 마지막에 종료해야 하며, 메인 스레드는 Thread 0이 수행한 수정 결과를 확인할 수 있어야 합니다.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">[TEST#1]</span>
<span class="line">Thread 1 start</span>
<span class="line">Thread 2 start</span>
<span class="line">Thread 3 start</span>
<span class="line">Thread 1 end</span>
<span class="line">Thread 2 end</span>
<span class="line">Thread 3 end</span>
<span class="line">Thread 0 start</span>
<span class="line">Thread 0 end</span>
<span class="line">TEST#1 Passed</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="test-2" tabindex="-1"><a class="header-anchor" href="#test-2"><span>Test 2</span></a></h2><ul><li>이 테스트는 스레드가 두 개의 인자를 정확히 받고 공유 자원에 올바르게 쓰는지 검증합니다.</li><li>메인 스레드는 스레드들이 올바르게 동작했는지도 함께 검사합니다.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">[TEST#2]</span>
<span class="line">Thread 0 start, iter=0</span>
<span class="line">Thread 0 end</span>
<span class="line">Thread 1 start, iter=1000</span>
<span class="line">Thread 1 end</span>
<span class="line">Thread 2 start, iter=2000</span>
<span class="line">Thread 2 end</span>
<span class="line">Thread 3 start, iter=3000</span>
<span class="line">Thread 3 end</span>
<span class="line">Thread 4 start, iter=4000</span>
<span class="line">Thread 4 end</span>
<span class="line">TEST#2 Passed</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="test-3" tabindex="-1"><a class="header-anchor" href="#test-3"><span>Test 3</span></a></h2><ul><li>이 테스트는 fork가 올바르게 작동하는지 검증합니다.</li><li>fork 이후, 부모 프로세스는 기존 메인 스레드의 주소 공간을 유지하고, 자식 프로세스는 별도의 주소 공간을 가져야 합니다.</li><li>자식이 부모의 주소 공간을 공유한다면 에러를 감지합니다.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">[TEST#3]</span>
<span class="line">Thread 0 start</span>
<span class="line">Thread 1 start</span>
<span class="line">Thread 2 start</span>
<span class="line">Thread 3 start</span>
<span class="line">Child of thread 0 start</span>
<span class="line">Child of thread 0 end</span>
<span class="line">Child of thread 1 start</span>
<span class="line">Child of thread 1 end</span>
<span class="line">Child of thread 2 start</span>
<span class="line">Child of thread 2 end</span>
<span class="line">Child of thread 3 start</span>
<span class="line">Child of thread 3 end</span>
<span class="line">Thread 0 end</span>
<span class="line">Thread 1 end</span>
<span class="line">Thread 2 end</span>
<span class="line">Thread 3 end</span>
<span class="line">TEST#3 Passed</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="test-4" tabindex="-1"><a class="header-anchor" href="#test-4"><span>Test 4</span></a></h2><ul><li>이 테스트는 sbrk 호출을 스레드가 제대로 처리하는지 검증합니다. <ul><li>malloc은 내부적으로 sbrk를 호출합니다.</li></ul></li><li>하나의 스레드가 할당한 메모리에 다른 스레드가 접근할 때 문제가 없는지 확인합니다.</li><li>여러 스레드가 각각 메모리를 할당할 경우, 주소가 중복되지 않아야 합니다.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">[TEST#4]</span>
<span class="line">addr 0 at break = 0x88888801000</span>
<span class="line">addr 1 at break = 0x88888801400</span>
<span class="line">addr 2 at break = 0x88888801800</span>
<span class="line">addr 3 at break = 0x88888801c00</span>
<span class="line">addr 4 at break = 0x88888802000</span>
<span class="line">TEST#4 Passed</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="test-5" tabindex="-1"><a class="header-anchor" href="#test-5"><span>Test 5</span></a></h2><ul><li>이 테스트는 스레드가 kill 시스템 콜을 제대로 처리하는지 검증합니다.</li><li>메인 스레드가 종료되면 모든 스레드는 함께 종료되어야 합니다.</li><li>다른 스레드 중 하나가 종료되면, 그 스레드만 종료되어야 합니다.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">[TEST#5]</span>
<span class="line">Thread 0 start, pid 29</span>
<span class="line">Thread 1 start, pid 29</span>
<span class="line">Thread 2 start, pid 29</span>
<span class="line">Thread 3 start, pid 29</span>
<span class="line">Thread 4 start, pid 29</span>
<span class="line">Thread 2 end</span>
<span class="line">Thread 0 end</span>
<span class="line">TEST#5 Passed</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="test-6" tabindex="-1"><a class="header-anchor" href="#test-6"><span>Test 6</span></a></h2><ul><li>이 테스트는 exec 시스템 콜을 스레드가 제대로 처리하는지 검증합니다.</li><li>Thread 0은 thread_fcn 프로그램을 실행합니다.</li><li>exec이 호출되면, 모든 스레드는 종료되고 새로운 이미지로 대체되어야 합니다.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">[TEST#6]</span>
<span class="line">Thread 0 start</span>
<span class="line">Thread 1 start</span>
<span class="line">Thread 2 start</span>
<span class="line">Thread 3 start</span>
<span class="line">Thread 4 start</span>
<span class="line">Executing...</span>
<span class="line">Thread exec test 0</span>
<span class="line">TEST#6 Passed</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="result" tabindex="-1"><a class="header-anchor" href="#result"><span>Result</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">$ thread_test</span>
<span class="line">[TEST#1] Passed</span>
<span class="line">[TEST#2] Passed</span>
<span class="line">[TEST#3] Passed</span>
<span class="line">[TEST#4] Passed</span>
<span class="line">[TEST#5] Passed</span>
<span class="line">[TEST#6] Passed</span>
<span class="line">All tests passed. Great job!</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28)]))}const c=e(l,[["render",d]]),p=JSON.parse('{"path":"/os/Project-2-test-code.html","title":"Project 02: Test Code","lang":"ko-KR","frontmatter":{},"git":{"updatedTime":1749897692000,"contributors":[{"name":"김병준","username":"","email":"kmbzn24@hanyang.ac.kr","commits":3}],"changelog":[{"hash":"7dfc10ae87be9ce0083cb39d24d30b15e77a0371","time":1749897692000,"email":"kmbzn24@hanyang.ac.kr","author":"김병준","message":"directory name change"},{"hash":"2b4e7518785d5abd51b56763aec5d7d0d5ec111e","time":1748183308000,"email":"kmbzn24@hanyang.ac.kr","author":"김병준","message":"오타 수정"},{"hash":"dbe1c41954e98f08833d8f4322d01722c506a8ff","time":1748101962000,"email":"kmbzn24@hanyang.ac.kr","author":"김병준","message":"add test code"}]},"filePathRelative":"os/Project-2-test-code.md"}');export{c as comp,p as data};
