# 중급반 6주차 - 위상 정렬

## 위상 정렬 \<Topology Sort\>

### 위상 정렬이란?

위상 정렬(Topology Sort)이란, 방향 비순환 그래프(Directed Acyclic Graph, `DAG`)에서 정점들을 선형으로 정렬하는 알고리즘입니다.

  - **`DAG`**: 정점들이 방향이 있는 간선으로 연결되어 있고, 사이클이 없는(어떤 정점에서 그 정점으로 다시 돌아가는 경로가 없는) 그래프를 의미합니다.
  - **정렬**: 이 그래프에서 어떠한 간선의 방향도 거스르지 않도록($A \to B$ 라면, 정렬 결과에서 $A$는 항상 $B$보다 앞에 위치) 정점들의 순서를 결정하는 것입니다.

### 사용 예시

위상 정렬은 이처럼 어떤 대상들 사이의 **선후관계**가 주어질 때 사용됩니다.

  - 과목들과 그 선수 과목들이 주어질 때
  - 물건을 사야의 크기 비교들이 주어질 때
  - 어떤 사안들의 선후관계를 비교한 결과들이 주어질 때

### 기본 원리 (알고리즘)

1.  **시작 정점 찾기**: 다른 정점에서 거쳐 오는 경로가 존재하지 않는, 즉 **진입 차수(`indegree`)가 0인 정점**을 찾습니다.
      - 진입 차수(`indegree`): 해당 정점으로 들어오는 간선의 개수
2.  **`queue`에 삽입**: 찾은 시작 정점(들)을 `queue`에 삽입합니다.
3.  **정렬 수행 (반복)**:
      - `queue`에서 정점을 하나 꺼냅니다. 이 정점은 정렬 결과에 포함됩니다.
      - 해당 정점에서 간선으로 연결된(해당 정점을 선행 조건으로 갖는) 다음 정점들의 진입 차수를 1씩 감소시킵니다.
      - 만약 진입 차수를 감소시켰을 때 0이 된 정점이 있다면, 그 정점은 새로운 시작 정점이 될 수 있으므로 `queue`에 삽입합니다.
4.  `queue`가 빌 때까지 3번 과정을 반복합니다. 정점들을 `queue`에서 꺼낸 순서가 곧 위상 정렬의 순서가 됩니다.

<!-- end list -->

  - **시간 복잡도**: 모든 정점과 간선을 한 번씩 방문하므로 $O(V + E)$ (V: 정점 수, E: 간선 수)가 됩니다.
  - **사이클 판별**: 만약 위상 정렬을 모두 수행했는데도 정렬 결과에 포함되지 않은 정점(방문하지 않은 정점)이 있다면, 이는 그래프 내에 사이클이 존재한다는 것을 의미합니다.

### 간단한 예시

  - **Queue: [A]**
      - `A`를 처리. `A`와 연결된 `B`, `C`의 `indegree` 1 감소.
      - `Indegree(B)=0`, `Indegree(C)=0`이 됨. `B`와 `C`를 `queue`에 삽입.
  - **Queue: [B, C]**
      - `B`를 처리. `B`와 연결된 `D`의 `indegree` 1 감소.
      - `Indegree(D)=1` (아직 `C`가 남음).
  - **Queue: [C, D]**
      - `C`를 처리. `C`와 연결된 `D`의 `indegree` 1 감소.
      - `Indegree(D)=0`이 됨. `D`를 `queue`에 삽입.
  - **Queue: [D]**
      - `D`를 처리. `D`와 연결된 `E`의 `indegree` 1 감소.
      - `Indegree(E)=0`이 됨. `E`를 `queue`에 삽입.
  - **Queue: [E]**
      - `E`를 처리.
  - **Result**: `A B C D E` (또는 `A C B D E`)

## 예제 문제: 줄 세우기 (BOJ 2252)

### 출력 설명

  - 학생 수 $N$과 키를 비교한 횟수 $M$이 주어진다.
  - 다음 $M$개의 줄에는 키를 비교한 두 학생의 번호 $A, B$가 주어진다.
  - $A$ $B$ 형태로 주어지고, 이는 $A$가 $B$보다 "반드시" 앞에 서야 함을 의미한다.

### 제한 조건

  - $1 \le N \le 32,000$
  - $1 \le M \le 100,000$

### 1\. 입력 받기

  - $A$가 $B$보다 먼저 오는 경우를 $A \to B$ 간선으로 저장합니다.
  - 이때 $B$의 진입 차수를 1 증가시킵니다.

<!-- end list -->

```cpp
#include <vector>
#include <queue>
#include <iostream>

using namespace std;

int main() {
  int N, M;
  cin >> N >> M;
  vector<int> indegree(N + 1, 0);
  vector<vector<int>> graph(N + 1);

  for (int i = 0; i < M; i++) {
    int A, B;
    cin >> A >> B;
    graph[A].push_back(B);
    indegree[B]++;
  }

  // ...
}
```

### 2\. 큐 준비하기

  - 시작 정점(들), 즉 진입 차수가 0인 정점들을 `queue`에 넣어줍니다.

<!-- end list -->

```cpp
  // ...

  int main() {
    // ... (input part)

    queue<int> q;
    for (int i = 1; i <= N; i++) {
      if (indegree[i] == 0) {
        q.push(i);
      }
    }

    // ...
  }
```

### 3\. 정렬 작업하기

  - `queue`에서 정점을 꺼내 `sorted` `vector`에 추가합니다.
  - 해당 정점(`x`)에서 갈 수 있는 다음 정점(`i`)들의 진입 차수를 1 감소시킵니다.
  - 진입 차수가 0이 된 정점(`i`)은 새로 `queue`에 넣습니다.

<!-- end list -->

```cpp
  // ...

  int main() {
    // ... (input and queue init)

    vector<int> sorted;
    while (!q.empty()) {
      int x = q.front();
      q.pop();
      sorted.push_back(x);

      for (int i : graph[x]) {
        indegree[i]--;
        if (indegree[i] == 0) {
          q.push(i);
        }
      }
    }
  }
```

### 4\. 정렬 출력하기

  - 정렬된 순서가 저장된 `vector`를 그대로 출력합니다.

<!-- end list -->

```cpp
  // ...

  int main() {
    // ... (input, queue init, sorting)

    for (int i : sorted) {
      cout << i << " ";
    }
  }
```

## 예제 문제: ACM Craft (BOJ 1005)

### 문제 설명

  - 테스트 케이스의 수 $T$가 주어진다.
  - 건물의 수 $N$과 건물 순서 규칙의 총 개수 $K$가 주어진다.
  - 건물들마다 건설하는 시간 $D_i$가 주어진다. ($1 \le i \le N$)
  - 건설 순서 규칙이 $K$개 주어진다.
  - $X$ $Y$ 형태로 주어지며 $X$를 지어야 $Y$를 지을 수 있음을 나타낸다.
  - 최종적으로 건설해야 하는 건물의 번호 $W$가 주어진다.
  - $W$를 짓기까지의 걸리는 최소 시간을 출력한다.

### 제한 조건

  - $1 \le N \le 1,000$
  - $1 \le K \le 100,000$
  - $1 \le D_i \le 100,000$
  - $T \le 100$

### 풀이 핵심

  - 이 문제는 단순한 순서가 아닌, **누적 시간**을 계산해야 합니다.
  - 위상 정렬을 하는 과정에서, 특정 건물 $Y$를 짓기 위해 먼저 지어져야 하는 건물들($X_1, X_2, \dots$)이 필요합니다.
  - $Y$를 짓기 시작할 수 있는 시간은 **선행 건물($X_1, X_2, \dots$)들이 모두 완성되는 시간 중 가장 늦은 시간**입니다.
  - `ans[i]` : $i$번 건물을 짓기 *직전*까지 걸리는(선행 건물들이 모두 완성되는) 누적 시간
  - $i$번 건물을 완성하는 데 걸리는 총 시간 = `ans[i]` + $D[i]$ ( $i$번 건물 자체 건설 시간)
  - `queue`에서 $x$를 꺼낼 때, $x$의 다음 건물 $i$에 대해 `ans[i]`를 갱신합니다.
      - `ans[i] = max(ans[i], ans[x] + D[x])`
      - $i$의 여러 선행 건물들($x$) 중, 가장 오래 걸리는 시간을 `ans[i]`에 저장합니다.

### 구현

  - 테스트 케이스가 $T$개 있으므로 `solve` 함수를 만들어 $T$번 실행합니다.

<!-- end list -->

```cpp
#include <vector>
#include <queue>
#include <iostream>
#include <algorithm> // max 함수 사용

using namespace std;

void solve() {
  int N, K;
  cin >> N >> K;
  vector<int> D(N + 1);
  for (int i = 1; i <= N; i++) {
    cin >> D[i];
  }

  vector<int> indegree(N + 1, 0);
  vector<vector<int>> graph(N + 1);
  for (int i = 0; i < K; i++) {
    int X, Y;
    cin >> X >> Y;
    graph[X].push_back(Y);
    indegree[Y]++;
  }

  int W;
  cin >> W;

  // ... (정렬 작업)
  queue<int> q;
  vector<int> ans(N + 1, 0); // 누적 시간을 저장할 배열

  for (int i = 1; i <= N; i++) {
    if (indegree[i] == 0) {
      q.push(i);
    }
  }

  while (!q.empty()) {
    int x = q.front();
    q.pop();

    for (int i : graph[x]) {
      // i의 선행 건물(x)이 완성되는 시간(ans[x] + D[x])과
      // i의 다른 선행 건물들이 완성되는 시간(기존 ans[i]) 중
      // 더 오래 걸리는 시간으로 ans[i]를 갱신
      ans[i] = max(ans[i], ans[x] + D[x]);
      indegree[i]--;
      if (indegree[i] == 0) {
        q.push(i);
      }
    }
  }

  // W를 짓기까지 걸리는 누적 시간(ans[W]) + W 자체 건설 시간(D[W])
  cout << ans[W] + D[W] << '\n';
}

int main() {
  int T;
  cin >> T;
  for (int i = 0; i < T; i++) {
    solve();
  }
}
```

## 필수 문제

### 3\. 음악 프로그램 (BOJ 2623)

  - PD가 여러 명, 가수들의 출연 순서를 정하는데, PD마다 자신이 생각하는 순서를 정한다.
  - 모든 PD의 순서를 만족하는 최종 순서를 정하시오. (사이클 발생 시 0 출력)

### 2\. 문제집 (BOJ 1766)

  - $N$개의 문제, 1번이 가장 쉽고, $N$번이 가장 어렵다.
  - "$A$번 문제는 $B$번 문제보다 먼저 푸는 것이 좋다"는 정보가 $M$개 있다.
  - 다음 두 조건을 만족하며 $N$개의 문제를 모두 풀어야 한다.
    1.  $N$개의 문제를 모두 푼다.
    2.  $A$는 $B$보다 반드시 먼저 풀어야 한다. (위상 정렬 조건)
    3.  가능하면 쉬운 문제부터 푼다. (위상 정렬 시 `queue` 대신 **`priority_queue` (min-heap)** 사용)