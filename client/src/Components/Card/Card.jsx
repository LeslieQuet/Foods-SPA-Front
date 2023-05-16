import style from './Card.module.css'

export default function Card({id, name, image}){ 
    return(
        <div className={style.cardContainer}>
            <h2 className={style.name}>{name}</h2>
            <img className={style.img} src={image} alt={name}/>
        </div>
    )
}
