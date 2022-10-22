import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../shared/ServiceCard';

const Home = () => {
    const services = useLoaderData();
    return (
        <div className='p-2'>
            <div>
                <h1 className='text-2xl text-center'>Welcome to Zens official website.</h1>
            </div>
            <h1 className='border border-gray-200 py-2 px-3 md:w-1/4 mb-5'>{services.length} services available</h1>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    services.map(service=><ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Home;