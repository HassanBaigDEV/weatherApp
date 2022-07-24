'use strict';

const apiKey = '8c926939b9e2a3a5819ac4069e203f38';
const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={apiKey}`;
// const apiUrl = `api.openweathermap.org/data/2.5/weather?id=524901&appid=${apiKey}`;





const searchBar = document.getElementById('search_bar');
const searchForm = document.getElementById('search_form');
const searchButton = document.getElementsByClassName('search_button');

const greetingHeader = document.getElementById('greeting_header');
const date = document.getElementById('date');

const city = document.getElementById('weather_card_city_name');
const weatherCondition = document.getElementById('weather_card_stats_condtion');
console.log(weatherCondition);
const temperature = document.getElementById('weather_card_stats_temperature');
console.log(temperature);
const illustration = document.getElementById('weather_card_illustration');

const hourlyForecastContainer = document.getElementById('hourly_forecast_container');
let formProps = [];
//get value from form input and store in variable
// const getSearchValue = () => {
    //     return searchBar.value;
// }
let cityName = '';
const geoApiKey = 'b7a17e62f95c5d3ddec1327fdf1977ed';

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formProps = Object.fromEntries(formData);
    console.log(formProps);
    cityName = formProps.city.toLowerCase();
    getLocation(cityName);
    
});

const geoApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${geoApiKey}`;

async function getLocation(cityName) {

    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=b7a17e62f95c5d3ddec1327fdf1977ed`);
        const data = await response.json();
         console.log(data);
        const lat = data[0].lat;
        const lon = data[0].lon;
        console.log(lat, lon);
        getWeather(lat, lon);
        

    } catch (error) {
        console.log(error);
    }
}

async function getWeather(lat, lon) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=8c926939b9e2a3a5819ac4069e203f38`);
        const data = await response.json();
        console.log(data);
        const temp = data.main.temp;
        const weather_condition = data.weather[0].main;
        const city_name = data.name;
        console.log(temp, weather_condition, city_name);

        city.innerHTML = city_name;
        weatherCondition.innerHTML = weather_condition;
        temperature.innerHTML = temp;

        
        city.setAtrr


       
    } catch (error) {
        console.log(error);
    }
}
