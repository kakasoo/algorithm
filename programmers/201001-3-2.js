// 프로그래머스 큰 수 만들기를, 그리디 방식으로 풀어보았습니다 (=== 실패)
// 시간초과 3개를 제외하고 성공했습니다, 더 효율적인 방법을 고민 중입니다.
const 가능한 = (num, curLen, LEN) => {
  let maxIdx = -1;
  let maxV = -10;
  for (let i = 0; i < num.length + curLen - LEN + 1; i++) {
    if (maxV < num[i]) {
      maxIdx = i;
      maxV = num[i];
    }
  }
  return { idx: maxIdx, value: maxV };
};

const k앞자르기 = (arr, k) => {
  let ans = "";
  for (let i = k; i < arr.length; i++) {
    ans += arr[i];
  }
  return ans;
};

function solution(number, k) {
  number = number.split("");
  const LEN = number.length - k;
  let answer = "";
  while (answer.length < LEN) {
    let 탐색결과 = 가능한(number, answer.length, LEN);
    answer += 탐색결과.value;
    number = k앞자르기(number, 탐색결과.idx + 1);
  }
  return answer;
}
