import style from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card({id, name, image, health_score, diets}){ 
    return(
        <div className={style.cardContainer}>
            <h2 className={style.text}>{name}</h2>
            <p className={style.text}>Health score:{health_score}</p>
            <p className={style.text}>Diets:{diets}</p>
            <img className={style.img} src={image} alt={name}/>
            <Link to={`/recipe/${id}`} className={style.button}>
                <h5>Full recipe</h5>
            </Link>
            <p className={style.text2}>Id:{id}</p>
        </div>
    )
}
