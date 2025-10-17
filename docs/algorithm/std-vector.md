# C++ `std::vector` 사용법 정리

<p align="center">
  <img src="https://static.wikitide.net/greatcharacterswiki/8/8f/Screenshot_2022-09-13_203128.png" width="120" alt="vector" />
</p>

## 1. 기본 선언 및 초기화
```cpp
#include <vector>
#include <iostream>
using namespace std;

int main() {
    vector<int> v1;                  // 빈 벡터
    vector<int> v2(5);               // 크기 5, 값은 0으로 초기화
    vector<int> v3(5, 10);           // 크기 5, 값은 10으로 초기화
    vector<int> v4 = {1, 2, 3, 4, 5}; // 초기화 리스트 사용
}
```

## 2. 원소 접근
```cpp
v4[0];       // 인덱스 접근 (범위 체크 X)
v4.at(2);    // 인덱스 접근 (범위 체크 O, 예외 발생 가능)
v4.front();  // 첫 번째 원소
v4.back();   // 마지막 원소
```

## 3. 삽입 및 삭제
```cpp
vector<int> v = {1, 2, 3};

v.push_back(4);        // 맨 뒤에 삽입 -> {1, 2, 3, 4}
v.pop_back();          // 맨 뒤 원소 삭제 -> {1, 2, 3}

v.insert(v.begin(), 0);         // 맨 앞에 삽입 -> {0, 1, 2, 3}
v.insert(v.begin() + 2, 99);    // 인덱스 2에 삽입 -> {0, 1, 99, 2, 3}

v.erase(v.begin());             // 첫 번째 원소 삭제 -> {1, 99, 2, 3}
v.erase(v.begin() + 1, v.end()); // 인덱스 1부터 끝까지 삭제 -> {1}
```

## 4. 크기 및 용량
```cpp
v.size();       // 원소 개수
v.capacity();   // 현재 할당된 공간 크기
v.empty();      // 비었는지 확인
v.resize(10);   // 크기 조정 (부족분은 0으로 채움)
v.reserve(20);  // 용량을 미리 확보 (재할당 줄임)
v.shrink_to_fit(); // capacity를 size에 맞게 줄임
```

## 5. 반복자(iterator) 사용
```cpp
for (auto it = v.begin(); it != v.end(); ++it)
    cout << *it << " ";

for (auto rit = v.rbegin(); rit != v.rend(); ++rit)
    cout << *rit << " "; // 역방향 순회
```

## 6. 범위 기반 `for`문
```cpp
for (int x : v)
    cout << x << " ";

for (auto &x : v) // 참조로 접근하여 수정 가능
    x *= 2;
```

## 7. 기타 유용한 함수
```cpp
v.clear();            // 모든 원소 제거
v.swap(v2);           // 다른 벡터와 교환
std::sort(v.begin(), v.end()); // 정렬
std::reverse(v.begin(), v.end()); // 뒤집기
std::find(v.begin(), v.end(), 3); // 특정 값 탐색
```

## 8. 2차원 벡터
```cpp
vector<vector<int>> matrix(3, vector<int>(4, 0));
// 3x4 행렬, 모든 값 0으로 초기화
```

> 이 문법들은 `std::vector`의 알고리즘 문제 풀이에서 가장 자주 쓰이는 핵심 사용법입니다.
