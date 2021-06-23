// 프로그래머스 레벨 1 음양 더하기를 풀었습니다.

const solution = (absolutes, signs) => {
    let sum = 0;
    for (let i = 0; i < absolutes.length; i++) {
        sum += signs[i] ? absolutes[i] : -absolutes[i];
    }
    return sum;
};
