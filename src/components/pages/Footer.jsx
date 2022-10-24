import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import MyComponent from './MyComponent';


const Footer = () => {


    return (
        <div className='bg-slate-700 text-white py-2 px-7 '>
            <div className='flex flex-col md:flex-row justify-evenly'>
                <div className='text-left'>
                    <h1 className='text-xl'>About Us</h1>
                    <div className='text-gray-400 text-sm'>
                        <p>What Services We Provide?</p>
                        <p>About Our Employees</p>
                        <p>ABC St,House No-1022,Floor-3rd</p>
                        <p>Dhaka,Bangladesh</p>
                    </div>
                </div>
                <div className='text-left'>
                    <h1 className='text-xl'>Social Networks</h1>
                    <div className='text-gray-400'>
                        <p className='flex items-center cursor-pointer'><FaFacebook className='mx-1 text-blue-500'></FaFacebook>Facebook</p>
                        <p className='flex items-center cursor-pointer'><FaInstagram className='mx-1 text-blue-500'></FaInstagram>Instagram</p>
                        <p className='flex items-center cursor-pointer'><FaTwitter className='mx-1 text-blue-500'></FaTwitter>Twitter</p>
                        <p className='flex items-center cursor-pointer'><FaLinkedin className='mx-1 text-blue-500'></FaLinkedin>Linkedin</p>

                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-xl text-center'>Find Our Office on Google Map</h1>
                <div className='flex items-center justify-center my-5'>
                    <MyComponent></MyComponent>
                </div>
            </div>
            <h1 className='text-sm text-center'>Developed By Asif</h1>
        </div>
    );
};

export default Footer;