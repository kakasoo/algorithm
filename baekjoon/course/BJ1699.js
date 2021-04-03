const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(line);
    rl.close();
}).on("close", () => process.exit());

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const numbers = new Array(Number(line) + 1).fill(0).map((el, i) => i);
    const DP = [0, 1];

    for (let i = 1; i < numbers.length; i++) {
        DP[i] = DP[i - 1] + 1;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i - j ** 2 >= 0 && DP[i - j ** 2] + 1 < DP[i]) {
                DP[i] = DP[i - j ** 2] + 1;
            }
        }
    }
    console.log(DP[numbers.length - 1]);
};
