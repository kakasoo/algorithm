const readline = require("readline");

// down이 up보다 먼저여야 한다.
// down과 up이 동시에 도달하는 지점에서, down의 자릿수가 up보다 작을 수 있기 때문

// down은 마이너스가 될 수도 있기 때문에 체크해준다.

// toString을 써서 숫자를 문자열로 바꾼 다음, split 하여 망가진 버튼이 포함되나 체크할 경우,
// 마이너스에 유의한다.

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line);

    if (input.length === 3) {
        main();
    }
});

/**
 *
 * @param {number} curNumber
 * @param {number[]} brokenButtons
 */
const checkNum = (curNumber, brokenButtons) => {
    const numbers = curNumber.toString().split("").map(Number);

    for (const a of numbers) {
        if (brokenButtons.includes(a)) {
            return false;
        }
    }
    return true;
};

const main = () => {
    const target = Number(input[0]);
    if (target === 100) {
        console.log(0);
        return;
    }

    const brokenButtons = input[2]
        .split(" ")
        .filter((el) => !!el)
        .map(Number);

    let upDownCount = 0;
    let downNumber = target;
    let upNumber = target;

    while (upDownCount <= 500000) {
        downNumber = target - upDownCount;
        upNumber = target + upDownCount;

        if (0 <= downNumber && checkNum(downNumber, brokenButtons)) {
            const curPushed = String(Math.abs(downNumber)).length + upDownCount;
            console.log(
                Math.abs(target - 100) < curPushed
                    ? Math.abs(target - 100)
                    : curPushed
            );
            return;
        }
        if (checkNum(upNumber, brokenButtons)) {
            const curPushed = String(Math.abs(upNumber)).length + upDownCount;
            console.log(
                Math.abs(target - 100) < curPushed
                    ? Math.abs(target - 100)
                    : curPushed
            );
            return;
        }

        upDownCount++;
    }

    console.log(Math.abs(target - 100));
};
