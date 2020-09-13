// 프로그래머스 level1 문자열 내림차순으로 정렬하기를 풀었습니다.

function solution(s) {
    var answer = '';
    s = s.split('').sort();
    for (let i = s.length -1; i >= 0; i--) {
        answer += s[i];
    }
    return answer;
}