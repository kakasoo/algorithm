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
        input.push(Number(line));
        if (input.length === count) {
            rl.close();
        }
    }
}).on("close", () => {
    const numbers = input
        .map((el, i) => {
            return {
                value: el,
                index: i,
            };
        })
        .sort((a, b) => a.value - b.value);

    let maxValue = 0;
    for (let i = 0; i < count; i++) {
        maxValue = Math.max(maxValue, numbers[i].index - i);
    }

    console.log(maxValue + 1);
});
