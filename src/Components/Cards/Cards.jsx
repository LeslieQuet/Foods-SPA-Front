import React from 'react';
import style from './Cards.module.css'
import Card from '../Card/Card';

export default function Cards({currentPosts}){
       
    return(
        <div className={style.CardsContainer}>
            {currentPosts.map((recipe) => {
                    return <Card 
                    key={recipe.id}
                    id={recipe.id}
                    name={recipe.name}
                    image={recipe.image}
                    health_score={recipe.health_score}
                    // diets={recipe.diets}
                    />;
                })}
        </div>
    )
}