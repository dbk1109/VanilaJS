const Imgs = ["1.png", "2.png", "3.png", "4.png"];

const RandomImg = Imgs[Math.floor(Math.random() * Imgs.length)];

const bgImages = document.createElement("img");

bgImages.src = `img/${RandomImg}`;
