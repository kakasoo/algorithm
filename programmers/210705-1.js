// 프로그래머스 레벨2 점프와 순간 이동을 풀었습니다.

const solution = (n) => {
    //     const visited = new Array(n + 1).fill(0).map((el, i) => i);

    //     const dfs = (cur) => {
    //         for (let i = 1; 2 ** i * cur <= n; i++) {
    //             if (visited[cur] < visited[2 ** i * cur]) {
    //                 visited[2 ** i * cur] = visited[cur];
    //                 dfs(2 ** i * cur);
    //             }
    //         }

    //         if (visited[cur] + 1 < visited[cur + 1]) {
    //             visited[cur + 1] = visited[cur] + 1;
    //             dfs(cur + 1);
    //         }
    //     }
    //     dfs(1);

    //     console.log(visited);
    //     return visited[n];

    return Number(n)
        .toString(2)
        .split("")
        .filter((el) => el == 1).length;
};
