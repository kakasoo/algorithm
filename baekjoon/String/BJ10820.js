const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(line);
});

/**
 *
 * @param {string} line
 */
const main = (line) => {
    let small = 0;
    let big = 0;
    let num = 0;
    let space = 0;

    for (let i = 0; i < line.length; i++) {
        const cur = line[i];

        if (!isNaN(cur - 0)) {
            if (cur === " ") {
                space++;
            } else {
                num++;
            }
        }

        if (
            "a".charCodeAt(0) <= cur.charCodeAt(0) &&
            cur.charCodeAt(0) <= "z".charCodeAt(0)
        ) {
            small++;
        }

        if (
            "A".charCodeAt(0) <= cur.charCodeAt(0) &&
            cur.charCodeAt(0) <= "Z".charCodeAt(0)
        ) {
            big++;
        }
    }

    console.log(`${small} ${big} ${num} ${space}`);
};
