// 백준 10971번 외판원 순회2를 풀었습니다.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

const permutations = function* (elements) {
    if (elements.length === 1) {
        yield elements;
    } else {
        const [first, ...rest] = elements;

        for (const a of permutations(rest)) {
            for (let i = 0; i < elements.length; i++) {
                const start = a.slice(0, i);
                const ended = a.slice(i);
                yield [...start, first, ...ended];
            }
        }
    }
};

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const map = input.slice(1).map((el) => el.split(" ").map(Number));
    const cities = new Array(map.length).fill(0).map((el, i) => i);

    /* 아래 코드는 메모리 초과가 발생했기 때문에, 제너레이터로 하나씩 처리하게 고친다.
    
    const cases = [...permutations(cities)];

    let minValue = 987654321;
    cases.forEach((el) => {
        let sum = 0;
        for (let i = 0; i < el.length; i++) {
            const starting = el[i % el.length];
            const arrival = el[(i + 1) % el.length];
            const distance = map[starting][arrival];

            sum += distance !== 0 ? distance : 987654321;
        }
        minValue = Math.min(sum, minValue);
    });
    */

    /* 아래 코드는 위 코드를 제너레이터를 통해 Lazy하게 수행하도록 한 것 */
    let minValue = 987654321;
    for (const perm of permutations(cities)) {
        let sum = 0;
        for (let i = 0; i < perm.length; i++) {
            const starting = perm[i % perm.length];
            const arrival = perm[(i + 1) % perm.length];
            const distance = map[starting][arrival];

            sum += distance !== 0 ? distance : 987654321;
        }
        minValue = Math.min(sum, minValue);
    }

    console.log(minValue);
});
