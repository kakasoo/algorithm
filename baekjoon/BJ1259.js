const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    if (line === "0") {
        rl.close();
    }
    main(line);
}).on("close", () => {
    process.exit();
});

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const numbers = line.split("");
    while (numbers.length >= 2) {
        const pre = numbers.shift();
        const back = numbers.pop();

        if (pre !== back) {
            console.log("no");
            return;
        }
    }
    console.log("yes");
};
