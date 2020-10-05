// 프로그래머스 레벨2 최솟값 만들기를 풀었습니다.
function solution(A, B) {
  let answer = 0;
  A = A.sort((o1, o2) => o1 - o2);
  B = B.sort((o1, o2) => o1 - o2);
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[B.length - 1 - i];
  }
  return answer;
}
