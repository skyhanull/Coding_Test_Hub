function solution(arr) {
    var answer = arr.reduce((a,b)=> a.concat(Array(b).fill(b)),[]);
    return answer;
}