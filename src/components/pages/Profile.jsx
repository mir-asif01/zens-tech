import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='mt-6'> 
            <h1 className='text-center text-2xl text-purple-500 font-semibold'>{user?.displayName}</h1>
            {/* <input type="date" /> */}
        </div>
    );
};

export default Profile;