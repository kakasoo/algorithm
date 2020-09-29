// 프로그래머스 레벨 1 2019 KAKAO BLIND RECRUITMENT > 실패율을 풀었습니다.
function solution(N, stages) {
  let answer = [];

  let allPlayer = stages.length;
  for (let i = 1; i <= N; i++) {
    let stageNum = stages.filter((el) => el === i).length;
    let fail;
    if (stageNum === 0) fail = 0;
    else {
      fail = stageNum / allPlayer;
    }
    allPlayer -= stageNum;
    answer.push({ idx: i, ratio: fail });
  }
  return answer.sort((o1, o2) => -o1.ratio + o2.ratio).map((el) => el.idx);
}
