import style from './SearchBar.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipeQuery } from '../../Redux/actions';


export default function SearchBar() {
    const [seach, setSearch] = useState("")
    const changeHandler = (event) => {
      const {value} = event.target; 
      setSearch(value);
    }

    const dispatch = useDispatch();
    const onSearch = (search) => {
        dispatch(getRecipeQuery(search))
    };

    return(
        <div className={style.searchContainer}>
            <input type='search' className={style.searchInput} onChange={changeHandler}/>
            <button className={style.searchButton} onClick={()=>{onSearch(seach)}}>Recipe finder</button>
        </div>
    )
}  
