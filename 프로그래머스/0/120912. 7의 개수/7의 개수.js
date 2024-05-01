function solution(array) {
    var answer = 0;

// console.log(array.join("").split("").forEach((el)=>{
// return el === "7" ? answer+= 1 :answer+=0
// }))
array.join("").split("").forEach((el)=>{
return el === "7" ? answer+= 1 :answer+=0
})
    return answer;
}