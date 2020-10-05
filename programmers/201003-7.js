// 프로그래머스 레벨2 최댓값과 최솟값을 풀었습니다.
function solution(s) {
  let res = s
    .split(" ")
    .map(Number)
    .sort((o1, o2) => o1 - o2);
  return res[0] + " " + res[res.length - 1];
}
