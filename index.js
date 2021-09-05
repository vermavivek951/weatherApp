API_KEY = '8af7d3fc5b98b9810beb205bdbed1128';
units = "metric";

const submitBtn_CityName = document.getElementById('submitCityName');

function displayInPage(weatherData) {
    const container = document.getElementById('container');
    
    const cityname = document.createElement('p');
    cityname.textContent = `City Name: ${weatherData.name}`;

    const temperature = document.createElement('p');
    temperature.textContent = `Temperature(C): ${weatherData.main.temp}`;

    const humidity = document.createElement('p');
    humidity.textContent = `Humidity: ${weatherData.main.humidity}`;

    const windSpeed = document.createElement('p');
    windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed}`;


    container.innerHTML = "";
    
    container.appendChild(cityname);
    container.appendChild(temperature);
    container.appendChild(humidity);
    container.appendChild(windSpeed);
}

async function weatherDataFor(cityName) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${API_KEY}`,{mode:'cors'});
    const weatherData = await response.json();
    
    // console.log(weatherData);
    // console.log(weatherData.name);
    // console.log(weatherData.main.temp);
    // console.log(weatherData.main.humidity);
    // console.log(weatherData.wind.speed);

    displayInPage(weatherData);

}

function displayTheData() {
    const inputValueForCityName = document.getElementById('inputForCityName').value;
    
    weatherDataFor(`${inputValueForCityName}`);    

}

submitBtn_CityName.addEventListener('click' , displayTheData);
