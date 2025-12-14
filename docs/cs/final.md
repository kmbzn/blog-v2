# 2024 Computer Security Final Exam
- 총 16문항, 100점 만점
- 2024.12.11.

## 1. **Define** the following terms. [6점]

### fuzzing technique
- 소프트웨어의 잠재적 보안 취약점을 발견하기 위해 무작위의 유효하지 않거나 기형적 데이터를 입력값으로 주입하여 충돌/오작동을 모니터링하는 테스팅 기법
### ASLR(Address Space Layout Randomization)  
- 공격자가 메모리 주소를 예측하는 것을 방지하기 위해 stack, heap 등 주요 데이터 구조의 메모리 위치를 무작위로 재배치하는 기법
### $W \oplus X$ policy
- 메모리 페이지가 write 권한과 execute 권한을 동시에 가질 수 없도록 강제하는 보안 정책

## 2. **Select all** the correct explanation about a process. [5점]
- (1) Process is a program in execution. (O)
- (2) Single-threaded process has only one program counter. (O)
- (3) Multi-threaded process has one program counter per thread. (O)
- (4) ~~A process has its own physical memory space.~~ (X)

## 3. **Select all** the correct explanation about malware analysis methods. [5점]
- (1) The static analysis method analyzes executable files without execution. (O)
- (2) The dynamic analysis method analyzes malware by executing the malware in a controlled enviornment. (O)
- (3) The static analysis method cannot analyze malware that applied with the packing techniques. (O)
- (4) ~~The dynamic analysis method cannot analyze malware with an encrypted code section.~~ (X)
- (5) The dynamic analysis method can analyze only a part of a code section. (O)

## 4. What are the execution results of the following code statements? [10점]
1. `free(NULL)`
    - 아무런 동작도 수행하지 않음. (safe)
2. `malloc(0)`
    - 구현에 따라 `NULL` 또는 `free` 가능한 고유 pointer 반환
3. `realloc(p, 0)` (Suppose `p` is not a null pointer.)
    - `p`가 가리키는 메모리를 해제 (`free(p)`와 동일한 효과)
4. 
    ```c
    int *pn = new int;
    if (pn) { ... }
    else { ... }
    ```
    - 표준 C++에서 `new`는 실패 시 `NULL` 반환 대신 exception을 발생시키므로, `if` 검사는 무의미하거나 항상 `true`
5. `printf("%08x %08x");`
    - 인자가 부족하므로 stack 상위의 임의 데이터를 읽어 16진수로 출력 (Information leak)

## 5. Explain the dll injection attack and the process injection attack. [6점]
- **DLL Injection**: 타겟 process가 악성 dll 파일을 강제로 load하게 하여, 해당 process의 memory space와 권한 내에서 코드를 실행하는 기법
- **Process Injection**: 타겟 process의 memory space에 직접 악성 코드를 삽입(write)하고 실행 흐름을 조작하여 이를 실행시키는 공격

## 6. Packing 기술에 대하여 다음 물음에 답하시오. [9점]
### a. Explain the packing technology.
- 실행 파일의 코드를 압축하거나 난독화(Obfuscation)하여 분석가가 내부 로직을 파악하기 어렵게 만들고, 정적 분석을 방해하는 기술
### b. Explain how to find out whether a section is packed or not.
- **Entropy**: 섹션의 엔트로피가 매우 높게 측정됨 (압축/암호화된 데이터의 특성)
- **Size Mismatch**: `VirtualSize` (메모리에 로드된 크기)가 `RawSize` (파일 상의 크기)보다 현저히 큼.
- **Section Name**: 표준적이지 않은 섹션 이름(UPX1 등) 존재
### c. Explain the technology used by the Themida packer.
- Themida packer technology Code Virtualization을 사용. 원본 코드를 자체적인 가상 CPU(VM)가 해석할 수 있는 독자적인 bytecode로 변환하여 실행하고, 강력한 anti-debugging 및 anti-tampering 기능을 포함함.

## 7. In case of analyzing the file system of firmware, list the things that need to be analyzed. [6점]
- **File System Type**(`squashfs`, `cramfs`, `jffs2` 등) 식별 및 구조 분석
- **Configuration Files**: 하드코딩된 패스워드, 암호화 키, 네트워크 설정 정보
- **Kernal & Bootloader**: 부팅 시퀀스 및 커널 설정 분석
- **Application Binaries**: 웹 서버, 데몬 등 실행 파일의 취약점 분석

## 8. Why a deallocation function should not throw an exception? [5점]
- `free`나 소멸자(Destructor)는 예외 처리 과정(Stack Unwinding) 중에 호출될 수 있음. 만약 이때 또 다른 예외가 발생하면(Double fault), 런타임이 이를 처리하지 못하고 프로그램을 즉시 강제 종료(`std::terminate`)시키기 때문

## 9. Explain how GOT (Global Offset Table) table works, and explain how an attacker can attack by modifying the GOT table. [6점]
- Dynamic linking 과정에서 외부 라이브러리 함수(`printf` 같은)의 실제 메모리 주소를 저장하는 테이블. 함수 호출 시 PLT(Procedure Linkage Table)를 거쳐 GOT에 저장된 주소로 점프함.
- Attack: GOT Overwrite. 공격자가 GOT에 저장된 정상 함수(`printf`)의 주소를 악성 코드나 공격 함수(`system`)의 주소로 덮어씀. 이후 해당 함수 호출 시 공격자가 의도한 코드가 실행됨.

## 10. Explain about `rootkit` malware. How a `rootkit` can hide attacker's activities. [5점]
- 정의: 관리자 권한(root)을 획득/유지하고, 시스템 내에서 자신의 존재를 숨기기 위해 설계된 악성 소프트웨어 모듈
- Hiding Activity
    - Kernal Object Manipulation (DKOM): 프로세스 리스트 등 커널 구조체를 직접 조작하여 자신을 리스트에서 제거
    - API Hooking: 파일 탐색이나 프로세스 조회 시스템 콜을 가로채어 자신의 파일이나 프로세스 정보를 결과에서 누락시킴.

## 11. Among defense methods against stack buffer overflow attack, Stack-Smashing Protector(SSP) uses 'stack guard'. Explain with a picture how SSP organized the stack frame for a function. [5점]
      High Address                           
    ┌──────────────┐                         
    │Return Address│                         
    ├──────────────┤                         
    │     SFP      │                         
    ├──────────────┤                         
    │   Canary   ◄─┼─Stack Guard             
    ├──────────────┤ (Check for modification)
    │ Local Buffer │                         
    └──────────────┘                         
      Low Address                            
- Structure: Local variable(buffer)와 SFP(Saved Frame Pointer) 사이에 Canary(Random variable)를 삽입
- Mechanism: 함수 종료(return) 직전에 canary값이 변조되었는지 검사
- Buffer overflow로 인해 값이 바뀌었다면 공격으로 간주하고 프로그램 실행 중단

## 12. Explain the ROP(Return-Oriented Programming) attack method with picture. Explain how the `libc` library binary file is used in the ROP attack. [5점]
- Method: 메모리에 이미 로드된 코드 중 `ret`(return) 명령어로 끝나는 작은 코드 조각(Sequence)들을 체인처럼 gadget으로 연결하여 공격자가 원하는 동작을 수행하게 하는 기법. (Stack에 gadget들의 주소를 연속으로 배치하여 `ret` 실행 시 다음 gadget으로 이동)
- `libc` usage: `libc` 라이브러리는 프로그램 실행 시 메모리에 로드되며, 매우 방대한 코드를 포함하고 있음. 공격자는 `libc` 내부에 다양한 기계어 코드 조각(gadget)들을 조합하여 거의 모든 로직(Turing complete)을 구성할 수 있어, NX bit(실행 방지) 보호 기법을 우회하는데 사용됨.

## 13. Answer the following questions on DDoS attacks. [6점]
### (a) What is the definition of a DDoS attack?
- 분산된 다수의 좀비 PC(Botnet)을 이용해 특정 대상에게 동시에 막대한 양의 트래픽을 전송하여, 시스템 자원을 고갈시키고 정상적인 서비스를 불가능하게 만드는 공격
### (b) Explain how the SYN flooding attack works.
- 공격자가 spoofed IP로 대량의 `SYN` 패킷만 전송하고, 서버의 `SYN-ACK` 응답에 대해 `ACK`를 보내지 않음. 서버는 연결을 맺기 위해 half-open 상태로 대기하며 backlog queue를 가득 채우게 되어, 더 이상 새로운 정상 연결을 수락할 수 없게 됨.
### (c) Explain one or two defense mechhanism against the SYN flooding attack.
- SYN Cookies: `SYN` 요청 시 서버의 자원(queue)를 할당하지 않고, 연결 정보를 암호화하여 sequence number(cookie)로 클라이언트에 전송. 나중에 클라이언트가 올바른 `ACK`를 보낼 때만 자원 할당
- Time-out 감소: Half-open 상태의 대기 시간을 줄여 자원을 빠르게 회수

## 14. Point out lines with errors, and correct the lines. (An error can be a syntax error or a semantic error.) [7점]
```c
wchar_twide_str1[] = L"0123456789";
wchar_t*wide_str2 = (wchar_t*) malloc(strlen(wide_str1) + 1);
if (wide_str2 == NULL) {
    /* handle error */
}
strcpy(wide_str2, wide_str1);
/* ...... */
free(wide_str2); wide_str2 = NULL;
```
- `wchar_t` (Wide Character) 사용과 관련된 문법 및 메모리 할당 오류입니다.
- Line 1 (Syntax Error):
    - `wchar_twide_str1` → `wchar_t wide_str1` (자료형과 변수명 사이 공백 누락)
- Line 2 (Semantic Error):
    - `strlen`은 `char` 단위 길이만 반환하며, `malloc`은 바이트 단위 크기를 요구합니다. `wchar_t` 문자열 길이 함수(`wcslen`)를 사용하고 `sizeof(wchar_t)`를 곱해야 합니다.
    - 수정: `(wchar_t*) malloc((wcslen(wide_str1) + 1) - sizeof(wchar_t));`
- Line 6 (Semantic Error):
    - `strcpy`는 `char*` 전용 함수입니다. `wchar_t*` 전용 복사 함수를 사용해야 합니다.
    - 수정: `wcscpy(wide_str2, wide_str1);`

## 15. What can be wrong in the following two example code? [6점]
### 예제 1
```c
char dst[16];
char src[] = "0123456789";
strncpy(dst, src, sizeof(dst));
```
- Safe. but inefficient
    - `src`의 길이(10)가 `dst`의 크기(16)보다 작습니다. `strncpy`는 남은 공간을 모두 `NULL`로 채우므로(Zero-padding), 안전하게 Null-terminated되지만 불필요한 연산이 발생합니다.

### 예제 2
```
char dst[6];
char src[] = "0123456789";
strncpy(dst, src, sizeof(dst));
```

- Dangerous - No Null Termination
    - `src`의 길이(10)가 `dst`의 크기(6)보다 큽니다. `strncpy`는 정확히 6바이트만 복사하고 멈추기 때문에, `dst` 마지막에 NULL 문자(\0)가 삽입되지 않습니다.
    - 이후 `dst`를 문자열로 사용하려 할 때(예: `printf`, `strcpy` 등) 메모리 경계를 넘어 읽는 Buffer Over-read가 발생합니다.

## 16. 다음 코드에 대하여 물음에 답하시오. [8점]
```c
/* 'user' is a string that is input from a user. */
char outbuf[512];
char buffer[512];
sprintf(buffer, "ERR Wrong command: %.400s", user);
sprintf(outbuf, buffer);
```
### a. In line 3, how the buffer overflow can be prevented?
- Format specifier에 Precision(정밀도) 제한자 `%.400s`를 사용하여, `user` 입력값 중 최대 400문자까지만 읽어오도록 제한했기 때문에 `buffer`(512 bytes) 넘침을 방지했습니다.

### b. Explain whether the buffer overflow is possible or not in the above code. If so, explain your answer with a specific example.
- 가능합니다.
- Line 4의 `sprintf(outbuf, buffer);`에서 `buffer` 자체가 Format String으로 사용되고 있습니다 (Format String Vulnerability).
- 예시
    - 공격자가 `user` 입력값으로 `"%520d"`와 같은 문자열을 넣으면, `buffer`에는 `"ERR ... %520d"`가 저장됩니다.
    Line 4 실행 시 `sprintf`는 이를 해석하여 stack의 값을 읽어 520자리 숫자로 변환해 `outbuf`에 쓰려고 시도합니다. 이때 `outbuf` 크기(512 bytes)를 초과하여 buffer overflow가 발생합니다.