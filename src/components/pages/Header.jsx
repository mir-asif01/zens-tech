// import { useContext } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import {FaUserCircle} from 'react-icons/fa'

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut =()=>{
        logOut()
        .then(()=>{
            navigate('/')
        })
        .catch(()=>{
            console.log('log out error...')
        })
    }
    return (
        <div>
            <nav className=' flex justify-between items-center py-3 px-2 md:px-10'>
                <div>
                    <Link to='/'>
                    <img src="https://st3.depositphotos.com/7109552/12923/v/450/depositphotos_129233500-stock-illustration-hand-drawn-zen-brush-vector.jpg" className="h-14 w-14 rounded-full" alt="" /></Link>
                </div>
                <div>

                    {
                        user?.uid ? <div className="flex justify-center items-center">
                        <Link to='/' className="mx-2 focus:underline rounded-sm text-gray-600">Home</Link>
                        <Link to='/orders' className="mx-2 focus:underline rounded-sm text-gray-600">Orders</Link>
                        <Link to='/profile' className="bg-purple-500 p-2 mx-1 text-white font-semibold rounded-full"><FaUserCircle className="h-5 w-5"/></Link>
                        <Link className='bg-purple-500 py-1 px-3 mx-1 text-white font-semibold rounded-sm'><button onClick={handleLogOut}>Log Out</button></Link>
                        </div> : 
                        <>
                        <Link to='login' className='bg-purple-500 py-1 px-3 mx-1 text-white font-semibold rounded-sm'>Login</Link>
                        <Link to='signup' className='bg-purple-500 py-1 px-3 mx-1 text-white font-semibold rounded-sm'>Sign Up</Link>
                        </>
                    }
                    {/* <Link to='/login' className='bg-purple-500 py-2 px-3 mx-1 text-white font-semibold rounded-sm'>Login</Link>
                    <Link to='signup' className='bg-purple-500 py-2 px-3 mx-1 text-white font-semibold rounded-sm'>Sign Up</Link>
                    <Link className='bg-purple-500 py-2 px-3 mx-1 text-white font-semibold rounded-sm'><button>Log Out</button></Link> */}
                </div>
            </nav>
        </div>
    );
};

export default Header;