// 백준 14888번 연산자 끼워넣기를 풀었습니다.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const permutations = function* (elements) {
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
};

const makeExpression = (numbers, operators) => {
    let operIndex = 0;
    let acc = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        const b = numbers[i];
        const oper = operators[operIndex++];

        if (oper === "/") {
            acc = parseInt(acc / b);
        } else if (oper === "+") {
            acc = acc + b;
        } else if (oper === "-") {
            acc = acc - b;
        } else {
            acc = acc * b;
        }
    }

    return acc;
};

const input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const numbers = [];
    const operators = [];

    input.slice(1).forEach((line, i) => {
        if (i === 0) {
            numbers.push(...line.split(" ").map(Number));
        } else {
            const obj = {};
            line.split(" ").map((el, i) => {
                const operator = ["+", "-", "*", "/"][i];
                obj[operator] = el;
            });
            Object.entries(obj).forEach((el) => {
                for (let i = 0; i < el[1]; i++) {
                    operators.push(el[0]);
                }
            });
        }
    });

    let maxValue = -987654321;
    let minValue = 987654321;
    for (const operSet of permutations(operators)) {
        const value = makeExpression(numbers, operSet);
        maxValue = Math.max(maxValue, value);
        minValue = Math.min(minValue, value);
    }

    if (maxValue == "-0" || maxValue == "+0") maxValue = 0;
    if (minValue == "-0" || minValue == "+0") minValue = 0;

    console.log(maxValue);
    console.log(minValue);
});

// 이 문제를 풀면서 유의해야 했던 사항
// 문제를 잘못 읽어서 숫자도 순열로 고친 점
// 자바스크립트의 나누기로 인해서 원래의 수식 방법을 쓸 수 없던 점
// new Function()을 이용한 수식이 생각보다 느린 점
// 자바스크립트에 0이 +0과 -0으로 두 개가 존재하는 점
