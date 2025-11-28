# 2. Introduction to Software Engineering

## Software is a Skin that Surrounds Our Civilization
- *Dr. Mark Harman*의 인용구

## Spectacular Software Failures(~2000)
- Intel의 Pentium FDIV 결함: 홍보(Public relations) 악몽
- THERAC-25 방사선 기계: safety-critical software(안전 필수 소프트웨어)의 부실한 테스트가 생명을 앗아갈 수 있음: 환자 3명 사망
- Mars Polar Lander 추락 지점?
- THERAC-25 design(설계)
- Ariane 5: exception-handling(예외 처리) 버그: 첫 비행(maiden flight)에서 강제 자폭(64-bit에서 16-bit로 변환: 약 3억 7천만 달러 손실)
- NASA의 Mars lander: 1999년 9월, unit integration fault(단위 통합 오류)로 추락
- Ariane 5 폭발: 수백만 달러 손실

## Spectacular Software Failures(2000~)
- Healthcare 웹사이트: 출시와 동시에 반복적으로 다운—load tested(부하 테스트) 전무
- Boeing A220: 소프트웨어 업데이트가 과도한 진동을 허용한 후 엔진 고장
- Toyota 브레이크: 수십 명 사망, 수천 건의 충돌
- Northeast blackout(북동부 대정전): 5천만 명 피해, 60억 달러(USD) 손실 ... 경보 시스템 장애
- Boeing 737 Max: 과도하게 공격적인 software flight overrides(소프트웨어 비행 개입)(MCAS)로 인해 추락

## 2024 CrowdStrike Incident
- 2024년 7월 19일, CrowdStrike의 Falcon 보안 소프트웨어에 대한 결함 있는 드라이버 업데이트로 인해 850만 대의 Windows 시스템 충돌 발생.
- 추정 재정 피해: 100억 달러
- [https://x.com/akothari/status/1814202068531552666](https://x.com/akothari/status/1814202068531552666)
- [https://upload.wikimedia.org/wikipedia/commons/9/94/CrowdStrike_BSOD_at_LGA.jpg](https://upload.wikimedia.org/wikipedia/commons/9/94/CrowdStrike_BSOD_at_LGA.jpg)

## Vasa
- 1626년에서 1628년 사이에 건조된 스웨덴 군함
- 1628년 8월 10일, 처녀 항해에서 약 1,300m 항해 후 침몰

## Vasa Syndrome
- Requirement(요구사항)
- Teams(팀)
- Metrics(지표)
- QA(품질 보증)

## Complex Software Engineering Issues Involved
- Requirements
    - 변화하는 조선 명령
    - 수정된 용골(keel)에 대한 명세(specifications) 부재
    - 변경되는 군비 요구사항
    - 조선 장인의 죽음
- (Architecture(아키텍처) & Design(설계))
    - 안정성(stability), 강성(stiffness), 항해 특성을 계산할 방법 부재
- QA
    - 사전 진수 안정성 테스트 실패
- DevOps(데브옵스)
- Metrics

## Licenses
- kernel-level privilege(커널 수준 권한)로 실행되는 Software(소프트웨어)는 시스템을 충돌(BSOD)시키고 부팅을 막을 수 있음.
- 소프트웨어 업데이트보다 더 지속적인 콘텐츠 업데이트
- 콘텐츠 *와* 파서(parser)의 불충분한 테스트
- staged roll-outs(단계적 배포) 부재.
- 영향 발생 후 원격으로 문제 해결 방법 부재.
- 왜곡된 인센티브(incentives)
- 제한된 책임(Limited liability)

## Forces Behind the Emergence of S/W Engineering
- 소프트웨어의 낮은 품질.
- 소프트웨어 개발에 드는 시간, 노력, 비용 예측 불가능성.
- 하드웨어 대 S/W 비용 비율의 변화
- maintenance(유지보수)의 역할 증대
- 하드웨어의 발전
- 소프트웨어 기술의 발전
- 소프트웨어에 대한 수요 증가
- 더 크고 복잡한 S/W 시스템에 대한 요구

## Software Crisis
- A: 2%(납품되어 작동)
- B: 3%(일부 수정 후 작동)
- C: 45%(납품되었으나 성공적으로 사용된 적 없음)
- D: 20%(사용되었으나 광범위하게 재작업되었거나 폐기됨)
- E: 30%(비용은 지불했으나 납품되지 않음)

## Why Software Development is so Difficult?
- Characteristics(특징)
    - Complex(복잡함)
    - Flexible(유연함)
    - 완전히 자동화될 수 없음; 인간 개입
    - 비교적 짧은 역사
- Difficulties(어려움)
    - correctness(정확성) 보장 난해
    - 과학적 원칙(disciplines)이 현장에 거의 적용되지 않음
    - 이해하기 어려움

## Why Software Project Fail?
- S/W 마인드 부족
- 불충분한 software project management(소프트웨어 프로젝트 관리)
- 적절한 SE(소프트웨어 공학) 기술 부족
- What is Software Engineering(소프트웨어 공학)?
- 엔지니어링(engineering)이란 무엇인가? 그리고 해킹(hacking)/프로그래밍(programming)과 어떻게 다른가?
- Software Engineering?

## Computer Program
- Computer program(컴퓨터 프로그램)이란 무엇인가?
- Algorithm(알고리즘)의 표현?

## Software
- 소프트웨어란 무엇인가?
- 단일 목표(문제 해결)를 위해 작동하는 프로그램의 집합?

## What is Software?
> “소프트웨어는 입력을 획득하고 이를 조작하여 소프트웨어 사용자가 결정한 기능과 성능 측면에서 원하는 출력을 생성하기 위한 명령어 집합. 또한 사용자가 소프트웨어 시스템을 이해할 수 있도록 하는 소프트웨어 매뉴얼과 같은 문서 집합도 포함.”  
> *Bharat Bhushan Agarwal and Sumit Prakash Tayal, Software Engineering, Laxmi Publications, 2009*

## Description of the Software
- 소프트웨어는 그 capabilities(능력)에 의해 기술됨. 이 능력은 실행하는 functions(기능), 제공하는 features(특징), 제공하는 facilities(편의 기능)와 관련됨.
- 판매 주문 처리를 위해 작성된 소프트웨어는 다양한 시장 부문의 다양한 유형의 판매 주문을 처리하기 위한 다양한 기능을 가짐. 예를 들어, 특징은 다중 통화 컴퓨팅 처리, 제품, 판매 및 세금 상태 업데이트. 편의 기능은 판매 주문 인쇄, 고객에게 이메일 발송, 상품 발송을 위한 상점 부서로의 보고서 등이 될 수 있음.
- *Bharat Bhushan Agarwal and Sumit Prakash Tayal, Software Engineering, Laxmi Publications, 2009*

## Examples of Programs or Software?
- 세 숫자의 평균 계산
- 세 숫자 중 최솟값 찾기
- 가방 안의 빨간 공 개수 세기

## Examples of Software or Programs?
- Operating System(운영체제)?
- Microsoft Office?
- 한양 포털?

## Software Engineering
- “소프트웨어의 analysis(분석), design, implementation(구현) 및 maintenance에 대한 systematic approach(체계적인 접근 방식).”
- (The Free On-Line Dictionary of Computing)
- “컴퓨터 기반 애플리케이션 개발에 tools(도구)와 techniques(기법)를 체계적으로 적용하는 것.”
- (Sue Conger in The New Software Engineering)
- “소프트웨어 공학은 high-quality software(고품질 소프트웨어)를 설계하고 개발하는 것에 관한 것.”
- (Shari Lawrence Pfleeger in Software Engineering --The Production of Quality Software)

## 1968 NATO Conference on Software Engineering
- 도발적인 제목
    - 소프트웨어 공학은 널리 사용되는 용어가 아니었음
- 행동 촉구(Call for Action)
- “Software crisis(소프트웨어 위기)”
- [http://homepages.cs.ncl.ac.uk/brian.randell/NATO/nato1968.PDF](http://homepages.cs.ncl.ac.uk/brian.randell/NATO/nato1968.PDF)

## What is Software Engineering?
- 수백 명의 저자가 소프트웨어 공학에 대한 개인적인 정의를 내렸지만, Fritz Bauer [제1회 NATO 소프트웨어 공학 컨퍼런스]가 제안한 정의가 기반을 제공:
- “[소프트웨어 공학은] reliable(신뢰할 수 있고) real machines(실제 기계)에서 efficiently(효율적으로) 작동하는 소프트웨어를 economically(경제적으로) 얻기 위해 sound engineering principles(건전한 공학 원칙)을 수립하고 사용하는 것.”
- IEEE `IEEE93`는 더 포괄적인 정의를 개발
- “소프트웨어 공학:(1) 소프트웨어의 development(개발), operation(운영), maintenance에 systematic(체계적), disciplined(훈련된), quantifiable(정량화 가능한) 접근 방식을 적용하는 것; 즉, 공학을 소프트웨어에 적용하는 것.(2)(1)에서의 접근 방식에 대한 study(연구).”

## Software Engineering
- (1)에서의 접근 방식에 대한 연구
- 소프트웨어의 개발, 운영, 유지보수에 체계적, 훈련된, 정량화 가능한 접근 방식을 적용하는 것; 즉, 공학을 소프트웨어에 적용하는 것.
- `IEEE93`

## By “Systematic” we mean
- 잘 정의된 활동 순서를 따르는 것,
    - 원하는 출력(deliverables(산출물))이 잘 정의됨
    - 잘 정의된 입력(즉, 문서화된 구문(syntax), 의미(semantics), 컨텍스트(context) 및 입력의 기타 관련 속성)을 사용
    - 잘 정의된 process(프로세스)(예: 프로세스 간 통신, 데이터 형식, 오류 처리 등에 대한 조직 표준 사용)
    - 그 출력이 다음 프로세스(들)에서 유사하게 입력으로 사용됨
    - 최종 출력이 달성될 때까지
    - 출력의 정확성이 verifiable(검증 가능)함.
- 참고: “입력”과 “출력”은 대부분 요구사항, 소프트웨어 명세, 소프트웨어 자체, 문서, 테스트 입/출력 및 유사한 software artifacts(소프트웨어 산출물)를 지칭.

## By “disciplined” we mean:
- 각 프로세스가 조직적 원칙(principles)을 사용하여 수행됨
    - (예: 누가 누구를 관리하는지, 누가 무엇을 책임지는지?),
- 중간 결과는 물론 최종 결과도 신중하게 문서화됨,
- 조치는 그 원인, 관련된 개인, 발생 시간 및 상황에 대해 traceable(추적 가능)함.

## By “quantifiable” we mean:
- 요구되는 노력의 규모와 범위(출력 코드, 데이터, 문서의 크기, 인력, 기간, 개발 예산, 예상 오류율 및 사용자 지원)가 정당하고 수용 가능한 범위 내에서 예측 가능함

## Topics in Software Engineering
- 소프트웨어 개발을 위한 프로세스 고려사항
- Requirements elicitation(요구사항 도출), 문서화 및 평가
- quality attributes(품질 속성)를 위한 설계
- quality assurance(품질 보증) 전략
- 소프트웨어 공학의 Empirical methods(경험적 방법론)
- 시간 및 team management(팀 관리)
- 소프트웨어 개발의 경제학(Economics)

## Process Consideration for Software Development
- 초기에 문제를 어떻게 피하는가?
- 언제, 얼마나 많이 설계하는가?
- 언제, 얼마나 많이 테스트하는가?
- 언제, 어떻게 고객을 참여시키는가?
    - Agile methods(애자일 방법론)

## Requirements Elicitation, Documentation, and Evaluation
- 고객이 정말로 원하는 것을 어떻게 파악하는가?
- 또 다른 이해관계자(interest)는 누구인가?
- 성공을 객관적으로 어떻게 측정할 수 있는가?
- 기대치(expectations)를 어떻게 신뢰성 있게 문서화할 수 있는가?

## Design for Quality Attributes
- 수백만 사용자로 scale(확장)할 수 있는 시스템을 어떻게 설계하는가?
- 시스템에 security(보안)를 어떻게 설계해 넣는가?

## Strategies for Quality Assurance
- 주어진 시스템에 가장 적합한 품질 보증 전략은 무엇인가?
- 무엇을 automate(자동화)할 수 있고 언제 humans in the loop(인간 참여)를 유지해야 하는가?
- 얼마나 많은 테스트와 어떤 종류의 테스트를 수행해야 하는가?
- functional correctness(기능적 정확성) 외에 보증해야 할 중요한 품질은 무엇인가?
- usability(사용성), scalability(확장성), reliability(신뢰성), performance(성능)를 평가할 수 있는가?
- 특정 보안 문제의 부재를 statically(정적으로) 보장할 수 있는가?

## Empirical Methods in Software Engineering
- 성능, 보안, 신뢰성과 같은 품질 속성을 어떻게 측정할 수 있는...
- 사용자가 시스템과 상호작용하는 방식을 어떻게 측정할 수 있는...
- 그 차이가 중요한지 어떻게 알 수 있는가?

## Time and Team Management
- 프로젝트 기간과 비용을 어떻게 추정하는가?
- 문제를 조기에 인식하기 위해 진행 상황과 위험(risks)을 어떻게 모니터링하는가?
- 팀 내 개발자들을 어떻게 조정(coordinate)하는가?
- 팀을 어떻게 구성하고 발전시키는가?
- 팀원을 어떻게 선발하고 동기를 부여하는가?
- social loafing(사회적 태만)과 같은 팀 역학(team dynamics)을 어떻게 다루는가?

## Economics of Software Development
- Business models(비즈니스 모델)
- Outsourcing(아웃소싱)
- Open source(오픈 소스)

## Computer Science and Software Engineering
- Computer Science(컴퓨터 과학)와 소프트웨어 공학 간의 관계