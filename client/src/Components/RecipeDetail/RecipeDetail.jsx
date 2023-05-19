import React from 'react'
import style from './RecipeDetail.module.css'
import { Link } from 'react-router-dom'

export default function RecipeDetail ({id, name, image, resume, health_score, step_by_step, diets}){
    return(
        <div className={style.container}>
        <Link to="/home" >
                <button className={style.xButton}>X</button>
        </Link>
        <div style={{display: 'inline-block', margin: '2em'}}> 
            <h2 >{name}</h2>
            <h3 className={style.h3}>Id: {id}</h3>
            <h3 className={style.h3}>Health score: {health_score}</h3>
            <p className={style.cardText}>{resume}</p>
            <div>{diets}</div>
            <img src={image} alt={name} className={style.img}/>
            <div>{step_by_step}</div>
        </div>
    </div>
    )
}