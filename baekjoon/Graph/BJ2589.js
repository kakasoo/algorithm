const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const graph = [];
let N, M;

rl.on("line", (line) => {
    if (!N) {
        [N, M] = line.split(" ").map(Number);
    } else {
        graph.push(line.split(""));
        if (graph.length === N) {
            main();
            process.exit();
        }
    }
});

const main = () => {
    let visited = [];
    const xMove = [0, 0, -1, 1];
    const yMove = [1, -1, 0, 0];

    const bfs = (y, x) => {
        const queue = [];
        queue.push({ y, x });

        for (let i = 0; i < N; i++) {
            visited[i] = new Array(M).fill(0);
        }

        visited[y][x] = 1;

        while (queue.length) {
            const cur = queue.shift();

            for (let i = 0; i < 4; i++) {
                const nextY = cur.y + yMove[i];
                const nextX = cur.x + xMove[i];
                if (0 <= nextY && nextY < N && 0 <= nextX && nextX < M) {
                    if (!visited[nextY][nextX] && graph[nextY][nextX] === "L") {
                        visited[nextY][nextX] = visited[cur.y][cur.x] + 1;

                        queue.push({ y: nextY, x: nextX });
                    }
                }
            }
        }

        return Math.max(...visited.flat());
    };

    let maxValue = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (graph[i][j] === "L") {
                maxValue = Math.max(maxValue, bfs(i, j));
                // console.log(visited);
            }
        }
    }
    console.log(maxValue - 1);
};
