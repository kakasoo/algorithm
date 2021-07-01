// 프로그래머스 레벨2 쿼드 압축 후 개수 세기를 풀었습니다.

const checkArr = (arr) => {
    const firstValue = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] !== firstValue) {
                return { done: false };
            }
        }
    }
    return { done: true, value: firstValue };
};

const makeQuarter = (arr) => {
    const upArr = arr.splice(0, arr.length / 2);
    const downArr = arr;

    const upLeftArr = upArr.map((el) => el.splice(0, el.length / 2));
    const upRightArr = upArr;
    const downLeftArr = downArr.map((el) => el.splice(0, el.length / 2));
    const downRightArr = downArr;

    return [upLeftArr, upRightArr, downRightArr, downLeftArr].map((el) => {
        let cur;
        if ((cur = checkArr(el)).done) {
            return cur.value;
        } else return makeQuarter(el);
    });
};

const solution = (arr) => {
    if (checkArr(arr).done) {
        const answer = [0, 0];
        answer[arr[0][0]]++;
        return answer;
    }
    const quarters = makeQuarter(arr);
    const board = quarters.flat(Infinity);

    const zeroes = board.filter((el) => el === 0).length;
    const ones = board.filter((el) => el === 1).length;

    return [zeroes, ones];
};
