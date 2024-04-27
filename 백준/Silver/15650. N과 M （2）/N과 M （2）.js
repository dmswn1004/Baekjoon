let [n, m] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let answer = [];
let selected = [];
let arr = Array.from({ length: n }, (v, i) => i + 1);
let visited = Array.from({ length: n }, () => false);

function dfs(arr, depth, start) {
  if (depth === m) {
    answer.push([...selected]);
    return;
  }

  for (let i = start; i < n; i++) {
    if (visited[i]) continue;

    selected.push(arr[i]);
    visited[i] = true;
    dfs(arr, depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}
dfs(arr, 0, 0);
console.log(answer.map((v) => v.join(" ")).join("\n"));