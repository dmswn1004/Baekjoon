let input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(a => +a);
input.sort();

if(input[0] != input[1] & input[1] != input[2]) {
    console.log(input[2]*100);
}else if((input[0] == input[1] & input[1] != input[2]) | (input[0] != input[1] & input[1] == input[2])){
    console.log(1000 + input[1]*100);
}else{
    console.log(10000 + input[2]*1000);
}