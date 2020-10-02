// 프로그래머스 레벨2 타겟넘버를 풀었습니다.
let num;
let visited;
let answer = 0;

const dfs = (plus, arr, cur, target) => {
  visited[cur] = true;
  if (plus) arr.push(num[cur]);
  else arr.push(-num[cur]);

  if (cur + 1 === num.length) {
    if (arr.reduce((acc, cur) => acc + cur) === target) {
      answer++;
    }
    return;
  }

  dfs(true, arr, cur + 1, target);
  arr.pop();
  visited[cur + 1] = false;
  dfs(false, arr, cur + 1, target);
  arr.pop();
  visited[cur + 1] = false;
};

function solution(numbers, target) {
  num = numbers;
  visited = new Array(num.length).fill(false);

  dfs(true, [], 0, target);
  visited[0] = false;
  dfs(false, [], 0, target);

  return answer;
}
