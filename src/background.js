const Imgs = ["0.jpg", "1.jpg", "2.jpg"];

const RandomImg = Imgs[Math.floor(Math.random() * Imgs.length)];

const bgImages = document.createElement("img");

bgImages.src = `img/${RandomImg}`;
