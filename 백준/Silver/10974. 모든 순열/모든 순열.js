let n = require("fs").readFileSync("/dev/stdin").toString().trim();
n = parseInt(n);
let arr = Array.from({ length: n }, (v, i) => i + 1);
let visited = new Array(n).fill(false);
let selected = [];
let answer = [];

function dfs(arr, depth) {
  if (depth === n) {
    answer.push([...selected]);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    selected.push(arr[i]);
    visited[i] = true;

    dfs(arr, depth + 1);

    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0);
console.log(answer.map((v) => v.join(" ")).join("\n"));