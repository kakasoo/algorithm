const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 2
// AAA
// AAA	=> { A: 222 }
// 위와 같은 형태로, 자릿수에 맞게 사용된 횟수를 기록한 후, 높은 자릿수부터 큰 수를 대입해본다.
const makeAlphabetObj = (input) => {
    const obj = {};
    input.slice(1).map((str) => {
        str.split("")
            .reverse()
            .forEach((el, i) => {
                obj[el] = !obj[el] ? 10 ** i : obj[el] + 10 ** i;
            });
    });
    return obj;
};

const solution = (input) => {
    const obj = makeAlphabetObj(input);
    const objToArr = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    let number = 9;
    let sum = 0;
    for (const a of objToArr) {
        sum += a[1] * number--;
    }

    return sum;
};

const input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    console.log(solution(input));
    process.exit();
});
