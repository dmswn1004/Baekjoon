let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input.shift());
let graph = input.map((v) => v.split(" ").map(Number));
let visited = Array.from({ length: n }, () => Array(n).fill(false));

function dfs(x, y) {
  if (x < 0 || x >= n || y < 0 || y >= n || visited[x][y]) return;
  visited[x][y] = true;

  dfs(x + graph[x][y], y);
  dfs(x, y + graph[x][y]);
}

dfs(0, 0);
console.log(visited[n - 1][n - 1] ? "HaruHaru" : "Hing");