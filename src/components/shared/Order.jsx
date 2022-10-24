import React, { useContext } from 'react';
import {FaTrash,FaArrowRight} from 'react-icons/fa'
import { AuthContext } from '../../Auth/AuthProvider';

const Order = ({order}) => {
    const {name,id,img,price} = order
    const {orders,setOrders} = useContext(AuthContext);

    const removeBtn =(id)=>{
        let filteredOrders = orders.filter(od=> od.id !== id);
        setOrders(filteredOrders)
    }

    return (
        <div className='p-1 border border-gray-200 rounded-md' >
            <img src={img} alt="" className='w-full rounded-md'/>
            <div>
                <h1 className='text-xl'>{name}</h1>
                <h1 className='text-xl'>${price}</h1>
            </div>
            <div className='flex justify-evenly items-center my-3'>
                <button className='bg-violet-500 py-1 px-3 text-white font-semibold rounded-sm flex items-center'><FaArrowRight className='mx-1'></FaArrowRight>Place Order</button>
                <button onClick={()=>removeBtn(id)} className='bg-rose-500 py-1 px-3 text-white font-semibold rounded-sm flex items-center'><FaTrash className='mx-1 h-4 w-4'></FaTrash>Remove</button>
            </div>
        </div>
    );
};

export default Order;