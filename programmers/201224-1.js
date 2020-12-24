const insert = (arr, index, value) => {
    const newArr = [];
    for (let i = 0; i < index; i++) {
        newArr.push(arr[i]);
    }
    newArr.push(value);
    for (let i = index; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
};

function solution(n) {
    const arr = new Array(n).fill(0).map((el) => (el = []));
    const MAX_BLOCK = new Array(n)
        .fill(0)
        .map((el, i) => (el = i + 1))
        .reduce((sum, cur) => sum + cur);

    let left = 0,
        right = 0;
    let curLine = 0;
    let numOfBlock = 1;
    let maximumMove = n;
    let moveCount = 0;

    while (numOfBlock <= MAX_BLOCK) {
        if (moveCount % 3 === 0) {
            for (let i = 1; i <= maximumMove; i++) {
                arr[curLine] = insert(arr[curLine++], left, numOfBlock++);
            }
            curLine--;
            left++;
        }

        if (moveCount % 3 === 1) {
            let temp = left;
            for (let i = 1; i <= maximumMove; i++) {
                arr[curLine] = insert(arr[curLine], temp++, numOfBlock++);
            }
        }

        if (moveCount % 3 === 2) {
            for (let i = 1; i <= maximumMove; i++) {
                --curLine;
                arr[curLine] = insert(arr[curLine], left, numOfBlock++);
            }
            curLine++;
        }

        moveCount++;
        maximumMove--;
    }
    return arr.flat(Infinity);
}
