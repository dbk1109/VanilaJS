const Imgs = ["1.png", "2.png", "3.png", "4.png"];
const RandomImg = Imgs[Math.floor(Math.random() * Imgs.length)];

document.body.style.background = `url("img/${RandomImg}") no-repeat`;
document.body.style.backgroundSize = "cover";
