// 프로그래머스 레벨2 짝지어 제거하기를 풀었습니다.
function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length !== 0) {
      if (stack[stack.length - 1] !== s[i]) {
        stack.push(s[i]);
      } else {
        stack.pop();
      }
    } else stack.push(s[i]);
  }
  return stack.length === 0 ? 1 : 0;
}
