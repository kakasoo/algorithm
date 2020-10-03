// 프로그래머스 레벨2 H-Index를 풀었습니다.
function solution(citations) {
  citations = citations.sort((o1, o2) => o1 - o2);
  let maxV = 0;
  let count = 1;
  while (count <= citations[citations.length - 1]) {
    let 이하 = citations.filter((e) => e <= count);
    let 이상 = citations.filter((e) => e >= count);
    //console.log(이상, count, 이하);
    if (이상.length >= count && 이하.length <= count) {
      maxV = count;
    }
    count++;
  }
  return maxV;
}
