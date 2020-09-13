// 프로그래머스 level1 가운데 글자 가져오기

function solution(s) {
    let answer = s.split('');
    while(answer.length >= 3) {
        answer.pop();
        answer.shift();
    }
    return answer.join('');
}