const xMove = [0, 0, -1, 1];
const yMove = [1, -1, 0, 0];

const dfs = (curY, curX, tinyInt, map, mino, visited) => {
    visited[curY][curX] = true;
    if (map[curY][curX] === tinyInt) {
        mino.push({ y: curY, x: curX });
    }

    for (let i = 0; i < 4; i++) {
        const nextY = curY + yMove[i];
        const nextX = curX + xMove[i];

        if (
            0 <= nextY &&
            nextY < map.length &&
            0 <= nextX &&
            nextX < map[0].length
        ) {
            if (!visited[nextY][nextX]) {
                if (map[nextY][nextX] === tinyInt) {
                    dfs(nextY, nextX, tinyInt, map, mino, visited);
                }
            }
        }
    }
};

const getBlocks = (map, tinyInt, visited) => {
    const blocks = [];
    const mino = [];
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[0].length; j++) {
            if (!visited[i][j] && map[i][j] === tinyInt) {
                dfs(i, j, tinyInt, map, mino, visited);
                const block = mino.splice(0, mino.length);
                blocks.push(block);
            }
        }
    }
    return blocks;
};

const makeMatrix = (blocks) => {
    console.log(blocks);
    const xs = blocks.map((el) => el.x);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);

    const ys = blocks.map((el) => el.y);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);

    const matrix = new Array(maxY - minY + 1)
        .fill(0)
        .map((el) => new Array(maxX - minX + 1).fill(0));
    blocks.forEach((el) => {
        matrix[el.y - minY][el.x - minX] = 1;
    });
    return matrix;
};

const rotate = (blocks) => {
    //     console.log(blocks);

    //     return blocks;
    const rotated = blocks.map((el) => {
        return { y: el.x, x: -1 * el.y };
    });
    console.log("rotate block : ", blocks);
    console.log("rotate rotated : ", rotated);
    return rotated;
};

const check = (a, b) => {
    // console.log('matrix');
    // console.log(a);
    // console.log(b);
    // console.log('---------------------')
    if (a.length !== b.length || a[0].length !== b[0].length) {
        return false;
    }

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[0].length; j++) {
            if (a[i][j] !== b[i][j]) {
                return false;
            }
        }
    }

    return true;
};

const solution = (game_board, table) => {
    const visitedTable = new Array(table.length)
        .fill(0)
        .map((el) => new Array(table[0].length).fill(false));
    const visitedBoard = new Array(table.length)
        .fill(0)
        .map((el) => new Array(table[0].length).fill(false));
    const tableBlocks = getBlocks(table, 1, visitedTable);
    const boardBlocks = getBlocks(game_board, 0, visitedBoard);

    const tableMatrix = tableBlocks.map(makeMatrix);
    const boardMatrix = boardBlocks.map(makeMatrix);

    let sum = 0;
    for (let i = 0; i < tableBlocks.length; i++) {
        for (let j = 0; j < boardBlocks.length; j++) {
            if (tableBlocks[i].length === boardBlocks[j].length) {
                // console.log('boards');
                // console.log(tableBlocks[i]);
                // console.log(boardBlocks[j]);
                if (
                    check(tableMatrix[i], boardMatrix[j]) ||
                    check(makeMatrix(rotate(tableBlocks[i])), boardMatrix[j]) ||
                    check(
                        makeMatrix(rotate(rotate(tableBlocks[i]))),
                        boardMatrix[j]
                    ) ||
                    check(
                        makeMatrix(rotate(rotate(rotate(tableBlocks[i])))),
                        boardMatrix[j]
                    )
                ) {
                    const [removedBlock] = boardBlocks.splice(j--, 1);
                    sum += removedBlock.length;
                    continue;
                }
            }
        }
    }

    return sum;
};

const answer = solution(
    [
        [1, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 0, 1],
        [1, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 0, 0],
    ],
    [
        [1, 0, 0, 1, 1, 0],
        [1, 0, 1, 0, 1, 0],
        [0, 1, 1, 0, 1, 1],
        [0, 0, 1, 0, 0, 0],
        [1, 1, 0, 1, 1, 0],
        [0, 1, 0, 0, 0, 0],
    ]
);

console.log(answer);

// console.log(
//     rotate([
//         { y: 1, x: 2 },
//         { y: 2, x: 2 },
//         { y: 3, x: 2 },
//         { y: 2, x: 1 },
//     ]).map(makeMatrix)
// );
