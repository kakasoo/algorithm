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
    const numbers = [];
    while (line.length > 3) {
        numbers.push(line.substr(line.length - 3, 3));
        line = line.substr(0, line.length - 3);
    }
    numbers.push(line);

    let answer = "";
    numbers.reverse().forEach((el) => {
        const ten = parseInt(el, 2);
        const hex = ten.toString(8);
        answer += hex;
    });
    console.log(answer);
};
