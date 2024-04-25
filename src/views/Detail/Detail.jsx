import style from './Detail.module.css'
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import { getDriverById, resetDetail } from '../../redux/actions';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const driverDetail = useSelector((state) => state.driverDetail)

    const [showInfo, setShowInfo] = useState(true);

    useEffect(() => {
        dispatch(getDriverById(id));
        return () => {
            dispatch(resetDetail());
        }
    }, [id])

    const handleInfoClick = () => {
        setShowInfo(true);
    };

    const handleDescriptionClick = () => {
        setShowInfo(false);
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className={style.container}>
            {driverDetail
                .map((driver) => {
                    return (
                        <div className={style.content}>
                            <div className={style.div}>
                                <button className={style.closeButton} onClick={handleGoBack}>
                                    <svg className={style.svg} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 16-4-4 4-4m-6 8-4-4 4-4" />
                                    </svg>
                                </button>
                                <h1 className={style.title}>DRIVER DETAIL</h1>
                            </div>

                            {/* Mobile */}
                            <div className={style.mainContentMobile}>
                                <div className={style.firstSection}>
                                    <div className={style.nameContainer}>
                                        <h2 className={style.name}>{driver.name}</h2>
                                        <h2 className={style.surname}>{driver.surname}</h2>
                                        <div className={style.divider}></div>
                                    </div>
                                    <div className={style.imgContainer}>
                                        <img className={style.img} src={driver.image} alt="" />
                                    </div>
                                </div>
                                <div className={style.sectionData}>
                                    <div className={style.descriptionContainer}>
                                        <button className={style.button} onClick={handleInfoClick}>Info</button>
                                        <button className={style.button} onClick={handleDescriptionClick}>Description</button>
                                    </div>
                                    <div className={style.show}>
                                        {showInfo ? (
                                            <div className={style.showInfo}>
                                                <p> 🌏 {driver.nationality}</p>
                                                <p> 📆 {driver.dob}</p>
                                                <p> 🏁 {driver.teams}</p>
                                            </div>
                                        ) : (
                                            <div className={style.showDescription}>
                                                <p>{driver.description}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Desktop */}
                            <div className={style.mainContentDesktop}>
                                <div className={style.firstSection}>
                                    <div className={style.nameContainer}>
                                        <h2 className={style.name}>{driver.name}</h2>
                                        <h2 className={style.surname}>{driver.surname}</h2>
                                        <div className={style.divider}></div>
                                    </div>
                                    <div className={style.descriptionContainer}>
                                        <button className={style.button} onClick={handleInfoClick}>Info</button>
                                        <button className={style.button} onClick={handleDescriptionClick}>Description</button>
                                    </div>
                                    <div className={style.show}>
                                        {showInfo ? (
                                            <div className={style.showInfo}>
                                                <p> 🌏 {driver.nationality}</p>
                                                <p> 📆 {driver.dob}</p>
                                                <p> 🏁 {driver.teams}</p>
                                            </div>
                                        ) : (
                                            <div className={style.showDescription}>
                                                <p>{driver.description}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={style.sectionData}>
                                    <div className={style.imgContainer}>
                                        <img className={style.img} src={driver.image} alt="" />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Detail;