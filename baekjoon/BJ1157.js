const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    // M, I, S, S, I, S, S, I, P, I
    const letters = line.toLocaleUpperCase().split("").sort(); // I, I, I, I, M, P, S, S, S, S
    const alphabets = [...new Set(letters)]; // I, M, P, S

    const map = {};

    alphabets.forEach((alphabet) => {
        map[alphabet] = letters.filter((el) => el === alphabet).length;
    }); // { I: 4, M: 1, P: 1, S: 4 }

    const count = Math.max(...Object.values(map)); // 4

    const maximum = Object.entries(map).filter(
        ([key, value]) => value === count
    ); // [ [ 'I', 4 ], [ 'S', 4 ] ]

    if (maximum.length >= 2) {
        console.log("?");
        return;
    }

    console.log(maximum[0][0]);
});
