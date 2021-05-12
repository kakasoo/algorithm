const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    const [E, S, M] = line.split(" ").map(Number);

    let count = 1;
    while (true) {
        if (
            (count - E) % 15 === 0 &&
            (count - S) % 28 === 0 &&
            (count - M) % 19 === 0
        ) {
            console.log(count);
            process.exit();
        }
        count++;
    }
});
