API_KEY = '8af7d3fc5b98b9810beb205bdbed1128';
units = "metric";

async function weatherDataFor(cityName) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${API_KEY}`,{mode:'cors'});
    const weatherData = await response.json();
    
    console.log(weatherData);
    console.log(weatherData.name);
    console.log(weatherData.main.temp);
    console.log(weatherData.main.humidity);
    console.log(weatherData.wind.speed);

}

//calling the function here
weatherDataFor("New York");