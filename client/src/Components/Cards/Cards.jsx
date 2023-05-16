import style from './Cards.module.css'
import Card from '../Card/Card';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes } from '../../Redux/actions';

export default function Cards(){
    
    const recipes = useSelector((state) => state.recipes);

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getRecipes());
    }, []);
    
    return(
        <div className={style.CardsContainer}>
            {recipes.map((recipe) => {
                    return <Card 
                    key={recipe.id}
                    id={recipe.id}
                    name={recipe.name}
                    image={recipe.image}
                    />;
                })}
        </div>
    )
}