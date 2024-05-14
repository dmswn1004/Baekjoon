let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [r, c] = input.shift().split(" ").map(Number);
let selected = [];
for (let alpha of input) {
  selected.push(alpha.split(""));
}
let visited = new Set();
let max = 0;

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

function dfs(depth, x, y) {
  max = Math.max(max, depth);

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
    if (visited.has(selected[nx][ny])) continue;
    visited.add(selected[nx][ny]);
    dfs(depth + 1, nx, ny);
    visited.delete(selected[nx][ny]);
  }
}
visited.add(selected[0][0]);
dfs(1, 0, 0);
console.log(max);