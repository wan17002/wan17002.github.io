//Wednesday 24, July 2020
window.onload = findTime();
setInterval(findTime(),600000);

function findTime(){
    var currentYear = new Date().getFullYear();
    var currentDay = new Date().getDate();
    currentDayofWeek = findCurrentDayofWeek();
    currentMonth = findCurrentDayofMonth();

    let myElement = document.querySelector("#announcementBar");
    
    if (currentDayofWeek == "Friday"){
        myElement.style.display = "block";
    }else{
        myElement.style.display = "none";
    }
    
    
    var currentDate = currentDayofWeek + " " + currentDay + ", " + currentMonth + " " + currentYear;
    document.getElementById('inputCurrentYear').innerHTML = currentYear;
    document.getElementById('inputCurrentDate').innerHTML = currentDate;
};

window.addEventListener('load', () =>{
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');
    
    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
});

function findCurrentDayofWeek(){
    var currentDayofWeekNum = new Date().getDay();
    switch(currentDayofWeekNum){
        case currentDayofWeekNum = 0:
            currentDayofWeek = "Sunday";
            break;
        case currentDayofWeekNum = 1:
            currentDayofWeek = "Monday";
            break;
        case currentDayofWeekNum = 2:
            currentDayofWeek = "Tuesday";
            break;
        case currentDayofWeekNum = 3:
            currentDayofWeek = "Wednesday";
            break;
        case currentDayofWeekNum = 4:
            currentDayofWeek = "Thursday";
            break;
        case currentDayofWeekNum = 5:
            currentDayofWeek = "Friday";
            break;
        case currentDayofWeekNum = 6:
            currentDayofWeek = "Saturday";
            break;
    }
    return currentDayofWeek;
}

function findCurrentDayofMonth(){
    var currentDayofMonthNum = new Date().getMonth();
    switch(currentDayofMonthNum){
        case currentDayofMonthNum = 0:
            currentDayofMonth = "January";
            break;
        case currentDayofMonthNum = 1:
            currentDayofMonth = "February";
            break;
        case currentDayofMonthNum = 2:
            currentDayofMonth = "March";
            break;
        case currentDayofMonthNum = 3:
            currentDayofMonth = "April";
            break;
        case currentDayofMonthNum = 4:
            currentDayofMonth = "May";
            break;
        case currentDayofMonthNum = 5:
            currentDayofMonth = "June";
            break;
        case currentDayofMonthNum = 6:
            currentDayofMonth = "July";
            break;
        case currentDayofMonthNum = 7:
            currentDayofMonth = "August";
            break;
        case currentDayofMonthNum = 8:
            currentDayofMonth = "September";
            break;
        case currentDayofMonthNum = 9:
            currentDayofMonth = "October";
            break;
        case currentDayofMonthNum = 10:
            currentDayofMonth = "November";
            break;
        case currentDayofMonthNum = 11:
            currentDayofMonth = "December";
            break;
    }
    return currentDayofMonth
}


function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}


