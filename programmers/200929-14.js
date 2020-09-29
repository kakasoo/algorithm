// 프로그래머스 레벨1 직사각형 별찍기를 풀었습니다.
process.stdin.setEncoding("utf8");

process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
});
