import React from 'react';
import { useState } from 'react';
import style from './Pagination.module.css';


export default function Pagination({postPerPage, totalPosts, paginate}) {
    
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i);
    }

    
    return (
        <div className={style.Container}>
            <ul className={style.ulContainer}>
                {pageNumbers.map(number => {
                    return (
                        <li className={style.li} key={number}> 
                            <button onClick={()=>paginate(number)}>{number}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}