import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='position relative'>
            <nav className='shadow-sm shadow-gray-100 flex justify-between items-center py-5 px-10'>
                <div>
                    <h1 className='text-4xl'><Link to='/'><span className='text-purple-600 italic font-bold'>Zens</span></Link></h1>
                </div>
                <div>
                    <Link to='/login' className='bg-purple-500 py-2 px-3 mx-1 text-white font-semibold rounded-sm'>Login</Link>
                    <Link to='signup' className='bg-purple-500 py-2 px-3 mx-1 text-white font-semibold rounded-sm'>Sign Up</Link>
                    <Link className='bg-purple-500 py-2 px-3 mx-1 text-white font-semibold rounded-sm'><button>Log Out</button></Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;<h1>this is header.</h1>