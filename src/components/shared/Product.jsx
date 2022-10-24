import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';

const Product = () => {
    const product = useLoaderData();
    const { img, id, name, description , price} = product

    const {orders,setOrders} = useContext(AuthContext);

    const handleTakeService=(product)=>{
        const duplicate = orders.find(od=>od.id === id)
        if(duplicate){
            alert('product already added')
            return ;
        }
        if(orders){
            let newOrders = [...orders,product];
            setOrders(newOrders);
        }
        else{
            setOrders(product)
        }
    }


    return (
        <div className='w-full md:w-2/4 mx-auto my-3'>
            <h1 className='text-4xl underline text-center'>Service Review</h1>
            <div className='p-2 flex flex-col justify-center items-center shadow-sm shadow-gray-300'>
                <img src={img} alt="" />
                <h2 className='text-2xl my-2'>{name}, one of the well known digital Services.</h2>
                <p>{description}</p>
                <p className='border border-gray-300 py-2 px-3 text-xl'>We offer quality {name} service with
                costing only  $<span className='text-violet-600 font-bold'>{price}</span></p>
            </div>
            <div className='flex flex-col'>
            <button onClick={()=>handleTakeService(product)} className='bg-purple-500 py-2 px-5 text-white font-semibold'>Take This Service</button>
            <Link to='/' className='text-xl text-blue-800 underline text-center my-5'>Back To Home</Link>
            </div>
        </div>
    );
};

export default Product;