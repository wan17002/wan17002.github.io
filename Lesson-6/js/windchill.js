window.onload = windChillCalc()
setInterval(windChillCalc, 60000);
function windChillCalc(){
    var temperature = document.getElementById("temperature").innerText;
    var windSpeed = document.getElementById('windSpeed').innerText;

    
    
    if (temperature <= 50 && windSpeed > 3){
        var calculateChill = Math.ceil(35.74 + (0.6215 * temperature) - (35.75 * (Math.pow(windSpeed,0.16))) + (0.4275 * temperature * (Math.pow(windSpeed,0.16))));
        document.getElementById("windChill").innerHTML = calculateChill;
        document.getElementById('tempSymbol').innerHTML = "&#176;F";
        
        tempSymbol.innerHTML = "&#176;";
    }else{
        document.getElementById("windChill").innerHTML = "N/A";
    }
}