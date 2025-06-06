# Python 시간 초과 방지를 위한 팁

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" width="180" alt="Bitcoin logo" />
</p>

필자는 최근 교내 알고리즘 대회에 참가하여 평상시 가장 익숙한 언어인 **Python**으로 문제를 풀었다.  
하지만 몇몇 문제에서 끝내 시간 초과(Time Limit Exceeded)를 해결하지 못해 아쉬운 결과를 얻었다.  
대회 규정상 외부 사이트 검색이나 LLM 사용이 일절 금지되어 있었기 때문에, 평소 익숙하지 않았던 입출력 최적화나 자료구조 선택에 대한 기본기를 떠올릴 수 없었다.  
해당 경험을 계기로, Python으로 알고리즘 문제를 풀 때 실수하기 쉬운 **시간 초과의 원인과 이를 방지하기 위한 기본적인 최적화 기법들**을 정리해두는 것이 필요하다고 느꼈다.  
이 글은 필자가 추후에 있을 대회나 코테를 대비하기 위해 정리한 메모이며, Python 사용자에게 도움이 될 수 있도록 간결하고 실용적인 내용 위주로 구성하였다.

---

시간 제한이 1초 또는 2초인 문제를 풀 때는 단순한 구현보다는 **입출력 속도**, **데이터 구조 선택**, **불필요한 연산 제거** 등의 최적화 요소가 중요하다.  
아래는 이를 개선할 수 있는 핵심 기법들과 그 이유를 정리한 것이다.

## 입력 속도 최적화: `input()` vs `sys.stdin.readline()`

Python으로 알고리즘 문제를 풀 때 시간 초과가 발생하는 가장 흔한 원인 중 하나는 **입력 속도가 느리다는 점**이다.  
특히 입력 데이터가 많은 문제에서는 `input()`을 사용하는 것만으로도 **시간 초과**가 발생할 수 있다.

::: tip
Python의 `input()` 함수는 내부적으로 여러 처리 과정을 거치기 때문에 상대적으로 느리다.  
많은 양의 입력을 빠르게 처리해야 할 때는 `sys.stdin.readline()`을 사용하는 것이 효율적이다.
:::

```python
import sys
n = int(sys.stdin.readline())
```

> **실행 시간 비교 (단일 입력 기준)**  
> - `input()` → 약 100μs  
> - `sys.stdin.readline()` → 약 15~30μs  
> 3배에서 최대 **6배** 차이

## 배열 삽입 최적화: `append()` vs Index 접근

```python
# 느린 방식: append()
arr = []
for i in range(n):
    arr.append(data[i])

# 빠른 방식: Index 접근
arr = [0] * n
for i in range(n):
    arr[i] = data[i]
```

> **이유**  
> `append()`는 내부적으로 동적 배열 크기 재조정이 발생할 수 있고, Cache miss도 유발됨

## 출력 최적화: `print()` 반복 vs 문자열 누적 후 일괄 출력

```python
# 느린 방식
for x in arr:
    print(x)

# 빠른 방식
print('\n'.join(map(str, arr)))
```

> **이유**  
> `print()`는 호출될 때마다 I/O 작업이 발생하므로 반복 호출 시 overhead가 큼

## 재귀 제한 조정

::: tip
Python의 기본 재귀 깊이는 `1,000`으로 제한되어 있어, DFS나 분할정복 등의 알고리즘에서 문제가 발생할 수 있다.  
이럴 경우에 재귀 깊이를 늘려줄 수 있다.
:::

```python
import sys
sys.setrecursionlimit(10**6)
```

> **주의**  
> 재귀 깊이를 과도하게 설정할 경우 메모리 부족으로 인해 프로그램이 **비정상 종료**될 수 있음

## Queue 구조 최적화: `list` vs `deque`

```python
# 비효율적 방식
queue = []
queue.append(1)
queue.pop(0)  # O(n)

# 효율적 방식
from collections import deque
queue = deque()
queue.append(1)
queue.popleft()  # O(1)
```

> **이유**  
> list에서 `pop(0)`을 하면 모든 요소를 한 칸씩 당겨야 하므로 $O(n)$이 소요  
> 반면 `deque`는 양방향 큐이기 때문에 `append`, `popleft`가 모두 $O(1)$로 동작

## BOJ 시간 제한 기준과 허용 시간복잡도

| 시간 제한 | 허용되는 대략적 연산 수 |
|-----------|--------------------------|
| 1초       | $10^8$ 연산 이하         |
| 2초       | $2 \cdot 10^8$ 연산 이하 |

따라서 알고리즘의 시간복잡도가 다음 조건을 만족하는지 반드시 확인해야 한다.  

- 입력 크기 $n \le 10^5$일 경우 → $O(n \log n)$ 이하가 적절
- 입력 크기 $n \le 10^3$일 경우 → $O(n^2)$까지 가능

## 요약

| 최적화 항목     | 개선 방법                | 이유 |
|----------------|-------------------------|------|
| 입력 처리       | `sys.stdin.readline()` | 빠른 처리 속도 |
| 배열 저장       | Index 접근              | 메모리 접근 패턴 개선 |
| 반복 출력       | 문자열 누적 후 일괄 출력 | I/O 비용 절감 |
| 재귀 사용       | `sys.setrecursionlimit()` | 기본 제한 초과 방지 |
| 큐 처리         | `collections.deque`     | `pop(0)`의 비효율 제거 |

---

시간 초과는 단순히 "더 빠르게 짜야 한다"는 문제만이 아니다.  
**Python이라는 언어의 특성**, **문제 환경의 제약**, **시간복잡도의 현실적인 한계**를 모두 이해하고,  
그에 맞는 **기초적인 최적화 습관**을 몸에 익히는 것이 무엇보다 중요할 것이다.