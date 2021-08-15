const check = (row, cur) => {
    const [myself] = row.splice(cur, 1);
    row.sort((a, b) => a - b);
    const sumWithoutMyself = row.reduce((acc, cur) => acc + cur);
    
    if (myself > row[row.length - 1]) {
        return sumWithoutMyself / row.length;
    }
    if (myself < row[0]) {
        return sumWithoutMyself / row.length;
    }
    return (sumWithoutMyself + myself) / (row.length + 1);
}

function solution(scores) {
    const answer = [];
    for (let i = 0; i < scores.length; i++) {
        const test = scores.map((el) => el.shift());
        answer.push(check(test, i));
    }
    
    return answer.map((el) => {
        if (el >= 90) {
            return 'A';
        } else if (el >= 80) {
            return 'B';
        } else if (el >= 70) {
            return 'C';
        } else if (el >= 50) {
            return 'D';
        }
        return 'F';
    }).join('');
}