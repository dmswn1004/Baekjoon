let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let n = parseInt(input.shift());
let arr = input[0].split(" ").map(Number).reverse();
let d = [0];

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

for (let x of arr) {
  if (d.at(-1) < x) d.push(x);
  else {
    let index = lowerBound(d, x, 0, d.length);
    d[index] = x;
  }
}
console.log(n - (d.length - 1));