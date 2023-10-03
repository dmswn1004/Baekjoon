let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(a=> a.split(' ').map(Number));
console.log(Math.min(...input[1]), Math.max(...input[1]));