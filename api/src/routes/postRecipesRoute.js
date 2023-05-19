const recipesPoster = require ('../controllers/postRecipesCont')


module.exports = async (req, res) => {
    const {name, image, resume, health_score, step_by_step, diets} = req.body;
    try{
        const newRecipe = await recipesPoster(name, image, resume, health_score, step_by_step, diets);
        res.status(200).send("Recipe created")
    }
    catch(err){
        res.status(400).json({err: err.message});
    }
}
