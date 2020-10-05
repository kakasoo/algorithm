// 프로그래머스 레벨2 영어 끝말잇기를 풀었습니다.
function solution(n, words) {
  let 중복체크 = [];
  for (let i = 0; i < words.length; i++) {
    if (i === 0) 중복체크.push(words[i]);
    else if (
      !중복체크.includes(words[i]) &&
      words[i - 1][words[i - 1].length - 1] === words[i][0]
    ) {
      중복체크.push(words[i]);
    } else {
      return [(i % n) + 1, parseInt(i / n) + 1];
    }
  }

  return [0, 0];
}
