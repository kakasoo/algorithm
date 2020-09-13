// 프로그래머스 level1 문자열 내 마음대로 정렬하기를 풀었습니다.

function solution(strings, n) {
    var answer = [];
    answer = strings.sort().sort(function(string1, string2) {
    if (string1[n] > string2[n]) return 1;
    if (string1[n] < string2[n]) return -1;
    return 0;
    });
    return answer;
}