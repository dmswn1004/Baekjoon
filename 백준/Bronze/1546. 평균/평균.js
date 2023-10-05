let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(a => a.split(' ').map(Number));
let max = Math.max(...input[1]);

for(var i = 0; i < input[0][0]; i++){
    input[1][i] = (input[1][i] / max) * 100;
}
console.log(input[1].reduce((a,c) => a + c, 0) / input[0][0]);