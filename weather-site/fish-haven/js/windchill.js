const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=420789f3ef80300ac1d6280bc39de5ca&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let filteredList = jsObject.list.filter(time => time.dt_txt.includes('18:00:00'))
    console.log(filteredList);
    let currentWeather;
    const currentWeekDay = new Date().getDay();
    let currentDay;
    let resetDay = 0;
    document.querySelector("#weatherCondition").textContent = jsObject.list[0].weather[0].main;
    document.querySelector("#temperature").textContent = Math.round(jsObject.list[0].main.temp_max) + "F";
    document.querySelector("#humidity").textContent = jsObject.list[0].main.humidity + "%";
    document.querySelector("#windSpeed").textContent = Math.round(jsObject.list[0].wind.speed) + "mph";
    let iconURL = "http://openweathermap.org/img/wn/";
    for (let day = 0; day < filteredList.length; day++){
        if (currentWeekDay + day <= 6){
            currentDay = findCurrentDayofWeek(currentWeekDay + day);
        }else{
            currentDay = findCurrentDayofWeek(resetDay);
            resetDay += 1;
        }
        document.querySelector("#forecastImagesDiv").children[day].firstChild.textContent = currentDay;
        document.querySelector("#forecastImagesDiv").children[day].children[1].innerHTML = Math.round(filteredList[day].main.temp) + "&#176;F";
        document.querySelector("#forecastImagesDiv").children[day].children[2].setAttribute('src', iconURL + filteredList[day].weather[0].icon + ".png");
        document.querySelector("#forecastImagesDiv").children[day].children[2].setAttribute('alt', filteredList[day].weather[0].description);
    }
});

window.addEventListener('load', () =>{
    let temperature = document.querySelector("#temperature").textContent;
    let windSpeed = document.querySelector('#windSpeed').textContent;

    
    
    if (temperature <= 50 && windSpeed > 3){
        let calculateChill = Math.ceil(35.74 + (0.6215 * temperature) - (35.75 * (Math.pow(windSpeed,0.16))) + (0.4275 * temperature * (Math.pow(windSpeed,0.16))));
        document.getElementById("windChill").innerHTML = calculateChill;
        document.getElementById('tempSymbol').innerHTML = "&#176;F";
        
        tempSymbol.innerHTML = "&#176;";
    }else{
        document.getElementById("windChill").innerHTML = "N/A";
    }
});
