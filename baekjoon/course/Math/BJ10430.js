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

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const [A, B, C] = line.split(" ").map(Number);
    console.log((A + B) % C);
    console.log(((A % C) + (B % C)) % C);
    console.log((A * B) % C);
    console.log(((A % C) * (B % C)) % C);
};
