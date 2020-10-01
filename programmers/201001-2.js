// 프로그래머스 레벨2 소수찾기를 풀었습니다.

let visited = [];
let num = [];
let res = [];

const dfs = (curIdx, curValue = "") => {
  visited[curIdx] = true;
  curValue += num[curIdx];
  if (!res.includes(curValue)) {
    res.push(curValue);
  }

  for (let i = 0; i < num.length; i++) {
    if (visited[i] === false) {
      dfs(i, curValue);
      visited[i] = false;
    }
  }
};

function solution(numbers) {
  num = numbers.split("");
  visited = new Array(numbers.length).fill(false);
  for (let i = 0; i < numbers.length; i++) {
    if (visited[i] === false) {
      dfs(i);
      visited[i] = false;
    }
  }

  res = [...new Set(res.map((e) => Number(e)))].filter((e) =>
    e === 0 || e === 1 ? false : true
  );

  let count = 0;
  for (let i = 0; i < res.length; i++) {
    let flag = true;
    for (let j = 2; j <= res[i] / 2; j++) {
      if (res[i] % j === 0) {
        flag = false;
        break;
      }
    }
    if (flag) count++;
  }
  return count;
}
