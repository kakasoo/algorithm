// 백준 10974번 모든 순열을 풀었습니다.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    const elements = new Array(Number(line)).fill(0).map((el, i) => i + 1);

    const result = [...permutations(elements)].map((el) => el.join(" ")).sort();

    for (const a of result) {
        console.log(a);
    }
});

/**
 *
 * @param {number[]} elements
 */
function* permutations(elements) {
    if (elements.length === 1) {
        yield elements;
    } else {
        const [first, ...rest] = elements;

        for (const a of permutations(rest)) {
            for (let i = 0; i < elements.length; i++) {
                const start = a.slice(0, i);
                const ended = a.slice(i);

                yield [...start, first, ...ended];
            }
        }
    }
}
