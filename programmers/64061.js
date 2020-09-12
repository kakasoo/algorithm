// 프로그래머스 64061번 문제입니다.

function checkDoll(stack, curCount) {
    let count = stack.some((el, i) => {
        if(stack[i] === stack[i+1]) {
            stack.pop();
            stack.pop();
            curCount += 2;
        }
    })
    return curCount;
}

function solution(board, moves) {
    let answer = 0;
    let stack = [];
    moves.map((el) => {
        board.some((row, height) => {
            if(row[el -1] != 0) {
                stack.push(row[el -1]);
                answer = checkDoll(stack, answer);
                row[el -1] = 0;
                return true;
            }
        });
    });
    
    return answer;
}