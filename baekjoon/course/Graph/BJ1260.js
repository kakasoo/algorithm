// 백준 1260번 DFS와 BFS를 풀었습니다.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
let n = 0;
let m = 0;
let start = 0;
rl.on("line", (line) => {
    if (!n) {
        [n, m, start] = line.split(" ").map(Number);
    } else {
        input.push(line);
        if (input.length === m) {
            main();
            process.exit();
        }
    }
});

const dfs = (start) => {
    visited[start] = true;
    answer.push(start);

    for (let i = 0; i < edge[start].length; i++) {
        const next = edge[start][i];
        if (next && !visited[next]) {
            dfs(next);
        }
    }
};

const bfs = (start) => {
    const queue = [];
    visited[start] = true;
    queue.push(start);
    answer.push(start);

    while (queue.length) {
        const cur = queue.shift();

        for (let i = 0; i < edge[cur].length; i++) {
            const next = edge[cur][i];
            if (next && !visited[next]) {
                queue.push(next);
                answer.push(next);
                visited[next] = true;
            }
        }
    }
};

let visited;
let edge;
let answer;

const main = () => {
    visited = new Array(n + 1).fill(false);
    edge = [];
    answer = [];
    for (let i = 1; i < n + 1; i++) {
        edge[i] = [];
    }

    input.forEach((el) => {
        const [from, to] = el.split(" ").map(Number);
        edge[from].push(to);
        edge[to].push(from);
    });

    edge.forEach((el) => {
        el.sort((a, b) => a - b);
    });

    dfs(start);
    console.log(answer.join(" "));

    visited = new Array(n + 1).fill(false);
    answer = [];

    bfs(start);
    console.log(answer.join(" "));
};
