let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [n, arr] = input;
n = n.split(" ").map(Number);
arr = arr.split(" ").map(Number).sort((a, b) => a - b);
console.log(arr[n[1] - 1]);
