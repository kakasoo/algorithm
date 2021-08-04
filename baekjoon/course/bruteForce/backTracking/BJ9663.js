const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    const num = Number(line);
    const rows = new Array(num + 1).fill(0).map((el) => 0);

    const isAble = (row) => {
        for (let i = 1; i < row; i++) {
            if (
                rows[i] === rows[row] ||
                Math.abs(rows[row] - rows[i]) === row - i
            ) {
                return false;
            }
        }
        return true;
    };

    let count = 0;
    const queen = (numOfQueen) => {
        if (isAble(numOfQueen)) {
            if (numOfQueen === num) {
                count++;
            } else {
                for (let i = 1; i <= num; i++) {
                    rows[numOfQueen + 1] = i;
                    queen(numOfQueen + 1);
                }
            }
        }
    };
    queen(0);
    console.log(count);
});
