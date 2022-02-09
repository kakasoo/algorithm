const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input;
rl.on("line", (line) => {
    input = Number(line);
}).on("close", () => {
    const numbers = new Array(input).fill(0).map((el, i) => i + 1);

    for (let i = 1; i < numbers.length; i += 2) {
        numbers.push(numbers[i]);
    }

    console.log(numbers[numbers.length - 1]);
});
