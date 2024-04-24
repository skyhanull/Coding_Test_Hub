function solution(my_string) {
    var answer = '';
    const arr =[]
    for(const i of my_string){
    if(!arr.includes(i)){
       arr.push(i) 
}
}
    return arr.join("");
}