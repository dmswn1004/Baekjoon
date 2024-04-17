let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let start = 1;
let end = Math.max(...arr);
let h = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for (let i of arr) total += i - mid > 0 ? i - mid : 0;

  if (total < m) {
    end = mid - 1;
  } else {
    h = mid;
    start = mid + 1;
  }
}
console.log(h);