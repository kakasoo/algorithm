// 프로그래머스 level1 예산을 풀었습니다.

function solution(d, budget) {
    d = d.sort((a, b) => a - b);
    const DP = new Array(d.length).fill(0);

    if (budget - d[0] >= 0) {
        DP[0] = 1;
        budget -= d[0];
    }

    for (let i = 1; i < DP.length; i++) {
        if (budget - d[i] >= 0) {
            DP[i] = Math.max(DP[i - 1] + 1, DP[i]);
            budget -= d[i];
        }
    }

    return Math.max(...DP);
}
