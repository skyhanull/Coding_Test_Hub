function solution(my_string, index_list) {
     const result = []
    var answer = index_list.map((el,i)=>result.push(my_string[el]));
    return result.join("");
}