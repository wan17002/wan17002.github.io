window.addEventListener('load', () =>{
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');
    
    findTime();
    
    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
});
//Wednesday 24, July 2020

function findTime(){
    const currentYear = new Date().getFullYear();
    const currentDay = new Date().getDate();
    let currentDayofWeek = findCurrentDayofWeek();
    let currentMonth = findCurrentDayofMonth();

    let myElement = document.querySelector("#announcementBar");
    
    if (currentDayofWeek == "Friday"){
        myElement.style.display = "block";
    }else{
        myElement.style.display = "none";
    }
    
    document.getElementById('inputCurrentYear').innerHTML = currentYear;
    document.getElementById('inputCurrentDate').innerHTML = currentDayofWeek + " " + currentDay + ", " + currentMonth + " " + currentYear;
};

function findCurrentDayofWeek(){
    let currentDayofWeekNum = new Date().getDay();
    let currentDayofWeek = "";
    switch(currentDayofWeekNum){
        case 0:
            currentDayofWeek = "Sunday";
            break;
        case 1:
            currentDayofWeek = "Monday";
            break;
        case 2:
            currentDayofWeek = "Tuesday";
            break;
        case 3:
            currentDayofWeek = "Wednesday";
            break;
        case 4:
            currentDayofWeek = "Thursday";
            break;
        case 5:
            currentDayofWeek = "Friday";
            break;
        case 6:
            currentDayofWeek = "Saturday";
            break;
    }
    return currentDayofWeek;
}

function findCurrentDayofMonth(){
    let currentDayofMonthNum = new Date().getMonth();
    let currentDayofMonth ="";
    switch(currentDayofMonthNum){
        case 0:
            currentDayofMonth = "January";
            break;
        case 1:
            currentDayofMonth = "February";
            break;
        case 2:
            currentDayofMonth = "March";
            break;
        case 3:
            currentDayofMonth = "April";
            break;
        case 4:
            currentDayofMonth = "May";
            break;
        case 5:
            currentDayofMonth = "June";
            break;
        case 6:
            currentDayofMonth = "July";
            break;
        case 7:
            currentDayofMonth = "August";
            break;
        case 8:
            currentDayofMonth = "September";
            break;
        case 9:
            currentDayofMonth = "October";
            break;
        case 10:
            currentDayofMonth = "November";
            break;
        case 11:
            currentDayofMonth = "December";
            break;
    }
    return currentDayofMonth
}

