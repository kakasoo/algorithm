// 백준 2576번 홀수를 풀었습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 7;
const input = [];
rl.on("line", (line) => {
    if (!count) {
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
    const numbers = input.map(Number);

    let minValue = 100;
    let sum = 0;
    for (let i = 0; i < 7; i++) {
        if (numbers[i] % 2 === 1) {
            sum += numbers[i];
            if (numbers[i] < minValue) {
                minValue = numbers[i];
            }
        }
    }

    if (sum === 0) {
        console.log(-1);
    } else {
        console.log(sum);
        console.log(minValue);
    }
};
