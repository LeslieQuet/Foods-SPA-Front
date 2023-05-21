import React from 'react';
import style from './Home.module.css'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes } from '../../Redux/actions';
import Cards from '../../Components/Cards/Cards'
import Pagination from '../../Components/Pagination/Pagination';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Sorter from '../../Components/Sorter/Sorter';
import Filter from '../../Components/Filter/Filter';

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
        <div className={style.menu}> 
                <Sorter/>
                <Filter/>
                <SearchBar/>
                <button className={style.buttonAllRecipes} onClick={()=>{dispatch(getRecipes())}}>Volver a todas las recetas</button>
        </div>
        <div>
            <Cards indexOfFirstPost={indexOfFirstPost} indexOfLastPost={indexOfLastPost} />
        </div>
        <Pagination postPerPage={postPerPage} totalPosts={recipes.length} paginate={paginate}/>
    </div>
    )
}