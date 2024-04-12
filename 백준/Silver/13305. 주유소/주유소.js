let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
let [km, cost] = input.map((v) => v.split(" ").map(Number));
cost.pop();
let answer = BigInt(0);
let min = cost[0];

for (let i = 0; i < km.length; i++) {
  if (cost[i] < min) {
    min = cost[i];
  }
  answer += BigInt(min) * BigInt(km[i]);
}
console.log(String(answer));