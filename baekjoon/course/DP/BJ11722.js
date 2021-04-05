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
    const numbers = line.split(" ").map(Number).reverse();

    const DP = [];

    for (let i = 0; i < numbers.length; i++) {
        DP[i] = 1;
        for (let j = 0; j < i; j++) {
            if (DP[j] + 1 > DP[i] && numbers[j] < numbers[i]) {
                DP[i] = DP[j] + 1;
            }
        }
    }

    console.log(Math.max(...DP));
};
