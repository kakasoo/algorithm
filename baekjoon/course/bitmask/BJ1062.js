// 백준 11723번 node.js는 메모리 제한으로 풀 수 없는 문제.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

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

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    let [N, K] = input.splice(0, 1)[0].split(" ").map(Number);
    K -= 5;

    const words = input.map((el) => el.split("").splice(4, el.length - 8));
    const defaultStr = ["a", "n", "t", "i", "c"];
    if (K < 0) {
        console.log(0);
        return;
    } else if (K === 0) {
        const isAble = [...defaultStr];
        let count = 0;
        word: for (let i = 0; i < words.length; i++) {
            for (let j = 0; j < words[i].length; j++) {
                if (!isAble.includes(words[i][j])) {
                    continue word;
                }
            }
            count++;
        }

        console.log(count);
        return;
    } else if (K === 26) {
        console.log(N);
        return;
    } else {
        const restAlpha = [
            "b",
            "d",
            "e",
            "f",
            "g",
            "h",
            "j",
            "k",
            "l",
            "m",
            "o",
            "p",
            "q",
            "r",
            "s",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
        ];

        let maxValue = 0;
        for (const a of combinations(restAlpha, K)) {
            const isAble = [...defaultStr, ...a];
            let count = 0;
            word: for (let i = 0; i < words.length; i++) {
                for (let j = 0; j < words[i].length; j++) {
                    if (!isAble.includes(words[i][j])) {
                        continue word;
                    }
                }
                count++;
            }

            if (maxValue < count) {
                maxValue = count;
            }
        }
        console.log(maxValue);
    }
});
