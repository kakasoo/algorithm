// 백준 2744번 대소문자 바꾸기를 풀었습니다.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    main(line);
    rl.close();
}).on("close", () => process.exit());

/**
 *
 * @param {string} line
 */
const main = (line) => {
    let answer = "";
    for (let i = 0; i < line.length; i++) {
        if (
            "a".charCodeAt(0) <= line[i].charCodeAt(0) &&
            line[i].charCodeAt(0) <= "z".charCodeAt(0)
        ) {
            answer += line[i].toUpperCase();
        } else {
            answer += line[i].toLowerCase();
        }
    }
    console.log(answer);
};
