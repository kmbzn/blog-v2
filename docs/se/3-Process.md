# 3. Process

## Learning Goals
- process(프로세스)의 중요성 인식
- progress(진행 상황) 측정의 어려움 이해
- risks(위험) 식별 및 관리
- planning(계획) 및 progress(진행 상황) 측정을 위한 milestones(마일스톤) 사용
- backlogs(백로그) 및 user stories(사용자 스토리) 이해

## Software Process
- “소프트웨어 시스템의 production(생산)으로 이어지는 일련의 관련된 activities(활동)”
- Ian Sommerville, Software Engineering 10th edition, Pearson, 2016

## How to Develop Software?
1. 작성해야 할 소프트웨어 논의
2. 코드 작성
3. bugs(버그) 식별을 위한 코드 test(테스트)
4. 버그 원인 파악을 위한 Debug(디버그)
5. 버그 수정
6. 완료되지 않으면 1단계로 복귀

## Example of Process Decisions
- 모든 requirements(요구사항) 작성
- 모든 요구사항 변경에 대한 approval(승인) 요구
- 모든 변경 사항에 version control(버전 관리) 사용
- 보고된 모든 bugs(버그) 추적
- 요구사항 및 코드 review(검토)
- 개발을 더 작은 tasks(작업)로 분할하고 schedule(일정)을 잡고 monitor(모니터링)함
- quality assurance(품질 보증) 계획 및 수행
- 일일 status(상태) 회의 진행
- 개발자와 operation(운영) 간 코드 푸시를 위해 Docker containers(컨테이너) 사용

## Example of Process Issues
- Change Control(변경 제어):
    - 고객 또는 관리자가 제안한 변경 사항에 대한 프로젝트 중반의 informal(비공식적) 합의
    - Project scope(프로젝트 범위) 25-50% 확장
- Quality Assurance(품질 보증):
    - 요구사항 및 design(설계) 문제의 늦은 탐지
    - Test-debug-reimplement(테스트-디버그-재구현) cycle(주기)이 새로운 features(기능) 개발을 제한함
    - 알려진 defects(결함)이 있는 상태로 Release(배포)
- Defect Tracking(결함 추적): Bug reports(버그 보고서)가 비공식적으로 수집되고 잊힘
- System Integration(시스템 통합):
    - 프로젝트 맨 마지막에 독립적으로 개발된 components(구성 요소)의 Integration(통합)
    - Interfaces(인터페이스) 불일치
- Source Code Control(소스 코드 제어): 실수로 덮어쓴 변경 사항, 작업 손실
- Scheduling(스케줄링): 프로젝트가 지연될 때, 개발자들은 매주 새로운 estimates(추정치)를 요청받음

## Hypothesis(가설)
- Process(프로세스)는 flexibility(유연성)와 efficiency(효율성)를 증가시킴
- 나중의 더 큰 returns(수익)을 위한 upfront investment(선행 투자)

## Process Models
- Ad-hoc
- Waterfall(폭포수)
- Spiral(나선형)
- Agile(애자일)
- …

## Estimating Effort

## Task: Estimate Time
- A: Blue Marble 보드게임의 간단한 웹 버전
    - Team(팀): 본인
- B: 은행 스마트폰 앱
    - Team(팀): 본인과 4명의 개발자 팀, 1명은 iPhone 앱 경험, 1명은 security(보안) 배경
- 8시간 근무일 기준으로 추정(월 20 근무일, 연 220 근무일)

## Revise Time Estimation
- 추정의 기반이 될 만한 comparable experience(비교 가능한 경험)이 있는가?
- 각 task(작업)에 얼마만큼의 design(설계)이 필요한가?
- 작업을 약 5개의 더 작은 작업으로 나누고 추정
- 필요시 전체 estimate(추정치) 수정

## Constructive Cost Model(COCOMO)
- project history(프로젝트 이력)에 기반한 regression formula(회귀 공식)
- 유사한 프로젝트 경험 필요
- 경험의 documentation(문서화) 장려

## Study: Variability and Reproducibility in Software Engineering
- 노르웨이 Simula Research Lab의 연구
- 웹 정보 시스템을 위한 System Requirements Specification(시스템 요구사항 명세서) 생성(11페이지)
- 35개 회사로부터 bids(입찰)을 받았고, 14개는 schedule(일정) 포함
- 동일한 시스템을 구축하기 위해 4개 회사와 계약

## Bids and Time Estimations
- 입찰에서 price(가격)과 planned time(계획된 시간) 또는 methods(방법) 간의 관계 없음
- $C_v = \text{standard deviation} / \text{mean}$

## Risk and Uncertainty

## Risk Management
- project manager(프로젝트 관리자)의 핵심 과제
- risks(위험) 조기 식별 및 평가
- 필요시 mitigation strategies(완화 전략) 계획
- risk analysis(위험 분석) 결과를 project plan(프로젝트 계획)에 문서화
- Project risks(프로젝트 위험): scheduling(일정) 및 resources(자원)
    - 예: staff illness/turnover(직원 질병/이직)
- Product risks(제품 위험): 제품의 quality(품질) 및 functionality(기능성)
    - 예: 사용된 component(구성 요소)가 너무 느림
- Business risks(비즈니스 위험):
    - 예: 경쟁사가 유사 제품 출시

## Uncertainty
- Steve McConnell. 1996. Rapid Development

## Sources of Uncertainty
- Unpredictable operating environment(예측 불가능한 운영 환경)
    - Cybersecurity threats(사이버 보안 위협), device drivers(장치 드라이버)
    - Unanticipated usage scenarios(예상치 못한 사용 시나리오)
- models(모델)의 제한된 predictive power(예측 능력)
    - Halting(중단), abstract interpretation(추상 해석), testing(테스트)
- 인간의 Bounded rationality(제한된 합리성)
    - Designers(설계자), developers(개발자)
    - Customers(고객), users(사용자)

## Accepting and Coping with Risks
- 가치 증대를 위해 선택적으로 innovate(혁신)
- capability(역량) 및 competitiveness(경쟁력) 향상
- 필요한 곳에 위험 집중
- precedent(선례)와 convention(관행)(경험)에 의존
- iteration(반복) 및 feedback(피드백) 사용
    - prototypes(프로토타입), spiral development(나선형 개발), sprints(스프린트)

## Managing Risks
- 위험 조기 해결
- Prototyping(프로토타이핑), spiral development(나선형 개발)
- mitigation strategies(완화 전략) 식별

## Example: Bank Software
- vendor(공급업체) 및 open-source(오픈소스) components(구성 요소) 기반 구축
    - OS, DB, app server, tooling, backups, information management, …
    - 신뢰할 수 있는 vendors(공급업체) 및 integrators(통합업체) 고수
- business differentiators(비즈니스 차별화 요소)에 내부 risk-taking(위험 감수) 집중
    - Web-site features(웹사이트 기능), internal queries(내부 쿼리), decision algorithms(의사 결정 알고리즘)
- expertise(전문 지식) 접근, 비용 절감, flexibility(유연성) 확보를 위한 Outsource(아웃소싱)
    - Black-box testing(블랙박스 테스트)
    - Overall system architecture(전반적인 시스템 아키텍처)
    - Internal engineering practices and tools(내부 엔지니어링 관행 및 도구)

## Risk Analysis
- likelihood(가능성)와 consequences(결과) 추정
- 숙련된 project lead(프로젝트 리더) 필요
- 대략적인 estimations(추정치)로 충분
    - very low(<10%), low(<25%), ...
    - catastrophic(치명적), severe(심각), acceptable(수용 가능), negligible(무시 가능)
- 상위 10개 위험에 집중

## Risk Planning
- Risk avoidance(위험 회피)
- Risk minimization(위험 최소화)
- Emergency plans(비상 계획)

## Strategies to Help Manage Risk
- (표 1)
- Risk(위험): Organizational financial problems(조직의 재정 문제)
- Strategy(전략): senior management(고위 경영진)에게 프로젝트가 비즈니스 목표에 매우 중요한 기여를 하고 있음을 보여주고 프로젝트 예산 삭감이 비용 효율적이지 않은 이유를 제시하는 브리핑 문서 준비
- Risk(위험): Recruitment problems(채용 문제)
- Strategy(전략): customer(고객)에게 잠재적 어려움과 지연 가능성을 알림; buying-in components(구성 요소 구매) 조사
- Risk(위험): Staff illness(직원 질병)
- Strategy(전략): 작업 중복성을 높여 사람들이 서로의 업무를 이해할 수 있도록 team(팀) 재구성
- Risk(위험): Defective components(결함 있는 구성 요소)
- Strategy(전략): 잠재적으로 결함이 있는 구성 요소를 신뢰성이 알려진 bought-in components(구매 구성 요소)로 교체
- Risk(위험): Requirements changes(요구사항 변경)
- Strategy(전략): 요구사항 변경 impact(영향)을 평가하기 위한 traceability(추적성) 정보 도출; design(설계)에서 information hiding(정보 은닉) 최대화

## Strategies to Help Manage Risk
- (표 2)
- Risk(위험): Organizational restructuring(조직 개편)
- Strategy(전략): senior management(고위 경영진)에게 프로젝트가 비즈니스 목표에 매우 중요한 기여를 하고 있음을 보여주는 브리핑 문서 준비
- Risk(위험): Database performance(데이터베이스 성능)
- Strategy(전략): higher-performance(고성능) 데이터베이스 구매 가능성 조사
- Risk(위험): Underestimated development time(과소평가된 개발 시간)
- Strategy(전략): buying-in components(구성 요소 구매) 조사; program generator(프로그램 생성기) 사용 조사

## Planning(계획)

## (Software) Projects
- 일회성 노력(One-time endeavor); 다음과 관련하여 고유함
    - Goals(목표)
    - time, financial, personal, and other constraints(시간, 재정, 인력 및 기타 제약 조건)
    - differences to other endeavors(다른 노력과의 차이점)
    - project-specific organization(프로젝트별 조직)
- 정의되고 제한된 시간(명확한 시작과 끝)
- 명확한 goals(목표)
- Constraints(제약 조건): budget(예산), resources(자원), ...
- management(관리) 필요
    - high risk(높은 위험)
    - coordination of experts(전문가 조정)
- 소프트웨어 개발은 항상 projects(프로젝트)로 진행됨
- 새롭고/독특한 목표, innovative technology(혁신적인 기술)
- Intangible result(무형의 결과), progress(진행 상황) 측정 어려움
- 소프트웨어 프로젝트는 산업 프로젝트보다 더 자주 실패하는 경향

## Measuring Progress?
- "앱이 거의 완성되었습니다. frontend(프론트엔드)는 거의 다 구현되었습니다. backend(백엔드)는 서버를 계속 다운시키는 그 바보 같은 버그 하나만 빼고 완전히 끝났습니다. 그 바보 같은 버그 하나만 찾으면 되는데, 아마 오후면 될 겁니다. 다음 주에 release(배포)할 준비가 될 것입니다."

## Measuring Progress?
- Developer judgment(개발자 판단): x% 완료
- Lines of code(코드 라인 수)?
- Functionality(기능성)?
- Quality(품질)?

## Milestones and Deliverables(마일스톤 및 인도물)
- (특히 소프트웨어의) 진행 상황을 observable(관찰 가능)하게 만들기
- Milestone(마일스톤):(하위) 작업의 명확한 end point(종료점)
    - project manager(프로젝트 관리자)용
    - Reports(보고서), prototypes(프로토타입), completed subprojects(완료된 하위 프로젝트)
    - "80% done"("80% 완료")은 적절한 milestone(마일스톤)이 아님
- Deliverable(인도물): 고객을 위한 결과
    - milestone(마일스톤)과 유사하지만 고객용
    - Reports(보고서), prototypes(프로토타입), completed subsystems(완료된 하위 시스템)

## Project Planning
- [다이어그램 흐름]
- Identify constraints(제약 조건 식별)
- Estimate project parameters(프로젝트 매개변수 추정)
- Define milestones(마일스톤 정의)
- Create schedule(일정 생성)
- Check progress(진행 상황 확인)
- Reestimate project parameter(프로젝트 매개변수 재추정)
- Refine schedule(일정 구체화)
- Activities begin(활동 시작)
- Renegotiate constraints(제약 조건 재협상)
- Technical review(기술 검토)
- Done?(완료?) / Problem?(문제?) / Abort?(중단?)
- Customer(고객) -> New feature requests(새로운 기능 요청)
- Budget(예산), Personal(인력), Deadlines(마감일)

## Project Manager Tasks(프로젝트 관리자 과업)
- 프로젝트를 측정 가능한 outcomes(결과물)이 있는 work packages(작업 패키지)로 분할(각 1-10주)
- 시간 및 자원 추정
- 순서 생성 및 parallelism(병렬성) 결정
- 예상되거나 예상치 못한 문제에 대한 buffers(버퍼) 계획
- 사용 가능한 소프트웨어(예: Microsoft Project, GanttProject, Kplato 등)
- 추정을 위한 경험 필요

## Replanning
- 부정확한 시간 예측은 정상
- -> Update schedule(일정 업데이트)
- [표: Task(작업), Planned(계획), Actual(실제), Difficulty/Risk(난이도/위험), Responsibility(책임자), Completed(완료율)]

## Reasons for Missed Deadlines(마감일을 놓치는 이유)
- 불충분한 staff(인력)(질병, 이직, ...)
- 불충분한 qualification(자격)
- 예상치 못한 어려움
- 비현실적인 time estimations(시간 추정)
- 예상치 못한 dependencies(의존성)
- 변경되는 requirements(요구사항), 추가 requirements(요구사항)
- 특히 학생 프로젝트에서
    - 기술 학습 시간 과소평가
    - 불균등한 작업 분배

## Recognize Scheduling Issues Early(스케줄링 문제 조기 인식)
- Monitoring(모니터링) 및 formal reporting(공식 보고) 필요
    - 누가, 언제, 무엇을 확립
    - 계획/실제 데이터 비교
- Measurable milestones(측정 가능한 마일스톤)
- 오래된 일정은 의미 있는 management mechanism(관리 메커니즘)이 아님

## Almost Done Problem("거의 완료" 문제)
- 마지막 10%의 작업이 시간의 40% 소요(또는 20/80)
- 진행 상황을 측정 가능하게 만듦
- 개발자 추정에 전적으로 의존하는 것 방지

## Milestone Trend Analysis(마일스톤 추세 분석)
- Actual time(실제 시간)
- Estimated completion time(예상 완료 시간)
- Changing trends(변화하는 추세) -> unreliable early estimations(신뢰할 수 없는 초기 추정)
- Zig-zag pattern(지그재그 패턴) -> unreliable estimations(신뢰할 수 없는 추정)
- Quickly rising(빠르게 상승) -> estimations too optimistic(너무 낙관적인 추정)

## Mitigation Strategies(완화 전략)
- Additional personal(추가 인력)
    - 특히 특정 작업을 위한 experts(전문가)
- 일시적인 근무 시간 증가(초과 근무, 휴가 동결)
    - short-term solution(단기적 해결책)일 뿐
- tooling(도구), methods(방법), processes(프로세스) 개선
- Buy(구매), contract(계약), offshore(아웃소싱)
- 기능 재협상 / 축소
    - Set priorities(우선순위 설정), incremental deployment(증분 배포)
    - Move deadline(마감일 연기)
- 피할 것: testing(테스트)/quality assurance(품질 보증) 축소

## Team Productivity
- Brook's law(브룩스의 법칙): 지연되는 소프트웨어 프로젝트에 인력을 추가하면 더욱 지연됨.

## (Brief) Introduction to Scrum

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
- product backlog(제품 백로그)는 제품을 위한 모든 features(기능)
- sprint backlog(스프린트 백로그)는 해당 sprint(스프린트)에서 작업할 모든 기능. 이는 개별 tasks(작업)로 분할되어야 함:
    - Fine-grained(세분화됨)
    - Estimated(추정됨)
    - 개별 팀원에게 Assigned(할당됨)
    - Acceptance criteria(인수 기준)이 정의되어야 함
- User Stories(사용자 스토리)가 자주 사용됨

## Scrum Meetings
- Sprint Planning Meeting
    - 전체 팀이 해당 sprint(스프린트)에서 다룰 내용을 함께 결정
- Daily Scrum Meeting
    - 간단한 회의로 다음 사항 확인:
    - 무엇을 했는가? 다음에 무엇을 할 것인가? 무엇에 막혔거나 도움이 필요한가?
- Sprint Retrospective
    - sprint process(스프린트 프로세스) 검토
- Sprint Review Meeting
    - Product(제품) 검토

## User Stories

## The Card(카드)
> "As a [role], I want [function], so that [value]" -> "[역할]로서, [가치]를 위해 [기능]을 원한다"
- 3x5 카드에 맞아야 함

## The Conversation
- 프로젝트에 참여하는 모든 사람과 client(고객) 간의 열린 대화
- 필요시 Epic Stories(에픽 스토리) 분할

## The Confirmation
- 작업이 완료되었을 때를 보여주는 confirmation criterion(확인 기준)
- 자동화되거나 수동일 수 있음

## How to Evaluate User Story?