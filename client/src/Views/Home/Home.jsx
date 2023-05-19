import React from 'react';
import style from './Home.module.css'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes } from '../../Redux/actions';
import Cards from '../../Components/Cards/Cards'
import Pagination from '../../Components/Pagination/Pagination';
import { Link } from 'react-router-dom';

export default function Home(){
    
    const recipes = useSelector((state) => state.recipes);

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(9);
    
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const dispatch = useDispatch();

    return(
    <div className={style.HomeContainer}>
        <section className={style.buttonsContainer}>
            <button className={style.button} onClick={()=>{dispatch(getRecipes())}}>Volver a todas las recetas</button>
            <Link to={"/recipe/create"} className={style.createButton}>Crear una nueva receta</Link>
        </section>
        <Pagination postPerPage={postPerPage} totalPosts={recipes.length} paginate={paginate}/>
        <Cards indexOfFirstPost={indexOfFirstPost} indexOfLastPost={indexOfLastPost} />
    </div>
    )
}