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

const dfs = (cur, max, value) => {
    if (cur === max) {
        console.log(value);
        process.exit();
    }

    if (cur * 2 <= max) {
        dfs(cur * 2, max, value + 1);
    }
    if (cur + "1" <= max) {
        dfs(Number(cur + "1"), max, value + 1);
    }
};

const main = (line) => {
    const numbers = line.split(" ").map(Number);
    dfs(numbers[0], numbers[1], 1);
    console.log(-1);
};
