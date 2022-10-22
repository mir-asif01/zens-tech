import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <h1>This is Home.</h1>
            <h1>{services.length} services available</h1>
        </div>
    );
};

export default Home;