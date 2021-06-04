window.onload = windChillCalc()
function windChillCalc(){
    var temperature = document.querySelector("#temperature").textContent;
    var windSpeed = document.querySelector('#windSpeed').textContent;

    
    
    if (temperature <= 50 && windSpeed > 3){
        var calculateChill = Math.ceil(35.74 + (0.6215 * temperature) - (35.75 * (Math.pow(windSpeed,0.16))) + (0.4275 * temperature * (Math.pow(windSpeed,0.16))));
        document.getElementById("windChill").innerHTML = calculateChill;
        document.getElementById('tempSymbol').innerHTML = "&#176;F";
        
        tempSymbol.innerHTML = "&#176;";
    }else{
        document.getElementById("windChill").innerHTML = "N/A";
    }
}