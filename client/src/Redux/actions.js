import axios from 'axios'
export const GET_RECIPES = 'GET_RECIPES'
export const GET_DETAIL = 'GET_DETAIL'
export const GET_DIETS = 'GET_DIETS'
// export const POST_RECIPE = 'POST_RECIPE'
export const GET_RECIPES_QUERY = 'GET_RECIPES_QUERY'

export const getRecipes = () => {
    return function(dispatch){
        fetch(`http://localhost:3001/recipes`)
        .then((res) => res.json())
        .then((data) => dispatch({type: GET_RECIPES, payload: data}))
    }
}

export const getDetail = (id) => {
    return function(dispatch){
        fetch(`http://localhost:3001/recipes/${id}`)
            .then((res) => res.json())
            .then((data) => dispatch({type: GET_DETAIL, payload: data}))
    }
}

export const getDiets = () => {
    return function(dispatch){
        fetch(`http://localhost:3001/diets`)
            .then((res) => res.json())
            .then((data) => dispatch({type: GET_DIETS, payload: data}))
    }
}

export const getRecipeQuery = (search) => {
    return function(dispatch){
        fetch(`http://localhost:3001/recipes?search=${search}`)
            .then((res) => res.json())
            .then((data) => dispatch({type: GET_RECIPES_QUERY, payload: data}))
    }
}

//ACTION PARA POST RECIPE//ACTUALMENTE EN EL COMPONENTE 
// export const postRecipe = (recipeData) => {
//     return async (dispatch) => {
//         try {
//               const response = await postData(recipeData);
//               return dispatch({ type: POST_RECIPE, payload: response.data })
//           } catch (error) {
//               console.error('Error trying to create new recipe: ', error)
//           }
//       }     
// }

// const postData = async (recipeData) => {
//     console.log(recipeData)
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
//     } catch (error) {
//         console.error('Error al realizar la solicitud:', error);
//         throw error;
//     }
//  };
