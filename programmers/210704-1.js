// 프로그래머스 레벨3 멀리뛰기를 풀었습니다.

const solution = (n) => {
    const DP = new Array(n + 1).fill(0);
    DP[1] = 1;
    DP[2] = 2;

    for (let i = 3; i <= n; i++) {
        DP[i] = (DP[i - 1] + DP[i - 2]) % 1234567;
    }
    return DP[n] % 1234567;
};
