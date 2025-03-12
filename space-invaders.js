const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 480;
canvas.height = 640;

let spaceship = {
  width: 40,
  height: 20,
  x: canvas.width / 2 - 20,
  y: canvas.height - 30,
  speed: 5,
};

let bulletSpeed = 7;
let bulletWidth = 4;
let bulletHeight = 10;
let bulletColor = '#fff';
let bullets = [];

let alienRows = 3;
let alienCols = 8;
let alienWidth = 30;
let alienHeight = 20;
let alienPadding = 10;
let alienOffsetTop = 30;
let alienOffsetLeft = 30;
let aliens = [];

let alienSpeed = 1;
let alienDirection = 1; // 1 for right, -1 for left
let alienDropDistance = 20;

function initAliens() {
  aliens = [];
  for (let r = 0; r < alienRows; r++) {
    for (let c = 0; c < alienCols; c++) {
      const x = alienOffsetLeft + c * (alienWidth + alienPadding);
      const y = alienOffsetTop + r * (alienHeight + alienPadding);
      aliens.push({ x, y, status: 1 });
    }
  }
}

initAliens();

let leftPressed = false;
let rightPressed = false;
let spacePressed = false;

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

function keyDownHandler(e) {
  if (e.code === 'ArrowLeft') leftPressed = true;
  else if (e.code === 'ArrowRight') rightPressed = true;
  else if (e.code === 'Space') spacePressed = true;
}

function keyUpHandler(e) {
  if (e.code ===
