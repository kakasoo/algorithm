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

/**
 *
 * @param {string} line
 */
const main = (line) => {
    const [N, B] = line.split(" ");
    const length = N.length;
    const numbers = N.split("").map((el, i) => {
        return {
            value: el,
            square: length - i - 1,
        };
    });

    let sum = 0;
    numbers.forEach((el, i) => {
        if (isNaN(el.value)) {
            const cur = el.value.charCodeAt() - 65 + 10;
            const square = cur * (B ** el.square - 1);
            sum += cur + square;
        } else {
            const cur = Number(el.value);
            const square = cur * (B ** el.square - 1);
            sum += cur + square;
        }
    });
    console.log(sum);
};
