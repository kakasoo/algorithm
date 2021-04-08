// 백준 2752번 세수 정렬을 풀었습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(line);
    rl.close();
}).on("close", () => process.exit());

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const numbers = line
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b)
        .join(" ");
    console.log(numbers);
};
