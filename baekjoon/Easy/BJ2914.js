const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    const [songs, avg] = line.split(" ");
    console.log(songs * (avg - 1) + 1);
    process.exit();
});
