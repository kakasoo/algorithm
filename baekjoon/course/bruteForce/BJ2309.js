const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const people = [];
rl.on("line", (line) => {
    people.push(line);

    if (people.length === 9) {
        main(people);
    }
});

/**
 *
 * @param {string[]} people
 */
const main = (people) => {
    const heights = people.map(Number).sort((a, b) => a - b);
    const sum = heights.reduce((acc, cur) => acc + cur);
    const minus = sum - 100;

    let check1, check2;
    for (let i = 0; i < 8; i++) {
        for (let j = i + 1; j < 9; j++) {
            if (heights[i] + heights[j] === minus) {
                [check1, check2] = [i, j];
            }
        }
    }

    for (let i = 0; i < 9; i++) {
        if (i !== check1 && i !== check2) {
            console.log(heights[i]);
        }
    }
};
