let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let n = input.shift();
input = input.map((v) => v.split(" ").map(Number));
let visited = Array.from({ length: n }, () => false);
let result = [];
let answer = Number.MAX_SAFE_INTEGER;

function dfs(depth) {
  if (depth === n - 1) {
    let sum = 0;
    let current = 0;
    for (let i = 0; i < n - 1; i++) {
      let nextNode = result[i];
      let cost = input[current][nextNode];
      if (cost === 0) return;
      sum += cost;
      current = nextNode;
    }
    let lastCost = input[current][0];
    if (lastCost === 0) return;
    sum += lastCost;
    answer = Math.min(answer, sum);
    return;
  }

  for (let i = 1; i < n; i++) {
    if (visited[i]) continue;

    result.push(i);
    visited[i] = true;
    dfs(depth + 1);
    result.pop();
    visited[i] = false;
  }
}
dfs(0);
console.log(answer);