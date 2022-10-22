import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1 className='text-4xl text-red-500 py-5'>404 page not found!!</h1>
            <Link to='/' className='text-blue-500 underline'>Go To Home</Link>
        </div>
    );
};

export default Error;