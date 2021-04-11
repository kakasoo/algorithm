// 백준 10093번 숫자를 풀었습니다.
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
    let [A, B] = line.split(" ").map(BigInt);
    if (A > B) {
        let temp = A;
        A = B;
        B = temp;
    }

    if (A === B || A + BigInt(1) === B) {
        console.log(0);
        return;
    }

    let answer = "";
    for (let i = 1; i < B - A - BigInt(1); i++) {
        answer += `${A + BigInt(i)} `;
    }
    answer += `${B - BigInt(1)}`;

    console.log(String(B - A - BigInt(1)));
    console.log(answer);
};
