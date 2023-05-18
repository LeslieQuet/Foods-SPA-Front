import React from 'react'
import style from './Create.module.css'
import CreateForm from '../../Components/CreateForm/CreateForm'
import { useState } from 'react'
import validate from './Validations'

export default function Create(){ 
    const [inputValues, setInputValues] = useState({
        name: "",
        image: "",
        resume: "",
        health_score: "",
        steps: "",
        diets: [],
    });

    const [errors, setErrors] = useState({
        name: "It must only include letters and the field must not be empty",
        image: "Insert a valid url, the field must not be empty",
        resume: "Insert a text up to 400 characters, the field must not be empty",
        health_score: "Insert a numeric value, the field must not be empty",
        steps: "Insert each steps in a paragraph up to 400 characters, the field must not be empty",
        diets: "Must select at least one diet",
    });

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
    
        setInputValues({ ...inputValues, [property]: value });
        validate({...inputValues, [property]: value }, property, errors, setErrors);
    }

    return(
        <div className={style.createContainer}>
            <h2>Here you can create a recipe</h2>
            <CreateForm handleInputChange={handleInputChange} errors={errors}/>
        </div>
    )
}

