const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const graph = [];
let N;
rl.on("line", (line) => {
    if (!N) {
        N = Number(line);
    } else {
        const row = line.split(" ").map(Number);
        graph.push(row);

        if (graph.length === N) {
            rl.close();
        }
    }
}).on("close", () => {
    let maxValue = 0;
    const visited = [];
    const xMove = [0, 0, -1, 1];
    const yMove = [1, -1, 0, 0];

    const visitedInit = () => {
        for (let i = 0; i < N; i++) {
            visited[i] = new Array(N).fill(false);
        }
    };

    const dfs = (y, x) => {
        if (visited[y][x] === false) {
            visited[y][x] = 1;

            let temp = 0;

            for (let i = 0; i < 4; i++) {
                const nextY = y + yMove[i];
                const nextX = x + xMove[i];

                if (0 <= nextY && nextY < N && 0 <= nextX && nextX < N) {
                    if (graph[y][x] > graph[nextY][nextX]) {
                        temp = Math.max(temp, dfs(nextY, nextX));
                    }
                }
            }
            visited[y][x] += temp;
        }
        return visited[y][x];
    };

    visitedInit();
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (visited[i][j] === false) {
                maxValue = Math.max(maxValue, dfs(i, j));
            }
        }
    }

    // visited.forEach((el) => console.log(el));
    console.log(maxValue);
});
