import style from './About.module.css'
import bg from '../../assets/background2.png'

const About = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <h1 className={style.h1}>ABOUT ME</h1>
                <img src={bg} alt="" className={style.img} />
            </div>
            <div className={style.line}></div>
        </div>
    )
}

export default About