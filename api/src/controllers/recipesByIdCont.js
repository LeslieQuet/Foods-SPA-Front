require('dotenv').config()
const { URL_API, KEY } = process.env
const axios = require('axios')

const recipesById = async(idRecipe) => {
    const apiRecipe = await axios(`${URL_API}/${idRecipe}/information?apiKey=${KEY}`);
    const {id, title, image, instructions, healthScore, analyzedInstructions, diets, vegetarian, vegan, glutenFree} = apiRecipe.data;
    let dietsOk = new Set();
    if(vegetarian) dietsOk.add("vegetarian")
    if(vegan) dietsOk.add("vegan");
    if(glutenFree) dietsOk.add("gluten free");
    if(diets) diets.map(diet => dietsOk.add(diet))
    let recipe = {
        id: id,
        name: title,
        image: image,
        resume: instructions,
        health_score: healthScore,
        step_by_step: analyzedInstructions,
        diets: dietsOk
    }
    return recipe; 
}

module.exports = recipesById;


//https://api.spoonacular.com/recipes/716426/information?apiKey=e9de31d9768e4d3ab04ef888b2095c63