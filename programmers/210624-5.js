// 프로그래머스 레벨2 [1차] 뉴스 클러스터링을 풀었습니다.

// const lastOnlyAlphabet = (str) => {
//     const aCode = 'A'.charCodeAt();
//     const zCode = 'Z'.charCodeAt();

//     return str.toUpperCase().split('').filter((el) => {
//         const cur = el.charCodeAt();
//         if (aCode <= cur && cur <= zCode) {
//             return true;
//         }
//         return false;
//     }).join('');
// }

const makeStrArray = (str) => {
    const aCode = "A".charCodeAt();
    const zCode = "Z".charCodeAt();

    const answer = [];
    for (let i = 0; i < str.length - 1; i++) {
        const cur1 = str[i].charCodeAt();
        const cur2 = str[i + 1].charCodeAt();

        if (aCode <= cur1 && cur1 <= zCode && aCode <= cur2 && cur2 <= zCode) {
            answer.push(str[i] + str[i + 1]);
        }
    }
    return answer;
};

const makeCommonSet = (arr1, arr2) => {
    const answer = [];
    while (arr1.length && arr2.length) {
        const arrInstance1 = arr1.pop();

        if (arr2.includes(arrInstance1)) {
            arr2.splice(arr2.indexOf(arrInstance1), 1);
            answer.push(arrInstance1);
        }
    }
    return answer;
};

const makeSumSet = (arr1, arr2) => {
    const answer = [];

    while (arr1.length && arr2.length) {
        const arrInstance1 = arr1.pop();

        if (arr2.includes(arrInstance1)) {
            arr2.splice(arr2.indexOf(arrInstance1), 1);
        }
        answer.push(arrInstance1);
    }

    while (arr1.length) {
        const arrInstance1 = arr1.pop();
        answer.push(arrInstance1);
    }
    while (arr2.length) {
        const arrInstance2 = arr2.pop();
        answer.push(arrInstance2);
    }

    return answer;
};

const solution = (str1, str2) => {
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();

    const strArr1 = makeStrArray(str1);
    const strArr2 = makeStrArray(str2);
    // console.log(strArr1);
    // console.log(strArr2);

    const commonSet = makeCommonSet([...strArr1], [...strArr2]);
    const sumSet = makeSumSet([...strArr1], [...strArr2]);

    // console.log(commonSet);
    // console.log(sumSet);
    const rate = sumSet.length ? commonSet.length / sumSet.length : 1;
    return parseInt(rate * 65536);
};
