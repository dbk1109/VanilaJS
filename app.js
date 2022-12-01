const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(50, 50, 100, 150);

ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(150, 150, 100, 150);

ctx.beginPath();
ctx.moveTo(400, 400);
ctx.lineTo(100, 100);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "blue";
ctx.moveTo(400, 400);
ctx.lineTo(300, 400);
ctx.lineTo(400, 400);
setTimeout( () => {
  
  ctx.arc(400, 400, 100, 1 * Math.PI, 1.5 * Math.PI);


  ctx.fill();
}, 1000);