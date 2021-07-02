// 프로그래머스 레벨 3 가장 먼 노드를 풀었습니다.

const solution = (n, edge) => {
    const map = new Array(n + 1).fill(0);
    for (let i = 1; i < map.length; i++) {
        map[i] = [];
    }

    edge.forEach((el) => {
        const [from, to] = el;
        map[from].push(to);
        map[to].push(from);
    });

    const visited = new Array(n + 1).fill(0);
    visited[0] = -1;

    const bfs = (start) => {
        const queue = [start];
        visited[start] = 1;

        while (queue.length) {
            const cur = queue.shift();

            for (let i = 0; i < map[cur].length; i++) {
                const next = map[cur][i];

                if (!visited[next] || visited[next] > visited[cur] + 1) {
                    queue.push(next);
                    visited[next] = visited[cur] + 1;
                }
            }
        }
    };
    bfs(1);

    const maxValue = Math.max(...visited);
    return visited.filter((el) => el === maxValue).length;
};
