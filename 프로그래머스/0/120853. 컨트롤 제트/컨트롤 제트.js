function solution(s) {
    var answer = [];
    // console.log(s.split(" ").map((el)=> el ==="Z" ?answer.pop() : answer.push(el) ))
s.split(" ").map((el)=> el ==="Z" ?answer.pop() : answer.push(el) )
// console.log(answer.reduce((a,b)=>+a + +b,0))
    return answer.reduce((a,b)=>+a + +b,0);
}