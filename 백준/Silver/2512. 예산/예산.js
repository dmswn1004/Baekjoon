let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input.shift());
let arr = input[0].split(" ").map(Number);
let max = Number(input[1]);
let start = 1;
let end = Math.max(...arr);
let result = 0;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let total = 0;
  for (let i of arr) total += Math.min(i, mid);

  if (total <= max) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(result);