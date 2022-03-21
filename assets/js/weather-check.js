//  //

// vars for this project //
var searchedCityForm = document.querySelector("#searched-city-form");
var searchedCityNameInput = document.querySelector("#search-city-form-input");
var currentWeatherCurrentCity = document.querySelector("#current-city-name");

require('dotenv').config()

// call for current weather // 
var getCurrentWeatherData = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city "&appid=" + process.env.API_KEY + "&units=imperial";
    fetch(apiUrl)
      .then(function(response) {
          if (response.ok) {
              response.json().then(function(data){
                  saveHistory.push(city);
                  localStorage.setItem("cityName", JSON.stringify(saveHistory));
                  displaySearchedCity(data, city);

                  // latitude 

                  // longitude

                  // name 

                  // OW oneCall API // 

              })
          }
      })
}

var displaySearchedCity = function(weatherData, citySearch) {
    currentWeatherCurrentCity.textContent = "";
}
// search for city, weather gets displayed to current-weather-info section in html //

// //

fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part} + "&appid=" + process.env.API_KEY + "").then(function(response) {
  response.json().then(function(data) {
      console.log(data);
  });
});

var getCurrentWeather = function(currentWeather) {
    // openWeather API //
    var apiKey = "process.env.API_KEY";

    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?" + "&appid=" + process.env.API_KEY + "";

    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

// forecast display // 
var forecastDayEl = document.querySelector("#card");
forecastDayEl.textContent = ""
  
