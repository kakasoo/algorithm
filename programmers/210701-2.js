const solution = (s) => {
    // "{{4,2,3},{3},{2,3,4,1},{2,3}}"
    const arr = s
        .split("},")
        .map((str) => {
            // [ '4,2,3', '3', '2,3,4,1', '2,3' ]
            return str
                .split("")
                .filter((el) => el !== "{" && el !== "}")
                .join("");
        })
        .sort((a, b) => {
            // [ '3', '2,3', '4,2,3', '2,3,4,1' ]
            return a.length - b.length;
        })
        .map((el) => {
            // [ '3' ], [ '2', '3' ], [ '4', '2', '3' ], [ '2', '3', '4', '1' ]
            return el.split(",");
        });

    const answer = [];
    for (let i = 0; i < arr.length; i++) {
        const curNumber = arr[i].join("");
        answer.push(curNumber);

        for (let j = i; j < arr.length; j++) {
            arr[j].splice(arr[j].indexOf(curNumber), 1);
        }
    }

    return answer.map((el) => Number(el));
};
