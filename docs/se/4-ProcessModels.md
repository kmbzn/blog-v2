# 4. Process Models

## Learning Goals
- process(프로세스) 고려 사항의 필요성 이해
- 주어진 project(프로젝트)에 적합한 process(프로세스) 선택
- iteration(반복)을 통한 project(프로젝트) 및 engineering(엔지니어링) risks(위험) 해결
- process quality(프로세스 품질) 보장

## The Waterfall Model
- [폭포수 모델 diagram]

## Margaret Hamilton

## The "V" Model(80s, 90s)
- [V 모델 diagram]

## When is Waterfall Appropriate?
1. requirements(요구사항)가 사전에 알려짐
2. cost(비용), schedule(일정), performance(성능), safety(안전), security(보안), user interfaces(사용자 인터페이스), organizational impacts(조직적 영향) 등으로 인한 미해결 고위험 risks(위험)가 요구사항에 없음
3. 요구사항의 nature(본질)이 많이 변경되지 않음
4. 요구사항이 모든 주요 system stakeholders(시스템 이해관계자)의 기대와 호환됨
5. 요구사항 구현을 위한 architecture(아키텍처)가 잘 이해됨
6. 순차적으로 진행하기에 충분한 시간이 있음

## Key Challenge: Change
- Software(소프트웨어)는 변경 가능한("soft") 것처럼 보임
- Developers(개발자)는 변경 및 "추가 features(기능)"에 빠지기 쉬움
- Customers(고객)는 종종 무엇이 변경하기 쉽고 무엇이 어려운지 이해하지 못함
- "Good enough(충분히 좋음)" vs. "optimal(최적)"

## Early Improvement: Sequencing
- 초기 소프트웨어 고려 사항 강제
- Waterfall(폭포수 모델)은 70년대 TRW(항공 우주 정부 계약자)에서(prototypes(프로토타입)과 같은) iteration(반복)을 위한 몇 가지 추가 권장 사항과 함께 도입됨
- 전통적인 engineering(엔지니어링)을 모델로 함
    - 건설 전 Blueprints(청사진)
    - 무엇을 만들지 결정, 구축, 테스트, 배포
    - 변경 감소
- 일상적인 개발을 위한 성공적인 모델
- large scale(대규모)에서 문제 발생
    - Requirements(요구사항) -> Delays(지연) -> Surprise!(놀라움!)

## A Natural Engineering Process?
- [왼쪽 박스]
    - 무엇을 만들지 결정
    - 구축
    - 테스트
    - 배포
- [오른쪽 박스]
    - 무엇을 만들지 미리 알지 못함
    - 어떻게 만들지 모든 세부 사항을 알지 못함
    - testing(테스트) 및 evaluation(평가)에 어려움
    - 배포, evolve(진화), 재배포

## Iteration!
- 초기 및 빈번한 feedback(피드백)
- 지속적인 adaptation(적응) 지원
- risks(위험) 우선 해결

## The Spiral Model(Barry Boehm)
- [나선형 모델 diagram]

## Software Engineering Risks
- Project risks(프로젝트 위험)
    - 프로젝트 지연, buggy(버그 많음), cost overruns(비용 초과)
- System risks(시스템 위험)
    - Security(보안) 및 safety(안전) 문제
    - 예: Toyota 사례
- Engineering risks(엔지니어링 위험)
    - 부적절한 technology(기술) 선택, validation(검증) 문제, usability(사용성) 문제, scalability(확장성) 문제 …

## Cone of Uncertainty
- [불확실성의 원뿔]
- Steve McConnell. 1996. Rapid Development

## Mitigation of Risk Through Process Interventions(Examples)
- Risk-driven process(위험 주도 프로세스)
    - Prioritization(우선순위 지정) 및 prototyping(프로토타이핑)
- Architecture(아키텍처) 및 design(설계)
    - risks(위험) 격리/encapsulate(캡슐화)
    - 업계 standards(표준) 준수
- Design for assurance(보증을 위한 설계)
    - Preventive engineering(예방 공학)
    - 시스템과 evidence(증거)의 Co-development(공동 개발)
- Functionality(기능성) 및 usability(사용성)
    - Prototypes(프로토타입), 초기 usability labs(사용성 랩)

## Key: Iterative Processes
- Interleaving(인터리빙) 및 repeating(반복)
    - Requirements engineering(요구사항 공학), Risk assessment(위험 평가)
    - Architecture(아키텍처) 및 design(설계)
    - Implementation(구현)
    - Quality assurance(품질 보증)
    - Deployment(배포)
- 하지만 언제, 어떤 sequence(순서)로, 얼마나 자주?
- 결정을 내리기 위해 어떤 measurements(측정)이 필요한가?

## Iteration Decision
- 너무 느린 경우?
    - 늦은 반응, predictability(예측 가능성) 감소
- 너무 빠른 경우?
    - Overhead(오버헤드), innovation(혁신) 감소
- "Death spiral(죽음의 나선)"
    - deferred commitment(연기된 약속), 결론 없는 prototypes(프로토타입), missing feedback loops(피드백 루프 부재)
- -> risks(위험) 및 measurement data(측정 데이터) 기반으로 추진; project(프로젝트)별 결정

## Process Quality

## Process Evaluation
- 우리 project(프로젝트)는 얼마나 predictable(예측 가능)한가?
- 33%의 조직이 productivity(생산성) 및 efficiency(효율성) 데이터 수집
- 8%가 quality(품질) 데이터 수집
- 60%는 process(프로세스)를 monitor(모니터링)하지 않음

## Process Improvement Loop
- [프로세스 개선 루프 diagram]
- High-level approaches(고수준 접근 방식):
    - Opportunistic(기회주의적), double-loop learning(이중 루프 학습) 기반
    - Analytic(분석적), measurement(측정) + principles(원칙) 기반
    - Best practices(모범 사례) frameworks(프레임워크)
- Documenting(문서화)
- Training and enforcement(교육 및 시행)
- Monitoring(모니터링)
- Analyzing difference(차이 분석)
- Acting(조치)

## Defect Prevention Process, IBM 1985
- mishap(사고) 발생 시:
1. Take corrective action(시정 조치 수행)
2. Conduct root cause analysis(근본 원인 분석 수행)(Root cause(s)(근본 원인): Management(경영), people(사람), process(프로세스), equipment(장비), material(자재), environment(환경)):
    - 왜 mishap(사고)이 발생했는가? 왜 더 일찍 감지되지 않았는가?
    - 더 광범위한 문제를 나타내는 trend(추세)가 있는가? 해결할 수 있는가?
    - 이 마지막 단계에서 무엇이 잘 되었는가? 무엇이 잘못되었는가?
3. team context(팀 상황) 내에서 preventive actions(예방 조치) 구현
    - 성공적인 변경 사항은 corporate level(기업 수준)으로 전파됨

## Six Sigma, Motorola 1985
- "Six Sigma(식스 시그마)는 원인을 식별 및 제거하고 variability(변동성)를 최소화하여 process outputs(프로세스 산출물)의 quality(품질)를 개선하고 defects(결함)를 100만 개당 3.4개로 줄이는 것을 추구함. manufacturing(제조) 및 services(서비스)에 적용 가능함. statistical methods(통계적 방법)를 사용하며, 조직 내부에 전문가("Champions", "Black Belts", "Green Belts")들로 구성된 특별한 infrastructure(인프라)를 생성함."
- DMAIC, Existing products and services(기존 제품 및 서비스)
    - Define(정의)
    - Measure(측정)
    - Analyze(분석)
    - Improve(개선)
    - Control(관리)
- DMADV & DFSS, New or redesigned products and services(신규 또는 재설계된 제품 및 서비스)
    - Define(정의)
    - Measure(측정)
    - Analyze(분석)
    - Design(설계)
    - Verify(검증)

## Google SRE Process
- Blame-free postmortem culture(비난 없는 사후 검토 문화)
- "이러한 incidents(사건)로부터 배우는 공식화된 process(프로세스)가 없다면, 사건들은 무한정 재발할 수 있음."

## Process Standards
- [소프트웨어 측정 관련 책 표지]
- C. Ebert and R. Dumke, Software Measurement,: Establish – Extract – Evaluate – Execute, Springer, 2007

## Capability Maturity Model(CMM)
- customer(고객)는 조직이 원하는 product(제품)를 delivering(제공)할 능력이 있다는 confidence(신뢰)를 얻어야 함
- US Department of Defense(미국 국방부)는 contractors(계약업체)를 평가하기를 원했음
    - software processes(소프트웨어 프로세스)의 maturity(성숙도)를 평가할 framework(프레임워크)가 필요했음
    - 1986년, Software Engineering Institute(SEI)는 CMM이라 불릴 framework(프레임워크) 개발 시작
- CMM model(CMM 모델)에서, 조직의 maturity level(성숙도 수준)은 조직이 low cost(저비용), high quality(고품질) 소프트웨어를 얼마나 잘 생산할 수 있는지를 알려줌
- 현재 maturity level(성숙도 수준)을 알면, 조직은 다음 상위 level(수준)에 도달하기 위해 노력할 수 있음
    - CMM model(CMM 모델)에는 5개의 maturity levels(성숙도 수준)이 있음

## SEI's Capability Maturity Model(Integration)
- process(프로세스)가 아닌 meta-process(메타 프로세스)
- CMM(I)는 회사가 자체 process(프로세스)를 얼마나 잘 measures(측정)하는지 측정
    - 주로 US government(미국 정부)가 software vendors(소프트웨어 공급업체)의 estimates(견적)를 통제하기 위해 사용
    - 더 높고 안정적인 estimate(견적)를 수용하는 것을 선호

## The CMMI Framework
- [CMMI 프레임워크 수준 diagram]
- Level 1 "Initial"(초기): Processes(프로세스) unpredictable(예측 불가능), poorly controlled(제어 미흡) and reactive(대응적)
- Level 2 "Managed"(관리): Process(프로세스) characterized(특징화) for projects(프로젝트) and is often reactive(대응적)
- Level 3 "Defined"(정의): Process(프로세스) characterized(특징화) for the organization(조직) and is proactive(능동적).(Projects(프로젝트)는 조직의 standard(표준)에서 process(프로세스)를 tailor(조정)함)
- Level 4 "Quantitatively Managed"(정량적 관리): Process(프로세스) measured(측정) and controlled(제어)
- Level 5 "Optimizing"(최적화): Focus on process improvement(프로세스 개선에 집중)
- Higher Risk - Lower Productivity/Quality(고위험 - 저생산성/품질) -> Lower Risk - Higher Productivity/Quality(저위험 - 고생산성/품질)

## Key Practices of Each CMMI Level
- [CMMI 수준별 Key Practices 표]

## Capability Maturity Model(CMM)
- [CM 수준별 Key Process Areas(KPA) diagram]

## Capability Maturity Model(CMM)
- Common features of key practices(핵심 프랙티스의 공통 특징)
    - 모든 key process area(핵심 프로세스 영역)의 key practices(핵심 프랙티스)는 common features(공통 특징)라 불리는 5가지 categories(범주)로 구성됨
    - Common features(공통 특징)는 Key Process Area(KPA)의 implementation(구현)이 effective(효과적), repeatable(반복 가능), lasting(지속적)인지를 나타내는 key practices(핵심 프랙티스)의 attributes(속성)임
- 5가지 common features(공통 특징) categories(범주)는 다음과 같음
    - Commitment to perform(수행 의지)
    - Ability to perform(수행 능력)
    - Activities performed(수행 활동)
    - Measurement and analysis(측정 및 분석)
    - Verifying implementation(구현 검증)

## Capability Maturity Model(CMM)
- Application of the CMM(CMM의 적용)
    - 조직이 특정 maturity(성숙도) level(수준)에 도달하기 위해서는, 해당 level(수준) 및 모든 이전 levels(수준)의 모든 KPAs(핵심 프로세스 영역)의 모든 goals(목표)가 충족되어야 함
- 예: 조직이 Level 3에 도달하려면, Level 2의 6개 KPA와 Level 3의 7개 KPA를 모두 충족해야 함
    - SEI는 조직의 self-assessment(자체 평가)를 돕기 위해 Capability Maturity Model-Based Assessment Internal Process Improvement(CBA-IPI)를 개발함
- CBA-IPI는 CMM을 reference model(참조 모델)로 사용하여 어떤 KPA가 충족되고 있고 어떤 것이 개선되어야 하는지 식별함으로써 조직의 process capability(프로세스 능력)를 평가함
    - SEI는 조직의 formal evaluation(공식 평가)를 위한 mechanism(메커니즘)을 제공하기 위해 CMM Appraisal Framework(CAF)를 개발함
- CAF는 external assessors(외부 평가자)가 CAF-compliant evaluation methods(CAF 준수 평가 방법)를 설계할 때 사용할 requirements(요구사항)와 guidelines(가이드라인)을 설명함

Final Check:
- All `##` headings are in English only.
- Bullets use `-`.
- Numbered lists use `1.`.
- Korean translation with `English(한국어)` format for first occurrences of key terms within the body.
- Noun endings used.
- No bolding.
- No horizontal lines.
- LaTeX formatting applied(none in this specific text).
- Backticks used for technical terms(none in this specific text, `CMM-SW` is a name).
- All content extracted.

Looks good.

## Capability Maturity Model(CMM)
- Capability Maturity Model Integration(CMMI)
    - software(소프트웨어) 분야(CMM-SW로 알려짐)에서 CMM의 성공적인 적용 이후, 다른 분야의 CMM도 개발됨
- Systems Engineering(시스템 공학) CMM
- Integrated Product Development(통합 제품 개발) CMM
- Electronic Industry Alliance(전자 산업 연합) 731 CMM
- Software Acquisition(소프트웨어 획득) CMM
- People(인력) CMM
- Supplier Source(공급업체 소스) CMM

## Process Tradeoffs
-(참고: 많은 산업 환경(예: 자동차 산업)에서의 성공 사례)
- Process(프로세스) vs product quality(제품 품질)
    - Process Quality(프로세스 품질)는 Product Quality(제품 품질)에 영향을 미치지만, 보장하지는 않음
- 법적 방어 전략으로서의 "best practices(모범 사례)" 준수
    - "Check box compliance(체크박스 준수)"?

## Summary
- Sequential process models(순차적 프로세스 모델)은 "coding(코딩) 전 생각"을 강조
- 종종 너무 rigid(경직)되며, requirements(요구사항)와 environments(환경) 변화
- risks(위험) 해결을 위한 Iteration(반복)
- process(프로세스) 측정, 지속적인 process(프로세스) 개선