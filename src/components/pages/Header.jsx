// import { useContext } from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { FaUserCircle, FaBars } from 'react-icons/fa'
import { Navbar } from "flowbite-react";

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(() => {
                console.log('log out error...')
            })
    }
    return (
        <div>
                <Navbar className="" fluid={true} rounded={true}>
               
                    <Navbar.Brand>
                    <Link to='/'>
                        <img src="https://st3.depositphotos.com/7109552/12923/v/450/depositphotos_129233500-stock-illustration-hand-drawn-zen-brush-vector.jpg" className="h-14 w-14 rounded-full" alt="" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Link to='/' className="text-base">
                        <Navbar.Link>
                            Home
                        </Navbar.Link>
                        </Link>

                        <Link to="/orders" className="text-base">
                        <Navbar.Link>
                            Orders
                        </Navbar.Link></Link>

                       <Link to="/profile" className="text-base">
                       <Navbar.Link >
                            Profile
                        </Navbar.Link>
                       </Link>

                        {
                            user?.uid ? <><Link className="text-base">
                            <Navbar.Link className=' font-semibold rounded-sm'><button onClick={handleLogOut}>Log Out</button></Navbar.Link></Link></> : <><Link to="/login" className="text-base">
                        <Navbar.Link>
                            Login
                        </Navbar.Link>
                        </Link>

                        <Link to="/signup" className="text-base">
                        <Navbar.Link >
                            Sign Up
                        </Navbar.Link>
                        </Link>
</>
                        }
                        {/* <Link to="/login" className="text-base">
                        <Navbar.Link>
                            Login
                        </Navbar.Link>
                        </Link>

                        <Link to="/signup" className="text-base">
                        <Navbar.Link >
                            Sign Up
                        </Navbar.Link>
                        </Link>

                        <Link className="text-base">
                        <Navbar.Link className=' font-semibold rounded-sm'><button onClick={handleLogOut}>Log Out</button></Navbar.Link></Link> */}
                    </Navbar.Collapse>
                
                </Navbar>
        </div>
    );
};

export default Header;