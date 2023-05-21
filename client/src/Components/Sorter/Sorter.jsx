import React from "react";
import style from './Sorter.module.css'
import { orderedByName, orderedByScore } from "../../Redux/actions";
import { useDispatch } from 'react-redux'



export default function Sorter() {
    
    const dispatch = useDispatch();
    
    const handleSelection = (event) => {
        if (event.target.value < 3) {
            dispatch(orderedByName(event.target.value));
        }
        else dispatch(orderedByScore(event.target.value))
    }

    return(
        <div className={style.sorter}>
            <select name="sorter" onChange={handleSelection} className={style.text}>
                <option value="default">Order by name or health score</option>
                <option value="1" >Order A-Z</option>
                <option value="2">Order Z-A</option>
                <option value="3">Order Min - Max</option>
                <option value="4">Order Max - Min</option>
            </select>
        </div>
    )
}