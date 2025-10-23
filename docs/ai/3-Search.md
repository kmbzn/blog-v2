# 3. Search (2)

## Uninformed Search Algorithms (비정보 탐색 알고리즘)
- 문제 관련 지식(problem-specific knowledge)을 사용하지 않는 탐색 전략
- 목표 상태(goal state)에 얼마나 가까운지에 대한 단서(clue)가 없음.
- 예:
  - Depth-First Search (DFS, 깊이 우선 탐색)
  - Breadth-First Search (BFS, 너비 우선 탐색)

## Depth-First Search Algorithm (깊이 우선 탐색 알고리즘)
- 프론티어(frontier)에서 항상 가장 깊은 노드(deepest node)를 확장(expand)하는 탐색 알고리즘
- 관련 자료 구조: Stack (Last-in, First-out (LIFO))

## Breadth-First Search Algorithm (너비 우선 탐색 알고리즘)
- 프론티어에서 항상 가장 얕은 노드(shallowest node)를 확장하는 탐색 알고리즘
- 관련 자료 구조: Queue (First-in, First-out (FIFO))

## Informed Search Strategies (정보 기반 탐색 전략)
- Informed Search (정보 기반 탐색)
  - 비정보 전략(uninformed strategy)보다 더 효율적으로 해답을 찾기 위해 문제 관련 지식(problem-specific knoweldge)을 사용하는 탐색 전략
  - 목표의 위치에 대한 도메인 특화 힌트(domain-specific hints)를 사용.
- 힌트는 heuristic function (휴리스틱 함수), $h(n)$의 형태로 제공.
  - 경로 찾기 문제(route-finding problems)에서, 현재 상태에서 목표까지의 거리를 지도상의 직선 거리(straight-line distance)로 추정 가능
  - $h(n)$: 노드 $n$에 있는 상태에서 목표 상태(goal state)까지의 가장 저렴한 경로(cheapest path)에 대한 예상 비용(estimated cost)

## Greedy Best-First Search (탐욕스러운 최상 우선 탐색)
- 휴리스틱 함수 $h(n)$에 의해 추정된 대로 목표에 가깝다고 예상되는 노드(즉, $h(n)$ 값이 가장 낮은 노드)를 확장하는 탐색 알고리즘
- 예: 경로 찾기 문제: $h(n)$ = straight line distance (직선 거리) to the goal (목표)

## A* Search (에이 스타 탐색)
- $g(n) + h(n)$의 값이 가장 낮은 노드를 확장하는 탐색 알고리즘
  - $g(n)$: 초기 상태(initial state)에서 노드 $n$까지의 경로 비용(path cost)
  - $h(n)$: $n$에서 목표 상태(goal state)까지의 최단 경로(shortest path)에 대한 예상 비용(estimated cost)

## A* Search의 최적성 (Optimality of A* Search)
- $A^*$ (tree) search (트리 탐색)은 $h(n)$이 admissible (허용 가능한) 할 경우 비용 최적(cost-optimal) 가능
- Admissible heuristic (허용 가능한 휴리스틱): 목표에 도달하는 비용을 절대 과대평가하지 않는 휴리스틱
  - 따라서, 허용 가능한 휴리스틱은 optimistic (낙관적)
  - 공식적으로, $h^*(n)$을 $n$에서 가장 가까운 목표까지의 최적 경로의 비용이라고 할 때,
  $$h(n) \le h^*(n)$$
  가 성립함.

## Adversarial Search Problems (적대적 탐색 문제)
- Competitive environments (경쟁적 환경)
  - 둘 이상의 에이전트(agents)가 상충되는 목표(conflicting goals)를 가지며, 이는 adversarial search problems (적대적 탐색 문제)을 야기
- Game (게임)에 초점을 맞춤.
  - 틱택토, 체스, 바둑, 포커 등
  - AI 연구자들에게는 이러한 게임의 단순화된 특성이 장점
  - adversarial game-tree search (적대적 게임 트리 탐색) 기법으로 적대적 에이전트를 명시적으로 모델링

## Two-Player Zero-Sum Games (2인 제로섬 게임)
- AI 내에서 가장 일반적으로 연구되는 게임(예: 체스, 바둑)은
    - deterministic (결정론적)
    - two-player (2인)
    - turn-taking (차례 교환식)
    - perfect information (완벽 정보)
    - zero-sum games (제로섬 게임)
  - 'Perfect information'은 'fully observable (완전 관찰 가능)'과 동의어
  - 'Zero-sum'은 한 플레이어에게 좋은 것이 다른 플레이어에게는 그만큼 나쁘다는 의미: $\text{win-win}$ (상생)$)$ 결과가 없음.
  - 용어: $\text{move}$ (수)는 $\text{action}$ (행동)의 동의어, $\text{position}$ (위치)은 $\text{state}$ (상태)의 동의어
- Specification (정의)
  - 두 플레이어를 $\text{MAX}$와 $\text{MIN}$으로 지칭
  - $\text{MAX}$가 먼저 이동하고, 게임이 끝날 때까지 플레이어들이 번갈아 가며 수를 둠.
  - 게임이 끝나면 승리한 플레이어에게 점수가 부여되고 패자에게는 벌칙 부여
- Formal Definition (공식적 정의): 다음 요소들로 게임을 정의 가능
  - $S_{0}$: $\text{initial state}$ (초기 상태)
  - $\text{TO-MOVE}(s)$ 또는 $\text{PLAYER}(s)$: 상태 $s$에서 차례인 플레이어
  - $\text{ACTIONS}(s)$: 상태 $s$에서 가능한 합법적인 수(legal moves)의 집합
  - $\text{RESULT}(s, a)$: $\text{transition model}$ (전이 모델), 상태 $s$에서 행동 $a$를 취한 결과 상태를 정의
  - $\text{IS-TERMINAL}(s)$ 또는 $\text{TERMINAL}(s)$: $\text{terminal test}$ (종료 테스트), 게임이 끝났을 때 $\text{true}$(참), 그렇지 않으면 $\text{false}$(거짓). 게임이 종료된 상태를 $\text{terminal states}$ (종료 상태)라고 함.
  - $\text{UTILITY}(s, p)$ 또는 $\text{UTILITY}(s)$: $\text{utility function}$ (효용 함수), 게임이 종료 상태 $s$에서 끝날 때 플레이어 $p$에 대한 최종 숫자 값(final numeric value)을 정의

## Search Tree and Game Tree (탐색 트리와 게임 트리)
- 초기 상태, $\text{ACTIONS}$ 함수, $\text{RESULT}$ 함수는 state space graph (상태 공간 그래프)를 정의
  - 정점(vertices)이 상태이고, 모서리(edges)가 수이며, 하나의 상태에 여러 경로로 도달 가능
  - 그래프 위에 $\text{search tree}$ (탐색 트리)를 겹쳐서 어떤 수를 둘지 결정 가능
- Complete game tree (완전 게임 트리): 모든 수의 순서(sequence of moves)를 따라 종료 상태까지 이어지는 탐색 트리
  - 틱택토의 게임 트리는 비교적 작음 (fewer than $9!$ = $362,880$ $)
  - 체스의 경우 $10^{40}$ nodes(노드)를 초과하여, game tree는 물리적 세계에서 **실현 불가능한 이론적 구성물**로 간주

## Minimax Value (미니맥스 값)
- 게임 트리(game tree)가 주어지면, 트리의 각 상태에 대한 minimax value (미니맥스 값), $\text{MINIMAX}(s)$를 계산하여 최적 전략(optimal strategy)을 결정 가능
- Minimax value는 두 플레이어 모두 거기서부터 게임 끝까지 최적으로 플레이한다고 가정할 때, 해당 상태에 있을 때의 효용(utility)
- 종료 상태의 미니맥스 값은 단순히 그 $\text{utility}$(효용)
- 비종료 상태(non-terminal state)에서, $\text{MAX}$는 $\text{MAX}$의 차례일 때 최대 값(maximum value)을 가진 상태로 이동하는 것을 선호하고, $\text{MIN}$은 최소 값(minimum value)을 가진 상태를 선호
- 따라서, $\text{MINIMAX}(s)$:
$$\text{MINIMAX}(s) = \begin{cases} \text{UTILITY}(s) & \text{if } \text{TERMINAL}(s) \\ \max_{a \in \text{ACTIONS}(s)} \text{MINIMAX}(\text{RESULT}(s, a)) & \text{if } \text{PLAYER}(s) = \text{MAX} \\ \min_{a \in \text{ACTIONS}(s)} \text{MINIMAX}(\text{RESULT}(s, a)) & \text{if } \text{PLAYER}(s) = \text{MIN} \end{cases}$$

## Minimax Search Algorithm (미니맥스 탐색 알고리즘)
- 모든 행동(actions)을 시도하고 결과 상태(resulting state)가 가장 높은 $\text{MINIMAX}$ 값(value)을 갖는 행동을 선택함으로써 $\text{MAX}$의 best move (최선의 수)를 찾음.

## Alpha-Beta Pruning (알파-베타 가지치기)
- 일반적으로 게임 상태의 수는 트리의 깊이에 따라 지수적(exponential)으로 증가
- 결과에 영향을 미치지 않는 트리의 많은 부분을 가지치기(pruning)하여 모든 상태를 검토하지 않고도 올바른 minimax decision(미니맥스 결정)을 계산하여 탐색을 줄여야 함.
- 이 기술을 **alpha–beta pruning** (알파-베타 가지치기)이라고 함.
- General principle (일반 원리)
  - 트리의 어딘가에 있는 노드 $n$을 고려, Player(플레이어)가 $n$으로 이동하는 선택권이 있다고 가정
  - 만약 Player가 같은 레벨($m'$)이나 트리의 상위 레벨($m$)에서 더 나은 선택을 가지고 있다면, Player는 $n$으로 절대 이동하지 않을 것
  - $n$에 대해 이 결론에 도달할 만큼 충분히 알게 되면 (descendants(후손) 일부를 검토하여), $n$을 가지치기(prune) 가능
- Alpha-beta pruning은 두 개의 추가 매개변수 $\alpha$와 $\beta$에서 이름을 따옴.
  - $\alpha$: 현재 경로를 따라 나타나는 $\text{MAX}$의 최댓값(best value)
  - $\beta$: 현재 경로를 따라 나타나는 $\text{MIN}$의 최솟값(best value)
- Algorithm (알고리즘)
  - Alpha-beta search는 진행하면서 $\alpha$와 $\beta$의 값을 업데이트하고, 현재 노드의 값이 $\text{MAX}$ 또는 $\text{MIN}$에 대해 각각 현재 $\alpha$ 또는 $\beta$ 값보다 나쁘다는 것이 알려지자마자 나머지 브랜치(branches)를 가지치기(prune) 가능