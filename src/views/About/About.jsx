import style from './About.module.css'
import bg from '../../assets/background2.png'

const About = () => {
    return (
        <div className={style.container}>
            <div className={style.masthead}>
                <h1 className={style.mastheadTitle}>ABOUT ME</h1>
                <img src={bg} alt="" className={style.img} />
            </div>
            <div className={style.divider}></div>
        </div>
    )
}

export default About