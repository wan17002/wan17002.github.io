async function getDadJoke(){
    const url = 'https://icanhazdadjoke.com';

    //this line creates an object
    //This is how we identify ourselves when we request info from the API. This allows the creators of the API to know who is connecting to their API
    //
    let h = new Headers({
        "Accept"        : "application/json",
        "User-Agent"    : "WDD-230 Test User Agent http://wan17002.github.io"
    })
    /*We will not perform the if statement until we get a resposne back (the line under this) */
    const response = await fetch(url,{headers:h});
    //200 means the request was valid
    //for example, 404 means there was nothing found
    if(response.status == 200){
        //this converts our response to json
        return response.json();
    }
    else{
        //if something goes wrong, we can display this as well
        throw new Error("No dad jokes found " + response.status);
    }
}

function newJoke(){
    const dad_id = document.querySelector("#dad-joke");
    //This clears out the text in the div
    dad_id.innerHTML = "";

    const joke = getDadJoke()
    //whatever it gets from calling the getDadJoke() function, we pass that in
    //You can chain these. .then mean after they're done with one thing, we give the program somethign to do, after it's done, we can add another .then to give them something else to do
    .then(function(j){
        console.log(j);
        dad_id.innerHTML = j['joke'];
        //if the joke length is greater than 85 characters, we add the class "small" to it. In the css, we reduce the font size so it'll fit
        if(j['joke'].length > 85){
            dad_id.classList.add('small');
        }
    })
    //
    .catch(function(e){
        dad_id.innerHTML = 0;
    });
}

window.addEventListener('load',(event)=>{
    newJoke();
});