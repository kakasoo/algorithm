// 시간초과와 메모리 문제로 풀 수가 없다, 백준에서 업데이트 예정이라 하니 나중에 다시 해보자.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const getPermutations = function* (elements) {
    if (elements.length === 1) {
        yield elements;
    } else {
        let [first, ...rest] = elements;
        for (const perm of getPermutations(rest)) {
            for (let i = 0; i < elements.length; i++) {
                const start = perm.slice(0, i);
                const rest = perm.slice(i);
                yield [...start, first, ...rest];
            }
        }
    }
};

const getCombinations = function* (elements, length) {
    for (let i = 0; i < elements.length; i++) {
        if (length === 1) {
            yield [elements[i]];
        } else {
            let remaining = getCombinations(
                elements.slice(i + 1, elements.length),
                length - 1
            );
            for (let next of remaining) {
                yield [elements[i], ...next];
            }
        }
    }
};

const input = [];

rl.on("line", (line) => {
    input.push(line);

    if (input.length === 2) {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        const length = input[1].split(" ").length + 1;

        let maxValue = -9999999999;
        let minValue = 9999999999;

        const passedPerm = [];
        for (const combination of getCombinations(numbers, length)) {
            loop1: for (const permutation of getPermutations(combination)) {
                let result = "";
                for (let j = 0; j < permutation.length - 1; j++) {
                    result += permutation[j];
                    result += input[1].split(" ")[j];
                }
                result += permutation[permutation.length - 1];

                for (let i = 0; i <= result.length - 2; i += 2) {
                    const first = result[i];
                    const expression = result[i + 1];
                    const second = result[i + 2];

                    if (
                        !new Function(`return ${first}${expression}${second}`)()
                    ) {
                        continue loop1;
                    }
                }

                passedPerm.push(permutation);
            }
        }

        const answers = passedPerm.map((el) => el.join(""));
        maxValue = Math.max(maxValue, ...answers);
        minValue = Math.min(minValue, ...answers);

        const numPad = (str) => {
            while (str.toString().length < length) {
                str = "0" + str;
            }
            return str;
        };

        console.log(numPad(maxValue));
        console.log(numPad(minValue));
    }
});
