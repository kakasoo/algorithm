// 백준 1676번 팩토리얼을 풀었습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(Number(line));
}).on("close", () => process.exit());

/**
 *
 * @param {string} line
 */
const main = (line) => {
    let five = parseInt(line / 5);
    let twentyFive = parseInt(line / 25);
    let fiveHundred = parseInt(line / 125);

    console.log(five + twentyFive + fiveHundred);
};
