function solution(polynomial) {
    var answer = '';
    const char =polynomial.split(" + ")
    let num1 =0
    let num2 =0
    for(const i of char){
    if(i.includes("x")){
     num1 += i.length > 1 ? +(i.slice(0,i.length-1)) : 1
    }else{
    num2 += +i
    }
    }
    
    if(num1 > 0 && num2 > 0){
        return num1 === 1 ? ["x",num2.toString()].join(" + "):[num1 + "x",num2.toString()].join(" + ")
    }else if(num1 > 0 && num2 === 0 ){
        return num1 === 1 ? "x": [num1,"x"].join("")
    }else if(num1 === 0 && num2 > 0 ){
        return num2.toString()
    }

}