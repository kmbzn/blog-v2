<template><div><h1 id="project-03" tabindex="-1"><a class="header-anchor" href="#project-03"><span>Project 03</span></a></h1>
<h2 id="virtual-memory-file-system" tabindex="-1"><a class="header-anchor" href="#virtual-memory-file-system"><span>Virtual Memory &amp; File system</span></a></h2>
<p><strong>Due date:</strong> 2025. 06. 10. (Tue) 24:00<br>
<strong>Operating System</strong></p>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<ul>
<li><strong>Copy-on-Write Fork</strong>
<ul>
<li>Memory management optimization through lazy allocation</li>
</ul>
</li>
<li><strong>Large Files</strong>
<ul>
<li>File system extension with doubly-indirect blocks</li>
</ul>
</li>
<li><strong>Symbolic Links</strong>
<ul>
<li>Advanced file referencing and path resolution</li>
</ul>
</li>
</ul>
<h1 id="copy-on-write-fork" tabindex="-1"><a class="header-anchor" href="#copy-on-write-fork"><span>Copy-on-Write Fork</span></a></h1>
<h2 id="overview-1" tabindex="-1"><a class="header-anchor" href="#overview-1"><span>Overview</span></a></h2>
<ul>
<li><strong>Problem: Inefficient memory copying in fork()</strong>
<ul>
<li>Current fork() copies all parent memory immediately
<ul>
<li>Inefficient and time-consuming</li>
<li>Can fail due to insufficient memory</li>
</ul>
</li>
</ul>
</li>
<li><strong>Solution: Copy-on-Write (COW)</strong>
<ul>
<li>Share pages between parent and child initially</li>
<li>Copy pages only when modified</li>
</ul>
</li>
</ul>
<h2 id="cow-fork-architecture" tabindex="-1"><a class="header-anchor" href="#cow-fork-architecture"><span>COW Fork Architecture</span></a></h2>
<ul>
<li><strong>Initial State:</strong>
<ul>
<li>Child page table points to parent's physical pages</li>
<li>Parent's PTEs marked read-only to trap write access</li>
<li>COW bit set using RSW (Reserved for Software) bits</li>
</ul>
</li>
<li><strong>Write Access:</strong>
<ul>
<li><strong>Page fault</strong> triggered on write attempt</li>
<li>Kernel allocates new physical page</li>
<li>Original page copied to new page</li>
<li>PTE updated with write permission</li>
</ul>
</li>
<li><strong>Reference Counting:</strong>
<ul>
<li>Track number of processes sharing each page</li>
<li>Free pages only when reference count reaches zero</li>
</ul>
</li>
</ul>
<h2 id="implementation-tasks" tabindex="-1"><a class="header-anchor" href="#implementation-tasks"><span>Implementation Tasks</span></a></h2>
<ul>
<li><strong>Core Functions to Modify:</strong>
<ul>
<li><code v-pre>uvmcopy()</code>: Share pages instead of copying</li>
<li><code v-pre>usertrap()</code>: Handle COW page faults</li>
<li><code v-pre>kfreevm()</code>: Apply COW logic to kernel operations</li>
<li><code v-pre>fork()</code> / <code v-pre>wait()</code> / <code v-pre>exit()</code>: Implement reference counting</li>
</ul>
</li>
<li><strong>Key Challenges:</strong>
<ul>
<li>Distinguishing COW faults from other page faults</li>
<li>Properly managing page reference counters</li>
<li>Handling out-of-memory conditions</li>
<li>Maintaining compatibility with existing code</li>
</ul>
</li>
</ul>
<h2 id="cow-test-result" tabindex="-1"><a class="header-anchor" href="#cow-test-result"><span>Cow Test Result</span></a></h2>
<ul>
<li><strong>simplest()</strong>: Basic COW Memory Allocation and Behavior Verification</li>
<li><strong>threetest()</strong>: Multi-Process COW Stress Testing</li>
<li><strong>filetest()</strong>: System Call Integration with COW (copyout() Compatibility)</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">...</span>
<span class="line">simple: ok</span>
<span class="line">threetest: ok</span>
<span class="line">filetest: ok</span>
<span class="line">...</span>
<span class="line">ALL COW TESTS PASSED</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="large-files" tabindex="-1"><a class="header-anchor" href="#large-files"><span>Large Files</span></a></h1>
<h2 id="overview-2" tabindex="-1"><a class="header-anchor" href="#overview-2"><span>Overview</span></a></h2>
<ul>
<li><strong>Problem: Limited file size in xv6</strong>
<ul>
<li>Current limit: 268 blocks (268 KB)
<ul>
<li>12 direct + 1 single-indirect</li>
</ul>
</li>
<li>Insufficient for modern applications</li>
</ul>
</li>
<li><strong>Solution: Doubly-Indirect Blocks</strong>
<ul>
<li>Support up to 12 + 256 + 256*256 blocks (~66 MB)</li>
<li>Structure: 11 direct + 1 single-indirect + 1 double-indirect</li>
<li>Maintain backward compatibility</li>
</ul>
</li>
</ul>
<h2 id="current-block-addressing-hierarchy" tabindex="-1"><a class="header-anchor" href="#current-block-addressing-hierarchy"><span>Current Block Addressing Hierarchy</span></a></h2>
<h2 id="block-addressing-hierarchy" tabindex="-1"><a class="header-anchor" href="#block-addressing-hierarchy"><span>Block Addressing Hierarchy</span></a></h2>
<h2 id="implementation-tasks-1" tabindex="-1"><a class="header-anchor" href="#implementation-tasks-1"><span>Implementation Tasks</span></a></h2>
<ul>
<li><strong>Constants and Structures:</strong>
<ul>
<li>Change FSSIZE from 2000 to 262656</li>
<li>Modify NINODE and NFILE</li>
<li>Update on-disk structures</li>
<li>Modify inode's <code v-pre>addrs</code> array and inode structures</li>
</ul>
</li>
<li><strong>Core Functions:</strong>
<ul>
<li><code v-pre>bmap()</code>: Implement doubly-indirect address translation</li>
<li><code v-pre>itrunc()</code>: Free all direct and indirect blocks</li>
<li><code v-pre>create()</code>: Support new file/structure creation</li>
</ul>
</li>
</ul>
<h2 id="largefile-test-result" tabindex="-1"><a class="header-anchor" href="#largefile-test-result"><span>Largefile Test Result</span></a></h2>
<ul>
<li>Large File Creation and Sequential Writing</li>
<li>File Size Validation</li>
<li>Data Integrity Verification</li>
</ul>
<h1 id="symbolic-links" tabindex="-1"><a class="header-anchor" href="#symbolic-links"><span>Symbolic Links</span></a></h1>
<h2 id="overview-3" tabindex="-1"><a class="header-anchor" href="#overview-3"><span>Overview</span></a></h2>
<ul>
<li><strong>Problem: Rigid file referencing in xv6</strong>
<ul>
<li>Only hard links available (inode-based)</li>
<li>Cannot link directories or span file systems</li>
<li>No support for broken or flexible links</li>
</ul>
</li>
<li><strong>Solution: Symbolic Links</strong>
<ul>
<li>Store target path as data in a file</li>
<li>Can point to non-existent files</li>
<li>Enable more flexible linking and references</li>
<li>Enhanced for system flexibility</li>
</ul>
</li>
</ul>
<h2 id="symbolic-links-architecture" tabindex="-1"><a class="header-anchor" href="#symbolic-links-architecture"><span>Symbolic Links Architecture</span></a></h2>
<ul>
<li><strong>File Type Extension:</strong>
<ul>
<li>Add <code v-pre>T_SYMLINK</code> file type</li>
</ul>
</li>
<li><strong>Target path stored</strong> in the inode's data blocks</li>
<li><strong>New system call:</strong> <code v-pre>symlink(target, path)</code></li>
<li><strong>System Call Interface:</strong>
<ul>
<li><code v-pre>sys_symlink()</code>: (Step 1) Create symlink file</li>
</ul>
</li>
<li><strong>Modified <code v-pre>open()</code></strong>: (Step 2) Follow symbolic links directly
<ul>
<li>Handle relative/absolute paths, link loops</li>
</ul>
</li>
<li><strong>Path Resolution:</strong>
<ul>
<li>Recursive resolution for nested links</li>
<li>Cycle detection to prevent infinite loops</li>
<li>Proper error handling for broken links</li>
</ul>
</li>
</ul>
<h1 id="implementation-tasks-2" tabindex="-1"><a class="header-anchor" href="#implementation-tasks-2"><span>Implementation Tasks</span></a></h1>
<ul>
<li><strong>New Components:</strong>
<ul>
<li><code v-pre>T_SYMLINK</code> file type in <code v-pre>kernel/fs.h</code></li>
<li><code v-pre>sys_symlink()</code> system call implementation</li>
<li><code v-pre>symlink(2)</code> user-level syscall wrapper</li>
</ul>
</li>
<li><strong>Modified Functions:</strong>
<ul>
<li><code v-pre>open()</code>: Implement path resolution logic</li>
<li><code v-pre>create()</code>: Support symbolic link creation</li>
</ul>
</li>
</ul>
<h1 id="symlink-test-result" tabindex="-1"><a class="header-anchor" href="#symlink-test-result"><span>Symlink Test Result</span></a></h1>
<ul>
<li><strong><code v-pre>testsymlink()</code> - Core Functionality Testing</strong>
<ul>
<li>Symbolic Link Creation and Access</li>
<li>Relative Path Handling</li>
<li>Circular Reference Detection</li>
<li>Broken Symbolic Link Testing</li>
<li>Chain Link Resolution</li>
</ul>
</li>
<li><strong><code v-pre>concur()</code> - Concurrent Testing</strong></li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">...</span>
<span class="line">Start: test symlinks</span>
<span class="line">test symlinks: OK</span>
<span class="line">Start: test concurrent symlinks</span>
<span class="line">test concurrent symlinks: OK</span>
<span class="line">...</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="evaluation" tabindex="-1"><a class="header-anchor" href="#evaluation"><span>Evaluation</span></a></h1>
<ul>
<li><strong>Completeness</strong> The xv6 operating system must function correctly according to the specification requirements.</li>
<li><strong>Wiki &amp; Commit History</strong> Grading will be based on the wiki documentation, so the wiki should be written in as much detail as possible.</li>
<li><strong>Deadline</strong> The submission deadline must be strictly observed. After the deadline, you will get 0 points, and scores will be revised.</li>
<li><strong>DO NOT PLAGIARIZE ANY COPY!!!</strong></li>
</ul>
<h1 id="wiki" tabindex="-1"><a class="header-anchor" href="#wiki"><span>Wiki</span></a></h1>
<ul>
<li><strong>Design</strong> Outline your implementation approach for meeting the project requirements.</li>
<li><strong>Implementation</strong> Explain key code modifications and their purpose, focusing on changes from the original xv6.</li>
<li><strong>Results</strong> Show evidence of successful implementation with:
<ul>
<li>Completion Process, Screenshots of working code, Explanation of program flow</li>
</ul>
</li>
<li><strong>Troubleshooting</strong> Describe any problems encountered, solutions applied, and any unresolved issues.</li>
<li>Additional content may be included if relevant.</li>
</ul>
<h1 id="submission" tabindex="-1"><a class="header-anchor" href="#submission"><span>Submission</span></a></h1>
<ul>
<li>Submit your implemented code and wiki through <strong>GitHub</strong>.
<ul>
<li><strong>Make the submission branch and submit your repository.</strong></li>
<li>The name of the repository is 'os_project03_[studentID]'.</li>
</ul>
</li>
<li>The wiki file should be named '<strong>os_project03_[class number]_[student ID].pdf</strong>'.</li>
<li>Submission deadline: <strong>June 19, 2025, 23:59</strong>
<ul>
<li>Late submissions (submitted after the deadline on June 19, 2025, 23:59) but will only receive 50% of the possible score.</li>
</ul>
</li>
</ul>
<h1 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a"><span>Q&amp;A</span></a></h1>
<ul>
<li>For questions related to the project, please use the question board 'Project 03 Question Board' on the LMS.</li>
<li>Questions sent by email <strong>will not be answered</strong>.</li>
<li>For questions not related to the project, please use the Q&amp;A board or send an email.</li>
</ul>
</div></template>


