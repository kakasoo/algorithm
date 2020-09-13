// 프로그래머스 level1 나누어 떨어지는 수 문제를 풀었습니다.

function solution(arr, divisor) {
    var answer = [];
    arr.map((el, i) => {
        if (!(el % divisor)) {
            answer.push(el);
        }
    })
    if (!answer.length) answer.push(-1);
    return answer.sort((o1,o2) => o1 - o2);
}