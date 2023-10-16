let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let sum = 0;
let count = 0;
let value = ['A+', 'A0', 'B+', 'B0', 'C+', 'C0', 'D+', 'D0', '', 'F'];

for(var i = 0; i < input.length; i++) {
    let [name, score, grade] = input[i].split(' ');
    if(grade !== 'P') {
        sum += Number(score) * (4.5 - value.indexOf(grade) * 0.5);
        count+= Number(score);
    }
}
console.log(sum / count);