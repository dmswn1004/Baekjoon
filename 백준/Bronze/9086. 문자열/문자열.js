let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for(var i = 1; i <= Number(input[0]); i++){
    console.log(`${input[i][0]}${input[i].at(-1)}`);
}