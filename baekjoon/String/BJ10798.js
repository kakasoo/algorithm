const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
let maxValue = 0;

rl.on("line", (line) => {
    if (maxValue < line.length) {
        maxValue = line.length;
    }
    input.push(line.split(""));

    if (input.length === 5) {
        let answer = "";
        for (let i = 0; i < maxValue; i++) {
            input.forEach((str) => {
                const part = str.shift();
                if (part) {
                    answer += part;
                }
            });
        }
        console.log(answer);
        process.exit();
    }
});
