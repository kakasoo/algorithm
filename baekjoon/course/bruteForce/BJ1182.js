// 백준 1182번 부분 수열의 합을 풀었습니다.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const combinations = function* (elements, selectNumber) {
    for (let i = 0; i < elements.length; i++) {
        if (selectNumber === 1) {
            yield [elements[i]];
        } else {
            const fixed = elements[i];
            const rest = elements.slice(i + 1);

            for (const a of combinations(rest, selectNumber - 1)) {
                yield [fixed, ...a];
            }
        }
    }
};

const input = [];
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const target = Number(input.splice(0, 1)[0].split(" ")[1]);
    const numbers = input[0].split(" ").map(Number);

    let count = 0;
    for (let i = 1; i <= numbers.length; i++) {
        for (const a of combinations(numbers, i)) {
            const sum = a.reduce((acc, cur) => acc + cur);
            if (sum === target) {
                count++;
            }
        }
    }
    console.log(count);
});
