// 백준 2145번 숫자놀이를 풀었습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    if (line === "0") {
        rl.close();
    }
    main(line);
}).on("close", () => {
    process.exit();
});

/**
 *
 * @param {string} line
 */
const main = (line) => {
    let numbers = line.split("");
    const sumOfString = (acc, cur) => {
        acc = Number(acc);
        acc += Number(cur);
        return acc;
    };

    while (numbers.length >= 2) {
        numbers = numbers.reduce(sumOfString).toString().split("");
    }
    console.log(numbers[0]);
};
