let input = require('fs').readFileSync('/dev/stdin').toString().trim();

for(var i = 1; i < 10; i++){
    console.log(`${input} * ${i} = ${input*i}`);
}