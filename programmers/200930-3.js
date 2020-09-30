// 프로그래머스 레벨2 다리를 지나는 트럭을 풀었습니다.
// 디버깅이 어려운 관계로, 에디터를 사용하여 디버깅을 했다, 실제 답안은 함수들만 사용하면 된다.
const bridge_length = 100;
const weight = 100;
const truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

const truckWeight = (trucks) => {
  let sum = 0;
  for (let i = 0; i < trucks.length; i++) {
    sum += trucks[i].weight;
  }
  return sum;
};

function solution(bridge_length, weight, truck_weights) {
  let dari = {
    time: 1,
    length: bridge_length,
    weight: weight,
    trucks: new Array(),
  };
  let truck = [];

  truck_weights.map((el) => {
    truck.push({ time: 0, weight: el });
  });

  while (truck.length !== 0 || dari.trucks.length !== 0) {
    if (dari.trucks.length === 0) {
      dari.trucks.push(truck.shift());
    } else if (truck.length !== 0) {
      if (dari.weight - truckWeight(dari.trucks) - truck[0].weight >= 0) {
        dari.trucks.push(truck.shift());
      }
    }
    console.log(dari.trucks);

    if (dari.trucks.length !== 0) {
      dari.time++;

      dari.trucks = dari.trucks
        .map((el, i) => {
          el.time++;
          return el;
        })
        .map((el, i) => {
          if (el.time >= dari.length) return "";
          return el;
        })
        .filter((el) => !!el);
    }
  }

  return dari.time;
}

console.log(solution(bridge_length, weight, truck_weights));
