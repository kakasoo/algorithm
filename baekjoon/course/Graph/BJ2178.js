// 백준 2178번 미로 탐색을 풀었습니다.
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
        [N, M] = line.split(" ").map(Number);
    } else {
        input.push(line);
        if (input.length === N) {
            main();
            process.exit();
        }
    }
});

const main = () => {
    const graph = [];
    const visited = [];

    for (let i = 0; i < N; i++) {
        graph[i] = input[i].split("").map(Number);
        visited[i] = new Array(M).fill(0);
    }

    const bfs = (yPos, xPos) => {
        const xMove = [0, 0, -1, 1];
        const yMove = [1, -1, 0, 0];
        const queue = [];
        queue.push({ yPos: yPos, xPos: xPos });
        visited[yPos][xPos] = 1;

        while (queue.length) {
            const { yPos, xPos } = queue.shift();
            for (let i = 0; i < 4; i++) {
                const nextY = yPos + yMove[i];
                const nextX = xPos + xMove[i];
                if (nextY >= 0 && nextY < N && nextX >= 0 && nextX < M) {
                    if (!visited[nextY][nextX] && graph[nextY][nextX]) {
                        visited[nextY][nextX] = visited[yPos][xPos] + 1;
                        queue.push({ yPos: nextY, xPos: nextX });
                    }
                }
            }
        }
    };

    bfs(0, 0);
    console.log(visited[N - 1][M - 1]);
};
