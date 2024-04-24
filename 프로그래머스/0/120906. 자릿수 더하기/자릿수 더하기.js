function solution(n) {
    var answer = n.toString().split("").reduce((accumulator, currentValue) => {
  return Number(accumulator) + Number(currentValue)
}, 0);

    return answer;
}