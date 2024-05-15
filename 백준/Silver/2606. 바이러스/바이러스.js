let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input.shift());
let m = Number(input.shift());
let graph = Array.from({ length: n + 1 }, () => []);
let visited = Array.from({ length: n + 1 }, () => false);
let answer = 0;

for (let i = 0; i < m; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

function dfs(v) {
  visited[v] = true;
  answer++;

  for (let i of graph[v]) {
    if (!visited[i]) dfs(i);
  }
}

dfs(1);
console.log(answer - 1);