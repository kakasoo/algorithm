// 프로그래머스 레벨1 하샤드 수를 풀었습니다.
function solution(x) {
  return (
    x %
      String(x)
        .split("")
        .map((el) => Number(el))
        .reduce((acc, cur) => acc + cur) ===
    0
  );
}
