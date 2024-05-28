let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let graph = Array.from({ length: 5 }, (v, i) => input[i].split(" ").map(Number));
let [r, c] = input[5].split(" ").map(Number);
let answer = false;

function dfs(depth, x, y, num) {
  if (x < 0 || x >= 5 || y < 0 || y >= 5 || graph[x][y] === -1 || depth > 3) return;
  if (graph[x][y] === 1) num++;
    
  if (depth <= 3) {
    if (num >= 2) {
      answer = true;
      return;
    }
  }

  let temp = graph[x][y];
  graph[x][y] = -1;

  dfs(depth + 1, x + 1, y, num);
  dfs(depth + 1, x - 1, y, num);
  dfs(depth + 1, x, y + 1, num);
  dfs(depth + 1, x, y - 1, num);
    
  graph[x][y] = temp;
}

dfs(0, r, c, 0);
console.log(answer ? 1 : 0);