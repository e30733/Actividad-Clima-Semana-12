const apiKey = '13081a48dbc7023ace6a3baf72658dc6';

document.getElementById('obtenerClimaBtn').addEventListener('click', obtenerClima);

async function obtenerClima() {
    const ubicacionInput = document.getElementById('ubicacionInput').value;

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ubicacionInput}&units=metric&appid=${apiKey}`);
        const data = await response.json();

        if (data.cod === '404') {
            mostrarError('Ubicación no encontrada');
        } else {
            mostrarDatosClima(data);
        }
    } catch (error) {
        mostrarError('No se pudo encontrar la información solicitada');
    }
}

function mostrarDatosClima(data) {
    document.getElementById('ubicacion').textContent = data.name;
    document.getElementById('temperatura').textContent = data.main.temp;
    document.getElementById('descripcion').textContent = data.weather[0].descripcion;
    document.getElementById('humedad').textContent = data.main.humedad;
    document.getElementById('velocidadViento').textContent = data.wind.speed;
    document.getElementById('error').textContent = '';
}

function mostrarError(message) {
    document.getElementById('error').textContent = message;
    document.getElementById('ubicacion').textContent = '';
    document.getElementById('temperatura').textContent = '';
    document.getElementById('descripcion').textContent = '';
    document.getElementById('humedad').textContent = '';
    document.getElementById('velocidadViento').textContent = '';
}
