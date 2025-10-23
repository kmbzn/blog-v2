# 4. Knowledge and Logic (1)

## 지식 기반 에이전트(Knowledge-Based Agents)
- 지식 기반 에이전트(Knowledge-based agents): 지식의 내부 표현(internal representation of knowledge)에 대한 추론(reasoning) 과정을 통해 취할 행동을 결정
- 기존의 문제 해결 에이전트(problem-solving agents in Search): 사용 가능한 행동(actions)과 특정 상태(specific state)에서 특정 행동의 결과를 알지만, 일반적인 사실(general facts)은 알지 못함.
- 지식 기반 에이전트 지원을 위해 논리(logic)를 일반적인 표현 클래스로 개발
    - 다양한 목적에 맞게 정보 결합 가능
    - 명시적으로 기술된 목표(explicitly described goals) 형태로 새로운 작업 수용
    - 환경에 대한 새로운 지식을 듣거나(told) 학습하여(learning) 빠르게 능력 확보
    - 관련 지식 업데이트를 통해 환경 변화에 적응

## 지식 베이스(Knowledge Base)
- 지식 베이스(KB): 문장(sentences)들의 집합
    - 각 문장은 지식 표현 언어(knowledge representation langauge)라고 불리는 언어로 표현되며, 세상에 대한 어떤 주장(assertion)을 나타냄.
    - 다른 문장으로부터 도출되지 않고 주어진 것으로 간주되는 문장을 공리(axiom)라고 부름.
- 지식 베이스에 새 문장을 추가(add new sentences)하거나 알려진 것을 질의(query what is known)하는 방법 필요
    - 표준 명칭: `TELL`(추가) 및 `ASK`(질의)
    - 두 작업 모두 추론(inference), 즉 오래된 문장으로부터 새로운 문장을 도출하는 것을 포함할 수 있음.

## 지식 기반 에이전트의 개요(Outline of a Knowledge-Based Agent)
```
function KB-AGENT(percept) returns an action
  persistent: KB, a knowledge base
              t, a counter, initially 0, indicating time

  TELL(KB, MAKE-PERCEPT-SENTENCE(percept,t))
  action <- ASK(KB, MAKE-ACTION-QUERY(t))
  TELL(KB, MAKE-ACTION-SENTENCE(action,t))
  t <- t + 1
  return action
```
> A generic knowledge-based agent (지식 기반 에이전트)  
Given a percept (지각), the agent adds the percept to its knowledge base, asks the knowledge base for the best action, and tells the knowledge base that it has in fact taken that action.

# A Wumpus World

## 구성 요소(Components)
- Wumpus(The wumpus): 방에 들어오는 사람은 누구든 잡아먹는 짐승
- 에이전트(An agent): 화살(arrow)이 하나만 있음.
- 바닥 없는 구덩이(Bottomless pits): 이 방에 들어오는 사람을 가둠(Wumpus는 제외)
- 금(A heap of gold)

## 과제 정의(The precise definition of the task)
- 성과 측정(Performance measure)
    - 금을 가지고 동굴 밖으로 나가는 경우: $+1000$점
    - 구덩이에 빠지거나 Wumpus에게 잡아먹히는 경우: $-1000$점
    - 취한 행동 하나당: $-1$점
    - 화살 사용에: $-10$점
    - 에이전트가 죽거나 동굴 밖으로 나갈 때 게임 종료
- 환경(Environment)
    - $4 \times 4$ 격자형 방
    - 에이전트는 항상 `[1, 1]`에서 동쪽을 바라보고 시작
    - 금과 Wumpus의 위치는 무작위로 선택(시작 지점 제외)
- 구동기(Actuators)
    - 행동: `Forward`(앞으로 이동), `TurnLeft`(좌로 $90^{\circ}$ 회전), `TurnRight`(우로 $90^{\circ}$ 회전)
    - 구덩이나 살아있는 Wumpus가 있는 칸에 진입하면 사망(죽은 Wumpus가 있는 칸은 안전)
    - `Grab`: 에이전트와 같은 칸에 금이 있을 경우 집음.
    - `Shoot`: 에이전트가 향하는 방향으로 화살 발사. Wumpus를 맞추거나 벽에 부딪힐 때까지 직진. 화살은 하나뿐이므로 첫 번째 `Shoot` 행동만 효과
    - `Climb`: `[1, 1]`에서만 동굴 밖으로 나갈 수 있음.
- 감각기(Sensors): 각각 단일 비트 정보를 제공하는 5가지 감각기
    - Wumpus 바로 인접 칸: Stench(악취) 인지
    - 구덩이 바로 인접 칸: Breeze(산들바람) 인지
    - 금이 있는 칸: Glitter(반짝임) 인지
    - 벽에 부딪힐 때: Bump(충돌) 인지
    - Wumpus가 죽을 때: 동굴 어디서든 인지 가능한 비통한 Scream(비명) 방출
    - 지각(percepts): 다섯 개의 기호 목록 형태로 에이전트에게 제공
        - 예: 악취와 산들바람은 있으나, 반짝임, 충돌, 비명이 없으면 `[Stench, Breeze, None, None, None]` 수신

## Wumpus 세계에서의 지식 기반 에이전트
- 비공식적 지식 표현 언어(informal knowledge representation language) 사용: 격자에 기호 기록.
- 에이전트의 초기 지식 베이스: 환경의 규칙 포함
    - `[1, 1]`에 있으며 안전함을 앎. $\Rightarrow$ `A`(Agent), `OK`(Safe)로 표시
- 첫 지각 `[None, None, None, None, None]` $\Rightarrow$ `[1, 2]`와 `[2, 1]`이 안전함을 추론(OK)
- 신중한 에이전트: 안전하다고 알려진(OK) 칸으로만 이동
- `[2, 1]`로 이동 후 `Breeze`("B") 지각 $\Rightarrow$ 인접 칸에 구덩이(Pit) 가능성("P?") 표시
- `[1, 1]`로 돌아가 `[1, 2]`로 이동
- `[1, 2]`에서 `Stench` 지각 $\Rightarrow$ 일련의 추론을 통해 Wumpus가 `[1, 3]`에 있음(`W!`)과 `[2, 2]`가 안전함(OK)을 도출
- 에이전트는 `[2, 3]`으로 이동 $\Rightarrow$ `Glitter` 감지 $\Rightarrow$ 금을 잡고 집으로 돌아가야 함.
- 에이전트가 사용 가능한 정보로부터 결론을 도출하는 모든 경우: 가용한 정보가 정확하다면, 그 결론은 반드시(guaranteed) 정확. $\Rightarrow$ 논리적 추론의 근본적인 속성(fundamental property)

## 논리의 개념(Concepts of Logical Representations)
- 구문(syntax): 표현 언어(representation language)의 문법. 잘 구성된(well formed) 모든 문장을 지정
    - 예: "$x + y = 4$"는 잘 구성된 문장, "$x4y + =$"는 아님.
- 의미론(semantics): 문장의 의미(meaning) 정의
    - 각 가능한 세계(possible world)에 대한 각 문장의 참(truth)을 정의
    - 표준 논리: 모든 문장은 참 또는 거짓(둘 중 하나)
- 모델(model): "가능한 세계" 대신 사용하는 용어
    - 문장 $\alpha$가 모델 $m$에서 참이면, $m$이 $\alpha$를 만족(satisfies)시키거나 $m$이 $\alpha$의 모델이라고 함.
    - $M(\alpha)$: $\alpha$의 모든 모델 집합

## 논리적 수반(Logical Entailment)
- 논리적 수반($\alpha \vDash \beta$): 문장이 다른 문장으로부터 논리적으로 도출됨(follows logically)
    - 공식적 정의: $\alpha \vDash \beta$는 $\alpha$가 참인 모든 모델에서 $\beta$도 참인 경우에만 성립
    - 기호 표현: $\alpha \vDash \beta$ if and only if $M(\alpha) \subseteq M(\beta)$.
- $\alpha \vDash \beta$ 이면, $\alpha$는 $\beta$보다 더 강한 주장(stronger assertion)(더 많은 가능한 세계를 배제함)
    - 예: "$x = 0$"은 "$xy = 0$"을 수반

## Wumpus 세계에 논리적 사고 적용
- `[1, 1]`에서 아무것도 감지 못하고 `[2, 1]`에서 산들바람(Breeze)을 감지한 상황 고려
    - 이 지각(percepts)과 Wumpus 세계 규칙 지식(KB)이 결합됨.
    - 에이전트의 관심사: 인접한 칸(`[1, 2]`, `[2, 2]`, [3, 1])에 구덩이가 있는지 여부
    - 구덩이 여부 3개 칸에 대한 가능한 모델은 $2^3 = 8$개
- KB는 에이전트가 아는 것과 모순되는 모델에서는 거짓
    - 예: `[1, 1]`에 산들바람이 없으므로, `[1, 2]`에 구덩이가 있는 모델에서는 KB가 거짓
    - KB가 참인 모델은 3개 존재(solid line)
- 두 가지 가능한 결론(문장) 고려:
    - $\alpha_1 = $"There is no pit in `[1, 2]`."
    - $\alpha_2 = $"There is no pit in `[2, 2]`."
    - KB가 참인 모든 모델에서 $\alpha_1$도 참 $\Rightarrow$ $KB \vDash \alpha_1$.(`[1, 2]`에 구덩이가 없음을 확신)
    - KB가 참인 일부 모델에서 $\alpha_2$는 거짓 $\Rightarrow$ $KB \not\vDash \alpha_2$.(`[2, 2]`에 구덩이가 없음을 확신할 수 없음.)
- 모델 검사(model checking): 논리적 추론(logical inference)을 수행하는 특정 추론 알고리즘
    - $M(KB) \subseteq M(\alpha)$ 인지 확인하기 위해 모든 가능한 모델을 열거(enumerate)

## 추론의 공식 정의(Formal Definition of Inference)
- 추론 알고리즘 $i$가 KB로부터 $\alpha$를 도출(derive)할 수 있다면, $KB \vdash_i \alpha$로 표기
- 추론 알고리즘의 속성(Properties of an inference algorithm)
    - 건전성(sound, truth-preserving): 오직 수반된(entailed) 문장만을 도출하는 추론 알고리즘
        - KB가 실제 세계에서 참이라면, 건전한 추론 절차로 KB에서 도출된 $\alpha$는 실제 세계에서도 참
    - 완전성(complete): 수반된 모든 문장을 도출할 수 있는 추론 알고리즘
    - 기반 다지기(Grounding): 논리적 추론 과정과 에이전트가 존재하는 실제 환경 사이의 연결
    - KB의 일반 규칙은 일반적으로 학습(learning)이라는 문장 구성 과정에 의해 생성(cf., 지식 공학(knowledge engineering))

## 명제 논리(Propositional logic)
- 문장의 구조(syntax)와 문장의 참이 결정되는 방식(semantics) 정의
- 의미론적 수반(semantic notion of entailment)을 구현하는 단순한 논리적 추론 알고리즘 도출

## 명제 논리의 구문(Syntax of Propositional Logic)
- 명제 기호(Propositional symbol, variable)
- 논리적 연결사(Logical connectives)
    - $\neg$(not)
    - $\land$(and)
    - $\lor$(or)
    - $\Rightarrow$(implies)
    - $\Leftrightarrow$(biconditional)

## 명제 논리의 의미론(Semantics of Propositional Logic)
- 의미론: 특정 모델에 대한 문장의 참을 결정하는 규칙 정의
- 명제 논리에서 모델: 단순히 모든 명제 기호에 대한 참값(`true` 또는 `false`)을 설정
    - $n$개의 기호가 있는 경우 $2^n$개의 가능한 모델
    - 모델은 순전히 수학적 객체(mathematical objects)
- 복합 문장(Complex sentences):
    - $\neg P$는 $m$에서 $P$가 거짓일 때만 참(iff)
    - $P \land Q$는 $m$에서 $P$와 $Q$ 모두 참일 때만 참
    - $P \lor Q$는 $m$에서 $P$ 또는 $Q$ 둘 중 하나가 참일 때만 참
    - $P \Rightarrow Q$는 $m$에서 $P$는 참이고 $Q$는 거짓인 경우를 제외하고 참
    - $P \Leftrightarrow Q$는 $m$에서 $P$와 $Q$가 모두 참이거나 모두 거짓일 때만 참
- 진리표(truth tables): 규칙을 표현 구성 요소의 모든 가능한 참값 할당에 대한 복합 문장의 참값을 지정

## 단순한 지식 베이스(A Simple Knowledge Base)
- Wumpus 세계를 위한 KB(명제 기호 정의):
    - $P_{x,y}$: [x, y]에 구덩이(Pit) 존재
    - $W_{x,y}$: [x, y]에 Wumpus 존재
    - $B_{x,y}$: [x, y]에 산들바람(Breeze) 존재
    - $S_{x,y}$: [x, y]에 악취(Stench) 존재
    - $L_{x,y}$: 에이전트가 위치 [x, y]에 존재
- 각 문장을 $R_i$로 표기:
    - $R_1$: `[1, 1]`에 구덩이가 없음. $\neg P_{1,1}$.
    - $R_2$: 이웃 칸에 구덩이가 있을 때만 칸에 산들바람이 있음(관련 칸만 포함) $B_{1,1} \Leftrightarrow(P_{1,2} \lor P_{2,1})$.
    - $R_3$: $B_{2,1} \Leftrightarrow(P_{1,1} \lor P_{2,2} \lor P_{3,1})$.
        - 위 문장들은 모든 Wumpus 세계에서 참
    - $R_4$: 에이전트가 방문한 처음 두 칸에 대한 산들바람 지각 포함 $\neg B_{1,1}$.
    - $R_5$: $B_{2,1}$.

## 단순한 추론 절차(A Simple Inference Procedure)
- 목표: $KB \vDash \neg P_{1,2}$ 인지 결정(KB가 $\neg P_{1,2}$를 수반하는가?)
- 모델 검사(Model checking):
    - 모델(모든 명제 기호에 대한 참/거짓 할당)을 열거
    - KB가 참인 모든 모델에서 $\neg P_{1,2}$가 참인지 확인
    - 예시의 7개 기호: $B_{1,1}, B_{2,1}, P_{1,1}, P_{1,2}, P_{2,1}, P_{2,2}$ 및 $P_{3,1}$.
    - $2^7 = 128$개의 가능한 모델; 이 중 KB가 참인 모델은 3개
    - 이 3개 모델에서 $\neg P_{1,2}$가 참이므로, `[1, 2]`에 구덩이가 없음을 결론

```
function TT-ENTAILS?(KB, α) returns true or false
  inputs: KB, the knowledge base, a sentence in propositional logic
          α, the query, a sentence in propositional logic

  symbols <- a list of the proposition symbols in KB and α
  return TT-CHECK-ALL(KB, α, symbols, {})


function TT-CHECK-ALL(KB, α, symbols, model) returns true or false
  if EMPTY?(symbols) then
    if PL-TRUE?(KB, model) then return PL-TRUE?(α, model)
    else return true // when KB is false, always return true
  else
    P <- FIRST(symbols)
    rest <- REST(symbols)
    return (TT-CHECK-ALL(KB, α, rest, model ∪ {P = true})
            and
            TT-CHECK-ALL(KB, α, rest, model ∪ {P = false }))
```

> 명제적 함의(propositional entailment)를 결정하기 위한 진리표 열거 알고리즘(truth-table enumeration algorithm)  
> ($TT$는 truth table (진리표)를 의미)

  - `PL-TRUE?`는 어떤 문장(sentence)이 모델(model) 내에서 성립하는 경우 `true`를 반환
  - 변수 model은 심볼(symbol)들의 일부에 대한 할당(assignment)인 부분 모델(partial model)을 나타냄.
  - 키워드 `and`는 의사 코드(pseudocode) 프로그래밍 언어의 중위 함수 심볼(infix function symbol)이며 명제 논리(propositional logic)의 연산자(operator)가 아님. 두 개의 인수를 취하고 `true` 또는 `false`를 반환