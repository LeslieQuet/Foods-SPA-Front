import React from "react";
import style from './Filter.module.css'
import { useSelector, useDispatch} from 'react-redux'
import { useEffect } from "react";
import { getDiets, getRecipesByDiet } from "../../Redux/actions";

export default function Filter({setPaginateOnFirstPage}){

    const diets = useSelector(state => state.diets)

    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(!diets.length) dispatch(getDiets());
    }, [dispatch, diets]);

    const handleSelect = (event)=>{
        const {value} = event.target
        dispatch(getRecipesByDiet(value))
        event.target.value = "default";
        setPaginateOnFirstPage();
    }

    return(
        <div>
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