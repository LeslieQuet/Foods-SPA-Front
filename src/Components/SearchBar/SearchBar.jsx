import style from './SearchBar.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipeQuery } from '../../Redux/actions';


export default function SearchBar({setPaginateOnFirstPage}) {
    const [search, setSearch] = useState("")
    const changeHandler = (event) => {
      const {value} = event.target; 
      setSearch(value);
    }

    const dispatch = useDispatch();
    
    const onSearch = (event) => {
        event.preventDefault()
        if(!search){
            return;
        }
        if(!/^[a-zA-Z ]+$/.test(search)){
            alert("Letters Only")
            setSearch("")
        }else{
            dispatch(getRecipeQuery(search))
            setPaginateOnFirstPage()
            setSearch("")
        }
    };

    return(
        <div>
            <form>
                <button className={style.searchButton} onClick={onSearch}>Recipe finder</button>
                <input type='search' value={search} placeholder='Search by name or ingredient' className={style.searchInput} onChange={changeHandler}/>
            </form>
        </div>
    )
}  
