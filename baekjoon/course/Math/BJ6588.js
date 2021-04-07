// 백준 6588번 골드바흐의 추측을 풀었습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
    if (line === "0") {
        main();
        rl.close();
    }
    input.push(Number(line));
}).on("close", () => process.exit());

/**
 *
 * @param {number} line
 */
const main = () => {
    const maxValue = Math.max(...input);
    const numbers = new Array(maxValue + 1).fill(false);

    for (let i = 2; i < maxValue; i++) {
        if (numbers[i] === false) {
            for (let j = i * i; j <= maxValue; j += i) {
                numbers[j] = true;
            }
        }
    }

    for (let i = 0; i < input.length; i++) {
        const curNumber = input[i];

        for (let j = 3; j < curNumber; j += 2) {
            if (!numbers[j] && !numbers[curNumber - j]) {
                console.log(`${curNumber} = ${j} + ${curNumber - j}`);
                break;
            }
        }
    }
};
