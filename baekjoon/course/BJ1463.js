// BJ1463 1로 만들기
// 이렇게 하면 스택이 터져서 풀 수가 없다.
const readline = require("readline");
const MAX = 987654321;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(line);
    rl.close();
}).on("close", () => {
    process.exit();
});

const dfs = (numbers, cur) => {
    for (let i = 0; i < 3; i++) {
        if (i === 0 && cur % 3 === 0 && numbers[cur / 3] > numbers[cur] + 1) {
            numbers[cur / 3] = numbers[cur] + 1;
            dfs(numbers, cur / 3);
        } else if (
            i === 1 &&
            cur % 2 === 0 &&
            numbers[cur / 2] > numbers[cur] + 1
        ) {
            numbers[cur / 2] = numbers[cur] + 1;
            dfs(numbers, cur / 2);
        } else if (i === 2 && numbers[cur - 1] > numbers[cur] + 1) {
            numbers[cur - 1] = numbers[cur] + 1;
            dfs(numbers, cur - 1);
        }
    }
};

const main = (line) => {
    const numbers = new Array(Number(line) + 1).fill(MAX);
    numbers[0] = -1;
    numbers[line] = 0;

    dfs(numbers, line);
};
