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
    let answer = 1;

    for (let i = 0; i < numbers.length - 1; i++) {
        const left = numbers.slice(0, i + 1);
        const right = numbers.slice(i);
        const DP1 = [];
        const DP2 = [];

        for (let j = 0; j < left.length; j++) {
            DP1[j] = 1;
            for (let k = 0; k < j; k++) {
                if (DP1[k] + 1 > DP1[j] && left[k] < left[j]) {
                    DP1[j] = DP1[k] + 1;
                }
            }
        }

        for (let j = 0; j < right.length; j++) {
            DP2[j] = 1;
            for (let k = 0; k < j; k++) {
                if (DP2[k] + 1 > DP2[j] && right[k] > right[j]) {
                    DP2[j] = DP2[k] + 1;
                }
            }
        }

        const leftMax = Math.max(...DP1);
        const rightMax = Math.max(...DP2);

        const maxValue = leftMax + rightMax - 1;
        if (answer < maxValue) {
            answer = maxValue;
        }
    }

    console.log(answer);
};
