// 프로그래머스 레벨1 음양을 풀었습니다.

const solution = (a, b) => {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i] * b[i];
    }
    return sum;
};
