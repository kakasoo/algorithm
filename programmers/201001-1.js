// 프로그래머스 레벨2 가장 큰 수를 풀었습니다.
// DFS로 풀려고 시도했고, 그 덕에 그래프에 대한 학습 및 복습이 가능했으나 시간초과, 런타임에러를 해결할 수 없었다.
// 결국 정렬된 값들을 사용한다는 발상으로, 최적화를 했으나 테스트 케이스 3개 이상을 달성할 수 없었고,
// 그래프로 생각해서 풀 수 있는 문제가 아니라는 결론에 도달했다.
// 사실 아래와 같은 sort를 생각하긴 했으나, 어떻게 구현할지를 전혀 감을 잡지 못해서 풀지 못하고 있었다.

function solution(numbers) {
  if (numbers.length === numbers.filter((e) => e === 0).length) return "0";
  return numbers
    .map((el) => el + "")
    .sort((a, b) => b + a - (a + b))
    .join("");
}
