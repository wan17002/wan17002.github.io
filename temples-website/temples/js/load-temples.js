window.addEventListener('load', ()=> {
    const requestURL = "/temples-website/temples.json";
    fetch(requestURL)
        .then((response)=> {
            return response.json();
        })
        .then((jsonObject)=> {
            console.log(jsonObject);
            Object.entries(jsonObject).forEach(([key, temple])=>{
                // if(temple.state == "HI"){
                     buildTempleCard(temple);
                // }
            });
        });
})

function buildTempleCard(temple){
    console.log(temple);
    let clothing;
    let cafeteria;
    let patron;
    let distribution;
    let yes = "<b>&#x2611;</b>";
    let no = "<strong>&#x2612;</strong>";
    if(temple.services.clothingRental == "yes"){
        clothing = yes;
    }else{
        clothing = no;
    }
    if(temple.services.cafeteria == "yes"){
        cafeteria = yes;
    }else{
        cafeteria = no;
    }
    if(temple.services.patronHousing == "yes"){
        patron = yes;
    }else{
        patron = no;
    }
    if(temple.services.distributionCenter == "yes"){
        distribution = yes;
    }else{
        distribution = no;
    }
    for(let i = 0; i < 100;i++){

    }
    let card = document.createElement("section");
    card.setAttribute('class',"center");
    card.classList.add("temple");
    card.innerHTML = `<h2>${temple.name}</h2>
                        <img class="center" src="${temple.imageurl}" alt=${temple.name}">
                        <div class="phase">
                            <h3>Phase ${temple.covid.phase}—<i>${temple.covid.title}</i></h3>
                            <p>${temple.covid.description}</p>
                        </div>
                        <div class="templeInfo">
                            <div class="services">
                            <h3>Services</h3>
                                <p><i>Clothing Rental?</i> ${clothing}</p>
                                <p><i>Cafeteria Available?</i> ${cafeteria}</p>
                                <p><i>Patron housing Available?</i> ${patron}</p>
                                <p><i>Clothing Rental Available?</i> ${distribution}</p>
                            </div>
                            <div class="contact">
                                <h3>Contact Information</h3>
                                <p>Address: <i>${temple.address1}</i></p>
                                <p>City: <i>${temple.city}<i></p>
                                <p>State: <i>${temple.state}<i></p>
                                <p>ZIP: <i>${temple.zip}<i></p>
                                <p>Phone: <i>${temple.phone}</i></p>
                            </div>    
                        <div>`
    document.querySelector("#templeSection").appendChild(card);
}