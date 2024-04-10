
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let count = input.shift();
let arr = Array.from({ length: count }, () => []);
let answer = [];

for (let i = 0; i < count; i++) {
  let n = input.shift();
  arr[i] = input
    .splice(0, n)
    .map((v) => v.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);

  let count = 1;
  let min = arr[i][0][1];

  for (let j = 1; j < n; j++) {
    if (arr[i][j][1] < min) {
      min = arr[i][j][1];
      count++;
    }
  }
  answer.push(count);
}
console.log(answer.join("\n"));