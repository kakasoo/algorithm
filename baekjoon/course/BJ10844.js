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

const mod = BigInt(1000000000);

/**
 *
 * @param {number} line
 */
const main = (line) => {
    const DP = new Array(line + 1);
    for (let i = 0; i <= line + 1; i++) {
        DP[i] = [];
    }

    for (let i = 0; i < 10; i++) {
        if (i === 0) {
            DP[1][0] = BigInt(0);
        } else {
            DP[1][i] = BigInt(1);
        }
    }

    for (let i = 2; i <= line; i++) {
        for (let j = 0; j < 10; j++) {
            DP[i][j] = BigInt(0);
            if (j - 1 >= 0) DP[i][j] += DP[i - 1][j - 1];
            if (j + 1 <= 9) DP[i][j] += DP[i - 1][j + 1];
            DP[i][j] = BigInt(DP[i][j]) % mod;
        }
    }

    const sum = DP[line].reduce((acc, cur) => acc + cur);
    console.log(String(sum % mod));
};
