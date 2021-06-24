// 프로그래머스 레벨2 예상 대진표를 풀었습니다.
// 둘 씩 잘라서 계속 붙게 하면 언젠가 만나겠거니, 라는 생각으로 풀었습니다.

const getOneRound = (arr) => {
    const answer = [];
    for (let i = 0; i < arr.length; i += 2) {
        answer.push([arr[i], arr[i + 1]]);
    }
    return answer;
};

const solution = (n, a, b) => {
    let humans = new Array(n).fill(0);
    humans[a - 1] = 1;
    humans[b - 1] = 1;

    let count = 0;
    loop1: while (true) {
        count++;

        humans = getOneRound(humans);
        for (let i = 0; i < humans.length; i++) {
            if (humans[i].filter((el) => el === 1).length === 2) {
                break loop1;
            } else if (humans[i].filter((el) => el === 1).length === 1) {
                humans[i] = humans[i].filter((el) => el !== 0);
            } else {
                humans[i].pop();
            }
        }
        humans = humans.flat(Infinity);
    }
    return count;
};
