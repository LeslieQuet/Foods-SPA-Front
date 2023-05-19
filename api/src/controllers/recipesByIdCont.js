require('dotenv').config()
const { URL_API, KEY } = process.env
const axios = require('axios')
const {Recipe, Diet} = require('../db')
const { recipeRequested } = require('./auxiliar')

const recipesById = async(idRecipe) => {
    if(idRecipe.includes("-")){
        const dbRecipe = await Recipe.findByPk(idRecipe, {
            include: {
                model: Diet,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            }
        })

        const dietArray = dbRecipe.diets.map(diet => diet.name);
        dbRecipe.dataValues.diets = dietArray;
        
        return dbRecipe.dataValues;
    }

    else {
        const apiRecipe = await axios(`${URL_API}/${idRecipe}/information?apiKey=${KEY}`);
        const {id, title, image, summary, healthScore, analyzedInstructions, diets, vegetarian, vegan, glutenFree} = apiRecipe.data;
        const apiRecipeById = recipeRequested({id, title, image, summary, healthScore, analyzedInstructions, diets, vegetarian, vegan, glutenFree})
        return apiRecipeById;
    }
}

module.exports = recipesById;

//Api example
//https://api.spoonacular.com/recipes/716426/information?apiKey=e9de31d9768e4d3ab04ef888b2095c63