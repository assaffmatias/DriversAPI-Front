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
    };

    return (
        <div className={style.container}>
            <div className={style.mainContent}>
                <div className={style.videoSection}>
                    <video muted autoPlay loop className={style.video}>
                        <source src={video} type='video/mp4' />
                    </video>
                </div>
                <div className={style.content}>
                    <img src={logo} alt="" className={style.logo} />
                    <h2 className={style.titleLogo}>
                        <span className={style.titleDrivers}>DRIVERS</span>
                        <span className={style.titleApi}>API</span>
                    </h2>
                    <div className={style.buttonContainer}>
                        <a href="#wellcome">
                            <button className={style.welcomeButton}>WELCOME</button>
                        </a>
                        <Link to={PATHROUTES.ABOUT}>
                            <button className={style.aboutButton}>ABOUT ME</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.divider}>1</div>
            <div className={style.welcomeSection}>
                <h2 id='wellcome' className={style.wellcomeTitle}>WELCOME</h2>
                <p className={style.wellcomeText}>Welcome to the F1® Drivers API! Explore the world of Formula 1 racing by accessing detailed information about your favorite drivers. Whether you're a seasoned fan or new to the sport, our API provides data on drivers and more. Start exploring now and enjoy the journey through the fast-paced world of F1® racing!</p>
                <Link to={PATHROUTES.DRIVERS}>
                    <button className={style.startNowButton} onClick={scrollTop}>START NOW</button>
                </Link>
            </div>
            <div className={style.createSection}>
                <h2 className={style.createTitle}>CREATE</h2>
                <div className={style.createContentText}>
                    <p className={style.createText}>F1® Drivers API gives you the opportunity to create your own Formula 1 driver and associate him with your favorite teams.</p>
                </div>
                <Link to={PATHROUTES.CREATE}>
                    <button className={style.createButton} onClick={scrollTop}>LET'S GO!</button>
                </Link>
            </div>
            <div className={style.techSection}>
                <h2 className={style.techTitle}>TECHNOLOGIES</h2>
                <div className={style.lineTechTitle}>1</div>
                <div className={style.logoSection}>
                    <div className={style.logoContent}>
                        <img src={js} alt="" className={style.logoItem} />
                    </div>
                    <div className={style.logoContent}>
                        <img src={react} alt="" className={style.logoItem} />
                    </div>
                    <div className={style.logoContent}>
                        <img src={redux} alt="" className={style.logoItem} />
                    </div>
                    <div className={style.logoContent}>
                        <img src={node} alt="" className={style.logoItem} />
                    </div>
                    <div className={style.logoContent}>
                        <img src={sequelize} alt="" className={style.logoItem} />
                    </div>
                    <div className={style.logoContent}>
                        <img src={postgresql} alt="" className={style.logoItem} />
                    </div>
                </div>
            </div>
            <div>
                <footer className={style.footer}>
                    <p className={style.footerText}>© 2024 Matias Assaff. All rights reserved. F1® Drivers API is protected by copyright. </p>
                </footer>
            </div>

        </div >
    );
};

export default Landing;