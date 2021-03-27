const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(line);
    rl.close();
}).on("close", () => {
    process.exit();
});

const main = (line) => {
    const [min, max] = line.split(" ").map(BigInt);
    const arr = new Array(1000001).fill(false);

    for (i = 2; BigInt(i * i) <= max; i++) {
        // start는 min보다 커지는 제곱근으로 나누어지는 최초의 수다.
        // min이 딱 나뉘어 떨어지는 수가 아니면 1을 더해줬기 때문에 반드시 min 이상이 나온다.
        let start = min / BigInt(i * i);
        if (start * BigInt(i * i) !== min) start++;

        // 그 start 값부터 max내의 모든 배수를 true로 바꿔준다.
        for (let j = start; BigInt(i * i) * j <= max; j++) {
            arr[BigInt(i * i) * j - min] = true;
        }
    }

    let count = 0;
    for (let i = BigInt(0); i < max - min + BigInt(1); i++) {
        if (!arr[i]) {
            count++;
        }
    }

    console.log(count);
};
