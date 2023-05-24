import React from "react";
import style from './NavBar.module.css'
import { NavLink } from "react-router-dom";

export default function NavBar (){
    return (
        <div className={style.bar}>
            <ul className={style.ulMenu}>
                <li>
                    <NavLink to="/home" className={({isActive}) => isActive ? style.active: style.inactive}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/recipe/create" className={({isActive}) => isActive ? style.active: style.inactive}>Create a new recipe</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => isActive ? style.active: style.inactive}>About</NavLink>                    
                </li>
            </ul>
        </div>
    )
}