async function getRecipe(){
    const url = "https://www.themealdb.com/api/json/v1/1/random.php";

    //this goes out and grabs the url and brings it back as a promise
    const response = await fetch(url);
    //makes sure the status is good, otherwise if it runs into a problem, throws an error
    if(response.status==200){
        return response.json();
    }
    else {
        throw new Error("No meals found" + response.status);
    }
}
function newRecipe(){
    const recipe_id = document.querySelector("#recipes");
    
    const r = getRecipe()
    .then(function(rec){
        console.log(rec);
        //this says "look inside of meals, and inside of that, look inside of meals"
        //this just creates a shortcut so we can just refer to "my_recipe"
        my_recipe = rec['meals'][0];
        //we create a "temporary var" (using let) called "card". we're going to start placing stuff in this section
        let card = document.createElement("section");
        let ul = document.createElement("ul");
        
        /* This adds the list of ingredients*/
        for(let i=1; i<=20;i++){
            tmp = my_recipe['strIngredient' + i];
            if(tmp != ""&&tmp!=null){
                let li = document.createElement("li");
                let text = document.createTextNode(tmp);
                li.appendChild(text);
                ul.appendChild(li);
            }
        }

        //${} allows us to concatenate
        //my_recipe.strMeal can be typed as my_recipe[strMeal]. This is just dot notation. we use it because it's shorter
        //card.innerHTML = "<h2" + my_recipe.strMeal + "</h2";
        card.innerHTML = `<h2>${my_recipe.strMeal}</h2>
        <img src="${my_recipe.strMealThumb}" alt="${my_recipe.strMeal}">
        <p>${my_recipe.strInstructions}</p>
        `;
        //this takes the section "card" we created and actually displays it
        card.appendChild(ul);
        recipe_id.appendChild(card);
    });
}
window.addEventListener('load',(event)=>{
    newRecipe();
});