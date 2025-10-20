# 5. Agile

## Learning Goals
- Agile(애자일)을 iterative process practices(반복적 프로세스 프랙티스)의 집합이자 customer needs(고객 요구)와 development(개발)를 일치시키기 위한 business approach(비즈니스 접근 방식)로 정의
- 여러 일반적인 agile 프랙티스 이면의 motivation(동기)을 설명하고 tradeoffs(트레이드오프)에 대해 추론
- scrum(스크럼)과 extreme programming(익스트림 프로그래밍) 요약, 프랙티스 이면의 동기 및 트레이드오프 제공
- 주어진 현대 개발 프로세스에 가장 적합한 agile 전통의 process practices(프로세스 프랙티스) 식별 및 정당화

## Agile Software Development Is…
- 다음 두 가지 모두 해당:
- (고품질 소프트웨어의 rapid delivery(신속한 전달)을 허용하는) software engineering best practices(소프트웨어 엔지니어링 모범 사례)의 집합
- (development(개발)을 customer needs(고객 요구) 및 goals(목표)와 일치시키는) business approach(비즈니스 접근 방식)

## Brief History of Agile
- [Agile의 간략한 역사 diagram]

## The Manifesto for Agile Software Development(2001)
- 가치(Value)
- Processes and tools(프로세스와 도구)보다 Individuals and interactions(개인과 상호작용)
- Comprehensive documentation(포괄적인 문서)보다 Working software(작동하는 소프트웨어)
- Contract negotiation(계약 협상)보다 Customer collaboration(고객과의 협력)
- Following a plan(계획 준수)보다 Responding to change(변화에 대응)

## The Twelve Principles of Agile Software Development
1. Projects(프로젝트)는 motivated individuals(동기 부여된 개인)을 중심으로 구축되며, 이들은 신뢰받아야 함
2. Face-to-face conversation(대면 대화)는 최상의 communication(의사소통) 형태(co-location(동일 장소 근무))
3. Self-organizing teams(자기 조직화 팀)
4. Working software(작동하는 소프트웨어)를 frequently(자주)(months(몇 달) 단위가 아닌 weeks(몇 주) 단위로) 전달
5. Working software(작동하는 소프트웨어)가 progress(진행 상황)의 주된 척도
6. 일정한 속도를 유지할 수 있는 Sustainable development(지속 가능한 개발)
7. technical excellence(기술적 탁월성)와 좋은 design(설계)에 대한 지속적인 관심
8. Simplicity(단순성)—수행하지 *않는* 작업의 양을 극대화하는 기술—가 필수적
    - (연관 가치: Individuals and interactions, Working software)
9. 유용한 소프트웨어의 rapid delivery(신속한 전달)을 통한 Customer satisfaction(고객 만족)
10. 비즈니스 담당자와 개발자 간의 긴밀한 일일 cooperation(협력)
11. development(개발) 후반부일지라도 changing requirements(요구사항 변경) 환영
12. 변화하는 환경(circumstances)에 대한 정기적인 adaptation(적응)
    - (연관 가치: Customer collaboration, Responding to change)

## Agile Practices
- Backlogs(Product and Sprint)(백로그(제품 및 스프린트))
- Behavior-driven development(BDD)(행동 주도 개발)
- Cross-functional team(다기능 팀)
- Continuous integration(CI)(지속적인 통합)
- Domain-driven design(DDD)(도메인 주도 설계)
- Information radiators(정보 방사기)(Kanban board, Task board, Burndown chart)
- Acceptance test-driven development(ATDD)(인수 테스트 주도 개발)
- Iterative and incremental development(IID)(반복적 및 증분 개발)
- Pair programming(페어 프로그래밍)
- Planning poker(플래닝 포커)
- Refactoring(리팩토링)
- Scrum meetings(스크럼 미팅)(Sprint planning, Daily scrum, Sprint review and retrospective)
- Small releases(소규모 릴리스)
- Simple design(단순한 설계)
- Test-driven development(TDD)(테스트 주도 개발)
- Agile testing(애자일 테스팅)
- Timeboxing(타임박싱)
- Use case(유스 케이스)
- User story(사용자 스토리)
- Story-driven modeling(스토리 주도 모델링)
- Retrospective(회고)
- On-site customer(상주 고객)
- Agile Modeling(애자일 모델링)
- 40-hour weeks(주 40시간 근무)
- Short development cycles(짧은 개발 주기)
- Collective ownership(공동 소유권)
- Open workspace(개방형 업무 공간)
- Velocity tracking(속도 추적)
- Etc.

## 40-hour Weeks
- 2주 연속 overtime(초과 근무) 불가
- 단발적인 overtime(초과 근무)라도 너무 잦으면 해결해야 할 더 깊은 문제의 징후
- 불행히도, 특히 대한민국에서 따르기 가장 어려운 agile practice(애자일 프랙티스) 중 하나

## Planning Poker
- How to play(게임 방법)
1. 다음 task(작업) 낭독
2. task(작업) 토론
3. Estimate(추정): 모두가 작업의 크기를 나타내는 카드를 선택하고 동시에 점수 공개
4. Discussion(토론): universal consensus(만장일치)가 아니면, 가장 낮거나 높은 점수를 낸 사람에게 이유 질문
5. Re-estimate(재추정)
6. Gain consensus(합의 도달)
- Benefits(장점):
- task(작업)들을 서로 상대적으로 추정하기 쉬움
- Equal voice(동등한 발언권)
- Equal contribution(동등한 기여)

## Collective Ownership
- 모든 programmer(프로그래머)는 기회가 보이면 언제든 시스템 어디에서나 모든 code(코드)를 개선
- 현실적으로, 전체 product(제품)에 대해 불가능
- Windows, Chrome, Android 등의 모든 라인을 누가 알 수 있는가
- 더 작은 부분에 대해 collective ownership(공동 소유권) 구현 가능

## Kanban Board
[Image of a Kanban board]
- [https://en.wikipedia.org/wiki/Kanban_board](https://en.wikipedia.org/wiki/Kanban_board)

## Simple Design
- "모든 것을 한 번만 말하라":
- 매 순간, design(설계)는 모든 tests(테스트)를 실행하고, programmers(프로그래머)가 전달하고자 하는 모든 것을 전달하며, duplicate code(중복 코드)가 없고, 최소한의 classes(클래스)와 methods(메서드)를 가짐

## On-site Customer
- customer(고객)가 team(팀)과 full-time(상시) 함께 자리함
- On-site customer(상주 고객)는 특히 requirement elicitation(요구사항 도출) 및 testing(테스팅)에 매우 효과적
- 불행히도, on-site customer(상주 고객)는 따르기 가장 어려운 agile practice(애자일 프랙티스) 중 하나

## Pair Programming
- Developers(개발자)가 pairs(쌍)을 이뤄 작업하며, 서로의 작업을 checking(확인)하고 항상 좋은 작업을 수행하도록 support(지원) 제공
- 두 가지 역할: Driver(드라이버)와 Navigator(내비게이터)
- Driver(드라이버)는 code(코드) 작성
- Navigator(내비게이터)는 Driver(드라이버) 안내

## Short Development Cycle
- software development process(소프트웨어 개발 프로세스)가 design phase(설계 단계)부터 implementation phase(구현 단계), test(테스트) 및 deployment phase(배포 단계)까지의 전체 software development cycle(소프트웨어 개발 주기)이 short timespan(짧은 기간)(보통 몇 달 또는 몇 주) 내에 수행되는 방식으로 구성됨

## Small Releases
- 시스템은 전체 문제를 해결하기 전, 몇 달 내에 production(운영 환경)에 배포됨
- 새로운 releases(릴리스)는 매일에서 매월까지 자주 이루어짐

## Continuous Integration(CI)
- 새로운 code(코드)는 최대 몇 시간 내에 현재 system(시스템)과 integrated(통합)됨
- 통합 시, system(시스템)은 처음부터 built(빌드)되며 모든 tests(테스트)가 통과해야 함. 그렇지 않으면 변경 사항은 discarded(폐기)됨

## Test-driven Development
- Programmers(프로그래머)는 분 단위로 unit tests(단위 테스트) 작성
- 이 tests(테스트)들은 수집되며, 모두 올바르게 실행되어야 함
- Customers(고객)는 iteration(반복) 내의 stories(스토리)에 대한 functional tests(기능 테스트) 작성

## Open Workspace
- Pros(장점)
- Communication(의사소통)
- Flexible(유연함)
- Visually pleasing(시각적으로 만족스러움)
- Cons(단점)
- Lack of privacy(프라이버시 부족)
- Distractions(집중 방해 요소)
- Anxiety(불안감)

## Solving Software Development Problems with Agile Practices(1/2)
- Problem in Software Development(소프트웨어 개발의 문제점): Requirement changes(요구사항 변경)
- Agile Methods That Mitigate It(완화하는 Agile 방법): Close relation with customer(고객과의 긴밀한 관계), short development cycle(짧은 개발 주기), small releases(소규모 릴리스), planning poker(플래닝 포커), Kanban board(칸반 보드)
- Problem: Scope creep(범위 증가)
- Agile Methods: short development cycle, small releases, planning poker
- Problem: Architecture erosion(아키텍처 침식)
- Agile Methods: Collective ownership(공동 소유권), pair programming(페어 프로그래밍)
- Problem: Under- or overestimation(과소 또는 과대 추정)(시간 및 예산), sticking to the plan(계획 고수)
- Agile Methods: Close relation with customer, planning poker, short development cycle, small releases
- Problem: Bringing in new developers(신규 개발자 투입)(교육 시간 및 노력), steep learning curve(가파른 학습 곡선)
- Agile Methods: Collective ownership(장단점), planning poker
- Problem: Change of management(개발 과정 중 경영진 변경)
- Agile Methods: Close relationship with customer(고객과의 긴밀한 관계)
- Problem: Introducing new bugs(소프트웨어 개발 중 새로운 버그 발생)
- Agile Methods: 40-hour week(주 40시간 근무), collective ownership, short development cycle, small releases, tests(테스트), CI(지속적인 통합), pair programming

## Solving Software Development Problems with Agile Practices(2/2)
- Problem in Software Development(소프트웨어 개발의 문제점): Challenge of communication(의사소통의 어려움)
- Agile Methods That Mitigate It(완화하는 Agile 방법): Close relation with customer(고객과의 긴밀한 관계)
- Problem: Developer turnover(개발자 이직)
- Agile Methods: Collective ownership(공동 소유권)(장단점), 40-hour week(주 40시간 근무)
- Problem: Integration issues(통합 문제)
- Agile Methods: Collective ownership
- Problem: Difficulty of tracking bugs(버그 추적의 어려움)
- Agile Methods: Collective ownership, short development cycle(짧은 개발 주기), small releases(소규모 릴리스), CI(지속적인 통합), tests(테스트)
- Problem: Disagreement between developers(개발자 간 불일치)
- Agile Methods: Close relation with customer
- Problem: Scheduling problems(일정 문제)(global team(글로벌 팀))
- Agile Methods: Close relation with customer
- Problem: "Groupthink"(그룹싱크)(개발자들이 서로 동의하는 경향, 공통 사고), fear of hurting the feelings(다른 개발자 감정 상할까 봐 두려움)
- Agile Methods: Planning poker(플래닝 포커), pair programming(페어 프로그래밍)
- Problem: Challenges with integrating with legacy code(레거시 코드 통합의 어려움)
- Agile Methods: Collective ownership

## Scrum

## Introduction to Scrum
- [Image illustrating the Scrum framework]

## Elements of Scrum
- Products(산출물):
- Product Backlog(제품 백로그)
- Sprint Backlog(스프린트 백로그)
- Process(프로세스):
- Sprint Planning Meeting(스프린트 계획 회의)
- Daily Scrum Meeting(일일 스크럼 회의)
- Sprint Retrospective(스프린트 회고)
- Sprint Review Meeting(스프린트 검토 회의)

## Product Backlog / Sprint Backlog
- product backlog(제품 백로그)는 product(제품)를 위한 모든 features(기능)
- sprint backlog(스프린트 백로그)는 해당 sprint(스프린트)에서 작업할 모든 features(기능). 이는 개별 tasks(작업)로 분할되어야 함:
- Fine-grained(세분화됨)
- Estimated(추정됨)
- 개별 team members(팀원)에게 Assigned(할당됨)
- Acceptance criteria(인수 기준)이 정의되어야 함
- User Stories(사용자 스토리)가 자주 사용됨

## Backlog – Information Radiators

## Scrum Meetings
- Sprint Planning Meeting(스프린트 계획 회의)
- Entire Team(전체 팀)이 해당 sprint(스프린트)에서 다룰 내용을 함께 결정
- Daily Scrum Meeting(일일 스크럼 회의)
- 다음 사항을 확인하기 위한 Quick Meeting(빠른 회의):
- 무엇을 했는가? 다음에 무엇을 할 것인가? 무엇에 막혔거나 도움이 필요한가?
- Sprint Retrospective(스프린트 회고)
- sprint process(스프린트 프로세스) 검토
- Sprint Review Meeting(스프린트 검토 회의)
- Product(제품) 검토

## User Stories
- [Image illustrating the user story format]

## The Card
- "As a [role], I want [function], so that [value]" -> "[역할]로서, [가치]를 위해 [기능]을 원한다"
- 3x5 카드에 맞아야 함

## The Conversation
- project(프로젝트)에 참여하는 모든 사람과 client(고객) 간의 열린 dialog(대화)
- 필요시 Epic Stories(에픽 스토리) 분할

## The Confirmation
- task(작업)이 완료되었을 때를 보여주는 confirmation criterion(확인 기준)
- automated(자동화)되거나 manual(수동)일 수 있음

## How to Evaluate User Story?
- [http://dev.one80services.com/user-stories/writing-good-user-stories-hint-its-not-about-writing/](http://dev.one80services.com/user-stories/writing-good-user-stories-hint-its-not-about-writing/)

## eXtreme Programming(XP)
- [Image comparing human evolution to XP evolution]

## XP Practices(subset of Agile!)
- TDD(test-first approach)(테스트 우선 접근 방식)
- Planning game(플래닝 게임): 1-3주 iterations(반복), 한 번에 하나의 iteration(반복), customer(고객)가 사용할 user stories(사용자 스토리) 결정
- Whole team/on-site customer(전체 팀/상주 고객): "고객은 하나의 목소리로 말함." Customer(고객)가 whole team(전체 팀)일 수 있음
- Small releases(소규모 릴리스), 가치 있는 functionality(기능) 포함, 불만족스러운 customers(고객) 방지
- System metaphor(시스템 메타포)는 작동 방식에 대한 단일 공유 스토리(architecture(아키텍처)와 유사)
- Simplest thing that possibly works(작동 가능한 가장 단순한 것)(오늘을 위한 코딩)
- 프로그래밍 전 up-front design(사전 설계)가 없으므로 항상 Refactor(리팩토링)
- Collective ownership(공동 소유권). 모두가 모든 것에 책임. Programmer(프로그래머)가 맘에 안 드는 것을 보면 변경 가능. Task ownership(작업 소유권)은 개인
- Pair programming(페어 프로그래밍). prototypes(프로토타입) 같은 non-production code(비운영 코드)는 혼자 code(코딩) 가능
- Continuous Integration(지속적인 통합). 최대 하루 단위 development(개발)
- Sustainable pace(지속 가능한 속도). 40 hour work weeks(주 40시간 근무)
- Coding standards(코딩 표준), 특히 모든 code(코드)가 항상 변경될 수 있으므로

## Scrum vs XP
| Aspects(측면) | Practices(프랙티스) | Scrum | XP |
| :--- | :--- | :--- | :--- |
| Iteration Length(반복 길이) | | 2-4주 | 1-2주 |
| Handle Changes with an Iteration(반복 중 변경 처리) | 요구사항 수정 허용 여부 | Scrum은 허용되지 않음. 반복이 완료되면 변경 불가, Scrum Master(스크럼 마스터)가 엄격히 확인 | 구현되지 않은 need(요구)가 있을 때 다른 요구사항으로 교체 가능, 단 구현 시간은 동일 |
| Priority of Features(기능 우선순위) | 요구가 엄격히 우선순위에 따르는지 여부 | 그럴 필요 없음 | 예 |
| Engineering Practices(엔지니어링 프랙티스) | 진행 또는 품질 보증을 위한 엄격한 엔지니어링 방법 채택 여부 | 개발자가 의식할 것을 요구 | 매우 엄격 |

## The Manifesto for Agile Software Development(2001)
- 가치(Value)
- Processes and tools(프로세스와 도구)보다 Individuals and interactions(개인과 상호작용)
- Comprehensive documentation(포괄적인 문서)보다 Working software(작동하는 소프트웨어)
- Contract negotiation(계약 협상)보다 Customer collaboration(고객과의 협력)
- Following a plan(계획 준수)보다 Responding to change(변화에 대응)