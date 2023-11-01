let [a, b, v] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
console.log(Math.ceil((v - b) / (a - b)));
