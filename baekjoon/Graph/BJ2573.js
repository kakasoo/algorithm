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
        const row = line.split(" ").map(Number);
        graph.push(row);

        if (graph.length === N) {
            rl.close();
        }
    }
}).on("close", () => {
    const visited = [];
    for (let i = 0; i < N; i++) {
        visited[i] = new Array(M).fill(false);
    }
    const xMove = [0, 0, -1, 1];
    const yMove = [1, -1, 0, 0];

    const bfs = (y, x) => {
        const queue = [];
        queue.push({ y, x });
        visited[y][x] = 1;

        for (let i = 0; i < 4; i++) {
            const nextY = y + yMove[i];
            const nextX = x + xMove[i];
            if (0 <= nextY && nextY < N && 0 <= nextX && nextX < M) {
                if (graph[nextY][nextX] === 0) {
                    visited[y][x]++;
                }
            }
        }

        while (queue.length) {
            const cur = queue.shift();

            for (let i = 0; i < 4; i++) {
                const nextY = cur.y + yMove[i];
                const nextX = cur.x + xMove[i];

                if (0 <= nextY && nextY < N && 0 <= nextX && nextX < M) {
                    if (!visited[nextY][nextX] && graph[nextY][nextX]) {
                        visited[nextY][nextX] = 1;

                        for (let j = 0; j < 4; j++) {
                            const aroundY = nextY + yMove[j];
                            const aroundX = nextX + xMove[j];
                            if (
                                0 <= aroundY &&
                                aroundY < N &&
                                0 <= aroundX &&
                                aroundX < M
                            ) {
                                if (graph[aroundY][aroundX] === 0) {
                                    visited[nextY][nextX]++;
                                }
                            }
                        }
                        queue.push({ y: nextY, x: nextX });
                    }
                }
            }
        }
    };

    let island = 1;
    let year = 0;
    while (island < 2 && island) {
        year++;
        island = 0;
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (!visited[i][j] && graph[i][j]) {
                    island++;
                    bfs(i, j);
                }
            }
        }

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (visited[i][j]) {
                    graph[i][j] -= visited[i][j] - 1;
                    if (graph[i][j] < 0) {
                        graph[i][j] = 0;
                    }
                }
            }
        }

        for (let i = 0; i < N; i++) {
            visited[i] = new Array(M).fill(0);
        }
    }

    if (island < 2) console.log(0);
    else {
        console.log(year - 1);
    }
});
