// 프로그래머스 레벨2 행렬 테두리 회전하기를 풀었습니다.

const rotateMap = (map, query) => {
    const [row1, col1, row2, col2] = query.map((el) => el - 1);
    const answer = [];
    for (let i = col1; i < col2; i++) answer.push(map[row1][i]);
    for (let i = row1; i < row2; i++) answer.push(map[i][col2]);
    for (let i = col2; i > col1; i--) answer.push(map[row2][i]);
    for (let i = row2; i > row1; i--) answer.push(map[i][col1]);

    answer.unshift(answer.pop());
    const minValue = Math.min(...answer);

    for (let i = col1; i < col2; i++) map[row1][i] = answer.shift();
    for (let i = row1; i < row2; i++) map[i][col2] = answer.shift();
    for (let i = col2; i > col1; i--) map[row2][i] = answer.shift();
    for (let i = row2; i > row1; i--) map[i][col1] = answer.shift();

    return minValue;
};

const makeMap = (rows, columns) => {
    const map = new Array(rows.length).fill(0);
    for (let i = 0; i < rows; i++) {
        map[i] = new Array(columns)
            .fill(0)
            .map((el, index) => i * columns + index + 1);
    }
    return map;
};

const solution = (rows, columns, queries) => {
    const map = makeMap(rows, columns);

    const answer = [];
    queries.forEach((query) => {
        answer.push(rotateMap(map, query));
    });

    return answer.filter((el) => el !== null);
};
