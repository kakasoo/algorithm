// 프로그래머스 레벨2 땅따먹기를 풀었습니다.
// DP인 것은 알았지만, 코드로 구현하는 데에 상당히 오래 걸렸습니다.

const solution = (land) => {
    const DP = new Array(land.length).fill(0);
    for (let i = 0; i < land.length; i++) {
        DP[i] = [];
    }

    for (let i = 0; i < land[0].length; i++) {
        DP[0][i] = land[0][i];
    }

    for (let i = 1; i < land.length; i++) {
        DP[i][0] =
            land[i][0] + Math.max(DP[i - 1][1], DP[i - 1][2], DP[i - 1][3]);
        DP[i][1] =
            land[i][1] + Math.max(DP[i - 1][0], DP[i - 1][2], DP[i - 1][3]);
        DP[i][2] =
            land[i][2] + Math.max(DP[i - 1][0], DP[i - 1][1], DP[i - 1][3]);
        DP[i][3] =
            land[i][3] + Math.max(DP[i - 1][0], DP[i - 1][1], DP[i - 1][2]);
    }

    return Math.max(DP[DP.length - 1]);
};
