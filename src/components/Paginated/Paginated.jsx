import React, { useState, useEffect } from "react";
import style from "./Paginated.module.css";

const Paginated = ({ page, setPage, max }) => {

    const [input, setInput] = useState(1);

    useEffect(() => {
        // Actualizar el estado local del input cuando cambia la página
        setInput(page);
    }, [page]);

    const nextPage = () => {
        if (page < max) {
            setPage((prevPage) => prevPage + 1);
            setInput((prevInput) => prevInput + 1);
            // Desplazar el scroll hacia arriba
            // window.scrollTo(0, 250);
        }
    };

    const prevPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
            setInput((prevInput) => prevInput - 1);
            // Desplazar el scroll hacia arriba
            // window.scrollTo(0, 250);
        }
    };


    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            const newPage = parseInt(e.target.value);
            if (newPage >= 1 && newPage <= max && !isNaN(newPage)) {
                setPage(newPage);
                setInput(newPage);
                // Desplazar el scroll hacia arriba
                window.scrollTo(0, 100);
            } else {
                setPage(1);
                setInput(1);
                // Desplazar el scroll hacia arriba
                window.scrollTo(0, 100);
            }
        }
    };

    const onChange = e => {
        setInput(e.target.value);
    };

    return (
        <div className={style.container}>
            <div className={style.buttonContainer}>
                <button className={style.buttonPrev} disabled={page === 1} onClick={prevPage}>
                    <svg className={style.svg} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" />
                    </svg>

                </button>
                {/* <input
                    className={style.input}
                    onChange={e => onChange(e)}
                    onKeyDown={e => onKeyDown(e)}
                    name="page"
                    autoComplete="off"
                    value={input}
                /> */}
                <p className={style.p}> {input} of {max} </p>
                <button className={style.buttonNext} onClick={nextPage} disabled={page === max}>
                    <svg className={style.svg} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default Paginated
