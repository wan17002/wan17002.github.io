async function getTown(){
    const url = "https://byui-cit230.github.io/weather/data/towndata.json";
    
    const response = await fetch(url);

    if(response.status==200){
        return response.json();
    }
    else {
        throw new Error("No meals found" + response.status);
    }
}

function newTown(){
    const main = document.getElementsByTagName('main');

    const town = getTown()
    .then(function(data){
        console.log(data);

        new_town = data['towns'];

        

        //Fish Haven, Soda Springs, and Preston
        for (var i = 0; i < new_town.length ; i++){
            if(new_town[i].name == "Soda Springs"){
                let card = document.createElement('section');
                
                let eventDiv = document.createElement('div');
                let eventTitle = document.createElement('h3');
                let hr = document.createElement('hr');
                hr.setAttribute('class', "weatherHR");
                
                
                eventDiv.setAttribute('class', 'eventDiv');

                card.appendChild(eventDiv);
                eventTitle.textContent = "Upcoming Events!";
                eventTitle.setAttribute('class', 'eventTitle');
                eventDiv.appendChild(eventTitle);
                eventDiv.appendChild(hr);

                for(let m = 0; m < new_town[i].events.length;m++){
                    let townEvent = document.createElement('p');
                    townEvent.textContent = new_town[i].events[m];
                    townEvent.setAttribute('class', 'townEvent');
                    eventDiv.appendChild(townEvent);
                    console.log(townEvent);
                }
                


                document.querySelector('#summarySection').appendChild(card);
                card.setAttribute('class', "card");

            }
            
        }
    });
}
window.addEventListener('load',(event)=>{
    newTown();
});


    