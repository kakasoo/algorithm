let num = 1;
const canvas = document.getElementById("canvas"); // id가 canvas인 tag를 잡는다.
canvas.addEventListener("click", (pos) => {
  // 그것에 click 이벤트와, 이벤트 시 동작할 함수를 넣는다.
  console.log(num++ + " : X pos : ", pos.clientX, ", Y pos : ", pos.clientY); // pos의 x와 y를 출력한다.
});
