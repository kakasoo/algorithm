// 프로그래머스 레벨2 구명보트를 풀었습니다.

const isEmpty = (stack) => (stack.length ? false : true);

function solution(people, limit) {
    const sortedStack = people.sort((a, b) => a - b);

    let count = 0;
    while (!isEmpty(sortedStack)) {
        let sum = sortedStack.pop();
        while (sortedStack.length && sum + sortedStack[0] <= limit) {
            sum += sortedStack.shift();
        }
        count++;
    }
    return count;
}
