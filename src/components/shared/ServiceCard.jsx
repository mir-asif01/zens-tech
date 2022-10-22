import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {name,id,img,price} = service
    return (
        <div className='h-1/4 p-2'>
            <img src={img} alt="" className='w-full h-48 rounded-md'/>
            <h1 className='my-1'>{name}</h1>
            <h1 className='my-1'>Price : ${price}</h1>
            <Link to={`/services/${id}`} className='py-1 px-4 bg-violet-500 text-white font-semibold'>Proceed Now</Link>
        </div>
    );
};

export default ServiceCard;