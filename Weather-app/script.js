const apiKey = "536043a84ca058d2cf27ade70df24ad8";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weather-img");
async function checkweather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherImg.src = "images/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherImg.src = "images/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherImg.src = "images/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherImg.src = "images/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherImg.src = "images/images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
