let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
for (let i = 0; i < input.length; i++) {
  if (input[i] === "0 0") break;

  let [a, b] = input[i].split(" ").map(Number);
  let result = "";

  if (b % a === 0) result = "factor";
  else if (a % b === 0) result = "multiple";
  else result = "neither";

  console.log(result);
}