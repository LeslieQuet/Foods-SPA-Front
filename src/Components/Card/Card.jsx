import style from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card({id, name, image, health_score}){ 
    return(
        <div className={style.cardContainer}>
            <img className={style.img} src={image} alt={name}/>
            <h2 className={style.name}>{name}</h2>
            <p className={style.text}>Diets: </p>
            {/* <ul className={style.ulContainer}>
                {diets.map(diet => {
                    return (
                        <li className={style.li} key={diet}>{diet}</li>
                        )
                    })}
            </ul> */}
            <p className={style.text}>Health score: {health_score}</p>
            <Link to={`/recipe/${id}`}>
                <button className={style.button}>Full recipe</button>
            </Link>
            <p className={style.textId}>Id: {id}</p>
        </div>
    )
}
