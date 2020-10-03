// 프로그래머스 레벨2 숫자의 표현을 풀었습니다.
function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    let temp = i;
    while (sum <= n) {
      sum += temp++;
      if (sum === n) count++;
    }
  }
  return count;
}
