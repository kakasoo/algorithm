// 프로그래머스 레벨2 이진 변환 반복하기를 풀었습니다.

const solution = (s) => {
    let zeroCount = 0;
    let count = 0;
    while (
        (s = s
            .split("")
            .filter((el) => {
                if (el !== "0") {
                    return true;
                }
                zeroCount++;
                return false;
            })
            .join("")
            .length.toString(2)) !== "1"
    ) {
        count++;
    }

    return [count + 1, zeroCount];
};
