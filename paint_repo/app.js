const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("colors");
const range = document.getElementById("jsRagne");
const mode = document.getElementById("jsMode");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting(event) {
  painting = false;
}
function startPainting(event) {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleColorsChange(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleLiner(event) {
  const lineBold = event.target.value;
  ctx.lineWidth = lineBold;
}
function handleFill() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}
function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}
function handleRB(event) {
  event.preventDefault();
}

function saveClick() {
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS[EXPORT]😘";
  link.click();
}
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("mousedown", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleRB);
}

Array.from(colors).forEach((color) => {
  color.addEventListener("click", handleColorsChange);
});

if (range) {
  range.addEventListener("input", handleLiner);
}

if (mode) {
  mode.addEventListener("click", handleFill);
}

if (jsSave) {
  jsSave.addEventListener("click", saveClick);
}
