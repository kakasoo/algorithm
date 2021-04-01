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
}).on("close", () => process.exit());

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const numbers = line.split(" ").map(Number);
    const DP1 = [numbers[0]];
    const DP2 = [numbers[numbers.length - 1]];

    for (let i = 1; i < numbers.length; i++) {
        DP1[i] = Math.max(DP1[i - 1] + numbers[i], numbers[i]);
    }

    numbers.reverse();
    for (let i = 1; i < numbers.length; i++) {
        DP2[i] = Math.max(DP2[i - 1] + numbers[i], numbers[i]);
    }
    DP2.reverse();

    let maxValue = Math.max(...DP1);

    for (let i = 0; i < numbers.length; i++) {
        if (i === 0 || i === numbers.length - 1) {
            continue;
        }
        if (maxValue < DP1[i - 1] + DP2[i + 1]) {
            maxValue = DP1[i - 1] + DP2[i + 1];
        }
    }
    console.log(maxValue);
};
