// 프로그래머스 레벨 1 약수의 개수와 덧셈을 풀었습니다.

const countDiv = (n) => {
    const div = new Set();
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            div.add(i);
            div.add(n / i);
        }
    }
    return Array.from(div).length;
};

const solution = (left, right) => {
    let sum = 0;
    for (let i = left; i <= right; i++) {
        const count = countDiv(i);
        sum += count % 2 ? -i : i;
    }
    return sum;
};
