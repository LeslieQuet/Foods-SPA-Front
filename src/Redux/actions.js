// const fetch = require('node-fetch');
// const fetchAbsolute = require('fetch-absolute');

// const fetchApi = fetchAbsolute(fetch)('http://localhost:3001');
// const fetchApi = fetchAbsolute(fetch)('https://foods-spa-back-production-lesliequetglas.up.railway.app');

import axios from "axios"

export const GET_RECIPES = 'GET_RECIPES'
export const GET_DETAIL = 'GET_DETAIL'
export const GET_DIETS = 'GET_DIETS'
export const GET_RECIPES_QUERY = 'GET_RECIPES_QUERY'
export const GET_RECIPES_BY_DIET = 'GET_RECIPES_BY_DIET'
export const ORDERED_BY_NAME = 'ORDERED_BY_NAME'
export const ORDERED_BY_SCORE = 'ORDERED_BY_SCORE'
export const RESET_SORTER = 'RESET_SORTER'
export const RESET_ALL_RECIPES = 'RESET_ALL_RECIPES'
export const CLEAN_DETAIL = 'CLEAN_DETAIL'

export const getRecipes = () => {
    return async function(dispatch){        
        try{
            const response = await axios.get(`/recipes`)
            dispatch({type: GET_RECIPES, payload: response.data})
        }
        catch (error){
            console.log(error)
            alert(`An error has ocurred: we have no recipes to show`)
        }
    }
}

export const resetSorter = () => {
    return {type: RESET_SORTER}
}

export const resetAllRecipes = () => {
    return {type: RESET_ALL_RECIPES}
}

export const getDetail = (id) => {
    return async function(dispatch){
        const response = await axios.get(`/recipes/${id}`)
        dispatch({type: GET_DETAIL, payload: response.data})
    }
}

export const getDiets = () => {
    return async function (dispatch){
        const response = await axios.get(`/diets`)
        console.log(response.data)
        dispatch({type: GET_DIETS, payload: response.data})
    }
}

export const getRecipesByDiet = (diet) => {
    return async function(dispatch){
        const response = await axios.get(`/diets?diet=${diet}`)
        dispatch({type: GET_RECIPES_BY_DIET, payload: response.data})
    }
}

export const getRecipeQuery = (search) => {
    return async function(dispatch){
        const response = await axios.get(`/recipes?search=${search}`)
        if(response.error) alert("No recipes match the search")
        else { 
            dispatch({type: GET_RECIPES_QUERY, payload: response.data})
        }
    }
}
export const orderedByName = (value) => {
    return { type: ORDERED_BY_NAME, payload: value }
}

export const orderedByScore = (value) => {
    return { type: ORDERED_BY_SCORE, payload: value }
}

export const cleanDetailState = () => {
    return { type: CLEAN_DETAIL }
}



//POST DATA . ahora se hace desde el componente
// export const postRecipe = (recipeData) => {
//     return async function (dispatch){
//         const response = await postData(recipeData);
//         if(response.error) alert(('Error trying to create new recipe: '+ response.error)) //Alerta adicional por si algún error pasa las validaciones del form
//         else alert("Recipe saved successfully");
//     }     
// }

// const postData = async (recipeData) => {
//     try {
//       const response = await fetch(`http://localhost:3001/recipes`, {
//         method: 'POST',
//         mode: 'cors',
//         cache: 'no-cache', 
//         credentials: 'same-origin', 
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         redirect: 'follow', 
//         referrerPolicy: 'no-referrer', 
//         body: JSON.stringify(recipeData) 
//       });
//       return response.json(); 
//     } 
//     catch (error) {
//         console.log(error)
//     }
//  };
