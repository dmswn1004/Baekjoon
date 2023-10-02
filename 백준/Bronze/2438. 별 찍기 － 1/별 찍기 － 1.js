let input = require('fs').readFileSync('/dev/stdin').toString().trim();

for(var i = 1; i <= input; i++){
    console.log('*'.repeat(i));
}