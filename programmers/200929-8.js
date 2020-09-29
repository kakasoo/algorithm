// 프로그래머스 레벨1 최대공약수와 최소공배수를 풀었습니다.
function solution(n, m) {
  if (n > m) [n, m] = [m, n];

  const arr = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0 && m % i === 0) {
      arr.push(i);
      n /= i;
      m /= i;
    }
  }
  const min = arr.length === 0 ? 1 : arr.reduce((acc, cur) => acc * cur);
  const max = min === 1 ? n * m : min * n * m;
  return [min, max];
}
