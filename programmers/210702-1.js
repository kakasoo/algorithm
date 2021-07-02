const solution = (dirs) => {
    const answer = [];
    let next = { y: 5, x: 5 };

    dirs.split("").forEach((dir) => {
        const cur = next;
        const funcs = {
            U: function (cur) {
                return { y: cur.y + 1, x: cur.x };
            },
            D: function (cur) {
                return { y: cur.y - 1, x: cur.x };
            },
            R: function (cur) {
                return { y: cur.y, x: cur.x + 1 };
            },
            L: function (cur) {
                return { y: cur.y, x: cur.x - 1 };
            },
        };
        next = funcs[dir](cur);
        if (next.y < 0 || next.y > 10 || next.x < 0 || next.x > 10) {
            next = cur;
        } else {
            const aTob = `${cur.x}${cur.y}${next.x}${next.y}`;
            const bToa = `${next.x}${next.y}${cur.x}${cur.y}`;

            if (!answer.includes(aTob) && !answer.includes(bToa)) {
                answer.push(aTob);
            }
        }
    });

    return answer.length;
};
