const carrotButton = document.querySelector(".btn-carrot");
let clickCount = 0; //저장

function handleClick() {
  clickCount++;
  console.log(`현재 클릭 횟수: ${clickCount}`);

  if (clickCount === 10) {
    alert("🥕 당근 버튼을 10번 눌렀어요! 🎉");
    clickCount = 0; // 다시 초기화
  }
}

carrotButton.addEventListener("click", handleClick);
