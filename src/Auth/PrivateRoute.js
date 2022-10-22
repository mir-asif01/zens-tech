import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation()

    if(user){
        return children
    }
    else{
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
};

export default PrivateRoute;