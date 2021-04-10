// 백준 4963번 섬의 개수를 풀었습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let N = 0;
let M = 0;
rl.on("line", (line) => {
    if (!N) {
        if (line === "0 0") {
            process.exit();
        }
        [M, N] = line.split(" ").map(Number);
    } else {
        input.push(line);
        if (input.length === N) {
            main();
            N = 0;
            input = [];
        }
    }
});

const main = () => {
    const graph = [];
    const visited = [];

    for (let i = 0; i < N; i++) {
        graph[i] = input[i].split(" ").map(Number);
        visited[i] = new Array(M).fill(false);
    }

    const bfs = (yPos, xPos) => {
        const xMove = [0, 0, -1, 1, -1, -1, 1, 1];
        const yMove = [1, -1, 0, 0, 1, -1, 1, -1];
        const queue = [];
        queue.push({ yPos: yPos, xPos: xPos });
        visited[yPos][xPos] = true;

        while (queue.length) {
            const { yPos, xPos } = queue.shift();
            for (let i = 0; i < 8; i++) {
                const nextY = yPos + yMove[i];
                const nextX = xPos + xMove[i];
                if (nextY >= 0 && nextY < N && nextX >= 0 && nextX < M) {
                    if (!visited[nextY][nextX] && graph[nextY][nextX]) {
                        visited[nextY][nextX] = true;
                        queue.push({ yPos: nextY, xPos: nextX });
                    }
                }
            }
        }
    };

    let count = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (!visited[i][j] && graph[i][j]) {
                count++;
                bfs(i, j);
            }
        }
    }
    console.log(count);
};
