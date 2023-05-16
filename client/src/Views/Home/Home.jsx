import style from './Home.module.css'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Cards from '../../Components/Cards/Cards'
import Pagination from '../../Components/Pagination/Pagination';

export default function Home(){
    
    const recipes = useSelector((state) => state.recipes);

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(9);
    
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    
    return(
    <div className={style.HomeContainer}>
        <p>Recetas de cocina fáciles y saludables</p>
        <Pagination postPerPage={postPerPage} totalPosts={recipes.length} paginate={paginate}/>
        <Cards indexOfFirstPost={indexOfFirstPost} indexOfLastPost={indexOfLastPost} />
    </div>
    )
}