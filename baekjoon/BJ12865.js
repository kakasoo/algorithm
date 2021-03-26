const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let COUNT;
let MAX_WEIGHT;

let weights = [0];
let values = [0];

rl.on("line", (line) => {
    const arr = line.split(" ").map(Number);
    if (!COUNT && !MAX_WEIGHT) {
        COUNT = arr[0];
        MAX_WEIGHT = arr[1];
    } else {
        weights.push(arr[0]);
        values.push(arr[1]);

        if (weights.length > COUNT) {
            main();
            process.exit();
        }
    }
});

const main = () => {
    // 초기 배열은, 그 물건의 차례에서 각 무게 마다의 최대 가치를 저장한 배열이다.
    const DP = new Array(weights.length).fill(0);
    for (let i = 0; i < DP.length; i++) {
        DP[i] = new Array(MAX_WEIGHT + 1).fill(0);
    }

    // i가 의미하는 것은 현재 아이템의 차례이다.
    for (let i = 1; i < DP.length; i++) {
        const cur_weight = weights[i];
        const cur_value = values[i];

        // j가 의미하는 것은 현재 아이템을 고려하는 순간에서의, 각각의 무게다.
        // DP[i][j]의 의미는 그 아이템을 고려할 때, j 무게의 최대 가치다.
        for (let j = 1; j <= MAX_WEIGHT; j++) {
            // 해당 무게 차례에서, 현재 아이템의 무게를 뺄 수 없다면,
            // 해당 무게에서의 최대 가치는 자연스럽게 이전 고려에서의 최대 가치다.
            if (j - cur_weight < 0) {
                DP[i][j] = DP[i - 1][j];
            } else {
                // 만약 뺄 수 있다면, 이전 고려에서의 해당 무게의 최대 가치와,
                // 이전 고려에서 현재 물건을 담기 전의 (따라서 무게에서 현재 물건 무게를 빼야 한다.)
                // 최대 가치에
                // 현재 물건의 가치를 더하는 것이다.
                DP[i][j] = Math.max(
                    DP[i - 1][j],
                    DP[i - 1][j - cur_weight] + cur_value
                );
            }
        }
    }

    console.log(Math.max(...DP[DP.length - 1]));
};
