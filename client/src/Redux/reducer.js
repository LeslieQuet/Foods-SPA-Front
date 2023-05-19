import {GET_DETAIL, GET_DIETS, GET_RECIPES, POST_RECIPE} from "./actions";

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
        default: 
            return {...state}
    }
};
    
    
export default rootReducer;