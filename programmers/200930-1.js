// 프로그래머스 레벨2 스킬트리를 풀었습니다.
function solution(skill, skill_trees) {
  let sunseo = [];
  let count = 0;
  skill.split("").map((el, i) => {
    sunseo.push({ idx: i, skill: el });
  });
  skill = skill.split("");

  for (let i = 0; i < skill_trees.length; i++) {
    skill_trees[i] = skill_trees[i]
      .split("")
      .map((el) => {
        if (skill.includes(el)) {
          return el;
        }
        return "";
      })
      .filter((el) => !!el);
  }
  skill_trees.map((el, i) => {
    if (el.length === skill.length) {
      if (el.join("") === skill.join("")) count++;
    } else {
      let flag = true;
      for (let i = 0; i < el.length; i++) {
        if (el[i] !== skill[i]) flag = false;
      }
      if (flag) count++;
    }
  });
  return count;
}
