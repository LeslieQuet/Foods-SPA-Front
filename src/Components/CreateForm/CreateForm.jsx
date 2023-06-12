import React from "react";
import style from './CreateForm.module.css'

export default function CreateForm({handleInputChange, errors, diets, handleDiets, onSubmit}){

    const disable = () => {
        for (const error of Object.values(errors)) {
            if (error !== "") {
            return true; // si se encontró algún error, el botón debe estar deshabilitado
            }
        }
        return false; 
    };

    return(
        <form className={style.form} onSubmit={onSubmit} id="form"> 
            <div > 
                <label htmlFor="name" className={style.text}>Name: </label>
                <input type="text" name="name" placeholder="Insert the name of the recipe" className={style.inputMin} onChange={handleInputChange}></input>
                <p className={style.error}>{errors.name}</p>
            </div>
            <div>
                <label htmlFor="image" className={style.text}>Image: </label>
                <input type="text" name="image" placeholder="Insert image url" className={style.inputMin} onChange={handleInputChange}></input>
                <p className={style.error}>{errors.image}</p>
            </div>
            <div>
                <label htmlFor="resume" className={style.text}>Resume: </label>
                <textarea type="text" id="resume" name="resume" placeholder="Insert a description or summary" className={style.inputTextMax} onChange={handleInputChange}></textarea>
                <p className={style.error}>{errors.resume}</p>
            </div>
            <div>
                <label htmlFor="health_score" className={style.text}>Health score: </label>
                <input type="number" name="health_score" placeholder="Insert nutritional value" className={style.inputMin} onChange={handleInputChange}></input>
                <p className={style.error}>{errors.health_score}</p>
            </div>
            <div>
                <label htmlFor="step_by_step" className={style.text}>Step by step: </label>
                <textarea type="text" name="step_by_step" placeholder="Insert step by step" className={style.inputTextMax} onChange={handleInputChange}></textarea>
                <p className={style.error}>{errors.step_by_step}</p>
            </div>
            <p className={style.text}>Select diets:</p>
            <select name="diets" onChange={handleDiets} required="true">
                <option value="default">Choose a diet or diets</option>
                {diets?.map((item) => (
                    <option value={item.id} key={item.id}>
                    {item.name}
                    </option>
                ))}
            </select>
            <p className={style.error}>{errors.diets}</p>
            <button type="submit" disabled={disable()} className={style.xButton}>Create new recipe</button>
        </form>
    )
}