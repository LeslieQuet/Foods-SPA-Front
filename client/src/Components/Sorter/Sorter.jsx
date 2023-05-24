import React from "react";
import style from './Sorter.module.css'
import { orderedByName, orderedByScore } from "../../Redux/actions";
import { useDispatch } from 'react-redux'
import { resetFilters } from "../../Redux/actions";



export default function Sorter({setCurrentPage}) {
    
    const dispatch = useDispatch();
    
    const handleSelection = (event) => {
        dispatch(resetFilters())
        if (event.target.value < 3) {
            dispatch(orderedByName(event.target.value))
        }
        else dispatch(orderedByScore(event.target.value))
        event.target.value = "default";
        setCurrentPage(1)
    }

    return(
        <div className={style.sorter}>
            <select name="sorter" onChange={handleSelection} className={style.text}>
                <option value="default">Order by name</option>
                <option value="1" >Order A-Z</option>
                <option value="2">Order Z-A</option>
            </select>
            <select name="sorter" onChange={handleSelection} className={style.text}>
                <option value="default">Order by health score</option>
                <option value="3">Order Min - Max</option>
                <option value="4">Order Max - Min</option>
            </select>
        </div>
    )
}