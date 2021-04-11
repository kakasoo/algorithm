// 백준 11365번 !밀비 급일을 풀었습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
    if (line !== "END") {
        input.push(line);
    } else {
        main();
        rl.close();
    }
}).on("close", () => {
    process.exit();
});

const main = () => {
    for (let i = 0; i < input.length; i++) {
        console.log(input[i].split("").reverse().join(""));
    }
};
