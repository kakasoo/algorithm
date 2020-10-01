// 프로그래머스 큰 수 만들기를, 그래프 방식으로 풀어보았습니다 (=== 실패)
// 그리디 방식이 아닌 이상 풀 수 없는 모양입니다. (2개 이외 모두 시간 초과.)
let num = [];
let visited = [];
let maxValue = "";

const dfs = (curIdx, curValue = "", k) => {
  visited[curIdx] = true;
  let visiteds = visited.filter((e) => e === true).length;

  curValue += num[curIdx];
  if (curIdx - curValue.length > k) return;
  if (visiteds > num.length - k) return;
  for (let i = 0; i < curValue.length; i++) {
    if (maxValue[i] > curValue[i]) return;
    else if (maxValue[i] < curValue[i]) break;
  }

  if (visiteds === num.length - k) {
    if (Number(maxValue) < Number(curValue)) maxValue = curValue;
    else return;
  }
  // console.log(curValue, maxValue);

  for (let i = curIdx + 1; i < num.length; i++) {
    if (visited[i] === false) {
      dfs(i, curValue, k);
      visited[i] = false;
    }
  }
};

function solution(number, k) {
  num = number.split("");
  visited = new Array(number.length).fill(false);

  let maxIdx = -1;
  let maxV = -10;
  for (let i = 0; i < num.length - k; i++) {
    if (maxV < num[i]) {
      maxIdx = i;
      maxV = num[i];
    }
  }

  for (let i = maxIdx; i < num.length - k + maxIdx; i++) {
    maxValue += num[i];
  }

  for (let i = maxIdx; i < num.length - k; i++) {
    if (visited[i] === false) {
      dfs(i, "", k);
      visited[i] = false;
    }
  }
  return maxValue;
}
