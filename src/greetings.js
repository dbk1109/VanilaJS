const nameForm = document.querySelector("#nameForm");
const nameInput = nameForm.querySelector("input");
const hello = document.querySelector("h1");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLogin(e) {
  e.preventDefault();
  const nameValue = nameInput.value;
  localStorage.setItem(USERNAME_KEY, nameValue);
  nameForm.classList.add(HIDDEN_CLASS);
  greeting(nameValue);
}

function greeting(nameValue) {
  hello.innerText = `hello ${nameValue}`;
  hello.classList.remove(HIDDEN_CLASS);
}

nameForm.addEventListener("submit", onLogin);

const savedName = localStorage.getItem(USERNAME_KEY);

if (savedName === null) {
  nameForm.classList.remove(HIDDEN_CLASS);
} else {
  greeting(savedName);
}
