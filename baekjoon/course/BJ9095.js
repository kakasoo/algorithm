const readline = require("readline");
const input = [];
let count = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    if (count === 0) {
        count = line;
        return;
    }

    if (input.length < count) {
        input.push(line);
        main(line);
        if (input.length === Number(count)) {
            rl.close();
        }
    }
}).on("close", () => {
    process.exit();
});

const main = (line) => {
    line = Number(line);
    const DP = new Array(line + 1).fill(0);
    DP[1] = 1;
    DP[2] = 2;
    DP[3] = 4;

    for (let i = 4; i <= line; i++) {
        DP[i] = (DP[i - 1] + DP[i - 2] + DP[i - 3]) % 10007;
    }
    console.log(DP[line]);
};
