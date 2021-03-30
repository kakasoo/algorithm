const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.output,
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
        for (let j = 0; j < i; j++) {
            if (numbers[j] < numbers[i] && DP[i] < DP[j] + numbers[i]) {
                DP[i] = DP[j] + numbers[i];
            }
        }
    }
    console.log(Math.max(...DP));
};
