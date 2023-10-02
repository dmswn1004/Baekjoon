let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let T = input[0];
let answer = '';

for(var i = 1; i <= T; i++){
    let [a,  b] = input[i].split(' ').map(a=> +a);
    answer += a + b + "\n";
}
console.log(answer);