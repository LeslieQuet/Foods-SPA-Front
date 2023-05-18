import React from "react";
import style from './CreateForm.module.css'

export default function CreateForm({handleInputChange, errors}){
    return(
        <form className={style.form}> 
            <div > 
                <label htmlFor="name" className={style.text}>Name: </label>
                <input type="text" name="name" placeholder="Insert the name of the recipe" className={style.searchInput} onChange={handleInputChange}></input>
                <p className={style.error}>{errors.name}</p>
            </div>
            <div>
                <label htmlFor="image" className={style.text}>Image: </label>
                <input type="text" name="image" placeholder="Insert image url" className={style.searchInput} onChange={handleInputChange}></input>
                <p className={style.error}>{errors.image}</p>
            </div>
            <div>
                <label htmlFor="resume" className={style.text}>Resume: </label>
                <input type="text" name="resume" placeholder="Insert a description or summary" className={style.searchInput} onChange={handleInputChange}></input>
                <p className={style.error}>{errors.resume}</p>
            </div>
            <div>
                <label htmlFor="health_score" className={style.text}>Health score: </label>
                <input type="text" name="health_score" placeholder="Insert nutritional value" className={style.searchInput} onChange={handleInputChange}></input>
                <p className={style.error}>{errors.health_score}</p>
            </div>
            <div>
                <label htmlFor="steps" className={style.text}>Step by step: </label>
                <input type="text" name="steps" placeholder="Insert step by step" className={style.searchInput} onChange={handleInputChange}></input>
                <p className={style.error}>{errors.steps}</p>
            </div>
        </form>
    )
}