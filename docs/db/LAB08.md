# B+tree

## B+tree Operation : Deletion

- Function `delete(value K, pointer P)`
    - $(K,~P)$를 포함하는 leaf node $L$을 탐색
    - `delete_entry(L, K, P)` 호출

```pseudocode
function delete(value K, pointer P)
    find the leaf node L that contains (K, P)
    delete_entry(L, K, P)
```

- Function `delete_entry(node N, value K, pointer P)`
    - $N$에서 $(K,~P)$ 제거
    - If ($N$이 root이고 $N$이 하나의 child만 가질 경우)
        - $N$의 child를 tree의 새 root로 설정하고 $N$을 삭제
    - Else if ($N$이 너무 적은 value/pointer를 가질 경우)
        - $N'$을 `parent(N)`의 이전 또는 다음 child로 설정
        - $K'$을 `parent(N)`에서 $N$과 $N'$ pointer 사이의 value로 설정
        - If ($N$과 $N'$의 entries가 단일 node에 맞을 수 있는 경우) /\* Coalesce nodes \*/
            - ...
        - Else /\* Redistribution: borrow an entry from N' \*/
            - ...

```pseudocode
function delete_entry(node N, value K, pointer P)
    remove (K, P) from N
    if (N is the root and N has only one remaining child)
        then make the child of N the new root of the tree and delete N
    else if (N has too few values/pointers) then begin
        Let N' be the previous or next child of parent(N)
        Let K' be the value between pointers N and N' in parent(N)
```

- $N$에서 entry $(K,~P)$를 제거
- $N$이 entry 제거 후 underflow (너무 적은 수의 value/pointer) 상태인지 확인
- Underflow 상태라면, `parent(N)`에서 $N$의 형제 node `N'` (이전 또는 다음)와 그 사이의 key $K'$를 찾음

```pseudocode
        if (entries in N and N' can fit in a single node)
            then begin /* Coalesce nodes */
                if (N is a predecessor of N' ) then swap_variables(N, N')
                if (N is not a leaf)
                    then append K' and all pointers and values in N to N'
                else append all (K_i, P_i) pairs in N to N' ; set N'.P_n = N.P_n
                delete_entry(parent(N), K', N); delete node N
            end
```

- `delete_entry`의 `Coalesce nodes` (병합) 과정
    - `if (N is a predecessor of N') ...`: 제일 왼쪽 node일 경우 오른쪽 형제 node와 `swap`
    - `if (N is not a leaf) ...`: 형제 node에 이정표가 되는 $K'$ 값을 삽입하고 자신의 key 개수만큼 형제 node에 key값과 pointer를 삽입. 옮겨진 pointer들이 참조하는 node들의 부모 node는 모두 형제 node를 가리켜야 함
    - `else (N is a leaf) ...`: 형제 node에 $K'$ 값 삽입 과정을 생략하고, 자신의 key 개수만큼 형제 node에 key값과 pointer를 삽입한 다음 마지막 pointer가 자신이 가리키던 형제 node를 가리키도록 함

<!-- end list -->

```pseudocode
        else begin /* Redistribution: borrow an entry from N' */
            if (N' is a predecessor of N) then begin
                if (N is a nonleaf node) then begin
                    let m be such that N'.P_m is the last pointer in N'
                    remove (N'.K_{m-1},~N'.P_m ) from N'
                    insert (N'.P_m,~K' ) as the first pointer and value in N,
                         by shifting other pointers and values right
                    replace K' in parent(N) by N'.K_{m-1}
                end
                else begin
                    let m be such that (N'.P_m,~N'.K_m ) is the last pointer/value pair in N'
                    remove (N'.P_m,~N'.K_m) from N'
                    insert (N'.P_m,~N'.K_m ) as the first pointer and value in N,
                         by shifting other pointers and values right
                    replace K' in parent(N) by N'.K_m
                end
            end
            else ... symmetric to the then case ...
        end
    end
```

- `delete_entry`의 Redistribution (재분배) 과정
    - `if (N' is a predecessor of N)` 경우 (왼쪽 형제 node `N'`에서 빌려오는 경우)
        - `if (N is a nonleaf node) ...`: $N$ node의 key값과 pointer 배열 값을 한 칸씩 뒤로 미룸. $N$의 `pointer[0]`이 왼쪽 형제 node에서 제일 오른쪽에 위치한 pointer가 가리키던 자식 node를 가리키도록 하고 부모 node 재설정. $N$의 가장 왼쪽에 위치한 key값은 $K'$ 값으로 새로운 이정표 역할. $N$의 부모 node 이정표 값은 형제 node에서 제일 오른쪽에 위치한 key값이 이정표 역할
        - `else (N is a leaf node) ...`: $N$ node의 key값과 pointer 배열 값을 한 칸씩 뒤로 미룸. $N$의 왼쪽 형제 node에서 제일 오른쪽에 위치한 key값과 pointer 배열 값을 $N$의 제일 왼쪽 위치로 이동시키고 가리키는 부모 node 재설정

## (질문) 만약 node가 이미 제일 왼쪽인 상태에서 Key Rotation을 해야하는 상황이라면?

- `N`이 가장 왼쪽 node인 경우, "previous" (왼쪽) 형제 node가 없음

- `delete_entry` logic의 `Let N' be the previous or next child...` 부분에 따라, `N'`은 "next" (오른쪽) 형제 node로 설정됨

- 이 상황은 Redistribution (재분배) logic의 `else ... symmetric to the then case ...` 부분에 해당함

- 즉, 왼쪽 형제 node (`N'`)에서 마지막 entry를 가져오는 `if (N' is a predecessor of N)` case 대신, 오른쪽 형제 node (`N'`)에서 *첫 번째* entry를 가져오는 (symmetric) logic이 수행됨

- Non-leaf node의 경우:

    - `parent(N)`의 $K'$ 값을 `N`의 *마지막* key로 가져옴
    - `N'` (오른쪽 형제)의 *첫 번째* pointer (`N'.P_0`)를 `N`의 *마지막* pointer로 가져옴
    - `N'`의 *첫 번째* key (`N'.K_0`)를 `parent(N)`의 $K'$ 자리로 이동시킴
    - `N'`에서 (`N'.K_0`, `N'.P_0`)를 제거

- Leaf node의 경우:

    - `N'` (오른쪽 형제)의 *첫 번째* entry (`N'.K_0`, `N'.P_0`)를 `N`의 *마지막* entry로 가져옴
    - `N'`에서 (`N'.K_0`, `N'.P_0`)를 제거
    - `parent(N)`의 $K'$ 값을 `N'`의 *새로운 첫 번째* key (기존 `N'.K_1`) 값으로 update함