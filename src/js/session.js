import 'normalize.css';
import '../less/style.less';
const general = require('./general.js');

const data = {
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language,
  languages: navigator.languages,
  screenWidth: window.screen.width,
  screenHeight: window.screen.height,
  colorDepth: window.screen.colorDepth,
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  hardwareConcurrency: navigator.hardwareConcurrency,
  deviceMemory: navigator.deviceMemory || "unknown",
};

async function hashFingerprint(input) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);

  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
};

async function generateFingerprint() {
  const raw = [
    navigator.userAgent,
    navigator.platform,
    navigator.language,
    screen.width,
    screen.height,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
    general.getCanvasFingerprint(),
    general.getWebGLFingerprint()
  ].join("|");

  return await hashFingerprint(raw);
};

const userFingerprint = await generateFingerprint();

const firstLine = document.querySelector(".line");
general.typeLine(firstLine, "> the system is observing. influencing. profiting.", 40);

const secondLine = document.querySelector('.line2');
setTimeout(() => {
  general.typeLine(secondLine, "> profiling...")
}, 2000);

const thirdLine = document.querySelector('.line3');
setTimeout(() => {
  general.typeLine(thirdLine, "> session dump in progress...");
}, 3000);

const fourthLine = document.querySelector('.line4');
setTimeout(() => {
  general.typeLine(fourthLine, "> FINGERPRINT_ID: " + userFingerprint);
}, 3500);

// session data
setTimeout(() => {
  general.typeLine(document.querySelector('.useragent'), "> user-agent: " + data.userAgent);
}, 3500);

setTimeout(() => {
  general.typeLine(document.querySelector('.platform'), "> platform: " + data.platform);
}, 4000);

setTimeout(() => {
  general.typeLine(document.querySelector('.language'), "> language: " + data.language);
}, 3500);

setTimeout(() => {
  general.typeLine(document.querySelector('.languages'), "> languages: " + data.languages);
}, 4500);

setTimeout(() => {
  general.typeLine(document.querySelector('.screenWidth'), "> screenWidth: " + data.screenWidth);
}, 2500);

setTimeout(() => {
  general.typeLine(document.querySelector('.screenHeight'), "> screenHeight: " + data.screenHeight);
}, 3500);

setTimeout(() => {
  general.typeLine(document.querySelector('.colorDepth'), "> colorDepth: " + data.colorDepth);
}, 3500);

setTimeout(() => {
  general.typeLine(document.querySelector('.timezone'), "> timezone: " + data.timezone);
}, 3500);

setTimeout(() => {
  general.typeLine(document.querySelector('.hardwareConcurrency'), "> hardwareConcurrency: " + data.hardwareConcurrency);
}, 3550);

let memory = (data.deviceMemory == 'unknown') ? '[REDACTED]' : data.deviceMemory;
setTimeout(() => {
  general.typeLine(document.querySelector('.deviceMemory'), "> deviceMemory: " + memory);
}, 3000);

setTimeout(() => {
  general.typeLine(document.querySelector('.canvas'), "> canvasFingerprint: " + general.getCanvasFingerprint());
}, 2000);

setTimeout(() => {
  general.typeLine(document.querySelector('.webgl'), "> webGL_Fingerprint: " + general.getWebGLFingerprint(), 10);
}, 5500);

general.typeLine(document.querySelector('.pg-content'), "> this is what the system chose to show you. what else does the system know? what else can it find out?", 40);

// Keyboard menu management
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
