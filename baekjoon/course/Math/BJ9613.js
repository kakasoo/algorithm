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
    let sum = 0;
    const numbers = line.split(" ").map(Number);
    for (let i = 1; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const gcdValue = gcd(numbers[i], numbers[j]);
            sum += gcdValue;
        }
    }
    console.log(sum);
};
