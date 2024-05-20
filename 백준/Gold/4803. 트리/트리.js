let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let i = 0;
let num = 1;

function isCycle(graph, visited, v, prev) {
  visited[v] = true;

  for (let i of graph[v]) {
    if (!visited[i]) {
      if (isCycle(graph, visited, i, v)) return true;
    } else if (i !== prev) return true;
  }

  return false;
}

while (input[i] !== "0 0") {
  let [n, m] = input[i].split(" ").map(Number);
  let graph = Array.from({ length: n + 1 }, () => []);
  let visited = Array.from({ length: n + 1 }, () => false);
  let answer = 0;

  for (let j = 0; j < m; j++) {
    let [x, y] = input[i + j + 1].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }

  for (let j = 1; j <= n; j++) {
    if (!visited[j]) {
      if (!isCycle(graph, visited, j, 0)) answer++;
    }
  }

  if (answer === 0) console.log(`Case ${num}: No trees.`);
  else if (answer === 1) console.log(`Case ${num}: There is one tree.`);
  else console.log(`Case ${num}: A forest of ${answer} trees.`);

  num++;
  i += m + 1;
}