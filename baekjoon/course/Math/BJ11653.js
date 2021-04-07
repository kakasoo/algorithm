// 백준 11653번 소인수분해를 풀었습니다.
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
    const numbers = new Array(line + 1).fill(false);
    const prime = [];
    for (let i = 2; i * i <= line; i++) {
        if (numbers[i] === false) {
            prime.push(i);
            for (let j = i * i; j <= line; j += i) {
                numbers[j] = true;
            }
        }
    }
    let temp = line;
    for (let i = 0; i < prime.length; i++) {
        while (temp % prime[i] === 0) {
            temp /= prime[i];
            console.log(prime[i]);
        }
    }
    if (temp > 1) {
        console.log(temp);
    }
};
