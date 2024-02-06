import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { onClose } = props;

    return (
        <>
            <div className={style.container} style={{ backgroundColor: props.backgroundColor }}>
                <div className={style.info}>
                    <img src={props.image} alt="" className={style.img} />
                    <Link to={`/detail/${props.id}`} className={style.link}>
                        <h1 className={style.h1}>{props.name} <br /> {props.surname}</h1>
                    </Link>
                    {isNaN(props.id) && (
                    <button className={style.button} onClick={() => onClose(props.id)}>DELETE</button>
                )}
                </div>
                <div className={style.nat}>
                    <h2 className={style.nationality}>{props.nationality}</h2>
                </div>
            </div>
        </>
    )
}

export default Card;