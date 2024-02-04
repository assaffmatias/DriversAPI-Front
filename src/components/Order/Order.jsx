import style from './Order.module.css'
import { useDispatch } from 'react-redux';
import { orderDrivers } from '../../redux/actions';
import { useState } from 'react';

const Order = () => {
    const dispatch = useDispatch();
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleOrder = (value) => {
        // const value = event.target.value;
        setSelectedOrder(value)
        dispatch(orderDrivers(value));
    };

    return (
        <>
            <div className={style.input}>
                {/* <button className={`${style.value} ${selectedOrder === 'default' && style.selected}`} onClick={() => handleOrder("default")}>None</button> */}
                <button className={`${style.value} ${selectedOrder === 'nameUpward' && style.selected}`} onClick={() => handleOrder("nameUpward")}>Name ↑</button>
                <button className={`${style.value} ${selectedOrder === 'nameFalling' && style.selected}`} onClick={() => handleOrder("nameFalling")}>Name ↓</button>
                <button className={`${style.value} ${selectedOrder === 'dobUpward' && style.selected}`} onClick={() => handleOrder("dobUpward")}>DOB ↑</button>
                <button className={`${style.value} ${selectedOrder === 'dobFalling' && style.selected}`} onClick={() => handleOrder("dobFalling")}>DOB ↓</button>
            </div>
        </>
    )
}

export default Order;