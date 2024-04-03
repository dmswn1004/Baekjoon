let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let arr = input[1].split(" ").map(Number);
let set = [...new Set(arr)].sort((a, b) => a - b);
let obj = new Map(set.map((v, i) => [v, i]));
arr.map((v, i) => (arr[i] = obj.get(v)));
console.log(arr.join(" "));