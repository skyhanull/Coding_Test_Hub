function solution(num_list) {
    const result = num_list
  
    if(result.slice(-1) > result.slice(-2,-1)){
     num_list.push(result.slice(-1) -result.slice(-2,-1) )
    }else{
    num_list.push(result.slice(-1) * 2)
    }

    return result
}