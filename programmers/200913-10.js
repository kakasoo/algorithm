// 프로그래머스 level1 문자열 내 p와 y의 개수

function solution(s){
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'p' || s[i] === 'P') answer++;
        if (s[i] === 'y' || s[i] === 'Y') answer--;
    }
    
    return !answer;
}