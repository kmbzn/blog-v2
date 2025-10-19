# 2024 Midterm Exam
총 15 문항, 100점 만점  
2024.10.16.

1.  [8점] Define the following terms.
      - contingency planning: 예기치 않은 사고, 재난, 보안 침해 사고가 발생했을 때, 조직이 신속하게 대응하고 비즈니스 연속성을 유지하며 피해를 최소화하기 위해 사전에 수립하는 절차와 전략의 집합
      - computationally secure: 어떤 암호 시스템을 깨는 데 필요한 계산 자원이 현재와 예측 가능한 미래의 기술 수준으로도 현실적으로 불가능할 정도로 막대한 경우
      - false positive: 정상적 행위나 파일임에도 불구하고, 보안 시스템이 이를 악의적 위협이나 공격으로 잘못 탐지하는 오류
      - risk: 특정 위협이 자산의 취약점을 이용하여 해당 자산에 손실이나 손해를 입힐 가능성

2.  [6점] 컴퓨터 보안의 목표(Security Goals)는 Confidentiality(기밀성), Integrity(무결성), Availablity(가용성)을 보존하는 것입니다. 각 용어를 정의하고, 각 목표에 대한 공격의 예를 제시하시오. The security goals of computer security are to preserve confidentiality, integrity and availability. Define each term and give some examples of attacks on these terms.
    (a) Confidentiality: 인가된(authorized) 사용자만이 정보에 접근하고 그 내용을 알 수 있도록 보장하는 것. - 공격 예: 데이터 도청(Eavesdropping), 스니핑(Sniffing), 데이터 유출(Data breach), 어깨너머로 훔쳐보기(Shoulder surfing).
    (b) Integrity: 정보가 인가되지 않은 사용자에 의해 임의로 생성, 수정, 삭제되지 않았음을 보장하는 것. 데이터의 정확성과 완전성을 유지함. - 공격 예: 데이터 변조(Data modification), 바이러스(Virus) 감염을 통한 파일 수정, Man-in-the-Middle (MITM) 공격 중 데이터 조작.
    (c) Availability: 인가된 사용자가 정보나 시스템 자원을 필요로 할 때 시간적으로 사용할 수 있도록 보장하는 것. - 공격 예: 서비스 거부(DoS, Denial of Service) 공격, 분산 서비스 거부(DDoS, Distributed DoS) 공격, 랜섬웨어(Ransomware)를 통한 파일 접근 차단.

3.  [5점] SBOM에 대하여 설명하고, SBOM이 SW 보안 취약점이 발생하였을 때, 어떻게 효과적으로 사용될 수 있는지 설명하시오. Explain about SBOM, and explain how SBOM can be used when SW security vulnerabilities are found.
- 소프트웨어 제품을 구성하는 모든 구성 요소(components), 라이브러리(libraries), 모듈, 그리고 이들의 종속성(dependencies)에 대한 상세한 목록.
- 본래 제조업에서 사용하는 자재 명세서(BOM) 개념을 소프트웨어 공급망(Supply Chain)에 적용한 것으로, 각 구성 요소의 버전 정보, 라이선스, 제공자 등을 포함함.
- SW 보안 취약점 발생 시 활용 방안:
  - 신속한 취약점 식별: 특정 오픈소스 라이브러리(e.g., Log4j, OpenSSL)에서 심각한 보안 취약점이 발견되었을 때, 조직은 유지보수 중인 모든 소프트웨어의 소스 코드를 일일이 검토할 필요 없이, 보유한 SBOM 목록을 즉시 조회함.
  - 영향도 분석: SBOM 조회를 통해 해당 취약점을 가진 구성 요소가 자사의 어떤 소프트웨어 제품의 어느 버전에 사용되었는지 정확하고 빠르게 파악할 수 있음.
  - 효율적인 대응: 영향받는 시스템을 신속하게 식별하여 우선적으로 보안 패치(patch)를 적용하거나 완화 조치(mitigation)를 수행할 수 있어, 전체적인 대응 시간(MTTR, Mean Time To Respond)을 획기적으로 단축시킴.

4.  [7점] Feistel cipher structure를 그리고, 이 구조의 구성 요소 및 장점을 설명하시오. Draw the Feistel cipher structure, and explain the elements of the structure and the advantage of the structure.

5.  [8점] Symmetric Encryption 방법과 Asymmetric Encryption 방법을 비교하여 설명하고, 각 방법의 장단점을 설명하고, 알고리즘 예를 나열하시오. Explain both symmetric encryption and asymmetric encryption, and explain pros and cons of each method, and give examples of algorithms.

| | Symmetric | Asymmetric |
| :--- | :--- | :--- |
| explanation | | |
| advantages | | |
| disadvantages | | |
| Algorithm<br>Examples | | |

6.  [8점] Block cipher를 이용한 mode-of-operation에 대하여 다음 물음에 답하시오.
    (a) Explain the Output feedback(OFB) mode and the Cipher feedback(CFB) mode with drawings. (explain both encryption and decryption processes.)  

    (b) Explain pros and cons of the OFB mode. OFB 모드의 장단점을 설명하시오.  

7.  [8점] RSA cryptosystem에 대하여 다음 물음에 답하시오.
    (a) Explain how to generate public key and private key.  

    (b) Encrypt a message M with the public key.  

8.  [4점] User authentication methods can be categorized into four approaches. Explain four categories and give examples for each category.

9.  [8점] Password salt에 대하여 다음 물음에 답하시오.
    (a) Explain how to apply the password salt.  

    (b) Explain why password salt can make the password file more secure.  

10.	[6점] Proactive password checking에 대하여 설명하고, proactive password checking에서 사용하는 방법들을 설명하시오.

Proactive password checking은 사용자가 암호를 설정·변경할 때 시스템이 즉시 그 암호의 약점을 검사하여 취약한 암호의 사용을 차단하거나 개선을 요구하는 접근 방식입니다. 주된 목적은 사용자가 약한 암호를 쓰는 것을 사전에 막아 이후 발생할 수 있는 계정 탈취 위험을 줄이는 것입니다.
사용되는 방법들(예):

	•	길이·구성 규칙 검사: 최소 길이, 대문자/소문자/숫자/특수문자 포함 여부 등 기본 규칙 적용.
	•	블랙리스트(금지 암호) 검사: 자주 쓰이는 암호 목록(예: 123456, password 등)이나 이전에 유출된 암호 목록과 비교해 차단.
	•	형태 기반 검사: 연속된 문자/숫자, 키보드 패턴, 사용자 관련 정보(이름, 이메일 등) 포함 여부 검사.
	•	추측 저항성 평가(비밀번호 강도 추정): 패스워드에 대한 추측 시도(무차별·사전 공격)를 모사해 추측 난이도를 점수화(예: 패스워드 엔트로피 추정).
	•	정책 피드백 제공: 사용자가 입력할 때 실시간으로 약한 부분을 알려주고 개선 방안을 제시.
	•	암호 재사용 탐지(가능하면): 동일 계정 또는 같은 도메인 내 이전 암호 재사용 금지.

11.	[5점] The access control matrix can be used to implement Discretionary Access Control (DAC) method. Explain problems of the access control matrix and explain how role-based access control (RBAC) can alleviate these problems.
접근 제어 매트릭스 문제점:

	•	확장성 문제: 주체(사용자)와 객체(리소스)가 많아지면 행렬 크기가 매우 커져 관리·저장 비용이 커짐.
	•	관리 복잡성: 개별 사용자별 권한을 일일이 수정·검토해야 하므로 대규모 환경에서 비효율적임.
	•	일관성 유지 어려움: 동일한 역할을 가진 사용자들 간 권한 일관성 유지가 어려움.
	•	권한 과다 분산 가능성: 권한 위임이 자유로운 DAC의 특성 때문에 권한이 불필요하게 확산될 수 있음.

RBAC가 완화하는 방법:
	•	역할 중심 추상화: 사용자에게 직접 권한을 부여하지 않고 역할(role)에 권한을 부여한 뒤 사용자를 역할에 할당하여 관리 단위를 축소.
	•	관리 단순화: 역할 단위로 권한을 관리하므로 대규모 사용자 집합에서도 변경이 쉽고 일관성 유지가 쉬움.
	•	최소 권한 원칙 적용 용이: 역할 설계를 통해 필요한 권한만 묶어 제공함으로써 과다 권한을 줄임.
	•	감사·정책 적용 용이: 역할 기반으로 감사 로그·정책을 적용하기 쉬워 거버넌스 향상.

	12.	[8점] Answer the following questions.
(a) What is the SQL injection attack?
SQL 인젝션 공격은 입력값(예: 웹 폼, URL 파라미터 등)에 공격자가 조작한 SQL 코드를 삽입하여 애플리케이션이 의도치 않은 SQL 명령을 실행하게 만드는 공격입니다. 이를 통해 인증 우회, 데이터 노출·변조, 심지어 서버 사이드 명령 실행까지 가능해질 수 있습니다.

(b) Explain how to defend against the SQL injection attack.
방어 방법들(대표적):
	•	파라미터화된 쿼리(Prepared Statements) 사용: 입력값과 쿼리 구조를 분리하여 입력이 SQL 구문으로 해석되지 않게 함.
	•	ORM 또는 안전한 DB 라이브러리 사용: ORM이 자동으로 파라미터 바인딩을 제공함.
	•	입력 검증·정규화(서버 측): 허용된 형식(문자열 길이, 정규식 등)만 통과시키고 이상 값은 거부.
	•	최소 권한의 DB 계정 사용: 애플리케이션이 필요한 권한만 가진 DB 계정으로 접속해 피해 범위 축소.
	•	출력 이스케이프/인코딩: 쿼리가 아닌 콘텍스트(예: HTML)에 출력할 때 적절히 이스케이프.
	•	웹 애플리케이션 방화벽(WAF): 알려진 공격 패턴 차단을 보조.
	•	정기적 코드 리뷰 및 침투 테스트: 취약한 쿼리 패턴을 찾아 수정.

	13.	[6점] Explain about the inference attack, and explain how to defend the attack. Inference 공격에 대하여 설명하고, 방어 방법을 설명하시오.
정의:

	•	Inference 공격은 보호된(민감한) 정보를 직접적으로 제공하지 않는 통계 질의나 집계 결과들을 연속적으로 질의하거나 교차 분석하여 민감한 개인 정보나 개별 레코드를 추론해내는 공격입니다. 예: 통계 데이터셋에 대해 여러 조건으로 집계를 반복하여 특정 개인의 속성 유추.

방어 방법들:
	•	출력 제어(쿼리 제한): 동일 사용자에 대한 빈번한 질의나 특정 조합 질의를 제한.
	•	결과 노이즈 추가(무작위화): 차등 프라이버시 같은 기법으로 통계 결과에 확률적 노이즈를 추가해 개별 값 추정을 어렵게 함.
	•	최소 응답 단위(aggregation threshold): 결과에 포함되는 레코드 수가 임계값(예: 최소 5명)보다 작으면 응답을 거부하거나 일반화.
	•	쿼리 검토 및 감사: 민감한 조합의 질의를 탐지해 차단 또는 검토.
	•	데이터 마스킹/익명화: 직접 식별자를 제거하고, 필요 시 k-익명성·l-다양성 같은 익명화 기법 적용.
	•	접근 통제 강화: 민감 데이터에 대한 접근 권한을 엄격히 통제하고, 역할기반 접근으로 최소 권한만 부여.

	14.	[5점] Explain the “packing” technology that can be used to hinder malware analysis, and how a packed malware can be executed. 악성코드 분석을 방해하는 패킹 기술에 대하여 설명하고, 패킹된 악성코드가 어떻게 실행되는지 설명하시오.
패킹 기술 설명:

	•	패킹은 원래의 실행 파일(또는 악성코드 본체)을 압축·암호화하거나 난독화하여 정적 분석(바이너리 시그니처, 문자열 추출 등)을 어렵게 만드는 기술입니다. 합법적 소프트웨어도 릴리즈 크기 축소를 위해 쓰지만, 악성코드는 이를 이용해 탐지 회피와 분석 지연을 노립니다.
	•	다양한 방식: 단순 압축(UPX 등), 암호화 + 자체 복호화 루틴, 다중 레이어(재패킹), 난독화된 복호화 스텁, 가상화 기반 패킹(코드를 가상 명령어로 변환) 등.

패킹된 악성코드 실행 방식(일반 흐름):
1.	사용자(또는 시스템)가 패킹된 실행파일을 로드/실행.
2.	실행 파일의 엔트리 포인트는 패커의 스텁 코드(복호화/압축 해제 코드)로 연결됨.
3.	스텁은 내부에 포함된 암호화된/압축된 원본 악성 페이로드를 메모리로 읽어들임.
4.	메모리에서 복호화·압축 해제 수행(때로는 난독화된 루틴으로 숨김).
5.	해제된 원본 코드를 실행(직접 점프 또는 새로운 메모리 영역에 매핑 후 실행).
6.	이후 악성 행위 수행.

•	이 과정 때문에 정적 분석 도구는 원본 코드를 쉽게 식별하지 못하고, 동적 분석 환경(샌드박스)에서도 복호화 루틴을 숨기거나 환경 감지를 통해 행위를 지연시키는 기법을 병용하기도 함.

15.	[8점] 봇넷(botnet)에 대하여 다음 물음에 답하시오.
(a) Explain four components of botnet, and what are roles of each component?
봇넷의 구성요소(대표적 4가지)와 역할:

1.	C&C 서버(또는 C2 인프라): 공격자(봇마스터)가 봇(감염된 호스트)들에게 명령을 전달하고 제어를 수행하는 중앙화된 서버 또는 분산 제어 인프라(예: P2P). 명령 발송, 업데이트 배포, 데이터 수집 역할.
1.	봇(Agent, 감염된 호스트): 악성코드에 의해 제어되는 컴퓨터/장비로서 명령을 수신해 DDoS, 스팸 전송, 정보 수집 등 악성 행위를 수행.
1.	Command & Control 채널/프로토콜: C&C와 봇 간 통신을 위한 채널로 HTTP, IRC, P2P, DNS, 암호화된 채널 등 다양한 방식이 사용됨. 통신을 통해 명령·결과·상태 보고가 이루어짐.
1.	배포·감염 메커니즘(전파 수단): 봇을 확산시키는 수단으로 이메일 피싱, 취약점 익스플로잇, 악성 광고, 소셜 엔지니어링 등이 포함됨. 이로써 추가 호스트를 감염시켜 봇넷 규모를 키움.

(b) Among the rally mechanisms, what is the dynamic DNS mechanism?
	•	Dynamic DNS(Dynamic Domain Name System) 메커니즘은 봇넷에서 C&C의 위치를 유연하게 유지하기 위해 사용되는 기법 중 하나입니다. 공격자는 자주 바뀌는 IP 주소(예: 임대형 서버, DDoS 회피, 빠른 전환)를 가진 C&C 서버를 운영할 때 도메인 이름을 사용하고, 해당 도메인에 대해 동적으로 DNS 레코드를 갱신합니다.
	•	봇은 고정 IP 대신 도메인 이름을 조회해 현재 연결 가능한 C&C IP를 얻으므로, C&C의 실제 IP가 바뀌어도 도메인만 업데이트하면 봇과의 연결을 유지할 수 있습니다.
	•	이 방식은 C&C 은닉성 향상 및 추적·차단 회피에 유리하며, 방어측에서는 도메인 자체를 차단하거나 DNS 요청 패턴 분석으로 탐지·차단하는 대응을 시도합니다.