const recipeRequested = (recipe) => {
    const {id, title, image, instructions, healthScore, analyzedInstructions, diets, vegetarian, vegan, glutenFree} = recipe;

    const dietsOk = new Set();
        if(vegetarian) dietsOk.add("vegetarian");
        if(vegan) dietsOk.add("vegan");
        if(glutenFree) dietsOk.add("gluten free");
        if(diets) diets.forEach(diet => dietsOk.add(diet));
        
        const dietsArr = Array.from(dietsOk)
        
        const stepsOk = []
        if(analyzedInstructions.length){
            analyzedInstructions[0].steps.forEach(step => stepsOk.push(step.step))
        }

        let recipeOk = {
            id,
            name: title,
            image,
            resume: instructions,
            health_score: healthScore,
            step_by_step: stepsOk,
            diets: dietsArr,
        }
        return recipeOk;
}

module.exports = {
    recipeRequested,
}