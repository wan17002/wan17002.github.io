const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=420789f3ef80300ac1d6280bc39de5ca&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let currentWeather;
    const currentWeekDay = new Date().getDay();

    document.querySelector("#weatherCondition").textContent = jsObject.list[0].weather[0].main;
    document.querySelector("#temperature").textContent = Math.round(jsObject.list[0].main.temp_max) + "F";
    document.querySelector("#humidity").textContent = jsObject.list[0].main.humidity + "%";
    document.querySelector("#windSpeed").textContent = Math.round(jsObject.list[0].wind.speed) + "mph";
    let iconURL = "http://openweathermap.org/img/wn/";
    for (let day = 0; day < 5; day++){
        let currentDay = findCurrentDayofWeek(currentWeekDay + day);
        document.querySelector("#forecastImagesDiv").children[day].firstChild.textContent = currentDay;
        document.querySelector("#forecastImagesDiv").children[day].children[1].innerHTML = Math.round(jsObject.list[day].main.temp) + "&#176;F";
        document.querySelector("#forecastImagesDiv").children[day].children[2].setAttribute('src', iconURL + jsObject.list[day].weather[0].icon + ".png");
        document.querySelector("#forecastImagesDiv").children[day].children[2].setAttribute('alt', jsObject.list[day].weather[0].main);
    }


      });