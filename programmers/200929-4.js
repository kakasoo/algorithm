// 프로그래머스 레벨1 자연수 뒤집어 배열로 만들기를 풀었습니다.
function solution(n) {
  return String(n)
    .split("")
    .map((el) => Number(el))
    .reverse();
}
