// 프로그래머스 level1 체육복
function solution(n, lost, reserve) {
    var answer = 0;
    let array = new Array(n).fill(1);
    lost.map((losted, i) => {array[losted - 1]--});
    reserve.map((rserv, i) => {array[rserv - 1]+= 1});
    
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            count++;
        }
        else if (array[i] === 0 && array[i+1] > 1) {
            count++;
            array[i+1]--;
        }
        else if (array[i] === 0 && array[i-1] > 1) {
            count++;
            array[i-1]--;
        }
    }

    answer = count;
    return answer;
}