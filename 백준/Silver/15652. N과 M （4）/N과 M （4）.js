let [n, m] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let answer = [];
let selected = [];
let arr = Array.from({ length: n }, (v, i) => i + 1);

function dfs(arr, depth, start) {
  if (depth === m) {
    answer.push([...selected]);
    return;
  }

  for (let i = start; i < n; i++) {
    selected.push(arr[i]);
    dfs(arr, depth + 1, i);
    selected.pop();
  }
}

dfs(arr, 0, 0);
console.log(answer.map((v) => v.join(" ")).join("\n"));