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

const findEmotion = (line, emotion) => {
    let count = 0;
    for (let i = 0; i < line.length - 3; i++) {
        if (line[i] === emotion[0]) {
            if (line[i + 1] === emotion[1]) {
                if (line[i + 2] === emotion[2]) {
                    count++;
                }
            }
        }
    }
    return count;
};

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const happy = findEmotion(line, ":-)");
    const sad = findEmotion(line, ":-(");

    if (happy > sad) {
        console.log("happy");
    } else if (sad > happy) {
        console.log("sad");
    } else {
        if (happy === 0) {
            console.log("none");
        } else {
            console.log("unsure");
        }
    }
};
