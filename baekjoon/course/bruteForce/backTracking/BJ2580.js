const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const map = input.map((row) => row.split(" "));

    const nullPoint = [];
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] == 0) {
                nullPoint.push([i, j]);
            }
        }
    }

    const getSquarePoint = (pos) => parseInt(pos / 3) * 3;

    const check = (y, x) => {
        for (let i = 0; i < 9; i++) {
            if (i === y) continue;
            if (map[i][x] == 0) continue;

            if (map[i][x] == map[y][x]) {
                return false;
            }
        }

        for (let i = 0; i < 9; i++) {
            if (i == x) continue;
            if (map[y][i] == 0) continue;

            if (map[y][i] == map[y][x]) {
                return false;
            }
        }

        const squareX = getSquarePoint(x);
        const squareY = getSquarePoint(y);
        for (let i = squareY; i < squareY + 3; i++) {
            for (let j = squareX; j < squareX + 3; j++) {
                if (i == y && j == x) continue;
                if (map[i][j] == 0) continue;

                if (map[i][j] == map[y][x]) {
                    return false;
                }
            }
        }

        return true;
    };

    const backTracking = (cur) => {
        if (cur === nullPoint.length) {
            map.forEach((el) => {
                console.log(el.join(" "));
            });

            process.exit();
        } else {
            const [y, x] = nullPoint[cur];

            for (let i = 1; i <= 9; i++) {
                map[y][x] = i;
                if (check(y, x)) {
                    backTracking(cur + 1);
                }
                map[y][x] = 0;
            }
        }
    };

    backTracking(0);
});
