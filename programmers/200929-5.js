// 프로그래머스 레벨1 정수 내림차순으로 배치하기를 풀었습니다.
function solution(n) {
  return Number(String(n).split("").sort().reverse().join(""));
}
