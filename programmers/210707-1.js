// 프로그래머스 레벨2 n진수 게임을 풀었습니다.
// 제너레이터를 활용한 풀이

function* printNumbers(start, n) {
    for (let i = start; i < Infinity; i++) {
        const curNumber = Number(i).toString(n).split("");
        for (let j = 0; j < curNumber.length; j++) {
            yield curNumber[j].toUpperCase();
        }
    }
}

const solution = (n, t, m, p) => {
    const iter = printNumbers(0, n);

    const answer = [];
    for (let i = 0; i < t * m; i++) {
        answer.push(iter.next().value);
    }

    return answer.filter((el, i) => i % m === p - 1).join("");
};
