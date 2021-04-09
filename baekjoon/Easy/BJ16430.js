const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(line);
    process.exit();
});

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const [A, B] = line.split(" ");
    console.log(`${B - A} ${B}`);
};
