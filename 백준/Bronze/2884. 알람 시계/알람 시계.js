const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(line) {
    const input = line.split(' ');
    let a = Number(input[0]);
    let b = Number(input[1]);

    if (b >= 45) {
        console.log(a + ' ' + (b - 45));
    } else {
        if (a === 0) {
            console.log('23 ' + (60 - Math.abs(b - 45)));
        } else {
            console.log((a - 1) + ' ' + (60 - Math.abs(b - 45)));
        }
    }
}).on('close', function() {
    process.exit();
});
