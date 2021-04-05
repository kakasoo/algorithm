const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(line);
    rl.close();
}).on("close", () => process.exit());

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const [N, K] = line.split(" ").map(Number);
    const DP = new Array(K + 1).fill(0);
    // DP[k][N] : k개로 N을 만드는 경우의 수

    for (let i = 0; i <= K; i++) {
        DP[i] = [];
        for (let j = 0; j <= N; j++) {
            DP[i][j] = 0;
        }
    }
    DP[0][0] = 1;

    for (let i = 0; i <= K; i++) {
        for (let j = 0; j <= N; j++) {
            for (let l = 0; l <= j; l++) {
                if (i - 1 >= 0) {
                    DP[i][j] += DP[i - 1][j - l];
                    DP[i][j] %= 1000000000;
                }
            }
        }
    }

    console.log(DP[K][N]);
};
