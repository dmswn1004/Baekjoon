let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = '';

for(let i = 1; i < 2 * input; i++) {
	const stars = i <= input ? i : 2 * input - i;
	answer += ' '.repeat(input - stars) + '*'.repeat(2 * stars - 1) + '\n';
}
console.log(answer);