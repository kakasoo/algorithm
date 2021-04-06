// 백준 9184번 신나는 함수 실행을 풀었습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(line);
}).on("close", () => {
    process.exit();
});

const memo = {};

const recursive = (a, b, c) => {
    if (a <= 0 || b <= 0 || c <= 0) {
        return 1;
    }

    if (a > 20 || b > 20 || c > 20) {
        return recursive(20, 20, 20);
    }

    if (memo[a][b][c]) {
        return memo[a][b][c];
    }

    if (a < b && b < c) {
        memo[a][b][c] =
            recursive(a, b, c - 1) +
            recursive(a, b - 1, c - 1) -
            recursive(a, b - 1, c);
    } else {
        memo[a][b][c] =
            recursive(a - 1, b, c) +
            recursive(a - 1, b - 1, c) +
            recursive(a - 1, b, c - 1) -
            recursive(a - 1, b - 1, c - 1);
    }
    return memo[a][b][c];
};

const main = (line) => {
    if (line === "-1 -1 -1") {
        rl.close();
    }

    const numbers = line.split(" ").map(Number);
    const [a, b, c] = numbers;

    for (let i = 0; i <= 20; i++) {
        memo[i] = [];
        for (let j = 0; j <= 20; j++) {
            memo[i][j] = [];
            for (let k = 0; k <= 20; k++) {
                memo[i][j][k] = null;
            }
        }
    }

    console.log(`w(${a}, ${b}, ${c}) = ${recursive(a, b, c)}`);
};
