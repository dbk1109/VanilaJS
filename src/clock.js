const textSection = document.querySelector(".textSection");
const imgSection = document.querySelector(".imgSection");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  imgSection.innerText = `${hours} : ${minutes}`;
}

getClock();
setInterval(getClock, 1000);
