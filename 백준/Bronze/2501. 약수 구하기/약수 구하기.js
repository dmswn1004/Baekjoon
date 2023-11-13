let [N, K] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let arr = [];
for (let i = 1; i <= N; i++) {
  if (N % i === 0) arr.push(i);
  if (arr.length === K) break;
}
console.log(arr[K - 1] ? arr[K - 1] : 0);