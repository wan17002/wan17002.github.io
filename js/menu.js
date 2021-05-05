/*The javaScript is how to open the nav bar in mobile version*/

/*when the window loads, this script is executed. We're going to want everything under to happen */
//Add event listener allows everything to be created (in the html file) before we load this script
//There's a lot of these. For example, addSwipeLeft, addKeyPress, etc. Look it up if useful.
window.addEventListener('load', () =>{
    //go find the element that has the class of "navigation"
    //we're using querySelector instead of getElementById because
    //getElementById only gets id. We want to get both. It doesn't matter, but this is smipler
    const hambutton = document.querySelector('.ham');
    //go find the element that has the id "navigation"
    const mainnav = document.querySelector('#navigation');

    //addEventListener does: When this item is clicked, we want it to do something
    //We want it to add or remove (i.e. toggle) a class on it
    //responsive allows us to turn it on or off
    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

    // To solve the mid resizing issue with responsive class on
    //an Anonymous function is a function without a name. It's something that allows you to use it once and never use it again
    /*the () => is an anonymous function
    it basically just replaces the regular function exampleFunction(){if(window.inner...)}
    The if statement is inside the function*/
    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
});