// 프로그래머스 level1 두 개 뽑아서 더하기
function solution(numbers) {
    let answer = [];
    numbers.map((el1, i) => {
        numbers.map((el2, j) => {
            if ((i !== j) && (!answer.includes(el1+el2))) answer.push(el1 + el2);
        })
    })
    return answer.sort((o1,o2) => o1 - o2);
}