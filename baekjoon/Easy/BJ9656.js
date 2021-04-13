const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(Number(line));
    process.exit();
});

const main = (line) => {
    const answer = line % 4;

    if (answer === 1) {
        console.log("CY");
    } else if (answer === 3) {
        console.log("CY");
    } else {
        console.log("SK");
    }
};
