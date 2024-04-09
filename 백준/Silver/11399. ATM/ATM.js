let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let answer = 0;

for (let i = 0; i < arr.length; i++) {
  answer += arr[i] * (arr.length - i);
}

console.log(answer);