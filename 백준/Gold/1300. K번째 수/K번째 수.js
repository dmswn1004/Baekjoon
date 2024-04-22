let [n, k] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let start = 1;
let end = Math.pow(10, 10);
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (mid / i < 1) break;
    count += Math.min(parseInt(mid / i), n);
  }

  if (count >= k) {
    result = mid;
    end = mid - 1;
  } else start = mid + 1;
}
console.log(result);