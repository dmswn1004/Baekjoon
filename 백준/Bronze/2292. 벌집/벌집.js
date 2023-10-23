let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let count = 1;
let block = 1;

for(let i = 0; i < input; i++) {
    if(block >= input) {
        break;
    }
    block += 6 * count;
    count++;
}
console.log(count);