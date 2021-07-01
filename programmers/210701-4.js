// 프로그래머스 레벨 2 괄호 회전하기를 풀었습니다.

const isRight = (arr) => {
    const stack = [];

    for (const item of arr) {
        stack.push(item);

        if (stack.length >= 2) {
            while (
                (stack[stack.length - 2] === "(" &&
                    stack[stack.length - 1] == ")") ||
                (stack[stack.length - 2] === "[" &&
                    stack[stack.length - 1] == "]") ||
                (stack[stack.length - 2] === "{" &&
                    stack[stack.length - 1] == "}")
            ) {
                stack.pop();
                stack.pop();
            }
        }
    }

    return stack.length ? false : true;
};

const solution = (s) => {
    const strArr = s.split("");
    let i = strArr.length;

    let count = 0;
    while (i--) {
        strArr.push(strArr.shift());

        if (isRight(strArr)) {
            count++;
        }
    }
    return count;
};
