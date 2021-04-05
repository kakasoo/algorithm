const readline = require("readline");
const input = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    input.push(line);
    if (input.length === 2) {
        main("0 " + line);
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
    const number = input[0];
    const prices = line.split(" ").map(Number);
    const DP = prices.map((el) => el);

    for (let i = 1; i <= number; i++) {
        for (let j = 1; j < prices.length; j++) {
            if (i - j > 0 && prices[j] + DP[i - j] > DP[i]) {
                DP[i] = prices[j] + DP[i - j];
            }
        }
    }

    console.log(DP[number]);
};
