export default function validate(inputValue, property, errors, setErrors){

    switch(property){
        case "name":
            nameValidator(inputValue, errors, setErrors)
            break;
        case "image":
            imageValidator(inputValue, errors, setErrors)
            break;
        case "resume":
            resumeValidator(inputValue, errors, setErrors)
            break;
        case "health_score":
            healthScoreValidator(inputValue, errors, setErrors)
            break;
        case "step_by_step":
            stepByStepValidator(inputValue, errors, setErrors)
            break;
        case "diets":
            dietsValidator(inputValue, errors, setErrors)
            break;
        default:
            break;
    }
}

function nameValidator(inputValue, errors, setErrors){
    if(inputValue.name !== "") {
        if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(inputValue.name) || inputValue.name.length > 30) setErrors({ ...errors, name: "*Must only include letters and not exceed 30 characters" });
        else setErrors({...errors, name:""});
    }
    else setErrors({...errors, name: "*It must only include letters and the field must not be empty"});
}

function imageValidator(inputValue, errors, setErrors){
    if(inputValue.image !== "") {
        if (!/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(inputValue.image)) setErrors({ ...errors, image: "*Verify that the url is valid" });
        else setErrors({...errors, image:""});
    }
    else setErrors({...errors, image: "*Insert a valid url, the field must not be empty"});
}

function resumeValidator(inputValue, errors, setErrors){
    if(inputValue.resume !== "") {
        if (inputValue.resume.length > 400) setErrors({ ...errors, resume: "*Must not exceed 400 characters" });
        if (inputValue.resume.length < 50) setErrors({ ...errors, resume: "*Must reach at least 50 characters" });
        else setErrors({...errors, resume:""});
    }
    else setErrors({...errors, resume: "*Insert a text up to 400 characters, the field must not be empty"});
}

function healthScoreValidator(inputValue, errors, setErrors){
    if(inputValue.health_score !== "") {
        if (inputValue.health_score > 99 || isNaN(inputValue.health_score)) setErrors({ ...errors, health_score: "*The health score should be set to two-digit numbers only" });
        else setErrors({...errors, health_score:""});
    }
    else setErrors({...errors, health_score: "*Insert a numeric value, the field must not be empty"});
}

function stepByStepValidator(inputValue, errors, setErrors){
    if(inputValue.step_by_step !== "") {
        if (inputValue.step_by_step.length < 300 || inputValue.step_by_step.length > 750) setErrors({ ...errors, step_by_step: "*Must reach at least 300 characters and not exceed 750 characters" });
        else setErrors({...errors, step_by_step:""});
    }
    else setErrors({...errors, step_by_step: "*Insert each steps in a paragraph, text up to 750 characters total, the field must not be empty"});
}

function dietsValidator(inputValue, errors, setErrors){
    if(inputValue.diets) setErrors({...errors, diets:""});
    else setErrors({...errors, diets: "*Must select at least one diet"});
}

    // if(property === "name"){
    //     if(inputValue.name !== "") {
    //         if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(inputValue.name) || inputValue.name.length > 30) setErrors({ ...errors, name: "*Must only include letters and not exceed 30 characters" });
    //         else setErrors({...errors, name:""});
    //     }
    //     else setErrors({...errors, name: "*It must only include letters and the field must not be empty"});
    // }
    
    // if(property === "image"){
    //     if(inputValue.image !== "") {
    //         if (!/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(inputValue.image)) setErrors({ ...errors, image: "*Verify that the url is valid" });
    //         else setErrors({...errors, image:""});
    //     }
    //     else setErrors({...errors, image: "*Insert a valid url, the field must not be empty"});
    // }

    // if(property === "resume"){
    //     if(inputValue.resume !== "") {
    //         if (inputValue.resume.length > 400) setErrors({ ...errors, resume: "*Must not exceed 400 characters" });
    //         if (inputValue.resume.length < 50) setErrors({ ...errors, resume: "*Must reach at least 50 characters" });
    //         else setErrors({...errors, resume:""});
    //     }
    //     else setErrors({...errors, resume: "*Insert a text up to 400 characters, the field must not be empty"});
    // }

    // if(property === "health_score"){
    //     if(inputValue.health_score !== "") {
    //         if (inputValue.health_score > 99 || isNaN(inputValue.health_score)) setErrors({ ...errors, health_score: "*The health score should be set to two-digit numbers only" });
    //         else setErrors({...errors, health_score:""});
    //     }
    //     else setErrors({...errors, health_score: "*Insert a numeric value, the field must not be empty"});
    // }

    // if(property === "step_by_step"){
    //     if(inputValue.step_by_step !== "") {
    //         if (inputValue.step_by_step.length < 300 || inputValue.step_by_step.length > 750) setErrors({ ...errors, step_by_step: "*Must reach at least 300 characters and not exceed 750 characters" });
    //         // if (inputValue.step_by_step.length > 750) setErrors({ ...errors, step_by_step: "*Must not exceed 750 characters" });
    //         else setErrors({...errors, step_by_step:""});
    //     }
    //     else setErrors({...errors, step_by_step: "*Insert each steps in a paragraph, text up to 750 characters total, the field must not be empty"});
    // }
    
    // if(property === "diets"){
    //     if(inputValue.diets) setErrors({...errors, diets:""});
    //     else setErrors({...errors, diets: "*Must select at least one diet"});
    // }


