let answer = 0;

function solution(numbers, target) {
    let arr = [];
    
    dfs(arr, 0, numbers, target);
    return answer;
}

function dfs(arr, depth, numbers, target){
    if(depth === numbers.length) {
        let str = "";
        for(let i = 0; i < numbers.length; i++) {
            str += arr[i] + numbers[i];
        }
        let total = eval(str);
        if(Number(total) === target) answer++;
        return;
    }
    
    let operator = ["+", "-"];
    for(let i = 0; i < operator.length; i++){
        arr.push(operator[i]);
        dfs(arr, depth + 1, numbers, target);
        arr.pop();
    }
    
}