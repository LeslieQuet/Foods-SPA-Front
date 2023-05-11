const {Recipe} = require('../db')

//mejorar validaciones db
const recipesPoster = async (name, image, resume, health_score, step_by_step, diets) => {
        if(!name, !image, !resume, !health_score, !step_by_step, !diets.length) throw new Error ('Faltan datos necesarios') 
        const newRecipe = await Recipe.create({name, image, resume, health_score, step_by_step});
        newRecipe.addDiet(diets);
        return newRecipe;
}

module.exports = recipesPoster;