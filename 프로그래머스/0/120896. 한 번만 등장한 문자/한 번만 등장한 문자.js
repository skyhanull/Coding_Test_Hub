function solution(s) {
    var answer = '';
 const char =s.split("").sort().join("")
    for(let i =0 ; i <char.length; i++){
    if( i === 0  && char[i] !== char[i+1]){
        answer += char[i]
    }else if(char[i] !== char[i+1] && char[i] !== char[i-1]){
        answer += char[i]
        }
    }
    return answer;
}