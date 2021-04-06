// 백준 2460번 지능형 기차를 풀었습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line);
    if (input.length === 10) {
        main();
        rl.close();
    }
}).on("close", () => {
    process.exit();
});

const main = () => {
    const train = input.map((el) => el.split(" "));

    let maxValue = 0;
    let cur = 0;
    train.forEach((el) => {
        const wentOut = Number(el[0]);
        const entered = Number(el[1]);

        cur = cur - wentOut + entered;
        if (maxValue < cur) {
            maxValue = cur;
        }
    });
    console.log(maxValue);
};
