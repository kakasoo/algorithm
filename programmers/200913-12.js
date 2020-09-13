// 프로그래머스 level1 문자열 다루기 기본을 풀었습니다.
function solution(s) {
    if((s.length === 4) || (s.length === 6)) {
        for (let i = 0; i < s.length; i++) {
            if (s[i] >= '0' && s[i] <= '9') continue;
            else return false;
        }
        return true;
    }
    return false;    
}