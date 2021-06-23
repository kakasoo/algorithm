// 프로그래머스 레벨1 신규 아이디 추천을 풀었습니다.

const firstRule = (str) => str.toLowerCase();

const secondRule = (str) =>
    str
        .split("")
        .filter((el) => {
            const charCode = el.charCodeAt();
            const aCode = "a".charCodeAt();
            const zCode = "z".charCodeAt();
            const zeroCode = "0".charCodeAt();
            const nineCode = "9".charCodeAt();

            if (
                (zeroCode <= charCode && charCode <= nineCode) ||
                (aCode <= charCode && charCode <= zCode) ||
                ["-", "_", "."].includes(el)
            ) {
                return true;
            }
            return false;
        })
        .join("");

const thirdRule = (str) => {
    while (str.includes("..")) {
        str = str.replace("..", ".");
    }
    return str;
};

const fourthRule = (str) =>
    str
        .split("")
        .filter((el, i, arr) => {
            if (el === "." && (i === 0 || i === arr.length - 1)) {
                return false;
            }
            return true;
        })
        .join("");

const fifthRule = (str) => (str.length ? str : "a");

const sixthRule = (str) => {
    const next = str.length >= 16 ? str.slice(0, 15) : str;
    return next
        .split("")
        .filter((el, i, arr) => {
            if (el === "." && (i === 0 || i === arr.length - 1)) {
                return false;
            }
            return true;
        })
        .join("");
};

const seventhRule = (str) => {
    if (str.length >= 3) {
        return str;
    }
    const last = str[str.length - 1];

    while (str.length < 3) {
        str += last;
    }
    return str;
};

const solution = (new_id) => {
    const first = firstRule(new_id);
    const second = secondRule(first);
    const third = thirdRule(second);
    const fourth = fourthRule(third);
    const fifth = fifthRule(fourth);
    const sixth = sixthRule(fifth);
    const seventh = seventhRule(sixth);

    return seventh;
};
