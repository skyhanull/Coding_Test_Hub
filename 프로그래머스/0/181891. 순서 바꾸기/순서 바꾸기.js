function solution(num_list, n) {
    
    const A =num_list.slice(n)
    const B =num_list.slice(0,n)

    return [...A,...B];
}