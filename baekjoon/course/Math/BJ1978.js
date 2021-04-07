// 백준 1978번 소수찾기를 풀었습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 0;
rl.on("line", (line) => {
    if (!count) {
        count = Number(line);
    } else {
        main(line);
        rl.close();
    }
}).on("close", () => process.exit());

/**
 *
 * @param {number} num
 */
const isPrime = (num) => {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const numbers = line.split(" ").map(Number);

    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        const curNumber = numbers[i];
        if (curNumber < 2) {
            continue;
        }

        if (isPrime(curNumber)) {
            count++;
        }
    }
    console.log(count);
};
