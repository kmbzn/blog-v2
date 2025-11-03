<template><div><h1 id="_3-process" tabindex="-1"><a class="header-anchor" href="#_3-process"><span>3. Process</span></a></h1>
<h2 id="learning-goals" tabindex="-1"><a class="header-anchor" href="#learning-goals"><span>Learning Goals</span></a></h2>
<ul>
<li>Process(프로세스)의 중요성 인식</li>
<li>Progress(진행 상황) 측정의 어려움 이해</li>
<li>Risks(위험) 식별 및 관리</li>
<li>Planning(계획) 및 progress(진행 상황) 측정을 위한 milestones(마일스톤) 사용</li>
<li>Backlogs(백로그) 및 user stories(사용자 스토리) 이해</li>
</ul>
<h2 id="software-process" tabindex="-1"><a class="header-anchor" href="#software-process"><span>Software Process</span></a></h2>
<blockquote>
<p>&quot;소프트웨어 시스템의 production(생산)으로 이어지는 일련의 관련된 activities(활동)&quot;<br>
<em>Ian Sommerville, Software Engineering 10th edition, Pearson, 2016</em></p>
</blockquote>
<h2 id="how-to-develop-software" tabindex="-1"><a class="header-anchor" href="#how-to-develop-software"><span>How to Develop Software?</span></a></h2>
<ol>
<li>작성해야 할 소프트웨어 논의</li>
<li>코드 작성</li>
<li>bugs(버그) 식별을 위한 코드 test(테스트)</li>
<li>버그 원인 파악을 위한 Debug(디버그)</li>
<li>버그 수정</li>
<li>완료되지 않으면 1단계로 복귀</li>
</ol>
<h2 id="example-of-process-decisions" tabindex="-1"><a class="header-anchor" href="#example-of-process-decisions"><span>Example of Process Decisions</span></a></h2>
<ul>
<li>모든 requirements(요구사항) 작성</li>
<li>모든 요구사항 변경에 대한 approval(승인) 요구</li>
<li>모든 변경 사항에 version control(버전 관리) 사용</li>
<li>보고된 모든 bugs(버그) 추적</li>
<li>요구사항 및 코드 review(검토)</li>
<li>개발을 더 작은 tasks(작업)로 분할하고 schedule(일정)을 잡고 monitor(모니터링)함</li>
<li>Quality assurance(품질 보증) 계획 및 수행</li>
<li>일일 status(상태) 회의 진행</li>
<li>개발자와 operation(운영) 간 코드 푸시를 위해 Docker containers(컨테이너) 사용</li>
</ul>
<h2 id="example-of-process-issues" tabindex="-1"><a class="header-anchor" href="#example-of-process-issues"><span>Example of Process Issues</span></a></h2>
<ul>
<li>Change Control(변경 제어):
<ul>
<li>고객 또는 관리자가 제안한 변경 사항에 대한 프로젝트 중반의 informal(비공식적) 합의</li>
<li>Project scope(프로젝트 범위) 25-50% 확장</li>
</ul>
</li>
<li>Quality Assurance(품질 보증):
<ul>
<li>요구사항 및 design(설계) 문제의 늦은 탐지</li>
<li>Test-debug-reimplement(테스트-디버그-재구현) cycle(주기)이 새로운 features(기능) 개발을 제한함</li>
<li>알려진 defects(결함)이 있는 상태로 Release(배포)</li>
</ul>
</li>
<li>Defect Tracking(결함 추적): Bug reports(버그 보고서)가 비공식적으로 수집되고 잊힘</li>
<li>System Integration(시스템 통합):
<ul>
<li>프로젝트 맨 마지막에 독립적으로 개발된 components(구성 요소)의 Integration(통합)</li>
<li>Interfaces(인터페이스) 불일치</li>
</ul>
</li>
<li>Source Code Control(소스 코드 제어): 실수로 덮어쓴 변경 사항, 작업 손실</li>
<li>Scheduling(스케줄링): 프로젝트가 지연될 때, 개발자들은 매주 새로운 estimates(추정치)를 요청받음</li>
</ul>
<h2 id="hypothesis-가설" tabindex="-1"><a class="header-anchor" href="#hypothesis-가설"><span>Hypothesis(가설)</span></a></h2>
<ul>
<li>Process(프로세스)는 flexibility(유연성)와 efficiency(효율성)를 증가시킴</li>
<li>나중의 더 큰 returns(수익)을 위한 upfront investment(선행 투자)</li>
</ul>
<h2 id="process-models" tabindex="-1"><a class="header-anchor" href="#process-models"><span>Process Models</span></a></h2>
<ul>
<li>Ad-hoc</li>
<li>Waterfall(폭포수)</li>
<li>Spiral(나선형)</li>
<li>Agile(애자일)</li>
</ul>
<h2 id="estimating-effort" tabindex="-1"><a class="header-anchor" href="#estimating-effort"><span>Estimating Effort</span></a></h2>
<h2 id="task-estimate-time" tabindex="-1"><a class="header-anchor" href="#task-estimate-time"><span>Task: Estimate Time</span></a></h2>
<ul>
<li>A: Blue Marble 보드게임의 간단한 웹 버전
<ul>
<li>Team(팀): 본인</li>
</ul>
</li>
<li>B: 은행 스마트폰 앱
<ul>
<li>Team(팀): 본인과 4명의 개발자 팀, 1명은 iPhone 앱 경험, 1명은 security(보안) 배경</li>
</ul>
</li>
<li>8시간 근무일 기준으로 추정(월 20 근무일, 연 220 근무일)</li>
</ul>
<h2 id="revise-time-estimation" tabindex="-1"><a class="header-anchor" href="#revise-time-estimation"><span>Revise Time Estimation</span></a></h2>
<ul>
<li>추정의 기반이 될 만한 comparable experience(비교 가능한 경험)이 있는가?</li>
<li>각 task(작업)에 얼마만큼의 design(설계)이 필요한가?</li>
<li>작업을 약 5개의 더 작은 작업으로 나누고 추정</li>
<li>필요시 전체 estimate(추정치) 수정</li>
</ul>
<h2 id="constructive-cost-model-cocomo" tabindex="-1"><a class="header-anchor" href="#constructive-cost-model-cocomo"><span>Constructive Cost Model(COCOMO)</span></a></h2>
<ul>
<li>Project history(프로젝트 이력)에 기반한 regression formula(회귀 공식)</li>
<li>유사한 프로젝트 경험 필요</li>
<li>경험의 documentation(문서화) 장려</li>
</ul>
<h2 id="study-variability-and-reproducibility-in-software-engineering" tabindex="-1"><a class="header-anchor" href="#study-variability-and-reproducibility-in-software-engineering"><span>Study: Variability and Reproducibility in Software Engineering</span></a></h2>
<ul>
<li>노르웨이 Simula Research Lab의 연구</li>
<li>웹 정보 시스템을 위한 System Requirements Specification(시스템 요구사항 명세서) 생성(11페이지)</li>
<li>35개 회사로부터 bids(입찰)을 받았고, 14개는 schedule(일정) 포함</li>
<li>동일한 시스템을 구축하기 위해 4개 회사와 계약</li>
</ul>
<h2 id="bids-and-time-estimations" tabindex="-1"><a class="header-anchor" href="#bids-and-time-estimations"><span>Bids and Time Estimations</span></a></h2>
<ul>
<li>입찰에서 price(가격)과 planned time(계획된 시간) 또는 methods(방법) 간의 관계 없음</li>
<li><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>C</mi><mi>v</mi></msub><mo>=</mo><mfrac><mtext>(standard deviation)</mtext><mtext>(mean)</mtext></mfrac></mrow><annotation encoding="application/x-tex">C_v = \frac{\text{(standard deviation)}}{\text{(mean)}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">v</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.53em;vertical-align:-0.52em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord text mtight"><span class="mord mtight">(mean)</span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord text mtight"><span class="mord mtight">(standard deviation)</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></li>
</ul>
<h1 id="risk-and-uncertainty" tabindex="-1"><a class="header-anchor" href="#risk-and-uncertainty"><span>Risk and Uncertainty</span></a></h1>
<h2 id="risk-management" tabindex="-1"><a class="header-anchor" href="#risk-management"><span>Risk Management</span></a></h2>
<ul>
<li>Project manager(프로젝트 관리자)의 핵심 과제</li>
<li>Risks(위험) 조기 식별 및 평가</li>
<li>필요시 mitigation strategies(완화 전략) 계획</li>
<li>Risk analysis(위험 분석) 결과를 project plan(프로젝트 계획)에 문서화</li>
<li>Project risks(프로젝트 위험): scheduling(일정) 및 resources(자원)
<ul>
<li>예: staff illness/turnover(직원 질병/이직)</li>
</ul>
</li>
<li>Product risks(제품 위험): 제품의 quality(품질) 및 functionality(기능성)
<ul>
<li>예: 사용된 component(구성 요소)가 너무 느림</li>
</ul>
</li>
<li>Business risks(비즈니스 위험):
<ul>
<li>예: 경쟁사가 유사 제품 출시</li>
</ul>
</li>
</ul>
<h2 id="uncertainty" tabindex="-1"><a class="header-anchor" href="#uncertainty"><span>Uncertainty</span></a></h2>
<ul>
<li><em>Steve McConnell. 1996. Rapid Development</em></li>
</ul>
<h2 id="sources-of-uncertainty" tabindex="-1"><a class="header-anchor" href="#sources-of-uncertainty"><span>Sources of Uncertainty</span></a></h2>
<ul>
<li>Unpredictable operating environment(예측 불가능한 운영 환경)
<ul>
<li>Cybersecurity threats(사이버 보안 위협), device drivers(장치 드라이버)</li>
<li>Unanticipated usage scenarios(예상치 못한 사용 시나리오)</li>
</ul>
</li>
<li>models(모델)의 제한된 predictive power(예측 능력)
<ul>
<li>Halting(중단), abstract interpretation(추상 해석), testing(테스트)</li>
</ul>
</li>
<li>인간의 Bounded rationality(제한된 합리성)
<ul>
<li>Designers(설계자), developers(개발자)</li>
<li>Customers(고객), users(사용자)</li>
</ul>
</li>
</ul>
<h2 id="accepting-and-coping-with-risks" tabindex="-1"><a class="header-anchor" href="#accepting-and-coping-with-risks"><span>Accepting and Coping with Risks</span></a></h2>
<ul>
<li>가치 증대를 위해 선택적으로 innovate(혁신)</li>
<li>capability(역량) 및 competitiveness(경쟁력) 향상</li>
<li>필요한 곳에 위험 집중</li>
<li>Precedent(선례)와 convention(관행)(경험)에 의존</li>
<li>iteration(반복) 및 feedback(피드백) 사용
<ul>
<li>Prototypes(프로토타입), spiral development(나선형 개발), sprints(스프린트)</li>
</ul>
</li>
</ul>
<h2 id="managing-risks" tabindex="-1"><a class="header-anchor" href="#managing-risks"><span>Managing Risks</span></a></h2>
<ul>
<li>위험 조기 해결</li>
<li>Prototyping(프로토타이핑), spiral development(나선형 개발)</li>
<li>mitigation strategies(완화 전략) 식별</li>
</ul>
<h2 id="example-bank-software" tabindex="-1"><a class="header-anchor" href="#example-bank-software"><span>Example: Bank Software</span></a></h2>
<ul>
<li>vendor(공급업체) 및 open-source(오픈소스) components(구성 요소) 기반 구축
<ul>
<li>OS, DB, app server, tooling, backups, information management, …</li>
<li>신뢰할 수 있는 vendors(공급업체) 및 integrators(통합업체) 고수</li>
</ul>
</li>
<li>Business differentiators(비즈니스 차별화 요소)에 내부 risk-taking(위험 감수) 집중
<ul>
<li>Web-site features(웹사이트 기능), internal queries(내부 쿼리), decision algorithms(의사 결정 알고리즘)</li>
</ul>
</li>
<li>expertise(전문 지식) 접근, 비용 절감, flexibility(유연성) 확보를 위한 Outsource(아웃소싱)
<ul>
<li>Black-box testing(블랙박스 테스트)</li>
<li>Overall system architecture(전반적인 시스템 아키텍처)</li>
<li>Internal engineering practices and tools(내부 엔지니어링 관행 및 도구)</li>
</ul>
</li>
</ul>
<h2 id="risk-analysis" tabindex="-1"><a class="header-anchor" href="#risk-analysis"><span>Risk Analysis</span></a></h2>
<ul>
<li>likelihood(가능성)와 consequences(결과) 추정</li>
<li>숙련된 project lead(프로젝트 리더) 필요</li>
<li>대략적인 estimations(추정치)로 충분
<ul>
<li>very low(&lt;10%), low(&lt;25%), ...</li>
<li>catastrophic(치명적), severe(심각), acceptable(수용 가능), negligible(무시 가능)</li>
</ul>
</li>
<li>상위 10개 위험에 집중</li>
</ul>
<h2 id="risk-planning" tabindex="-1"><a class="header-anchor" href="#risk-planning"><span>Risk Planning</span></a></h2>
<ul>
<li>Risk avoidance(위험 회피)</li>
<li>Risk minimization(위험 최소화)</li>
<li>Emergency plans(비상 계획)</li>
</ul>
<h2 id="strategies-to-help-manage-risk" tabindex="-1"><a class="header-anchor" href="#strategies-to-help-manage-risk"><span>Strategies to Help Manage Risk</span></a></h2>
<ul>
<li>(표 1)</li>
<li>Risk(위험): Organizational financial problems(조직의 재정 문제)</li>
<li>Strategy(전략): senior management(고위 경영진)에게 프로젝트가 비즈니스 목표에 매우 중요한 기여를 하고 있음을 보여주고 프로젝트 예산 삭감이 비용 효율적이지 않은 이유를 제시하는 브리핑 문서 준비</li>
<li>Risk(위험): Recruitment problems(채용 문제)</li>
<li>Strategy(전략): customer(고객)에게 잠재적 어려움과 지연 가능성을 알림; buying-in components(구성 요소 구매) 조사</li>
<li>Risk(위험): Staff illness(직원 질병)</li>
<li>Strategy(전략): 작업 중복성을 높여 사람들이 서로의 업무를 이해할 수 있도록 team(팀) 재구성</li>
<li>Risk(위험): Defective components(결함 있는 구성 요소)</li>
<li>Strategy(전략): 잠재적으로 결함이 있는 구성 요소를 신뢰성이 알려진 bought-in components(구매 구성 요소)로 교체</li>
<li>Risk(위험): Requirements changes(요구사항 변경)</li>
<li>Strategy(전략): 요구사항 변경 impact(영향)을 평가하기 위한 traceability(추적성) 정보 도출; design(설계)에서 information hiding(정보 은닉) 최대화</li>
<li>(표 2)</li>
<li>Risk(위험): Organizational restructuring(조직 개편)</li>
<li>Strategy(전략): senior management(고위 경영진)에게 프로젝트가 비즈니스 목표에 매우 중요한 기여를 하고 있음을 보여주는 브리핑 문서 준비</li>
<li>Risk(위험): Database performance(데이터베이스 성능)</li>
<li>Strategy(전략): higher-performance(고성능) 데이터베이스 구매 가능성 조사</li>
<li>Risk(위험): Underestimated development time(과소평가된 개발 시간)</li>
<li>Strategy(전략): buying-in components(구성 요소 구매) 조사; program generator(프로그램 생성기) 사용 조사</li>
</ul>
<h1 id="planning-계획" tabindex="-1"><a class="header-anchor" href="#planning-계획"><span>Planning(계획)</span></a></h1>
<h2 id="software-projects" tabindex="-1"><a class="header-anchor" href="#software-projects"><span>(Software) Projects</span></a></h2>
<ul>
<li>일회성 노력(One-time endeavor); 다음과 관련하여 고유함
<ul>
<li>Goals(목표)</li>
<li>Time, financial, personal, and other constraints(시간, 재정, 인력 및 기타 제약 조건)</li>
<li>Differences to other endeavors(다른 노력과의 차이점)</li>
<li>Project-specific organization(프로젝트별 조직)</li>
</ul>
</li>
<li>정의되고 제한된 시간(명확한 시작과 끝)</li>
<li>명확한 goals(목표)</li>
<li>Constraints(제약 조건): budget(예산), resources(자원), ...</li>
<li>management(관리) 필요
<ul>
<li>high risk(높은 위험)</li>
<li>coordination of experts(전문가 조정)</li>
</ul>
</li>
<li>소프트웨어 개발은 항상 projects(프로젝트)로 진행됨</li>
<li>새롭고/독특한 목표, innovative technology(혁신적인 기술)</li>
<li>Intangible result(무형의 결과), progress(진행 상황) 측정 어려움</li>
<li>소프트웨어 프로젝트는 산업 프로젝트보다 더 자주 실패하는 경향</li>
</ul>
<h2 id="measuring-progress" tabindex="-1"><a class="header-anchor" href="#measuring-progress"><span>Measuring Progress?</span></a></h2>
<blockquote>
<p>&quot;앱이 거의 완성되었습니다. frontend(프론트엔드)는 거의 다 구현되었습니다. backend(백엔드)는 서버를 계속 다운시키는 그 빌어 먹을 버그 하나만 빼고 완전히 끝났습니다. 그 빌어 먹을 버그 하나만 찾으면 되는데, 아마 오후면 될 겁니다. 다음 주에 release(배포)할 준비가 될 것입니다.&quot;</p>
</blockquote>
<ul>
<li>Developer judgment(개발자 판단): x% 완료</li>
<li>Lines of code(코드 라인 수)?</li>
<li>Functionality(기능성)?</li>
<li>Quality(품질)?</li>
</ul>
<h2 id="milestones-and-deliverables-마일스톤-및-인도물" tabindex="-1"><a class="header-anchor" href="#milestones-and-deliverables-마일스톤-및-인도물"><span>Milestones and Deliverables(마일스톤 및 인도물)</span></a></h2>
<ul>
<li>(특히 소프트웨어의) 진행 상황을 observable(관찰 가능)하게 만들기</li>
<li>Milestone(마일스톤):(하위) 작업의 명확한 end point(종료점)
<ul>
<li>Project manager(프로젝트 관리자)용</li>
<li>Reports(보고서), prototypes(프로토타입), completed subprojects(완료된 하위 프로젝트)</li>
<li>&quot;80% done&quot;(&quot;80% 완료&quot;)은 적절한 milestone(마일스톤)이 아님</li>
</ul>
</li>
<li>Deliverable(인도물): 고객을 위한 결과
<ul>
<li>milestone(마일스톤)과 유사하지만 고객용</li>
<li>Reports(보고서), prototypes(프로토타입), completed subsystems(완료된 하위 시스템)</li>
</ul>
</li>
</ul>
<h2 id="project-planning" tabindex="-1"><a class="header-anchor" href="#project-planning"><span>Project Planning</span></a></h2>
<ul>
<li>[다이어그램 흐름]</li>
<li>Identify constraints(제약 조건 식별)</li>
<li>Estimate project parameters(프로젝트 매개변수 추정)</li>
<li>Define milestones(마일스톤 정의)</li>
<li>Create schedule(일정 생성)</li>
<li>Check progress(진행 상황 확인)</li>
<li>Reestimate project parameter(프로젝트 매개변수 재추정)</li>
<li>Refine schedule(일정 구체화)</li>
<li>Activities begin(활동 시작)</li>
<li>Renegotiate constraints(제약 조건 재협상)</li>
<li>Technical review(기술 검토)</li>
<li>Done?(완료?) / Problem?(문제?) / Abort?(중단?)</li>
<li>Customer(고객) -&gt; New feature requests(새로운 기능 요청)</li>
<li>Budget(예산), Personal(인력), Deadlines(마감일)</li>
</ul>
<h2 id="project-manager-tasks-프로젝트-관리자-과업" tabindex="-1"><a class="header-anchor" href="#project-manager-tasks-프로젝트-관리자-과업"><span>Project Manager Tasks(프로젝트 관리자 과업)</span></a></h2>
<ul>
<li>프로젝트를 측정 가능한 outcomes(결과물)이 있는 work packages(작업 패키지)로 분할(각 1-10주)</li>
<li>시간 및 자원 추정</li>
<li>순서 생성 및 parallelism(병렬성) 결정</li>
<li>예상되거나 예상치 못한 문제에 대한 buffers(버퍼) 계획</li>
<li>사용 가능한 소프트웨어(예: Microsoft Project, GanttProject, Kplato 등)</li>
<li>추정을 위한 경험 필요</li>
</ul>
<h2 id="replanning" tabindex="-1"><a class="header-anchor" href="#replanning"><span>Replanning</span></a></h2>
<ul>
<li>부정확한 시간 예측은 정상</li>
<li>-&gt; Update schedule(일정 업데이트)</li>
<li>[표: Task(작업), Planned(계획), Actual(실제), Difficulty/Risk(난이도/위험), Responsibility(책임자), Completed(완료율)]</li>
</ul>
<h2 id="reasons-for-missed-deadlines-마감일을-놓치는-이유" tabindex="-1"><a class="header-anchor" href="#reasons-for-missed-deadlines-마감일을-놓치는-이유"><span>Reasons for Missed Deadlines(마감일을 놓치는 이유)</span></a></h2>
<ul>
<li>불충분한 staff(인력)(질병, 이직, ...)</li>
<li>불충분한 qualification(자격)</li>
<li>예상치 못한 어려움</li>
<li>비현실적인 time estimations(시간 추정)</li>
<li>예상치 못한 dependencies(의존성)</li>
<li>변경되는 requirements(요구사항), 추가 requirements(요구사항)</li>
<li>특히 학생 프로젝트에서
<ul>
<li>기술 학습 시간 과소평가</li>
<li>불균등한 작업 분배</li>
</ul>
</li>
</ul>
<h2 id="recognize-scheduling-issues-early-스케줄링-문제-조기-인식" tabindex="-1"><a class="header-anchor" href="#recognize-scheduling-issues-early-스케줄링-문제-조기-인식"><span>Recognize Scheduling Issues Early(스케줄링 문제 조기 인식)</span></a></h2>
<ul>
<li>Monitoring(모니터링) 및 formal reporting(공식 보고) 필요
<ul>
<li>누가, 언제, 무엇을 확립</li>
<li>계획/실제 데이터 비교</li>
</ul>
</li>
<li>Measurable milestones(측정 가능한 마일스톤)</li>
<li>오래된 일정은 의미 있는 management mechanism(관리 메커니즘)이 아님</li>
</ul>
<h2 id="almost-done-problem-거의-완료-문제" tabindex="-1"><a class="header-anchor" href="#almost-done-problem-거의-완료-문제"><span>Almost Done Problem(&quot;거의 완료&quot; 문제)</span></a></h2>
<ul>
<li>마지막 10%의 작업이 시간의 40% 소요(또는 20/80)</li>
<li>진행 상황을 측정 가능하게 만듦</li>
<li>개발자 추정에 전적으로 의존하는 것 방지</li>
</ul>
<h2 id="milestone-trend-analysis-마일스톤-추세-분석" tabindex="-1"><a class="header-anchor" href="#milestone-trend-analysis-마일스톤-추세-분석"><span>Milestone Trend Analysis(마일스톤 추세 분석)</span></a></h2>
<ul>
<li>Actual time(실제 시간)</li>
<li>Estimated completion time(예상 완료 시간)</li>
<li>Changing trends(변화하는 추세) -&gt; unreliable early estimations(신뢰할 수 없는 초기 추정)</li>
<li>Zig-zag pattern(지그재그 패턴) -&gt; unreliable estimations(신뢰할 수 없는 추정)</li>
<li>Quickly rising(빠르게 상승) -&gt; estimations too optimistic(너무 낙관적인 추정)</li>
</ul>
<h2 id="mitigation-strategies-완화-전략" tabindex="-1"><a class="header-anchor" href="#mitigation-strategies-완화-전략"><span>Mitigation Strategies(완화 전략)</span></a></h2>
<ul>
<li>Additional personal(추가 인력)
<ul>
<li>특히 특정 작업을 위한 experts(전문가)</li>
</ul>
</li>
<li>일시적인 근무 시간 증가(초과 근무, 휴가 동결)
<ul>
<li>short-term solution(단기적 해결책)일 뿐</li>
</ul>
</li>
<li>Tooling(도구), methods(방법), processes(프로세스) 개선</li>
<li>Buy(구매), contract(계약), offshore(아웃소싱)</li>
<li>기능 재협상 / 축소
<ul>
<li>Set priorities(우선순위 설정), incremental deployment(증분 배포)</li>
<li>Move deadline(마감일 연기)</li>
</ul>
</li>
<li>피할 것: testing(테스트)/quality assurance(품질 보증) 축소</li>
</ul>
<h2 id="team-productivity" tabindex="-1"><a class="header-anchor" href="#team-productivity"><span>Team Productivity</span></a></h2>
<ul>
<li>Brook's law(브룩의 법칙): 지연되는 소프트웨어 프로젝트에 인력을 추가하면 더욱 지연됨.</li>
</ul>
<h2 id="brief-introduction-to-scrum" tabindex="-1"><a class="header-anchor" href="#brief-introduction-to-scrum"><span>(Brief) Introduction to Scrum</span></a></h2>
<h2 id="elements-of-scrum" tabindex="-1"><a class="header-anchor" href="#elements-of-scrum"><span>Elements of Scrum</span></a></h2>
<ul>
<li>Products(산출물):
<ul>
<li>Product Backlog(제품 백로그)</li>
<li>Sprint Backlog(스프린트 백로그)</li>
</ul>
</li>
<li>Process(프로세스):
<ul>
<li>Sprint Planning Meeting(스프린트 계획 회의)</li>
<li>Daily Scrum Meeting(일일 스크럼 회의)</li>
<li>Sprint Retrospective(스프린트 회고)</li>
<li>Sprint Review Meeting(스프린트 검토 회의)</li>
</ul>
</li>
</ul>
<h2 id="product-backlog-sprint-backlog" tabindex="-1"><a class="header-anchor" href="#product-backlog-sprint-backlog"><span>Product Backlog / Sprint Backlog</span></a></h2>
<ul>
<li>Product backlog(제품 백로그)는 제품을 위한 모든 features(기능)</li>
<li>sprint backlog(스프린트 백로그)는 해당 sprint(스프린트)에서 작업할 모든 기능. 이는 개별 tasks(작업)로 분할되어야 함:
<ul>
<li>Fine-grained(세분화됨)</li>
<li>Estimated(추정됨)</li>
<li>개별 팀원에게 Assigned(할당됨)</li>
<li>Acceptance criteria(인수 기준)이 정의되어야 함</li>
</ul>
</li>
<li>User Stories(사용자 스토리)가 자주 사용됨</li>
</ul>
<h2 id="scrum-meetings" tabindex="-1"><a class="header-anchor" href="#scrum-meetings"><span>Scrum Meetings</span></a></h2>
<ul>
<li>Sprint Planning Meeting
<ul>
<li>전체 팀이 해당 sprint(스프린트)에서 다룰 내용을 함께 결정</li>
</ul>
</li>
<li>Daily Scrum Meeting
<ul>
<li>간단한 회의로 다음 사항 확인:</li>
<li>무엇을 했는가? 다음에 무엇을 할 것인가? 무엇에 막혔거나 도움이 필요한가?</li>
</ul>
</li>
<li>Sprint Retrospective
<ul>
<li>sprint process(스프린트 프로세스) 검토</li>
</ul>
</li>
<li>Sprint Review Meeting
<ul>
<li>Product(제품) 검토</li>
</ul>
</li>
</ul>
<h1 id="user-stories" tabindex="-1"><a class="header-anchor" href="#user-stories"><span>User Stories</span></a></h1>
<h2 id="the-card-카드" tabindex="-1"><a class="header-anchor" href="#the-card-카드"><span>The Card(카드)</span></a></h2>
<blockquote>
<p>&quot;As a [role], I want [function], so that [value]&quot; -&gt; &quot;[역할]로서, [가치]를 위해 [기능]을 원한다&quot;</p>
</blockquote>
<ul>
<li>3x5 카드에 맞아야 함</li>
</ul>
<h2 id="the-conversation" tabindex="-1"><a class="header-anchor" href="#the-conversation"><span>The Conversation</span></a></h2>
<ul>
<li>프로젝트에 참여하는 모든 사람과 client(고객) 간의 열린 대화</li>
<li>필요시 Epic Stories(에픽 스토리) 분할</li>
</ul>
<h2 id="the-confirmation" tabindex="-1"><a class="header-anchor" href="#the-confirmation"><span>The Confirmation</span></a></h2>
<ul>
<li>작업이 완료되었을 때를 보여주는 confirmation criterion(확인 기준)</li>
<li>자동화되거나 수동일 수 있음</li>
</ul>
<h2 id="how-to-evaluate-user-story" tabindex="-1"><a class="header-anchor" href="#how-to-evaluate-user-story"><span>How to Evaluate User Story?</span></a></h2>
</div></template>


