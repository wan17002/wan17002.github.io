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
            if(new_town[i].name == "Fish Haven" || new_town[i].name == "Preston" || new_town[i].name == "Soda Springs"){
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let italics = document.createElement('i');
                let yearFounded = document.createElement('p');
                let currentPopulation = document.createElement('p');
                let rainFall = document.createElement('p');
                let townPhoto = document.createElement('img');
                let textDiv = document.createElement('div');

                h2.textContent = new_town[i].name;
                italics.textContent = new_town[i].motto;
                yearFounded.textContent = "Year Founded: " + new_town[i].yearFounded;
                currentPopulation.textContent = "Population: " + new_town[i].currentPopulation;
                rainFall.textContent = "Annual Rain Fall: " + new_town[i].averageRainfall;
                
                switch(new_town[i].name){
                    case "Soda Springs":
                        townPhoto.setAttribute('src', 'images/soda-springs_250x166.jpg');
                        townPhoto.setAttribute('alt', new_town[i].name);
                        townPhoto.setAttribute('loading', 'lazy');
                        break;
                    case "Preston":
                        townPhoto.setAttribute('src', 'images/preston_250x166.jpg');
                        townPhoto.setAttribute('alt', new_town[i].name);
                        townPhoto.setAttribute('loading', 'lazy');
                        break;
                    case "Fish Haven":
                        townPhoto.setAttribute('src', 'images/fish-haven_250x166.jpg');
                        townPhoto.setAttribute('alt', new_town[i].name);
                        townPhoto.setAttribute('loading', 'lazy');
                        break;
                }
                textDiv.appendChild(h2);
                textDiv.appendChild(italics);
                textDiv.appendChild(yearFounded);
                textDiv.appendChild(currentPopulation);
                textDiv.appendChild(rainFall);
                card.appendChild(textDiv);
                card.appendChild(townPhoto);


                document.querySelector('main').appendChild(card);
            }
            
        }
    });
}
window.addEventListener('load',(event)=>{
    newTown();
});


    