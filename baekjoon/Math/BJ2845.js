const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
    input.push(line);
    if (input.length === 2) {
        const [L, P] = input[0].split(" ").map(Number);
        const sqaure = L * P;

        let res = "";
        const numbers = input[1].split(" ").map(Number);

        for (let i = 0; i < numbers.length; i++) {
            res += numbers[i] - sqaure;
            res += " ";
        }
        console.log(res);
        process.exit();
    }
});
