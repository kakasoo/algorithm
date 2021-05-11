// 백준 1629번 곱셈 문제를 풀었습니다.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    let [a, b, c] = line.split(" ").map(BigInt);

    const pow = (a, b, c) => {
        if (b == 0) {
            return BigInt(1);
        }

        const temp = pow(a, BigInt(parseInt(b / BigInt(2))), c);
        if (b % BigInt(2)) {
            return (((temp * temp) % c) * a) % c;
        } else {
            return (temp * temp) % c;
        }
    };

    console.log(Number(pow(a, b, c)));
});
