export const GET_RECIPES = 'GET_RECIPES'
export const GET_DETAIL = 'GET_DETAIL'
// export const GET_RECIPES_QUERY = 'GET_RECIPES_QUERY'

export const getRecipes = () => {
    return function(dispatch){
        fetch(`http://localhost:3001/recipes`)
        .then((res) => res.json())
        .then((data) => dispatch({type: GET_RECIPES, payload: data}))
    }
}

export const getDetail = (id) => {
    console.log('pasé por acá')
    return function(dispatch){
        fetch(`http://localhost:3001/recipes/${id}`)
            .then((res) => res.json())
            .then((data) => dispatch({type: GET_DETAIL, payload: data}))
    }
}

// export const getRecipesByQuery = (search) => {
//     return function(dispatch){
//         fetch(`http://localhost:3001/recipes?search=${search}`)
//         .then((res)=> res.json())
//         .then((data)=> dispatch({type: GET_RECIPES_QUERY, payload: data}))
//     }
// }