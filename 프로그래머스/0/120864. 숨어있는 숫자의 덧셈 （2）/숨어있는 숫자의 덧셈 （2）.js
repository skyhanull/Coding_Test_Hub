function solution(my_string) {
  
    return my_string.split(/[a-zA-Z]/).map((el)=> +el).reduce((a,b)=>a+b);
}