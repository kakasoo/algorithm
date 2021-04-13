const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const graph = [];
let [N, M] = [0, 0];

rl.on("line", (line) => {
    if (!N) {
        [N, M] = line.split(" ").map(Number);
    } else {
        graph.push(line.split(" ").map(Number));
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
            visited[i] = new Array(M).fill(false);
        }
        visited[y][x] = true;

        for (let i = 0; i < 4; i++) {
            const nextY = y + yMove[i];
            const nextX = x + xMove[i];

            if (0 <= nextY && nextY < N && 0 <= nextX && nextX < M) {
                if (!visited[nextY][nextX] && graph[nextY][nextX]) {
                    visited[nextY][nextX] = true;
                }
            }
        }

        while (queue.length) {
            const cur = queue.shift();

            for (let i = 0; i < 4; i++) {
                const nextY = cur.y + yMove[i];
                const nextX = cur.x + xMove[i];

                if (0 <= nextY && nextY < N && 0 <= nextX && nextX < M) {
                    if (!visited[nextY][nextX] && !graph[nextY][nextX]) {
                        visited[nextY][nextX] = true;
                        queue.push({ y: nextY, x: nextX });

                        for (let j = 0; j < 4; j++) {
                            const aroundY = nextY + yMove[j];
                            const aroundX = nextX + xMove[j];

                            if (
                                0 <= aroundY &&
                                aroundY < N &&
                                0 <= aroundX &&
                                aroundX < M
                            ) {
                                if (
                                    !visited[aroundY][aroundX] &&
                                    graph[aroundY][aroundX]
                                ) {
                                    visited[aroundY][aroundX] = true;
                                }
                            }
                        }
                    }
                }
            }
        }
    };

    let time = 0;
    let curCheese = graph.flat().filter((el) => el === 1).length;
    let preCheese;

    while (curCheese) {
        time++;
        bfs(0, 0);
        preCheese = graph.flat().filter((el) => el === 1).length;

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (graph[i][j] === 1 && visited[i][j] === true) {
                    graph[i][j]--;
                }
            }
        }

        curCheese = graph.flat().filter((el) => el === 1).length;
    }

    console.log(time);
    console.log(preCheese);
};
