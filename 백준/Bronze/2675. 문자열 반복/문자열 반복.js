// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(a => a.split(' '));
for(var i = 1; i <= Number(input[0][0]); i++){
    console.log(input[i][1].split('').map(a => a.repeat(Number(input[i][0]))).join(''))
}