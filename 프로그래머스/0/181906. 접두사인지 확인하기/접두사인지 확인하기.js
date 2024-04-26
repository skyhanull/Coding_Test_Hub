function solution(my_string, is_prefix) {
    var answer = my_string.slice(0,is_prefix.length);

    return answer === is_prefix ? 1: 0;
}