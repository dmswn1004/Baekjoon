let input = require("fs").readFileSync("/dev/stdin").toString().trim();
input = Number(input);
let result = [];
let answer = 0;

function possible(x, y) {
  for (let [row, i] of result) {
    if (row === x || i === y) return false;
    if (Math.abs(row - x) === Math.abs(i - y)) return false;
  }
  return true;
}

function dfs(depth) {
  if (depth === input) answer++;
  for (let i = 0; i < input; i++) {
    if (!possible(depth, i)) continue;
    result.push([depth, i]);
    dfs(depth + 1);
    result.pop();
  }
}
dfs(0);
console.log(answer);