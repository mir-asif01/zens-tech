import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Product = () => {
    const product = useLoaderData();
    console.log(product)
    const { img, id, name, description , price} = product
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
            <Link to='/' className='text-xl text-blue-800 underline text-center my-5'>Back To Home</Link>
        </div>
    );
};

export default Product;