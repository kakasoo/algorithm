const gcd = (a, b) => {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
};

const solution = (arr) => {
    return arr.reduce((cur, acc) => {
        const gcdValue = gcd(acc, cur);
        return gcdValue * (cur / gcdValue) * (acc / gcdValue);
    }, arr[0]);
};
