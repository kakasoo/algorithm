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

const gcd = (a, b) => {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
};

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const [a, b] = line.split(" ").map(Number);
    const value = gcd(a, b);
    console.log((a / value) * (b / value) * value);
};
