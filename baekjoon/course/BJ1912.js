const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 0;

rl.on("line", (line) => {
    if (!count) {
        count = Number(line);
    } else {
        main(line);
        rl.close();
    }
}).on("close", () => {
    process.exit();
});

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const numbers = line.split(" ").map(Number);
    const DP = [];

    for (let i = 0; i < numbers.length; i++) {
        DP[i] = numbers[i];
        if (DP[i] < DP[i - 1] + numbers[i]) {
            DP[i] = DP[i - 1] + numbers[i];
        }
    }

    console.log(Math.max(...DP));
};
