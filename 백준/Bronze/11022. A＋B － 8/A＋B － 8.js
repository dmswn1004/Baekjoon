let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for(var i = 1; i <= input[0]; i++){
    let [a,  b] = input[i].split(' ').map(a=> +a);
    console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
}
