// 정수 제곱근
function solution(n) {
  if (Math.sqrt(n) % 1 === 0) {
    return (Math.sqrt(n) + 1) ** 2;
  } else return -1;
}
