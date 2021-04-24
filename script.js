window.onload = function(){
    var dateLastModified = document.lastModified;
    var currentYear = new Date().getFullYear()

    document.getElementById('dateModified').innerHTML = dateLastModified;
    document.getElementById('inputCurrentYear').innerHTML = currentYear;
}