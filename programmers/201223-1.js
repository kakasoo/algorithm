// 프로그래머스 레벨2 문자열 압축하기를 풀었습니다.
// 매우 어려웠다.

const solution = (s) => {
    if (s.length === 1) {
        return 1;
    }

    let minValue = 987654321;
    for (let i = 1; i <= s.length / 2; i++) {
        let cnt = 1;
        let str = s.substr(0, i);

        for (let j = i; j <= s.length - i; j = j + i) {
            let prev = s.substr(j - i, i);
            let next = s.substr(j, i);
            // console.log("prev, next : ", prev, next);
            if (prev === next) {
                cnt++;
                if (s.length - i < i + j) {
                    str += cnt;
                }
            } else {
                if (cnt !== 1) {
                    str += cnt;
                    str += next;
                } else {
                    str += next;
                }
                cnt = 1;
            }
        }
        str += s.substr(s.length - 1 - (s.length % i), s.length % i);

        if (str.length < minValue) {
            minValue = str.length;
        }
    }
    return minValue;
};
