// 프로그래머스 레벨1 소수 만들기를 풀었습니다.

const solution = (nums) => {
    const answer = [];
    const visited = Array(nums.length).fill(false);

    let count = 0;

    const sumOfVisited = () => {
        let sum = 0;
        for (let i = 0; i < visited.length; i++) {
            if (visited[i] === true) {
                sum += nums[i];
            }
        }
        return sum;
    };

    const dfs = (cur, num) => {
        if (visited.filter((el) => el).length === 3) {
            answer.push(sumOfVisited());
            return;
        }

        for (let i = cur; i < nums.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                dfs(i + 1);
                visited[i] = false;
            }
        }
    };

    const checkPrime = (arr) => {
        loop1: for (let i = 0; i < arr.length; i++) {
            const value = arr[i];
            if (value <= 1) {
                continue;
            }

            for (let j = 2; j <= Math.sqrt(value); j++) {
                if (value % j === 0) {
                    continue loop1;
                }
            }
            count++;
        }
    };

    dfs(0);
    // checkPrime([...new Set(answer)]);

    checkPrime(answer);
    return count;
};
