import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';

const Login = () => {

    const {loginUser} = useContext(AuthContext);
    const [accept,setAccept] = useState(false)
    const navigate = useNavigate()
    const handleFormSubmit=(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email,password)
        .then((result)=>{
            navigate('/')
        })
        .catch(()=>{
            console.log('errooorr')
        })
        
        form.reset()
    }

    return (
        <div>
            <h1 className='text-3xl text-center py-7 font-bold text-purple-500'>Please Login !!</h1>
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
                    <p onClick={()=>setAccept(!accept)}><input type="checkbox" />Accept all of our buisness terms?</p>
                   {
                    accept ?  <button className='bg-purple-500 py-3 px-3 mx-1 text-white font-semibold rounded-sm w-full my-2'>Login</button> : 'Accept Terms to Proceed.'
                   }
                </form>
            </div>
        </div>
    );
};

export default Login;