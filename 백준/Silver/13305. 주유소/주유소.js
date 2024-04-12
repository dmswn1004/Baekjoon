let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
let [km, cost] = input.map((v) => v.split(" ").map(Number));
cost.pop();
let answer = 0;
let min = Math.min(...cost);

for (let i = 0; i < km.length; i++) {
  if (cost[i] > min) answer += cost[i] * km[i];
  else {
    let sumKm = km.slice(i, km.length).reduce((a, b) => a + b, 0);
    answer += min * sumKm;
    break;
  }
}
console.log(answer);