const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let number;
rl.on("line", (line) => {
    if (!number) {
        number = Number(line);
    } else {
        const revsered = line
            .split(" ")
            .map((word) => word.split("").reverse().join(""))
            .join(" ");
        console.log(revsered);
    }
});
