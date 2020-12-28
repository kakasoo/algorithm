const solution = (clothes) => {
    let arr = {};
    clothes.map((el) => {
        if (!arr[el[1]]) {
            arr[el[1]] = [];
        }
        arr[el[1]].push(el[0]);
    });
    let sum = 1;
    for (const kind of new Set(clothes.map((el) => el[1]))) {
        sum *= arr[kind].length + 1;
    }
    return sum - 1;
};
