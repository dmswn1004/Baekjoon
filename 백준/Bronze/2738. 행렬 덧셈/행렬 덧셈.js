let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(a=> a.split(' ').map(a => +a));

for(var i = 1; i <= input[0][0]; i++){
    let num1 = input[i]
    let num2 = input[i + input[0][0]];
    num1.map((a,i)=>{ num1[i] = a + num2[i]})
    console.log(num1.join(' '));
}