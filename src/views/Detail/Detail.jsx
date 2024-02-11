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
        <div>
            {driverDetail
                .map((driver) => {
                    return (
                        <div className={style.container}>
                            <h1 className={style.title}>DRIVER DETAILS</h1>
                            <div className={style.mainContent}>
                                <div className={style.section}>
                                    <div>
                                        <img className={style.img} src={driver.image} alt="" />
                                    </div>
                                    <div className={style.infoContainer}>
                                        <div className={style.buttonContainer}>
                                            <button className={style.closeButton} onClick={handleGoBack}>✘</button>
                                        </div>
                                        <div className={style.nameContainer}>
                                            <h2 className={style.name}>{driver.name}</h2>
                                            <h2 className={style.surname}>{driver.surname}</h2>
                                            <div className={style.divider}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.sectionData}>
                                    <div className={style.descriptionContainer}>
                                        <button className={style.button} onClick={handleInfoClick}>Info</button>
                                        <button className={style.button} onClick={handleDescriptionClick}>Description</button>
                                    </div>
                                    <div className={style.show}>
                                    {showInfo ? (
                                        <div>
                                            <p>Nationality: {driver.nationality}</p>
                                            <p>Birthdate: {driver.dob}</p>
                                            <p>Teams: {driver.teams}</p>
                                        </div>
                                    ) : (
                                        <div className={style.showDescription}>
                                            <p>{driver.description}</p>
                                        </div>
                                    )}
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