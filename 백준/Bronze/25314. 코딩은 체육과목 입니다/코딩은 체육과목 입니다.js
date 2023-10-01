let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = '';

for(var i = 0; i < (input / 4); i++){
    answer += 'long ';
}
console.log(answer + 'int');