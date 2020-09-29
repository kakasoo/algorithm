// 프로그래머스 레벨1 x만큼 간격이 있는 n개의 숫자를 풀었습니다.
function solution(x, n) {
  let arr = [x];
  let temp = x;

  for (let i = 0; i < n - 1; i++) {
    temp += x;
    arr.push(temp);
  }
  return arr;
}
