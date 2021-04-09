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
    const numbers = line.split("");

    let answer = "";
    numbers.forEach((str, i) => {
        const dex = parseInt(str, 8);
        let binary = dex.toString(2);
        while (i !== 0 && binary.length < 3) {
            binary = "0" + binary;
        }
        answer += binary;
    });
    console.log(answer);
};
