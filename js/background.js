const images = [
  "0.JPG",
  "1.JPG",
  "2.JPG",
  "3.JPG",
  "4.JPG",
  "5.JPG",
  "6.JPG",
  "7.JPG",
  "8.JPG",
  "9.JPG",
  "10.JPG",
  "11.JPG",
  "12.JPG",
  "13.JPG",
];
let currentIndex = 0; // 현재 이미지 인덱스

function changeBackground() {
  const chosenImage = images[currentIndex]; // 순차적으로 이미지 선택
  const imageUrl = `img/${chosenImage}`;

  document.body.style.backgroundImage = `url(${imageUrl})`;

  // 다음 이미지로 이동 (마지막이면 다시 처음으로)
  currentIndex = (currentIndex + 1) % images.length;
}

// 페이지 로드 시 실행
changeBackground();

// 30분마다 자동 변경
setInterval(changeBackground, 30 * 60 * 1000);

// 아이콘 클릭 시 배경 변경
const changeBgButton = document.getElementById("change-bg-btn");

if (changeBgButton) {
  changeBgButton.onclick = changeBackground;
}
