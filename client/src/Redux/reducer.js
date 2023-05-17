import {GET_DETAIL, GET_RECIPES} from "./actions";

const initialState = {
    recipes: [],
    detail:[],
}


const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_RECIPES:
            return {...state, recipes: action.payload};
        case GET_DETAIL:
            return {...state, detail: action.payload}
        default: 
            return {...state};
    }
};
    
    
export default rootReducer;