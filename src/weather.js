function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const API_KEY = "93a44934ebdfd5040603e59c9925d43a";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
  fetch(url).then((Response) =>
    Response.json().then((date) => {
      console.log(data.name, data.weather[0].main);
    })
  );
}

function onGeoError() {
  alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
