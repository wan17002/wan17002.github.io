window.onload = function(){
    var dateLastModified = document.lastModified;
    var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getDay();

    document.getElementById('dateModified').innerHTML = dateLastModified;
    document.getElementById('inputCurrentYear').innerHTML = currentYear;
    document.getElementById('inputCurrentDay').innerHTML = currentDay;
}

window.addEventListener('load', () =>{
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');
    
    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
});