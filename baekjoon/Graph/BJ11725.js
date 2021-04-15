const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N = 0;
const input = [];
rl.on("line", (line) => {
    if (!N) {
        N = Number(line);
    } else {
        input.push(line);
        if (input.length === N - 1) {
            main();
        }
    }
});

const main = () => {
    const graph = [];
    const answer = [];
    for (let i = 1; i <= N; i++) {
        graph[i] = [];
    }

    input.forEach((edge) => {
        const [from, to] = edge.split(" ");
        graph[from].push(to);
        graph[to].push(from);
    });

    const bfs = (start) => {
        const visited = new Array(N);
        visited[start] = true;

        const queue = [start];

        while (queue.length) {
            const cur = queue.shift();
            for (let i = 0; i < graph[cur].length; i++) {
                const next = graph[cur][i];

                if (!visited[next]) {
                    visited[next] = true;
                    answer[next] = cur;
                    queue.push(next);
                }
            }
        }
    };

    bfs(1);
    // console.time();
    // answer.forEach((ans) => console.log(ans));
    let result = "";
    answer.forEach((ans) => (result += ans + "\n"));
    console.log(result);
    // console.timeEnd();
};
