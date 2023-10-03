let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(a=> a.split(' ').map(Number));
let answer = '';
for(var i = 0; i < input[0][0]; i++){
    if(input[1][i] < input[0][1]) answer += input[1][i] + ' ';
}

console.log(answer);