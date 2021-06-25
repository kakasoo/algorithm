// 프로그래머스 레벨2 메뉴 리뉴얼을 풀었습니다.
// 조합의 크기가 너무 커서, 시간 초과가 발생한다.
// 엄밀히 말하면 런타임 에러였는데, 혹시 몰라서 for 문으로 분리하여 index가 10000 밑까지만 돌게끔 강제했다.
// 그렇게 한 결과 런타임 에러가 시간 초과로 변경되었다.
// 여기서부터는 내 추측인데, 정해진 시간 안에 정답이 나오지 않으면 일단 시간 초과에 해당하는데,
// 그 시간동안 반복문을 포함해 특정 로직을 돌고 있으면 무한 루프로 간주되어 런타임 에러로 표현되는 것 같다.

/**
 * 1. 단품 메뉴들의 합집합을 만든다.
 * 2. 단품 메뉴들의 조합을 만든다. ( 중복은 제거하고, length가 2 이상. )
 * 3. 조합들과 손님의 주문을 각각 비교하여 횟수를 구한다.
 * 4. 각 팔린 횟수 중에서 가장 메뉴 가짓수length가 큰 것을 뽑는다.
 */

const sortString = (str) =>
    str.sort((a, b) => {
        const aStr = a.split("");
        const bStr = b.split("");

        while (aStr.length && bStr.length) {
            const aCode = aStr.shift().charCodeAt();
            const bCode = bStr.shift().charCodeAt();

            if (aCode === bCode) {
                continue;
            } else {
                return aCode - bCode;
            }
        }
        return aStr.length - bStr.length;
    });

// const makeSumSet = (orders) => {
//     const sumSet = Array.from(new Set(orders.map((el) => el.split('')).flat(Infinity)));
//     return sumSet.sort((a,b) => {
//         const aCode = a.charCodeAt();
//         const bCode = b.charCodeAt();
//         return aCode - bCode;
//     });
// }

const isCommonSet = (main, sub) => {
    for (const cur of sub) {
        if (!main.includes(cur)) {
            return false;
        }
    }
    return true;
};

const getCombination = (arr, num) => {
    const answer = [];

    if (num === 1) {
        return arr.map((e) => [e]);
    }

    arr.forEach((el, i, arr) => {
        const rest = arr.slice(i + 1);
        const combinations = getCombination(rest, num - 1);
        const combinationArr = combinations.map((el2) => [el, ...el2]);
        if (combinationArr.length) {
            for (let i = 0; i < combinationArr.length; i++) {
                if (i > 11000) {
                    return answer;
                }
                answer.push(combinationArr[i]);
            }
        }
    });
    return answer;
};

const solution = (orders, course) => {
    // 1. 단품 메뉴들의 합집합을 만든다.
    // const allMenues = makeSumSet(orders);
    // 내가 틀린 가장 큰 문제 중 하나로, 합집합을 해버리면, 조합 때 엄청난 크기의 배열이 된다

    // 2. 단품 메뉴들의 조합을 만든다.
    // const combinations = [];
    // course.forEach((el) => {
    //     combinations.push(...getCombination(allMenues, el));
    // })

    const temp = [];
    course.forEach((el) => {
        for (const order of orders) {
            temp.push(...getCombination(sortString(order.split("")), el));
        }
    });
    // const ans = Array.from(new Set(temp.map((el) => el.join(''))));
    // console.log(ans);
    // console.log(Array.from(new Set(temp)));
    const combinations = Array.from(new Set(temp.map((el) => el.join("")))).map(
        (el) => el.split("")
    );

    // 3. 조합들과 손님의 주문을 각각 비교하여 횟수를 구한다.
    const orderArr = [];
    const result = new Array(orders.length + 1).fill(0);
    for (let i = 0; i < result.length; i++) {
        result[i] = [];
    }
    orders.forEach((order) => orderArr.push(order.split("")));

    combinations.forEach((combination, index) => {
        let count = 0;
        for (const order of orderArr) {
            if (isCommonSet(order, combination)) {
                count++;
            }
        }
        if (count) {
            result[count].push(combination.join(""));
        }
    });

    // 4. 각 팔린 횟수 중에서 가장 메뉴 가짓수length가 큰 것을 뽑는다.
    const dishes = [];
    course.forEach((num) => {
        for (let i = result.length - 1; i >= 2; i--) {
            const max = result[i].filter((el) => el.length === num);
            if (max.length) {
                dishes.push(max);
                break;
            }
        }
    });

    return sortString(dishes.flat(Infinity));
};
