// 프로그래머스 level1 모의고사

const first = [1,2,3,4,5];
const second = [2,1,2,3,2,4,2,5];
const third = [3,3,1,1,2,2,4,4,5,5];

function checkTest (answers, submits) {
    let count = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === submits[i % submits.length]) {
            count++;
        }
    }    
    return count;
}

function solution(answers) {
    var answer = [];
    let point = [];
    point.push(checkTest(answers, first));
    point.push(checkTest(answers, second));
    point.push(checkTest(answers, third));
    
    let maxValue = -987654321;
    for (let i = 0; i < point.length; i++) {
        if (maxValue < point[i]) {
            maxValue = point[i];   
        }
    }
    
    for (let i = 0; i < point.length; i++) {
        if( maxValue === point[i]) {
            answer.push(i + 1);       
        }
    }
    
    return answer;
}

// 1번은 그냥 12345
// 2번은 21 23 24 25
// 3번은 33 11 22 44 55
