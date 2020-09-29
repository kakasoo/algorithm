// 프로그래머스 레벨1 이상한 문자 만들기를 풀었습니다.
function solution(s) {
  return s
    .split(" ")
    .map((el) => {
      el = el.split("").map((s, i) => {
        if (i % 2 === 0) return s.toUpperCase();
        return s.toLowerCase();
      });
      return el;
    })
    .map((el) => el.join(""))
    .join(" ");
}
