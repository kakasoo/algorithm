const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const [A, B, C] = line.split(" ").map(Number);

  const first = (A, B, C) => (A + B) % C;
  const second = (A, B, C) => ((A % C) + (B % C)) % C;
  const third = (A, B, C) => (A * B) % C;
  const fourth = (A, B, C) => ((A % C) * (B % C)) % C;

  console.log(first(A, B, C));
  console.log(second(A, B, C));
  console.log(third(A, B, C));
  console.log(fourth(A, B, C));
});
