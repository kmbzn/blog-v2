# 7. Requirements Elicitation and Documentation

## Learning Goals
- Stakeholders(이해관계자) 정의 및 식별
- 효과적인 requirements interviews(요구사항 인터뷰) 수행에 대한 기본 능력 시연
- Use cases(유즈케이스) 및 user stories(사용자 스토리)를 사용한 요구사항 문서화
- 우선순위에 따른 conflicts(충돌) 인식 및 해결

## Requirement Elicitation

## Typical Steps
- 이해관계자 식별
- Understand the domain(도메인 이해)
    - Analyze artifacts(산출물 분석), 이해관계자와의 상호작용
- Discover the real needs(실제 요구 파악)
    - 이해관계자 인터뷰
- 요구를 해결하기 위한 대안 탐색

## Question
- 이 시스템은 누구를 위한 것인가?
- 이해관계자:
    - End users(최종 사용자)
    - System administrators(시스템 관리자)
    - Engineers maintaining the system(시스템 유지보수 엔지니어)
    - Business managers(비즈니스 관리자)
    - ...또 누가 있을까?

## Stakeholder
- 시스템에 의해 직간접적으로 영향을 받을 모든 개인 또는 그룹.
- 이해관계자들은 의견이 다를 수 있음.
- Requirements process(요구사항 프로세스)는 충돌을 해결하기 위한 negotiation(협상)을 촉발해야 함.

## Defining Actors/Agents
- An actor(액터)는 이벤트를 완료할 목적으로 시스템과 상호작용하는 entity(개체) [Jacobson, 1992].
    - 이해관계자만큼 광범위하지 않음.
- 액터는 사용자, 조직, 장치 또는 an external system(외부 시스템)일 수 있음.

## Stakeholder Analysis: Criteria for Identifying Relevant Stakeholders
- 조직 내 관련 직위
- 시스템에 대한 의사 결정에 있어 효과적인 역할
- Level of domain expertise(도메인 전문성 수준)
- 인지된 문제에 대한 노출
- Influence in system acceptance(시스템 수용에 미치는 영향력)
- 개인적인 목표 및 conflicts of interest(이해 상충)

## Stakeholders: A NASA example

## Interviews

## Interview Trade-offs
- Strengths(강점)
    - 이해관계자가 무엇을 하고, 느끼고, 선호하는지
    - 그들이 시스템과 어떻게 상호작용하는지
    - 현재 시스템의 문제점
- Weaknesses(약점)
    - Subjective(주관적), inconsistencies(비일관성)
    - Capturing domain knowledge(도메인 지식 포착)
    - Familiarity(친숙성)
    - Technical subtlety(기술적 미묘함)
- Organizational issues(조직적 문제), 예: 정치
- 인터뷰 진행자의 기술에 좌우됨

## Interview Process
- 관심 있는 이해관계자 및 수집할 대상 정보 식별.
- 인터뷰 수행.
    -(structured(구조적)/unstructured(비구조적), individual/group)
- 인터뷰 녹음 + 전사
- 중요한 발견 사항 보고.
- 인터뷰 대상자와 보고서의 타당성 확인.

## Example: Identifying Problems
- 일상 업무에서 어떤 문제에 부딪히는가? 표준적인 해결 방법이 있는가, 혹은 workaround(차선책)를 사용하는가?
    - 이것이 왜 문제인가? 현재는 그 문제를 어떻게 해결하는가? 이상적으로는 어떻게 해결하고 싶은가?
- 인터뷰 대상자가 설명할 문제가 더 이상 없을 때까지 후속 질문(“다른 문제는 없는가?”, “당신을 괴롭히는 다른 것들이 있는가?”)을 계속 질문.
- 그렇다면, 제가 이해하기로는 다음과 같은 문제/요구를 겪고 계신 것 같음
    - 인터뷰 대상자의 문제와 요구를 자신의 말로 설명 – 종종 당신이 동일한 그림을 공유하지 않는다는 것을 발견할 것임.
    - 처음에는 서로 이해했다고 생각하더라도 실제로는 그렇지 않은 경우가 매우 흔함
- 확인 차원에서, 제가 현재 솔루션에 대해 당신이 가진 문제들을 올바르게 이해했는가?
- 겪고 있는 다른 문제가 있는가? 있다면, 무엇인가?

## Example Questions: The User Environment
- 시스템의 사용자는 누가 될 것인가?
- 사용자의 교육 수준이나 훈련 정도는 어떠한가?
- 사용자는 어떤 컴퓨터 기술을 가지고 있는가?
- 사용자가 이런 유형의 IT 시스템에 익숙한가?
- 현재 어떤 technical platforms(기술 플랫폼)를 사용하고 있는가?
- 향후 시스템이나 플랫폼에 대한 계획을 알고 있는가?
- 조직이 현재 사용 중인 다른 IT 시스템 중 새 시스템과 연결되어야 하는 것은 무엇인가?
- System usability(시스템 사용성)에 대한 기대치는 어떠한가?
- 향후 시스템에 대해 어떤 교육 요구를 예상하는가?
- 어떤 종류의 documentation(문서화)를 기대하는가?

## Capturing vs Synthesizing
- 엔지니어는 많은 출처로부터 요구사항을 획득
    - 이해관계자로부터 도출
    - Policies(정책) 또는 다른 문서로부터 추출
    - 위 사항들 + estimation(추정) 및 invention(창안)으로부터 synthesize(종합)
- 이해관계자가 항상 자신이 무엇을 원하는지 아는 것은 아니기 때문에, 엔지니어는...
    - 이해관계자의 요구와 기대에 충실해야 함
    - 추가적인 요구와 risks(위험)를 예측해야 함
    - “추가적인 요구”가 필요하거나 바람직한지 validate(검증)해야 함

## Interview Advice
- 사전에 인터뷰 대상자에 대한 기본 정보(역할, 책임 등)를 파악
- 인터뷰 전에 인터뷰 질문 검토
- 구체적인 질문, 제안으로 구체적으로 시작; prototype(프로토타입) 또는 scenario(시나리오)를 통해 작업
    - 해당되는 경우, 현재 시스템과 연관.
- 개방적인 태도를 유지; 자연스럽게 발생하는 추가 이슈 탐색. 단, 시스템에 계속 집중.
- 현재 시스템/대안과 대조. 충돌 및 priorities(우선순위) 탐색
- 후속 질문 계획

## Guidelines for Effective Interviews
- 문제의 전체 범위를 다루기 위해 적절한 인터뷰 대상자 샘플 식별
    - 다양한 책임, 전문성, 과업, 문제 노출
- 적절한 시기에 적절한 문제에 집중할 수 있도록 준비된 상태로 임함
    - 배경 연구 우선 수행
    - 해당 인터뷰 대상자를 위한 질문 순서 사전 설계
- 인터뷰 대상자의 업무와 관심사에 인터뷰의 초점을 맞춤
- 인터뷰에 대한 통제력 유지
- 인터뷰 대상자를 편안하게 만듦
    - 시작: 어색함 해소, 동기 부여, 쉬운 질문
    - 역할뿐만 아니라 사람 자체도 고려
    - 항상 신뢰할 수 있는 파트너로 보여야 함
- 집중하고, 개방형 질문은 마지막에 함
- 예상치 못한 답변에 대비해 개방적이고 유연한 태도 유지
- 불쾌감을 주지 않으면서 왜(why) 질문을 함
- 특정 유형의 질문 회피...
    - 의견 또는 biased(편향된) 질문
    - Affirmative(긍정/부정) 질문(예/아니오 질문)
    - 해당 인터뷰 대상자에게 명백하거나 불가능한 답변의 질문
- 기억이 생생할 때 인터뷰 전사본 편집 및 구조화
    - 개인적인 반응, 태도 등 포함
- 인터뷰 대상자가 계속 참여하도록 함
    - 검증 및 refinement(개선)을 위해 인터뷰 전사본 공동 검토

## Prototypes, Mockups, Stories

## Wireframe, Mockup, and Prototype
- WIREFRAME(와이어프레임)
    - Purpose(목적): Communicate structure and get early feedback(구조 전달 및 초기 피드백 확보)
    - Fidelity(충실도): Low
    - Functionality(기능성): No
    - Skill requirement(필요 기술): Low
    - Resources(자원): Minimal
    - Time needed(소요 시간): Very low
    - Product cycle stage(제품 주기 단계): Discovery
- MOCKUP(목업)
    - Purpose: Showcase design(디자인 시연)
    - Fidelity: High
    - Functionality: No
    - Skill requirement: High
    - Resources: Design tool
    - Time needed: Medium
    - Product cycle stage: Design
- PROTOTYPE(프로토타입)
    - Purpose: Showcase design and functionality(디자인 및 기능성 시연)
    - Fidelity: High
    - Functionality: Yes
    - Skill requirement: High
    - Resources: Design tool
    - Time needed: High
    - Product cycle stage: Prototyping and testing

## Mockups, Prototypes, Stories
- 인간: 백지상태에서 문제를 해결하는 것보다 해결책이 올바른지 인식하는 데 더 능숙함.
- Mock-ups/prototypes는 요구사항의 uncertainty(불확실성)을 탐색하는 데 도움.
    - 우리가 올바른 요구사항을 가졌는지 검증.
    - 시스템의 “경계”에 있는 요구사항 도출.
    - 솔루션 공간의 feasibility(실현 가능성) 주장.
    - 후보 솔루션에 대한 피드백 획득.
- “보면 알게 될 것이다(I’ll know it when I see it)”

## Storyboarding and Scenarios

## Story
- Who(누가) 플레이어인가
- What(무엇이) 그들에게 일어나는가
- How(어떻게) 특정 에피소드를 통해 일어나는가
- Why(왜) 이것이 일어나는가
- What if(만약) 이러한 이벤트가 발생한다면
- What(무엇이) 결과적으로 잘못될 수 있는가

## Storyboards
- Storyboards(스토리보드)는 시나리오를 설명: 암묵적인 목표를 충족하는 시스템 구성요소 간의 일반적인 상호작용 순서.
    - 스토리보드는 최소한 누가, 무엇을, 어떻게 하는지를 명시적으로 다룸.
- 다른 유형:
    - Positive(긍정적) vs negative(부정적)(일어나야 하는 것과 일어나지 않아야 하는 것)
    - Normal(정상) vs abnormal(비정상)
- 도출의 일부로서:
    - 실제 또는 가상의 순서를 따라 현재 또는 제안된 시스템에 대해 학습
    - 구체적인 질문 가능
    - 근본적인 목표 도출, 원하는 행동 모델로 일반화.
    - 충돌 식별 및 해결
- 장점: 구체적, 서술적 설명 지원
- 단점: inherently partial(본질적으로 부분적).

## Storyboard Example

## Documenting Requirements

## Many Different Forms
- Informal(비공식적) vs formal(정형적)
- Unstructured(비구조적) vs structured(구조적)
- Text(텍스트) vs diagrams(다이어그램)
- 구조화된 텍스트가 실제 현업에서 일반적
- Traceability(추적성) 및 process integration(프로세스 통합)을 위해 도구 지원됨

## Software Requirements Specification(SRS)
- 구조화된 요구사항 문서
- 여러 standards(표준) 존재
    - ISO/IEC/IEEE 29148:2018 Systems and software engineering —Life cycle processes —Requirements engineering
- 종종 contracts(계약)의 기반이 됨

## Activity Diagrams
- Activity diagrams(액티비티 다이어그램)(또는 flow charts)은 그래프 표기법으로 로직을 표현

## Sequence Diagrams
- Sequence diagrams(시퀀스 다이어그램)은 그래프 표기법으로 상호작용을 표현

## Formal Specifications
- 기계 인터페이스에서의 공유된 동작에 대한 논리적 표현
- 도메인 속성과 행위자 행동을 pre-and post-conditions(사전 및 사후 조건)로 연결하는 것 포함

## Grounding Formal Specifications
- $\forall s \forall c(\text{enrolled}(s, c) \Rightarrow \text{student}(s) \land \text{course}(c))$
- Alice: 두 가지 중요한 기본 유형은 `student`와 `course`. 또한 이진 관계 `enrolled`가 있음
- Alice는 이러한 요소들을 다음과 같이 정의함:
- Bob: 학생만 과목에 등록하는가? 그렇지 않은 것 같음.
- Alice: 하지만 그것이 내가 `student`라고 의미한 바임!

## Designations as Explanations
- 만약 사람이 과목에 등록했다면, 그 사람은 `student`임:
- $\forall s \forall c(\text{enrolled}(s, c) \Rightarrow \text{student}(s) \land \text{course}(c))$
- 사람은, 학생이 등록된 과목이 있는 경우에만, 그리고 그 경우에만 `student`임
- $\forall s(\text{student}(s) \Leftrightarrow \exists c \text{enrolled}(s, c))$

## Use Case
- 목표를 달성하기 위해 시스템을 사용하는 액터에 대한 텍스트 스토리.
- 유즈케이스는 다이어그램이 아니라, 텍스트임.
- 주로 functional requirements(기능적 요구사항) 역할을 함(“시스템은 ~해야 한다”는 기술과 대조/결합).

## Use Case Name(Title)
- Scope(범위): System under design(설계 중인 시스템)
- Level(수준): User level, subprocess level
- Primary actor(주요 액터):(액터는 primary(주요), supporting(지원), or offstage(무대 밖)일 수 있음)
- Stakeholder, interests(이해관계): 중요! 유즈케이스는 이해관계자의 이익을 충족시키는 데 필요한 모든 것을 포함해야 함.
- Preconditions(사전 조건): 시나리오가 시작되기 전에 항상 참이어야 하는 것. 테스트되지 않음; 가정됨. 무의미한 노이즈로 채우지 말 것.
- Success guarantees(성공 보장): Postconditions(사후 조건)이라고도 함
- Main success scenario(주요 성공 시나리오): Basic flow(기본 흐름), “happy path”(행복 경로), typical flow. 모든 조건은 확장으로 연기. 단계 기록: 액터 간의 상호작용, 유효성 검사, 시스템에 의한 상태 변경.
- Extensions(확장): Alternate flows(대안 흐름)라고도 함. 종종 텍스트의 대부분을 차지. 때때로 다른 유즈케이스로 분기됨.
- Special requirements(특별 요구사항): Non-functional/quality requirements(비기능/품질 요구사항)가 위치하는 곳.
- Technology and data variations list(기술 및 데이터 변형 목록): 피할 수 없는 기술 제약; I/O 기술로 한정하도록 노력.
- Frequency of occurrence(발생 빈도):
- Miscellaneous(기타): SafeHomeProduct

## Example of Use Case for SafeHome
- Use-case: InitiateMonitoring
- Primary actor: Homeowner
- Goal in context: 집주인이 집을 떠나거나 내부에 머무를 때 센서를 모니터링하도록 시스템을 설정하기 위함
- Preconditions: 시스템이 암호 및 다양한 센서 인식을 위해 프로그래밍되었음
- Trigger(트리거): 집주인이 시스템을 “설정”하기로 결정, 즉 알람 기능 켬
- Scenario:
    1. Homeowner: 제어판 관찰
    2. Homeowner: 암호 입력
    3. Homeowner: “stay” 또는 “away” 선택
    4. Homeowner: SafeHome이 작동되었음을 나타내는 빨간색 알람 불빛 관찰

- Exceptions(예외):
    - 1a. 제어판이 준비되지 않음: 집주인이 모든 센서를 확인하여 어느 것이 열려있는지 파악; 닫음
    - 2a. 암호가 정확하지 않음
- Priority: Essential(필수), 반드시 구현되어야 함
- When available: first increment(첫 번째 증분)
- Frequency of use: 하루에 여러 번
- Channel to actor: 제어판 인터페이스를 통해
- Secondary actors: Support technician(지원 기술자)
- Channels to secondary actors: 지원 기술자: 전화선
- Open issues(미해결 문제):
    - 암호 입력에 시간제한을 두어야 하는가?

## Use Case
- 우리는 different granularities(다양한 세분성)의 많은 유형에 대해 이야기함:
    - Full use case model(전체 유즈케이스 모델)(전체 시스템, 상위 수준)
    - “Agile” use case: 구현될 시스템 기능의 작고 구체적인 조각(때때로 “사용자 스토리”와 혼용됨)
- 여러 단계에서 사용됨:
    - Requirements elicitation(요구사항 도출)(설명, 검증, 요구사항; 충돌 강조, 요구사항 우선순위 지정 등)
    - Requirements documentation(요구사항 문서화).
    - Concrete design(구체적인 설계): UML 다이어그램

## User Stories
- 구현 예정인, 사용자가 가치 있게 여기는 기능에 대한 비공식적 설명
- 세부 사항은 나중에 고객과의 협상을 위해 남겨두거나 실제 요구사항에 대한 포인터
- 일반적인 agile development(애자일 개발) 프랙티스
- Template(템플릿): “<역할>로서, <혜택>을 얻기 위해 <기능>을 원한다”

## User Stories Example
- 사용자로서, 내 전체 하드 드라이브를 백업할 수 있음
- 너무 큼, 분할:
    - 파워 유저로서, 파일 크기, 생성 날짜, 수정 날짜를 기반으로 백업할 파일이나 폴더를 지정할 수 있음.
    - 사용자로서, 백업 드라이브가 필요 없는 것들로 채워지지 않도록 백업하지 않을 폴더를 표시할 수 있음.

## Use of User Stories
- 사용자 스토리 보드를 유지하고, “epics(에픽)”으로 그룹화

## Industrial Requirements Tools

## Resolving Conflicts

## Types of Inconsistency
- Terminology clash(용어 충돌): 동일한 개념이 다른 기술에서 다르게 명명됨
    - 예: 도서관 관리: “borrower” vs. “patron”
- Designation clash(명칭 충돌): 다른 개념에 대해 다른 기술에서 동일한 이름 사용
    - 예: “도서관 이용자” vs. “도서관 소프트웨어 사용자”에 대해 “user” 사용
- Structure clash(구조 충돌): 동일한 개념이 다른 기술에서 다르게 구조화됨
    - 예: “latest return date”가 시점(예: 금요일 오후 5시) vs. 시간 간격(예: 금요일)
- Strong conflict(강한 충돌): 함께 만족될 수 없는 기술들
    - 예: “참가자 제약 조건은 다른 누구에게도 공개될 수 없음” vs. “회의 개시자는 참가자 제약 조건을 알아야 함”
- Weak conflict(divergence)(약한 충돌(불일치)): 일부 boundary condition(경계 조건) 하에서 함께 만족될 수 없는 기술들
    - 예: “이용자는 X주 이내에 빌린 도서를 반납해야 함” vs “이용자는 필요한 만큼 빌린 도서를 소지해야 함”은 “필요한 > X주”인 경우에만 모순

## Handling Inconsistencies
- 용어, 명칭, 구조: Build glossary(용어집), domain model(도메인 모델) 구축
- 약한, 강한 충돌: 협상 필요
    - 원인: 이해관계자들의 다른 목표 => 요구사항 외부에서 해결
    - 원인: quality tradeoffs(품질 절충) => 선호도 탐색

## Resolution Strategies
- 충돌을 식별하고 해결하기 위한 다양한 특정 프로세스, heuristics(휴리스틱), techniques(기법) 존재.

## Requirement Traceability
- 요구사항 간의 연결 유지
- 무엇이 무엇으로부터 비롯되는가

## Requirement Prioritization
- 비용, 시간 및 기타 제한
- 요구사항 간의 의존성
- 있으면 좋은 것(Nice to have)
- Value contribution(가치 기여)에 기반한 전략