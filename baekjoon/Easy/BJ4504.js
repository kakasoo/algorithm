// 백준 2747번 피보나치 수를 풀었습니다.
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
        if (line === "0") {
            process.exit();
        }
        main(Number(line));
    }
});

/**
 *
 * @param {number} line
 */
const main = (line) => {
    if (line % n == 0) {
        console.log(`${line} is a multiple of ${n}.`);
    } else {
        console.log(`${line} is NOT a multiple of ${n}.`);
    }
};
