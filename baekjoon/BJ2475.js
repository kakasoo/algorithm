const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(line);
}).on("close", () => {
    process.exit();
});

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const numbers = line.split(" ").map(Number);
    const sum = numbers.map((el) => el * el).reduce((acc, cur) => acc + cur);

    console.log(sum % 10);
};
