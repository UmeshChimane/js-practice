let controller;

const cityInput = document.getElementById("city");
const searchBtn = document.getElementById("searchBtn");
const retryBtn = document.getElementById("retryBtn");
const message = document.getElementById("message");
const weather = document.getElementById("weather");

async function getWeather() {

    const city = cityInput.value.trim();

    if (city === "") {
        message.textContent = "Please enter a city";
        return;
    }
    if (controller) {
        controller.abort();
    }

    controller = new AbortController();

    try {
        message.textContent = "Loading...";
        weather.innerHTML = "";
        retryBtn.style.display = "none";

        const locationResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`,
            {
                signal: controller.signal
            }
        );

        if (!locationResponse.ok) {
            throw new Error("Unable to find city");
        }

        const locationData = await locationResponse.json();

        if (!locationData.results) {
            throw new Error("City not found");
        }

        const location = locationData.results[0];

        const latitude = location.latitude;
        const longitude = location.longitude;

        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`,
            {
                signal: controller.signal
            }
        );

        if (!weatherResponse.ok) {
            throw new Error("Unable to get weather");
        }

        const weatherData = await weatherResponse.json();

        message.textContent = "Weather found!";

        weather.innerHTML = `
            <h3>${location.name}</h3>
            <p>Temperature: ${weatherData.current.temperature_2m} °C</p>
            <p>Wind Speed: ${weatherData.current.wind_speed_10m} km/h</p>
        `;

    } catch (error) {

        if (error.name === "AbortError") {
            return;
        }

        message.textContent = "Something went wrong: " + error.message;

        retryBtn.style.display = "inline-block";
    }
}

searchBtn.addEventListener("click", getWeather);
retryBtn.addEventListener("click", getWeather);
retryBtn.style.display = "none";