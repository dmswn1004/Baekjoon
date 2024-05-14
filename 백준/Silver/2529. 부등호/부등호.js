let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input.shift());
input = input[0].split(" ");
let selected = [];
let visited = Array.from({ length: input }, () => false);
let min = "";
let max = "";

function dfs(depth) {
  if (depth === n + 1) {
    let flag = true;
    for (let i = 0; i < n; i++) {
      if (input[i] === "<") {
        if (selected[i] > selected[i + 1]) flag = false;
      } else {
        if (selected[i] < selected[i + 1]) flag = false;
      }
    }

    if (flag) {
      max = selected.join("");
      if (min === "") min = selected.join("");
    }
    return;
  }
  for (let i = 0; i < 10; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    dfs(depth + 1);
    visited[i] = false;
    selected.pop();
  }
}
dfs(0);
console.log(max + "\n" + min);