// 프로그래머스 레벨2 게임 맵 최단 거리를 풀었습니다.

const solution = (maps) => {
    if (!maps[0][0]) {
        return -1;
    }

    const visited = new Array(maps.length);
    for (let i = 0; i < visited.length; i++) {
        visited[i] = new Array(maps[0].length).fill(0);
    }

    const xMove = [0, 0, -1, 1];
    const yMove = [1, -1, 0, 0];

    const bfs = (startY, startX) => {
        const queue = [{ y: startY, x: startX }];
        visited[startY][startX] = 1;

        while (queue.length) {
            const { y, x } = queue.shift();

            for (let i = 0; i < 4; i++) {
                const nextY = y + yMove[i];
                const nextX = x + xMove[i];

                if (
                    0 <= nextY &&
                    nextY < maps.length &&
                    0 <= nextX &&
                    nextX < maps[0].length
                ) {
                    if (maps[nextY][nextX] && !visited[nextY][nextX]) {
                        visited[nextY][nextX] = visited[y][x] + 1;
                        queue.push({ y: nextY, x: nextX });
                    }
                }
            }
        }
    };
    bfs(0, 0);

    const answer = visited[maps.length - 1][maps[0].length - 1];
    return answer ? answer : -1;
};
