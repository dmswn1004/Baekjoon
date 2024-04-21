let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input = input.map((v) => v.split(" ").map(Number));
let arr = input[1].sort((a, b) => a - b);
let answer = [];

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

for (let x of input[3]) {
  answer.push(upperBound(arr, x, 0, arr.length) - lowerBound(arr, x, 0, arr.length));
}
console.log(answer.join(" "));