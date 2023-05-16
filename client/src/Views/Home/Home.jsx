import style from './Home.module.css'
import Cards from '../../Components/Cards/Cards'

export default function Home(){
    return(
    <div className={style.HomeContainer}>
        <Cards/>
    </div>
    )
}