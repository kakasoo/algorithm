const solution = (info, query) => {
    const map = {
        cpp: {
            backend: {
                junior: {
                    pizza: [],
                    chicken: [],
                },
                senior: {
                    pizza: [],
                    chicken: [],
                },
            },
            frontend: {
                junior: {
                    pizza: [],
                    chicken: [],
                },
                senior: {
                    pizza: [],
                    chicken: [],
                },
            },
        },
        java: {
            backend: {
                junior: {
                    pizza: [],
                    chicken: [],
                },
                senior: {
                    pizza: [],
                    chicken: [],
                },
            },
            frontend: {
                junior: {
                    pizza: [],
                    chicken: [],
                },
                senior: {
                    pizza: [],
                    chicken: [],
                },
            },
        },
        python: {
            backend: {
                junior: {
                    pizza: [],
                    chicken: [],
                },
                senior: {
                    pizza: [],
                    chicken: [],
                },
            },
            frontend: {
                junior: {
                    pizza: [],
                    chicken: [],
                },
                senior: {
                    pizza: [],
                    chicken: [],
                },
            },
        },
    };

    const infoLength = info.length;
    for (let i = 0; i < infoLength; i++) {
        const [a, b, c, d, e] = info[i].split(" ");
        map[a][b][c][d].push(Number(e));
    }

    const langs = ["java", "python", "cpp"];
    const areas = ["backend", "frontend"];
    const careers = ["senior", "junior"];
    const foods = ["pizza", "chicken"];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 2; k++) {
                for (let l = 0; l < 2; l++) {
                    map[langs[i]][areas[j]][careers[k]][foods[l]].sort(
                        (a, b) => a - b
                    );
                }
            }
        }
    }

    const answer = [];
    query.forEach((el) => {
        const [a, b, c, z] = el.split(" and ");
        const [d, e] = z.split(" ");

        const langs = a === "-" ? ["java", "python", "cpp"] : [a];
        const areas = b === "-" ? ["backend", "frontend"] : [b];
        const careers = c === "-" ? ["senior", "junior"] : [c];
        const foods = d === "-" ? ["pizza", "chicken"] : [d];

        let count = 0;

        for (const lang of langs) {
            for (const area of areas) {
                for (const career of careers) {
                    for (const food of foods) {
                        const points = map[lang][area][career][food];

                        let left = 0;
                        let right = points.length;

                        while (left < right) {
                            let mid = Math.floor((left + right) / 2);
                            if (points[mid] < e) {
                                left = mid + 1;
                            } else {
                                right = mid;
                            }
                        }
                        count += points.slice(left).length;
                    }
                }
            }
        }

        answer.push(count);
    });
    return answer;
};
