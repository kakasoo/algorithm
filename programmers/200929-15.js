let leftHand = [3, 0];
let rightHand = [3, 2];

const keyPad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["*", 0, "#"],
];

const geori = (cur, target) => {
  for (let i = 0; i < keyPad.length; i++) {
    for (let j = 0; j < keyPad[0].length; j++) {
      if (keyPad[i][j] === target) {
        return Math.abs(i - cur[0]) + Math.abs(j - cur[1]);
      }
    }
  }
  return -1;
};

const pull = (pad, hand) => {
  let chai = geori(leftHand, pad) - geori(rightHand, pad);
  switch (pad) {
    case 1:
      return ["L", [0, 0]];
    case 4:
      return ["L", [1, 0]];
    case 7:
      return ["L", [2, 0]];
    case 3:
      return ["R", [0, 2]];
    case 6:
      return ["R", [1, 2]];
    case 9:
      return ["R", [2, 2]];
    case 2:
      if (chai < 0) {
        return ["L", [0, 1]];
      } else if (chai > 0) return ["R", [0, 1]];
      else return [hand, [0, 1]];
    case 5:
      if (chai < 0) {
        return ["L", [1, 1]];
      } else if (chai > 0) return ["R", [1, 1]];
      else return [hand, [1, 1]];
    case 8:
      if (chai < 0) {
        return ["L", [2, 1]];
      } else if (chai > 0) return ["R", [2, 1]];
      else return [hand, [2, 1]];
    case 0:
      if (chai < 0) {
        return ["L", [3, 1]];
      } else if (chai > 0) return ["R", [3, 1]];
      else return [hand, [3, 1]];
  }
};

function solution(numbers, hand) {
  let answer = "";
  if (hand === "right") hand = "R";
  else hand = "L";

  numbers.map((el, i) => {
    let res = pull(el, hand);
    answer += res[0];
    if (res[0] === "L") leftHand = res[1];
    else rightHand = res[1];
  });
  return answer;
}
