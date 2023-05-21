import React from 'react'
import style from './RecipeDetail.module.css'
import { Link } from 'react-router-dom'

export default function RecipeDetail ({id, name, image, resume, health_score, step_by_step, diets}){
    return(
        <div>
            <Link to="/home" >
                <button className={style.xButton}>Back to home</button>
            </Link>
            <div style={{display: 'inline-block', margin: '2em'}}> 
                <h2 className={style.name}>{name}</h2>
                <p className={style.info}>Health score: {health_score}</p>
                <div className={style.info}>Diets: {diets}</div>
                <p className={style.text}>{resume}</p>
                <img src={image} alt={name} className={style.img}/>
                <div className={style.text}>{step_by_step}</div>
                <p className={style.info}>Id: {id}</p>
            </div>
        </div>
    )
}