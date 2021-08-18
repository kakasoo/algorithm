// 프로그래머스 레벨2 행렬의 곱셈을 풀었습니다.

const makeEmptyMatrix = (arr1, arr2) => {
    const row = arr1.length;
    const col = arr2[0].length;

    const answer = [];
    for (let i = 0; i < row; i++) {
        answer[i] = new Array(col).fill(0);
    }

    return answer;
};

const getRowOfMatrix = (arr, i) => {
    return [...arr[i]];
};

const getColOfMatrix = (arr, i) => {
    return arr.map((el) => el[i]);
};

function solution(arr1, arr2) {
    const answer = makeEmptyMatrix(arr1, arr2);

    for (let i = 0; i < answer.length; i++) {
        for (let j = 0; j < answer[0].length; j++) {
            const row = getRowOfMatrix(arr1, i);
            const col = getColOfMatrix(arr2, j);

            answer[i][j] = row
                .map((el, i) => el * col[i])
                .reduce((acc, cur) => acc + cur);
        }
    }

    return answer;
}
