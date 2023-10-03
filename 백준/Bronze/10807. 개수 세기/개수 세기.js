let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(a=> a.split(' ').map(Number));
let answer = 0;
for(var i = 0; i < input[0][0]; i++){
    if(input[1][i] === input[2][0]) answer++;
}

console.log(answer);