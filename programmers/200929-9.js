// 프로그래머스 레벨1 평균구하기를 풀었습니다.
function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur) / arr.length;
}
