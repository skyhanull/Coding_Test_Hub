function solution(n_str) {
console.log(Number(n_str))
    for(const i of n_str){
     if( i !== "0" ){
   
        return n_str.slice(n_str.indexOf(i))
        }
    }   
}



// const solution = (str) => String(Number(str))