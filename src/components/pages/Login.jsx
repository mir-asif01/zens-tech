import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import {FaGoogle,FaFacebook} from 'react-icons/fa';


const Login = () => {

    const {loginUser} = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    const handleFormSubmit=(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email,password)
        .then(()=>{
            navigate(from,{replace:true});
        })
        
        form.reset()
    }

    

    return (
        <div>
            <h1 className='text-3xl text-center my-3 font-bold text-purple-500'>Please Login !!</h1>
            <div className='shadow-lg shadow-purple-300 w-full md:w-1/3 mx-auto py-7 px-7 text-center rounded-lg'>
                <form onSubmit={handleFormSubmit}>
                    <div className='my-5'>
                        <p>E-mail</p>
                        <input type="text" className='py-2 px-1 w-full border border-gray-300 rounded-md' name='email' placeholder='Email' />
                    </div>
                    <div className='my-5'>
                        <p>Password</p>
                        <input type="password" className='py-2 px-1 w-full border border-gray-300 rounded-md' name='password' placeholder='Password' />
                    </div>
                    <p>Don't Have an Account?<Link to='/signup' className='text-blue-700 underline'>Sign Up</Link></p>
                   
                   <button className='bg-purple-500 py-3 px-3 mx-1 text-white font-semibold rounded-sm w-full my-2'>Login</button>
                   
                </form>
                <hr className='my-3'/>
                <div>
                    <h1 className='text-xl my-2 underline'>Login With</h1>
                    <button className='text-blue-700'><FaGoogle className='h-7 w-7 mx-2'/></button>
                    <button className='text-blue-700'><FaFacebook className='h-7 w-7 mx-2'/></button>
                </div>
            </div>
        </div>
    );
};

export default Login;