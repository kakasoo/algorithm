// 프로그래머스 레벨2 2019 KAKAO BLIND RECRUITMENT 오픈채팅방 문제를 풀었습니다.

const solution = (record) => {
    const ids = Array.from(
        new Set([
            ...record.map((el) => {
                const [action, id, nickname] = el.split(" ");
                return id;
            }),
        ])
    );

    const idMap = {};
    for (const id of ids) {
        idMap[id] = undefined;
    }

    for (let i = record.length - 1; i >= 0; i--) {
        const [action, id, nickname] = record[i].split(" ");

        if (!idMap[id]) {
            idMap[id] = nickname;
        }
    }

    let answer = [];
    for (let i = 0; i < record.length; i++) {
        const [action, id, nickname] = record[i].split(" ");

        if (action === "Enter") {
            answer.push(`${idMap[id]}님이 들어왔습니다.`);
        } else if (action === "Leave") {
            answer.push(`${idMap[id]}님이 나갔습니다.`);
        }
    }
    return answer;
};
