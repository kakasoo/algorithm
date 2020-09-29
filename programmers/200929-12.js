// 프로그래머스 레벨1 행렬의 덧셈을 풀었습니다.
function solution(arr1, arr2) {
  return arr1.map((el, i) => el.map((n, j) => (n += arr2[i][j])));
}
