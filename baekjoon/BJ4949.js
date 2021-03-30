const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    if (line === ".") {
        rl.close();
    }
    main(line);
}).on("close", () => {
    process.exit();
});

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const bracket = line
        .split("")
        .filter((el) => el === "(" || el === ")" || el === "[" || el === "]");

    const big = [];

    if (bracket.length % 2 !== 0) {
        console.log("no");
        return;
    }

    // console.log(bracket);

    for (let i = 0; i < bracket.length; i++) {
        const cur = bracket[i];
        if (cur === "[") {
            big.push(cur);
            // console.log("big : ", big);
        }
        if (cur === "]") {
            if (big[big.length - 1] === "[") {
                big.pop();
                // console.log("big : ", big);
            } else {
                big.push(cur);
                // console.log("big : ", big);
            }
        }
        if (cur === "(") {
            big.push(cur);
            // console.log("big : ", big);
        }
        if (cur === ")") {
            if (big[big.length - 1] === "(") {
                big.pop();
                // console.log("big : ", big);
            } else {
                big.push(cur);
                // console.log("big : ", big);
            }
        }
    }

    if (!big.length && !big.length) {
        console.log("yes");
    } else {
        console.log("no");
    }
};
