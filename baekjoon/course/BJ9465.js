const readline = require("readline");
const input = [];
let count = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    if (!count) {
        count = 3 * line;
    } else {
        input.push(line);

        if (input.length % 3 === 0) {
            main();
        }

        if (input.length === count) {
            rl.close();
        }
    }
}).on("close", () => {
    process.exit();
});

const main = () => {
    const post = input.slice(-2).map((el) => el.split(" ").map(Number));
    const DP = new Array(post[0].length).fill(0);
    for (let i = 0; i < post[0].length; i++) {
        DP[i] = [];
    }
    DP[0] = [post[0][0], post[1][0]];

    for (let i = 1; i < post[0].length; i++) {
        DP[i][0] = DP[i - 1][1] + post[0][i];
        DP[i][1] = DP[i - 1][0] + post[1][i];
        if (i >= 2) {
            DP[i][0] = Math.max(
                DP[i][0],
                DP[i - 2][0] + post[0][i],
                DP[i - 2][1] + post[0][i]
            );

            DP[i][1] = Math.max(
                DP[i][1],
                DP[i - 2][0] + post[1][i],
                DP[i - 2][1] + post[1][i]
            );
        }
    }
    console.log(Math.max(DP[post[0].length - 1][0], DP[post[0].length - 1][1]));
};
