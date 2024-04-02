let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
let arr = [];
input.map((v, i) => arr.push(v.split(" ").map(Number)));

arr.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  else if (a[1] === b[1]) {
    return a[0] - b[0];
  }
});

console.log(arr.map((v) => v.join(" ")).join("\n"));