import React from 'react';
import style from './Detail.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDetail } from '../../Redux/actions';
import RecipeDetail from '../../Components/RecipeDetail/RecipeDetail';

export default function Detail(){

    const {ID} = useParams(); 
    const recipeDetail = useSelector((state) => state.detail);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(ID));
    }, [dispatch]);

    const {name, image, resume, health_score, step_by_step, diets} = recipeDetail;
    
    return(
        <div className={style.detailBox}> 
            <RecipeDetail
                key={ID}
                id={ID}
                name={name}
                image={image}
                resume={resume}
                health_score={health_score}
                step_by_step={step_by_step}
                diets={diets}
            />
        </div>
    )
}