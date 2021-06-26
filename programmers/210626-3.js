// 프로그래머스 레벨2 2개 이하로 다른 비트를 풀었습니다.

const ImSoBoring = (num) => {
    const bits = num.toString(2).split("");
    if (num % 2 === 0) {
        bits.pop();
        return parseInt([...bits, "1"].join(""), 2);
    } else {
        bits.unshift("0");
        for (let i = bits.length - 1; i >= 0; i--) {
            if (bits[i] === "0") {
                bits[i] = "1";
                bits[i + 1] = "0";
                return parseInt(bits.join(""), 2);
            }
        }
    }
};

const solution = (numbers) => {
    return numbers.map((el) => ImSoBoring(el));
};
