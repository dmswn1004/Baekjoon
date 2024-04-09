let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [N, K] = input.shift().split(" ").map(Number);
let answer = 0;

for (let i = N - 1; i >= 0; i--) {
  if (K === 0) break;

  let count = Math.floor(K / input[i]);
  if (count > 0) {
    answer += count;
    K -= count * input[i];
  }
}
console.log(answer);