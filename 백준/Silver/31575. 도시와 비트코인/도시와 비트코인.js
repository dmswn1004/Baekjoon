let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [n, m] = input.shift().split(" ").map(Number);
let graph = Array.from({ length: m }, (v, i) => input[i].split(" ").map(Number));
let visited = Array.from({ length: m }, () => Array(n).fill(false));
let answer = "No";

function dfs(x, y) {
  if (x < 0 || x >= m || y < 0 || y >= n || graph[x][y] === 0 || visited[x][y]) return;
  if (x === m - 1 && y === n - 1) {
    answer = "Yes";
    return;
  }
  visited[x][y] = true;
  if (x + 1 < m && graph[x + 1][y] === 1) dfs(x + 1, y);
  if (y + 1 < n && graph[x][y + 1] === 1) dfs(x, y + 1);
}
dfs(0, 0);
console.log(answer);