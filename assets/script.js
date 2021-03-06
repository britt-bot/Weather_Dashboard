// search
// for a city:
//   search bar
// search button

// list of cities

// current forecast
// city(date) icon
// temp:
//   humidity:
//   wind speed:
//   uv index:

//   5 - Day Forecast
// 5 cards
// date
// icon
// temp:
//   humidity:

  // var lat = "";
  // var lon = "";
  // var units = "";
  // exclude = alerts

  // var cityName = "";
  // var currentDate = "";
  // var icon = "";
  // var temperature = "";
  // var humidity = "";
  // var windSpeed = "";
  // var uvIndex = "";

  // var fiveDay = "";
  // var fiveDayCurrent = "";
  // var fiveDayForecast = "";
  // var searchResults = "";








// var forecastEndPoint = "https://api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}";
var apiKey = "b2da1b50adad35d702bdf58950746939";
var city = 'Austin';
var lat = 30.2672;
var lon = -97.7431;
var currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
var fiveDayForecastApi = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
var oneCallApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units={imperial}`
var currentWeatherContainer = document.getElementById('currentWeatherCard');
var cityList = document.querySelector('ul');
var searchButton = document.getElementById('search-button');
var searchInput = document.getElementById('search-input')
document.getElementById('search-button').value
// console.log('test');



// city list
function cityList() {
}



// current weather card  
function currentWeather() {
  var requestUrl = oneCallApi;
  // var requestCurrentWeather = currentWeatherApi;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        //Using console.log to examine the data
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          //Creating elements
          var cityName = document.createElement('h3');
          var currentDate = document.createElement('h3');
          var icon = document.createElement('');
          var temperature = document.createElement('p');
          var humidity = document.createElement('p');
          var windSpeed = document.createElement('p');
          var uvIndex = document.createElement('p');

          //Setting the text of elements
          cityName.textContent = data[i].name;
          currentDate.textContent = data[i].current.dt;
          icon.textContent = data[i].weather.icon;
          temperature.textContent = data[i].current.temp;
          humidity.textContent = data[i].current.humidity;
          windSpeed.textContent = data[i].current.wind_speed;
          uvIndex.textContent = data[i].uvi

          // Appending the dynamically generated html to the div associated with the id="_"
          // Append will attach the element as the bottom most child.
          currentWeatherContainer.append(cityName);
          currentWeatherContainer.append(currentDate);
          currentWeatherContainer.append(temperature);
          currentWeatherContainer.append(humidity);
          currentWeatherContainer.append(windSpeed);
          currentWeatherContainer.append(uvIndex);
        }
    })
};

window.addEventListener("load", currentWeather)


searchInput.addEventListener('keyup', function(event){
  console.log(event.target.value);
  city = event.target.value;
});

searchButton.addEventListener('click', function(){
  console.log('test');
  var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  console.log(requestUrl);

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        //Using console.log to examine the data
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          //Creating elements
          var cityName = document.createElement('h3');
          var currentDate = document.createElement('h3');
          var icon = document.createElement('');
          var temperature = document.createElement('p', {is : 'temp'});
          var humidity = document.createElement('p', {is : 'humid'});
          var windSpeed = document.createElement('p', {is : 'wind'});
          var uvIndex = document.createElement('p', {is : 'uv'});

          //Setting the text of elements
          cityName.textContent = data[i].city;
          currentDate.textContent = data[i].date;
          icon.textContent = data[i].icon;
          temperature.textContent = data[i].temp;
          humidity.textContent = data[i].humid;
          windSpeed.textContent = data[i].wind;
          uvIndex.textContent = data[i].uv;

          //Appending the dynamically generated html to the div associated with the id="_"
          // //Append will attach the element as the bottom most child.
          // usersContainer.append(userName);
          // usersContainer.append(userUrl);
        }
    })
});
    

// 5-day forecast cards
//card 1        
function fiveDay() {
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        //Using console.log to examine the data
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          //Creating elements
          var currentDate = document.createElement('h6');
          var icon = document.createElement('');
          var temperature = document.createElement('');
          var humidity = document.createElement('');

          //Setting the text of elements
          // currentDate.textContent = data[i]. ? ;
          // icon.textContent = data[i]. ? ;
          // temperature.textContent = data[i]. ? ;
          // humidity.textContent = data[i]. ? ;

          // //Appending the dynamically generated html to the div associated with the id="_"
          // //Append will attach the element as the bottom most child.
          // usersContainer.append(userName);
          // usersContainer.append(userUrl);
        }
    })
};
      
function initialize() {
  CurrentWeather();
  fiveDay();
};


//Pulls previous searches 
// function allStorage() {
//   var values = [],
//     keys = Object.keys(localStorage),
//       i = keys.length;
//         while ( i-- ) {
//           values.push( localStorage.getItem(keys[i]));
//         }
//         for (j = 0; j < values.length; j++) {
//           $(".prev-list").prepend("<button class='prev-city mt-1'>" + values[j] + "</button>");
//         }
// }
// allStorage();

//  //Clears local storage and previous searches
// $(".clear").on("click", function() {
//     localStorage.clear();
//     $(".prev-city").remove();
// });



// //Search previous searches when city clicked on
// $(document).on("click", ".prev-city", function() {
//     var subject = $(this).text();
//     $(".subject").val(subject);
//     $(".search").click();
//     $(this).remove();
// });