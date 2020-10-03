// 프로그래머스 레벨2 카펫을 풀었습니다.
const 약수 = (num) => {
  let res = [];
  for (let i = 3; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      res.push(i);
      res.push(num / i);
    }
  }
  return res.sort((o1, o2) => o1 - o2);
};

function solution(brown, yellow) {
  let square = brown + yellow;
  let div = 약수(square);

  for (let i = 0; i < parseInt(div.length / 2); i++) {
    let sero = div[i];
    let garo = div[div.length - 1 - i];
    let teduri = (garo - 2) * 2 + (sero - 2) * 2 + 4;
    let inner = (garo - 2) * (sero - 2);
    if (teduri === brown && inner === yellow) return [garo, sero];
  }
}
