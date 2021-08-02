const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const [first, second] = input;

    if (first.length >= second.length) {
        console.log("go");
    } else {
        console.log("no");
    }
});
