let [x, y, w, h] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
console.log(Math.min(w - x, h - y, x, y));