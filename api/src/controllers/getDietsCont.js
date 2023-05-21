require('dotenv').config()
const { URL_API, KEY } = process.env
const axios = require('axios')
const {Diet, Recipe} = require('../db')

//Controlador exportado
const dietsGetter = async (diet) => {
    try{
        const allDiets = await dietsManager(diet);
        return allDiets; 
    }
    catch(error){
        return {error: error.message};
    }
};

//función auxiliar
const dietsManager = async (diet) => {
    
    //Si recibe query filtra las recetas por dieta
    if(diet){
        //Trae todas las recetas de la BD y arma objetos para render
        const dbRecipes = await Recipe.findAll({
            include: {
                model: Diet,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            }
        })
        
        const dbRecipesOk = dbRecipes.map(recipe => {
            const {id, name, image, diets} = recipe;
            
            
            const recipeOk = {
                id,
                name,
                image,
                diets: recipe.diets.map(diet => diet.name),
            };
            
            return recipeOk;
        })
        
        //Trae todas las recetas de la API y arma objetos para render
        const apiRecipes100 = await axios.get(`${URL_API}/complexSearch?apiKey=${KEY}&addRecipeInformation=true&number=100`)
        const apiRecipes100ok = apiRecipes100.data.results.map(recipe => {
            const {id, title, image, diets} = recipe;
            
            const recipeOk = {
                id,
                name: title,
                image,
                diets,
            };
            
            return recipeOk;
        })

        //Concatena ambas busquedas, filtra conincidencias y devuelve
        const allRecipes = dbRecipesOk.concat(apiRecipes100ok);
        const findedRecipes = allRecipes.filter(recipe => recipe.diets.includes(diet));
        
        if (!findedRecipes.length) throw new Error('No hay recetas para esta dieta');
        return findedRecipes; 
    }
    


    //Si la BD tiene dietas las envía [{name + id}]
    const DBDiets = await Diet.findAll();
    if (DBDiets.length >= 1) return DBDiets;

    //Si la BD no tiene dietas las trae de la Api y los Bulkea en la tabla de la BD
    const apiData = await axios.get(`${URL_API}/complexSearch?apiKey=${KEY}&addRecipeInformation=true&number=100`);
    const recipesData = apiData.data;

    const dietsSet = new Set();
    recipesData.results.forEach(recipe => {
            recipe.diets.forEach(diet => dietsSet.add(diet))
        }
    );

    const toBulkCreate = [];
    dietsSet.forEach(diet =>{
        toBulkCreate.push({"name":diet})
    })
    const savedDiets = await Diet.bulkCreate(toBulkCreate);
    return savedDiets;
};

module.exports = dietsGetter;

//Api example
//https://api.spoonacular.com/recipes/complexSearch?apiKey=e9de31d9768e4d3ab04ef888b2095c63&addRecipeInformation=true