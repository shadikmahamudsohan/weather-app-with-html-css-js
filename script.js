const apiKey = "fb3984c96f1280125a60fc04ca5b2831";
const city = "Japan";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById("weather-info")
        const cityElement = document.getElementById("city");
        const temperatureElement = document.getElementById("temperature")
        const descriptionElement = document.getElementById("description")
        const iconElement = document.getElementById("icon")

        cityElement.innerHTML = data.name
        temperatureElement.innerHTML = `${data.main.temp.toFixed(1)} C`
        descriptionElement.innerHTML = data.weather[0].description
        iconElement.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="weather icon">`

        weatherInfo.style.display="block";
    })
    .catch(error => console.log(error))