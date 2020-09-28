// 소수찾기, 아직 못풀었습니다.
function solution(n) {
  var answer = 0;
  let arr = new Array(n + 1).fill(0).map((el, i) => (el = i));
  arr[0] = arr[1] = 0;
  arr.map((el, i) => {
    if (el === 0);
    else {
      for (let i = 2; i < Math.sqrt(el) + 1; i++) {
        if (el % i === 0) {
          let temp = i + i;
          while (temp <= el) {
            arr[temp] = 0;
            temp += i;
          }
        }
      }
    }
  });
  arr = arr.filter((el) => el !== 0);
  return arr.length;
}
