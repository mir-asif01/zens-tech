// import { useContext } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
// import { AuthContext } from "../../Auth/AuthProvider";

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
            <nav className='shadow-sm shadow-gray-100 flex justify-between items-center py-3 px-2 md:px-10'>
                <div>
                    <h1 className='text-4xl'><Link to='/'><span className='text-purple-600 italic font-bold'>Zens</span></Link></h1>
                </div>
                <div>
                    {
                        user?.uid ? <div className="flex justify-center items-center">
                        <Link to='/profile' className="bg-purple-500 py-2 px-3 mx-1 text-white font-semibold rounded-sm">Profile</Link>
                        <Link className='bg-purple-500 py-2 px-3 mx-1 text-white font-semibold rounded-sm'><button onClick={handleLogOut}>Log Out</button></Link>
                        </div> : 
                        <>
                        <Link to='login' className='bg-purple-500 py-2 px-3 mx-1 text-white font-semibold rounded-sm'>Login</Link>
                        <Link to='signup' className='bg-purple-500 py-2 px-3 mx-1 text-white font-semibold rounded-sm'>Sign Up</Link>
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