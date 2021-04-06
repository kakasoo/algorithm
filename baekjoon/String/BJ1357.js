// 백준 1357번 뒤집힌 덧셈을 풀었습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(line);
    rl.close();
}).on("close", () => process.exit());

const reverseString = (el) => {
    let newString = "";
    for (let i = el.length - 1; i >= 0; i--) {
        newString += el[i];
    }
    return newString;
};

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const numbers = line.split(" ").map(reverseString).map(Number);
    const sum = numbers.reduce((acc, cur) => (acc += cur));
    const answer = reverseString(String(sum));
    console.log(Number(answer));
};
