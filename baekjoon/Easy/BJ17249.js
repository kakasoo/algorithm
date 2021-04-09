const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n = 0;
rl.on("line", (line) => {
    if (!n) {
        n = Number(line);
    } else {
        main(line);
        process.exit();
    }
});

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const [left, right] = line.split("(");

    const counter = (str) => {
        let count = 0;
        str.split("").forEach((el) => {
            if (el === "@") {
                count++;
            }
        });
        return count;
    };

    console.log(`${counter(left)} ${counter(right)}`);
};
