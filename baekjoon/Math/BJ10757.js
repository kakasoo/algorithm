// 백준 10757번 큰수 A+B 를 풀었습니다.
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
    console.log(
        String(
            line
                .split(" ")
                .map(BigInt)
                .reduce((acc, cur) => acc + cur)
        )
            .split("")
            .join("")
    );
};
