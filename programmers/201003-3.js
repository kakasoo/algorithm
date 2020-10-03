// 프로그래머스 레벨2 JadenCase를 풀었습니다.
function solution(s) {
  s = s.split(" ");
  for (let i = 0; i < s.length; i++) {
    let newS = "";
    for (let j = 0; j < s[i].length; j++) {
      if (j === 0) newS += s[i][j].toUpperCase();
      else newS += s[i][j].toLowerCase();
    }
    s[i] = newS;
  }
  return s.join(" ");
}
