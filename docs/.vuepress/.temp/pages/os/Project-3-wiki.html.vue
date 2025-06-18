<template><div><h1 id="project-3-virtual-memory-file-system-wiki" tabindex="-1"><a class="header-anchor" href="#project-3-virtual-memory-file-system-wiki"><span>Project 3: Virtual Memory &amp; File system - wiki</span></a></h1>
<h2 id="_1-design" tabindex="-1"><a class="header-anchor" href="#_1-design"><span>1. Design</span></a></h2>
<h3 id="_1-1-project-overview" tabindex="-1"><a class="header-anchor" href="#_1-1-project-overview"><span>1.1. Project overview</span></a></h3>
<p>이 wiki는 xv6-riscv 기반 운영체제에 가상 메모리와 파일 시스템 기능을 확장한 과정을 정리한다.<br>
본 Project의 목표는 메모리 효율·저장 용량·파일 참조 유연성을 개선하는 것이다.</p>
<ul>
<li>copy-on-write(COW) fork
<ul>
<li>기존 xv6는 <code v-pre>fork</code> 시 사용자 메모리를 전부 복사 → 과도한 메모리 소비</li>
<li>해결: parent-child가 page를 공유하고 <strong>첫 write 시에만 복사</strong></li>
</ul>
</li>
<li>large file support
<ul>
<li>최대 268 KB 한계(12 direct + 1 indirect)</li>
<li>해결: <strong>double-indirect</strong> 레이아웃 도입 → 약 66 MB까지 파일 생성·접근 가능</li>
</ul>
</li>
<li>symbolic link
<ul>
<li>hard link만 제공, 경로-기반 링크 부재</li>
<li>해결: <strong>UNIX-style symlink</strong> 구현 + link-chain 해석(깊이 제한 10단계)</li>
</ul>
</li>
</ul>
<table>
<thead>
<tr>
<th>기능</th>
<th>기존 한계</th>
<th>확장 목표</th>
</tr>
</thead>
<tbody>
<tr>
<td>Copy-on-Write</td>
<td><code v-pre>fork</code> 시 전체 메모리 복사</td>
<td>공유 후 첫 write 때만 복사</td>
</tr>
<tr>
<td>Large file</td>
<td>268 KB 최대 크기</td>
<td>66 MB 지원(double-indirect)</td>
</tr>
<tr>
<td>Symbolic link</td>
<td>hard link만 지원</td>
<td>경로 기반 symlink + loop 방지</td>
</tr>
</tbody>
</table>
<p>본 구현은 xv6의 원형 구조를 유지하면서 자연스럽게 기능을 확장하였으며, 각 기능별 테스트 프로그램을 통해 안정성과 정확성을 확인하였다.<br>
이 wiki는 <strong>테스트 설명 → 구현 세부 사항 → 결과 및 문제 해결</strong> 순서로 서술해 최종 완성도를 입증한다.</p>
<hr>
<h3 id="_1-2-design-principles-and-requirement-strategy" tabindex="-1"><a class="header-anchor" href="#_1-2-design-principles-and-requirement-strategy"><span>1.2. Design principles and requirement strategy</span></a></h3>
<ol>
<li>
<p><strong>On-demand page duplication</strong></p>
<ul>
<li><code v-pre>uvmcopy</code>에서 writable page의 <code v-pre>PTE_W</code>를 제거하고 <code v-pre>PTE_COW</code>를 세팅해 parent, child가 같은 physical page를 읽기 전용으로 공유한다.</li>
<li>write fault는 <code v-pre>usertrap</code>에서 감지하며, ref-count &gt; 1이면 새 page를 <code v-pre>kalloc</code> 후 복사, ref-count == 1이면 flag만 갱신해 write-enable 한다.</li>
</ul>
</li>
<li>
<p><strong>Page reference accounting</strong></p>
<ul>
<li><code v-pre>ref_counts[PHYSTOP/PGSIZE]</code> 전역 배열로 모든 physical page 사용 개수를 추적한다.</li>
<li><code v-pre>inc_ref</code> / <code v-pre>kfree</code>로 증가·감소하며 0일 때만 free list에 반환해 leak을 방지한다.</li>
</ul>
</li>
<li>
<p><strong>TLB consistency on permission change</strong></p>
<ul>
<li>RISC-V에는 x86 CR0.WP가 없으므로, write-protect 후 반드시 <code v-pre>sfence_vma</code>를 호출해 사용자 TLB를 flush한다.</li>
</ul>
</li>
<li>
<p><strong>Double-indirect block layout</strong></p>
<ul>
<li><code v-pre>NDIRECT</code>를 11로 줄이고 <code v-pre>addrs[11]</code> (single), <code v-pre>addrs[12]</code> (double) 두 포인터를 예약한다.</li>
<li><code v-pre>bmap</code>는 three-tier lookup (direct → single → double) 로직을 가진다.</li>
<li><code v-pre>MAXFILE = 11 + 256 + 256²</code> 계산으로 bigfile 테스트(65 803 blocks)를 커버한다.</li>
</ul>
</li>
<li>
<p><strong>Metadata integrity via write-ahead logging</strong></p>
<ul>
<li>indirect 테이블을 수정할 때마다 <code v-pre>log_write(bp)</code> 호출 후 <code v-pre>brelse(bp)</code>로 해제해 log 일관성을 보장한다.</li>
</ul>
</li>
<li>
<p><strong>Safe truncation path</strong></p>
<ul>
<li><code v-pre>itrunc</code>는 direct → single → double 세 단계에 대해 역순으로 <code v-pre>bfree</code>를 호출해 orphan block을 남기지 않는다.</li>
</ul>
</li>
<li>
<p><strong>Path-level symbolic link</strong></p>
<ul>
<li>새로운 inode type <code v-pre>T_SYMLINK</code>을 추가하고, link 파일에 target 경로 문자열을 저장한다.</li>
<li><code v-pre>sys_open</code>은 최대 <code v-pre>MAX_SYMLINK_LOOPS (10)</code> 깊이까지 재귀 해석하며, <code v-pre>O_NOFOLLOW</code>가 있으면 링크 자체를 연다.</li>
</ul>
</li>
<li>
<p><strong>Loop and broken-link defense</strong></p>
<ul>
<li>depth 카운터로 순환 링크를 차단하고, target 미존재 시 open 실패를 반환한다.</li>
</ul>
</li>
<li>
<p><strong>Concurrency safety</strong></p>
<ul>
<li>symlink 생성·삭제는 <code v-pre>begin_op()/end_op()</code> 트랜잭션 내부에서 inode lock을 끝까지 유지해 race condition을 방지한다.</li>
</ul>
</li>
</ol>
<hr>
<h3 id="_1-3-design-key-summary" tabindex="-1"><a class="header-anchor" href="#_1-3-design-key-summary"><span>1.3. Design key summary</span></a></h3>
<table>
<thead>
<tr>
<th>Element</th>
<th>Implementation strategy summary</th>
</tr>
</thead>
<tbody>
<tr>
<td>Page sharing</td>
<td><code v-pre>uvmcopy</code> → <code v-pre>PTE_COW</code> flag + read-only</td>
</tr>
<tr>
<td>Fault handling</td>
<td><code v-pre>usertrap</code> branch for <code v-pre>scause==store fault</code></td>
</tr>
<tr>
<td>Ref count</td>
<td><code v-pre>inc_ref</code>, <code v-pre>get_ref</code>, <code v-pre>kfree</code> guard == 0</td>
</tr>
<tr>
<td>Double-indirect layout</td>
<td><code v-pre>addrs[NDIRECT+2]</code> + 3-level <code v-pre>bmap</code></td>
</tr>
<tr>
<td>MAXFILE 계산</td>
<td><code v-pre>11 + 256 + 256² = 65 803</code> blocks</td>
</tr>
<tr>
<td>Log consistency</td>
<td>각 level 변경 직후 <code v-pre>log_write(bp)</code></td>
</tr>
<tr>
<td>Symlink syscall</td>
<td><code v-pre>sys_symlink(target, path)</code> + <code v-pre>T_SYMLINK</code> inode</td>
</tr>
<tr>
<td>Link resolution</td>
<td><code v-pre>sys_open</code> loop, depth ≤ 10, <code v-pre>O_NOFOLLOW</code> support</td>
</tr>
<tr>
<td>Concurrency</td>
<td>inode lock + write-ahead log around link ops</td>
</tr>
</tbody>
</table>
<p>이 설계에 따라 COW, large file, symbolic link 세 기능을 <strong>기존 xv6 코드와 호환</strong>되도록 통합했으며, 각각 <code v-pre>cowtest</code>, <code v-pre>bigfile</code>, <code v-pre>symlinktest</code>를 완전 통과해 목표 요구 사항을 충족한다.</p>
<h2 id="_2-test-파일에-대한-설명" tabindex="-1"><a class="header-anchor" href="#_2-test-파일에-대한-설명"><span>2. TEST 파일에 대한 설명</span></a></h2>
<h3 id="_2-1-user-cowtest-c" tabindex="-1"><a class="header-anchor" href="#_2-1-user-cowtest-c"><span>2.1. <code v-pre>/user/cowtest.c</code></span></a></h3>
<p>이 프로그램은 copy-on-write fork 기능을 테스트하는 user space 프로그램이다.</p>
<p>주요 테스트 함수는 다음과 같다.</p>
<ul>
<li>
<p><code v-pre>simpletest</code><br>
전체 physical memory의 2/3 가량을 <code v-pre>sbrk</code>로 할당하고 <code v-pre>fork</code>를 수행하여, parent와 child가 page를 공유하는지 확인한다. copy-on-write이 구현되어 있지 않으면 <code v-pre>fork</code> 실패가 발생한다.</p>
</li>
<li>
<p><code v-pre>threetest</code><br>
3개의 process가 각자 COW page에 write를 수행하며 실제로 page가 copy되고 free되는지를 확인한다. 내용 불일치나 memory leak이 없어야 통과된다.</p>
</li>
<li>
<p><code v-pre>filetest</code><br>
<code v-pre>pipe</code>와 <code v-pre>fork</code>를 통해 <code v-pre>copyout</code> 동작 중 page fault가 정상적으로 처리되는지를 검증한다. parent의 <code v-pre>buf</code>가 child에 의해 오염되지 않아야 성공이다.</p>
</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line">uint64 phys_size <span class="token operator">=</span> PHYSTOP <span class="token operator">-</span> KERNBASE<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span> sz <span class="token operator">=</span> <span class="token punctuation">(</span>phys_size <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">char</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token function">sbrk</span><span class="token punctuation">(</span>sz<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">int</span> pid <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 테스트들은 <code v-pre>fork</code>의 성능 최적화와 memory isolation의 정확성을 점검하는 데 핵심적인 역할을 한다.</p>
<hr>
<h3 id="_2-2-user-bigfile-c" tabindex="-1"><a class="header-anchor" href="#_2-2-user-bigfile-c"><span>2.2. <code v-pre>/user/bigfile.c</code></span></a></h3>
<p>이 테스트 프로그램은 xv6 파일 system에서 large file을 생성하고, 데이터를 block 단위로 연속적으로 쓰고 <code v-pre>read</code>하여 data integrity를 검증하는 기능을 수행한다.</p>
<p>주요 동작 과정은 다음과 같다.</p>
<ul>
<li><code v-pre>&quot;big.file&quot;</code>이라는 이름으로 file을 <code v-pre>O_CREATE | O_WRONLY</code> flag를 사용해 <code v-pre>open</code>하고 <code v-pre>write</code>를 수행한다.</li>
<li>block 크기(<code v-pre>BSIZE</code>)만큼 <code v-pre>buf</code>를 준비하고, 각 block에 번호를 기록한 후 반복적으로 file에 쓴다.</li>
<li>총 <code v-pre>65803</code>개의 block이 write되어야 하며, 중간마다 진행 상황을 출력한다.</li>
<li>write 완료 후 file을 <code v-pre>close</code>하고 <code v-pre>O_RDONLY</code> flag로 다시 <code v-pre>open</code>하여 <code v-pre>read</code>를 수행하고, 저장된 값이 block 번호와 일치하는지 검증한다.</li>
<li>모든 검사가 통과되면 성공 메시지를 출력하고 <code v-pre>exit</code>한다.</li>
</ul>
<p>이 테스트는 doubly-indirect block 기능이 적용된 file system이 실제로 large file을 안정적으로 처리할 수 있는지를 확인하는 데 목적이 있다.</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line">fd <span class="token operator">=</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"big.file"</span><span class="token punctuation">,</span> O_CREATE <span class="token operator">|</span> O_WRONLY<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">*</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span>buf <span class="token operator">=</span> blocks<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">int</span> cc <span class="token operator">=</span> <span class="token function">write</span><span class="token punctuation">(</span>fd<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span>cc <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">  blocks<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_2-3-user-symlinktest-c" tabindex="-1"><a class="header-anchor" href="#_2-3-user-symlinktest-c"><span>2.3. <code v-pre>/user/symlinktest.c</code></span></a></h3>
<p>이 프로그램은 symbolic link 기능을 검증하는 user space 테스트 프로그램이다.</p>
<p>주요 테스트 구성은 다음과 같다.</p>
<ul>
<li>
<p><code v-pre>testsymlink</code><br>
<code v-pre>testsymlink</code> 디렉터리를 만들고, file을 하나 생성한다. 그리고 <code v-pre>symlink</code> system call을 이용해 해당 file을 target으로 하는 link file을 생성한다. 이후 <code v-pre>read</code> 동작이 정상적으로 작동하는지 확인하고, link가 <code v-pre>T_SYMLINK</code> 타입으로 인식되는지도 <code v-pre>stat</code>으로 검증한다.<br>
이후 원본 file을 <code v-pre>unlink</code>한 뒤 broken link에 접근이 차단되는지, 다시 원형 loop 구조를 갖는 link를 만들었을 때 <code v-pre>open</code> 시 오류가 발생하는지 확인한다.<br>
마지막으로 여러 단계의 link chain을 생성한 뒤, chain의 시작점을 통해 끝 file에 접근 가능한지도 검사한다.</p>
</li>
<li>
<p><code v-pre>concur</code><br>
여러 process가 동시에 <code v-pre>symlink</code>를 생성하고 <code v-pre>unlink</code>를 반복하는 상황을 만들어 race condition이나 consistency 문제가 발생하지 않는지 검증한다. 각 process는 동일한 <code v-pre>target</code>에 대해 반복적으로 <code v-pre>symlink</code>/<code v-pre>unlink</code>를 수행한다.</p>
</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line">r <span class="token operator">=</span> <span class="token function">symlink</span><span class="token punctuation">(</span><span class="token string">"/testsymlink/a"</span><span class="token punctuation">,</span> <span class="token string">"/testsymlink/b"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token keyword">if</span><span class="token punctuation">(</span>st<span class="token punctuation">.</span>type <span class="token operator">!=</span> T_SYMLINK<span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">"not a symlink"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 test는 symbolic link의 생성, 삭제, 경로 해석, cycle 처리, broken link 및 동시 접근 문제를 종합적으로 검증하게 된다.</p>
<h2 id="_3-implementation" tabindex="-1"><a class="header-anchor" href="#_3-implementation"><span>3. Implementation</span></a></h2>
<h3 id="_3-1-copy-on-write-fork-구현" tabindex="-1"><a class="header-anchor" href="#_3-1-copy-on-write-fork-구현"><span>3.1. Copy-on-Write fork 구현</span></a></h3>
<p>copy-on-write(COW)는 parent와 child가 같은 physical page를 공유하다가 처음으로 write를 시도하는 순간에만 page를 복사하여 분리하는 방식이다. 구현은 세 가지 부분으로 구성된다.</p>
<ol>
<li>fork 시 공유 page 설정</li>
<li>user mode write fault 처리</li>
<li>physical page reference count 관리</li>
</ol>
<hr>
<h4 id="_3-1-1-uvmcopy에서-페이지-공유-설정" tabindex="-1"><a class="header-anchor" href="#_3-1-1-uvmcopy에서-페이지-공유-설정"><span>3.1.1. uvmcopy에서 페이지 공유 설정</span></a></h4>
<p><code v-pre>uvmcopy</code>는 parent의 pagetable을 순회하면서 writable page를 read-only로 바꾸고 <code v-pre>PTE_COW</code> flag를 추가한다. 이후 동일한 physical page를 child pagetable에 매핑하고, ref count를 증가시킨다.</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token comment">// kernel/vm.c</span></span>
<span class="line"><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">*</span>pte <span class="token operator">&amp;</span> PTE_W<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">*</span>pte <span class="token operator">&amp;=</span> <span class="token operator">~</span>PTE_W<span class="token punctuation">;</span>     <span class="token comment">// read-only</span></span>
<span class="line">  <span class="token operator">*</span>pte <span class="token operator">|=</span> PTE_COW<span class="token punctuation">;</span>    <span class="token comment">// cow 표시</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">mappages</span><span class="token punctuation">(</span>new<span class="token punctuation">,</span> i<span class="token punctuation">,</span> PGSIZE<span class="token punctuation">,</span> pa<span class="token punctuation">,</span> <span class="token function">PTE_FLAGS</span><span class="token punctuation">(</span><span class="token operator">*</span>pte<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token operator">*</span>pte <span class="token operator">|=</span> PTE_W<span class="token punctuation">;</span>    <span class="token comment">// 실패 시 복구</span></span>
<span class="line">    <span class="token operator">*</span>pte <span class="token operator">&amp;=</span> <span class="token operator">~</span>PTE_COW<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">goto</span> err<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">mappages</span><span class="token punctuation">(</span>new<span class="token punctuation">,</span> i<span class="token punctuation">,</span> PGSIZE<span class="token punctuation">,</span> pa<span class="token punctuation">,</span> <span class="token function">PTE_FLAGS</span><span class="token punctuation">(</span><span class="token operator">*</span>pte<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">inc_ref</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token operator">*</span><span class="token punctuation">)</span>pa<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 공유 page ref count++ 하게 됨..</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 과정으로 parent와 child는 같은 physical page를 read-only로 바라보며, write 시 fault가 발생하도록 준비된다.</p>
<hr>
<h4 id="_3-1-2-usertrap에서-write-fault-처리" tabindex="-1"><a class="header-anchor" href="#_3-1-2-usertrap에서-write-fault-처리"><span>3.1.2. usertrap에서 write fault 처리</span></a></h4>
<p>user mode에서 write fault가 발생하면 <code v-pre>usertrap</code>이 COW 여부를 판정한다. 해당 page가 <code v-pre>PTE_COW</code>이고 공유 ref count가 2 이상이면 새 page를 할당해 내용을 복사한 뒤 child 쪽으로만 writable 매핑을 만든다. ref count가 1이면 같은 page를 그대로 writable로 전환한다.</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token comment">// kernel/trap.c</span></span>
<span class="line"><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">r_scause</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">{</span>                 <span class="token comment">// store fault</span></span>
<span class="line">  uint64 va <span class="token operator">=</span> <span class="token function">r_stval</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token class-name">pte_t</span> <span class="token operator">*</span>pte <span class="token operator">=</span> <span class="token function">walk</span><span class="token punctuation">(</span>p<span class="token operator">-></span>pagetable<span class="token punctuation">,</span> va<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">*</span>pte <span class="token operator">&amp;</span> PTE_COW<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">*</span>pte <span class="token operator">&amp;</span> PTE_V<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">*</span>pte <span class="token operator">&amp;</span> PTE_U<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    uint64 pa <span class="token operator">=</span> <span class="token function">PTE2PA</span><span class="token punctuation">(</span><span class="token operator">*</span>pte<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">get_ref</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token operator">*</span><span class="token punctuation">)</span>pa<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>       <span class="token comment">// 공유 page</span></span>
<span class="line">      <span class="token keyword">char</span> <span class="token operator">*</span>mem <span class="token operator">=</span> <span class="token function">kalloc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">memmove</span><span class="token punctuation">(</span>mem<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span>pa<span class="token punctuation">,</span> PGSIZE<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">uvmunmap</span><span class="token punctuation">(</span>p<span class="token operator">-></span>pagetable<span class="token punctuation">,</span> <span class="token function">PGROUNDDOWN</span><span class="token punctuation">(</span>va<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token function">mappages</span><span class="token punctuation">(</span>p<span class="token operator">-></span>pagetable<span class="token punctuation">,</span> <span class="token function">PGROUNDDOWN</span><span class="token punctuation">(</span>va<span class="token punctuation">)</span><span class="token punctuation">,</span> PGSIZE<span class="token punctuation">,</span></span>
<span class="line">               <span class="token punctuation">(</span>uint64<span class="token punctuation">)</span>mem<span class="token punctuation">,</span> PTE_R<span class="token operator">|</span>PTE_W<span class="token operator">|</span>PTE_X<span class="token operator">|</span>PTE_U<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>                          <span class="token comment">// 단독 page</span></span>
<span class="line">      <span class="token operator">*</span>pte <span class="token operator">|=</span> PTE_W<span class="token punctuation">;</span></span>
<span class="line">      <span class="token operator">*</span>pte <span class="token operator">&amp;=</span> <span class="token operator">~</span>PTE_COW<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">goto</span> trapret<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 logic 덕분에 write를 시도한 process만 새 page를 갖게 되고, 나머지 프로세스는 원본 page를 그대로 유지한다.</p>
<hr>
<h4 id="_3-1-3-kalloc-kfree에서-reference-count-관리" tabindex="-1"><a class="header-anchor" href="#_3-1-3-kalloc-kfree에서-reference-count-관리"><span>3.1.3. kalloc / kfree에서 reference count 관리</span></a></h4>
<p>physical page별 사용 개수를 <code v-pre>ref_counts[]</code> 배열로 관리한다. 새 page를 할당하면 ref count를 1로 설정하고, page를 공유할 때 <code v-pre>inc_ref</code>로 증가시킨다. <code v-pre>kfree</code>는 ref count가 0이 될 때만 실제 free list에 반환한다.</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token comment">// kalloc.c</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">inc_ref</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>pa<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  ref_counts<span class="token punctuation">[</span><span class="token punctuation">(</span>uint64<span class="token punctuation">)</span>pa <span class="token operator">/</span> PGSIZE<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">kfree</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>pa<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  uint <span class="token operator">*</span>ref <span class="token operator">=</span> <span class="token operator">&amp;</span>ref_counts<span class="token punctuation">[</span><span class="token punctuation">(</span>uint64<span class="token punctuation">)</span>pa <span class="token operator">/</span> PGSIZE<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token operator">*</span>ref <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">*</span>ref <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">memset</span><span class="token punctuation">(</span>pa<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> PGSIZE<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">run</span><span class="token operator">*</span><span class="token punctuation">)</span>pa<span class="token punctuation">)</span><span class="token operator">-></span>next <span class="token operator">=</span> kmem<span class="token punctuation">.</span>freelist<span class="token punctuation">;</span></span>
<span class="line">    kmem<span class="token punctuation">.</span>freelist <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">run</span><span class="token operator">*</span><span class="token punctuation">)</span>pa<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>초기화 시 모든 usable page의 ref count를 1로 설정한 뒤 <code v-pre>freerange</code>에서 <code v-pre>kfree</code>를 호출해 free list에 넣는다.</p>
<hr>
<h4 id="_3-1-4-연동-결과" tabindex="-1"><a class="header-anchor" href="#_3-1-4-연동-결과"><span>3.1.4. 연동 결과</span></a></h4>
<ul>
<li><code v-pre>cowtest</code>의 <code v-pre>simpletest</code>, <code v-pre>threetest</code>, <code v-pre>filetest</code>가 모두 <code v-pre>pass</code>된다.</li>
<li>parent와 child의 write 동작이 서로 영향을 주지 않으며, 여전히 read-only page를 공유함으로써 메모리 사용량이 크게 감소한다.</li>
<li>ref count 관리로 page 누수 없이 <code v-pre>exit</code> 후 메모리가 정상적으로 회수된다.</li>
</ul>
<p>copy-on-write fork 구현은 위 세 부분이 맞물려 동작하며, xv6의 기본 fork 대비 성능과 메모리 효율을 크게 향상시킨다.</p>
<h3 id="_3-2-large-file-지원-구현" tabindex="-1"><a class="header-anchor" href="#_3-2-large-file-지원-구현"><span>3.2. Large file 지원 구현</span></a></h3>
<p>large file을 저장하기 위해 inode의 block address 구조를 direct + single indirect + double indirect 3단계로 확장했다. bigfile 테스트가 요구하는 <code v-pre>65803</code>개 block을 정확히 지원하도록 상수를 재조정하고, <code v-pre>bmap</code>와 <code v-pre>itrunc</code>를 수정해 block 할당·해제를 처리한다.</p>
<hr>
<h4 id="_3-2-1-핵심-매크로-변경" tabindex="-1"><a class="header-anchor" href="#_3-2-1-핵심-매크로-변경"><span>3.2.1. 핵심 매크로 변경</span></a></h4>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token comment">// kernel/param.h</span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">FSSIZE</span> <span class="token expression"><span class="token number">262656</span>      </span><span class="token comment">// file system 전체 block 수</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// kernel/fs.h</span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">NDIRECT</span> <span class="token expression"><span class="token number">11</span>         </span><span class="token comment">// direct pointer 11개</span></span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">NINDIRECT</span> <span class="token expression"><span class="token punctuation">(</span>BSIZE <span class="token operator">/</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>uint<span class="token punctuation">)</span><span class="token punctuation">)</span>     </span><span class="token comment">// 256</span></span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAXFILE</span> <span class="token expression"><span class="token punctuation">(</span>NDIRECT <span class="token operator">+</span> NINDIRECT <span class="token operator">+</span> NINDIRECT<span class="token operator">*</span>NINDIRECT<span class="token punctuation">)</span>   </span><span class="token comment">// 11 + 256 + 65536</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>direct pointer를 11개로 줄여 <code v-pre>addrs[NDIRECT+2]</code> 배열의 마지막 두 칸을 single indirect, double indirect pointer로 사용한다.</li>
<li><code v-pre>MAXFILE</code>을 double indirect 범위까지 계산해 bigfile 테스트의 block 수와 일치시킨다.</li>
</ul>
<hr>
<h4 id="_3-2-2-dinode-구조" tabindex="-1"><a class="header-anchor" href="#_3-2-2-dinode-구조"><span>3.2.2. dinode 구조</span></a></h4>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">dinode</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">short</span> type<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">short</span> major<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">short</span> minor<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">short</span> nlink<span class="token punctuation">;</span></span>
<span class="line">  uint  size<span class="token punctuation">;</span></span>
<span class="line">  uint  addrs<span class="token punctuation">[</span>NDIRECT<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>   <span class="token comment">// [0..10] direct, [11] single, [12] double</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_3-2-3-bmap-수정" tabindex="-1"><a class="header-anchor" href="#_3-2-3-bmap-수정"><span>3.2.3. bmap 수정</span></a></h4>
<p>double indirect 분기를 추가해 두 단계로 block을 할당·탐색한다.</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token comment">// kernel/fs.c (발췌)</span></span>
<span class="line">bn <span class="token operator">-=</span> NINDIRECT<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// double indirect</span></span>
<span class="line"><span class="token keyword">if</span><span class="token punctuation">(</span>bn <span class="token operator">&lt;</span> NINDIRECT <span class="token operator">*</span> NINDIRECT<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 1단계: double indirect pointer가 없으면 할당</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>addr <span class="token operator">=</span> ip<span class="token operator">-></span>addrs<span class="token punctuation">[</span>NDIRECT<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    addr <span class="token operator">=</span> <span class="token function">balloc</span><span class="token punctuation">(</span>ip<span class="token operator">-></span>dev<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    ip<span class="token operator">-></span>addrs<span class="token punctuation">[</span>NDIRECT<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> addr<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// 2단계: first level index 계산</span></span>
<span class="line">  bp <span class="token operator">=</span> <span class="token function">bread</span><span class="token punctuation">(</span>ip<span class="token operator">-></span>dev<span class="token punctuation">,</span> addr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  a  <span class="token operator">=</span> <span class="token punctuation">(</span>uint<span class="token operator">*</span><span class="token punctuation">)</span>bp<span class="token operator">-></span>data<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>addr <span class="token operator">=</span> a<span class="token punctuation">[</span>bn <span class="token operator">/</span> NINDIRECT<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    addr <span class="token operator">=</span> <span class="token function">balloc</span><span class="token punctuation">(</span>ip<span class="token operator">-></span>dev<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    a<span class="token punctuation">[</span>bn <span class="token operator">/</span> NINDIRECT<span class="token punctuation">]</span> <span class="token operator">=</span> addr<span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">log_write</span><span class="token punctuation">(</span>bp<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">brelse</span><span class="token punctuation">(</span>bp<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 3단계: second level index</span></span>
<span class="line">  bp <span class="token operator">=</span> <span class="token function">bread</span><span class="token punctuation">(</span>ip<span class="token operator">-></span>dev<span class="token punctuation">,</span> addr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  a  <span class="token operator">=</span> <span class="token punctuation">(</span>uint<span class="token operator">*</span><span class="token punctuation">)</span>bp<span class="token operator">-></span>data<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>addr <span class="token operator">=</span> a<span class="token punctuation">[</span>bn <span class="token operator">%</span> NINDIRECT<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    addr <span class="token operator">=</span> <span class="token function">balloc</span><span class="token punctuation">(</span>ip<span class="token operator">-></span>dev<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    a<span class="token punctuation">[</span>bn <span class="token operator">%</span> NINDIRECT<span class="token punctuation">]</span> <span class="token operator">=</span> addr<span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">log_write</span><span class="token punctuation">(</span>bp<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">brelse</span><span class="token punctuation">(</span>bp<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> addr<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>동작 순서</p>
<ul>
<li>double indirect pointer가 없으면 새 block을 할당한다.</li>
<li>첫 번째 레벨 배열을 가져와 index를 계산하고, 두 번째 레벨 배열 block을 할당‧기록한다.</li>
<li>두 번째 레벨 배열에서 실제 data block을 할당해 반환한다.</li>
</ul>
<hr>
<h4 id="_3-2-4-itrunc-개념-요약" tabindex="-1"><a class="header-anchor" href="#_3-2-4-itrunc-개념-요약"><span>3.2.4. itrunc 개념 요약</span></a></h4>
<p><code v-pre>itrunc</code>는 direct, single indirect, double indirect 블록을 모두 순회하며 <code v-pre>bfree</code>를 호출해 해제한다.<br>
double indirect는 두 단계에 걸쳐 <code v-pre>bread → loop → bfree</code> 순으로 재귀적으로 처리한다.</p>
<hr>
<h4 id="_3-2-5-bigfile-테스트와의-정합성" tabindex="-1"><a class="header-anchor" href="#_3-2-5-bigfile-테스트와의-정합성"><span>3.2.5. bigfile 테스트와의 정합성</span></a></h4>
<ul>
<li><code v-pre>bigfile.c</code>는 <code v-pre>MAXFILE</code>에 해당하는 <code v-pre>65803</code> block을 순차 write한 뒤 read로 검증한다.</li>
<li>double indirect 분기와 상수 조정으로 write loop가 block 할당 오류 없이 완료된다.</li>
<li>read 단계에서 block 번호와 data가 일치해 데이터 무결성이 보장된다.</li>
</ul>
<p>이로써 xv6 file system은 약 66 MB(65803 * 1024) 규모의 파일까지 안정적으로 저장·읽기할 수 있다.</p>
<h3 id="_3-3-symbolic-link-구현" tabindex="-1"><a class="header-anchor" href="#_3-3-symbolic-link-구현"><span>3.3. Symbolic link 구현</span></a></h3>
<p>symbolic link은 파일 이름 대신 경로 문자열을 저장해 다른 파일을 간접 참조하는 inode이다.<br>
구현은 inode type 추가, <code v-pre>sys_symlink</code> 시스템콜 정의, <code v-pre>sys_open</code>의 경로 해석 확장, 그리고 루프 방지를 위한 깊이 제한으로 구성된다.</p>
<hr>
<h4 id="_3-3-1-주요-상수-및-타입" tabindex="-1"><a class="header-anchor" href="#_3-3-1-주요-상수-및-타입"><span>3.3.1. 주요 상수 및 타입</span></a></h4>
<ul>
<li><code v-pre>T_SYMLINK</code> 파일 타입을 inode와 stat 구조에 추가</li>
<li><code v-pre>MAX_SYMLINK_LOOPS</code> 상수를 <code v-pre>10</code>으로 정의해 무한 순환을 방지</li>
<li><code v-pre>stat</code>, <code v-pre>user.h</code>, 시스템콜 번호 테이블에 타입‧함수‧번호를 모두 반영</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">T_SYMLINK</span> <span class="token expression"><span class="token number">4</span>        </span><span class="token comment">// kernel/fs.h, kernel/stat.h</span></span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MAX_SYMLINK_LOOPS</span> <span class="token expression"><span class="token number">10</span></span></span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">SYS_symlink</span> <span class="token expression"><span class="token number">22</span>     </span><span class="token comment">// syscall 번호</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_3-3-2-sys-symlink" tabindex="-1"><a class="header-anchor" href="#_3-3-2-sys-symlink"><span>3.3.2. sys_symlink</span></a></h4>
<p><code v-pre>sys_symlink(const char *target, const char *linkpath)</code>는 다음 순서로 동작한다.</p>
<ol>
<li><code v-pre>create(linkpath, T_SYMLINK, 0, 0)</code> 호출로 빈 symlink inode 생성</li>
<li><code v-pre>writei</code>로 target 경로 문자열을 inode 데이터 영역에 기록</li>
<li>작업 실패 시 <code v-pre>iunlockput</code> 후 -1 반환</li>
</ol>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ip <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> T_SYMLINK<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">writei</span><span class="token punctuation">(</span>ip<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>uint64<span class="token punctuation">)</span>target<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">strlen</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token function">strlen</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_3-3-3-ys-open의-경로-해석" tabindex="-1"><a class="header-anchor" href="#_3-3-3-ys-open의-경로-해석"><span>3.3.3. ys_open의 경로 해석</span></a></h4>
<p>open 시 symlink를 자동으로 따라가도록 while 루프를 추가했다.</p>
<ul>
<li>최대 <code v-pre>MAX_SYMLINK_DEPTH</code>만큼 반복하며 <code v-pre>namei</code>로 현재 경로를 lookup</li>
<li>inode가 <code v-pre>T_SYMLINK</code>, <code v-pre>O_NOFOLLOW</code>가 없는 경우
<ul>
<li>symlink 파일에서 target 경로 문자열을 읽어 <code v-pre>path</code> 변수에 복사</li>
<li>깊이 카운트를 증가시키고 루프 재시작</li>
</ul>
</li>
<li>depth 초과 시 실패</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> depth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> depth <span class="token operator">&lt;</span> MAX_SYMLINK_DEPTH<span class="token punctuation">;</span> depth<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ip <span class="token operator">=</span> <span class="token function">namei</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>omode <span class="token operator">&amp;</span> O_CREATE<span class="token punctuation">)</span></span>
<span class="line">      ip <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> T_FILE<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">else</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span></span>
<span class="line">    <span class="token function">ilock</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span>ip<span class="token operator">-></span>type <span class="token operator">==</span> T_SYMLINK <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span>omode <span class="token operator">&amp;</span> O_NOFOLLOW<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">char</span> link_target<span class="token punctuation">[</span>MAXPATH<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token function">readi</span><span class="token punctuation">(</span>ip<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>uint64<span class="token punctuation">)</span>link_target<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> MAXPATH <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">iunlockput</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    link_target<span class="token punctuation">[</span>len<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">'\0'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">safestrcpy</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> link_target<span class="token punctuation">,</span> MAXPATH<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">continue</span><span class="token punctuation">;</span>          <span class="token comment">// 다시 해석</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">goto</span> found<span class="token punctuation">;</span>          <span class="token comment">// 실제 파일 도착</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_3-3-4-create-함수-호환성" tabindex="-1"><a class="header-anchor" href="#_3-3-4-create-함수-호환성"><span>3.3.4. create 함수 호환성</span></a></h4>
<p><code v-pre>create</code>는 기존 T_FILE · T_DIR·T_DEVICE 로직을 유지하며, <code v-pre>T_SYMLINK</code>를 추가 파라미터로 받았다. symlink 생성 시 별도 초기화는 필요 없고, <code v-pre>nlink</code>는 1로 설정한 뒤 <code v-pre>dirlink</code>로 디렉토리에 등록한다.</p>
<hr>
<h4 id="_3-3-5-전체적인-동작-과정" tabindex="-1"><a class="header-anchor" href="#_3-3-5-전체적인-동작-과정"><span>3.3.5. 전체적인 동작 과정</span></a></h4>
<ul>
<li><code v-pre>symlink target link</code> 명령이 들어오면 <code v-pre>sys_symlink</code>가 link 파일을 만들고 target 경로를 내용으로 기록한다.</li>
<li>이후 <code v-pre>open(link)</code> 호출은 루프를 돌며 symlink 파일을 열고 target 문자열을 읽어 다시 <code v-pre>namei</code>를 수행하게 된다.</li>
<li>최대 10단계까지 link chain을 따라가며, cycle이거나 깊이 초과 시 오류를 반환한다.</li>
<li><code v-pre>O_NOFOLLOW</code> flag를 사용하면 <code v-pre>symlink</code> 자체를 열 수 있다.</li>
</ul>
<p>이 방식으로 <code v-pre>symlinktest</code>의 link 생성, loop 감지, broken link 처리, 동시성(create · unlink race) 시나리오가 모두 통과된다.</p>
<h2 id="_4-results" tabindex="-1"><a class="header-anchor" href="#_4-results"><span>4. Results</span></a></h2>
<h3 id="_4-1-cowtest-c" tabindex="-1"><a class="header-anchor" href="#_4-1-cowtest-c"><span>4.1. <code v-pre>cowtest.c</code></span></a></h3>
<h4 id="_4-1-1-sub-test-comparison" tabindex="-1"><a class="header-anchor" href="#_4-1-1-sub-test-comparison"><span>4.1.1. Sub-test comparison</span></a></h4>
<table>
<thead>
<tr>
<th>Sub-test</th>
<th>Expected reference</th>
<th>Actual output</th>
<th>Analysis &amp; reasoning</th>
<th>Verdict</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>simpletest</code></td>
<td><code v-pre>simple: ok</code></td>
<td>identical</td>
<td>COW page는 복사 없이 공유, ref count +1/-1 정상</td>
<td><code v-pre>pass</code></td>
</tr>
<tr>
<td><code v-pre>threetest</code> (×3)</td>
<td>세 줄 모두 <code v-pre>three: ok</code></td>
<td>identical</td>
<td>세 프로세스가 동시에 write → 공유 page 복사 후 free, ref count leak 없음</td>
<td><code v-pre>pass</code></td>
</tr>
<tr>
<td><code v-pre>filetest</code></td>
<td><code v-pre>file: ok</code> 및 마지막 <code v-pre>ALL COW TESTS PASSED</code></td>
<td>identical</td>
<td><code v-pre>copyout</code>가 COW page를 직접 처리하도록 수정하여 pipe alloc 성공</td>
<td><code v-pre>pass</code></td>
</tr>
</tbody>
</table>
<p>→ 메모리 공유·복사·해제 전 과정이 모두 올바르게 작동한다.</p>
<hr>
<h3 id="_4-2-bigfile-c" tabindex="-1"><a class="header-anchor" href="#_4-2-bigfile-c"><span>4.2. <code v-pre>bigfile.c</code></span></a></h3>
<table>
<thead>
<tr>
<th>항목</th>
<th>Expected</th>
<th>Actual</th>
<th>분석</th>
</tr>
</thead>
<tbody>
<tr>
<td>Blocks written</td>
<td>65 803</td>
<td>65 803</td>
<td>double-indirect <code v-pre>bmap</code>가 전체 할당 범위 처리</td>
</tr>
<tr>
<td>Verification read</td>
<td>all match</td>
<td>all match</td>
<td>block 번호와 데이터 일치, 무결성 검증 통과</td>
</tr>
<tr>
<td>Runtime (QEMU)</td>
<td>수 분</td>
<td>약 20 분</td>
<td>동기식 log I/O 지연 허용 범위</td>
</tr>
</tbody>
</table>
<p>→ 66 MB 급 파일을 오류 없이 write-read 했으므로 large-file 확장이 성공적으로 동작한다.</p>
<hr>
<h3 id="_4-3-symlinktest-c" tabindex="-1"><a class="header-anchor" href="#_4-3-symlinktest-c"><span>4.3. <code v-pre>symlinktest.c</code></span></a></h3>
<table>
<thead>
<tr>
<th>Sub-test</th>
<th>Observation</th>
<th>Explanation</th>
<th>Verdict</th>
</tr>
</thead>
<tbody>
<tr>
<td>Basic link (<code v-pre>b</code>→<code v-pre>a</code>)</td>
<td><code v-pre>b</code> 타입 <code v-pre>T_SYMLINK</code>, 읽으면 <code v-pre>'a'</code></td>
<td><code v-pre>create</code>가 <code v-pre>T_SYMLINK</code> 전달, target 경로 저장</td>
<td>pass</td>
</tr>
<tr>
<td>Broken link</td>
<td>원본 <code v-pre>a</code> 삭제 후 <code v-pre>open(b)</code> 실패</td>
<td><code v-pre>sys_open</code>이 depth loop 내에서 inode 미존재 시 에러 반환</td>
<td>pass</td>
</tr>
<tr>
<td>Cyclic link (a↔b)</td>
<td><code v-pre>open(b)</code> 오류 반환</td>
<td>depth 카운터 10 도달 후 루프 감지</td>
<td>pass</td>
</tr>
<tr>
<td>Chain (1→2→3→4)</td>
<td><code v-pre>write</code> via <code v-pre>1</code>, <code v-pre>read</code> via <code v-pre>4</code> 동일 문자</td>
<td>4-step 해석이 <code v-pre>MAX_SYMLINK_LOOPS</code>-안에 완료</td>
<td>pass</td>
</tr>
<tr>
<td>Concurrency</td>
<td>두 child 모두 정상 종료</td>
<td>inode lock + log write 로 race condition 방지</td>
<td>pass</td>
</tr>
</tbody>
</table>
<p>→ 링크 생성·삭제·해석·동시성이 모두 요구 조건을 충족한다.</p>
<hr>
<h3 id="_4-4-completion-process" tabindex="-1"><a class="header-anchor" href="#_4-4-completion-process"><span>4.4. Completion process</span></a></h3>
<ol>
<li><code v-pre>make qemu</code></li>
<li>QEMU shell:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">xv6 kernel is booting</span>
<span class="line"></span>
<span class="line">init: starting <span class="token function">sh</span></span>
<span class="line">$ cowtest</span>
<span class="line">simple: ok</span>
<span class="line">simple: ok</span>
<span class="line">three: ok</span>
<span class="line">three: ok</span>
<span class="line">three: ok</span>
<span class="line">file: ok</span>
<span class="line">ALL COW TESTS PASSED</span>
<span class="line">$ bigfile</span>
<span class="line"><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span></span>
<span class="line">wrote <span class="token number">65803</span> blocks</span>
<span class="line">bigfile <span class="token keyword">done</span><span class="token punctuation">;</span> ok</span>
<span class="line">$ symlinktest</span>
<span class="line">Start: <span class="token builtin class-name">test</span> symlinks</span>
<span class="line"><span class="token builtin class-name">test</span> symlinks: ok</span>
<span class="line">Start: <span class="token builtin class-name">test</span> concurrent symlinks</span>
<span class="line"><span class="token builtin class-name">test</span> concurrent symlinks: ok</span>
<span class="line">$ </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>세 테스트 모두 <code v-pre>… ok</code> / <code v-pre>PASSED</code> 출력.</li>
</ol>
<p><img src="https://kmbzn.com/images/screenshot.png" alt="screenshot"></p>
<hr>
<h3 id="_4-5-program-flow-snapshot-기능별-동작-흐름-요약" tabindex="-1"><a class="header-anchor" href="#_4-5-program-flow-snapshot-기능별-동작-흐름-요약"><span>4.5. Program-flow snapshot 기능별 동작 흐름 요약</span></a></h3>
<ul>
<li><strong>COW</strong> : <code v-pre>fork → uvmcopy(PTE_COW) → write fault → usertrap → kalloc+copy → resume</code></li>
<li><strong>Large file</strong> : <code v-pre>write loop → bmap(direct→single→double) → log_write → disk</code></li>
<li><strong>Symlink</strong> : <code v-pre>sys_open → namei → ilock → type check → readi(target) → namei retry (≤10)</code></li>
</ul>
<h2 id="_5-troubleshooting" tabindex="-1"><a class="header-anchor" href="#_5-troubleshooting"><span>5. Troubleshooting</span></a></h2>
<h3 id="_5-1-copy-on-write-troubleshooting" tabindex="-1"><a class="header-anchor" href="#_5-1-copy-on-write-troubleshooting"><span>5.1. Copy-on-Write troubleshooting</span></a></h3>
<h4 id="_5-1-1-initial-symptom" tabindex="-1"><a class="header-anchor" href="#_5-1-1-initial-symptom"><span>5.1.1. Initial symptom</span></a></h4>
<p><code v-pre>simpletest</code>, <code v-pre>threetest</code>는 통과했으나 <code v-pre>filetest</code>에서 <strong><code v-pre>file: pipe() failed</code></strong> 메시지 발생.</p>
<h4 id="_5-1-2-hypotheses" tabindex="-1"><a class="header-anchor" href="#_5-1-2-hypotheses"><span>5.1.2. Hypotheses</span></a></h4>
<ul>
<li><strong>Memory leak</strong> : <code v-pre>pipealloc</code> 내부 <code v-pre>kalloc</code> 실패 가능성 → 디버그 로그 추가, 미출력.</li>
<li><strong>File structure exhaustion</strong> : <code v-pre>filealloc</code> 실패 가능성 → 디버그 로그 추가, 미출력.</li>
</ul>
<h4 id="_5-1-3-root-cause" tabindex="-1"><a class="header-anchor" href="#_5-1-3-root-cause"><span>5.1.3. Root cause</span></a></h4>
<ul>
<li><code v-pre>pipe</code>는 fd 번호를 user 배열에 복사하기 위해 <code v-pre>copyout</code> 호출.</li>
<li>parent page는 <code v-pre>PTE_COW</code> + read-only.</li>
<li>기존 <code v-pre>copyout</code>은 <code v-pre>PTE_W</code>가 꺼진 페이지를 만나면 즉시 <code v-pre>-1</code> 반환 → <code v-pre>pipealloc</code> 실패.</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token comment">// old copyout (excerpt)</span></span>
<span class="line"><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">*</span>pte <span class="token operator">&amp;</span> PTE_W<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>          <span class="token comment">// write-protect → 즉시 실패</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-1-4-fix" tabindex="-1"><a class="header-anchor" href="#_5-1-4-fix"><span>5.1.4. Fix</span></a></h4>
<p><code v-pre>copyout</code>이 <code v-pre>PTE_COW</code> 플래그를 감지하면 직접 COW page 복사 후 재시도.</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token comment">// kernel/vm.c (core patch)</span></span>
<span class="line"><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">*</span>pte <span class="token operator">&amp;</span> PTE_COW<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span><span class="token operator">*</span>pte <span class="token operator">&amp;</span> PTE_W<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">copy_cow_page</span><span class="token punctuation">(</span>pagetable<span class="token punctuation">,</span> va<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-1-5-result" tabindex="-1"><a class="header-anchor" href="#_5-1-5-result"><span>5.1.5. Result</span></a></h4>
<p><code v-pre>pipe</code> 성공 → <code v-pre>filetest</code> <strong>ok</strong> → 최종 <strong>ALL COW TESTS PASSED</strong>.</p>
<hr>
<h3 id="_5-2-large-file-troubleshooting" tabindex="-1"><a class="header-anchor" href="#_5-2-large-file-troubleshooting"><span>5.2. Large-file troubleshooting</span></a></h3>
<h4 id="_5-2-1-symptom-1" tabindex="-1"><a class="header-anchor" href="#_5-2-1-symptom-1"><span>5.2.1. Symptom 1</span></a></h4>
<p><code v-pre>wrote 268 blocks</code> 후 <strong>file is too small</strong> 오류.</p>
<h4 id="_5-2-2-cause-1" tabindex="-1"><a class="header-anchor" href="#_5-2-2-cause-1"><span>5.2.2. Cause 1</span></a></h4>
<p><code v-pre>NDIRECT</code>가 12로 남아 double-indirect 포인터 미사용.</p>
<h4 id="_5-2-3-fix-1" tabindex="-1"><a class="header-anchor" href="#_5-2-3-fix-1"><span>5.2.3. Fix 1</span></a></h4>
<p><code v-pre>NDIRECT</code> → 11, <code v-pre>addrs[NDIRECT+2]</code>로 구조체 갱신 → double-indirect 활성화.</p>
<hr>
<h4 id="_5-2-4-symptom-2" tabindex="-1"><a class="header-anchor" href="#_5-2-4-symptom-2"><span>5.2.4. Symptom 2</span></a></h4>
<p><code v-pre>mkfs</code> assertion <strong>(BSIZE % sizeof(struct dinode)) == 0</strong> 실패.</p>
<h4 id="_5-2-5-cause-2" tabindex="-1"><a class="header-anchor" href="#_5-2-5-cause-2"><span>5.2.5. Cause 2</span></a></h4>
<p><code v-pre>struct dinode</code> 크기가 64 B 배수 아님.</p>
<h4 id="_5-2-6-fix-2" tabindex="-1"><a class="header-anchor" href="#_5-2-6-fix-2"><span>5.2.6. Fix 2</span></a></h4>
<p>배열 크기 조정으로 64 B 정렬 확보 → 이미지 생성 성공.</p>
<hr>
<h4 id="_5-2-7-symptom-3" tabindex="-1"><a class="header-anchor" href="#_5-2-7-symptom-3"><span>5.2.7. Symptom 3</span></a></h4>
<p><code v-pre>bigfile</code> 실행 시간이 과도(QEMU + sync log).</p>
<h4 id="_5-2-8-work-around" tabindex="-1"><a class="header-anchor" href="#_5-2-8-work-around"><span>5.2.8. Work-around</span></a></h4>
<p>대기 후 <strong>wrote 65803 blocks / bigfile done; ok</strong> 출력.</p>
<hr>
<h3 id="_5-3-symlink-troubleshooting" tabindex="-1"><a class="header-anchor" href="#_5-3-symlink-troubleshooting"><span>5.3. Symlink troubleshooting</span></a></h3>
<h4 id="_5-3-1-initial-compile-errors" tabindex="-1"><a class="header-anchor" href="#_5-3-1-initial-compile-errors"><span>5.3.1. Initial compile errors</span></a></h4>
<p>미정의 상수·중복 <code v-pre>stat</code>·미등록 syscall 등.</p>
<h4 id="_5-3-2-fix-steps" tabindex="-1"><a class="header-anchor" href="#_5-3-2-fix-steps"><span>5.3.2. Fix steps</span></a></h4>
<p>상수 정의, 함수 원형 추가, <code v-pre>syscall.h / syscall.c / usys.pl</code> 갱신,<br>
<code v-pre>ulib.c</code> 중복 <code v-pre>stat</code> 제거 등으로 컴파일 완료.</p>
<hr>
<h4 id="_5-3-3-runtime-error-a-—-failure-b-isn-t-a-symlink" tabindex="-1"><a class="header-anchor" href="#_5-3-3-runtime-error-a-—-failure-b-isn-t-a-symlink"><span>5.3.3. Runtime error A — <code v-pre>FAILURE: b isn't a symlink</code></span></a></h4>
<ul>
<li><strong>Cause</strong> : <code v-pre>create()</code>가 <code v-pre>T_SYMLINK</code>를 무시하고 <code v-pre>T_FILE</code>로 할당.</li>
<li><strong>Fix</strong> : <code v-pre>ialloc(dev, type)</code>로 타입 그대로 전달.</li>
</ul>
<hr>
<h4 id="_5-3-4-runtime-error-b-—-broken-link-panic" tabindex="-1"><a class="header-anchor" href="#_5-3-4-runtime-error-b-—-broken-link-panic"><span>5.3.4. Runtime error B — broken link panic</span></a></h4>
<ul>
<li><strong>Cause</strong> : <code v-pre>sys_open</code>이 depth / <code v-pre>O_NOFOLLOW</code> 체크 없이 재해석.</li>
<li><strong>Fix</strong> : 깊이 카운터(≤10) 및 <code v-pre>O_NOFOLLOW</code> 분기 추가.</li>
</ul>
<hr>
<h4 id="_5-3-5-runtime-error-c-—-concurrent-unlink-panic" tabindex="-1"><a class="header-anchor" href="#_5-3-5-runtime-error-c-—-concurrent-unlink-panic"><span>5.3.5. Runtime error C — concurrent unlink panic</span></a></h4>
<ul>
<li><strong>Cause</strong> : <code v-pre>sys_symlink</code>가 write 중 lock 해제 → race.</li>
<li><strong>Fix</strong> : <code v-pre>writei</code> 완료 후 <code v-pre>iunlockput</code>; 각 단계 <code v-pre>log_write</code> 호출.</li>
</ul>
<h4 id="_5-3-6-result" tabindex="-1"><a class="header-anchor" href="#_5-3-6-result"><span>5.3.6. Result</span></a></h4>
<p><code v-pre>symlinktest</code>의 basic·broken·loop·concurrent 시나리오 모두 <strong>ok</strong> 출력.</p>
<h2 id="_6-additional-content" tabindex="-1"><a class="header-anchor" href="#_6-additional-content"><span>6. Additional Content</span></a></h2>
<h3 id="_6-1-reference-notes-for-cow-large-file-symbolic-link-implementation-in-xv6-riscv" tabindex="-1"><a class="header-anchor" href="#_6-1-reference-notes-for-cow-large-file-symbolic-link-implementation-in-xv6-riscv"><span>6.1. Reference notes for COW / Large file / Symbolic link implementation in xv6-riscv</span></a></h3>
<ul>
<li>RISC-V에는 CR0(Write Protect) 비트가 없으므로, 페이지를 read-only로 만드는 작업은 PTE_W 클리어 + TLB flush로만 완결된다.</li>
<li>double-indirect block 구현 시 <code v-pre>balloc</code>으로 할당받은 두 번째 레벨 블록을 반드시 <code v-pre>log_write</code> 후 <code v-pre>brelse</code>해야 log 일관성이 유지된다.</li>
<li>symlink 해석은 <code v-pre>namei</code>와 동일한 잠금 순서를 따라야 deadlock을 피할 수 있다. 특히 <code v-pre>sys_open</code> 루프 내부에서 <code v-pre>ilock(ip)</code> 후 <code v-pre>readi</code>를 호출할 때 log transaction이 열린 상태여야 한다.</li>
</ul>
</div></template>


