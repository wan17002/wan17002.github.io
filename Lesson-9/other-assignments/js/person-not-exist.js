async function getPerson(){
    const url = "https://www.ahfx.com/person.php";

    const response = await fetch(url);

    if(response.status==200){
        return response.json();
    }
    else {
        throw new Error("No person found" + response.status);
    }
}

function newPerson(){
    const fullName = document.querySelector("#fullName");
    const userInfo = document.querySelector("#userInfo")
    let header1 = document.createElement("h1")
    let password = document.createElement("p")
    let emailP = document.createElement("p")
        
    
    

    const p = getPerson()
    .then(function(person){
        console.log(person);
        

        my_person = person['person']        
        fullName.innerHTML = `<h1>${my_person['personal']['name'] + " " + my_person['personal']['last_name']}</h1>`
        userInfo.innerHTML =  `<h2>Password: </h2> <span>${my_person['online_info']['password']}</span>` +
        `<h2>Email: </h2> <span>${my_person['online_info']['email']}</span>` +
        `<h2>Eye color: </h2> <span>${my_person['personal']['eye_color']}</span>` +
        `<h2>City Country: </h2> <span>${my_person['personal']['city'] + ", " + my_person['personal']['country']}</span>` +
        `<h2>Number of Children: </h2> <span>${my_person['marriage']['children']}</span>` +
        `<h2>IP Address: </h2> <span>${my_person['online_info']['ip_address']}</span>`
        
    });
    
}

window.addEventListener('load',(event)=>{
    newPerson();
});