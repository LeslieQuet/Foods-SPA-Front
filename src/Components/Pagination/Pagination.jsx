import React from 'react';
import style from './Pagination.module.css';


export default function Pagination({postPerPage, totalPosts, paginate, active, setActive}) {

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i);
    }

    const selectedPage = (number) => {
        paginate(number);
        setActive(number);
    }

    return (
        <div className={style.Container}>
            {pageNumbers.map(number => {
                return (
                    // <li className={number === active? style.liActive: style.li} key={number}> 
                        <button className={number === active? style.active: style.inactive} onClick={()=>(selectedPage(number))}>{number}</button>
                    // </li>
                )
            })}
        </div>
    )
}