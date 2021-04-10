// 백준 2667번 단지 번호 붙이기를 풀었습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
let count = 0;
rl.on("line", (line) => {
    if (!count) {
        count = Number(line);
    } else {
        input.push(line);
        if (input.length === count) {
            main();
            process.exit();
        }
    }
});

const main = () => {
    const graph = [];
    const visited = [];

    for (let i = 0; i < count; i++) {
        graph[i] = input[i].split("").map(Number);
        visited[i] = new Array(count).fill(false);
    }

    const bfs = (yPos, xPos) => {
        let cnt = 1;
        const queue = [];
        const xMove = [0, 0, -1, 1];
        const yMove = [1, -1, 0, 0];

        visited[yPos][xPos] = true;
        queue.push({ yPos: yPos, xPos: xPos });

        while (queue.length) {
            const { yPos, xPos } = queue.shift();

            for (let i = 0; i < 4; i++) {
                const nextY = yPos + yMove[i];
                const nextX = xPos + xMove[i];

                if (
                    nextY >= 0 &&
                    nextY < count &&
                    nextX >= 0 &&
                    nextX < count
                ) {
                    if (graph[nextY][nextX] && !visited[nextY][nextX]) {
                        visited[nextY][nextX] = true;
                        queue.push({ yPos: nextY, xPos: nextX });
                        cnt++;
                    }
                }
            }
        }
        return cnt;
    };

    const answer = [];
    let cnt = 0;
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            if (graph[i][j] && visited[i][j] === false) {
                answer.push(bfs(i, j));
                cnt++;
            }
        }
    }

    console.log(cnt);
    answer
        .sort((a, b) => a - b)
        .forEach((el) => {
            console.log(el);
        });
};
