import React from 'react'
import style from './Create.module.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDiets, postRecipe } from '../../Redux/actions'
import CreateForm from '../../Components/CreateForm/CreateForm'
import axios from 'axios'
import validate from './Validations'

export default function Create(){ 

    //Formulario controlado mediante estado interno// estado de errores
    const [inputValues, setInputValues] = useState({
        name: "",
        image: "",
        resume: "",
        health_score: "",
        step_by_step: "",
        diets: [],
    });

    const [errors, setErrors] = useState({
        name: "It must only include letters and the field must not be empty",
        image: "Insert a valid url, the field must not be empty",
        resume: "Insert a text up to 400 characters, the field must not be empty",
        health_score: "Insert a numeric value, the field must not be empty",
        step_by_step: "Insert each steps in a paragraph, text up to 750 characters total, the field must not be empty",
        diets: "Must select at least one diet",
    });

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
    
        setInputValues({ ...inputValues, [property]: value });
        validate({...inputValues, [property]: value }, property, errors, setErrors);
    }


    //Utilizando state.dieta envía props a CreateForm para armar el selector de dietas
    const diets = useSelector(state => state.diets)
    
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(!diets.length) dispatch(getDiets());
    }, []);

    const handleDiets = (e)=>{
        const property = e.target.name;
        const value = e.target.value;

        setInputValues({ ...inputValues, diets: inputValues.diets.concat(value)});
        validate({ ...inputValues, diets: inputValues.diets.concat(value)}, property, errors, setErrors);
    }

    const navigate = useNavigate();

    const onSubmit = async (e)=>{
        e.preventDefault()
        // dispatch(postRecipe(inputValues))
        await axios
        .post(`http://localhost:3001/recipes`, inputValues)
        .then((res)=> alert(res.data))
        .catch((error)=> (error.response.data.message))
        setInputValues({
            name: "",
            summary: "",
            healthScore: "",
            step_by_step: "",
            image: "",
            diets: []
        })
        navigate('/home');
    }

    return(
        <div className={style.createContainer}>
            <h2>Here you can create a recipe</h2>
            <CreateForm handleInputChange={handleInputChange} errors={errors} diets={diets} handleDiets={handleDiets} onSubmit={onSubmit} />
        </div>
    )
}

