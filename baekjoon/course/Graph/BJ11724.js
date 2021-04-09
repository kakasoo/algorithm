// 백준 11724번 연결요소의 게수를 풀었습니다.

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

const main = () => {
    let visited = new Array(N + 1).fill(false);

    const edge = [];
    for (let i = 1; i <= N; i++) {
        edge[i] = [];
    }

    for (let i = 0; i < M; i++) {
        const [from, to] = input[i].split(" ").map(Number);
        edge[from].push(to);
        edge[to].push(from);
    }

    const dfs = (start) => {
        visited[start] = true;

        for (let i = 0; i < edge[start].length; i++) {
            const next = edge[start][i];

            if (!visited[next]) {
                dfs(next);
            }
        }
    };

    let count = 0;
    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            dfs(i);
            count++;
        }
    }

    console.log(count);
};
