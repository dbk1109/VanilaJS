const lineWidth = document.getElementById("line-width");
const lineColor = document.getElementById("line-color");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
ctx.strokeStyle = lineColor.value;

//ctx.fillRect(50, 50, 100, 150);

//ctx.beginPath();
//ctx.fillStyle = "red";
//ctx.fillRect(150, 150, 100, 150);

//ctx.beginPath();
//ctx.moveTo(400, 400);
//ctx.lineTo(100, 100);
//ctx.stroke();

//ctx.beginPath();
//ctx.fillStyle = "blue";
//ctx.moveTo(400, 400);
//ctx.lineTo(300, 400);
//ctx.lineTo(400, 400);
//setTimeout( () => {
//  ctx.arc(400, 400, 100, 1 * Math.PI, 1.5 * Math.PI);
//  ctx.fill();
//}, 1000);

//function onClick(event) {
//  ctx.beginPath();
//  ctx.moveTo(0, 0);
//  const colors = "#" + Math.round(Math.random() * 0xffffff).toString(16);
//  ctx.strokeStyle = colors;
//  ctx.lineTo(event.offsetX, event.offsetY);
//  ctx.stroke();
//}
//canvas.addEventListener("mousemove", onClick);

let isPainting = false;
let fillHolderX;
let fillHolderY;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}
function onMouseDown(event) {
  isPainting = true;
  fillHolderX = event.offsetX;
  fillHolderY = event.offsetY;
}
function onMouseUp(event) {
  isPainting = false;
  //ctx.beginPath();
  //ctx.moveTo(event.offsetX, event.offsetY);
  //ctx.lineTo(fillHolderX, fillHolderY);
  //ctx.stroke();
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}
function onLineColorChange(event) {
  ctx.strokeStyle = event.target.value;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("mouseleave", onMouseUp);

lineWidth.addEventListener("change", onLineWidthChange);
lineColor.addEventListener("change", onLineColorChange);

const colors = document.querySelectorAll(".color-option");

function onColorClick(event) {
  let colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  lineColor.value = colorValue;
}

colors.forEach( (e) => {
  e.addEventListener("click", onColorClick);
});