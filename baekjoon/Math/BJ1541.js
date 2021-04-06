// 백준 1541번 잃어버린 괄호를 풀었습니다.
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
    const minuses = line.split("-").map((el) =>
        el
            .split("+")
            .map(Number)
            .reduce((acc, cur) => acc + cur)
    );

    console.log(minuses.reduce((acc, cur) => (acc -= cur)));
};
