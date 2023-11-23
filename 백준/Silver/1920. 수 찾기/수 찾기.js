let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map((a) => a.split(" "));
const set = new Set(input[1]);
const result = input[3].map((a) => (set.has(a) ? 1 : 0));
console.log(result.join("\n"));
