let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [n, m] = input.shift().split(" ").map(Number);
let visited = Array.from({ length: n + 1 }, () => false);
let graph = Array.from({ length: n + 1 }, () => []);
let answer = 0;
for (let i = 0; i < input.length; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

function dfs(v) {
  if (visited[v]) return;

  visited[v] = true;
  for (let i of graph[v]) {
    if (!visited[i]) dfs(i);
  }
}

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);
    answer++;
  }
}

console.log(answer);