import style from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card({id, name, image, health_score}){ 
    return(
        <div className={style.cardContainer}>
            <h2 className={style.name}>{name}</h2>
            <img className={style.img} src={image} alt={name}/>
            <p>Health score:{health_score}</p>
            <Link to={`/recipe/${id}`} className={style.cardDitail}>
                <h5>Full recipe</h5>
            </Link>
        </div>
    )
}
