// 프로그래머스 level1 k번째 수
function solution(array, commands) {
    let answer = new Array(commands.length).fill(0).map((el, i) => i + 1).map(el => array.slice(commands[el-1][0] - 1, commands[el-1][1]).sort((o1, o2) => o1 - o2)[commands[el-1][2] -1]);
    return answer;
}