let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = '';
for(var i = 97; i <= 122; i++){
    answer += input.indexOf(String.fromCharCode(i)) + " ";
}
console.log(answer);