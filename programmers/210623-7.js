const getPriority = () => {
    const operator = ["+", "-", "*"];
    const priority = [];
    let visited;
    let answer;

    const dfs = (start) => {
        visited[start] = true;
        answer.push(operator[start]);

        if (answer.length === 3) {
            priority.push([...answer]);
        }

        for (let i = 0; i < operator.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                dfs(i);

                visited[i] = false;
                answer.pop();
            }
        }
    };

    for (let i = 0; i < operator.length; i++) {
        visited = new Array(3).fill(false);
        answer = [];
        dfs(i);
    }

    return priority;
};

const splitExpression = (expression) => {
    let answer = [expression];

    ["+", "-", "*"].forEach((operator) => {
        for (let i = 0; i < answer.length; i++) {
            const diviedExpresses = answer[i].split(operator);
            const temp = [];
            for (let i = 0; i < diviedExpresses.length; i++) {
                temp.push(diviedExpresses[i]);
                temp.push(operator);
            }
            temp.pop();

            answer[i] = temp;
        }
        answer = answer.flat();
    });

    return answer;
};

const evalueateExpress = (express, priority) => {
    priority.forEach((operator) => {
        while (express.includes(operator)) {
            const operatorIdx = express.indexOf(operator);
            const firstOperand = operatorIdx - 1;
            const secondOperand = operatorIdx + 1;

            express.splice(
                firstOperand,
                3,
                eval(express[firstOperand] + operator + express[secondOperand])
            );
        }
    });

    return express;
};

const solution = (expression) => {
    const priority = getPriority();
    const answer = [];

    priority.forEach((el) => {
        const diviedExpresses = splitExpression(expression);
        const curValue = evalueateExpress(diviedExpresses, el);
        answer.push(curValue);
    });

    return Math.max(
        ...answer.flat(Infinity).map((el) => (el >= 0 ? el : el * -1))
    );
};
