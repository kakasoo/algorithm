// 백준 10103번 주사위 게임을 풀었습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 0;
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
    let chang = 100;
    let sang = 100;

    input.forEach((el) => {
        const [a, b] = el.split(" ").map(Number);
        if (a > b) {
            sang -= a;
        } else if (a < b) {
            chang -= b;
        }
    });
    console.log(chang);
    console.log(sang);
};
