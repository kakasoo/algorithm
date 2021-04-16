const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(line);
}).on("close", () => process.exit());

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const [N, K] = line.split(" ").map(Number);
    const arr = new Array(N).fill(0).map((el, i) => i + 1);
    let answer = "<";

    while (arr.length) {
        for (let i = 0; i < K; i++) {
            arr.push(arr.shift());
        }

        if (arr.length === 1) {
            answer += `${arr.pop()}>`;
        } else {
            answer += `${arr.pop()}, `;
        }
    }
    console.log(answer);
};
