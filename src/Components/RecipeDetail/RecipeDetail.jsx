import React from 'react'
import style from './RecipeDetail.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cleanDetailState } from '../../Redux/actions'


export default function RecipeDetail ({id, name, image, resume, health_score, step_by_step, diets}){
    const dispatch = useDispatch();
    const cleanDetail = ()=>{dispatch(cleanDetailState())};

    return(
        <div>
            <Link to="/" >
                <button className={style.xButton} onClick={cleanDetail}>Back to the recipes</button>
            </Link>
            <div style={{display: 'inline-block', margin: '2em'}}> 
                <h2 className={style.name}>{name}</h2>
                <p className={style.info}>Health score: {health_score}</p>
                <div className={style.info}>Diets:{diets}</div>
                {/* <ul className={style.ulContainer}>
                {diets.map(diet => {
                    return (
                        <li className={style.li} key={diet}>{diet}</li>
                    )
                })}
                </ul> */}
                <p className={style.text}>{resume}</p>
                <img src={image} alt={name} className={style.img}/>
                <h3>Instructions</h3>
                <div className={style.text}>{step_by_step}</div>
                <p className={style.info}>Id: {id}</p>
            </div>
        </div>
    )
}