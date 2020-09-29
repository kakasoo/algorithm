// 프로그래머스 level1 시저 암호를 풀었습니다.
function solution(s, n) {
  var answer = "";
  let big = [];
  let small = [];
  for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++)
    big.push(String.fromCharCode(i));
  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++)
    small.push(String.fromCharCode(i));

  s = s.split("").map((el, i, arr) => {
    if (big.includes(el)) {
      let nextPos = big.indexOf(el) + n;
      if (nextPos > big.length - 1) nextPos -= big.length;
      return big[nextPos];
    } else if (small.includes(el)) {
      let nextPos = small.indexOf(el) + n;
      if (nextPos > small.length - 1) nextPos -= small.length;
      return small[nextPos];
    } else return el;
  });
  return s.join("");
}
