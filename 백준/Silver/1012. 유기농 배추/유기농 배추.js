let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let t = Number(input.shift());

function dfs(graph, n, m, x, y) {
  if (x <= -1 || x >= n || y <= -1 || y >= m) return false;

  if (graph[x][y] === 1) {
    graph[x][y] = -1;

    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x, y - 1);
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x, y + 1);
    return true;
  }
  return false;
}

for (let i = 0; i < t; i++) {
  let [m, n, k] = input.shift().split(" ").map(Number);
  let arr = input.splice(0, k).map((v) => v.split(" ").map(Number));
  let graph = Array.from({ length: n }, () => new Array(m));
  let answer = 0;

  for (let j = 0; j < k; j++) {
    let [x, y] = arr[j];
    graph[y][x] = 1;
  }

  for (let j = 0; j < n; j++) {
    for (let k = 0; k < m; k++) {
      if (dfs(graph, n, m, j, k)) answer++;
    }
  }
  console.log(answer);
}