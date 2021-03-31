const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(Number(line));
    rl.close();
}).on("close", () => {
    process.exit();
});

/**
 *
 * @param {number} line
 */
const main = (line) => {
    const DP = new Array(line + 1).fill(0);
    DP[2] = 3;

    for (let i = 4; i <= line; i += 2) {
        DP[i] = DP[i - 2] * DP[2] + 2;
        for (let j = 4; j < i; j += 2) {
            DP[i] += DP[i - j] * 2;
        }
    }
    console.log(DP[line]);
};
