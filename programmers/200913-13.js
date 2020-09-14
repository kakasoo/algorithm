// 프로그래머스 level1 서울에서 김서방 찾기를 풀었습니다.

function solution(seoul) {
    let answer = 0;
    seoul.some((el, i) => {
        if (el === 'Kim') {
            answer = i;
        }
    })
    return `김서방은 ${answer}에 있다`;
}ㅉ