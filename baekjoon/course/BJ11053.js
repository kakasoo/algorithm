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
    const numbers = ("0 " + line).split(" ").map(Number);
    const DP = new Array(count + 1).fill(1);

    for (let i = 2; i < DP.length; i++) {
        let temp = 0;
        for (let j = 1; j < i; j++) {
            if (numbers[j] < numbers[i]) {
                if (temp < DP[j] + 1) {
                    temp = DP[j] + 1;
                }
            }

            if (temp != 0) {
                DP[i] = temp;
            }
        }
    }

    console.log(Math.max(...DP));
};
