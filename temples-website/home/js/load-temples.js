window.addEventListener('load', ()=> {
    const requestURL = "/temples-website/temples.json"
    fetch(requestURL)
        .then((response)=> {
            return response.json();
        })
        .then((jsonObject)=> {
            console.log(jsonObject);
            Object.entries(jsonObject).forEach(([key, temple])=>{
                if(temple.state == "HI"){
                    buildTempleCard(temple);
                }
            });
        });
});

function buildTempleCard(temple){
    console.log(temple);
    let card = document.createElement("section");
    card.classList.add("temple");
    card.innerHTML = `<h2>${temple.name}</h2>
                        <img src="${temple.imageurl}" alt=${temple.name}">
                        `;
    document.querySelector("#temples").appendChild(card);
}