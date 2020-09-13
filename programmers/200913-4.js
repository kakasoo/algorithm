// 프로그래머스 level1 2016년 문제를 풀었습니다.

function getDays(month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 2:
            return 29;
        default:
            return 30;       
    }
}

function whatDay(answer) {
    if (answer === 0) return 'FRI';
    if (answer === 1) return 'SAT';
    if (answer === 2) return 'SUN';
    if (answer === 3) return 'MON';
    if (answer === 4) return 'TUE';
    if (answer === 5) return 'WED';
    if (answer === 6) return 'THU';
}

function solution(a, b) {
    let answer = b - 1;
    for (let i = 1; i < a; i++) {
       answer += getDays(i); 
    }
    answer = whatDay(answer %= 7);
    
    return answer;
}