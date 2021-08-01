// 백준 14889번 스타트와 링크를 풀었습니다.
// 조합을 사용하여 풀었습니다.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const combinations = function* (elements, selectNumber) {
    for (let i = 0; i < elements.length; i++) {
        if (selectNumber === 1) {
            yield [elements[i]];
        } else {
            const fixed = elements[i];
            const rest = elements.slice(i + 1);
            for (const a of combinations(rest, selectNumber - 1)) {
                yield [fixed, ...a];
            }
        }
    }
};

const getAblilty = (team, map) => {
    let sum = 0;
    for (let i = 0; i < team.length; i++) {
        const from = team[i];

        for (let j = 0; j < team.length; j++) {
            const to = team[j];
            sum += map[from][to];
        }
    }
    return sum;
};

const input = [];
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const num = Number(input.splice(0, 1));
    const map = [...input].map((el) => el.split(" ").map(Number));
    const people = new Array(num).fill(0).map((el, i) => i);

    let minValue = 987654321;
    for (const a of combinations(people, num / 2)) {
        const start = a;
        const link = [...people].filter((el) => !start.includes(el));

        const startAbility = getAblilty(start, map);
        const linkAbility = getAblilty(link, map);

        const difference = Math.abs(startAbility - linkAbility);
        minValue = Math.min(minValue, difference);
    }
    console.log(minValue);
});
