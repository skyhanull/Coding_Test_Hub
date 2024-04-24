function solution(array) {
 
 const maxNum =Math.max(...array)
 const index = array.indexOf(maxNum)

    return [maxNum,index];
}