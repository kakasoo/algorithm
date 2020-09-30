// 프로그래머스 레벨2 프린터를 풀었습니다.
const 더큰게있니 = (얘, 다른애들) => {
  for (let i = 0; i < 다른애들.length; i++) {
    if (다른애들[i].prio > 얘.prio) return true;
  }
  return false;
};

function solution(priorities, location) {
  let index = [];
  priorities.map((el, i) => {
    index.push({ idx: i, prio: el });
  });
  console.log(index);

  let count = 0;
  while (index.length !== 0) {
    let temp = index.shift();
    if (더큰게있니(temp, index)) {
      index.push(temp);
    } else {
      count++;
      if (temp.idx === location) return count;
    }
  }
}
