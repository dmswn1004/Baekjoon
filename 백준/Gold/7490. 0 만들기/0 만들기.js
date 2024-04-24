let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
input.shift();
let arr = [];
let operator = [" ", "+", "-"];

for (let n of input) {
  arr = Array.from({ length: n }, (v, i) => i + 1);
  dfs([], 0, n);
  console.log();
}

function dfs(result, depth, num) {
  if (depth === num - 1) {
    let str = "";
    let total = 0;
    for (let i = 0; i < num - 1; i++) {
      str += arr[i] + result[i];
    }
    str += arr[num - 1] + "";
    let current = eval(str.split(" ").join(""));
    if (current === 0) console.log(str);
    return;
  }

  for (let i = 0; i < operator.length; i++) {
    result.push(operator[i]);
    dfs(result, depth + 1, num);
    result.pop();
  }
}