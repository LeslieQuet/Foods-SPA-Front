import React from "react";
import style from './Filter.module.css'
import { useSelector, useDispatch} from 'react-redux'
import { useEffect } from "react";
import { getDiets, getRecipesByDiet } from "../../Redux/actions";

export default function Filter(){

    const diets = useSelector(state => state.diets)

    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(!diets.length) dispatch(getDiets());
    }, [dispatch, diets.length]);

    const handleSelect = (event)=>{
        dispatch(getRecipesByDiet(event.target.value))
    }

    return(
        <div className={style.Filter}>
            <select name="diets" onChange={handleSelect} className={style.text}>
                <option value="default">Choose a diet to filter</option>
                {diets?.map((diet) => (
                    <option value={diet.name} key={diet.id}>
                    {diet.name}
                    </option>
                ))}
            </select>
        </div>
    )
}