let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [n, m] = input.shift().split(" ").map(Number);
let graph = Array.from({ length: n }, (v, i) => [...input[i]]);
let visited = Array.from({ length: n }, () => Array.from({ length: m }, () => false));
let answer = 0;

function dfs(x, y) {
  if (x < 0 || x >= n || y < 0 || y >= m || visited[x][y]) return;
  visited[x][y] = true;

  if (graph[x][y] === "-") {
    if (y + 1 < m && graph[x][y + 1] === "-") dfs(x, y + 1);
  } else if (graph[x][y] === "|") {
    if (x + 1 < n && graph[x + 1][y] === "|") dfs(x + 1, y);
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visited[i][j]) {
      dfs(i, j);
      answer++;
    }
  }
}
console.log(answer);