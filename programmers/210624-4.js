// 프로그래머스 레벨2 배달을 풀었습니다.

const makeMap = (N, road) => {
    const map = new Array(N).fill(false);
    for (let i = 0; i < N; i++) {
        map[i] = new Array(N).fill(null);
    }

    for (let i = 0; i < road.length; i++) {
        const [from, to, value] = road[i];
        if (!map[from - 1][to - 1] || map[from - 1][to - 1] > value) {
            map[from - 1][to - 1] = value;
            map[to - 1][from - 1] = value;
        }
    }
    return map;
};

const solution = (N, road, K) => {
    const map = makeMap(N, road);

    const visited = new Array(N).fill(0);
    const bfs = (start) => {
        const queue = [start];
        visited[start] = 0;

        while (queue.length) {
            const cur = queue.pop();

            for (let i = 0; i < map[cur].length; i++) {
                if (i === 0) {
                    continue;
                }

                const value = map[cur][i];
                if (value === null || value === false) {
                    continue;
                }

                if (!visited[i] || visited[i] > visited[cur] + map[cur][i]) {
                    visited[i] = visited[cur] + map[cur][i];
                    queue.push(i);
                }
            }
        }
    };

    bfs(0);
    return visited.filter((el) => el <= K).length || 1;
};
