function solution(arr, k) {
    var answer = "";
let result = [...new Set(arr)]

if(result.length > k){
return result.slice(0,k)
}else {
const minus =Array(Math.abs(result.length-k)).fill(-1)
 return [...result,...minus]
}

// console.log(resutl.length <= k ? answer = (Array(Math.abs(resutl.length-k)).fill(-1)) : resutl)
//     return [...resutl,...answer];
}