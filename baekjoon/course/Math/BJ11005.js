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
    let [N, B] = line.split(" ");
    N = Number(N);

    const numbers = [];
    let square = 0;
    while (N >= B) {
        const value = N % B;
        numbers.push({ value: value, square: square++ });
        N = parseInt(N / B);
    }
    numbers.push({ value: N, square: square++ });

    let answer = "";
    numbers.reverse().forEach((el) => {
        if (el.value > 9) {
            answer += String.fromCharCode(el.value + 65 - 10);
        } else {
            answer += el.value;
        }
    });
    console.log(answer);
};
