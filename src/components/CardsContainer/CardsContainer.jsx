import style from "./CardsContainer.module.css"
import Card from "../Card/Card"
import Paginated from "../Paginated/Paginated";
import Filter from "../Filter/Filter"
import Order from "../Order/Order";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import bg from '../../assets/background2.png'
import { deleteDriver } from "../../redux/actions";

const CardsContainer = () => {

    const drivers = useSelector(state => state.drivers);
    const filterCreated = useSelector((state) => state.filterCreated);
    const selectedTeam = useSelector(state => state.selectedTeam)
    const dispatch = useDispatch()

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(9)

    const filteredDrivers = drivers.filter((driver) => {
        const meetsCreationFilter = filterCreated === null || driver.created === filterCreated;
        const meetsTeamFilter = !selectedTeam || (driver.teams && driver.teams.includes(selectedTeam));

        return meetsCreationFilter && meetsTeamFilter;
    });

    const max = Math.ceil(filteredDrivers.length / perPage);

    const onClose = (id) => {
        dispatch(deleteDriver(id))        
     }

    return (
        <div className={style.container}>
            <div className={style.masthead}>
                <h1 className={style.mastheadTitle}>DRIVERS</h1>
                <img src={bg} alt="" className={style.img} />
            </div>
            <div className={style.divider}></div>
            <h2 className={style.welcomeTitle}>Discover comprehensive data on F1® drivers through our API. Seamlessly create new drivers with ease</h2>
            <div className={style.filterContent}>
                <Filter onFilterChange={() => setPage(1)} />
            </div>
            <div className={style.orderSection}>
                <h3 className={style.driverText}>Driver</h3>
                <div className={style.orderForDesktop}>
                    <Order />
                </div>
                <h3 className={style.nationalityText}>Nationality</h3>
            </div>

            <div className={style.orderForMobile}>
                <Order></Order>
            </div>

            <section className={style.driverSection}>
                {filteredDrivers
                    .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
                    .map((driver, index) => {
                        const backgroundColor = index % 2 === 0 ? 'transparent' : '#0d11172c';
                        return (
                            <Card
                                id={driver.id}
                                name={driver.name}
                                surname={driver.surname.toUpperCase()}
                                image={driver.image}
                                nationality={driver.nationality}
                                backgroundColor={backgroundColor}
                                onClose={onClose}
                            />
                        )
                    })}
            </section>
            <div>
                <Paginated page={page} setPage={setPage} max={max} />
            </div>
        </div>
    )
};

export default CardsContainer;