let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").splice(1);
input.map((v, i) => {
  let [a, b] = v.split(" ");
  input[i] = [parseInt(a), b];
});
input.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  else return;
});

console.log(input.map((v, i) => v.join(" ")).join("\n"));