let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [n, m] = input.shift().split(" ").map(Number);
let graph = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < n - 1; i++) {
  let [x, y, length] = input[i].split(" ").map(Number);
  graph[x].push([y, length]);
  graph[y].push([x, length]);
}

function dfs(graph, visited, distance, x, dist) {
  if (visited[x]) return;

  visited[x] = true;
  distance[x] = dist;
  for (let [y, length] of graph[x]) dfs(graph, visited, distance, y, dist + length);
}

for (let i = 0; i < m; i++) {
  let [x, y] = input[n + i - 1].split(" ").map(Number);
  let visited = Array.from({ length: n + 1 }, () => false);
  let distance = Array.from({ length: n + 1 }, () => -1);

  dfs(graph, visited, distance, x, 0);
  console.log(distance[y]);
}