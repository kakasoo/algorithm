function solution(n) {
  // 몰랐던 사실
  /*
   *   let arr = []가 let arr = new Array(n) 보다 낫다.
   */
  let arr = [0, 0];
  for (let i = 2; i <= n; i++) {
    arr[i] = i;
  }

  for (let i = 2; i <= n; i++) {
    if (arr[i] === 0) continue;
    for (let j = i + i; j <= n; j += i) {
      arr[j] = 0;
    }
  }

  return arr.filter((el) => el !== 0).length;
}
