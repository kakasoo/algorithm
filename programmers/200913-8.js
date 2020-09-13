// 프로그래머스 level1 두 정수 사이의 합을 풀었습니다.

function solution(a, b) {
    if (a < b) {
        let temp = b;
        b = a;
        a = temp;
    }
    var answer = (a + b) / 2 * (a - b + 1);
    return answer;
}