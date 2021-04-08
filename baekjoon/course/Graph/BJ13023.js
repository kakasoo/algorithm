// 백준 13023번 ABCDE를 풀었습니다.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
let N = 0;
let M = 0;

rl.on("line", (line) => {
    if (!N) {
        [N, M] = line.split(" ").map(Number);
    } else {
        input.push(line);
        if (input.length === M) {
            main();
            process.exit();
        }
    }
});

let visited;
let arr;
let answer = [];

/**
 *
 * @param {[[]]} arr
 * @param {number[]} visited
 * @param {number} cur
 */
const dfs = (cur) => {
    visited[cur] = true;
    answer.push(cur);

    if (answer.length === 5) {
        console.log(1);
        process.exit();
    }

    for (let i = 0; i < arr[cur].length; i++) {
        const next = arr[cur][i];
        if (visited[next] === false) {
            dfs(next);
        }
    }

    visited[cur] = false;
    answer.pop();
};

const main = () => {
    visited = new Array(N).fill(false);
    arr = new Array(N).fill(0);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = [];
    }

    for (let i = 0; i < input.length; i++) {
        const [from, to] = input[i].split(" ").map(Number);
        arr[from].push(to);
        arr[to].push(from);
    }

    for (let i = 0; i < arr.length; i++) {
        dfs(i);
    }
    console.log(0);
};
