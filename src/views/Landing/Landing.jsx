import style from './Landing.module.css';
import porsche from '../../assets/porsche.png'
import mclaren from '../../assets/mclaren.png'
import redbull from '../../assets/redbull.png'
import logo from '../../assets/logo2.png'
import { Link } from 'react-router-dom';
import PATHROUTES from '../../helpers/PathRoutes';
import video from '../../assets/fondo.mp4'

const Landing = () => {
    return (
        <div className={style.container}>
            <div className={style.div_video}>
                <video muted autoPlay loop className={style.video}>
                    <source src={video} type='video/mp4' />
                </video>
            </div>
            <div className={style.content}>
                <img src={logo} alt="" className={style.logo} />
                <h2 className={style.h2}>DRIVERS API</h2>
                <div className={style.divButtons}>
                    <Link to={PATHROUTES.DRIVERS}>
                        <button className={style.button1}>GET INTO</button>
                    </Link>
                    <Link to={PATHROUTES.ABOUT}>
                        <button className={style.button}>ABOUT</button>
                    </Link>
                </div>
            </div>
            <div className={style.line}>1</div>
            <div>
                <footer className={style.footer}>
                    <img src={porsche} alt="" className={style.teams} />
                    <img src={mclaren} alt="" className={style.teams} />
                    <img src={redbull} alt="" className={style.teams} />
                </footer>
            </div>
            {/* <div className={style.content}>
                <video muted autoPlay loop className={style.video}>
                    <source src={video} type='video/mp4' />
                </video>
                <img src={logo} alt="" className={style.logo} />
                <h2 className={style.h2}>DRIVERS API</h2>
                <div className={style.divButtons}>
                    <Link to={PATHROUTES.DRIVERS}>
                        <button className={style.button1}>GET INTO</button>
                    </Link>
                    <Link to={PATHROUTES.ABOUT}>
                        <button className={style.button}>ABOUT</button>
                    </Link>
                </div>
            </div>
            <div className={style.line}>1</div>
            <div>
                <footer className={style.footer}>
                    <img src={porsche} alt="" className={style.teams} />
                    <img src={mclaren} alt="" className={style.teams} />
                    <img src={redbull} alt="" className={style.teams} />
                </footer>
            </div> */}

        </div >
    )
}

export default Landing;