// 백준 2156번 포도주 시식을 풀었습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 0;
const input = [0];

rl.on("line", (line) => {
    if (!count) {
        count = Number(line);
    } else {
        input.push(Number(line));
        if (input.length === count + 1) {
            main();
            rl.close();
        }
    }
}).on("close", () => {
    process.exit();
});

const main = () => {
    const DP = new Array(count + 1).fill(0);
    DP[1] = input[1];
    DP[2] = input[2] + DP[1];
    DP[3] = Math.max(DP[1] + input[3], input[2] + input[3]);

    for (let i = 1; i <= 3; i++) {
        if (isNaN(DP[i])) {
            DP[i] = 0;
        }
    }

    for (let i = 4; i <= count; i++) {
        DP[i] = Math.max(
            input[i] + DP[i - 2],
            input[i] + input[i - 1] + DP[i - 3],
            input[i] + input[i - 1] + DP[i - 4],
            DP[i - 1]
        );
    }

    console.log(Math.max(...DP));
};
