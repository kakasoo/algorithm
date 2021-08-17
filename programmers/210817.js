const solution = (price, money, count) => {
    const magnification = new Array(count)
        .fill(0)
        .map((el, i) => i + 1)
        .reduce((acc, cur) => acc + cur);
    const answer = price * magnification - money;
    return answer > 0 ? answer : 0;
};
