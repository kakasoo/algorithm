const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(line);
    rl.close();
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
    console.log(gcdValue);
    console.log(lcdValue);
};
