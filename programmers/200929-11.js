// 프로그래머스 레벨1 핸드폰 번호 가리기를 풀었습니다.
function solution(phone_number) {
  let a, b, c, d, e;
  let arr = ([a, b, c, d, ...e] = phone_number.split("").reverse());
  return [e.map((el) => "*").join(""), d, c, b, a].join("");
}
