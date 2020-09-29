// // 프로그래머스 레벨 1 2018 KAKAO BLIND RECRUITMENT > [1차]다트 게임을 풀었습니다.
let sum = [];

const split = (arr, char) => {
  arr = arr
    .map((el, i) => {
      if (el.indexOf(char) != -1) {
        return [
          el.substring(0, el.indexOf(char) + 1),
          el.substring(el.indexOf(char) + 1, el.length),
        ];
      } else return el;
    })
    .flat(Infinity)
    .filter((el) => !!el);
  return arr;
};

const calc = (str) => {
  let point = "";
  let square, option;

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) point += str[i];
    else if (str[i] === "#" || str[i] === "*") option = str[i];
    else square = str[i] === "S" ? 1 : str[i] === "D" ? 2 : 3;
  }

  sum.push(point ** square);
  if (option === "*") {
    sum[sum.length - 1] *= 2;
    sum[sum.length - 2] *= 2;
  }
  if (option === "#") {
    sum[sum.length - 1] *= -1;
  }
};

function solution(dartResult) {
  let answer = split([dartResult], "*");
  answer = split(answer, "*");
  answer = split(answer, "#");
  answer = split(answer, "#");
  answer = split(answer, "D");
  answer = split(answer, "D");
  answer = split(answer, "T");
  answer = split(answer, "T");
  answer = split(answer, "S");
  answer = split(answer, "S");

  answer = answer
    .map((el, i) => {
      if (answer[i + 1] === "#" || answer[i + 1] === "*") {
        el += answer[i + 1];
        answer[i + 1] = "";
        return el;
      }
      return el;
    })
    .filter((el) => !!el);

  answer.map((el) => calc(el));
  return sum.reduce((acc, cur) => acc + cur);
}
