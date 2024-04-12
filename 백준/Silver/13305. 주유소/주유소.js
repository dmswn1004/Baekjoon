let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
let [km, cost] = input.map((v) => v.split(" ").map(Number));
cost.pop();
let answer = 0;
let min = cost[0];

for (let i = 0; i < km.length; i++) {
  if (cost[i] < min) {
    min = cost[i];
    answer += min * km[i];
  } else answer += min * km[i];
}
console.log(answer);