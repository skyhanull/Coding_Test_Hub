function solution(dots) {
console.log(dots.sort((a,b)=>a[0]-b[0]))
    dots.sort((a,b)=>a[0]-b[0])
const a = Math.abs(dots[0][1] - dots[1][1])
const b = Math.abs(dots[0][0] - dots[2][0])

    return a*b;
}