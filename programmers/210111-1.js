// 프로그래머스 레벨2 멀쩡한 사각형을 풀었습니다.
// 나는 이걸 그래프라고 생각하여, 기울기를 이용해 구하려고 시도했다.
// 시간초과가 나와서 결국 못풀던 문제인데, 오늘 찾아보니 최대공약수를 이용하는 문제였다.
const gcd = (w, h) => {
    if (w % h === 0) {
        return h;
    }
    return gcd(h, w % h);
};

const solution = (w, h) => {
    const gcdVal = gcd(w, h);
    return w * h - (w + h - gcdVal);
};
