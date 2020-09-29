//프로그래머스 레벨1 예산을 풀었습니다.
function solution(d, budget) {
  let sum = 0;
  let count = 0;
  d.sort((o1, o2) => o1 - o2).some((el, i) => {
    if (sum + el <= budget) {
      sum += el;
      count++;
      return false;
    } else {
      return true;
    }
  });
  return count;
}
