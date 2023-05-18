function validate(inputValue, property, errors, setErrors){

    if(property === "name"){
        if(inputValue.name !== "") {
            if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(inputValue.name) || inputValue.name.length > 25) setErrors({ ...errors, name: "Must only include letters and not exceed 25 characters" });
            else setErrors({...errors, name:""});
        }
        else setErrors({...errors, name: "It must only include letters and the field must not be empty"});
    }

    if(property === "image"){
        if(inputValue.image !== "") {
            if (!/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(inputValue.image)) setErrors({ ...errors, image: "Verify that the url is valid" });
            else setErrors({...errors, image:""});
        }
        else setErrors({...errors, image: "Insert a valid url, the field must not be empty"});
    }

    if(property === "resume"){
        if(inputValue.resume !== "") {
            if (inputValue.resume.length > 399) setErrors({ ...errors, resume: "Must not exceed 400 characters" });
            else setErrors({...errors, resume:""});
        }
        else setErrors({...errors, resume: "Insert a text up to 400 characters, the field must not be empty"});
    }

    if(property === "health_score"){
        if(inputValue.health_score !== "") {
            if (inputValue.health_score.length > 2 || isNaN(inputValue.health_score)) setErrors({ ...errors, health_score: "The health score should be set to two-digit numbers only" });
            else setErrors({...errors, health_score:""});
        }
        else setErrors({...errors, health_score: "Insert a numeric value, the field must not be empty"});
    }



}

export default validate;