import 'normalize.css';
import '../less/style.less';
const general = require('./general.js');

const today = new Date();
const firstLine = document.querySelector(".line");
general.typeLine(firstLine, "> Nothing touched survives intact.");

const inputs = document.querySelectorAll(".input");

/* CLICK / TAP */
inputs.forEach(el => {
  el.addEventListener("click", () => {
    handleInput(el.dataset.key, el);
  });
});

/* KEYBOARD */
document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();

  const match = [...inputs].find(el => el.dataset.key === key);
  if (match) {
    handleInput(key, match);
  }
});

function handleInput(key, el) {
  el.classList.add("active");

  setTimeout(() => {
    el.classList.remove("active");
  }, 120);

  // playClick();

  const action = el.dataset.action;

  if (action === "menu") {
    toggleMenu(true);
    return;
  }

  if (action === "close") {
    closeMenu();
    return;
  }

  if (action.startsWith("/")) {
    navigate(action);
  }
}

function navigate(path) {
  // small delay so sound/feedback happens
  setTimeout(() => {
    window.location.href = path;
  }, 120);
}

const menu = document.getElementById("menu");

function toggleMenu(force) {
  const isOpen = menu.classList.contains("open");

  if (force === true || (!isOpen && force !== false)) {
    openMenu();
  } else {
    closeMenu();
  }
}

function openMenu() {
  menu.classList.add("open");
  // playClick();
}

function closeMenu() {
  menu.classList.remove("open");
  // playClick();
}

document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();

  // ESC always closes menu
  if (key === "ESCAPE") {
    closeMenu();
    return;
  }

  const activeInputs = document.querySelectorAll(
    menu.classList.contains("open")
      ? "#menu .input"
      : ".terminal .input"
  );

  const match = [...activeInputs].find(el => el.dataset.key === key);

  if (match) {
    handleInput(key, match);
  }
});

// function playClick() {
//   const audio = new Audio("/sounds/click.wav");
//   audio.volume = 0.2;
//   audio.play().catch(() => {});
// }
