
window.onload = function(){
    var dateLastModified = document.lastModified;
    var currentYear = new Date().getFullYear()

    document.getElementById('dateModified').innerHTML = dateLastModified;
    document.getElementById('inputCurrentYear').innerHTML = currentYear;
}
/*The javaScript is how to open the nav bar in mobile version*/
window.addEventListener('load', () =>{
    const hambutton = document.querySelector('.ham');
    //go find the element that has the id "navigation"
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
});

