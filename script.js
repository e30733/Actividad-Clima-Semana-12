const apiKey = '13081a48dbc7023ace6a3baf72658dc6'; // Reemplace con su clave de API

document.getElementById('getForecastBtn').addEventListener('click', getWeather);

async function getWeather() {
    const locationInput = document.getElementById('locationInput').value;

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&units=metric&appid=${apiKey}`);
        const data = await response.json();

        if (data.cod === '404') {
            displayErrorMessage('Ubicación no encontrada');
        } else {
            displayWeatherData(data);
        }
    } catch (error) {
        displayErrorMessage('Hubo un problema al obtener el pronóstico del tiempo');
    }
}

function displayWeatherData(data) {
    document.getElementById('location').textContent = data.name;
    document.getElementById('temperature').textContent = data.main.temp;
    document.getElementById('description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = data.main.humidity;
    document.getElementById('windSpeed').textContent = data.wind.speed;
    document.getElementById('errorMessage').textContent = '';
}

function displayErrorMessage(message) {
    document.getElementById('errorMessage').textContent = message;
    document.getElementById('location').textContent = '';
    document.getElementById('temperature').textContent = '';
    document.getElementById('description').textContent = '';
    document.getElementById('humidity').textContent = '';
    document.getElementById('windSpeed').textContent = '';
}
