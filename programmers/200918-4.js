// 프로그래머스 level1 자릿수 더하기를 풀었습니다.
function solution(n) {
    n = n.toString();
    var answer = 0;
    for (let i = 0; i < n.length; i++) {
        answer += Number(n[i]);
    }
    
    return answer;
}