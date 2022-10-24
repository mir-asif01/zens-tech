import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import Order from './Order';

const Orders = () => {

    const { orders } = useContext(AuthContext);

    return (
        <div className=''>
            <div className='w-full p-2 mx-auto md:w-72'>
                <h1 className='text-xl text-gray-600'>{orders.length} in your cart</h1>
                <div>
                    {orders.map(order => <Order key={order.id} order={order}></Order>)}
                </div>
            </div>
        </div>
    );
};

export default Orders;