// 프로그래머스 level1 약수의 합을 풀었습니다.
function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i ++) {
        if (n % i === 0) {
            answer += i;
        }
    }
    return answer;
}