// my api key for this project: f95d4558f1f3deec5b9d71145b7381a7 //



var getCurrentWeather = document.querySelector(".city-search-form");

var searchCityName = document.querySelector(".searched-city-name");

var searchInputButton = document.querySelector(".search-city-form-input");



var getCurrentWeather = function(event) {
    // open weather APIurl //
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
    
    var apiKey = "f95d4558f1f3deec5b9d71145b7381a7";


    // make request to ow API //
    fetch(apiUrl)
    .then(function(response) {
        // request was successful //
        if (response.ok) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
                displayRepos(data, user);
            });
        } else {
            alert("Error:" + response.statusText);
        }
    })
        .catch(function(error) {
            alert("City not found! Please enter a city name.");
        });
    };

