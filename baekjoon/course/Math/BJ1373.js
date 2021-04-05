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
    // 1. 2진수를 10진수로 변환한다.
    let ten = BigInt(0);
    for (let i = 0; i < line.length; i++) {
        const cur = line[i] * 2 ** (line.length - i - 1);
        ten += BigInt(cur);
    }

    // 2. 10진수를 8진수로 변환한다.
    const numbers = [];
    let square = 0;
    while (ten >= 8) {
        const value = ten % BigInt(8);
        numbers.push({ value: value, square: square++ });
        ten = ten / BigInt(8);
    }
    numbers.push({ value: ten, square: square++ });

    // 3. 숫자 부분을 이어서 출력해준다.
    let answer = "";
    numbers.reverse().forEach((el) => (answer += el.value));
    console.log(answer);
};
