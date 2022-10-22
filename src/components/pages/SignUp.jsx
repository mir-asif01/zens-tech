import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';

const SignUp = () => {
    const [accept,setAccept] = useState(false)
    const {setUser,signUpNewUser,updateDisplayName} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleFormSubmit=(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        signUpNewUser(email,password)
        .then((result)=>{
            const user= result.user;
            updateDisplayName(name)
            .then(()=>{
                console.log('name updated')
            })
            .catch(()=>{
                console.log('errorrr')
            })
            setUser(user)
            navigate('/')
        })
        .catch((error)=>{
            console.log(error)
        })
        form.reset()
    }

    return (
        <div>
            <h1 className='text-3xl text-center py-7 font-bold text-purple-500'>Create Account </h1>
            <div className='shadow-lg shadow-purple-300 w-1/3 mx-auto py-7 px-7 text-center rounded-lg'>
                <form onSubmit={handleFormSubmit}>
                    <div className='my-5'>
                        <p>Name</p>
                        <input type="text" className='py-2 px-1 w-full border border-gray-300 rounded-md' name='name' placeholder='Name' />
                    </div>
                    <div className='my-5'>
                        <p>E-mail</p>
                        <input type="text" className='py-2 px-1 w-full border border-gray-300 rounded-md' name='email' placeholder='Email' />
                    </div>
                    <div className='my-5'>
                        <p>Password</p>
                        <input type="password" className='py-2 px-1 w-full border border-gray-300 rounded-md' name='password' placeholder='Password' />
                    </div>
                    <p>Already Have an Account?<Link to='/login' className='text-blue-700 underline'>Login</Link></p>
                    <p onClick={()=>setAccept(!accept)}><input type="checkbox" />Accept all of our buisness terms?</p>
                   {
                    accept ?  <button className='bg-purple-500 py-3 px-3 mx-1 text-white font-semibold rounded-sm w-full my-2' type='submit'>Sign Up</button> : 'Accept Terms to Proceed.'
                   }
                </form>
            </div>
        </div>
    );
};

export default SignUp;