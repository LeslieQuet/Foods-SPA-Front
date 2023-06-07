import React from 'react'
import style from './Create.module.css'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDiets } from '../../Redux/actions'
import CreateForm from '../../Components/CreateForm/CreateForm'
import validate from './Validations'
import axios from 'axios'

export default function Create(){ 

    //Utilizando state.dieta envía props a CreateForm para armar el selector de dietas
    const diets = useSelector(state => state.diets)
    
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(!diets.length) dispatch(getDiets());
    }, [dispatch, diets]);

    
    //Formulario controlado mediante estado interno// estado de errores
    const [inputValues, setInputValues] = useState({
        name: "",
        image: "",
        resume: "",
        health_score: 0,
        step_by_step: "",
        diets: [],
        selectedDiets: [],
    });    
    
    const [errors, setErrors] = useState({
        name: "*It must only include letters and the field must not be empty",
        image: "*Insert a valid url, the field must not be empty",
        resume: "*Insert a text up to 400 characters, the field must not be empty",
        health_score: "*Insert a numeric value, the field must not be empty",
        step_by_step: "*Insert each steps in a paragraph, text up to 750 characters total, the field must not be empty",
        diets: "*Must select at least one diet",
    });    
    
    //Modifica los estados con los inputs
    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        
        setInputValues({ ...inputValues, [property]: value });
        validate({...inputValues, [property]: value }, property, errors, setErrors);
    }    
    
    const handleDiets = (e)=>{
        const property = e.target.name;
        const value = e.target.value;

        setInputValues({ ...inputValues, diets: inputValues.diets.concat(value), selectedDiets: inputValues.selectedDiets.concat(diets[value -1].name, " ")});
        validate({ ...inputValues, diets: inputValues.diets.concat(value)}, property, errors, setErrors);
    }

    //On Submit envía la información del estado a la ruta del post
    const navigate = useNavigate();

    const onSubmit = async (e)=>{
            e.preventDefault()

        const response = await axios.post('http://localhost:3001/recipes', inputValues)
        const newRecipe = response.data;

        setInputValues({
            name: "",
            summary: "",
            healthScore: 0,
            step_by_step: "",
            image: "",
            diets: []
        })

        if(newRecipe.error){
            alert((`Error trying to create new recipe: ${response.error}`)) 
            //Alerta adicional por si algún error pasa las validaciones del form
        }
        else{
            alert("Recipe saved successfully");
            navigate(`/recipe/${newRecipe.id}`);
        }        
    }

    return(
        <div className={style.createContainer}>
            <h2 className={style.title}>Here you can create a recipe</h2>
            <CreateForm 
                handleInputChange={handleInputChange} 
                errors={errors} 
                diets={diets} 
                handleDiets={handleDiets} 
                onSubmit={onSubmit} 
                selectedDiets={inputValues.selectedDiets}
                />
        </div>
    )
}

