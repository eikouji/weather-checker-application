// my api key for this project: f95d4558f1f3deec5b9d71145b7381a7 //

// call for current weather // 

// search for city, weather gets displayed to current-weather-info section in html //


/* 
module example: 
fetch("https://api.github.com/users/octocat/repos").then(function(response) {
  response.json().then(function(data) {
    console.log(data);
  });
});

*/

// my api key: f95d4558f1f3deec5b9d71145b7381a7 //

fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={f95d4558f1f3deec5b9d71145b7381a7}").then(function(response) {
  response.json().then(function(data) {
      console.log(data);
  });
});