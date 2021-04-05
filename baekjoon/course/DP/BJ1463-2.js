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

const main = (line) => {
    const DP = new Array(Number(line) + 1).fill(0);

    for (let i = 2; i <= line; i++) {
        DP[i] = DP[i - 1] + 1;
        if (i % 2 === 0) {
            DP[i] = Math.min(DP[i / 2] + 1, DP[i]);
        }
        if (i % 3 === 0) {
            DP[i] = Math.min(DP[i / 3] + 1, DP[i]);
        }
    }

    console.log(DP[line]);
};
