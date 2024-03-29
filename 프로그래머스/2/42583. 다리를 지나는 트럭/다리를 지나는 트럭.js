function solution(bridge_length, weight, truck_weights) {
    let answer = 1;
    let queue = Array.from({length: bridge_length}, v => 0);
    let sum = truck_weights[0];
    
    queue.shift();
    queue.push(truck_weights.shift());
    
    while(sum > 0) {
        answer++;
        
        sum -= queue.shift();
        
        if(sum + truck_weights[0] <= weight) {
            sum += truck_weights[0]
            queue.push(truck_weights.shift());
        } else queue.push(0);
    }
    
    return answer;
}