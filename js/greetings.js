const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logOut = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username} How are you today?`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logOut.classList.remove(HIDDEN_CLASSNAME);
}

function logOutClick(event) {
  event.preventDefault();
  localStorage.removeItem(USERNAME_KEY); // 키 사용
  logOut.classList.add(HIDDEN_CLASSNAME); // 로그아웃 버튼 숨기기
  greeting.classList.add(HIDDEN_CLASSNAME); // 인사말 숨기기
  loginForm.classList.remove(HIDDEN_CLASSNAME); // 로그인 폼 표시
  loginInput.value = ""; // 입력 필드 초기화
}

logOut.addEventListener("click", logOutClick);
loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME); // 인사말 숨기기
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME); // 초기 상태에서 폼 숨기기
  paintGreetings(savedUsername);
}
