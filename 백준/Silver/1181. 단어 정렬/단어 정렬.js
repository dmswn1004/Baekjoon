let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
let arr = Array.from(new Set(input));
arr.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  else if (a.length === b.length) {
    return a.localeCompare(b);
  }
});
console.log(arr.join("\n"));
