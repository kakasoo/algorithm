const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(Number(line));
    rl.close();
}).on("close", () => {
    process.exit();
});

const main = (line) => {
    const DP = new Array(line + 1).fill(0);
    for (let i = 1; i <= line; i++) {
        DP[i] = [];
    }
    DP[1] = [BigInt(0), BigInt(1)];

    for (let i = 2; i <= line; i++) {
        DP[i][1] = DP[i - 1][0];
        DP[i][0] = DP[i - 1][0] + DP[i - 1][1];
    }
    console.log(String(DP[line].reduce((acc, cur) => acc + cur)));
};
