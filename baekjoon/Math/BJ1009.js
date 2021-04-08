// 백준 1009번 분산처리를 풀었습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
let count = 0;
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
}).on("close", () => process.exit());

const main = () => {
    for (let i = 0; i < count; i++) {
        let [a, b] = input[i].split(" ").map(Number);
        a %= 10;

        let temp = a;
        for (let j = 0; j < b - 1; j++) {
            temp = (temp * a) % 10;
        }

        if (!temp) {
            console.log(10);
        } else {
            console.log(temp);
        }
    }
};
