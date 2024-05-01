let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let n = input.shift();
input = input.map((v) => v.split(" ").map(Number));
let visited = Array.from({ length: n }, () => false);
let result = [];
let answer = Number.MAX_SAFE_INTEGER;

function dfs(depth, start) {
  if (depth >= 1) {
    let sSum = 1;
    let bSum = 0;

    for (let i = 0; i < result.length; i++) {
      sSum *= input[result[i]][0];
      bSum += input[result[i]][1];
    }
    let diff = Math.abs(sSum - bSum);
    answer = Math.min(answer, diff);
  }

  for (let i = start; i < n; i++) {
    if (visited[i]) continue;

    result.push(i);
    visited[i] = true;
    dfs(depth + 1, i + 1);
    result.pop();
    visited[i] = false;
  }
}
dfs(0, 0);
console.log(answer);