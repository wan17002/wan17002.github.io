const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83263&appid=420789f3ef80300ac1d6280bc39de5ca&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.querySelector("#current-temp").innerHTML = jsObject.main.temp;
    

    const imgsrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + ".png";
    const description = jsObject.weather[0].description
    document.querySelector("#imagesrc").textContent = imgsrc;
    document.querySelector("#icon").setAttribute('src', imgsrc);
    document.querySelector("#icon").setAttribute('alt', description);

  });

  