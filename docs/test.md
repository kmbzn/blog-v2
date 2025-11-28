## Heading Level 2 - 한국어 제목

# Heading Level 1

### Heading Level 3 - 영어와 日本語 조합

#### Heading Level 4 - 中文 포함标题

##### Heading Level 5 - 混合語

###### Heading Level 6 - 끝머리 테스트

일반 text

> 이것은 인용문입니다。
>> 중첩된 引用也可以正常显示。
>>> Markdown parserが適切に 처리해야 합니다。

이 문장에는 **굵은 텍스트**, *イタリック*, 그리고 ***bold & italic 結合***을 포함하고 있습니다.
또한 `inline code` 테스트 및 수식 $E = mc^2$도 함께 포함되어 있습니다。

## 목록 테스트 - List Test
- 한국어 항목
  - English Subitem
    - 中文子项目
- 日本語の項目

1. First item
2. 第二项
   1. 하위 항목
   2. Sub-sub item

## 표 테스트 - Table Test

| 이름(Name) | 年龄(Age) | 직업(Occupation)
| - | - | -
| 김병준 | 25歳 | Developer（开发者）
| 山田太郎 | 31岁 | デザイナー（디자이너）
| 李小龙 | 28세 | 무직（無職)

## 코드블록 테스트 - Code Blocks

### 일반 코드 (No language)

```
print("こんにちは, 世界!")
```

### VuePress 스타일 코드 그룹

:::code-tabs
@tab Python
```python
def add(x, y):
    return x + y
```
@tab JavaScript
```javascript
function greet(name) {
  console.log("Hello, " + name);
}
```
@tab C
```c
#include <stdio.h>
int main() {
    printf("你好，世界！\n");
    return 0;
}
```
:::

## 수식 테스트 - Math Test

### 인라인 수식
日本語で：インライン数式は $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ のように記述されます。

### 블록 수식（Block Formula）

$$
\begin{aligned}
f(x) &= ax^2 + bx + c \\\\
\int_0^1 x^2~dx &= \frac{1}{3}
\end{aligned}
$$

または：

$$
\mathbf{F} = G \frac{m_1 m_2}{r^2}
$$

## 링크 및 이미지 - Links & Images

[OpenAI 공식 사이트](https://www.openai.com)
[百度](https://www.baidu.com)

![샘플 이미지](https://media.istockphoto.com/id/520700958/ko/%EC%82%AC%EC%A7%84/%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4-%EA%BD%83-%EB%B0%B0%EA%B2%BD%EA%B8%B0%EC%88%A0.jpg?s=612x612&w=0&k=20&c=gJx5-O9U1qXKZqKwv4KunrBae7RDNRcdse1nOdSk_0w=)

## VuePress info, tip 블록 테스트

::: info
알려드립니다 (Information): 이 블록은 중요한 정보를 담고 있습니다. 这里是重要信息。補足情報はこちらです。This block contains crucial information.
:::

::: tip
핵심 팁 (Tip): 유용한 팁을 놓치지 마세요! ここに役立つヒントがあります。请不要错过有用的提示。Don't miss out on this helpful tip!
:::

::: warning
경고 (Warning): 주의가 필요합니다! 警告！注意が必要です。请多加小心。Proceed with caution!
:::

## YouTube 링크 테스트
- 일반 링크: [YouTube에서 보기](https://youtu.be/xRU1XXHIpIc?si=tbkDGhA8dCkODn1l)
- 직접 주소: https://www.youtube.com/watch?v=xRU1XXHIpIc
- iframe 형식 (HTML 지원 환경에서만 작동):

<iframe width="560" height="315" src="https://www.youtube.com/embed/xRU1XXHIpIc" frameborder="0" allowfullscreen></iframe>

---

끝です。完了。完了了。 The End.
