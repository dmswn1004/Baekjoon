let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).sort((a,b)=>a - b);
let answer = [];

for(var i = 1; i <= 30; i++){
    if(answer.length === 2) break;
    
    if(input.indexOf(i) === -1){
        answer.push(i);
    }
}
console.log(answer.join('\n'));