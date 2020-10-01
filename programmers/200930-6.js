let maxValue = "";
let visited;

const afterCut = (arr, word) => {
  let res = "";
  word = String(word);
  for (let i = 0; i < arr.split("").length - word.length; i++) {
    res += arr[i];
  }
  return res;
};

const dfs = (cur, num, str) => {
  visited[cur] = true;
  let curNum = num[cur];
  console.log(maxValue, str);
  if (maxValue < str) {
    maxValue = str;
    return;
  }

  for (let i = 0; i < num.length; i++) {
    if (cur === i) continue;
    if (visited[i] === false) {
      str += curNum + "";

      dfs(i, num, str);
      str = afterCut(str, num[i]);
      visited[i] = false;
    }
  }
};

function solution(numbers) {
  numbers = numbers.sort().reverse();
  visited = new Array(numbers.length).fill(false);
  maxValue = numbers.join("");
  let size = numbers.filter((el) => String(el)[0] === String(numbers[0])[0])
    .length;

  for (let i = 0; i < size; i++) {
    visited[i] = true;
    dfs(i, numbers, "");
    visited[i] = false;
  }

  return maxValue;
}

console.log(solution([3, 30, 34, 5, 9]));
