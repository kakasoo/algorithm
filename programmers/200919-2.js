// 프로그래머스 level2 기능 개발을 풀었습니다.
const split = (arr) => {
    let answer = [];
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] , count);
        if (arr[i] === arr[i+1]) {
            count++;
        }
        else {
            answer.push(count);
            count = 1;
        }
    }
    
    return answer;
}

function solution(progresses, speeds) {
    let answer = [];
    let arr = [];
    progresses.map((program, i) => { arr.push(Math.ceil((100 - program) / speeds[i])) });

    let count = 0;  
    arr.map((el,i) => { (el > arr[i+1]) ? arr[i+1] = el : count = 0 });
   
    answer = split(arr);
    
    return answer;
}