require('dotenv').config()
const { URL_API, KEY } = process.env
const axios = require('axios')
const {Diet} = require('../db')

const dietsGetter = async (diet) => {
    try{
        const allDiets = await dietsManager(diet);
        return allDiets; 
    }
    catch(error){
        return {error: error.message};
    }
};

///Qué hace si recibe query?????
const dietsManager = async (diet) => {
    //Si recibe query busca por Dieta
    if(diet){}

    //Si la BD tiene dietas las envía [{name + id}]
    const DBDiets = await Diet.findAll();
    if (DBDiets.length >= 1) return DBDiets;

    //Si la BD no tiene dietas las trae de la Api y los Bulkea en la tabla de la BD
    const apiData = await axios.get(`${URL_API}/complexSearch?apiKey=${KEY}&addRecipeInformation=true`);
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