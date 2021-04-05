// 백준 14501번 퇴사 문제를 풀었습니다.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 0;
const input = [];

rl.on("line", (line) => {
    if (count === 0) {
        count = Number(line);
    } else {
        input.push(line);
        if (input.length === count) {
            main();
            rl.close();
        }
    }
}).on("close", () => {
    process.exit();
});

const main = () => {
    const T = [0];
    const P = [0];

    input.forEach((el) => {
        numbers = el.split(" ").map(Number);
        const day = numbers[0];
        const price = numbers[1];

        T.push(day);
        P.push(price);
    });

    const DP = new Array(T.length).fill(0);

    for (let i = 1; i < DP.length; i++) {
        DP[i] = P[i];

        if (i + T[i] - 1 > count) {
            DP[i] = DP[i - 1];
            continue;
        }

        let temp = DP[i];
        for (let j = 1; j < i; j++) {
            if (j + T[j] <= i) {
                temp = Math.max(temp, DP[j] + P[i]);
            }
        }
        DP[i] = temp;
    }
    console.log(Math.max(...DP.slice(1, count + 1)));
};
