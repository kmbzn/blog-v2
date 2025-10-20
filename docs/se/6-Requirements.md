# 6. Requirements

## Learning Goals
- Software engineering(소프트웨어 공학)에서 requirements(요구사항)의 중요성과 어려움 설명
- 요구사항이 어떻게 그리고 왜 원하는 시스템과 그 환경 간의 관계를 명확히 하는지 설명. Assumptions(가정) 식별.
- Functional requirements(기능적 요구사항)와 quality requirements(품질 요구사항) 간의 구별 및 예시 제공; 비공식적 기술과 verifiable requirements(검증 가능한 요구사항) 간의 구별 및 예시 제공.
- 품질 요구사항을 측정 가능한 방식으로 기술

## Overly Simplified Definition

요구사항은 시스템이 무엇을 할 것인지(What)를 말함 (어떻게(How) 할 것인지가 아님).

## Fred Brooks, on Requirements
- 소프트웨어 시스템 구축에서 가장 어려운 단일 부분은 정확히 무엇을 만들지 결정하는 것임.
- 상세한 기술적 요구사항을 수립하는 것만큼 어려운 개념 작업은 없음...
- 잘못 수행되었을 때 결과 시스템을 그토록 심각하게 손상시키는 다른 부분은 없음.
- 나중에 바로잡기 더 어려운 부분은 없음.

## A Problem That Stands the Test of Time…
- 350개 기업의 8000개 프로젝트에 대한 1994년 설문조사 결과: 31%의 프로젝트가 완료 전 취소; 16%의 프로젝트가 예산 내 정시 납품
    - 이후 Standish group(스탠디시 그룹)에 의해 유사한 결과 보고됨.
- 원인

1.  Incomplete requirements(불완전한 요구사항)(13.1%)
2.  Lack of user involvement(사용자 참여 부족)(12.4%)
3.  Lack of resources(자원 부족)(10.6%)
4.  Unrealistic expectations(비현실적인 기대)(9.9%)
5.  Lack of executive support(경영진 지원 부족)(9.3%)
6.  Changing requirements and specifications(요구사항 및 명세 변경)(8.7%)
7.  Lack of planning(계획 부족)(8.1%)
8.  System no longer needed(시스템이 더 이상 필요하지 않음)(7.5%) .

## Why Is This Hard?

## Communication Problem
- 목표: 무엇을 만들어야 하는지 파악.
- 올바른 것이 만들어지도록 그 아이디어들을 표현.

## Overall Problems
- 관련된 하위 문제?
- 필수 기능?
- 있으면 좋은 기능?
- 기대되는 품질?
- 어떤 품질과 가격으로 얼마나 빨리 제공?

## Examples of Requirements

[suspicious link removed]

## User Stories(사용자 스토리)

## The Card
- “[역할]로서, [가치]를 위해 [기능]을 원한다”
- 3x5 카드에 맞아야 함

## How to Evaluate User Story?
[http://dev.one80services.com/user-stories/writing-good-user-stories-hint-its-not-about-writing/](http://dev.one80services.com/user-stories/writing-good-user-stories-hint-its-not-about-writing/)

## Independent(독립적)
- 순서에 관계없이 일정 계획 가능.
- 개념적으로 중복되지 않음
- 항상 가능한 것은 아님

## Negotiable(협상 가능)
- 세부 사항은 개발 중에 협상됨
- 좋은 스토리는 세부 사항이 아닌 본질을 포착

## Valuable(가치 있는)
- 이 스토리는 누군가(가급적 고객)에게 가치가 있어야 함
- 특히 이슈를 분할할 때 관련됨

## Estimable(추정 가능한)
- 크기를 작게 유지하는 데 도움
- 우리가 올바르게 협상했는지 확인
- “계획은 아무것도 아니며, 계획하는 것이 전부다” - 드와이트 D. 아이젠하워

## Small(작은)
- 3x5 카드에 맞음
- 최대 2 person-weeks(인-주)의 작업량
- 너무 큼 == 추정 불가능

## Testable(테스트 가능한)
- 작업에 대한 이해 보장
- 언제 작업을 “완료”로 표시할 수 있는지 앎
- 테스트 불가능 == 이해하지 못함

## Requirements in Software Projects

## Less Simplified Definition: Online Shopping
- Stories: Scenarios(시나리오), Use Cases(유스 케이스), User Stories
    - “고객이 구매 정보를 제출하고 결제가 접수된 후, 주문이 처리되어 고객의 배송 주소로 배송됩니다.”
- Optative statements(희망적 기술)
    - 시스템은 고객에게 배송 상태를 알려야 함(shall)
- Domain Properties(도메인 속성) 및 Assumptions
    - 모든 제품에는 고유한 제품 코드가 있음
    - 결제는 승인 후 접수될 것임

## What is Requirements Engineering?
- Knowledge acquisition(지식 획득) – 시스템에 대한 관련 세부 정보를 어떻게 포착하는가?
    - 그 지식은 완전하고 일관성이 있는가?
- Knowledge representation(지식 표현) – 일단 포착되면, 어떻게 가장 효과적으로 표현하는가?
    - 누구를 위해 표현하는가?
    - 다른 사람들에게 일관되게 전달되는가?
- 때때로 requirements definition(요구사항 정의)과 requirements specification(요구사항 명세)을 구별하는 것을 볼 수 있음.

## Functional Requirements
- 기계가 해야 할 일
    - Input(입력)
    - Output(출력)
    - Interface(인터페이스)
    - Response to events(이벤트에 대한 응답)
- 기준:
    - Completeness(완전성): 모든 요구사항이 문서화됨
    - Consistency(일관성): 요구사항 간 충돌 없음
    - Precision(정확성): 요구사항에 모호함 없음

## Quality/Non-functional Requirements
- 시스템의 기능이 아니라, 그 기능을 전달하는 품질을 명시.
- Functional requirements보다 더 중요할 수 있음
    - 누락된 기능은 우회하여 작업 가능
    - 품질이 낮은 시스템은 사용 불가능할 수 있음

## Environment and the Machine

Pamela Zave & Michael Jackson, “Four Dark Corners of Requirements Engineering,”
ACM Transactions on Software Engineering and Methodology, 6(1): 1-30, 1997.

## Example: Automobile

## Airbus Braking System
- Airbus A320-200 비행기에는 소프트웨어 기반 제동 시스템이 있음:
    - Ground spoilers(지상 스포일러)(양력을 줄이기 위해 펼쳐지는 날개판)
    - Reverse thrusters(역추진 장치)
    - 주 착륙 장치의 휠 브레이크
- 제동 시스템을 작동시키려면 비행기 바퀴가 지면에 닿아야 함.

## Lufthansa Flight 2904

## Lufthansa Flight 2904

두 가지 “지상 착지” 조건이 있음:

1.  어느 쪽이든 충격 흡수 장치가 6300 kg의 하중을 견딤
2.  양쪽 바퀴가 72 knots(133.3 km/h) 이상으로 회전
- Ground spoilers는 조건 1 또는 2에 활성화
- Reverse thrust는 양쪽 주 착륙 장치에서 조건 1에 활성화
- 휠 브레이크 활성화는 회전 게인과 조건 2에 따라 다름

## Why Didn’t It Stop?
- 제동 시스템이 활성화되지 않음
    - 첫 번째 지점은 비행기가(측풍에 대응하기 위해) 기울어져 착륙했기 때문에 충족되지 않음.
- 따라서 양쪽 착륙 장치에 필요한 압력에 도달하지 못함.
    - 두 번째 지점은 젖은 활주로에서의 hydroplaning(수막 현상) 효과로 인해 충족되지 않음.
- 조종사가 소프트웨어 결정을 수동으로 무시할 방법이 없음

## Implementation Bias(구현 편향)

요구사항은 시스템이 무엇을 할 것인지(What)를 말함(어떻게(How) 할 것인지가 아님).

## Why not “How”?

## Avoiding Implementation Bias
- 요구사항은 환경-기계 인터페이스에서 관찰 가능한 것을 기술.
- Indicative mood(직설법)는 환경을(있는 그대로, as-is) 기술
- Optative mood는 기계가 포함된 환경을(될 모습, to-be) 기술.

## This Can Be Subtle
- “사전은 해시 테이블에 저장되어야 한다(shall)” vs. “소프트웨어는 5초 이내에 요청에 응답해야 한다(shall).”
- “what” vs. “how” 대신, “이 요구사항이 기계 도메인만의 속성인가?”라고 질문.

## Quality Requirements

## Functional Requirements
- 기계가 해야 할 일
    - Input
    - Output
    - Interface
    - Response to events
- 기준:
    - Completeness: 모든 요구사항이 문서화됨
    - Consistency: 요구사항 간 충돌 없음
    - Precision: 요구사항에 모호함 없음

## Quality/Non-functional Requirements
- 시스템의 기능이 아니라, 그 기능을 전달하는 품질을 명시.
- Functional requirements보다 더 중요할 수 있음
    - 누락된 기능은 우회하여 작업 가능
    - 품질이 낮은 시스템은 사용 불가능할 수 있음

## Here is the thing
- 누가 느리고, 비효율적이며, 유지보수하기 어려운 시스템을 요구하겠는가?
- 품질 요구사항을 생각하는 더 좋은 방법은 대안적인 구현 중에서 선택하는 데 도움이 되는 design criteria(설계 기준)로 보는 것.
- 질문: 제품이 허용 가능한 수준이 되려면 이러한 요구사항을 어느 정도까지 만족해야 하는가?

## Quality Requirements Examples
- 웹에서 비디오 판매?

## Expressing Quality Requirements
- 요구사항은 계약의 역할을 함: 테스트 가능/반증 가능해야 함.
- Informal goal(비공식적 목표): 사용 편의성과 같은 일반적인 의도.
    - 시스템 사용자의 의도를 전달하므로 개발자에게 여전히 유용할 수 있음.
- Verifiable non-functional requirement: 객관적으로 테스트할 수 있는 일부 측정 기준을 사용한 기술.

## Examples
- Confidentiality(기밀성) 요구사항: 직원이 아닌 이용자는 다른 사람이 어떤 책을 빌렸는지 절대 알 수 없음.
- Privacy(사생활) 요구사항: 참가자의 일기는 본인의 동의 없이 다른 초대 참가자에게 절대 공개될 수 없음.
- Integrity(무결성) 요구사항: 도서 반납은 도서관 직원에 의해서만 정확하게 인코딩되어야 함.
- Availability(가용성) 요구사항:
    - 불량 이용자 블랙리스트는 도서관 직원이 언제든지 사용할 수 있어야 함.
    - 열차 위치 정보는 언제든지 중앙역 컴퓨터에서 사용할 수 있어야 함.
- Reliability(신뢰성) 요구사항: 열차 가속 제어 소프트웨어는 100시간 단위의 mean time between failures(평균 고장 간격)를 가져야 함.
- Accuracy(정확성) 요구사항:
    - 도서 대출 소프트웨어는 책이 실제로 도서관 서가에 이용 가능한 경우에만, 그리고 그 경우에만 이용 가능하다고 명시해야 함.
    - 열차 관제사가 사용하는 열차 위치 정보는 실제 열차 위치를 최대 4미터 이내로 정확하게 반영해야 함.
    - 회의 스케줄러가 사용하는 제약 조건은 초대된 참가자의 실제 제약 조건을 정확하게 반영해야 함.
- Performance(성능) 요구사항:
    - 서지 정보 질의에 대한 응답은 2초 미만이어야 함.
    - 가속 명령은 3초마다 모든 열차에 발행되어야 함.
    - 회의 스케줄러는 최대 9개의 요청을 병렬로 처리할 수 있어야 함.
    - 새로운 e-구독 기능은 30%의 비용 절감을 보장해야 함.
- Interface(인터페이스) 요구사항, interoperability(상호운용성) 요구사항, compliance(준수성) 요구사항, architectural(아키텍처) 요구사항, development(개발) 요구사항 등.

## Informal vs. Verifiable Example
- 비공식적 목표: “시스템은 숙련된 관제사가 사용하기 쉬워야 하며, 사용자 오류가 최소화되도록 구성되어야 함.”
- 검증 가능한 비기능적 요구사항: “숙련된 관제사는 총 2시간의 교육 후에 모든 시스템 기능을 사용할 수 있어야 함. 이 교육 후, 숙련된 사용자가 저지르는 평균 오류 수는 하루 평균 2개를 초과하지 않아야 함.”

## Requirement Metrics(요구사항 측정 기준)

## Activities of Requirements Engineering

## What is Requirements Engineering(RE)?
- Knowledge acquisition – 시스템에 대한 관련 세부 정보를 어떻게 포착하는가?
    - 그 지식은 완전하고 일관성이 있는가?
- Knowledge representation – 일단 포착되면, 어떻게 가장 효과적으로 표현하는가?
    - 누구를 위해 표현하는가?
    - 다른 사람들에게 일관되게 전달되는가?
- 때때로 requirements definition과 requirements specification을 구별하는 것을 볼 수 있음.

## Why, What, Who of RE
- System-as-is(현재 시스템)
    - 문제, 기회, 시스템 지식
- System-to-be(미래 시스템)
    - 요구사항, 제약, 가정
- Objectives(목표)
    - Why
        - 왜 새로운 시스템인가?
    - What
        - 어떤 서비스?
    - Who
        - 누가 무엇을 책임질 것인가?
    - satisfy(충족)
    - assignment(할당)

## The WHY Dimension
- System-to-be의 Objectives 식별, 분석, 구체화
    - System-as-is의 분석된 결함을 해결하기 위해
    - 비즈니스 목표에 맞춰
    - 기술 기회를 활용하여
- 예: 공항 열차 제어
    “더 많은 승객 응대”
    “터미널 간 환승 시간 단축”
- 어려움
    - 도메인 지식 획득
    - 대안 평가(예: 동일한 목표를 만족시키는 대안적 방법)
    - 문제-기회 연결 및 평가: 영향, 관련 위험
    - 상충하는 목표 처리
        Objectives

## The WHAT Dimension
- System-to-be의 기능적 서비스(소프트웨어 서비스, 관련 수동 절차) 식별 및 정의
    - 식별된 목표를 만족시키기 위해
    - 품질 제약(보안, 성능 등)에 따라
    - 환경에 대한 현실적인 가정에 기반하여
- 예: 공항 열차 제어
    “안전한 열차 가속 계산”
    “열차 내 승객을 위한 유용한 정보 표시”
- 어려움
    - 올바른 기능 집합 식별
    - 모든 당사자가 이해할 수 있도록 정확하게 명시
    - 시스템 목표에 대한 backward traceability(역추적성) 보장
        요구사항, 제약, 가정

## The WHO Dimension
- System-to-be 구성 요소 간에 목표, 서비스, 제약에 대한 책임 할당
    - 그들의 역량과 시스템의 목표에 기반하여
    - 소프트웨어-환경 경계를 산출
- 예: 공항 열차 제어
    - “안전한 열차 가속”... software-to-be(개발될 소프트웨어)의 직접적인 책임 하에(무인 옵션) 또는 소프트웨어 지시를 따르는 운전자 책임 하에?
    - “열차 속도/위치 정확한 추정”... 추적 시스템 책임 하에 또는 선행 열차 책임 하에?
- 어려움
    - 올바른 자동화 수준을 결정하기 위해 대안 평가

## Typical Steps(Iterative)
- Identifying stakeholders(이해관계자 식별)
- Domain understanding(도메인 이해)
- Requirements elicitation(요구사항 도출)(인터뷰 등)
- Evaluation and agreement(평가 및 합의)(충돌, 우선순위 지정, 위험 등)
- Documentation/specification(문서화/명세화)
- Consolidation / quality assurance(통합 / 품질 보증)

## Target Qualities for RE Process
- Objectives, requirements, assumptions의 Completeness
- Requirements Document(RD)(요구사항 문서) 항목의 Consistency
- 요구사항, 가정, domain props(도메인 속성)의 Adequacy(적절성)
- RD 항목의 Unambiguity(명확성)
- 요구사항, 가정의 Measurability(측정 가능성)
- 요구사항, 가정의 Pertinence(관련성)
- 요구사항의 Feasibility(실현 가능성)
- RD 항목의 Comprehensibility(이해 가능성)
- RD의 Good structuring(좋은 구조화)
- RD 항목의 Modifiability(수정 가능성)
- RD 항목의 Traceability(추적성)

## Types of RE Errors & Flaws
- Omission(누락)
- Contradiction(모순)
- Inadequacy(부적절성)
- Ambiguity(모호성)
- Unmeasurability(측정 불가능성)
- Noise(노이즈), overspecification(과잉 명세)
- Unfeasibility(실현 불가능성)(희망 사항)
- Unintelligibility(이해 불가능성)
- Poor structuring(구조 불량), forward reference(전방 참조), remorse(후회)
- Opacity(불투명성)
    - Errors(오류)
    - Flaws(결함)

## Errors in a Requirements Document
- Omission: 문제 세계(problem world)의 피처가 RD 항목에 기술되지 않음
    - 예: 비상 정지 시 열차 문 상태에 대한 요구사항 없음
- Contradiction: RD 항목들이 문제 세계 피처를 호환되지 않는 방식으로 기술
    - “문은 플랫폼 사이에서 항상 닫혀 있어야 함”
    - 그리고 “비상 정지 시 문이 열려야 함”
- Inadequacy: RD 항목이 문제 세계 피처를 적절하게 기술하지 못함
    - “열차 내부 패널은 다음 정류장에서 서비스되는 모든 항공편을 표시해야 함”
- Ambiguity: RD 항목이 문제 세계 피처를 다른 방식으로 해석할 여지를 둠
    - “열차가 플랫폼에 정지하자마자 문이 열려야 함”
- Unmeasurability: RD 항목이 옵션 비교나 솔루션 테스트를 배제하는 방식으로 문제 세계 피처를 기술
    - “열차 내부 패널은 사용자 친화적이어야 함”

## Flaws in a Requirements Document
- Noise: 문제 세계 피처에 대한 정보를 제공하지 않는 RD 항목(변형: 통제되지 않는 중복)
    - “금연 표지판을 열차 창문에 부착해야 함”
- Overspecification: 문제 세계가 아닌 기계 솔루션의 피처를 기술하는 RD 항목
    - “`Alarm` 메시지 수신 시 `setAlarm` 메서드를 호출해야 함”
- Unfeasibility: 예산/일정 내에 구현할 수 없는 RD 항목
    - “열차 내 패널은 다음 정류장의 모든 지연된 항공편을 표시해야 함”
- Unintelligibility: RD 항목을 사용해야 하는 사람이 이해할 수 없음
    - 5개의 약어를 포함하는 요구사항 기술
- Poor structuring: 합리적이고 가시적인 구조화 규칙에 따라 구성되지 않은 RD 항목
    - 가속 제어와 열차 추적 문제의 뒤섞임
- Forward reference: 아직 정의되지 않은 문제 세계 피처를 사용하는 RD 항목
    - 최악의 경우 정지 거리 개념이 RD에서 몇 페이지 뒤에 정의되기 전에 여러 번 사용됨
- Remorse: 문제 세계 피처를 늦게 또는 부수적으로 기술하는 RD 항목
    - 정의되지 않은 최악의 경우 정지 거리 개념을 여러 번 사용한 후, 마지막 사용에서 괄호 안에 부수적인 정의가 바로 이어짐
- Poor modifiability(낮은 수정 용이성): 변경 사항이 RD 전체에 전파되어야 하는 RD 항목
    - 변경될 수 있는 수량에 대해 고정된 숫자 값 사용
- Opacity: 근거, 작성자 또는 종속성이 보이지 않는 RD 항목
    - “명령된 열차 속도는 항상 물리적 속도보다 최소 7 mph 높아야 함”이라는 기술에 대한 근거 설명 없음

## Documenting Requirements
- Free unrestricted text(자유로운 비정형 텍스트)
- Structured text(구조화된 텍스트)
- Diagrams(다이어그램)
- Formal specifications(정형 명세)