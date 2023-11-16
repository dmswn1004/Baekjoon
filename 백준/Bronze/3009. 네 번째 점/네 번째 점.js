let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map((a) => a.split(" ").map(Number));
let x = input.map((a) => a[0]).sort((a, b) => a - b);
let y = input.map((a) => a[1]).sort((a, b) => a - b);

console.log((x[0] === x[1] ? x[2] : x[0]) + " " + (y[0] === y[1] ? y[2] : y[0]));