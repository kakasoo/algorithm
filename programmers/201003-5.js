// 프로그래머스 레벨2 다음 큰 숫자를 풀었습니다.
function solution(n) {
  let oneN = n
    .toString(2)
    .split("")
    .filter((e) => e == 1).length;
  while (++n) {
    if (
      n
        .toString(2)
        .split("")
        .filter((e) => e == 1).length === oneN
    )
      return n;
  }
}
