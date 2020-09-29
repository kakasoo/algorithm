// 프로그래머스 level1 제일 작은 수 제거하기를 풀었습니다.
function solution(arr) {
  let min = 9875654321;

  if (arr.length === 1) return [-1];
  arr.map((el, i) => {
    if (el < min) min = el;
    return el;
  });
  arr.splice(arr.indexOf(min), 1);
  return arr;
}
