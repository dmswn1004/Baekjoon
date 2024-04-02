let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
let arr = [];
input.map((v, i) => arr.push(v.split(" ").map(Number)));

arr.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  else if (a[0] === b[0]) {
    return a[1] - b[1];
  }
});

console.log(arr.map((v) => v.join(" ")).join("\n"));