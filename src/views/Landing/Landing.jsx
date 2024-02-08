import style from './Landing.module.css';
import js from '../../assets/logo-js.png'
import react from '../../assets/logo-react.png'
import redux from '../../assets/logo-redux.png'
import node from '../../assets/logo-node.png'
import sequelize from '../../assets/logo-sequelize.png'
import postgresql from '../../assets/logo-postgresql.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import PATHROUTES from '../../helpers/PathRoutes';
import video from '../../assets/fondo.mp4'

const Landing = () => {

    const scrollTop = () => {
        window.scrollTo(0, 0)
    }


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
                <Link to={PATHROUTES.DRIVERS}>
                    <button className={style.button3} onClick={scrollTop}>START NOW</button>
                </Link>
            </div>
            <div className={style.div_create}>
                <h2 className={style.create}>CREATE</h2>
                <div className={style.div_p_create}>
                    <p className={style.p_create}>F1® Drivers API gives you the opportunity to create your own Formula 1 driver and associate him with your favorite teams.</p>
                </div>
                <Link to={PATHROUTES.CREATE}>
                    <button className={style.button} onClick={scrollTop}>LET'S GO!</button>
                </Link>
            </div>
            <div className={style.div_technologies}>
                <h2 className={style.technologies}>TECHNOLOGIES</h2>
                <div className={style.line_title}>1</div>
                <div className={style.div_logos}>
                    <div className={style.logos_content}>
                        <img src={js} alt="" className={style.logos_tech} />
                    </div>
                    <div className={style.logos_content}>
                        <img src={react} alt="" className={style.logos_tech} />
                    </div>
                    <div className={style.logos_content}>
                        <img src={redux} alt="" className={style.logos_tech} />
                    </div>
                    <div className={style.logos_content}>
                        <img src={node} alt="" className={style.logos_tech} />
                    </div>
                    <div className={style.logos_content}>
                        <img src={sequelize} alt="" className={style.logos_tech} />
                    </div>
                    <div className={style.logos_content}>
                        <img src={postgresql} alt="" className={style.logos_tech} />
                    </div>
                </div>
            </div>
            <div>
                <footer className={style.footer}>
                    <p className={style.p_footer}>© 2024 Matias Assaff. All rights reserved. This driver API is protected by copyright. </p>
                </footer>
            </div>

        </div >
    )
}

export default Landing;