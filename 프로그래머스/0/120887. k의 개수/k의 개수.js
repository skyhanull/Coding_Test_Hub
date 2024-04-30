function solution(i, j, k) {
    
    return Array(j).fill(i).map((el,i)=> el+i <= j ? el+i : "").join("").split("").filter((el)=> Number(el)=== k).length;
}