# Baekjoon

### 템플릿
```jsx
// fs 모듈 불러오기
const fs = require('fs');
// 입력이 한 개일 때
const inputData = fs.readFileSync("/dev/stdin").toString().trim();
// 공백으로 구분된 값들을 한 줄로 입력 받을 때
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");
// 여러줄 입력받을 때
const inputData = fs.readFileSync("/dev/stdin").toString().split("\n");
```
