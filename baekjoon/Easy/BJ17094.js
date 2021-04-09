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
    let num = 0;
    let str = 0;
    line.split("").forEach((el) => {
        if (el === "2") num++;
        if (el === "e") str++;
    });

    if (num > str) console.log(2);
    if (num < str) console.log("e");
    if (num === str) console.log("yee");
};
