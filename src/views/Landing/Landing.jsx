import style from './Landing.module.css';
import porsche from '../../assets/porsche.png'
import mclaren from '../../assets/mclaren.png'
import redbull from '../../assets/redbull.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import PATHROUTES from '../../helpers/PathRoutes';
import video from '../../assets/fondo.mp4'

const Landing = () => {
    return (
        <div className={style.container}>
            <div className={style.container2}>
                <div className={style.div_video}>
                    <video muted autoPlay loop className={style.video}>
                        <source src={video} type='video/mp4' />
                    </video>
                </div>
                <div className={style.content}>
                    <img src={logo} alt="" className={style.logo} />
                    <h2 className={style.h2}>DRIVERS API</h2>
                    <div className={style.divButtons}>
                        <a href="#wellcome">
                            <button className={style.button1}>WELCOME</button>
                        </a>
                        <Link to={PATHROUTES.ABOUT}>
                            <button className={style.button}>ABOUT ME</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.line}>1</div>
            <div className={style.div_wellcome}>
                <h2 id='wellcome' className={style.wellcome}>WELLCOME</h2>
                <p className={style.p}>Welcome to the F1® Drivers API! Explore the world of Formula 1 racing by accessing detailed information about your favorite drivers. Whether you're a seasoned fan or new to the sport, our API provides data on drivers and more. Start exploring now and enjoy the journey through the fast-paced world of F1® racing!</p>
                <button className={style.button3}>START NOW</button>
                {/* <footer className={style.footer}>
                    <img src={porsche} alt="" className={style.teams} />
                    <img src={mclaren} alt="" className={style.teams} />
                    <img src={redbull} alt="" className={style.teams} />
                </footer> */}
            </div>
        </div >
    )
}

export default Landing;