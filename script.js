'use strict';

const apiKey = '8c926939b9e2a3a5819ac4069e203f38';
const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={apiKey}`;
// const apiUrl = `api.openweathermap.org/data/2.5/weather?id=524901&appid=${apiKey}`;


const geoApiKey = 'b7a17e62f95c5d3ddec1327fdf1977ed';
const geoApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q={city_name},{state_code},{country_code}&limit={limit}&appid={geoApiKey}`;

