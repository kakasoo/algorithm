const readline = require("readline");

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let cnt = 0;
let count = 0;
let clothes = 0;
input = [];
rl.on("line", (line) => {
    if (!count) {
        count = Number(line);
    } else {
        if (!isNaN(line - 0)) {
            clothes = Number(line);
            cnt++;
            if (clothes === 0) {
                console.log(0);
            }
        } else {
            input.push(line);
            if (input.length === clothes) {
                main();
                input = [];

                if (cnt === count) {
                    rl.close();
                }
            }
        }
    }
});

const main = () => {
    const clothes = [];

    input.forEach((cloth) => {
        const [name, kind] = cloth.split(" ");
        if (!clothes[kind]) {
            clothes[kind] = [];
        }
        clothes[kind].push(name);
    });

    let sum = 1;
    for (const kind in clothes) {
        sum *= clothes[kind].length + 1;
    }
    console.log(sum - 1);
};
