const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    main();
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

    const brokenButtons = Number(input[1])
        ? input[2]
              .split(" ")
              .filter((el) => !!el)
              .map(Number)
        : [];

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
