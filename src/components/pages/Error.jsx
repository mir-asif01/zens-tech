import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1>404 page not found!!</h1>
            <Link to='/'>Go To Home</Link>
        </div>
    );
};

export default Error;