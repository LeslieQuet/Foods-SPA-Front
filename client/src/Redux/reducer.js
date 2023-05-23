import {GET_DETAIL, RESET_FILTERS, RESET_ALL_RECIPES, GET_DIETS, GET_RECIPES, GET_RECIPES_BY_DIET, GET_RECIPES_QUERY, ORDERED_BY_NAME, ORDERED_BY_SCORE} from "./actions";

const initialState = {
    recipes:[],
    recipesCopy:[],
    sortedRecipes:[],
    sorted:false,
    detail:[],
    diets:[],
}


const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_RECIPES:
            return {...state, recipes: action.payload, recipesCopy: action.payload}
        case RESET_FILTERS:
            return {...state, sortedRecipes: [], sorted: false}   
        case RESET_ALL_RECIPES:
            return {...state, recipes: state.recipesCopy, sorted: false}  
        case GET_DETAIL:
            return {...state, detail: action.payload}
        case GET_DIETS:
            return {...state, diets: action.payload}
        case GET_RECIPES_QUERY:
            return {...state, recipes: action.payload}
        case GET_RECIPES_BY_DIET:
            return {...state, recipes: action.payload}
        case ORDERED_BY_NAME:
            let orderedByName = action.payload === "1" ? 
                state.recipes.sort(function (a, b) {
                    if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
    
                    if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
                    return 0;
            }):
                state.recipes.sort(function (a, b) {
                    if (a.name.toUpperCase() < b.name.toUpperCase()) return 1;
                    if (a.name.toUpperCase() > b.name.toUpperCase()) return -1;
                    return 0;
            }); 
            return {...state, sortedRecipes: orderedByName, sorded: true}
        case ORDERED_BY_SCORE:
            let orderedByScore = action.payload === "3" ?
            state.recipes.sort(function (a, b) {
                return a.health_score - b.health_score;
            }):
            state.recipes.sort(function (a, b) {
                return b.health_score - a.health_score;
            });
            return {...state, sortedRecipes: orderedByScore, sorded: true}
        default: 
            return {...state}
    }
};
    
    
export default rootReducer;