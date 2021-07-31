const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count;
const input = [];
let maxValue = -987654321;

rl.on("line", (line) => {
    if (!count) {
        count = Number(line);
    } else {
        input.push(line);

        if (input.length === count) {
            main();
        }
    }
});

const getPermutations = function* (elements) {
    if (elements.length === 1) {
        yield elements;
    } else {
        const [first, ...rest] = elements;

        for (const a of getPermutations(rest)) {
            for (let i = 0; i < elements.length; i++) {
                const start = a.slice(0, i);
                const ended = a.slice(i);

                yield [...start, first, ...ended];
            }
        }
    }
};

const isMax = function* (iterable) {
    for (const a of iterable) {
        const numberChanged = input
            .map((el) => {
                const arr = el.split("");
                return arr
                    .map((el) => {
                        return a.findIndex((target) => target === el);
                    })
                    .join("");
            })
            .map(Number);

        const sum = numberChanged.reduce((acc, cur) => (acc += cur), 0);

        if (sum > maxValue) {
            maxValue = sum;
            yield sum;
        }
    }
};

const main = () => {
    const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    [...isMax(getPermutations(alphabets))];
    console.log(maxValue);
};
