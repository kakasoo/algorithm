// 백준 2566번 최댓값을 풀었습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 9;
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
    const numbers = input.map((el) => el.split(" ").map(Number));

    let maxValue = 0;
    let maxY = 0;
    let maxX = 0;

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (maxValue < numbers[i][j]) {
                maxValue = numbers[i][j];
                maxY = i;
                maxX = j;
            }
        }
    }
    console.log(maxValue);
    console.log(`${maxY + 1} ${maxX + 1}`);
};
