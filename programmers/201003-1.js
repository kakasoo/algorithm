// 정답이 될 수 없었던 아름다운 코드... 그리디한 방식이긴 했지만, stack을 이용하는 것이 더 좋다.
const solution = (number, k) => {
  number = number.split("");
  const 가능한 = (num, curLen, LEN) =>
    Math.max(...num.slice(0, num.length + curLen - LEN + 1));
  const LEN = number.length - k;
  let answer = "";
  while (answer.length < LEN) {
    let 탐색결과 = 가능한(number, answer.length, LEN);
    let count = 0;
    answer += 탐색결과;
    number = number.slice(number.indexOf(String(탐색결과)) + 1);
  }
  return answer;
};
