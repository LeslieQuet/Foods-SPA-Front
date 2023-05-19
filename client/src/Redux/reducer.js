import {GET_DETAIL, GET_DIETS, GET_RECIPES, GET_RECIPES_QUERY, POST_RECIPE} from "./actions";

const initialState = {
    recipes: [],
    detail:[],
    diets:[],
}


const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_RECIPES:
            return {...state, recipes: action.payload}
        case GET_DETAIL:
            return {...state, detail: action.payload}
        case GET_DIETS:
            return {...state, diets: action.payload}
        // case POST_RECIPE:
        //     return {...state}
        case GET_RECIPES_QUERY:
            return {...state, recipes: action.payload}
        default: 
            return {...state}
    }
};
    
    
export default rootReducer;