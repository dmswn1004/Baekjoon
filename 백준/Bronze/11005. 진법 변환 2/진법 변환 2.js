let [ N, B ] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(Number(N).toString(B).toUpperCase());