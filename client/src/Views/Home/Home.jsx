import React from 'react';
import style from './Home.module.css'
import { useState , useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes, resetAllRecipes } from '../../Redux/actions';
import Cards from '../../Components/Cards/Cards'
import Pagination from '../../Components/Pagination/Pagination';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Sorter from '../../Components/Sorter/Sorter';
import Filter from '../../Components/Filter/Filter';
import loader from '../../Assets/Img/Pizza.gif'

export default function Home(){
    
    const recipes = useSelector((state) => state.recipes);
    const sortedRecipes = useSelector((state) => state.sortedRecipes);
    const sorted = useSelector((state) => state.sorted);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!recipes.length) dispatch(getRecipes());
    }, [recipes.length]);
    
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(9);
    
    const indexOfLastPost = currentPage * postPerPage; 
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    
    const currentPosts = sorted?(sortedRecipes.slice(indexOfFirstPost, indexOfLastPost)):recipes.slice(indexOfFirstPost, indexOfLastPost);
    
    return(
    <div className={style.HomeContainer}>
        <div className={style.menu}> 
                <Filter setCurrentPage={setCurrentPage}/>
                <SearchBar setCurrentPage={setCurrentPage}/>
                <button className={style.buttonAllRecipes} onClick={()=>{dispatch(resetAllRecipes())}}>Back to all recipes</button>
                <Sorter setCurrentPage={setCurrentPage}/>
        </div>
        <Pagination postPerPage={postPerPage} totalPosts={recipes.length} paginate={paginate}/>
        <div>
            {currentPosts.length? <Cards currentPosts={currentPosts}/>:
            <div className={style.lContainer}>
                <img className={style.loaderGif} src={loader} alt="Loader" />
                <p className={style.loader}>Loading recipes... </p>
            </div>
        }
        </div>
    </div>
    )
}