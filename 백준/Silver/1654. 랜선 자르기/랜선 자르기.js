let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [k, n] = input.shift().split(" ").map(Number);
input = input.map(Number);

let start = 1;
let end = Math.max(...input);
let len = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let count = 0;

  for (let i of input) count += parseInt(i / mid);

  if (count < n) {
    end = mid - 1;
  } else {
    len = mid;
    start = mid + 1;
  }
}
console.log(len);