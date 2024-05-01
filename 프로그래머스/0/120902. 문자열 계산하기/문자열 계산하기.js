function solution(my_string) {

const result =  my_string.split(" ")
  console.log(result)
let answer = result[0] * 1
for(let i =0 ; i <result.length; i++ ){
    if(result[i] === "+"){
        answer += Number(result[i+1])
    }else if(result[i] === "-"){
          answer -= Number(result[i+1])
    }
    }
   return answer
}