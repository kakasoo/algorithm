// 프로그래머스 레벨 1 숫자 문자열과 영단어를 풀었습니다.

const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];

const solution = (s) => {
    const str = s.split("");
    let stack = [];

    let answer = "";
    for (const a of str) {
        if (isNaN(Number(a))) {
            stack.push(a);
            const num = numbers.findIndex((el) => el === stack.join(""));

            if (num !== -1) {
                answer += String(num);
                stack = [];
            }
        } else {
            answer += String(a);
        }
    }
    return Number(answer);
};
