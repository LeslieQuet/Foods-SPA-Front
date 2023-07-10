import React from "react";
import style from './About.module.css'
import programmer from '../../Assets/Img/about.gif'

export default function About() {
    return(
        <div className={style.container}>
            <section className={style.text}>
                <h2 style={{fontSize: '2em'}}>Hi, I'm Leslie! Welcome to my app</h2>
                <h5 style={{fontSize: '1em'}}>Soy FullStack Developer formada en la comunidad de Henry!</h5>
                <p style={{fontSize: '1em'}}>Esta es una single page aplication que utiliza las tecnologías React, Redux, Node, Express y Sequelize.</p>
                <p style={{fontSize: '1em'}}>Consume datos de una base de datos propia así como de una API, maneja diferentes filtrados y ordenamientos de información y permite al usuario ingresar recetas a la base de datos mediante un formulario controlado, validando los datos tanto en el front end como en el back end de la aplicación y base de datos. </p>
            </section>
            <img className={style.img} src={programmer} alt="programmer"/>
        </div>
    )
}