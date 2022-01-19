const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetingComment = document.querySelector(".greeting");
const nav = document.querySelector(".nav");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const handleLoginSubmit = (event) => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  makeGreeting(username);
};

const makeGreeting = (username) => {
  greetingComment.innerText = `Hello ${username}`;
  greetingComment.classList.remove(HIDDEN_CLASSNAME);
};
const login = () => {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
};

let savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername) {
  makeGreeting(savedUsername);
} else {
  login();
}

function changeName() {
  localStorage.removeItem(USERNAME_KEY);
  login();
}

nav.querySelector("i").addEventListener("click", changeName);
