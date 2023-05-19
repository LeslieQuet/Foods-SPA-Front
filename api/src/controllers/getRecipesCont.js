require('dotenv').config()
const { URL_API, KEY } = process.env
const axios = require('axios')
const {recipeRequested} = require('./auxiliar')
const {Recipe, Diet} = require('../db')

const recipesGetter = async (search) => {
    //Trae todas las recetas de la BD
    const dbRecipes = await Recipe.findAll({
            include: {
                model: Diet,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            }
    })

    //Si no recibe query trae recipes de api y bd y arma objetos más simples para el display en home(id, name, image)
    if(!search) {

        const dbRecipesOk = dbRecipes.map(recipe => {
            const {id, name, image, health_score} = recipe;
            
            const recipeOk = {
                id,
                name,
                image,
                health_score,
            };
            
            return recipeOk;
        })
        
        const apiRecipes100 = await axios.get(`${URL_API}/complexSearch?apiKey=${KEY}&addRecipeInformation=true&number=100`)
        const apiRecipes100ok = apiRecipes100.data.results.map(recipe => {
            const {id, title, image, healthScore} = recipe;
            
            const recipeOk = {
                id,
                name: title,
                image,
                health_score: healthScore,
            };
            
            return recipeOk;
        })

        return dbRecipesOk.concat(apiRecipes100ok);
    }
    
    //Si recibe Query filtra recetas BD por query 
    const DBFilteredRecipes = dbRecipes.filter(recipe => recipe.name.toLowerCase().includes(search.toLowerCase()))
    
    //Mapea las conincidencias de la BD y crea los objetos para pasar al front con formatos homologados con los de la api
    const recipesOk = DBFilteredRecipes.map(recipe => {
        const {id, name, image, resume, health_score, step_by_step, diets} = recipe;
        
        const dietsArray = diets.map(diet => diet.name);

        const recipeOk = {
            id,
            name,
            image,
            resume,
            health_score,
            step_by_step,
            diets: dietsArray,
          };

        return recipeOk;
    })
        
    //Trae las recetas de la api
    const getRecipes = await axios.get(`${URL_API}/complexSearch?apiKey=${KEY}&addRecipeInformation=true`)
   
    //Filtra recetas api por conincidencias con query
    const filteredApiRecipesByQ = getRecipes.data.results.filter(recipe => recipe.title.toLowerCase().includes(search.toLowerCase()))  

    //Mapea conicidencias y devuelve objetos homologados para el front
    const apiRecipesOk = filteredApiRecipesByQ.map(recipe => {
        return recipeRequested(recipe);
    });
    
    //Concatena resultados filtrados de api y bd y si hubieron coincidencias los retonra
    const allRecipesByName = apiRecipesOk.concat(recipesOk)
    if(!allRecipesByName.length) throw new Error ('No recipes match the search')
    return allRecipesByName;
}

module.exports = recipesGetter;

// Ej APi
// https://api.spoonacular.com/recipes/complexSearch?apiKey=e9de31d9768e4d3ab04ef888b2095c63&addRecipeInformation=true