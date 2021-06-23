// 프로그래머스 레벨1 로또의 최고 순위와 최저 순위를 풀었습니다.

const setRank = (n) => {
    switch (n) {
        case 6:
            return 1;
        case 5:
            return 2;
        case 4:
            return 3;
        case 3:
            return 4;
        case 2:
            return 5;
        case 1:
        case 0:
            return 6;
    }
};

const solution = (lottos, win_nums) => {
    const numbers = lottos.filter((el) => el !== 0);
    const zeros = lottos.filter((el) => el === 0);

    let count = 0;
    numbers.forEach((num) => {
        if (win_nums.includes(num)) {
            count++;
        }
    });

    return [setRank(count + zeros.length), setRank(count)];
};
