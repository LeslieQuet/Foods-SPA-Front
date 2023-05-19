import React from 'react';
import style from './Cards.module.css'
import Card from '../Card/Card';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes } from '../../Redux/actions';

export default function Cards({indexOfFirstPost, indexOfLastPost}){
    
    const recipes = useSelector((state) => state.recipes);

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getRecipes());
    }, []);

    const currentPosts = recipes.slice(indexOfFirstPost, indexOfLastPost);
   
    return(
        <div className={style.CardsContainer}>
            {currentPosts.map((recipe) => {
                    return <Card 
                    key={recipe.id}
                    id={recipe.id}
                    name={recipe.name}
                    image={recipe.image}
                    health_score={recipe.health_score}
                    />;
                })}
        </div>
    )
}