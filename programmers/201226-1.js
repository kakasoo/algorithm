// 프로그래머스 레벨2 큰수 만들기를 풀었습니다.
// 그리디하지 않은 방식만 생각나서 한참을 고생한 문제입니다. 코드는 간결하지만 어려웠습니다.

const solution = (number, k) => {
    const stack = [];
    for (let i = 0; i < number.length; i++) {
        const now = number[i];
        while (k > 0 && stack[stack.length - 1] < now) {
            stack.pop();
            k--;
        }
        stack.push(now);
    }
    return stack.slice(0, stack.length - k).join("");
};
