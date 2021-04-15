const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    let answer = "";
    for (let i = 0; i < line.length; i++) {
        answer += line[i];
        if (answer.length === 10) {
            console.log(answer);
            answer = "";
        }
    }
    console.log(answer);
});
