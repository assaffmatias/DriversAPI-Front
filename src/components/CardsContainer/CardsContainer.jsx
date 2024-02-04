import style from "./CardsContainer.module.css"
import Card from "../Card/Card"
import Paginated from "../Paginated/Paginated";
import Filter from "../Filter/Filter"
import Order from "../Order/Order";
import { useSelector } from "react-redux";
import { useState } from "react";
import bg from '../../assets/background2.png'

const CardsContainer = () => {

    const drivers = useSelector(state => state.drivers);
    const filterCreated = useSelector((state) => state.filterCreated);
    const selectedTeam = useSelector(state => state.selectedTeam)

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(9)

    const filteredDrivers = drivers.filter((driver) => {
        const meetsCreationFilter = filterCreated === null || driver.created === filterCreated;
        const meetsTeamFilter = !selectedTeam || (driver.teams && driver.teams.includes(selectedTeam));

        return meetsCreationFilter && meetsTeamFilter;
    });

    const max = Math.ceil(filteredDrivers.length / perPage);

    return (
        <div className={style.container}>
            <div className={style.content}>
                <h1 className={style.h1}>DRIVERS</h1>
                <img src={bg} alt="" className={style.img} />
            </div>
            <div className={style.line}></div>
            <div className={style.filters}>
                <Filter onFilterChange={() => setPage(1)} />
            </div>
            <div className={style.data}>
                <h3 className={style.h3}>Driver</h3>
                <div className={style.orderDesktop}>
                    <Order />
                </div>
                <h3 className={style.teams}>Teams</h3>
                <h3 className={style.nationality}>Nationality</h3>
            </div>

            <div className={style.dataOrder}>
                <Order></Order>
            </div>

            <section className={style.section}>
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
                                teams={driver.teams}
                                nationality={driver.nationality}
                                backgroundColor={backgroundColor}
                            />
                        )
                    })}
            </section>
            <div>
                <Paginated page={page} setPage={setPage} max={max} />
            </div>
        </div>
    )

}

export default CardsContainer;