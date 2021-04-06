// 백준 2480번 주사위 세 개를 풀었습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 0;
rl.on("line", (line) => {
    if (!count) {
        count = Number(line);
    } else {
        main(line);
        rl.close();
    }
}).on("close", () => {
    process.exit();
});

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const numbers = line.split(" ").map(Number);

    let sum = 0;
    let point = 1;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]) {
            sum += point++;
        } else {
            point = 1;
        }
    }
    console.log(sum);
};
