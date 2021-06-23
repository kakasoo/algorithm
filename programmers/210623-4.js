// 프로그래머스 레벨 1 폰켓몬을 풀었습니다.

const solution = (nums) => {
    const chance = parseInt(nums.length / 2);
    const max = Array.from(new Set(nums)).length;

    return max >= chance ? chance : max;
};
