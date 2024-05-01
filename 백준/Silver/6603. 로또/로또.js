let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
for (let i = 0; i < input.length; i++) {
  if (input[i] === "0") break;

  let arr = input[i].split(" ").map(Number);
  let n = arr.shift();
  let selected = [];
  let visited = Array.from({ length: n }, () => false);

  function dfs(arr, depth, start) {
    if (depth === 6) {
      console.log(selected.join(" "));
      return;
    }

    for (let i = start; i < n; i++) {
      if (visited[i]) continue;
      selected.push(arr[i]);
      visited[i] = true;
      dfs(arr, depth + 1, i + 1);
      selected.pop();
      visited[i] = false;
    }
  }

  dfs(arr, 0, 0);
  console.log();
}