import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <>
            <div className={style.container} style={{ backgroundColor: props.backgroundColor }}>
                <div className={style.info}>
                    <img src={props.image} alt="" className={style.img} />
                    <Link to={`/detail/${props.id}`} className={style.link}>
                        <h1 className={style.h1}>{props.name} <br /> {props.surname}</h1>
                    </Link>
                </div>
                <div className={style.teams}>
                    <h2 className={style.team}>{props.teams}</h2>
                    <h2 className={style.nationality}>{props.nationality}</h2>
                </div>
            </div>
        </>
    )
}

export default Card;