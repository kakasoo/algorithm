// 프로그래머스 level1 같은 수는 싫어

function solution(arr) {
    let answer = [];
    
    arr.map((el, i) => {
        if (arr[i] !== arr[i-1]) {
            answer.push(el);
        }
    })   
    return answer;
}