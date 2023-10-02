let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(a=> a.split(''));
let len = Math.max(...input.map(a => a.length));
let answer = '';

for(var i = 0; i < len; i++){
    for(var j = 0; j < input.length; j++){
        input[j][i]? answer += input[j][i] : 0;
    }
}
console.log(answer);