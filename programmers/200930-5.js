// 프로그래머스 레벨2 올바른 괄호를 풀었습니다.
function solution(s) {
  let left = 0;
  let right = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") left++;
    if (s[i] === ")") right++;
    if (right > left) return false;
  }
  if (left !== right) return false;
  return true;
}
