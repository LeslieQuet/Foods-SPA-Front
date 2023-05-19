import React from "react";
import style from './NavBar.module.css'
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import { NavLink } from "react-router-dom";
import Sorter from "../Sorter/Sorter";

export default function NavBar (){
    return (
        <div className={style.bar}>
            <ul className={style.ulMenu}>
                <li>
                    <NavLink to="/home" className={({isActive}) => isActive ? style.active: style.inactive}>Home</NavLink>
                </li>
                <Sorter/>
                <SearchBar/>
                <Filter/>
                <li>
                    <NavLink to="/about" className={({isActive}) => isActive ? style.active: style.inactive}>About</NavLink>                    
                </li>
            </ul>
        </div>
    )
}