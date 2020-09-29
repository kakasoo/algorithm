// // 프로그래머스 레벨 1 2019 KAKAO BLIND RECRUITMENT > [1차]비밀지도를 풀었습니다.
const numPad = (n, number) => {
  while (String(number).length < n) {
    number = "0" + number;
  }
  return number;
};

function solution(n, arr1, arr2) {
  var answer = [];
  arr1 = arr1.map((el) => numPad(n, el.toString(2)));
  arr2 = arr2.map((el) => numPad(n, el.toString(2)));

  for (let i = 0; i < arr1.length; i++) {
    let row = "";
    for (let j = 0; j < arr1[0].length; j++) {
      if (arr1[i][j] == 1 || arr2[i][j] == 1) {
        row += "#";
      } else row += " ";
    }
    answer.push(row);
  }
  return answer;
}
