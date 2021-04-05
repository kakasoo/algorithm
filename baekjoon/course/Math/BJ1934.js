const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
let count = 0;
rl.on("line", (line) => {
    if (!count) {
        count = Number(line);
    } else {
        input.push(line);
        main(line);
        if (input.length === count) {
            rl.close();
        }
    }
}).on("close", () => {
    process.exit();
});

const gcd = (A, B) => {
    if (B === 0) {
        return A;
    } else {
        return gcd(B, A % B);
    }
};

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const [A, B] = line.split(" ").map(Number);
    const gcdValue = gcd(A, B);
    const lcdValue = gcdValue * (A / gcdValue) * (B / gcdValue);
    console.log(lcdValue);
};
