// 백준 2480번 주사위 세 개를 풀었습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(line);
    rl.close();
}).on("close", () => {
    process.exit();
});

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const [A, B, C] = line
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b);

    if (A === B && B === C) {
        console.log(10000 + A * 1000);
    } else if (A === B || B === C) {
        console.log(1000 + B * 100);
    } else {
        console.log(C * 100);
    }
};
