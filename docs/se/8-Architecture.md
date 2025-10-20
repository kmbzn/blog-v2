## 8. Architecture

## Learning Goals
- architectural reasoning(아키텍처 추론)의 abstraction level(추상화 수준) 이해
- quality attributes(품질 속성)를 염두에 두고 software architecture(소프트웨어 아키텍처)에 접근
- software architecture와(object-oriented) software design(객체 지향 소프트웨어 설계) 구별
- 목적에 적합한 아키텍처를 기술하기 위해 notation(표기법)과 views(뷰) 사용
- 모호함 없이 명확하게 아키텍처 문서화

## Where We Are

## Quality Requirements, Now What?
- "highly available(고가용성)이어야 함".
- "신속하게 응답해야 함, accuracy(정확성)은 덜 관련됨".
- "extensible(확장 가능)해야 함".
- "hardware resources(하드웨어 자원)를 효율적으로 사용해야 함".

## Software Architecture

## Software Architecture
- 프로그램 또는 컴퓨팅 시스템의 software architecture는 시스템의 구조 또는 구조들로서, software elements(소프트웨어 요소), 해당 요소들의 externally visible properties(외부에 보이는 속성), 그리고 그들 간의 relationships(관계)를 포함함.
- [Bass et al., Software Architecture in Practice 2nd ed., 2003]

## Software Architecture Example
- 좋음?

## Why Architecture? [Bass et al., 2003]
- 가장 이른 design decisions(설계 결정) 표현.
- Aids in communication with stakeholders(이해관계자와의 의사소통)
    - 그들이 이해할 수 있는 수준에서 "how(방법)"를 보여주어, 그것이 그들의 요구를 충족하는지에 대한 질문 제기
- Defines constraints on implementation(구현에 대한 제약)
    - 설계 결정이 애플리케이션의 "load-bearing walls(내력벽)" 형성
- Dictates organizational structure(조직 구조)
    - 팀이 서로 다른 components(구성요소) 작업
- Inhibits or enables quality attributes
    - design patterns(설계 패턴)과 유사
- Supports predicting cost, quality, and schedule(비용, 품질, 일정 예측 지원)
    - 일반적으로 각 구성요소의 정보를 예측함으로써
- Aids in software evolution(소프트웨어 진화 지원)
    - 변경의 비용, 설계, 영향에 대해 추론
- Aids in prototyping(프로토타이핑 지원)
    - architectural skeleton(아키텍처 스켈레톤)을 조기에 구현 가능

## Beyond Functional Correctness
- 품질이 중요함. 예:
    - Performance(성능)
    - Availability(가용성)
    - Modifiability(수정 용이성), portability(이식성)
    - Scalability(확장성)
    - Security(보안)
    - Testability(테스트 용이성)
    - Usability(사용성)
    - 구축 비용, 운영 비용

## Case Study: Architecture and Quality at Twitter(Now X…)

## Twitter Suffered From Over Capacity

## …due to the Big Event

## Inspecting the State of Engineering
- 세계 최대 규모의 Ruby on Rails 설치 중 하나 운영
    - 200명의 엔지니어
- Monolithic(모놀리식): 원시 데이터베이스, memcache 관리, 사이트 렌더링, 공용 API 제공을 하나의 코드베이스에서 수행
- 시스템 이해가 점점 어려워짐; 엔지니어링 팀 관리 및 병렬화가 조직적으로 어려움
- 스토리지 시스템(MySQL)의 throughput(처리량) 한계 도달; 데이터베이스 전반의 읽기 및 쓰기 hot spots(핫스팟)
- 문제 해결을 위해 기계 투입; 기계당 낮은 처리량(CPU + RAM 한계, 네트워크는 포화되지 않음)
- 최적화의 딜레마: 코드 가독성 vs 성능 트레이드오프
- [https://blog.x.com/engineering/en_us/a/2013/new-tweets-per-second-record-and-how](https://blog.x.com/engineering/en_us/a/2013/new-tweets-per-second-record-and-how)

## Twitter's Quality Requirements / Redesign goals??
- Improve median latency(중앙값 지연 시간 개선); lower outliers(이상치 감소)
- Reduce number of machines 10x(기계 수 10배 감소)
- Isolate failures(장애 격리)
- "우리는 '관련된' 로직이 한곳에 있는 더 깨끗한 경계를 원했음"
    -(클래스, 모듈, 패키지 수준이 아닌) 시스템 수준에서의 encapsulation(캡슐화) 및 modularity(모듈성)
- Quicker release of new features(신규 기능의 더 빠른 출시)
    - "다른 팀과 독립적으로 로컬 결정을 내리고 사용자 대상 변경 사항을 배포할 수 있는, 작고 권한이 부여된 엔지니어링 팀 운영"

## Caching

## JVM vs RubyVM
- Rails 서버는 호스트당 200-300 requests / sec 가능
- JVM에서의 Scala 경험; 신뢰 수준
- JVM으로 재작성하여 호스트당 10-20k requests / sec 허용

## Programming Model
- Ruby model: Concurrency(동시성) at process level(프로세스 수준); 요청이 큐에 쌓여 하나의 프로세스가 처리
- Twitter 응답은 여러 서비스에서 집계됨 – 응답 시간 합산
- "시스템을 서비스로 분해하기 시작하면서 각 팀은 약간씩 다른 접근 방식을 취했음. 예를 들어, 클라이언트에서 서비스로의 장애 의미론이 잘 상호작용하지 않았음: 서버가 클라이언트에 다시 신호를 보낼 일관된 back-pressure(역압력) 메커니즘이 없었고, 지연 시간이 긴 서비스를 공격적으로 재시도하는 클라이언트로 인한 'thundering herds(몰려드는 무리)' 현상 경험."
- 목표: 동시성에 대해 생각하는 단일하고 통일된 방식
    - RPC(Finagle), connection pooling(커넥션 풀링), failover strategies(장애 극복 전략), load balancing(로드 밸런싱)을 위한 라이브러리로 구현

## Independent Systems
- "모놀리식 환경에서는 전체 코드베이스를 이해하는 전문가 또는 모듈/클래스 수준의 명확한 소유자가 필요했음. 안타깝게도 코드베이스가 너무 커져서 글로벌 전문가를 두기 어려웠고, 실제로는 모듈/클래스 수준의 명확한 소유자 방식이 작동하지 않았음. 코드베이스 유지가 점점 더 어려워졌고, 팀들은 특정 기능을 이해하기 위해 '고고학 발굴'을 하거나, 발생하는 대규모 장애를 이해하기 위해 '고래 사냥 원정대'를 조직하는 데 끊임없이 시간을 보냈음."
- 모놀리식 시스템에서 다중 서비스로
    - RPC interfaces(RPC 인터페이스) 합의, 시스템 내부 독립적 개발
    - Self-contained teams(자체 완결형 팀)

## Storage
- Single-master MySQL database bottleneck(단일 마스터 MySQL 데이터베이스 병목 현상)
- Temporal clustering(시간적 클러스터링)
    - 단기 해결책
    - 편중된 로드 밸런스
    - 3주마다 기계 1대 + replications(복제)
- "대략 정렬 가능한" ID를 가진 distributed database(분산 데이터베이스)(Gizzard on MySQL)로 이동

## Data-Driven Decisions
- 작고 독립적인 서비스 다수, 개수 증가
- RPC framework(RPC 프레임워크) 위에 자체 dynamic analysis tool(동적 분석 도구) 구축
- 많은 수의 기계를 구성하기 위한 프레임워크
    - 사용자 일부에게만 기능을 노출하는 기능 포함

## Success Story: 天空の城ラピュタ(Castle in the sky)

## Data-Driven Decisions
- 일본에서 8월 3일 토요일, 사람들이 <천공의 성 라퓨타> 방영을 시청하며 트위터에 몰려들어, 초당 143,199 트윗이라는 정점을 기록함.
- New Tweets per second(TPS) record(초당 신규 트윗 수 기록): 143,199 TPS.
- Typical day(평상시): 5억 개 이상의 트윗 전송; 평균 5,700 TPS

## Key Insights: Twitter Case Study
- Architectural decisions(아키텍처 결정)은 개별 모듈뿐만 아니라 전체 시스템에 영향
- Abstract(추상적), 다양한 시나리오에 대한 다양한 추상화
- quality attributes에 대해 조기에 추론
- 아키텍처 결정을 explicit(명시적)하게 만듦
- 질문: 원래 아키텍트가 잘못된 결정을 내렸는가?

## Architecture is Evolving

## Architecture vs(Object-level) Design

## Levels of Abstraction
- Requirements(요구사항)
    - high-level “what”(상위 수준 "무엇을")
- Architecture(High-level design)(아키텍처(상위 수준 설계))
    - high-level “how”, mid-level “what”
- OO-Design(Low-level design, e.g., design patterns)(OO 설계(하위 수준 설계, 예: 설계 패턴))
    - mid-level “how”, low-level “what”
- Code(코드)
    - low-level “how”

## Architecture vs Design
## Architectural Questions
- Eclipse를 plugin(플러그인)으로 어떻게 확장하는가?
- 어떤 threads(스레드)가 존재하며 어떻게 coordinate(조정)되는가?
- Google은 하루 수십억 건의 히트를 어떻게 scale(확장)하는가?
- firewalls(방화벽)을 어디에 두어야 하는가?
- subsystems(하위 시스템) 간의 interface(인터페이스)는 무엇인가?
## Design Questions
- Eclipse에 메뉴 항목을 어떻게 추가하는가?
- Eclipse에 메뉴 항목을 쉽게 추가하려면 어떻게 해야 하는가?
- 어떤 lock(잠금)이 이 데이터를 보호하는가?
- Google은 페이지 순위를 어떻게 매기는가?
- 보안 통신을 위해 어떤 encoder(인코더)를 사용해야 하는가?
- objects(객체) 간의 인터페이스는 무엇인가?
Objects

## Architecture Disentangled
- Architecture as structures and relations(구조와 관계로서의 아키텍처)(the actual system - 실제 시스템)
- Architecture as documentation(문서화로서의 아키텍처)(representations of the system - 시스템의 표현)
- Architecture as(design) process((설계) 프로세스로서의 아키텍처)(activities around the other two - 다른 두 가지를 둘러싼 활동)

## Why Document Architecture?
- 시스템을 위한 Blueprint(청사진)
    - 조기 분석을 위한 산출물
    - quality attributes의 주요 전달자
    - 배포 후 유지보수 및 향상의 핵심
- 문서화는 현재와 20년 후의 아키텍트를 대변함
    - 시스템이 문서화된 아키텍처에 따라 구축, 유지보수, 진화하는 동안
- Support traceability(추적성 지원).

## Different Views

## Common Views in Documenting Software Architecture
- Static View(정적 뷰)
    - Modules(모듈)(subsystems, structures) 및 그들의 relations(관계)(dependencies(의존성), …)
- Dynamic View(동적 뷰)
    - Components(processes(프로세스), runnable entities) 및 connectors(커넥터)(messages(메시지), data flow(데이터 흐름), …)
- Physical View(Deployment)(물리적 뷰(배포))
    - Hardware structures(하드웨어 구조) 및 그들의 connections(연결)

## Views and Purposes
- 모든 뷰는 목적과 일치해야 함.
- 서로 다른 뷰는 서로 다른 추론 측면(다른 품질 목표)에 적합함. 예:
    - Performance
    - Extensibility
    - Security
    - Scalability
    - …

## Online Shopping Architecture

## Selecting a Notation
- 목적에 적합
- 간결한 표현을 위해 종종 시각적
- 일반적으로 상자와 화살표
- UML 가능(semi-formal(준정형)), 하지만 제약이 있을 수 있음
    - 다른 추상화 수준에 유의 – 클래스나 객체가 아닌 하위 시스템 또는 프로세스
- Formal notations(정형 표기법) 사용 가능
- 다이어그램을 계층적으로 그리고 뷰 단위로 분해

## What is Wrong Today?
- 현업의 실제 문서화는 다음으로 구성됨
    - Ambiguous(모호한) 상자-선 다이어그램
    - 일관성 없는 표기법 사용
    - 혼란스러운 뷰 유형의 조합
- 많은 것들이 명시되지 않은 채 남아 있음:
    - 어떤 종류의 요소인가?
    - 어떤 종류의 관계인가?
    - 상자와 화살표는 무엇을 의미하는가?
    - 레이아웃의 중요성은 무엇인가?

## What Could the Arrow Mean?
- 많은 가능성
    - A가 B에게 제어권 전달
    - A가 B에게 데이터 전달
    - A가 B로부터 값 획득
    - A가 B에게 데이터 스트리밍
    - A가 B에게 메시지 전송
    - A가 B 생성
    - A가 B보다 먼저 발생
    - B가 A로부터 전기 공급받음

## Guidelines: Avoiding Ambiguity
- 항상 legend(범례) 포함
- 상자가 의미하는 바를 정확하게 정의
- 선이 의미하는 바를 정확하게 정의
- 의도치 않게 뷰 유형 혼합 금지
    - 상기: Module(classes), C&C(components)
- 그래픽을 설명으로 보충
    - 매우 중요: rationale(이론적 근거)(architectural intent - 아키텍처 의도)
- 하나의 다이어그램에 너무 많은 것을 하려고 시도 금지
    - 아키텍처의 각 뷰는 한 페이지에 맞아야 함
    - 계층 구조 사용

## Common Software Architectures

## Pipes and Filters
- [https://medium.com/@e0324913/pipe-and-filter-software-architecture-cdf47a14d789](https://medium.com/@e0324913/pipe-and-filter-software-architecture-cdf47a14d789)

## Pipes and Filters Example: Compilers

## Object-Oriented Organization
- David Garlan and Mary Shaw, CMU/SEI-94-TR-021

## Event-Driven Architecture

## Event-Driven Architecture Example: HTML DOM + JavaScript

## Blackboard Architecture

## Layered Architecture

## Layered Architecture Example: Internet Protocol Suite