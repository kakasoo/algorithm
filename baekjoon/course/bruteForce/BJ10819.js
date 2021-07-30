// 백준 10819번 차이를 최대로를 풀었습니다.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    if (isNaN(line)) {
        const permutation = [...permutations(line.split(" ").map(Number))];

        const answer = [];
        for (let i = 0; i < permutation.length; i++) {
            let sum = 0;
            for (let j = 0; j < permutation[i].length - 1; j++) {
                sum += Math.abs(permutation[i][j] - permutation[i][j + 1]);
            }
            answer.push(sum);
        }
        console.log(Math.max(...answer));
    }
});

/**
 *
 * @param {numbers[]} elements
 */
function* permutations(elements) {
    if (elements.length === 1) {
        yield elements;
    } else {
        const [first, ...rest] = elements;

        for (const a of permutations(rest)) {
            for (let i = 0; i < elements.length; i++) {
                const start = a.slice(i);
                const ended = a.slice(0, i);
                yield [...start, first, ...ended];
            }
        }
    }
}
