// 백준 6603번 로또를 풀었습니다.

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
            const rest = combinations(elements.slice(i + 1), selectNumber - 1);

            for (const a of rest) {
                yield [fixed, ...a];
            }
        }
    }
};

const input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const lottoes = input
        .slice(0, -1)
        .map((el) => el.split(" ").slice(1).map(Number));

    const answer = lottoes.map((lotto) => {
        const res = [];
        for (const a of combinations(lotto, 6)) {
            res.push(a);
        }
        res.push([]);
        return res;
    });

    answer
        .flat(1)
        .slice(0, -1)
        .forEach((el) => console.log(el.join(" ")));
});
