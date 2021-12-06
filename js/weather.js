API_KEY = "211405b27e1e3b17ad3b0baded11a0bf";

const geoOk = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather span:first-child");
      const city = document.querySelector(".weather span:last-child");
      console.log(city);
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}`;
    });
};

const geoError = () => {
  alert("I don't know where you are.");
};

navigator.geolocation.getCurrentPosition(geoOk, geoError);
