// 프로그래머스 level1 수박수박수박수박수박수? 를 풀었습니다.
function solution(n) {
    var answer = '';
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) answer += '수';
        else answer += '박';
    }
    return answer;
}