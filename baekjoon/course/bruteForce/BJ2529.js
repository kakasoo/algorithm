// 나중에 다시 풀어보도록 하자.
// 시간초과와 메모리 문제로 풀 수가 없다, 백준에서 업데이트 예정이라 하니 나중에 다시 해보자.

// 백준 2529번 부등호를 풀었습니다.
// 백트래킹을 이용하여 풀었습니다. (순열로는 경우의 수가 너무 많다. )

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const num = Number(input.splice(0, 1)) + 1;
    const expression = input[0].split(" ");
    const numbers = new Array(10).fill(0).map((el, i) => i);
    const visited = new Array(10).fill(false);

    const answer = [];
    const dfs = (arr = []) => {
        if (arr.length === num) {
            answer.push([...arr]);
            return;
        }

        for (let i = 0; i < numbers.length; i++) {
            const curNumber = numbers[i];
            const lastIdx = arr.length - 1;
            const express = expression[lastIdx];
            if (!visited[i]) {
                if (
                    arr.length === 0 ||
                    new Function(
                        `return ${arr[lastIdx]}${express}${curNumber}`
                    )()
                ) {
                    visited[i] = true;
                    arr.push(curNumber);
                    dfs(arr);
                    arr.pop();
                    visited[i] = false;
                }
            }
        }
    };
    dfs();

    const answerArr = answer.map((el) => Number(el.join("")));
    const maxValue = Math.max(...answerArr);
    const minValue = Math.min(...answerArr);

    const numPad = (number) => {
        let str = String(number);

        while (str.length < num) {
            str = "0" + str;
        }
        return str;
    };
    console.log(numPad(maxValue));
    console.log(numPad(minValue));
});
