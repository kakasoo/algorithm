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
    }
});

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const numbers = line.split(" ").map(Number);
    const DP = new Array(numbers.length).fill(0);

    for (let i = 0; i < numbers.length; i++) {
        DP[i] = [1, [numbers[i]]];

        for (let j = 0; j < i; j++) {
            if (DP[i][0] < DP[j][0] + 1 && numbers[j] < numbers[i]) {
                DP[i][1] = [...DP[j][1], numbers[i]];
                DP[i][0] = DP[j][0] + 1;
            }
        }
    }

    let maxValue = DP[0][0];
    let temp = DP[0][1];

    for (let i = 1; i < DP.length; i++) {
        if (maxValue < DP[i][0]) {
            maxValue = DP[i][0];
            temp = DP[i][1];
        }
    }
    // console.log(DP);
    console.log(temp.length);
    // 배열을 출력하고 있었다...
    console.log(temp.join(" "));
};
