const apiKey = "b1cda96283a0643d6ba4e6a4bddf7f14"
let search = ''
const cityForm = document.getElementById("cityForm")
const cityInput = document.getElementById("cityInput")
const cityName = document.getElementById("cityName")
const temp = document.getElementById("temp")
const windSpeed = document.getElementById("windSpeed")
const feelsLike = document.getElementById("feelsLike")
const weatherIcon = document.getElementById("weatherIcon")


cityForm.addEventListener('submit', event => {
    event.preventDefault();
    search = cityInput.value;
    console.log(cityInput.value)

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`)
.then(response => response.json())
.then(data => {
    cityName.innerHTML = data.name;
    temp.innerHTML = data.main.temp;
    feelsLike.innerHTML = data.main.feels_like;
    windSpeed.innerHTML = data.wind.speed;
    
    let iconLink = data.weather[0].icon
    weatherIcon.setAtribute('src', `https://openweathermap.org/img/wn/${iconLink}@2x.png`)
})
});


